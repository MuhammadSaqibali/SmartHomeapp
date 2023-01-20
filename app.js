function foo() {
    alert("this is home")
}
function foo1(about) {
    alert(about)
}
function btn() {
    alert("This is Signup Button")
}
function getname(){
    var name = document.getElementById("name")
    alert(name.value)
    name.value=""
}
import { initializeApp } from 'firebase/app';
const facebook_login=()=>{
    
    
    // TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;
    console.log("user===>",user)

    // ...
  })
  .catch((error) => {
    console.log(error.message)
  });
}