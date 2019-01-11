public with sharing class CompensationController {
    
    @AuraEnabled
    public static List<Compensation__C> SpecificRecodType(String type, String status) {
        
        List<Compensation__C> comp = new List<Compensation__C>();
        
        //Check conditions for filtering
        if((type == 'All compensations' && status == 'None') || (type == null && status == null) ){
            comp = [Select Id, Job_Category__c, Amount__c, Location__c,
                    Office__c, Submitted__c, Employee__r.Name,  Employee__r.Birthdate,
                    RecordType.Name, Status__c From Compensation__C LIMIT 1000];
            
            return comp;           
            
        }
        else if(type != 'All compensations' && status == 'None'){
            String typeList = [SELECT Id FROM RecordType WHERE Name =: type].id;
            comp = [Select Id, Job_Category__c, Amount__c, Location__c,
                    Office__c, Submitted__c, Employee__r.Name,  Employee__r.Birthdate,
                    RecordType.Name, Status__c From Compensation__C WHERE RecordTypeId =: typeList LIMIT 1000];
            
            return comp;           
            
        }
        else if(type == 'All compensations' && status != 'None'){
            comp = [Select Id, Job_Category__c, Amount__c, Location__c,
                    Office__c, Submitted__c, Employee__r.Name,  Employee__r.Birthdate,
                    RecordType.Name, Status__c From Compensation__C WHERE Status__c =: status LIMIT 1000];
            
            return comp;           
            
        }else{
            String typeList = [SELECT Id FROM RecordType WHERE Name =: type].id;
            comp = [Select Id, Job_Category__c, Amount__c, Location__c,
                    Office__c, Submitted__c, Employee__r.Name,  Employee__r.Birthdate,
                    RecordType.Name, Status__c From Compensation__C WHERE RecordTypeId =: typeList AND Status__c=: status LIMIT 1000];
            
            return comp;
        }
        
    }
    @AuraEnabled
    public static void updateRecord(String recordId) {
        
        Compensation__c updatedRec = [Select Id From Compensation__c Where Id=: recordId];
        updatedRec.Submitted__c = true;
        
        Database.SaveResult result = Database.update(updatedRec);
        if (result.isSuccess()) {
            system.debug('Successful Compensation update');
            
        } else {
            System.debug('Error updating Compensation');
            
        }
         
    }
}