Template.Demands.onCreated(function () {
    var self = this;
    self.autorun(function() {
        self.subscribe('demand');
    });
});

Template.Demands.events({
    'click #newDemandButton': function(){
        Session.set('newDemand', true);
    }
});

Template.Demands.helpers({
    demand: function () {
        options = {
            sort: {
                createdAt: -1
            }
        };
        return Demand.find({}, options);
    }
});