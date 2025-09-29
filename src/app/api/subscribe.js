import fetch from 'node-fetch';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed. Please use POST.' });
    }

    const { email } = req.body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: 'A valid email address is required.' });
    }

    const data = {
        email: email,
        listIds: [3],
        updateEnabled: false,
    };

    try {

        const response = await fetch('https://api.brevo.com/v3/contacts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'api-key': process.env.BREVO_API_KEY || 'YOUR_BREVO_API_KEY'
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();


        if (response.ok) {
            res.status(200).json({ message: 'Successfully subscribed to the newsletter!' });
        } else {
            console.error('Brevo API error:', responseData);
            if (responseData.code === 'duplicate_parameter') {
                res.status(409).json({ error: 'This email is already subscribed.' });
            } else {
                res.status(400).json({ error: responseData.message || 'Failed to subscribe. Please try again later.' });
            }
        }

    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: 'Internal server error. Please try again later.' });
    }
}