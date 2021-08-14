(this.webpackJsonpwerkweek=this.webpackJsonpwerkweek||[]).push([[0],{273:function(e,t,a){},274:function(e,t,a){},275:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(21),i=a.n(r),l=a(13),c=a.n(l),s=a(18),d=a(98),u=a(5),m=a(6),p=a(8),h=a(7),f=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"button-list"},o.a.createElement("button",{onClick:function(){return e.props.addWidget("stopwatch")},className:"m--xsm"},"Add Stopwatch"),o.a.createElement("button",{onClick:function(){return e.props.addWidget("countdown")},className:"m--xsm"},"Add Countdown"),o.a.createElement("button",{onClick:function(){return e.props.addWidget("alarm")},className:"m--xsm"},"Add Alarm"))}}]),a}(o.a.Component),b=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={textAreaClassName:"note-container hidden"},e.handleKeyPress=function(e){13===(e.keyCode?e.keyCode:e.which)&&e.target.blur()},e.openNotes=function(){var t=e.state.textAreaClassName;t=t.includes("hidden")?"note-container":"note-container hidden",e.setState({textAreaClassName:t})},e}return Object(m.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"border-curve--top",style:{backgroundColor:this.props.backgroundColor}}," ",o.a.createElement("div",{className:"p--sml flex-container--centered"},o.a.createElement("textarea",{name:this.props.inputName,className:"title__input",rows:"1",onKeyDown:this.handleKeyPress,onChange:this.props.onChange,onBlur:this.props.onChange,value:this.props.titleValue})),o.a.createElement("div",null,o.a.createElement("button",{className:"close-button",onClick:this.props.onDelete},o.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-x",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",d:"M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"}),o.a.createElement("path",{fillRule:"evenodd",d:"M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"}))),o.a.createElement("button",{className:"note-button",onClick:this.openNotes},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512",height:"1em",width:"1em"},o.a.createElement("title",null,"Document Text"),o.a.createElement("path",{d:"M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z",fill:"none",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"32"}),o.a.createElement("path",{d:"M256 56v120a32 32 0 0032 32h120M176 288h160M176 368h160",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"}))),o.a.createElement("div",{className:this.state.textAreaClassName},o.a.createElement("textarea",{className:"note-container_textarea",placeholder:"Add a note..."}))))}}]),a}(o.a.Component),g=a(95),C={red:{light:"#ff7675",dark:"#DC3632"},blue:{light:"#74b9ff",dark:"#117ACA"},green:{light:"#55efc4",dark:"#05856C"},teal:{light:"#81ecec",dark:"#02A4A0"},yellow:{light:"#ffeaa7",dark:"#CD8600"},purple:{light:"#a29bfe",dark:"#6c5ce7"},orange:{light:"#fab1a0",dark:"#e17055"},pink:{light:"#fd79a8",dark:"#D13581"},gray:{light:"#707070",dark:"#343232"}},v=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={color:e.props.color,displayColorPicker:e.props.displayColorPicker},e.handleColorPickerClose=function(){e.setState({displayColorPicker:!1})},e.toggleDisplayColorPicker=function(){e.setState({displayColorPicker:!e.state.displayColorPicker})},e}return Object(m.a)(a,[{key:"render",value:function(){return this.state.displayColorPicker?o.a.createElement("div",{className:"color-selection-button-container"},o.a.createElement("button",{type:"button",style:{backgroundColor:this.props.color},onClick:this.toggleDisplayColorPicker}),o.a.createElement("div",{className:"picker-container"},o.a.createElement(g.TwitterPicker,{color:this.props.color,colors:Object.values(C).map((function(e){return e.dark})),onChange:this.props.onChange,triangle:"top-right"})),o.a.createElement("div",{className:"cover",onClick:this.handleColorPickerClose})):o.a.createElement("div",{className:"color-selection-button-container"},o.a.createElement("button",{style:{backgroundColor:this.props.color},onClick:this.toggleDisplayColorPicker}))}}]),a}(o.a.Component),E=a(3),w=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={timerOn:!1,timerStart:0,timerTime:0,color:C.red.dark,title:"Stopwatch",lastIntervalTime:0},e.startTimer=function(){e.setState({timerOn:!0,timerTime:e.state.timerTime,timerStart:Date.now()-e.state.timerTime},(function(){Object(E.c)(e.props.id,e.state)})),e.timer=setInterval((function(){e.setState({timerTime:Date.now()-e.state.timerStart,lastIntervalTime:Date.now()},(function(){Object(E.c)(e.props.id,e.state)}))}),10)},e.stopTimer=function(){e.setState({timerOn:!1},(function(){Object(E.c)(e.props.id,e.state)})),clearInterval(e.timer)},e.resetTimer=function(){e.setState({timerStart:0,timerTime:0,lastIntervalTime:0},(function(){Object(E.c)(e.props.id,e.state)}))},e.handleKeyPress=function(e){13===(e.keyCode?e.keyCode:e.which)&&e.target.blur()},e.handleChange=function(t){e.setState({title:t.target.value},(function(){Object(E.c)(e.props.id,e.state)}))},e.handleColorChange=function(t){e.setState({color:t.hex},(function(){Object(E.c)(e.props.id,e.state)}))},e.addTime=function(t){e.state.timerOn&&e.stopTimer(),e.setState({timerTime:e.state.timerTime+t},(function(){Object(E.c)(e.props.id,e.state)}))},e.componentDidMount=Object(s.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(E.b)(e.props.id);case 2:(a=t.sent)?a.timerOn&&(a.timerTime=a.timerTime+(Date.now()-a.lastIntervalTime),e.startTimer()):(a={timerOn:!1,timerStart:0,timerTime:0,color:C.red.dark,title:"Stopwatch"},Object(E.c)(e.props.id,a)),e.setState(a);case 5:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.state.timerTime,a=("0"+Math.floor(t/10)%100).slice(-2),n=("0"+Math.floor(t/1e3)%60).slice(-2),r=("0"+Math.floor(t/6e4)%60).slice(-2),i=("0"+Math.floor(t/36e5)).slice(-2),l={borderColor:this.state.color};return o.a.createElement("div",{className:"flex-container--column widget-container border-curve",style:l},o.a.createElement(b,{titleValue:this.state.title,backgroundColor:this.state.color,onDelete:function(){return e.props.deleteWatch(e.props.id)},onChange:this.handleChange,inputName:"title"}),o.a.createElement("div",{className:"p--sml flex-container--column flow--sml"},o.a.createElement("div",{className:"flex-container--centered"},o.a.createElement("div",{className:"Stopwatch-display"},o.a.createElement("span",{className:"monospace text--lrg"},i,":",r,":",n,":",a))),o.a.createElement("div",{className:"button-list"},!1===this.state.timerOn&&0===this.state.timerTime&&o.a.createElement("button",{onClick:this.startTimer},o.a.createElement("ion-icon",{name:"play"}),o.a.createElement("span",null,"Start")),!0===this.state.timerOn&&o.a.createElement("button",{onClick:this.stopTimer},o.a.createElement("ion-icon",{name:"pause"}),o.a.createElement("span",null,"Pause")),!1===this.state.timerOn&&this.state.timerTime>0&&o.a.createElement("button",{onClick:this.startTimer},o.a.createElement("ion-icon",{name:"play"}),o.a.createElement("span",null,"Resume")),!1===this.state.timerOn&&this.state.timerTime>0&&o.a.createElement("button",{onClick:this.resetTimer},o.a.createElement("ion-icon",{style:{"--ionicon-stroke-width":"48px"},name:"refresh"}),o.a.createElement("span",null,"Reset"))),o.a.createElement("div",{className:"button-list"},o.a.createElement("button",{className:"monospace",onClick:function(){return e.addTime(6e4)}},"+1:00"),o.a.createElement("button",{className:"monospace",onClick:function(){return e.addTime(9e5)}},"+15:00"),o.a.createElement("button",{className:"monospace",onClick:function(){return e.addTime(36e5)}},"+60:00")),o.a.createElement("div",{className:"button-list flex-container"},o.a.createElement("button",{className:"monospace",disabled:this.state.timerTime<6e4,onClick:function(){return e.addTime(-6e4)}},"-1:00"),o.a.createElement("button",{className:"monospace",disabled:this.state.timerTime<9e5,onClick:function(){return e.addTime(-9e5)}},"-15:00"),o.a.createElement("button",{className:"monospace",disabled:this.state.timerTime<36e5,onClick:function(){return e.addTime(-36e5)}},"-60:00"),o.a.createElement(v,{color:this.state.color,displayColorPicker:!1,onChange:this.handleColorChange}))))}}]),a}(n.Component),k=a(29),O=a(40),y=a(23),N=a.n(y),j={date:Date.now()+100,displayCountdown:!1,hour:"",minute:"",second:"",title:"Countdown",isPaused:!1,color:C.teal.dark},S=function(e){var t=e.hours,a=e.minutes,n=e.seconds;return o.a.createElement("div",{className:"flex-container--centered"},o.a.createElement("input",{value:t,name:"hour",maxLength:"2",placeholder:"HH","aria-label":"Hour",className:"countdown__input  p--sml",readOnly:!0}),o.a.createElement("span",{className:"m--sml"},":"),o.a.createElement("input",{value:a,name:"minute",maxLength:"2",placeholder:"MM","aria-label":"Minute",className:"countdown__input p--sml",readOnly:!0}),o.a.createElement("span",{className:"m--sml"},":"),o.a.createElement("input",{value:n,name:"second",maxLength:"2",placeholder:"SS","aria-label":"Second",className:"countdown__input  p--sml",readOnly:!0}))},x=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state=j,e.countdownApi=null,e.componentDidMount=Object(s.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(E.b)(e.props.id);case 2:(a=t.sent)||(a=j,Object(E.c)(e.props.id,a)),e.setState(a);case 5:case"end":return t.stop()}}),t)}))),e.handleCountdownInputChange=function(t){e.setState(Object(k.a)({},t.target.name,t.target.value.replace(/\D/,"")),(function(){Object(E.c)(e.props.id,e.state)}))},e.handleChange=function(t){e.setState(Object(k.a)({},t.target.name,t.target.value),(function(){Object(E.c)(e.props.id,e.state)}))},e.handleSubmit=function(t){if(t.preventDefault(),0!==e.state.value){var a=N()().add(e.state.hour,"h").add(e.state.minute,"m").add(e.state.second,"s").toDate();e.setState({date:a,displayCountdown:!0},(function(){Object(E.c)(e.props.id,e.state)}))}},e.handleStartClick=function(){e.countdownApi&&e.countdownApi.start()},e.handlePauseClick=function(){e.countdownApi&&e.countdownApi.pause(),e.setState({})},e.handleResetClick=function(){e.setState({date:Date.now(),displayCountdown:!1,hour:"",minute:"",second:""},(function(){Object(E.c)(e.props.id,e.state)}))},e.handleUpdate=function(){e.forceUpdate()},e.handleComplete=function(){new Notification("".concat(e.state.title)),e.forceUpdate()},e.handlePause=function(){e.forceUpdate()},e.handleKeyDown=function(t){"Enter"===t.key&&e.handleSubmit()},e.handleColorChange=function(t){e.setState({color:t.hex},(function(){Object(E.c)(e.props.id,e.state)}))},e.setRef=function(t){t&&(e.countdownApi=t.getApi())},e.isPaused=function(){return!(!e.countdownApi||!e.countdownApi.isPaused())},e.isCompleted=function(){return!(!e.countdownApi||!e.countdownApi.isCompleted())},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"flex-container--column widget-container border-curve"},o.a.createElement(b,{titleValue:this.state.title,backgroundColor:this.state.color,onDelete:function(){return e.props.deleteWidget(e.props.id)},onChange:this.handleChange,inputName:"title"}),!this.state.displayCountdown&&o.a.createElement("div",{className:"p--sml"},o.a.createElement("form",{action:"",className:"flow--med",onSubmit:this.handleSubmit},o.a.createElement("div",{className:"flex-container--centered countdown-display"},o.a.createElement("input",{value:this.state.hour,name:"hour",onChange:this.handleCountdownInputChange,maxLength:"2",placeholder:"HH","aria-label":"Hour",className:"countdown__input  p--sml"}),o.a.createElement("span",{className:"m--sml"},":"),o.a.createElement("input",{value:this.state.minute,name:"minute",onChange:this.handleCountdownInputChange,maxLength:"2",placeholder:"MM","aria-label":"Minute",className:"countdown__input  p--sml"}),o.a.createElement("span",{className:"m--sml"},":"),o.a.createElement("input",{value:this.state.second,name:"second",onChange:this.handleCountdownInputChange,maxLength:"2",placeholder:"SS","aria-label":"Second",className:"countdown__input  p--sml"})),o.a.createElement("label",{htmlFor:"submit",className:"button",tabIndex:"0",onKeyDown:this.handleKeyDown},o.a.createElement("input",{id:"submit",type:"submit",value:"Start",className:"hidden"}),o.a.createElement("ion-icon",{name:"play"}),o.a.createElement("span",null,"Start"))),o.a.createElement("div",{className:"flex-container"},o.a.createElement(v,{color:this.state.color,displayColorPicker:!1,onChange:this.handleColorChange}))),this.state.displayCountdown&&o.a.createElement("div",{className:"flow--med p--sml"},o.a.createElement(O.a,{key:this.state.date,ref:this.setRef,date:this.state.date,onMount:this.handleUpdate,onStart:this.handleUpdate,onPause:this.handlePause,onComplete:this.handleComplete,renderer:S,autoStart:!0}),o.a.createElement("div",{className:"button-list"},o.a.createElement("button",{type:"button",onClick:this.handleStartClick,disabled:!this.isPaused()||this.isCompleted()},o.a.createElement("ion-icon",{name:"play"}),o.a.createElement("span",null,"Start")),o.a.createElement("button",{type:"button",onClick:this.handlePauseClick,disabled:this.isPaused()||this.isCompleted()},o.a.createElement("ion-icon",{name:"pause"}),o.a.createElement("span",null,"Pause"))," ",o.a.createElement("button",{type:"button",onClick:this.handleResetClick},o.a.createElement("ion-icon",{style:{"--ionicon-stroke-width":"48px"},name:"refresh"}),o.a.createElement("span",null,"Reset"))),o.a.createElement("div",{className:"flex-container"},o.a.createElement(v,{color:this.state.color,displayColorPicker:!1,onChange:this.handleColorChange}))))}}]),a}(o.a.Component),A=a(9),T=a(97),P=a(96),D=a.n(P),M=[{value:"am",label:"AM"},{value:"pm",label:"PM"}],W=function(e){var t=e.hours,a=e.minutes,n=e.seconds;return o.a.createElement("div",{className:"flex-container--centered"},o.a.createElement("span",{name:"hour","aria-label":"Hour",className:"monospace italic"},t),o.a.createElement("span",{className:"m--sml"},":"),o.a.createElement("span",{name:"minute","aria-label":"Minute",className:"monospace italic"},a),o.a.createElement("span",{className:"m--sml"},":"),o.a.createElement("span",{name:"second","aria-label":"Second",className:"monospace italic"},n))},_=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={title:"Alarm",color:C.blue.dark,selectedOption:{value:"am",label:"AM"},hour:"",minute:"",date:Date.now()},e.countdownApi=null,e.componentDidMount=Object(s.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(E.b)(e.props.id);case 2:(a=t.sent)&&e.setState(a);case 4:case"end":return t.stop()}}),t)}))),e.handleStopClick=function(){e.setState({displayCountdown:!1},(function(){Object(E.c)(e.props.id,e.state)}))},e.handleUpdate=function(){e.forceUpdate()},e.handleComplete=function(){new Notification("".concat(e.state.title)),e.setState({displayCountdown:!1})},e.setRef=function(t){t&&(e.countdownApi=t.getApi())},e.isPaused=function(){return!(!e.countdownApi||!e.countdownApi.isPaused())},e.isCompleted=function(){return!(!e.countdownApi||!e.countdownApi.isCompleted())},e.handleChange=function(t){e.setState({title:t.target.value},(function(){Object(E.c)(e.props.id,e.state)}))},e.handleColorChange=function(t){e.setState({color:t.hex},(function(){Object(E.c)(e.props.id,e.state)}))},e.handleHourChange=function(t){var a=t.target.value.replace(/\D/,""),n=parseInt(a);(n>=0&&n<=12||!a)&&e.setState({hour:a},(function(){return Object(E.c)(e.props.id,e.state)}))},e.handleMinuteChange=function(t){var a=t.target.value.replace(/\D/,""),n=parseInt(a);(n>=0&&n<=60||!a)&&e.setState({minute:a},(function(){return Object(E.c)(e.props.id,e.state)}))},e.handleSelectChange=function(t){e.setState({selectedOption:t})},e.handleSubmit=function(t){var a;t.preventDefault(),N.a.extend(D.a),a="12"===e.state.hour?"am"===e.state.selectedOption.value?0:12:"am"===e.state.selectedOption.value?e.state.hour:"".concat(parseInt(e.state.hour)+12);var n=N()({hour:a,minute:e.state.minute,a:e.state.selectedOption.value});n.isBefore(N()())&&(n=n.add(1,"day")),e.setState({date:n.toDate(),displayCountdown:!0})},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.state.selectedOption,a={container:function(e){return Object(A.a)(Object(A.a)({},e),{},{height:"100%",fontFamily:"Fira Sans",fontSize:"2rem"})},control:function(t,a){return Object(A.a)(Object(A.a)({},t),{},{height:"100%",backgroundColor:"inherit",border:"none",borderColor:a.isFocused?e.state.color:"inherit",boxShadow:a.isFocused?"0 0 3px ".concat(e.state.color):"none"})},input:function(e){return Object(A.a)(Object(A.a)({},e),{},{height:"inherit"})},indicatorSeparator:function(e){return Object(A.a)(Object(A.a)({},e),{},{backgroundColor:"#989696",width:"2px"})},dropdownIndicator:function(e){return Object(A.a)(Object(A.a)({},e),{},{color:"#989696"})},singleValue:function(e){return Object(A.a)(Object(A.a)({},e),{},{color:"var(--text-primary)"})},option:function(e,t){return Object(A.a)(Object(A.a)({},e),{},{backgroundColor:t.isFocused?"var(--input-background)":"var(--widgetBackground)",color:"var(--text-primary)"})},menu:function(e){return Object(A.a)(Object(A.a)({},e),{},{backgroundColor:"var(--widgetBackground)"})}};return o.a.createElement("div",{className:"flex-container--column widget-container border-curve"},o.a.createElement(b,{titleValue:this.state.title,backgroundColor:this.state.color,onDelete:function(){return e.props.deleteWidget(e.props.id)},onChange:this.handleChange}),o.a.createElement("div",{className:"p--sml"},o.a.createElement("form",{onSubmit:this.handleSubmit,className:"flow--med"},o.a.createElement("div",{className:"flex-container--centered countdown-display"},o.a.createElement("input",{value:this.state.hour,name:"hour",onChange:this.handleHourChange,maxLength:"2",placeholder:"HH","aria-label":"Hour",className:"countdown__input  p--sml",readOnly:this.state.displayCountdown}),o.a.createElement("span",{className:"m--sml"},":"),o.a.createElement("input",{value:this.state.minute,name:"minute",onChange:this.handleMinuteChange,maxLength:"2",placeholder:"MM","aria-label":"Minute",className:"countdown__input  p--sml",readOnly:this.state.displayCountdown}),o.a.createElement("div",{className:"select-container"},o.a.createElement(T.a,{classNamePrefix:"react-select",name:"selectedOption",value:t,onChange:this.handleSelectChange,options:M,styles:a,isDisabled:this.state.displayCountdown}))),this.state.displayCountdown&&o.a.createElement("div",null,o.a.createElement(O.a,{key:this.state.date,ref:this.setRef,date:this.state.date,onMount:this.handleUpdate,onStart:this.handleUpdate,onPause:this.handlePause,onComplete:this.handleComplete,renderer:W,autoStart:!0}),o.a.createElement("div",{className:"button-list flex-container"},o.a.createElement("button",{onClick:this.handleStopClick},o.a.createElement("ion-icon",{name:"stop"}),o.a.createElement("span",null,"Stop")),o.a.createElement(v,{color:this.state.color,displayColorPicker:!1,onChange:this.handleColorChange}))),!this.state.displayCountdown&&o.a.createElement("div",null,o.a.createElement("div",{className:"flex-container--centered"},o.a.createElement("span",{name:"hour","aria-label":"Hour",className:"monospace italic"},"--"," "),o.a.createElement("span",{className:"m--sml"},":"),o.a.createElement("span",{name:"minute","aria-label":"Minute",className:"monospace italic"},"--"," "),o.a.createElement("span",{className:"m--sml"},":"),o.a.createElement("span",{name:"second","aria-label":"Second",className:"monospace italic"},"--"," ")),o.a.createElement("div",{className:"button-list flex-container"},o.a.createElement("button",{type:"submit"},o.a.createElement("ion-icon",{name:"play"}),o.a.createElement("span",null,"Start")),o.a.createElement(v,{color:this.state.color,displayColorPicker:!1,onChange:this.handleColorChange})))),o.a.createElement("div",{className:"button-list"})))}}]),a}(o.a.Component),I=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return"stopwatch"===this.props.widget.type?o.a.createElement(w,{deleteWatch:this.props.deleteWidget,id:this.props.widget.id}):"countdown"===this.props.widget.type?o.a.createElement(x,{id:this.props.widget.id,deleteWidget:this.props.deleteWidget}):"alarm"===this.props.widget.type?o.a.createElement(_,{id:this.props.widget.id,deleteWidget:this.props.deleteWidget}):o.a.createElement("div",null,"?")}}]),a}(o.a.Component),H=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.props.widgets.map((function(t){return o.a.createElement("li",{key:t.id},o.a.createElement(I,{widget:t,deleteWidget:e.props.deleteWidget}))}));return o.a.createElement("ul",{className:"widget-grid p--non m--center"},t,o.a.createElement("li",{key:"addButton"},o.a.createElement("div",{className:"placeholder-container"},o.a.createElement(f,{addWidget:this.props.addWidget}))))}}]),a}(o.a.Component),L=a(277),R=(a(272),a(273),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={widgets:[]},e.getValue=function(e){Object(E.b)(e).then((function(e){console.log(e)}))},e.addWidget=function(t){var a=[].concat(Object(d.a)(e.state.widgets),[{index:e.state.widgets.length+1,id:Object(L.a)(),type:t}]);Object(E.c)("widgets",a),e.setState({widgets:a})},e.deleteWidget=function(t){var a=e.state.widgets.filter((function(e){return e.id!==t}));Object(E.c)("widgets",a),Object(E.a)(t),e.setState({widgets:a})},e.componentDidMount=Object(s.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(E.b)("widgets");case 2:(a=t.sent)||(a=[{index:0,id:Object(L.a)(),type:"stopwatch"}]),e.setState({widgets:a}),"Notification"in window||alert("This browser does not support desktop notification"),"denied"!==Notification.permission&&Notification.requestPermission();case 7:case"end":return t.stop()}}),t)}))),e.handleChange=function(t){e.setState({widgets:t.target.value})},e}return Object(m.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},this.state.testCounter,o.a.createElement("header",{className:"flex-container--centered"},o.a.createElement("h1",null,"WerkWeek")),o.a.createElement("div",null,o.a.createElement(H,{widgets:this.state.widgets,addWidget:this.addWidget,deleteWidget:this.deleteWidget})))}}]),a}(o.a.Component));a(274);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(R,null)),document.getElementById("root"))},99:function(e,t,a){e.exports=a(275)}},[[99,1,2]]]);
//# sourceMappingURL=main.78741242.chunk.js.map