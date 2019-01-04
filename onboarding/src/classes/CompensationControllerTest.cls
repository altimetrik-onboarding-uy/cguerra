@isTest
public class CompensationControllerTest {
    
    @isTest static void testAllRecordType() {
        List<Compensation__c> comps;
        
        TestDataFactory.createComps(5);
        
        Test.startTest();
        comps = CompensationController.AllRecordType();
        Test.stopTest();
        System.assert(comps.size() > 0, 'Was expecting to find at least one account');
    }
    
    @isTest static void testSpecificRecodType() {
        List<Compensation__c> comps;
        
        TestDataFactory.createComps(5);
        
        Test.startTest();
        comps = CompensationController.SpecificRecodType('Salary');
        Test.stopTest();
        System.assert(comps.size() > 0, 'Was expecting to find at least one account');
    }
    @isTest static void TestDeleteCompensation() {
        Contact cont = new Contact(FirstName='Celia', LastName='Guerra');
        insert cont;
        
        Compensation__c a = new Compensation__c(Name='TestComp', Employee__c =cont.Id, Location__c = 'India', Job_Category__c = 'Junior', Submitted__c = TRUE);
        
        insert a;
        
        // Perform test
        Test.startTest();
        
        Database.DeleteResult result = Database.delete(a, false);        
        
        Test.stopTest();
        // Verify 
        // In this case the deletion should have been stopped by the trigger,
        // so verify that we got back an error.
        System.assert(!result.isSuccess());
        System.assert(result.getErrors().size() > 0);
        
        
    }
    @isTest static void TestUpdateCompensation() {
        
       Contact cont = new Contact(FirstName='Celia', LastName='Guerra');
        insert cont;
        
        Compensation__c a = new Compensation__c(Name='TestComp', Employee__c =cont.Id, Location__c = 'India', Job_Category__c = 'Junior', Submitted__c = TRUE);
        
        insert a;
        // Perform test
        Test.startTest();
        
        Database.SaveResult result = Database.update(a, false);        
        
        Test.stopTest();
        // Verify 
        // In this case the deletion should have been stopped by the trigger,
        // so verify that we got back an error.
        System.assert(!result.isSuccess());
        System.assert(result.getErrors().size() > 0);
        
        
            }
    
    
}