Template.Profile.onCreated(function () {
    var self = this;
    self.autorun(function() {
        self.subscribe('users');
    });
});



Template.Profile.helpers({
    userProfileRole: function () {
        return Meteor.users.findOne().profile.roles;
    }
});


Template.Profile.events({

    "submit #profile-update-form" : function(event, template){
        // retrieve the input field values
        userExperience = template.find('#user-experience').value;
        // Trim and validate your fields here....

        Meteor.users.update({_id:Meteor.userId()},{$set:{'profile.experience':userExperience}});
    }
});