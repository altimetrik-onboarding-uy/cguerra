@isTest
public class CompensationControllerTest {
    
    @isTest static void testSpecificRecodType() {
        List<Compensation__c> comps;
        
        TestDataFactory.createComps(5, true);
        
        Test.startTest();
        comps = CompensationController.SpecificRecodType('Salary','Submitted');
        comps = CompensationController.SpecificRecodType('All compensations','Submitted');
        comps = CompensationController.SpecificRecodType('Salary','None');
        comps = CompensationController.SpecificRecodType('All compensations','None');
        Test.stopTest();
        System.assert(comps.size() > 0, 'Was expecting to find at least one account');
    }
    @isTest static void TestDeleteCompensationTrigger() {
        Contact cont = new Contact(FirstName='Celia', LastName='Guerra');
        insert cont;
        
        Compensation__c a = new Compensation__c(Name='TestComp', Employee__c =cont.Id, Location__c = 'India', Job_Category__c = 'Junior', Submitted__c = TRUE);
        
        insert a;
        Test.startTest();
        Database.DeleteResult result = Database.delete(a, false);
        Test.stopTest();
        
        System.assert(!result.isSuccess());
        System.assert(result.getErrors().size() > 0);
        
        
    }
    @isTest static void TestUpdateCompensationTrigger() {
        
        Contact cont = new Contact(FirstName='Celia', LastName='Guerra');
        insert cont;
        
        Compensation__c a = new Compensation__c(Name='TestComp', Employee__c =cont.Id, Location__c = 'India', Job_Category__c = 'Junior', Submitted__c = TRUE);
        insert a;
        
        Test.startTest();
        Database.SaveResult result = Database.update(a, false); 
        Test.stopTest();
        
        System.assert(!result.isSuccess());
        System.assert(result.getErrors().size() > 0);
              
    }
    
    
    @isTest static void testUpdateRecord() {
        Contact cont = new Contact(FirstName='Celia', LastName='Guerra');
        insert cont;
        
        Compensation__c a = new Compensation__c(Name='TestComp', Employee__c =cont.Id, Location__c = 'India', Job_Category__c = 'Junior', Submitted__c = FALSE);
        insert a;
        
        Test.startTest();
        CompensationController.updateRecord(a.id);
        Compensation__c comp = [Select Submitted__c From Compensation__c];
        Test.stopTest();
        System.assert(comp.Submitted__c, TRUE);
    }
    
    
}