var json = Blockly.serialization.workspaces.save(workspace);
Blockly.serialization.workspaces.load(json);
var workspace = Blockly.inject('blocklyDiv',                                                  // ライブラリに読み込ませる
{toolbox: document.getElementById('toolbox')});