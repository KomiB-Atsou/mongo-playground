// Lab: Using $match and $group Stages in a MongoDB Aggregation Pipeline

// You can access the collection you want to use with dot notation
db.sightings

// Filter on species_common, group on location_coordinates and count
db.sightings.aggregate([
  {
    $match: {
        species_common: 'Eastern Bluebird'
    }
  }, {
    $group: {
        _id: '$location.coordinates',
        number_of_sightings: {
            $count: {}
        }
    }
  }
])
