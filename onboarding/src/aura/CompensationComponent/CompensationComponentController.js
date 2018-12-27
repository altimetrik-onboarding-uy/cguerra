({
	doInitComp : function(component, event, helper) {
        component.set('v.columns', [
            {label: 'Employee\'s name', fieldName: 'Employee__r.id', type: 'text'},
            {label: 'Employee\'s date of birth', fieldName: 'Employee__r.Birthdate', type: 'date'},
            {label: 'Job Category', fieldName: 'Job_Category__c', type: 'text'},
            {label: 'Compensation Type', fieldName: 'RecordType.Name', type: 'text'},
            {label: 'Amount', fieldName: 'Amount__c',type: 'currency', typeAttributes: { currencyCode: 'UYU', maximumSignificantDigits: 5}},
            {label: 'Location', fieldName: 'Location__c', type: 'text'},
            {label: 'Office', fieldName: 'Office__c', type: 'text'},
            {label: 'Submitted', fieldName: 'Submitted__c', type: 'boolean'},
            {label: 'Status', fieldName: 'Status__c', type: 'text'},
            
        ]);
        
        var action = component.get("c.AllRecordType");
        action.setCallback(this, function(response){
            var state = response.getState();
            var resp = response.getReturnValue();
            
            console.log(resp.Amount__c);
            
            if (state === "SUCCESS") {
                component.set("v.data", resp );
            }
        });
        $A.enqueueAction(action);
        //var selected = component.find('selected').get('v.value');
        //
		
	}
})