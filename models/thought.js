const { Schema, model, Types } = require('mongoose');

thoughtText: {
    String
    required
    minlenght
    maxlenght

},
creratedAt: {
    Date
    Date.now
    getter method to format the timestamp on query
},
username: {
    String
    required
},
reactions: {
    [nesteddocuments]
}