<!DOCTYPE html>
<html>
<head>
	<title>Testing</title>
	<link rel="stylesheet" type="text/css" href="main.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://cdn.rawgit.com/konvajs/konva/1.6.2/konva.min.js"></script>
    <link rel="stylesheet" media="screen" type="text/css" href="colorpicker/css/colorpicker.css" />
    <script type="text/javascript" src="colorpicker/js/colorpicker.js"></script>
    <meta charset="utf-8">
    <style>
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #F0F0F0;
        }

        #container {
        	height: 500px;
        	width: 500px;
        	background-color: #fff;
        	
        }

        .section {
        	margin-top: 50px;
        	margin-left: 50px;
        	float: left;
        }

        #items {
        	width: 200px;
        	height: 500px;
        	background-color: #fff;
        	padding: 1%;
        	overflow: scroll;
        }

        #items button {
        	background-color: #EBAF1A;
			height: 40px;
			width: auto;
			border: none;
			border-radius: 15px;
			box-shadow: 0px 6px 15px rgba(0,0,0,0.3);
			cursor: pointer;
			color: #fff;
			font-size: 1.1em;
			font-weight: 500;
        }

        .item-header {
        }

        p {
            margin: 0;
            text-align: left;
        }

        body {
            margin-top: 80px;
        }

        header {
            position: fixed;
            top: 0;
            width: 100%;
            height: 80px;
            background-color: grey;
        }
    </style>
</head>
<body>
<header>
<button type="button" id="add-item-text">Add Text</button>
<button type="button" id="add-item-circle">Add Circle</button>
<button type="button" id="add-item-rectangle">Add Rectangle</button>
<input type="number" name="id" id="destroyNumber">
<button onclick="die();">destroy</button>

<input type="number" name="id" id="updateHeight" placeholder="new height">
<input type="number" name="id" id="updateWidth" placeholder="new width">
<button onclick="updateThis();">Update stuff</button>
    
</header>
<div class="section" id="items">
</div>
<div class="section" id="container"></div>
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
    
    $('#add-item-rectangle').click(function() {
    	
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

    $('#add-item-text').click(function() {
        
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

    $('#add-item-circle').click(function() {
        
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

    function addItem(item) {
        layer.add(item);
        stage.add(layer);
        console.log(stage);

        item_count++;

        var ob = '<div class="item" id="' + item.attrs.id + '"><p><span class="item-header ' + item.attrs.id + '">Item Name: ' + item.attrs.name + '</span></p><p><span class="item-header ' + item.attrs.id + '">X Coordinate: ' + item.attrs.x + '</span></p><p><span class="item-header ' + item.attrs.id + '">Y Coordinate: ' + item.attrs.y + '</span></p><p><span class="item-header ' + item.attrs.id + '">Height: ' + item.attrs.height + '</span></p><p><span class="item-header ' + item.attrs.id + '">Width: ' + item.attrs.width + '</span></p><p><span class="item-header ' + item.attrs.id + '">Id: ' + item.attrs.id + '</span></p><p><span class="item-header ' + item.attrs.id + '">Can Move: ' + item.attrs.draggable + '</span></p><p><span class="item-header ' + item.attrs.id + '">Fill Color: ' + item.attrs.fill + '</span></p><p><span class="item-header ' + item.attrs.id + '">Stroke: ' + item.attrs.stroke + '</span></p><p><span class="item-header ' + item.attrs.id + '">Stroke Width: ' + item.attrs.strokeWidth + '</span></p><hr></div>';

        $('#items').append(ob);
    }

    stage.on("dragstart", function() {
        updateBoard();
    });
    stage.on("dragmove", function() {
        updateBoard();
    });
    stage.on("dragend", function() {
        updateBoard();
    });

    function updateBoard() {
        for (var i = 0; i < item_count; i++) {
          $('#' + i).remove();
          $('.remove').remove();
          var item = stage.find('#' + i)[0];

          var ob = '<div class="item" id="' + item.attrs.id + '"><p><span class="item-header ' + item.attrs.id + '">Item Name: ' + item.attrs.name + '</span></p><p><span class="item-header ' + item.attrs.id + '">X Coordinate: ' + item.attrs.x + '</span></p><p><span class="item-header ' + item.attrs.id + '">Y Coordinate: ' + item.attrs.y + '</span></p><p><span class="item-header ' + item.attrs.id + '">Height: ' + item.attrs.height + '</span></p><p><span class="item-header ' + item.attrs.id + '">Width: ' + item.attrs.width + '</span></p><p><span class="item-header ' + item.attrs.id + '">Id: ' + item.attrs.id + '</span></p><p><span class="item-header ' + item.attrs.id + '">Can Move: ' + item.attrs.draggable + '</span></p><p><span class="item-header ' + item.attrs.id + '">Fill Color: ' + item.attrs.fill + '</span></p><p><span class="item-header ' + item.attrs.id + '">Stroke: ' + item.attrs.stroke + '</span></p><p><span class="item-header ' + item.attrs.id + '">Stroke Width: ' + item.attrs.strokeWidth + '</span></p><hr></div>';

        $('#items').append(ob);
      }
    }
    </script>
</body>
</html>