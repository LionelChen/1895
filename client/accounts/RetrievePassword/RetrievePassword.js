Template.retrievepassword.events({
    'click #submit-button': function(event, template){
        event.preventDefault();
        let UserId = Meteor.users.findOne({'profile.emailAddress':template.find('#user-email')});
        Accounts.sendResetPasswordEmail(UserId, [template.find('#user-email')]);
        Meteor.call('sendEmail',{
            to: template.find('#user-email'),
            from: 'no-reply@1895.com',
            subject: 'Help, I forgot my password!',
            text: 'This is the test'
        });
    }
});
