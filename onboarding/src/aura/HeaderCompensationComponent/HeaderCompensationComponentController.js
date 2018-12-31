({
    onChange: function (component, helper) {
        var res = component.find('select').get('v.value');
        var event = $A.get('e.c:optionSelected');
        event.setParams({'optionSelected': res});
        event.fire();
    }
})