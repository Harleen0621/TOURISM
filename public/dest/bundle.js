(()=>{const a=[{name:"Madhya Pradesh",image:"/images/india/MP/mptours.jpg",page:"/states/madhyapradesh.html"},{name:"Rajasthan",image:"/images/india/Rajasthan/Rajasthantour.jpg",page:"/states/rajasthan.html"},{name:"Kerala",image:"/images/india/Kerala/Keralatour.jpg",page:"/states/kerala.html"},{name:"Jammu & Kashmir",image:"/images/india/J&K/jktour.jpg",page:"/states/j&k.html"},{name:"West Bengal",image:"/images/india/West bengal/wbtour.jpg",page:"/states/westbengal.html"}],e={"Madhya Pradesh":[{name:"Gwalior Fort",src:"/images/india/MP/gwaliorfort.jpg",color:"fae038da"},{name:"Ujjain Temple",src:"/images/india/MP/Iskcon ujjain temple.jpg",color:"fae038da"},{name:"Khajuraho Temple",src:"/images/india/MP/khajuraho temple.jpg",color:"fae038da"},{name:"Sanchi Stupa",src:"/images/india/MP/sanchi stupa.jpg",color:"fae038da"},{name:"Sun Temple",src:"/images/india/MP/Sun Temple.jpg",color:"fae038da"}],Rajasthan:[{name:"Hawa Mahal",src:"/images/india/Rajasthan/Hawa mahal.jpg",color:"ef88ecda"},{name:"Jaisalmer Fort",src:"/images/india/Rajasthan/Jaisalmer fort.jpg",color:"ef88ecda"},{name:"Mehrangarh",src:"/images/india/Rajasthan/Mehrangarh.jpg",color:"ef88ecda"},{name:"Mount Abu",src:"/images/india/Rajasthan/Mount-Abu-Rajasthan.jpg",color:"ef88ecda"},{name:"Udaipur City",src:"/images/india/Rajasthan/Udaipur_City_Palace.jpg",color:"ef88ecda"}],Kerala:[{name:"Alleppey",src:"/images/india/Kerala/alleppey.jpg",color:"96ef88da"},{name:"Athirappilly Waterfall",src:"/images/india/Kerala/athirappilly waterfall.jpg",color:"96ef88da"},{name:"Kochi",src:"/images/india/Kerala/Kochi.jpg",color:"96ef88da"},{name:"Lighthouse Beach Kovalam",src:"/images/india/Kerala/lighthouse beach kovalam.jpg",color:"96ef88da"},{name:"Munnar",src:"/images/india/Kerala/munnar.jpg",color:"96ef88da"}],"Jammu & Kashmir":[{name:"Amarnath Temple",src:"/images/india/J&K/Amarnath temple.jpg",color:"ecbf84da"},{name:"Bahu Fort",src:"/images/india/J&K/bahu fort.jpg",color:"ecbf84da"},{name:"Dal Lake",src:"/images/india/J&K/Dal lake.jpg",color:"ecbf84da"},{name:"Gurez Valley",src:"/images/india/J&K/Gurez valley.jpg",color:"ecbf84da"},{name:"Patnitop",src:"/images/india/J&K/Patnitop.jpg",color:"ecbf84da"}],"West Bengal":[{name:"Botanical Garden",src:"/images/india/West bengal/botanical garden.jpg",color:"ec9584da"},{name:"Darjeeling",src:"/images/india/West bengal/Darjeeling Toy Train.jpg",color:"ec9584da"},{name:"Howrah Bridge",src:"/images/india/West bengal/howrah bridge.jpg",color:"ec9584da"},{name:"Sundarbans National Park",src:"/images/india/West bengal/Sundarbans national park.jpg",color:"ec9584da"},{name:"Victoria Memorial",src:"/images/india/West bengal/victoria memorial.jpg",color:"ec9584da"}]},i={"Madhya Pradesh":!1,Rajasthan:!1,Kerala:!1,"Jammu & Kashmir":!1,"West Bengal":!1},n={"Madhya Pradesh":2,Rajasthan:2,Kerala:2,"Jammu & Kashmir":2,"West Bengal":2},t=document.getElementById("stateList");function s(e=""){t.innerHTML="",a.filter((a=>a.name.toLowerCase().includes(e.toLowerCase()))).forEach(((a,e)=>{const i=document.createElement("div");i.id=a.name,i.classList.add("state-item"),i.classList.add(e%2!=0?"even":"odd"),i.addEventListener("click",(()=>goToStatePage(a))),n[a.name]=e%2,i.setAttribute("data-state",a.name),i.innerHTML=`\n                <img src="${a.image}" alt="${a.name}" />\n                <span>${a.name}</span>\n            `,t.appendChild(i)}))}function r(){const a=document.querySelectorAll(".state-item"),t=window.innerHeight;a.forEach((a=>{const s=a.getBoundingClientRect();s.top<=t-100&&s.bottom>=100?a.classList.add("visible"):a.classList.remove("visible");const r=document.getElementById(a.id);r.addEventListener("mouseover",(()=>{if(i[a.id]){const e=r.lastElementChild;e.style.width="730px",e.style.transform="translateX(0)",e.style.background=`linear-gradient(90deg, #f2efef, #${a.color}, #f2efef)`,e.querySelectorAll(`[id^='${a.id}-img'], .image-item`).forEach((a=>{a.style.display="flex"}))}else{i[a.id]=!0;const t=document.createElement("div");t.classList.add("ribbon-layer"),t.id=`${a.id}-rl`,n[a.id]%2==0?t.classList.add("even"):t.classList.add("odd"),t.style.width="730px",t.style.transform="translateX(0)",t.style.background=`linear-gradient(90deg, #f2efef, #${e[a.id][0].color}, #f2efef)`,a.appendChild(t),e[a.id].forEach((e=>{const i=document.createElement("div");i.classList.add("image-item"),i.id=`${a.id}-img`;const n=document.createElement("img");n.src=e.src,n.alt="Alt Text";const s=document.createElement("span");s.textContent=e.name,i.appendChild(n),i.appendChild(s),t.appendChild(i)}))}})),r.addEventListener("mouseleave",(()=>{const e=r.lastElementChild;e.style.width="0px",e.style.transform="translateX(-100%)",e.querySelectorAll(`[id^='${a.id}-img'], .image-item`).forEach((a=>{a.style.display="none"}))}))}))}document.getElementById("searchBox").addEventListener("input",(a=>{s(a.target.value),r()})),window.addEventListener("scroll",r),s(),window.onload=function(){const a=new URLSearchParams(window.location.search),e=a.get("package"),i=a.get("price");e&&i&&(document.getElementById("package").value=e,document.getElementById("amount").value=`$${i}`)}})();