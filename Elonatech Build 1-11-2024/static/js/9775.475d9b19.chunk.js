"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9775],{1479:(e,s,a)=>{a.d(s,{A:()=>i});a(65043);var r=a(69324),t=a(70579);const i=()=>(0,t.jsxs)("div",{className:"getintouch-container",children:[(0,t.jsx)("img",{src:"https://res.cloudinary.com/elonatech/image/upload/v1708529944/getIntouchBanner/talk_to_expert_about_your_project_rysbie.jpg",alt:"Talk to an Expert",className:"getintouch-background"}),(0,t.jsxs)("div",{className:"getintouch-content",children:[(0,t.jsx)("h5",{className:"getintouch-title",children:"Talk to an Expert about your project"}),(0,t.jsx)(r.A,{})]})]})},69324:(e,s,a)=>{a.d(s,{A:()=>h});var r=a(65043),t=a(92823),i=a.n(t),l=(a(25884),a(77154)),n=a(47503),o=a(74723),c=a(73216),d=a(70579);const h=()=>{let e=(0,c.Zp)();const[s,a]=(0,r.useState)(""),[t,h]=(0,r.useState)(""),[m,x]=(0,r.useState)(""),[p,u]=(0,r.useState)(""),[A,g]=(0,r.useState)(""),[j,b]=(0,r.useState)(""),[f,y]=(0,r.useState)(""),[v,w]=(0,r.useState)(!1);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{className:"btn btn-danger cvb","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:(0,d.jsx)("h5",{children:"Request A Quote"})}),(0,d.jsx)("div",{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,d.jsx)("div",{class:"modal-dialog modal-dialog-centered modal-dialog-scrollable",children:(0,d.jsxs)("div",{class:"modal-content",children:[(0,d.jsxs)("div",{class:"modal-header",children:[(0,d.jsx)("h1",{class:"modal-title fs-4 text-dark fw-bold",id:"exampleModalLabel",children:"Request A Quote"}),(0,d.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,d.jsxs)("div",{class:"modal-body text-dark",children:[(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{class:"col-md-12 mt-",children:(0,d.jsxs)("div",{class:" mt-2",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start fw-bold",children:["Full name",(0,d.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,d.jsx)("input",{type:"text",class:"form-control",placeholder:"Full name",onChange:e=>a(e.target.value),"aria-label":"First name"})]})}),(0,d.jsx)("div",{class:"col-md-12",children:(0,d.jsxs)("div",{class:" mt-2",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start fw-bold",children:["Email",(0,d.jsx)("span",{className:"text-danger",children:"*"})]}),(0,d.jsx)("input",{type:"email",class:"form-control",placeholder:"Email",onChange:e=>x(e.target.value),"aria-label":"Last name"})]})})]}),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsxs)("div",{class:" col-md-12 mt-3",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start fw-bold",children:["Company name",(0,d.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,d.jsx)("input",{type:"text",class:"form-control",placeholder:"Company name",onChange:e=>h(e.target.value),"aria-label":"Company name"})]}),(0,d.jsxs)("div",{class:" col-md-12 mt-3",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start  fw-bold",children:["Phone Number",(0,d.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,d.jsx)("input",{class:"form-control",placeholder:"080 xxxx xxxx",value:p,onChange:e=>{const s=e.target.value.replace(/\D/g,"");u(s)},"aria-label":"Last name"})]})]}),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsxs)("div",{class:" col-md-6 mt-3",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start fw-bold",children:["Title Of Project",(0,d.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,d.jsx)("input",{type:"text",class:"form-control",placeholder:"Title Of Project",onChange:e=>g(e.target.value),"aria-label":"Last name"})]}),(0,d.jsxs)("div",{class:"col-md-6 mt-3",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start fw-bold",children:["Project Location",(0,d.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,d.jsx)("input",{type:"text",class:"form-control",placeholder:"Project Location",onChange:e=>b(e.target.value),"aria-label":"Last name"})]})]}),(0,d.jsxs)("div",{className:"col-12 mt-3",style:{marginBottom:"4rem"},children:[(0,d.jsx)("div",{className:"",children:(0,d.jsx)("h6",{className:"text-start fw-bold",children:"Project Description"})}),(0,d.jsx)("div",{className:"mt-2",children:(0,d.jsx)(i(),{theme:"snow",className:"",placeholder:"cover letter",style:{height:"100px"},onChange:e=>y(e)})})]})]}),(0,d.jsxs)("div",{class:"modal-footer border-0",children:[(0,d.jsx)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),(0,d.jsx)("button",{type:"button",className:"btn btn-primary onliyu",onClick:async a=>{a.preventDefault(),w(!0);try{const a={fullname:s,company:t,email:m,number:p,project:A,location:j,letter:f};await l.A.post("".concat(o.T,"/api/v1/email/quote"),a,{headers:{"Content-Type":"application/json"}})&&(n.oR.success("Quote Sent!!!"),setTimeout((()=>{e(0)}),1e3))}catch(r){n.oR.error(r.response.data)}finally{w(!1)}},disabled:v,children:(0,d.jsx)("h6",{children:v?"Submitting...":"Submit"})})]})]})})})]})}},93041:(e,s,a)=>{a.r(s),a.d(s,{default:()=>c});var r=a(1479);a.p;const t=a.p+"static/media/printerImg_bxvl11.935481a7812776aa1304.jpg",i=a.p+"static/media/printer2_uiciu9.e068d66bc5139ca06b67.jpg",l=a.p+"static/media/printer_repair_2_kzvnlp.90bab12fdd59c949c3e9.png";var n=a(49367),o=a(70579);const c=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.mg,{children:[(0,o.jsx)("title",{children:"Printer Repair & Maintenance - Tech Solution, Digital Solution"}),(0,o.jsx)("meta",{name:"description",content:"Maintaining the printer and copier in your office is very important. Keeping up with all necessary printer repair and maintenance is the best way to protect your valuable investment. It also ensures that your business will remain productive and avoid frustrating delays due to printer malfunction\r We offer a full range of printer repair services. Do you have issues with your printers or copiers? Is your printer or photocopier giving you a hard time? Your printing jobs should be more straight forward and seamless. Let's FIX IT!!\r Repair and Maintenance Services for out of Warranty Print Products\r Printer installation and Configuration\r Brother\r\nCanon\r\nEpson\r\nHP (Hewlett Packard)\r\nLexmark\r\nRicoh\r\nSamsung\r\nSharp\r\nXerox\r "}),(0,o.jsx)("link",{rel:"canonical",href:"https://elonatech.com.ng/printer-repair"})]}),(0,o.jsx)("div",{class:"container-fluid printer-repair-section",children:(0,o.jsxs)("div",{class:"text-content",children:[(0,o.jsx)("h2",{children:"Printer Repair & Maintenance"}),(0,o.jsx)("h5",{children:"Keeping Up with all Necessary Maintenance is The Best Way to Protect your Investment"}),(0,o.jsx)("p",{class:"lead",children:"A malfunctioning or out of service printer, copier or multifunction device can be disastrous for your business"})]})}),(0,o.jsx)("div",{class:"container",children:(0,o.jsxs)("div",{class:"container-fluid",children:[(0,o.jsx)("h2",{class:" mt-5 fw-bold  text-center",style:{color:"#34548c"},children:"Maintaining Your Printer, Copier & Scanner"}),(0,o.jsx)("p",{class:" fs-5 text-center ",children:"Maintaining the printer and copier in your office is very important. Keeping up with all necessary printer repair and maintenance is the best way to protect your valuable investment. It also ensures that your business will remain productive and avoid frustrating delays due to printer malfunction"}),(0,o.jsx)("p",{class:" mt-2 fs-5  text-center",children:"We offer a full range of printer repair services. Do you have issues with your printers or copiers? Is your printer or photocopier giving you a hard time? Your printing jobs should be more straight forward and seamless. Let's FIX IT!!"})]})}),(0,o.jsx)("div",{class:"album py-5",children:(0,o.jsx)("div",{class:"container rounded",children:(0,o.jsxs)("div",{class:"row row-cols-1 row-cols-lg-2 row-cols-lg-3 g-2",children:[(0,o.jsx)("div",{class:"col rounded-start",style:{backgroundColor:"#34548c"},children:(0,o.jsxs)("div",{class:"card mt-1 mb-1 shadow-sm",style:{height:"380px"},children:[(0,o.jsx)("div",{className:"text-center mt-2",children:(0,o.jsx)("img",{"data-src":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEr0lEQVR4nO2bXWgUVxTHz8wm2TWbDwytqxXSh6wQE5Vka9iYD6mIqA8FTSPmwSgUtW6+tKFgwT5UH+oHUknBRAW1TTagvkge9KWCmJiYECRGfKiIT7bF5skvWqnIKefu3Ok4me3uJrP33rg58IfZO2HPOb85587Z2Q3AvM2bm6YDQAQA7gHAawBAAXoAAFtBkeQvC0rarrcqQIhQMIWFhdjdfRofP36EU1NPXVdpaSlLurW1FQcHB7GlpYVDmJANYIIC6enpTkviXB6PhyU8MjKC4+PjODw8zAH8IxvAawokXVeei5c9Jc9laQWphqR0Jm8FEEcZDWAw0wAoZ5hpABoB4Im9FCW0AMXwuejkCwHgb6delLQH/AUABSIBrGeOAyWot/UyiQZg+g2U8DWKSZh1kFNtxTrpALTydXytXSSAswzA2mb5AOp38LUzIgHcZgC2HJQPYMtBvjaU7qS9RumPGZ++ZHzqS/SJcNRohRy3k18KAPcVSDJZ0fOIj9xK3gcAk6zkiwLo3XcCF/w4hLnn7ioliskbOYla4GMOYcKo2lnbfp78glM3pSeaEMSpm6gtDHAIbW4AGKM38355XHpyycq79xgHcMcNAK/ozVQs+7hV0HWLA3jpBgAkyU4qVVk2RHcAwNzVPIDZGpL8V6fmlFyvAL8CSWUkAK3kQ+ZfCy4y11Yuj93nV5UtzgAAwUUxAMv+A0CJMwDlS95/AP5MbwG/ygB8h6KoBysRsnLE39+zcphv37f9cgD4DkVlDzimfN/8LB6AHqyIbU5rtqEeuWA+oRGmyAXUqhtZDPqykHgAYJS9lOQtEFh82TkSAIDt2VzxCmElrxWvnPYsUi6A3T3C+558qgNg+xF2XFZWlvanwuSD+d1+RB0A2uYOdrxp08a0AyAfrA02d4gFAEloz57d7wTb2/sT1tSswdzcXKba2hrs6+udllRVVdW09wqHw44AyEeK7TJrG0rW2eHD35mBtre3xf27Awf2O37ZYZcTAPKRQvLCfjQxQA4vXjxvXnl67c3W8Ye9QTOgY6vDmK3r7Dga7Zv+bc/pENP/ASAfxnnyqYxNUlA3bvzCgqSyp9eU/Jtrn5oJ4Rf7GAQ6rqurnREA8mGcJ5/K2DMK6uHDX1mQfr8/lsDlOnx5de07AP5o2smO8/LyEgJw2hPIh7H2HBSxIgooPz/fTIgD+PNSLX7dWMyOK4o+YAB+b2qeEQBrRRQUFPA18i3dQvYZgHZ7Wtu1YTF6dA09moajnzUwAN9/EmuB+vq6hABeXLnOZAfAZwHDt3RrsM8AdKuzXrmW5eX4W1MzHl0dxixjE+zvj84YAJ8FDN/SrdNpBqBbXbxS7uz8KqnbYLwWsMwC5Fu6ddlnAC66ylTq1O+0L9Cx9cpz0QaXKPnq6rDTLEC+pduAdQYQIdVmgUnrDCBCqs0Cz6wzgFUVFbGnRlZVVlbGPZ/sOZVmgSL7DGAVBW0HEAqF4p5P9pxKs0DIPgOIkiqzQIN9BhAlVWaBTvsM4NT3qYj3eqL9Q5VZoMs+Azj1fSrivZ5o/1BlFhgQPQOoNgtMip4BVJsFns+m3F2S1FlgSAEA0v9Zat5gDtu/5+obfgkkAJgAAAAASUVORK5CYII=",className:"card-img-top lazyload text-center",style:{height:"4rem",width:"4rem"},alt:""})}),(0,o.jsxs)("div",{class:"card-body",children:[(0,o.jsx)("h5",{className:"text-center",children:"Repair and Maintenance Services for out of Warranty Print Products"}),(0,o.jsx)("p",{class:"text-center fs-6 mb-4",children:"Highly aware of your company\u2019s business needs, Elonatech provides a portfolio of services that can be ordered as the occasion demands. Your printer, photocopier or scanner is down, and you are out of warranty, or your device is not even covered by a warranty. You can opt for our repair option which includes the repair service and part replacement that can be managed throughout the usage of the device."})]})]})}),(0,o.jsx)("div",{class:"col",style:{backgroundColor:"#34548c"},children:(0,o.jsx)("div",{className:"card mt-1 mb-1",style:{height:"380px",backgroundImage:"url(".concat(t,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"}})}),(0,o.jsx)("div",{class:"col rounded-end ",style:{backgroundColor:"#34548c"},children:(0,o.jsxs)("div",{class:"card mt-1 mb-1 shadow-sm",style:{height:"380px"},children:[(0,o.jsx)("div",{className:"text-center mt-4",children:(0,o.jsx)("img",{"data-src":"data:image/png;base64,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",className:"card-img-top lazyload text-center",style:{height:"4rem",width:"4rem"},alt:""})}),(0,o.jsxs)("div",{class:"card-body",children:[(0,o.jsx)("h5",{className:"text-center",children:"Printer installation and Configuration"}),(0,o.jsx)("p",{class:"text-center fs-6 mb-4",children:"Our Printer Repair Technicians is highly skilled and proficient in the regular and routine repairs, including replacements, installation and configuration of new printers, maintaining and ensuring the proper functioning of standalone printers, scanners or Network Printers."})]})]})})]})})}),(0,o.jsx)("div",{className:"container mb-5",children:(0,o.jsxs)("div",{class:"row justify-content-md-center align-items-center",children:[(0,o.jsx)("div",{class:"col-md-6",children:(0,o.jsx)("div",{className:"text-center",children:(0,o.jsx)("img",{src:"https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif","data-src":i,alt:"",className:"img-fluid  lazyload rounded"})})}),(0,o.jsx)("div",{class:"col-md-6",children:(0,o.jsx)("div",{className:"border-x",style:{height:""},children:(0,o.jsxs)("div",{className:"p-4",children:[(0,o.jsxs)("div",{class:"stars text-center fs-5 mt-3",style:{color:"#D9B938"},children:[(0,o.jsx)("i",{class:"bi bi-star-fill"}),(0,o.jsx)("i",{class:"bi bi-star-fill"}),(0,o.jsx)("i",{class:"bi bi-star-fill"}),(0,o.jsx)("i",{class:"bi bi-star-fill"}),(0,o.jsx)("i",{class:"bi bi-star-fill"})]}),(0,o.jsx)("h4",{className:"text-center  mt-3",children:"Get Professional Printer Repair"}),(0,o.jsxs)("p",{className:"mt-3",children:["Many people like to tackle copier and printer repair on their own. After all, if you can do it yourself, you cut down your wait time and get back up to speed faster. However, some types of repairs are too complex for people who do not have special knowledge of these devices. If your printer is consistently getting jammed, has parts that need to be replaced, or is making any worrisome sounds or smells, it is time to get professional help.",(0,o.jsx)("br",{})," Elonatech can readily help you solve your printer repair problems quickly and affordably."]})]})})})]})}),(0,o.jsx)("div",{className:"container-fluid",style:{backgroundColor:"#34548c"},children:(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{className:"row justify-content-md-center align-items-center",children:[(0,o.jsx)("div",{className:"col-md-5",children:(0,o.jsxs)("div",{className:"card  p-3 mt-4",style:{border:"none",backgroundColor:"#34548c"},children:[(0,o.jsx)("h4",{className:"text-white  mt-5",children:"Our Printer Specialists Work on The Following Top Brands"}),(0,o.jsxs)("ul",{className:"list-unstyled text-white",children:[(0,o.jsx)("li",{children:(0,o.jsxs)("h5",{children:[(0,o.jsx)("i",{class:"bi bi-printer text-danger me-3"}),"Brother"]})}),(0,o.jsx)("li",{children:(0,o.jsxs)("h5",{children:[(0,o.jsx)("i",{class:"bi bi-printer-fill text-danger me-3"}),"Canon"]})}),(0,o.jsx)("li",{children:(0,o.jsxs)("h5",{children:[(0,o.jsx)("i",{class:"bi bi-printer text-danger me-3"}),"Epson"]})}),(0,o.jsx)("li",{children:(0,o.jsxs)("h5",{children:[(0,o.jsx)("i",{class:"bi bi-printer-fill text-danger me-3"}),"HP (Hewlett Packard)"]})}),(0,o.jsx)("li",{children:(0,o.jsxs)("h5",{children:[(0,o.jsx)("i",{class:"bi bi-printer text-danger me-3"}),"Lexmark"]})}),(0,o.jsx)("li",{children:(0,o.jsxs)("h5",{children:[(0,o.jsx)("i",{class:"bi bi-printer-fill text-danger me-3"}),"Ricoh"]})}),(0,o.jsx)("li",{children:(0,o.jsxs)("h5",{children:[(0,o.jsx)("i",{class:"bi bi-printer text-danger me-3"}),"Samsung"]})}),(0,o.jsx)("li",{children:(0,o.jsxs)("h5",{children:[(0,o.jsx)("i",{class:"bi bi-printer-fill text-danger me-3"}),"Sharp"]})}),(0,o.jsx)("li",{children:(0,o.jsxs)("h5",{children:[(0,o.jsx)("i",{class:"bi bi-printer text-danger me-3"}),"Xerox"]})})]})]})}),(0,o.jsx)("div",{className:"col-md-7",children:(0,o.jsx)("div",{className:"card mt-5",style:{border:"none",backgroundColor:"#34548c"},children:(0,o.jsx)("img",{className:"img-fluid lazyload","data-src":l,alt:""})})})]})})}),(0,o.jsx)(r.A,{})]})},25884:()=>{}}]);
//# sourceMappingURL=9775.475d9b19.chunk.js.map