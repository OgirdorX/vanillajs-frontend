// COMPONENTS
createListComponent = (listItems, handlers) => {
    var ListContainer = document.createElement('div');
    ListContainer.id = list - container;
    ListContainer.className = 'list-draggable';
    document.getElementById('root')[0].appendChild(ListContainer);

    listItems.forEach(item => {
        const Item = createItemComponent(item, handlers)
        document.getElementById(ListContainer.id)[0].appendChild(Item);
    })
}

createItemComponent = (item, handlers) => {
    return class Item {
        constructor() {
            this.editing = false;
        }
        toggleEditMode = () => {
            this.editing = !this.editing;
        }
    }

    var ItemContainer = document.createElement('div');
    ItemContainer.id = `item - ${ item.id }`;
    ItemContainer.className = 'item-container';

    var Title = document.createElement('h1');
    ItemContainer.appendChild(Title)

    var Button = document.createElement('button');
    Button.textContent = 'Delete Item'
    Button.onclick(() => handlers.removeItem(item.id))
    ItemContainer.appendChild(Button)

    var Button = document.createElement('button');
    Button.textContent = 'Edit Item'
    Button.onclick(() => handlers.updateItem(item.id))
    ItemContainer.appendChild(Button)

    return ItemContainer
}

