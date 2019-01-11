global class scheduleCompensation implements Schedulable {
    global void execute(SchedulableContext ctx) {
        BatchCompensationSubmitted c = new BatchCompensationSubmitted();
        Database.executeBatch(c);
    }
    
}