Template.retrievepassword.events({
    'click #submit-button': function(event, template){
        event.preventDefault();
        userEmail = template.find('#user-email').value;

        Meteor.call("generateForgotPasswordKey", userEmail, function(error, result){
            if(error){
                console.log(error.reason);
                return;
            }
            // do something with result
            console.log(result);
        });

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
