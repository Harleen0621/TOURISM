//List of places for each state
const places = {
    "Madhya Pradesh": [
        { name: "Gwalior Fort", image: "/images/india/MP/gwaliorfort.jpg" , price: 2000, duration: 5, start: "15<sup>th</sup> March", end: "17<sup>th</sup> March" },
        { name: "Iskcon Ujjain Temple", image: "/images/india/MP/ujjain.jpg" , price: 2000, duration: 5, start: "15<sup>th</sup> March", end: "17<sup>th</sup> March" },
        { name: "Khajuraho Temple", image: "/images/india/MP/khajuraho.jpg" , price: 2000, duration: 5, start: "15<sup>th</sup> March", end: "17<sup>th</sup> March" },
        { name: "Sanchi Stupa", image: "/images/india/MP/sanchistupa.jpg" , price: 2000, duration: 5, start: "15<sup>th</sup> March", end: "17<sup>th</sup> March" },
        { name: "Sun Temple", image: "/images/india/MP/Suntemple.jpg" , price: 2000, duration: 5, start: "15<sup>th</sup> March", end: "17<sup>th</sup> March" }
    ],

    "Rajasthan": [
        { name: "Hawa Mahal", image: "/images/india/Rajasthan/Hawa mahal.jpg" , price: 2000, duration: 5, start: "15<sup>th</sup> March", end: "17<sup>th</sup> March" },
        { name: "Jaisalmer Fort", image: "/images/india/Rajasthan/jaisalmer fort.jpg" , price: 2000, duration: 5, start: "15<sup>th</sup> March", end: "17<sup>th</sup> March" },
        { name: "Mehrangarh", image: "/images/india/Rajasthan/Mehrangarh.jpg" , price: 2000, duration: 5, start: "15<sup>th</sup> March", end: "17<sup>th</sup> March" },
        { name: "Mount-Abu", image: "/images/india/Rajasthan/Mount-Abu-Rajasthan.jpg" , price: 2000, duration: 5, start: "15<sup>th</sup> March", end: "17<sup>th</sup> March" },
        { name: "Udaipur_City_Palace", image: "/images/india/Rajasthan/Udaipur_City_Palace.jpg" }
    ],
    "Kerala": [
        { name: "Alleppey Backwaters", image: "/images/india/Kerala/alleppey.jpg" , price: 2000, duration: 5, start: "15<sup>th</sup> March", end: "17<sup>th</sup> March" },
        { name: "Athirappilly waterfall", image: "/images/india/Kerala/athirappilly waterfall.jpg" , price: 2000, duration: 5, start: "15<sup>th</sup> March", end: "17<sup>th</sup> March" },
        { name: "Kochi ", image: "/images/india/Kerala/Kochi.jpg" , price: 2000, duration: 5, start: "15<sup>th</sup> March", end: "17<sup>th</sup> March" },
        { name: "Lighthouse Beach-Kovalam - Periyar Wildlife", image: "/images/india/Kerala/lighthouse beach kovalam.jpg" , price: 2000, duration: 5, start: "15<sup>th</sup> March", end: "17<sup>th</sup> March" },
        { name: "Munnar Tea Gardens", image: "/images/india/Kerala/munnar.jpg" , price: 2000, duration: 5, start: "15<sup>th</sup> March", end: "17<sup>th</sup> March" }
    ],
    "Jammu & Kashmir": [
        { name: "Amarnath Temple", image: "/images/india/J&K/Amarnath temple.jpg" , price: 2000, duration: 5, start: "15<sup>th</sup> March", end: "17<sup>th</sup> March" },
        { name: "Bahu Fort", image: "/images/india/J&K/bahu fort.jpg" , price: 2000, duration: 5, start: "15<sup>th</sup> March", end: "17<sup>th</sup> March" },
        { name: "Dal Lake", image: "/images/india/J&K/Dal lake.jpg" , price: 2000, duration: 5, start: "15<sup>th</sup> March", end: "17<sup>th</sup> March" },
        { name: "Gurez Valley", image: "/images/india/J&K/Gurez valley.jpg" , price: 2000, duration: 5, start: "15<sup>th</sup> March", end: "17<sup>th</sup> March" },
        { name: "Patnitop", image: "/images/india/J&K/Patnitop.jpg" , price: 2000, duration: 5, start: "15<sup>th</sup> March", end: "17<sup>th</sup> March" }
    ],
    "West Bengal": [
        { name: "Botanical Garden", image: "/images/india/West bengal/botanical garden.jpg" , price: 2000, duration: 5, start: "15<sup>th</sup> March", end: "17<sup>th</sup> March" },
        { name: "Darjeeling Toy Train", image: "/images/india/West bengal/Darjeeling Toy Train.jpg" , price: 2000, duration: 5, start: "15<sup>th</sup> March", end: "17<sup>th</sup> March" },
        { name: "Howrah Bridge", image: "/images/india/West bengal/howrah bridge.jpg" , price: 2000, duration: 5, start: "15<sup>th</sup> March", end: "17<sup>th</sup> March" },
        { name: "Sundarbans National Park", image: "/images/india/West bengal/Sundarbans national park.jpg" , price: 2000, duration: 5, start: "15<sup>th</sup> March", end: "17<sup>th</sup> March" },
        { name: "Victoria Memorial", image: "/images/india/West bengal/victoria memorial.jpg" , price: 2000, duration: 5, start: "15<sup>th</sup> March", end: "17<sup>th</sup> March" }
    ]
};

