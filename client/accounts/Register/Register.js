Template.Register.onCreated(function() {
    this.lastError = new ReactiveVar(null);
});

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
            if (error) {
                Register.lastError.set(error.reason);
            } else {
                Register.lastError.set(null);
            }
        });

    }
});

Template.Register.helpers({
    errorMessage: function() {
        return Template.instance().lastError.get();
    }
});
