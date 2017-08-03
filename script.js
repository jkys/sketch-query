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
    //prepare();
    //Image.setCharacteristics();
    //$('#screen').toggle();
    createImage();
});

$('#add-item-img-url').click(function() {
    //prepare();
    //Image.setCharacteristics();
    //$('#screen').toggle();
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

function createRecntagle(data) {
    var item = new Konva.Rect({
        name: 'item' + item_count,
        x: Math.random() * ((stage.getWidth() - 100) - 10) + 10,
        y: Math.random() * ((stage.getHeight() - 100) - 10) + 10,
        id: item_count,
        width: data.getHeight(),
        height: data.getWidth(),
        fill: data.getColor(),
        stroke: data.getBorder(),
        strokeWidth: data.getBorderWeight(),
        draggable: true
    });

    item.on('click', function() {

        var color = item.fill();
        var width = item.width();
        var height = item.height();
        var border = item.stroke();
        var borderWeight = item.strokeWidth();

        prepare();
        Rectangle.setCharacteristics(color, width, height, border, borderWeight);
        $('#screen').toggle();

        item.setAttr('height', data.getHeight());
        item.setAttr('width', data.getWidth());
        item.setAttr('fill', data.getColor());
        item.setAttr('stroke', data.getBorder());
        item.setAttr('strokeWidth', data.getBorderWeight());

        //updates canvas
        cur_layer.draw();
    });

    addItem(item, cur_layer);
}

function createImageFromURL(){



    var imageURL = prompt("Enter web URL");




    Konva.Image.fromURL(imageURL, function(image){
      // image is Konva.Image instance
      
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
    
   console.log("in createImage");

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
 /*
        item.on('click', function() {
           
            prepare();

            Image.setCharacteristics(url, width, height);
            $('#screen').toggle();
            item.setAttr('height', data.getHeight());
            item.setAttr('width', data.getWidth());

            //updates canvas
            cur_layer.draw();
        });
   */
        addItem(item,cur_layer);  
    };

    var str = prompt("enter full filepath");

    imageObj.src = str;
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
    setListener(item);
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function setListener(item) {
    item.on('click', function() {
        prepare();
        Text.setCharacteristics(item.attrs.text, item.attrs.fontFamily, item.attrs.fontSize, item.attrs.fill, item.attrs.x, item.attrs.y, item.attrs.id);
        item.destroy();
        $('#screen').toggle();
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
    $('#screen').toggle();
    stage.find('#' + $("input[name=id]").val())[0].destroy();
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
            console.log("eh");
            data = new Rectangle();
            data.setValues($("input[name=Height]").val(), $("input[name=Width]").val(), $("input[name=Color]").val(), $("input[name=Border]").val(), $("input[name=BorderWeight]").val());
            data.print();
            createRecntagle(data);
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