(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,n){e.exports=n(283)},130:function(e,t,n){},131:function(e,t,n){},283:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(16),s=n.n(l),o=(n(130),n(49)),c=n(50),i=n(54),u=n(51),m=n(55),d=(n(131),n(108)),p=n.n(d),h=n(109),E=n.n(h),b=n(56),g=n.n(b),f=n(110),v=n.n(f),k=n(21),C=n.n(k),y=n(32),w=n.n(y),x=n(33),I=n.n(x),S=n(52),j=n.n(S),D=n(111),O=n.n(D),N=function(e){var t=e.loading,n=e.data,a=e.cancelDebt;return t?"loading debts":r.a.createElement(w.a,null,r.a.createElement(p.a,null,r.a.createElement(E.a,null,n.map(function(e){return r.a.createElement(v.a,{key:e.debtee},r.a.createElement(g.a,{component:"th",scope:"row"},e.debteeName),r.a.createElement(g.a,{component:"th",scope:"row",align:"center",style:{color:e.amount>0?I.a[500]:j.a[500]}},e.amount),r.a.createElement(g.a,{padding:"dense",align:"right"},r.a.createElement(C.a,{"aria-label":"Delete",onClick:function(){return a(e.debtee)}},r.a.createElement(O.a,null))))}))))},U=n(124),A=n(17),T=n.n(A),_=n(26),M=n.n(_),R=n(34),B=n.n(R),J=n(35),L=n.n(J),P=n(76),W=n.n(P),F=n(116),G=n.n(F),Y=n(117),$=n.n(Y),q=n(113),z=n.n(q),H=n(118),K=n.n(H),Q=n(115),V=n.n(Q),X=n(28),Z=n.n(X),ee=n(112),te=n.n(ee),ne=n(53),ae=n.n(ne),re=n(114),le=n.n(re),se=n(27),oe=n.n(se);function ce(e){return r.a.createElement(te.a,Object.assign({direction:"up"},e))}var ie=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selected:[],amount:0,description:""},n.handleToggle=function(e){return function(){n.setState(function(t){var n=t.selected;return-1!==n.indexOf(e)?{selected:n.filter(function(t){return t!==e})}:{selected:[].concat(Object(U.a)(n),[e])}})}},n.handleAmountChange=function(e){return n.setState({amount:e.target.value})},n.handleDescriptionChange=function(e){return n.setState({description:e.target.value})},n.registerExpense=function(){fetch("http://https://appartamento.herokuapp.com/expenses",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({beneficiaries:n.state.selected,amount:n.state.amount,description:n.state.description,spender:n.props.spender})}).then(function(e){return e.json()}).then(console.log),n.props.handleClose()},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(z.a,{open:this.props.open,TransitionComponent:ce,keepMounted:!0,onClose:this.props.handleClose,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",fullScreen:!0},r.a.createElement(oe.a,null,r.a.createElement(Z.a,null,r.a.createElement(C.a,{color:"inherit",onClick:this.props.handleClose,"aria-label":"Close"},r.a.createElement(le.a,null)),r.a.createElement(T.a,{variant:"title",color:"inherit"},"Register new expense"))),r.a.createElement(V.a,{id:"new-expense-content"},r.a.createElement(W.a,{variant:"outlined",label:"Description",value:this.state.description,onChange:this.handleDescriptionChange}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(W.a,{variant:"outlined",label:"Amount",value:this.state.amount,onChange:this.handleAmountChange,type:"number",InputProps:{startAdornment:r.a.createElement(G.a,{position:"start"},"\u20ac")}}),r.a.createElement(M.a,null,this.props.users.map(function(t){var n=t.name,a=t._id;return r.a.createElement(B.a,{key:a,dense:!0,button:!0,onClick:e.handleToggle(a)},r.a.createElement($.a,{checked:-1!==e.state.selected.indexOf(a),tabIndex:-1,disableRipple:!0}),r.a.createElement(L.a,{primary:n}))}))),r.a.createElement(K.a,null,r.a.createElement(ae.a,{onClick:this.props.handleClose},"Nevermind"),r.a.createElement(ae.a,{onClick:this.registerExpense,color:"primary",disabled:!this.state.description||!this.state.amount||!this.state.selected.length},"Register")))}}]),t}(r.a.Component),ue=n(74),me=n.n(ue),de=n(75),pe=n.n(de),he=n(119),Ee=n.n(he),be=function(e){e.name;var t=e.debts,n=e.loadingDebts,a=e.newExpenseCallback,l=e.cancelDebt,s=e.unselectUser;return r.a.createElement("div",null,r.a.createElement(oe.a,{position:"static"},r.a.createElement(Z.a,null,r.a.createElement(T.a,{variant:"h6",color:"inherit",style:{flexGrow:1}},"Your Debts"),r.a.createElement(C.a,{color:"inherit","aria-label":"Backk",style:{marginRight:-12,marginLeft:20},onClick:s},r.a.createElement(Ee.a,null)))),r.a.createElement("div",{style:{padding:"16px"}},r.a.createElement(N,{data:t,loading:n,cancelDebt:l}),r.a.createElement(me.a,{color:"primary","aria-label":"Add",onClick:a,style:{position:"absolute",bottom:"16px",right:"16px"}},r.a.createElement(pe.a,null))))},ge=n(123),fe=n.n(ge),ve=n(73),ke=n.n(ve),Ce=n(120),ye=n.n(Ce),we=n(122),xe=n.n(we),Ie=n(72),Se=n.n(Ie),je=n(121),De=n.n(je),Oe=function(){var e=[ke.a[500],j.a[500],ye.a[500],I.a[500],De.a[500],Se.a[500],xe.a[500]];return e[Math.floor(Math.random()*e.length)]},Ne=function(e){var t=e.users,n=e.selectUser;return r.a.createElement("div",null,r.a.createElement(oe.a,{position:"static"},r.a.createElement(Z.a,null,r.a.createElement(T.a,{variant:"h6",color:"inherit"},"Login"))),r.a.createElement(M.a,{component:"nav"},t.map(function(e){var t=e.name,a=e._id;return r.a.createElement(B.a,{button:!0,key:t,onClick:function(){return n({name:t,_id:a})}},r.a.createElement(fe.a,{style:{backgroundColor:Oe()}},t.substring(0,1)),r.a.createElement(L.a,{primary:t}))})))},Ue=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={loadingUsers:!0,loadingDebts:!1,users:[],userId:null,userName:null,debts:[],createNewExpense:!1},n.componentDidMount=function(){var e=localStorage.getItem("userId");if(e){var t=localStorage.getItem("userName");n.selectUser({name:t,_id:e})}},n.selectUser=function(e){var t=e.name,a=e._id;localStorage.setItem("userId",a),localStorage.setItem("userName",t),n.setState({userId:a,userName:t,loadingDebts:!0}),fetch("http://https://appartamento.herokuapp.com/users/".concat(a,"/debts")).then(function(e){return e.json()}).then(function(e){return n.setState({debts:e,loadingDebts:!1})})},n.unselectUser=function(){localStorage.removeItem("userId"),localStorage.removeItem("userName"),n.setState({userId:null,userName:null})},n.cancelDebt=function(e){fetch("http://https://appartamento.herokuapp.com/users/".concat(n.state.userId,"/debts/").concat(e),{method:"DELETE"}).then(function(e){return e.json()})},fetch("http://https://appartamento.herokuapp.com/users").then(function(e){return e.json()}).then(function(e){return n.setState({users:e,loadingUsers:!1})}),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return this.state.loadingUsers?"loading":null===this.state.userId?r.a.createElement(Ne,{users:this.state.users,selectUser:this.selectUser}):r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,{users:this.state.users,open:this.state.createNewExpense,handleClose:function(){return e.setState({createNewExpense:!1})},spender:this.state.userId}),r.a.createElement(be,{debts:this.state.debts,name:this.state.userName,users:this.state.users,cancelDebt:this.cancelDebt,unselectUser:this.unselectUser,newExpenseCallback:function(){return e.setState({createNewExpense:!0})}}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(Ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[125,1,2]]]);
//# sourceMappingURL=main.c99898aa.chunk.js.map