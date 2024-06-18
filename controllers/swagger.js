const swaggerAutogen = require("swagger-autogen");

const definition ={
    swagger: "2.0",
    info: {
        "description": "Create a new Swagger file and add documentation for each route you see there. There are many ways to do this. Generate a visual UI and living documentation of your swagger.json.\n",
        "version": "1.0.0",
        "title": "Documentation to an API"
    },
    host: "yesfood.onrender.com",
    schemes: ["https", "http"],
}

const swaggerDocument = "./json/swagger.json";
const route = ["./routes/index.js"]; 
swaggerAutogen(swaggerDocument, route, definition);
