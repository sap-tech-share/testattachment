sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("testattachment.controller.View1", {
            onInit: function () {
                // var that=this;
                // oAttachmentComponentPromise = this.getOwnerComponent().createComponent({
                //         usage:"attachmentReuseComponent",

                //         settings: {
                //             mode: "D", //owner._mode,
                //             objectKey: "1", //owner._objectKey,
                //             objectType: "ZOBJTEST1", //owner._objectType,
                //             semanticObject: "Attach", //owner._semanticObject,
                //             onupload: [that.handleUpload, that]}
                //     });
                // oAttachmentComponentPromise.then(function(successValue){
                // that.byId("attachmentComponentContainer").setComponent(successValue);
                // });
                var attachmentView = this.byId("attachmentComponentContainer");
                var that = this;
                var oComp = sap.ui.getCore().createComponent({
                                        name: "sap.se.mi.plm.lib.attachmentservice.attachment",
                                        id: "attachmentsrv.TestComponent1",
                                        settings: {
                                            mode: "C", //owner._mode,
                                            objectKey: "1", //owner._objectKey,
                                            objectType: "ZOBJTEST1", //owner._objectType,
                                            semanticObject: "attachment", //owner._semanticObject,
                                            onupload: [that.handleUpload, that]
                                        }
                                    });
                attachmentView.setComponent(oComp);
            }
        });
    });
