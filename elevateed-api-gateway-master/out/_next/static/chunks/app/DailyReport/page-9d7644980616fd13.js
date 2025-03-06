(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{3366:function(e,t,a){Promise.resolve().then(a.bind(a,320))},3337:function(e,t){"use strict";let a="http://44.220.219.210:8000/";t.Z={root:a,signUp:"".concat(a,"api/auth/register/"),signIn:"".concat(a,"api/auth/login/"),otpVerification:"".concat(a,"api/auth/verify-email/"),forgotPassword:"".concat(a,"api/auth/forgot-password/"),verifyOtp:"".concat(a,"api/auth/forgot-password/"),resetPassword:"".concat(a,"api/auth/reset-password/"),userData:"".concat(a,"/api/user-profile/profile/"),userProfile:"".concat(a,"/api/user-profile/profile/"),workoutActivity:"".concat(a,"/api/workout/activities/"),workoutLog:"".concat(a,"/api/workout/log-workout/"),workoutData:"".concat(a,"/api/workout/workout-history/"),updateWork:"".concat(a,"/api/workout/"),deleteWork:"".concat(a,"/api/workout/"),foodDetail:"".concat(a,"/api/meals/foods/"),addMeal:"".concat(a,"/api/meals/add/"),mealHistory:"".concat(a,"/api/meals/history/"),updateMeal:"".concat(a,"/api/meals/"),deleteMeal:"".concat(a,"/api/meals/"),workoutChart:"".concat(a,"/api/workout/calories/summary/"),mealChart:"".concat(a,"/api/meals/nutrition/summary/"),caloriesChart:"".concat(a,"/api/calorie/daily-calorie-intake/"),weekReportWorkout:"".concat(a,"/api/workout/weekly-report/"),monthReportWorkout:"".concat(a,"/api/workout/monthly-report"),yearReportWorkout:"".concat(a,"/api/workout/yearly-report"),weekReportMeal:"".concat(a,"/api/meals/weekly-report"),monthReportMeal:"".concat(a,"/api/meals/monthly-report"),yearReportMeal:"".concat(a,"/api/meals/yearly-report"),dailyReport:"".concat(a,"/api/daily/daily-nutrition/"),waterIntake:"".concat(a,"/api/daily/water-intake/"),weeklyRecommendation:"".concat(a,"/api/user-profile/recommendations/")}},4905:function(e,t,a){"use strict";var r=a(8472),s=a(2265);t.Z=()=>{let[e,t]=(0,s.useState)(!1);return{loading:e,callApi:async(e,a,s,l)=>{t(!0);try{let t=await (0,r.Z)({method:e,url:a,data:s,...l});return{data:t.data,response:t}}finally{t(!1)}}}}},320:function(e,t,a){"use strict";a.r(t);var r=a(7437),s=a(2265),l=a(1942),o=a(3337),i=a(8191),n=a(452),c=a(4905),d=a(1444),m=a(3872),x=a(6356);t.default=()=>{let[e,t]=(0,s.useState)({protein:0,fats:0,carbs:0,sugar:0,net_calorie:0,daily_calorie_needed:0,calorie_intake:0,calorie_burned:0}),[a,u]=(0,s.useState)(0),[p,f]=(0,s.useState)(0),[b,h]=(0,s.useState)(new Date().toISOString().slice(0,10)),{loading:y,callApi:g}=(0,c.Z)(),w=(0,d.v9)(e=>e.auth.accessToken),v=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],[j,k]=(0,s.useState)([]),N=async e=>{let a=e.split("-").reverse().join("-");try{let{response:e}=await g("get",o.Z.dailyReport,void 0,{headers:(0,i.w)(w),params:{date:a}});if(null==e?void 0:e.status){let a=(null==e?void 0:e.data)||{};t({protein:a.protein||0,fats:a.fat||0,carbs:a.carbs||0,sugar:a.sugar||0,net_calorie:a.net_calorie||0,daily_calorie_needed:a.daily_calorie_needed||0,calorie_intake:a.calorie_intake||0,calorie_burned:a.calorie_burned||0})}else(0,n.Z)({label:"No nutrition data found for selected date.",type:"info"}),t({protein:0,fats:0,carbs:0,sugar:0,net_calorie:0,daily_calorie_needed:0,calorie_intake:0,calorie_burned:0})}catch(e){(0,n.Z)({label:"Error fetching nutrition data.",type:"error"})}},O=async e=>{let t=e.split("-").reverse().join("-");try{let{response:e}=await g("get",o.Z.waterIntake,void 0,{headers:(0,i.w)(w),params:{date:t}});if(null==e?void 0:e.status){let{glasses_drank:t,target_glasses:a}=e.data;f(a),u(t)}else(0,n.Z)({label:"No water data found for selected date.",type:"info"}),f(12),u(0)}catch(e){(0,n.Z)({label:"Error fetching water intake data.",type:"error"}),f(12),u(0)}},_=async(e,t)=>{let a=b.split("-").reverse().join("-");try{let{response:r}=await g("post",o.Z.waterIntake,{date:a,glasses_drank:e,target_glasses:t},{headers:(0,i.w)(w)});if(null==r?void 0:r.status){let{glasses_drank:e,target_glasses:t}=r.data;u(e),f(t),(0,n.Z)({label:"Water intake updated successfully!",type:"success"})}else(0,n.Z)({label:"Failed to update water intake.",type:"error"})}catch(e){(0,n.Z)({label:"Error updating water intake.",type:"error"})}},C=async e=>{let t=e.split("-").reverse().join("-");try{let{response:e}=await g("get",o.Z.weeklyRecommendation,void 0,{headers:(0,i.w)(w),params:{date:t}});if((null==e?void 0:e.status)&&e.data){let t=e.data.data,a=Object.keys(t).map(e=>({day:v[parseInt(e,10)-1],exercises:t[e].exercises,diets:t[e].diets}));k(a)}else(0,n.Z)({label:"No  recommendation data found.",type:"info"}),k([])}catch(e){(0,n.Z)({label:"Error fetching  recommendation data.",type:"error"}),k([])}};(0,s.useEffect)(()=>{N(b),O(b),C(b)},[b]);let E=[{label:"Protein",value:e.protein},{label:"Fats",value:e.fats},{label:"Carbs",value:e.carbs},{label:"Sugar",value:e.sugar},{label:"Net Calorie",value:e.net_calorie},{label:"Daily Calorie Needed",value:e.daily_calorie_needed},{label:"Calorie Intake",value:e.calorie_intake},{label:"Calorie Burned",value:e.calorie_burned}];return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"w-full min-h-screen bg-accent p-2 sm:p-3 flex flex-col items-center mt-5 justify-start",children:(0,r.jsxs)("div",{className:"w-full max-w-[700px] bg-background p-3 sm:p-4 rounded-lg shadow-md mx-2 sm:mx-0",children:[(0,r.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 mb-4 sm:mb-6",children:[(0,r.jsx)("h2",{className:"text-2xl sm:text-3xl font-bold text-primary text-center sm:text-left",children:"Today Goals"}),(0,r.jsx)("div",{className:"flex flex-col items-center sm:items-end",children:(0,r.jsx)("input",{type:"date",className:"w-full sm:w-48 md:w-56 h-10 sm:h-12 border border-txcolor bg-secondary text-txcolor text-sm rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-primary",value:b,onChange:e=>h(e.target.value)})})]}),(0,r.jsxs)("div",{className:"bg-secondary rounded-xl shadow-sm p-4 sm:p-5 mb-4 h-auto min-h-[100px] max-h-[400px] overflow-y-auto",children:[(0,r.jsx)("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3",children:(0,r.jsxs)("div",{className:"flex items-center gap-3 sm:gap-4 mb-3 sm:mb-0 w-full sm:w-auto",children:[(0,r.jsx)("div",{className:"w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary bg-opacity-20 flex items-center justify-center flex-shrink-0",children:(0,r.jsx)(x.JXB,{className:"text-xl sm:text-2xl text-primary"})}),(0,r.jsx)("div",{className:"flex-1",children:(0,r.jsx)("h2",{className:"text-lg sm:text-xl font-bold text-txcolor",children:"Food & Exercise Recommendation"})})]})}),(0,r.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3",children:y?(0,r.jsx)("p",{className:"text-primary text-center",children:"Loading..."}):j.length>0?j.map(e=>(0,r.jsxs)("div",{className:"col-span-1 sm:col-span-2 space-y-1",children:[(0,r.jsx)("h3",{className:"text-txcolor font-bold text-md sm:text-lg",children:e.day}),(0,r.jsxs)("p",{className:"text-sm sm:text-base text-txcolor",children:[(0,r.jsx)("strong",{children:"Exercise:"})," ",e.exercises.length>0?e.exercises.join(", "):"No exercises"]}),(0,r.jsxs)("p",{className:"text-sm sm:text-base text-txcolor",children:[(0,r.jsx)("strong",{children:"Diets:"})," ",e.diets.length>0?e.diets.join(", "):"No diets"]})]},e.day)):(0,r.jsx)("p",{className:"text-txcolor font-bold text-center",children:"No data available"})})]}),(0,r.jsxs)("div",{className:"bg-secondary rounded-xl shadow-sm p-4 sm:p-6 mb-4 h-auto min-h-[250px] sm:h-[300px]",children:[(0,r.jsx)("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6",children:(0,r.jsxs)("div",{className:"flex items-center gap-3 sm:gap-4 mb-4 sm:mb-0 w-full sm:w-auto",children:[(0,r.jsx)("div",{className:"w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary bg-opacity-20 flex items-center justify-center flex-shrink-0",children:(0,r.jsx)(l.B6S,{className:"text-xl sm:text-2xl text-primary"})}),(0,r.jsxs)("div",{className:"flex-1",children:[(0,r.jsx)("h2",{className:"text-lg sm:text-xl font-bold text-txcolor",children:"Track Nutrition"}),(0,r.jsxs)("p",{className:"text-txcolor text-sm sm:text-base",children:[e.calorie_intake.toFixed(3)," of"," ",e.daily_calorie_needed.toFixed(3),"\xa0calories eaten"]})]})]})}),(0,r.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6",children:E.map(e=>(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"flex justify-between mb-1 text-sm sm:text-base",children:[(0,r.jsxs)("span",{className:"text-txcolor font-bold",children:[e.label,":"]}),(0,r.jsx)("span",{className:"text-txcolor font-bold",children:e.value.toFixed(2)})]})},e.label))})]}),(0,r.jsxs)("div",{className:"bg-secondary rounded-xl shadow-sm p-3 sm:p-4 mb-4",children:[(0,r.jsx)("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3",children:(0,r.jsxs)("div",{className:"flex items-center gap-2 sm:gap-3 mb-3 sm:mb-0",children:[(0,r.jsx)("div",{className:"w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0",children:(0,r.jsx)(m.usJ,{className:"text-lg sm:text-xl text-primary"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"text-lg sm:text-xl font-bold text-txcolor",children:"Water Intake"}),(0,r.jsxs)("p",{className:"text-txcolor text-sm sm:text-base",children:[a," of ",p," glasses"]})]})]})}),(0,r.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 flex-wrap",children:[(0,r.jsxs)("div",{className:"relative w-20 xs:w-24 sm:w-32 h-9 xs:h-10 sm:h-12",children:[(0,r.jsx)("input",{type:"number",min:"1",max:"12",value:p,onChange:e=>{let t=parseInt(e.target.value,10);!isNaN(t)&&t>=1&&t<=12&&(f(t),_(a,t))},className:"w-full h-full pl-2 xs:pl-3 bg-background pr-8 xs:pr-10 border border-gray-300 rounded-lg text-center text-xs xs:text-sm sm:text-base text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 appearance-none"}),(0,r.jsxs)("div",{className:"absolute right-1 xs:right-2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-0.5 xs:space-y-1 bg-background",children:[(0,r.jsx)("button",{onClick:()=>{let e=Math.min(p+1,12);f(e),_(a,e)},className:"w-4 h-4 xs:w-5 xs:h-5 flex items-center justify-center text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed",disabled:p>=12||y,children:(0,r.jsx)(l.wEH,{className:"text-[10px] xs:text-xs"})}),(0,r.jsx)("button",{onClick:()=>{let e=Math.max(p-1,1);f(e),_(a,e)},className:"w-4 h-4 xs:w-5 xs:h-5 flex items-center justify-center text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed",disabled:p<=1||y,children:(0,r.jsx)(l.iFH,{className:"text-[10px] xs:text-xs"})})]})]}),(0,r.jsx)("button",{onClick:()=>{let e=Math.max(a-1,0);u(e),_(e,p)},className:"w-7 h-7 xs:w-8 sm:w-10 xs:h-8 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 disabled:opacity-50",disabled:a<=0||y,children:(0,r.jsx)(l.iFH,{className:"text-[10px] xs:text-xs sm:text-sm text-gray-600"})}),(0,r.jsx)("div",{className:"flex flex-wrap justify-center gap-1 sm:gap-2 max-w-[200px] xs:max-w-[240px] sm:max-w-none",children:[...Array(p)].map((e,t)=>(0,r.jsx)(m.n$T,{className:"text-base xs:text-lg sm:text-xl ".concat(t<a?"text-blue-500":"text-gray-300")},t))}),(0,r.jsx)("button",{onClick:()=>{let e=Math.min(a+1,p);u(e),_(e,p)},className:"w-7 h-7 xs:w-8 sm:w-10 xs:h-8 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 disabled:opacity-50",disabled:a>=p||y,children:(0,r.jsx)(l.wEH,{className:"text-[10px] xs:text-xs sm:text-sm text-gray-600"})})]})]})]})})})}},8191:function(e,t,a){"use strict";a.d(t,{w:function(){return r}});let r=e=>{let t={"Content-Type":"application/json"};return e&&(t.Authorization="Bearer ".concat(e)),t}},452:function(e,t,a){"use strict";var r=a(4648);t.Z=e=>{let{label:t,type:a}=e,s={position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!0,draggable:!0,progress:void 0,transition:r.sm,style:{success:{backgroundColor:"#4CAF50",color:"#fff"},error:{backgroundColor:"#F44336",color:"#fff"},warning:{backgroundColor:"#FF9800",color:"#fff"},info:{backgroundColor:"#2196F3",color:"#fff"}}[a]||{}};switch(a){case"success":r.Am.success(t,s);break;case"error":r.Am.error(t,s);break;case"warning":r.Am.warn(t,s);break;case"info":r.Am.info(t,s);break;default:(0,r.Am)(t,s)}}},1810:function(e,t,a){"use strict";a.d(t,{w_:function(){return d}});var r=a(2265),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(s),o=["attr","size","title"];function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach(function(t){var r,s;r=t,s=a[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(r))in e?Object.defineProperty(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function d(e){return t=>r.createElement(m,i({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,a)=>r.createElement(t.tag,c({key:a},t.attr),e(t.child)))}(e.child))}function m(e){var t=t=>{var a,{attr:s,size:l,title:n}=e,d=function(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;a[r]=e[r]}return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}(e,o),m=l||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,d,{className:a,style:c(c({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),n&&r.createElement("title",null,n),e.children)};return void 0!==l?r.createElement(l.Consumer,null,e=>t(e)):t(s)}}},function(e){e.O(0,[51,699,240,71,444,971,23,744],function(){return e(e.s=3366)}),_N_E=e.O()}]);