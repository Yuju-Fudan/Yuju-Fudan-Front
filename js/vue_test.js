Blockly.JavaScript.addReservedWords('code');
var code = Blockly.JavaScript.workspaceToCode(workspace);

var app = new Vue({ 
    el: '#app',
    data: {
        message: code
    }
});