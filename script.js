const sortBtns = document.querySelectorAll(".job-id > *")
const sortItems = document.querySelectorAll(".jobs-container > *")

sortBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        sortBtns.forEach((btn) => btn.classList.remove("active"));
        btn.classList.add("active");

        const targetData = btn.getAttribute('data-target')
        sortItems.forEach((item) => {
            item.classList.add("delete");

            if(item.getAttribute("data-item") === targetData || targetData === "all") {
                item.classList.remove('delete');
            }
        })
    })
})

// // Sorting selection // About localisum 

let root = document.getElementById('root');
let jobCode = document.getElementById('job-code-tittle');
let notFound = document.querySelector('.not-found');
console.log(notFound);

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    let searchData = e.target.value.toLowerCase();
    let items = document.querySelectorAll('.jList');
    let anyVisible = false;
    items.forEach((item) => {
        let itemText = item.textContent.toLocaleLowerCase();
        if (itemText.includes(searchData)) {
            item.classList.remove('delete');
            anyVisible = true;
        } else {
            item.classList.add('delete');
        }
    });
    if (!anyVisible) {
        notFound.style.display = 'block';
    } else {
        notFound.style.display = 'none';
    }
});

