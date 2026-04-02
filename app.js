const password = process.env.ADMIN_PASSWORD;
const apiKey = process.env.API_KEY;
const db = require('mongodb');
const mongoSanitize = require('express-mongo-sanitize');
const sanitize = mongoSanitize();
const req = sanitize(req);
db.collection.find({user: req.body.username});
const secret = process.env.SECRET_KEY;