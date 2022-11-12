const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.set("port", process.env.PORT || 3001);

app.locals.title = "PetParents";

app.locals.users = [
  {
    userId: 1,
    name: 'Emily Miles',
    address: '123 Cove Street, Bar Harbor, ME, 98765',
    email: 'ijustreallylovecats@crazycatlady.com',
    phone: '(987)654-3210',
    pets: [
      { petId: 1 },
      { petId: 2 }
    ]
  },
];

app.get("/api/v1/users", (request, response) => {
  const users = app.locals.users;

  response.json({ users });
});

app.locals.patients = [
  {
    id: 1,
    image: 'https://i.postimg.cc/dQHttxxM/Nova.jpg',
    name: 'Nova',
    type: 'Feline',
    age: 1,
    DOB: '3/25/2021',
    breed: 'Domestic Medium Hair',
    color: 'Tortoiseshell Calico',
    sex: 'female - spayed',
    medHx: {
      dxList: [
        {
          dxId: 1,
          dxDate: '6/10/2022',
        },
      ],
      vxs: [
        {
          vxId: 1,
          received: '6/1/2021'
        },
        {
          vxId: 2,
          received: '6/29/2021',
        },
        {
          vxId: 11,
          received: '6/29/2021',
        },
        {
          vxId: 3,
          received: '7/27/2021',
        },
        {
          vxId: 4,
          received: '9/27/2021',
        },
        {
          vxId: 7,
          received: '9/27/2021',
        },
        {
          vxId: 8,
          received: '10/25/2021',
        },
        {
          vxId: 5,
          received: '5/1/2022',
        },
        {
          vxId: 11,
          received: '5/1/2022',
        },
      ],
      labs: [
        {
          labId: 1,
          received: '6/1/2021',
          results: 'negative x 3'
        },
        {
          labId: 2,
          received: '6/1/2021',
          results: 'negative'
        },
        {
          labId: 3,
          received: '9/27/2021',
          results: 'normal'
        },
      ],
      exams: [
        {
          examId: 1,
          received: '6/1/2021',
        },
        {
          examId: 2,
          received: '6/29/2021',
        },
        {
          examId: 1,
          received: '5/1/2022',
        },
        {
          examId: 3,
          received: '6/10/2022',
        },
      ],
      weight: [1.6, 2.3, 3.4, 4.7, 7.1, 10.5, 11.75, 13],
      meds: [
        {
          name: 'Gabapentin',
          strength: '100mg',
          instructions: '1 capsule 12 hours prior to an appointment or travel, then another 2 capsules 2-3 hours prior to appointment or travel'
        },
      ],
      notes: ['Needs Gabapentin for Appointment Anxiety'],
      appts: [],
    }
  },
  {
    petId: 2,
    image: 'https://i.postimg.cc/gJcmGVyk/Nebs.jpg',
    name: 'Nebula',
    type: 'Feline',
    age: 1,
    DOB: '7/12/2021',
    breed: 'Domestic Medium Hair',
    color: 'Dilute Tortoiseshell Calico',
    sex: 'female - spayed',
    medHx: {
      dxList: [
        {
          dxId: 2,
          dxDate: '7/1/2022',
        },
      ],
      vxs: [
        {
          vxId: 1,
          received: '9/12/2021',
        },
        {
          vxId: 2,
          received: '10/12/2021',
        },
        {
          vxId: 11,
          received: '10/12/2021',
        },
        {
          vxId: 3,
          received: '11/11/2021',
        },
        {
          vxId: 4,
          received: '1/11/2021',
        },
        {
          vxId: 7,
          received: '1/11/2021',
        },
        {
          vxId: 8,
          received: '2/10/2021',
        },
        {
          vxId: 5,
          received: '5/1/2022',
        },
        {
          vxId: 11,
          received: '5/1/2022',
        },
      ], labs: [
        {
          labId: 1,
          received: '9/12/2021',
          results: 'negative x 3'
        },
        {
          labId: 2,
          received: '9/12/2021',
          results: 'negative'
        },
        {
          labId: 3,
          received: '1/11/2021',
          results: 'normal'
        },
      ],
      exams: [
        {
          examId: 1,
          received: '9/12/2021',
        },
        {
          examId: 2,
          received: '10/12/2021',
        },
        {
          examId: 1,
          received: '5/1/2022',
        },
        {
          examId: 3,
          received: '7/1/2022',
        },
      ],
      weight: [2.2, 3.6, 4.3, 6.5, 8, 9.25, 10, 11.75],
      meds: [
        {
          name: 'Gabapentin',
          strength: '100mg',
          instructions: '1 capsule 12 hours prior to an appointment or travel, then another 2 capsules 2-3 hours prior to appointment or travel'
        },
        {
          name: 'Prednisolone',
          strength: '5mg',
          instructions: 'Tappered course - 1 tablet twice daily for 3 days, then 1 tablet once daily for 3 days, then 1 tablet every other day for 3 doses'
        },
      ],
      notes: ['Polydactyl', 'Needs Gabapentin for Appointment Anxiety', 'Light restraint only, panics easily'],
      appts: [],
    }
  },
];

app.get("/api/v1/patients", (request, response) => {
  const patients = app.locals.patients;

  response.json({ patients });
});

app.listen(app.get("port"), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get("port")}`
  );
});