({
    onChange: function (component, helper) {
        var rtype = component.find('recordTOpt').get('v.value');  
        var statusOpt = component.find('statusOpt').get('v.value');        
        
        
        var event = $A.get('e.c:optionSelected');
        event.setParams({'optionRType': rtype, 'optionStatus':statusOpt});
        event.fire();
        
    }
})