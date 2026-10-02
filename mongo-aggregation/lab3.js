// Lab: Using $project, $count, and $set Stages in a MongoDB Aggregation Pipeline

/*
Welcome! You are now connected to the bird_data database with a collection of sightings. There is a lot of data in each document, but we want to return only a list of the time of the sighting and the common name of the bird that was sighted.

Use the sightings collection in this lab.

Create an aggregation pipeline on the sightings collection. (Forgot the command or aggregation stages? Check the Hints section below!)
Create a $project stage that just shows us the "date" and "species_common" field. Project out the "_id" field.
Run your aggregation pipeline, and see the list of sightings!
Once you have completed the lab, select the Check button.
*/

db.sightings.aggregate([
  {
    $project: {
        _id: 0,
        species_common: 1,
        date: 1
    }
  }
])


/*
Use the birds collection in this lab.

Create an aggregation pipeline on the birds collection. (Forgot the command or aggregation stages? Check the Hints section below!)
Create a new field called class populated with the class of each of these animals, bird.
Run your aggregation pipeline, and see that the class field has been added and set to "bird".
Once you have completed the lab, select the Check button.
*/

db.birds.aggregate([
  {
    $set: {
      'class': 'bird'
    }
  }
])


/*
COUNT

Use the sightings collection in this lab.

Create an aggregation pipeline on the sightings collection. (Forgot the command or aggregation stages? Check the Hints section below!)
Create a stage that finds matches where species_common is "Eastern Bluebird" and where the date field is a value between January 1, 2022 0:00, and January 1, 2023 0:00.
Create a stage to count how many sightings that includes.
Run your aggregation pipeline, and see how many sightings of Eastern Bluebirds took place in 2022.
Once you have completed the lab, select the Check button.

Thanks and please don't forget to rate this lab!
*/

db.sightings.aggregate([
{
  $match: {
    date: {
      $gt: ISODate('2022-01-01T00:00:00.000Z'),
      $lt: ISODate('2023-01-01T00:00:00.000Z')
    },
    species_common: 'Eastern Bluebird'
  }
}, {
  $count: 'bluebird_sightings_2022'
}
])
