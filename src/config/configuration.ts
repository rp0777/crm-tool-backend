export default () => ({
  port: process.env.PORT || 7778,
  corsEnabled: process.env.CORS_ENABLED === 'true' || false,
  dbUrl: process.env.MONGODB_URI,
});
