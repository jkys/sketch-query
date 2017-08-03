class Rectangle {
	setValues(height, width, color, border, borderWeight, x, y, id) {
        this.height = height;
        this.width = width;
        this.color = color;
        this.border = border;
        this.borderWeight = borderWeight;
        this.x = x;
        this.y = y;
        this.id = id;
    }

    static makePrint(name, value) {
    	if (value == undefined) { value = "";}
        var data = '<div class="content-label"><label>' + name + '</label></div><div class="content-input"><input type="text" name="' + name + '" value="' + value + '"></div>';
        
        if (name == 'Color') {
        	data = '<div class="content-label"><label>Color</label></div><div class="content-input"><input type="text" id="color" name="Color"></div><script>$(\'#color\').spectrum({color: "' + value + '",preferredFormat: "hex"});</script>';
        }

        if (name == 'Border') {
        	data = '<div class="content-label"><label>Border</label></div><div class="content-input"><input type="text" id="border" name="Color"></div><script>$(\'#border\').spectrum({color: "' + value + '",preferredFormat: "hex"});</script>';
        }


        data += '<div class="divider"></div><div class="divider"></div>';
        return data;
    }

    static setCharacteristics(color, width, height, border, borderWeight, x, y, id) {
    	
    	var arr = ['Height', 'Width', 'Color', 'Border', 'BorderWeight'];
    	var arr1 = [height, width, color, border, borderWeight];

    	for (var i = 0; i < arr.length; i++) {
    		$('#data').after(Text.makePrint(arr[i], arr1[i]));
    	}

    	$('#data').after('<input id="id" type="text" name="id" value="'+ id + '" hidden readonly>');
        $('#data').after('<input id="x" type="text" name="x" value="'+ x + '" hidden readonly>');
        $('#data').after('<input id="y" type="text" name="y" value="'+ y + '" hidden readonly>');
        $('#data').after('<input id="locator" type="text" name="type" value="rectangle" hidden readonly>');
        return 1;
    }

    print() {
    	console.log("height: " + this.height + ", " + "width: " + this.width + ", " + "color: " + this.color + ", " + "border: " + this.border + ", " + "borderWeight: " + this.borderWeight );
    }

    getHeight() {
    	return this.height;
    }

    getWidth() {
    	return this.width;
    }

    getColor() {
    	return this.color;
    }

    getBorder() {
    	return this.border;
    }

    getBorderWeight() {
    	return this.borderWeight;
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