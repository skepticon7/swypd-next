// app/api/contact/route.js
export async function POST(request) {
    try {
        const { name, email, message, service } = await request.json();

        if (!name || !email || !message) {
            return Response.json(
                { error: 'All fields are required.' },
                { status: 400 }
            );
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
        <p><strong>Service:</strong> ${service}</p>
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
            return Response.json(
                { error: 'Failed to send message.' },
                { status: 500 }
            );
        }

        return Response.json(
            { message: 'Message sent successfully!' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Server Error:', error);
        return Response.json(
            { error: 'Internal server error.' },
            { status: 500 }
        );
    }
}
