/**
 * Object to be able to create another page (layer) on the
 * KonvaJs canvas. It will also create a tab and set focus
 * to that new tab.
 */
class NewPage {

    /*
     * Print out values to user input area to allow user
     * to input the name of the new page.
     */
    static createUserInput() {
        var data = '<div class="content-label"><label>Page Name</label></div><div class="content-input"><input type="text" name="pageName"></div>';
        data += '<div class="divider"></div><div class="divider"></div>';
        return data;
    }

    /**
     * Set characteristics to be able to get the new
     * name of the new page.
     */
    static setCharacteristics(pageNumber) {
        $('#data').after(NewPage.createUserInput());
        $('#data').after('<input id="page_number" type="text" name="type" value="' + pageNumber + '" hidden readonly>');
        $('#data').after('<input id="locator" type="text" name="type" value="newPage" hidden readonly>');
        return 1;
    }
}
