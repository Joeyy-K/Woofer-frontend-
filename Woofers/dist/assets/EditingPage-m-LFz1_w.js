import{r as n,U as h,j as e,b as t,a as u}from"./index-w1UzHfgm.js";import{Q as f,B as p}from"./ReactToastify-SnbspBe0.js";const j=()=>{const{user:s,setUser:l}=n.useContext(h),[o,d]=n.useState(s.username),i=a=>{d(a.target.value)},c=a=>{a.preventDefault();let m=t.get("userToken"),x=t.get("csrftoken");const g={username:o};fetch(`${u}/user/update/`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Token ${m}`,"X-CSRFToken":x},body:JSON.stringify(g)}).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>{r.detail?console.error(r.detail):(l(r),t.set("user",JSON.stringify(r)),p.success("Successfully Changed!"))}).catch(r=>console.error(r))};return s?e.jsxs("div",{className:"bg-gray-100 container mx-auto my-1 mb-24",children:[e.jsx("div",{className:"items-center justify-center",children:e.jsx(f,{})}),e.jsxs("div",{className:"flex flex-wrap",children:[e.jsx("div",{className:"w-full md:w-1/4 border-r",children:e.jsxs("div",{className:"flex flex-col items-center text-center p-3 py-5",children:[e.jsx("img",{className:"rounded-full mt-5 w-36",src:"https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"}),e.jsx("span",{className:"font-semibold",children:s.username}),e.jsx("span",{className:"text-gray-500",children:s.email})]})}),e.jsx("div",{className:"w-full md:w-1/2 border-r",children:e.jsxs("div",{className:"p-4 py-0 mt-5",children:[e.jsx("div",{className:"flex justify-between items-center mb-3",children:e.jsx("h4",{className:"text-right font-bold",children:"User Profile"})}),e.jsx("hr",{className:"my-4 bg-gray-300 h-1"}),e.jsx("div",{className:"flex flex-wrap mt-5",children:e.jsxs("div",{className:"w-full",children:[e.jsx("label",{className:"block mb-3 text-sm font-medium text-gray-900 dark:text-white",children:"Username: "}),e.jsxs("div",{className:"flex",children:[e.jsx("span",{className:"inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600",children:e.jsx("svg",{className:"w-4 h-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{d:"M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"})})}),e.jsx("input",{onChange:i,type:"text",className:"rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500",placeholder:`${s.username}`})]})]})}),e.jsx("div",{className:"mt-8 mb-10 text-center",children:e.jsx("button",{onClick:c,className:"text-white py-2 px-24 uppercase rounded bg-indigo-600 hover:bg-indigo-400 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5",type:"button",children:"Save Profile"})}),e.jsx("hr",{className:"my-4 bg-gray-100 h-0.5"})]})}),e.jsx("div",{className:"w-full md:w-1/4",children:e.jsxs("div",{className:"p-3 py-5",children:[e.jsx("div",{className:"flex justify-between items-center experience",children:e.jsx("span",{className:"font-bold",children:"FeedBack"})}),e.jsx("hr",{className:"my-4 bg-gray-100 h-0.5"}),e.jsxs("div",{className:"w-full",children:[e.jsx("label",{className:"block mb-3 text-sm font-medium text-gray-900 dark:text-white",children:"Any concern you may have post it here:"}),e.jsx("textarea",{className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 h-32",placeholder:"Experience"})]}),e.jsx("br",{})]})})]})]}):e.jsx("p",{children:"No user logged in"})};export{j as default};
