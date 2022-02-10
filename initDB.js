var pgtools = require("pgtools");
const config = {
  user: "mero",
  host: "localhost",
  password: "123",
  port: 5432
};

pgtools.createdb(config, "YOUR_DEV_DATABASE_NAME", function(err, res) {
    if (err) {
        console.error(err);
        process.exit(-1);
    }
});

pgtools.createdb(config, "YOUR_TEST_DATABASE_NAME", function(err, res) {
    if (err) {
        console.error(err);
        process.exit(-1);
    }
});
