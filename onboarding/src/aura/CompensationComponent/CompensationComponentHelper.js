({
    doSelected : function(component, event) {
        var rtype = event.getParam('optionRType');
        var status = event.getParam('optionStatus');
        
        
        var action = component.get('c.SpecificRecodType');
        
        action.setParams({'type': rtype, 'status': status });
        
        action.setCallback(this, function(response){
            var state = response.getState();
            var resp = response.getReturnValue();
            
            
            if (state === "SUCCESS") {
                component.set("v.data", resp );
                
                
            }else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                    errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
    },
    convertArrayOfObjectsToCSV : function(component,objectRecords){
        // declare variables
        var csvStringResult, counter, keys, columnDivider, lineDivider;
        
        // check if "objectRecords" parameter is null, then return from function
        if (objectRecords == null || !objectRecords.length) {
            return null;
        }
        // store ,[comma] in columnDivider variabel for sparate CSV values and 
        // for start next line use '\n' [new line] in lineDivider varaible  
        columnDivider = ',';
        lineDivider =  '\n';
        
        // in the keys valirable store fields API Names as a key 
        // this labels use in CSV file header  
        
        var keys = ["Id","Employee\'s Name","Employee\'s Birthdate","Job Category","Amount","Location",
                 "Office","Submitted","RecordType","Status"];
        
        
        csvStringResult = '';
        csvStringResult += keys.join(columnDivider);
        csvStringResult += lineDivider;
        
        console.log(objectRecords[0]);
        
        for(var i=0; i < objectRecords.length; i++){
            
            csvStringResult += '"'+ objectRecords[i].Id+'",';
            csvStringResult += '"'+ objectRecords[i].Employee__r.Name+'",';
            csvStringResult += '"'+ objectRecords[i].Employee__r.Birthdate+'",';
            csvStringResult += '"'+ objectRecords[i].Job_Category__c+'",';
            csvStringResult += '"'+ objectRecords[i].Amount__c+'",';
            csvStringResult += '"'+ objectRecords[i].Location__c+'",';
            csvStringResult += '"'+ objectRecords[i].Office__c+'",';
            csvStringResult += '"'+ objectRecords[i].Submitted__c+'",';
            csvStringResult += '"'+ objectRecords[i].RecordType.Name+'",';
            csvStringResult += '"'+ objectRecords[i].Status__c+'"';
           
            csvStringResult += lineDivider;
        }// outer main for loop close 
       
        return csvStringResult.replace(/undefined/g, " ");       
    }
})