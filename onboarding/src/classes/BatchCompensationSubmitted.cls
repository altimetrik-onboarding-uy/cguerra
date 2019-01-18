global class BatchCompensationSubmitted implements Database.Batchable<sObject> {
   
   public String query = 'SELECT Id, Submitted__c, CreatedDate FROM Compensation__c Where Submitted__c = false AND CreatedDate < LAST_N_DAYS:2';
   

   global Database.QueryLocator start(Database.BatchableContext BC){
      return Database.getQueryLocator(query);
   }

   global void execute(Database.BatchableContext BC, List<Compensation__c> scope){
      
       for (sObject item: scope) {
          Compensation__c comp = (Compensation__c)item;
          comp.Submitted__c = true;
           system.debug(comp);
          }
      
      update scope;
   }

   global void finish(Database.BatchableContext BC){
       //We could notify an admin here, but we're not doing it :P
   }
}