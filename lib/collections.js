Demand = new Mongo.Collection('demand');

Demand.allow({
    insert: function(userId, doc){
        return !!userId;
    },
    update: function(userId, doc){
        return !!userId;
    }
});

Demand.DemandExpection = new SimpleSchema({
    experience:{
        type:String,
        label:"经验"
    },
    paid:{
        type:Boolean,
        label:"有偿"
    },
    location:{
        type: String,
        allowedValues: ["海淀","西城","朝阳","宣武","还有什么区我就不知道了"],
        autoform: {
            afFieldInput: {
                firstOption: "选择地区"
            }
        }
    },


});

DemandSchema = new SimpleSchema({
    title:{
        type: String,
        label: '标题'
    },
    createdAt:{
        type: Date,
        label: '创建日期',
        autoValue: function(){
            return new Date;
        },
        autoform:{
            type:'hidden'
        }
    },
    owner:{
        type:String,
        label: '创建人',
        autoValue: function(){
            return this.userId;
        },
        autoform:{
            type:'hidden'
        }
    },
    description:{
        type:String,
        label: '描述',
        max:1000
    },
    expectation:{
        type:Demand.DemandExpection,
        optional:true
    }
});

Demand.attachSchema(DemandSchema);


Schema = {};
UserProfile = new Mongo.Collection("userprofile");
UserExpectation = new Mongo.Collection("userexpectation");

Meteor.users.allow({
    update: function(userId, doc) {
        return !!userId;
    }
});

Schema.UserProfile = new SimpleSchema({
    roles:{
        type: String,
        label:"职责",
        optional:true
    },
    emailAddress:{
        type:String,
        regEx: SimpleSchema.RegEx.Email,
    },


});

Schema.users = new SimpleSchema({
    username: {
        type: String,
        // For accounts-password, either emails or username is required, but not both. It is OK to make this
        // optional here because the accounts-password package does its own validation.
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: true
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: Schema.UserProfile,
        optional: true,
    },
    // Make sure this services field is in your schema if you're using any of the accounts packages
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    // Add `roles` to your schema if you use the meteor-roles package.
    // Option 1: Object type
    // If you specify that type as Object, you must also specify the
    // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
    // Example:
    // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
    // You can't mix and match adding with and without a group since
    // you will fail validation in some cases.
    // In order to avoid an 'Exception in setInterval callback' from Meteor
    /*
    heartbeat: {
        type: Date,
        optional: true
    }
    */
});

Meteor.users.attachSchema(Schema.users);
