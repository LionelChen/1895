Template.NewDemand.events({
    'submit form': function() {
        Session.set('newDemand', false);
    }
});