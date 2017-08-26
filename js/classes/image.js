/*
 * Image class used to set images on the screen and hold
 * the object details of that image.
 */
class Imager {

    /*
     * Set the height, width, url (web/local files), x/y coordiante,
     * and the specific ID that is desired for that image.
     */
    setValues(height, width, url, x, y, id) {
        this.height = height;
        this.width = width;
        this.url = url;
        this.x = x;
        this.y = y;
        this.id = id;
    }

    /*
     * Printer class to print all values and labels to allow
     * user to input new values for each object. Used to create
     * the input box for user input data.
     */
    static createUserInput(name, value) {
        if (value == undefined) {
            value = "";
        }
        var data = '<div class="contentlabel"><label>' + name + '</label></div><div class="contentinput"><input type="text" name="' + name + '" value="' + value + '"></div>';
        data += '<div class="divider"></div><div class="divider"></div>';
        return data;
    }

    /*
     * Set the value characteristics of each varaible
     * needed for images.
     */
    static setCharacteristics(url, width, height, x, y, id) {
        var characteristics = ['Height', 'Width', 'Url'];
        var values = [height, width, url];

        for (var i = 0; i < characteristics.length; i++) {
            $('#data').after(Text.createUserInput(characteristics[i], values[i]));
        }

        // Add hidden characteristics to allow the values to persist
        $('#data').after('<input id="id" type="text" name="id" value="' + id + '" hidden readonly>');
        $('#data').after('<input id="x" type="text" name="x" value="' + x + '" hidden readonly>');
        $('#data').after('<input id="y" type="text" name="y" value="' + y + '" hidden readonly>');
        $('#data').after('<input id="locator" type="text" name="type" value="image" hidden readonly>');
        return 1;
    }

    /*
     * Accessor and mutator functions to set/retreive
     * values on the objects.
     */
    getHeight() {
        return this.height;
    }

    getWidth() {
        return this.width;
    }

    getURL() {
        return this.url;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getId() {
        return this.id;
    }
}
