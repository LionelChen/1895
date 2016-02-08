Accounts.onCreateUser(function(options, user) {
    console.log(options.profile.test);
    if (options.profile) user.profile = options.profile;
    user.profile.test="123";

    return user;
    //Meteor.users.update(Meteor.userId(), {$set: {profile:{UserProfile:{test:"123"}}}});
    //Meteor.users.update(Meteor.userId(), {$set: {profile:{test:"123"}}});
});
