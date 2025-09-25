// /api/subscribe.js
import fetch from 'node-fetch'; // Remove this line if using native fetch

export default async function handler(req, res) {
    // 1. Check if the request method is POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed. Please use POST.' });
    }

    // 2. Get the email from the request body
    const { email } = req.body;

    // 3. Validate the email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: 'A valid email address is required.' });
    }

    // 4. Prepare the data for the Brevo API
    const data = {
        email: email,
        listIds: [3], // Your list ID goes here
        updateEnabled: false, // Set to true if you want to update existing contacts
    };

    try {
        // 5. Send the request to Brevo's API
        const response = await fetch('https://api.brevo.com/v3/contacts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'api-key': process.env.BREVO_API_KEY || 'YOUR_BREVO_API_KEY' // Use env var for security
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();

        // 6. Handle Brevo's response
        if (response.ok) {
            // Contact was created or updated successfully
            res.status(200).json({ message: 'Successfully subscribed to the newsletter!' });
        } else {
            // Brevo API returned an error (e.g., duplicate contact, invalid data)
            console.error('Brevo API error:', responseData);
            // Check for "duplicate parameter" error (contact already exists)
            if (responseData.code === 'duplicate_parameter') {
                res.status(409).json({ error: 'This email is already subscribed.' });
            } else {
                res.status(400).json({ error: responseData.message || 'Failed to subscribe. Please try again later.' });
            }
        }

    } catch (error) {
        // 7. Handle network errors
        console.error('Server error:', error);
        res.status(500).json({ error: 'Internal server error. Please try again later.' });
    }
}