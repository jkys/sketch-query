/**
 * Function is responsible for looping through all pages/layers
 * and objects to then convert each one to their CSS and HTML
 * counterparts through the respective method calls.
 */
function createCode() {
    // Loop through each layer/page the user has
    for (var j = 0; j < stage.children.length; j++) {

        var object_array = []; // Create object for each layer/page for files
        object_array.filename_html = filenames[j] + '.html'; // Create html file
        object_array.filename_css = filenames[j] + '.css'; // Create css file

        // Loopthrough each object on the given layer/page
        for (var i = 0; i < stage.children[j].children.length; i++) {
            var obj = new Object(); // Create object to hold all values

            /*
             * obj.id: Used by -> Text, Image, Rectangle
             * obj.type: Used by -> Text, Image, Rectangle
             * obj.x: Used by -> Text, Image, Rectangle
             * obj.y: Used by -> Text, Image, Rectangle
             *
             * obj.width: Used by -> Image, Rectangle
             * obj.height: Used by -> Image, Rectangle
             *
             * obj.text: Used by -> Text
             * obj.fontSize: Used by -> Text
             * obj.fontFamily: Used by -> Text
             * obj.fontColor: Used by -> Text
             *
             * obj.img: Used by -> Image
             *
             * obj.color: Used by -> Rectangle
             * obj.border: Used by -> Rectangle
             * obj.borderWidth: Used by -> Rectangle
             */

            // Set object values for the one which are for all of them.
            obj.id = stage.children[j].children[i].index;
            obj.type = stage.children[j].children[i].className;
            obj.x = stage.children[j].children[i].attrs.x;
            obj.y = stage.children[j].children[i].attrs.y;


            // Set unique fields to their respective objects
            switch (obj.type) {

                // Text Object
                case 'Text':
                    obj.text = stage.children[j].children[i].attrs.text;
                    obj.fontFamily = stage.children[j].children[i].attrs.fontFamily;
                    obj.fontSize = stage.children[j].children[i].attrs.fontSize;
                    obj.fontColor = stage.children[j].children[i].attrs.fill;
                    break;
                    /**********************************************************************************/

                    // Image Object
                case 'Image':
                    obj.width = stage.children[j].children[i].attrs.width;
                    obj.height = stage.children[j].children[i].attrs.height;

                    var src = stage.children[j].children[i].attrs.image.src

                    if (src.includes("http") || src.includes("www") || src.includes(".com") || src.includes(".co")) {

                        obj.img = src;

                    } else {
                        var value = src
                        var filename = (value.match(/[^\\/]+\.[^\\/]+$/) || []).pop();
                        obj.img = 'img/' + filename;
                    }
                    break;

                    /**********************************************************************************/

                    // Rectangle Object
                case 'Rect':
                    obj.width = stage.children[j].children[i].attrs.width;
                    obj.height = stage.children[j].children[i].attrs.height;
                    obj.color = stage.children[j].children[i].attrs.fill;
                    obj.border = stage.children[j].children[i].attrs.stroke;
                    obj.borderWidth = stage.children[j].children[i].attrs.strokeWidth;
                    break;
            }

            object_array[i] = obj;
        }
        createHTML(object_array, j + '.html', j);
        createCSS(object_array, j + '.css');
    }
}

/**
 * Given an object, convert the different values/classes
 * into their respective HTML counteraprts, whether that
 * would be Text, Image, or Rectangle
 */
function createHTML(object_array, filename, j) {

    // Create the starting opening to a file and link its CSS file, as well as create the title name for the page.
    var str = '<!DOCTYPE html><html><head><link rel="stylesheet" href="' + object_array.filename_css + '"><title>' + filenames[j] + '</title></head><body>';

    // If there are multiple pages, create a navigate block to go from one page to another.
    if (stage.children.length > 1) {
        str += '<ul>';
        for (var k = 0; k < stage.children.length; k++) {
            str += '<li><a href="' + filenames[k] + '.html" >' + filenames[k] + '</a></li>'
        }
        str += '</ul>';
    }

    for (var i = 0; i < object_array.length; i++) {
        switch (object_array[i].type) {
            case 'Text':
                str += '<p id=a' + object_array[i].id + '>' + object_array[i].text + '</p>'
                break;
            case 'Image':
                str += '<img id=a' + object_array[i].id + ' src=' + object_array[i].img + '>'
                break;
            case 'Rect':
                str += '<div id=a' + object_array[i].id + '></div>';
                break;
        }
    }
    str += `</body></html>`; // End HTML file
    saveContent(str, object_array.filename_html); // Save string to HTML file.
}

/**
 * Given an object, convert the different values/classes
 * into their respective CSS counteraprts, whether that
 * would be Text, Image, or Rectangle
 */
