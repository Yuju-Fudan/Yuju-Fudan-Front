Blockly.Blocks['index'] = {
    init: function() {
      this.appendValueInput("index")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField("行");
      this.setOutput(true, "Number");
      this.setColour(160);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['culumn'] = {
    init: function() {
      this.appendValueInput("culumn")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField("列");
      this.setOutput(true, "Number");
      this.setColour(160);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['min'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("最小値");
      this.setOutput(true, "Number");
      this.setColour(260);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['max'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("最大値");
      this.setOutput(true, "Number");
      this.setColour(260);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['getnumber'] = {
    init: function() {
      this.appendValueInput("number")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField("を取得する");
      this.setOutput(true, "Number");
      this.setColour(210);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };