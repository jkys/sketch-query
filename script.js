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
    prepare();
    Image.setCharacteristics();
    $('#screen').toggle();
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
    $('#module').append('<h1 id="data">Characteristics</h1><button id="create" onclick="submit();">Submit</button><button id="clear" onclick="exit();">Exit</button>');
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

function createImage(data) {
    var imageObj = new Image();

   imageObj.src = '/img/p1.png';
   

    imageObj.onload = function() {    

        var item = new Konva.Image({
        x: 50,
        y: 50,
        image: imageObj,
        width: widthInput,
        height: heightInput,
        draggable: true
        }); 

        var url = item.getImage().src;
        var width = item.width();
        var height = item.height();

        item.on('click', function() {
        prepare();

        Image.setCharacteristics(url, width, height);
        $('#screen').toggle();
            item.setAttr('height', data.getHeight());
            item.setAttr('width', data.getWidth());

            //updates canvas
            cur_layer.draw();

        });
   
            addItem(item,cur_layer);  
    };

    imageObj.src = '/img/' + prompt("filename");
}

function createText(data) {
    var item = new Konva.Text({
        name: 'item' + item_count,
        x: Math.random() * ((stage.getWidth() - 100) - 10) + 10,
        y: Math.random() * ((stage.getHeight() - 100) - 10) + 10,
        
        text: data.getText(),
        fontSize: data.getFontSize(),
        fontFamily: data.getFontFamily(),
        fill: data.getColor(),
        id: item_count,
        draggable: true,
        listening: true
    });

    item.on('click', function() {
        var text = item.getText();
        var fontFamily = item.fontFamily();
        var fontSize = item.fontSize();
        var color = item.fill();
        var x = item.x();
        var y = item.y();


        prepare();
        Text.setCharacteristics(text, fontFamily, fontSize, color);
        $('#screen').toggle();

        console.log('click ' + JSON.stringify(item));

        item.setAttr('fontSize', data.getFontSize());
        item.setAttr('fontFamily', data.getFontFamily());
        item.setAttr('text', data.getText());
        item.setAttr('fill', data.getColor());
        item.setAttr('x', x);
        item.setAttr('y', y);

        //updates canvas
        cur_layer.draw();
    });

    addItem(item, cur_layer);
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

function submit() {
    $('#screen').toggle();

    var type = $('#locator').val();
    console.log(type);

    var data;

    switch(type) {
        case "text":
            data = new Text();
            data.setValues($("input[name=Color]").val(), $("input[name=FontSize]").val(), $("input[name=FontFamily]").val(), $("input[name=Text]").val());
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