/*
* Authors: Jonathan Keys, Colby Daly
* Instructor: Durga Suresh
* SketchQuery 2017
* Wentworth Institute of Technology
*/

var item_count = 0; // Amount of objects and serves as a unique ID for each new object
var page_num = 1; // Amount of pages the user currently has

var width = $('#container').width(); // get width of the encapsulating holder
var height = $('#container').height(); // get height of the encapsulating holder

// Create Stage based on width.height of screen
var stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height
});

var layer = new Konva.Layer(); // Create first layer
stage.add(layer); // Stage adding first layer
var cur_layer = layer; // Current layer user is working on
var filenames = []; // Array to hold names of each file
filenames[0] = 'Home'; // First file defaults to 'Home'

/************************************** 

    Listeners for image/button clicks

***************************************/

$('#add-item-img').click(function() {
    prepare();
    Imager.setCharacteristics();
    $('#screen').toggle();
});

$('#add-item-img-url').click(function() {
    createImageFromURL();
});

$('#add-item-sq').click(function() {        
    prepare();
    Rectangle.setCharacteristics();
    $('#screen').toggle();
});

$('#add-item-tx').click(function() {  
    prepare();
    Text.setCharacteristics();
    $('#screen').toggle();
});

/************************************** 

        Functions for user 

***************************************/

/**
* Prepares the module to be overlayed on the screen by getting 
* rid of all previous data and adding the title and Submit, 
* Destroy, and Exit buttons.
*/
function prepare() {
    $('#module').empty();
    $('#module').append('<h1 id="data">Characteristics</h1><button type="button" class="btn btn-success" id="create" onclick="submit();">Submit</button><button type="button" class="btn btn-danger" id="destroy" onclick="destroy();">Destroy</button><button type="button" class="btn btn-info" id="clear" onclick="exit();">Exit</button>');
}

/**
* Toggles the view of the module for when a user exits, this 
* then calls prepare() to get ready for next used.
*/
function exit() {
    $('#screen').toggle();
    prepare();
}
/**
* Creates an Image from the Web URL and posts it to the canvas.
*/
function createImageFromURL(){
    var imageURL = prompt("Enter web URL");
    Konva.Image.fromURL(imageURL, function(image){
        image.setAttr('height', 300);
        image.setAttr('x', 50);
        image.setAttr('y', 50);
        image.setAttr('width', 300);
        image.setAttr('draggable', true);
        addItem(image, cur_layer);

        image.originalWidth = image.attrs.width; 
        image.setAttr('width', (image.originalWidth * ($('#container').width() / 980)));
        image.originalHeight = image.attrs.height; 
        image.setAttr('height', (image.originalHeight * ($('#container').width() / 980)));
    });
}


/**
* Creates the image object based on data taken from the module 
* and adds it to the current layer, then sets a image listener 
* on it via the setImageListener() method.
*/
function createImage() {
    var x = !Number.isNaN(data.getX()) ? 10 : data.getX();
    var y = !Number.isNaN(data.getY()) ? 10 : data.getY();
    var url = data.getURL() == "" ? "#" : data.getURL();

    var imageObj = new Image();
    imageObj.src = url;
    imageObj.onload = function() {    
        
        var item = new Konva.Image({
            x: x,
            y: y,
            image: imageObj,
            width: data.getWidth(),
            height: data.getHeight(),
            draggable: true,
            listener: true
        }); 

        console.log(item);
        item.originalWidth = item.attrs.width; 
        item.setAttr('width', (item.originalWidth * ($('#container').width() / 980)));
        item.originalHeight = item.attrs.height; 
        item.setAttr('height', (item.originalHeight * ($('#container').width() / 980)));

        console.log((item.originalHeight * (height / 980)));

        console.log(item);

        var url = item.getImage().src;
        var width = item.width();
        var height = item.height();
        addItem(item,cur_layer);  
    };
}

/**
* Sets a listener on a image item which was created in case 
* it is clicked on. If it is, then it will prompt the module 
* and have the user enter new data.
*/
function setImageListener(item) {
    item.on('click', function() {
        prepare();
        Imager.setCharacteristics(item.attrs.fill, item.attrs.width, item.attrs.height, item.attrs.stroke, item.attrs.strokeWidth, item.attrs.x, item.attrs.y, item.attrs.id);
        item.destroy();
        $('#screen').toggle();
        cur_layer.draw();
    });
}

/**
* Creates the rectangle object based on data taken from the module 
* and adds it to the current layer, then sets a rectangle listener 
* on it via the setRectangleListener() method.
*/
function createRectangle(data) {
    var x = !Number.isNaN(data.getX()) ? 10 : data.getX();
    var y = !Number.isNaN(data.getY()) ? 10 : data.getY();
    var color = data.getColor() == "" ? "#000000" : data.getColor();
    var border = data.getBorder() == "" ? "#000000" : data.getBorder();
    var borderWeight = !Number.isNaN(data.getBorderWeight()) ? 1 : data.getBorderWeight();

    var item = new Konva.Rect({
        name: 'item' + item_count,
        x: x,
        y: y,
        id: item_count,
        width: data.getWidth(),
        height: data.getHeight(),
        fill: color,
        stroke: border,
        strokeWidth: borderWeight,
        draggable: true,
        listening: true
    });

    item.originalWidth = item.attrs.width; 
    item.setAttr('width', (item.originalWidth * ($('#container').width() / 980)));
    item.originalHeight = item.attrs.height; 
    item.setAttr('height', (item.originalHeight * ($('#container').width() / 980)));

    addItem(item, cur_layer);
    setRectangleListener(item);
}

