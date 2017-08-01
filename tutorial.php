<!DOCTYPE html>
<html>
<head>
	<title>SketchQuery | Create</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://cdn.rawgit.com/konvajs/konva/1.6.2/konva.min.js"></script>
	<link href="https://fonts.googleapis.com/css?family=Open+Sans|Raleway" rel="stylesheet">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

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
/*
		#container {
        	height: 80%;
        	width: 80%;
        	background-color: #fff;
        	
        }
*/
        .section{

            height: 80%;
            width: 80%;
            background-color: #fff;
            

        }


        #toolbar {

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
        /* Style the tab */
        .sidebar.toolbar.tab {
            overflow: hidden;
            border: 1px solid #ccc;
            background-color: #f1f1f1;
        }

        /* Style the buttons inside the tab */
        .sidebar.toolbar.tab button {
            background-color: inherit;
            float: left;
            border: none;
            outline: none;
            cursor: pointer;
            padding: 14px 16px;
            transition: 0.3s;
        }

        /* Change background color of buttons on hover */
        .sidebar.toolbar.tab button:hover {
            background-color: #ddd;
        }

        /* Create an active/current tablink class */
        .sidebar.toolbar.tab button.active {
            background-color: #ccc;
        }

        /* Style the tab content */
        .tabcontent {
            display: none;
            padding: 6px 12px;
            border: 1px solid #ccc;
            border-top: none;
        }

        .tabs {
    width:100%;
    display:inline-block;
}
 
    /*----- Tab Links -----*/
    /* Clearfix */
    .tab-links:after {
        display:block;
        clear:both;
        content:'';
    }
 
    .tab-links li {
        margin:0px 5px;
        float:left;
        list-style:none;
    }
 
        .tab-links a {
            padding:9px 15px;
            display:inline-block;
            border-radius:3px 3px 0px 0px;
            background:#7FB5DA;
            font-size:16px;
            font-weight:600;
            color:#4c4c4c;
            transition:all linear 0.15s;
        }
 
        .tab-links a:hover {
            background:#a7cce5;
            text-decoration:none;
        }
 
    li.active a, li.active a:hover {
        background:#fff;
        color:#4c4c4c;
    }
 
    /*----- Content of Tabs -----*/

 
        .tab {
            display:none;
        }
 
        .tab.active {
            display:block;
        }
    #create-code-btn, #create-new-page {

        color:black;
    }

    #current_layer {
        color: black;
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
            <input id = "create-code-btn" type="button" value="Create" onclick="createCode();" />
            <input id = "create-new-page" type="button" value="New Page" onclick="newPage(page_num);" />
            <p id = "current_layer" color = "black"> layer = Home </p>
		</div>
        <div class="tabs">
            <ul class="tab-links">
                <li class="active"><a href="javascript:openHome(stage.children[0]);">Home</a></li>
            </ul>
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

