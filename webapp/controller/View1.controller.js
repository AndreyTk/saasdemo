sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/library',
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, library, JSONModel) {
        "use strict";
        var toast; 

        return Controller.extend("saasdemo.controller.View1", {
            onInit: function () {
                var oViewModel = new JSONModel({
                    sSelectedType : library.IllustratedMessageType.SimpleBalloon,
                    sSelectedSize: library.IllustratedMessageSize.Scene
                    
                });

                this.getView().setModel(oViewModel);
                toast = this.getView().byId("toast");                  
            },

            getSubdomen: function() {
                var url = window.location.href.split("-")[0].substring(8);
                                
                toast.setText("Поточний субдомен: " + url);
                toast.show(); 
            }
        });
    });
