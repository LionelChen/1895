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
        return Demand.find({owner:Meteor.userId()}, options);
    }
});

//Is user a founder
Template.Demands.helpers({
    isUserFounder:function(){
        if(Meteor.users.findOne().profile.roles == "Founder"){
            return true;
        }else{
            return false;
        }
    }
});

//Is user a finder
Template.Demands.helpers({
    isUserFinder:function(){
        if(Meteor.users.findOne().profile.roles == "Finder"){
            return true;
        }else{
            return false;
        }
    }
});

Template.Demands.helpers({
    matachedDemand:function(){
        return Demand.find();
    }
});