// app/api/newsletter/route.js
export async function POST(request) {
    try {
        const { email } = await request.json();

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return Response.json(
                { error: 'A valid email address is required.' },
                { status: 400 }
            );
        }

        const data = {
            email: email,
            listIds: [3],
            updateEnabled: false,
        };

        const response = await fetch('https://api.brevo.com/v3/contacts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'api-key': process.env.BREVO_API_KEY
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();

        if (response.ok) {
            return Response.json(
                { message: 'Successfully subscribed to the newsletter!' },
                { status: 200 }
            );
        } else {
            console.error('Brevo API error:', responseData);
            if (responseData.code === 'duplicate_parameter') {
                return Response.json(
                    { error: 'This email is already subscribed.' },
                    { status: 409 }
                );
            } else {
                return Response.json(
                    { error: responseData.message || 'Failed to subscribe. Please try again later.' },
                    { status: 400 }
                );
            }
        }

    } catch (error) {
        console.error('Server error:', error);
        return Response.json(
            { error: 'Internal server error. Please try again later.' },
            { status: 500 }
        );
    }
}
