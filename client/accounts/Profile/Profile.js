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
    'click #editExperienceButton': function(){
        Session.set('editExperience', true);
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

Template.Profile.helpers({
    isUserFilledExperience:function(){
        if(Meteor.users.findOne().profile.experience){
            return true;
        }else{
            return false;
        }
    }
});

Template.Profile.helpers({
    userProfileExperience:function(){
        return Meteor.users.findOne().profile.experience;
    }
});