const statesData = {
    "Madhya Pradesh": {
        description:"Known as the 'Heart of India', Madhya Pradesh is a land of stunning natural beauty, rich history, and diverse culture. This central Indian state is famous for its ancient temples, wildlife sanctuaries, and vibrant traditions. The state boasts several UNESCO World Heritage Sites like Khajuraho, known for its intricately carved temples depicting art and passion, and Sanchi, which showcases India's Buddhist heritage. Wildlife enthusiasts can explore national parks like Kanha, Bandhavgarh, and Pench, home to Bengal tigers and lush landscapes. The city of Gwalior is renowned for its majestic fort and classical music heritage, while Ujjain is one of the oldest cities in India and an important Hindu pilgrimage center. Madhya Pradesh's cuisine is equally diverse, with mouthwatering dishes like poha, jalebi, and bhutte ki kees.",
        state: "/images/india/MP/MP map.jpg"
    },
    "Rajasthan": {
        description: "Rajasthan, the 'Land of Kings', is a state steeped in royal grandeur and heritage. Famous for its majestic palaces, historic forts, and vibrant festivals, it offers a glimpse into India's rich past. Cities like Jaipur, Udaipur, Jodhpur, and Jaisalmer are dotted with architectural marvels such as the Amber Fort, City Palace, and the golden Jaisalmer Fort. The Thar Desert provides a unique experience with camel safaris and desert camping under star-lit skies. Rajasthan is also known for its colorful culture, with traditional dances like Ghoomar and Kalbeliya, as well as festivals like the Pushkar Fair and the Desert Festival. The cuisine is a delight for food lovers, offering delicacies such as dal baati churma, gatte ki sabzi, and laal maas.",
        state: "/images/india/Rajasthan/rajasthan map.jpg"
    },
    "Kerala": {
        description: "Nicknamed 'God's Own Country', Kerala is a tropical paradise with lush greenery, serene backwaters, and beautiful beaches. Located in the southwestern part of India, the state is known for its unique culture, Ayurveda, and Kathakali dance. The backwaters of Alleppey offer a tranquil experience through houseboat cruises, while the hill stations of Munnar and Wayanad are perfect for nature lovers and tea garden tours. Kerala's beaches, such as Varkala and Kovalam, attract visitors with their golden sands and clear waters. The state's rich traditions include the famous Onam festival and vibrant snake boat races. Kerala's cuisine is renowned for its use of coconut, spices, and fresh seafood, with dishes like appam, puttu, and fish curry being local favorites.",
        state: "/images/india/Kerala/kerala map.jpg"
    },
    "Jammu & Kashmir": {
        description: "Known as 'Paradise on Earth', Jammu & Kashmir is blessed with breathtaking landscapes, snow-capped mountains, and pristine valleys. The region is famous for its enchanting beauty, especially in places like Srinagar, with its Dal Lake and houseboats, and Gulmarg, a popular destination for skiing and adventure sports. The Mughal Gardens and Shankaracharya Temple in Srinagar reflect the state's historical and cultural richness. Leh-Ladakh offers a surreal landscape with monasteries, high-altitude passes, and the stunning Pangong Lake. Jammu is known for its temples, especially the Vaishno Devi Shrine, which attracts millions of pilgrims each year. Kashmiri cuisine is a must-try, with specialties like Rogan Josh, Yakhni, and the traditional Wazwan feast.",
        state: "/images/india/J&K/J&K map.jpg"
    },
    "West Bengal": {
        description: "West Bengal is a state that blends history, culture, and natural beauty seamlessly. It is known for its vibrant festivals, colonial architecture, and diverse landscapes ranging from the Himalayas to the Sundarbans. Kolkata, the capital city, is often referred to as the 'Cultural Capital of India' and is known for landmarks such as the Victoria Memorial, Howrah Bridge, and Dakshineswar Kali Temple. The hill station of Darjeeling is famous for its tea gardens and stunning views of the Kanchenjunga peak. Wildlife lovers can explore the Sundarbans, home to the Royal Bengal Tiger. West Bengal's festivals, especially Durga Puja, are celebrated with great fervor and grandeur. The state's cuisine offers a rich variety of flavors, with dishes like shorshe ilish (hilsa fish curry), kosha mangsho (spicy mutton curry), and sweets like rosogolla and sandesh.",
        state: "/images/india/West bengal/west bengal map.jpg"
    }
};

