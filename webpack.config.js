const path = require('path');

module.exports = {
  entry: {
	'Home' : './javascript/Home.js',
	'insert' : './javascript/insert.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};