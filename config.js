var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/vpapp', {useNewUrlParser: true})
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);