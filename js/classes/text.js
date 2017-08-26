class Text {
    setValues(color, fontSize, fontFamily, text, x, y, id) {
        this.color = color;
        this.fontSize = fontSize;
        this.fontFamily = fontFamily;
        this.text = text;
        this.x = x;
        this.y = y;
        this.id = id;
    }

    static makePrint(name, value) {
        if (value == undefined) {
            value = "";
        }
        var data = '<div class="content-label"><label>' + name + '</label></div><div class="content-input"><input type="text" name="' + name + '" value="' + value + '"></div>';
        if (name == 'FontFamily') {
            data = '<div class="content-label"><label>' + name + '</label></div><div class="content-input">' + Text.fontFamilys() + '</div>';
        }

        if (name == 'Color') {
            if (value == "") {
                value = "#000000";
            }
            data = '<div class="content-label"><label>Color</label></div><div class="content-input"><input type="text" id="color" name="Color" value="' + value + '"></div><script>$(\'#color\').spectrum({color: "' + value + '",preferredFormat: "hex"});$(\'#color\').show();</script>';
        }

        data += '<div class="divider"></div><div class="divider"></div>';
        return data;
    }

    static setCharacteristics(text, fontFamily, fontSize, color, x, y, id) {

        var arr = ['Color', 'FontSize', 'FontFamily', 'Text'];
        var arr1 = [color, fontSize, fontFamily, text];

        for (var i = 0; i < arr.length; i++) {
            $('#data').after(Text.makePrint(arr[i], arr1[i]));
        }

        $('#data').after('<input id="id" type="text" name="id" value="' + id + '" hidden readonly>');
        $('#data').after('<input id="x" type="text" name="x" value="' + x + '" hidden readonly>');
        $('#data').after('<input id="y" type="text" name="y" value="' + y + '" hidden readonly>');
        $('#data').after('<input id="locator" type="text" name="type" value="text" hidden readonly>');
        return 1;
    }

    static fontFamilys() {
        return '<select name="FontFamily"><option value="Arial">Arial</option><option value="Helvetica">Helvetica</option><option value="Times New Roman">Times New Roman</option><option value="Times">Times</option><option value="Courier New">Courier New</option><option value="Courier">Courier</option><option value="Verdana">Verdana</option><option value="Georgia">Georgia</option><option value="Palatino">Palatino</option><option value="Garamond">Garamond</option><option value="Bookman">Bookman</option><option value="Comic Sans MS">Comic Sans MS</option><option value="Trebuchet MS">Trebuchet MS</option><option value="Arial Black">Arial Black</option><option value="Impact">Impact</option></select>';
    }

    getColor() {
        return this.color;
    }

    getFontSize() {
        return this.fontSize;
    }

    getFontFamily() {
        return this.fontFamily;
    }

    getText() {
        return this.text;
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
