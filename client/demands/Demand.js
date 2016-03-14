Template.Demand.helpers({
    DemandOwner: function () {
        return Demand.findOne({_id:FlowRouter.getParam('_id')}).expectation.location;
    }
});
