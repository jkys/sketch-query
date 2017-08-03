<!DOCTYPE html>
<html>
<head>
    <title>SketchQuery | Create</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdn.rawgit.com/konvajs/konva/1.6.2/konva.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Raleway" rel="stylesheet">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" type="text/css" href="tutorial.css">
    <link rel="stylesheet" type="text/css" href="spectrum.css">

    <style type="text/css">
        
    </style>
</head>
<body>
<div id="screen"><div id="module"></div></div>
<div class="main">
    <div class="menu">
        <div class="items">
            <div class="box"><img class="icon" id="add-item-tx" src="img/tx.png"></div>
            <div class="box"><img class="icon" id="add-item-sq" src="img/sq.png"></div>
            <div class="box"><img class="icon" type = "file" id="add-item-img" src="img/img.png"></div>
        </div>
        <div class="current">
            <div class="box"><button id="current_layer">Home</button></div>
            <div class="box"><button id="delete_layer_btn" style="background-color: rgba(0, 0, 0, 0); !important; margin-left: -10px !important; color: black;" onclick="removeLayer();">X</button></div>
        </div>
        <div class="buttons">
            <div class="box"><button onclick="newPage(page_num);">New Page</button></div>
            <div class="box"><button onclick="loadTemplate();">Load Page</button></div>
            <div class="box create"><button onclick="createCode();">Create Site</button></div>
        </div>
    </div>
    <div class="menu">
        <div class="items" id="pages">
            <div class="box"><button onclick="$('#current_layer').html($('#pgn0').text());"><a id="pgn0" href="javascript:openHome(stage.children[0]);">Home</a></button></div>
        </div>
    </div>
    <div class="section" id="container"></div>
</div>
<!-- <nav>
    <a href="index.php">home</a>
    <a href="about.php">about</a>
    <a href="contact.php">contact</a>
    <a href="create.php">tutorials</a>
    <a href="https://bitbucket.org/KeysJ/site_sketchquery">code</a>
</nav> -->
</body>
<script type="text/javascript" src="konvas.js"></script>
<script type="text/javascript" src="text.js"></script>
<script type="text/javascript" src="newPage.js"></script>
<script type="text/javascript" src="image.js"></script>
<script type="text/javascript" src="rectangle.js"></script>
<script type="text/javascript" src="script.js"></script>
<script type="text/javascript" src="spectrum.js"></script>
</html>