
// const displayItems = () => {
//     const rootElement = document.getElementById("root");
//     rootElement.innerHTML = "";

//     categories.forEach((item) => {
//         const { index, image, tittle, rate, avalablity } = item;
//         const jList = document.createElement("div");
//         jList.className = "jList";
//         jList.innerHTML = `
//             <img src="${image}" alt="${tittle}">
//             <h3>${tittle}</h3>
//             <p>Rating: ${rate}</p>
//             <span>${avalablity}</span>
//         `;
//         rootElement.appendChild(jList);
//     });
// }

// displayItems();




function fetchJSONData() {
    fetch("job-list.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            var rootElement = document.getElementById("root");
            var display = "";

            for (var key in data) {
                // Assuming 'data[key]' is an object with the required properties
                display += `
                    <li data-item="fulltime" class="jList">
                        <img src="${data[key].image}" alt="">
                        <h3>${data[key].tittle}</h3>
                        <p>${data[key].rate}</p>
                        <span id="key">${data[key].av}</span>
                    </li>
                `;
            }

            rootElement.innerHTML = display;
        })
        .catch((error) =>
            console.error("Unable to fetch data:", error)
        );
}

//fetchJSONData();

// document.getElementById("searchBar").addEventListener("keyup", (e) => {
//     const searchData = e.target.value.toLowerCase();
//     console.log(searchData);

// })














