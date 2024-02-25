import{j as e,L as a,r as n,A as c,U as l,b as r,c as d,d as x,u,O as m}from"./index-w1UzHfgm.js";import{l as h}from"./api-2acxZ8ti.js";import{Q as j,B as p}from"./ReactToastify-SnbspBe0.js";const f=()=>e.jsx("div",{className:"rounded-lg px-4 mx-9",children:e.jsx("h1",{className:"py-4 text-indigo-600 font-bold text-xl",children:"Woofers"})}),g=()=>e.jsx("div",{className:"flex items-center justify-end mr-9",children:e.jsx("div",{className:"group relative cursor-pointer py-2",children:e.jsx("div",{className:"flex items-center justify-between space-x-5 border-2 py-2 bg-white px-4",children:e.jsx("span",{children:e.jsx(a,{to:"/profile",children:e.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{opacity:"0.4",d:"M12.1207 12.78C12.0507 12.77 11.9607 12.77 11.8807 12.78C10.1207 12.72 8.7207 11.28 8.7207 9.50998C8.7207 7.69998 10.1807 6.22998 12.0007 6.22998C13.8107 6.22998 15.2807 7.69998 15.2807 9.50998C15.2707 11.28 13.8807 12.72 12.1207 12.78Z",stroke:"#292D32",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{opacity:"0.34",d:"M18.7398 19.3801C16.9598 21.0101 14.5998 22.0001 11.9998 22.0001C9.39977 22.0001 7.03977 21.0101 5.25977 19.3801C5.35977 18.4401 5.95977 17.5201 7.02977 16.8001C9.76977 14.9801 14.2498 14.9801 16.9698 16.8001C18.0398 17.5201 18.6398 18.4401 18.7398 19.3801Z",stroke:"#292D32",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",stroke:"#292D32",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})})})}),v=()=>{const{setIsAuthenticated:o}=n.useContext(c),{setUser:s}=n.useContext(l),t=async()=>{try{await h()&&(o(!1),r.remove("isAuthenticated"),r.remove("user"),r.remove("userToken"),r.remove("token"),r.remove("csrftoken",{path:"/",domain:"127.0.0.1",secure:!0,sameSite:"lax"}),s(null))}catch(i){console.error("Error during logout:",i),p.error("Failed To Logout!")}};return e.jsxs("div",{className:"mx-auto flex w-full items-center justify-end",children:[e.jsx("div",{className:"items-center justify-center",children:e.jsx(j,{})}),e.jsx("div",{className:"group relative cursor-pointer py-2",onClick:t,children:e.jsx("div",{className:"flex items-center justify-between space-x-5 border-2 py-2 bg-white px-4",children:e.jsx("span",{children:e.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M21 12L13 12",stroke:"#323232",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9",stroke:"#323232",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19",stroke:"#323232",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})})})})]})},L=()=>e.jsx("section",{children:e.jsxs("div",{className:"flex text-center border-2 px-4",children:[e.jsx(a,{to:"/home",children:e.jsx(f,{})}),e.jsx(v,{}),e.jsx(g,{})]})}),w=[{imgURL:"/icons/homeicon.svg",route:"/home",label:"Home"},{imgURL:"/icons/veterinary.svg",route:"/veterinaries",label:"Veterinarians"},{imgURL:"/icons/appointment.svg",route:"/appointment",label:"Appointment"},{imgURL:"/icons/settings.svg",route:"/settings",label:"settings"}],k=()=>{const{pathname:o}=d();return e.jsx("nav",{className:"fixed bottom-0 left-0 w-full bg-indigo-600 shadow",children:e.jsx("ul",{className:"flex justify-around py-2",children:w.map(s=>{const t=o===s.route;return e.jsx("li",{className:`flex flex-col items-center px-4 text-white ${t?"bg-indigo-500 rounded":" bg-white-500"} transition duration-300`,children:e.jsxs(x,{to:s.route,className:"flex flex-col items-center",children:[e.jsx("img",{src:s.imgURL,alt:s.label,width:24,height:24,className:`${t}`}),e.jsx("span",{className:"text-xs",children:s.label})]})},`bottombar-${s.label}`)})})})},y=()=>{const{isAuthenticated:o,isLoading:s}=n.useContext(c),t=u();return n.useEffect(()=>{o||t("/")},[o,t]),s?e.jsx("div",{children:"Loading..."}):e.jsxs("div",{className:"w-full flex flex-col justify-between",children:[e.jsx(L,{}),e.jsx("section",{className:"flex-grow w-full flex justify-center ",children:e.jsx(m,{})}),e.jsx(k,{})]})};export{y as default};