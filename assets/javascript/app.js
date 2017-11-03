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

  var name = "";
  var destination = "";
  var frequency = "";

 $("#add-train").on("click", function(event) {
  
 event.preventDefault();

  var name = $("#name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var frequency = $("#frequency-input").val().trim();



  database.ref().push({
  	name: name,
  	destination: destination,
  	frequency: frequency,
    })

  // database.ref().on("value", function(snapshot){
  	database.ref().on("child_added", function(snapshot){

  	console.log(snapshot.val());

  	console.log(snapshot.val().name);
  	console.log(snapshot.val().destination);
  	console.log(snapshot.val().frequency);

  	$("#name-display").text(snapshot.val().name);
  	$("#destination-display").text(snapshot.val().destination);
  	$("#frequency-display").text(snapshot.val().frequency);



    }, function(errorObject) {
      console.log("The read failed: " + errorObject.code);

})


 });

 // Pseudocode
 // clear fields after submit button is clicked
 // when a train is added, append to the table
 // use start time and frequency to determine next arrival and min away



