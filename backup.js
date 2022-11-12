app.locals.users = [
  {
    userId: 1,
    name: 'Emily Miles',
    address: '123 Cove Street, Bar Harbor, ME, 98765',
    email: 'ijustreallylovecats@crazycatlady.com',
    phone: '(987)654-3210',
    pets: [
      {
        petId: 1,
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
              dxDate: '6/10/2022',
              condition: 'Behavior Inappropriate Elimination',
              links: '',
            }
          ],
          vxs: [
            {
              received: '6/1/2021',
              dueNext: '6/29/2021',
              type: 'FVRCP (Distemper) series #1',
            },
            {
              received: '6/29/2021',
              dueNext: '7/27/2021',
              type: 'FVRCP (Distemper) series #2',
            },
            {
              received: '6/29/2021',
              dueNext: '6/29/2022',
              type: 'Rabies (PureVax) 1 yr',
            },
            {
              received: '7/27/2021',
              dueNext: '6/29/2021',
              type: 'FVRCP (Distemper) series #3',
            },
            {
              received: '9/27/2021',
              dueNext: '3/27/2022',
              type: 'FVRCP (Distemper) 6 month',
            },
            {
              received: '9/27/2021',
              dueNext: '3/27/2022',
              type: 'FeLV series',
            },
            {
              received: '10/25/2021',
              dueNext: '10/25/2022',
              type: 'FeLV series',
            },
            {
              received: '5/1/2022',
              dueNext: '5/1/2025',
              type: 'FVRCP (Distemper) 3 yr',
            },
            {
              received: '5/1/2022',
              dueNext: '5/1/2023',
              type: 'Rabies (PureVax) 1 yr',
            },
          ],
          labs: [
            {
              received: '6/1/2021',
              dueNext: '6/1/2022',
              type: 'FeLV/FIV/HW',
              results: 'negative x 3'
            },
            {
              received: '6/1/2021',
              dueNext: '6/1/2022',
              type: 'Fecal',
              results: 'negative'
            },
            {
              received: '9/27/2021',
              dueNext: '',
              type: 'CBC/Chem - Pre-Op Bloodwork',
              results: 'normal'
            },
          ],
          exams: [
            {
              received: '6/1/2021',
              dueNext: '6/1/2022',
              type: 'Annual Exam',
            },
            {
              received: '6/29/2021',
              dueNext: '',
              type: 'Medical Progress Exam',
            },
            {
              received: '5/1/2022',
              dueNext: '5/1/2023',
              type: 'Annual Exam',
            },
            {
              received: '6/10/2022',
              dueNext: '',
              type: 'Sick Exam',
            },
          ],
          weight: [1.6, 2.3, 3.4, 4.7, 7.1, 10.5, 11.75, 13],
          appts: [],
          meds: [
            {
              name: 'Gabapentin',
              strength: '100mg',
              instructions: '1 capsule 12 hours prior to an appointment or travel, then another 2 capsules 2-3 hours prior to appointment or travel'
            },
          ],
          notes: ['Needs Gabapentin for Appointment Anxiety'],
        },
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
              dxDate: '7/1/2022',
              condition: 'Asthma',
              links: '',
            },
          ],
          vxs: [
            {
              received: '9/12/2021',
              dueNext: '10/12/2021',
              type: 'FVRCP (Distemper) series #1',
            },
            {
              received: '10/12/2021',
              dueNext: '11/11/2021',
              type: 'FVRCP (Distemper) series #2',
            },
            {
              received: '10/12/2021',
              dueNext: '11/11/2021',
              type: 'Rabies (PureVax) 1 yr',
            },
            {
              received: '11/11/2021',
              dueNext: '1/11/2021',
              type: 'FVRCP (Distemper) series #3',
            },
            {
              received: '1/11/2021',
              dueNext: '4/11/2022',
              type: 'FVRCP (Distemper) 6 month',
            },
            {
              received: '1/11/2021',
              dueNext: '4/11/2022',
              type: 'FeLV series',
            },
            {
              received: '2/10/2021',
              dueNext: '2/10/2022',
              type: 'FeLV series',
            },
            {
              received: '5/1/2022',
              dueNext: '5/1/2025',
              type: 'FVRCP (Distemper) 3 yr',
            },
            {
              received: '5/1/2022',
              dueNext: '5/1/2023',
              type: 'Rabies (PureVax) 1 yr',
            },
          ],
          labs: [
            {
              received: '9/12/2021',
              dueNext: '10/12/2021',
              type: 'FeLV/FIV/HW',
              results: 'negative x 3'
            },
            {
              received: '9/12/2021',
              dueNext: '10/12/2021',
              type: 'Fecal',
              results: 'negative'
            },
            {
              received: '1/11/2021',
              dueNext: '',
              type: 'CBC/Chem - Pre-Op Bloodwork',
              results: 'normal'
            },
          ],
          exams: [
            {
              received: '9/12/2021',
              dueNext: '10/12/2021',
              type: 'Annual Exam',
            },
            {
              received: '10/12/2021',
              dueNext: '',
              type: 'Medical Progress Exam',
            },
            {
              received: '5/1/2022',
              dueNext: '5/1/2023',
              type: 'Annual Exam',
            },
            {
              received: '7/1/2022',
              dueNext: '',
              type: 'Sick Exam',
            },
          ],
          other: [
            {
              received: '9/12/2021',
              dueNext: '',
              type: 'Nail trim',
            },
            {
              received: '11/11/2021',
              dueNext: '',
              type: 'Nail trim',
            },
            {
              received: '1/11/2021',
              dueNext: '',
              type: 'Nail trim',
            },
            {
              received: '5/1/2022',
              dueNext: '',
              type: 'Nail trim',
            },
            {
              received: '7/1/2022',
              dueNext: '',
              type: 'Nail trim',
            },
          ],
          weight: [2.2, 3.6, 4.3, 6.5, 8, 9.25, 10, 11.75],
          appts: [],
          meds: [
            {
              name: 'Gabapentin',
              strength: '100mg',
              instructions: '1 capsule 12 hours prior to an appointment or travel, then another 2 capsules 2-3 hours prior to appointment or travel'
            },
            {
              name: 'Gabapentin',
              strength: '100mg',
              instructions: '1 capsule 12 hours prior to an appointment or travel, then another 2 capsules 2-3 hours prior to appointment or travel'
            },
          ],
          alerts: ['Polydactyl', 'Needs Gabapentin for Appointment Anxiety'],
          notes: ['Light restraint only, panics easily'],
        }
      },
    ]
  },
];

