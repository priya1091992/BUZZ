'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/projectapp-dev'
  },
  google: {
    clientID:     process.env.GOOGLE_ID || '173236083573-bt8uaj3nlvor1p8mn89r0dplvf0f6e10.apps.googleusercontent.com',
    clientSecret: process.env.GOOGLE_SECRET || '-CDp2ESJrCm-ox0-W_2X6MWA',
    callbackURL:  (process.env.DOMAIN || '') + '/auth/google/callback'
  },
  seedDB: false
};
