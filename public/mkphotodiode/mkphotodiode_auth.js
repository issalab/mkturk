//================== INITIALIZE PHOTODIODE VARIABLE ==================//
var pd = {
  displayName: '',
  email: '',
  uid: '',
  WebUSBAvailable: 0,
}
//========(END)========== INITIALIZE PHOTODIODE VARIABLE ==================//


//================== AUTHENTICATE GOOGLE ==================//
const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

auth.getRedirectResult().then(function(result) {
  if (result.user) {
    console.log('Sign-In Redirect Result, USER ' + result.user.email + ' is signed in')
    console.log(result);
    console.log(firebase.auth().currentUser);
    pd.displayName = result.user.displayName;
    pd.email = result.user.email;
    pd.uid = result.user.uid;
  }//IF sign-in redirect
  else if (auth.currentUser) {
    firebase.auth().currentUser.reload();
    console.log('Sign-In Redirect Result, USER ' 
      + auth.currentUser.email + ' is signed in')
    pd.displayName = auth.currentUser.displayName;
    pd.email = auth.currentUser.email;
    pd.uid = auth.currentUser.uid;
  }//IF already signed in
  else { // No user signed in, update your UI, show the redirect sign-in screen.
	  firebase.auth().signInWithRedirect(provider)
  }//ELSE redirect to sign-in
});//auth.getRedirectResult
//=======(END)========== AUTHENTICATE GOOGLE ==================//
