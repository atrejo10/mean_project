app.controller('usersController', ['$scope','$location','UserFactory', function($scope, $location, UserFactory){
    $scope.test = "hallo";
    $scope.create = function(user){
        UserFactory.create(user,function(){
            $location.url('/dashboard');
        })
    }
    var images= ["balloons.jpg","Confetti_in_Toronto.jpg","coolCat.jpg","stars.jpg","zoolander.jpg", "music_notes.png"];
    var randNumber = Math.floor(Math.random() * images.length);
    console.log(randNumber)
    $scope.randImg = "assets/loginPhotos/"+ images[randNumber];
    console.log($scope.randImg);

    $scope.login = function(user){
        UserFactory.login(user,function(){
            $location.url('/dashboard');
          })
    }

    // $scope.fbLogin = function(){
    //     console.log('inside fbLogin')
    //     var config = {
    //         apiKey: "AIzaSyDOzpAZaFLehLTDU8qemv0OB1rlL-inc-w",
    //         authDomain: "dashbourf.firebaseapp.com",
    //         databaseURL: "https://dashbourf.firebaseio.com",
    //         storageBucket: "dashbourf.appspot.com",
    //         messagingSenderId: "696152392828"
    //       };
    //       firebase.initializeApp(config);
    //           var provider = new firebase.auth.FacebookAuthProvider();
    //           // provider.addScope('user_managed_groups');
    //           // provider.addScope('user_events');
    //           // provider.addScope('user_photos');
    //           provider.addScope('user_friends');
    //           // provider.addScope('read_custom_friendlists');
    //           provider.addScope('public_profile');
    //
    //           firebase.auth().signInWithPopup(provider).then(function(result) {
    //             // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    //             var token = result.credential.accessToken;
    //             // The signed-in user info.
    //             var user = result.user.providerData[0];
    //             UserFactory.fbLogin(user, function(){
    //               $location.path("/dashboard")
    //             })
    //           }).catch(function(error) {
    //             // Handle Errors here.
    //             console.log(error);
    //             var errorCode = error.code;
    //             var errorMessage = error.message;
    //             // The email of the user's account used.
    //             var email = error.email;
    //             // The firebase.auth.AuthCredential type that was used.
    //             var credential = error.credential;
    //             // ...
    //          });
    //  }
    //
    //  $scope.fbRegister = function(){
    //     console.log('inside fbRegister');
    //     var config = {
    //         apiKey: "AIzaSyDOzpAZaFLehLTDU8qemv0OB1rlL-inc-w",
    //         authDomain: "dashbourf.firebaseapp.com",
    //         databaseURL: "https://dashbourf.firebaseio.com",
    //         storageBucket: "dashbourf.appspot.com",
    //         messagingSenderId: "696152392828"
    //       };
    //       firebase.initializeApp(config);
    //           var provider = new firebase.auth.FacebookAuthProvider();
    //           // provider.addScope('user_managed_groups');
    //           // provider.addScope('user_events');
    //           // provider.addScope('user_photos');
    //           provider.addScope('user_friends');
    //           // provider.addScope('read_custom_friendlists');
    //           provider.addScope('public_profile');
    //
    //           firebase.auth().signInWithPopup(provider).then(function(result) {
    //             // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    //             var token = result.credential.accessToken;
    //             // The signed-in user info.
    //             var user = result.user.providerData[0];
    //             UserFactory.createFacebookUser(user, function(){
    //               $location.path("/dashboard")
    //             })
    //           }).catch(function(error) {
    //             // Handle Errors here.
    //             console.log(error);
    //             var errorCode = error.code;
    //             var errorMessage = error.message;
    //             // The email of the user's account used.
    //             var email = error.email;
    //             // The firebase.auth.AuthCredential type that was used.
    //             var credential = error.credential;
    //             // ...
    //          });
    //  }

}])