/**
* Sets a listener on a rectangle item which was created in case 
* it is clicked on. If it is, then it will prompt the module 
* and have the user enter new data.
*/
function setRectangleListener(item) {
    item.on('click', function() {
        prepare();
        Rectangle.setCharacteristics(item.attrs.fill, item.attrs.width, item.attrs.height, item.attrs.stroke, item.attrs.strokeWidth, item.attrs.x, item.attrs.y, item.attrs.id);
        item.destroy();
        $('#screen').toggle();
        cur_layer.draw();
    });
}

/**
* Creates the text object based on data taken from the module 
* and adds it to the current layer, then sets a text listener 
* on it via the setTextListener() method.
*/
function createText(data) {
    var x = !Number.isNaN(data.getX()) ? 10 : data.getX();
    var y = !Number.isNaN(data.getY()) ? 10 : data.getY();
    var text = data.getText() == "" ? "Click to edit string" : data.getText();
    var fontSize = data.getFontSize() == "" ? 24 : data.getFontSize();
    var fontFamily = data.getFontFamily() == "" ? "Arial" : data.getFontFamily();
    var color = data.getColor() == "" ? "#000000" : data.getColor();

    var item = new Konva.Text({
        name: 'item' + item_count,
        x: x,
        y: y,
        text: text,
        fontSize: fontSize,
        fontFamily: fontFamily,
        fill: color,
        id: item_count,
        draggable: true,
        listening: true
    });
    item.originalWidth = item.attrs.width; 
    item.setAttr('width', (item.originalWidth * ($('#container').width() / 980)));
    item.originalHeight = item.attrs.height; 
    item.setAttr('height', (item.originalHeight * ($('#container').width() / 980)));
    addItem(item, cur_layer);
    setTextListener(item);
}

/**
* Check if a given value is a number or not.
* True: is number
* True: is not a number
*/
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

/**
* Sets a listener on a text item which was created in case 
* it is clicked on. If it is, then it will prompt the module 
* and have the user enter new data.
*/
function setTextListener(item) {
    item.on('click', function() {
        prepare();
        Text.setCharacteristics(item.attrs.text, item.attrs.fontFamily, item.attrs.fontSize, item.attrs.fill, item.attrs.x, item.attrs.y, item.attrs.id);
        item.destroy();
        $('#screen').toggle();
        cur_layer.draw();
    });
}

/*
* Adds the current created item onto a specified layer, 
* then redraws the layer to show all changes made.
*/
function addItem(item1, layer_name) {
    layer_name.add(item1);
    console.log(stage);
    layer_name.draw();
    console.log("layer is " + JSON.stringify(layer_name));
    item_count++;
    for (var i = 0; i < item1.length; i++) {
        console.log(item1[i]);
    }
}

/**
* Redraws the current layer to update the element which 
* was previously destroyed (destroyed in each objects 
* listener on each edit)
*/
function destroy() {
    cur_layer.draw();
    $('#screen').toggle();
    prepare();
}

/**
* Called when user clicks the submit button on module to 
* accept changes or creation to object on the layer.
*/
function submit() {
    $('#screen').toggle();
    var type = $('#locator').val(); // Type of object which was just created
    var data;

    /*
    * Switch case used to traverse through the type of object which was 
    * created and give it all its necessary data to then invoke each's 
    * custom create method.
    */
    switch(type) {
        case "text":
            data = new Text();
            data.setValues($("input[name=Color]").val(), $("input[name=FontSize]").val(), $("input[name=FontFamily]").val(), $("input[name=Text]").val(), $("input[name=x]").val(), $("input[name=y]").val());
            createText(data);
            break;
        case "image":
            data = new Imager();
            data.setValues($("input[name=Height]").val(), $("input[name=Width]").val(), $("input[name=Url]").val(), $("input[name=x]").val(), $("input[name=y]").val());
            createImage(data);
            break;
        case "rectangle":
            data = new Rectangle();
            data.setValues($("input[name=Height]").val(), $("input[name=Width]").val(), $("input[name=Color]").val(), $("input[name=Border]").val(), $("input[name=BorderWeight]").val(), $("input[name=x]").val(), $("input[name=y]").val());
            createRectangle(data);
            break;
        case "newPage":
            createNewPage($("input[name=pageName]").val(), $("#page_number").val());
            cur_layer = stage.children[$("#page_number").val()];
            break;
        default:
            break;
    }
    prepare();
}