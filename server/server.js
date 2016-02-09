Accounts.onCreateUser(function(options, user) {
    if (options.profile){
        user.profile = options.profile;
    }

    return user;
    //Meteor.users.update(Meteor.userId(), {$set: {profile:{UserProfile:{test:"123"}}}});
    //Meteor.users.update(Meteor.userId(), {$set: {profile:{test:"123"}}});
});
