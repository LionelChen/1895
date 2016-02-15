FlowRouter.route('/',{
    name:'home',
    action(){
        if(Meteor.userId()){
            FlowRouter.go('demands');
        }
        BlazeLayout.render('HomeLayout');
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


FlowRouter.route('/register', {
    name: 'register',
    action() {
        // User is logged in, proceed to demand view
        if(Meteor.userId()){
            FlowRouter.go('demands')
        }else{
            BlazeLayout.render('MainLayout',{main:'Register'});
        }

    }
});


FlowRouter.route('/login', {
    name: 'login',
    action() {
        if(Meteor.userId()){
            FlowRouter.go('demands')
        }
        BlazeLayout.render('MainLayout',{main:'Login'});

    }
});