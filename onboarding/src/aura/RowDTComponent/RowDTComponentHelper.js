({
    editRecord : function(component, event) {
        var editRecordEvent = $A.get("e.force:editRecord");
        
        editRecordEvent.setParams({
            "recordId": component.get("v.value.Id")
        });
        editRecordEvent.fire();
    },
    
    checkboxSelect : function(component, event) {
        
        var checkbox = event.getSource();
        
        var action = component.get('c.updateRecord');
       
        action.setParams({'recordId': checkbox.get("v.id")});
        
        action.setCallback(this, function(response){
            var state = response.getState();
            var resp = response.getReturnValue();
           
            if (state === "SUCCESS") {
                
                checkbox.set("v.disabled", true );
                console.log('lol');
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