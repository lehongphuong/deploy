(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{vOim:function(t,n,e){"use strict";e.r(n),e.d(n,"MenuModule",function(){return s});var a=e("ofXK"),o=e("tyNb"),r=e("rsbC"),i=e("fXoL"),c=e("Dr4j"),b=e("k95a");let l=(()=>{class t{constructor(t,n,e){var a;this.login=t,this.api=n,this.router=e,this.menuFlag=!1,this.menuMobileFlag=!1,this.settingButton=!1,this.searchFlag=!1,this.isMobile=!1,this.staff={Avatar:"",Fullname:""},this.nameTitle="",this.isShow=!1,this.info=null,this.staff=this.api.getStaffValue,this.idStaff=null===(a=this.api.getStaffValue)||void 0===a?void 0:a.id}ngOnInit(){this.isMobile=this.isMobileDevice(),this.staff.Avatar=""==this.staff.Avatar||null==this.staff.Avatar?"../../../assets/images/logo-admin.png":this.api.getStaffValue.Avatar,this.nameTitle="DASHBOARD"}isMobileDevice(){return void 0!==window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")}logOut(){this.api.logoutStaff()}getNameTitle(t){switch(Number(t)){case 1:this.nameTitle="DASHBOARD";break;case 2:this.nameTitle="L\u1ecaCH S\u1eec MUA H\xc0NG";break;case 3:this.nameTitle="TH\xd4NG TIN T\xc0I KHO\u1ea2N"}}}return t.\u0275fac=function(n){return new(n||t)(i.Jb(c.a),i.Jb(b.a),i.Jb(o.e))},t.\u0275cmp=i.Db({type:t,selectors:[["app-menu"]],decls:48,vars:6,consts:[[1,"navbar","navbar-expand-md","navbar-light"],["type","button","data-toggle","collapse","data-target","#myNavbar",1,"navbar-toggler","ml-auto","mb-2","bg-light"],[1,"navbar-toggler-icon"],["id","myNavbar",1,"collapse","navbar-collapse"],[1,"container-fluid"],[1,"row"],[1,"col-lg-3","col-xl-2","col-md-4","sidebar","fixed-top","col-left"],["routerLink","/",1,"navbar-brand","text-dark","d-block","mx-auto","text-center","mb-4","bottom-border","pb-2"],["src","../../../assets/images/logo-admin1.png","height","60px",3,"alt"],["width","50","height","50","alt","nice",1,"rounded-circle","mr-3",3,"src"],[1,"text-danger","text-capitalize"],[1,"border-bottom","pb-3"],[1,"navbar-nav","flex-column","mt-4"],[1,"nav-item"],["routerLinkActive","current ","routerLink","/manager/admin/a1-dashboard/Theo-doi-ban-than",1,"nav-link","text-dark","p-3","mb-2","sidebar-link",3,"click"],[1,"fas","fa-chart-line","text-dark","fa-lg","mr-3"],["routerLinkActive","current ","routerLink","/manager/admin/b1-history/Lich-su-mua-hang",1,"nav-link","text-dark","p-3","mb-2","sidebar-link",3,"click"],[1,"fas","fa-history","text-dark","fa-lg","mr-3"],["routerLinkActive","current ","routerLink","/manager/admin/c1-account/Thong-tin-tai-khoan",1,"nav-link","text-dark","p-3","mb-2","sidebar-link",3,"click"],[1,"fas","fa-user","text-dark","fa-lg","mr-3"],[1,"col-lg-9","col-xl-10","col-md-8","ml-auto","top-navbar-custom","fixed-top","top-navbar"],[1,"row","row-right-manager"],[1,"col-md-4","d-flex","align-items-center"],[1,"text-white","text-uppercase","mb-0"],[1,"col-md-5","d-flex","align-items-center"],[1,"d-none"],[1,"input-group"],["type","text ","id","search-input ","placeholder","Search here ",1,"form-control"],["type","button ","id","search-button ",1,"btn","btn-light"],[1,"fa","fa-search","text-danger"],[1,"col-md-3","d-flex","justify-content-end","d-flex","align-items-center"],[1,"logo-name"],[3,"click"],[1,"fas","fa-sign-out-alt","text-white","fa-lg"],[1,"row","row-custom"],[1,"col-md-12"]],template:function(t,n){1&t&&(i.Pb(0,"nav",0),i.Pb(1,"button",1),i.Kb(2,"span",2),i.Ob(),i.Pb(3,"div",3),i.Pb(4,"div",4),i.Pb(5,"div",5),i.Pb(6,"div",6),i.Pb(7,"a",7),i.Kb(8,"img",8),i.Ob(),i.Kb(9,"img",9),i.Pb(10,"a",10),i.zc(11),i.Ob(),i.Kb(12,"div",11),i.Pb(13,"ul",12),i.Pb(14,"li",13),i.Pb(15,"a",14),i.Zb("click",function(){return n.getNameTitle(1)}),i.Kb(16,"i",15),i.zc(17," Dashboard "),i.Ob(),i.Ob(),i.Pb(18,"li",13),i.Pb(19,"a",16),i.Zb("click",function(){return n.getNameTitle(2)}),i.Kb(20,"i",17),i.zc(21," L\u1ecbch s\u1eed mua h\xe0ng "),i.Ob(),i.Ob(),i.Pb(22,"li",13),i.Pb(23,"a",18),i.Zb("click",function(){return n.getNameTitle(3)}),i.Kb(24,"i",19),i.zc(25," Th\xf4ng tin t\xe0i kho\u1ea3n "),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Pb(26,"div",20),i.Pb(27,"div",21),i.Pb(28,"div",22),i.Pb(29,"h5",23),i.zc(30),i.Ob(),i.Ob(),i.Pb(31,"div",24),i.Pb(32,"form",25),i.Pb(33,"div",26),i.Kb(34,"input",27),i.Pb(35,"button",28),i.Kb(36,"i",29),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Pb(37,"div",30),i.Pb(38,"div",31),i.Kb(39,"img",9),i.Pb(40,"a",10),i.zc(41),i.Ob(),i.Ob(),i.Pb(42,"div"),i.Pb(43,"a",32),i.Zb("click",function(){return n.logOut()}),i.Kb(44,"i",33),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Pb(45,"div",34),i.Pb(46,"div",35),i.Kb(47,"router-outlet"),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob()),2&t&&(i.yb(8),i.ic("alt",n.staff.Fullname),i.yb(1),i.jc("src",null==n.staff?null:n.staff.Avatar,i.sc),i.yb(2),i.Bc("",n.staff.Fullname," "),i.yb(19),i.Ac(n.nameTitle),i.yb(9),i.jc("src",null==n.staff?null:n.staff.Avatar,i.sc),i.yb(2),i.Bc("",n.staff.Fullname," "))},directives:[o.h,o.g,o.j],styles:['.sidebar[_ngcontent-%COMP%]{height:100vh;background-position:50%;background-repeat:no-repeat;background-size:cover;box-shadow:5px 7px 25px #999}.bottom-border[_ngcontent-%COMP%]{border-bottom:1px groove #eee}.sidebar-link[_ngcontent-%COMP%]{transition:all .4s;padding:16px 10px!important}.sidebar-link[_ngcontent-%COMP%]:hover{background-color:var(--main-color);border-radius:5px}.current[_ngcontent-%COMP%], .sidebar-link[_ngcontent-%COMP%]:hover, .sidebar-link[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{color:#fff!important}.current[_ngcontent-%COMP%]{background-color:var(--main-color);border-radius:7px;transition:all .3s}.current[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff!important}.current[_ngcontent-%COMP%]:hover{background-color:#f66436;border-radius:7px;transform:translateY(-1px)}#search-input[_ngcontent-%COMP%]{background:transparent;border-radius:0;border:none;border-bottom:2px solid #999;transition:all .4s}#search-input[_ngcontent-%COMP%]:focus{background:transparent;box-shadow:none;border-bottom:2px solid #dc3545}#search-button[_ngcontent-%COMP%]{border-radius:50%;padding:10px 16px;transition:all .4s}#search-button[_ngcontent-%COMP%]:hover{background-color:#eee;transform:translateY(-1px)}.icon-parent[_ngcontent-%COMP%]{position:relative}.icon-bullet[_ngcontent-%COMP%]:after{content:"";position:absolute;top:7px;left:15px;height:12px;width:12px;background-color:#f44336;border-radius:50%}.row-custom[_ngcontent-%COMP%]{height:95vh;padding:10px 5px;background:#fff;overflow-y:scroll}@media (max-width:768px){.sidebar[_ngcontent-%COMP%]{height:auto}.sidebar[_ngcontent-%COMP%], .top-navbar[_ngcontent-%COMP%]{position:static}}.sidebar.col-left[_ngcontent-%COMP%]{border-right:1px solid #dcdcdc;background-color:#fff!important}.top-navbar-custom[_ngcontent-%COMP%]{background-color:var(--main-color)}.top-navbar-custom[_ngcontent-%COMP%]   .row-right-manager[_ngcontent-%COMP%]{padding:12px 0}.top-navbar-custom[_ngcontent-%COMP%]   .row-right-manager[_ngcontent-%COMP%]   .logo-name[_ngcontent-%COMP%]   .text-capitalize[_ngcontent-%COMP%]{color:#fff!important}.top-navbar-custom[_ngcontent-%COMP%] > .align-items-center[_ngcontent-%COMP%]{height:30px}']}),t})(),s=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(n){return new(n||t)},providers:[c.a],imports:[[r.a,a.b,o.i.forChild([{path:"",component:l,children:[{path:"",loadChildren:()=>e.e(11).then(e.bind(null,"bZnz")).then(t=>t.ContentModule)}]}])]]}),t})()}}]);