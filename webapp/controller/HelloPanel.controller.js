sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
  
], function (Controller, MessageToast) {
   "use strict";
   return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
      onShowHello : function () {
         // read msg from i18n model
         var oBundle = this.getView().getModel("i18n").getResourceBundle();
         var sRecipient = this.getView().getModel().getProperty("/recipient/name");
         var sMsg = oBundle.getText("helloMsg", [sRecipient]);
         // show message
         MessageToast.show(sMsg);
      },
      
      onOpenDialog : function () {
			//this.getOwnerComponent().openHelloDialog();
				var oFragment = new sap.ui.xmlfragment("sap.ui.demo.walkthrough.view.HelloDialog");
				this.getView().addDependent(oFragment);
					oFragment.open();
		}
		
		
		
		
   });
});


	/*handleOpen : function(){
				
				if (!this._oConfidentialInfoDialog) {
				this._oConfidentialInfoDialog = sap.ui.xmlfragment("com.sap.view.ActionSheet",this);
				
			}
			this.getView().addDependent(this._oConfidentialInfoDialog);
			this._oConfidentialInfoDialog.open();
			
		},*/