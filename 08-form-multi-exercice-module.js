exports.ids=[12],exports.modules={Dh8l:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ExerciceModule",function(){return ExerciceModule});var common=__webpack_require__("ofXK"),fesm2015_forms=__webpack_require__("3Pt+"),router=__webpack_require__("tyNb"),core=__webpack_require__("fXoL");class PrettyJsonPipe{transform(value,...args){return JSON.stringify(value,null,2).replace(/ /g,"&nbsp;").replace(/\n/g,"<br/>")}}PrettyJsonPipe.\u0275fac=function PrettyJsonPipe_Factory(t){return new(t||PrettyJsonPipe)},PrettyJsonPipe.\u0275pipe=core.Gc({name:"prettyjson",type:PrettyJsonPipe,pure:!0});class exercice_component_ExerciceComponent{constructor(fb){this.fb=fb,this.name=new fesm2015_forms.e(""),this.email=new fesm2015_forms.e(""),this.job=new fesm2015_forms.e(""),this.comment=new fesm2015_forms.e(""),this.friend01=new fesm2015_forms.e(""),this.friend02=new fesm2015_forms.e(""),this.exampleForm2=new fesm2015_forms.h({name:new fesm2015_forms.e(""),email:new fesm2015_forms.e(""),job:new fesm2015_forms.e(""),comment:new fesm2015_forms.e("")}),this.exampleForm3=this.fb.group({name:[""],email:[""],job:[""],comment:[""],friends:this.fb.array([])}),this.onResetForm1(),this.onResetForm2(),this.onResetForm3()}ngOnInit(){}onResetForm1(){this.name.setValue("Darth Vader"),this.email.setValue("darthvader@starwars.com"),this.job.setValue("Sith"),this.comment.setValue("Father of Luke Skywalker"),this.friend01.setValue("friend01"),this.friend02.setValue("friend02")}onSetValueForm1(){this.name.setValue("Anakin Skywalker"),this.email.setValue("anakinskywalker@starwars.com"),this.job.setValue("Jedi"),this.comment.setValue("Son of Shmi Skywalker")}onPatchValueForm2(){this.exampleForm2.patchValue({name:"Ben solo",email:"bensolo@starwars.com",job:"Jedi",comment:"Son of Han Solo : PatchValue"})}onSetValueForm2(){this.exampleForm2.setValue({name:"Ben solo",email:"bensolo@starwars.com",job:"Jedi",comment:"Son of Han Solo : SetValue"})}onResetForm2(){this.exampleForm2.get("name").setValue("Kylo Ren"),this.exampleForm2.get("email").setValue("kyloren@starwars.com"),this.exampleForm2.get("job").setValue("Sith"),this.exampleForm2.get("comment").setValue("Killer of Han solo")}get friends(){return this.exampleForm3.get("friends")}onResetForm3(){this.exampleForm3.patchValue({name:"Rey Palpatine",email:"reypalpatine@starwars.com",job:"Sith",comment:"Granddaughter of Palpatine"}),this.friends.push(this.fb.control("Finn")),this.friends.push(this.fb.control("Poe Damaron")),this.friends.push(this.fb.control("C-3PO"))}onUpdateForm3(){this.exampleForm3.patchValue({name:"Rey Skywalker",email:"reyskywalker@starwars.com",job:"Jedi",comment:"Padawan of Luke Skywalker"})}}exercice_component_ExerciceComponent.\u0275fac=function ExerciceComponent_Factory(t){return new(t||exercice_component_ExerciceComponent)(core.Hc(fesm2015_forms.d))},exercice_component_ExerciceComponent.\u0275cmp=core.Bc({type:exercice_component_ExerciceComponent,selectors:[["app-form-appli"]],decls:181,vars:22,consts:[[1,"container-fluid","mb-5"],[1,"row","mb-5"],[1,"col","mt-5"],["id","exampleForms"],[1,"text-center"],["data-toggle","collapse","data-target","#form1",1,"btn","btn-outline-primary","font-weight-bold"],["data-toggle","collapse","data-target","#form2",1,"btn","btn-outline-success","font-weight-bold","ml-4"],["data-toggle","collapse","data-target","#form3",1,"btn","btn-outline-danger","font-weight-bold","ml-4"],[1,"accordion-group"],["id","form1","data-parent","#exampleForms",1,"collapse","show"],[1,"col-4","mt-5"],[1,"card"],[1,"card-body"],[1,"card-title","text-primary","font-weight-bold"],[1,"font-weight-bold"],[1,"col-8","mt-5"],[1,"form-row"],[1,"form-group","col-md-4"],["for","name"],["type","text",1,"form-control",3,"formControl"],["for","email"],["type","email",1,"form-control",3,"formControl"],["for","job"],[1,"form-control",3,"formControl"],[1,"form-group","col-md-6"],["for","comment"],["rows","2",1,"form-control",3,"formControl"],[1,"form-row","justify-content-center"],["type","submit",1,"btn","btn-primary","mr-4",3,"click"],["id","form2","data-parent","#exampleForms",1,"collapse"],[1,"card-title","text-success","font-weight-bold"],[3,"innerHTML"],[3,"formGroup"],["type","text","formControlName","name",1,"form-control"],["type","email","formControlName","email",1,"form-control"],["formControlName","job",1,"form-control"],["rows","2","formControlName","comment",1,"form-control"],[1,"table","table-bordered","table-sm"],["type","submit",1,"btn","btn-success","mr-4",3,"click"],["id","form3","data-parent","#exampleForms",1,"collapse"],[1,"card-title","text-danger","font-weight-bold"],["scope","col"],["type","submit",1,"btn","btn-danger","mr-4",3,"click"]],template:function ExerciceComponent_Template(rf,ctx){1&rf&&(core.Kc(0,"div",0),core.Kc(1,"div",1),core.Kc(2,"div",2),core.Kc(3,"div",3),core.Kc(4,"div",4),core.Kc(5,"button",5),core.gd(6,"Form Control"),core.Jc(),core.Kc(7,"button",6),core.gd(8,"Form Group"),core.Jc(),core.Kc(9,"button",7),core.gd(10,"Form Builder"),core.Jc(),core.Jc(),core.Kc(11,"div",8),core.Kc(12,"div",9),core.Kc(13,"div",0),core.Kc(14,"div",1),core.Kc(15,"div",10),core.Kc(16,"div",11),core.Kc(17,"div",12),core.Kc(18,"h5",13),core.gd(19,"Result With formControl "),core.Jc(),core.Ic(20,"br"),core.Kc(21,"span",14),core.gd(22,"ExampleForm1 : Value"),core.Jc(),core.Ic(23,"br"),core.Ic(24,"br"),core.gd(25),core.Uc(26,"json"),core.Ic(27,"br"),core.gd(28),core.Uc(29,"json"),core.Ic(30,"br"),core.gd(31),core.Uc(32,"json"),core.Ic(33,"br"),core.gd(34),core.Uc(35,"json"),core.Ic(36,"br"),core.Jc(),core.Jc(),core.Jc(),core.Kc(37,"div",15),core.Kc(38,"div",11),core.Kc(39,"div",12),core.Kc(40,"h5",13),core.gd(41,"Reactive Form with FormControl"),core.Jc(),core.Kc(42,"div",16),core.Kc(43,"div",17),core.Kc(44,"label",18),core.gd(45,"Name"),core.Jc(),core.Ic(46,"input",19),core.Jc(),core.Kc(47,"div",17),core.Kc(48,"label",20),core.gd(49,"Email"),core.Jc(),core.Ic(50,"input",21),core.Jc(),core.Kc(51,"div",17),core.Kc(52,"label",22),core.gd(53,"Job"),core.Jc(),core.Kc(54,"select",23),core.Kc(55,"option"),core.gd(56,"Jedi"),core.Jc(),core.Kc(57,"option"),core.gd(58,"Sith"),core.Jc(),core.Jc(),core.Jc(),core.Jc(),core.Kc(59,"div",16),core.Kc(60,"div",24),core.Kc(61,"label",25),core.gd(62,"Comment"),core.Jc(),core.Ic(63,"textarea",26),core.Jc(),core.Jc(),core.Kc(64,"div",27),core.Kc(65,"button",28),core.Rc("click",function ExerciceComponent_Template_button_click_65_listener(){return ctx.onSetValueForm1()}),core.gd(66,"SetValue"),core.Jc(),core.Kc(67,"button",28),core.Rc("click",function ExerciceComponent_Template_button_click_67_listener(){return ctx.onResetForm1()}),core.gd(68,"Reset"),core.Jc(),core.Jc(),core.Jc(),core.Jc(),core.Jc(),core.Jc(),core.Jc(),core.Jc(),core.Kc(69,"div",29),core.Kc(70,"div",0),core.Kc(71,"div",1),core.Kc(72,"div",10),core.Kc(73,"div",11),core.Kc(74,"div",12),core.Kc(75,"h5",30),core.gd(76,"Result with FormGroup & FormControl"),core.Jc(),core.Ic(77,"br"),core.Kc(78,"span",14),core.gd(79,"ExampleForm2 : Value"),core.Jc(),core.Ic(80,"br"),core.Ic(81,"br"),core.Ic(82,"div",31),core.Uc(83,"prettyjson"),core.Jc(),core.Jc(),core.Jc(),core.Kc(84,"div",15),core.Kc(85,"div",11),core.Kc(86,"div",12),core.Kc(87,"h5",30),core.gd(88,"Reactive Form with FormGroup & FormControl "),core.Jc(),core.Kc(89,"form",32),core.Kc(90,"div",16),core.Kc(91,"div",17),core.Kc(92,"label",18),core.gd(93,"Name"),core.Jc(),core.Ic(94,"input",33),core.Jc(),core.Kc(95,"div",17),core.Kc(96,"label",20),core.gd(97,"Email"),core.Jc(),core.Ic(98,"input",34),core.Jc(),core.Kc(99,"div",17),core.Kc(100,"label",22),core.gd(101,"Job"),core.Jc(),core.Kc(102,"select",35),core.Kc(103,"option"),core.gd(104,"Jedi"),core.Jc(),core.Kc(105,"option"),core.gd(106,"Sith"),core.Jc(),core.Jc(),core.Jc(),core.Jc(),core.Kc(107,"div",16),core.Kc(108,"div",24),core.Kc(109,"label",25),core.gd(110,"Comment"),core.Jc(),core.Ic(111,"textarea",36),core.Jc(),core.Kc(112,"div",24),core.Kc(113,"table",37),core.Kc(114,"thead"),core.Kc(115,"tr"),core.Kc(116,"th"),core.gd(117,"Friends"),core.Jc(),core.Jc(),core.Jc(),core.Ic(118,"tbody"),core.Jc(),core.Jc(),core.Jc(),core.Kc(119,"div",27),core.Kc(120,"button",38),core.Rc("click",function ExerciceComponent_Template_button_click_120_listener(){return ctx.onSetValueForm2()}),core.gd(121,"SetValue"),core.Jc(),core.Kc(122,"button",38),core.Rc("click",function ExerciceComponent_Template_button_click_122_listener(){return ctx.onPatchValueForm2()}),core.gd(123,"PatchValue"),core.Jc(),core.Kc(124,"button",38),core.Rc("click",function ExerciceComponent_Template_button_click_124_listener(){return ctx.onResetForm2()}),core.gd(125,"Reset"),core.Jc(),core.Jc(),core.Jc(),core.Jc(),core.Jc(),core.Jc(),core.Jc(),core.Jc(),core.Jc(),core.Kc(126,"div",39),core.Kc(127,"div",0),core.Kc(128,"div",1),core.Kc(129,"div",10),core.Kc(130,"div",11),core.Kc(131,"div",12),core.Kc(132,"h5",40),core.gd(133,"Result with FormBuilder "),core.Jc(),core.Ic(134,"br"),core.Kc(135,"span",14),core.gd(136,"ExampleForm3 : Value"),core.Jc(),core.Ic(137,"br"),core.Ic(138,"br"),core.Ic(139,"div",31),core.Jc(),core.Jc(),core.Jc(),core.Kc(140,"div",15),core.Kc(141,"div",11),core.Kc(142,"div",12),core.Kc(143,"h5",40),core.gd(144,"Reactive Form with FormBuilder"),core.Jc(),core.Kc(145,"form",32),core.Kc(146,"div",16),core.Kc(147,"div",17),core.Kc(148,"label",18),core.gd(149,"Name"),core.Jc(),core.Ic(150,"input",33),core.Jc(),core.Kc(151,"div",17),core.Kc(152,"label",20),core.gd(153,"email"),core.Jc(),core.Ic(154,"input",34),core.Jc(),core.Kc(155,"div",17),core.Kc(156,"label",22),core.gd(157,"Job"),core.Jc(),core.Kc(158,"select",35),core.Kc(159,"option"),core.gd(160,"Jedi"),core.Jc(),core.Kc(161,"option"),core.gd(162,"Sith"),core.Jc(),core.Jc(),core.Jc(),core.Jc(),core.Ic(163,"div",16),core.Kc(164,"div",16),core.Kc(165,"div",24),core.Kc(166,"label",25),core.gd(167,"Comment"),core.Jc(),core.Ic(168,"textarea",36),core.Jc(),core.Kc(169,"div",24),core.Kc(170,"table",37),core.Kc(171,"thead"),core.Kc(172,"tr"),core.Kc(173,"th",41),core.gd(174,"Friends"),core.Jc(),core.Jc(),core.Jc(),core.Ic(175,"tbody"),core.Jc(),core.Jc(),core.Jc(),core.Kc(176,"div",27),core.Kc(177,"button",42),core.Rc("click",function ExerciceComponent_Template_button_click_177_listener(){return ctx.onUpdateForm3()}),core.gd(178,"Load"),core.Jc(),core.Kc(179,"button",42),core.Rc("click",function ExerciceComponent_Template_button_click_179_listener(){return ctx.onResetForm3()}),core.gd(180,"Reset"),core.Jc(),core.Jc(),core.Jc(),core.Jc(),core.Jc(),core.Jc(),core.Jc(),core.Jc(),core.Jc(),core.Jc(),core.Jc(),core.Jc(),core.Jc(),core.Jc()),2&rf&&(core.wc(25),core.id(" name : ",core.Vc(26,12,ctx.name.value),""),core.wc(3),core.id(" email : ",core.Vc(29,14,ctx.email.value),""),core.wc(3),core.id(" job : ",core.Vc(32,16,ctx.job.value),""),core.wc(3),core.id(" comment : ",core.Vc(35,18,ctx.comment.value),""),core.wc(12),core.Wc("formControl",ctx.name),core.wc(4),core.Wc("formControl",ctx.email),core.wc(4),core.Wc("formControl",ctx.job),core.wc(9),core.Wc("formControl",ctx.comment),core.wc(19),core.Wc("innerHTML",core.Vc(83,20,ctx.exampleForm2.value),core.bd),core.wc(7),core.Wc("formGroup",ctx.exampleForm2),core.wc(50),core.Wc("innerHTML",ctx.exampleForm3.value,core.bd),core.wc(6),core.Wc("formGroup",ctx.exampleForm3))},directives:[fesm2015_forms.b,fesm2015_forms.l,fesm2015_forms.f,fesm2015_forms.r,fesm2015_forms.p,fesm2015_forms.s,fesm2015_forms.t,fesm2015_forms.m,fesm2015_forms.i,fesm2015_forms.g],pipes:[common.e,PrettyJsonPipe],styles:[""]});const routes=[{path:"",component:exercice_component_ExerciceComponent,children:[]}];class ExerciceRoutingModule{}ExerciceRoutingModule.\u0275mod=core.Fc({type:ExerciceRoutingModule}),ExerciceRoutingModule.\u0275inj=core.Ec({factory:function ExerciceRoutingModule_Factory(t){return new(t||ExerciceRoutingModule)},imports:[[router.b.forChild(routes)],router.b]});class ExerciceModule{}ExerciceModule.\u0275mod=core.Fc({type:ExerciceModule}),ExerciceModule.\u0275inj=core.Ec({factory:function ExerciceModule_Factory(t){return new(t||ExerciceModule)},providers:[],imports:[[common.b,ExerciceRoutingModule,fesm2015_forms.k,fesm2015_forms.q]]})}};