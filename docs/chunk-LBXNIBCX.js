import{A as _,B as W,C as w,D as F,E as R,F as X,G as N,H as g,I as D,J as Y,K as Z,O as ee,Q as te,R as ie,S as V,W as M,X as I,Y as ne,a as $,b as U,c as H,d as z,e as C,f as J,g as T,h as q,i as h,j as B,k as G,l as K,m as L,n as s,o as f,p as u,q as l,r,s as o,t as p,u as Q,v as b,w as S,x as P,y as a,z as d}from"./chunk-PLAZTP52.js";var y=(()=>{let e=class e{constructor(i){this.http=i,this.apiHost="https://restcountries.com/v3.1",this.cacheStore={byCapital:{term:"",countries:[]},byName:{term:"",countries:[]},byRegion:{region:"",countries:[]}},this.loadFromLocalStorage()}saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadFromLocalStorage(){localStorage.getItem("cacheStore")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStore")))}searchCountriesByName(i){return this.searchCountries("name",i).pipe(C(n=>this.cacheStore.byName={term:i,countries:n}),C(()=>this.saveToLocalStorage()))}searchCountriesByCapital(i){return this.searchCountries("capital",i).pipe(C(n=>this.cacheStore.byCapital={term:i,countries:n}),C(()=>this.saveToLocalStorage()))}searchCountriesByRegion(i){return this.searchCountries("region",i.toString()).pipe(C(n=>this.cacheStore.byRegion={region:i,countries:n}),C(()=>this.saveToLocalStorage()))}searchCountryByAlphacode(i){return this.searchCountries("alpha",i).pipe(U(n=>n.length>0?n[0]:null))}searchCountries(i,n){let m=`${this.apiHost}/${i}/${n}`;return this.http.get(m).pipe(H(v=>(console.error("Error => ",v),$([]))))}};e.\u0275fac=function(n){return new(n||e)(q(Z))},e.\u0275prov=J({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var pe=t=>["/countries/by",t];function de(t,e){t&1&&(r(0,"div",2),a(1,` There are no countries to display
`),o())}function ue(t,e){if(t&1&&(r(0,"tr")(1,"td"),a(2),o(),r(3,"td"),p(4,"img",5),o(),r(5,"td"),a(6),o(),r(7,"td"),a(8),o(),r(9,"td"),a(10),w(11,"number"),o(),r(12,"td")(13,"a",6),a(14,"See more"),o()()()),t&2){let c=e.$implicit,i=e.index;s(2),d(i+1),s(2),l("src",c.flags.svg,L)("alt",c.flags.alt),s(2),d(c.name.common),s(2),d(c.capital),s(2),d(F(11,7,c.population)),s(3),l("routerLink",W(9,pe,c.cca2))}}function he(t,e){if(t&1&&(r(0,"table",3)(1,"thead")(2,"tr")(3,"th"),a(4,"#"),o(),r(5,"th"),a(6,"Flag"),o(),r(7,"th"),a(8,"Country"),o(),r(9,"th"),a(10,"Capital"),o(),r(11,"th"),a(12,"Population"),o(),p(13,"th"),o()(),r(14,"tbody"),u(15,ue,15,11,"tr",4),o()()),t&2){let c=S();s(15),l("ngForOf",c.countries)}}var E=(()=>{let e=class e{constructor(){this.countries=[]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["table",""],["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(n,m){if(n&1&&u(0,de,2,0,"div",1)(1,he,16,1,"ng-template",null,0,R),n&2){let v=P(2);l("ngIf",m.countries.length<=0)("ngIfElse",v)}},dependencies:[N,g,ie,D],styles:["img[_ngcontent-%COMP%]{width:35px}"]});let t=e;return t})();function ge(t,e){t&1&&p(0,"shared-loading-spinner")}var re=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[],this.isLoading=!1,this.term=""}searchCountries(i){this.isLoading=!0,this.countriesService.searchCountriesByCapital(i).subscribe({next:n=>{this.countries=n,this.isLoading=!1},error:()=>alert("Uncaught error")})}ngOnInit(){this.term=this.countriesService.cacheStore.byCapital.term,this.countries=this.countriesService.cacheStore.byCapital.countries}};e.\u0275fac=function(n){return new(n||e)(f(y))},e.\u0275cmp=h({type:e,selectors:[["countries-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Enter capital name",3,"onDebounce","initialValue"],[4,"ngIf"],[3,"countries"]],template:function(n,m){n&1&&(r(0,"h2"),a(1,"Search countries by capital"),o(),p(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search-box",2),b("onDebounce",function(k){return m.searchCountries(k)}),o()()(),r(6,"div",0)(7,"div",1),p(8,"hr"),u(9,ge,1,0,"shared-loading-spinner",3),p(10,"countries-table",4),o()()),n&2&&(s(5),l("initialValue",m.term),s(4),l("ngIf",m.isLoading),s(),l("countries",m.countries))},dependencies:[g,I,M,E]});let t=e;return t})();function ye(t,e){t&1&&p(0,"shared-loading-spinner")}var ae=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[],this.isLoading=!1,this.term=""}searchCountries(i){this.isLoading=!0,this.countriesService.searchCountriesByName(i).subscribe(n=>{this.isLoading=!1,this.countries=n})}ngOnInit(){this.term=this.countriesService.cacheStore.byName.term,this.countries=this.countriesService.cacheStore.byName.countries}};e.\u0275fac=function(n){return new(n||e)(f(y))},e.\u0275cmp=h({type:e,selectors:[["countries-by-country-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Enter country name",3,"onDebounce","initialValue"],[4,"ngIf"],[3,"countries"]],template:function(n,m){n&1&&(r(0,"h2"),a(1,"Search countries by name"),o(),p(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search-box",2),b("onDebounce",function(k){return m.searchCountries(k)}),o()()(),r(6,"div",0)(7,"div",1),p(8,"hr"),u(9,ye,1,0,"shared-loading-spinner",3),p(10,"countries-table",4),o()()),n&2&&(s(5),l("initialValue",m.term),s(4),l("ngIf",m.isLoading),s(),l("countries",m.countries))},dependencies:[g,I,M,E]});let t=e;return t})();function ve(t,e){if(t&1){let c=Q();r(0,"button",6),b("click",function(){let n=G(c).$implicit,m=S();return K(m.searchCountries(n))}),a(1),o()}if(t&2){let c=e.$implicit,i=S();l("ngClass",i.selectedRegion===c?"btn-info":"btn-light"),s(),_(" ",c," ")}}function Ce(t,e){t&1&&p(0,"shared-loading-spinner")}var se=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[],this.isLoading=!1,this.regions=["Africa","Americas","Asia","Europe","Oceania"]}searchCountries(i){this.selectedRegion=i,this.isLoading=!0,this.countriesService.searchCountriesByRegion(i).subscribe(n=>{this.isLoading=!1,this.countries=n})}ngOnInit(){this.selectedRegion=this.countriesService.cacheStore.byRegion.region,this.countries=this.countriesService.cacheStore.byRegion.countries}};e.\u0275fac=function(n){return new(n||e)(f(y))},e.\u0275cmp=h({type:e,selectors:[["countries-by-region-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[4,"ngIf"],[3,"countries"],[1,"btn","mx-2",3,"click","ngClass"]],template:function(n,m){n&1&&(r(0,"h2"),a(1,"Search countries by region"),o(),p(2,"hr"),r(3,"div",0)(4,"div",1),u(5,ve,2,2,"button",2),o()(),r(6,"div",0)(7,"div",3),p(8,"hr"),u(9,Ce,1,0,"shared-loading-spinner",4),p(10,"countries-table",5),o()()),n&2&&(s(5),l("ngForOf",m.regions),s(4),l("ngIf",m.isLoading),s(),l("countries",m.countries))},dependencies:[X,N,g,I,E]});let t=e;return t})();function Se(t,e){t&1&&(r(0,"div",2),a(1,"Loading..."),o())}function xe(t,e){if(t&1&&(r(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),a(4," Country: "),r(5,"strong"),a(6),o()()()(),p(7,"hr"),r(8,"div",3)(9,"div",5)(10,"h3"),a(11,"Flag"),o(),p(12,"img",6),o(),r(13,"div",7)(14,"h3"),a(15,"Summary"),o(),r(16,"ul",8)(17,"li",9)(18,"strong"),a(19,"Population: "),o(),a(20),w(21,"number"),o(),r(22,"li",9)(23,"strong"),a(24,"Code: "),o(),a(25),o()()()(),r(26,"div",10)(27,"div",7)(28,"h3"),a(29,"Translations"),o(),r(30,"div",11)(31,"span",12),a(32),o(),r(33,"span",12),a(34),o(),r(35,"span",12),a(36),o(),r(37,"span",12),a(38),o(),r(39,"span",12),a(40),o(),r(41,"span",12),a(42),o(),r(43,"span",12),a(44),o(),r(45,"span",12),a(46),o()()()()()),t&2){let c=S();s(6),d(c.country.name.common),s(6),l("src",c.country.flags.svg,L)("alt",c.country.flags.alt),s(8),_(" ",F(21,13,c.country.population)," "),s(5),_(" ",c.country.cca3," "),s(7),d(c.country.translations.ara.common),s(2),d(c.country.translations.spa.common),s(2),d(c.country.translations.fra.common),s(2),d(c.country.translations.jpn.common),s(2),d(c.country.translations.por.common),s(2),d(c.country.translations.nld.common),s(2),d(c.country.translations.fin.common),s(2),d(c.country.translations.kor.common)}}var ce=(()=>{let e=class e{constructor(i,n,m){this.activatedRoute=i,this.router=n,this.countriesService=m}ngOnInit(){this.activatedRoute.params.pipe(z(({id:i})=>this.countriesService.searchCountryByAlphacode(i))).subscribe(i=>i?this.country=i:this.router.navigateByUrl(""))}};e.\u0275fac=function(n){return new(n||e)(f(ee),f(te),f(y))},e.\u0275cmp=h({type:e,selectors:[["countries-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(n,m){if(n&1&&u(0,Se,2,0,"ng-template",null,0,R)(2,xe,47,15,"div",1),n&2){let v=P(1);s(2),l("ngIf",!!m.country)("ngIfElse",v)}},dependencies:[g,D]});let t=e;return t})();var be=[{path:"by-capital",component:re},{path:"by-country",component:ae},{path:"by-region",component:se},{path:"by/:id",component:ce},{path:"**",redirectTo:"by-capital"}],me=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=B({type:e}),e.\u0275inj=T({imports:[V.forChild(be),V]});let t=e;return t})();var Qe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=B({type:e}),e.\u0275inj=T({imports:[Y,me,ne]});let t=e;return t})();export{Qe as CountriesModule};