</script>
<script type="text/javascript">
	var item_count = 0;

    var object_array = [];

    var big_object_array = [];

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

    //can also add complex text

    $('#add-item-tx').click(function() {  
        var txtInput = prompt("Text =?");
        var fontInput = prompt("font size =?");         
        var item = new Konva.Text({
            name: 'item' + item_count,
            x: Math.random() * ((stage.getWidth() - 100) - 10) + 10,
            y: Math.random() * ((stage.getHeight() - 100) - 10) + 10,
            //text: 'Testing',
            text: txtInput,
            //fontSize: Math.random() * (30 - 10) + 10,
            fontSize: fontInput,
            fontFamily: 'Calibri',
            fill: '#'+(Math.random()*0xFFFFFF<<0).toString(16),
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

 

        addItem(item, cur_layer);
        
    });

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

        addItem(item,cur_layer);
        
    });

    $('#add-item-img').click(function() {
      

        var imageObj = new Image();
        var heightInput = prompt("height =?");
        var widthInput = prompt("width =?"); 

       //imageObj.src = '/img/p1.png';
       imageObj.src = '/img/' + prompt("filename");

        imageObj.onload = function() {    


            var item = new Konva.Image({
            x: 50,
            y: 50,
            image: imageObj,
            width: widthInput,
            height: heightInput,
            draggable: true
            }); 

            item.on('click', function() {
                console.log('click ' + JSON.stringify(item));
                var heightChange = prompt("height change= ");
                             // event     // value
                item.setAttr('height', heightChange);

                //updates canvas
                cur_layer.draw();

        });
       
                addItem(item);  
         };
    });


    function createCode(){

        for( var j = 0; j < stage.children.length; j++){
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



                console.log(stage.children[j].children[i]);
                console.log("Type: " + stage.children[j].children[i].className);
                console.log("id: " + stage.children[j].children[i].attrs.id);
                console.log("X: " + stage.children[j].children[i].attrs.x);
                console.log("Y: " + stage.children[j].children[i].attrs.y);



                
                obj.type = stage.children[j].children[i].className;
                obj.x = stage.children[j].children[i].attrs.x;
                obj.y = stage.children[j].children[i].attrs.y;
                obj.width = stage.children[j].children[i].attrs.width;
                obj.height = stage.children[j].children[i].attrs.height;



                if(obj.type == 'Text'){

                    console.log("text?: " + stage.children[j].children[i].attrs.text);

                    obj.id = stage.children[j].children[i].attrs.id;

                    obj.text = stage.children[j].children[i].attrs.text;

                    obj.fontFamily = stage.children[j].children[i].attrs.fontFamily;

                    obj.fontSize = stage.children[j].children[i].attrs.fontSize;
                }

                else if (obj.type == 'Image'){
                    console.log("img src = " + stage.children[j].children[i].attrs.image.attributes[0].value);
                    //obj.img = stage.children[0].children[i].attrs.image.attributes[0].value;

                    obj.img = stage.children[j].children[i].attrs.image.src;

                    obj.id = stage.children[j].children[i].index;

                }
                else{
                    console.log("test")
                }

                object_array[i] = obj; 

            }


            createHTML(object_array, j +'.html', j);
            createCSS(object_array, j + '.css');

        }
    }


    function createHTML(object_array, filename, j){

        var str = '';


        str += '<!DOCTYPE html><html><head><link rel="stylesheet" href="' + j + '.css  "><title>Page Title</title></head><body>';

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

        saveContent(str, filename);
        console.log(str);

    }

    function createCSS(object_array, filename){

        var str = '';

        //str += 'body {background-color: linen;}'

        for(var i = 0; i < object_array.length; i ++){ 

            if(object_array[i].type == 'Text'){

                str+= '#a' + object_array[i].id + '{'; 

                str+= 'position: absolute; left: ' + object_array[i].x + 'px !important; top: ' + object_array[i].y + 'px !important; font-family: ' + object_array[i].fontFamily+ '; font-size: ' + object_array[i].fontSize +  'px !important;}'

            }
            else if (object_array[i].type == 'Image'){

                str+= '#a' + object_array[i].id + '{'; 
                str+= 'position: absolute; left: ' + object_array[i].x + 'px; top: ' + object_array[i].y + 'px; height: ' + object_array[i].height + 'px; width: ' + object_array[i].width + 'px;'
                str += '}';

            }
        }

        console.log(str);
        saveContent(str, filename);

    }

    function newPage(page_number){

        document.getElementById('current_layer').innerHTML = 'current layer = ' + page_number;

        stage.clear();

        console.log("page_num = " + page_number);

        var layer = new Konva.Layer();

        stage.add(layer);

        var layer_name = "layer"+page_number;


        $('.tab-links').append('<li> <a href= "javascript:openCity(stage.children[' + page_number + ']);"> '+layer_name+' </a></li>');

            //'<button id= "' + layer_name  +  ' " class = "w3-bar item w3-button" onclick= "openCity('+ layer_name + ')"> tab </button>');
        $('.tab-content').append('<div id = ' + layer_name + ' class = "tab" > </div>');

        console.log(stage);

  /*      tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].disabled = "false";
        }
*/
        cur_layer = layer;
   
        page_num++;


    }

    function openHome(layer_name){

        stage.clear();

        console.log(layer_name);

        layer_name.draw();

        cur_layer = layer_name;

        document.getElementById('current_layer').innerHTML = 'layer = home';

    }

    function openCity(layer_name) {


        console.log(layer_name);

        stage.clear();

        layer_name.draw();

        var i;
        var x = document.getElementsByClassName("tabs");

        /*
        for (i = 0; i < x.length; i++) {
           x[i].style.display = "none";  
        }

        */

        document.getElementById('current_layer').innerHTML = 'layer = ' + layer_name.index;

        // Show the current tab, and add an "active" class to the button that opened the tab
       // document.getElementById(cityName).style.display = "block";


       // get layer with layername 

       cur_layer = layer_name;

       console.log("cur_layer = " +layer_name);
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



    function addItem(item, layer_name) {
        layer_name.add(item);
        stage.add(layer_name);
        console.log(stage);

        console.log("layer is " + layer_name);

        item_count++;

        for (var i = 0; i < item.length; i++) {
    	console.log(item[i]);
    }

/*
    jQuery(document).ready(function() {
        jQuery('.tabs .tab-links a').on('click', function(e)  {
            var currentAttrValue = jQuery(this).attr('href');
            console.log("success");
     
            // Show/Hide Tabs
            jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
     
            // Change/remove current tab to active
            jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
     
            e.preventDefault();
        });
    });

    */


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