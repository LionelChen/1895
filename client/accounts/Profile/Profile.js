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

Template.EditExperience.events({

    "click #updateExperienceButton" : function(event, template){
        // retrieve the input field values
        userExperience = template.find('#update-user-experience').value;
        // Trim and validate your fields here....
        Meteor.users.update({_id:Meteor.userId()},{$set:{'profile.experience':userExperience}});
        Session.set('editExperience', false);
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
    },
    userAvatarUrl:function(){
        return "http://1895.oss-cn-shenzhen.aliyuncs.com/"+Meteor.users.findOne().profile.avatarAddress;
    }
});

Template.upload.events({



    //Todo 添加裁剪插件
    'change .myFileInput': function(event, template) {
        FS.Utility.eachFile(event, function(file) {
            console.log(file);
            Images.insert(file, function (err, fileObj) {
                if (err){
                    // handle error
                    console.log(err);
                } else {
                    // handle success depending what you need to do
                    var userId = Meteor.userId();
                    var imagesURL = {
                  "profile.avatarAddress": "avatar/images/" + fileObj._id+"-"+fileObj.name()
                };
                    Meteor.users.update(userId, {$set: imagesURL});
                    FlowRouter.go("profile")
                }
            });
        });
    },

});
