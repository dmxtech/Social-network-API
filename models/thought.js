const { Schema, model, Types } = require('mongoose');
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlenght: 1,
            maxlenght: 280,

        },
        creratedAt: {
            type: Date,
            default: Date.now,
            //get:
        },
        username: {
            type: String,
            required: true,
        },
        reactions: {
            [nesteddocuments],
        },
    })
const thought = model('thought', thoughtSchema);
module.exports = thought;