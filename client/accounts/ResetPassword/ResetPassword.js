Template.ResetPassword.onCreated(function () {
    userId = FlowRouter.getParam("userId");
    resetPasswordKey = FlowRouter.getParam("resetPasswordKey");
    Meteor.call("validateForgotPasswordKeyAndResetPassword",[userId,resetPasswordKey,"hahaha"], function(error, result){
        if(error){
            console.log(error.reason);
            return;
        }
        if(result){
            console.log("succeed");
        }else{
            console.log("error");
        }
    });

});