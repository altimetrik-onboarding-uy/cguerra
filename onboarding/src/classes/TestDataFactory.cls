@isTest
public class TestDataFactory {
    public static List<Compensation__c> createComps(Integer numComp) {
        Contact cont = new Contact(FirstName='Celia', LastName='Guerra');
        insert cont;
        
        List<Compensation__c> comp = new List<Compensation__c>();
        
        for(Integer i=0;i<numComp;i++) {
            Compensation__c a = new Compensation__c(Name='TestComp'+ i, Employee__c =cont.Id, Location__c = 'India', Job_Category__c = 'Junior', Submitted__c = TRUE);
            comp.add(a);
        }
        insert comp;
        return comp;
        
    }
    
}