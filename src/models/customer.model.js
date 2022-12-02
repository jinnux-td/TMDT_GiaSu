const mongoose = require('mongoose');
const customerSchema = mongoose.Schema({
  user: {
    type: String,
    ref: 'User',
  },
  number_of_course: {
    type: Number,
  },
});
module.exports = mongoose.model('Customer', customerSchema);
