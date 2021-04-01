sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/demo/walkthrough/model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
	
], function (Controller, JSONModel,formatter,Filter,FilterOperator) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {

		onInit : function () {
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		},
		press: function(oEvent){
		var oRouter= sap.ui.core.UIComponent.getRouterFor(this);
		oRouter.navTo("detail");
		},
		formatter:formatter,
		onFilterInvoices: function(oEvent){
			var searchString= oEvent.getParameter("query"); 
				var oFilter = new Filter("ProductName",FilterOperator.Contains,searchString);
				
				var oMainfilters= new Filter({
					filters:[oFilter]
					
				});
				
				var aFilter= [oMainfilters];
				var oList = this.getView().byId("invoiceList");
				oList.getBinding("items").filter(aFilter);
			
			
		}

	});
});