Ext.define('Extensible.example.calendar.data.Timeslots', {
    extend: 'Ext.data.Store',
    alias: 'store.Timeslots',
    data:  
            {
                "id"        : 1,
                "timeslot"  : "9:00 AM to 11:00 AM",
                "checked"   : 0
            },{
                "id"        : 2,
                "timeslot"  : "11:00 AM to 01:00 PM",
                "checked"   : 0
            },{
                "id"        : 3,
                "timeslot"  : "01:00 PM to 03:00 PM",
                "checked"   : 0
            },{
                "id"        : 4,
                "timeslot"  : "03:00 PM to 05:00 PM",
                "checked"   : 0
            },{
                "id"        : 5,
                "timeslot"  : "05:00 PM to 07:00 PM",
                "checked"   : 0
            },{
                "id"        : 6,
                "timeslot"  : "07:00 PM to 01:00 PM",
                "checked"   : 0
            }  
});

Ext.define('TimeslotModel', {
    extend: 'Ext.data.Model',
    fields:     [{
                    name         : 1,
                    timeslot    : "9:00 AM to 11:00 AM",
                    checked     : 0
                },{
                    id          : 2,
                    timeslot    : "11:00 AM to 01:00 PM",
                    checked     : 0
                },{
                    id          : 3,
                    timeslot    : "01:00 PM to 03:00 PM",
                    checked     : 0
                },{
                    id          : 4,
                    timeslot    : "03:00 PM to 05:00 PM",
                    checked     : 0
                },{
                    id          : 5,
                    timeslot    : "05:00 PM to 07:00 PM",
                    checked     : 0
                },{
                    id          : 6,
                    Timeslots   : "07:00 PM to 01:00 PM",
                    checked     : 0
                }]
});