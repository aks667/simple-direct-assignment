const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BACKEND_URL': prod ? 'YOUR_PRODUCTION_URL' : 'http://localhost:3000/api'
};
