const create = () => `
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