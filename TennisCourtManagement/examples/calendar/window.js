/*!
 * Extensible 1.6.1
 * Copyright(c) Extensible, LLC
 * licensing@ext.ensible.com
 * http://ext.ensible.com
 */
Ext.Loader.setConfig({
    enabled: true,
    disableCaching: false,
    paths: {
        "Extensible": "../../src",
        "Extensible.example": ".."
    }
});
Ext.require([
    'Ext.window.Window',
    'Extensible.calendar.data.MemoryEventStore',
    'Extensible.calendar.CalendarPanel',
    'Extensible.example.calendar.data.Events'
]);

Ext.onReady(function(){
    var showWindow = function(){
        if(!this.calendarWin){
            this.calendarWin = Ext.create('Ext.window.Window', {
                layout: 'fit',
                title: 'Calendar Window',
                width: 600,
                height: 400,
                modal: true,
                closeAction: 'hide',
                items: {
                    // xtype is supported:
                    xtype: 'extensible.calendarpanel',
                    eventStore: Ext.create('Extensible.calendar.data.MemoryEventStore', {
                        // defined in ../data/Events.js
                        data: Extensible.example.calendar.data.Events.getData()
                    })
                }
            });
        }
        this.calendarWin.show();
    };

    Ext.fly('cal-win').on('click', showWindow, this);

    showWindow();
});
