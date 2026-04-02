const password = process.env.ADMIN_PASSWORD;
const apiKey = process.env.API_KEY;
const db = require('mongodb');
const mongoSanitize = require('express-mongo-sanitize');
const sanitizedUsername = mongoSanitize(req.body.username);
db.collection.find({user: sanitizedUsername});
const secret = process.env.SECRET_KEY;