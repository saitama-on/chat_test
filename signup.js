

import { initializeApp  } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {getAuth, signInWithPopup,  GoogleAuthProvider , createUserWithEmailAndPassword , signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

import { getDatabase , ref , set , onValue} from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js'
const firebaseConfig = {
    apiKey: "AIzaSyBIbRFofcWrkdjbq0y66RCFE3WZyCDrdfE",
    authDomain: "chat-23fe4.firebaseapp.com",
    projectId: "chat-23fe4",
    storageBucket: "chat-23fe4.appspot.com",
    messagingSenderId: "493468911945",
    appId: "1:493468911945:web:077e9067658640a9fcf298",
    measurementId: "G-9NH4NRGGP1",
    databaseURL:"https://chat-23fe4-default-rtdb.firebaseio.com"
  };
const app = initializeApp(firebaseConfig);  



let sumbit_button = document.getElementById("submit");
let user_email_signup = document.getElementById("email");
let user_pass_signup = document.getElementById("password");


let login_button = document.getElementById("login");





login_button.addEventListener("click" , ()=>{

  window.location.href = "login.html";
});




sumbit_button.addEventListener("click", ()=>{

  
  const auth = getAuth(app);
  createUserWithEmailAndPassword(auth,user_email_signup.value,user_pass_signup.value)
  .then((userCredential)=>{

    console.log("Now login");

  })

  
});



  


