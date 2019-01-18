trigger CompensationLockTrigger on Compensation__c (before update, before delete) {
    for(Compensation__c c: trigger.old){
        if(c.Status__c == 'SUBMITTED'){
        
            if(Trigger.isUpdate) {
                c.adderror('This Compensation cannot be updated.');
            }
            else if(Trigger.isDelete) {
                c.adderror('This Compensation cannot be deleted.');
            }
            
        
        }
    }
}