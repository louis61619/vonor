(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c42b6"],{"3a4f":function(e,t,a){"use strict";a.r(t);var n=a("7574"),o={class:"category"};function l(e,t,a,l,d,c){var i=Object(n["resolveComponent"])("PageSearch"),r=Object(n["resolveComponent"])("PageContent"),p=Object(n["resolveComponent"])("PageModal");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,[Object(n["createVNode"])(i,{formConfig:e.searchFormConfig,onQueryBtnClick:e.handleQueryClick,onResetBtnClick:e.handleResetClick},null,8,["formConfig","onQueryBtnClick","onResetBtnClick"]),Object(n["createVNode"])(r,{ref:"pageContentRef",pageName:"category",contentConfig:e.contentTableConfig,onNewBtnClick:e.handleNewData,onEditBtnClick:e.handleEditData},null,8,["contentConfig","onNewBtnClick","onEditBtnClick"]),Object(n["createVNode"])(p,{ref:"pageModalRef",defaultInfo:e.defaultInfo,modalConfig:e.modalConfig,pageName:"department"},null,8,["defaultInfo","modalConfig"])])}var d=a("fe8c"),c=a("3573"),i=a("9d1a"),r=a("707e"),p=a("be8c"),f={formItems:[{field:"name",type:"input",label:"類別名稱",placeholder:"請輸入類別名稱",rules:[]},{field:"createAt",type:"datepicker",label:"創建時間",rules:[],otherOptions:{startPlaceholder:"開始時間",endPlaceholder:"結束時間",type:"daterange"}}],labelWidth:"100px",itemStyle:{padding:"10px 40px"}},C={title:"類別列表",propsList:[{prop:"name",label:"類別名稱",minWidth:"120"},{prop:"createAt",label:"創建時間",minWidth:"250",slotName:"createAt"},{prop:"updateAt",label:"更新時間",minWidth:"250",slotName:"updateAt"},{label:"操作",minWidth:"120",slotName:"handler"}],showIndexColumn:!0},m={formItems:[{field:"name",type:"input",label:"類別名稱",placeholder:"請輸入類別名稱",rules:[]}],colLayout:{span:24},itemStyle:{padding:0}},s=Object(n["defineComponent"])({name:"category",components:{PageSearch:d["a"],PageContent:c["a"],PageModal:i["a"]},setup:function(){var e=Object(r["a"])(),t=e.pageContentRef,a=e.handleQueryClick,n=e.handleResetClick,o=Object(p["a"])(),l=o.pageModalRef,d=o.handleNewData,c=o.handleEditData,i=o.defaultInfo;return{searchFormConfig:f,contentTableConfig:C,pageContentRef:t,handleQueryClick:a,handleResetClick:n,modalConfig:m,pageModalRef:l,handleNewData:d,handleEditData:c,defaultInfo:i}}}),g=a("d8d3"),u=a.n(g);const h=u()(s,[["render",l]]);t["default"]=h}}]);
//# sourceMappingURL=chunk-2d0c42b6.693aa3d3.js.map