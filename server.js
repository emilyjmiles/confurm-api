const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { clients } = require("./data/clients");
const { patients } = require("./data/patients");
const { appointments } = require("./data/appointments");

app.use(cors());
app.use(bodyParser.json());

app.set("port", process.env.PORT || 3001);

app.locals.title = "conFURm-Database";

app.get("/api/v1/clients", (_request, response) => {
  response.json({ clients });
});

app.get("/api/v1/patients", (_request, response) => {
  response.json({ patients });
});

app.get("/api/v1/appointments", (_request, response) => {
  response.json({ appointments });
});

app.post('/api/v1/appointments', (request, response) => {
  const newAppointment = request.body;
  const requiredParams = ['clientName', 'patientName', 'requestReason'];
  let missingParams = [];

  for (let requiredProperty of requiredParams) {
    if (newAppointment[requiredProperty] === undefined) {
      missingParams = [...missingParams, requiredProperty];
    }
  }

  if (missingParams.length) {
    return response.status(422).send({ message: `Missing ${missingParams.join(', ')} in request.` });
  } else {
    newAppointment.id = app.locals.appointments.length === 0 ? 1 : app.locals.appointments[app.locals.appointments.length - 1].id + 1;
    newAppointment.status = 'pending';
    appointments.push(newAppointment);
    return response.status(201).json(newURL);
  }
});

app.listen(app.get("port"), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get("port")}`
  );
});