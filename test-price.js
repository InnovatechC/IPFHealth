require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

(async () => {
    try {
        const price = await stripe.prices.retrieve('price_1QgCzgJfmGHXLAv14AklEMyU'); // Replace with correct Price ID
        console.log('Price Retrieved:', price);
    } catch (error) {
        console.error('Error:', error);
    }
})();
