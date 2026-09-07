/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/



// LAB : Perform CRUD Operations and Design Effective Queries

// insertOne

// Select the database to use.
use('sample_analytics');

db.accounts.insertOne(
{
  account_id: 111333,
  limit: 12000,
  products: [
    "Commodity",
    "Brokerage"
    ],
  "last_updated": new Date()
}
);

db.accounts.insertMany(
 [
   {
     "account_id": 678943,
     "limit": 8000,
     "products": [
     "CurrencyService",
     "Brokerage",
     "InvestmentStock"
     ],
     "last_updated": new Date()
   },
   {
     "account_id": 321654,
     "limit": 10000,
     "products": [
     "Commodity",
     "CurrencyService"
     ],
     "last_updated": new Date()
   }
 ]
);

// find and findOne

db.accounts.find({ _id: ObjectId("5ca4bbc7a2dd94ee581623c8")})

db.accounts.findOne({ _id: ObjectId("5ca4bbc7a2dd94ee581623c8")})

 db.birds.insertOne(
    {
  _id: ObjectId("6268413c613e55b82d7065d2"),
  common_name: 'Canada Goose',
  scientific_name: 'Branta canadensis',
  wingspan_cm: 152.4,
  habitat: 'wetlands',
  diet: [ 'grass', 'algae' ]
  },
 );

 db.birds.find({
  common_name: 'Canada Goose'
 })

 db.birds.updateOne(
  {common_name: "Canada Goose"},
  {$set: { tags: ["geese", "herbivore", "migration"] } }
)

// query again to check
 db.birds.find({
  common_name: 'Canada Goose'
 })

 list = [
  {
    _id: ObjectId('6286a5612f3fa87b7d86dcd2'),
    common_name: 'Grackle',
    scientific_name: 'Quiscalus quiscula',
    wingspan_cm: 28.04,
    habitat: 'pine trees',
    diet: [ 'insects', 'minnows', 'eggs' ],
    sightings_count: 7,
    last_seen: ISODate('2022-05-19T20:20:44.083Z')
  },
  {
    _id: ObjectId('62cddf53c1d62bc45439bebf'),
    common_name: 'Grey Catbird',
    scientific_name: 'Dumetella carolinensis',
    wingspan_cm: 26.04,
    habitat: [ 'vegetation', 'Scrublands', 'woodlands' ],
    diet: [ 'fruit', 'berries', 'worms' ],
    sightings_count: 3
  },
  {
    _id: ObjectId('628682d92f3fa87b7d86dcce'),
    common_name: 'Blue Jay',
    scientific_name: 'Cyanocitta cristata',
    wingspan_cm: 34.17,
    habitat: 'forests',
    diet: [ 'vegetables', 'nuts', 'grains' ],
    sightings_count: 4,
    last_seen: ISODate('2022-05-19T20:20:44.083Z')
  }
];

db.birds.insertMany(list);

db.birds.find({ sightings_count: { $lte: 10 } })

db.birds.deleteMany({ sightings_count: { $lte: 10 } })

// LAB MODIFY QUERY RESULTS

use('sample_supplies');

db.sales
  .find({ "items.name": { $in: ["laptop", "backpack", "printer paper"] },
          "storeLocation": "London" })
  .sort({ saleDate: -1, }).limit(3)