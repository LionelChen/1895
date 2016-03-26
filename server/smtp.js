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
                text: mailFields.text,
            });
            console.log("email sent!");
    }
});
