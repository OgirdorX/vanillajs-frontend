const app = new App('#app');
const api = new API();



const itemTemplate = (item) => `
    <img class="item-element" src="${item.image}" alt="${item.name}">
    <p class="item-element">Description: ${item.description}</p>
    <div>
    <button class="item-element" style="background-color: #17a2b8;" onclick="edit(li5b848fa8b7ec3d145896980b)"><a class="menu" onclick="onNavItemClick('/edit-item'); return false;"><i class="fas fa-edit"></i></a></button>
    <button class="item-element" style="background-color: #dc3545;" onclick="app.showComponent('#edit-item/${item._id}')"><a class="menu" href="#new-item"><i class="fas fa-trash-alt"></i></a></button>
    </div>
    `;

app.addComponent({
    name: 'home',
    model: {
        items: []
    },
    view(model) {
        const itemsHTML = model.items.reduce((html, item) => html + `<li id="${item._id}" class="card item box-item" draggable="true" ondragstart="dragstart_handler(event);">${itemTemplate(item)}</li>`, '');
        return `
        <div class="container">
            <h1 class="center">Items List</h1>
            <div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);">
                <ul class="box">
                    ${itemsHTML}
                </ul>
            </div>
        </div>
        `
            ;
    },
    controller(model) {
        ////console.log('addComponent.controller', api);
        //Seleccionar con jquery boton eliminar
        api
            .getItems()
            .then(result => {
                console.log('result', result);
                model.items = result.items;
            });
    }
});

const newItemTemplate = () => `
    <div class="container">
    <h1>Add a New Item</h1>
    <div class="container">
        <form id="createForm" class="formCard">
            <section>
                <label for="photo">Image</label>
                <!--  <img src="" alt="COMPLETAR"> -->
                <input type="file" name="photo" id="photo" accept="image/gif, image/png, image/jpeg">
                <label for="description">Description</label>
                <textarea name="description" id="description" cols="30" rows="10"></textarea>
            </section>
            <section class="buttons">
                <button type="button" class="btn cancel"><i class="far fa-times-circle"></i> Cancel</button>
                <button class="confirm"><i class="far fa-save"></i> Save</button>
            </section>
        </form>
    </div>
    </div>
`;

app.addComponent({
    name: 'new-item',
    model: {
        item: {}
    },
    view() {
        return newItemTemplate();
    },
    controller(model) {
        console.log(model);
    }
});

const editItemTemplate = (item) => `
    <div class="container">
    <h1>Edit Item</h1>
    <div class="container">
        <form id="createForm" class="formCard">
            <section>
                <label for="photo">Image</label>
                <img src="${item.image}" alt="${item.name}">
                <input type="file" name="photo" id="photo" accept="image/gif, image/png, image/jpeg">
                <label for="description">Description</label>
                <textarea name="description" id="description" cols="30" rows="10">${item.description}</textarea>
            </section>
            <section class="buttons">
                <button type="button" class="btn cancel"><i class="far fa-times-circle"></i> Cancel</button>
                <button class="confirm"><i class="far fa-save"></i> Save</button>
            </section>
        </form>
    </div>
    </div>
`;

app.addComponent({
    name: 'edit-item',
    model: {
        item: {}
    },
    view(model) {
        return editItemTemplate(model.item);
    },
    controller(model) {
        //console.log('addComponent.controller', api);
        console.log('params de edit', router);
        api
            .getItem('5b848fa8b7ec3d145896980b')
            .then(result => {
                console.log('result', result);
                return model.item = result.items[0];
            });
    }
});


const router = new Router(app);
// router.addRoute('home', '');
router.addRoute('new-item', '#new-item');
router.addRoute('edit-item', '#edit-item');





const itemTemplate2 = (item) => `
<section class="item-listing">
  <a href="#/items/${item._id}">
    <h3 class="name">${item.name}</h3>
    <section>
      <figure>
        <img src="${item.image}" alt="${item.name}" />
      </figure>
      <p>${item.description}</p>
    </section>
  </a>
</section>
`;