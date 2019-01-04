({
	editRecord : function(component, event, helper) {
    var editRecordEvent = $A.get("e.force:editRecord");
        console.log(editRecordEvent, "hola");
    editRecordEvent.setParams({
         "recordId": component.get("v.value.Id")
   });
    editRecordEvent.fire();
}
})