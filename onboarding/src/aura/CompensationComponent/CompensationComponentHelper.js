({
	 doInit : function(component, event) {
        var action = component.get('c.AllRecordType');
            action.setCallback(this, function(response){
                var state = response.getState();
                var resp = response.getReturnValue();
                
                if (state === "SUCCESS") {
                    component.set("v.data", resp );
                    console.log(resp);
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
})