// Lab: Using the $out Stage in a MongoDB Aggregation Pipeline

/*
Lab Instructions
Using the mongosh tab, write and execute an aggregation pipeline using the .aggregate() method that has the following two stages:

A $match stage that filters by matching records of sightings that took place in 2022

An $out stage that outputs the filtered data to a new collection with the name sightings_2022.


After executing the aggregation pipeline, run db.sightings_2022.find() to see if the new collection was created!
*/

db.sightings.aggregate([
  { $match: { date: { $gte: ISODate("2022-01-01T00:00:00.0Z"), $lt: ISODate("2023-01-01T00:00:00.0Z") } } },
  { $out: 'sightings_2022' }
])
