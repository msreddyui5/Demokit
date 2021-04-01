sap.ui.define([
	"sap/ui/base/ManagedObject",
	"sap/ui/core/Fragment"
	
	],function(ManagedObject,Fragment){
		
		return ManagedObject.extend("sap.ui.demo.walkthrough.controller.HelloDialog",{
			constructor : function (oView) {
			this._oView = oView;
		},

		exit : function () {
			delete this._oView;
		},
		Fragment:Fragment,
		open : function () {
		/*	var oView = this.getView();

			// create dialog lazily
			if (!this.byId("helloDialog")) {
				// load asynchronous XML fragment
				Fragment.load({
					id: oView.getId(),
					name: "sap.ui.demo.walkthrough.view.HelloDialog"
				}).then(function (oDialog) {
					// connect dialog to the root view of this component (models, lifecycle)
					oView.addDependent(oDialog);
					oDialog.open();
				});
			} else {
				this.byId("helloDialog").open();
			}*/
			var oFragment = new sap.ui.xmlfragment("sap.ui.demo.walkthrough.view.HelloDialog");
				this.getView().addDependent(oFragment);
					oFragment.open();
		}
		/*onCloseDialog : function () {
			this.byId("helloDialog").close();
		}*/
			
		});
		
		
		
	});