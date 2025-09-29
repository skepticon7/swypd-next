import fetch from 'node-fetch';

export default async function handler(req, res) {


    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed. Use POST.' });
    }

    try {
        const { name, email, message , service } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required.' });
        }


        const brevoData = {
            sender: {
                name: `${name} (via SWYPD Website)`,
                email: 'contact@swypdmedia.com',
            },
            to: [{
                email: 'contact@swypdmedia.com',
                name: 'SWYPD Media Team',
            }],
            replyTo: {
                email: email,
                name: name
            },
            subject: `New Contact Form Message from ${name}`,
            htmlContent: `
        <h3>New message from your website:</h3>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Service :</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        
        <br>
        <p><em>This message was sent from the contact form on your website.</em></p>
      `
        };

        const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'api-key': process.env.BREVO_API_KEY,
                'content-type': 'application/json',
            },
            body: JSON.stringify(brevoData),
        });

        if (!brevoResponse.ok) {
            const errorData = await brevoResponse.json();
            console.error('Brevo API Error:', errorData);
            return res.status(500).json({ error: 'Failed to send message.' });
        }
        res.status(200).json({ message: 'Message sent successfully!' });

    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
}