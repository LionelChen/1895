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

        //if(Schema.UserProfile.roles){
            BlazeLayout.render('MainLayout', {main: 'Demands'});
        //}
        //BlazeLayout.render('MainLayout',{main:'Profile'});

    }
});


FlowRouter.route('/register', {
    name: 'register',
    action() {
        if(Meteor.userId()){
            //todo:show already login
        }
        BlazeLayout.render('MainLayout',{main:'Register'});

    }
});


FlowRouter.route('/login', {
    name: 'login',
    action() {
        if(Meteor.userId()){
            //todo:show already login
        }
        BlazeLayout.render('MainLayout',{main:'Login'});

    }
});