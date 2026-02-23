// const users = [
//   "Nanda",
//   "Rahul",
//   "Ramesh",
//   "Priya",
//   "Pooja",
//   "Kiran",
//   "Kishore",
//   "Anjali",
//   "Arjun",
//   "Varun"
// ];

// function fakeApi(query){
//     console.log("API call for:", query);

//     return new Promise((resolve) =>{
//         setTimeout(() => {
//            const filtered = users.filter(user => 
//             user.toLowerCase().includes(query.toLowerCase())
//            );
//            resolve(filtered);  
//         }, 2000);
//     });
// }

// function debounce(fn, delay){
//     let timer;

//     return function (...args){
//         clearTimeout(timer);

//         timer = setTimeout(() => {
//             fn(...args);
//         }, delay);
//     };
// }

// async function handleSearch(e) {
//   const query = e.target.value;

//   if (!query) {
//     document.getElementById("results").innerHTML = "";
//     return;
//   }

//   const results = await fakeApi(query);

//   const ul = document.getElementById("results");
//   ul.innerHTML = "";

//   results.forEach(name => {
//     const li = document.createElement("li");
//     li.textContent = name;
//     ul.appendChild(li);
//   });
// }

// const debouncedSearch = debounce(handleSearch, 800);

// document
//   .getElementById("search")
//   .addEventListener("input", debouncedSearch);