exports.ids=[4],exports.modules={"4KXE":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"B2DetailRecipeModule",function(){return B2DetailRecipeModule});var common=__webpack_require__("rsbC"),fesm2015_common=__webpack_require__("ofXK"),core=__webpack_require__("fXoL"),router=__webpack_require__("tyNb"),api_service=__webpack_require__("k95a"),seo_service=__webpack_require__("zJxG");function B2DetailRecipeComponent_button_38_Template(rf,ctx){if(1&rf){const _r6=core.Qc();core.Pc(0,"button",28),core.Zc("click",function B2DetailRecipeComponent_button_38_Template_button_click_0_listener(){core.qd(_r6);const ctx_r5=core.bd();return ctx_r5.openPdf(null==ctx_r5.recipeDetail?null:ctx_r5.recipeDetail.PdfLink)}),core.Kc(1,"i",29),core.zd(2),core.Oc()}if(2&rf){const ctx_r0=core.bd();core.yc(2),core.Bd("PDF ",ctx_r0.recipeDetail.PdfLink,"")}}function B2DetailRecipeComponent_div_39_Template(rf,ctx){if(1&rf&&(core.Pc(0,"div",30),core.Kc(1,"img",31),core.Pc(2,"span"),core.zd(3),core.Oc(),core.Pc(4,"span",32),core.zd(5),core.Oc(),core.Oc()),2&rf){const itemIngredientRecipe_r7=ctx.$implicit;core.yc(1),core.id("src",itemIngredientRecipe_r7.Image,core.sd),core.yc(2),core.Bd("",null==itemIngredientRecipe_r7?null:itemIngredientRecipe_r7.Name,": "),core.yc(2),core.Bd("",null==itemIngredientRecipe_r7?null:itemIngredientRecipe_r7.Weight," gram")}}function B2DetailRecipeComponent_button_41_Template(rf,ctx){if(1&rf){const _r9=core.Qc();core.Pc(0,"button",33),core.Zc("click",function B2DetailRecipeComponent_button_41_Template_button_click_0_listener(){core.qd(_r9);const ctx_r8=core.bd();return ctx_r8.openPdf(null==ctx_r8.recipeDetail?null:ctx_r8.recipeDetail.PdfLink)}),core.Kc(1,"i",29),core.zd(2,"PDF"),core.Oc()}}function B2DetailRecipeComponent_div_45_Template(rf,ctx){if(1&rf&&(core.Pc(0,"div",34),core.Pc(1,"div",35),core.Pc(2,"div",36),core.Kc(3,"img",37),core.Pc(4,"div",38),core.zd(5),core.Oc(),core.Oc(),core.Oc(),core.Pc(6,"div",39),core.Kc(7,"p",40),core.Oc(),core.Oc()),2&rf){const itemInstructionRecipe_r10=ctx.$implicit;core.yc(3),core.id("src",itemInstructionRecipe_r10.image,core.sd),core.yc(2),core.Bd(" ",itemInstructionRecipe_r10.Postion," "),core.yc(2),core.id("innerHtml",itemInstructionRecipe_r10.DesciptionStep,core.rd)}}function B2DetailRecipeComponent_div_51_Template(rf,ctx){if(1&rf){const _r13=core.Qc();core.Pc(0,"div",41),core.Pc(1,"div",42),core.Pc(2,"img",43),core.Zc("click",function B2DetailRecipeComponent_div_51_Template_img_click_2_listener(){core.qd(_r13);const ItemRecipeYouCanLike_r11=ctx.$implicit;return core.bd().onRecipeClick(null==ItemRecipeYouCanLike_r11?null:ItemRecipeYouCanLike_r11.id,null==ItemRecipeYouCanLike_r11?null:ItemRecipeYouCanLike_r11.Title)}),core.Oc(),core.Pc(3,"div",44),core.Pc(4,"h5",45),core.Zc("click",function B2DetailRecipeComponent_div_51_Template_h5_click_4_listener(){core.qd(_r13);const ItemRecipeYouCanLike_r11=ctx.$implicit;return core.bd().onRecipeClick(null==ItemRecipeYouCanLike_r11?null:ItemRecipeYouCanLike_r11.id,null==ItemRecipeYouCanLike_r11?null:ItemRecipeYouCanLike_r11.Title)}),core.zd(5),core.Oc(),core.Pc(6,"h6"),core.Kc(7,"i",46),core.zd(8),core.Pc(9,"span"),core.zd(10),core.Oc(),core.Oc(),core.Oc(),core.Oc(),core.Oc()}if(2&rf){const ItemRecipeYouCanLike_r11=ctx.$implicit;core.yc(2),core.id("src",null==ItemRecipeYouCanLike_r11?null:ItemRecipeYouCanLike_r11.Thumbnail,core.sd)("alt",null==ItemRecipeYouCanLike_r11?null:ItemRecipeYouCanLike_r11.name),core.yc(2),core.id("title",null==ItemRecipeYouCanLike_r11?null:ItemRecipeYouCanLike_r11.Title),core.yc(1),core.Ad(null==ItemRecipeYouCanLike_r11?null:ItemRecipeYouCanLike_r11.titleShort),core.yc(3),core.Bd("",null==ItemRecipeYouCanLike_r11?null:ItemRecipeYouCanLike_r11.NumberView," "),core.yc(2),core.Bd("- ",null==ItemRecipeYouCanLike_r11?null:ItemRecipeYouCanLike_r11.name,"")}}class B2DetailRecipeComponent{constructor(activatedRoute,router,api,seoService){this.activatedRoute=activatedRoute,this.router=router,this.api=api,this.seoService=seoService,this.subscription=[],this.recipeDetail={Title:"",NumberView:"",TotalTime:"",PrepareTime:"",Thumbnail:"",ImageBanner:"",ImageEnergy:"",PdfLink:"",CreatedAt:"",Description:"",CookingDifficultyName:""},this.urlSEO=""}ngOnInit(){this.api.scrollToTop(),this.activatedRoute.params.subscribe(param=>{this.idRecipe=param.id}),this.updateNumView(),this.urlSEO="https://rolievn.com"+this.router.url}ngOnDestroy(){this.subscription.forEach(item=>{item.unsubscribe()})}updateNumView(){const param={id:this.idRecipe};this.subscription.push(this.api.excuteAllByWhat(param,"2508",!0).subscribe(data=>{data&&(this.getDetailRecipe(),this.getInstructionRecipe(),this.getIngredientRecipe(),this.getRecipeYouCanLike())}))}getDetailRecipe(){const param={idRecipe:this.idRecipe};this.subscription.push(this.api.excuteAllByWhat(param,"2503",!0).subscribe(data=>{data.length>0&&(this.recipeDetail=data[0],this.seoService.setTitle(this.recipeDetail.Title),this.seoService.setSocialMediaTagsGoogle(this.recipeDetail.Description,this.recipeDetail.Title),this.seoService.setSocialMediaTagsFacebook(this.recipeDetail.Title,this.recipeDetail.Thumbnail,this.urlSEO,this.recipeDetail.Description),this.seoService.setSocialMediaTagsTwitter(this.recipeDetail.Title,this.recipeDetail.Thumbnail,this.recipeDetail.Description))}))}getIngredientRecipe(){const param={idRecipe:this.idRecipe};this.subscription.push(this.api.excuteAllByWhat(param,"2700",!0).subscribe(data=>{data.length>0&&(this.listIngredientRecipe=data)}))}openPdf(link){window.open(link,"_blank")}getInstructionRecipe(){const param={idRecipe:this.idRecipe};this.subscription.push(this.api.excuteAllByWhat(param,"2800",!0).subscribe(data=>{data.length>0&&(this.listInstructionRecipe=data)}))}getRecipeYouCanLike(){const param={idRecipe:this.idRecipe};this.subscription.push(this.api.excuteAllByWhat(param,"2505",!0).subscribe(data=>{data.length>0&&(data.forEach(item=>{item.Title.length>37?item.titleShort=item.Title.slice(0,37)+"...":item.titleShort=item.Title}),this.listRecipeYouCanLike=data)}))}onRecipeClick(id,title){let formatTitle=this.api.cleanAccents(title).split(" ").join("-");formatTitle=formatTitle.replace(/\//gi,"");const url="/b2-detail-recipe/"+id+"/"+formatTitle;this.router.navigate([url.toLowerCase()]),this.idRecipe=id,this.updateNumView(),this.getInstructionRecipe(),this.getIngredientRecipe(),this.getRecipeYouCanLike(),this.api.scrollToTop()}}B2DetailRecipeComponent.\u0275fac=function B2DetailRecipeComponent_Factory(t){return new(t||B2DetailRecipeComponent)(core.Jc(router.a),core.Jc(router.e),core.Jc(api_service.a),core.Jc(seo_service.a))},B2DetailRecipeComponent.\u0275cmp=core.Dc({type:B2DetailRecipeComponent,selectors:[["app-b2-detail-recipe"]],decls:52,vars:16,consts:[[1,"banner__header"],["alt","banner",3,"src"],[1,"container"],[1,"container__box"],[1,"title-h3"],[1,"container__box-datetime"],[1,"container__box-date"],["aria-hidden","true",1,"far","fa-clock"],[1,"container__box-datetime-view"],["aria-hidden","true",1,"far","fa-eye"],[1,"container__box-content","row"],[1,"col-md-9","content-main"],[3,"innerHtml"],[1,"col-md-3","left-content"],[1,"total-time"],[1,"title"],[1,"text"],[1,"container__box-ingredient"],[1,"row"],[1,"col-md-10"],["class","btn btn-outline-info-custom btn-outline-info-custom-mobile",3,"click",4,"ngIf"],["class","col-md-6 ingredient-item",4,"ngFor","ngForOf"],[1,"col-md-2"],["class","btn btn-outline-info-custom btn-outline-info-custom-dek ",3,"click",4,"ngIf"],[1,"container__instructions"],["class","row instructions-item",4,"ngFor","ngForOf"],[1,"container__under"],["class","col-md-6 col-lg-3",4,"ngFor","ngForOf"],[1,"btn","btn-outline-info-custom","btn-outline-info-custom-mobile",3,"click"],[1,"fas","fa-download","pr-2"],[1,"col-md-6","ingredient-item"],["alt","ingredient",3,"src"],[1,"gram"],[1,"btn","btn-outline-info-custom","btn-outline-info-custom-dek",3,"click"],[1,"row","instructions-item"],[1,"col-md-3"],[1,"img"],["alt","instruction",3,"src"],[1,"step"],[1,"col-md-9","pl-md-0"],[1,"desc",3,"innerHtml"],[1,"col-md-6","col-lg-3"],[1,"container__under-like"],["width","100%",3,"src","alt","click"],[1,"container__under-likeitem"],[3,"title","click"],["aria-hidden","true",1,"far","fa-eye","pr-1"]],template:function B2DetailRecipeComponent_Template(rf,ctx){1&rf&&(core.Pc(0,"div",0),core.Kc(1,"img",1),core.Oc(),core.Pc(2,"div",2),core.Pc(3,"div",3),core.Pc(4,"h3",4),core.zd(5),core.Oc(),core.Pc(6,"div",5),core.Pc(7,"h6",6),core.Kc(8,"i",7),core.zd(9),core.cd(10,"date"),core.Oc(),core.Pc(11,"h6",8),core.Kc(12,"i",9),core.zd(13),core.Oc(),core.Oc(),core.Pc(14,"div",10),core.Pc(15,"div",11),core.Kc(16,"p",12),core.Oc(),core.Pc(17,"div",13),core.Pc(18,"div",14),core.Pc(19,"p",15),core.zd(20,"T\u1ed5ng th\u1eddi gian"),core.Oc(),core.Pc(21,"p",16),core.zd(22),core.Oc(),core.Oc(),core.Pc(23,"div",14),core.Pc(24,"p",15),core.zd(25,"Th\u1eddi gian chu\u1ea9n b\u1ecb"),core.Oc(),core.Pc(26,"p",16),core.zd(27),core.Oc(),core.Oc(),core.Pc(28,"div",14),core.Pc(29,"p",15),core.zd(30,"\u0110\u1ed9 kh\xf3"),core.Oc(),core.Pc(31,"p",16),core.zd(32),core.Oc(),core.Oc(),core.Oc(),core.Oc(),core.Oc(),core.Pc(33,"div",17),core.Pc(34,"div",18),core.Pc(35,"div",19),core.Pc(36,"h3",15),core.zd(37,"Nguy\xean li\u1ec7u "),core.xd(38,B2DetailRecipeComponent_button_38_Template,3,1,"button",20),core.Oc(),core.xd(39,B2DetailRecipeComponent_div_39_Template,6,3,"div",21),core.Oc(),core.Pc(40,"div",22),core.xd(41,B2DetailRecipeComponent_button_41_Template,3,0,"button",23),core.Oc(),core.Oc(),core.Oc(),core.Pc(42,"div",24),core.Pc(43,"h3",15),core.zd(44,"H\u01b0\u1edbng d\u1eabn"),core.Oc(),core.xd(45,B2DetailRecipeComponent_div_45_Template,8,3,"div",25),core.Oc(),core.Oc(),core.Pc(46,"div",2),core.Pc(47,"div",26),core.Pc(48,"h3",15),core.zd(49," C\xf3 th\u1ec3 b\u1ea1n th\xedch... "),core.Oc(),core.Pc(50,"div",18),core.xd(51,B2DetailRecipeComponent_div_51_Template,11,6,"div",27),core.Oc(),core.Oc(),core.Oc()),2&rf&&(core.yc(1),core.id("src",null==ctx.recipeDetail?null:ctx.recipeDetail.ImageBanner,core.sd),core.yc(4),core.Ad(null==ctx.recipeDetail?null:ctx.recipeDetail.Title),core.yc(4),core.Bd(" ",core.ed(10,13,null==ctx.recipeDetail?null:ctx.recipeDetail.CreatedAt,"dd/MM/yyyy")," "),core.yc(4),core.Bd(" ",null==ctx.recipeDetail?null:ctx.recipeDetail.NumberView,""),core.yc(3),core.id("innerHtml",ctx.recipeDetail.Description,core.rd),core.yc(6),core.Ad(null==ctx.recipeDetail?null:ctx.recipeDetail.TotalTime),core.yc(5),core.Ad(null==ctx.recipeDetail?null:ctx.recipeDetail.PrepareTime),core.yc(5),core.Ad(null==ctx.recipeDetail?null:ctx.recipeDetail.CookingDifficultyName),core.yc(6),core.id("ngIf",""!=ctx.recipeDetail.PdfLink),core.yc(1),core.id("ngForOf",ctx.listIngredientRecipe),core.yc(2),core.id("ngIf",""!=ctx.recipeDetail.PdfLink),core.yc(4),core.id("ngForOf",ctx.listInstructionRecipe),core.yc(6),core.id("ngForOf",ctx.listRecipeYouCanLike))},directives:[fesm2015_common.l,fesm2015_common.k],pipes:[fesm2015_common.e],styles:[".nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{background-color:var(--main-color)!important;border-bottom:3px solid #f2c94c}.header[_ngcontent-%COMP%]{height:55px;background-color:#fff}.header[_ngcontent-%COMP%]   .header__info[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.header[_ngcontent-%COMP%]   .header__info[_ngcontent-%COMP%]   .header__info-list[_ngcontent-%COMP%]{list-style:none;padding-left:50px}.header[_ngcontent-%COMP%]   .header__info[_ngcontent-%COMP%]   .header__info-list[_ngcontent-%COMP%]   .header__info-item[_ngcontent-%COMP%]{display:inline-block;padding-top:15px;font-size:13px;line-height:15px;letter-spacing:-.015em;margin:0 15px;font-weight:700}.header__nav-outside[_ngcontent-%COMP%]{height:89px}.header__nav-outside[_ngcontent-%COMP%], .header__nav-outside[_ngcontent-%COMP%]   .header__nav[_ngcontent-%COMP%]{background-color:var(--main-color)}.header__nav-outside[_ngcontent-%COMP%]   .header__nav[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]{margin-top:20px;padding:0 20px 0 90px}.header__nav-outside[_ngcontent-%COMP%]   .header__nav[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;font-size:22px}.banner__header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:400px;width:100%;object-fit:cover}.container__box[_ngcontent-%COMP%]{box-shadow:0 1px 2px rgba(0,0,0,.25);padding:30px;background-color:#fff;position:relative;top:-40px}.container__box[_ngcontent-%COMP%]   .title-h3[_ngcontent-%COMP%]{padding-bottom:10px;border-bottom:1px solid #e6e2e2;font-size:30px;font-weight:500}@media (max-width:420px){.container__box[_ngcontent-%COMP%]   .title-h3[_ngcontent-%COMP%]{font-size:20px}}.container__box[_ngcontent-%COMP%]   .container__box-datetime[_ngcontent-%COMP%]{display:flex;border-bottom:.5px solid #ededed}.container__box[_ngcontent-%COMP%]   .container__box-datetime[_ngcontent-%COMP%]   .container__box-datetime-view[_ngcontent-%COMP%]{margin-left:10px;color:#989898;font-size:14px;font-weight:400}.container__box[_ngcontent-%COMP%]   .container__box-datetime[_ngcontent-%COMP%]   .container__box-date[_ngcontent-%COMP%]{color:#989898;font-size:14px;font-weight:400}.container__box[_ngcontent-%COMP%]   .container__box-content[_ngcontent-%COMP%]{margin-top:20px}.container__box[_ngcontent-%COMP%]   .container__box-content[_ngcontent-%COMP%]   .content-main[_ngcontent-%COMP%]{font-size:15px}.container__box[_ngcontent-%COMP%]   .container__box-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .total-time[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.container__box[_ngcontent-%COMP%]   .container__box-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .total-time[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:16px;font-weight:500}.container__box[_ngcontent-%COMP%]   .container__box-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .total-time[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:14px;font-weight:400}.container__under[_ngcontent-%COMP%]{margin-bottom:20px}.container__under[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:24px;margin-bottom:20px;font-weight:500}.container__under[_ngcontent-%COMP%]   .container__under-like[_ngcontent-%COMP%]{cursor:pointer;border:.2px solid #e6e2e2}@media (max-width:1024px){.container__under[_ngcontent-%COMP%]   .container__under-like[_ngcontent-%COMP%]{margin-bottom:20px}}.container__under[_ngcontent-%COMP%]   .container__under-like[_ngcontent-%COMP%]:hover{box-shadow:var(--box-showdown-hover)}.container__under[_ngcontent-%COMP%]   .container__under-like[_ngcontent-%COMP%]:hover   h5[_ngcontent-%COMP%]{color:var(--main-color)}.container__under[_ngcontent-%COMP%]   .container__under-like[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:150px;object-fit:cover}.container__under[_ngcontent-%COMP%]   .container__under-like[_ngcontent-%COMP%]   .container__under-likeitem[_ngcontent-%COMP%]{padding:10px}.container__under[_ngcontent-%COMP%]   .container__under-like[_ngcontent-%COMP%]   .container__under-likeitem[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:17px;font-weight:400;height:40px}@media (max-width:420px){.container__under[_ngcontent-%COMP%]   .container__under-like[_ngcontent-%COMP%]   .container__under-likeitem[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{height:auto}}.container__under[_ngcontent-%COMP%]   .container__under-like[_ngcontent-%COMP%]   .container__under-likeitem[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:14px;color:#837e7e;font-weight:400}.banner__qc[_ngcontent-%COMP%]{background-image:url(https://xwatch.vn/images/slideshow/2020/05/20/original/chung-nhan-cup-vang-xwatch-1170x400_1589947346.jpg);height:400px;margin-bottom:20px}.container__instructions[_ngcontent-%COMP%]{border:1px solid #e6e2e2;box-shadow:0 1px 2px rgba(0,0,0,.25);padding:30px 30px 0;margin:30px 0}.container__instructions[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:24px;color:#000;margin-bottom:30px}.instructions-item[_ngcontent-%COMP%]{margin-bottom:35px}@media (max-width:420px){.instructions-item[_ngcontent-%COMP%]{margin-bottom:20px;border-bottom:1px solid #dadada}}.instructions-item[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{position:relative}.instructions-item[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:cover;height:120px;width:90%}.instructions-item[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]{position:absolute;top:-18px;right:0;width:40px;height:40px;background:#bfbfbf;border-radius:50%;text-align:center;padding-top:8px;color:#fff;font-size:17px;font-weight:700}.instructions-item[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{font-weight:400;font-size:16px;line-height:19px;align-items:center;letter-spacing:-.015em}@media (max-width:420px){.instructions-item[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{margin-top:15px}}.container__box-ingredient[_ngcontent-%COMP%]{box-shadow:0 1px 2px rgba(0,0,0,.25);padding:30px 30px 20px}.container__box-ingredient[_ngcontent-%COMP%]   h3.title[_ngcontent-%COMP%]{font-size:24px;color:#000;margin-bottom:30px}.container__box-ingredient[_ngcontent-%COMP%]   .ingredient-item[_ngcontent-%COMP%]{margin-bottom:25px}.container__box-ingredient[_ngcontent-%COMP%]   .ingredient-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:55px;height:55px;border-radius:50%;object-fit:cover}.container__box-ingredient[_ngcontent-%COMP%]   .ingredient-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;padding-left:15px;font-weight:500;display:inline-block}.container__box-ingredient[_ngcontent-%COMP%]   .ingredient-item[_ngcontent-%COMP%]   .gram[_ngcontent-%COMP%]{font-weight:400;padding-left:5px;font-size:15px}.btn-outline-info-custom[_ngcontent-%COMP%]{color:var(--main-color);background-color:initial;background-image:none;border-color:var(--main-color)}.btn-outline-info-custom[_ngcontent-%COMP%]:hover{background-color:var(--main-color);color:#fff}@media (max-width:420px){.btn-outline-info-custom-dek[_ngcontent-%COMP%]{display:none}}.btn-outline-info-custom-mobile[_ngcontent-%COMP%]{display:none;margin-left:20px;font-size:14px;padding:5px 19px}@media (max-width:420px){.btn-outline-info-custom-mobile[_ngcontent-%COMP%]{display:inline-block}}@media (max-width:775px){.app[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container__header[_ngcontent-%COMP%]   .container__header-left[_ngcontent-%COMP%]   .container__header-main[_ngcontent-%COMP%]   .container__header-main-block[_ngcontent-%COMP%], .app[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%], .app[_ngcontent-%COMP%]   .header__nav-outside[_ngcontent-%COMP%]{height:auto}}.banner__header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:400px;width:100%;object-fit:cover}"]});class B2DetailRecipeModule{}B2DetailRecipeModule.\u0275mod=core.Hc({type:B2DetailRecipeModule}),B2DetailRecipeModule.\u0275inj=core.Gc({factory:function B2DetailRecipeModule_Factory(t){return new(t||B2DetailRecipeModule)},imports:[[common.a,fesm2015_common.b,router.i.forChild([{path:"",component:B2DetailRecipeComponent,children:[]}])]]})},zJxG:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return SEOService});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("fXoL"),_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("jhN1");class MetaTag{constructor(name,value,isFacebook){this.name=name,this.value=value,this.isFacebook=isFacebook}}class SEOService{constructor(titleService,metaService){this.titleService=titleService,this.metaService=metaService,this.urlMeta="og:url",this.titleMeta="og:title",this.descriptionMeta="og:description",this.imageMeta="og:image",this.secureImageMeta="og:image:secure_url",this.twitterTitleMeta="twitter:text:title",this.twitterImageMeta="twitter:image"}setTitle(title){this.titleService.setTitle(title)}setSocialMediaTagsGoogle(description,keywords){var tags=[new MetaTag("description",description,!1),new MetaTag("keywords",keywords,!1)];this.setTags(tags)}setSocialMediaTagsFacebook(title,image,url,description){var tags=[new MetaTag("og:title",title,!0),new MetaTag("og:image",image,!0),new MetaTag("og:url",url,!0),new MetaTag("og:description",description,!0)];this.setTags(tags)}setSocialMediaTagsTwitter(title,image,description){var tags=[new MetaTag("twitter:title",title,!1),new MetaTag("twitter:image",image,!1),new MetaTag("twitter:description",description,!1)];this.setTags(tags)}setTags(tags){console.log(tags),tags.forEach(siteTag=>{siteTag.isFacebook?(this.metaService.getTag(`property='${siteTag.name}'`),this.metaService.updateTag({property:siteTag.name,content:siteTag.value})):(this.metaService.getTag(`name='${siteTag.name}'`),this.metaService.updateTag({name:siteTag.name,content:siteTag.value}))})}}SEOService.\u0275fac=function SEOService_Factory(t){return new(t||SEOService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Wc(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.g),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Wc(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.f))},SEOService.\u0275prov=_angular_core__WEBPACK_IMPORTED_MODULE_0__.Fc({token:SEOService,factory:SEOService.\u0275fac,providedIn:"root"})}};