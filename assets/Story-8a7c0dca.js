import{_ as m,r as p,o as n,c as o,a as e,t as i,F as d,b as u,e as l,w as c,f as g}from"./index-ad30f1c2.js";const x={name:"Story",data(){return{stories:{"sales-forecasting":{title:"Sales Forecasting Tool",summary:"Built an AI-powered sales forecasting system that increased prediction accuracy by 47%",image:"/images/stories/sales-forecasting.jpg",tags:["AI","Data Science","Enterprise"],fullStory:{challenge:"A retail chain was struggling with inventory management due to inaccurate sales predictions. Their legacy forecasting system was causing overstocking in some locations and stockouts in others.",solution:"We developed a machine learning model that analyzes historical sales data, seasonal trends, and external factors. The system integrates with their existing ERP and updates predictions in real-time.",results:["47% increase in prediction accuracy","23% reduction in inventory costs","Implemented in just 2 weeks","ROI achieved within first quarter"]}},"risk-scoring":{title:"Risk Scoring System",summary:"Developed an automated risk assessment platform reducing manual review time by 80%",image:"/images/stories/risk-scoring.jpg",tags:["FinTech","Machine Learning","Automation"],fullStory:{challenge:"A financial services company was bottlenecked by manual risk assessment processes. Their team was spending hours reviewing each case, causing delays and inconsistent evaluations.",solution:"We built an automated scoring system that pulls data from multiple sources, applies machine learning models, and provides instant risk assessments with clear explanations.",results:["80% reduction in review time","35% better risk detection","3-week delivery timeline","Scalable to 100x current volume"]}},"llm-integration":{title:"LLM Integration SDK",summary:"Created a flexible SDK for enterprise LLM integration, deployed across 12 companies",image:"/images/stories/llm-sdk.jpg",tags:["AI","Enterprise","SDK"],fullStory:{challenge:"Multiple enterprise clients needed to integrate LLMs into their existing workflows but were struggling with security, cost management, and implementation complexity.",solution:"We developed a flexible SDK that handles authentication, rate limiting, prompt management, and model switching. It includes pre-built modules for common use cases and detailed analytics.",results:["12 successful enterprise deployments","90% reduction in integration time","4-week development cycle","Millions in cost savings"]}}}}},computed:{story(){return this.stories[this.$route.params.id]}}},h={class:"min-h-screen bg-invoke-bg text-invoke-text p-6"},y={class:"max-w-4xl mx-auto pt-24"},k={key:0,class:"space-y-12"},v={class:"space-y-4"},f={class:"text-4xl font-bold"},w={class:"text-xl text-invoke-accent"},b={class:"flex flex-wrap gap-2"},_={class:"grid gap-8 sm:grid-cols-2"},S={class:"space-y-4"},j={class:"text-invoke-text/80"},B={class:"space-y-4"},M={class:"text-invoke-text/80"},L={class:"space-y-4"},C={class:"grid gap-4 sm:grid-cols-2"},D={class:"flex justify-between items-center pt-8 border-t border-invoke-border/20"},I={key:1,class:"text-center py-12"};function T(A,t,F,E,K,s){const r=p("router-link");return n(),o("div",h,[e("div",y,[s.story?(n(),o("div",k,[e("header",v,[e("h1",f,i(s.story.title),1),e("p",w,i(s.story.summary),1),e("div",b,[(n(!0),o(d,null,u(s.story.tags,a=>(n(),o("span",{key:a,class:"text-sm px-3 py-1 bg-invoke-accent/10 rounded-full"},i(a),1))),128))])]),e("div",_,[e("div",S,[t[0]||(t[0]=e("h2",{class:"text-2xl font-semibold"},"Challenge",-1)),e("p",j,i(s.story.fullStory.challenge),1)]),e("div",B,[t[1]||(t[1]=e("h2",{class:"text-2xl font-semibold"},"Solution",-1)),e("p",M,i(s.story.fullStory.solution),1)])]),e("div",L,[t[3]||(t[3]=e("h2",{class:"text-2xl font-semibold"},"Results",-1)),e("ul",C,[(n(!0),o(d,null,u(s.story.fullStory.results,a=>(n(),o("li",{key:a,class:"flex items-center space-x-2 bg-invoke-accent/5 p-4 rounded-lg"},[t[2]||(t[2]=e("svg",{class:"w-5 h-5 text-invoke-accent flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})],-1)),e("span",null,i(a),1)]))),128))])]),e("div",D,[l(r,{to:"/stories",class:"inline-flex items-center space-x-2 text-invoke-accent hover:text-invoke-text transition-colors"},{default:c(()=>t[4]||(t[4]=[e("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})],-1),e("span",null,"Back to Stories",-1)])),_:1}),l(r,{to:"/contact",class:"inline-block px-6 py-2 bg-invoke-text text-invoke-bg rounded-xl hover:bg-invoke-accent transition-all duration-200 hover:shadow-lg"},{default:c(()=>t[5]||(t[5]=[g(" Start Your Project ")])),_:1})])])):(n(),o("div",I,[t[7]||(t[7]=e("h2",{class:"text-2xl font-semibold mb-4"},"Story Not Found",-1)),t[8]||(t[8]=e("p",{class:"text-invoke-text/80 mb-8"},"The story you're looking for doesn't exist or has been moved.",-1)),l(r,{to:"/stories",class:"inline-flex items-center space-x-2 text-invoke-accent hover:text-invoke-text transition-colors"},{default:c(()=>t[6]||(t[6]=[e("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})],-1),e("span",null,"Back to Stories",-1)])),_:1})]))])])}const R=m(x,[["render",T]]);export{R as default};
