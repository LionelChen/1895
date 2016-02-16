Accounts.onCreateUser(function(options, user) {
    if (options.profile){
        user.profile = options.profile;
    }

    FlowRouter.go("demands");
    //let userId = Meteor.userId();
    //Roles.addUsersToRoles( user, [ 'roleOne'] );
    //Roles.addUsersToRoles(user._id, 'test', 'default-group');
    return user;
    //Meteor.users.update(Meteor.userId(), {$set: {profile:{UserProfile:{test:"123"}}}});
    //Meteor.users.update(Meteor.userId(), {$set: {profile:{test:"123"}}});
});
