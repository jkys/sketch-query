<!DOCTYPE html>
<html>
<head>
	<title>SketchQuery | Create</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://cdn.rawgit.com/konvajs/konva/1.6.2/konva.min.js"></script>
	<link href="https://fonts.googleapis.com/css?family=Open+Sans|Raleway" rel="stylesheet">

	<style type="text/css">
		body {
			background-image: url('img/backdrop.jpg');
			background-size: cover;
			background-repeat: no-repeat;
		}

		* {
			color: #fff;
			font-family: 'Raleway', sans-serif;
		}

		h1 {
			font-family: 'Open Sans', sans-serif;
			font-size: 4.5em;
			margin-top: 100px;
		}

		h1, h2, p {
			text-align: center;
		}

		.sidebar {
			padding-left: 10%;
			position: absolute;
			left: 0;
			width: 100%;
			top: 0;
			height: 100%;
			background-color: rgba(0, 0, 0, .75);
			
		}

		.float-text {
			margin-top: 200px;
			padding: 50px;
		}

		button {
			margin-top: 100px;
			height: 45px;
			width: 115px;
			border: 1px solid #fff;
			background-color: rgba(0, 0, 0, .3);
			border-radius: 15px;
			cursor: pointer;
			text-transform: uppercase;
			font-size: 1.1em;
			margin-left: 45%;
		}

		button:hover {
			background-color: rgba(255, 255, 255, .8);
			color: #000;
		}

		nav {
			text-align: center;
			word-spacing: 60px;
			letter-spacing: 10px;
			position: absolute;
			bottom: 0;
			width: 100%;
			height: 50px;
			left: 0;
		}

		a {
			text-decoration: none;
		}

		nav a {
			text-decoration: none;
			text-transform: capitalize;
			font-size: 1.1em;
		}

		#container {
        	height: 80%;
        	width: 80%;
        	background-color: #fff;
        	
        }

        .section, #toolbar {

        }

        #toolbar {
        	margin-top: 30px;
        	height: 30px;
        	background-color: #eee;
        	width: 80%;
        	/*display: inline-block;*/
        	display: flex;align-items: center;
        }

        .icon {
        	margin-left: 15px;
        	cursor: pointer;
        	height: 20px;
        	width: 20px;
        }

        .mod {
			display: flex;align-items: center;justify-content: center;
			position: absolute;
			left: 0;
			width: 100%;
			top: 0;
			height: 100%;
			background-color: rgba(0, 0, 0, .55);
        }

        #des {
        	display: none;
        	height: 20%;
        	width: 20%;
        	background-color: #fff;
        	border: 1px solid black;
        	z-index: 99999 !important;
        }
	</style>

</head>
<body>
<div class="mod">
<div id="des">
	<button id="click">Click</button>
</div>
</div>
<div class="sidebar">
		<div id="toolbar">
			<img class="icon" id="add-item-tx" src="img/tx.png">
			<img class="icon" id="add-item-sq" src="img/sq.png">
			<img class="icon" id="add-item-c" src="img/c.png">
            <img class="icon" type = "file" id="add-item-img" src="img/img.png">
			<img class="icon" id="rm-item" src="img/tr.png">
            <input id = "create-code-btn" type="button" value="Create" onclick="CreateCode();" />
		</div>
		<div class="section" id="container"></div>
</div>
<nav>
	<a href="index.php">home</a>
	<a href="about.php">about</a>
	<a href="contact.php">contact</a>
	<a href="create.php">tutorials</a>
	<a href="https://bitbucket.org/KeysJ/site_sketchquery">code</a>
</nav>
</body>
<script>
    var width = $('#container').width();
    var height = $('#container').height();
    
    var stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height
    });

    var layer = new Konva.Layer();
    
    stage.add(layer);
