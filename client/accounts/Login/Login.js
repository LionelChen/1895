Template.Login.events({

    "submit #login-form" : function(e, t){
        e.preventDefault();
        // retrieve the input field values
        username = t.find('#login-username').value;
        password = t.find('#login-password').value;

        // Trim and validate your fields here....

        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        Meteor.loginWithPassword(username, password, function(err) {
            if (err) {
                console.log(err)
                // The user might not have been found, or their passwword
                // could be incorrect. Inform the user that their
                // login attempt has failed.
            }
            else {
                console.log("login success")
            }
            // The user has been logged in.

        });
        return false;
    }
});