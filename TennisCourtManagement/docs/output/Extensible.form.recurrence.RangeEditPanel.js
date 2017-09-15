Ext.data.JsonP.Extensible_form_recurrence_RangeEditPanel({"tagname":"class","name":"Extensible.form.recurrence.RangeEditPanel","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"RangeEditPanel.js","href":"RangeEditPanel.html#Extensible-form-recurrence-RangeEditPanel"}],"protected":true,"aliases":{"widget":["extensible.recurrence-rangeeditpanel"]},"alternateClassNames":[],"extends":"Ext.form.Panel","mixins":[],"requires":[],"uses":[],"members":[{"name":"border","tagname":"property","owner":"Extensible.form.recurrence.RangeEditPanel","id":"property-border","meta":{"private":true}},{"name":"cls","tagname":"property","owner":"Extensible.form.recurrence.RangeEditPanel","id":"property-cls","meta":{"private":true}},{"name":"editModes","tagname":"property","owner":"Extensible.form.recurrence.RangeEditPanel","id":"property-editModes","meta":{"private":true}},{"name":"headerText","tagname":"property","owner":"Extensible.form.recurrence.RangeEditPanel","id":"property-headerText","meta":{"private":true}},{"name":"layout","tagname":"property","owner":"Extensible.form.recurrence.RangeEditPanel","id":"property-layout","meta":{"private":true}},{"name":"optionAllButtonText","tagname":"property","owner":"Extensible.form.recurrence.RangeEditPanel","id":"property-optionAllButtonText","meta":{"private":true}},{"name":"optionAllDescription","tagname":"property","owner":"Extensible.form.recurrence.RangeEditPanel","id":"property-optionAllDescription","meta":{"private":true}},{"name":"optionFutureButtonText","tagname":"property","owner":"Extensible.form.recurrence.RangeEditPanel","id":"property-optionFutureButtonText","meta":{"private":true}},{"name":"optionFutureDescription","tagname":"property","owner":"Extensible.form.recurrence.RangeEditPanel","id":"property-optionFutureDescription","meta":{"private":true}},{"name":"optionSingleButtonText","tagname":"property","owner":"Extensible.form.recurrence.RangeEditPanel","id":"property-optionSingleButtonText","meta":{"private":true}},{"name":"optionSingleDescription","tagname":"property","owner":"Extensible.form.recurrence.RangeEditPanel","id":"property-optionSingleDescription","meta":{"private":true}},{"name":"getEditMode","tagname":"method","owner":"Extensible.form.recurrence.RangeEditPanel","id":"method-getEditMode","meta":{"private":true}},{"name":"getHeaderConfig","tagname":"method","owner":"Extensible.form.recurrence.RangeEditPanel","id":"method-getHeaderConfig","meta":{"private":true}},{"name":"getOptionButtonConfigs","tagname":"method","owner":"Extensible.form.recurrence.RangeEditPanel","id":"method-getOptionButtonConfigs","meta":{"private":true}},{"name":"getOptionPanelConfig","tagname":"method","owner":"Extensible.form.recurrence.RangeEditPanel","id":"method-getOptionPanelConfig","meta":{"private":true}},{"name":"getSummaryConfig","tagname":"method","owner":"Extensible.form.recurrence.RangeEditPanel","id":"method-getSummaryConfig","meta":{"private":true}},{"name":"initComponent","tagname":"method","owner":"Extensible.form.recurrence.RangeEditPanel","id":"method-initComponent","meta":{"private":true}},{"name":"onToggle","tagname":"method","owner":"Extensible.form.recurrence.RangeEditPanel","id":"method-onToggle","meta":{"private":true}},{"name":"showEditModes","tagname":"method","owner":"Extensible.form.recurrence.RangeEditPanel","id":"method-showEditModes","meta":{"private":true}}],"code_type":"ext_define","id":"class-Extensible.form.recurrence.RangeEditPanel","short_doc":"This panel is used during recurrence editing. ...","component":false,"superclasses":["Ext.form.Panel"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.form.Panel<div class='subclass '><strong>Extensible.form.recurrence.RangeEditPanel</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/RangeEditPanel.html#Extensible-form-recurrence-RangeEditPanel' target='_blank'>RangeEditPanel.js</a></div></pre><div class='doc-contents'><p>This panel is used during recurrence editing. It enables the user to indicate which\nstyle of edit is currently being performed on a recurring series. The types currently\nsupported are:</p>\n\n<ul>\n<li>Edit a single instance</li>\n<li>Edit the current and future instances (past instances are unchanged)</li>\n<li>Edit all instances in the series</li>\n</ul>\n\n\n<p>Typically this panel is created implicitly by the <a href=\"#!/api/Extensible.form.recurrence.RangeEditWindow\" rel=\"Extensible.form.recurrence.RangeEditWindow\" class=\"docClass\">Extensible.form.recurrence.RangeEditWindow</a>\nand should not typically be instantiated directly.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-border' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.form.recurrence.RangeEditPanel'>Extensible.form.recurrence.RangeEditPanel</span><br/><a href='source/RangeEditPanel.html#Extensible-form-recurrence-RangeEditPanel-property-border' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.form.recurrence.RangeEditPanel-property-border' class='name expandable'>border</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-cls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.form.recurrence.RangeEditPanel'>Extensible.form.recurrence.RangeEditPanel</span><br/><a href='source/RangeEditPanel.html#Extensible-form-recurrence-RangeEditPanel-property-cls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.form.recurrence.RangeEditPanel-property-cls' class='name expandable'>cls</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;extensible-recur-edit-options&#39;</code></p></div></div></div><div id='property-editModes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.form.recurrence.RangeEditPanel'>Extensible.form.recurrence.RangeEditPanel</span><br/><a href='source/RangeEditPanel.html#Extensible-form-recurrence-RangeEditPanel-property-editModes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.form.recurrence.RangeEditPanel-property-editModes' class='name expandable'>editModes</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{SINGLE: &#39;single&#39;, FUTURE: &#39;future&#39;, ALL: &#39;all&#39;}</code></p></div></div></div><div id='property-headerText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.form.recurrence.RangeEditPanel'>Extensible.form.recurrence.RangeEditPanel</span><br/><a href='source/RangeEditPanel.html#Extensible-form-recurrence-RangeEditPanel-property-headerText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.form.recurrence.RangeEditPanel-property-headerText' class='name expandable'>headerText</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;There are multiple events in this series. How would you like your changes applied?&#39;</code></p></div></div></div><div id='property-layout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.form.recurrence.RangeEditPanel'>Extensible.form.recurrence.RangeEditPanel</span><br/><a href='source/RangeEditPanel.html#Extensible-form-recurrence-RangeEditPanel-property-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.form.recurrence.RangeEditPanel-property-layout' class='name expandable'>layout</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{type: &#39;vbox&#39;, align: &#39;stretch&#39;}</code></p></div></div></div><div id='property-optionAllButtonText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.form.recurrence.RangeEditPanel'>Extensible.form.recurrence.RangeEditPanel</span><br/><a href='source/RangeEditPanel.html#Extensible-form-recurrence-RangeEditPanel-property-optionAllButtonText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.form.recurrence.RangeEditPanel-property-optionAllButtonText' class='name expandable'>optionAllButtonText</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;All Events&#39;</code></p></div></div></div><div id='property-optionAllDescription' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.form.recurrence.RangeEditPanel'>Extensible.form.recurrence.RangeEditPanel</span><br/><a href='source/RangeEditPanel.html#Extensible-form-recurrence-RangeEditPanel-property-optionAllDescription' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.form.recurrence.RangeEditPanel-property-optionAllDescription' class='name expandable'>optionAllDescription</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;Apply to every event in this series.&#39;</code></p></div></div></div><div id='property-optionFutureButtonText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.form.recurrence.RangeEditPanel'>Extensible.form.recurrence.RangeEditPanel</span><br/><a href='source/RangeEditPanel.html#Extensible-form-recurrence-RangeEditPanel-property-optionFutureButtonText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.form.recurrence.RangeEditPanel-property-optionFutureButtonText' class='name expandable'>optionFutureButtonText</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;Future&#39;</code></p></div></div></div><div id='property-optionFutureDescription' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.form.recurrence.RangeEditPanel'>Extensible.form.recurrence.RangeEditPanel</span><br/><a href='source/RangeEditPanel.html#Extensible-form-recurrence-RangeEditPanel-property-optionFutureDescription' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.form.recurrence.RangeEditPanel-property-optionFutureDescription' class='name expandable'>optionFutureDescription</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;Apply to this and all following events only. Past events will be unaffected.&#39;</code></p></div></div></div><div id='property-optionSingleButtonText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.form.recurrence.RangeEditPanel'>Extensible.form.recurrence.RangeEditPanel</span><br/><a href='source/RangeEditPanel.html#Extensible-form-recurrence-RangeEditPanel-property-optionSingleButtonText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.form.recurrence.RangeEditPanel-property-optionSingleButtonText' class='name expandable'>optionSingleButtonText</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;Single&#39;</code></p></div></div></div><div id='property-optionSingleDescription' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.form.recurrence.RangeEditPanel'>Extensible.form.recurrence.RangeEditPanel</span><br/><a href='source/RangeEditPanel.html#Extensible-form-recurrence-RangeEditPanel-property-optionSingleDescription' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.form.recurrence.RangeEditPanel-property-optionSingleDescription' class='name expandable'>optionSingleDescription</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;Apply to this event only. No other events in the series will be affected.&#39;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getEditMode' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.form.recurrence.RangeEditPanel'>Extensible.form.recurrence.RangeEditPanel</span><br/><a href='source/RangeEditPanel.html#Extensible-form-recurrence-RangeEditPanel-method-getEditMode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.form.recurrence.RangeEditPanel-method-getEditMode' class='name expandable'>getEditMode</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getHeaderConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.form.recurrence.RangeEditPanel'>Extensible.form.recurrence.RangeEditPanel</span><br/><a href='source/RangeEditPanel.html#Extensible-form-recurrence-RangeEditPanel-method-getHeaderConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.form.recurrence.RangeEditPanel-method-getHeaderConfig' class='name expandable'>getHeaderConfig</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getOptionButtonConfigs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.form.recurrence.RangeEditPanel'>Extensible.form.recurrence.RangeEditPanel</span><br/><a href='source/RangeEditPanel.html#Extensible-form-recurrence-RangeEditPanel-method-getOptionButtonConfigs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.form.recurrence.RangeEditPanel-method-getOptionButtonConfigs' class='name expandable'>getOptionButtonConfigs</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getOptionPanelConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.form.recurrence.RangeEditPanel'>Extensible.form.recurrence.RangeEditPanel</span><br/><a href='source/RangeEditPanel.html#Extensible-form-recurrence-RangeEditPanel-method-getOptionPanelConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.form.recurrence.RangeEditPanel-method-getOptionPanelConfig' class='name expandable'>getOptionPanelConfig</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getSummaryConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.form.recurrence.RangeEditPanel'>Extensible.form.recurrence.RangeEditPanel</span><br/><a href='source/RangeEditPanel.html#Extensible-form-recurrence-RangeEditPanel-method-getSummaryConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.form.recurrence.RangeEditPanel-method-getSummaryConfig' class='name expandable'>getSummaryConfig</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-initComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.form.recurrence.RangeEditPanel'>Extensible.form.recurrence.RangeEditPanel</span><br/><a href='source/RangeEditPanel.html#Extensible-form-recurrence-RangeEditPanel-method-initComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.form.recurrence.RangeEditPanel-method-initComponent' class='name expandable'>initComponent</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onToggle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.form.recurrence.RangeEditPanel'>Extensible.form.recurrence.RangeEditPanel</span><br/><a href='source/RangeEditPanel.html#Extensible-form-recurrence-RangeEditPanel-method-onToggle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.form.recurrence.RangeEditPanel-method-onToggle' class='name expandable'>onToggle</a>( <span class='pre'>btn</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>btn</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-showEditModes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.form.recurrence.RangeEditPanel'>Extensible.form.recurrence.RangeEditPanel</span><br/><a href='source/RangeEditPanel.html#Extensible-form-recurrence-RangeEditPanel-method-showEditModes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.form.recurrence.RangeEditPanel-method-showEditModes' class='name expandable'>showEditModes</a>( <span class='pre'>modes</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>modes</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{"protected":true}});