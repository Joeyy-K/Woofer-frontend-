import{r as i,b as a,j as e,a as c}from"./index-w1UzHfgm.js";import{Q as h,B as o}from"./ReactToastify-SnbspBe0.js";const u=()=>{const[r,l]=i.useState([]);let n=a.get("csrftoken");const d=async()=>{try{const t=await fetch(`${c}/appointments/me/`,{headers:{"Content-Type":"application/json",Authorization:`Token ${a.get("userToken")}`,"X-CSRFToken":n}});if(t.ok){const s=await t.json();l(s)}else console.error("Failed to fetch user appointments")}catch(t){console.error("Error fetching user appointments:",t)}};i.useEffect(()=>{d()},[]);const m=async t=>{try{if(!(await fetch(`${c}/appointments/${t}/delete/`,{method:"DELETE",headers:{Authorization:`Token ${a.get("userToken")}`,"X-CSRFToken":n}})).ok)throw new Error("Failed to delete appointment");l(r.filter(x=>x.id!==t)),o.success("Appointment Deleted!")}catch(s){console.error("Error deleting appointment:",s),o.error("Failed to Delete Appointment!")}};return e.jsxs("div",{className:"bg-gray-100 container mx-auto mb-40",children:[e.jsx("div",{className:"items-center justify-center",children:e.jsx(h,{})}),e.jsx("div",{className:"mt-3 relative text-center w-full py-4 rounded bg-indigo-600",children:e.jsx("h1",{className:"text-white font-bold px-3",children:"Your Appointments"})}),r.length>0?e.jsx("div",{className:"border-l-2 border-gray-500 pl-8 text-center",children:r.map((t,s)=>e.jsxs("div",{className:"mt-3 font-medium text-base justify-center",children:[e.jsx("p",{children:"We have successfully scheduled your next appointment"}),e.jsx("hr",{className:"my-4 bg-gray-300 h-0.5"}),e.jsxs("div",{className:"mt-5 flex flex-col md:flex-row justify-center",children:[e.jsxs("div",{className:"text-left mx-12 font-medium",children:[e.jsx("p",{children:"It will be on:"}),e.jsx("hr",{className:"my-4 bg-gray-300 h-0.5"}),e.jsx("p",{className:"mt-2",children:new Date(t.date).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}),e.jsxs("p",{className:"mt-2",children:["Check In ",new Date(`1970-01-01T${t.time}Z`).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})]})]}),e.jsxs("div",{className:"text-left mx-12 font-medium",children:[e.jsx("p",{children:"You will be with:"}),e.jsx("hr",{className:"my-4 bg-gray-300 h-0.5"}),e.jsxs("p",{className:"mt-2",children:["Veterinarian ",t.veterinary.first_name," ",t.veterinary.last_name]})]}),e.jsxs("div",{className:"text-left mx-12 font-medium",children:[e.jsx("p",{children:"Reason for visit:"}),e.jsx("hr",{className:"my-4 bg-gray-300 h-0.5"}),e.jsx("p",{className:"mt-2",children:t.reason_for_visit})]})]}),e.jsxs("div",{className:"mt-5 flex flex-col md:flex-row justify-center",children:[e.jsx("div",{className:"flex m-2 h-24 w-64",children:e.jsxs("div",{className:"flex flex-col text-left bg-indigo-600 text-white text-xs self-center pl-12 pr-4 py-2 -ml-12 rounded-r-full",children:[e.jsx("h3",{className:"text-lg",children:"Bring A Mask"}),e.jsx("p",{className:"w-64 text-xs overflow-x-auto",children:"Practice Safety"})]})}),e.jsx("div",{className:"flex text-center m-2 h-24 w-64",children:e.jsxs("div",{className:"flex flex-col text-left bg-gray-800 text-white text-xs self-center pl-12 pr-8 py-2 -ml-12 rounded-r-full",children:[e.jsx("h3",{className:"text-lg",children:"Payment Method"}),e.jsx("p",{className:"w-64 text-xs ",children:"Credit and Debit cards accepted"})]})}),e.jsx("div",{className:"flex text-center m-2 h-24 w-64",children:e.jsxs("div",{className:"flex flex-col text-left bg-red-800 text-white text-xs self-center pl-12 pr-4 py-2 -ml-12 rounded-r-full",children:[e.jsx("h3",{className:"text-lg",children:"Insurance card And ID"}),e.jsx("p",{className:"w-64 text-xs  overflow-x-auto",children:"are required."})]})})]}),e.jsx("button",{onClick:()=>m(t.id),className:"mt-5 text-white py-1 px-3 rounded bg-gray-800 hover:bg-gray-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5",type:"button",children:"Cancel"}),e.jsx("hr",{className:"my-4 bg-gray-300 h-0.5"})]},s))}):e.jsx("div",{className:"mt-3 relative text-center w-full h-full py-4 rounded bg-gray-200",children:e.jsx("h2",{className:"",children:"You have no appointments scheduled!"})})]})};export{u as default};