function createCSS(object_array, filename) {
    var stage_width = $('#container').width();
    var stage_height = $('#container').height();
    var str = '';

    // For each object in the layer, add its CSS styles to the CSS file, denoted by the objects link.
    for (var i = 0; i < object_array.length; i++) {
        if (object_array[i].type == 'Text') {
            str += '#a' + object_array[i].id + '{';
            str += 'position: absolute; left: ' + ((object_array[i].x / stage_width) * 100) + '% !important; top: ' + ((object_array[i].y / stage_height) * 100) + '% !important; font-family: ' + object_array[i].fontFamily + '; font-size: ' + object_array[i].fontSize + 'px !important; color: ' + object_array[i].fontColor + '; }'
        } else if (object_array[i].type == 'Image') {
            str += '#a' + object_array[i].id + '{';
            str += 'position: absolute; left: ' + ((object_array[i].x / stage_width) * 100) + '%; top: ' + ((object_array[i].y / stage_height) * 100) + '% ; height: ' + ((object_array[i].height / stage_height) * 100) + '%; width: ' + ((object_array[i].width / stage_width) * 100) + '%;}'
        } else if (object_array[i].type == 'Rect') {
            str += '#a' + object_array[i].id + '{';
            str += 'position: absolute; left: ' + ((object_array[i].x / stage_width) * 100) + '%; top: ' + ((object_array[i].y / stage_height) * 100) + '%; height: ' + ((object_array[i].height / stage_height) * 100) + '%; width: ' + ((object_array[i].width / stage_width) * 100) + '%; background-color: ' + object_array[i].color + '; border: ' + object_array[i].borderWidth + 'px solid ' + object_array[i].border + ';}'
        }

        // If the page has more than one page, add styling for navigation box.
        if (stage.children.length > 1) {
            str += 'ul { list-style-type: none; margin: 0; padding:0; width: 200px; background-color: #f1f1f1;} li a { display: block; color: #000; padding: 8px 16px;text-decoration: none;} li a:hover { background-color: #555; color: white; }'
        }
    }
    saveContent(str, object_array.filename_css); // Save string to CSS file.
}

/**
 * Function used to create a new page/layer
 * for the user to have multiple pages.
 */
function newPage(page_number) {
    stage.clear(); // Clear the stage
    var layer = new Konva.Layer(); // Create a new layer
    stage.add(layer); // Add the layer to the stage

    prepare(); // Prepare the module
    NewPage.setCharacteristics(page_number); // Get new info for the page
    $('#screen').toggle(); // Hide the module
}

function createNewPage(name, page_number) {
    var layer_name = name;

    document.getElementById('current_layer').innerHTML = layer_name;
    filenames[page_number] = layer_name;
    $('#pages').append('<div class="box" id="f' + page_number + '"><button onclick="$(\'#current_layer\').html($(\'#pgn' + page_number + '\').text());"><a id="pgn' + page_number + '" href="javascript:openCity(stage.children[' + page_number + ']);"> ' + layer_name + ' </a></button></div>');
    cur_layer = layer;
    page_num++;
}

function openHome(layer_name) {
    stage.clear();
    layer_name.draw();
    cur_layer = layer_name;
}

function openCity(layer_name) {
    stage.clear();
    layer_name.draw();
    var x = document.getElementsByClassName("tabs");
    cur_layer = layer_name;
}


function removeLayer() {
    // Enter if not home page
    if (cur_layer.index != 0) {
        filenames.splice(cur_layer.index, 1); // Not sure what this does - Jon
        cur_layer.destroy(); //  Destroys the current layer from Konvas
        $('#f' + cur_layer.index).remove(); // Removes the tab from the DOM
        openHome(stage.children[0]); // Not sure what this does - Jon, Open home layer?
        cur_layer = stage.children[0]; // Not sure what this does - Jon, Set current layer to home?
        $('#current_layer').html('Home'); // Update current tag DOM to Home
    } else {}
}

function saveContent(fileContents, fileName) {
    var link = document.createElement('a');
    link.download = fileName;
    link.href = 'data:,' + fileContents;
    link.click();
}

function loadTemplate() {

    stage.destroyChildren();
    var layer = new Konva.Layer();
    stage.add(layer);
    cur_layer = layer;
    filenames = [];
    filenames[0] = 'Home';


    data = new Rectangle();
    data.setValues(100, 500, '#000', '#fff', 0, 0, 0);
    createRectangle(data);

    data = new Rectangle();
    data.setValues(200, 250, '#999', '#fff', 0, 0, 0);
    createRectangle(data);

    data = new Rectangle();
    data.setValues(200, 250, '#999', '#fff', 0, 0, 0);
    createRectangle(data);

    data = new Text();
    data.setValues('#fff', 36, 'Arial', 'Site Name', 10, 10);
    createText(data);

    data = new Text();
    data.setValues('#fff', 24, 'Arial', 'Site Gen Info', 30, 30);
    createText(data);

    data = new Text();
    data.setValues('#fff', 14, 'Arial', 'Hours', 100, 30);
    createText(data);

    data = new Text();
    data.setValues('#fff', 14, 'Arial', 'M-F: 10AM - 5PM', 100, 30);
    createText(data);

    data = new Text();
    data.setValues('#fff', 14, 'Arial', 'Weekends: 10AM - 10PM', 100, 30);
    createText(data);

}
