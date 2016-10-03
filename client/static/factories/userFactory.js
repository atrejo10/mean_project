app.factory('UserFactory', ['$http', function($http){
    var user = {data:[]}
    return{
        create:function(user, callback){
            $http({
                method:"POST",
                url:"/users",
                data:user
            }).then(function(user){
                callback();
            })
        },
        login:function(user,callback){
            $http({
                method:"POST",
                url:"/login",
                data:user
            }).then(function(user){
                callback();
            })
        },
        editPuser: function(user, callback){
        $http({
          method:"POST",
          url:'/editUser',
          data: user
        }).then(function(user){
          callback();
        })
      },

      edit: function(callback){
        $http({
          method:"GET",
          url:'/user'
        }).then(function(res){
          callback(res.data);
        })
      },

        loggedIn: function(callback){
          $http({
            method:"GET",
            url:'/usersLogged'
          }).then(function(res){
            callback(res.data);
          })
        },
        getAll: function(callback){
          $http({
            method: "GET",
            url: "/getAll"
          }).then(function(res){
            callback(res.data)
          })
        }
      }
    // createFacebookUser:function(user, callback){
    //         $http({
    //             method:"POST",
    //             url:"/userss",
    //             data:user
    //         }).then(function(user){
    //             callback();
    //         })
    //     },
    //     fbLogin:function(user,callback){
    //         $http({
    //             method:"POST",
    //             url:"/logins",
    //             data:user
    //         }).then(function(user){
    //             callback();
    //         })
    //     }
}])
