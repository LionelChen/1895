Meteor.publish('demand', function () {
    return Demand.find({owner:this.userId});
});

Meteor.publish('users', function() {
    return Meteor.users.find();
});
