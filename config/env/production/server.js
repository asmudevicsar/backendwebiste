module.exports = ({ env }) => ({
  url: env("159.89.82.182"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
});