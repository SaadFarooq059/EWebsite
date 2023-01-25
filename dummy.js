require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
console.log(process.env.ADMIN_EMAIL);