</script>
<script type="text/javascript">
	var item_count = 0;

    var object_array = [];
    
    $('#add-item-sq').click(function() {    	
        var item = new Konva.Rect({
            name: 'item' + item_count,
	        x: Math.random() * ((stage.getWidth() - 100) - 10) + 10,
	        y: Math.random() * ((stage.getHeight() - 100) - 10) + 10,
            id: item_count,
	        width: Math.random() * ((stage.getWidth() - 100) - 10) + 10,
	        height: Math.random() * ((stage.getHeight() - 100) - 10) + 10,
	        fill: '#'+(Math.random()*0xFFFFFF<<0).toString(16),
	        stroke: 'black',
	        strokeWidth: 1,
	        draggable: true
    	});

        addItem(item);
   		
	});

    $('#add-item-tx').click(function() {        
        var item = new Konva.Text({
            name: 'item' + item_count,
            x: Math.random() * ((stage.getWidth() - 100) - 10) + 10,
            y: Math.random() * ((stage.getHeight() - 100) - 10) + 10,
            text: 'Testing',
            fontSize: Math.random() * (30 - 10) + 10,
            fontFamily: 'Calibri',
            fill: '#'+(Math.random()*0xFFFFFF<<0).toString(16),
            id: item_count,
            draggable: true
        });

        addItem(item);
        
    });

    function CreateCode(){


        for( var i =0; i < stage.children[0].children.length; i ++){

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



            console.log(stage.children[0].children[i]);
            console.log("Type: " + stage.children[0].children[i].className);
            console.log("id: " + stage.children[0].children[i].attrs.id);
            console.log("X: " + stage.children[0].children[i].attrs.x);
            console.log("Y: " + stage.children[0].children[i].attrs.y);



            
            obj.type = stage.children[0].children[i].className;
            obj.x = stage.children[0].children[i].attrs.x;
            obj.y = stage.children[0].children[i].attrs.y;
            obj.width = stage.children[0].children[i].attrs.width;
            obj.height = stage.children[0].children[i].attrs.height;



            if(obj.type == 'Text'){

                console.log("text?: " + stage.children[0].children[i].attrs.text);

                obj.id = stage.children[0].children[i].attrs.id;

                obj.text = stage.children[0].children[i].attrs.text;
            }

            else if (obj.type == 'Image'){
                console.log("img src = " + stage.children[0].children[i].attrs.image.attributes[0].value);
                obj.img = stage.children[0].children[i].attrs.image.attributes[0].value;
                obj.id = stage.children[0].children[i].index;
            }
            else{
                console.log("test")
            }

            object_array[i] = obj; 

        }

        createHTML(object_array);
        createCSS(object_array);

      

    }


    function createHTML(object_array){

        var str = '';


        str += '<!DOCTYPE html><html><head><link rel="stylesheet" href="css.css"><title>Page Title</title></head><body>';

        for(var i = 0; i < object_array.length; i ++){

            console.log(object_array[i]);

            if(object_array[i].type == 'Text'){

                str+= '<p id = a' + object_array[i].id +'>' + object_array[i].text + '</p>'

            }
            else if (object_array[i].type == 'Image'){

                str+= '<img id = a' + object_array[i].id + ' src=' + object_array[i].img + '>'

            }
        }

        str += '</body></html>';

        uriContent = "data:application/octet-stream," + encodeURIComponent(str);

        newWindow = window.open(uriContent, 'home.html');

        console.log(str);

    }

    function createCSS(object_array){

        var str = '';

        str += 'body {background-color: linen;}'

        for(var i = 0; i < object_array.length; i ++){

            if(object_array[i].type == 'Text'){

                str+= '#a' + object_array[i].id + '{'; 

                str+= 'position: relative; display: block; left: ' + object_array[i].x + '; top: ' + object_array[i].y + ';}'

            }
            else if (object_array[i].type == 'Image'){

                str+= '#a' + object_array[i].id + '{'; 
                str+= 'position: relative; left: ' + object_array[i].x + '; top: ' + object_array[i].y + ';}'

            }
        }

        console.log(str);



        uriContent = "data:application/octet-stream," + encodeURIComponent(str);

       // saveAs(uriContent, 'css.css');

        newWindow=window.open(uriContent, 'filename.txt');
        
        //newWindow = window.open(uriContent, 'css.css');



    }

/*
    function saveAs(uri, filename) {
        var link = document.createElement('a');
        if (typeof link.download === 'string') {
            document.body.appendChild(link); // Firefox requires the link to be in the body
            link.download = filename;
            link.href = uri;
            link.click();
            document.body.removeChild(link); // remove the link when done
        } else {
            location.replace(uri);
        }
    }

    */

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

    $('#add-item-c').click(function() {        
        var item = new Konva.Circle({
            name: 'item' + item_count,
            x: Math.random() * ((stage.getWidth() - 100) - 10) + 10,
            y: Math.random() * ((stage.getHeight() - 100) - 10) + 10,
            id: item_count,
            width: Math.random() * ((stage.getWidth() - 100) - 10) + 10,
            height: Math.random() * ((stage.getHeight() - 100) - 10) + 10,
            fill: '#'+(Math.random()*0xFFFFFF<<0).toString(16),
            stroke: 'black',
            strokeWidth: 1,
            draggable: true
        });

        addItem(item);
        
    });

    $('#add-item-img').click(function() {
      

        var imageObj = new Image();

       imageObj.src = '/img/p1.png';

        imageObj.onload = function() {    


            var item = new Konva.Image({
            x: 50,
            y: 50,
            image: imageObj,
            width: 106,
            height: 118,
            draggable: true
            });
        
                addItem(item);  
         };



    });


    function addItem(item) {
        layer.add(item);
        stage.add(layer);
        console.log(stage);

        item_count++;

        for (var i = 0; i < item.length; i++) {
    	console.log(item[i]);
    }


    $('.icon').click(function () {
    	// $('#des').show();
    	// $('.sidebar').hide();
    });

    $('#click').click(function () {
    	// $('#des').hide();
    	// $('.sidebar').show();
    });
}
    </script>
</html>