var config = {
    apiKey: "AIzaSyCgkMYJPIOWEUKsHx3cbNs_wf4dqh9FVHc",
    authDomain: "train-schedule-7f379.firebaseapp.com",
    databaseURL: "https://train-schedule-7f379.firebaseio.com",
    projectId: "train-schedule-7f379",
    storageBucket: "train-schedule-7f379.appspot.com",
    messagingSenderId: "762381699945"
  };
  firebase.initializeApp(config);

var database = firebase.database();

// var name = "";
// var destination = "";
// var frequency = "";

$("#add-train").on("click", function(event) {
  
  event.preventDefault();

  var name = $("#name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var frequency = $("#frequency-input").val().trim();

  var newTrain = {
    name: name,
    destination: destination,
    frequency: frequency
  };


  database.ref().push(newTrain);


  // clear fields after submit button is clicked

  $("#name-input").val("");
  $("#destination-input").val("");
  $("#frequency-input").val("")

});

   // when a train is added, append to the table
database.ref().on("child_added", function(childSnapshot, prevChildKey){

  	console.log(childSnapshot.val());

  	var name = childSnapshot.val().name;
  	var destination = childSnapshot.val().destination;
  	var frequency = childSnapshot.val().frequency;

    console.log(name);
    console.log(destination);
    console.log(frequency);



    $("#trainTable").append("<tr><td>" + name + "</td><td>" + destination + "</td><td>" + 
      frequency + "</td></tr>");

// // $("#trainTable").append("<tr><td>" + name + "</td><td>" + destination + "</td><td>" + 
//       frequency + "</td><td>" + nextArrival + "</td><td>" + minAway + "</td></tr>");

});



 // Pseudocode
 // clear fields after submit button is clicked

 // use start time and frequency to determine next arrival and min away