// {
//   userId: 2,
//   name: 'Debbie Aiken',
//   address: '987 Mabon Lane, Sandy Hook, CT, 01234',
//   email: 'cantstopwontstop@crazyplantlady.com',
//   phone: '(987)312-0465',
//   pets: [
//     {
//       petId: 3,
//       image: '',
//       name: 'Diesel',
//       type: 'Canine',
//       age: 10,
//       DOB: 'need dob',
//       breed: 'Pit Bull Mix',
//       color: 'Tan and White',
//       medHx: {
//         dxList: [
//           {
//             dxDate: '',
//             condition: '',
//             links: '',
//           },
//         ],
//         vxs: [
//           {
//             received: '',
//             dueNext: '',
//             type: '',
//           },
//         ],
//         labs: [
//           {
//             received: '',
//             dueNext: '',
//             type: '',
//           },
//         ],
//         exams: [
//           {
//             received: '',
//             dueNext: '',
//             type: '',
//           },
//         ],
//         other: [
//           {
//             received: '',
//             dueNext: '',
//             type: '',
//           },
//         ],
//       },
//       appts: [],
//       meds: [],
//       alerts: [],
//       notes: [],
//     },
//     {
//       petId: 4,
//       image: '',
//       name: 'Penny',
//       type: 'Canine',
//       age: 7,
//       DOB: 'need dob',
//       breed: 'Duck Tolling Retriever Mix',
//       color: 'Copper',
//       medHx: {
//         dxList: [
//           {
//             dxDate: '',
//             condition: '',
//             links: '',
//           },
//         ],
//         vxs: [
//           {
//             received: '',
//             dueNext: '',
//             type: '',
//           },
//         ],
//         labs: [
//           {
//             received: '',
//             dueNext: '',
//             type: '',
//           },
//         ],
//         exams: [
//           {
//             received: '',
//             dueNext: '',
//             type: '',
//           },
//         ],
//         other: [
//           {
//             received: '',
//             dueNext: '',
//             type: '',
//           },
//         ],
//       },
//       appts: [],
//       meds: [],
//       alerts: [],
//       notes: [],
//     },
//   ]
// },
// {
//   userId: 3,
//   name: 'Robert Andrew',
//   address: '456 Park Avenue, Aurora, C0, 65490',
//   email: 'ibuildthings@musicislife.com',
//   phone: '(201)975-3468',
//   pets: [
//     {
//       id: 5,
//       image: '',
//       name: 'Beto',
//       type: 'Canine',
//       age: 2,
//       DOB: 'need dob',
//       breed: 'Pit Bull Mix',
//       color: 'Tan and White',
//       medHx: {
//         dxList: [
//           {
//             dxDate: '',
//             condition: '',
//             links: '',
//           }
//         ],
//         vxs: [
//           {
//             received: '',
//             dueNext: '',
//             type: '',
//           },
//         ],
//         labs: [
//           {
//             received: '',
//             dueNext: '',
//             type: '',
//           },
//         ],
//         exams: [
//           {
//             received: '',
//             dueNext: '',
//             type: '',
//           },
//         ],
//         other: [
//           {
//             received: '',
//             dueNext: '',
//             type: '',
//           }
//         ],
//       },
//       appts: [],
//       meds: [],
//       alerts: [],
//       notes: [],
//     },
//   ]
// },
// {
//   userId: 4,
//   name: 'Kathleen Lent',
//   address: '258 Sister Blvd, Sandy Hook, CT, 01234',
//   email: 'meowmeow@crazyplantlady.com',
//   phone: '',
//   pets: [
//     {
//       id: 6,
//       image: '',
//       name: 'Kesha',
//       type: 'Feline',
//       age: 'need age',
//       DOB: 'need dob',
//       breed: 'Domestic Short Hair',
//       color: 'Black',
//       medHx: {
//         dxList: [
//           {
//             dxDate: '',
//             condition: '',
//             links: '',
//           },
//         ],
//         vxs: [
//           {
//             received: '',
//             dueNext: '',
//             type: '',
//           },
//         ],
//         labs: [
//           {
//             received: '',
//             dueNext: '',
//             type: '',
//           },
//         ],
//         exams: [
//           {
//             received: '',
//             dueNext: '',
//             type: ''
//           }
//         ],
//         other: [
//           {
//             received: '',
//             dueNext: '',
//             type: '',
//           },
//         ],
//       },
//       appts: [],
//       meds: [],
//       alerts: [],
//       notes: [],
//     },
//     {
//       id: 7,
//       image: '',
//       name: 'Tyson',
//       type: 'Feline',
//       age: 'need dob',
//       DOB: 'need dob',
//       breed: 'Domestic Medium Hair',
//       color: 'Tuxedo',
//       medHx: {
//         dxList: [
//           {
//             dxDate: '',
//             condition: '',
//             links: '',
//           },
//         ],
//         vxs: [
//           {
//             received: '',
//             dueNext: '',
//             type: '',
//           },
//         ],
//         labs: [
//           {
//             received: '',
//             dueNext: '',
//             type: '',
//           },
//         ],
//         exams: [
//           {
//             received: '',
//             dueNext: '',
//             type: '',
//           },
//         ],
//         other: [
//           {
//             received: '',
//             dueNext: '',
//             type: ''
//           },
//         ],
//       },
//       appts: [],
//       meds: [],
//       alerts: [],
//       notes: [],
//     },
//   ]
// }
// {
//   id: 8,
//     image: '',
//       name: '',
//         type: '',
//           age: '',
//             DOB: '',
//               breed: '',
//                 color: '',
//                   medHx: {
//     dxList: [
//       {
//         dxDate: '',
//         condition: '',
//         links: '',
//       },
//     ],
//       vxs: [
//         {
//           received: '',
//           dueNext: '',
//           type: '',
//         },
//       ],
//         labs: [
//           {
//             received: '',
//             dueNext: '',
//             type: '',
//           },
//         ],
//           exams: [
//             {
//               received: '',
//               dueNext: '',
//               type: '',
//             },
//           ],
//             other: [
//               {
//                 received: '',
//                 dueNext: '',
//                 type: ''
//               },
//             ],
//       },
//   appts: [],
//     meds: [],
//       alerts: [],
//         notes: [],
//     },
// {
//   id: 9,
//     image: '',
//       name: '',
//         type: '',
//           age: '',
//             DOB: '',
//               breed: '',
//                 color: '',
//                   medHx: {
//     dxList: [
//       {
//         dxDate: '',
//         condition: '',
//         links: '',
//       },
//     ],
//       vxs: [
//         {
//           received: '',
//           dueNext: '',
//           type: '',
//         },
//       ],
//         labs: [
//           {
//             received: '',
//             dueNext: '',
//             type: '',
//           },
//         ],
//           exams: [
//             {
//               received: '',
//               dueNext: '',
//               type: '',
//             },
//           ],
//             other: [
//               {
//                 received: '',
//                 dueNext: '',
//                 type: ''
//               },
//             ],
//       },
//   appts: [],
//     meds: [],
//       alerts: [],
//         notes: [],
//     },
// {
//   id: 10,
//     image: '',
//       name: '',
//         type: '',
//           age: '',
//             DOB: '',
//               breed: '',
//                 color: '',
//                   medHx: {
//     dxList: [
//       {
//         dxDate: '',
//         condition: '',
//         links: '',
//       },
//     ],
//       vxs: [
//         {
//           received: '',
//           dueNext: '',
//           type: '',
//         },
//       ],
//         labs: [
//           {
//             received: '',
//             dueNext: '',
//             type: '',
//           },
//         ],
//           exams: [
//             {
//               received: '',
//               dueNext: '',
//               type: '',
//             },
//           ],
//             other: [
//               {
//                 received: '',
//                 dueNext: '',
//                 type: ''
//               },
//             ],
//       },
//   appts: [],
//     meds: [],
//       alerts: [],
//         notes: [],
//     },