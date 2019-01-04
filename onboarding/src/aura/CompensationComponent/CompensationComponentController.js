({ 
    init : function(component, event, helper) {
        helper.doInit(component, event);
    },
    getSelected : function(component, event) {
        var opt = event.getParam('optionSelected');
        console.log(opt);
        if(opt === 'All compensations'){
            var action = component.get('c.AllRecordType');
            action.setCallback(this, function(response){
                var state = response.getState();
                var resp = response.getReturnValue();
                
                if (state === "SUCCESS") {
                    component.set("v.data", resp );
                }else if (state === "ERROR") {
                        var errors = response.getError();
                        if (errors) {
                            if (errors[0] && errors[0].message) {
                                console.log("Error message: " + 
                                            errors[0].message);
                            }
                        } else {
                            console.log("Unknown error");
                        }
                    }
                
            });
            $A.enqueueAction(action);
        }else{
            var action = component.get('c.SpecificRecodType');
            console.log(opt);
            action.setParam('type', opt);
            action.setCallback(this, function(response){
                var state = response.getState();
                var resp = response.getReturnValue();
                console.log(resp);
                if (state === "SUCCESS") {
                    component.set("v.data", resp );
                }else if (state === "ERROR") {
                        var errors = response.getError();
                        if (errors) {
                            if (errors[0] && errors[0].message) {
                                console.log("Error message: " + 
                                            errors[0].message);
                            }
                        } else {
                            console.log("Unknown error");
                        }
                    }
            });
            $A.enqueueAction(action);
        }
    }
    
})