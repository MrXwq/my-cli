"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([[826],{4976:(e,n,t)=>{var r=t(9963),o=t(6252),u={id:"nav"},s=(0,o.Uk)("Home"),a=(0,o.Uk)("| "),i=(0,o.Uk)("Test"),c=t(3744);const m={},l=(0,c.Z)(m,[["render",function(e,n){var t=(0,o.up)("router-link"),r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",u,[(0,o.Wm)(t,{to:"/"},{default:(0,o.w5)((function(){return[s]})),_:1}),a,(0,o.Wm)(t,{to:"/test"},{default:(0,o.w5)((function(){return[i]})),_:1})]),(0,o.Wm)(r)],64)}]]);t(6992),t(1539),t(8674),t(8783),t(3948);var p=t(2119),f=t(4800),v={class:"home"},d=(0,o._)("img",{alt:"Vue logo",src:f},null,-1),h=t(3577),g={class:"hello"},k=function(e){return(0,o.dD)("data-v-0533b6a1"),e=e(),(0,o.Cn)(),e}((function(){return(0,o._)("p",null,"TEXT，TEXT，TEXT，TEXT，TEXT，TEXT，",-1)}));const T=(0,o.aZ)({name:"HelloWorld",props:{msg:String}}),w=(0,c.Z)(T,[["render",function(e,n,t,r,u,s){return(0,o.wg)(),(0,o.iD)("div",g,[(0,o._)("h1",null,(0,h.zw)(e.msg),1),k])}],["__scopeId","data-v-0533b6a1"]]),E=(0,o.aZ)({name:"Home",components:{HelloWorld:w}}),_=(0,c.Z)(E,[["render",function(e,n,t,r,u,s){var a=(0,o.up)("HelloWorld");return(0,o.wg)(),(0,o.iD)("div",v,[(0,o.kq)(" {{ token }} "),d,(0,o.Wm)(a,{msg:"Welcome"})])}]]);var b=function(e){return"/manage/".concat(e)},P=[{path:b("home"),name:"home",component:_},{path:b("test"),name:"test",component:function(){return Promise.all([t.e(216),t.e(205)]).then(t.bind(t,1205))}}];const W=(0,p.p7)({history:(0,p.PO)(),routes:P});t(5666);var x=t(894),y=t(9669),H=t.n(y)().create({baseURL:"",timeout:3e3});H.interceptors.request.use((function(e){return e.headers.Authorization=C.state.token?"Bearer "+C.state.token:"Bearer",e}),(function(e){Promise.reject(e)})),H.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e.response)}));const U=H;function X(e,n,t,r,o,u,s){try{var a=e[u](s),i=a.value}catch(e){return void t(e)}a.done?n(i):Promise.resolve(i).then(r,o)}function O(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var u=e.apply(n,t);function s(e){X(u,r,o,s,a,"next",e)}function a(e){X(u,r,o,s,a,"throw",e)}s(void 0)}))}}function R(){return(R=O(regeneratorRuntime.mark((function e(n,t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.get(n,t);case 2:return r=e.sent,e.abrupt("return",Promise.resolve(r));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e,n,t,r,o,u,s){try{var a=e[u](s),i=a.value}catch(e){return void t(e)}a.done?n(i):Promise.resolve(i).then(r,o)}var D={getUser:function(e){return(n=regeneratorRuntime.mark((function n(){var t,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.commit,n.next=3,function(e,n){return R.apply(this,arguments)}("/user",void 0);case 3:r=n.sent,t("SET_TOKEN",r.token);case 5:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,o){var u=n.apply(e,t);function s(e){Z(u,r,o,s,a,"next",e)}function a(e){Z(u,r,o,s,a,"throw",e)}s(void 0)}))})();var n}};const C=(0,x.MT)({state:{token:""},mutations:{SET_TOKEN:function(e,n){e.token=n}},actions:D,getters:{hasUser:function(e){return e.token}},modules:{}});(0,r.ri)(l).use(W).use(C).mount("#root")},4800:(e,n,t)=>{e.exports=t.p+"26bd867dd65e26dbc77d.png"}},e=>{e.O(0,[216],(()=>(4976,e(e.s=4976)))),e.O()}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ckIsU0FBUCxvQ0VFeUNDLENBQU8sYURxQnJCLEdBREMsT0FDZEwsRUFEYyxPQUVwQkksRUFBTyxZQUFhSixFQUFJUixPQUZKLDBDLHlMQVU1QixTQUFlLFFBQVksQ0FDdkJELE1BeEJPLENBQ0hDLE1BQU8sSUF3QlhjLFVBbkIwQyxDQUMxQ0MsVUFEMEMsU0FDaENoQixFQUFPaUIsR0FDYmpCLEVBQU1DLE1BQVFnQixJQWtCbEJOLFFBQUFBLEVBQ0FPLFFBVG9ELENBQ3BEQyxRQURvRCxTQUM1Q25CLEdBQ0osT0FBT0EsRUFBTUMsUUFRakJtQixRQUFTLE1FbENELFFBQVVDLEdBQ2xCekIsSUFBSSxHQUFRQSxJQUFJRyxHQUFPdUIsTUFBTSxVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcC8uL3NyYy9BcHAudnVlP2NjZjUiLCJ3ZWJwYWNrOi8vc2hvcC8uL3NyYy9BcHAudnVlP2M3OWEiLCJ3ZWJwYWNrOi8vc2hvcC8uL3NyYy92aWV3cy9ob21lLnZ1ZT83NjY1Iiwid2VicGFjazovL3Nob3AvLi9zcmMvY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZT82OTA3Iiwid2VicGFjazovL3Nob3AvLi9zcmMvY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZT8zZjU2Iiwid2VicGFjazovL3Nob3AvLi9zcmMvY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZT9hMzgwIiwid2VicGFjazovL3Nob3AvLi9zcmMvdmlld3MvaG9tZS52dWU/ODU2MSIsIndlYnBhY2s6Ly9zaG9wLy4vc3JjL3ZpZXdzL2hvbWUudnVlIiwid2VicGFjazovL3Nob3AvLi9zcmMvcm91dGVyL2luZGV4LnRzIiwid2VicGFjazovL3Nob3AvLi9zcmMvYWpheC9odHRwLnRzIiwid2VicGFjazovL3Nob3AvLi9zcmMvYWpheC9hcGlNZXRob2RzLnRzIiwid2VicGFjazovL3Nob3AvLi9zcmMvc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc2hvcC8uL3NyYy9hamF4L2FwaXMudHMiLCJ3ZWJwYWNrOi8vc2hvcC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgcmVzb2x2ZUNvbXBvbmVudCBhcyBfcmVzb2x2ZUNvbXBvbmVudCwgd2l0aEN0eCBhcyBfd2l0aEN0eCwgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2sgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgaWQ6IFwibmF2XCIgfVxuY29uc3QgX2hvaXN0ZWRfMiA9IC8qI19fUFVSRV9fKi9fY3JlYXRlVGV4dFZOb2RlKFwiSG9tZVwiKVxuY29uc3QgX2hvaXN0ZWRfMyA9IC8qI19fUFVSRV9fKi9fY3JlYXRlVGV4dFZOb2RlKFwifCBcIilcbmNvbnN0IF9ob2lzdGVkXzQgPSAvKiNfX1BVUkVfXyovX2NyZWF0ZVRleHRWTm9kZShcIlRlc3RcIilcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUpIHtcbiAgY29uc3QgX2NvbXBvbmVudF9yb3V0ZXJfbGluayA9IF9yZXNvbHZlQ29tcG9uZW50KFwicm91dGVyLWxpbmtcIilcbiAgY29uc3QgX2NvbXBvbmVudF9yb3V0ZXJfdmlldyA9IF9yZXNvbHZlQ29tcG9uZW50KFwicm91dGVyLXZpZXdcIilcblxuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIFtcbiAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgIF9jcmVhdGVWTm9kZShfY29tcG9uZW50X3JvdXRlcl9saW5rLCB7IHRvOiBcIi9cIiB9LCB7XG4gICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICBfaG9pc3RlZF8yXG4gICAgICAgIF0pLFxuICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgfSksXG4gICAgICBfaG9pc3RlZF8zLFxuICAgICAgX2NyZWF0ZVZOb2RlKF9jb21wb25lbnRfcm91dGVyX2xpbmssIHsgdG86IFwiL3Rlc3RcIiB9LCB7XG4gICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICBfaG9pc3RlZF80XG4gICAgICAgIF0pLFxuICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgfSlcbiAgICBdKSxcbiAgICBfY3JlYXRlVk5vZGUoX2NvbXBvbmVudF9yb3V0ZXJfdmlldylcbiAgXSwgNjQgLyogU1RBQkxFX0ZSQUdNRU5UICovKSlcbn0iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiYTQ3YTEwXCJcbmNvbnN0IHNjcmlwdCA9IHt9XG5cbmltcG9ydCBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJiYTQ3YTEwJmxhbmc9bGVzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9ob21lL3J1bm5lci93b3JrL215LWNsaS9teS1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdXSlcblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIHJlc29sdmVDb21wb25lbnQgYXMgX3Jlc29sdmVDb21wb25lbnQsIGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5pbXBvcnQgX2ltcG9ydHNfMCBmcm9tICcuLi9hc3NldHMvaW1ncy9sb2dvLnBuZydcblxuXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJob21lXCIgfVxuY29uc3QgX2hvaXN0ZWRfMiA9IC8qI19fUFVSRV9fKi9fY3JlYXRlRWxlbWVudFZOb2RlKFwiaW1nXCIsIHtcbiAgYWx0OiBcIlZ1ZSBsb2dvXCIsXG4gIHNyYzogX2ltcG9ydHNfMFxufSwgbnVsbCwgLTEgLyogSE9JU1RFRCAqLylcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4OiBhbnksX2NhY2hlOiBhbnksJHByb3BzOiBhbnksJHNldHVwOiBhbnksJGRhdGE6IGFueSwkb3B0aW9uczogYW55KSB7XG4gIGNvbnN0IF9jb21wb25lbnRfSGVsbG9Xb3JsZCA9IF9yZXNvbHZlQ29tcG9uZW50KFwiSGVsbG9Xb3JsZFwiKSFcblxuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgX2NyZWF0ZUNvbW1lbnRWTm9kZShcIiB7eyB0b2tlbiB9fSBcIiksXG4gICAgX2hvaXN0ZWRfMixcbiAgICBfY3JlYXRlVk5vZGUoX2NvbXBvbmVudF9IZWxsb1dvcmxkLCB7IG1zZzogXCJXZWxjb21lXCIgfSlcbiAgXSkpXG59IiwiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIHB1c2hTY29wZUlkIGFzIF9wdXNoU2NvcGVJZCwgcG9wU2NvcGVJZCBhcyBfcG9wU2NvcGVJZCB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfd2l0aFNjb3BlSWQgPSBuID0+IChfcHVzaFNjb3BlSWQoXCJkYXRhLXYtMDUzM2I2YTFcIiksbj1uKCksX3BvcFNjb3BlSWQoKSxuKVxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwiaGVsbG9cIiB9XG5jb25zdCBfaG9pc3RlZF8yID0gLyojX19QVVJFX18qLyBfd2l0aFNjb3BlSWQoKCkgPT4gLyojX19QVVJFX18qL19jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIG51bGwsIFwiVEVYVO+8jFRFWFTvvIxURVhU77yMVEVYVO+8jFRFWFTvvIxURVhU77yMXCIsIC0xIC8qIEhPSVNURUQgKi8pKVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHg6IGFueSxfY2FjaGU6IGFueSwkcHJvcHM6IGFueSwkc2V0dXA6IGFueSwkZGF0YTogYW55LCRvcHRpb25zOiBhbnkpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJoMVwiLCBudWxsLCBfdG9EaXNwbGF5U3RyaW5nKF9jdHgubXNnKSwgMSAvKiBURVhUICovKSxcbiAgICBfaG9pc3RlZF8yXG4gIF0pKVxufSIsIlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSBcInZ1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiBcIkhlbGxvV29ybGRcIixcbiAgcHJvcHM6IHtcbiAgICBtc2c6IFN0cmluZyxcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vSGVsbG9Xb3JsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDUzM2I2YTEmc2NvcGVkPXRydWUmdHM9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hlbGxvV29ybGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hlbGxvV29ybGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcblxuaW1wb3J0IFwiLi9IZWxsb1dvcmxkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA1MzNiNmExJnNjb3BlZD10cnVlJmxhbmc9bGVzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9ob21lL3J1bm5lci93b3JrL215LWNsaS9teS1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi0wNTMzYjZhMVwiXV0pXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiXG4vLyBpbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gJ3Z1ZXgnXG5pbXBvcnQge1xuICBkZWZpbmVDb21wb25lbnQsXG4gIC8vICBjb21wdXRlZCwgb25Nb3VudGVkIFxufSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgSGVsbG9Xb3JsZCBmcm9tIFwiQC9jb21wb25lbnRzL0hlbGxvV29ybGQudnVlXCI7IC8vIEAgaXMgYW4gYWxpYXMgdG8gL3NyY1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiBcIkhvbWVcIixcbiAgY29tcG9uZW50czoge1xuICAgIEhlbGxvV29ybGQsXG4gIH0sXG4gIC8vIHNldHVwKCkge1xuICAvLyAgIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUoKVxuICAvLyAgIG9uTW91bnRlZCgoKSA9PiB7XG4gIC8vICAgICBzdG9yZS5kaXNwYXRjaCgnZ2V0VXNlcicpXG4gIC8vICAgfSlcbiAgLy8gICBjb25zdCB0b2tlbiA9IGNvbXB1dGVkKCgpID0+IHN0b3JlLnN0YXRlLnRva2VuKVxuICAvLyAgIHJldHVybiB7IHRva2VuIH1cbiAgLy8gfVxufSk7XG4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9ob21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YzVkZDc2ZSZ0cz10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vaG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvaG9tZS9ydW5uZXIvd29yay9teS1jbGkvbXktY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXV0pXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgY3JlYXRlUm91dGVyLCBjcmVhdGVXZWJIaXN0b3J5LCBSb3V0ZVJlY29yZFJhdyB9IGZyb20gJ3Z1ZS1yb3V0ZXInXG5pbXBvcnQgaG9tZSBmcm9tICcuLi92aWV3cy9ob21lLnZ1ZSdcblxuY29uc3QgcmVzb2x2ZVBhdGggPSAocGF0aDogc3RyaW5nKSA9PiBgL21hbmFnZS8ke3BhdGh9YFxuXG5jb25zdCByb3V0ZXM6IEFycmF5PFJvdXRlUmVjb3JkUmF3PiA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6IHJlc29sdmVQYXRoKCdob21lJyksXG4gICAgICAgIG5hbWU6ICdob21lJyxcbiAgICAgICAgY29tcG9uZW50OiBob21lXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IHJlc29sdmVQYXRoKCd0ZXN0JyksXG4gICAgICAgIG5hbWU6ICd0ZXN0JyxcbiAgICAgICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4uL3ZpZXdzL3Rlc3QnKVxuICAgIH1cbl1cblxuY29uc3Qgcm91dGVyID0gY3JlYXRlUm91dGVyKHtcbiAgICBoaXN0b3J5OiBjcmVhdGVXZWJIaXN0b3J5KCksXG4gICAgcm91dGVzXG59KVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlL2luZGV4J1xuXG5jb25zdCBodHRwID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiAnJyxcbiAgICB0aW1lb3V0OiAzMDAwXG59KVxuXG5odHRwLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcbiAgICAoY29uZmlnKSA9PiB7XG4gICAgICAgIGNvbmZpZy5oZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSBzdG9yZS5zdGF0ZS50b2tlblxuICAgICAgICAgICAgPyAnQmVhcmVyICcgKyBzdG9yZS5zdGF0ZS50b2tlblxuICAgICAgICAgICAgOiAnQmVhcmVyJ1xuICAgICAgICByZXR1cm4gY29uZmlnXG4gICAgfSxcbiAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgUHJvbWlzZS5yZWplY3QoZXJyb3IpXG4gICAgfVxuKVxuXG5odHRwLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXG4gICAgKGNvbmZpZykgPT4ge1xuICAgICAgICByZXR1cm4gY29uZmlnLmRhdGFcbiAgICB9LFxuICAgIChlcnJvcikgPT4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IucmVzcG9uc2UpXG4gICAgfVxuKVxuXG5leHBvcnQgZGVmYXVsdCBodHRwXG4iLCJpbXBvcnQgaHR0cCBmcm9tICcuL2h0dHAnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcGlHZXQ8VD4odXJsOiBzdHJpbmcsIHBhcmFtcz86IGFueSkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGh0dHAuZ2V0PFQ+KHVybCwgcGFyYW1zKVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzKVxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwaVBvc3Q8VD4odXJsOiBzdHJpbmcsIGRhdGE/OiBhbnkpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBodHRwLnBvc3Q8VD4odXJsLCBkYXRhKVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBpUHV0PFQ+KHVybDogc3RyaW5nLCBkYXRhPzogYW55KSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgaHR0cC5wdXQ8VD4odXJsLCBkYXRhKVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzLmRhdGEpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcGlEZWxldGU8VD4odXJsOiBzdHJpbmcsIHBhcmFtcz86IGFueSkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGh0dHAuZGVsZXRlPFQ+KHVybCwgcGFyYW1zKVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzKVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIE11dGF0aW9uVHJlZSwgQWN0aW9uVHJlZSwgR2V0dGVyVHJlZSB9IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSAnLi4vYWpheC9hcGlzJ1xuXG5pbnRlcmZhY2UgZGVmYXVsdFN0YXRlIHtcbiAgICB0b2tlbjogc3RyaW5nXG59XG5pbnRlcmZhY2UgUmVzcG9uc2Uge1xuICAgIFtrZXk6IHN0cmluZ106IGFueVxufVxuXG5mdW5jdGlvbiBpbml0aWFsU3RhdGUoKTogZGVmYXVsdFN0YXRlIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0b2tlbjogJydcbiAgICB9XG59XG5jb25zdCBzdGF0ZTogZGVmYXVsdFN0YXRlID0gaW5pdGlhbFN0YXRlKClcblxuY29uc3QgbXV0YXRpb25zOiBNdXRhdGlvblRyZWU8ZGVmYXVsdFN0YXRlPiA9IHtcbiAgICBTRVRfVE9LRU4oc3RhdGUsIHBheWxvYWQpIHtcbiAgICAgICAgc3RhdGUudG9rZW4gPSBwYXlsb2FkXG4gICAgfVxufVxuXG5jb25zdCBhY3Rpb25zOiBBY3Rpb25UcmVlPGRlZmF1bHRTdGF0ZSwgZGVmYXVsdFN0YXRlPiA9IHtcbiAgICBhc3luYyBnZXRVc2VyKHsgY29tbWl0IH0pIHtcbiAgICAgICAgY29uc3QgcmVzID0gKGF3YWl0IGdldFVzZXIoKSkgYXMgUmVzcG9uc2VcbiAgICAgICAgY29tbWl0KCdTRVRfVE9LRU4nLCByZXMudG9rZW4pXG4gICAgfVxufVxuY29uc3QgZ2V0dGVyczogR2V0dGVyVHJlZTxkZWZhdWx0U3RhdGUsIGRlZmF1bHRTdGF0ZT4gPSB7XG4gICAgaGFzVXNlcihzdGF0ZSkge1xuICAgICAgICByZXR1cm4gc3RhdGUudG9rZW5cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZSh7XG4gICAgc3RhdGUsXG4gICAgbXV0YXRpb25zLFxuICAgIGFjdGlvbnMsXG4gICAgZ2V0dGVycyxcbiAgICBtb2R1bGVzOiB7fVxufSlcbiIsImltcG9ydCB7IGFwaVBvc3QsIGFwaUdldCwgYXBpRGVsZXRlLCBhcGlQdXQgfSBmcm9tICcuL2FwaU1ldGhvZHMnXG5cbmV4cG9ydCBjb25zdCBwb3N0VXNlciA9IChwYXJhbXM/OiBhbnkpID0+IGFwaVBvc3QoJy91c2VyJywgcGFyYW1zKVxuXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9IChwYXJhbXM/OiBhbnkpID0+IGFwaUdldCgnL3VzZXInLCBwYXJhbXMpXG5cbmV4cG9ydCBjb25zdCBhcGlMb2dpbjIgPSAocGFyYW1zPzogYW55KSA9PiBhcGlQdXQoJy9hdXRoJywgcGFyYW1zKVxuXG5leHBvcnQgY29uc3QgYXBpTG9naW4zID0gKCkgPT4gYXBpRGVsZXRlKCcvYXV0aCcpXG4iLCJpbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tICd2dWUnIC8vIFZ1ZSAzLngg5byV5YWlIHZ1ZSDnmoTlvaLlvI9cbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAudnVlJyAvLyDlvJXlhaUgQVBQIOmhtemdoue7hOW7ulxuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcidcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xuXG5jb25zdCBhcHAgPSBjcmVhdGVBcHAoQXBwKSAvLyDpgJrov4cgY3JlYXRlQXBwIOWIneWni+WMliBhcHBcbmFwcC51c2Uocm91dGVyKS51c2Uoc3RvcmUpLm1vdW50KCcjcm9vdCcpIC8vIOWwhumhtemdouaMgui9veWIsCByb290IOiKgueCuVxuIl0sIm5hbWVzIjpbIl9ob2lzdGVkXzEiLCJpZCIsIl9ob2lzdGVkXzIiLCJfaG9pc3RlZF8zIiwiX2hvaXN0ZWRfNCIsInNjcmlwdCIsIl9jdHgiLCJfY2FjaGUiLCJfY29tcG9uZW50X3JvdXRlcl9saW5rIiwiX2NvbXBvbmVudF9yb3V0ZXJfdmlldyIsIl8iLCJ0byIsImRlZmF1bHQiLCJjbGFzcyIsImFsdCIsInNyYyIsIm4iLCJfd2l0aFNjb3BlSWQiLCJuYW1lIiwicHJvcHMiLCJtc2ciLCJTdHJpbmciLCIkcHJvcHMiLCIkc2V0dXAiLCIkZGF0YSIsIiRvcHRpb25zIiwiY29tcG9uZW50cyIsIkhlbGxvV29ybGQiLCJfY29tcG9uZW50X0hlbGxvV29ybGQiLCJyZXNvbHZlUGF0aCIsInBhdGgiLCJyb3V0ZXMiLCJjb21wb25lbnQiLCJob21lIiwiaGlzdG9yeSIsImJhc2VVUkwiLCJ0aW1lb3V0IiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsImhlYWRlcnMiLCJzdG9yZSIsInN0YXRlIiwidG9rZW4iLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNwb25zZSIsImRhdGEiLCJ1cmwiLCJwYXJhbXMiLCJyZXMiLCJyZXNvbHZlIiwiYWN0aW9ucyIsImdldFVzZXIiLCJjb21taXQiLCJhcGlHZXQiLCJtdXRhdGlvbnMiLCJTRVRfVE9LRU4iLCJwYXlsb2FkIiwiZ2V0dGVycyIsImhhc1VzZXIiLCJtb2R1bGVzIiwiQXBwIiwibW91bnQiXSwic291cmNlUm9vdCI6IiJ9