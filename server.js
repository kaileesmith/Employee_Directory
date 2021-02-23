const express = require("express");
const app = express();


// Port for deployment and running localhost
const PORT = process.env.PORT || 3000;


// Middleware
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
require("./routes/apiRoutes")(app);


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});