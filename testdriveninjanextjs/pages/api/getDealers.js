import { dealersTableBase } from './utils/airtable';

export default async (req, res) => {
  let dealers = [];

  try {
    // const carRecords = await dealersTableBase.select({}).firstPage();
    // res.statusCode = 200;
    // res.json(carRecords);

    const dealers = await dealersTableBase.select().firstPage();

    res.statusCode = 200;
    res.json(dealers);
  } catch (err) {
    res.statusCode = 500;
    res.json({ msg: err });
  }
};

// export default async (req, res) => {
//   let dealers = [];

//   let accumulator = [];

//   try {
//     // const carRecords = await dealersTableBase.select({}).firstPage();
//     // res.statusCode = 200;
//     // res.json(carRecords);

//     const dealers = await dealersTableBase
//       .select({
//         // Selecting the first 3 records in Grid view:
//         maxRecords: 3,
//         view: 'Grid view',
//       })
//       .eachPage(
//         async function page(records, fetchNextPage) {
//           // This function (`page`) will get called for each page of records.

//           await records.forEach(function (record) {
//             console.log('Retrieved', record.get('Name'));
//             accumulator.push(record._rawJson);
//           });

//           // To fetch the next page of records, call `fetchNextPage`.
//           // If there are more records, `page` will get called again.
//           // If there are no more records, `done` will get called.
//           fetchNextPage();
//         },
//         function done(err) {
//           if (err) {
//             console.error(err);
//             return;
//           }
//         }
//       );

//     console.log('dealers ', dealers);
//     res.statusCode = 200;
//     res.json(accumulator);
//   } catch (err) {
//     res.statusCode = 500;
//     res.json({ msg: err });
//   }
// };
