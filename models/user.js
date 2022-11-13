const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {

        username: {
            type: String,
            unique: true,
            required: true,
            trim: true

        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/ ^ [\w -.] +@([\w -] +.) +[\w -]{ 2, 4 } $/]

        },
        thoughts: [
            {
                ref: 'thought',

            },
        ],
        friends: [
            {
                ref: 'user',

            },
        ],
    })

const user = model('user', userSchema);
module.exports = user;