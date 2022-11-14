const { connect, connection } = require('mongoose');

const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/thoughtDB';

// Wrap Mongoose around local connection to MongoDB
connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Export connection
module.exports = connection;