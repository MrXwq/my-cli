"use strict";(self.webpackChunkmy_cli=self.webpackChunkmy_cli||[]).push([[826],{1706:(e,n,t)=>{var r=t(9963),o=t(6252),u={id:"nav"},a=(0,o.Uk)("Home"),i=(0,o.Uk)("| "),s=(0,o.Uk)("Test"),c=t(3744);const m={},l=(0,c.Z)(m,[["render",function(e,n){var t=(0,o.up)("router-link"),r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",u,[(0,o.Wm)(t,{to:"/my-cli/manage/home"},{default:(0,o.w5)((function(){return[a]})),_:1}),i,(0,o.Wm)(t,{to:"/my-cli/manage/test"},{default:(0,o.w5)((function(){return[s]})),_:1})]),(0,o.Wm)(r)],64)}]]);t(6992),t(1539),t(8674),t(8783),t(3948);var f=t(2119),p=t(4800),v={class:"home"},d=(0,o._)("img",{alt:"Vue logo",src:p},null,-1),h=t(3577),g={class:"hello"},k=function(e){return(0,o.dD)("data-v-0533b6a1"),e=e(),(0,o.Cn)(),e}((function(){return(0,o._)("p",null,"TEXT，TEXT，TEXT，TEXT，TEXT，TEXT，",-1)}));const T=(0,o.aZ)({name:"HelloWorld",props:{msg:String}}),w=(0,c.Z)(T,[["render",function(e,n,t,r,u,a){return(0,o.wg)(),(0,o.iD)("div",g,[(0,o._)("h1",null,(0,h.zw)(e.msg),1),k])}],["__scopeId","data-v-0533b6a1"]]),y=(0,o.aZ)({name:"Home",components:{HelloWorld:w}}),_=(0,c.Z)(y,[["render",function(e,n,t,r,u,a){var i=(0,o.up)("HelloWorld");return(0,o.wg)(),(0,o.iD)("div",v,[(0,o.kq)(" {{ token }} "),d,(0,o.Wm)(i,{msg:"Welcome"})])}]]);var E=function(e){return"/my-cli/manage/".concat(e)},b=[{path:E("home"),name:"home",component:_},{path:E("test"),name:"test",component:function(){return Promise.all([t.e(216),t.e(205)]).then(t.bind(t,1205))}}];const P=(0,f.p7)({history:(0,f.PO)(),routes:b});t(5666);var W=t(894),x=t(9669),H=t.n(x)().create({baseURL:"",timeout:3e3});H.interceptors.request.use((function(e){return e.headers.Authorization=C.state.token?"Bearer "+C.state.token:"Bearer",e}),(function(e){Promise.reject(e)})),H.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e.response)}));const U=H;function X(e,n,t,r,o,u,a){try{var i=e[u](a),s=i.value}catch(e){return void t(e)}i.done?n(s):Promise.resolve(s).then(r,o)}function O(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var u=e.apply(n,t);function a(e){X(u,r,o,a,i,"next",e)}function i(e){X(u,r,o,a,i,"throw",e)}a(void 0)}))}}function R(){return(R=O(regeneratorRuntime.mark((function e(n,t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.get(n,t);case 2:return r=e.sent,e.abrupt("return",Promise.resolve(r));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e,n,t,r,o,u,a){try{var i=e[u](a),s=i.value}catch(e){return void t(e)}i.done?n(s):Promise.resolve(s).then(r,o)}var D={getUser:function(e){return(n=regeneratorRuntime.mark((function n(){var t,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.commit,n.next=3,function(e,n){return R.apply(this,arguments)}("/user",void 0);case 3:r=n.sent,t("SET_TOKEN",r.token);case 5:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,o){var u=n.apply(e,t);function a(e){Z(u,r,o,a,i,"next",e)}function i(e){Z(u,r,o,a,i,"throw",e)}a(void 0)}))})();var n}};const C=(0,W.MT)({state:{token:""},mutations:{SET_TOKEN:function(e,n){e.token=n}},actions:D,getters:{hasUser:function(e){return e.token}},modules:{}});(0,r.ri)(l).use(P).use(C).mount("#root")},4800:(e,n,t)=>{e.exports=t.p+"26bd867dd65e26dbc77d.png"}},e=>{e.O(0,[216],(()=>(1706,e(e.s=1706)))),e.O()}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0R0QnJCLFNBQVAsb0NFRXlDQyxDQUFPLGFEcUJyQixHQURDLE9BQ2RMLEVBRGMsT0FFcEJJLEVBQU8sWUFBYUosRUFBSVIsT0FGSiwwQyx5TEFVNUIsU0FBZSxRQUFZLENBQ3ZCRCxNQXhCTyxDQUNIQyxNQUFPLElBd0JYYyxVQW5CMEMsQ0FDMUNDLFVBRDBDLFNBQ2hDaEIsRUFBT2lCLEdBQ2JqQixFQUFNQyxNQUFRZ0IsSUFrQmxCTixRQUFBQSxFQUNBTyxRQVRvRCxDQUNwREMsUUFEb0QsU0FDNUNuQixHQUNKLE9BQU9BLEVBQU1DLFFBUWpCbUIsUUFBUyxNRWxDRCxRQUFVQyxHQUNsQnpCLElBQUksR0FBUUEsSUFBSUcsR0FBT3VCLE1BQU0sVSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWNsaS8uL3NyYy9BcHAudnVlPzZkMmUiLCJ3ZWJwYWNrOi8vbXktY2xpLy4vc3JjL0FwcC52dWU/Yzc5YSIsIndlYnBhY2s6Ly9teS1jbGkvLi9zcmMvdmlld3MvaG9tZS52dWU/NzY2NSIsIndlYnBhY2s6Ly9teS1jbGkvLi9zcmMvY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZT82OTA3Iiwid2VicGFjazovL215LWNsaS8uL3NyYy9jb21wb25lbnRzL0hlbGxvV29ybGQudnVlPzNmNTYiLCJ3ZWJwYWNrOi8vbXktY2xpLy4vc3JjL2NvbXBvbmVudHMvSGVsbG9Xb3JsZC52dWU/YTM4MCIsIndlYnBhY2s6Ly9teS1jbGkvLi9zcmMvdmlld3MvaG9tZS52dWU/ODU2MSIsIndlYnBhY2s6Ly9teS1jbGkvLi9zcmMvdmlld3MvaG9tZS52dWUiLCJ3ZWJwYWNrOi8vbXktY2xpLy4vc3JjL3JvdXRlci9pbmRleC50cyIsIndlYnBhY2s6Ly9teS1jbGkvLi9zcmMvYWpheC9odHRwLnRzIiwid2VicGFjazovL215LWNsaS8uL3NyYy9hamF4L2FwaU1ldGhvZHMudHMiLCJ3ZWJwYWNrOi8vbXktY2xpLy4vc3JjL3N0b3JlL2luZGV4LnRzIiwid2VicGFjazovL215LWNsaS8uL3NyYy9hamF4L2FwaXMudHMiLCJ3ZWJwYWNrOi8vbXktY2xpLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCByZXNvbHZlQ29tcG9uZW50IGFzIF9yZXNvbHZlQ29tcG9uZW50LCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0geyBpZDogXCJuYXZcIiB9XG5jb25zdCBfaG9pc3RlZF8yID0gLyojX19QVVJFX18qL19jcmVhdGVUZXh0Vk5vZGUoXCJIb21lXCIpXG5jb25zdCBfaG9pc3RlZF8zID0gLyojX19QVVJFX18qL19jcmVhdGVUZXh0Vk5vZGUoXCJ8IFwiKVxuY29uc3QgX2hvaXN0ZWRfNCA9IC8qI19fUFVSRV9fKi9fY3JlYXRlVGV4dFZOb2RlKFwiVGVzdFwiKVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSkge1xuICBjb25zdCBfY29tcG9uZW50X3JvdXRlcl9saW5rID0gX3Jlc29sdmVDb21wb25lbnQoXCJyb3V0ZXItbGlua1wiKVxuICBjb25zdCBfY29tcG9uZW50X3JvdXRlcl92aWV3ID0gX3Jlc29sdmVDb21wb25lbnQoXCJyb3V0ZXItdmlld1wiKVxuXG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgW1xuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgICAgX2NyZWF0ZVZOb2RlKF9jb21wb25lbnRfcm91dGVyX2xpbmssIHsgdG86IFwiL215LWNsaS9tYW5hZ2UvaG9tZVwiIH0sIHtcbiAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgIF9ob2lzdGVkXzJcbiAgICAgICAgXSksXG4gICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICB9KSxcbiAgICAgIF9ob2lzdGVkXzMsXG4gICAgICBfY3JlYXRlVk5vZGUoX2NvbXBvbmVudF9yb3V0ZXJfbGluaywgeyB0bzogXCIvbXktY2xpL21hbmFnZS90ZXN0XCIgfSwge1xuICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgX2hvaXN0ZWRfNFxuICAgICAgICBdKSxcbiAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgIH0pXG4gICAgXSksXG4gICAgX2NyZWF0ZVZOb2RlKF9jb21wb25lbnRfcm91dGVyX3ZpZXcpXG4gIF0sIDY0IC8qIFNUQUJMRV9GUkFHTUVOVCAqLykpXG59IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZjkxYjA4NVwiXG5jb25zdCBzY3JpcHQgPSB7fVxuXG5pbXBvcnQgXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zZjkxYjA4NSZsYW5nPWxlc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvaG9tZS9ydW5uZXIvd29yay9teS1jbGkvbXktY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXV0pXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgY3JlYXRlQ29tbWVudFZOb2RlIGFzIF9jcmVhdGVDb21tZW50Vk5vZGUsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCByZXNvbHZlQ29tcG9uZW50IGFzIF9yZXNvbHZlQ29tcG9uZW50LCBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jayB9IGZyb20gXCJ2dWVcIlxuaW1wb3J0IF9pbXBvcnRzXzAgZnJvbSAnLi4vYXNzZXRzL2ltZ3MvbG9nby5wbmcnXG5cblxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwiaG9tZVwiIH1cbmNvbnN0IF9ob2lzdGVkXzIgPSAvKiNfX1BVUkVfXyovX2NyZWF0ZUVsZW1lbnRWTm9kZShcImltZ1wiLCB7XG4gIGFsdDogXCJWdWUgbG9nb1wiLFxuICBzcmM6IF9pbXBvcnRzXzBcbn0sIG51bGwsIC0xIC8qIEhPSVNURUQgKi8pXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eDogYW55LF9jYWNoZTogYW55LCRwcm9wczogYW55LCRzZXR1cDogYW55LCRkYXRhOiBhbnksJG9wdGlvbnM6IGFueSkge1xuICBjb25zdCBfY29tcG9uZW50X0hlbGxvV29ybGQgPSBfcmVzb2x2ZUNvbXBvbmVudChcIkhlbGxvV29ybGRcIikhXG5cbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgIF9jcmVhdGVDb21tZW50Vk5vZGUoXCIge3sgdG9rZW4gfX0gXCIpLFxuICAgIF9ob2lzdGVkXzIsXG4gICAgX2NyZWF0ZVZOb2RlKF9jb21wb25lbnRfSGVsbG9Xb3JsZCwgeyBtc2c6IFwiV2VsY29tZVwiIH0pXG4gIF0pKVxufSIsImltcG9ydCB7IHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCBwdXNoU2NvcGVJZCBhcyBfcHVzaFNjb3BlSWQsIHBvcFNjb3BlSWQgYXMgX3BvcFNjb3BlSWQgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX3dpdGhTY29wZUlkID0gbiA9PiAoX3B1c2hTY29wZUlkKFwiZGF0YS12LTA1MzNiNmExXCIpLG49bigpLF9wb3BTY29wZUlkKCksbilcbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcImhlbGxvXCIgfVxuY29uc3QgX2hvaXN0ZWRfMiA9IC8qI19fUFVSRV9fKi8gX3dpdGhTY29wZUlkKCgpID0+IC8qI19fUFVSRV9fKi9fY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBudWxsLCBcIlRFWFTvvIxURVhU77yMVEVYVO+8jFRFWFTvvIxURVhU77yMVEVYVO+8jFwiLCAtMSAvKiBIT0lTVEVEICovKSlcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4OiBhbnksX2NhY2hlOiBhbnksJHByb3BzOiBhbnksJHNldHVwOiBhbnksJGRhdGE6IGFueSwkb3B0aW9uczogYW55KSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiaDFcIiwgbnVsbCwgX3RvRGlzcGxheVN0cmluZyhfY3R4Lm1zZyksIDEgLyogVEVYVCAqLyksXG4gICAgX2hvaXN0ZWRfMlxuICBdKSlcbn0iLCJcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gXCJ2dWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogXCJIZWxsb1dvcmxkXCIsXG4gIHByb3BzOiB7XG4gICAgbXNnOiBTdHJpbmcsXG4gIH0sXG59KTtcbiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0hlbGxvV29ybGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA1MzNiNmExJnNjb3BlZD10cnVlJnRzPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9IZWxsb1dvcmxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5leHBvcnQgKiBmcm9tIFwiLi9IZWxsb1dvcmxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5cbmltcG9ydCBcIi4vSGVsbG9Xb3JsZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wNTMzYjZhMSZzY29wZWQ9dHJ1ZSZsYW5nPWxlc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvaG9tZS9ydW5uZXIvd29yay9teS1jbGkvbXktY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtMDUzM2I2YTFcIl1dKVxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsIlxuLy8gaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICd2dWV4J1xuaW1wb3J0IHtcbiAgZGVmaW5lQ29tcG9uZW50LFxuICAvLyAgY29tcHV0ZWQsIG9uTW91bnRlZCBcbn0gZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IEhlbGxvV29ybGQgZnJvbSBcIkAvY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZVwiOyAvLyBAIGlzIGFuIGFsaWFzIHRvIC9zcmNcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogXCJIb21lXCIsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBIZWxsb1dvcmxkLFxuICB9LFxuICAvLyBzZXR1cCgpIHtcbiAgLy8gICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlKClcbiAgLy8gICBvbk1vdW50ZWQoKCkgPT4ge1xuICAvLyAgICAgc3RvcmUuZGlzcGF0Y2goJ2dldFVzZXInKVxuICAvLyAgIH0pXG4gIC8vICAgY29uc3QgdG9rZW4gPSBjb21wdXRlZCgoKSA9PiBzdG9yZS5zdGF0ZS50b2tlbilcbiAgLy8gICByZXR1cm4geyB0b2tlbiB9XG4gIC8vIH1cbn0pO1xuIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vaG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmM1ZGQ3NmUmdHM9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL2hvbWUvcnVubmVyL3dvcmsvbXktY2xpL215LWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl1dKVxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IGNyZWF0ZVJvdXRlciwgY3JlYXRlV2ViSGlzdG9yeSwgUm91dGVSZWNvcmRSYXcgfSBmcm9tICd2dWUtcm91dGVyJ1xuaW1wb3J0IGhvbWUgZnJvbSAnLi4vdmlld3MvaG9tZS52dWUnXG5cbmNvbnN0IHJlc29sdmVQYXRoID0gKHBhdGg6IHN0cmluZykgPT4gYC9teS1jbGkvbWFuYWdlLyR7cGF0aH1gXG5cbmNvbnN0IHJvdXRlczogQXJyYXk8Um91dGVSZWNvcmRSYXc+ID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogcmVzb2x2ZVBhdGgoJ2hvbWUnKSxcbiAgICAgICAgbmFtZTogJ2hvbWUnLFxuICAgICAgICBjb21wb25lbnQ6IGhvbWVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogcmVzb2x2ZVBhdGgoJ3Rlc3QnKSxcbiAgICAgICAgbmFtZTogJ3Rlc3QnLFxuICAgICAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi4vdmlld3MvdGVzdCcpXG4gICAgfVxuXVxuXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVSb3V0ZXIoe1xuICAgIGhpc3Rvcnk6IGNyZWF0ZVdlYkhpc3RvcnkoKSxcbiAgICByb3V0ZXNcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUvaW5kZXgnXG5cbmNvbnN0IGh0dHAgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6ICcnLFxuICAgIHRpbWVvdXQ6IDMwMDBcbn0pXG5cbmh0dHAuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxuICAgIChjb25maWcpID0+IHtcbiAgICAgICAgY29uZmlnLmhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9IHN0b3JlLnN0YXRlLnRva2VuXG4gICAgICAgICAgICA/ICdCZWFyZXIgJyArIHN0b3JlLnN0YXRlLnRva2VuXG4gICAgICAgICAgICA6ICdCZWFyZXInXG4gICAgICAgIHJldHVybiBjb25maWdcbiAgICB9LFxuICAgIChlcnJvcikgPT4ge1xuICAgICAgICBQcm9taXNlLnJlamVjdChlcnJvcilcbiAgICB9XG4pXG5cbmh0dHAuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcbiAgICAoY29uZmlnKSA9PiB7XG4gICAgICAgIHJldHVybiBjb25maWcuZGF0YVxuICAgIH0sXG4gICAgKGVycm9yKSA9PiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5yZXNwb25zZSlcbiAgICB9XG4pXG5cbmV4cG9ydCBkZWZhdWx0IGh0dHBcbiIsImltcG9ydCBodHRwIGZyb20gJy4vaHR0cCdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwaUdldDxUPih1cmw6IHN0cmluZywgcGFyYW1zPzogYW55KSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgaHR0cC5nZXQ8VD4odXJsLCBwYXJhbXMpXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpXG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBpUG9zdDxUPih1cmw6IHN0cmluZywgZGF0YT86IGFueSkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGh0dHAucG9zdDxUPih1cmwsIGRhdGEpXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcGlQdXQ8VD4odXJsOiBzdHJpbmcsIGRhdGE/OiBhbnkpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBodHRwLnB1dDxUPih1cmwsIGRhdGEpXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMuZGF0YSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwaURlbGV0ZTxUPih1cmw6IHN0cmluZywgcGFyYW1zPzogYW55KSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgaHR0cC5kZWxldGU8VD4odXJsLCBwYXJhbXMpXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpXG59XG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgTXV0YXRpb25UcmVlLCBBY3Rpb25UcmVlLCBHZXR0ZXJUcmVlIH0gZnJvbSAndnVleCdcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tICcuLi9hamF4L2FwaXMnXG5cbmludGVyZmFjZSBkZWZhdWx0U3RhdGUge1xuICAgIHRva2VuOiBzdHJpbmdcbn1cbmludGVyZmFjZSBSZXNwb25zZSB7XG4gICAgW2tleTogc3RyaW5nXTogYW55XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxTdGF0ZSgpOiBkZWZhdWx0U3RhdGUge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRva2VuOiAnJ1xuICAgIH1cbn1cbmNvbnN0IHN0YXRlOiBkZWZhdWx0U3RhdGUgPSBpbml0aWFsU3RhdGUoKVxuXG5jb25zdCBtdXRhdGlvbnM6IE11dGF0aW9uVHJlZTxkZWZhdWx0U3RhdGU+ID0ge1xuICAgIFNFVF9UT0tFTihzdGF0ZSwgcGF5bG9hZCkge1xuICAgICAgICBzdGF0ZS50b2tlbiA9IHBheWxvYWRcbiAgICB9XG59XG5cbmNvbnN0IGFjdGlvbnM6IEFjdGlvblRyZWU8ZGVmYXVsdFN0YXRlLCBkZWZhdWx0U3RhdGU+ID0ge1xuICAgIGFzeW5jIGdldFVzZXIoeyBjb21taXQgfSkge1xuICAgICAgICBjb25zdCByZXMgPSAoYXdhaXQgZ2V0VXNlcigpKSBhcyBSZXNwb25zZVxuICAgICAgICBjb21taXQoJ1NFVF9UT0tFTicsIHJlcy50b2tlbilcbiAgICB9XG59XG5jb25zdCBnZXR0ZXJzOiBHZXR0ZXJUcmVlPGRlZmF1bHRTdGF0ZSwgZGVmYXVsdFN0YXRlPiA9IHtcbiAgICBoYXNVc2VyKHN0YXRlKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS50b2tlblxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN0b3JlKHtcbiAgICBzdGF0ZSxcbiAgICBtdXRhdGlvbnMsXG4gICAgYWN0aW9ucyxcbiAgICBnZXR0ZXJzLFxuICAgIG1vZHVsZXM6IHt9XG59KVxuIiwiaW1wb3J0IHsgYXBpUG9zdCwgYXBpR2V0LCBhcGlEZWxldGUsIGFwaVB1dCB9IGZyb20gJy4vYXBpTWV0aG9kcydcblxuZXhwb3J0IGNvbnN0IHBvc3RVc2VyID0gKHBhcmFtcz86IGFueSkgPT4gYXBpUG9zdCgnL3VzZXInLCBwYXJhbXMpXG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gKHBhcmFtcz86IGFueSkgPT4gYXBpR2V0KCcvdXNlcicsIHBhcmFtcylcblxuZXhwb3J0IGNvbnN0IGFwaUxvZ2luMiA9IChwYXJhbXM/OiBhbnkpID0+IGFwaVB1dCgnL2F1dGgnLCBwYXJhbXMpXG5cbmV4cG9ydCBjb25zdCBhcGlMb2dpbjMgPSAoKSA9PiBhcGlEZWxldGUoJy9hdXRoJylcbiIsImltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gJ3Z1ZScgLy8gVnVlIDMueCDlvJXlhaUgdnVlIOeahOW9ouW8j1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnIC8vIOW8leWFpSBBUFAg6aG16Z2i57uE5bu6XG5pbXBvcnQgcm91dGVyIGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXG5cbmNvbnN0IGFwcCA9IGNyZWF0ZUFwcChBcHApIC8vIOmAmui/hyBjcmVhdGVBcHAg5Yid5aeL5YyWIGFwcFxuYXBwLnVzZShyb3V0ZXIpLnVzZShzdG9yZSkubW91bnQoJyNyb290JykgLy8g5bCG6aG16Z2i5oyC6L295YiwIHJvb3Qg6IqC54K5XG4iXSwibmFtZXMiOlsiX2hvaXN0ZWRfMSIsImlkIiwiX2hvaXN0ZWRfMiIsIl9ob2lzdGVkXzMiLCJfaG9pc3RlZF80Iiwic2NyaXB0IiwiX2N0eCIsIl9jYWNoZSIsIl9jb21wb25lbnRfcm91dGVyX2xpbmsiLCJfY29tcG9uZW50X3JvdXRlcl92aWV3IiwiXyIsInRvIiwiZGVmYXVsdCIsImNsYXNzIiwiYWx0Iiwic3JjIiwibiIsIl93aXRoU2NvcGVJZCIsIm5hbWUiLCJwcm9wcyIsIm1zZyIsIlN0cmluZyIsIiRwcm9wcyIsIiRzZXR1cCIsIiRkYXRhIiwiJG9wdGlvbnMiLCJjb21wb25lbnRzIiwiSGVsbG9Xb3JsZCIsIl9jb21wb25lbnRfSGVsbG9Xb3JsZCIsInJlc29sdmVQYXRoIiwicGF0aCIsInJvdXRlcyIsImNvbXBvbmVudCIsImhvbWUiLCJoaXN0b3J5IiwiYmFzZVVSTCIsInRpbWVvdXQiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwiaGVhZGVycyIsInN0b3JlIiwic3RhdGUiLCJ0b2tlbiIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc3BvbnNlIiwiZGF0YSIsInVybCIsInBhcmFtcyIsInJlcyIsInJlc29sdmUiLCJhY3Rpb25zIiwiZ2V0VXNlciIsImNvbW1pdCIsImFwaUdldCIsIm11dGF0aW9ucyIsIlNFVF9UT0tFTiIsInBheWxvYWQiLCJnZXR0ZXJzIiwiaGFzVXNlciIsIm1vZHVsZXMiLCJBcHAiLCJtb3VudCJdLCJzb3VyY2VSb290IjoiIn0=