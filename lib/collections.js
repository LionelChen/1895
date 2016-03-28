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

Meteor.users.allow({
    update: function(userId, doc) {
        return !!userId;
    }
});

Schema.UserProfile = new SimpleSchema({
    roles:{
        type: String,
        label:"职责"
    },
    experience:{
        type:String,
        label:"经验",
        optional: true
    },
    expectedSalary:{
        type:Boolean,
        label:"期望薪资",
        optional: true
    },
    workingLocation:{
        type: String,
        allowedValues: ["海淀","西城","朝阳","宣武","还有什么区我就不知道了"],
        autoform: {
            afFieldInput: {
                firstOption: "选择地区"
            }
        },
        optional: true
    },
    emailAddress:{
        type:String,
        regEx: SimpleSchema.RegEx.Email
    },
    avatarAddress:{
        type:String,
        optional: true
    },
    lastForgotPasswordKey:{
        type:String,
        optional: true
    }


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
        optional: true
    },
    // Make sure this services field is in your schema if you're using any of the accounts packages
    services: {
        type: Object,
        optional: true,
        blackbox: true
    }
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


var imageStore = new FS.Store.OSS("images", {
    region: "oss-cn-shenzhen", //可选, 默认为 'oss-cn-hangzhou'
    internal: false, //可选, 如果使用阿里云 ECS 访问，可设置为true，使用内部路由
    bucket: "1895", //必须
    accessKeyId: "Ezv7hWtGLZjViebJ", //必须
    secretAccessKey: "mvpwKz9AfBSC8AP1HjFUBjjsbjogcB", //必须
    ACL: "private", //可选, 新文件的访问权限, 默认为 'private'
    folder: "avatar/", //可选, bucket中文件夹选项
    // The rest are generic store options supported by all storage adapters
});


Images = new FS.Collection("images", {
    stores: [imageStore]
});
