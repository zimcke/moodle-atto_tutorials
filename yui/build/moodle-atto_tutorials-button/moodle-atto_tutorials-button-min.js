YUI.add("moodle-atto_tutorials-button",function(c,t){var i,l,r="atto_tutorials",s={INPUTSUBMIT:"atto_tutorials_selectcolumns",NEWWINDOW:"atto_tutorials_openinnewwindow",URLINPUT:"atto_tutorials_urlentry"},e='<div class="tutorial"><br><p> </p></div><div class="tutorial clearfix-tutorial"><section class="component"><h3>'+M.util.get_string("componenttitle",r)+'</h3><p class="max-2-columns">'+M.util.get_string("placeholdertexttwocolumns",r)+'</p></section></div><div class="tutorial"><br><p> </p></div>',n='<div class="tutorial"><br><p> </p></div><div class="tutorial clearfix-tutorial"><section class="component"><h3>'+M.util.get_string("componenttitle",r)+'</h3><br><section class="subcomponent"><h4>'+M.util.get_string("subcomponenttitle",r)+'</h4><p class="max-2-columns">'+M.util.get_string("placeholdertexttwocolumns",r)+'</p></section><br></section></div><div class="tutorial"><br><p> </p></div>',o='<br><section class="subcomponent"><h4>'+M.util.get_string("subcomponenttitle",r)+'</h4><p class="max-2-columns">'+M.util.get_string("placeholdertexttwocolumns",r)+"</p></section><br>",a='<div class="tutorial"><br><p> </p></div><div class="tutorial clearfix-tutorial"><section class="component"><h3>'+M.util.get_string("componenttitle",r)+'</h3><p class="no-columns">'+M.util.get_string("placeholdertextonecolumn",r)+'</p></section></div><div class="tutorial"><br><p> </p></div>',u='<div class="tutorial"><br></div><div class="tutorial clearfix-tutorial"><section class="component"><br><p> </p><h3>'+M.util.get_string("componenttitle",r)+'</h3><section class="subcomponent"><h4>'+M.util.get_string("subcomponenttitle",r)+'</h4><p class="no-columns">'+M.util.get_string("placeholdertextonecolumn",r)+'</p></section><br></section></div><div class="tutorial"><br><p> </p></div>',m='<br><section class="subcomponent"><h4>'+M.util.get_string("subcomponenttitle",r)+'</h4><p class="no-columns">'+M.util.get_string("placeholdertextonecolumn",r)+"</p></section><br>",_={component_two_columns:{template:e,icon:"component_two_columns",title:M.util.get_string("component_two_columns",r)},component_subcomponent_two_columns:{template:n,icon:"component_subcomponent_two_columns",title:M.util.get_string("component_subcomponent_two_columns",r)},subcomponent_two_columns:{template:o,icon:"subcomponent_two_columns",title:M.util.get_string("subcomponent_two_columns",r)},component_one_column:{template:a,icon:"component_one_column",title:M.util.get_string("component_one_column",r)},component_subcomponent_one_column:{template:u,icon:"component_subcomponent_one_column",title:M.util.get_string("component_subcomponent_one_column",r)},subcomponent_one_column:{template:m,icon:"subcomponent_one_column",title:M.util.get_string("subcomponent_one_column",r)}};function p(t,e){for(var n=0;n<t.length;n++)if(t[n]===e)return 1}l=i="",c.namespace("M.atto_tutorials").Button=c.Base.create("button",c.M.editor_atto.EditorPlugin,[],{_currentSelection:null,_content:null,initializer:function(){var t,e;if(!this.get("disabled")){if(t=["editor_icon1","editor_icon2"],""===i){for(e in i+='<form class="atto_form"><div id="{{elementid}}_{{innerform}}" class="mdl-align">',_)p(this.get("enabled_templates"),e)&&(i+='<a class="tutorialstemplateicon {{CSS.INPUTSUBMIT}}" alt="'+_[e].title+'" title="'+_[e].title+'" data-template="'+e+'"><img src="'+M.util.image_url("ed/"+_[e].icon,"atto_tutorials")+'"/></a>');i+="</div></form>"}""===l&&(l+='<form class="atto_form"><div class="mb-1"><label for="{{elementid}}_atto_link_textentry">{{get_string "entertext" component}}</label><input class="form-control fullwidth atto_button_text" type="text" id="{{elementid}}_atto_link_textentry" size="32"/></div>{{#if showFilepicker}}<label for="{{elementid}}_atto_link_urlentry">{{get_string "enterurl" component}}</label><div class="input-group input-append w-100 mb-1"><input class="form-control url {{CSS.URLINPUT}}" type="url" id="{{elementid}}_atto_link_urlentry"/><span class="input-group-append"><button class="btn btn-secondary openlinkbrowser" type="button">{{get_string "browserepositories" component}}</button></span></div>{{else}}<div class="mb-1"><label for="{{elementid}}_atto_link_urlentry">{{get_string "enterurl" component}}</label><input class="form-control fullwidth url {{CSS.URLINPUT}}" type="url" id="{{elementid}}_atto_link_urlentry" size="32"/></div>{{/if}}<div class="form-check"><input type="checkbox" class="form-check-input newwindow" id="{{elementid}}_{{CSS.NEWWINDOW}}"/><label class="form-check-label" for="{{elementid}}_{{CSS.NEWWINDOW}}">{{get_string "openinnewwindow" component}}</label></div><div class="mdl-align"><br/><button type="submit" class="btn btn-secondary submit">{{get_string "createlink" component}}</button></div></form>'),c.Array.each(t,function(t){this.addButton({icon:"ed/"+t,iconComponent:"atto_tutorials",buttonName:t,callback:this._displayDialogue,callbackArgs:t})},this)}},_displayDialogue:function(t,e){var n,o,i,l,s;t.preventDefault(),n=500,this._currentSelection=this.get("host").getSelection(),!1!==this._currentSelection&&(o="","editor_icon1"==e?o="templates_title":"editor_icon2"==e&&(o="button_title"),(i=this.getDialogue({headerContent:M.util.get_string(o,r),width:n+"px",focusAfterHide:e})).width!==n+"px"&&i.set("width",n+"px"),l=this._getFormContent(e),(s=c.Node.create("<div></div>")).append(l),i.set("bodyContent",s),i.show(),this.markUpdated())},_getFormContent:function(t){var e,n,o;return"editor_icon1"==t?(e=c.Handlebars.compile(i),n=c.Node.create(e({elementid:this.get("host").get("elementid"),CSS:s,component:r,clickedicon:t})),this._form=n,this._form.all("."+s.INPUTSUBMIT).on("click",this._doInsert,this),n):"editor_icon2"==t?(o=this.get("host").canShowFilepicker("link"),e=c.Handlebars.compile(l),this._content=c.Node.create(e({showFilepicker:o,component:r,CSS:s})),this._content.one(".submit").on("click",this._setLink,this),o&&this._content.one(".openlinkbrowser").on("click",function(t){t.preventDefault(),this.get("host").showFilepicker("link",
this._filepickerCallback,this)},this),this._content):void 0},_doInsert:function(t){t.preventDefault(),this.getDialogue({focusAfterHide:null}).hide(),this.editor.focus();var e=t.currentTarget.getAttribute("data-template");this.get("host").insertContentAtFocusPoint(_[e].template),this.markUpdated()},_filepickerCallback:function(t){var e;this.getDialogue().set("focusAfterHide",null).hide(),""!==t.url&&(e=this._content.one(".atto_button_text").get("value"),this._setLinkOnSelection(t.url,e),this.markUpdated())},_setLink:function(t){var e,n,o;t.preventDefault(),this.getDialogue({focusAfterHide:null}).hide(),e=this._content.one(".url"),o=this._content.one(".atto_button_text").get("value"),""!==(n=e.get("value"))&&(n=n.trim(),new RegExp(/^[a-zA-Z]*\.*\/|^#|^[a-zA-Z]*:/).test(n)||(n="http://"+n),this._setLinkOnSelection(n,o),this.markUpdated())},_setLinkOnSelection:function(t,e){var n,o,i,l=this.get("host");if(this.editor.focus(),l.setSelection(this._currentSelection),this._currentSelection[0].collapsed?((n=c.Node.create('<a class="download-button">'+e+"</a>")).setAttribute("href",t),o=l.insertContentAtFocusPoint(n.get("outerHTML")),l.setSelection(l.getSelectionFromNode(o))):(document.execCommand("unlink",!1,null),document.execCommand("createLink",!1,t),o=l.getSelectionParentNode()),o)return i=this._findSelectedAnchors(c.one(o)),c.Array.each(i,function(t){this._content.one(".newwindow").get("checked")?t.setAttribute("target","_blank"):t.removeAttribute("target")},this),o},_findSelectedAnchors:function(t){var e,n,o=t.get("tagName");return o&&"a"===o.toLowerCase()?[t]:(n=[],t.all("a").each(function(t){!e&&this.get("host").selectionContainsNode(t)&&n.push(t)},this),0<n.length?n:(e=t.ancestor("a"))?[e]:[])}},{ATTRS:{enabled_templates:{values:["component_two_columns","component_subcomponent_two_columns","subcomponent_two_columns","component_one_column","component_subcomponent_one_column","subcomponent_one_column"]}}})},"@VERSION@",{requires:["moodle-editor_atto-plugin"]});