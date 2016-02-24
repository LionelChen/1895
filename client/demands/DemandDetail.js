Template.DemandDetail.onCreated(function () {
    var self = this;
    self.autorun(function() {
        self.subscribe('demand');
    });
});

Template.DemandDetail.helpers({
    demandDetailTitle: function () {
        return Demand.findOne({_id:FlowRouter.getParam('_id')}).title;
    }
});

Template.DemandDetail.helpers({
    demandDetailOwnerUsername: function () {
        demandOwnerId = Demand.findOne({_id:FlowRouter.getParam('_id')}).owner;
        return Meteor.users.findOne({_id:demandOwnerId}).username;
    }
});

Template.DemandDetail.helpers({
    demandDetailDateCreated: function () {
        return Demand.findOne({_id:FlowRouter.getParam('_id')}).createdAt;
    }
});

Template.DemandDetail.helpers({
    demandDetailDescription: function () {
        return Demand.findOne({_id:FlowRouter.getParam('_id')}).description;
    }
});

Template.DemandDetail.helpers({
    demandDetailExpectationExperience: function () {
        return Demand.findOne({_id:FlowRouter.getParam('_id')}).expectation.experience;
    }
});

Template.DemandDetail.helpers({
    demandDetailExpectationPaid: function () {
        if(Demand.findOne({_id:FlowRouter.getParam('_id')}).expectation.paid){
            return "有偿"
        }else{
            return "无偿"
        }
        }
});

Template.DemandDetail.helpers({
    demandDetailExpectationLocation: function () {
        return Demand.findOne({_id:FlowRouter.getParam('_id')}).expectation.location;
    }
});