function getStateData(state) {
    return statesData[state] || null;
}

// document.addEventListener("DOMContentLoaded", function () {
//     const urlParams = new URLSearchParams(window.location.search);
//     const stateName = urlParams.get("state");
    
//     if (stateName && statesData[stateName]) {
//         const stateInfo = statesData[stateName];
//         document.getElementById("state-name").textContent = stateName;
//         document.getElementById("description").textContent = stateInfo.description;
//         document.getElementById("state-map").src=stateInfo.state;

//         const placesInfo = places[stateName];
//         const citiesContainer = document.getElementById("cities-container");
//         placesInfo.forEach(city => {
//             const cityCard = document.createElement("div");
//             cityCard.classList.add("city-card");
//             cityCard.innerHTML = `
//                 <img src="${city.image}" alt="${city.name}">
//                 <h3>${city.name}</h3>
//                 <p>Price: ₹${city.price}</p>
//                 <p>Duration: ${city.duration} Days</p>
//                 <p>Batch Start: ${city.start}</p>
//                 <p>Batch End: ${city.end}</p>
//                 <button id="view-itinerary"> View Itinerary</button>
//             `;
//             citiesContainer.appendChild(cityCard);
//         });
//     } else {
//         document.querySelector(".container").innerHTML = "<h1>State not found</h1>";
//     }
// });


document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const stateName = urlParams.get("state");

    if (stateName && statesData[stateName]) {
        const stateInfo = statesData[stateName];
        document.getElementById("state-name").textContent = stateName;
        document.getElementById("description").textContent = stateInfo.description;
        document.getElementById("state-map").src = stateInfo.state;

        if (places[stateName]) {
            const placesInfo = places[stateName];
            const citiesContainer = document.getElementById("cities-container");
            
            placesInfo.forEach((city, index) => {
                const cityCard = document.createElement("div");
                cityCard.classList.add("city-card");
                cityCard.innerHTML = `
                    <img src="${city.image || 'default-image.jpg'}" alt="${city.name || 'City'}">
                    <h3>${city.name || 'Unknown City'}</h3>
                    <p>Price: ₹${city.price || 'N/A'}</p>
                    <p>Duration: ${city.duration || 'N/A'} Days</p>
                    <p>Batch Start: ${city.start || 'N/A'}</p>
                    <p>Batch End: ${city.end || 'N/A'}</p>
                    <button class="view-itinerary" data-index="${index}">View Itinerary</button>
                `;
                citiesContainer.appendChild(cityCard);
            });

            // Add event listeners to the "View Itinerary" buttons
            document.querySelectorAll(".view-itinerary").forEach(button => {
                button.addEventListener("click", function () {
                    const cityIndex = this.getAttribute("data-index");
                    const city = placesInfo[cityIndex];
                    
                    // Redirect to the itinerary page with the city name as a query parameter
                    window.location.href = `itinerary.html?place=${encodeURIComponent(city.name.trim().toLowerCase())}`;
                });
            });
        } else {
            document.getElementById("cities-container").innerHTML = "<p>No places available for this state.</p>";
        }

    } else {
        document.querySelector(".container").innerHTML = "<h1>State not found</h1>";
    }
});



