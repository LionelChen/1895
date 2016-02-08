Meteor.publish('demand', function () {
    //Meteor._sleepForMs(5000);
    return Demand.find();
});

Meteor.publish('users', function() {
    return Meteor.users.find();
});
