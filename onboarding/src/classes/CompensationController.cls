public with sharing class CompensationController {
    
    @AuraEnabled
    public static List<Compensation__C> AllRecordType() {
        List<Compensation__C> comp = [Select Job_Category__c, Amount__c, Location__c, Office__c, Submitted__c, Status__c, Employee__r.Name,  Employee__r.Birthdate, RecordType.Name From Compensation__C];
    return comp;
    }
    @AuraEnabled
    public static List<Compensation__C> SpecificRecodType(String type) {
        String typeList = [SELECT Id FROM RecordType WHERE Name =: type].id;
        List<Compensation__C> comp = [Select Job_Category__c, Amount__c, Location__c, Office__c, Submitted__c, Status__c, Employee__r.Name,  Employee__r.Birthdate, RecordType.Name From Compensation__C where RecordTypeId =: typeList limit 1000];
    return comp;
    }
    
}