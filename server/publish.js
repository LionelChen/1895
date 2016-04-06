Meteor.publish('demand', function () {
    if(Meteor.users.findOne().profile.roles=="Founder"){
        return Demand.find({owner:this.userId});
    }else if(Meteor.users.findOne().profile.roles=="Finder"){
        finderExperience = Meteor.users.findOne().profile.experience;
        return Demand.find({'expectation.experience':finderExperience});
        //return Demand.find({'expectation.experience':finderExperience});
    }
});

Meteor.publish("images", function(){
    return Images.find();
});

//DO NOT PUBLISH ALL USERS

//Meteor.publish('users', function() {
//    return Meteor.users.findOne({_id:this.userId()});
//});
