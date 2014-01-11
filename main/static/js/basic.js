/*
drawMode = 10,
addNOdes = 11,
addEdges = 12,
postModel = 13,
analysisMode = 20,
*/
var currentState = null;
var nodesArray = new Array();
var edgesArray = new Array();

// Initialize cytoscape.js
$(loadCy=function() {
    options ={
        showOverlay : false,
        ready:function() {
            cy = this;
        }
    };
    $("#cy").cytoscape(options);
});

function getMousePos(canvas, event) {
  var mouseX = event.pageX - canvas.offsetLeft;
  var mouseY = event.pageY - canvas.offsetTop;
  return {
    x: mouseX,
    y: mouseY
  };
}

$("#drawMode").click(function(event) {
    currentState = 10;
    var buttons = 
        "<button type='button' id='addNodesMode' onclick='initAddNodesMode();'> Start Adding Nodes </button> \
        <button type='button' id='addEdgesMode'> Start Adding Edges </button> \
        <button type='button' id='postModel'> Post Model </button>";
    $('#modeButtons').html (buttons);
});

$("#analysisMode").click(function(event) {
    //console.log("lund")
    currentState = 20;
    var buttons =
        "<button type='button' id='addNodesMode' onclick='initAddNodesMode();'> loda mera </button> \
        <button type='button' id='addEdgesMode' onclick='initAddEdgesMode();'>  loda tera </button> \
        <button type='button' id='postModel' onclick='postModel();'> loda apna </button>";
    $('#modeButtons').html(buttons);
});

$('#postModel').click(function(event) {
    currentState == 13;
    //if (graphcheck()) {
        //postgraph();
    //}
    //else 
        //chtutiye theek graph bana;
});

$("#cy").click(function(event) {
    if (currentState == 11) {
        pos = getMousePos(this, event);
        var nodeId = 'node' + String(nodesArray.length);
        cy.add([
            {group: "nodes", data: {id: nodeId, name: nodeId, weight:50},
            renderedPosition: pos},
            ]);
        nodeId = prompt("node ka naam daal","Node" + nodesArray.length);
//TODO: reaplace this shitty promt with a kickass box for entering nodename.
        nodesArray.push(nodeId);
    }
    else if (currentState == 12) {
        //edges ka code
    }
});
