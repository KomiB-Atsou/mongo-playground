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
