 //================== AUTHENTICATE GOOGLE ==================//
 /**
   * Function called when clicking the Login/Logout button.
   */
  // [SIGN-IN START buttoncallback]

// for customizing the firebase auth ui: https://github.com/firebase/firebaseui-web#configure-oauth-providers

function firebaseRedirectSignIn() {
  //log out and show the redirect sign-in screen
  //default behavior of redirect ui is to automatically log-in if there is one user
  //go to accounts.google.com to log-in a second user
  firebase.auth().signOut().then(function(){
    // let provider = new firebase.auth.GoogleAuthProvider();
    // provider.addScope('https://www.googleapis.com/auth/user.emails.read');
    // provider.addScope('https://www.googleapis.com/auth/userinfo.email');
    firebase.auth().signInWithRedirect(provider)
  }
  );
}//redirect sign-in
// [SIGN-IN END buttoncallback]