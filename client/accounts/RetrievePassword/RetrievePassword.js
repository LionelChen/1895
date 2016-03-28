Template.retrievepassword.events({
    'click #submit-button': function(event, template){
        event.preventDefault();
        userEmail = template.find('#user-email').value;
        let UserId = Meteor.users.findOne({'profile.emailAddress':userEmail});
        console.log(UserId);


        Meteor.call("forgotPasswordM", userEmail, function(error, result){
            if(error){
                console.log(error.reason);
                return;
            }
            // do something with result
            console.log(result);
        });

        if(UserId){
            //Meteor.users.update({_id:UserId}, {$set: {'profile.lastForgotPasswordKey':randPassword()}});
            console.log()
        }else{
            console.log("not exist");
        }


        /*
        Meteor.call('sendEmail',{
            to: template.find('#user-email'),
            from: 'no-reply@1895.com',
            subject: 'Help, I forgot my password!',
            text: 'This is the test'
        });
        */

    }
});
