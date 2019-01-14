global class scheduleCompensationBatch implements Schedulable {
    global void execute(SchedulableContext ctx) {
        BatchCompensationSubmitted c = new BatchCompensationSubmitted();
        Database.executeBatch(c);
    }
    
}