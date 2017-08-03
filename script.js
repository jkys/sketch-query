var item_count = 0;
var page_num = 1;

var width = $('#container').width();
var height = $('#container').height();

var stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height
});

var layer = new Konva.Layer();

stage.add(layer);

var cur_layer = layer;

var filenames = [];

filenames[0] = 'Home';


$('#add-item-img').click(function() {
    createImage();
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

function prepare() {
    $('#module').empty();
    $('#module').append('<h1 id="data">Characteristics</h1><button id="create" onclick="submit();">Submit</button><button id="destroy" onclick="destroy();">Destroy</button><button id="clear" onclick="exit();">Exit</button>');
}

function exit() {
    $('#screen').toggle();
    prepare();
}


function createImageFromURL(){
    var imageURL = prompt("Enter web URL");
    Konva.Image.fromURL(imageURL, function(image){
        image.setAttr('height', 300);
        image.setAttr('x', 50);
        image.setAttr('y', 50);
        image.setAttr('width', 300);
        image.setAttr('draggable', true);
        addItem(image, cur_layer);
    });
}

function createImage() {
    var imageObj = new Image();    
    imageObj.onload = function() {    
        console.log("winning");

        var item = new Konva.Image({
            x: 50,
            y: 50,
            image: imageObj,
            width: 200,
            height: 200,
            draggable: true
        }); 

        var url = item.getImage().src;
        var width = item.width();
        var height = item.height();
        addItem(item,cur_layer);  
    };

    var str = prompt("enter full filepath");

    imageObj.src = str;
}

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

    addItem(item, cur_layer);
    setRectangleListener(item);
}

function setRectangleListener(item) {
    item.on('click', function() {
        prepare();
        Rectangle.setCharacteristics(item.attrs.fill, item.attrs.width, item.attrs.height, item.attrs.stroke, item.attrs.strokeWidth, item.attrs.x, item.attrs.y, item.attrs.id);
        item.destroy();
        $('#screen').toggle();
    });
}

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
    addItem(item, cur_layer);
    setTextListener(item);
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function setTextListener(item) {
    item.on('click', function() {
        prepare();
        Text.setCharacteristics(item.attrs.text, item.attrs.fontFamily, item.attrs.fontSize, item.attrs.fill, item.attrs.x, item.attrs.y, item.attrs.id);
        item.destroy();
        $('#screen').toggle();
        cur_layer.draw();
    });
}

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

function destroy() {
    cur_layer.draw();
    $('#screen').toggle();
    prepare();
}

function submit() {
    $('#screen').toggle();
    var type = $('#locator').val();
    var data;

    switch(type) {
        case "text":
            data = new Text();
            data.setValues($("input[name=Color]").val(), $("input[name=FontSize]").val(), $("input[name=FontFamily]").val(), $("input[name=Text]").val(), $("input[name=x]").val(), $("input[name=y]").val());
            data.print();
            createText(data);
            break;
        case "image":
            data = new Image();
            data.setValues($("input[name=Height]").val(), $("input[name=Width]").val(), $("input[name=Url]").val());
            data.print();
            createImage(data);
            break;
        case "rectangle":
            data = new Rectangle();
            data.setValues($("input[name=Height]").val(), $("input[name=Width]").val(), $("input[name=Color]").val(), $("input[name=Border]").val(), $("input[name=BorderWeight]").val(), $("input[name=x]").val(), $("input[name=y]").val());
            data.print();
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