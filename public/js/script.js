// List of states with their images and corresponding HTML pages
const states = [
    { name: "Madhya Pradesh", image: "/images/india/MP/mptours.jpg", page: "/states/madhyapradesh.html" },
    { name: "Rajasthan", image: "/images/india/Rajasthan/Rajasthantour.jpg", page: "/states/rajasthan.html" },
    { name: "Kerala", image: "/images/india/Kerala/Keralatour.jpg", page: "/states/kerala.html" },
    { name: "Jammu & Kashmir", image: "/images/india/J&K/jktour.jpg", page: "/states/j&k.html" },
    { name: "West Bengal", image: "/images/india/West bengal/wbtour.jpg", page: "/states/westbengal.html" },
];


const cities =
    {
    "Madhya Pradesh":[
            {
                name: "Gwalior Fort",
                src: "/images/india/MP/gwaliorfort.jpg",
                color: "fae038da"
            },
            {
                name: "Ujjain Temple",
                src: "/images/india/MP/ujjain.jpg",
                color: "fae038da"
            },  
            {
                name: "Khajuraho Temple",
                src: "/images/india/MP/khajuraho.jpg",
                color: "fae038da"
            },           {
                name: "Sanchi Stupa",
                src: "/images/india/MP/sanchistupa.jpg",
                color: "fae038da"
            },            {
                name: "Sun Temple",
                src: "/images/india/MP/Suntemple.jpg",
                color: "fae038da"
            },
        ],
        "Rajasthan":[
            {
                name: "Hawa Mahal",
                src: "/images/india/Rajasthan/Hawa mahal.jpg",
                color: "ef88ecda",
            },
            {
                name: "Jaisalmer Fort",
                src: "/images/india/Rajasthan/Jaisalmer fort.jpg",
                color: "ef88ecda",
            },            {
                name: "Mehrangarh",
                src: "/images/india/Rajasthan/Mehrangarh.jpg",
                color: "ef88ecda",
            },            {
                name: "Mount Abu",
                src: "/images/india/Rajasthan/Mount-Abu-Rajasthan.jpg",
                color: "ef88ecda",
            }, {
                name: "Udaipur City",
                src: "/images/india/Rajasthan/Udaipur_City_Palace.jpg",
                color: "ef88ecda",
            },
        ],
        "Kerala":[
            {
                name: "Alleppey",
                src: "/images/india/Kerala/alleppey.jpg",
                color: "96ef88da"
            },
            {
                name: "Athirappilly Waterfall",
                src: "/images/india/Kerala/athirappilly waterfall.jpg",
                color: "96ef88da"
            },            {
                name: "Kochi",
                src: "/images/india/Kerala/Kochi.jpg",
                color: "96ef88da"
            },            {
                name: "Lighthouse Beach Kovalam",
                src: "/images/india/Kerala/lighthouse beach kovalam.jpg",
                color: "96ef88da"
            }, {
                name: "Munnar",
                src: "/images/india/Kerala/munnar.jpg",
                color: "96ef88da"
            },
        ],
        "Jammu & Kashmir":[
            {
                name: "Amarnath Temple",
                src: "/images/india/J&K/Amarnath temple.jpg",
                color: "ecbf84da"
            },
            {
                name: "Bahu Fort",
                src: "/images/india/J&K/bahu fort.jpg",
                color: "ecbf84da"
            },            {
                name: "Dal Lake",
                src: "/images/india/J&K/Dal lake.jpg",
                color: "ecbf84da"
            },            {
                name: "Gurez Valley",
                src: "/images/india/J&K/Gurez valley.jpg",
                color: "ecbf84da"
            },{
                name: "Patnitop",
                src: "/images/india/J&K/Patnitop.jpg",
                color: "ecbf84da"
            },
        ],
        "West Bengal":[
            {
                name: "Botanical Garden",
                src: "/images/india/West bengal/botanical garden.jpg",
                color: "ec9584da"
            },
            {
                name: "Darjeeling",
                src: "/images/india/West bengal/Darjeeling Toy Train.jpg",
                color: "ec9584da"
            },            {
                name: "Howrah Bridge",
                src: "/images/india/West bengal/howrah bridge.jpg",
                color: "ec9584da"
            },            {
                name: "Sundarbans National Park",
                src: "/images/india/West bengal/Sundarbans national park.jpg",
                color: "ec9584da"
            },          {
                name: "Victoria Memorial",
                src: "/images/india/West bengal/victoria memorial.jpg",
                color: "ec9584da"
            },
        ]
}

