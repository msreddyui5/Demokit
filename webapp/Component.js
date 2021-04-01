sap.ui.define([
	"sap/ui/core/UIComponent",
		"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel",
	"./controller/HelloDialog"
	],function(UIComponent,JSONModel,ResourceModel,HelloDialog){
		
		return UIComponent.extend("sap.ui.demo.walkthrough.Component",{
			 metadata : {
         "manifest":"json"
          },
			
			init:function(){
			 // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
				
				// set data model
					var oData = {
            recipient : {
               name : "World"
            }
         };
         var oModel = new JSONModel(oData);
         //oModel.loadData("localService/mockdata/Invoices.json");
         this.setModel(oModel);
         //set i18n model
         var i18nModel = new ResourceModel({
         bundleName:"sap.ui.demo.walkthrough.i18n.i18n"	
         });
         this.setModel(i18nModel,"i18n");
         //st Dialog
         this._helloDialog = new HelloDialog(this.getRootControl());
         // create the views based on the url/hash
			this.getRouter().initialize();
			},
		openHelloDialog: function(){
				this._helloDialog.open();
			},
			exit: function(){
				this._helloDialog.destroy();
				delete this._helloDialog();
			}
			
			
		});
		
		
	});