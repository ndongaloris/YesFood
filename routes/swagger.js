const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../json/swagger.json")

const app = require("express").Router();

app.use("/api-docs", swaggerUi.serve)
app.get("/api-docs", swaggerUi.setup(swaggerDocument));

module.exports = app;
