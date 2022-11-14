const { Schema, model, Types } = require('mongoose');

const nesteddocuments = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdtime => moment(createdtime).format("MMM DD, YYYY [at] hh:mm a")
        }
    }
)


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
            get: createdtime => SVGAnimateMotionElement(createdtime).format("MMM DD, YYYY [at] hh:mm a"),
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