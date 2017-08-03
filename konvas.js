function createCode(){
        console.log("final stage = ");
        console.log(stage);

        for( var j = 0; j < stage.children.length; j++){

            var object_array = [];

            object_array.filename_html = filenames[j] + '.html'; 
            object_array.filename_css = filenames[j] + '.css'; 

            for( var i =0; i < stage.children[j].children.length; i ++){

                // initialize object
                var obj = new Object();

                obj.id = null;
                obj.type = null;
                obj.x = null;
                obj.y = null;
                obj.text = null;
                obj.img = null;
                obj.width = null;
                obj.height = null;
                obj.fontSize = null;
                obj.fontFamily = null;   
                obj.fontColor = null;    


                console.log(stage.children[j].children[i]);

                var scale = (980 / width);
                var scale1 = (980 / height);

                obj.type = stage.children[j].children[i].className;
                obj.x = stage.children[j].children[i].attrs.x * scale;
                obj.y = stage.children[j].children[i].attrs.y * scale1;
                obj.width = stage.children[j].children[i].attrs.width;
                obj.height = (stage.children[j].children[i].attrs.height);

                if(obj.type == 'Text'){
                    obj.id = stage.children[j].children[i].index;
                    obj.text = stage.children[j].children[i].attrs.text;
                    obj.fontFamily = stage.children[j].children[i].attrs.fontFamily;
                    obj.fontSize = stage.children[j].children[i].attrs.fontSize;
                    obj.fontColor = stage.children[j].children[i].attrs.fill;
                } else if (obj.type == 'Image'){
                    obj.img = stage.children[j].children[i].attrs.image.src;
                    obj.id = stage.children[j].children[i].index;
                }

                object_array[i] = obj; 
            }

            createHTML(object_array, j +'.html', j);
            createCSS(object_array, j + '.css');
            

        }
    }


    function createHTML(object_array, filename, j){

        var str = '';
        console.log("obj array ->");
        console.log(object_array);

        str += '<!DOCTYPE html><html><head><link rel="stylesheet" href="' + object_array.filename_css + '"><title>Page Title</title></head><body>';

         if(stage.children.length > 1){

            console.log("multiple pages");

            str += '<div class = "topnav">';
            for(var k = 0; k < stage.children.length; k++){
                str+= '<a href = "' + filenames[k] + '.html" >' + k + '</a> </br>'
            }
            str += '</div>';
        }

        for(var i = 0; i < object_array.length; i ++){

            console.log(object_array[i]);

            if(object_array[i].type == 'Text'){

                str+= '<p id = a' + object_array[i].id +'>' + object_array[i].text + '</p>'

            }
            else if (object_array[i].type == 'Image'){

                str+= '<img id = a' + i + object_array[i].id + ' src=' + object_array[i].img + '>'

                console.log("image :)");

            }
        }
        str += '</body></html>';

        saveContent(str, object_array.filename_html);
    }

    function createCSS(object_array, filename){

        var str = '';

        //str += 'body {background-color: linen;}'

        for(var i = 0; i < object_array.length; i ++){ 

            if(object_array[i].type == 'Text'){

                str+= '#a' + object_array[i].id + '{'; 

                str+= 'position: absolute; left: ' + object_array[i].x + 'px !important; top: ' + object_array[i].y + 'px !important; font-family: ' + object_array[i].fontFamily+ '; font-size: ' + object_array[i].fontSize +  'px !important; color: '+ object_array[i].fontColor+ '; }'

            }
            else if (object_array[i].type == 'Image'){

                str+= '#a' + i + object_array[i].id + '{'; 
                str+= 'position: absolute; left: ' + object_array[i].x + 'px; top: ' + object_array[i].y + 'px; height: ' + object_array[i].height + 'px; width: ' + object_array[i].width + 'px;'
                str += '}';

            }

            if(stage.children.length > 1){

                // add css for nav bar 
            }
        }

       
        saveContent(str, object_array.filename_css);

    }

    function newPage(page_number){
        stage.clear();
        var layer = new Konva.Layer();
        stage.add(layer);

        prepare();
        NewPage.setCharacteristics(page_number);
        $('#screen').toggle();
    }

    function createNewPage(name, page_number) {
        var layer_name = name;


        document.getElementById('current_layer').innerHTML = layer_name;
        filenames[page_number] = layer_name; 
        console.log(filenames);
        $('#pages').append('<div class="box" id="f' + page_number + '"><button onclick="$(\'#current_layer\').html($(\'#pgn' + page_number + '\').text());"><a id="pgn' + page_number + '" href="javascript:openCity(stage.children[' + page_number + ']);"> '+layer_name+' </a></button></div>');
        cur_layer = layer;
        page_num++;
    }

    function openHome(layer_name){
        stage.clear();
        layer_name.draw();
        cur_layer = layer_name;
    }

    function openCity(layer_name) {
        stage.clear();
        layer_name.draw();
        var x = document.getElementsByClassName("tabs");
        console.log(layer_name);
       cur_layer = layer_name;
    }


    function removeLayer(){        
        // Enter if not home page
        if(cur_layer.index != 0){
            filenames.splice(cur_layer.index, 1); // Not sure what this does - Jon
            cur_layer.destroy(); //  Destroys the current layer from Konvas
            $('#f' + cur_layer.index).remove(); // Removes the tab from the DOM
            console.log(stage); // Print stage
            openHome(stage.children[0]); // Not sure what this does - Jon, Open home layer?
            cur_layer = stage.children[0]; // Not sure what this does - Jon, Set current layer to home?
            $('#current_layer').html('Home'); // Update current tag DOM to Home
        } else{
            console.log("didnt delete home page we dont want that"); // Don't be a dumbass basically
        }
    }



    function updateThis() {
        var height = $('#updateHeight').val();
        var width = $('#updateWidth').val();
        var itemId = $('#destroyNumber').val();

        var item = stage.find('#' + itemId)[0];
        item.attrs.height = height;
        item.attrs.width = width;
        layer.add(item);
        stage.add(layer);
    }

    function die() {
        var kill = $('#destroyNumber').val();
        var item = stage.find('#' + kill)[0];
        item.destroy();
        $('#' + kill).remove();
    }

    function saveContent(fileContents, fileName){
        var link = document.createElement('a');
        link.download = fileName;
        link.href = 'data:,' + fileContents;
        link.click();
    }

    function loadTemplate(){

        stage.destroyChildren();

        var layer = new Konva.Layer();
        stage.add(layer);

        cur_layer = layer;

        filenames = []; 

        filenames[0] = 'Home';

        // ALSO DELETE ALL TABS


        var item = new Konva.Text({
            name: 'item' + item_count,
            x: 300,
            y: 10,
            //text: 'Testing',
            text: 'Website Name',
            //fontSize: Math.random() * (30 - 10) + 10,
            fontSize: 60,
            fontFamily: 'Calibri',
            fill: 'red',
            id: item_count,
            draggable: true,
            listening: true
        });

        item.on('click', function() {
            console.log('click ' + JSON.stringify(item));
            var changeFont = prompt("font change= ");
            //var fontSize = text.fontSize();
            //text.fontSize(changeFont);
                         // event     // value
            item.setAttr('fontSize', changeFont);

            //updates canvas
            cur_layer.draw();

    });
        item_count++; 
        addItem(item, cur_layer);

        var item = new Konva.Text({
            name: 'item' + item_count,
            x: 350,
            y: 60,
            //text: 'Testing',
            text: 'Phone number: ',
            //fontSize: Math.random() * (30 - 10) + 10,
            fontSize: 30,
            fontFamily: 'Calibri',
            fill: 'black',
            id: item_count,
            draggable: true,
            listening: true
        });

        item.on('click', function() {
            console.log('click ' + JSON.stringify(item));
            var changeFont = prompt("font change= ");
            //var fontSize = text.fontSize();
            //text.fontSize(changeFont);
                         // event     // value
            item.setAttr('fontSize', changeFont);

            //updates canvas
            cur_layer.draw();

    });
        item_count++;
        addItem(item, cur_layer);

        var item = new Konva.Text({
            name: 'item' + item_count,
            x: 350,
            y: 85,
            //text: 'Testing',
            text: 'Address: ',
            //fontSize: Math.random() * (30 - 10) + 10,
            fontSize: 30,
            fontFamily: 'Calibri',
            fill: 'black',
            id: item_count,
            draggable: true,
            listening: true
        });

        item.on('click', function() {
            console.log('click ' + JSON.stringify(item));
            var changeFont = prompt("font change= ");
            //var fontSize = text.fontSize();
            //text.fontSize(changeFont);
                         // event     // value
            item.setAttr('fontSize', changeFont);

            //updates canvas
            cur_layer.draw();

    });
        item_count++;
        addItem(item, cur_layer);


    }