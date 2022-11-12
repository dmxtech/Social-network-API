const { Schema, model } = require('mongoose');



username: {
    String
    unique
    required
    trim

},
email: {
    String
    required
    unique
    match

},
thoughts: {
    ref: user

},
friends: {
    ref: thought

},