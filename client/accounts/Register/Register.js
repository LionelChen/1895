var errorInformation = new Array();

Template.Register.events({
    "submit form": function(event, Register) {
        event.preventDefault();
        Accounts.createUser({
            username: Register.find("#signup-username").value,
            password: Register.find("#signup-password").value,
            profile: {
                emailAddress:Register.find("#signup-email").value
            }
        },
        function(error) {
            if (error.reason=="Username already exists.") {
                // Display the user creation error to the user however you want
                console.log("Username exist");
                errorInformation.push("Username Exist");
                console.log(errorInformation[0]);
            }
        });

        //Meteor.users.update({_id : Meteor.userId},{$set:{"emails.$.address":"lionelchen@outlook.com"}})


    }
});

//todo 这部分还是有问题
function contains(arr, obj) {
    var i = arr.length;
    while (i--) {
        if (arr[i] === obj) {
            return true;
        }
    }
    return false;
}

Template.Register.helpers({
    errorInfo: function () {
        if(contains(errorInformation,"Username Exist")){
            console.log("Im in")
            return "Username Exist";
        }
    }
});

