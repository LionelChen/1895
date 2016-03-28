Template.Logout.onCreated(function() {
    Meteor.logout();
    //todo setTimeout方法无法达到特定时间后跳转,需要修复!
    Meteor.setTimeout(FlowRouter.go('home'), 500);
});