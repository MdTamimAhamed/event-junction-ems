const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const {
	notFoundHandler,
	errorHandler,
} = require('../middlewares/common/errorHandler');
const userRoutes = require('../routes/userRoutes');
const adminRoutes = require('../routes/adminRoutes');

const app = express();
dotenv.config();

//database connection
const database = mongoose
	.connect(process.env.MONGOOSE_CONNECTION_STRING)
	.then(() => {
		console.log('Database connected!');
	})
	.catch((err) => {
		console.log(err);
	});

//middlewares
app.use(express.json());
app.use(
	cors({
		origin: ['https://diu-ems-client.vercel.app', 'http://localhost:5173'],
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
		credentials: true,
		allowedHeaders: 'Content-Type, Authorization',
	})
);
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//routes
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);

//error handlers
app.use(notFoundHandler); //404 handler
app.use(errorHandler); //default error handler

//listen to port
app.listen(process.env.PORT, () => {
	console.log(`Server running on port: ${process.env.PORT}`);
});