const isCitiesDivCreated = {
    "Madhya Pradesh" : false,
    "Rajasthan" : false,
    "Kerala" : false,
    "Jammu & Kashmir" : false,
    "West Bengal" : false
}

const indexesOfStates = {
    "Madhya Pradesh" : 2,
    "Rajasthan" : 2,
    "Kerala" : 2,
    "Jammu & Kashmir" : 2,
    "West Bengal" : 2
}

//List of places for each state
const places = {
    "Madhya Pradesh": [
        { name: "Gwalior Fort", image: "/images/india/MP/gwaliorfort.jpg" },
        { name: "Iskcon Ujjain Temple", image: "/images/india/MP/ujjain.jpg" },
        { name: "Khajuraho Temple", image: "/images/india/MP/khajuraho.jpg" },
        { name: "Sanchi Stupa", image: "/images/india/MP/sanchistupa.jpg" },
        { name: "Sun Temple", image: "/images/india/MP/Suntemple.jpg" }
    ],

    "Rajasthan": [
        { name: "Hawa Mahal", image: "/images/india/Rajasthan/Hawa mahal.jpg" },
        { name: "Jaisalmer Fort", image: "/images/india/Rajasthan/jaisalmer fort.jpg" },
        { name: "Mehrangarh", image: "/images/india/Rajasthan/Mehrangarh.jpg" },
        { name: "Mount-Abu", image: "/images/india/Rajasthan/Mount-Abu-Rajasthan.jpg" },
        { name: "Udaipur_City_Palace", image: "/images/india/Rajasthan/Udaiput_City_Palace" }
    ],
    "Kerala": [
        { name: "Alleppey Backwaters", image: "/images/india/Kerala/alleppey.jpg" },
        { name: "Athirappilly waterfall", image: "/images/india/Kerala/atthirappilly waterfall.jpg" },
        { name: "Kochi ", image: "/images/india/Kerala/Kochi.jpg" },
        { name: "Lighthouse Beach-Kovalam - Periyar Wildlife", image: "/images/india/Kerala/lighthouse beach kovalam.jpg" },
        { name: "Munnar Tea Gardens", image: "/images/india/Kerala/munnar.jpg" }
    ],
    "Jammu & Kashmir": [
        { name: "Amarnath Temple", image: "/images/india/J&K/Amarnath temple.jpg" },
        { name: "Bahu Fort", image: "/images/india/J&K/bahu fort.jpg" },
        { name: "Dal Lake", image: "/images/india/J&K/Dal lake.jpg" },
        { name: "Gurez Valley", image: "/images/india/J&K/Gurez valley.jpg" },
        { name: "Patnitop", image: "/images/india/J&K/Patnitop.jpg" }
    ],
    "West Bengal": [
        { name: "Botanical Garden", image: "/images/india/West bengal/botanical garden.jpg" },
        { name: "Darjeeling Toy Train", image: "/images/india/West bengal/Darjeeling Toy Train.jpg" },
        { name: "Howrah Bridge", image: "/images/india/West bengal/howrah bridge.jpg" },
        { name: "Sundarbans National Park", image: "/images/india/West bengal/Sundarbans national park.jpg" },
        { name: "Victoria Memorial", image: "/images/india/West bengal/victoria memorial.jpg" }
    ]
};

const statesData = {
    "Madhya Pradesh": {
        "capital": "Bhopal",
        "traditions": "Rich in tribal culture, classical music, and dance forms like Pandavani.",
        "food": "Poha, Bhutte Ka Kees, Dal Bafla, and Jalebi.",
        "history": "Home to ancient temples, forts, and UNESCO sites like Khajuraho."
    },
    "Rajasthan": {
        "capital": "Jaipur",
        "traditions": "Known for grand festivals like Teej, vibrant folk dances, and camel fairs.",
        "food": "Dal Baati Churma, Gatte ki Sabzi, Laal Maas.",
        "history": "Land of Rajputana heritage, famous for forts like Amer, Mehrangarh, and Udaipur palaces."
    }
};


// DOM elements
const stateList = document.getElementById("stateList");
const searchBox = document.getElementById("searchBox");

