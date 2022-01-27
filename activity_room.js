

//ADD YOUR FIREBASE LINKS HERE

var  firebaseConfig = {
      apiKey: "AIzaSyDOooBeFTXZAoIKDrt_09FG7HE_G0v9fck",
      authDomain: "activity-8bc5e.firebaseapp.com",
      databaseURL: "https://activity-8bc5e-default-rtdb.firebaseio.com",
      projectId: "activity-8bc5e",
      storageBucket: "activity-8bc5e.appspot.com",
      messagingSenderId: "184895991717",
      appId: "1:184895991717:web:831f19b297588aec95424c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);



name_welcome=localStorage.getItem("user_name");
document.getElementById("names").innerHTML="WELCOME!"+"  "+ name_welcome +" "+ ":)";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room name=" +Room_names);
       row="<div class='room_name1' id="+Room_names+"onclick='redirectToRoom(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;

       
      });});}
getData();
function redirectToRoom(Rooms){
      console.log("selected_room="+ Rooms);
      localStorage.setItem("room_name", Rooms);

      window.location="kwitter_page.html";
}


function logout(){
      
      window.location="index.html";
}

function addRoom(){
     room=document.getElementById("room_name").value;
     localStorage.setItem("room_name" ,room);
     firebase.database().ref("/").child(room).update({purpose:"add room name"});

     window.location ="kwitter_page.html";
}

