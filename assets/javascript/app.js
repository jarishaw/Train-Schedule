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


$("#add-train").on("click", function(event) {
  
  event.preventDefault();

  var name = $("#name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var startTime = moment($("#start-input").val().trim(), "HH:mm").format("X");
  var frequency = $("#frequency-input").val().trim();

  var newTrain = {
    name: name,
    destination: destination,
    startTime: startTime,
    frequency: frequency

  };


  database.ref().push(newTrain);


  // clear fields after submit button is clicked

  $("#name-input").val("");
  $("#destination-input").val("");
  $("#start-input").val("");
  $("#frequency-input").val("")

});

   // when a train is added, append to the table
database.ref().on("child_added", function(childSnapshot, prevChildKey){

  	console.log(childSnapshot.val());

  	var name = childSnapshot.val().name;
  	var destination = childSnapshot.val().destination;
  	var startTime = childSnapshot.val().startTime;
    var frequency = childSnapshot.val().frequency;

    console.log(name);
    console.log(destination);
    console.log(startTime);
    console.log(frequency);

    var startTimeUpdate = moment(startTime).format("HH:mm");

    var startTimeConverted = moment(startTimeUpdate, "hh:mm A"). subtract(1, "years");

    var currentTime = moment()

    var diffTime = moment().diff(moment(startTimeConverted), "minutes");

    var tRemainder = diffTime % frequency;

    var minAway = frequency - tRemainder;

    var nextArrival = moment().add(minAway, "minutes").format("hh:mm A");


$("#trainTable").append("<tr><td>" + name + "</td><td>" + destination + "</td><td>" + 
      frequency + "</td><td>" + nextArrival + "</td><td>" + minAway + "</td></tr>");

});


