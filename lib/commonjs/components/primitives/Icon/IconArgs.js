Object.defineProperty(exports,"__esModule",{value:true});exports.StorybookIconArgs=exports.IconArgs=void 0;var _AppProvider=require("../../core/AppProvider");var StorybookIconArgs={size:{name:'size',type:{name:'string'},defaultValue:'md',control:{type:'select'},options:Object.keys(_AppProvider.appTheme.components.Icon.sizes)},as:{name:'as',type:{name:'string'},defaultValue:'AntDesign',control:{type:'select'},options:['AntDesign','Entypo','EvilIcons','Feather','FontAwesome','FontAwesome5','Fontisto','Foundation','Ionicons','MaterialCommunityIcons','MaterialIcons','Octicons','SimpleLineIcons','Zocial']},name:{name:'name',type:{name:'string',required:true},defaultValue:'customerservice',control:{type:'text'}}};exports.StorybookIconArgs=StorybookIconArgs;var IconArgs={pages:{type:'variant',section:'sizes',row:'colorScheme',component:'states'},props:{sizes:{name:'size',type:{name:'string'},defaultValue:'md',control:{type:'select'},options:Object.keys(_AppProvider.appTheme.components.Icon.sizes).reverse()},states:[{default:{name:'default'}}]},metaData:{'heading':'Icon','sub-heading':'The Icon component.'}};exports.IconArgs=IconArgs;
//# sourceMappingURL=IconArgs.js.map