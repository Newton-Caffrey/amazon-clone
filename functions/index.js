const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51IO6paG41revbz4H1v63OcMjJpX6qDjOggaMbGcglLaBIPbNQcm5EGJ5n6SU7XdHlo2UPn8Ij07Qz4nOWNLILCuG000JMi2QFp");

// API


// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request BOOM!! for this amount >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        corrency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
});

// Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-7b6b9/us-central1/api