// const api = new API();
// let items = [];
// const home = '';

// const itemTemplate = (item) => `
//     <img class="item-element" src="${item.image}" alt="${item.name}">
//     <p class="item-element">Description: ${item.description}</p>
//     <div>
//     <button class="item-element" style="background-color: #17a2b8;" onclick="edit(li5b848fa8b7ec3d145896980b)"><a class="menu" onclick="onNavItemClick('/edit-item'); return false;"><i class="fas fa-edit"></i></a></button>
//     <button class="item-element" style="background-color: #dc3545;" onclick="app.showComponent('#edit-item/${item._id}')"><a class="menu" href="#new-item"><i class="fas fa-trash-alt"></i></a></button>
//     </div>
//     `;

// function getItems() {
//     api
//         .getItems()
//         .then(result => items = result.items)
//         .then(() => {
//             home = items.reduce((html, item) => html + `<li id="li${item._id}" class="card item box-item" draggable="true" ondragstart="dragstart_handler(event);">${itemTemplate(item)}</li>`, '')
//             return `
//             <div class="container">
//                 <h1 class="center">Items List</h1>
//                 <div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);">
//                     <ul class="box">
//                         ${itemsHTML}
//                     </ul>
//                 </div>
//             </div>
//         `;
//         })
// }
