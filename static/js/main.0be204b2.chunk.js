(this.webpackJsonpcv=this.webpackJsonpcv||[]).push([[0],{101:function(t,e,n){},131:function(t,e,n){},151:function(t,e,n){},163:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),c=n(21),s=n.n(c),o=(n(101),n(31)),l=n(32),r=n(40),d=n(39),h=n(174),j=n(67),u=n(38),f=(n(130),n(131),n(36)),b=n(168),O=n(172),p=n(170),g=n(72),x=n(116),v=function(){function t(){var e=this;Object(o.a)(this,t),this.init=function(){e.api_token=localStorage.getItem("api_token");return e.client=x.create({baseURL:e.api_url,timeout:31e3,headers:{Accept:"application/json"}}),e.client},this.getSkillList=function(t){return e.init().get("/skill",{params:t})},this.getProfileShow=function(){return e.init().get("/profile/show")},this.getPortfolioList=function(t){return e.init().get("/portfolio",{params:t})},this.api_token=null,this.client=null,this.api_url="https://cv-be.inventaris.net/api/v1"}return Object(l.a)(t,[{key:"viewPortfolioImageByPortfolioId",value:function(t){return this.init().get("/portfolio_image/show/".concat(t))}}]),t}(),y=n(8),m=new v,k=function(t){Object(r.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.state.q;t.setState({loading:!0}),m.getSkillList(Object(f.a)(Object(f.a)({},e),{},{q:n})).then((function(e){var n=e.data,a=Object(f.a)({},t.state.pagination);a.current=n.start,a.total=n.recordsTotal,a.pageSize=parseInt(n.length),200===e.status&&t.setState({loading:!1,data:n.data,pagination:a},(function(){console.log("skills",t.state.pagination)}))})).catch((function(e){t.setState({loading:!1})}))},t.loadMore=function(){t.setState((function(t){return{offset:t.offset+1}}))},t.state={data:[],offset:1,q:"",selectedRowKeys:[],pagination:{},loading:!0,visible:!1},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.fetch()}},{key:"componentDidUpdate",value:function(t,e){e.offset!==this.state.offset&&this.fetch({offset:this.state.offset})}},{key:"render",value:function(){return Object(y.jsx)("div",{children:this.state.loading?Object(y.jsx)(b.a,{children:Object(y.jsx)(O.a,{})}):Object(y.jsxs)(b.a,{bordered:!1,children:[this.state.data.map((function(t,e){return Object(y.jsxs)("div",{style:{paddingBottom:"20px"},children:[Object(y.jsx)("p",{children:t.name}),Object(y.jsx)(p.a,{percent:t.progress})]},e)})),Object(y.jsx)("div",{className:"load-more",children:this.state.pagination.total>this.state.pagination.pageSize?Object(y.jsx)(g.a,{onClick:this.loadMore,type:"primary",children:this.state.loading?"Loading...":"Load More"}):null})]})})}}]),n}(a.Component),S=n(169),w=(n(151),new v),C=function(t){Object(r.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.state.q;t.setState({loading:!0}),w.getProfileShow(Object(f.a)(Object(f.a)({},e),{},{q:n})).then((function(e){var n=e.data;200===e.status&&t.setState({loading:!1,data:n},(function(){}))})).catch((function(e){t.setState({loading:!1})}))},t.state={data:[],loading:!0,visible:!1},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.fetch()}},{key:"render",value:function(){var t=this.state.data,e=t.name,n=t.address,a=t.email,i=t.phone,c=t.whatsapp_link,s=t.position,o=t.image_full_url;return Object(y.jsx)("div",{className:"profile-content",children:this.state.loading?Object(y.jsx)(b.a,{children:Object(y.jsx)(O.a,{active:!0})}):Object(y.jsx)(b.a,{bordered:!1,children:Object(y.jsxs)("div",{style:{textAlign:"center"},children:[Object(y.jsx)("h1",{children:e}),Object(y.jsx)(S.a,{style:{height:"106px",width:"106px",borderRadius:"50%"},src:o}),Object(y.jsxs)("div",{style:{padding:"20px"},children:[Object(y.jsx)("h3",{children:s}),Object(y.jsx)("h4",{children:n}),Object(y.jsx)("h4",{children:Object(y.jsx)("a",{href:"mailto:".concat(a),children:a})}),Object(y.jsx)("h4",{children:Object(y.jsx)("a",{href:c,target:"_blank",children:i})})]})]})})})}}]),n}(a.Component),M=n(167),P=n(98),_=n.n(P),D=n(119),I=n(100),L=n(173),q=n(171),A=n(166),B=n(55),z=Object(y.jsx)(B.a,{style:{fontSize:24},spin:!0}),F=new v,R=function(t){var e=Object(a.useState)([]),n=Object(I.a)(e,2),i=n[0],c=n[1],s=Object(a.useState)(!0),o=Object(I.a)(s,2),l=o[0],r=o[1];Object(a.useEffect)((function(){console.log(t),t.selectedData&&d(t.selectedData)}),[t.selectedData]);var d=function(){var t=Object(D.a)(_.a.mark((function t(e){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F.viewPortfolioImageByPortfolioId(e).then((function(t){var e=t.data;console.log(e),200===t.status&&(r(!1),c(e))})).catch((function(t){r(!1)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(y.jsx)(L.a,{visible:t.showModal,style:{width:"100%",resize:"none"},onOk:function(){t.handleOk(!1)},closable:!1,cancelButtonProps:{style:{display:"none"}},children:Object(y.jsx)(q.a,{autoplay:!0,children:l?Object(y.jsx)(A.a,{indicator:z}):i.map((function(t,e){return Object(y.jsx)(S.a,{src:t.image_full_url},e)}))})})},T=new v,E=function(t){Object(r.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.state.q;t.setState({loading:!0}),T.getPortfolioList(Object(f.a)(Object(f.a)({},e),{},{q:n})).then((function(n){console.log(e);var a=n.data,i=Object(f.a)({},t.state.pagination);i.current=a.offset,i.total=a.length,i.pageSize=parseInt(a.length),200===n.status&&t.setState({loading:!1,data:a.data,pagination:i},(function(){}))})).catch((function(e){t.setState({loading:!1})}))},t.handleOk=function(e){t.setState({showModal:e})},t.handleShowModalAndSendId=function(e){console.log("selectedId",e),t.setState({selectedData:e,showModal:!0})},t.handlePaginationChange=function(e,n,a){console.log(e);var i=Object(f.a)({},t.state.pagination);i.current=e,t.setState({pagination:i},(function(){console.log(t.state.pagination)})),t.fetch({start:e,offset:e})},t.state={data:[],q:"",selectedRowKeys:[],pagination:{},loading:!0,showModal:!1,selectedData:""},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.fetch()}},{key:"render",value:function(){var t=this,e=this.state.pagination,n=e.current,a=e.total;return Object(y.jsx)("div",{children:this.state.loading?Object(y.jsx)(j.a,{children:Object(y.jsx)(u.a,{xs:24,xl:24,style:{padding:"15px"},children:Object(y.jsx)(b.a,{children:Object(y.jsx)(O.a,{active:!0})})})}):Object(y.jsxs)("div",{children:[Object(y.jsx)(j.a,{children:this.state.data.map((function(e,n){return Object(y.jsx)(u.a,{xs:24,xl:12,style:{padding:"15px"},children:Object(y.jsxs)(b.a,{title:e.name,bordered:!1,actions:[Object(y.jsx)(g.a,{type:"primary",onClick:function(){return t.handleShowModalAndSendId(e.id)},style:{alignContent:"center"},children:"Detail"})],children:[Object(y.jsx)(S.a,{style:{width:"auto",maxWidth:"100%",maxHeight:"100%",height:"auto"},src:e.image_full_url}),Object(y.jsx)("p",{style:{textAlign:"center",paddingTop:"20px"},children:e.description})]})},n)}))}),Object(y.jsx)(j.a,{children:Object(y.jsx)(u.a,{xs:24,style:{display:"inline-flex",justifyContent:"center",alignItems:"center"},children:Object(y.jsx)(M.a,{defaultCurrent:n,total:a,onChange:this.handlePaginationChange})})}),Object(y.jsx)(R,{showModal:this.state.showModal,selectedData:this.state.selectedData,handleOk:this.handleOk})]})})}}]),n}(a.Component),N=h.a.Header,H=h.a.Content,J=h.a.Footer,K=function(t){Object(r.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(y.jsxs)(h.a,{className:"layout",children:[Object(y.jsx)(N,{}),Object(y.jsx)(H,{style:{padding:"15px"},children:Object(y.jsxs)(j.a,{children:[Object(y.jsx)(u.a,{xs:24,xl:4,style:{padding:"15px"},children:Object(y.jsx)(C,{})}),Object(y.jsx)(u.a,{xs:24,xl:16,children:Object(y.jsx)(E,{})}),Object(y.jsx)(u.a,{xs:24,xl:4,style:{padding:"15px"},children:Object(y.jsx)(k,{})})]})}),Object(y.jsx)(J,{style:{textAlign:"center",background:"#001529",color:"#fff"},children:"\xa9 Eka Pratama"})]})}}]),n}(a.Component),U=function(t){Object(r.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(y.jsx)(K,{})}}]),n}(a.Component),W=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,175)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),a(t),i(t),c(t),s(t)}))};s.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(U,{})}),document.getElementById("root")),W()}},[[163,1,2]]]);
//# sourceMappingURL=main.0be204b2.chunk.js.map