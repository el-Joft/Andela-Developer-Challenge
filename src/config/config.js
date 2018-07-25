module.exports = {
  secret: process.env.JWT_SERCRET || '3c4d6ee9b1a6904205d2249fcefbef02e350b851',
  validity: process.env.TOKEN_VALIDITY || 86400, // expires in 24 hours,
  nodeEnv: process.env.NODE_ENV || 'dev',
  cors: {
    origins: '*',
    methods: '*',
    allowedHeaders: '*',
    exposedHeaders: 'X-Access-Token',
    credentials: true,
    maxAge: 1800,
    securityOption: {
      permitAll: ['/api/v1/account/register*', '/api/v1/authenticate'],
      authenticated: ['/api/v1/**'],
    },
  },
};