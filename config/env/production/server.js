module.exports = ({ env }) => ({
  url: env("adminasmudevicsar.info"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
});