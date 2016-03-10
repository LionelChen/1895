Meteor.publish('demand', function () {
    return Demand.find({owner:this.userId});
});

Meteor.publish("images", function(){
    return Images.find();
});

//DO NOT PUBLISH ALL USERS IN PRODUCTION!!!!!!

//Meteor.publish('users', function() {
//    return Meteor.users.findOne({_id:this.userId()});
//});