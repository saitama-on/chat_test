let user_email_login = document.getElementById("email-l");
let user_pass_login = document.getElementById("password-l");
let login_button_login = document.getElementById("login-l");
let username = document.getElementById("username");
let login_div = document.getElementById("login_div");
let log_out = document.getElementById("logout");
let input_text = document.getElementById("input_txt");
let go_button = document.getElementById("gobutton");



import { initializeApp  } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {getAuth,onAuthStateChanged,signInWithPopup,  GoogleAuthProvider , createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

import { getDatabase , ref , set , onValue , onChildChanged ,onChildAdded, update} from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js'


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
const auth = getAuth(app);

const db = getDatabase(app);

var chat_div = document.getElementById("chat");

window.onload = ()=>{

  chat_div.style.display = "none";
  login_div.style.display = "block";
}

login_button_login.addEventListener("click" , ()=>{

    const auth = getAuth(app);
    signInWithEmailAndPassword(auth , user_email_login.value , user_pass_login.value)
    .then((userCredential)=>{
      userCredential.user.displayName = username.value;
        console.log(userCredential.user.displayName);
        login_div.style.display = "none";
        chat_div.style.display = "block";
      
    
    
      
    })
    .catch((error)=>{

        alert(error.message);
        user_email_login.value = '';
        user_pass_login.value = '';
    })
  });

  log_out.addEventListener("click", ()=>{
    const auth = getAuth(app);
    signOut(auth).then(()=>{

        console.log("signed out");
        login_div.style.display = "block";
    })
    .catch((error)=>{

        console.log(error.name);
    });
})


go_button.addEventListener("click" , ()=>{
    
    
  const user = auth.currentUser;
  console.log(user.displayName);
  const refr = ref(db ,  '/' + user.displayName);
  update(refr ,{

      msg: String(user.displayName) + ':  ' + input_text.value
  });
  onValue(refr ,(snapshot)=>{

      console.log(snapshot.child("msg").val());
      
      let new_msg =  document.createElement("p") ;
      new_msg.textContent = snapshot.child("msg").val();
      div.appendChild(new_msg);
  } ,{

    onlyOnce:true
  });
  

})