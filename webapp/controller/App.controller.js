sap.ui.define([
    "sap/ui/core/mvc/Controller",
], (Controller) => {
    "use strict"
    
    return Controller.extend("ui5.walkthrough.controller.app", {  
        onInit() {
            this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass())
        }
    })
});