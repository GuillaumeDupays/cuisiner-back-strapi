module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  baseUrl: 'http://localhost:1337',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '027f14828d1f97f7268a113e6ac8cb90'),
    },
  },
});
