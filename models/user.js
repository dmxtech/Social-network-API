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
                type: schema.types.id,
                ref: 'thought',

            },
        ],
        friends: [
            {
                type: schema.types.id,
                ref: 'user',

            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})

const user = model('user', userSchema);
module.exports = user;