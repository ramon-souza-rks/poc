import{n as e,r as t,t as n}from"./rolldown-runtime-hePW80VL.js";import{c as r,l as i,t as a}from"./utils-eZ1c32IY.js";import{h as o,i as s,r as c}from"./useAuthStore-KME2Wama.js";import{Rn as l,_ as u}from"./index-C1pxNPTy.js";import{t as d}from"./PageHeader-wsaAAZ1Q.js";import{t as f}from"./Breadcrumb-BK3fw1Qr.js";function p(e,t){let n=t||{};return(e[e.length-1]===``?[...e,``]:e).join((n.padRight?` `:``)+`,`+(n.padLeft===!1?``:` `)).trim()}var m=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,h=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,g={};function _(e,t){return((t||g).jsx?h:m).test(e)}var v=/[ \t\n\f\r]/g;function y(e){return typeof e==`object`?e.type===`text`&&b(e.value):b(e)}function b(e){return e.replace(v,``)===``}var x=class{constructor(e,t,n){this.normal=t,this.property=e,n&&(this.space=n)}};x.prototype.normal={},x.prototype.property={},x.prototype.space=void 0;function S(e,t){let n={},r={};for(let t of e)Object.assign(n,t.property),Object.assign(r,t.normal);return new x(n,r,t)}function C(e){return e.toLowerCase()}var w=class{constructor(e,t){this.attribute=t,this.property=e}};w.prototype.attribute=``,w.prototype.booleanish=!1,w.prototype.boolean=!1,w.prototype.commaOrSpaceSeparated=!1,w.prototype.commaSeparated=!1,w.prototype.defined=!1,w.prototype.mustUseProperty=!1,w.prototype.number=!1,w.prototype.overloadedBoolean=!1,w.prototype.property=``,w.prototype.spaceSeparated=!1,w.prototype.space=void 0;var T=e({boolean:()=>D,booleanish:()=>O,commaOrSpaceSeparated:()=>N,commaSeparated:()=>M,number:()=>A,overloadedBoolean:()=>k,spaceSeparated:()=>j}),E=0,D=P(),O=P(),k=P(),A=P(),j=P(),M=P(),N=P();function P(){return 2**++E}var ee=Object.keys(T),F=class extends w{constructor(e,t,n,r){let i=-1;if(super(e,t),te(this,`space`,r),typeof n==`number`)for(;++i<ee.length;){let e=ee[i];te(this,ee[i],(n&T[e])===T[e])}}};F.prototype.defined=!0;function te(e,t,n){n&&(e[t]=n)}function I(e){let t={},n={};for(let[r,i]of Object.entries(e.properties)){let a=new F(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),t[r]=a,n[C(r)]=r,n[C(a.attribute)]=r}return new x(t,n,e.space)}var ne=I({properties:{ariaActiveDescendant:null,ariaAtomic:O,ariaAutoComplete:null,ariaBusy:O,ariaChecked:O,ariaColCount:A,ariaColIndex:A,ariaColSpan:A,ariaControls:j,ariaCurrent:null,ariaDescribedBy:j,ariaDetails:null,ariaDisabled:O,ariaDropEffect:j,ariaErrorMessage:null,ariaExpanded:O,ariaFlowTo:j,ariaGrabbed:O,ariaHasPopup:null,ariaHidden:O,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:j,ariaLevel:A,ariaLive:null,ariaModal:O,ariaMultiLine:O,ariaMultiSelectable:O,ariaOrientation:null,ariaOwns:j,ariaPlaceholder:null,ariaPosInSet:A,ariaPressed:O,ariaReadOnly:O,ariaRelevant:null,ariaRequired:O,ariaRoleDescription:j,ariaRowCount:A,ariaRowIndex:A,ariaRowSpan:A,ariaSelected:O,ariaSetSize:A,ariaSort:null,ariaValueMax:A,ariaValueMin:A,ariaValueNow:A,ariaValueText:null,role:null},transform(e,t){return t===`role`?t:`aria-`+t.slice(4).toLowerCase()}});function re(e,t){return t in e?e[t]:t}function ie(e,t){return re(e,t.toLowerCase())}var ae=I({attributes:{acceptcharset:`accept-charset`,classname:`class`,htmlfor:`for`,httpequiv:`http-equiv`},mustUseProperty:[`checked`,`multiple`,`muted`,`selected`],properties:{abbr:null,accept:M,acceptCharset:j,accessKey:j,action:null,allow:null,allowFullScreen:D,allowPaymentRequest:D,allowUserMedia:D,alpha:D,alt:null,as:null,async:D,autoCapitalize:null,autoComplete:j,autoFocus:D,autoPlay:D,blocking:j,capture:null,charSet:null,checked:D,cite:null,className:j,closedBy:null,colorSpace:null,cols:A,colSpan:A,command:null,commandFor:null,content:null,contentEditable:O,controls:D,controlsList:j,coords:A|M,crossOrigin:null,data:null,dateTime:null,decoding:null,default:D,defer:D,dir:null,dirName:null,disabled:D,download:k,draggable:O,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:D,formTarget:null,headers:j,height:A,hidden:k,high:A,href:null,hrefLang:null,htmlFor:j,httpEquiv:j,id:null,imageSizes:null,imageSrcSet:null,inert:D,inputMode:null,integrity:null,is:null,isMap:D,itemId:null,itemProp:j,itemRef:j,itemScope:D,itemType:j,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:D,low:A,manifest:null,max:null,maxLength:A,media:null,method:null,min:null,minLength:A,multiple:D,muted:D,name:null,nonce:null,noModule:D,noValidate:D,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:D,optimum:A,pattern:null,ping:j,placeholder:null,playsInline:D,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:D,referrerPolicy:null,rel:j,required:D,reversed:D,rows:A,rowSpan:A,sandbox:j,scope:null,scoped:D,seamless:D,selected:D,shadowRootClonable:D,shadowRootCustomElementRegistry:D,shadowRootDelegatesFocus:D,shadowRootMode:null,shadowRootSerializable:D,shape:null,size:A,sizes:null,slot:null,span:A,spellCheck:O,src:null,srcDoc:null,srcLang:null,srcSet:null,start:A,step:null,style:null,tabIndex:A,target:null,title:null,translate:null,type:null,typeMustMatch:D,useMap:null,value:O,width:A,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:j,axis:null,background:null,bgColor:null,border:A,borderColor:null,bottomMargin:A,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:D,declare:D,event:null,face:null,frame:null,frameBorder:null,hSpace:A,leftMargin:A,link:null,longDesc:null,lowSrc:null,marginHeight:A,marginWidth:A,noResize:D,noHref:D,noShade:D,noWrap:D,object:null,profile:null,prompt:null,rev:null,rightMargin:A,rules:null,scheme:null,scrolling:O,standby:null,summary:null,text:null,topMargin:A,valueType:null,version:null,vAlign:null,vLink:null,vSpace:A,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:D,disablePictureInPicture:D,disableRemotePlayback:D,exportParts:M,part:j,prefix:null,property:null,results:A,security:null,unselectable:null},space:`html`,transform:ie}),oe=I({attributes:{accentHeight:`accent-height`,alignmentBaseline:`alignment-baseline`,arabicForm:`arabic-form`,baselineShift:`baseline-shift`,capHeight:`cap-height`,className:`class`,clipPath:`clip-path`,clipRule:`clip-rule`,colorInterpolation:`color-interpolation`,colorInterpolationFilters:`color-interpolation-filters`,colorProfile:`color-profile`,colorRendering:`color-rendering`,crossOrigin:`crossorigin`,dataType:`datatype`,dominantBaseline:`dominant-baseline`,enableBackground:`enable-background`,fillOpacity:`fill-opacity`,fillRule:`fill-rule`,floodColor:`flood-color`,floodOpacity:`flood-opacity`,fontFamily:`font-family`,fontSize:`font-size`,fontSizeAdjust:`font-size-adjust`,fontStretch:`font-stretch`,fontStyle:`font-style`,fontVariant:`font-variant`,fontWeight:`font-weight`,glyphName:`glyph-name`,glyphOrientationHorizontal:`glyph-orientation-horizontal`,glyphOrientationVertical:`glyph-orientation-vertical`,hrefLang:`hreflang`,horizAdvX:`horiz-adv-x`,horizOriginX:`horiz-origin-x`,horizOriginY:`horiz-origin-y`,imageRendering:`image-rendering`,letterSpacing:`letter-spacing`,lightingColor:`lighting-color`,markerEnd:`marker-end`,markerMid:`marker-mid`,markerStart:`marker-start`,maskType:`mask-type`,navDown:`nav-down`,navDownLeft:`nav-down-left`,navDownRight:`nav-down-right`,navLeft:`nav-left`,navNext:`nav-next`,navPrev:`nav-prev`,navRight:`nav-right`,navUp:`nav-up`,navUpLeft:`nav-up-left`,navUpRight:`nav-up-right`,onAbort:`onabort`,onActivate:`onactivate`,onAfterPrint:`onafterprint`,onBeforePrint:`onbeforeprint`,onBegin:`onbegin`,onCancel:`oncancel`,onCanPlay:`oncanplay`,onCanPlayThrough:`oncanplaythrough`,onChange:`onchange`,onClick:`onclick`,onClose:`onclose`,onCopy:`oncopy`,onCueChange:`oncuechange`,onCut:`oncut`,onDblClick:`ondblclick`,onDrag:`ondrag`,onDragEnd:`ondragend`,onDragEnter:`ondragenter`,onDragExit:`ondragexit`,onDragLeave:`ondragleave`,onDragOver:`ondragover`,onDragStart:`ondragstart`,onDrop:`ondrop`,onDurationChange:`ondurationchange`,onEmptied:`onemptied`,onEnd:`onend`,onEnded:`onended`,onError:`onerror`,onFocus:`onfocus`,onFocusIn:`onfocusin`,onFocusOut:`onfocusout`,onHashChange:`onhashchange`,onInput:`oninput`,onInvalid:`oninvalid`,onKeyDown:`onkeydown`,onKeyPress:`onkeypress`,onKeyUp:`onkeyup`,onLoad:`onload`,onLoadedData:`onloadeddata`,onLoadedMetadata:`onloadedmetadata`,onLoadStart:`onloadstart`,onMessage:`onmessage`,onMouseDown:`onmousedown`,onMouseEnter:`onmouseenter`,onMouseLeave:`onmouseleave`,onMouseMove:`onmousemove`,onMouseOut:`onmouseout`,onMouseOver:`onmouseover`,onMouseUp:`onmouseup`,onMouseWheel:`onmousewheel`,onOffline:`onoffline`,onOnline:`ononline`,onPageHide:`onpagehide`,onPageShow:`onpageshow`,onPaste:`onpaste`,onPause:`onpause`,onPlay:`onplay`,onPlaying:`onplaying`,onPopState:`onpopstate`,onProgress:`onprogress`,onRateChange:`onratechange`,onRepeat:`onrepeat`,onReset:`onreset`,onResize:`onresize`,onScroll:`onscroll`,onSeeked:`onseeked`,onSeeking:`onseeking`,onSelect:`onselect`,onShow:`onshow`,onStalled:`onstalled`,onStorage:`onstorage`,onSubmit:`onsubmit`,onSuspend:`onsuspend`,onTimeUpdate:`ontimeupdate`,onToggle:`ontoggle`,onUnload:`onunload`,onVolumeChange:`onvolumechange`,onWaiting:`onwaiting`,onZoom:`onzoom`,overlinePosition:`overline-position`,overlineThickness:`overline-thickness`,paintOrder:`paint-order`,panose1:`panose-1`,pointerEvents:`pointer-events`,referrerPolicy:`referrerpolicy`,renderingIntent:`rendering-intent`,shapeRendering:`shape-rendering`,stopColor:`stop-color`,stopOpacity:`stop-opacity`,strikethroughPosition:`strikethrough-position`,strikethroughThickness:`strikethrough-thickness`,strokeDashArray:`stroke-dasharray`,strokeDashOffset:`stroke-dashoffset`,strokeLineCap:`stroke-linecap`,strokeLineJoin:`stroke-linejoin`,strokeMiterLimit:`stroke-miterlimit`,strokeOpacity:`stroke-opacity`,strokeWidth:`stroke-width`,tabIndex:`tabindex`,textAnchor:`text-anchor`,textDecoration:`text-decoration`,textRendering:`text-rendering`,transformOrigin:`transform-origin`,typeOf:`typeof`,underlinePosition:`underline-position`,underlineThickness:`underline-thickness`,unicodeBidi:`unicode-bidi`,unicodeRange:`unicode-range`,unitsPerEm:`units-per-em`,vAlphabetic:`v-alphabetic`,vHanging:`v-hanging`,vIdeographic:`v-ideographic`,vMathematical:`v-mathematical`,vectorEffect:`vector-effect`,vertAdvY:`vert-adv-y`,vertOriginX:`vert-origin-x`,vertOriginY:`vert-origin-y`,wordSpacing:`word-spacing`,writingMode:`writing-mode`,xHeight:`x-height`,playbackOrder:`playbackorder`,timelineBegin:`timelinebegin`},properties:{about:N,accentHeight:A,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:A,amplitude:A,arabicForm:null,ascent:A,attributeName:null,attributeType:null,azimuth:A,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:A,by:null,calcMode:null,capHeight:A,className:j,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:A,diffuseConstant:A,direction:null,display:null,dur:null,divisor:A,dominantBaseline:null,download:D,dx:null,dy:null,edgeMode:null,editable:null,elevation:A,enableBackground:null,end:null,event:null,exponent:A,externalResourcesRequired:null,fill:null,fillOpacity:A,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:M,g2:M,glyphName:M,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:A,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:A,horizOriginX:A,horizOriginY:A,id:null,ideographic:A,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:A,k:A,k1:A,k2:A,k3:A,k4:A,kernelMatrix:N,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:A,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:A,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:A,overlineThickness:A,paintOrder:null,panose1:null,path:null,pathLength:A,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:j,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:A,pointsAtY:A,pointsAtZ:A,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:N,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:N,rev:N,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:N,requiredFeatures:N,requiredFonts:N,requiredFormats:N,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:A,specularExponent:A,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:A,strikethroughThickness:A,string:null,stroke:null,strokeDashArray:N,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:A,strokeOpacity:A,strokeWidth:null,style:null,surfaceScale:A,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:N,tabIndex:A,tableValues:null,target:null,targetX:A,targetY:A,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:N,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:A,underlineThickness:A,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:A,values:null,vAlphabetic:A,vMathematical:A,vectorEffect:null,vHanging:A,vIdeographic:A,version:null,vertAdvY:A,vertOriginX:A,vertOriginY:A,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:A,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:`svg`,transform:re}),se=I({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:`xlink`,transform(e,t){return`xlink:`+t.slice(5).toLowerCase()}}),ce=I({attributes:{xmlnsxlink:`xmlns:xlink`},properties:{xmlnsXLink:null,xmlns:null},space:`xmlns`,transform:ie}),le=I({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:`xml`,transform(e,t){return`xml:`+t.slice(3).toLowerCase()}}),ue={classId:`classID`,dataType:`datatype`,itemId:`itemID`,strokeDashArray:`strokeDasharray`,strokeDashOffset:`strokeDashoffset`,strokeLineCap:`strokeLinecap`,strokeLineJoin:`strokeLinejoin`,strokeMiterLimit:`strokeMiterlimit`,typeOf:`typeof`,xLinkActuate:`xlinkActuate`,xLinkArcRole:`xlinkArcrole`,xLinkHref:`xlinkHref`,xLinkRole:`xlinkRole`,xLinkShow:`xlinkShow`,xLinkTitle:`xlinkTitle`,xLinkType:`xlinkType`,xmlnsXLink:`xmlnsXlink`},de=/[A-Z]/g,fe=/-[a-z]/g,pe=/^data[-\w.:]+$/i;function me(e,t){let n=C(t),r=t,i=w;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)===`data`&&pe.test(t)){if(t.charAt(4)===`-`){let e=t.slice(5).replace(fe,ge);r=`data`+e.charAt(0).toUpperCase()+e.slice(1)}else{let e=t.slice(4);if(!fe.test(e)){let n=e.replace(de,he);n.charAt(0)!==`-`&&(n=`-`+n),t=`data`+n}}i=F}return new i(r,t)}function he(e){return`-`+e.toLowerCase()}function ge(e){return e.charAt(1).toUpperCase()}var _e=S([ne,ae,se,ce,le],`html`),ve=S([ne,oe,se,ce,le],`svg`);function ye(e){return e.join(` `).trim()}var be=n(((e,t)=>{var n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,i=/^\s*/,a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,s=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,c=/^[;\s]*/,l=/^\s+|\s+$/g;function u(e,t){if(typeof e!=`string`)throw TypeError(`First argument must be a string`);if(!e)return[];t||={};var l=1,u=1;function f(e){var t=e.match(r);t&&(l+=t.length);var n=e.lastIndexOf(`
`);u=~n?e.length-n:u+e.length}function p(){var e={line:l,column:u};return function(t){return t.position=new m(e),_(),t}}function m(e){this.start=e,this.end={line:l,column:u},this.source=t.source}m.prototype.content=e;function h(n){var r=Error(t.source+`:`+l+`:`+u+`: `+n);if(r.reason=n,r.filename=t.source,r.line=l,r.column=u,r.source=e,!t.silent)throw r}function g(t){var n=t.exec(e);if(n){var r=n[0];return f(r),e=e.slice(r.length),n}}function _(){g(i)}function v(e){var t;for(e||=[];t=y();)t!==!1&&e.push(t);return e}function y(){var t=p();if(e.charAt(0)==`/`&&e.charAt(1)==`*`){for(var n=2;e.charAt(n)!=``&&(e.charAt(n)!=`*`||e.charAt(n+1)!=`/`);)++n;if(n+=2,e.charAt(n-1)===``)return h(`End of comment missing`);var r=e.slice(2,n-2);return u+=2,f(r),e=e.slice(n),u+=2,t({type:`comment`,comment:r})}}function b(){var e=p(),t=g(a);if(t){if(y(),!g(o))return h(`property missing ':'`);var r=g(s),i=e({type:`declaration`,property:d(t[0].replace(n,``)),value:r?d(r[0].replace(n,``)):``});return g(c),i}}function x(){var e=[];v(e);for(var t;t=b();)t!==!1&&(e.push(t),v(e));return e}return _(),x()}function d(e){return e?e.replace(l,``):``}t.exports=u})),xe=n((e=>{var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var n=t(be());function r(e,t){let r=null;if(!e||typeof e!=`string`)return r;let i=(0,n.default)(e),a=typeof t==`function`;return i.forEach(e=>{if(e.type!==`declaration`)return;let{property:n,value:i}=e;a?t(n,i,e):i&&(r||={},r[n]=i)}),r}})),Se=n((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.camelCase=void 0;var t=/^--[a-zA-Z0-9_-]+$/,n=/-([a-z])/g,r=/^[^-]+$/,i=/^-(webkit|moz|ms|o|khtml)-/,a=/^-(ms)-/,o=function(e){return!e||r.test(e)||t.test(e)},s=function(e,t){return t.toUpperCase()},c=function(e,t){return`${t}-`};e.camelCase=function(e,t){return t===void 0&&(t={}),o(e)?e:(e=e.toLowerCase(),e=t.reactCompat?e.replace(a,c):e.replace(i,c),e.replace(n,s))}})),Ce=n(((e,t)=>{var n=(e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}})(xe()),r=Se();function i(e,t){var i={};return!e||typeof e!=`string`||(0,n.default)(e,function(e,n){e&&n&&(i[(0,r.camelCase)(e,t)]=n)}),i}i.default=i,t.exports=i})),we=Ee(`end`),Te=Ee(`start`);function Ee(e){return t;function t(t){let n=t&&t.position&&t.position[e]||{};if(typeof n.line==`number`&&n.line>0&&typeof n.column==`number`&&n.column>0)return{line:n.line,column:n.column,offset:typeof n.offset==`number`&&n.offset>-1?n.offset:void 0}}}function De(e){let t=Te(e),n=we(e);if(t&&n)return{start:t,end:n}}function Oe(e){return!e||typeof e!=`object`?``:`position`in e||`type`in e?Ae(e.position):`start`in e||`end`in e?Ae(e):`line`in e||`column`in e?ke(e):``}function ke(e){return je(e&&e.line)+`:`+je(e&&e.column)}function Ae(e){return ke(e&&e.start)+`-`+ke(e&&e.end)}function je(e){return e&&typeof e==`number`?e:1}var L=class extends Error{constructor(e,t,n){super(),typeof t==`string`&&(n=t,t=void 0);let r=``,i={},a=!1;if(t&&(i=`line`in t&&`column`in t||`start`in t&&`end`in t?{place:t}:`type`in t?{ancestors:[t],place:t.position}:{...t}),typeof e==`string`?r=e:!i.cause&&e&&(a=!0,r=e.message,i.cause=e),!i.ruleId&&!i.source&&typeof n==`string`){let e=n.indexOf(`:`);e===-1?i.ruleId=n:(i.source=n.slice(0,e),i.ruleId=n.slice(e+1))}if(!i.place&&i.ancestors&&i.ancestors){let e=i.ancestors[i.ancestors.length-1];e&&(i.place=e.position)}let o=i.place&&`start`in i.place?i.place.start:i.place;this.ancestors=i.ancestors||void 0,this.cause=i.cause||void 0,this.column=o?o.column:void 0,this.fatal=void 0,this.file=``,this.message=r,this.line=o?o.line:void 0,this.name=Oe(i.place)||`1:1`,this.place=i.place||void 0,this.reason=this.message,this.ruleId=i.ruleId||void 0,this.source=i.source||void 0,this.stack=a&&i.cause&&typeof i.cause.stack==`string`?i.cause.stack:``,this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}};L.prototype.file=``,L.prototype.name=``,L.prototype.reason=``,L.prototype.message=``,L.prototype.stack=``,L.prototype.column=void 0,L.prototype.line=void 0,L.prototype.ancestors=void 0,L.prototype.cause=void 0,L.prototype.fatal=void 0,L.prototype.place=void 0,L.prototype.ruleId=void 0,L.prototype.source=void 0;var Me=t(Ce(),1),Ne={}.hasOwnProperty,Pe=new Map,Fe=/[A-Z]/g,Ie=new Set([`table`,`tbody`,`thead`,`tfoot`,`tr`]),Le=new Set([`td`,`th`]),Re=`https://github.com/syntax-tree/hast-util-to-jsx-runtime`;function ze(e,t){if(!t||t.Fragment===void 0)throw TypeError("Expected `Fragment` in options");let n=t.filePath||void 0,r;if(t.development){if(typeof t.jsxDEV!=`function`)throw TypeError("Expected `jsxDEV` in options when `development: true`");r=Xe(n,t.jsxDEV)}else{if(typeof t.jsx!=`function`)throw TypeError("Expected `jsx` in production options");if(typeof t.jsxs!=`function`)throw TypeError("Expected `jsxs` in production options");r=Ye(n,t.jsx,t.jsxs)}let i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||`react`,evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space===`svg`?ve:_e,stylePropertyNameCase:t.stylePropertyNameCase||`dom`,tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},a=Be(i,e,void 0);return a&&typeof a!=`string`?a:i.create(e,i.Fragment,{children:a||void 0},void 0)}function Be(e,t,n){if(t.type===`element`)return Ve(e,t,n);if(t.type===`mdxFlowExpression`||t.type===`mdxTextExpression`)return He(e,t);if(t.type===`mdxJsxFlowElement`||t.type===`mdxJsxTextElement`)return We(e,t,n);if(t.type===`mdxjsEsm`)return Ue(e,t);if(t.type===`root`)return Ge(e,t,n);if(t.type===`text`)return Ke(e,t)}function Ve(e,t,n){let r=e.schema,i=r;t.tagName.toLowerCase()===`svg`&&r.space===`html`&&(i=ve,e.schema=i),e.ancestors.push(t);let a=nt(e,t.tagName,!1),o=Ze(e,t),s=$e(e,t);return Ie.has(t.tagName)&&(s=s.filter(function(e){return typeof e!=`string`||!y(e)})),qe(e,o,a,t),Je(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function He(e,t){if(t.data&&t.data.estree&&e.evaluater){let n=t.data.estree.body[0];return n.type,e.evaluater.evaluateExpression(n.expression)}rt(e,t.position)}function Ue(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);rt(e,t.position)}function We(e,t,n){let r=e.schema,i=r;t.name===`svg`&&r.space===`html`&&(i=ve,e.schema=i),e.ancestors.push(t);let a=t.name===null?e.Fragment:nt(e,t.name,!0),o=Qe(e,t),s=$e(e,t);return qe(e,o,a,t),Je(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function Ge(e,t,n){let r={};return Je(r,$e(e,t)),e.create(t,e.Fragment,r,n)}function Ke(e,t){return t.value}function qe(e,t,n,r){typeof n!=`string`&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Je(e,t){if(t.length>0){let n=t.length>1?t:t[0];n&&(e.children=n)}}function Ye(e,t,n){return r;function r(e,r,i,a){let o=Array.isArray(i.children)?n:t;return a?o(r,i,a):o(r,i)}}function Xe(e,t){return n;function n(n,r,i,a){let o=Array.isArray(i.children),s=Te(n);return t(r,i,a,o,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function Ze(e,t){let n={},r,i;for(i in t.properties)if(i!==`children`&&Ne.call(t.properties,i)){let a=et(e,i,t.properties[i]);if(a){let[i,o]=a;e.tableCellAlignToStyle&&i===`align`&&typeof o==`string`&&Le.has(t.tagName)?r=o:n[i]=o}}if(r){let t=n.style||={};t[e.stylePropertyNameCase===`css`?`text-align`:`textAlign`]=r}return n}function Qe(e,t){let n={};for(let r of t.attributes)if(r.type===`mdxJsxExpressionAttribute`){if(r.data&&r.data.estree&&e.evaluater){let t=r.data.estree.body[0];t.type;let i=t.expression;i.type;let a=i.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else rt(e,t.position)}else{let i=r.name,a;if(r.value&&typeof r.value==`object`){if(r.value.data&&r.value.data.estree&&e.evaluater){let t=r.value.data.estree.body[0];t.type,a=e.evaluater.evaluateExpression(t.expression)}else rt(e,t.position)}else a=r.value===null||r.value;n[i]=a}return n}function $e(e,t){let n=[],r=-1,i=e.passKeys?new Map:Pe;for(;++r<t.children.length;){let a=t.children[r],o;if(e.passKeys){let e=a.type===`element`?a.tagName:a.type===`mdxJsxFlowElement`||a.type===`mdxJsxTextElement`?a.name:void 0;if(e){let t=i.get(e)||0;o=e+`-`+t,i.set(e,t+1)}}let s=Be(e,a,o);s!==void 0&&n.push(s)}return n}function et(e,t,n){let r=me(e.schema,t);if(!(n==null||typeof n==`number`&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?p(n):ye(n)),r.property===`style`){let t=typeof n==`object`?n:tt(e,String(n));return e.stylePropertyNameCase===`css`&&(t=it(t)),[`style`,t]}return[e.elementAttributeNameCase===`react`&&r.space?ue[r.property]||r.property:r.attribute,n]}}function tt(e,t){try{return(0,Me.default)(t,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};let n=t,r=new L("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:n,ruleId:`style`,source:`hast-util-to-jsx-runtime`});throw r.file=e.filePath||void 0,r.url=Re+`#cannot-parse-style-attribute`,r}}function nt(e,t,n){let r;if(!n)r={type:`Literal`,value:t};else if(t.includes(`.`)){let e=t.split(`.`),n=-1,i;for(;++n<e.length;){let t=_(e[n])?{type:`Identifier`,name:e[n]}:{type:`Literal`,value:e[n]};i=i?{type:`MemberExpression`,object:i,property:t,computed:!!(n&&t.type===`Literal`),optional:!1}:t}r=i}else r=_(t)&&!/^[a-z]/.test(t)?{type:`Identifier`,name:t}:{type:`Literal`,value:t};if(r.type===`Literal`){let t=r.value;return Ne.call(e.components,t)?e.components[t]:t}if(e.evaluater)return e.evaluater.evaluateExpression(r);rt(e)}function rt(e,t){let n=new L("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:`mdx-estree`,source:`hast-util-to-jsx-runtime`});throw n.file=e.filePath||void 0,n.url=Re+`#cannot-handle-mdx-estrees-without-createevaluater`,n}function it(e){let t={},n;for(n in e)Ne.call(e,n)&&(t[at(n)]=e[n]);return t}function at(e){let t=e.replace(Fe,ot);return t.slice(0,3)===`ms-`&&(t=`-`+t),t}function ot(e){return`-`+e.toLowerCase()}var st={action:[`form`],cite:[`blockquote`,`del`,`ins`,`q`],data:[`object`],formAction:[`button`,`input`],href:[`a`,`area`,`base`,`link`],icon:[`menuitem`],itemId:null,manifest:[`html`],ping:[`a`,`area`],poster:[`video`],src:[`audio`,`embed`,`iframe`,`img`,`input`,`script`,`source`,`track`,`video`]},ct={};function lt(e,t){let n=t||ct;return ut(e,typeof n.includeImageAlt!=`boolean`||n.includeImageAlt,typeof n.includeHtml!=`boolean`||n.includeHtml)}function ut(e,t,n){if(ft(e)){if(`value`in e)return e.type===`html`&&!n?``:e.value;if(t&&`alt`in e&&e.alt)return e.alt;if(`children`in e)return dt(e.children,t,n)}return Array.isArray(e)?dt(e,t,n):``}function dt(e,t,n){let r=[],i=-1;for(;++i<e.length;)r[i]=ut(e[i],t,n);return r.join(``)}function ft(e){return!!(e&&typeof e==`object`)}var pt=document.createElement(`i`);function mt(e){let t=`&`+e+`;`;pt.innerHTML=t;let n=pt.textContent;return n.charCodeAt(n.length-1)===59&&e!==`semi`?!1:n!==t&&n}function R(e,t,n,r){let i=e.length,a=0,o;if(t=t<0?-t>i?0:i+t:t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);a<r.length;)o=r.slice(a,a+1e4),o.unshift(t,0),e.splice(...o),a+=1e4,t+=1e4}function z(e,t){return e.length>0?(R(e,e.length,0,t),e):t}var ht={}.hasOwnProperty;function gt(e){let t={},n=-1;for(;++n<e.length;)_t(t,e[n]);return t}function _t(e,t){let n;for(n in t){let r=(ht.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n],a;if(i)for(a in i){ht.call(r,a)||(r[a]=[]);let e=i[a];vt(r[a],Array.isArray(e)?e:e?[e]:[])}}}function vt(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add===`after`?e:r).push(t[n]);R(e,0,0,r)}function yt(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)==65535||(n&65535)==65534||n>1114111?`�`:String.fromCodePoint(n)}function B(e){return e.replace(/[\t\n\r ]+/g,` `).replace(/^ | $/g,``).toLowerCase().toUpperCase()}var V=K(/[A-Za-z]/),H=K(/[\dA-Za-z]/),bt=K(/[#-'*+\--9=?A-Z^-~]/);function xt(e){return e!==null&&(e<32||e===127)}var St=K(/\d/),Ct=K(/[\dA-Fa-f]/),wt=K(/[!-/:-@[-`{-~]/);function U(e){return e!==null&&e<-2}function W(e){return e!==null&&(e<0||e===32)}function G(e){return e===-2||e===-1||e===32}var Tt=K(/\p{P}|\p{S}/u),Et=K(/\s/);function K(e){return t;function t(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function Dt(e){let t=[],n=-1,r=0,i=0;for(;++n<e.length;){let a=e.charCodeAt(n),o=``;if(a===37&&H(e.charCodeAt(n+1))&&H(e.charCodeAt(n+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){let t=e.charCodeAt(n+1);a<56320&&t>56319&&t<57344?(o=String.fromCharCode(a,t),i=1):o=`�`}else o=String.fromCharCode(a);o&&=(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,``),i&&=(n+=i,0)}return t.join(``)+e.slice(r)}function q(e,t,n,r){let i=r?r-1:1/0,a=0;return o;function o(r){return G(r)?(e.enter(n),s(r)):t(r)}function s(r){return G(r)&&a++<i?(e.consume(r),s):(e.exit(n),t(r))}}var Ot={tokenize:kt};function kt(e){let t=e.attempt(this.parser.constructs.contentInitial,r,i),n;return t;function r(n){if(n===null){e.consume(n);return}return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),q(e,t,`linePrefix`)}function i(t){return e.enter(`paragraph`),a(t)}function a(t){let r=e.enter(`chunkText`,{contentType:`text`,previous:n});return n&&(n.next=r),n=r,o(t)}function o(t){if(t===null){e.exit(`chunkText`),e.exit(`paragraph`),e.consume(t);return}return U(t)?(e.consume(t),e.exit(`chunkText`),a):(e.consume(t),o)}}var At={tokenize:Mt},jt={tokenize:Nt};function Mt(e){let t=this,n=[],r=0,i,a,o;return s;function s(i){if(r<n.length){let a=n[r];return t.containerState=a[1],e.attempt(a[0].continuation,c,l)(i)}return l(i)}function c(e){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&v();let n=t.events.length,a=n,o;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){o=t.events[a][1].end;break}_(r);let s=n;for(;s<t.events.length;)t.events[s][1].end={...o},s++;return R(t.events,a+1,0,t.events.slice(n)),t.events.length=s,l(e)}return s(e)}function l(a){if(r===n.length){if(!i)return f(a);if(i.currentConstruct&&i.currentConstruct.concrete)return m(a);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(jt,u,d)(a)}function u(e){return i&&v(),_(r),f(e)}function d(e){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,m(e)}function f(n){return t.containerState={},e.attempt(jt,p,m)(n)}function p(e){return r++,n.push([t.currentConstruct,t.containerState]),f(e)}function m(n){if(n===null){i&&v(),_(0),e.consume(n);return}return i||=t.parser.flow(t.now()),e.enter(`chunkFlow`,{_tokenizer:i,contentType:`flow`,previous:a}),h(n)}function h(n){if(n===null){g(e.exit(`chunkFlow`),!0),_(0),e.consume(n);return}return U(n)?(e.consume(n),g(e.exit(`chunkFlow`)),r=0,t.interrupt=void 0,s):(e.consume(n),h)}function g(e,n){let s=t.sliceStream(e);if(n&&s.push(null),e.previous=a,a&&(a.next=e),a=e,i.defineSkip(e.start),i.write(s),t.parser.lazy[e.start.line]){let e=i.events.length;for(;e--;)if(i.events[e][1].start.offset<o&&(!i.events[e][1].end||i.events[e][1].end.offset>o))return;let n=t.events.length,a=n,s,c;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){if(s){c=t.events[a][1].end;break}s=!0}for(_(r),e=n;e<t.events.length;)t.events[e][1].end={...c},e++;R(t.events,a+1,0,t.events.slice(n)),t.events.length=e}}function _(r){let i=n.length;for(;i-->r;){let r=n[i];t.containerState=r[1],r[0].exit.call(t,e)}n.length=r}function v(){i.write([null]),a=void 0,i=void 0,t.containerState._closeFlow=void 0}}function Nt(e,t,n){return q(e,e.attempt(this.parser.constructs.document,t,n),`linePrefix`,this.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)}function Pt(e){if(e===null||W(e)||Et(e))return 1;if(Tt(e))return 2}function Ft(e,t,n){let r=[],i=-1;for(;++i<e.length;){let a=e[i].resolveAll;a&&!r.includes(a)&&(t=a(t,n),r.push(a))}return t}var It={name:`attention`,resolveAll:Lt,tokenize:Rt};function Lt(e,t){let n=-1,r,i,a,o,s,c,l,u;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`attentionSequence`&&e[n][1]._close){for(r=n;r--;)if(e[r][0]===`exit`&&e[r][1].type===`attentionSequence`&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;let d={...e[r][1].end},f={...e[n][1].start};zt(d,-c),zt(f,c),o={type:c>1?`strongSequence`:`emphasisSequence`,start:d,end:{...e[r][1].end}},s={type:c>1?`strongSequence`:`emphasisSequence`,start:{...e[n][1].start},end:f},a={type:c>1?`strongText`:`emphasisText`,start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?`strong`:`emphasis`,start:{...o.start},end:{...s.end}},e[r][1].end={...o.start},e[n][1].start={...s.end},l=[],e[r][1].end.offset-e[r][1].start.offset&&(l=z(l,[[`enter`,e[r][1],t],[`exit`,e[r][1],t]])),l=z(l,[[`enter`,i,t],[`enter`,o,t],[`exit`,o,t],[`enter`,a,t]]),l=z(l,Ft(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),l=z(l,[[`exit`,a,t],[`enter`,s,t],[`exit`,s,t],[`exit`,i,t]]),e[n][1].end.offset-e[n][1].start.offset?(u=2,l=z(l,[[`enter`,e[n][1],t],[`exit`,e[n][1],t]])):u=0,R(e,r-1,n-r+3,l),n=r+l.length-u-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`attentionSequence`&&(e[n][1].type=`data`);return e}function Rt(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Pt(r),a;return o;function o(t){return a=t,e.enter(`attentionSequence`),s(t)}function s(o){if(o===a)return e.consume(o),s;let c=e.exit(`attentionSequence`),l=Pt(o),u=!l||l===2&&i||n.includes(o),d=!i||i===2&&l||n.includes(r);return c._open=!!(a===42?u:u&&(i||!d)),c._close=!!(a===42?d:d&&(l||!u)),t(o)}}function zt(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}var Bt={name:`autolink`,tokenize:Vt};function Vt(e,t,n){let r=0;return i;function i(t){return e.enter(`autolink`),e.enter(`autolinkMarker`),e.consume(t),e.exit(`autolinkMarker`),e.enter(`autolinkProtocol`),a}function a(t){return V(t)?(e.consume(t),o):t===64?n(t):l(t)}function o(e){return e===43||e===45||e===46||H(e)?(r=1,s(e)):l(e)}function s(t){return t===58?(e.consume(t),r=0,c):(t===43||t===45||t===46||H(t))&&r++<32?(e.consume(t),s):(r=0,l(t))}function c(r){return r===62?(e.exit(`autolinkProtocol`),e.enter(`autolinkMarker`),e.consume(r),e.exit(`autolinkMarker`),e.exit(`autolink`),t):r===null||r===32||r===60||xt(r)?n(r):(e.consume(r),c)}function l(t){return t===64?(e.consume(t),u):bt(t)?(e.consume(t),l):n(t)}function u(e){return H(e)?d(e):n(e)}function d(n){return n===46?(e.consume(n),r=0,u):n===62?(e.exit(`autolinkProtocol`).type=`autolinkEmail`,e.enter(`autolinkMarker`),e.consume(n),e.exit(`autolinkMarker`),e.exit(`autolink`),t):f(n)}function f(t){if((t===45||H(t))&&r++<63){let n=t===45?f:d;return e.consume(t),n}return n(t)}}var Ht={partial:!0,tokenize:Ut};function Ut(e,t,n){return r;function r(t){return G(t)?q(e,i,`linePrefix`)(t):i(t)}function i(e){return e===null||U(e)?t(e):n(e)}}var Wt={continuation:{tokenize:Kt},exit:qt,name:`blockQuote`,tokenize:Gt};function Gt(e,t,n){let r=this;return i;function i(t){if(t===62){let n=r.containerState;return n.open||=(e.enter(`blockQuote`,{_container:!0}),!0),e.enter(`blockQuotePrefix`),e.enter(`blockQuoteMarker`),e.consume(t),e.exit(`blockQuoteMarker`),a}return n(t)}function a(n){return G(n)?(e.enter(`blockQuotePrefixWhitespace`),e.consume(n),e.exit(`blockQuotePrefixWhitespace`),e.exit(`blockQuotePrefix`),t):(e.exit(`blockQuotePrefix`),t(n))}}function Kt(e,t,n){let r=this;return i;function i(t){return G(t)?q(e,a,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):a(t)}function a(r){return e.attempt(Wt,t,n)(r)}}function qt(e){e.exit(`blockQuote`)}var Jt={name:`characterEscape`,tokenize:Yt};function Yt(e,t,n){return r;function r(t){return e.enter(`characterEscape`),e.enter(`escapeMarker`),e.consume(t),e.exit(`escapeMarker`),i}function i(r){return wt(r)?(e.enter(`characterEscapeValue`),e.consume(r),e.exit(`characterEscapeValue`),e.exit(`characterEscape`),t):n(r)}}var Xt={name:`characterReference`,tokenize:Zt};function Zt(e,t,n){let r=this,i=0,a,o;return s;function s(t){return e.enter(`characterReference`),e.enter(`characterReferenceMarker`),e.consume(t),e.exit(`characterReferenceMarker`),c}function c(t){return t===35?(e.enter(`characterReferenceMarkerNumeric`),e.consume(t),e.exit(`characterReferenceMarkerNumeric`),l):(e.enter(`characterReferenceValue`),a=31,o=H,u(t))}function l(t){return t===88||t===120?(e.enter(`characterReferenceMarkerHexadecimal`),e.consume(t),e.exit(`characterReferenceMarkerHexadecimal`),e.enter(`characterReferenceValue`),a=6,o=Ct,u):(e.enter(`characterReferenceValue`),a=7,o=St,u(t))}function u(s){if(s===59&&i){let i=e.exit(`characterReferenceValue`);return o===H&&!mt(r.sliceSerialize(i))?n(s):(e.enter(`characterReferenceMarker`),e.consume(s),e.exit(`characterReferenceMarker`),e.exit(`characterReference`),t)}return o(s)&&i++<a?(e.consume(s),u):n(s)}}var Qt={partial:!0,tokenize:tn},$t={concrete:!0,name:`codeFenced`,tokenize:en};function en(e,t,n){let r=this,i={partial:!0,tokenize:x},a=0,o=0,s;return c;function c(e){return l(e)}function l(t){let n=r.events[r.events.length-1];return a=n&&n[1].type===`linePrefix`?n[2].sliceSerialize(n[1],!0).length:0,s=t,e.enter(`codeFenced`),e.enter(`codeFencedFence`),e.enter(`codeFencedFenceSequence`),u(t)}function u(t){return t===s?(o++,e.consume(t),u):o<3?n(t):(e.exit(`codeFencedFenceSequence`),G(t)?q(e,d,`whitespace`)(t):d(t))}function d(n){return n===null||U(n)?(e.exit(`codeFencedFence`),r.interrupt?t(n):e.check(Qt,h,b)(n)):(e.enter(`codeFencedFenceInfo`),e.enter(`chunkString`,{contentType:`string`}),f(n))}function f(t){return t===null||U(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),d(t)):G(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),q(e,p,`whitespace`)(t)):t===96&&t===s?n(t):(e.consume(t),f)}function p(t){return t===null||U(t)?d(t):(e.enter(`codeFencedFenceMeta`),e.enter(`chunkString`,{contentType:`string`}),m(t))}function m(t){return t===null||U(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceMeta`),d(t)):t===96&&t===s?n(t):(e.consume(t),m)}function h(t){return e.attempt(i,b,g)(t)}function g(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),_}function _(t){return a>0&&G(t)?q(e,v,`linePrefix`,a+1)(t):v(t)}function v(t){return t===null||U(t)?e.check(Qt,h,b)(t):(e.enter(`codeFlowValue`),y(t))}function y(t){return t===null||U(t)?(e.exit(`codeFlowValue`),v(t)):(e.consume(t),y)}function b(n){return e.exit(`codeFenced`),t(n)}function x(e,t,n){let i=0;return a;function a(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c}function c(t){return e.enter(`codeFencedFence`),G(t)?q(e,l,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):l(t)}function l(t){return t===s?(e.enter(`codeFencedFenceSequence`),u(t)):n(t)}function u(t){return t===s?(i++,e.consume(t),u):i>=o?(e.exit(`codeFencedFenceSequence`),G(t)?q(e,d,`whitespace`)(t):d(t)):n(t)}function d(r){return r===null||U(r)?(e.exit(`codeFencedFence`),t(r)):n(r)}}}function tn(e,t,n){let r=this;return i;function i(t){return t===null?n(t):(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),a)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}var nn={name:`codeIndented`,tokenize:an},rn={partial:!0,tokenize:on};function an(e,t,n){let r=this;return i;function i(t){return e.enter(`codeIndented`),q(e,a,`linePrefix`,5)(t)}function a(e){let t=r.events[r.events.length-1];return t&&t[1].type===`linePrefix`&&t[2].sliceSerialize(t[1],!0).length>=4?o(e):n(e)}function o(t){return t===null?c(t):U(t)?e.attempt(rn,o,c)(t):(e.enter(`codeFlowValue`),s(t))}function s(t){return t===null||U(t)?(e.exit(`codeFlowValue`),o(t)):(e.consume(t),s)}function c(n){return e.exit(`codeIndented`),t(n)}}function on(e,t,n){let r=this;return i;function i(t){return r.parser.lazy[r.now().line]?n(t):U(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),i):q(e,a,`linePrefix`,5)(t)}function a(e){let a=r.events[r.events.length-1];return a&&a[1].type===`linePrefix`&&a[2].sliceSerialize(a[1],!0).length>=4?t(e):U(e)?i(e):n(e)}}var sn={name:`codeText`,previous:ln,resolve:cn,tokenize:un};function cn(e){let t=e.length-4,n=3,r,i;if((e[n][1].type===`lineEnding`||e[n][1].type===`space`)&&(e[t][1].type===`lineEnding`||e[t][1].type===`space`)){for(r=n;++r<t;)if(e[r][1].type===`codeTextData`){e[n][1].type=`codeTextPadding`,e[t][1].type=`codeTextPadding`,n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!==`lineEnding`&&(i=r):(r===t||e[r][1].type===`lineEnding`)&&(e[i][1].type=`codeTextData`,r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function ln(e){return e!==96||this.events[this.events.length-1][1].type===`characterEscape`}function un(e,t,n){let r=0,i,a;return o;function o(t){return e.enter(`codeText`),e.enter(`codeTextSequence`),s(t)}function s(t){return t===96?(e.consume(t),r++,s):(e.exit(`codeTextSequence`),c(t))}function c(t){return t===null?n(t):t===32?(e.enter(`space`),e.consume(t),e.exit(`space`),c):t===96?(a=e.enter(`codeTextSequence`),i=0,u(t)):U(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c):(e.enter(`codeTextData`),l(t))}function l(t){return t===null||t===32||t===96||U(t)?(e.exit(`codeTextData`),c(t)):(e.consume(t),l)}function u(n){return n===96?(e.consume(n),i++,u):i===r?(e.exit(`codeTextSequence`),e.exit(`codeText`),t(n)):(a.type=`codeTextData`,l(n))}}var dn=class{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){let n=t??1/0;return n<this.left.length?this.left.slice(e,n):e>this.left.length?this.right.slice(this.right.length-n+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-n+this.left.length).reverse())}splice(e,t,n){let r=t||0;this.setCursor(Math.trunc(e));let i=this.right.splice(this.right.length-r,1/0);return n&&fn(this.left,n),i.reverse()}pop(){return this.setCursor(1/0),this.left.pop()}push(e){this.setCursor(1/0),this.left.push(e)}pushMany(e){this.setCursor(1/0),fn(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),fn(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0)){if(e<this.left.length){let t=this.left.splice(e,1/0);fn(this.right,t.reverse())}else{let t=this.right.splice(this.left.length+this.right.length-e,1/0);fn(this.left,t.reverse())}}}};function fn(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function pn(e){let t={},n=-1,r,i,a,o,s,c,l,u=new dn(e);for(;++n<u.length;){for(;n in t;)n=t[n];if(r=u.get(n),n&&r[1].type===`chunkFlow`&&u.get(n-1)[1].type===`listItemPrefix`&&(c=r[1]._tokenizer.events,a=0,a<c.length&&c[a][1].type===`lineEndingBlank`&&(a+=2),a<c.length&&c[a][1].type===`content`))for(;++a<c.length&&c[a][1].type!==`content`;)c[a][1].type===`chunkText`&&(c[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]===`enter`)r[1].contentType&&(Object.assign(t,mn(u,n)),n=t[n],l=!0);else if(r[1]._container){for(a=n,i=void 0;a--;)if(o=u.get(a),o[1].type===`lineEnding`||o[1].type===`lineEndingBlank`)o[0]===`enter`&&(i&&(u.get(i)[1].type=`lineEndingBlank`),o[1].type=`lineEnding`,i=a);else if(o[1].type!==`linePrefix`&&o[1].type!==`listItemIndent`)break;i&&(r[1].end={...u.get(i)[1].start},s=u.slice(i,n),s.unshift(r),u.splice(i,n-i+1,s))}}return R(e,0,1/0,u.slice(0)),!l}function mn(e,t){let n=e.get(t)[1],r=e.get(t)[2],i=t-1,a=[],o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));let s=o.events,c=[],l={},u,d,f=-1,p=n,m=0,h=0,g=[h];for(;p;){for(;e.get(++i)[1]!==p;);a.push(i),p._tokenizer||(u=r.sliceStream(p),p.next||u.push(null),d&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(u),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),d=p,p=p.next}for(p=n;++f<s.length;)s[f][0]===`exit`&&s[f-1][0]===`enter`&&s[f][1].type===s[f-1][1].type&&s[f][1].start.line!==s[f][1].end.line&&(h=f+1,g.push(h),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):g.pop(),f=g.length;f--;){let t=s.slice(g[f],g[f+1]),n=a.pop();c.push([n,n+t.length-1]),e.splice(n,2,t)}for(c.reverse(),f=-1;++f<c.length;)l[m+c[f][0]]=m+c[f][1],m+=c[f][1]-c[f][0]-1;return l}var hn={resolve:_n,tokenize:vn},gn={partial:!0,tokenize:yn};function _n(e){return pn(e),e}function vn(e,t){let n;return r;function r(t){return e.enter(`content`),n=e.enter(`chunkContent`,{contentType:`content`}),i(t)}function i(t){return t===null?a(t):U(t)?e.check(gn,o,a)(t):(e.consume(t),i)}function a(n){return e.exit(`chunkContent`),e.exit(`content`),t(n)}function o(t){return e.consume(t),e.exit(`chunkContent`),n.next=e.enter(`chunkContent`,{contentType:`content`,previous:n}),n=n.next,i}}function yn(e,t,n){let r=this;return i;function i(t){return e.exit(`chunkContent`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),q(e,a,`linePrefix`)}function a(i){if(i===null||U(i))return n(i);let a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes(`codeIndented`)&&a&&a[1].type===`linePrefix`&&a[2].sliceSerialize(a[1],!0).length>=4?t(i):e.interrupt(r.parser.constructs.flow,n,t)(i)}}function bn(e,t,n,r,i,a,o,s,c){let l=c||1/0,u=0;return d;function d(t){return t===60?(e.enter(r),e.enter(i),e.enter(a),e.consume(t),e.exit(a),f):t===null||t===32||t===41||xt(t)?n(t):(e.enter(r),e.enter(o),e.enter(s),e.enter(`chunkString`,{contentType:`string`}),h(t))}function f(n){return n===62?(e.enter(a),e.consume(n),e.exit(a),e.exit(i),e.exit(r),t):(e.enter(s),e.enter(`chunkString`,{contentType:`string`}),p(n))}function p(t){return t===62?(e.exit(`chunkString`),e.exit(s),f(t)):t===null||t===60||U(t)?n(t):(e.consume(t),t===92?m:p)}function m(t){return t===60||t===62||t===92?(e.consume(t),p):p(t)}function h(i){return!u&&(i===null||i===41||W(i))?(e.exit(`chunkString`),e.exit(s),e.exit(o),e.exit(r),t(i)):u<l&&i===40?(e.consume(i),u++,h):i===41?(e.consume(i),u--,h):i===null||i===32||i===40||xt(i)?n(i):(e.consume(i),i===92?g:h)}function g(t){return t===40||t===41||t===92?(e.consume(t),h):h(t)}}function xn(e,t,n,r,i,a){let o=this,s=0,c;return l;function l(t){return e.enter(r),e.enter(i),e.consume(t),e.exit(i),e.enter(a),u}function u(l){return s>999||l===null||l===91||l===93&&!c||l===94&&!s&&`_hiddenFootnoteSupport`in o.parser.constructs?n(l):l===93?(e.exit(a),e.enter(i),e.consume(l),e.exit(i),e.exit(r),t):U(l)?(e.enter(`lineEnding`),e.consume(l),e.exit(`lineEnding`),u):(e.enter(`chunkString`,{contentType:`string`}),d(l))}function d(t){return t===null||t===91||t===93||U(t)||s++>999?(e.exit(`chunkString`),u(t)):(e.consume(t),c||=!G(t),t===92?f:d)}function f(t){return t===91||t===92||t===93?(e.consume(t),s++,d):d(t)}}function Sn(e,t,n,r,i,a){let o;return s;function s(t){return t===34||t===39||t===40?(e.enter(r),e.enter(i),e.consume(t),e.exit(i),o=t===40?41:t,c):n(t)}function c(n){return n===o?(e.enter(i),e.consume(n),e.exit(i),e.exit(r),t):(e.enter(a),l(n))}function l(t){return t===o?(e.exit(a),c(o)):t===null?n(t):U(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),q(e,l,`linePrefix`)):(e.enter(`chunkString`,{contentType:`string`}),u(t))}function u(t){return t===o||t===null||U(t)?(e.exit(`chunkString`),l(t)):(e.consume(t),t===92?d:u)}function d(t){return t===o||t===92?(e.consume(t),u):u(t)}}function Cn(e,t){let n;return r;function r(i){return U(i)?(e.enter(`lineEnding`),e.consume(i),e.exit(`lineEnding`),n=!0,r):G(i)?q(e,r,n?`linePrefix`:`lineSuffix`)(i):t(i)}}var wn={name:`definition`,tokenize:En},Tn={partial:!0,tokenize:Dn};function En(e,t,n){let r=this,i;return a;function a(t){return e.enter(`definition`),o(t)}function o(t){return xn.call(r,e,s,n,`definitionLabel`,`definitionLabelMarker`,`definitionLabelString`)(t)}function s(t){return i=B(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),c):n(t)}function c(t){return W(t)?Cn(e,l)(t):l(t)}function l(t){return bn(e,u,n,`definitionDestination`,`definitionDestinationLiteral`,`definitionDestinationLiteralMarker`,`definitionDestinationRaw`,`definitionDestinationString`)(t)}function u(t){return e.attempt(Tn,d,d)(t)}function d(t){return G(t)?q(e,f,`whitespace`)(t):f(t)}function f(a){return a===null||U(a)?(e.exit(`definition`),r.parser.defined.push(i),t(a)):n(a)}}function Dn(e,t,n){return r;function r(t){return W(t)?Cn(e,i)(t):n(t)}function i(t){return Sn(e,a,n,`definitionTitle`,`definitionTitleMarker`,`definitionTitleString`)(t)}function a(t){return G(t)?q(e,o,`whitespace`)(t):o(t)}function o(e){return e===null||U(e)?t(e):n(e)}}var On={name:`hardBreakEscape`,tokenize:kn};function kn(e,t,n){return r;function r(t){return e.enter(`hardBreakEscape`),e.consume(t),i}function i(r){return U(r)?(e.exit(`hardBreakEscape`),t(r)):n(r)}}var An={name:`headingAtx`,resolve:jn,tokenize:Mn};function jn(e,t){let n=e.length-2,r=3,i,a;return e[r][1].type===`whitespace`&&(r+=2),n-2>r&&e[n][1].type===`whitespace`&&(n-=2),e[n][1].type===`atxHeadingSequence`&&(r===n-1||n-4>r&&e[n-2][1].type===`whitespace`)&&(n-=r+1===n?2:4),n>r&&(i={type:`atxHeadingText`,start:e[r][1].start,end:e[n][1].end},a={type:`chunkText`,start:e[r][1].start,end:e[n][1].end,contentType:`text`},R(e,r,n-r+1,[[`enter`,i,t],[`enter`,a,t],[`exit`,a,t],[`exit`,i,t]])),e}function Mn(e,t,n){let r=0;return i;function i(t){return e.enter(`atxHeading`),a(t)}function a(t){return e.enter(`atxHeadingSequence`),o(t)}function o(t){return t===35&&r++<6?(e.consume(t),o):t===null||W(t)?(e.exit(`atxHeadingSequence`),s(t)):n(t)}function s(n){return n===35?(e.enter(`atxHeadingSequence`),c(n)):n===null||U(n)?(e.exit(`atxHeading`),t(n)):G(n)?q(e,s,`whitespace`)(n):(e.enter(`atxHeadingText`),l(n))}function c(t){return t===35?(e.consume(t),c):(e.exit(`atxHeadingSequence`),s(t))}function l(t){return t===null||t===35||W(t)?(e.exit(`atxHeadingText`),s(t)):(e.consume(t),l)}}var Nn=`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`),Pn=[`pre`,`script`,`style`,`textarea`],Fn={concrete:!0,name:`htmlFlow`,resolveTo:Rn,tokenize:zn},In={partial:!0,tokenize:Vn},Ln={partial:!0,tokenize:Bn};function Rn(e){let t=e.length;for(;t--&&(e[t][0]!==`enter`||e[t][1].type!==`htmlFlow`););return t>1&&e[t-2][1].type===`linePrefix`&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function zn(e,t,n){let r=this,i,a,o,s,c;return l;function l(e){return u(e)}function u(t){return e.enter(`htmlFlow`),e.enter(`htmlFlowData`),e.consume(t),d}function d(s){return s===33?(e.consume(s),f):s===47?(e.consume(s),a=!0,h):s===63?(e.consume(s),i=3,r.interrupt?t:F):V(s)?(e.consume(s),o=String.fromCharCode(s),g):n(s)}function f(a){return a===45?(e.consume(a),i=2,p):a===91?(e.consume(a),i=5,s=0,m):V(a)?(e.consume(a),i=4,r.interrupt?t:F):n(a)}function p(i){return i===45?(e.consume(i),r.interrupt?t:F):n(i)}function m(i){return i===`CDATA[`.charCodeAt(s++)?(e.consume(i),s===6?r.interrupt?t:O:m):n(i)}function h(t){return V(t)?(e.consume(t),o=String.fromCharCode(t),g):n(t)}function g(s){if(s===null||s===47||s===62||W(s)){let c=s===47,l=o.toLowerCase();return!c&&!a&&Pn.includes(l)?(i=1,r.interrupt?t(s):O(s)):Nn.includes(o.toLowerCase())?(i=6,c?(e.consume(s),_):r.interrupt?t(s):O(s)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(s):a?v(s):y(s))}return s===45||H(s)?(e.consume(s),o+=String.fromCharCode(s),g):n(s)}function _(i){return i===62?(e.consume(i),r.interrupt?t:O):n(i)}function v(t){return G(t)?(e.consume(t),v):E(t)}function y(t){return t===47?(e.consume(t),E):t===58||t===95||V(t)?(e.consume(t),b):G(t)?(e.consume(t),y):E(t)}function b(t){return t===45||t===46||t===58||t===95||H(t)?(e.consume(t),b):x(t)}function x(t){return t===61?(e.consume(t),S):G(t)?(e.consume(t),x):y(t)}function S(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),c=t,C):G(t)?(e.consume(t),S):w(t)}function C(t){return t===c?(e.consume(t),c=null,T):t===null||U(t)?n(t):(e.consume(t),C)}function w(t){return t===null||t===34||t===39||t===47||t===60||t===61||t===62||t===96||W(t)?x(t):(e.consume(t),w)}function T(e){return e===47||e===62||G(e)?y(e):n(e)}function E(t){return t===62?(e.consume(t),D):n(t)}function D(t){return t===null||U(t)?O(t):G(t)?(e.consume(t),D):n(t)}function O(t){return t===45&&i===2?(e.consume(t),M):t===60&&i===1?(e.consume(t),N):t===62&&i===4?(e.consume(t),te):t===63&&i===3?(e.consume(t),F):t===93&&i===5?(e.consume(t),ee):U(t)&&(i===6||i===7)?(e.exit(`htmlFlowData`),e.check(In,I,k)(t)):t===null||U(t)?(e.exit(`htmlFlowData`),k(t)):(e.consume(t),O)}function k(t){return e.check(Ln,A,I)(t)}function A(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),j}function j(t){return t===null||U(t)?k(t):(e.enter(`htmlFlowData`),O(t))}function M(t){return t===45?(e.consume(t),F):O(t)}function N(t){return t===47?(e.consume(t),o=``,P):O(t)}function P(t){if(t===62){let n=o.toLowerCase();return Pn.includes(n)?(e.consume(t),te):O(t)}return V(t)&&o.length<8?(e.consume(t),o+=String.fromCharCode(t),P):O(t)}function ee(t){return t===93?(e.consume(t),F):O(t)}function F(t){return t===62?(e.consume(t),te):t===45&&i===2?(e.consume(t),F):O(t)}function te(t){return t===null||U(t)?(e.exit(`htmlFlowData`),I(t)):(e.consume(t),te)}function I(n){return e.exit(`htmlFlow`),t(n)}}function Bn(e,t,n){let r=this;return i;function i(t){return U(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),a):n(t)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}function Vn(e,t,n){return r;function r(r){return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),e.attempt(Ht,t,n)}}var Hn={name:`htmlText`,tokenize:Un};function Un(e,t,n){let r=this,i,a,o;return s;function s(t){return e.enter(`htmlText`),e.enter(`htmlTextData`),e.consume(t),c}function c(t){return t===33?(e.consume(t),l):t===47?(e.consume(t),x):t===63?(e.consume(t),y):V(t)?(e.consume(t),w):n(t)}function l(t){return t===45?(e.consume(t),u):t===91?(e.consume(t),a=0,m):V(t)?(e.consume(t),v):n(t)}function u(t){return t===45?(e.consume(t),p):n(t)}function d(t){return t===null?n(t):t===45?(e.consume(t),f):U(t)?(o=d,N(t)):(e.consume(t),d)}function f(t){return t===45?(e.consume(t),p):d(t)}function p(e){return e===62?M(e):e===45?f(e):d(e)}function m(t){return t===`CDATA[`.charCodeAt(a++)?(e.consume(t),a===6?h:m):n(t)}function h(t){return t===null?n(t):t===93?(e.consume(t),g):U(t)?(o=h,N(t)):(e.consume(t),h)}function g(t){return t===93?(e.consume(t),_):h(t)}function _(t){return t===62?M(t):t===93?(e.consume(t),_):h(t)}function v(t){return t===null||t===62?M(t):U(t)?(o=v,N(t)):(e.consume(t),v)}function y(t){return t===null?n(t):t===63?(e.consume(t),b):U(t)?(o=y,N(t)):(e.consume(t),y)}function b(e){return e===62?M(e):y(e)}function x(t){return V(t)?(e.consume(t),S):n(t)}function S(t){return t===45||H(t)?(e.consume(t),S):C(t)}function C(t){return U(t)?(o=C,N(t)):G(t)?(e.consume(t),C):M(t)}function w(t){return t===45||H(t)?(e.consume(t),w):t===47||t===62||W(t)?T(t):n(t)}function T(t){return t===47?(e.consume(t),M):t===58||t===95||V(t)?(e.consume(t),E):U(t)?(o=T,N(t)):G(t)?(e.consume(t),T):M(t)}function E(t){return t===45||t===46||t===58||t===95||H(t)?(e.consume(t),E):D(t)}function D(t){return t===61?(e.consume(t),O):U(t)?(o=D,N(t)):G(t)?(e.consume(t),D):T(t)}function O(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),i=t,k):U(t)?(o=O,N(t)):G(t)?(e.consume(t),O):(e.consume(t),A)}function k(t){return t===i?(e.consume(t),i=void 0,j):t===null?n(t):U(t)?(o=k,N(t)):(e.consume(t),k)}function A(t){return t===null||t===34||t===39||t===60||t===61||t===96?n(t):t===47||t===62||W(t)?T(t):(e.consume(t),A)}function j(e){return e===47||e===62||W(e)?T(e):n(e)}function M(r){return r===62?(e.consume(r),e.exit(`htmlTextData`),e.exit(`htmlText`),t):n(r)}function N(t){return e.exit(`htmlTextData`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),P}function P(t){return G(t)?q(e,ee,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):ee(t)}function ee(t){return e.enter(`htmlTextData`),o(t)}}var Wn={name:`labelEnd`,resolveAll:Jn,resolveTo:Yn,tokenize:Xn},Gn={tokenize:Zn},Kn={tokenize:Qn},qn={tokenize:$n};function Jn(e){let t=-1,n=[];for(;++t<e.length;){let r=e[t][1];if(n.push(e[t]),r.type===`labelImage`||r.type===`labelLink`||r.type===`labelEnd`){let e=r.type===`labelImage`?4:2;r.type=`data`,t+=e}}return e.length!==n.length&&R(e,0,e.length,n),e}function Yn(e,t){let n=e.length,r=0,i,a,o,s;for(;n--;)if(i=e[n][1],a){if(i.type===`link`||i.type===`labelLink`&&i._inactive)break;e[n][0]===`enter`&&i.type===`labelLink`&&(i._inactive=!0)}else if(o){if(e[n][0]===`enter`&&(i.type===`labelImage`||i.type===`labelLink`)&&!i._balanced&&(a=n,i.type!==`labelLink`)){r=2;break}}else i.type===`labelEnd`&&(o=n);let c={type:e[a][1].type===`labelLink`?`link`:`image`,start:{...e[a][1].start},end:{...e[e.length-1][1].end}},l={type:`label`,start:{...e[a][1].start},end:{...e[o][1].end}},u={type:`labelText`,start:{...e[a+r+2][1].end},end:{...e[o-2][1].start}};return s=[[`enter`,c,t],[`enter`,l,t]],s=z(s,e.slice(a+1,a+r+3)),s=z(s,[[`enter`,u,t]]),s=z(s,Ft(t.parser.constructs.insideSpan.null,e.slice(a+r+4,o-3),t)),s=z(s,[[`exit`,u,t],e[o-2],e[o-1],[`exit`,l,t]]),s=z(s,e.slice(o+1)),s=z(s,[[`exit`,c,t]]),R(e,a,e.length,s),e}function Xn(e,t,n){let r=this,i=r.events.length,a,o;for(;i--;)if((r.events[i][1].type===`labelImage`||r.events[i][1].type===`labelLink`)&&!r.events[i][1]._balanced){a=r.events[i][1];break}return s;function s(t){return a?a._inactive?d(t):(o=r.parser.defined.includes(B(r.sliceSerialize({start:a.end,end:r.now()}))),e.enter(`labelEnd`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelEnd`),c):n(t)}function c(t){return t===40?e.attempt(Gn,u,o?u:d)(t):t===91?e.attempt(Kn,u,o?l:d)(t):o?u(t):d(t)}function l(t){return e.attempt(qn,u,d)(t)}function u(e){return t(e)}function d(e){return a._balanced=!0,n(e)}}function Zn(e,t,n){return r;function r(t){return e.enter(`resource`),e.enter(`resourceMarker`),e.consume(t),e.exit(`resourceMarker`),i}function i(t){return W(t)?Cn(e,a)(t):a(t)}function a(t){return t===41?u(t):bn(e,o,s,`resourceDestination`,`resourceDestinationLiteral`,`resourceDestinationLiteralMarker`,`resourceDestinationRaw`,`resourceDestinationString`,32)(t)}function o(t){return W(t)?Cn(e,c)(t):u(t)}function s(e){return n(e)}function c(t){return t===34||t===39||t===40?Sn(e,l,n,`resourceTitle`,`resourceTitleMarker`,`resourceTitleString`)(t):u(t)}function l(t){return W(t)?Cn(e,u)(t):u(t)}function u(r){return r===41?(e.enter(`resourceMarker`),e.consume(r),e.exit(`resourceMarker`),e.exit(`resource`),t):n(r)}}function Qn(e,t,n){let r=this;return i;function i(t){return xn.call(r,e,a,o,`reference`,`referenceMarker`,`referenceString`)(t)}function a(e){return r.parser.defined.includes(B(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(e):n(e)}function o(e){return n(e)}}function $n(e,t,n){return r;function r(t){return e.enter(`reference`),e.enter(`referenceMarker`),e.consume(t),e.exit(`referenceMarker`),i}function i(r){return r===93?(e.enter(`referenceMarker`),e.consume(r),e.exit(`referenceMarker`),e.exit(`reference`),t):n(r)}}var er={name:`labelStartImage`,resolveAll:Wn.resolveAll,tokenize:tr};function tr(e,t,n){let r=this;return i;function i(t){return e.enter(`labelImage`),e.enter(`labelImageMarker`),e.consume(t),e.exit(`labelImageMarker`),a}function a(t){return t===91?(e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelImage`),o):n(t)}function o(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):t(e)}}var nr={name:`labelStartLink`,resolveAll:Wn.resolveAll,tokenize:rr};function rr(e,t,n){let r=this;return i;function i(t){return e.enter(`labelLink`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelLink`),a}function a(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):t(e)}}var ir={name:`lineEnding`,tokenize:ar};function ar(e,t){return n;function n(n){return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),q(e,t,`linePrefix`)}}var or={name:`thematicBreak`,tokenize:sr};function sr(e,t,n){let r=0,i;return a;function a(t){return e.enter(`thematicBreak`),o(t)}function o(e){return i=e,s(e)}function s(a){return a===i?(e.enter(`thematicBreakSequence`),c(a)):r>=3&&(a===null||U(a))?(e.exit(`thematicBreak`),t(a)):n(a)}function c(t){return t===i?(e.consume(t),r++,c):(e.exit(`thematicBreakSequence`),G(t)?q(e,s,`whitespace`)(t):s(t))}}var J={continuation:{tokenize:dr},exit:pr,name:`list`,tokenize:ur},cr={partial:!0,tokenize:mr},lr={partial:!0,tokenize:fr};function ur(e,t,n){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type===`linePrefix`?i[2].sliceSerialize(i[1],!0).length:0,o=0;return s;function s(t){let i=r.containerState.type||(t===42||t===43||t===45?`listUnordered`:`listOrdered`);if(i===`listUnordered`?!r.containerState.marker||t===r.containerState.marker:St(t)){if(r.containerState.type||(r.containerState.type=i,e.enter(i,{_container:!0})),i===`listUnordered`)return e.enter(`listItemPrefix`),t===42||t===45?e.check(or,n,l)(t):l(t);if(!r.interrupt||t===49)return e.enter(`listItemPrefix`),e.enter(`listItemValue`),c(t)}return n(t)}function c(t){return St(t)&&++o<10?(e.consume(t),c):(!r.interrupt||o<2)&&(r.containerState.marker?t===r.containerState.marker:t===41||t===46)?(e.exit(`listItemValue`),l(t)):n(t)}function l(t){return e.enter(`listItemMarker`),e.consume(t),e.exit(`listItemMarker`),r.containerState.marker=r.containerState.marker||t,e.check(Ht,r.interrupt?n:u,e.attempt(cr,f,d))}function u(e){return r.containerState.initialBlankLine=!0,a++,f(e)}function d(t){return G(t)?(e.enter(`listItemPrefixWhitespace`),e.consume(t),e.exit(`listItemPrefixWhitespace`),f):n(t)}function f(n){return r.containerState.size=a+r.sliceSerialize(e.exit(`listItemPrefix`),!0).length,t(n)}}function dr(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(Ht,i,a);function i(n){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,q(e,t,`listItemIndent`,r.containerState.size+1)(n)}function a(n){return r.containerState.furtherBlankLines||!G(n)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(n)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(lr,t,o)(n))}function o(i){return r.containerState._closeFlow=!0,r.interrupt=void 0,q(e,e.attempt(J,t,n),`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(i)}}function fr(e,t,n){let r=this;return q(e,i,`listItemIndent`,r.containerState.size+1);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`listItemIndent`&&i[2].sliceSerialize(i[1],!0).length===r.containerState.size?t(e):n(e)}}function pr(e){e.exit(this.containerState.type)}function mr(e,t,n){let r=this;return q(e,i,`listItemPrefixWhitespace`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:5);function i(e){let i=r.events[r.events.length-1];return!G(e)&&i&&i[1].type===`listItemPrefixWhitespace`?t(e):n(e)}}var hr={name:`setextUnderline`,resolveTo:gr,tokenize:_r};function gr(e,t){let n=e.length,r,i,a;for(;n--;)if(e[n][0]===`enter`){if(e[n][1].type===`content`){r=n;break}e[n][1].type===`paragraph`&&(i=n)}else e[n][1].type===`content`&&e.splice(n,1),!a&&e[n][1].type===`definition`&&(a=n);let o={type:`setextHeading`,start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type=`setextHeadingText`,a?(e.splice(i,0,[`enter`,o,t]),e.splice(a+1,0,[`exit`,e[r][1],t]),e[r][1].end={...e[a][1].end}):e[r][1]=o,e.push([`exit`,o,t]),e}function _r(e,t,n){let r=this,i;return a;function a(t){let a=r.events.length,s;for(;a--;)if(r.events[a][1].type!==`lineEnding`&&r.events[a][1].type!==`linePrefix`&&r.events[a][1].type!==`content`){s=r.events[a][1].type===`paragraph`;break}return!r.parser.lazy[r.now().line]&&(r.interrupt||s)?(e.enter(`setextHeadingLine`),i=t,o(t)):n(t)}function o(t){return e.enter(`setextHeadingLineSequence`),s(t)}function s(t){return t===i?(e.consume(t),s):(e.exit(`setextHeadingLineSequence`),G(t)?q(e,c,`lineSuffix`)(t):c(t))}function c(r){return r===null||U(r)?(e.exit(`setextHeadingLine`),t(r)):n(r)}}var vr={tokenize:yr};function yr(e){let t=this,n=e.attempt(Ht,r,e.attempt(this.parser.constructs.flowInitial,i,q(e,e.attempt(this.parser.constructs.flow,i,e.attempt(hn,i)),`linePrefix`)));return n;function r(r){if(r===null){e.consume(r);return}return e.enter(`lineEndingBlank`),e.consume(r),e.exit(`lineEndingBlank`),t.currentConstruct=void 0,n}function i(r){if(r===null){e.consume(r);return}return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),t.currentConstruct=void 0,n}}var br={resolveAll:wr()},xr=Cr(`string`),Sr=Cr(`text`);function Cr(e){return{resolveAll:wr(e===`text`?Tr:void 0),tokenize:t};function t(t){let n=this,r=this.parser.constructs[e],i=t.attempt(r,a,o);return a;function a(e){return c(e)?i(e):o(e)}function o(e){if(e===null){t.consume(e);return}return t.enter(`data`),t.consume(e),s}function s(e){return c(e)?(t.exit(`data`),i(e)):(t.consume(e),s)}function c(e){if(e===null)return!0;let t=r[e],i=-1;if(t)for(;++i<t.length;){let e=t[i];if(!e.previous||e.previous.call(n,n.previous))return!0}return!1}}}function wr(e){return t;function t(t,n){let r=-1,i;for(;++r<=t.length;)i===void 0?t[r]&&t[r][1].type===`data`&&(i=r,r++):(!t[r]||t[r][1].type!==`data`)&&(r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),r=i+2),i=void 0);return e?e(t,n):t}}function Tr(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type===`lineEnding`)&&e[n-1][1].type===`data`){let r=e[n-1][1],i=t.sliceStream(r),a=i.length,o=-1,s=0,c;for(;a--;){let e=i[a];if(typeof e==`string`){for(o=e.length;e.charCodeAt(o-1)===32;)s++,o--;if(o)break;o=-1}else if(e===-2)c=!0,s++;else if(e!==-1){a++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(s=0),s){let i={type:n===e.length||c||s<2?`lineSuffix`:`hardBreakTrailing`,start:{_bufferIndex:a?o:r.start._bufferIndex+o,_index:r.start._index+a,line:r.end.line,column:r.end.column-s,offset:r.end.offset-s},end:{...r.end}};r.end={...i.start},r.start.offset===r.end.offset?Object.assign(r,i):(e.splice(n,0,[`enter`,i,t],[`exit`,i,t]),n+=2)}n++}return e}var Er=e({attentionMarkers:()=>Pr,contentInitial:()=>Or,disable:()=>Fr,document:()=>Dr,flow:()=>Ar,flowInitial:()=>kr,insideSpan:()=>Nr,string:()=>jr,text:()=>Mr}),Dr={42:J,43:J,45:J,48:J,49:J,50:J,51:J,52:J,53:J,54:J,55:J,56:J,57:J,62:Wt},Or={91:wn},kr={[-2]:nn,[-1]:nn,32:nn},Ar={35:An,42:or,45:[hr,or],60:Fn,61:hr,95:or,96:$t,126:$t},jr={38:Xt,92:Jt},Mr={[-5]:ir,[-4]:ir,[-3]:ir,33:er,38:Xt,42:It,60:[Bt,Hn],91:nr,92:[On,Jt],93:Wn,95:It,96:sn},Nr={null:[It,br]},Pr={null:[42,95]},Fr={null:[]};function Ir(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},i={},a=[],o=[],s=[],c={attempt:C(x),check:C(S),consume:v,enter:y,exit:b,interrupt:C(S,{interrupt:!0})},l={code:null,containerState:{},defineSkip:h,events:[],now:m,parser:e,previous:null,sliceSerialize:f,sliceStream:p,write:d},u=t.tokenize.call(l,c);return t.resolveAll&&a.push(t),l;function d(e){return o=z(o,e),g(),o[o.length-1]===null?(w(t,0),l.events=Ft(a,l.events,l),l.events):[]}function f(e,t){return Rr(p(e),t)}function p(e){return Lr(o,e)}function m(){let{_bufferIndex:e,_index:t,line:n,column:i,offset:a}=r;return{_bufferIndex:e,_index:t,line:n,column:i,offset:a}}function h(e){i[e.line]=e.column,E()}function g(){let e;for(;r._index<o.length;){let t=o[r._index];if(typeof t==`string`)for(e=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===e&&r._bufferIndex<t.length;)_(t.charCodeAt(r._bufferIndex));else _(t)}}function _(e){u=u(e)}function v(e){U(e)?(r.line++,r.column=1,r.offset+=e===-3?2:1,E()):e!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),l.previous=e}function y(e,t){let n=t||{};return n.type=e,n.start=m(),l.events.push([`enter`,n,l]),s.push(n),n}function b(e){let t=s.pop();return t.end=m(),l.events.push([`exit`,t,l]),t}function x(e,t){w(e,t.from)}function S(e,t){t.restore()}function C(e,t){return n;function n(n,r,i){let a,o,s,u;return Array.isArray(n)?f(n):`tokenize`in n?f([n]):d(n);function d(e){return t;function t(t){let n=t!==null&&e[t],r=t!==null&&e.null;return f([...Array.isArray(n)?n:n?[n]:[],...Array.isArray(r)?r:r?[r]:[]])(t)}}function f(e){return a=e,o=0,e.length===0?i:p(e[o])}function p(e){return n;function n(n){return u=T(),s=e,e.partial||(l.currentConstruct=e),e.name&&l.parser.constructs.disable.null.includes(e.name)?h(n):e.tokenize.call(t?Object.assign(Object.create(l),t):l,c,m,h)(n)}}function m(t){return e(s,u),r}function h(e){return u.restore(),++o<a.length?p(a[o]):i}}}function w(e,t){e.resolveAll&&!a.includes(e)&&a.push(e),e.resolve&&R(l.events,t,l.events.length-t,e.resolve(l.events.slice(t),l)),e.resolveTo&&(l.events=e.resolveTo(l.events,l))}function T(){let e=m(),t=l.previous,n=l.currentConstruct,i=l.events.length,a=Array.from(s);return{from:i,restore:o};function o(){r=e,l.previous=t,l.currentConstruct=n,l.events.length=i,s=a,E()}}function E(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Lr(e,t){let n=t.start._index,r=t.start._bufferIndex,i=t.end._index,a=t.end._bufferIndex,o;if(n===i)o=[e[n].slice(r,a)];else{if(o=e.slice(n,i),r>-1){let e=o[0];typeof e==`string`?o[0]=e.slice(r):o.shift()}a>0&&o.push(e[i].slice(0,a))}return o}function Rr(e,t){let n=-1,r=[],i;for(;++n<e.length;){let a=e[n],o;if(typeof a==`string`)o=a;else switch(a){case-5:o=`\r`;break;case-4:o=`
`;break;case-3:o=`\r
`;break;case-2:o=t?` `:`	`;break;case-1:if(!t&&i)continue;o=` `;break;default:o=String.fromCharCode(a)}i=a===-2,r.push(o)}return r.join(``)}function zr(e){let t={constructs:gt([Er,...(e||{}).extensions||[]]),content:n(Ot),defined:[],document:n(At),flow:n(vr),lazy:{},string:n(xr),text:n(Sr)};return t;function n(e){return n;function n(n){return Ir(t,e,n)}}}function Br(e){for(;!pn(e););return e}var Vr=/[\0\t\n\r]/g;function Hr(){let e=1,t=``,n=!0,r;return i;function i(i,a,o){let s=[],c,l,u,d,f;for(i=t+(typeof i==`string`?i.toString():new TextDecoder(a||void 0).decode(i)),u=0,t=``,n&&=(i.charCodeAt(0)===65279&&u++,void 0);u<i.length;){if(Vr.lastIndex=u,c=Vr.exec(i),d=c&&c.index!==void 0?c.index:i.length,f=i.charCodeAt(d),!c){t=i.slice(u);break}if(f===10&&u===d&&r)s.push(-3),r=void 0;else switch(r&&=(s.push(-5),void 0),u<d&&(s.push(i.slice(u,d)),e+=d-u),f){case 0:s.push(65533),e++;break;case 9:for(l=Math.ceil(e/4)*4,s.push(-2);e++<l;)s.push(-1);break;case 10:s.push(-4),e=1;break;default:r=!0,e=1}u=d+1}return o&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}var Ur=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Wr(e){return e.replace(Ur,Gr)}function Gr(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let e=n.charCodeAt(1),t=e===120||e===88;return yt(n.slice(t?2:1),t?16:10)}return mt(n)||e}var Kr={}.hasOwnProperty;function qr(e,t,n){return t&&typeof t==`object`&&(n=t,t=void 0),Jr(n)(Br(zr(n).document().write(Hr()(e,t,!0))))}function Jr(e){let t={transforms:[],canContainEols:[`emphasis`,`fragment`,`heading`,`paragraph`,`strong`],enter:{autolink:a(ve),autolinkProtocol:T,autolinkEmail:T,atxHeading:a(me),blockQuote:a(le),characterEscape:T,characterReference:T,codeFenced:a(ue),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:a(ue,o),codeText:a(de,o),codeTextData:T,data:T,codeFlowValue:T,definition:a(fe),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:a(pe),hardBreakEscape:a(he),hardBreakTrailing:a(he),htmlFlow:a(ge,o),htmlFlowData:T,htmlText:a(ge,o),htmlTextData:T,image:a(_e),label:o,link:a(ve),listItem:a(be),listItemValue:f,listOrdered:a(ye,d),listUnordered:a(ye),paragraph:a(xe),reference:ne,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:a(me),strong:a(Se),thematicBreak:a(we)},exit:{atxHeading:c(),atxHeadingSequence:x,autolink:c(),autolinkEmail:ce,autolinkProtocol:se,blockQuote:c(),characterEscapeValue:E,characterReferenceMarkerHexadecimal:ie,characterReferenceMarkerNumeric:ie,characterReferenceValue:ae,characterReference:oe,codeFenced:c(g),codeFencedFence:h,codeFencedFenceInfo:p,codeFencedFenceMeta:m,codeFlowValue:E,codeIndented:c(_),codeText:c(j),codeTextData:E,data:E,definition:c(),definitionDestinationString:b,definitionLabelString:v,definitionTitleString:y,emphasis:c(),hardBreakEscape:c(O),hardBreakTrailing:c(O),htmlFlow:c(k),htmlFlowData:E,htmlText:c(A),htmlTextData:E,image:c(N),label:ee,labelText:P,lineEnding:D,link:c(M),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:re,resourceDestinationString:F,resourceTitleString:te,resource:I,setextHeading:c(w),setextHeadingLineSequence:C,setextHeadingText:S,strong:c(),thematicBreak:c()}};Yr(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(e){let r={type:`root`,children:[]},a={stack:[r],tokenStack:[],config:t,enter:s,exit:l,buffer:o,resume:u,data:n},c=[],d=-1;for(;++d<e.length;)(e[d][1].type===`listOrdered`||e[d][1].type===`listUnordered`)&&(e[d][0]===`enter`?c.push(d):d=i(e,c.pop(),d));for(d=-1;++d<e.length;){let n=t[e[d][0]];Kr.call(n,e[d][1].type)&&n[e[d][1].type].call(Object.assign({sliceSerialize:e[d][2].sliceSerialize},a),e[d][1])}if(a.tokenStack.length>0){let e=a.tokenStack[a.tokenStack.length-1];(e[1]||Zr).call(a,void 0,e[0])}for(r.position={start:Y(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:Y(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},d=-1;++d<t.transforms.length;)r=t.transforms[d](r)||r;return r}function i(e,t,n){let r=t-1,i=-1,a=!1,o,s,c,l;for(;++r<=n;){let t=e[r];switch(t[1].type){case`listUnordered`:case`listOrdered`:case`blockQuote`:t[0]===`enter`?i++:i--,l=void 0;break;case`lineEndingBlank`:t[0]===`enter`&&(o&&!l&&!i&&!c&&(c=r),l=void 0);break;case`linePrefix`:case`listItemValue`:case`listItemMarker`:case`listItemPrefix`:case`listItemPrefixWhitespace`:break;default:l=void 0}if(!i&&t[0]===`enter`&&t[1].type===`listItemPrefix`||i===-1&&t[0]===`exit`&&(t[1].type===`listUnordered`||t[1].type===`listOrdered`)){if(o){let i=r;for(s=void 0;i--;){let t=e[i];if(t[1].type===`lineEnding`||t[1].type===`lineEndingBlank`){if(t[0]===`exit`)continue;s&&(e[s][1].type=`lineEndingBlank`,a=!0),t[1].type=`lineEnding`,s=i}else if(t[1].type!==`linePrefix`&&t[1].type!==`blockQuotePrefix`&&t[1].type!==`blockQuotePrefixWhitespace`&&t[1].type!==`blockQuoteMarker`&&t[1].type!==`listItemIndent`)break}c&&(!s||c<s)&&(o._spread=!0),o.end=Object.assign({},s?e[s][1].start:t[1].end),e.splice(s||r,0,[`exit`,o,t[2]]),r++,n++}if(t[1].type===`listItemPrefix`){let i={type:`listItem`,_spread:!1,start:Object.assign({},t[1].start),end:void 0};o=i,e.splice(r,0,[`enter`,i,t[2]]),r++,n++,c=void 0,l=!0}}}return e[t][1]._spread=a,n}function a(e,t){return n;function n(n){s.call(this,e(n),n),t&&t.call(this,n)}}function o(){this.stack.push({type:`fragment`,children:[]})}function s(e,t,n){this.stack[this.stack.length-1].children.push(e),this.stack.push(e),this.tokenStack.push([t,n||void 0]),e.position={start:Y(t.start),end:void 0}}function c(e){return t;function t(t){e&&e.call(this,t),l.call(this,t)}}function l(e,t){let n=this.stack.pop(),r=this.tokenStack.pop();if(r)r[0].type!==e.type&&(t?t.call(this,e,r[0]):(r[1]||Zr).call(this,e,r[0]));else throw Error("Cannot close `"+e.type+"` ("+Oe({start:e.start,end:e.end})+`): it’s not open`);n.position.end=Y(e.end)}function u(){return lt(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function f(e){if(this.data.expectingFirstListItemValue){let t=this.stack[this.stack.length-2];t.start=Number.parseInt(this.sliceSerialize(e),10),this.data.expectingFirstListItemValue=void 0}}function p(){let e=this.resume(),t=this.stack[this.stack.length-1];t.lang=e}function m(){let e=this.resume(),t=this.stack[this.stack.length-1];t.meta=e}function h(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function g(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,``),this.data.flowCodeInside=void 0}function _(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/(\r?\n|\r)$/g,``)}function v(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=B(this.sliceSerialize(e)).toLowerCase()}function y(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function b(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function x(e){let t=this.stack[this.stack.length-1];t.depth||=this.sliceSerialize(e).length}function S(){this.data.setextHeadingSlurpLineEnding=!0}function C(e){let t=this.stack[this.stack.length-1];t.depth=this.sliceSerialize(e).codePointAt(0)===61?1:2}function w(){this.data.setextHeadingSlurpLineEnding=void 0}function T(e){let t=this.stack[this.stack.length-1].children,n=t[t.length-1];(!n||n.type!==`text`)&&(n=Ce(),n.position={start:Y(e.start),end:void 0},t.push(n)),this.stack.push(n)}function E(e){let t=this.stack.pop();t.value+=this.sliceSerialize(e),t.position.end=Y(e.end)}function D(e){let n=this.stack[this.stack.length-1];if(this.data.atHardBreak){let t=n.children[n.children.length-1];t.position.end=Y(e.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(n.type)&&(T.call(this,e),E.call(this,e))}function O(){this.data.atHardBreak=!0}function k(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function A(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function j(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function M(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function N(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function P(e){let t=this.sliceSerialize(e),n=this.stack[this.stack.length-2];n.label=Wr(t),n.identifier=B(t).toLowerCase()}function ee(){let e=this.stack[this.stack.length-1],t=this.resume(),n=this.stack[this.stack.length-1];this.data.inReference=!0,n.type===`link`?n.children=e.children:n.alt=t}function F(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function te(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function I(){this.data.inReference=void 0}function ne(){this.data.referenceType=`collapsed`}function re(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=B(this.sliceSerialize(e)).toLowerCase(),this.data.referenceType=`full`}function ie(e){this.data.characterReferenceType=e.type}function ae(e){let t=this.sliceSerialize(e),n=this.data.characterReferenceType,r;n?(r=yt(t,n===`characterReferenceMarkerNumeric`?10:16),this.data.characterReferenceType=void 0):r=mt(t);let i=this.stack[this.stack.length-1];i.value+=r}function oe(e){let t=this.stack.pop();t.position.end=Y(e.end)}function se(e){E.call(this,e);let t=this.stack[this.stack.length-1];t.url=this.sliceSerialize(e)}function ce(e){E.call(this,e);let t=this.stack[this.stack.length-1];t.url=`mailto:`+this.sliceSerialize(e)}function le(){return{type:`blockquote`,children:[]}}function ue(){return{type:`code`,lang:null,meta:null,value:``}}function de(){return{type:`inlineCode`,value:``}}function fe(){return{type:`definition`,identifier:``,label:null,title:null,url:``}}function pe(){return{type:`emphasis`,children:[]}}function me(){return{type:`heading`,depth:0,children:[]}}function he(){return{type:`break`}}function ge(){return{type:`html`,value:``}}function _e(){return{type:`image`,title:null,url:``,alt:null}}function ve(){return{type:`link`,title:null,url:``,children:[]}}function ye(e){return{type:`list`,ordered:e.type===`listOrdered`,start:null,spread:e._spread,children:[]}}function be(e){return{type:`listItem`,spread:e._spread,checked:null,children:[]}}function xe(){return{type:`paragraph`,children:[]}}function Se(){return{type:`strong`,children:[]}}function Ce(){return{type:`text`,value:``}}function we(){return{type:`thematicBreak`}}}function Y(e){return{line:e.line,column:e.column,offset:e.offset}}function Yr(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?Yr(e,r):Xr(e,r)}}function Xr(e,t){let n;for(n in t)if(Kr.call(t,n))switch(n){case`canContainEols`:{let r=t[n];r&&e[n].push(...r);break}case`transforms`:{let r=t[n];r&&e[n].push(...r);break}case`enter`:case`exit`:{let r=t[n];r&&Object.assign(e[n],r);break}}}function Zr(e,t){throw Error(e?"Cannot close `"+e.type+"` ("+Oe({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Oe({start:t.start,end:t.end})+`) is open`:"Cannot close document, a token (`"+t.type+"`, "+Oe({start:t.start,end:t.end})+`) is still open`)}function Qr(e){let t=this;t.parser=n;function n(n){return qr(n,{...t.data(`settings`),...e,extensions:t.data(`micromarkExtensions`)||[],mdastExtensions:t.data(`fromMarkdownExtensions`)||[]})}}function $r(e,t){let n={type:`element`,tagName:`blockquote`,properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function ei(e,t){let n={type:`element`,tagName:`br`,properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:`text`,value:`
`}]}function ti(e,t){let n=t.value?t.value+`
`:``,r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=[`language-`+i[0]]);let a={type:`element`,tagName:`code`,properties:r,children:[{type:`text`,value:n}]};return t.meta&&(a.data={meta:t.meta}),e.patch(t,a),a=e.applyData(t,a),a={type:`element`,tagName:`pre`,properties:{},children:[a]},e.patch(t,a),a}function ni(e,t){let n={type:`element`,tagName:`del`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function ri(e,t){let n={type:`element`,tagName:`em`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function ii(e,t){let n=typeof e.options.clobberPrefix==`string`?e.options.clobberPrefix:`user-content-`,r=String(t.identifier).toUpperCase(),i=Dt(r.toLowerCase()),a=e.footnoteOrder.indexOf(r),o,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=a+1,s+=1,e.footnoteCounts.set(r,s);let c={type:`element`,tagName:`a`,properties:{href:`#`+n+`fn-`+i,id:n+`fnref-`+i+(s>1?`-`+s:``),dataFootnoteRef:!0,ariaDescribedBy:[`footnote-label`]},children:[{type:`text`,value:String(o)}]};e.patch(t,c);let l={type:`element`,tagName:`sup`,properties:{},children:[c]};return e.patch(t,l),e.applyData(t,l)}function ai(e,t){let n={type:`element`,tagName:`h`+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function oi(e,t){if(e.options.allowDangerousHtml){let n={type:`raw`,value:t.value};return e.patch(t,n),e.applyData(t,n)}}function si(e,t){let n=t.referenceType,r=`]`;if(n===`collapsed`?r+=`[]`:n===`full`&&(r+=`[`+(t.label||t.identifier)+`]`),t.type===`imageReference`)return[{type:`text`,value:`![`+t.alt+r}];let i=e.all(t),a=i[0];a&&a.type===`text`?a.value=`[`+a.value:i.unshift({type:`text`,value:`[`});let o=i[i.length-1];return o&&o.type===`text`?o.value+=r:i.push({type:`text`,value:r}),i}function ci(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return si(e,t);let i={src:Dt(r.url||``),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:`element`,tagName:`img`,properties:i,children:[]};return e.patch(t,a),e.applyData(t,a)}function li(e,t){let n={src:Dt(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`img`,properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function ui(e,t){let n={type:`text`,value:t.value.replace(/\r?\n|\r/g,` `)};e.patch(t,n);let r={type:`element`,tagName:`code`,properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function di(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return si(e,t);let i={href:Dt(r.url||``)};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:`element`,tagName:`a`,properties:i,children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function fi(e,t){let n={href:Dt(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`a`,properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function pi(e,t,n){let r=e.all(t),i=n?mi(n):hi(t),a={},o=[];if(typeof t.checked==`boolean`){let e=r[0],n;e&&e.type===`element`&&e.tagName===`p`?n=e:(n={type:`element`,tagName:`p`,properties:{},children:[]},r.unshift(n)),n.children.length>0&&n.children.unshift({type:`text`,value:` `}),n.children.unshift({type:`element`,tagName:`input`,properties:{type:`checkbox`,checked:t.checked,disabled:!0},children:[]}),a.className=[`task-list-item`]}let s=-1;for(;++s<r.length;){let e=r[s];(i||s!==0||e.type!==`element`||e.tagName!==`p`)&&o.push({type:`text`,value:`
`}),e.type===`element`&&e.tagName===`p`&&!i?o.push(...e.children):o.push(e)}let c=r[r.length-1];c&&(i||c.type!==`element`||c.tagName!==`p`)&&o.push({type:`text`,value:`
`});let l={type:`element`,tagName:`li`,properties:a,children:o};return e.patch(t,l),e.applyData(t,l)}function mi(e){let t=!1;if(e.type===`list`){t=e.spread||!1;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=hi(n[r])}return t}function hi(e){return e.spread??e.children.length>1}function gi(e,t){let n={},r=e.all(t),i=-1;for(typeof t.start==`number`&&t.start!==1&&(n.start=t.start);++i<r.length;){let e=r[i];if(e.type===`element`&&e.tagName===`li`&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes(`task-list-item`)){n.className=[`contains-task-list`];break}}let a={type:`element`,tagName:t.ordered?`ol`:`ul`,properties:n,children:e.wrap(r,!0)};return e.patch(t,a),e.applyData(t,a)}function _i(e,t){let n={type:`element`,tagName:`p`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function vi(e,t){let n={type:`root`,children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function yi(e,t){let n={type:`element`,tagName:`strong`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function bi(e,t){let n=e.all(t),r=n.shift(),i=[];if(r){let n={type:`element`,tagName:`thead`,properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],n),i.push(n)}if(n.length>0){let r={type:`element`,tagName:`tbody`,properties:{},children:e.wrap(n,!0)},a=Te(t.children[1]),o=we(t.children[t.children.length-1]);a&&o&&(r.position={start:a,end:o}),i.push(r)}let a={type:`element`,tagName:`table`,properties:{},children:e.wrap(i,!0)};return e.patch(t,a),e.applyData(t,a)}function xi(e,t,n){let r=n?n.children:void 0,i=(r?r.indexOf(t):1)===0?`th`:`td`,a=n&&n.type===`table`?n.align:void 0,o=a?a.length:t.children.length,s=-1,c=[];for(;++s<o;){let n=t.children[s],r={},o=a?a[s]:void 0;o&&(r.align=o);let l={type:`element`,tagName:i,properties:r,children:[]};n&&(l.children=e.all(n),e.patch(n,l),l=e.applyData(n,l)),c.push(l)}let l={type:`element`,tagName:`tr`,properties:{},children:e.wrap(c,!0)};return e.patch(t,l),e.applyData(t,l)}function Si(e,t){let n={type:`element`,tagName:`td`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}var Ci=9,wi=32;function Ti(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),i=0,a=[];for(;r;)a.push(Ei(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return a.push(Ei(t.slice(i),i>0,!1)),a.join(``)}function Ei(e,t,n){let r=0,i=e.length;if(t){let t=e.codePointAt(r);for(;t===Ci||t===wi;)r++,t=e.codePointAt(r)}if(n){let t=e.codePointAt(i-1);for(;t===Ci||t===wi;)i--,t=e.codePointAt(i-1)}return i>r?e.slice(r,i):``}function Di(e,t){let n={type:`text`,value:Ti(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function Oi(e,t){let n={type:`element`,tagName:`hr`,properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}var ki={blockquote:$r,break:ei,code:ti,delete:ni,emphasis:ri,footnoteReference:ii,heading:ai,html:oi,imageReference:ci,image:li,inlineCode:ui,linkReference:di,link:fi,listItem:pi,list:gi,paragraph:_i,root:vi,strong:yi,table:bi,tableCell:Si,tableRow:xi,text:Di,thematicBreak:Oi,toml:Ai,yaml:Ai,definition:Ai,footnoteDefinition:Ai};function Ai(){}var{defineProperty:ji}=Object,Mi=typeof self==`object`?self:globalThis,Ni=(e,t)=>{switch(e){case`Function`:case`SharedWorker`:case`Worker`:case`eval`:case`setInterval`:case`setTimeout`:throw TypeError(`unable to deserialize `+e)}return new Mi[e](t)},Pi=(e,t)=>{let n=(t,n)=>(e.set(n,t),t),r=i=>{if(e.has(i))return e.get(i);let[a,o]=t[i];switch(a){case 0:case-1:return n(o,i);case 1:{let e=n([],i);for(let t of o)e.push(r(t));return e}case 2:{let e=n({},i);for(let[t,n]of o){let i=r(t),a=r(n);i===`__proto__`?ji(e,i,{value:a,configurable:!0,enumerable:!0,writable:!0}):e[i]=a}return e}case 3:return n(new Date(o),i);case 4:{let{source:e,flags:t}=o;return n(new RegExp(e,t),i)}case 5:{let e=n(new Map,i);for(let[t,n]of o)e.set(r(t),r(n));return e}case 6:{let e=n(new Set,i);for(let t of o)e.add(r(t));return e}case 7:{let{name:e,message:t}=o;return n(typeof Mi[e]==`function`?Ni(e,t):Error(t),i)}case 8:return n(BigInt(o),i);case`BigInt`:return n(Object(BigInt(o)),i);case`ArrayBuffer`:return n(new Uint8Array(o).buffer,o);case`DataView`:{let{buffer:e}=new Uint8Array(o);return n(new DataView(e),o)}}return n(Ni(a,o),i)};return r},Fi=e=>Pi(new Map,e)(0),Ii=``,{toString:Li}={},{keys:Ri}=Object,zi=e=>{let t=typeof e;if(t!==`object`||!e)return[0,t];let n=Li.call(e).slice(8,-1);switch(n){case`Array`:return[1,Ii];case`Object`:return[2,Ii];case`Date`:return[3,Ii];case`RegExp`:return[4,Ii];case`Map`:return[5,Ii];case`Set`:return[6,Ii];case`DataView`:return[1,n]}return n.includes(`Array`)?[1,n]:e instanceof Error?[7,e.name||`Error`]:[2,n]},Bi=([e,t])=>e===0&&(t===`function`||t===`symbol`),Vi=(e,t,n,r)=>{let i=(e,t)=>{let i=r.push(e)-1;return n.set(t,i),i},a=r=>{if(n.has(r))return n.get(r);let[o,s]=zi(r);switch(o){case 0:{let t=r;switch(s){case`bigint`:o=8,t=r.toString();break;case`function`:case`symbol`:if(e)throw TypeError(`unable to serialize `+s);t=null;break;case`undefined`:return i([-1],r)}return i([o,t],r)}case 1:{if(s){let e=r;return s===`DataView`?e=new Uint8Array(r.buffer):s===`ArrayBuffer`&&(e=new Uint8Array(r)),i([s,[...e]],r)}let e=[],t=i([o,e],r);for(let t of r)e.push(a(t));return t}case 2:{if(s)switch(s){case`BigInt`:return i([s,r.toString()],r);case`Boolean`:case`Number`:case`String`:return i([s,r.valueOf()],r)}if(t&&`toJSON`in r)return a(r.toJSON());let n=[],c=i([o,n],r);for(let t of Ri(r))(e||!Bi(zi(r[t])))&&n.push([a(t),a(r[t])]);return c}case 3:return i([o,isNaN(r.getTime())?Ii:r.toISOString()],r);case 4:{let{source:e,flags:t}=r;return i([o,{source:e,flags:t}],r)}case 5:{let t=[],n=i([o,t],r);for(let[n,i]of r)(e||!(Bi(zi(n))||Bi(zi(i))))&&t.push([a(n),a(i)]);return n}case 6:{let t=[],n=i([o,t],r);for(let n of r)(e||!Bi(zi(n)))&&t.push(a(n));return n}}let{message:c}=r;return i([o,{name:s,message:c}],r)};return a},Hi=(e,{json:t,lossy:n}={})=>{let r=[];return Vi(!(t||n),!!t,new Map,r)(e),r},Ui=typeof structuredClone==`function`?(e,t)=>t&&(`json`in t||`lossy`in t)?Fi(Hi(e,t)):structuredClone(e):(e,t)=>Fi(Hi(e,t));function Wi(e,t){let n=[{type:`text`,value:`↩`}];return t>1&&n.push({type:`element`,tagName:`sup`,properties:{},children:[{type:`text`,value:String(t)}]}),n}function Gi(e,t){return`Back to reference `+(e+1)+(t>1?`-`+t:``)}function Ki(e){let t=typeof e.options.clobberPrefix==`string`?e.options.clobberPrefix:`user-content-`,n=e.options.footnoteBackContent||Wi,r=e.options.footnoteBackLabel||Gi,i=e.options.footnoteLabel||`Footnotes`,a=e.options.footnoteLabelTagName||`h2`,o=e.options.footnoteLabelProperties||{className:[`sr-only`]},s=[],c=-1;for(;++c<e.footnoteOrder.length;){let i=e.footnoteById.get(e.footnoteOrder[c]);if(!i)continue;let a=e.all(i),o=String(i.identifier).toUpperCase(),l=Dt(o.toLowerCase()),u=0,d=[],f=e.footnoteCounts.get(o);for(;f!==void 0&&++u<=f;){d.length>0&&d.push({type:`text`,value:` `});let e=typeof n==`string`?n:n(c,u);typeof e==`string`&&(e={type:`text`,value:e}),d.push({type:`element`,tagName:`a`,properties:{href:`#`+t+`fnref-`+l+(u>1?`-`+u:``),dataFootnoteBackref:``,ariaLabel:typeof r==`string`?r:r(c,u),className:[`data-footnote-backref`]},children:Array.isArray(e)?e:[e]})}let p=a[a.length-1];if(p&&p.type===`element`&&p.tagName===`p`){let e=p.children[p.children.length-1];e&&e.type===`text`?e.value+=` `:p.children.push({type:`text`,value:` `}),p.children.push(...d)}else a.push(...d);let m={type:`element`,tagName:`li`,properties:{id:t+`fn-`+l},children:e.wrap(a,!0)};e.patch(i,m),s.push(m)}if(s.length!==0)return{type:`element`,tagName:`section`,properties:{dataFootnotes:!0,className:[`footnotes`]},children:[{type:`element`,tagName:a,properties:{...Ui(o),id:`footnote-label`},children:[{type:`text`,value:i}]},{type:`text`,value:`
`},{type:`element`,tagName:`ol`,properties:{},children:e.wrap(s,!0)},{type:`text`,value:`
`}]}}var qi=(function(e){if(e==null)return Qi;if(typeof e==`function`)return Zi(e);if(typeof e==`object`)return Array.isArray(e)?Ji(e):Yi(e);if(typeof e==`string`)return Xi(e);throw Error(`Expected function, string, or object as test`)});function Ji(e){let t=[],n=-1;for(;++n<e.length;)t[n]=qi(e[n]);return Zi(r);function r(...e){let n=-1;for(;++n<t.length;)if(t[n].apply(this,e))return!0;return!1}}function Yi(e){let t=e;return Zi(n);function n(n){let r=n,i;for(i in e)if(r[i]!==t[i])return!1;return!0}}function Xi(e){return Zi(t);function t(t){return t&&t.type===e}}function Zi(e){return t;function t(t,n,r){return!!($i(t)&&e.call(this,t,typeof n==`number`?n:void 0,r||void 0))}}function Qi(){return!0}function $i(e){return typeof e==`object`&&!!e&&`type`in e}function ea(e){return e}var ta=[];function na(e,t,n,r){let i;typeof t==`function`&&typeof n!=`function`?(r=n,n=t):i=t;let a=qi(i),o=r?-1:1;s(e,void 0,[])();function s(e,i,c){let l=e&&typeof e==`object`?e:{};if(typeof l.type==`string`){let t=typeof l.tagName==`string`?l.tagName:typeof l.name==`string`?l.name:void 0;Object.defineProperty(u,"name",{value:`node (`+ea(e.type+(t?`<`+t+`>`:``))+`)`})}return u;function u(){let l=ta,u,d,f;if((!t||a(e,i,c[c.length-1]||void 0))&&(l=ra(n(e,c)),l[0]===!1))return l;if(`children`in e&&e.children){let t=e;if(t.children&&l[0]!==`skip`)for(d=(r?t.children.length:-1)+o,f=c.concat(t);d>-1&&d<t.children.length;){let e=t.children[d];if(u=s(e,d,f)(),u[0]===!1)return u;d=typeof u[1]==`number`?u[1]:d+o}}return l}}}function ra(e){return Array.isArray(e)?e:typeof e==`number`?[!0,e]:e==null?ta:[e]}function ia(e,t,n,r){let i,a,o;typeof t==`function`&&typeof n!=`function`?(a=void 0,o=t,i=n):(a=t,o=n,i=r),na(e,a,s,i);function s(e,t){let n=t[t.length-1],r=n?n.children.indexOf(e):void 0;return o(e,r,n)}}var aa={}.hasOwnProperty,oa={};function sa(e,t){let n=t||oa,r=new Map,i=new Map,a={all:s,applyData:la,definitionById:r,footnoteById:i,footnoteCounts:new Map,footnoteOrder:[],handlers:{...ki,...n.handlers},one:o,options:n,patch:ca,wrap:da};return ia(e,function(e){if(e.type===`definition`||e.type===`footnoteDefinition`){let t=e.type===`definition`?r:i,n=String(e.identifier).toUpperCase();t.has(n)||t.set(n,e)}}),a;function o(e,t){let n=e.type,r=a.handlers[n];if(aa.call(a.handlers,n)&&r)return r(a,e,t);if(a.options.passThrough&&a.options.passThrough.includes(n)){if(`children`in e){let{children:t,...n}=e,r=Ui(n);return r.children=a.all(e),r}return Ui(e)}return(a.options.unknownHandler||ua)(a,e,t)}function s(e){let t=[];if(`children`in e){let n=e.children,r=-1;for(;++r<n.length;){let i=a.one(n[r],e);if(i){if(r&&n[r-1].type===`break`&&(!Array.isArray(i)&&i.type===`text`&&(i.value=fa(i.value)),!Array.isArray(i)&&i.type===`element`)){let e=i.children[0];e&&e.type===`text`&&(e.value=fa(e.value))}Array.isArray(i)?t.push(...i):t.push(i)}}}return t}}function ca(e,t){e.position&&(t.position=De(e))}function la(e,t){let n=t;if(e&&e.data){let t=e.data.hName,r=e.data.hChildren,i=e.data.hProperties;typeof t==`string`&&(n.type===`element`?n.tagName=t:n={type:`element`,tagName:t,properties:{},children:`children`in n?n.children:[n]}),n.type===`element`&&i&&Object.assign(n.properties,Ui(i)),`children`in n&&n.children&&r!=null&&(n.children=r)}return n}function ua(e,t){let n=t.data||{},r=`value`in t&&!(aa.call(n,`hProperties`)||aa.call(n,`hChildren`))?{type:`text`,value:t.value}:{type:`element`,tagName:`div`,properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function da(e,t){let n=[],r=-1;for(t&&n.push({type:`text`,value:`
`});++r<e.length;)r&&n.push({type:`text`,value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:`text`,value:`
`}),n}function fa(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function pa(e,t){let n=sa(e,t),r=n.one(e,void 0),i=Ki(n),a=Array.isArray(r)?{type:`root`,children:r}:r||{type:`root`,children:[]};return i&&(`children`in a,a.children.push({type:`text`,value:`
`},i)),a}function ma(e,t){return e&&`run`in e?async function(n,r){let i=pa(n,{file:r,...t});await e.run(i,r)}:function(n,r){return pa(n,{file:r,...e||t})}}function ha(e){if(e)throw e}var ga=n(((e,t)=>{var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=function(e){return typeof Array.isArray==`function`?Array.isArray(e):r.call(e)===`[object Array]`},s=function(e){if(!e||r.call(e)!==`[object Object]`)return!1;var t=n.call(e,`constructor`),i=e.constructor&&e.constructor.prototype&&n.call(e.constructor.prototype,`isPrototypeOf`);if(e.constructor&&!t&&!i)return!1;for(var a in e);return a===void 0||n.call(e,a)},c=function(e,t){i&&t.name===`__proto__`?i(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},l=function(e,t){if(t===`__proto__`){if(!n.call(e,t))return;if(a)return a(e,t).value}return e[t]};t.exports=function e(){var t,n,r,i,a,u,d=arguments[0],f=1,p=arguments.length,m=!1;for(typeof d==`boolean`&&(m=d,d=arguments[1]||{},f=2),(d==null||typeof d!=`object`&&typeof d!=`function`)&&(d={});f<p;++f)if(t=arguments[f],t!=null)for(n in t)r=l(d,n),i=l(t,n),d!==i&&(m&&i&&(s(i)||(a=o(i)))?(a?(a=!1,u=r&&o(r)?r:[]):u=r&&s(r)?r:{},c(d,{name:n,newValue:e(m,u,i)})):i!==void 0&&c(d,{name:n,newValue:i}));return d}}));function _a(e){if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function va(){let e=[],t={run:n,use:r};return t;function n(...t){let n=-1,r=t.pop();if(typeof r!=`function`)throw TypeError(`Expected function as last argument, not `+r);i(null,...t);function i(a,...o){let s=e[++n],c=-1;if(a){r(a);return}for(;++c<t.length;)(o[c]===null||o[c]===void 0)&&(o[c]=t[c]);t=o,s?ya(s,i)(...o):r(null,...o)}}function r(n){if(typeof n!=`function`)throw TypeError("Expected `middelware` to be a function, not "+n);return e.push(n),t}}function ya(e,t){let n;return r;function r(...t){let r=e.length>t.length,o;r&&t.push(i);try{o=e.apply(this,t)}catch(e){let t=e;if(r&&n)throw t;return i(t)}r||(o&&o.then&&typeof o.then==`function`?o.then(a,i):o instanceof Error?i(o):a(o))}function i(e,...r){n||(n=!0,t(e,...r))}function a(e){i(null,e)}}var X={basename:ba,dirname:xa,extname:Sa,join:Ca,sep:`/`};function ba(e,t){if(t!==void 0&&typeof t!=`string`)throw TypeError(`"ext" argument must be a string`);Ea(e);let n=0,r=-1,i=e.length,a;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else r<0&&(a=!0,r=i+1);return r<0?``:e.slice(n,r)}if(t===e)return``;let o=-1,s=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else o<0&&(a=!0,o=i+1),s>-1&&(e.codePointAt(i)===t.codePointAt(s--)?s<0&&(r=i):(s=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function xa(e){if(Ea(e),e.length===0)return`.`;let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||=!0;return t<0?e.codePointAt(0)===47?`/`:`.`:t===1&&e.codePointAt(0)===47?`//`:e.slice(0,t)}function Sa(e){Ea(e);let t=e.length,n=-1,r=0,i=-1,a=0,o;for(;t--;){let s=e.codePointAt(t);if(s===47){if(o){r=t+1;break}continue}n<0&&(o=!0,n=t+1),s===46?i<0?i=t:a!==1&&(a=1):i>-1&&(a=-1)}return i<0||n<0||a===0||a===1&&i===n-1&&i===r+1?``:e.slice(i,n)}function Ca(...e){let t=-1,n;for(;++t<e.length;)Ea(e[t]),e[t]&&(n=n===void 0?e[t]:n+`/`+e[t]);return n===void 0?`.`:wa(n)}function wa(e){Ea(e);let t=e.codePointAt(0)===47,n=Ta(e,!t);return n.length===0&&!t&&(n=`.`),n.length>0&&e.codePointAt(e.length-1)===47&&(n+=`/`),t?`/`+n:n}function Ta(e,t){let n=``,r=0,i=-1,a=0,o=-1,s,c;for(;++o<=e.length;){if(o<e.length)s=e.codePointAt(o);else if(s===47)break;else s=47;if(s===47){if(i!==o-1&&a!==1){if(i!==o-1&&a===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf(`/`),c!==n.length-1){c<0?(n=``,r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf(`/`)),i=o,a=0;continue}}else if(n.length>0){n=``,r=0,i=o,a=0;continue}}t&&(n=n.length>0?n+`/..`:`..`,r=2)}else n.length>0?n+=`/`+e.slice(i+1,o):n=e.slice(i+1,o),r=o-i-1}i=o,a=0}else s===46&&a>-1?a++:a=-1}return n}function Ea(e){if(typeof e!=`string`)throw TypeError(`Path must be a string. Received `+JSON.stringify(e))}var Da={cwd:Oa};function Oa(){return`/`}function ka(e){return!!(typeof e==`object`&&e&&`href`in e&&e.href&&`protocol`in e&&e.protocol&&e.auth===void 0)}function Aa(e){if(typeof e==`string`)e=new URL(e);else if(!ka(e)){let t=TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code=`ERR_INVALID_ARG_TYPE`,t}if(e.protocol!==`file:`){let e=TypeError(`The URL must be of scheme file`);throw e.code=`ERR_INVALID_URL_SCHEME`,e}return ja(e)}function ja(e){if(e.hostname!==``){let e=TypeError(`File URL host must be "localhost" or empty on darwin`);throw e.code=`ERR_INVALID_FILE_URL_HOST`,e}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){let e=t.codePointAt(n+2);if(e===70||e===102){let e=TypeError(`File URL path must not include encoded / characters`);throw e.code=`ERR_INVALID_FILE_URL_PATH`,e}}return decodeURIComponent(t)}var Ma=[`history`,`path`,`basename`,`stem`,`extname`,`dirname`],Na=class{constructor(e){let t;t=e?ka(e)?{path:e}:typeof e==`string`||La(e)?{value:e}:e:{},this.cwd=`cwd`in t?``:Da.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let n=-1;for(;++n<Ma.length;){let e=Ma[n];e in t&&t[e]!==void 0&&t[e]!==null&&(this[e]=e===`history`?[...t[e]]:t[e])}let r;for(r in t)Ma.includes(r)||(this[r]=t[r])}get basename(){return typeof this.path==`string`?X.basename(this.path):void 0}set basename(e){Fa(e,`basename`),Pa(e,`basename`),this.path=X.join(this.dirname||``,e)}get dirname(){return typeof this.path==`string`?X.dirname(this.path):void 0}set dirname(e){Ia(this.basename,`dirname`),this.path=X.join(e||``,this.basename)}get extname(){return typeof this.path==`string`?X.extname(this.path):void 0}set extname(e){if(Pa(e,`extname`),Ia(this.dirname,`extname`),e){if(e.codePointAt(0)!==46)throw Error("`extname` must start with `.`");if(e.includes(`.`,1))throw Error("`extname` cannot contain multiple dots")}this.path=X.join(this.dirname,this.stem+(e||``))}get path(){return this.history[this.history.length-1]}set path(e){ka(e)&&(e=Aa(e)),Fa(e,`path`),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path==`string`?X.basename(this.path,this.extname):void 0}set stem(e){Fa(e,`stem`),Pa(e,`stem`),this.path=X.join(this.dirname||``,e+(this.extname||``))}fail(e,t,n){let r=this.message(e,t,n);throw r.fatal=!0,r}info(e,t,n){let r=this.message(e,t,n);return r.fatal=void 0,r}message(e,t,n){let r=new L(e,t,n);return this.path&&(r.name=this.path+`:`+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(e){return this.value===void 0?``:typeof this.value==`string`?this.value:new TextDecoder(e||void 0).decode(this.value)}};function Pa(e,t){if(e&&e.includes(X.sep))throw Error("`"+t+"` cannot be a path: did not expect `"+X.sep+"`")}function Fa(e,t){if(!e)throw Error("`"+t+"` cannot be empty")}function Ia(e,t){if(!e)throw Error("Setting `"+t+"` requires `path` to be set too")}function La(e){return!!(e&&typeof e==`object`&&`byteLength`in e&&`byteOffset`in e)}var Ra=(function(e){let t=this.constructor.prototype,n=t[e],r=function(){return n.apply(r,arguments)};return Object.setPrototypeOf(r,t),r}),za=t(ga(),1),Ba={}.hasOwnProperty,Va=new class e extends Ra{constructor(){super(`copy`),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=va()}copy(){let t=new e,n=-1;for(;++n<this.attachers.length;){let e=this.attachers[n];t.use(...e)}return t.data((0,za.default)(!0,{},this.namespace)),t}data(e,t){return typeof e==`string`?arguments.length===2?(Wa(`data`,this.frozen),this.namespace[e]=t,this):Ba.call(this.namespace,e)&&this.namespace[e]||void 0:e?(Wa(`data`,this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;let e=this;for(;++this.freezeIndex<this.attachers.length;){let[t,...n]=this.attachers[this.freezeIndex];if(n[0]===!1)continue;n[0]===!0&&(n[0]=void 0);let r=t.call(e,...n);typeof r==`function`&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=1/0,this}parse(e){this.freeze();let t=qa(e),n=this.parser||this.Parser;return Ha(`parse`,n),n(String(t),t)}process(e,t){let n=this;return this.freeze(),Ha(`process`,this.parser||this.Parser),Ua(`process`,this.compiler||this.Compiler),t?r(void 0,t):new Promise(r);function r(r,i){let a=qa(e),o=n.parse(a);n.run(o,a,function(e,t,r){if(e||!t||!r)return s(e);let i=t,a=n.stringify(i,r);Ya(a)?r.value=a:r.result=a,s(e,r)});function s(e,n){e||!n?i(e):r?r(n):t(void 0,n)}}}processSync(e){let t=!1,n;return this.freeze(),Ha(`processSync`,this.parser||this.Parser),Ua(`processSync`,this.compiler||this.Compiler),this.process(e,r),Ka(`processSync`,`process`,t),n;function r(e,r){t=!0,ha(e),n=r}}run(e,t,n){Ga(e),this.freeze();let r=this.transformers;return!n&&typeof t==`function`&&(n=t,t=void 0),n?i(void 0,n):new Promise(i);function i(i,a){let o=qa(t);r.run(e,o,s);function s(t,r,o){let s=r||e;t?a(t):i?i(s):n(void 0,s,o)}}}runSync(e,t){let n=!1,r;return this.run(e,t,i),Ka(`runSync`,`run`,n),r;function i(e,t){ha(e),r=t,n=!0}}stringify(e,t){this.freeze();let n=qa(t),r=this.compiler||this.Compiler;return Ua(`stringify`,r),Ga(e),r(e,n)}use(e,...t){let n=this.attachers,r=this.namespace;if(Wa(`use`,this.frozen),e!=null){if(typeof e==`function`)s(e,t);else if(typeof e==`object`)Array.isArray(e)?o(e):a(e);else throw TypeError("Expected usable value, not `"+e+"`")}return this;function i(e){if(typeof e==`function`)s(e,[]);else if(typeof e==`object`){if(Array.isArray(e)){let[t,...n]=e;s(t,n)}else a(e)}else throw TypeError("Expected usable value, not `"+e+"`")}function a(e){if(!(`plugins`in e)&&!(`settings`in e))throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");o(e.plugins),e.settings&&(r.settings=(0,za.default)(!0,r.settings,e.settings))}function o(e){let t=-1;if(e!=null){if(Array.isArray(e))for(;++t<e.length;){let n=e[t];i(n)}else throw TypeError("Expected a list of plugins, not `"+e+"`")}}function s(e,t){let r=-1,i=-1;for(;++r<n.length;)if(n[r][0]===e){i=r;break}if(i===-1)n.push([e,...t]);else if(t.length>0){let[r,...a]=t,o=n[i][1];_a(o)&&_a(r)&&(r=(0,za.default)(!0,o,r)),n[i]=[e,r,...a]}}}}().freeze();function Ha(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `parser`")}function Ua(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `compiler`")}function Wa(e,t){if(t)throw Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Ga(e){if(!_a(e)||typeof e.type!=`string`)throw TypeError("Expected node, got `"+e+"`")}function Ka(e,t,n){if(!n)throw Error("`"+e+"` finished async. Use `"+t+"` instead")}function qa(e){return Ja(e)?e:new Na(e)}function Ja(e){return!!(e&&typeof e==`object`&&`message`in e&&`messages`in e)}function Ya(e){return typeof e==`string`||Xa(e)}function Xa(e){return!!(e&&typeof e==`object`&&`byteLength`in e&&`byteOffset`in e)}var Z=r(),Za=t(i(),1),Qa=[],$a={allowDangerousHtml:!0},eo=/^(https?|ircs?|mailto|xmpp)$/i,to=[{from:`astPlugins`,id:`remove-buggy-html-in-markdown-parser`},{from:`allowDangerousHtml`,id:`remove-buggy-html-in-markdown-parser`},{from:`allowNode`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`allowElement`},{from:`allowedTypes`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`allowedElements`},{from:`className`,id:`remove-classname`},{from:`disallowedTypes`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`disallowedElements`},{from:`escapeHtml`,id:`remove-buggy-html-in-markdown-parser`},{from:`includeElementIndex`,id:`#remove-includeelementindex`},{from:`includeNodeIndex`,id:`change-includenodeindex-to-includeelementindex`},{from:`linkTarget`,id:`remove-linktarget`},{from:`plugins`,id:`change-plugins-to-remarkplugins`,to:`remarkPlugins`},{from:`rawSourcePos`,id:`#remove-rawsourcepos`},{from:`renderers`,id:`change-renderers-to-components`,to:`components`},{from:`source`,id:`change-source-to-children`,to:`children`},{from:`sourcePos`,id:`#remove-sourcepos`},{from:`transformImageUri`,id:`#add-urltransform`,to:`urlTransform`},{from:`transformLinkUri`,id:`#add-urltransform`,to:`urlTransform`}];function no(e){let t=ro(e),n=io(e);return ao(t.runSync(t.parse(n),n),e)}function ro(e){let t=e.rehypePlugins||Qa,n=e.remarkPlugins||Qa,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...$a}:$a;return Va().use(Qr).use(n).use(ma,r).use(t)}function io(e){let t=e.children||``,n=new Na;return typeof t==`string`?n.value=t:``+t,n}function ao(e,t){let n=t.allowedElements,r=t.allowElement,i=t.components,a=t.disallowedElements,o=t.skipHtml,s=t.unwrapDisallowed,c=t.urlTransform||oo;for(let e of to)Object.hasOwn(t,e.from)&&``+e.from+(e.to?"use `"+e.to+"` instead":`remove it`)+e.id;return ia(e,l),ze(e,{Fragment:Z.Fragment,components:i,ignoreInvalidStyle:!0,jsx:Z.jsx,jsxs:Z.jsxs,passKeys:!0,passNode:!0});function l(e,t,i){if(e.type===`raw`&&i&&typeof t==`number`)return o?i.children.splice(t,1):i.children[t]={type:`text`,value:e.value},t;if(e.type===`element`){let t;for(t in st)if(Object.hasOwn(st,t)&&Object.hasOwn(e.properties,t)){let n=e.properties[t],r=st[t];(r===null||r.includes(e.tagName))&&(e.properties[t]=c(String(n||``),t,e))}}if(e.type===`element`){let o=n?!n.includes(e.tagName):a?a.includes(e.tagName):!1;if(!o&&r&&typeof t==`number`&&(o=!r(e,t,i)),o&&i&&typeof t==`number`)return s&&e.children?i.children.splice(t,1,...e.children):i.children.splice(t,1),t}}}function oo(e){let t=e.indexOf(`:`),n=e.indexOf(`?`),r=e.indexOf(`#`),i=e.indexOf(`/`);return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||eo.test(e.slice(0,t))?e:``}function so(e,t){let n=String(e);if(typeof t!=`string`)throw TypeError(`Expected character`);let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function co(e){if(typeof e!=`string`)throw TypeError(`Expected a string`);return e.replace(/[|\\{}()[\]^$+*?.]/g,`\\$&`).replace(/-/g,`\\x2d`)}function lo(e,t,n){let r=qi((n||{}).ignore||[]),i=uo(t),a=-1;for(;++a<i.length;)na(e,`text`,o);function o(e,t){let n=-1,i;for(;++n<t.length;){let e=t[n],a=i?i.children:void 0;if(r(e,a?a.indexOf(e):void 0,i))return;i=e}if(i)return s(e,t)}function s(e,t){let n=t[t.length-1],r=i[a][0],o=i[a][1],s=0,c=n.children.indexOf(e),l=!1,u=[];r.lastIndex=0;let d=r.exec(e.value);for(;d;){let n=d.index,i={index:d.index,input:d.input,stack:[...t,e]},a=o(...d,i);if(typeof a==`string`&&(a=a.length>0?{type:`text`,value:a}:void 0),a===!1?r.lastIndex=n+1:(s!==n&&u.push({type:`text`,value:e.value.slice(s,n)}),Array.isArray(a)?u.push(...a):a&&u.push(a),s=n+d[0].length,l=!0),!r.global)break;d=r.exec(e.value)}return l?(s<e.value.length&&u.push({type:`text`,value:e.value.slice(s)}),n.children.splice(c,1,...u)):u=[e],c+u.length}}function uo(e){let t=[];if(!Array.isArray(e))throw TypeError(`Expected find and replace tuple or list of tuples`);let n=!e[0]||Array.isArray(e[0])?e:[e],r=-1;for(;++r<n.length;){let e=n[r];t.push([fo(e[0]),po(e[1])])}return t}function fo(e){return typeof e==`string`?new RegExp(co(e),`g`):e}function po(e){return typeof e==`function`?e:function(){return e}}var mo=`phrasing`,ho=[`autolink`,`link`,`image`,`label`];function go(){return{transforms:[wo],enter:{literalAutolink:vo,literalAutolinkEmail:yo,literalAutolinkHttp:yo,literalAutolinkWww:yo},exit:{literalAutolink:Co,literalAutolinkEmail:So,literalAutolinkHttp:bo,literalAutolinkWww:xo}}}function _o(){return{unsafe:[{character:`@`,before:`[+\\-.\\w]`,after:`[\\-.\\w]`,inConstruct:mo,notInConstruct:ho},{character:`.`,before:`[Ww]`,after:`[\\-.\\w]`,inConstruct:mo,notInConstruct:ho},{character:`:`,before:`[ps]`,after:`\\/`,inConstruct:mo,notInConstruct:ho}]}}function vo(e){this.enter({type:`link`,title:null,url:``,children:[]},e)}function yo(e){this.config.enter.autolinkProtocol.call(this,e)}function bo(e){this.config.exit.autolinkProtocol.call(this,e)}function xo(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];t.type,t.url=`http://`+this.sliceSerialize(e)}function So(e){this.config.exit.autolinkEmail.call(this,e)}function Co(e){this.exit(e)}function wo(e){lo(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,To],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,Eo]],{ignore:[`link`,`linkReference`]})}function To(e,t,n,r,i){let a=``;if(!ko(i)||(/^w/i.test(t)&&(n=t+n,t=``,a=`http://`),!Do(n)))return!1;let o=Oo(n+r);if(!o[0])return!1;let s={type:`link`,title:null,url:a+t+o[0],children:[{type:`text`,value:t+o[0]}]};return o[1]?[s,{type:`text`,value:o[1]}]:s}function Eo(e,t,n,r){return!ko(r,!0)||/[-\d_]$/.test(n)?!1:{type:`link`,title:null,url:`mailto:`+t+`@`+n,children:[{type:`text`,value:t+`@`+n}]}}function Do(e){let t=e.split(`.`);return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function Oo(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(`)`),i=so(e,`(`),a=so(e,`)`);for(;r!==-1&&i>a;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(`)`),a++;return[e,n]}function ko(e,t){let n=e.input.charCodeAt(e.index-1);return(e.index===0||Et(n)||Tt(n))&&(!t||n!==47)}zo.peek=Ro;function Ao(){this.buffer()}function jo(e){this.enter({type:`footnoteReference`,identifier:``,label:``},e)}function Mo(){this.buffer()}function No(e){this.enter({type:`footnoteDefinition`,identifier:``,label:``,children:[]},e)}function Po(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=B(this.sliceSerialize(e)).toLowerCase(),n.label=t}function Fo(e){this.exit(e)}function Io(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=B(this.sliceSerialize(e)).toLowerCase(),n.label=t}function Lo(e){this.exit(e)}function Ro(){return`[`}function zo(e,t,n,r){let i=n.createTracker(r),a=i.move(`[^`),o=n.enter(`footnoteReference`),s=n.enter(`reference`);return a+=i.move(n.safe(n.associationId(e),{after:`]`,before:a})),s(),o(),a+=i.move(`]`),a}function Bo(){return{enter:{gfmFootnoteCallString:Ao,gfmFootnoteCall:jo,gfmFootnoteDefinitionLabelString:Mo,gfmFootnoteDefinition:No},exit:{gfmFootnoteCallString:Po,gfmFootnoteCall:Fo,gfmFootnoteDefinitionLabelString:Io,gfmFootnoteDefinition:Lo}}}function Vo(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:zo},unsafe:[{character:`[`,inConstruct:[`label`,`phrasing`,`reference`]}]};function n(e,n,r,i){let a=r.createTracker(i),o=a.move(`[^`),s=r.enter(`footnoteDefinition`),c=r.enter(`label`);return o+=a.move(r.safe(r.associationId(e),{before:o,after:`]`})),c(),o+=a.move(`]:`),e.children&&e.children.length>0&&(a.shift(4),o+=a.move((t?`
`:` `)+r.indentLines(r.containerFlow(e,a.current()),t?Uo:Ho))),s(),o}}function Ho(e,t,n){return t===0?e:Uo(e,t,n)}function Uo(e,t,n){return(n?``:`    `)+e}var Wo=[`autolink`,`destinationLiteral`,`destinationRaw`,`reference`,`titleQuote`,`titleApostrophe`];Yo.peek=Xo;function Go(){return{canContainEols:[`delete`],enter:{strikethrough:qo},exit:{strikethrough:Jo}}}function Ko(){return{unsafe:[{character:`~`,inConstruct:`phrasing`,notInConstruct:Wo}],handlers:{delete:Yo}}}function qo(e){this.enter({type:`delete`,children:[]},e)}function Jo(e){this.exit(e)}function Yo(e,t,n,r){let i=n.createTracker(r),a=n.enter(`strikethrough`),o=i.move(`~~`);return o+=n.containerPhrasing(e,{...i.current(),before:o,after:`~`}),o+=i.move(`~~`),a(),o}function Xo(){return`~`}function Zo(e){return e.length}function Qo(e,t){let n=t||{},r=(n.align||[]).concat(),i=n.stringLength||Zo,a=[],o=[],s=[],c=[],l=0,u=-1;for(;++u<e.length;){let t=[],r=[],a=-1;for(e[u].length>l&&(l=e[u].length);++a<e[u].length;){let o=$o(e[u][a]);if(n.alignDelimiters!==!1){let e=i(o);r[a]=e,(c[a]===void 0||e>c[a])&&(c[a]=e)}t.push(o)}o[u]=t,s[u]=r}let d=-1;if(typeof r==`object`&&`length`in r)for(;++d<l;)a[d]=es(r[d]);else{let e=es(r);for(;++d<l;)a[d]=e}d=-1;let f=[],p=[];for(;++d<l;){let e=a[d],t=``,r=``;e===99?(t=`:`,r=`:`):e===108?t=`:`:e===114&&(r=`:`);let i=n.alignDelimiters===!1?1:Math.max(1,c[d]-t.length-r.length),o=t+`-`.repeat(i)+r;n.alignDelimiters!==!1&&(i=t.length+i+r.length,i>c[d]&&(c[d]=i),p[d]=i),f[d]=o}o.splice(1,0,f),s.splice(1,0,p),u=-1;let m=[];for(;++u<o.length;){let e=o[u],t=s[u];d=-1;let r=[];for(;++d<l;){let i=e[d]||``,o=``,s=``;if(n.alignDelimiters!==!1){let e=c[d]-(t[d]||0),n=a[d];n===114?o=` `.repeat(e):n===99?e%2?(o=` `.repeat(e/2+.5),s=` `.repeat(e/2-.5)):(o=` `.repeat(e/2),s=o):s=` `.repeat(e)}n.delimiterStart!==!1&&!d&&r.push(`|`),n.padding!==!1&&(n.alignDelimiters!==!1||i!==``)&&(n.delimiterStart!==!1||d)&&r.push(` `),n.alignDelimiters!==!1&&r.push(o),r.push(i),n.alignDelimiters!==!1&&r.push(s),n.padding!==!1&&r.push(` `),(n.delimiterEnd!==!1||d!==l-1)&&r.push(`|`)}m.push(n.delimiterEnd===!1?r.join(``).replace(/ +$/,``):r.join(``))}return m.join(`
`)}function $o(e){return e==null?``:String(e)}function es(e){let t=typeof e==`string`?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function ts(e,t,n,r){let i=n.enter(`blockquote`),a=n.createTracker(r);a.move(`> `),a.shift(2);let o=n.indentLines(n.containerFlow(e,a.current()),ns);return i(),o}function ns(e,t,n){return`>`+(n?``:` `)+e}function rs(e,t){return is(e,t.inConstruct,!0)&&!is(e,t.notInConstruct,!1)}function is(e,t,n){if(typeof t==`string`&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function as(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&rs(n.stack,n.unsafe[i]))return/[ \t]/.test(r.before)?``:` `;return`\\
`}function os(e,t){let n=String(e),r=n.indexOf(t),i=r,a=0,o=0;if(typeof t!=`string`)throw TypeError(`Expected substring`);for(;r!==-1;)r===i?++a>o&&(o=a):a=1,i=r+t.length,r=n.indexOf(t,i);return o}function ss(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function cs(e){let t=e.options.fence||"`";if(t!=="`"&&t!==`~`)throw Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function ls(e,t,n,r){let i=cs(n),a=e.value||``,o=i==="`"?`GraveAccent`:`Tilde`;if(ss(e,n)){let e=n.enter(`codeIndented`),t=n.indentLines(a,us);return e(),t}let s=n.createTracker(r),c=i.repeat(Math.max(os(a,i)+1,3)),l=n.enter(`codeFenced`),u=s.move(c);if(e.lang){let t=n.enter(`codeFencedLang${o}`);u+=s.move(n.safe(e.lang,{before:u,after:` `,encode:["`"],...s.current()})),t()}if(e.lang&&e.meta){let t=n.enter(`codeFencedMeta${o}`);u+=s.move(` `),u+=s.move(n.safe(e.meta,{before:u,after:`
`,encode:["`"],...s.current()})),t()}return u+=s.move(`
`),a&&(u+=s.move(a+`
`)),u+=s.move(c),l(),u}function us(e,t,n){return(n?``:`    `)+e}function ds(e){let t=e.options.quote||`"`;if(t!==`"`&&t!==`'`)throw Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function fs(e,t,n,r){let i=ds(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.enter(`definition`),s=n.enter(`label`),c=n.createTracker(r),l=c.move(`[`);return l+=c.move(n.safe(n.associationId(e),{before:l,after:`]`,...c.current()})),l+=c.move(`]: `),s(),!e.url||/[\0- \u007F]/.test(e.url)?(s=n.enter(`destinationLiteral`),l+=c.move(`<`),l+=c.move(n.safe(e.url,{before:l,after:`>`,...c.current()})),l+=c.move(`>`)):(s=n.enter(`destinationRaw`),l+=c.move(n.safe(e.url,{before:l,after:e.title?` `:`
`,...c.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=c.move(` `+i),l+=c.move(n.safe(e.title,{before:l,after:i,...c.current()})),l+=c.move(i),s()),o(),l}function ps(e){let t=e.options.emphasis||`*`;if(t!==`*`&&t!==`_`)throw Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function ms(e){return`&#x`+e.toString(16).toUpperCase()+`;`}function hs(e,t,n){let r=Pt(e),i=Pt(t);return r===void 0?i===void 0?n===`_`?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}gs.peek=_s;function gs(e,t,n,r){let i=ps(n),a=n.enter(`emphasis`),o=n.createTracker(r),s=o.move(i),c=o.move(n.containerPhrasing(e,{after:i,before:s,...o.current()})),l=c.charCodeAt(0),u=hs(r.before.charCodeAt(r.before.length-1),l,i);u.inside&&(c=ms(l)+c.slice(1));let d=c.charCodeAt(c.length-1),f=hs(r.after.charCodeAt(0),d,i);f.inside&&(c=c.slice(0,-1)+ms(d));let p=o.move(i);return a(),n.attentionEncodeSurroundingInfo={after:f.outside,before:u.outside},s+c+p}function _s(e,t,n){return n.options.emphasis||`*`}function vs(e,t){let n=!1;return ia(e,function(e){if(`value`in e&&/\r?\n|\r/.test(e.value)||e.type===`break`)return n=!0,!1}),!!((!e.depth||e.depth<3)&&lt(e)&&(t.options.setext||n))}function ys(e,t,n,r){let i=Math.max(Math.min(6,e.depth||1),1),a=n.createTracker(r);if(vs(e,n)){let t=n.enter(`headingSetext`),r=n.enter(`phrasing`),o=n.containerPhrasing(e,{...a.current(),before:`
`,after:`
`});return r(),t(),o+`
`+(i===1?`=`:`-`).repeat(o.length-(Math.max(o.lastIndexOf(`\r`),o.lastIndexOf(`
`))+1))}let o=`#`.repeat(i),s=n.enter(`headingAtx`),c=n.enter(`phrasing`);a.move(o+` `);let l=n.containerPhrasing(e,{before:`# `,after:`
`,...a.current()});return/^[\t ]/.test(l)&&(l=ms(l.charCodeAt(0))+l.slice(1)),l=l?o+` `+l:o,n.options.closeAtx&&(l+=` `+o),c(),s(),l}bs.peek=xs;function bs(e){return e.value||``}function xs(){return`<`}Ss.peek=Cs;function Ss(e,t,n,r){let i=ds(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.enter(`image`),s=n.enter(`label`),c=n.createTracker(r),l=c.move(`![`);return l+=c.move(n.safe(e.alt,{before:l,after:`]`,...c.current()})),l+=c.move(`](`),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter(`destinationLiteral`),l+=c.move(`<`),l+=c.move(n.safe(e.url,{before:l,after:`>`,...c.current()})),l+=c.move(`>`)):(s=n.enter(`destinationRaw`),l+=c.move(n.safe(e.url,{before:l,after:e.title?` `:`)`,...c.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=c.move(` `+i),l+=c.move(n.safe(e.title,{before:l,after:i,...c.current()})),l+=c.move(i),s()),l+=c.move(`)`),o(),l}function Cs(){return`!`}ws.peek=Ts;function ws(e,t,n,r){let i=e.referenceType,a=n.enter(`imageReference`),o=n.enter(`label`),s=n.createTracker(r),c=s.move(`![`),l=n.safe(e.alt,{before:c,after:`]`,...s.current()});c+=s.move(l+`][`),o();let u=n.stack;n.stack=[],o=n.enter(`reference`);let d=n.safe(n.associationId(e),{before:c,after:`]`,...s.current()});return o(),n.stack=u,a(),i===`full`||!l||l!==d?c+=s.move(d+`]`):i===`shortcut`?c=c.slice(0,-1):c+=s.move(`]`),c}function Ts(){return`!`}Es.peek=Ds;function Es(e,t,n){let r=e.value||``,i="`",a=-1;for(;RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=` `+r+` `);++a<n.unsafe.length;){let e=n.unsafe[a],t=n.compilePattern(e),i;if(e.atBreak)for(;i=t.exec(r);){let e=i.index;r.charCodeAt(e)===10&&r.charCodeAt(e-1)===13&&e--,r=r.slice(0,e)+` `+r.slice(i.index+1)}}return i+r+i}function Ds(){return"`"}function Os(e,t){let n=lt(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type===`text`&&(n===e.url||`mailto:`+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}ks.peek=As;function ks(e,t,n,r){let i=ds(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.createTracker(r),s,c;if(Os(e,n)){let t=n.stack;n.stack=[],s=n.enter(`autolink`);let r=o.move(`<`);return r+=o.move(n.containerPhrasing(e,{before:r,after:`>`,...o.current()})),r+=o.move(`>`),s(),n.stack=t,r}s=n.enter(`link`),c=n.enter(`label`);let l=o.move(`[`);return l+=o.move(n.containerPhrasing(e,{before:l,after:`](`,...o.current()})),l+=o.move(`](`),c(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(c=n.enter(`destinationLiteral`),l+=o.move(`<`),l+=o.move(n.safe(e.url,{before:l,after:`>`,...o.current()})),l+=o.move(`>`)):(c=n.enter(`destinationRaw`),l+=o.move(n.safe(e.url,{before:l,after:e.title?` `:`)`,...o.current()}))),c(),e.title&&(c=n.enter(`title${a}`),l+=o.move(` `+i),l+=o.move(n.safe(e.title,{before:l,after:i,...o.current()})),l+=o.move(i),c()),l+=o.move(`)`),s(),l}function As(e,t,n){return Os(e,n)?`<`:`[`}js.peek=Ms;function js(e,t,n,r){let i=e.referenceType,a=n.enter(`linkReference`),o=n.enter(`label`),s=n.createTracker(r),c=s.move(`[`),l=n.containerPhrasing(e,{before:c,after:`]`,...s.current()});c+=s.move(l+`][`),o();let u=n.stack;n.stack=[],o=n.enter(`reference`);let d=n.safe(n.associationId(e),{before:c,after:`]`,...s.current()});return o(),n.stack=u,a(),i===`full`||!l||l!==d?c+=s.move(d+`]`):i===`shortcut`?c=c.slice(0,-1):c+=s.move(`]`),c}function Ms(){return`[`}function Ns(e){let t=e.options.bullet||`*`;if(t!==`*`&&t!==`+`&&t!==`-`)throw Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function Ps(e){let t=Ns(e),n=e.options.bulletOther;if(!n)return t===`*`?`-`:`*`;if(n!==`*`&&n!==`+`&&n!==`-`)throw Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function Fs(e){let t=e.options.bulletOrdered||`.`;if(t!==`.`&&t!==`)`)throw Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function Is(e){let t=e.options.rule||`*`;if(t!==`*`&&t!==`-`&&t!==`_`)throw Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function Ls(e,t,n,r){let i=n.enter(`list`),a=n.bulletCurrent,o=e.ordered?Fs(n):Ns(n),s=e.ordered?o===`.`?`)`:`.`:Ps(n),c=t&&n.bulletLastUsed?o===n.bulletLastUsed:!1;if(!e.ordered){let t=e.children?e.children[0]:void 0;if((o===`*`||o===`-`)&&t&&(!t.children||!t.children[0])&&n.stack[n.stack.length-1]===`list`&&n.stack[n.stack.length-2]===`listItem`&&n.stack[n.stack.length-3]===`list`&&n.stack[n.stack.length-4]===`listItem`&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(c=!0),Is(n)===o&&t){let t=-1;for(;++t<e.children.length;){let n=e.children[t];if(n&&n.type===`listItem`&&n.children&&n.children[0]&&n.children[0].type===`thematicBreak`){c=!0;break}}}}c&&(o=s),n.bulletCurrent=o;let l=n.containerFlow(e,r);return n.bulletLastUsed=o,n.bulletCurrent=a,i(),l}function Rs(e){let t=e.options.listItemIndent||`one`;if(t!==`tab`&&t!==`one`&&t!==`mixed`)throw Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function zs(e,t,n,r){let i=Rs(n),a=n.bulletCurrent||Ns(n);t&&t.type===`list`&&t.ordered&&(a=(typeof t.start==`number`&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+a);let o=a.length+1;(i===`tab`||i===`mixed`&&(t&&t.type===`list`&&t.spread||e.spread))&&(o=Math.ceil(o/4)*4);let s=n.createTracker(r);s.move(a+` `.repeat(o-a.length)),s.shift(o);let c=n.enter(`listItem`),l=n.indentLines(n.containerFlow(e,s.current()),u);return c(),l;function u(e,t,n){return t?(n?``:` `.repeat(o))+e:(n?a:a+` `.repeat(o-a.length))+e}}function Bs(e,t,n,r){let i=n.enter(`paragraph`),a=n.enter(`phrasing`),o=n.containerPhrasing(e,r);return a(),i(),o}var Vs=qi([`break`,`delete`,`emphasis`,`footnote`,`footnoteReference`,`image`,`imageReference`,`inlineCode`,`inlineMath`,`link`,`linkReference`,`mdxJsxTextElement`,`mdxTextExpression`,`strong`,`text`,`textDirective`]);function Hs(e,t,n,r){return(e.children.some(function(e){return Vs(e)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function Us(e){let t=e.options.strong||`*`;if(t!==`*`&&t!==`_`)throw Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}Ws.peek=Gs;function Ws(e,t,n,r){let i=Us(n),a=n.enter(`strong`),o=n.createTracker(r),s=o.move(i+i),c=o.move(n.containerPhrasing(e,{after:i,before:s,...o.current()})),l=c.charCodeAt(0),u=hs(r.before.charCodeAt(r.before.length-1),l,i);u.inside&&(c=ms(l)+c.slice(1));let d=c.charCodeAt(c.length-1),f=hs(r.after.charCodeAt(0),d,i);f.inside&&(c=c.slice(0,-1)+ms(d));let p=o.move(i+i);return a(),n.attentionEncodeSurroundingInfo={after:f.outside,before:u.outside},s+c+p}function Gs(e,t,n){return n.options.strong||`*`}function Ks(e,t,n,r){return n.safe(e.value,r)}function qs(e){let t=e.options.ruleRepetition||3;if(t<3)throw Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function Js(e,t,n){let r=(Is(n)+(n.options.ruleSpaces?` `:``)).repeat(qs(n));return n.options.ruleSpaces?r.slice(0,-1):r}var Ys={blockquote:ts,break:as,code:ls,definition:fs,emphasis:gs,hardBreak:as,heading:ys,html:bs,image:Ss,imageReference:ws,inlineCode:Es,link:ks,linkReference:js,list:Ls,listItem:zs,paragraph:Bs,root:Hs,strong:Ws,text:Ks,thematicBreak:Js};function Xs(){return{enter:{table:Zs,tableData:tc,tableHeader:tc,tableRow:$s},exit:{codeText:nc,table:Qs,tableData:ec,tableHeader:ec,tableRow:ec}}}function Zs(e){let t=e._align;this.enter({type:`table`,align:t.map(function(e){return e===`none`?null:e}),children:[]},e),this.data.inTable=!0}function Qs(e){this.exit(e),this.data.inTable=void 0}function $s(e){this.enter({type:`tableRow`,children:[]},e)}function ec(e){this.exit(e)}function tc(e){this.enter({type:`tableCell`,children:[]},e)}function nc(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,rc));let n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function rc(e,t){return t===`|`?t:e}function ic(e){let t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,a=n?` `:`|`;return{unsafe:[{character:`\r`,inConstruct:`tableCell`},{character:`
`,inConstruct:`tableCell`},{atBreak:!0,character:`|`,after:`[	 :-]`},{character:`|`,inConstruct:`tableCell`},{atBreak:!0,character:`:`,after:`-`},{atBreak:!0,character:`-`,after:`[:|-]`}],handlers:{inlineCode:f,table:o,tableCell:c,tableRow:s}};function o(e,t,n,r){return l(u(e,n,r),e.align)}function s(e,t,n,r){let i=l([d(e,n,r)]);return i.slice(0,i.indexOf(`
`))}function c(e,t,n,r){let i=n.enter(`tableCell`),o=n.enter(`phrasing`),s=n.containerPhrasing(e,{...r,before:a,after:a});return o(),i(),s}function l(e,t){return Qo(e,{align:t,alignDelimiters:r,padding:n,stringLength:i})}function u(e,t,n){let r=e.children,i=-1,a=[],o=t.enter(`table`);for(;++i<r.length;)a[i]=d(r[i],t,n);return o(),a}function d(e,t,n){let r=e.children,i=-1,a=[],o=t.enter(`tableRow`);for(;++i<r.length;)a[i]=c(r[i],e,t,n);return o(),a}function f(e,t,n){let r=Ys.inlineCode(e,t,n);return n.stack.includes(`tableCell`)&&(r=r.replace(/\|/g,`\\$&`)),r}}function ac(){return{exit:{taskListCheckValueChecked:sc,taskListCheckValueUnchecked:sc,paragraph:cc}}}function oc(){return{unsafe:[{atBreak:!0,character:`-`,after:`[:|-]`}],handlers:{listItem:lc}}}function sc(e){let t=this.stack[this.stack.length-2];t.type,t.checked=e.type===`taskListCheckValueChecked`}function cc(e){let t=this.stack[this.stack.length-2];if(t&&t.type===`listItem`&&typeof t.checked==`boolean`){let e=this.stack[this.stack.length-1];e.type;let n=e.children[0];if(n&&n.type===`text`){let r=t.children,i=-1,a;for(;++i<r.length;){let e=r[i];if(e.type===`paragraph`){a=e;break}}a===e&&(n.value=n.value.slice(1),n.value.length===0?e.children.shift():e.position&&n.position&&typeof n.position.start.offset==`number`&&(n.position.start.column++,n.position.start.offset++,e.position.start=Object.assign({},n.position.start)))}}this.exit(e)}function lc(e,t,n,r){let i=e.children[0],a=typeof e.checked==`boolean`&&i&&i.type===`paragraph`,o=`[`+(e.checked?`x`:` `)+`] `,s=n.createTracker(r);a&&s.move(o);let c=Ys.listItem(e,t,n,{...r,...s.current()});return a&&(c=c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,l)),c;function l(e){return e+o}}function uc(){return[go(),Bo(),Go(),Xs(),ac()]}function dc(e){return{extensions:[_o(),Vo(e),Ko(),ic(e),oc()]}}var fc={tokenize:wc,partial:!0},pc={tokenize:Tc,partial:!0},mc={tokenize:Ec,partial:!0},hc={tokenize:Dc,partial:!0},gc={tokenize:Oc,partial:!0},_c={name:`wwwAutolink`,tokenize:Sc,previous:kc},vc={name:`protocolAutolink`,tokenize:Cc,previous:Ac},Q={name:`emailAutolink`,tokenize:xc,previous:jc},$={};function yc(){return{text:$}}for(var bc=48;bc<123;)$[bc]=Q,bc++,bc===58?bc=65:bc===91&&(bc=97);$[43]=Q,$[45]=Q,$[46]=Q,$[95]=Q,$[72]=[Q,vc],$[104]=[Q,vc],$[87]=[Q,_c],$[119]=[Q,_c];function xc(e,t,n){let r=this,i,a;return o;function o(t){return!Mc(t)||!jc.call(r,r.previous)||Nc(r.events)?n(t):(e.enter(`literalAutolink`),e.enter(`literalAutolinkEmail`),s(t))}function s(t){return Mc(t)?(e.consume(t),s):t===64?(e.consume(t),c):n(t)}function c(t){return t===46?e.check(gc,u,l)(t):t===45||t===95||H(t)?(a=!0,e.consume(t),c):u(t)}function l(t){return e.consume(t),i=!0,c}function u(o){return a&&i&&V(r.previous)?(e.exit(`literalAutolinkEmail`),e.exit(`literalAutolink`),t(o)):n(o)}}function Sc(e,t,n){let r=this;return i;function i(t){return t!==87&&t!==119||!kc.call(r,r.previous)||Nc(r.events)?n(t):(e.enter(`literalAutolink`),e.enter(`literalAutolinkWww`),e.check(fc,e.attempt(pc,e.attempt(mc,a),n),n)(t))}function a(n){return e.exit(`literalAutolinkWww`),e.exit(`literalAutolink`),t(n)}}function Cc(e,t,n){let r=this,i=``,a=!1;return o;function o(t){return(t===72||t===104)&&Ac.call(r,r.previous)&&!Nc(r.events)?(e.enter(`literalAutolink`),e.enter(`literalAutolinkHttp`),i+=String.fromCodePoint(t),e.consume(t),s):n(t)}function s(t){if(V(t)&&i.length<5)return i+=String.fromCodePoint(t),e.consume(t),s;if(t===58){let n=i.toLowerCase();if(n===`http`||n===`https`)return e.consume(t),c}return n(t)}function c(t){return t===47?(e.consume(t),a?l:(a=!0,c)):n(t)}function l(t){return t===null||xt(t)||W(t)||Et(t)||Tt(t)?n(t):e.attempt(pc,e.attempt(mc,u),n)(t)}function u(n){return e.exit(`literalAutolinkHttp`),e.exit(`literalAutolink`),t(n)}}function wc(e,t,n){let r=0;return i;function i(t){return(t===87||t===119)&&r<3?(r++,e.consume(t),i):t===46&&r===3?(e.consume(t),a):n(t)}function a(e){return e===null?n(e):t(e)}}function Tc(e,t,n){let r,i,a;return o;function o(t){return t===46||t===95?e.check(hc,c,s)(t):t===null||W(t)||Et(t)||t!==45&&Tt(t)?c(t):(a=!0,e.consume(t),o)}function s(t){return t===95?r=!0:(i=r,r=void 0),e.consume(t),o}function c(e){return i||r||!a?n(e):t(e)}}function Ec(e,t){let n=0,r=0;return i;function i(o){return o===40?(n++,e.consume(o),i):o===41&&r<n?a(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(hc,t,a)(o):o===null||W(o)||Et(o)?t(o):(e.consume(o),i)}function a(t){return t===41&&r++,e.consume(t),i}}function Dc(e,t,n){return r;function r(o){return o===33||o===34||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===63||o===95||o===126?(e.consume(o),r):o===38?(e.consume(o),a):o===93?(e.consume(o),i):o===60||o===null||W(o)||Et(o)?t(o):n(o)}function i(e){return e===null||e===40||e===91||W(e)||Et(e)?t(e):r(e)}function a(e){return V(e)?o(e):n(e)}function o(t){return t===59?(e.consume(t),r):V(t)?(e.consume(t),o):n(t)}}function Oc(e,t,n){return r;function r(t){return e.consume(t),i}function i(e){return H(e)?n(e):t(e)}}function kc(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||W(e)}function Ac(e){return!V(e)}function jc(e){return!(e===47||Mc(e))}function Mc(e){return e===43||e===45||e===46||e===95||H(e)}function Nc(e){let t=e.length,n=!1;for(;t--;){let r=e[t][1];if((r.type===`labelLink`||r.type===`labelImage`)&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}var Pc={tokenize:Hc,partial:!0};function Fc(){return{document:{91:{name:`gfmFootnoteDefinition`,tokenize:zc,continuation:{tokenize:Bc},exit:Vc}},text:{91:{name:`gfmFootnoteCall`,tokenize:Rc},93:{name:`gfmPotentialFootnoteCall`,add:`after`,tokenize:Ic,resolveTo:Lc}}}}function Ic(e,t,n){let r=this,i=r.events.length,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o;for(;i--;){let e=r.events[i][1];if(e.type===`labelImage`){o=e;break}if(e.type===`gfmFootnoteCall`||e.type===`labelLink`||e.type===`label`||e.type===`image`||e.type===`link`)break}return s;function s(i){if(!o||!o._balanced)return n(i);let s=B(r.sliceSerialize({start:o.end,end:r.now()}));return s.codePointAt(0)!==94||!a.includes(s.slice(1))?n(i):(e.enter(`gfmFootnoteCallLabelMarker`),e.consume(i),e.exit(`gfmFootnoteCallLabelMarker`),t(i))}}function Lc(e,t){let n=e.length;for(;n--;)if(e[n][1].type===`labelImage`&&e[n][0]===`enter`){e[n][1];break}e[n+1][1].type=`data`,e[n+3][1].type=`gfmFootnoteCallLabelMarker`;let r={type:`gfmFootnoteCall`,start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:`gfmFootnoteCallMarker`,start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;let a={type:`gfmFootnoteCallString`,start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},o={type:`chunkString`,contentType:`string`,start:Object.assign({},a.start),end:Object.assign({},a.end)},s=[e[n+1],e[n+2],[`enter`,r,t],e[n+3],e[n+4],[`enter`,i,t],[`exit`,i,t],[`enter`,a,t],[`enter`,o,t],[`exit`,o,t],[`exit`,a,t],e[e.length-2],e[e.length-1],[`exit`,r,t]];return e.splice(n,e.length-n+1,...s),e}function Rc(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a=0,o;return s;function s(t){return e.enter(`gfmFootnoteCall`),e.enter(`gfmFootnoteCallLabelMarker`),e.consume(t),e.exit(`gfmFootnoteCallLabelMarker`),c}function c(t){return t===94?(e.enter(`gfmFootnoteCallMarker`),e.consume(t),e.exit(`gfmFootnoteCallMarker`),e.enter(`gfmFootnoteCallString`),e.enter(`chunkString`).contentType=`string`,l):n(t)}function l(s){if(a>999||s===93&&!o||s===null||s===91||W(s))return n(s);if(s===93){e.exit(`chunkString`);let a=e.exit(`gfmFootnoteCallString`);return i.includes(B(r.sliceSerialize(a)))?(e.enter(`gfmFootnoteCallLabelMarker`),e.consume(s),e.exit(`gfmFootnoteCallLabelMarker`),e.exit(`gfmFootnoteCall`),t):n(s)}return W(s)||(o=!0),a++,e.consume(s),s===92?u:l}function u(t){return t===91||t===92||t===93?(e.consume(t),a++,l):l(t)}}function zc(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a,o=0,s;return c;function c(t){return e.enter(`gfmFootnoteDefinition`)._container=!0,e.enter(`gfmFootnoteDefinitionLabel`),e.enter(`gfmFootnoteDefinitionLabelMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionLabelMarker`),l}function l(t){return t===94?(e.enter(`gfmFootnoteDefinitionMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionMarker`),e.enter(`gfmFootnoteDefinitionLabelString`),e.enter(`chunkString`).contentType=`string`,u):n(t)}function u(t){if(o>999||t===93&&!s||t===null||t===91||W(t))return n(t);if(t===93){e.exit(`chunkString`);let n=e.exit(`gfmFootnoteDefinitionLabelString`);return a=B(r.sliceSerialize(n)),e.enter(`gfmFootnoteDefinitionLabelMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionLabelMarker`),e.exit(`gfmFootnoteDefinitionLabel`),f}return W(t)||(s=!0),o++,e.consume(t),t===92?d:u}function d(t){return t===91||t===92||t===93?(e.consume(t),o++,u):u(t)}function f(t){return t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),i.includes(a)||i.push(a),q(e,p,`gfmFootnoteDefinitionWhitespace`)):n(t)}function p(e){return t(e)}}function Bc(e,t,n){return e.check(Ht,t,e.attempt(Pc,t,n))}function Vc(e){e.exit(`gfmFootnoteDefinition`)}function Hc(e,t,n){let r=this;return q(e,i,`gfmFootnoteDefinitionIndent`,5);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`gfmFootnoteDefinitionIndent`&&i[2].sliceSerialize(i[1],!0).length===4?t(e):n(e)}}function Uc(e){let t=(e||{}).singleTilde,n={name:`strikethrough`,tokenize:i,resolveAll:r};return t??=!0,{text:{126:n},insideSpan:{null:[n]},attentionMarkers:{null:[126]}};function r(e,t){let n=-1;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`strikethroughSequenceTemporary`&&e[n][1]._close){let r=n;for(;r--;)if(e[r][0]===`exit`&&e[r][1].type===`strikethroughSequenceTemporary`&&e[r][1]._open&&e[n][1].end.offset-e[n][1].start.offset===e[r][1].end.offset-e[r][1].start.offset){e[n][1].type=`strikethroughSequence`,e[r][1].type=`strikethroughSequence`;let i={type:`strikethrough`,start:Object.assign({},e[r][1].start),end:Object.assign({},e[n][1].end)},a={type:`strikethroughText`,start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},o=[[`enter`,i,t],[`enter`,e[r][1],t],[`exit`,e[r][1],t],[`enter`,a,t]],s=t.parser.constructs.insideSpan.null;s&&R(o,o.length,0,Ft(s,e.slice(r+1,n),t)),R(o,o.length,0,[[`exit`,a,t],[`enter`,e[n][1],t],[`exit`,e[n][1],t],[`exit`,i,t]]),R(e,r-1,n-r+3,o),n=r+o.length-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`strikethroughSequenceTemporary`&&(e[n][1].type=`data`);return e}function i(e,n,r){let i=this.previous,a=this.events,o=0;return s;function s(t){return i===126&&a[a.length-1][1].type!==`characterEscape`?r(t):(e.enter(`strikethroughSequenceTemporary`),c(t))}function c(a){let s=Pt(i);if(a===126)return o>1?r(a):(e.consume(a),o++,c);if(o<2&&!t)return r(a);let l=e.exit(`strikethroughSequenceTemporary`),u=Pt(a);return l._open=!u||u===2&&!!s,l._close=!s||s===2&&!!u,n(a)}}}var Wc=class{constructor(){this.map=[]}add(e,t,n){Gc(this,e,t,n)}consume(e){if(this.map.sort(function(e,t){return e[0]-t[0]}),this.map.length===0)return;let t=this.map.length,n=[];for(;t>0;)--t,n.push(e.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),e.length=this.map[t][0];n.push(e.slice()),e.length=0;let r=n.pop();for(;r;){for(let t of r)e.push(t);r=n.pop()}this.map.length=0}};function Gc(e,t,n,r){let i=0;if(n!==0||r.length!==0){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1}e.map.push([t,n,r])}}function Kc(e,t){let n=!1,r=[];for(;t<e.length;){let i=e[t];if(n){if(i[0]===`enter`)i[1].type===`tableContent`&&r.push(e[t+1][1].type===`tableDelimiterMarker`?`left`:`none`);else if(i[1].type===`tableContent`){if(e[t-1][1].type===`tableDelimiterMarker`){let e=r.length-1;r[e]=r[e]===`left`?`center`:`right`}}else if(i[1].type===`tableDelimiterRow`)break}else i[0]===`enter`&&i[1].type===`tableDelimiterRow`&&(n=!0);t+=1}return r}function qc(){return{flow:{null:{name:`table`,tokenize:Jc,resolveAll:Yc}}}}function Jc(e,t,n){let r=this,i=0,a=0,o;return s;function s(e){let t=r.events.length-1;for(;t>-1;){let e=r.events[t][1].type;if(e===`lineEnding`||e===`linePrefix`)t--;else break}let i=t>-1?r.events[t][1].type:null,a=i===`tableHead`||i===`tableRow`?S:c;return a===S&&r.parser.lazy[r.now().line]?n(e):a(e)}function c(t){return e.enter(`tableHead`),e.enter(`tableRow`),l(t)}function l(e){return e===124?u(e):(o=!0,a+=1,u(e))}function u(t){return t===null?n(t):U(t)?a>1?(a=0,r.interrupt=!0,e.exit(`tableRow`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),p):n(t):G(t)?q(e,u,`whitespace`)(t):(a+=1,o&&(o=!1,i+=1),t===124?(e.enter(`tableCellDivider`),e.consume(t),e.exit(`tableCellDivider`),o=!0,u):(e.enter(`data`),d(t)))}function d(t){return t===null||t===124||W(t)?(e.exit(`data`),u(t)):(e.consume(t),t===92?f:d)}function f(t){return t===92||t===124?(e.consume(t),d):d(t)}function p(t){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(t):(e.enter(`tableDelimiterRow`),o=!1,G(t)?q(e,m,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):m(t))}function m(t){return t===45||t===58?g(t):t===124?(o=!0,e.enter(`tableCellDivider`),e.consume(t),e.exit(`tableCellDivider`),h):x(t)}function h(t){return G(t)?q(e,g,`whitespace`)(t):g(t)}function g(t){return t===58?(a+=1,o=!0,e.enter(`tableDelimiterMarker`),e.consume(t),e.exit(`tableDelimiterMarker`),_):t===45?(a+=1,_(t)):t===null||U(t)?b(t):x(t)}function _(t){return t===45?(e.enter(`tableDelimiterFiller`),v(t)):x(t)}function v(t){return t===45?(e.consume(t),v):t===58?(o=!0,e.exit(`tableDelimiterFiller`),e.enter(`tableDelimiterMarker`),e.consume(t),e.exit(`tableDelimiterMarker`),y):(e.exit(`tableDelimiterFiller`),y(t))}function y(t){return G(t)?q(e,b,`whitespace`)(t):b(t)}function b(n){return n===124?m(n):n===null||U(n)?!o||i!==a?x(n):(e.exit(`tableDelimiterRow`),e.exit(`tableHead`),t(n)):x(n)}function x(e){return n(e)}function S(t){return e.enter(`tableRow`),C(t)}function C(n){return n===124?(e.enter(`tableCellDivider`),e.consume(n),e.exit(`tableCellDivider`),C):n===null||U(n)?(e.exit(`tableRow`),t(n)):G(n)?q(e,C,`whitespace`)(n):(e.enter(`data`),w(n))}function w(t){return t===null||t===124||W(t)?(e.exit(`data`),C(t)):(e.consume(t),t===92?T:w)}function T(t){return t===92||t===124?(e.consume(t),w):w(t)}}function Yc(e,t){let n=-1,r=!0,i=0,a=[0,0,0,0],o=[0,0,0,0],s=!1,c=0,l,u,d,f=new Wc;for(;++n<e.length;){let p=e[n],m=p[1];p[0]===`enter`?m.type===`tableHead`?(s=!1,c!==0&&(Zc(f,t,c,l,u),u=void 0,c=0),l={type:`table`,start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[[`enter`,l,t]])):m.type===`tableRow`||m.type===`tableDelimiterRow`?(r=!0,d=void 0,a=[0,0,0,0],o=[0,n+1,0,0],s&&(s=!1,u={type:`tableBody`,start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[[`enter`,u,t]])),i=m.type===`tableDelimiterRow`?2:u?3:1):i&&(m.type===`data`||m.type===`tableDelimiterMarker`||m.type===`tableDelimiterFiller`)?(r=!1,o[2]===0&&(a[1]!==0&&(o[0]=o[1],d=Xc(f,t,a,i,void 0,d),a=[0,0,0,0]),o[2]=n)):m.type===`tableCellDivider`&&(r?r=!1:(a[1]!==0&&(o[0]=o[1],d=Xc(f,t,a,i,void 0,d)),a=o,o=[a[1],n,0,0])):m.type===`tableHead`?(s=!0,c=n):m.type===`tableRow`||m.type===`tableDelimiterRow`?(c=n,a[1]===0?o[1]!==0&&(d=Xc(f,t,o,i,n,d)):(o[0]=o[1],d=Xc(f,t,a,i,n,d)),i=0):i&&(m.type===`data`||m.type===`tableDelimiterMarker`||m.type===`tableDelimiterFiller`)&&(o[3]=n)}for(c!==0&&Zc(f,t,c,l,u),f.consume(t.events),n=-1;++n<t.events.length;){let e=t.events[n];e[0]===`enter`&&e[1].type===`table`&&(e[1]._align=Kc(t.events,n))}return e}function Xc(e,t,n,r,i,a){let o=r===1?`tableHeader`:r===2?`tableDelimiter`:`tableData`;n[0]!==0&&(a.end=Object.assign({},Qc(t.events,n[0])),e.add(n[0],0,[[`exit`,a,t]]));let s=Qc(t.events,n[1]);if(a={type:o,start:Object.assign({},s),end:Object.assign({},s)},e.add(n[1],0,[[`enter`,a,t]]),n[2]!==0){let i=Qc(t.events,n[2]),a=Qc(t.events,n[3]),o={type:`tableContent`,start:Object.assign({},i),end:Object.assign({},a)};if(e.add(n[2],0,[[`enter`,o,t]]),r!==2){let r=t.events[n[2]],i=t.events[n[3]];if(r[1].end=Object.assign({},i[1].end),r[1].type=`chunkText`,r[1].contentType=`text`,n[3]>n[2]+1){let t=n[2]+1,r=n[3]-n[2]-1;e.add(t,r,[])}}e.add(n[3]+1,0,[[`exit`,o,t]])}return i!==void 0&&(a.end=Object.assign({},Qc(t.events,i)),e.add(i,0,[[`exit`,a,t]]),a=void 0),a}function Zc(e,t,n,r,i){let a=[],o=Qc(t.events,n);i&&(i.end=Object.assign({},o),a.push([`exit`,i,t])),r.end=Object.assign({},o),a.push([`exit`,r,t]),e.add(n+1,0,a)}function Qc(e,t){let n=e[t],r=n[0]===`enter`?`start`:`end`;return n[1][r]}var $c={name:`tasklistCheck`,tokenize:tl};function el(){return{text:{91:$c}}}function tl(e,t,n){let r=this;return i;function i(t){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(t):(e.enter(`taskListCheck`),e.enter(`taskListCheckMarker`),e.consume(t),e.exit(`taskListCheckMarker`),a)}function a(t){return W(t)?(e.enter(`taskListCheckValueUnchecked`),e.consume(t),e.exit(`taskListCheckValueUnchecked`),o):t===88||t===120?(e.enter(`taskListCheckValueChecked`),e.consume(t),e.exit(`taskListCheckValueChecked`),o):n(t)}function o(t){return t===93?(e.enter(`taskListCheckMarker`),e.consume(t),e.exit(`taskListCheckMarker`),e.exit(`taskListCheck`),s):n(t)}function s(r){return U(r)?t(r):G(r)?e.check({tokenize:nl},t,n)(r):n(r)}}function nl(e,t,n){return q(e,r,`whitespace`);function r(e){return e===null?n(e):t(e)}}function rl(e){return gt([yc(),Fc(),Uc(e),qc(),el()])}var il={};function al(e){let t=this,n=e||il,r=t.data(),i=r.micromarkExtensions||=[],a=r.fromMarkdownExtensions||=[],o=r.toMarkdownExtensions||=[];i.push(rl(n)),a.push(uc()),o.push(dc(n))}var ol=e=>/^https?:\/\//.test(e),sl=[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`],cl=e=>Object.fromEntries(sl.map((t,n)=>[t,t=>(0,Za.createElement)(sl[Math.min(n+e-1,sl.length-1)],t)]));function ll({children:e,resolverLink:t,nivelBase:n=1,className:r}){let i={...n>1?cl(n):{},a({href:e,children:n}){if(!e)return(0,Z.jsx)(Z.Fragment,{children:n});if(ol(e))return(0,Z.jsx)(`a`,{href:e,target:`_blank`,rel:`noreferrer noopener`,children:n});let r=t?.(e);return r?(0,Z.jsx)(c,{to:r,children:n}):(0,Z.jsx)(Z.Fragment,{children:n})},table({children:e}){return(0,Z.jsx)(`div`,{className:`not-prose my-6 overflow-x-auto rounded-lg border`,children:(0,Z.jsx)(`table`,{className:`w-full text-sm`,children:e})})},tr({children:e}){return(0,Z.jsx)(`tr`,{className:`border-b last:border-b-0`,children:e})},th({children:e}){return(0,Z.jsx)(`th`,{className:`bg-muted px-3 py-2 text-start font-medium`,children:e})},td({children:e}){return(0,Z.jsx)(`td`,{className:`px-3 py-2 align-top`,children:e})}};return(0,Z.jsx)(`div`,{className:a(`prose prose-fleet max-w-none`,r),children:(0,Z.jsx)(no,{remarkPlugins:[al],components:i,children:e})})}var ul=Object.assign({"./fluxos/00-como-usar-este-tutorial.md":`# 00 — Como usar este tutorial

Este tutorial descreve **o que um usuário faz no sistema**, na ordem em que ele faz. Cada arquivo é um
tutorial de uma tarefa completa: quem pode executar, o que precisa estar pronto antes, o passo a passo
na interface, o que o sistema faz em resposta e o que ele recusa.

Enquanto os documentos numerados de \`docs/\` (00–19) são a **especificação** do produto, estes aqui
são a **documentação de uso**: servem de roteiro de demonstração, de material de treinamento
do município e de inventário do que a aplicação já é capaz de fazer.

## Ordem sugerida de leitura

- **Demonstração comercial (30 min):** 01 → 08 → 09 → 13 → 11 → 16.
- **Implantação de um município:** 02 → 03 → 04 → 05 → 06 → 07, e só então 08 em diante.
- **Treinamento do operador:** 01 → 08 → 09 → 11 → 13 → 15.
- **Treinamento do fiscal/auditor:** 01 → 13 → 14 → 16 → 17.

## Perfis usados nos exemplos

O ambiente de demonstração já vem com um usuário por perfil (a senha pode ser qualquer uma; ver
[18](./18-ambiente-de-demonstracao.md)):

| Perfil                 | Usuário de demonstração      | O que faz                                                                         |
| ---------------------- | ---------------------------- | --------------------------------------------------------------------------------- |
| Administrador HighBase | \`admin@highbase.com.br\`      | configura a plataforma e troca de município pela topbar                           |
| Gestor municipal       | \`gestor@municipio.gov.br\`    | tudo do município: cadastros, viagens, ajustes, configurações                     |
| Operador               | \`operador@municipio.gov.br\`  | o dia a dia: lança, designa e monitora viagens                                    |
| Fiscal                 | \`fiscal@municipio.gov.br\`    | somente consulta: nenhuma ação de escrita                                         |
| Motorista              | \`motorista@municipio.gov.br\` | **não entra no painel** — opera pelo app (ver [12](./12-jornada-do-motorista.md)) |

## Convenções destes documentos

- **Quem faz** lista os perfis e as permissões exigidas. Sem a permissão, o item some do menu e a rota
  responde \`/403\`.
- **Módulo** indica a feature flag que liga o fluxo. Com o módulo desligado, a rota responde \`/404\` —
  o município não deve nem saber que aquilo existe.
- Telas marcadas _(em construção)_ têm rota e permissão, mas ainda mostram a página "Em construção":
  \`/plataforma/*\` e \`/perfil\`.
- O app do motorista ainda não existe como aplicativo. Tudo que ele faria é executado pelo
  **Console do motorista** (\`/dev/motorista\`), que fala com a mesma API.
`,"./fluxos/01-primeiro-acesso-e-navegacao.md":`# 01 — Primeiro acesso e navegação

**Quem faz:** todos os perfis de painel (gestor, operador, fiscal, administrador HighBase).
**Onde:** \`/login\`, \`/trocar-senha\`, \`/recuperar-senha\`, \`/redefinir-senha\`, e o shell de todas as telas.

O motorista **não entra no painel web**. Se tentar, a API responde "Perfil sem acesso ao painel
administrativo" e a tentativa fica registrada na auditoria.

---

## 1. Entrar

1. Abra a aplicação. Sem sessão, qualquer rota leva a \`/login\`.
2. Informe **E-mail** e **Senha** e envie.
3. O sistema abre o **Painel** (\`/painel\`) já com o menu montado a partir das suas permissões.

No ambiente de demonstração, a tela de login mostra atalhos com os usuários de cada perfil — um clique
preenche o e-mail. Qualquer senha é aceita pelo mock.

**O que o sistema recusa:**

| Situação                  | Resposta                                                          |
| ------------------------- | ----------------------------------------------------------------- |
| E-mail ou senha em branco | erro no próprio campo, sem chamar a API                           |
| Credencial inválida       | "E-mail ou senha inválidos." e registro \`AUTH_FALHA\` na auditoria |
| Usuário inativo           | "Usuário inativo. Procure o gestor do município."                 |
| Perfil motorista          | bloqueado no painel                                               |

O botão do olho no campo de senha alterna a visibilidade do que foi digitado.

## 2. Trocar a senha no primeiro acesso

Usuário criado pelo gestor nasce com **senha provisória** e troca obrigatória:

1. Ao entrar, o sistema leva direto para \`/trocar-senha\` e **não deixa navegar para outra rota** —
   qualquer tentativa volta para lá.
2. Informe a senha atual (a provisória), a nova (mínimo 8 caracteres) e a confirmação.
3. Confirmada a troca, o painel é liberado.

Depois disso, a troca voluntária fica no menu do usuário → **Trocar senha**.

## 3. Recuperar a senha esquecida

1. Em \`/login\`, use **Esqueci minha senha** e informe o e-mail.
2. O sistema responde sempre da mesma forma, exista ou não o e-mail (não revela quem tem conta).
3. Abra o link recebido — ele leva a \`/redefinir-senha?token=...\`.
4. Defina a nova senha e a confirmação.

Token expirado ou inválido é recusado com a mensagem da API. No ambiente de demonstração não há e-mail:
o link é impresso no **console do navegador**.

## 4. Se localizar na tela

| Elemento                       | Para que serve                                                                                                                                                                      |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Sidebar**                    | menu por grupos (Operação, Viagens, Motoristas, Frota, Passageiros, Fiscalização, Relatórios, Cadastros, Administração, Plataforma). Recolhe e expande; no celular abre como gaveta |
| **Breadcrumb**                 | caminho da rota atual, montado automaticamente                                                                                                                                      |
| **Busca global (⌘K / Ctrl+K)** | encontra telas pelo nome, respeitando permissões e módulos ligados                                                                                                                  |
| **Sino de alertas**            | contagem de alertas abertos, com os cinco mais recentes ([13](./13-monitorar-a-operacao.md))                                                                                        |
| **Tema**                       | alterna claro/escuro; a escolha fica salva                                                                                                                                          |
| **Município ativo**            | só para o administrador HighBase: troca o município de todas as consultas                                                                                                           |
| **Menu do usuário**            | Perfil _(em construção)_ · Trocar senha · Sair (e, em desenvolvimento, Console do motorista e Reiniciar dados do mock)                                                              |

O menu **só mostra o que você pode acessar**: item sem permissão some, e grupo que fica sem itens some
inteiro. O mesmo vale para a busca global.

## 5. O que acontece com a sessão

- A sessão é recuperada automaticamente ao recarregar a página, a partir do token guardado.
- Token expirado é renovado sozinho; se a renovação falhar, você volta ao login sem sessão pela metade.
- Sem interação por \`minutosInatividadeLogout\` (padrão **60 minutos**, configurável em
  [02](./02-configurar-o-municipio.md)), a sessão é encerrada com o aviso "Sessão encerrada por
  inatividade".
- **Sair**, no menu do usuário, encerra a sessão e registra o logout na auditoria.

## 6. Quando o acesso é negado

| Situação                                      | O que aparece                                                        |
| --------------------------------------------- | -------------------------------------------------------------------- |
| Rota que exige permissão que o perfil não tem | \`/403\` — "Acesso negado"                                             |
| Rota de um módulo desligado no município      | \`/404\` — o módulo não existe para aquele município                   |
| Rota inexistente                              | \`/404\`                                                               |
| Erro ao carregar uma tela                     | tela de erro com "Tentar novamente", sem derrubar o resto do sistema |

## Referências

- [02 — Perfis e permissões](../02-perfis-permissoes.md)
- [06 — Design system](../06-design-system.md) · [07 — Navegação e telas](../07-navegacao-telas.md)
- [15 — Configurações por município](../15-configuracoes-municipio.md) §5 (módulos)
`,"./fluxos/02-configurar-o-municipio.md":`# 02 — Configurar o município

**Quem faz:** gestor municipal (ver) e gestor (editar). O operador vê, mas não grava.
**Permissões:** \`configuracao.visualizar\` para abrir · \`configuracao.editar\` para salvar.
**Onde:** \`/configuracoes\` (Administração → Configurações).

Os parâmetros desta tela mudam o comportamento de quase todo o resto do sistema: o que conta como
atraso, quando abre alerta, quanto tempo o motorista pode ficar em atividade, com que precisão o GPS é
aceito. Vale configurar **antes** de lançar as primeiras viagens.

---

## 1. Passo a passo

1. Abra **Administração → Configurações**.
2. Escolha a aba, altere os valores e use **Salvar**.
3. Cada campo numérico mostra a faixa aceita e tem **Restaurar padrão**.
4. Ao sair da tela com alterações não salvas, o sistema avisa antes de descartar.

Se a validação falhar em um campo de outra aba, o sistema **muda para a aba do erro** e destaca o campo —
você nunca fica com um "não salvou" sem saber por quê.

## 2. As abas

### Geral

Identidade do município (nome de exibição, brasão, cor primária, tema padrão, rodapé dos relatórios),
contato exibido ao motorista no aplicativo, e dois parâmetros de sessão:
**Inatividade até encerrar a sessão** (padrão 60 min) e **Limite de registros por exportação**.

### Viagens

| Grupo                            | Parâmetros                                                                                                                                                      |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Prazos e tolerâncias             | tolerância de atraso (15 min) · tolerância de distância (20%) · prazo de confirmação da ordem (10 min) · antecedência mínima de designação (60 min)             |
| Janelas de lançamento            | lançamento retroativo (120 min) · agendamento futuro (90 dias)                                                                                                  |
| Registro de eventos e designação | proximidade exigida na chegada (150 m) · exigir proximidade para registrar eventos · permitir veículo de outra secretaria · permitir designar motorista offline |

### Jornada _(módulo Controle operacional)_

Duração máxima da jornada operacional (12 h) · horas operacionais por dia · intervalo previsto ·
tempo disponível sem viagem que gera alerta · divergência de quilometragem · exigir quilometragem ·
exigir nível de combustível · status operacionais habilitados.

O vocabulário aqui é controlado de propósito: _atividade_, _jornada operacional_, _tempo em atividade_.
Nunca "ponto", "batida", "hora extra" ou "banco de horas" — o produto **não** é registro de ponto.

### GPS e desvios _(módulo Desvio de rota)_

Intervalo entre registros de posição (30 s) · tempo sem posição que gera alerta (10 min) ·
salto máximo aceito entre posições (2000 m) · distância da rota planejada que caracteriza desvio (300 m) ·
tempo mínimo fora da rota (120 s).

Os dois últimos são o que separa desvio real de retorno de quadra: passa da distância, mas não do tempo.

### Alertas

Tempo parado em deslocamento que abre alerta (15 min) · exigir observação ao resolver ·
som no alerta crítico (desligado por padrão).

### Tabelas

Atalhos para os cadastros de apoio do município: secretarias, setores, unidades, centros de custo,
tipos de viagem, tipos de veículo, tipos de documento e motivos de ocorrência. A edição acontece nas
telas de cadastro ([03](./03-estrutura-administrativa.md) e §4 abaixo).

### Módulos

Lista, **somente leitura**, dos módulos ativos e inativos do município. A ativação é feita pela HighBase
em Plataforma → Módulos _(em construção)_.

## 3. O que o sistema recusa

| Situação                                    | Resposta                                                        |
| ------------------------------------------- | --------------------------------------------------------------- |
| Valor fora da faixa                         | erro no campo, antes mesmo de chamar a API; a API também recusa |
| Usuário só com \`configuracao.visualizar\`    | os campos abrem, o salvamento é recusado                        |
| Tentar alterar \`featureFlags\` por esta tela | recusado de propósito — módulo é decisão de plataforma          |
| Parâmetro de módulo ainda não liberado      | recusado                                                        |

Aba escondida = módulo desligado. Aba visível com o aviso "Parâmetros de … ainda não disponíveis" =
módulo ligado, mas os parâmetros ainda não são editáveis; os valores padrão continuam valendo.

## 4. Tabelas de apoio

São quatro telas de cadastro simples, todas com o mesmo desenho (lista, criação e edição por diálogo,
inativação pelo menu de ações):

| Tela                  | O que define                                                                                                                     |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| \`/tipos-viagem\`       | finalidades aceitas no lançamento; cada tipo diz se exige acompanhante, se exige veículo acessível e se permite compartilhamento |
| \`/tipos-veiculo\`      | categorias da frota e a capacidade padrão, que o cadastro de veículo herda                                                       |
| \`/tipos-documento\`    | documentos exigidos, e de quem se aplicam (motorista, veículo ou ambos)                                                          |
| \`/motivos-ocorrencia\` | causas registráveis, com a severidade sugerida — motivo com severidade crítica abre alerta automaticamente                       |

O fiscal enxerga as quatro em modo leitura.

## 5. Depois

Cada parâmetro salvo passa a valer **imediatamente** para a sessão em uso: mudou a tolerância de atraso,
a lista de viagens já classifica o atraso pelo novo valor. Toda alteração vai para a
[auditoria](./17-auditoria.md) com valor anterior e novo.

## Referências

- [15 — Configurações por município](../15-configuracoes-municipio.md)
- [08 — Módulo: Cadastros](../08-modulo-cadastros.md) §6 (tabelas de apoio)
- [00 — Visão geral](../00-visao-geral.md) §7 (vocabulário de jornada)
`,"./fluxos/03-estrutura-administrativa.md":`# 03 — Estrutura administrativa

**Quem faz:** gestor municipal.
**Permissões:** \`secretaria.*\`, \`setor.gravar\`, \`unidade.gravar\`, \`centro-custo.gravar\`
(operador e fiscal só visualizam).
**Onde:** Cadastros → Secretarias · Setores · Unidades · Centros de custo.

Esta é a espinha dorsal do sistema: toda viagem, veículo, motorista e passageiro pertence a uma
secretaria, e é por ela que os relatórios agregam. Cadastre nesta ordem — **secretaria → setor →
unidade** — porque cada nível depende do anterior.

---

## 1. Secretarias — \`/estrutura/secretarias\`

**Cadastrar:**

1. Cadastros → **Secretarias** → **Nova secretaria**.
2. Preencha **Nome** (3–120 caracteres) e **Sigla** (2–10 caracteres, única no município, gravada em
   maiúsculas).
3. Opcionalmente, **Nome do responsável** e **E-mail do responsável**.
4. **Salvar** devolve para a lista já atualizada.

A lista traz nome, sigla, responsável e situação, com ordenação e paginação **no servidor** — a página,
a ordem e a busca ficam na URL, então o endereço da tela é compartilhável e o botão voltar desfaz o
filtro.

**O que o sistema recusa:**

- sigla duplicada no município → erro no próprio campo, com a mensagem da API;
- **inativar secretaria em uso** → recusado, informando quantos registros dependem dela;
- sair do formulário com alteração não salva → aviso antes de descartar.

## 2. Setores — \`/estrutura/setores\`

Um setor sempre pertence a uma secretaria.

1. **Novo setor** → escolha a **Secretaria** e informe o **Nome**.
2. Na lista, a coluna da secretaria também é filtro (a escolha vai para a URL).

Regras que valem a pena conhecer:

- **trocar a secretaria de um setor move junto as unidades** vinculadas a ele — a hierarquia nunca fica
  inconsistente;
- setor com unidades **não pode ser inativado**; a mensagem diz quantas;
- em qualquer tela onde se escolhe secretaria e setor, escolher a secretaria **filtra os setores
  disponíveis**, e a API recusa a combinação que não bate.

## 3. Unidades — \`/estrutura/unidades\`

Unidade é o local físico: hospital, UBS, escola, CRAS, garagem, paço. É o que vira destino de viagem.

1. **Nova unidade** → **Secretaria**, **Setor** (opcional, filtrado pela secretaria), **Nome**,
   **Endereço** e **Telefone**.
2. O endereço vem da busca de endereços ([07](./07-passageiros-e-enderecos.md)); se ainda não existir,
   cadastre-o antes.

A lista mostra o endereço resumido e filtra por secretaria. O sistema recusa o setor que não pertence à
secretaria informada.

## 4. Centros de custo — \`/estrutura/centros-custo\`

Classificação orçamentária da viagem.

1. **Novo centro de custo** → **Código** (único no município, no padrão da lei orçamentária, até 20
   caracteres), **Nome** e **Secretaria**.
2. A lista traz código, nome e secretaria. Código duplicado é recusado no próprio campo, com a mensagem
   da API.

O centro de custo é opcional no lançamento da viagem, mas é ele que permite responder "quanto de frota
o programa X consumiu" nos relatórios.

## 5. Quem enxerga o quê

| Perfil   | Pode                                        |
| -------- | ------------------------------------------- |
| Gestor   | criar, editar e inativar tudo               |
| Operador | visualizar; as ações de gravar não aparecem |
| Fiscal   | visualizar; a rota de criação não abre      |

## 6. Depois

- As secretarias passam a aparecer como filtro em praticamente todas as listas e relatórios.
- As unidades ficam disponíveis como destino no [lançamento de viagem](./08-lancar-uma-viagem.md).
- Toda criação, alteração e inativação vai para a [auditoria](./17-auditoria.md).

## Referências

- [08 — Módulo: Cadastros](../08-modulo-cadastros.md) §5
- [03 — Modelo de dados](../03-modelo-dados.md)
`,"./fluxos/04-usuarios-perfis-e-permissoes.md":`# 04 — Usuários, perfis e permissões

**Quem faz:** gestor municipal (e administrador HighBase).
**Permissões:** \`usuario.visualizar|criar|editar|excluir\` · \`perfil.visualizar|gravar\`.
**Onde:** Administração → Usuários · Perfis e permissões.

Cada usuário tem **um perfil**, e o perfil é uma lista de permissões. É a permissão que decide o que
aparece no menu, o que abre por URL direta e quais botões existem na tela — a interface e a API usam a
mesma regra, então esconder um botão nunca é o único controle.

---

## 1. Criar um usuário do painel

1. Administração → **Usuários** → **Novo usuário**.
2. Preencha **Nome**, **E-mail** (serve como login e recebe a senha provisória), **Telefone**.
3. Escolha **Tipo** (Gestor, Operador ou Fiscal), **Perfil de acesso**, **Secretaria** e **Situação**.
4. Ao salvar, o sistema exibe a **senha provisória** em um diálogo, com botão **Copiar senha** —
   ela aparece **uma única vez**.
5. Entregue a senha ao usuário. No primeiro acesso ele será obrigado a trocá-la
   ([01](./01-primeiro-acesso-e-navegacao.md) §2).

A lista traz **apenas os usuários do painel**: motoristas não aparecem aqui, porque o acesso deles é
criado na tela do motorista ([05](./05-cadastrar-motoristas.md) §4), e o administrador da plataforma não
nasce nesta tela.

**O que o sistema recusa:**

| Situação                                                | Resposta                                         |
| ------------------------------------------------------- | ------------------------------------------------ |
| E-mail já usado no município                            | erro no próprio campo                            |
| Campos obrigatórios vazios                              | erro nos campos, sem chamar a API                |
| Tipo de usuário que não nasce nesta tela                | recusado pela API                                |
| Inativar ou excluir **a si mesmo**                      | ação indisponível, com o motivo na tela          |
| Inativar/excluir o **último gestor ativo** do município | recusado — o município ficaria sem administrador |
| Sair com alterações não salvas                          | aviso antes de descartar                         |

## 2. Manter usuários

- **Filtrar por perfil** — a escolha vai para a URL e volta com o botão voltar.
- **Reenviar acesso** — gera uma nova senha provisória, exibe no diálogo e registra na auditoria.
- **Inativar** — o usuário some da lista de ativos e perde o acesso.
- Alterar o perfil **do próprio usuário logado** recarrega a sessão: a sidebar muda na hora.

## 3. Entender os perfis padrão

\`/perfis\` lista os perfis com tipo, quantidade de permissões e quantidade de usuários. Quatro já vêm
prontos:

| Perfil                     | O que pode                                                                                                                                                                       |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Administrador HighBase** | tudo, inclusive as telas de plataforma e a troca de município                                                                                                                    |
| **Gestor municipal**       | tudo do município; nada de plataforma                                                                                                                                            |
| **Operador**               | dia a dia da operação: lança, designa, cancela, monitora, trata alerta e desvio, cria passageiro/endereço, vê cadastros e relatórios. Não edita motorista, veículo nem estrutura |
| **Fiscal**                 | somente leitura de tudo, mais a exportação de relatórios                                                                                                                         |
| **Motorista (aplicativo)** | nenhuma permissão de painel — existe só para o app                                                                                                                               |

Perfil padrão abre em **somente leitura** (a API também recusa alterar as permissões dele).

## 4. Criar um perfil sob medida

1. \`/perfis\` → **Novo perfil**, ou abra um perfil padrão e use **Duplicar** — a cópia nasce editável e
   com as mesmas permissões, que é o caminho mais rápido.
2. Informe **Nome** e **Descrição**.
3. Marque as permissões na **matriz recurso × ação**: uma linha por recurso (viagem, motorista,
   veículo…), uma coluna por ação (visualizar, criar, editar, excluir…). O "marcar tudo" da linha tem
   estado indeterminado quando só parte está marcada.
4. **Salvar** grava exatamente o que foi marcado.

**O que o sistema recusa:**

- nome vazio ou curto → erro no campo;
- permissão fora do catálogo → recusada pela API;
- alterar permissões de perfil padrão → recusado;
- **excluir perfil em uso** → recusado, informando quantos usuários dependem dele;
- excluir perfil padrão → a ação nem aparece.

Ao salvar o perfil que você mesmo usa, a sessão é recarregada e o menu se ajusta imediatamente.

## 5. Como testar se ficou certo

Entre com o usuário afetado e confira três coisas:

1. o menu mostra só os grupos esperados (grupo sem itens visíveis some inteiro);
2. a URL direta de uma tela proibida responde \`/403\`;
3. dentro de uma tela permitida, as ações de escrita não aparecem para quem só visualiza.

## Referências

- [02 — Perfis e permissões](../02-perfis-permissoes.md) (catálogo completo e matriz por perfil)
- [14 — Auditoria e logs](../14-auditoria-logs.md) §2.5
`,"./fluxos/05-cadastrar-motoristas.md":`# 05 — Cadastrar motoristas

**Quem faz:** gestor municipal.
**Permissões:** \`motorista.visualizar|criar|editar|excluir|reset-senha\`.
O operador visualiza (com CPF mascarado) e o fiscal também — nenhum dos dois grava.
**Onde:** Motoristas → Motoristas (\`/motoristas\`).

Motorista aqui é **servidor ou colaborador do município**, não prestador contratado. Ele não aceita nem
recusa viagem: recebe uma designação e confirma o recebimento.

---

## 1. Cadastrar

1. **Motoristas → Novo motorista**.
2. **Dados pessoais** — nome, CPF, data de nascimento, telefone, e-mail e endereço residencial.
3. **Vínculo funcional** — matrícula, tipo de vínculo, secretaria, setor, cargo, data de admissão,
   jornada prevista (h/dia), escala e situação funcional.
4. **Habilitação** — número da CNH, categoria, validade, 1ª habilitação e **curso de transporte de
   passageiros**.
5. **Operacional** — veículo habitual (apenas uma sugestão de preenchimento; não restringe nada).
6. **Observações e situação do cadastro**.
7. **Salvar** volta para a lista.

**O que o sistema recusa:**

| Situação                                                  | Resposta                               |
| --------------------------------------------------------- | -------------------------------------- |
| CPF com dígito verificador inválido                       | erro no campo                          |
| CPF já cadastrado no município                            | erro no campo                          |
| Matrícula duplicada no município                          | erro no campo                          |
| Categoria D ou E sem o curso de transporte de passageiros | recusado (quando o município exige)    |
| Campos obrigatórios vazios                                | erro nos campos, antes de chamar a API |

## 2. Encontrar e acompanhar

A lista traz motorista (foto, nome, matrícula), CPF, secretaria/setor, vínculo, CNH com validade,
situação e o status operacional de quem está em atividade agora.

- **CNH vencida** ganha destaque na linha e tem filtro próprio — é a forma de fazer a varredura mensal
  de habilitações.
- Busca por nome, matrícula ou CPF; filtros por situação, secretaria, setor, vínculo e categoria.
- Para quem não pode editar, o **CPF aparece mascarado**, inclusive dentro do formulário.

## 3. O detalhe do motorista — \`/motoristas/:id\`

Seis abas:

| Aba             | Conteúdo                                                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Resumo**      | dados cadastrais, vínculo, habilitação                                                                                                     |
| **Jornadas**    | jornadas do motorista, com início, fim, tempo em atividade e distância                                                                     |
| **Viagens**     | viagens dele, com código, embarque previsto, status, veículo e passageiros                                                                 |
| **Documentos**  | anexos por tipo, com validade e situação                                                                                                   |
| **Indicadores** | horas online, tempo disponível/em viagem/em espera/em intervalo, viagens, passageiros, km (odômetro e GPS), desvios — no período escolhido |
| **Auditoria**   | tudo que já foi alterado neste cadastro                                                                                                    |

## 4. Liberar o acesso ao aplicativo

1. No detalhe (ou pela linha da lista), use **Criar acesso**.
2. Informe o **e-mail de acesso**.
3. O sistema cria o usuário do tipo motorista, vincula ao cadastro e exibe a **senha provisória**.
4. Se o motorista perder a senha, use **Redefinir senha** — disponível **apenas para quem já tem
   acesso**, e registrado na auditoria.

O usuário criado aqui **não entra no painel web**: o perfil de motorista existe só para o aplicativo.

## 5. Documentos

Na aba **Documentos**: **Anexar documento** → escolha o **Tipo** (dos tipos de documento do município),
o **Arquivo** e a **Validade**. A situação (válido / a vencer / vencido) é calculada pela validade.
Anexar e remover ficam registrados na auditoria. O sistema recusa anexar no motorista um tipo de
documento que se aplica a veículo.

## 6. Afastar ou inativar

| Situação                                                              | Resposta               |
| --------------------------------------------------------------------- | ---------------------- |
| Motorista com **jornada aberta**                                      | não pode ser inativado |
| Motorista com **viagem ativa** (designada, confirmada ou em execução) | não pode ser afastado  |

Encerre a jornada e resolva as viagens antes. É proposital: inativar alguém em atividade deixaria
registro de operação sem responsável.

## 7. Depois

O motorista cadastrado e **ativo, com CNH válida**, passa a aparecer nas sugestões de designação
([09](./09-designar-e-confirmar-viagens.md)) e, assim que iniciar a atividade pelo app, no
[painel operacional e no mapa](./13-monitorar-a-operacao.md).

## Referências

- [08 — Módulo: Cadastros](../08-modulo-cadastros.md) §1
- [10 — Controle operacional](../10-modulo-controle-operacional.md) §6 (vínculo motorista ↔ veículo)
`,"./fluxos/06-cadastrar-veiculos.md":`# 06 — Cadastrar veículos

**Quem faz:** gestor municipal (cadastro) e operador (status operacional).
**Permissões:** \`veiculo.visualizar|criar|editar|excluir\` · \`veiculo.alterar-status\`.
**Onde:** Frota → Veículos (\`/veiculos\`).

Veículo aqui é **do município** — próprio, locado ou cedido. O cadastro descreve o bem; a
**disponibilidade do dia** é outra coisa, e se controla pelo status operacional (§3).

---

## 1. Cadastrar

1. **Frota → Veículos → Novo veículo**.
2. **Identificação** — placa, marca, modelo, ano de fabricação/modelo, cor, chassi, RENAVAM.
3. **Classificação** — tipo de veículo (traz a **capacidade padrão** do tipo), capacidade de
   passageiros, combustível, recursos de acessibilidade.
4. **Patrimônio e vinculação** — número patrimonial, posse (próprio, locado, cedido), secretaria e setor.
5. **Operação** — quilometragem inicial e motorista habitual.
6. **Documentos e validades** — validade do licenciamento e do seguro.
7. **Salvar**: o veículo nasce com status operacional **Disponível**.

**O que o sistema recusa:**

| Situação                                               | Resposta                                                     |
| ------------------------------------------------------ | ------------------------------------------------------------ |
| Placa fora do padrão Mercosul ou do antigo             | erro no campo                                                |
| Placa duplicada no município                           | erro no campo                                                |
| Número patrimonial duplicado                           | erro no campo                                                |
| Alterar o **status operacional** pelo cadastro         | recusado — use a ação de status (§3)                         |
| Alterar a **quilometragem inicial** depois do cadastro | recusado — a quilometragem atual é atualizada pelas jornadas |
| Criar acima do **limite contratado** do município      | recusado                                                     |

## 2. Encontrar

A lista traz placa, modelo, tipo, secretaria e status operacional. **Documento vencido** (licenciamento
ou seguro) recebe destaque e tem filtro próprio — é a varredura periódica da frota.

## 3. Mudar o status operacional

Os cinco status: **Disponível · Em viagem · Em manutenção · Indisponível · Reservado**.

1. Na lista ou no detalhe, use a ação de **alterar status operacional**.
2. Escolha o novo status e **informe o motivo** (obrigatório na mudança manual).

Regras:

- **Em viagem** é atribuído pelo sistema durante a execução, não à mão;
- veículo com **viagem ativa** não pode ir para manutenção;
- status igual ao atual é recusado;
- quem não tem \`veiculo.alterar-status\` não vê a ação, e a API também recusa.

O operador **altera status, mas não cria, edita nem inativa** veículos. O fiscal não faz nenhuma das duas.

## 4. O detalhe do veículo — \`/veiculos/:id\`

| Aba             | Conteúdo                                                                                                         |
| --------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Resumo**      | identificação, classificação, patrimônio, quilometragem atual e o motorista/viagem em uso agora                  |
| **Jornadas**    | jornadas em que o veículo foi usado, com motorista, início, fim e distância                                      |
| **Viagens**     | viagens realizadas com ele                                                                                       |
| **Documentos**  | licenciamento, seguro e demais anexos, com validade e situação                                                   |
| **Indicadores** | viagens, quilômetros, horas em uso, tempo parado, taxa de utilização, passageiros e média de ocupação no período |
| **Auditoria**   | histórico de alterações do cadastro                                                                              |

Anexar e remover documento fica registrado na auditoria; o sistema recusa anexar um tipo de documento
de motorista no veículo.

## 5. Inativar

- Veículo com **jornada aberta** não pode ser inativado.
- Ao inativar o cadastro, o status operacional vai para **Inativo** junto — cadastro e operação não
  ficam contando histórias diferentes.

## 6. Depois

Veículo **Disponível**, com capacidade suficiente e acessibilidade compatível, entra nas sugestões de
designação ([09](./09-designar-e-confirmar-viagens.md)) e aparece no
[mapa da frota](./13-monitorar-a-operacao.md) assim que estiver em uma jornada aberta.

A quilometragem atual **não é digitada**: ela vem do encerramento de cada jornada, e é comparada com a
distância medida por GPS. Divergência acima de 20% é destacada.

## Referências

- [08 — Módulo: Cadastros](../08-modulo-cadastros.md) §2
- [10 — Controle operacional](../10-modulo-controle-operacional.md) §6
`,"./fluxos/07-passageiros-e-enderecos.md":`# 07 — Passageiros e endereços

**Quem faz:** gestor e operador (o operador cria e edita, mas não inativa). Fiscal só consulta.
**Permissões:** \`passageiro.visualizar|criar|editar|excluir\` · \`endereco.visualizar|criar|editar|excluir\`.
**Onde:** Passageiros → Passageiros (\`/passageiros\`) e Endereços e locais (\`/enderecos\`).

Endereço é o cadastro que sustenta todo o resto: passageiro tem endereço, unidade tem endereço, e viagem
tem origem e destino. Comece por ele.

---

## 1. Cadastrar um endereço — \`/enderecos/novo\`

1. **Passageiros → Endereços e locais → Novo endereço**.
2. **Identificação do local** — apelido (ex.: "Hospital Municipal") e a marcação **local frequente**.
3. **Endereço** — CEP, logradouro, número, complemento, bairro, cidade, UF e ponto de referência.
4. **Coordenada** — de duas formas, à sua escolha:
   - digitando latitude e longitude direto nos campos;
   - **arrastando o pino no mapa**, que atualiza os campos.
5. **Salvar**.

**O que o sistema faz e recusa:**

- coordenada fora do território brasileiro é recusada (no formulário e na API);
- ponto muito distante do centro do município gera **aviso** — não bloqueia, porque destino em município
  vizinho é caso real (tratamento fora de domicílio);
- **local frequente exige apelido**: sem nome, ele não serve de atalho para ninguém.

Na lista, os **locais frequentes aparecem primeiro**, e há filtro por frequente e por cidade.

## 2. Inativar um endereço

O gestor inativa **apenas endereços sem vínculo**. O sistema recusa e explica quando o endereço:

- é o **endereço principal** de um passageiro;
- está entre os **endereços adicionais** de um passageiro;
- é **origem ou destino de uma viagem ativa**.

A mensagem conta passageiros, unidades e motoristas juntos, para você saber o tamanho do problema antes
de sair caçando o vínculo.

## 3. Cadastrar um passageiro — \`/passageiros/novo\`

1. **Passageiros → Novo passageiro**.
2. **Identificação** — nome, nome social, CPF, cartão SUS, data de nascimento, tipo.
3. **Contato** — telefone, telefone alternativo, e-mail.
4. **Classificação administrativa** — secretaria, setor, unidade de referência, centro de custo,
   prioridade.
5. **Acessibilidade e acompanhamento** — necessidades de acessibilidade (seleção múltipla, operável só
   pelo teclado), exige acompanhante, nome e telefone do acompanhante.
6. **Endereços** — o **endereço principal é obrigatório**; endereços adicionais são opcionais (casa da
   filha, clínica de tratamento continuado).
7. **Salvar**.

**O que o sistema recusa:**

| Situação                                                                | Resposta      |
| ----------------------------------------------------------------------- | ------------- |
| CPF com dígito inválido, ou já cadastrado no município                  | erro no campo |
| Cartão SUS fora dos 15 dígitos, ou duplicado                            | erro no campo |
| Endereço adicional inexistente, inativo, repetido ou igual ao principal | recusado      |
| Sem endereço principal                                                  | recusado      |
| Necessidade de acessibilidade fora da lista                             | recusado      |

**Passageiro sem CPF é permitido** (criança, pessoa sem documento em mãos) — inclusive vários.

## 4. O que a acessibilidade muda na operação

O cadastro do passageiro alimenta automaticamente o planejamento da viagem:

- **exige acompanhante** → a viagem conta **2 lugares** para esse passageiro;
- **cadeira de rodas** → a viagem é marcada como **necessita veículo acessível**, e a designação passa a
  exigir veículo adaptado.

Ou seja: o que se cadastra uma vez aqui deixa de ser lembrado à mão em cada lançamento.

## 5. O detalhe do passageiro — \`/passageiros/:id\`

| Aba           | Conteúdo                                                      |
| ------------- | ------------------------------------------------------------- |
| **Resumo**    | identificação, contato, classificação, acessibilidade         |
| **Endereços** | principal e adicionais                                        |
| **Viagens**   | viagens do passageiro, com código, embarque previsto e status |
| **Auditoria** | histórico de alterações                                       |

Para quem não pode editar, o CPF aparece **mascarado** — na lista, no detalhe e no formulário.

## 6. Inativar um passageiro

Passageiro com **viagem futura** não é inativado direto: o sistema lista as viagens e pede confirmação
no diálogo. Se as viagens já passaram, a inativação é imediata.

## 7. Depois

Com endereços e passageiros cadastrados, o [lançamento de viagem](./08-lancar-uma-viagem.md) fica quase
todo de busca e clique: o passageiro traz seus endereços, e o destino vem dos locais frequentes ou das
unidades. Em qualquer campo de endereço, quem tem permissão de criar recebe o atalho **cadastrar novo
endereço** sem sair do fluxo.

## Referências

- [08 — Módulo: Cadastros](../08-modulo-cadastros.md) §3 e §4
`,"./fluxos/08-lancar-uma-viagem.md":`# 08 — Lançar uma viagem

**Quem faz:** operador ou gestor. **Permissões:** \`viagem.criar\` (o fiscal vai para \`/403\`).
**Onde:** Viagens → Nova viagem (\`/viagens/nova\`).

Lançar é registrar uma **demanda de transporte**: quem precisa ir, de onde, para onde e quando. Quem
atende (motorista e veículo) pode ser decidido agora ou depois, na fila de designação.

O wizard tem **três passos** e um resumo lateral que acompanha o preenchimento.

---

## Passo 1 — Atendimento

| Campo                           | Regra                                                                                               |
| ------------------------------- | --------------------------------------------------------------------------------------------------- |
| **Tipo de viagem**              | obrigatório; define se exige acompanhante, se exige veículo acessível e se permite compartilhamento |
| **Secretaria**                  | obrigatória; já vem preenchida com a secretaria do usuário                                          |
| **Setor** e **Centro de custo** | opcionais                                                                                           |
| **Embarque previsto**           | obrigatório                                                                                         |
| **Desembarque previsto**        | opcional; se preenchido, precisa ser depois do embarque                                             |
| **Ida e volta**                 | liga o **Retorno previsto**                                                                         |
| **Necessita veículo acessível** | marcado sozinho quando algum passageiro exige                                                       |
| **Observações**                 | visíveis ao motorista                                                                               |
| **Repetir lançamento**          | visível e desabilitado: "Disponível em versão futura"                                               |

O passo não avança com campo inválido — os erros aparecem no próprio campo.

**Erros que vêm da API e voltam para este passo:**

- **lançamento retroativo** além da tolerância do município (padrão 120 min);
- **agendamento distante** demais (padrão máximo de 90 dias).

Em ambos, o wizard volta ao passo 1 e destaca o campo de embarque.

## Passo 2 — Passageiros e endereços

1. Busque o passageiro por **nome ou CPF** e adicione.
2. Para cada um: **endereço de embarque** (dentre os endereços dele), **endereço de desembarque**
   (padrão: o destino da viagem), **acompanhante** e **observações**.
3. Viagem **sem passageiro** é permitida — transporte de material, deslocamento administrativo. Nesse
   caso informe **origem e destino** diretamente.

O que o sistema faz sozinho:

- conta **2 lugares** para o passageiro que exige acompanhante;
- avisa e marca a viagem como acessível quando algum passageiro exige;
- compara o total de lugares com a capacidade do veículo, quando já escolhido.

Sem origem e destino, o passo não avança. Voltar ao passo anterior **preserva** tudo que já foi
preenchido, e os passos são navegáveis pelo teclado (o passo atual é anunciado para leitores de tela).

## Passo 3 — Rota e designação

Ao entrar no passo, o sistema **calcula a rota** entre origem, paradas e destino e mostra:

- o mapa com a rota planejada;
- **distância prevista** e **tempo previsto**;
- as **paradas** na ordem sugerida.

Mudou um endereço no passo 2? A rota é **recalculada**.

Ainda neste passo:

- **Viagens compatíveis** — candidatas a serem atendidas junto com esta, com pontuação, economia e
  tempo adicional por passageiro ([10](./10-agrupar-viagens.md));
- **Motorista sugerido** e **Veículo sugerido**, já ordenados pelos critérios de aptidão, com as seções
  recolhidas de **motoristas descartados** e **veículos descartados** e o motivo de cada descarte
  ([09](./09-designar-e-confirmar-viagens.md) §2).

## Finalizar

Três saídas, no rodapé:

| Ação                         | Resultado                                                              |
| ---------------------------- | ---------------------------------------------------------------------- |
| **Salvar e designar depois** | viagem criada em **Aguardando designação**, e vai para a fila          |
| **Salvar e designar agora**  | viagem criada já **Designada**, com o motorista e o veículo escolhidos |
| **Salvar e criar outra**     | grava e reabre o wizard, para lançar em série                          |

Erro de capacidade vindo da API aparece no campo do veículo, não como um alerta genérico.

Quem não tem \`viagem.designar\` simplesmente não vê a designação: salva e a viagem espera na fila.

## Depois

- A viagem aparece em \`/viagens\` e, se ficou sem motorista, na
  [fila de designação](./09-designar-e-confirmar-viagens.md).
- Faltando menos de 60 minutos para o embarque sem designação, abre o alerta **Viagem sem motorista**.
- Toda a criação vai para a [auditoria](./17-auditoria.md).

## Referências

- [09 — Módulo: Viagens](../09-modulo-viagens.md) §2 e §3
- [12 — Otimização de viagens](../12-otimizacao-viagens.md) §2
`,"./fluxos/09-designar-e-confirmar-viagens.md":`# 09 — Designar e confirmar viagens

**Quem faz:** operador ou gestor. **Permissões:** \`viagem.designar\` (o fiscal não abre a tela).
**Onde:** Viagens → Designação (\`/viagens/designacao\`) e a lista \`/viagens\`.

Designar é dizer **quem atende** a viagem. Diferente do MOP V1, o motorista não aceita nem recusa: ele
recebe a ordem de serviço e **confirma o recebimento**.

---

## 1. A fila de designação

A tela é desenhada para processar viagens em série, sem sair dela.

**À esquerda**, a fila em dois grupos:

- **Aguardando designação** — na ordem do embarque; quem embarca nas próximas 2 h ganha destaque e o
  selo "Embarca em …";
- **Aguardando confirmação** — já designadas, com "Designada há …".

**À direita**, o painel da viagem selecionada: código, status, embarque previsto, passageiros e lugares
(com aviso de acessibilidade), origem e destino — e, para as que ainda não têm motorista, as sugestões.

**Atalhos de teclado** (mostrados na própria tela):

| Tecla   | Ação                        |
| ------- | --------------------------- |
| \`↑\` \`↓\` | navega pela fila            |
| \`Enter\` | designa a primeira sugestão |
| \`E\`     | abre o detalhe da viagem    |

Os atalhos **não disparam** enquanto o foco está em um campo de texto.

Fila vazia é tratada como boa notícia — "Tudo que foi lançado já tem motorista e veículo" —, não como
erro. A fila se atualiza sozinha.

## 2. Como escolher (e por que alguém não aparece)

O sistema lista **apenas quem está apto**, já na ordem sugerida, e informa quantos lugares são
necessários e se é preciso veículo acessível.

**Motorista apto:** ativo, CNH válida, jornada aberta e disponível, categoria compatível com o veículo,
sem viagem em execução e sem outra viagem em horário conflitante.
_Ordem:_ motorista habitual do veículo → mais perto do embarque → menos viagens na jornada → mais tempo
disponível.

**Veículo apto:** disponível (ou já vinculado à jornada do motorista sugerido), capacidade suficiente,
adaptado quando exigido, e da mesma secretaria — salvo se o município permitir veículo de outra.
_Ordem:_ já em uso na jornada do motorista → menor capacidade que ainda atende → menor quilometragem.

Abaixo de cada campo há a seção recolhida **Motoristas descartados** / **Veículos descartados**, com o
motivo de cada descarte ("CNH vencida em 12/07/2026", "Em viagem VG-2026-004180", "Capacidade 4 < 6
lugares"). É a resposta para a pergunta que aparece toda semana: _"por que o Fulano não está na lista?"_

## 3. Designar

1. Selecione a viagem na fila.
2. Aceite as sugestões ou escolha outro motorista/veículo nos combos (ambos têm busca).
3. **Designar motorista e veículo** — ou \`Enter\`.
4. A fila **já seleciona a próxima viagem**; você não volta para lugar nenhum.

Também dá para designar direto da lista \`/viagens\`, pelo mesmo diálogo, com as mesmas sugestões e
impedimentos.

## 4. Confirmação do recebimento

Depois de designada, a viagem aparece no aplicativo do motorista, que registra a confirmação.

- O painel mostra **há quanto tempo** a viagem está designada.
- Passando do prazo de confirmação do município (padrão 10 min), abre o alerta **Viagem sem
  confirmação**; no dobro do prazo, ele sobe para crítico.
- Se o motorista está sem sinal ou sem bateria, o operador usa **Confirmar em nome do motorista** —
  contato por rádio ou telefone. O registro fica com origem **PAINEL_WEB** e o nome de quem confirmou,
  e isso aparece na linha do tempo e na auditoria.

## 5. Mudar de ideia

| Ação                                    | Quando aparece                 | O que exige                                                    |
| --------------------------------------- | ------------------------------ | -------------------------------------------------------------- |
| **Redesignar**                          | viagem designada ou confirmada | **motivo** — só então o botão de confirmar habilita            |
| **Remover designação**                  | viagem designada               | devolve a viagem para a fila                                   |
| **Trocar motorista ou veículo em rota** | viagem em execução             | motivo; encerra o vínculo do veículo anterior e vincula o novo |
| **Cancelar viagem**                     | qualquer estado pré-execução   | digitar o **código da viagem** + motivo                        |
| **Marcar como não realizada**           | designada ou confirmada        | **categoria** (lista fechada) + texto livre                    |

A diferença entre cancelar e não realizar não é burocracia: **cancelamento mede qualidade do
planejamento; não realização mede falha de execução**, e as duas entram em linhas separadas do relatório
gerencial.

As ações disponíveis saem sempre da máquina de estados da viagem — em viagem concluída, por exemplo, não
existe cancelar nem designar. O fiscal não vê nenhuma ação de escrita.

## Depois

Com motorista e veículo definidos, acompanhe a execução em
[11 — Acompanhar e concluir a viagem](./11-acompanhar-e-concluir-a-viagem.md) e no
[painel operacional](./13-monitorar-a-operacao.md).

## Referências

- [09 — Módulo: Viagens](../09-modulo-viagens.md) §4 e §10
- [11 — Monitoramento e alertas](../11-modulo-monitoramento-alertas.md) §8 (contingência)
`,"./fluxos/10-agrupar-viagens.md":`# 10 — Agrupar viagens compatíveis

**Quem faz:** operador ou gestor. **Permissões:** \`viagem.visualizar\` para ver as sugestões ·
\`viagem.editar\` para aplicar o agrupamento.
**Módulo:** \`otimizacaoAgrupamento\` — desligado, a tela e a aba somem.
**Onde:** Viagens → Agrupamento (\`/viagens/agrupamento\`), o passo 3 do wizard e a aba **Agrupamento** do
detalhe da viagem.

Duas pessoas indo ao mesmo hospital no mesmo horário não precisam de dois carros. O sistema **sugere**;
quem decide é você. Nada é agrupado automaticamente.

---

## 1. Planejar o dia — \`/viagens/agrupamento\`

Ferramenta de planejamento em lote, tipicamente usada no fim da tarde para o dia seguinte.

1. Escolha **Data**, e opcionalmente **Secretaria**, **Tipo de viagem** e **Apenas não designadas**.
2. **À esquerda**, os **grupos sugeridos**: quantas viagens, a pontuação, a **economia** em km e o
   **tempo adicional** máximo.
3. **No centro**, o mapa compara a **rota proposta para o grupo** com as rotas individuais.
4. **À direita**, o **impacto por passageiro** — quem ganha quantos minutos a mais, nome por nome — e a
   lista das viagens do grupo, com link para cada uma.
5. **Agrupar em VG-…** aplica.

No rodapé, o resumo do dia: **viagens do dia · grupos sugeridos · viagens economizadas · economia
potencial (km)**.

Se nenhuma combinação atingir a pontuação mínima do município, a tela diz exatamente isso — não é erro.

## 2. Por que uma viagem entra (ou não) na sugestão

**Descartes automáticos:** tipo de viagem que não permite compartilhamento · diferença de horário acima
da janela (padrão 30 min) · passageiros + acompanhantes acima da capacidade disponível · exigência de
acessibilidade sem veículo adaptado que comporte · viagem já em execução · secretarias diferentes, quando
o município não permite compartilhar entre elas · tempo adicional de algum passageiro acima do máximo
(padrão 20 min).

**Pontuação (0–100):** proximidade dos destinos (35) · proximidade das origens (25) · compatibilidade de
horários (20) · aproveitamento de capacidade (10) · economia de quilometragem (10). Só vira sugestão
acima da pontuação mínima (padrão 55).

A sugestão **sempre mostra o custo, não só o benefício**: economizar 12 km atrasando uma paciente em 40
minutos pode não valer a pena — e essa é uma decisão humana.

## 3. Agrupar a partir de uma viagem

Na aba **Agrupamento** do detalhe (\`/viagens/:id\`), enquanto a viagem estiver em planejamento
(aguardando designação, designada ou confirmada):

- **Viagens compatíveis** lista as candidatas, com **Agrupar VG-… nesta viagem**;
- se a viagem já absorveu outras, aparece **Viagens de origem** com cada uma e o botão **Desagrupar**;
- se ela mesma foi absorvida, o aviso "Esta viagem foi agrupada e é atendida por outra" leva à principal.

O mesmo painel aparece no **passo 3 do wizard**, para agrupar já no lançamento.

## 4. O que acontece ao agrupar

1. a **viagem principal absorve os passageiros** das demais;
2. as viagens absorvidas ficam canceladas com o motivo **agrupada** e apontando para a principal —
   continuam consultáveis e rastreáveis, não somem;
3. a principal passa a ser **compartilhada**;
4. a **rota é recalculada** com todas as paradas;
5. capacidade e acessibilidade são revalidadas;
6. gera evento e auditoria em **todas** as viagens envolvidas.

**Desagrupar** reverte e restaura as viagens absorvidas — desde que a principal ainda não tenha entrado
em execução. Depois de iniciada, a composição do grupo não muda mais.

## Depois

Viagens compartilhadas alimentam dois indicadores do [painel gerencial](./16-indicadores-e-relatorios.md):
o percentual de viagens compartilhadas e a média de ocupação por veículo — que é, no fim das contas, o
que justifica o esforço de agrupar.

## Referências

- [12 — Otimização de viagens](../12-otimizacao-viagens.md)
`,"./fluxos/11-acompanhar-e-concluir-a-viagem.md":`# 11 — Acompanhar e concluir a viagem

**Quem faz:** operador e gestor acompanham; o **registro manual de etapa** é do gestor
(\`viagem.alterar-status\`). Fiscal vê tudo, sem nenhuma ação.
**Onde:** \`/viagens\`, \`/viagens/:id\`, \`/viagens/:id/editar\`, \`/viagens/historico\`.

Durante a execução, quem registra é o motorista, pelo aplicativo. O painel **observa** — e assume o
registro só em contingência.

---

## 1. A lista de viagens — \`/viagens\`

**Colunas:** código · horário previsto · status (com o selo **Atrasada** e os minutos) · origem → destino
· motorista · veículo · passageiros.

**Filtros:** período, status (vários ao mesmo tempo), e os demais filtros da tela. O que você escolhe vai
para a **URL** — a tela é compartilhável e o botão voltar desfaz o filtro.

**Duas visões**, no canto superior direito:

| Visão                     | Para quê                                                                             |
| ------------------------- | ------------------------------------------------------------------------------------ |
| **Tabela**                | o padrão                                                                             |
| **Linha do tempo do dia** | faixa horária por motorista, estilo Gantt; sem período escolhido, fixa o dia de hoje |

A linha do tempo é legível **sem depender de cor**: cada barra tem nome acessível, âncoras de hora e
legenda. As viagens em execução se atualizam sozinhas a cada poucos segundos, e o polling **pausa quando
a aba fica oculta**.

## 2. O detalhe da viagem — \`/viagens/:id\`

Cabeçalho com código, status, selo de atraso e as ações permitidas pelo estado atual. Abas:

| Aba                | Conteúdo                                                                            |
| ------------------ | ----------------------------------------------------------------------------------- |
| **Resumo**         | planejamento, designação, execução e o previsto × realizado                         |
| **Linha do tempo** | todos os eventos, com horário, **origem** (app ou painel) e usuário responsável     |
| **Mapa**           | rota planejada (linha sólida) e trajeto realizado (tracejada)                       |
| **Agrupamento**    | viagens compatíveis, viagens de origem e desagrupar ([10](./10-agrupar-viagens.md)) |
| **Passageiros**    | embarque, desembarque, ausências, acompanhantes e observações                       |
| **Ocorrências**    | as registradas nesta viagem ([15](./15-ocorrencias.md))                             |
| **Auditoria**      | tudo que mudou na viagem — só para quem tem \`auditoria.visualizar\`                  |

Aba sem dado mostra um estado vazio honesto ("nenhuma ocorrência registrada"), não uma tabela vazia.

## 3. Registrar etapa pelo painel (contingência)

Quando o app falha — sem sinal, celular descarregado —, o gestor mantém o registro:

1. No detalhe, use **Registro de etapa pelo painel (contingência)**.
2. O sistema mostra **apenas a próxima etapa esperada** (deslocamento iniciado → chegada ao embarque →
   embarque → chegada ao destino → desembarque → retorno → concluída).
3. Informe o que a etapa pedir: passageiro (nas etapas por passageiro), **passageiro ausente**,
   observações, quilometragem (no início e na conclusão) e a posição, já sugerida pelo ponto da etapa.
4. Registre.

**O que o sistema recusa:**

- etapa **fora de ordem** → mensagem com o que era esperado;
- **chegada fora da proximidade** exigida (padrão 150 m) → a mensagem traz a distância apurada;
- usuário sem \`viagem.alterar-status\` → a seção nem aparece, e a API recusa.

Todo registro feito assim fica com origem **PAINEL_WEB** e o nome do operador. A diferença entre "o
motorista registrou" e "o operador registrou pelo motorista" é exatamente o que uma auditoria quer saber.

## 4. Previsto × realizado

Ao concluir, o Resumo fecha cinco pares, na ordem que a API devolve:

| Métrica                | Comparação                                                |
| ---------------------- | --------------------------------------------------------- |
| Horário de embarque    | previsto × realizado, em minutos                          |
| Horário de desembarque | idem                                                      |
| Distância              | km e %                                                    |
| Tempo total            | minutos e %                                               |
| Rota                   | polyline planejada × trajeto GPS, com o número de desvios |

As cores saem da severidade calculada pela API — dentro da tolerância, até o dobro, acima — e a tela
não recalcula nada. A **divergência de odômetro** (km final − km inicial contra a distância por GPS)
aparece destacada quando passa de 20%: é sinal de GPS ruim ou de km digitado errado.

## 5. Editar

O que é editável depende do status:

| Status                                | O que abre                                                |
| ------------------------------------- | --------------------------------------------------------- |
| Aguardando designação                 | planejamento inteiro                                      |
| Em execução                           | planejamento **bloqueado**; observações continuam abertas |
| Concluída / cancelada / não realizada | **só observações**                                        |

O fiscal não abre a rota de edição.

## 6. Imprimir a ordem de serviço

**Ordem de serviço em PDF**, no detalhe, gera um A4 com cabeçalho do município, dados da viagem,
designação, motorista, veículo, passageiros e necessidades, observações e os campos de **assinatura do
motorista** e **do responsável**. O arquivo sai nomeado com o código da viagem.

## 7. Histórico — \`/viagens/historico\`

Traz por padrão apenas as viagens **encerradas** (concluídas, canceladas e não realizadas), com o
desfecho de cada uma. Sem período escolhido, mostra todo o histórico. É aqui que fica a **exportação**
da lista de viagens; a linha do tempo do dia não se aplica.

## Referências

- [09 — Módulo: Viagens](../09-modulo-viagens.md) §5, §6, §8 e §9
- [11 — Monitoramento e alertas](../11-modulo-monitoramento-alertas.md) §3 (regra de atraso) e §8
`,"./fluxos/12-jornada-do-motorista.md":`# 12 — Jornada do motorista (controle operacional)

**Quem faz:** o motorista abre e encerra pelo aplicativo; o painel **observa e corrige**.
**Permissões:** \`jornada.visualizar\` · \`jornada.encerrar-forcado\` e \`jornada.ajustar\` (só gestor).
**Módulo:** \`controleOperacional\`.
**Onde:** Motoristas → Jornadas abertas (\`/jornadas/abertas\`), Jornadas (\`/jornadas\`) e \`/jornadas/:id\`.

A **jornada** é o período contínuo de atividade operacional, delimitado por _iniciar atividade_ e
_encerrar atividade_. É a unidade de consolidação de tempo e distância do produto: todo relatório de
produtividade sai daqui.

> Isto é **controle operacional de atividade, não registro de ponto**. O sistema não calcula hora extra,
> banco de horas nem verba trabalhista, e não substitui o controle de frequência oficial do município.

---

## 1. O que o motorista faz (pelo aplicativo)

Enquanto o app não existe, tudo isso é exercitável pelo **Console do motorista**
([18](./18-ambiente-de-demonstracao.md)), que fala com a mesma API.

**Iniciar atividade:** motorista, veículo, **quilometragem inicial**, nível de combustível (se o
município exigir) e localização. Depois disso ele fica **Disponível**.

O sistema recusa quando: já existe jornada aberta para o motorista ou para o veículo, o motorista não
está ativo, a CNH está vencida, o veículo não está disponível, ou a quilometragem informada é menor que
a atual do veículo. Divergência grande de quilometragem **avisa** (não bloqueia) e registra ocorrência
para conferência.

**Durante a jornada**, o motorista transita por doze status:

| Status                                                                                                                      | Conta como         |
| --------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| Disponível                                                                                                                  | tempo disponível   |
| Viagem atribuída · Deslocando para embarque · Passageiro embarcado · Em deslocamento · Retornando                           | tempo em viagem    |
| Aguardando passageiro · Aguardando no destino                                                                               | tempo em espera    |
| Intervalo                                                                                                                   | tempo em intervalo |
| Indisponível (abastecimento, refeição fora do intervalo, pane, ocorrência, ordem do gestor, outro — **motivo obrigatório**) | tempo indisponível |
| Offline · Atividade encerrada                                                                                               | —                  |

A maior parte muda **sozinha** pelos eventos da viagem; intervalo, indisponibilidade e a volta para
disponível são manuais.

**Encerrar atividade:** quilometragem final, nível de combustível e localização. O sistema consolida
viagens, distância (odômetro e GPS), tempo online e os tempos por categoria.

O encerramento é **bloqueado enquanto houver viagem ativa** — a mensagem lista quais.

## 2. Monitorar quem está em atividade — \`/jornadas/abertas\`

Junto com o painel operacional, é a tela mais usada pelo monitor. A lista se atualiza sozinha a cada 10
segundos e pausa quando a aba fica oculta.

**Colunas:** motorista · veículo · início · tempo em atividade · status atual (com o tempo no status) ·
viagem atual · última localização · km na jornada · viagens · destaques.

**Destaques** (com filtro por destaque):

| Destaque                            | Quando                                        |
| ----------------------------------- | --------------------------------------------- |
| Jornada operacional acima do limite | passou de \`horasMaximasJornada\` (padrão 12 h) |
| Disponível acima do tempo previsto  | ocioso além do configurado                    |
| Intervalo acima do previsto         | intervalo longo                               |
| Sem atualização de localização      | GPS parado além do configurado                |

Ações: **ver jornada** e, para o gestor, **encerrar forçadamente**.

## 3. Encerramento forçado

Motorista esquecer de encerrar acontece todo dia. O gestor então:

1. abre a ação **Encerrar forçadamente**;
2. informa o **motivo do encerramento** (ex.: "motorista não encerrou a atividade pelo aplicativo");
3. confirma.

A jornada é marcada como **encerramento forçado**, com quem encerrou, e usa como horário de encerramento
o do **último evento registrado** — não o horário do clique. O selo aparece em todas as telas e
relatórios.

**O sistema nunca encerra jornada sozinho.** Encerramento automático produziria registro de atividade que
ninguém verificou — o oposto do propósito de fiscalização.

O fiscal não recebe esta ação.

## 4. O detalhe da jornada — \`/jornadas/:id\`

- **Cabeçalho:** motorista, veículo, início, fim (ou "em andamento"), duração, selo **Ajustada** e selo
  de encerramento forçado.
- **Totais da jornada:** tempo online, em viagem, disponível, em espera, em intervalo e indisponível;
  viagens; passageiros; km por **odômetro e GPS lado a lado**.
- **Barra de status no tempo:** faixa proporcional com a sequência do dia. Responde "o que esse motorista
  fez hoje" em dois segundos — e é legível **sem depender de cor**.
- **Linha do tempo:** cada evento com horário, status, duração, **origem**, usuário, localização e motivo.
- **Mapa:** trajeto completo da jornada.
- **Viagens** da jornada e **Ajustes** feitos nela.

## 5. Ajustar uma jornada (só gestor)

Serve para corrigir erro de digitação e falha de registro — nunca para reescrever a história.

1. Abra **Ajustar jornada** no detalhe.
2. Escolha **o que corrigir**: quilometragem inicial ou final, início ou encerramento da atividade,
   combustível no início ou no fim, ou **inserir um evento de status faltante** (com data/hora, status e
   motivo — obrigatório para "Indisponível").
3. Escreva a **justificativa** — mínimo de 20 caracteres.
4. Confirme.

**O que o sistema recusa:**

- justificativa curta;
- inserção de evento que deixaria a **sequência de status inválida**.

Nada é apagado: **eventos são imutáveis**. A correção entra como um novo registro, a trilha original
continua visível, a jornada ganha o selo **Ajustada** e tudo vai para a auditoria com valor anterior e
novo. Operador e fiscal não têm essa ação.

## 6. Histórico — \`/jornadas\`

Lista filtrável por período (com os atalhos Hoje · Ontem · Últimos 7 dias · Últimos 30 dias · Este mês ·
personalizado), motorista, veículo e secretaria, com **totais consolidados** e a situação de cada
jornada. Os filtros ficam na URL. É a base do
[relatório diário de motoristas](./16-indicadores-e-relatorios.md).

## Referências

- [10 — Controle operacional](../10-modulo-controle-operacional.md)
- [16 — App do motorista: contrato](../16-app-motorista-contrato.md)
`,"./fluxos/13-monitorar-a-operacao.md":`# 13 — Monitorar a operação

**Quem faz:** operador e gestor (o fiscal vê, mas não trata alerta).
**Permissões:** \`painel-operacional.visualizar\` · \`mapa.visualizar\` · \`alerta.visualizar|tratar\`.
**Módulo:** \`mapaTempoReal\` para o mapa.
**Onde:** \`/operacao\`, \`/mapa\`, \`/alertas\` e o sino no topo de qualquer tela.

Três telas respondem a três perguntas diferentes. Use a que corresponde à pergunta do momento.

| Tela                   | Pergunta                                        |
| ---------------------- | ----------------------------------------------- |
| **Painel operacional** | "Como está a operação agora, em números?"       |
| **Mapa da frota**      | "Onde estão os veículos e o que estão fazendo?" |
| **Central de alertas** | "O que precisa da minha atenção?"               |

Todas atualizam sozinhas, **pausam com a aba oculta** e mostram há quanto tempo foram atualizadas, com
**Atualizar agora**.

---

## 1. Painel operacional — \`/operacao\`

Tela cheia, feita para monitor de sala de controle: sem rolagem em 1920×1080.

**Quatro faixas de contadores:**

| Faixa              | Contadores                                                                                          |
| ------------------ | --------------------------------------------------------------------------------------------------- |
| **Motoristas**     | online · disponíveis · em viagem · em espera · em intervalo · offline                               |
| **Veículos**       | disponíveis · em viagem · em manutenção · indisponíveis, com o percentual da frota                  |
| **Viagens do dia** | agendadas · aguardando designação · designadas · em andamento · atrasadas · concluídas · canceladas |
| **Alertas**        | por tipo e por severidade                                                                           |

Os contadores de motorista são **clicáveis**: o clique filtra a lista abaixo.

**Três colunas:**

1. **Motoristas em atividade** — nome, status com tempo, veículo, viagem atual e última localização,
   ordenados por "precisa de atenção primeiro": com alerta → sem GPS → ocioso → demais.
2. **Em andamento e próximas 2 h** — código, horário, status, motorista, trecho e atraso.
3. **Alertas abertos** — com **Reconhecer**, **Resolver** e **Ignorar** ali mesmo.

Tratar um alerta **não tira você do painel** — sair para ver um detalhe e ter que voltar é o principal
atrito desse tipo de tela. O fiscal não recebe as ações de tratamento.

## 2. Mapa da frota — \`/mapa\`

- Um marcador por jornada aberta, **colorido pelo status operacional** do motorista, com a placa no
  rótulo; acima de 40 marcadores no viewport, o mapa **agrupa em clusters**.
- **Painel lateral** com os motoristas em atividade, busca por **motorista ou placa**, filtro por
  **secretaria** e filtro **somente com alerta**.
- Clique centraliza no veículo e abre o cartão: placa, modelo, motorista, status com tempo, viagem atual
  (ou "Sem viagem em curso"), última atualização e os atalhos **Ver viagem** e **Ver jornada**.
- **Seguir** trava o centro do mapa no veículo enquanto ele se move.
- Ao selecionar uma viagem, o mapa desenha a rota planejada e o trajeto realizado; desvios ativos
  aparecem em vermelho.

## 3. Alertas

### Sino no topbar

Mostra a contagem de alertas **abertos**, com a cor da maior severidade, e abre um popover com os cinco
mais recentes e o link para a central. Alertas críticos são **anunciados para leitores de tela**. Quem
não pode ver alertas não vê o sino.

### Central de alertas — \`/alertas\`

Traz por padrão os alertas **abertos e reconhecidos**.

- **Filtros** por severidade, tipo, status e demais critérios, refletidos na URL.
- **Agrupamento** por tipo ou por motorista — a escolha também fica na URL.
- **Ações em massa:** selecionar vários e **Reconhecer selecionados** ou **Resolver selecionados**.
- O fiscal não vê a seleção nem as ações em massa.

### O que cada ação significa

| Ação           | Significado                                                    | Exige observação                                             |
| -------------- | -------------------------------------------------------------- | ------------------------------------------------------------ |
| **Reconhecer** | "estou vendo, estou tratando" — sai do destaque, fica na lista | não                                                          |
| **Resolver**   | "tratado"                                                      | quando o município exige (\`exigirObservacaoResolucaoAlerta\`) |
| **Ignorar**    | "não se aplica"                                                | **sempre**                                                   |

Quando a condição cessa (o veículo volta à rota, a viagem é confirmada, a jornada encerra), o próprio
sistema resolve o alerta e registra a razão. E não existe alerta repetido: enquanto houver um aberto do
mesmo tipo para o mesmo contexto, o sistema **atualiza e escala a severidade** em vez de abrir outro.

### O catálogo

| Alerta                         | Abre quando                                                                                                  |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| Desvio de rota                 | o veículo sai da rota planejada além da tolerância, pelo tempo mínimo ([14](./14-tratar-desvios-de-rota.md)) |
| Motorista sem localização      | sem ping de GPS além do configurado                                                                          |
| Viagem atrasada                | passou da tolerância de atraso                                                                               |
| Veículo parado                 | parado em deslocamento, fora de ponto previsto                                                               |
| Viagem sem motorista           | embarque próximo e ainda sem designação                                                                      |
| Viagem sem confirmação         | designada há mais que o prazo de confirmação                                                                 |
| Jornada excessiva              | jornada aberta além do limite de horas                                                                       |
| Motorista online sem atividade | disponível por tempo demais                                                                                  |
| Veículo em uso sem viagem      | deslocamento por GPS sem viagem em execução                                                                  |
| Documento vencido              | CNH, licenciamento ou seguro fora da validade                                                                |

Os limites de todos eles vêm de [Configurações](./02-configurar-o-municipio.md).

## Referências

- [11 — Monitoramento e alertas](../11-modulo-monitoramento-alertas.md)
`,"./fluxos/14-tratar-desvios-de-rota.md":`# 14 — Tratar desvios de rota

**Quem faz:** gestor e operador. **Permissões:** \`desvio.visualizar\` · \`desvio.classificar\`.
**Módulo:** \`desvioRota\` — desligado, \`/desvios\` e o relatório de desvios respondem \`/404\`.
**Onde:** Fiscalização → Desvios de rota (\`/desvios\`) e a análise em \`/desvios/:id\`.

> O desvio **não produz punição automática**. Ele existe para permitir fiscalização e registro. A
> interface diz "Desvio de rota detectado" — nunca "o motorista descumpriu a rota".

---

## 1. Como o desvio é detectado

A cada posição recebida durante uma viagem em execução, o sistema mede a distância do ponto até a rota
planejada:

1. passou da **tolerância de distância** (padrão 300 m) → começa um candidato a desvio;
2. o candidato persistiu além do **tempo mínimo** (padrão 120 s) → vira desvio registrado e abre alerta;
3. enquanto durar, o sistema acumula o trecho e a **distância máxima** atingida;
4. quando o veículo volta para perto da rota por mais de um minuto, o desvio é encerrado e o alerta
   resolvido.

Esse par distância + tempo é o que evita falso positivo: um retorno de quadra passa da distância, mas não
do tempo. Em rota com várias paradas, a medição é feita contra o **trecho corrente**, não contra a rota
inteira.

## 2. A fila de trabalho — \`/desvios\`

A lista abre já filtrada em **Não classificado**, porque é essa a fila. Colunas: detectado em ·
motorista · veículo · viagem · duração · distância máxima · classificação.

Clicar na linha abre a análise.

## 3. Analisar e classificar — \`/desvios/:id\`

A tela tem três partes:

- **Mapa** — rota planejada, trajeto realizado e o **trecho do desvio destacado**, com início e fim.
- **Dados do desvio** e o contexto da viagem.
- **Histórico do motorista** — os desvios dele nos últimos 30 dias. Sem isso, não dá para distinguir um
  evento isolado de um padrão, e essa distinção é o ponto inteiro da análise.

**Classificar:**

1. Escolha a **classificação**: Justificado · Trânsito · Bloqueio de via · Atendimento emergencial ·
   Solicitação do passageiro · Erro de navegação · Não justificado · Outro.
2. Escreva a **justificativa** — **obrigatória** para _Não justificado_ e _Outro_.
3. Confirme.

O sistema grava **quem analisou e quando**, e isso passa a aparecer na lista e no relatório. Quem não tem
\`desvio.classificar\` vê a análise inteira, sem o formulário.

## 4. Depois

- O [relatório de desvios](./16-indicadores-e-relatorios.md) agrega por classificação e mostra os
  motoristas com mais desvios **não justificados** — a conversa que o gestor eventualmente precisa ter,
  com dado por trás.
- O alerta correspondente se resolve sozinho quando o veículo volta à rota.
- A classificação e qualquer alteração dela ficam na [auditoria](./17-auditoria.md).

## Referências

- [11 — Monitoramento e alertas](../11-modulo-monitoramento-alertas.md) §5
`,"./fluxos/15-ocorrencias.md":`# 15 — Registrar e tratar ocorrências

**Quem faz:** operador e gestor (o motorista também registra, pelo app).
**Permissões:** \`ocorrencia.visualizar|criar|responder\`.
**Módulo:** \`ocorrencias\` — desligado, some a tela e o cadastro de motivos.
**Onde:** Fiscalização → Ocorrências (\`/ocorrencias\`), \`/ocorrencias/:id\`, e o botão de registro no mapa,
na jornada e na viagem.

Ocorrência é o registro de um **fato relevante da operação** que não cabe em nenhum status: pane
mecânica, passageiro que não estava no local, acidente, conduta, avaria. É a memória escrita do que
aconteceu.

---

## 1. Registrar

1. Use **Registrar ocorrência** — na lista, ou a partir do contexto (viagem, jornada, veículo do mapa).
2. Escolha o **Motivo** (dos motivos cadastrados pelo município).
3. Escreva a **Descrição**.
4. Vincule, se fizer sentido, **motorista** e **veículo** (opcionais; a partir de uma viagem, o vínculo
   já vem preenchido).
5. Registre.

Quem não tem \`ocorrencia.criar\` não vê a ação.

## 2. O que o motivo decide

O motivo carrega uma **severidade sugerida**, definida no cadastro
([\`/motivos-ocorrencia\`](./02-configurar-o-municipio.md) §4):

- motivo de severidade **crítica** abre **também um alerta**, para não depender de alguém estar olhando a
  lista de ocorrências;
- motivo de severidade comum **não** abre alerta.

Ao **encerrar** a ocorrência, o alerta correspondente é fechado junto.

## 3. Acompanhar e responder

A lista mostra motivo, severidade e situação. O detalhe traz o **contexto** (viagem, jornada, motorista,
veículo, localização, data e hora) e a conversa em **Respostas**.

1. Escreva em **Nova resposta** e envie.
2. A primeira resposta move a ocorrência de **Aberta** para **Em análise**.
3. As respostas ficam encadeadas, com autor e horário — é a conversa entre operador e gestor sobre aquele
   fato.

Quem não tem \`ocorrencia.responder\` lê, mas não escreve.

## 4. Encerrar

**Encerrar ocorrência** fecha o caso. Depois disso a ocorrência **para de aceitar respostas** — o
histórico fica congelado, que é o que uma consulta futura precisa encontrar.

## 5. Onde as ocorrências aparecem

| Lugar                          | O que mostra                    |
| ------------------------------ | ------------------------------- |
| Aba **Ocorrências** da viagem  | as registradas naquela viagem   |
| Relatório diário de motoristas | contagem por jornada            |
| Central de alertas             | as críticas, como alerta aberto |

## Referências

- [11 — Monitoramento e alertas](../11-modulo-monitoramento-alertas.md) §7
`,"./fluxos/16-indicadores-e-relatorios.md":`# 16 — Indicadores e relatórios

**Quem faz:** gestor, operador e fiscal.
**Permissões:** \`relatorio.visualizar\` · \`relatorio.exportar\` · \`indicador.visualizar\`.
**Módulos:** \`relatorioGerencial\` (gerencial mensal) · \`controleOperacional\` (diário de motoristas) ·
\`desvioRota\` (relatório de desvios).
**Onde:** Operação → Painel (\`/painel\`) e o grupo **Relatórios**.

Todo indicador sai de dado **já registrado** pela operação. Nada aqui exige digitação extra — se
exigisse, não estaria na V1.

---

## 1. Painel gerencial — \`/painel\`

A tela inicial de quem tem \`painel.visualizar\`. Escolha o **período** no seletor (Hoje · Ontem · Últimos
7 dias · Últimos 30 dias · Este mês · personalizado) e, se quiser, filtre por secretaria, setor e tipo de
viagem.

**Seis KPIs**, cada um com a **variação em relação ao período anterior**:

| KPI                 | Observação                      |
| ------------------- | ------------------------------- |
| Viagens realizadas  |                                 |
| Passageiros         |                                 |
| Quilômetros         |                                 |
| Utilização da frota | com o número de veículos em uso |
| Viagens atrasadas   | aqui, subir é ruim              |
| Desvios             | idem                            |

Quando não há período anterior comparável, o cartão diz **"sem base de comparação"** em vez de inventar
uma variação.

**Gráficos e listas:** viagens por dia (com a média do período em linha tracejada) · distribuição de
tempos dos motoristas · ocupação média por veículo · motoristas por horas em atividade · veículos por
quilometragem · **destinos mais frequentes** · **bairros com maior demanda**.

## 2. Os cinco relatórios

Todos têm o mesmo desenho: filtros no topo, tabela com **totalizadores no rodapé**, escolha de colunas e
exportação.

| Relatório                                                   | Uma linha por                                      | Serve para                                                                                                                                            |
| ----------------------------------------------------------- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Diário de motoristas** — \`/relatorios/diario-motoristas\`  | jornada                                            | tempos por categoria e quilometragem pelas **duas fontes** (odômetro e GPS), com os selos **Ajustada** e **Encerrada pelo gestor**                    |
| **Viagens** — \`/relatorios/viagens\`                         | viagem do período (pela data prevista de embarque) | conferência operacional completa                                                                                                                      |
| **Utilização da frota** — \`/relatorios/utilizacao-veiculos\` | veículo utilizado                                  | taxa de utilização, comparando horas em jornada com as horas operacionais configuradas                                                                |
| **Desvios** — \`/relatorios/desvios\`                         | desvio detectado                                   | resumo por classificação e os motoristas com mais desvios não justificados                                                                            |
| **Gerencial mensal** — \`/relatorios/gerencial-mensal\`       | —                                                  | **resumo executivo**, qualidade da operação, produtividade por motorista, utilização por veículo, viagens por secretaria, top 10 destinos e **notas** |

Duas escolhas de leitura que valem explicar:

- a quilometragem aparece **sempre pelas duas fontes**, odômetro e GPS, lado a lado — divergência é
  informação, não erro a esconder;
- jornada ajustada ou encerrada pelo gestor **fica sinalizada no relatório**, para que ninguém use o
  número sem saber que ele foi corrigido à mão.

## 3. Exportar

1. Use **Exportar** e escolha o formato: **Planilha (XLSX)**, **CSV** ou **PDF**.
2. O arquivo sai nomeado por relatório e período
   (\`hbgov-fleet_<relatorio>_<AAAAMMDD>-<AAAAMMDD>.<ext>\`).
3. O cabeçalho do arquivo repete o contexto: relatório, período, município, secretaria, **emitido em** e
   **emitido por**.

A exportação acontece **no cliente**, a partir dos dados já carregados — o CSV usa ponto e vírgula e sai
com BOM, para abrir certo no Excel em português.

**Cada exportação é auditada**: qual relatório, quais filtros, quantos registros. Quem não tem
\`relatorio.exportar\` não vê o botão. O município também define um **limite de registros por exportação**
([02](./02-configurar-o-municipio.md)).

## 4. Onde cada número nasce

| Pergunta                                 | Fonte                                      |
| ---------------------------------------- | ------------------------------------------ |
| Horas em atividade, tempos por categoria | jornadas e seus eventos                    |
| Quilômetros (odômetro)                   | quilometragem final − inicial das jornadas |
| Quilômetros (GPS)                        | distância realizada das viagens            |
| Viagens, passageiros, atrasos            | viagens e seus eventos                     |
| Desvios                                  | desvios detectados e sua classificação     |

Isso significa que relatório errado quase sempre é **operação mal registrada**, não conta errada: jornada
não encerrada, etapa não registrada, km digitado torto. As telas de
[jornada](./12-jornada-do-motorista.md) e de [viagem](./11-acompanhar-e-concluir-a-viagem.md) são onde
se corrige a origem.

## Referências

- [13 — Indicadores e relatórios](../13-indicadores-relatorios.md)
`,"./fluxos/17-auditoria.md":`# 17 — Auditoria

**Quem faz:** gestor e fiscal. **Permissão:** \`auditoria.visualizar\`.
**Módulo:** \`auditoriaDetalhada\` — desligado, \`/auditoria\` responde \`/404\`.
**Onde:** Administração → Auditoria (\`/auditoria\`), \`/auditoria/:id\` e a aba **Auditoria** dos cadastros
e das viagens.

> Toda ação relevante gera registro. **Nenhum registro pode ser editado ou excluído** — por nenhum
> perfil, nem pelo administrador da plataforma.

Em administração pública, saber quem fez o quê vale tanto quanto a funcionalidade em si.

---

## 1. Consultar a trilha — \`/auditoria\`

A lista mostra, para cada registro: **usuário**, **ação** com rótulo legível, **operação**
(criação, alteração, exclusão, login, logout, exportação, ação), o **registro afetado** identificado pelo
que a pessoa reconhece (o código da viagem, não o id interno) e o horário.

Filtre por **operação**, por entidade e por período.

## 2. Ler um registro — \`/auditoria/:id\`

- **Alterações** — o _diff_: campo a campo, **valor anterior** e **valor novo**.
- **Contexto do registro** — usuário, entidade, operação, **origem** (app do motorista, painel, sistema,
  importação) e dispositivo.
- **Registro anterior** / **Próximo registro** — navegação pela história **do mesmo objeto**, que é como
  se reconstrói uma sequência de eventos ("quem mexeu nessa viagem, em que ordem").
- Um aviso explícito de que os registros são imutáveis.

A API de auditoria **só responde leitura**: não existe rota de escrita ou de exclusão.

## 3. A aba Auditoria dentro de cada tela

Motorista, veículo, passageiro e viagem têm sua própria aba **Auditoria**, com o histórico daquele
registro — normalmente é por aqui que a consulta começa, não pela lista geral.

Quem não tem permissão de auditoria não vê a aba; mesmo assim, a tela **avisa que o registro é
auditado** — a informação de que existe trilha não é sigilosa.

## 4. O que é auditado

| Área                  | Exemplos                                                                                                                                                                                 |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Viagens**           | criação, edição (com os campos alterados), designação, redesignação, troca de motorista ou veículo, cancelamento, não realização, agrupamento e desagrupamento, registro manual de etapa |
| **Jornadas**          | início, encerramento, encerramento forçado, mudança manual de status, ajuste de quilometragem ou de horário, inserção de evento faltante                                                 |
| **Desvios e alertas** | classificação, alteração da classificação, reconhecimento, resolução e descarte                                                                                                          |
| **Cadastros**         | criação, alteração e inativação de qualquer cadastro; anexo e remoção de documentos                                                                                                      |
| **Acesso**            | login, **tentativa de login malsucedida**, logout, troca e redefinição de senha, alteração de permissões e de perfil                                                                     |
| **Configuração**      | qualquer parâmetro do município, módulos e limites                                                                                                                                       |
| **Dados**             | **exportação de relatório**: qual, com quais filtros, quantos registros                                                                                                                  |

## 5. Como isso costuma ser usado

- _"Quem cancelou essa viagem e por quê?"_ → aba Auditoria da viagem.
- _"Esse km foi digitado ou corrigido depois?"_ → seção **Ajustes** da jornada + auditoria.
- _"O motorista confirmou ou o operador confirmou por ele?"_ → a **origem** do registro na linha do tempo.
- _"Quem exportou a base de passageiros no mês passado?"_ → filtro por operação **exportação**.

## Referências

- [14 — Auditoria e logs](../14-auditoria-logs.md)
`,"./fluxos/18-ambiente-de-demonstracao.md":`# 18 — Ambiente de demonstração

**Quem usa:** quem apresenta o produto e quem desenvolve.
**Onde:** \`/dev/motorista\`, \`/dev/simulador\`, \`/dev/ui\` — rotas que **só existem em desenvolvimento com a
API mockada ligada**, e nunca aparecem no menu nem na busca global.

Nesta fase o sistema roda **sem backend**: a API inteira é mockada, com dados gerados por semente fixa.
Isso é o que permite demonstrar a operação inteira — com veículos se movendo — sem depender de
infraestrutura.

---

## 1. Subir a aplicação

\`\`\`bash
pnpm install
cp apps/web/.env.example apps/web/.env
pnpm dev
\`\`\`

Entre com qualquer um dos usuários de demonstração (a tela de login mostra os atalhos); **qualquer senha
é aceita**.

## 2. Escolher o cenário

O cenário define o volume de dados semeados. Passe \`?scenario=\` na URL (a escolha fica guardada na sessão)
ou defina \`VITE_MIRAGE_SCENARIO\` no \`.env\`:

| Cenário     | O que traz                                                                                                                    |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------- |
| \`padrao\`    | 24 motoristas, 18 veículos, 140 passageiros, 400 viagens em 60 dias, 14 jornadas abertas                                      |
| \`vazio\`     | município recém-implantado: serve para demonstrar os estados vazios e o fluxo de cadastro do zero                             |
| \`dia-cheio\` | 60 motoristas, 45 veículos, 300 passageiros, 120 viagens **no dia de hoje**, 30 jornadas abertas — e liga o simulador sozinho |
| \`alertas\`   | o cenário padrão com **um alerta aberto de cada tipo**                                                                        |

**Reiniciar dados do mock**, no menu do usuário, descarta o estado salvo e semeia tudo de novo — útil
quando a demonstração "sujou" os dados.

## 3. Simulador de operação — \`/dev/simulador\`

Move os veículos das jornadas abertas sobre a rota planejada e dispara as etapas das viagens. É o que faz
o mapa, o painel operacional e os alertas ganharem vida.

- **Indicadores:** situação (Rodando/Pausado), ticks executados, jornadas em movimento e horário do
  último tick.
- **Controles:** **Pausar** / **Retomar**, **avançar um tick** e **Fator de tempo** (1×, 6×, 12×, 30×,
  60×) — o fator comprime o tempo, então uma viagem de uma hora acontece em poucos minutos.
- **Eventos forçados:** **desvio** e **atraso**, aplicados a uma viagem em execução. Se não houver
  nenhuma, o sistema avisa em vez de fingir que aconteceu.

Ligue o simulador desde o início com \`VITE_MIRAGE_SIMULADOR=true\` no \`.env\`.

Um roteiro de demonstração que funciona bem: cenário \`dia-cheio\` → \`/operacao\` no telão → forçar um
desvio → tratar o alerta pelo painel → abrir \`/desvios/:id\` e classificar.

## 4. Console do motorista — \`/dev/motorista\`

Enquanto o aplicativo do motorista não existe, este console **emula o app** contra a mesma API. Está no
menu do usuário, em desenvolvimento.

O que dá para fazer:

1. **Iniciar atividade** — escolher motorista e veículo, informar quilometragem inicial, nível de
   combustível e localização; ou **assumir uma jornada já aberta**.
2. **Mudar de status** pelo motorista — incluindo **Intervalo** e **Indisponível**, este com **motivo
   obrigatório**.
3. **Disparar os eventos da viagem** — deslocamento iniciado, chegada, embarque, chegada ao destino,
   desembarque, retorno e conclusão — registrando a localização de cada um.
4. **Registrar ocorrência**, com motivo e descrição.
5. **Encerrar atividade** — com quilometragem final e nível de combustível.

Os erros da API aparecem como o app os receberia (por exemplo, jornada que não pode ser aberta), o que
torna o console também a forma mais rápida de testar as validações do controle operacional.

O console é a **contraparte** do painel: comece uma jornada aqui, e ela aparece em
\`/jornadas/abertas\`, no mapa e no painel operacional em segundos.

## 5. Vitrine do design system — \`/dev/ui\`

Mostra tokens, cores, tipografia e os componentes base nos dois temas. Serve para conferir contraste e
consistência antes de construir uma tela nova.

## 6. Limites conhecidos desta fase

- Não há backend, banco nem persistência real: os dados vivem no navegador e são regenerados.
- Não há WebSocket — o tempo real é feito por **polling**, que pausa com a aba oculta.
- O cálculo de rota é **sintético**: distância por haversine com fator de sinuosidade e velocidade média
  por faixa. O contrato de rota é o mesmo que um serviço real de roteirização preencherá.
- O e-mail de recuperação de senha é impresso no console do navegador.
- \`/plataforma/*\` e \`/perfil\` existem como rota, com permissão e módulo respeitados, mas ainda mostram
  "Em construção".

## Referências

- [05 — API mock (MirageJS)](../05-api-mock-miragejs.md)
- [16 — App do motorista: contrato](../16-app-motorista-contrato.md)
- [18 — Monorepo e evolução](../18-monorepo-evolucao.md) (migração do mock para a API real)
`}),dl=[`Começar por aqui`,`Implantar o município`,`Operação do dia`,`Acompanhar e fiscalizar`,`Analisar e demonstrar`],fl={"00":{grupo:`Começar por aqui`,pergunta:`Como este tutorial está organizado?`},"01":{grupo:`Começar por aqui`,pergunta:`Como entro e me localizo no sistema?`},"02":{grupo:`Implantar o município`,pergunta:`Como ajusto tolerâncias, alertas e módulos?`},"03":{grupo:`Implantar o município`,pergunta:`Como cadastro secretarias, setores, unidades e centros de custo?`},"04":{grupo:`Implantar o município`,pergunta:`Como dou acesso a alguém e defino o que essa pessoa vê?`},"05":{grupo:`Implantar o município`,pergunta:`Como cadastro um motorista e libero o app?`},"06":{grupo:`Implantar o município`,pergunta:`Como cadastro um veículo e controlo a disponibilidade dele?`},"07":{grupo:`Implantar o município`,pergunta:`Como cadastro quem é transportado e para onde?`},"08":{grupo:`Operação do dia`,pergunta:`Como registro uma demanda de transporte?`},"09":{grupo:`Operação do dia`,pergunta:`Como escolho motorista e veículo para as viagens do dia?`},10:{grupo:`Operação do dia`,pergunta:`Como atendo duas demandas com um carro só?`},11:{grupo:`Operação do dia`,pergunta:`Como sigo a execução e fecho o previsto × realizado?`},12:{grupo:`Operação do dia`,pergunta:`Como controlo o tempo em atividade e corrijo registros?`},13:{grupo:`Acompanhar e fiscalizar`,pergunta:`Como está a operação agora, e o que precisa de atenção?`},14:{grupo:`Acompanhar e fiscalizar`,pergunta:`Por que o veículo saiu da rota e o que faço com isso?`},15:{grupo:`Acompanhar e fiscalizar`,pergunta:`Como registro um fato relevante da operação?`},16:{grupo:`Analisar e demonstrar`,pergunta:`Como extraio números da operação?`},17:{grupo:`Analisar e demonstrar`,pergunta:`Quem fez o quê, quando e a partir de qual valor?`},18:{grupo:`Analisar e demonstrar`,pergunta:`Como simulo uma operação viva para demonstrar o sistema?`}},pl={grupo:dl[0],pergunta:``},ml=Object.entries(ul).map(([e,t])=>{let n=e.replace(`./fluxos/`,``).replace(`.md`,``),r=n.slice(0,2);return{slug:n,numero:r,titulo:(/^#\s+(.*)$/m.exec(t)?.[1]??n).replace(/^\d+\s*—\s*/,``),conteudo:t,...fl[r]??pl}}).sort((e,t)=>e.slug.localeCompare(t.slug)),hl=e=>ml.find(t=>t.slug===e),gl=dl.map(e=>({grupo:e,fluxos:ml.filter(t=>t.grupo===e)})).filter(e=>e.fluxos.length>0),_l=e=>{let t=e.replace(/^\.\//,``).replace(/\.md(#.*)?$/,``);return ml.some(e=>e.slug===t)?`/tutorial/${t}`:null};function vl(){return(0,Z.jsx)(`nav`,{"aria-label":`Fluxos do tutorial`,className:`space-y-5`,children:gl.map(({grupo:e,fluxos:t})=>(0,Z.jsxs)(`div`,{className:`space-y-1`,children:[(0,Z.jsx)(`p`,{className:`text-muted-foreground px-2 text-xs font-semibold tracking-wide uppercase`,children:e}),(0,Z.jsx)(`ul`,{children:t.map(e=>(0,Z.jsx)(`li`,{children:(0,Z.jsxs)(s,{to:`/tutorial/${e.slug}`,className:({isActive:e})=>a(`hover:bg-muted flex gap-2 rounded-md px-2 py-1.5 text-sm`,e&&`bg-primary/10 text-primary font-medium`),children:[(0,Z.jsx)(`span`,{className:`text-muted-foreground font-mono text-xs leading-5`,children:e.numero}),(0,Z.jsx)(`span`,{className:`min-w-0`,children:e.titulo})]})},e.slug))})]},e))})}function yl(){let{slug:e}=o(),t=hl(e)??(e?void 0:ml[0]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(d,{title:`Tutorial`,breadcrumb:(0,Z.jsx)(f,{}),description:`Cada fluxo é uma tarefa completa: quem pode fazer, o passo a passo na tela e o que o sistema recusa.`}),(0,Z.jsxs)(`div`,{className:`grid gap-8 lg:grid-cols-[16rem_minmax(0,1fr)]`,children:[(0,Z.jsx)(`aside`,{className:`lg:sticky lg:top-4 lg:self-start`,children:(0,Z.jsx)(vl,{})}),t?(0,Z.jsxs)(`article`,{children:[(0,Z.jsx)(`p`,{className:`text-muted-foreground text-sm`,children:t.pergunta}),(0,Z.jsx)(ll,{nivelBase:2,resolverLink:_l,children:t.conteudo})]}):(0,Z.jsx)(u,{icon:l,title:`Fluxo não encontrado`,description:`Escolha um dos fluxos na lista ao lado.`})]})]})}export{yl as Component,yl as TutorialPage};