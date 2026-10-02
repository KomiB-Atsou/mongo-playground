// Lab: Using $sort and $limit Stages in a MongoDB Aggregation Pipeline

/*
Sorts the documents in the sightings collection from North to South using the location.coordinates.1 field (where the highest latitude value is the furthest North).

Limits the results to the top 4 documents.
*/

db.sightings.aggregate([
  { $sort: { 'location.coordinates.1': -1 } },
  { $limit: 4 }
]);
