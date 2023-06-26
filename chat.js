import { initializeApp  } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {getAuth,onAuthStateChanged,signInWithPopup,  GoogleAuthProvider , createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

import { getDatabase , ref , set , onValue , onChildChanged , update} from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js'

 

const auth = getAuth(app);
let log_out = document.getElementById("logout");
let input_text = document.getElementById("input_txt");
let go_button = document.getElementById("gobutton");
let div = document.getElementById("div");



const db = getDatabase(app);

go_button.addEventListener("click" , ()=>{
    
    
    const user = auth.currentUser;
    const refr = ref(db ,  '/' + user.displayName);
    update(refr ,{

        msg: user.email + ':  ' + input_text.value
    });
    onValue(refr ,(snapshot)=>{

        console.log(snapshot.child("msg").val());
        console.log(user.displayName);
        let new_msg =  document.createElement("p") ;
        new_msg.textContent = snapshot.child("msg").val();
        div.appendChild(new_msg);
    } , {
        onlyOnce: true

    });


})




window.addEventListener("load",(user)=>{

   onAuthStateChanged(auth ,(user)=>{

    if (user){

        console.log(user.email);
        console.log(user.phoneNumber);
    }
    else{

        window.location.href = "login.html";
    }
   })
});



log_out.addEventListener("click", ()=>{
    const auth = getAuth(app);
    signOut(auth).then(()=>{

        console.log("signed out");
        window.location.href = "login.html";
    })
    .catch((error)=>{

        console.log(error.name);
    });
})