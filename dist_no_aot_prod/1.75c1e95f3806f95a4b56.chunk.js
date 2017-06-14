webpackJsonp([1],{"1Lap":function(e,t){e.exports='<div class="title">\n    <h1>{{title}}</h1>\n</div>\n<div class="mainContent" *ngIf="!showForm">\n    <p>Already logged in with user {{currentUser}}</p>\n</div>\n<div class="mainContent" *ngIf="showForm">\n    <ck-login-form (onCancel)="onCancel($event)" (onSubmit)="onLogin($event)"></ck-login-form>\n</div>'},"4va0":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("/oeL"),r=n("jRve"),i=n("B3/U"),a=n("wFAi");n.d(t,"AuthModule",function(){return s});var c=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},s=function(){function e(){}return e}();s=c([n.i(o.b)({imports:[a.a,i.a],declarations:i.b.concat([r.a])})],s)},"B3/U":function(e,t,n){"use strict";var o=n("BkNc"),r=n("Dxwe"),i=n("LcKa");n.d(t,"b",function(){return c}),n.d(t,"a",function(){return s});var a=[{path:"",component:r.a,data:{title:"Login"},children:[{path:"",component:i.a}]}],c=[r.a,i.a],s=o.b.forChild(a)},Dxwe:function(e,t,n){"use strict";var o=n("/oeL");n.d(t,"a",function(){return i});var r=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},i=function(){function e(){}return e}();i=r([n.i(o.d)({selector:"ck-auth-component",template:"<router-outlet></router-outlet>"})],i)},LcKa:function(e,t,n){"use strict";var o=n("/oeL"),r=n("BkNc"),i=n("XKlT"),a=n("djS2");n.d(t,"a",function(){return u});var c=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(){function e(e,t){this.loginService=e,this.activatedRoute=t,this.showForm=!0}return e.prototype.ngOnInit=function(){var e=this;this.title=this.activatedRoute.snapshot.data.title,this.loginService.isLoggedIn()?(this.currentUser=this.loginService.getCurrentUserName(),this.showForm=!1):(a.a&&console.log("nobody logged in yet"),this.showForm=!0,this.loginService.currentUser.subscribe(function(t){a.a&&console.log("User",t.name,"is logged in!"),void 0!==t.name&&(e.currentUser=t.name,e.showForm=!1)}))},e}();u=c([n.i(o.d)({selector:"ck-login-page",template:n("1Lap")}),s("design:paramtypes",["function"==typeof(l=void 0!==i.a&&i.a)&&l||Object,"function"==typeof(f=void 0!==r.a&&r.a)&&f||Object])],u);var l,f},Ueb0:function(e,t){e.exports='<form novalidate (ngSubmit)="onSubmit(form.value); form.reset()"\n        #form="ngForm">\n    <div class="form-group">\n        <label>Name</label>\n        <input type="text" class="form-control"\n            id="name" name="name"\n            placeholder="Name eingeben..."\n            ngModel required minlength="4" maxlength="32"/>\n        <ck-show-error path="name" text="Name"></ck-show-error>\n    </div>\n    <div class="form-group">\n        <label>Passwort</label>\n        <input type="password" class="form-control"\n            id="password" name="password" \n            placeholder="Passwort eingeben..."\n            ngModel required />\n        <ck-show-error path="password" text="Passwort"></ck-show-error>\n    </div>\n    <button type="button" class="btn btn-default"\n        (click)="onSubmit(form.value)"\n        [disabled]="!form.valid">\n        Login\n    </button>\n    <button type="button" class="btn btn-default"\n        (click)="onCancel(true)">\n        Abbrechen\n    </button>\n</form>'},VuWX:function(e,t,n){t=e.exports=n("rP7Y")(!1),t.push([e.i,"",""]),e.exports=e.exports.toString()},jRve:function(e,t,n){"use strict";var o=n("/oeL"),r=n("bm2B"),i=n("BkNc"),a=n("XKlT"),c=n("1vZW"),s=n("Z04r");n.d(t,"a",function(){return f});var u=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},l=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(){function e(e,t,n,o,r){this.navigationService=e,this.router=t,this.activatedRoute=n,this.loginService=o,this.snackBar=r}return e.prototype.onSubmit=function(e){var t=this.activatedRoute.snapshot.queryParams;this.loginService.login(e.name,e.password)?(this.navigationService.navigateHome(t),this.snackBar.open("Welcome, "+e.name+". You have logged in successfully.","OK",{duration:5e3})):this.snackBar.open("Login failed.","OK",{duration:5e3}),this.form.reset()},e.prototype.onCancel=function(e){var t=this.activatedRoute.snapshot.queryParams;this.form.reset(),this.navigationService.navigateBack(t)},e}();u([n.i(o._13)(r.a),l("design:type","function"==typeof(d=void 0!==r.a&&r.a)&&d||Object)],f.prototype,"form",void 0),f=u([n.i(o.d)({selector:"ck-login-form",template:n("Ueb0"),styles:[n("VuWX")]}),l("design:paramtypes",["function"==typeof(p=void 0!==c.a&&c.a)&&p||Object,"function"==typeof(h=void 0!==i.c&&i.c)&&h||Object,"function"==typeof(v=void 0!==i.a&&i.a)&&v||Object,"function"==typeof(m=void 0!==a.a&&a.a)&&m||Object,"function"==typeof(g=void 0!==s.a&&s.a)&&g||Object])],f);var d,p,h,v,m,g}});