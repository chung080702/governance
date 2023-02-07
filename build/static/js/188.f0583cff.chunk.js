"use strict";(self.webpackChunkgovernance_interface=self.webpackChunkgovernance_interface||[]).push([[188],{2272:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(1413),r=n(5987),i=n(3195),a=n(7829),s=n(1113),l=n(6417),d=["title","titleProps","detail","ErrorIcon","errorIconProps","children"];function c(e){var t=e.title,n=e.titleProps,i=e.detail,c=e.ErrorIcon,u=e.errorIconProps,p=e.children,x=(0,r.Z)(e,d);return(0,l.jsxs)(a.Z,(0,o.Z)((0,o.Z)({textAlign:"center"},x),{},{children:[(0,l.jsx)(c,(0,o.Z)({color:"error",fontSize:"large"},u)),(0,l.jsx)(s.Z,(0,o.Z)((0,o.Z)({color:"error",variant:"subtitle2",gutterBottom:!0},n),{},{children:t})),i&&(0,l.jsx)(s.Z,{variant:"body3",color:"text.secondary",children:i}),p&&(0,l.jsx)(a.Z,{mt:1,children:p})]}))}c.defaultProps={ErrorIcon:i.Z,title:"Failed!"}},1922:function(e,t,n){n.d(t,{Z:function(){return g}});var o,r,i,a,s=n(168),l=n(7829),d=n(686),c=n(6694),u=n(6417),p=(0,d.F4)(o||(o=(0,s.Z)(["\n  0% {\n    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);\n  }\n  100% {\n    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);\n  }\n"]))),x=(0,d.F4)(r||(r=(0,s.Z)(["\n  0% {\n    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);\n  }\n  100% {\n    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);\n  }\n"]))),h=(0,d.F4)(i||(i=(0,s.Z)(["\n  0% {\n    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);\n  }\n  100% {\n    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);\n  }\n"]))),m=(0,c.Z)("div")(a||(a=(0,s.Z)(["\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n"])));function g(e){var t=e.size;return(0,u.jsxs)(l.Z,{sx:{display:"inline-block",width:t,height:t,borderRadius:"50%",perspective:800},children:[(0,u.jsx)(m,{sx:{left:"0%",top:"0%",animation:"".concat(p," 1.2s linear infinite"),borderBottom:"3px solid",borderColor:"primary.main"}}),(0,u.jsx)(m,{sx:{right:"0%",top:"0%",animation:"".concat(x," 1.2s linear infinite"),borderRight:"3px solid",borderColor:"primary.main"}}),(0,u.jsx)(m,{sx:{right:"0%",bottom:"0%",animation:"".concat(h," 1.2s linear infinite"),borderTop:"3px solid",borderColor:"primary.main"}})]})}g.defaultProps={size:64}},5489:function(e,t,n){n.d(t,{Z:function(){return d}});var o=n(1413),r=n(5987),i=n(4193),a=n(5281),s=n(6417),l=["children","sx","loadingProps","loading","size","iconOnly"];function d(e){var t=e.children,n=e.sx,d=e.loadingProps,c=e.loading,u=e.size,p=e.iconOnly,x=(0,r.Z)(e,l);return(0,s.jsx)(i.Z,(0,o.Z)((0,o.Z)({sx:(0,o.Z)((0,o.Z)((0,o.Z)({},n),c?{height:"small"===u?25.23:"large"===u?37.58:32}:{}),p?{"& .MuiButton-startIcon, & .MuiButton-startIcon":{margin:0}}:{}),size:u},x),{},{children:c?(0,s.jsx)(a.Z,(0,o.Z)({size:14,color:"inherit"},d)):!p&&t}))}},9188:function(e,t,n){n.r(t),n.d(t,{default:function(){return pe}});var o=n(7829),r=n(4193),i=n(9019),a=n(4750),s=n(6417),l=(0,a.Z)((0,s.jsx)("path",{d:"M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"}),"Reply"),d=n(4813),c=n(1113),u=n(2037),p=n(7592),x=(0,p.ZP)("div")((function(e){var t=e.theme;return{"& .content-text":{textAlign:"justify",color:t.palette.text.secondary},"& .content-img":{width:"100%",maxWidth:"750px",maxHeight:"550px",display:"block",margin:"0 auto",objectFit:"contain"},"& .content-hyperlink":{color:t.palette.primary.main}}}));function h(){var e=(0,u.i)().data.proposalContent,t=(0,d.Z)("(max-width:1440px)");return(0,s.jsxs)(o.Z,{sx:{bgcolor:"background.paper",p:2,borderRadius:"12px"},children:[(0,s.jsxs)(i.ZP,{container:!0,sx:{mt:-1,mb:1,flexDirection:t?"column-reverse":"row"},rowSpacing:2,children:[(0,s.jsx)(i.ZP,{item:!0,xs:12,xl:7,sx:{display:"flex",alignItems:"center"},children:(0,s.jsx)(c.Z,{variant:"h3",color:"text.primary",children:(null===e||void 0===e?void 0:e.tittle)||"No title"})}),(0,s.jsx)(i.ZP,{item:!0,xs:12,xl:5,sx:{display:"flex",justifyContent:"end"},children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap",maxWidth:"400px",width:"100%"}})})]}),(0,s.jsx)(c.Z,{color:"text.disabled",children:(0,s.jsxs)("i",{children:["Author - ",(null===e||void 0===e?void 0:e.daoManager)||""]})}),(0,s.jsx)(c.Z,{sx:{mb:3},color:"text.disabled",children:(0,s.jsxs)("i",{children:["Public key - ",(null===e||void 0===e?void 0:e.publicKey)||""]})}),(0,s.jsx)(x,{className:"detail-news__content",dangerouslySetInnerHTML:{__html:(null===e||void 0===e?void 0:e.content)||""}})]})}var m=n(1413),g=n(885),v=n(7313),f=n(1691),b=(0,a.Z)((0,s.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"}),"AccountCircleOutlined"),Z=(0,a.Z)((0,s.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v2h-2zm1.61-9.96c-2.06-.3-3.88.97-4.43 2.79-.18.58.26 1.17.87 1.17h.2c.41 0 .74-.29.88-.67.32-.89 1.27-1.5 2.3-1.28.95.2 1.65 1.13 1.57 2.1-.1 1.34-1.62 1.63-2.45 2.88 0 .01-.01.01-.01.02-.01.02-.02.03-.03.05-.09.15-.18.32-.25.5-.01.03-.03.05-.04.08-.01.02-.01.04-.02.07-.12.34-.2.75-.2 1.25h2c0-.42.11-.77.28-1.07.02-.03.03-.06.05-.09.08-.14.18-.27.28-.39.01-.01.02-.03.03-.04.1-.12.21-.23.33-.34.96-.91 2.26-1.65 1.99-3.56-.24-1.74-1.61-3.21-3.35-3.47z"}),"HelpOutlineRounded"),j=n(5861),y=n(7757),w=n.n(y),C=n(6149),P=n(3604),k=n(6467),R=n(137),z=n.n(R),I=n(5489),S=n(1802),F=n(4550),W=n(3972);function _(e){var t=(0,W.ZP)(),n=t.notifyError,r=t.notifySuccess,a=(0,u.i)().fetch,l=((0,F.ej)(!0),(0,F.hC)(!0)),d=(0,v.useState)(!1),c=(0,g.Z)(d,2),p=c[0],x=c[1],h=(0,S.Z)().address;function m(e,t){return f.apply(this,arguments)}function f(){return(f=(0,j.Z)(w().mark((function t(o,i){var s,d,c,u,p,m,g,v,f,b,Z,j;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(x(!0),t.prev=1,h&&l){t.next=5;break}throw console.log(h,l),new Error("Wallet connection error");case 5:return s=BigInt(Math.floor(1e6*Math.random())),d=BigInt(Math.floor(1e6*Math.random())),c=BigInt(Math.floor(1e6*Math.random())),u=window.location.origin+"/governance",console.log(window.snarkjs),t.next=12,window.snarkjs.groth16.fullProve({xFake:e.votingPower,sign:i,X:e.votingPower,r:s,g:7907,h:7867,D:e.pubKey,kX:d,kR:c},u+"/vote.wasm",u+"/vote.zkey");case 12:return p=t.sent,m=p.proof,g=p.publicSignals,t.next=17,window.snarkjs.groth16.exportSolidityCallData(m,g);case 17:return v=t.sent.toString().split(",").map((function(e){return e=(e=(e=e.replaceAll("[","")).replaceAll("]","")).replaceAll('"',"")})),f=v.slice(0,2).map((function(e){return BigInt(e)})),b=[v.slice(2,4).map((function(e){return BigInt(e)})),v.slice(4,6).map((function(e){return BigInt(e)}))],Z=v.slice(6,8).map((function(e){return BigInt(e)})),j=v.slice(8,v.length).map((function(e){return BigInt(e)})),t.next=24,l.votePoll(f,b,Z,o,j[0],{gammaX:j[1],deltaX:j[2],gammaR:j[3],deltaR:j[4]},[]);case 24:return t.next=26,t.sent.wait();case 26:r("Vote successfully"),a(e.idPropsal),t.next=34;break;case 30:t.prev=30,t.t0=t.catch(1),console.log(t.t0),n("Vote fail! "+t.t0.message);case 34:x(!1);case 35:case"end":return t.stop()}}),t,null,[[1,30]])})))).apply(this,arguments)}var b=function(){e.closeModal()};function Z(){return(Z=(0,j.Z)(w().mark((function t(){return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("For"!=e.data){t.next=5;break}return t.next=3,m(e.idPropsal,1);case 3:t.next=7;break;case 5:return t.next=7,m(e.idPropsal,0);case 7:b();case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return(0,s.jsxs)(C.Z,{open:e.open,onClose:p?function(){}:b,fullWidth:!0,maxWidth:"xs",children:[(0,s.jsx)(P.Z,{style:{fontWeight:700},children:"Confirm to cast this vote"}),(0,s.jsxs)(k.Z,{sx:{position:"relative"},children:[(0,s.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"space-between",mt:2},children:[(0,s.jsx)("span",{children:"Checkpoint"}),(0,s.jsx)("span",{children:(0,s.jsx)(z(),{date:Date.now(),format:"MMMM Do yyyy, hh:mm A"})})]}),(0,s.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"space-between",mt:2},children:[(0,s.jsx)("span",{children:"Voting Power"}),(0,s.jsx)("span",{children:e.votingPower})]}),(0,s.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"space-between",mt:2},children:[(0,s.jsx)("span",{children:"Option"}),(0,s.jsx)("span",{style:{fontWeight:"bold",color:"For"===e.data?"#03BD9D":"#F06542"},children:e.data})]}),(0,s.jsx)("br",{}),(0,s.jsxs)(i.ZP,{container:!0,spacing:2,children:[(0,s.jsx)(i.ZP,{item:!0,xs:6,children:(0,s.jsx)(I.Z,{loading:p,disabled:p,variant:"contained",color:"secondary",fullWidth:!0,onClick:b,children:"Cancel"})}),(0,s.jsx)(i.ZP,{item:!0,xs:6,children:(0,s.jsx)(I.Z,{loading:p,disabled:p,variant:"contained",color:"primary",fullWidth:!0,onClick:function(){return Z.apply(this,arguments)},children:"Confirm"})})]})]})]})}var M=n(4846),V=n(7958),N=n(7292),B=n(1922),A=n(1114),E=n(2272),D=n(8303);function T(e){var t,n,a,l,d,p,x,h,j,y,w,C,P,k=(0,S.Z)(),R=k.address,I=k.activating,F=(0,v.useState)({open:!1,data:"For"}),W=(0,g.Z)(F,2),T=W[0],H=W[1],L=(0,u.i)(),O=L.data,X=L.statusCallContract,G=L.error,U=L.fetch;function Y(e){H((function(t){return(0,m.Z)((0,m.Z)({},t),{},{open:!0,data:e})}))}return(0,s.jsxs)(o.Z,{sx:{bgcolor:"background.paper",p:2,borderRadius:"12px"},children:[(0,s.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,s.jsx)(c.Z,{variant:"h5",color:"text.primary",children:"Your Information"}),(0,s.jsxs)(o.Z,{sx:{display:R?"flex":"none",alignItems:"center",cursor:"pointer"},children:[(0,s.jsx)(D.rU,{to:"/profile/"+R,children:(0,s.jsx)(c.Z,{variant:"h5",color:"primary.main",sx:{textDecoration:"underline"},children:"Profile"})}),(0,s.jsx)(b,{color:"primary",sx:{ml:1,fontSize:"23px"}})]})]}),R?(0,s.jsxs)(s.Fragment,{children:[(X===N._u.IDLE||X===N._u.FETCHING||I||X===N._u.UPDATING)&&(0,s.jsxs)(o.Z,{textAlign:"center",py:4,children:[(0,s.jsx)(B.Z,{size:50}),(0,s.jsx)(c.Z,{color:"text.secondary",children:"Please wait a moment..."})]}),X===N._u.FAILED&&(0,s.jsx)(E.Z,{title:"Failed to fetch data",detail:(0,A.e$)(G),children:(0,s.jsx)(r.Z,{variant:"contained",color:"primary",sx:{px:3},onClick:function(){return U(e.idProposal)},children:"Reload"})}),X===N._u.SUCCESS&&(0,s.jsxs)(s.Fragment,{children:[null!==(t=O.userInfor)&&void 0!==t&&t.hasVoted?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.Z,{sx:{mt:2,display:"flex",justifyContent:"space-between"},children:[(0,s.jsx)(c.Z,{color:"secondary.light",children:"Voting Power"}),(0,s.jsx)(f.Z,{title:Number(null===(n=O.userInfor)||void 0===n?void 0:n.votePowers).toFixed(2),arrow:!0,placement:"left",children:(0,s.jsx)(c.Z,{color:"text.secondary",component:"span",children:(0,V.JP)(Number((null===(a=O.userInfor)||void 0===a?void 0:a.votePowers)||0),2)})})]}),(0,s.jsxs)(o.Z,{sx:{mt:2,display:"flex",justifyContent:"space-between"},children:[(0,s.jsx)(c.Z,{color:"secondary.light",children:"Encrypted Vote"}),(0,s.jsx)(c.Z,{color:"text.secondary",component:"span",children:null===(l=O.userInfor)||void 0===l?void 0:l.encryptedVote})]}),(0,s.jsxs)(o.Z,{sx:{mt:2,display:"flex",justifyContent:"space-between"},children:[(0,s.jsx)(c.Z,{color:"secondary.light",children:"Voted At"}),(0,s.jsx)(c.Z,{color:"text.secondary",children:(0,s.jsx)(z(),{date:new Date(Number((null===(d=O.userInfor)||void 0===d?void 0:d.timeStamp)+"000"||0)),format:"MMMM D yyyy, hh:mm A"})})]})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.Z,{sx:{mt:2,display:"flex",justifyContent:"space-between"},children:[(0,s.jsx)(c.Z,{color:"secondary.light",children:"Voting Power"}),(0,s.jsx)(f.Z,{title:Number(null===(p=O.userInfor)||void 0===p?void 0:p.votePowers).toFixed(2),arrow:!0,placement:"left",children:(0,s.jsx)(c.Z,{color:"text.secondary",component:"span",children:(0,V.JP)(Number((null===(x=O.userInfor)||void 0===x?void 0:x.votePowers)||0),2)})})]}),(0,s.jsxs)(i.ZP,{container:!0,spacing:2,style:{marginTop:"0px"},children:[(0,s.jsx)(i.ZP,{item:!0,xs:6,children:(0,s.jsx)(r.Z,{disabled:1!=Number(null===(h=O.proposalContent)||void 0===h?void 0:h.status)||0==Number(null===(j=O.userInfor)||void 0===j?void 0:j.votePowers),variant:"contained",sx:{bgcolor:"success.main",width:"100%",":hover":{bgcolor:"success.dark"}},onClick:function(){return Y("For")},children:"For"})}),(0,s.jsx)(i.ZP,{item:!0,xs:6,children:(0,s.jsx)(r.Z,{disabled:1!=Number(null===(y=O.proposalContent)||void 0===y?void 0:y.status)||0==Number(null===(w=O.userInfor)||void 0===w?void 0:w.votePowers),variant:"contained",sx:{width:"100%",bgcolor:"#B39DDB",":hover":{bgcolor:"#9378c3"}},onClick:function(){return Y("Against")},children:"Against"})})]})]}),(0,s.jsxs)(c.Z,{color:"text.secondary",sx:{mt:2,display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,s.jsx)("i",{children:"How to increase voting power?"}),(0,s.jsx)(Z,{sx:{marginLeft:1}})]}),(0,s.jsx)(_,{open:T.open,data:T.data,votingPower:null===(C=O.userInfor)||void 0===C?void 0:C.votePowers,idPropsal:e.idProposal,pubKey:null===(P=O.proposalContent)||void 0===P?void 0:P.publicKey,closeModal:function(){H((function(e){return(0,m.Z)((0,m.Z)({},e),{},{open:!1})}))}})]})]}):(0,s.jsxs)(o.Z,{textAlign:"center",py:3,children:[(0,s.jsx)(M.Z,{fontSize:"large",color:"secondary"}),(0,s.jsx)(c.Z,{color:"secondary",children:"Please connect your wallet!"})]})]})}var H=n(6355),L=n(4737),O=n(4942),X=(0,a.Z)((0,s.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}),"CloseOutlined"),G=n(3366),U=n(7462),Y=n(3061),K=n(317),q=n(7551),J=n(1615),$=n(5469),Q=n(2131);function ee(e){return(0,Q.Z)("MuiButtonGroup",e)}var te=(0,n(655).Z)("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary"]),ne=n(1826),oe=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],re=(0,p.ZP)("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,O.Z)({},"& .".concat(te.grouped),t.grouped),(0,O.Z)({},"& .".concat(te.grouped),t["grouped".concat((0,J.Z)(n.orientation))]),(0,O.Z)({},"& .".concat(te.grouped),t["grouped".concat((0,J.Z)(n.variant))]),(0,O.Z)({},"& .".concat(te.grouped),t["grouped".concat((0,J.Z)(n.variant)).concat((0,J.Z)(n.orientation))]),(0,O.Z)({},"& .".concat(te.grouped),t["grouped".concat((0,J.Z)(n.variant)).concat((0,J.Z)(n.color))]),t.root,t[n.variant],!0===n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth,"vertical"===n.orientation&&t.vertical]}})((function(e){var t=e.theme,n=e.ownerState;return(0,U.Z)({display:"inline-flex",borderRadius:t.shape.borderRadius},"contained"===n.variant&&{boxShadow:t.shadows[2]},n.disableElevation&&{boxShadow:"none"},n.fullWidth&&{width:"100%"},"vertical"===n.orientation&&{flexDirection:"column"},(0,O.Z)({},"& .".concat(te.grouped),(0,U.Z)({minWidth:40,"&:not(:first-of-type)":(0,U.Z)({},"horizontal"===n.orientation&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},"vertical"===n.orientation&&{borderTopRightRadius:0,borderTopLeftRadius:0},"outlined"===n.variant&&"horizontal"===n.orientation&&{marginLeft:-1},"outlined"===n.variant&&"vertical"===n.orientation&&{marginTop:-1}),"&:not(:last-of-type)":(0,U.Z)({},"horizontal"===n.orientation&&{borderTopRightRadius:0,borderBottomRightRadius:0},"vertical"===n.orientation&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},"text"===n.variant&&"horizontal"===n.orientation&&{borderRight:"1px solid ".concat("light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"text"===n.variant&&"vertical"===n.orientation&&{borderBottom:"1px solid ".concat("light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"text"===n.variant&&"inherit"!==n.color&&{borderColor:(0,q.Fq)(t.palette[n.color].main,.5)},"outlined"===n.variant&&"horizontal"===n.orientation&&{borderRightColor:"transparent"},"outlined"===n.variant&&"vertical"===n.orientation&&{borderBottomColor:"transparent"},"contained"===n.variant&&"horizontal"===n.orientation&&(0,O.Z)({borderRight:"1px solid ".concat(t.palette.grey[400])},"&.".concat(te.disabled),{borderRight:"1px solid ".concat(t.palette.action.disabled)}),"contained"===n.variant&&"vertical"===n.orientation&&(0,O.Z)({borderBottom:"1px solid ".concat(t.palette.grey[400])},"&.".concat(te.disabled),{borderBottom:"1px solid ".concat(t.palette.action.disabled)}),"contained"===n.variant&&"inherit"!==n.color&&{borderColor:t.palette[n.color].dark},{"&:hover":(0,U.Z)({},"outlined"===n.variant&&"horizontal"===n.orientation&&{borderRightColor:"currentColor"},"outlined"===n.variant&&"vertical"===n.orientation&&{borderBottomColor:"currentColor"})}),"&:hover":(0,U.Z)({},"contained"===n.variant&&{boxShadow:"none"})},"contained"===n.variant&&{boxShadow:"none"})))})),ie=v.forwardRef((function(e,t){var n=(0,$.Z)({props:e,name:"MuiButtonGroup"}),o=n.children,r=n.className,i=n.color,a=void 0===i?"primary":i,l=n.component,d=void 0===l?"div":l,c=n.disabled,u=void 0!==c&&c,p=n.disableElevation,x=void 0!==p&&p,h=n.disableFocusRipple,m=void 0!==h&&h,g=n.disableRipple,f=void 0!==g&&g,b=n.fullWidth,Z=void 0!==b&&b,j=n.orientation,y=void 0===j?"horizontal":j,w=n.size,C=void 0===w?"medium":w,P=n.variant,k=void 0===P?"outlined":P,R=(0,G.Z)(n,oe),z=(0,U.Z)({},n,{color:a,component:d,disabled:u,disableElevation:x,disableFocusRipple:m,disableRipple:f,fullWidth:Z,orientation:y,size:C,variant:k}),I=function(e){var t=e.classes,n=e.color,o=e.disabled,r=e.disableElevation,i=e.fullWidth,a=e.orientation,s=e.variant,l={root:["root",s,"vertical"===a&&"vertical",i&&"fullWidth",r&&"disableElevation"],grouped:["grouped","grouped".concat((0,J.Z)(a)),"grouped".concat((0,J.Z)(s)),"grouped".concat((0,J.Z)(s)).concat((0,J.Z)(a)),"grouped".concat((0,J.Z)(s)).concat((0,J.Z)(n)),o&&"disabled"]};return(0,K.Z)(l,ee,t)}(z),S=v.useMemo((function(){return{className:I.grouped,color:a,disabled:u,disableElevation:x,disableFocusRipple:m,disableRipple:f,fullWidth:Z,size:C,variant:k}}),[a,u,x,m,f,Z,C,k,I.grouped]);return(0,s.jsx)(re,(0,U.Z)({as:d,role:"group",className:(0,Y.Z)(I.root,r),ref:t,ownerState:z},R,{children:(0,s.jsx)(ne.Z.Provider,{value:S,children:o})}))}));function ae(e){var t,n,a,l,d=(0,v.useState)("For"),p=(0,g.Z)(d,2),x=p[0],h=p[1],m=(0,u.i)().data,f=function(){e.closeModal()};return console.log(m.listVoting),(0,s.jsxs)(C.Z,{open:e.open,onClose:f,fullWidth:!0,maxWidth:"sm",children:[(0,s.jsxs)(P.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,s.jsx)(c.Z,{variant:"h5",color:"primary.main",children:"List voting"}),(0,s.jsx)(X,{sx:{fontSize:"25px",cursor:"pointer",color:"secondary.main"},onClick:f})]}),(0,s.jsxs)(k.Z,{children:[(0,s.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,s.jsxs)(ie,{sx:{bgcolor:"background.default",height:{xs:"26px",xsm:"36px!important"}},disableElevation:!0,children:[(0,s.jsx)(r.Z,{onClick:function(){return h("For")},variant:"For"==x?"contained":"text",sx:{minWidth:{xs:"22px",xsm:"88px!important"}},color:"For"==x?"primary":"inherit",children:"For"}),(0,s.jsx)(r.Z,{onClick:function(){return h("Against")},variant:"Against"==x?"contained":"text",sx:{minWidth:{xs:"22px",xsm:"88px!important"}},color:"Against"==x?"primary":"inherit",children:"Against"})]}),(0,s.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(c.Z,{component:"div",color:"text.secondary",sx:function(e){return(0,O.Z)({},e.breakpoints.down("xsm"),{fontSize:"smaller"})},children:"Addresses"}),(0,s.jsx)(c.Z,{component:"div",sx:{width:{xs:"30px",xsm:"50px!important"},height:"100%",display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"secondary.dark",borderRadius:"6px",fontWeight:"bold",ml:1},children:(null===(t=m.listVoting)||void 0===t||null===(n=t.filter((function(e){return e.encyptedVote==x})))||void 0===n?void 0:n.length)||0})]})]}),(0,s.jsx)(o.Z,{sx:{mt:3},children:(0,s.jsxs)(i.ZP,{container:!0,spacing:2,children:[(0,s.jsxs)(i.ZP,{item:!0,xs:8,children:[(0,s.jsx)(c.Z,{component:"span",sx:function(e){return(0,O.Z)({fontWeight:"bold",display:"inline-block",minWidth:"42px"},e.breakpoints.down("xsm"),{fontSize:"smaller"})},children:"No."}),(0,s.jsx)(c.Z,{component:"span",sx:function(e){return(0,O.Z)({fontWeight:"bold"},e.breakpoints.down("xsm"),{fontSize:"smaller"})},children:"Wallet Address"})]}),(0,s.jsx)(i.ZP,{item:!0,xs:4,children:(0,s.jsx)(c.Z,{sx:function(e){return(0,O.Z)({fontWeight:"bold",textAlign:"right",pr:1,whiteSpace:"nowrap"},e.breakpoints.down("xsm"),{fontSize:"smaller"})},children:"Encrypted Vote"})})]})}),(0,s.jsx)(o.Z,{sx:{mt:1,maxHeight:"332px",overflow:"auto",minHeight:"332px","::-webkit-scrollbar":{width:"6px"},"::-webkit-scrollbar-track":{bgcolor:"primary.light"},"::-webkit-scrollbar-thumb":{bgcolor:"primary.dark",borderRadius:"5px"}},children:null===(a=m.listVoting)||void 0===a||null===(l=a.filter((function(e){return e.hasVoted})))||void 0===l?void 0:l.map((function(e,t){return(0,s.jsxs)(i.ZP,{container:!0,sx:function(e){return{mt:2,cursor:"pointer",":hover":{color:e.palette.primary.main}}},children:[(0,s.jsxs)(i.ZP,{item:!0,xs:8,sx:{display:"flex",alignItems:"center"},children:[(0,s.jsxs)(c.Z,{component:"span",sx:{display:"inline-block",width:"42px"},children:[("0"+(t+1)).slice(-2),"."]}),(0,s.jsx)(D.rU,{to:"/profile/"+e.address,style:{color:"unset",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"calc(100% - 42px)",textDecoration:"none"},children:(0,s.jsx)(c.Z,{component:"span",sx:{},children:e.address})})]}),(0,s.jsx)(i.ZP,{item:!0,xs:4,children:(0,s.jsx)(c.Z,{sx:{textAlign:"right",pr:1},children:e.encyptedVote.slice(0,20)+"..."})})]},"listVoteRes"+e.address+t)}))})]})]})}var se=(0,p.ZP)(o.Z)((function(e){var t=e.theme;return{"& .status_voting_result":{display:"flex",alignItems:"center",textTransform:"capitalize","& .status_dot":{marginRight:"5px",display:"block",width:"7px",height:"7px",borderRadius:"50%"},"&.active":{color:t.palette.success.main,"& .status_dot":{background:t.palette.success.main}},"&.executed, &.queued, &.succeeded":{color:t.palette.info.main,"& .status_dot":{background:t.palette.info.main}},"&.defeated":{color:t.palette.error.main,"& .status_dot":{background:t.palette.error.main}},"&.pending":{color:t.palette.warning.main,"& .status_dot":{background:t.palette.warning.main}},"&.expired, &.canceled, &.cancelled":{color:"rgba(145, 154, 168, 1)","& .status_dot":{background:"rgba(145, 154, 168, 1)"}}},".flex_justify_between":{display:"flex",justifyContent:"space-between"},"& .process":{maxWidth:"150px",height:"6px",background:t.palette.info.light,flexGrow:"1",marginLeft:"8px",position:"relative",borderRadius:"10px","& .process_value":{position:"relative",top:0,left:0,display:"block",height:"100%",background:t.palette.primary.main,borderRadius:"10px"}}}})),le=["pending","active","executed","canceled","queued"];function de(){var e,t,n,r,i,a,l,d,p=(0,u.i)(),x=p.data,h=p.statusCallContract,m=p.error,b=(0,S.Z)().activating,Z=(0,v.useState)({open:!1}),j=(0,g.Z)(Z,2),y=j[0],w=j[1];return(0,s.jsxs)(se,{sx:{bgcolor:"background.paper",p:2,borderRadius:"12px"},children:[(0,s.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,s.jsx)(c.Z,{variant:"h5",color:"text.primary",children:"Voting Result"}),(0,s.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",cursor:"pointer"},onClick:function(){w({open:!0})},children:[(0,s.jsx)(c.Z,{variant:"h5",color:"primary.main",sx:{textDecoration:"underline"},children:"Details"}),(0,s.jsx)(H.Id,{sx:{ml:1}})]})]}),(0,s.jsx)("br",{}),(h===N._u.IDLE||h===N._u.FETCHING||b||h===N._u.UPDATING)&&(0,s.jsxs)(o.Z,{textAlign:"center",py:4,children:[(0,s.jsx)(B.Z,{size:50}),(0,s.jsx)(c.Z,{color:"text.secondary",children:"Please wait a moment..."})]}),h===N._u.FAILED&&(0,s.jsx)(E.Z,{title:"Failed to fetch data",detail:(0,A.e$)(m)}),h===N._u.SUCCESS&&(0,s.jsxs)(s.Fragment,{children:[2==(null===(e=x.proposalContent)||void 0===e?void 0:e.status)&&(null===(t=x.proposalContent)||void 0===t?void 0:t.numberVote)>=0&&(0,s.jsx)(L.Z,{type:"For",valuePercentage:Number(x.proposalContent.numberVote)/1e5,valueCount:Number(x.proposalContent.numberVote),style:{maxWidth:"unset"}}),2==(null===(n=x.proposalContent)||void 0===n?void 0:n.status)&&(null===(r=x.proposalContent)||void 0===r?void 0:r.numberVote)<0&&(0,s.jsx)(L.Z,{type:"Against",valuePercentage:-Number(x.proposalContent.numberVote)/1e5,valueCount:-Number(x.proposalContent.numberVote),style:{maxWidth:"unset"}}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{className:"flex_justify_between",children:[(0,s.jsx)(c.Z,{color:"secondary.light",children:"Status"}),(0,s.jsxs)("span",{className:"status_voting_result ".concat(le[Number(null===(i=x.proposalContent)||void 0===i?void 0:i.status)]),children:[(0,s.jsx)("span",{className:"status_dot"})," ",le[Number(null===(a=x.proposalContent)||void 0===a?void 0:a.status)]||"Unknow"]})]}),(0,s.jsxs)(o.Z,{className:"flex_justify_between",sx:{mt:2},children:[(0,s.jsx)(c.Z,{color:"secondary.light",children:"Encypted votes"}),(0,s.jsx)(f.Z,{title:Number(null===(l=x.proposalContent)||void 0===l?void 0:l.encryptedVote).toFixed(2),arrow:!0,placement:"left",children:(0,s.jsx)("span",{children:(null===(d=x.proposalContent)||void 0===d?void 0:d.encryptedVote.slice(0,20))+"..."})})]})]}),(0,s.jsx)(ae,{open:y.open,closeModal:function(){w({open:!1})}})]})}var ce=n(3830);function ue(e){var t=(0,u.i)().fetch,n=(0,S.Z)(),o=n.address,r=n.chain;return(0,v.useEffect)((function(){t(e.idProposal)}),[o,r]),(0,s.jsx)("div",{})}function pe(){var e=(0,ce.UO)().idProposal;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ue,{idProposal:e}),(0,s.jsxs)(o.Z,{sx:{maxWidth:{xs:"541px",lg:"unset"},margin:"0 auto"},children:[(0,s.jsx)(o.Z,{children:(0,s.jsx)(D.OL,{to:"/vote",style:{textDecoration:"none"},children:(0,s.jsxs)(r.Z,{variant:"contained",sx:{bgcolor:"secondary.dark",color:"text.primary",":hover":{bgcolor:"primary.light"}},children:[(0,s.jsx)(l,{sx:{mr:1,width:"21px"}})," Back"]})})}),(0,s.jsxs)(i.ZP,{container:!0,spacing:2,sx:{mt:0},children:[(0,s.jsx)(i.ZP,{item:!0,xs:12,lg:8,children:(0,s.jsx)(h,{})}),(0,s.jsxs)(i.ZP,{item:!0,xs:12,lg:4,children:[(0,s.jsx)(T,{idProposal:e}),(0,s.jsx)("br",{}),(0,s.jsx)(de,{}),(0,s.jsx)("br",{})]})]})]})]})}},4737:function(e,t,n){n.d(t,{Z:function(){return l}});n(7313);var o=n(1691),r=n(4942),i=(0,n(7592).ZP)("div")((function(e){var t=e.theme;return(0,r.Z)({width:"100%",maxWidth:"405px",color:t.palette.text.secondary,marginLeft:"auto","& .stick_bg":{background:"light"==t.palette.mode?"rgba(230, 235, 244, 1)":"#293F59",borderRadius:"10px",height:"10px",position:"relative","& .stick_value":{position:"relative",height:"100%",borderRadius:"10px",display:"block"}}},t.breakpoints.down("md"),{maxWidth:"unset"})})),a=n(7958),s=n(6417);function l(e){return(0,s.jsxs)(i,{sx:e.sx,style:e.style,children:[(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"3px"},children:[(0,s.jsxs)("span",{children:[(0,s.jsx)("span",{style:{marginRight:"18px",display:"inline-block",width:"55px"},children:e.type}),(0,s.jsx)(o.Z,{title:e.valueCount.toFixed(2),arrow:!0,placement:"right",children:(0,s.jsx)("span",{style:{fontWeight:"bold"},children:(0,a.JP)(Math.round(e.valueCount||0),2)})})]}),(0,s.jsxs)("span",{children:[Math.round(100*e.valuePercentage),"%"]})]}),(0,s.jsx)("div",{className:"stick_bg",children:(0,s.jsx)("span",{className:"stick_value",style:{width:"".concat(100*e.valuePercentage,"%"),background:"For"==e.type?"rgba(104, 221, 201, 1)":"rgba(179, 157, 219, 1)"}})})]})}},4846:function(e,t,n){var o=n(2398);t.Z=void 0;var r=o(n(5045)),i=n(6417),a=(0,r.default)((0,i.jsx)("path",{d:"M1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm18-7H5v1.63c3.96 1.28 7.09 4.41 8.37 8.37H19V7zM1 10v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11zm20-7H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CastConnected");t.Z=a}}]);