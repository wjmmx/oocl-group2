/*!
 * Extensible 1.6.1
 * Copyright(c) Extensible, LLC
 * licensing@ext.ensible.com
 * http://ext.ensible.com
 */
Ext.define('Extensible.example.calendar.data.Events', {
    statics: {
        getData: function() {
            var today = Ext.Date.clearTime(new Date()),
                makeDate = function(d, h, m, s){
                    d = d * 86400;
                    h = (h || 0) * 3600;
                    m = (m || 0) * 60;
                    s = (s || 0);
                    return Ext.Date.add(today, Ext.Date.SECOND, d + h + m + s);
                };

            return {
                "evts" : [{
                    "id"    : 1001,
                    "cid"   : 1,
                    "title" : "Caloi Licup",
                    "start" : '2017-09-15 09:00:00',
                    "end"   : '2017-09-15 11:00:00'
                },{
                    "id"    : 1002,
                    "cid"   : 2,
                    "title" : "Jag Gervacio",
                    "start" : '2017-09-15 09:00:00',
                    "end"   : '2017-09-15 11:00:00'
                }]
            };
        }
    }
});
