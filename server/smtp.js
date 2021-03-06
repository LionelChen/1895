Meteor.startup(function(){
    Meteor.Mailgun.config({
        username: 'postmaster@sandboxe7ef2c635e3842b3b5f438ae139846c0.mailgun.org',
        password: '2da0701e64373f0318ec5746f7f54d8a'
    });
});

// In your server code: define a method that the client can call

Meteor.methods({
    sendEmail: function (mailFields) {
        console.log("about to send email...");
        check([mailFields.to, mailFields.from, mailFields.subject, mailFields.text], [String]);

            // Let other method calls from the same client start running,
            // without waiting for the email sending to complete.
            this.unblock();

            Meteor.Mailgun.send({
                to: mailFields.to,
                from: mailFields.from,
                subject: mailFields.subject,
                text: mailFields.text
            });
            console.log("email sent!");
    },

    generateForgotPasswordKey: function (userEmail) {
        text =['abcdefghijklmnopqrstuvwxyz','ABCDEFGHIJKLMNOPQRSTUVWXYZ','1234567890'];
        rand = function(min, max){return Math.floor(Math.max(min, Math.random() * (max+1)));};
        var len = 20;
        var pw = '';
        for(i=0; i<len; ++i){
            var strpos = rand(0, 2);
            pw += text[strpos].charAt(rand(0, text[strpos].length));
        }
        let UserId = Meteor.users.findOne({'profile.emailAddress':userEmail})._id;
        Meteor.users.update({_id:UserId}, {$set: {'profile.lastForgotPasswordKey':pw}});
        Meteor.call('sendEmail',{
            to: userEmail,
            from: 'no-reply@1895.com',
            subject: 'Help, I forgot my password!',
            text: "http://localhost:3000/retrievepassword/"+UserId+"/"+pw
        });
        return "E-mail sent!"

    },

    validateForgotPasswordKeyAndResetPassword: function(InformationPassed){
        //InformationPassed:{userId,ForgotPasswordKey,newPassword}
        if(InformationPassed[1]==Meteor.users.findOne({'_id':InformationPassed[0]}).profile.lastForgotPasswordKey){
            Accounts.setPassword(InformationPassed[0],InformationPassed[2]);
            Meteor.users.update({_id:InformationPassed[0]}, {$set: {'profile.lastForgotPasswordKey':''}});
            return true
        }else{
            return false
        }

    }
});
