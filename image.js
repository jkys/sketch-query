class Image {
	setValues(height, width, url) {
        this.height = height;
        this.width = width;
        this.url = url;
    }

    static makePrint(name, value) {
    	if (value == undefined) { value = "";}
        var data = '<div class="content-label"><label>' + name + '</label></div><div class="content-input"><input type="text" name="' + name + '" value="' + value + '"></div>';
        data += '<div class="divider"></div><div class="divider"></div>';
        return data;
    }

    static setCharacteristics(url, width, height) {
    	
    	var arr = ['Height', 'Width', 'Url'];
    	var arr1 = [height, width, url];

    	for (var i = 0; i < arr.length; i++) {
    		$('#data').after(Text.makePrint(arr[i], arr1[i]));
    	}

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
}