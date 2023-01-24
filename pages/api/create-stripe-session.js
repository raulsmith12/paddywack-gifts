const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
    const { item } = req.body;

    const transformedItem = {
        price_data: {
            currency: 'usd',
            unit_amount: item.price,
            product_data: {
                name: item.title,
            },
        },
        quantity: 1,
    };
    
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [transformedItem],

        mode: 'payment',
        success_url: 'http://localhost:3000/shop',
        cancel_url: 'http://localhost:3000/shop',
        metadata: {
            images: item.picture,
        },
    });
    
    res.json({ id: session.id });
}