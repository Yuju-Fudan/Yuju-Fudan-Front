Blockly.Blocks['column'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["1","a"], ["2","b"], ["3","c"], ["4","d"]]), "column_list")
        .appendField("列目");
    this.setOutput(true, "location");
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['row'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "row_list")
        .appendField("行目");
    this.setOutput(true, "location");
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['col_and_row'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "row_list")
        .appendField("列目の")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "row_list")
        .appendField("行目");
    this.setOutput(true, "location");
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_value_from_locations'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("位置が");
    this.appendValueInput("location")
        .setCheck("location");
    this.appendDummyInput()
        .appendField("の値");
    this.setOutput(true, "Number");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_locations_from_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("値が");
    this.appendValueInput("value")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("の座標");
    this.setOutput(true, "location");
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_number_of_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("値が");
    this.appendValueInput("value")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("の個数");
    this.setOutput(true, "Number");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ターン数");
    this.setOutput(true, "Number");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['score'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("スコア");
    this.setOutput(true, "Number");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['max_of_board'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("盤面の最大値");
    this.setOutput(true, "Number");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['min_of_board'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("盤面の最小値");
    this.setOutput(true, "Number");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['multiplication'] = {
  init: function() {
    this.appendValueInput("value1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("×");
    this.appendValueInput("value2")
        .setCheck("Number");
    this.setOutput(true, "Number");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['addition'] = {
  init: function() {
    this.appendValueInput("value1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("+");
    this.appendValueInput("value2")
        .setCheck("Number");
    this.setOutput(true, "Number");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['subtraction'] = {
  init: function() {
    this.appendValueInput("value1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("−");
    this.appendValueInput("value2")
        .setCheck("Number");
    this.setOutput(true, "Number");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['division'] = {
  init: function() {
    this.appendValueInput("value1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("÷");
    this.appendValueInput("value2")
        .setCheck("Number");
    this.setOutput(true, "Number");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['remainder'] = {
  init: function() {
    this.appendValueInput("value1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("÷");
    this.appendValueInput("value2")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("の余り");
    this.setOutput(true, "Number");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['random_number'] = {
  init: function() {
    this.appendValueInput("value1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("〜");
    this.appendValueInput("value2")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("内の乱数");
    this.setOutput(true, "Number");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['move_to_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("左へスライドする");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['move_to_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("右へスライドする");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['move_to_up'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("上へスライドする");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['move_to_down'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("下へスライドする");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['move_randomly'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ランダムな方向へスライドする");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['invert_horizontally'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("左右に反転する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['invert_vertically'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("上下に反転する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['invert_diagonally'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("斜めに反転する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['greater'] = {
  init: function() {
    this.appendValueInput("value1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("＞");
    this.appendValueInput("value2")
        .setCheck("Number");
    this.setOutput(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['smaller'] = {
  init: function() {
    this.appendValueInput("value1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("＜");
    this.appendValueInput("value2")
        .setCheck("Number");
    this.setOutput(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['more_than'] = {
  init: function() {
    this.appendValueInput("value1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("≧");
    this.appendValueInput("value2")
        .setCheck("Number");
    this.setOutput(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['less_than'] = {
  init: function() {
    this.appendValueInput("value1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("≦");
    this.appendValueInput("value2")
        .setCheck("Number");
    this.setOutput(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['equal'] = {
  init: function() {
    this.appendValueInput("value1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("と");
    this.appendValueInput("value2")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("が等しい");
    this.setOutput(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['and'] = {
  init: function() {
    this.appendValueInput("value1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("かつ");
    this.appendValueInput("value2")
        .setCheck("Number");
    this.setOutput(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['or'] = {
  init: function() {
    this.appendValueInput("value1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("または");
    this.appendValueInput("value2")
        .setCheck("Number");
    this.setOutput(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['not'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("ではない");
    this.setOutput(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['if'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("もし");
    this.appendValueInput("condition")
        .setCheck("Boolean");
    this.appendDummyInput()
        .appendField("ならば");
    this.appendStatementInput("true_processing")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['if_else'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("もし");
    this.appendValueInput("condition")
        .setCheck("Boolean");
    this.appendDummyInput()
        .appendField("ならば");
    this.appendStatementInput("true_processing")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("でなければ");
    this.appendStatementInput("false_processing")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['while_true'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ずっと繰り返す");
    this.appendStatementInput("roop_processing")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['while'] = {
  init: function() {
    this.appendValueInput("condition")
        .setCheck("Boolean");
    this.appendDummyInput()
        .appendField("の間、ずっと繰り返す");
    this.appendStatementInput("roop_processing")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['for'] = {
  init: function() {
    this.appendValueInput("values")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("回繰り返す");
    this.appendStatementInput("roop_processing")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("値")
        .appendField(new Blockly.FieldNumber(0), "NAME");
    this.setOutput(true, "Number");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
