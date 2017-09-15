/*!
 * Extensible 1.6.1
 * Copyright(c) Extensible, LLC
 * licensing@ext.ensible.com
 * http://ext.ensible.com
 */
Ext.Loader.setConfig({
    enabled: true,
    //disableCaching: false,
    paths: {
        "Extensible": "../../../src",
        "Extensible.example": "../.."
    }
});

Ext.define('Extensible.example.calendar.TestApp.App', {

    requires: [
        'Ext.container.Viewport',
        'Ext.layout.container.Border',
        'Extensible.calendar.CalendarPanel',
        'Extensible.calendar.gadget.CalendarListPanel',
        'Extensible.calendar.data.MemoryCalendarStore',
        'Extensible.calendar.data.MemoryEventStore',
        'Extensible.example.calendar.data.Events',
        'Extensible.example.calendar.data.Courts'
    ],

    constructor : function() {


	    var CPanel = Extensible.calendar.CalendarPanel;
        var ACalendar = Extensible.calendar.view.AbstractCalendar;
	    var courts = Ext.create('Ext.data.Store', {
		    fields: ['id', 'title'],
		    data : Extensible.example.calendar.data.Courts.getData().calendars
			});
	    CPanel.prototype.initComponent = Ext.Function.createSequence(CPanel.prototype.initComponent, function() {
	        this.add({
	            xtype: 'form',
	            id: 'cal-admin-form',
	            border: false,
	            bodyStyle: 'padding:25px;',
	            defaultType: 'textfield',
	            items: [{
	                fieldLabel: 'Name',
	                anchor: '90%'
	            },{
	                fieldLabel: 'Contact',
	                anchor: '90%'
	            },{
	                fieldLabel: 'Court',
	                xtype: 'combobox',
	                anchor: '90%',
	                store: courts,
	                queryMode: 'local',
    				displayField: 'title',
    				valueField: 'title'
	            },{
	                fieldLabel: 'Date',
	                xtype: 'datefield',
	                anchor: '90%'
	            },{
	            	xtype: 'gridpanel',
                    id: 'timeSlotPanel',
                    flex: 1,
                    anchor: '90%',
                    // padding: 10,
                    bodyPadding: '',
                    title: 'Taken Timeslots',
                    // store: 'Timeslots',
                    // autoLoad: true,
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            flex: 1,
                            dataIndex: 'id',
                            text: 'Timeslot'
                        }

                    ]
                }
	            ],
	            fbar: [{
	                text: 'Save',
	                handler: function() {
	                    alert('Saved');
	                    this.hideAdminForm();
	                },
	                scope: this
	            },{
	                text: 'Cancel',
	                handler: function() {
	                    Ext.getCmp('cal-admin-form').getForm().reset();
	                    this.hideAdminForm();
	                },
	                scope: this
	            }]
	        });
	    });

        

        Ext.override(ACalendar, {
            enableDD: false
        });
	    
	    Ext.override(CPanel, {
	    
	        showAdminForm: function() {
	            this.preAdminView = this.layout.activeItem.id;
	            this.setActiveView('cal-admin-form');
	            return this;
	        },
	        
	        hideAdminForm: function() {
	            if(this.preAdminView) {
	                this.setActiveView(this.preAdminView);
	                delete this.preAdminView;
	            }
	            return this;
	        },
	        
	        setActiveView: function(id) {
	            var l = this.layout,
	                tb = this.getDockedItems('toolbar')[0],
	                // Add the custom form to this check so the toolbar will be
	                // hidden and the date-specific calls below will be skipped
	                // since this is not a CalendarView subclass
	                isEditView = (id === this.id+'-edit' || id === 'cal-admin-form');
	            
	            // show/hide the toolbar first so that the layout will calculate the correct item size
	            if (tb) {
	                tb[isEditView ? 'hide' : 'show']();
	            }
	            
	            l.setActiveItem(id);
	            this.activeView = l.getActiveItem();
	            
	            if(!isEditView) {
	               if(id !== this.preEditView) {
	                    l.activeItem.setStartDate(this.startDate, true);
	                }
	               this.updateNavState();
	            }
	            this.fireViewChange();
	        }
	    });
	    
	    var eventStore = Ext.create('Extensible.calendar.data.MemoryEventStore', {
	        // defined in ../data/Events.js
	        data: Ext.create('Extensible.example.calendar.data.Events')
	    });
	    

        var startDay = 1; // The 0-based index for the day on which the calendar week begins (0=Sunday)

        // This is an example calendar store that enables event color-coding
        this.calendarStore = Ext.create('Extensible.calendar.data.MemoryCalendarStore', {
            // defined in ../data/Calendars.js
            data: Extensible.example.calendar.data.Courts.getData()
        });

        // A sample event store that loads static JSON from a local file. Obviously a real
        // implementation would likely be loading remote data via an HttpProxy, but the
        // underlying store functionality is the same.
        this.eventStore = Ext.create('Extensible.calendar.data.MemoryEventStore', {
            // defined in ../data/Events.js
            data: Extensible.example.calendar.data.Events.getData(),
            // This disables the automatic CRUD messaging built into the sample data store.
            // This test application will provide its own custom messaging. See the source
            // of MemoryEventStore to see how automatic store messaging is implemented.
            autoMsg: false
        });

        // This is the app UI layout code.  All of the calendar views are subcomponents of
        // CalendarPanel, but the app title bar and sidebar/navigation calendar are separate
        // pieces that are composed in app-specific layout code since they could be omitted
        // or placed elsewhere within the application.
        Ext.create('Ext.Viewport', {
            layout: 'border',
            renderTo: 'calendar-ct',
            items: [{
                id: 'app-header',
                region: 'north',
                height: 70,
                border: false,
                contentEl: 'app-header-content'
            },{
                id: 'app-center',
                title: '...', // will be updated to the current view's date range
                region: 'center',
                layout: 'border',
                listeners: {
                    'afterrender': function(){
                        Ext.getCmp('app-center').header.addCls('app-center-header');
                    }
                },
                items: [{
                    id:'app-west',
                    region: 'west',
                    width: 179,
                    border: false,
                    items: [{
                        xtype: 'extensible.calendarlist',
                        store: this.calendarStore,
                        border: false,
                        width: 178,
                        title: 'Courts'
                    }]
                },{
                    xtype: 'extensible.calendarpanel',
                    eventStore: this.eventStore,
                    calendarStore: this.calendarStore,
                    border: false,
                    id:'app-calendar',
                    region: 'center',
                    activeItem: 3, // month view
                    startDay: startDay,

                    // Any generic view options that should be applied to all sub views:
                    viewConfig: {
                        //enableFx: false,
                        ddIncrement: 120, //only applies to DayView and subclasses, but convenient to put it here
                        viewStartHour: 9,
                        viewEndHour: 21,
                        hourIncrement : 120,
                        // minEventDisplayMinutes: 120,
                        showTime: false
                    },

                    // View options specific to a certain view (if the same options exist in viewConfig
                    // they will be overridden by the view-specific config):
                    monthViewCfg: {
                        showHeader: true
                        // text: 'Calendar'
                        // showWeekLinks: true,
                        // showWeekNumbers: false
                    },

                    multiWeekViewCfg: {
                        //weekCount: 3
                    },
                    
                    multiDayConfig:{
                        hourIncrement : 120,
                        minEventDisplayMinutes: 120,
                    },
                    // Some optional CalendarPanel configs to experiment with:
                    // readOnly: true,
                    activeItem: 0,
                    showDayView: false,
                    // showMultiDayView: false,
                    showWeekView: true,
                    // showMultiWeekView: false,
                    // showNavJump: false,
                    // showMonthView: false,
                    showNavNextPrev: false,
                    showNavBar: false,
                    todayText: '',
                    // showTodayText: false,
                    editModal: true,
                    enableEditDetails: false,
                    //title: 'My Calendar', // the header of the calendar, could be a subtitle for the app

                    listeners: {
                        'eventclick': {
                            fn: function(vw, rec, el){
                                console.log('event click');
                                //this.clearMsg();
                            },
                            scope: this
                        },
                        'eventover': function(vw, rec, el){
                            //console.log('Entered evt rec='+rec.data[Extensible.calendar.data.EventMappings.Title.name]', view='+ vw.id +', el='+el.id);
                        },
                        'eventout': function(vw, rec, el){
                            //console.log('Leaving evt rec='+rec.data[Extensible.calendar.data.EventMappings.Title.name]+', view='+ vw.id +', el='+el.id);
                        },
                        'eventadd': {
                            fn: function(cp, rec){
                                this.showMsg('Event '+ rec.data[Extensible.calendar.data.EventMappings.Title.name] +' was added');
                            },
                            scope: this
                        },
                        'eventupdate': {
                            fn: function(cp, rec){
                                this.showMsg('Event '+ rec.data[Extensible.calendar.data.EventMappings.Title.name] +' was updated');
                            },
                            scope: this
                        },
                        'eventcancel': {
                            fn: function(cp, rec){
                                // edit canceled
                            },
                            scope: this
                        },
                        'viewchange': {
                            fn: function(p, vw, dateInfo){
                                if(dateInfo){
                                    this.updateTitle(dateInfo.viewStart, dateInfo.viewEnd);
                                }
                            },
                            scope: this
                        },
                        'dayclick': {
                            fn: function(vw, dt, ad, el){
                                this.clearMsg();
                            },
                            scope: this
                        },
                        'rangeselect': {
                            fn: function(vw, dates, onComplete){
                                this.clearMsg();
                            },
                            scope: this
                        },
                        'eventcopy': {
                            fn: function(vw, rec){
                                this.onEventCopyOrMove(rec, 'copy');
                            },
                            scope: this
                        },
                        'eventmove': {
                            fn: function(vw, rec){
                                this.onEventCopyOrMove(rec, 'move');
                            },
                            scope: this
                        },
                        'eventresize': {
                            fn: function(vw, rec){
                                rec.commit();
                                this.showMsg('Event '+ rec.data[Extensible.calendar.data.EventMappings.Title.name] +' was updated');
                            },
                            scope: this
                        },
                        'eventdelete': {
                            fn: function(win, rec){
                                this.eventStore.remove(rec);
                                this.showMsg('Event '+ rec.data[Extensible.calendar.data.EventMappings.Title.name] +' was deleted');
                            },
                            scope: this
                        },
                        'initdrag': {
                            fn: function(vw){
                                // do something when drag starts
                            },
                            scope: this
                        }
                    }
                }]
            }]
        });
    },

    // The CalendarPanel itself supports the standard Panel title config, but that title
    // only spans the calendar views.  For a title that spans the entire width of the app
    // we added a title to the layout's outer center region that is app-specific. This code
    // updates that outer title based on the currently-selected view range anytime the view changes.
    updateTitle: function(startDt, endDt){
        var p = Ext.getCmp('app-center'),
            fmt = Ext.Date.format;

        if(Ext.Date.clearTime(startDt).getTime() === Ext.Date.clearTime(endDt).getTime()){
            p.setTitle(fmt(startDt, 'F j, Y'));
        }
        else if(startDt.getFullYear() === endDt.getFullYear()){
            if(startDt.getMonth() === endDt.getMonth()){
                p.setTitle(fmt(startDt, 'F j') + ' - ' + fmt(endDt, 'j, Y'));
            }
            else{
                p.setTitle(fmt(startDt, 'F j') + ' - ' + fmt(endDt, 'F j, Y'));
            }
        }
        else{
            p.setTitle(fmt(startDt, 'F j, Y') + ' - ' + fmt(endDt, 'F j, Y'));
        }
    },
    updateTitle: function(){
        var p = Ext.getCmp('app-center');
        p.setTitle('Reservation for this Week');

    },

    // Handle event moves or copies generically
    onEventCopyOrMove: function(rec, mode) {
        var mappings = Extensible.calendar.data.EventMappings,
            time = rec.data[mappings.IsAllDay.name] ? '' : ' \\a\\t g:i a',
            action = mode === 'copy' ? 'copied' : 'moved';

        rec.commit();

        this.showMsg('Event '+ rec.data[mappings.Title.name] +' was ' + action + ' to '+
            Ext.Date.format(rec.data[mappings.StartDate.name], ('F jS'+time)));
    },

    // This is an application-specific way to communicate CalendarPanel event messages back to the user.
    // This could be replaced with a function to do "toast" style messages, growl messages, etc. This will
    // vary based on application requirements, which is why it's not baked into the CalendarPanel.
    showMsg: function(msg){
        Ext.fly('app-msg').update(msg).removeCls('x-hidden');
    },

    clearMsg: function(){
        Ext.fly('app-msg').update('').addCls('x-hidden');
    }
});

Ext.onReady(function() {
    Ext.create('Extensible.example.calendar.TestApp.App');
 //    var cp = Ext.getCmp('app-calendar');
	// // This could be anywhere within the UI, but we'll just stick
	// // it onto the end of the toolbar for convenience
	// cp.getDockedItems('toolbar')[0].add({
	// 	    text: 'Reservation Form',
	// 	    handler: function() {
	// 	        this.showAdminForm();
	// 	    },
	// 	    scope: cp
	// });
});
