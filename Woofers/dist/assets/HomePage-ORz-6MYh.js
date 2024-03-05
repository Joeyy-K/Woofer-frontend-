import{r as s,j as e,L as n,a as d}from"./index-w1UzHfgm.js";import{f as b}from"./api-2acxZ8ti.js";const k=()=>{const[r,x]=s.useState([]),[h,m]=s.useState([]),[u,p]=s.useState([]),[c,g]=s.useState(""),[a,o]=s.useState(0);s.useEffect(()=>{(async()=>{const i=await b();i&&x(i);const y=await(await fetch(`${d}/countries/`)).json();m(y)})()},[]),s.useEffect(()=>{(async()=>{const l=await(await fetch(`${d}/cities/`)).json();l&&p(l)})()},[]);const f=()=>{o(Math.max(0,a-6))},j=()=>{o(Math.min(r.length-6,a+6))},v=t=>{g(t.target.value)},w=r.filter(t=>c===""||t.city.name===c);return e.jsxs("div",{className:"bg-gray-100 container mx-auto mb-24",children:[e.jsx("section",{className:"py-8 md:py-8",children:e.jsx("div",{className:"w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative",children:e.jsx("div",{className:"shadow rounded-xl",children:e.jsxs("div",{className:"grid overflow-hidden text-white shadow-xl md:grid-cols-2 bg-indigo-600 rounded-xl",children:[e.jsxs("aside",{className:"p-8 space-y-4 md:p-16",children:[e.jsx("h2",{className:"text-2xl font-bold tracking-tight md:text-4xl font-headline",children:"Home for our Local Trusted Veterinarians"}),e.jsx("p",{className:"font-medium text-blue-100 md:text-2xl",children:"Find out more about us"}),e.jsx("div",{children:e.jsx(n,{to:"/about",children:e.jsx("button",{className:"bg-white text-indigo-600 px-4 py-2 mt-3 rounded-xl",children:"About Us"})})})]}),e.jsx("aside",{className:"p-16 space-y-4 hidden md:block",children:e.jsx("blockquote",{className:"font-medium text-blue-100 md:text-2xl",children:'"The greatness of a nation and its moral progress can be judged by the way its animals are treated." - Mahatma Gandhi'})})]})})})}),e.jsxs("div",{className:"flex justify-center space-x-12 mb-2",children:[e.jsx("div",{className:"relative inline-block text-left",children:e.jsxs("div",{className:"group",children:[e.jsxs("button",{type:"button",className:"inline-flex rounded-lg justify-center items-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700",children:["Country",e.jsx("svg",{className:"w-4 h-4 ml-2 -mr-1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M10 12l-5-5h10l-5 5z"})})]}),e.jsx("div",{className:"absolute left-0 w-40 mt-0 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300",children:e.jsx("div",{className:"py-1",children:h.map(t=>e.jsx("a",{className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",children:t.name},t.id))})})]})}),e.jsx("div",{className:"relative inline-block text-left",children:e.jsxs("div",{className:"group",children:[e.jsxs("button",{type:"button",className:"inline-flex rounded-lg justify-center items-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-400",children:["City",e.jsx("svg",{className:"w-4 h-4 ml-2 -mr-1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M10 12l-5-5h10l-5 5z"})})]}),e.jsx("div",{className:"absolute left-0 w-40 mt-0 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300",children:e.jsx("div",{className:"py-1",style:{maxHeight:"150px",overflowY:"auto"},children:u.map(t=>e.jsx("button",{onClick:()=>v({target:{value:t.name}}),className:"block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",children:t.name},t.id))})})]})})]}),e.jsxs("div",{className:"flex flex-col items-center mt-0 mx-4",children:[e.jsxs("div",{className:"mt-3 flex items-center w-full py-4 rounded bg-indigo-600",children:[e.jsx("p",{className:"px-5 text-2xl font-medium text-white ",children:"Select from the Best"}),e.jsx("svg",{fill:"white",className:"w-9 h-9",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512",xmlSpace:"preserve",children:e.jsx("g",{children:e.jsx("g",{children:e.jsxs("g",{children:[e.jsx("path",{d:`M69.662,259.504c2.534,0,174.743,0,177.277,0c9.864,0,17.86-7.997,17.86-17.86c0-82.97,10.117-136.115-44.581-175.284\r
                    c-2.792-31.717-29.488-56.678-61.917-56.678c-32.43,0-59.124,24.962-61.917,56.678c-55.064,39.43-44.582,93.445-44.582,175.284\r
                    C51.801,251.508,59.798,259.504,69.662,259.504z M158.3,45.402c14.586,0,26.453,11.867,26.453,26.454\r
                    c0,14.729-11.783,26.453-26.453,26.453c-14.716,0-26.453-11.784-26.453-26.453C131.847,57.27,143.714,45.402,158.3,45.402z\r
                    M105.892,105.468c24.321,38.062,80.516,38.064,104.815,0c41.178,45.508,8.734,118.315-52.407,118.315\r
                    C97.173,223.783,64.704,150.992,105.892,105.468z`}),e.jsx("path",{d:`M236.818,292.564c-47.639-27.326-107.589-28.364-157.036,0c-3.42,1.962-4.077,6.616-1.289,9.403l75.599,75.599\r
                    c2.325,2.325,6.094,2.325,8.419,0l75.597-75.599C240.896,299.179,240.239,294.526,236.818,292.564z`}),e.jsx("path",{d:`M57.948,315.103c-2.275-2.275-5.959-2.342-8.299-0.132C19.096,343.848,0,384.725,0,429.984v54.474\r
                    c0,9.864,7.997,17.86,17.86,17.86h122.579c3.288,0,5.953-2.666,5.953-5.953v-90.351c0-1.579-0.628-3.093-1.744-4.209\r
                    L57.948,315.103z`}),e.jsx("path",{d:`M386.756,369.14c-36.718,0-66.589,29.871-66.589,66.589c0,36.718,29.871,66.589,66.589,66.589s66.59-29.872,66.59-66.589\r
                    C453.346,399.012,423.474,369.14,386.756,369.14z`}),e.jsx("path",{d:`M386.756,360.335c23.234,0,42.136-18.902,42.136-42.136s-18.902-42.136-42.136-42.136s-42.136,18.902-42.136,42.136\r
                    S363.524,360.335,386.756,360.335z`}),e.jsx("path",{d:`M303.651,394.759c23.292,0,42.138-18.85,42.138-42.136c0-23.292-18.851-42.136-42.138-42.136\r
                    c-23.291,0-42.136,18.85-42.136,42.136C261.514,375.914,280.364,394.759,303.651,394.759z`}),e.jsx("path",{d:`M469.864,310.486c-23.292,0-42.138,18.85-42.138,42.136c0,23.292,18.851,42.136,42.138,42.136\r
                    c23.291,0,42.136-18.85,42.136-42.136C512,329.331,493.15,310.486,469.864,310.486z`}),e.jsx("path",{d:`M297.102,424.169c0.411-3.173-1.777-6.059-4.927-6.614c-31.606-5.569-55.507-33.7-54.441-67.064\r
                    c0.171-5.35-6.376-8.094-10.16-4.31l-55.623,55.623c-1.117,1.117-1.743,2.631-1.743,4.209v90.351\r
                    c0,3.287,2.666,5.953,5.953,5.953h122.579c5.942,0,11.196-2.905,14.44-7.369c1.48-2.037,1.41-4.812-0.052-6.861\r
                    C299.601,469.127,294.234,446.304,297.102,424.169z`})]})})})})]}),e.jsxs("div",{className:"w-full mt-3 flex overflow-x-auto justify-between items-center",children:[e.jsx("button",{className:"px-4",onClick:f,children:e.jsx("svg",{className:"w-6 h-6",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13 8L9 12M9 12L13 16M9 12H21M19.4845 7C17.8699 4.58803 15.1204 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C15.1204 21 17.8699 19.412 19.4845 17",stroke:"#000000",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),w.slice(a,a+6).map((t,i)=>e.jsx("div",{className:"mb-1 shadow-lg border-0 flex-shrink-0",children:e.jsxs(n,{to:`/veterinary/${t.id}`,children:[e.jsx("div",{className:"flex flex-col items-center text-center px-4",children:e.jsx("img",{className:"rounded-full mt-2 w-16",src:t.profile_picture})}),e.jsx("div",{className:"p-2",children:e.jsxs("small",{className:"text-black text-base",children:[" ",`${t.first_name}`]})})]})},i)),e.jsx("button",{className:"px-4",onClick:j,children:e.jsx("svg",{className:"w-6 h-6",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M11 16L15 12M15 12L11 8M15 12H3M4.51555 17C6.13007 19.412 8.87958 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C8.87958 3 6.13007 4.58803 4.51555 7",stroke:"#000000",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),e.jsx("div",{className:"flex mt-3 items-center",children:e.jsx(n,{to:"/veterinaries",children:e.jsx("button",{className:"text-white px-4 py-2 mt-2 rounded-xl bg-gray-800 hover:bg-gray-600 shadow hover:shadow-lg transition transform hover:-translate-y-0.5",type:"button",children:"See All"})})})]})]})};export{k as default};
