// document.addEventListener("DOMContentLoaded", function () {
//     const urlParams = new URLSearchParams(window.location.search);
//     const placeName = urlParams.get("place");

//     // Sample itinerary data for 25 places
//     const itineraryData = {
//         "gwalior fort": {
//             description: "Explore the magnificent Gwalior Fort, a historic gem known for its architectural beauty and cultural significance.",
//             points: [
//                 "Visit the Man Singh Palace.",
//                 "Explore the Sas-Bahu Temples.",
//                 "Admire the intricate carvings on Teli Ka Mandir.",
//                 "Enjoy a panoramic view of Gwalior from the fort walls.",
//                 "Learn about the history at the Gwalior Fort Museum."
//             ]
//         },
//         "amber fort": {
//             description: "Amber Fort in Jaipur is a stunning blend of Hindu and Mughal architecture.",
//             points: [
//                 "Take an elephant ride to the fort entrance.",
//                 "Admire the beautiful Sheesh Mahal (Hall of Mirrors).",
//                 "Explore the Diwan-i-Aam and Diwan-i-Khas.",
//                 "Enjoy a sound and light show in the evening.",
//                 "Capture panoramic views of Maota Lake."
//             ]
//         },
//         "hawa mahal": {
//             description: "Hawa Mahal, also known as the 'Palace of Winds,' is an iconic landmark in Jaipur.",
//             points: [
//                 "Admire the unique honeycomb structure.",
//                 "Learn the history behind its 953 small windows.",
//                 "Visit the small museum inside.",
//                 "Shop for local crafts and jewelry nearby.",
//                 "Enjoy street food around the palace."
//             ]
//         },
//         "india gate": {
//             description: "India Gate in Delhi is a war memorial dedicated to soldiers of the Indian Army.",
//             points: [
//                 "Take a walk around the monument.",
//                 "Visit in the evening for beautiful lighting.",
//                 "Enjoy a picnic in the surrounding lawns.",
//                 "Learn about its history at nearby museums.",
//                 "Take a boat ride in the nearby canal."
//             ]
//         },
//         "agra fort": {
//             description: "A UNESCO World Heritage site, Agra Fort is a historical fort in Agra, India.",
//             points: [
//                 "Explore the Diwan-i-Am and Diwan-i-Khas.",
//                 "Visit the beautiful Jahangir Palace.",
//                 "Admire the architecture of Moti Masjid.",
//                 "See the view of the Taj Mahal from the fort.",
//                 "Learn about Mughal history and culture."
//             ]
//         },
//         // Add more places here with the same structure
//         "taj mahal": {
//             description: "One of the Seven Wonders of the World, Taj Mahal is a symbol of love in Agra.",
//             points: [
//                 "Witness the beauty of the white marble mausoleum.",
//                 "Explore the main dome and surrounding structures.",
//                 "Walk through the lush Mughal gardens.",
//                 "Visit early morning for the best views.",
//                 "Learn about the history of Shah Jahan and Mumtaz Mahal."
//             ]
//         },
//         "mehrangarh fort": {
//             description: "Mehrangarh Fort in Jodhpur is one of the largest forts in India.",
//             points: [
//                 "Explore the various palaces within the fort.",
//                 "Admire the panoramic views of Jodhpur.",
//                 "Learn about the fort's history in the museum.",
//                 "Attend the Rao Jodha Desert Rock Park.",
//                 "Take part in cultural performances at the fort."
//             ]
//         }
//         // Add 18 more places in this format
//     };

//     if (placeName && itineraryData[placeName]) {
//         const placeInfo = itineraryData[placeName];
//         document.getElementById("place-name").textContent = placeName.replace(/^\w/, c => c.toUpperCase());
//         document.getElementById("itinerary-description").textContent = placeInfo.description;

//         const itineraryPointsList = document.getElementById("itinerary-points");
//         placeInfo.points.forEach(point => {
//             const listItem = document.createElement("li");
//             listItem.textContent = point;
//             itineraryPointsList.appendChild(listItem);
//         });
//     } else {
//         document.querySelector(".container").innerHTML = "<h1>Itinerary not found</h1>";
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const placeName = urlParams.get("place");

    const itineraryData = {
        "place-1": {
            title: "Place 1 Itinerary",
            content: "Day 1: Arrival and sightseeing.<br>Day 2: Visit historical sites.<br>Day 3: Departure."
        },
        "place-2": {
            title: "Place 2 Itinerary",
            content: "Day 1: City tour.<br>Day 2: Adventure activities.<br>Day 3: Leisure and departure."
        },
        "place-3": {
            title: "Place 3 Itinerary",
            content: "Day 1: Explore local markets.<br>Day 2: Cultural experiences.<br>Day 3: River cruise."
        },
        // Add itineraries for all 25 places here
        "place-25": {
            title: "Place 25 Itinerary",
            content: "Day 1: Relax at the beach.<br>Day 2: Water sports.<br>Day 3: Return journey."
        }
    };

    if (placeName && itineraryData[placeName]) {
        document.getElementById("place-name").textContent = itineraryData[placeName].title;
        document.getElementById("itinerary-content").innerHTML = itineraryData[placeName].content;
    } else {
        document.querySelector(".container").innerHTML = "<h1>Itinerary not found</h1>";
    }
});




