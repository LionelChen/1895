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