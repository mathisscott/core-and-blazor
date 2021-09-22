console.log('HOWDY');

Blazor.registerCustomEventType("closeChange", {
    browserEventName: 'closeChange',
    createEventArgs: event => {
        console.log('🎃: ', event);
        let isSomething = true;

        return {
            wat: isSomething
        }
    }
})