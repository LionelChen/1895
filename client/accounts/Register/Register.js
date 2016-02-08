Template.Register.events({
    "submit form": function(event, Register) {
        event.preventDefault();
        Accounts.createUser({
            username: Register.find("#signup-username").value,
            password: Register.find("#signup-password").value,
            profile: {
                test:"123"
            }
        },
        function(error) {
            if (error) {
                // Display the user creation error to the user however you want
                console.log(error)
            }
        });

        //Meteor.users.update({_id : Meteor.userId},{$set:{"emails.$.address":"lionelchen@outlook.com"}})


    }
});
