const Airtable = require('airtable');

const base = new Airtable({ apiKey: process.env.API_KEY }).base(
  process.env.BASE_ID
);

const rooftopTableBase = base('Rooftops');
const carsTableBase = base('Cars');
const brandsTableBase = base('Car Brands');
const dealersTableBase = base('Dealership Groups');
const leadTableBase = base('Leads');

const getMinifiedRecord = (record) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

const minifyRecords = (records) => {
  return records.map((record) => getMinifiedRecord(record));
};

export {
  carsTableBase,
  minifyRecords,
  getMinifiedRecord,
  brandsTableBase,
  dealersTableBase,
  rooftopTableBase,
  leadTableBase,
};
