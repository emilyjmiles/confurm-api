const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { users } = require("./data/users");
const { patients } = require("./data/patients");
const { appointments } = require("./data/appointments");

app.use(cors());
app.use(bodyParser.json());

app.set("port", process.env.PORT || 3001);

app.locals.title = "PetParents";

app.get("/api/v1/users", (_request, response) => {
  response.json({ users });
});

app.get("/api/v1/patients", (_request, response) => {
  response.json({ patients });
});

app.get("/api/v1/appointments", (_request, response) => {
  response.json({ appointments });
});

app.post("/api/v1/appointments", (request, response) => {
  appointments.push(request.body);
  response.send({ appointments });
});

app.listen(app.get("port"), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get("port")}`
  );
});