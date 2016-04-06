FlowRouter.route('/',{
    name:'home',
    action(){
        if(Meteor.userId()){
            FlowRouter.go('demands');
        }
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/profile', {
    name: 'profile',
    action() {
        if(Meteor.userId()){
            // User is logged in, show demand view
            BlazeLayout.render('MainLayout', {main: 'Profile'});
        }else{
            // User is not authorized, redirect to home view
            FlowRouter.go('home');
        }
    }
});

FlowRouter.route('/user',{
   name:'user',
    action(){
        if(Meteor.userId()){
            //Todo implement user page
        }else{
            FlowRouter.go('home');
        }
    }
});

FlowRouter.route('/retrievepassword',{
    name:'retrievepassword',
    action(){
        BlazeLayout.render('MainLayout', {main: 'retrievepassword'})
    }

});

FlowRouter.route( '/retrievepassword/:userId/:resetPasswordKey', {
    name:'resetpassword',
    action: function(params) {

        BlazeLayout.render('MainLayout',{main:'ResetPassword'});
    }

});


FlowRouter.route('/demands', {
    name: 'demands',
    action() {
        if(Meteor.userId()){
            // User is logged in, show demand view
            BlazeLayout.render('MainLayout', {main: 'Demands'});
        }else{
            // User is not authorized, redirect to home view
            FlowRouter.go('home');
        }
        //BlazeLayout.render('MainLayout',{main:'Profile'});
    }
});

FlowRouter.route( '/demands/:_id', {
    subscriptions: function(params, queryParams) {
        console.log(Meteor.subscribe('Demands', params._id));
        this.register('Demands', Meteor.subscribe('Demands', params._id));

        BlazeLayout.render('MainLayout',{main:'DemandDetail'});
    }

});

FlowRouter.route('/register', {
    name: 'register',
    action() {
        // User is logged in, proceed to demand view
        if(Meteor.loggingIn()){
            FlowRouter.go('demands');
        }else if(!Meteor.loggingIn()){
            BlazeLayout.render('MainLayout',{main:'Register'});
        }

    }
});


FlowRouter.route('/login', {
    name: 'login',
    action() {
        if(Meteor.userId()){
            FlowRouter.go('demands');
        }
        BlazeLayout.render('MainLayout',{main:'Login'});

    }
});

FlowRouter.route('/logout', {
    name: 'logout',
    action() {

        BlazeLayout.render('MainLayout',{main:'Logout'});

    }
});