// Function to render the states
function renderStates(filter = "") {
    stateList.innerHTML = ""; // Clear previous list
    states
        .filter(state => state.name.toLowerCase().includes(filter.toLowerCase()))
        .forEach((state, index) => {

            const stateItem = document.createElement("div");
            stateItem.id=state.name;
            stateItem.classList.add("state-item");
            stateItem.classList.add(index % 2 !== 0 ? "even" : "odd");
            stateItem.addEventListener("click",()=> goToStatePage(state.name));
            indexesOfStates[state.name]=index%2;
            stateItem.setAttribute("data-state", state.name);
            // Add state name and image
            stateItem.innerHTML = `
                <img src="${state.image}" alt="${state.name}" />
                <span>${state.name}</span>
            `;

            // Append to the list
            stateList.appendChild(stateItem);
        });
}

// Scroll-based animation
function handleScroll() {
    const stateItems = document.querySelectorAll(".state-item");
    const windowHeight = window.innerHeight;

    stateItems.forEach((item) => {
        const rect = item.getBoundingClientRect();

        // Trigger animation if the element is in the viewport
        if (rect.top <= windowHeight - 100 && rect.bottom >= 100) {
            item.classList.add("visible");
        } else {
            item.classList.remove("visible");
        }

        const myElement = document.getElementById(item.id);

        myElement.addEventListener('mouseover', () => {
            if(!isCitiesDivCreated[item.id]){
                isCitiesDivCreated[item.id]=true;
                const ribbonLayer=document.createElement('div');
                ribbonLayer.classList.add("ribbon-layer");
                ribbonLayer.id=`${item.id}-rl`
                if(indexesOfStates[item.id]%2===0){
                    ribbonLayer.classList.add("even");
                }else{
                    ribbonLayer.classList.add("odd");
                }
                ribbonLayer.style.width = "730px";
                ribbonLayer.style.transform = "translateX(0)";
                ribbonLayer.style.background = `linear-gradient(90deg, #f2efef, #${cities[item.id][0].color}, #f2efef)`;
                item.appendChild(ribbonLayer);
                cities[item.id].forEach(image => {
                    const div = document.createElement("div");
                    div.classList.add("image-item");
                    div.id=`${item.id}-img`;
        
                    const img = document.createElement("img");
                    img.src = image.src;
                    img.alt = "Alt Text";
        
                    const name = document.createElement("span");
                    name.textContent = image.name;
        
                    // Append elements to div
                    div.appendChild(img);
                    div.appendChild(name);
    
                    // Append div to container
                    ribbonLayer.appendChild(div);
                });
            }else{
                const ribbon = myElement.lastElementChild;
                //indexesOfStates[item.id]%2===0
                ribbon.style.width = "730px";
                ribbon.style.transform = "translateX(0)";
                ribbon.style.background = `linear-gradient(90deg, #f2efef, #${item.color}, #f2efef)`;
                ribbon.querySelectorAll(`[id^='${item.id}-img'], .image-item`).forEach(el => {
                    el.style.display = "flex";
                });
            }

        });

        
        myElement.addEventListener('mouseleave', () => {
            const ribbon = myElement.lastElementChild;
            // if(indexesOfStates[item.id]%2===0){
            ribbon.style.width = "0px";
            ribbon.style.transform = "translateX(-100%)";
            ribbon.querySelectorAll(`[id^='${item.id}-img'], .image-item`).forEach(el => {
                el.style.display = "none";
            });
        });


    });
}

// Event listener for search
searchBox.addEventListener("input", (e) => {
    const filter = e.target.value;
    renderStates(filter);
    handleScroll(); // Ensure animations trigger properly on filtering
});

// Event listener for scroll
window.addEventListener("scroll", handleScroll);

// Initial render
renderStates();

function goToStatePage(state) {
    window.location.href = `state?state=${encodeURIComponent(state)}`;
}

window.onload = function() {
    // Get the query parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const packageName = urlParams.get('package');
    const price = urlParams.get('price');

    if (packageName && price) {
        // Pre-fill the booking form with the package details
        document.getElementById('package').value = packageName;
        document.getElementById('amount').value = `$${price}`;
    }
};

function submitBooking(event) {
    event.preventDefault();  // Prevent form submission for demo purposes

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const packageSelected = document.getElementById('package').value;
    const amount = document.getElementById('amount').value;

    alert(`Booking Confirmed!\n\nName: ${name}\nEmail: ${email}\nPackage: ${packageSelected}\nAmount: ${amount}`);
}

module.exports= { places };


