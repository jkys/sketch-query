class Imager {
	setValues(height, width, url, x, y, id) {
        this.height = height;
        this.width = width;
        this.url = url;
        this.x = x;
        this.y = y;
        this.id = id;
    }

    static makePrint(name, value) {
    	if (value == undefined) { value = "";}
        var data = '<div class="contentlabel"><label>' + name + '</label></div><div class="contentinput"><input type="text" name="' + name + '" value="' + value + '"></div>';
        data += '<div class="divider"></div><div class="divider"></div>';
        return data;
    }

    static setCharacteristics(url, width, height, x, y, id) {
    	
    	var arr = ['Height', 'Width', 'Url'];
    	var arr1 = [height, width, url];

    	for (var i = 0; i < arr.length; i++) {
    		$('#data').after(Text.makePrint(arr[i], arr1[i]));
    	}

    	$('#data').after('<input id="id" type="text" name="id" value="'+ id + '" hidden readonly>');
        $('#data').after('<input id="x" type="text" name="x" value="'+ x + '" hidden readonly>');
        $('#data').after('<input id="y" type="text" name="y" value="'+ y + '" hidden readonly>');
        $('#data').after('<input id="locator" type="text" name="type" value="image" hidden readonly>');
        return 1;
    }

    print() {
    	console.log("height: " + this.height + ", " + "width: " + this.width + ", " + "url: " + this.url );
    }

    getHeight() {
    	return this.height;
    }

    getWidth() {
    	return this.width;
    }

    getUrl() {
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