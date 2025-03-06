(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[452],{7757:function(e,t,r){Promise.resolve().then(r.bind(r,1863))},6463:function(e,t,r){"use strict";var a=r(1169);r.o(a,"usePathname")&&r.d(t,{usePathname:function(){return a.usePathname}}),r.o(a,"useRouter")&&r.d(t,{useRouter:function(){return a.useRouter}}),r.o(a,"useSearchParams")&&r.d(t,{useSearchParams:function(){return a.useSearchParams}})},3337:function(e,t){"use strict";let r="http://44.220.219.210:8000/";t.Z={root:r,signUp:"".concat(r,"api/auth/register/"),signIn:"".concat(r,"api/auth/login/"),otpVerification:"".concat(r,"api/auth/verify-email/"),forgotPassword:"".concat(r,"api/auth/forgot-password/"),verifyOtp:"".concat(r,"api/auth/forgot-password/"),resetPassword:"".concat(r,"api/auth/reset-password/"),userData:"".concat(r,"/api/user-profile/profile/"),userProfile:"".concat(r,"/api/user-profile/profile/"),workoutActivity:"".concat(r,"/api/workout/activities/"),workoutLog:"".concat(r,"/api/workout/log-workout/"),workoutData:"".concat(r,"/api/workout/workout-history/"),updateWork:"".concat(r,"/api/workout/"),deleteWork:"".concat(r,"/api/workout/"),foodDetail:"".concat(r,"/api/meals/foods/"),addMeal:"".concat(r,"/api/meals/add/"),mealHistory:"".concat(r,"/api/meals/history/"),updateMeal:"".concat(r,"/api/meals/"),deleteMeal:"".concat(r,"/api/meals/"),workoutChart:"".concat(r,"/api/workout/calories/summary/"),mealChart:"".concat(r,"/api/meals/nutrition/summary/"),caloriesChart:"".concat(r,"/api/calorie/daily-calorie-intake/"),weekReportWorkout:"".concat(r,"/api/workout/weekly-report/"),monthReportWorkout:"".concat(r,"/api/workout/monthly-report"),yearReportWorkout:"".concat(r,"/api/workout/yearly-report"),weekReportMeal:"".concat(r,"/api/meals/weekly-report"),monthReportMeal:"".concat(r,"/api/meals/monthly-report"),yearReportMeal:"".concat(r,"/api/meals/yearly-report"),dailyReport:"".concat(r,"/api/daily/daily-nutrition/"),waterIntake:"".concat(r,"/api/daily/water-intake/"),weeklyRecommendation:"".concat(r,"/api/user-profile/recommendations/")}},4905:function(e,t,r){"use strict";var a=r(8472),o=r(2265);t.Z=()=>{let[e,t]=(0,o.useState)(!1);return{loading:e,callApi:async(e,r,o,n)=>{t(!0);try{let t=await (0,a.Z)({method:e,url:r,data:o,...n});return{data:t.data,response:t}}finally{t(!1)}}}}},1863:function(e,t,r){"use strict";r.r(t);var a=r(7437),o=r(2265),n=r(6463),i=r(4905),s=r(3337),c=r(8191),l=r(1570),u=r(452);t.default=()=>{let e=(0,n.useRouter)(),{loading:t,callApi:r}=(0,i.Z)(),[p,d]=(0,o.useState)(""),[f,m]=(0,o.useState)("");(0,o.useEffect)(()=>{let t=localStorage.getItem("resetEmail");t?m(t):((0,u.Z)({label:"Email not found. Please try again.",type:"error"}),e.push("/Auth/ForgotPassword"))},[e]);let y=async t=>{if(t.preventDefault(),!f){(0,u.Z)({label:"Email is required.",type:"error"});return}try{let{response:t}=await r("post",s.Z.verifyOtp,{email:f,otp:p},{headers:(0,c.w)()});(null==t?void 0:t.status)?((0,u.Z)({label:"OTP verified successfully.",type:"success"}),e.push("/Auth/ResetPassword")):(0,u.Z)({label:"Error verifying OTP.",type:"error"})}catch(e){console.error("Reset OTP API Error:",e),(0,u.Z)({label:"Error verifying OTP. Try again.",type:"error"})}};return(0,a.jsx)(l.W,{className:"flex flex-wrap justify-center py-16",children:(0,a.jsxs)("div",{className:"w-full max-w-md bg-white p-8 rounded-lg shadow-md",children:[(0,a.jsx)("h2",{className:"text-2xl font-semibold text-primary text-center mb-6",children:"OTP Verification"}),(0,a.jsxs)("p",{className:"text-txcolor mb-4 text-center",children:["Enter the OTP sent to ",(0,a.jsx)("strong",{children:f})]}),(0,a.jsxs)("form",{onSubmit:y,className:"space-y-4",children:[(0,a.jsx)("input",{type:"number",placeholder:"Enter OTP",value:p,onChange:e=>d(e.target.value),required:!0,disabled:t,className:"w-full px-4 py-2 border bg-background text-txcolor rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"}),(0,a.jsx)("button",{type:"submit",className:"w-full px-6 py-3 text-white bg-primary rounded-md focus:outline-none hover:bg-indigo-700 disabled:opacity-50",disabled:t,children:t?"Verifying OTP...":"Verify OTP"})]})]})})}},1570:function(e,t,r){"use strict";r.d(t,{W:function(){return o}});var a=r(7437);function o(e){return(0,a.jsx)("div",{className:"container  p-8 mx-auto xl:px-0 ".concat(e.className?e.className:""),children:e.children})}r(2265)},8191:function(e,t,r){"use strict";r.d(t,{w:function(){return a}});let a=e=>{let t={"Content-Type":"application/json"};return e&&(t.Authorization="Bearer ".concat(e)),t}},452:function(e,t,r){"use strict";var a=r(4648);t.Z=e=>{let{label:t,type:r}=e,o={position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!0,draggable:!0,progress:void 0,transition:a.sm,style:{success:{backgroundColor:"#4CAF50",color:"#fff"},error:{backgroundColor:"#F44336",color:"#fff"},warning:{backgroundColor:"#FF9800",color:"#fff"},info:{backgroundColor:"#2196F3",color:"#fff"}}[r]||{}};switch(r){case"success":a.Am.success(t,o);break;case"error":a.Am.error(t,o);break;case"warning":a.Am.warn(t,o);break;case"info":a.Am.info(t,o);break;default:(0,a.Am)(t,o)}}}},function(e){e.O(0,[71,971,23,744],function(){return e(e.s=7757)}),_N_E=e.O()}]);