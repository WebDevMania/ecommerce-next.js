import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res){
    if(req.method === 'POST'){
        try {
            const session = await stripe.checkout.sessions.create({
                line_items: req.body.lineItems,
                mode: 'payment',
                payment_method_types: ['card'],
                success_url: 'https://ecommerce-next-js-xz5u.vercel.app/success',
                cancel_url: 'https://ecommerce-next-js-xz5u.vercel.app/'
            })

            return res.status(201).json(session)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}