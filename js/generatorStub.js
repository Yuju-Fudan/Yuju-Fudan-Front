Blockly.Python['score'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'b.get_score()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['move_to_left'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'b.move_to_left()\n';
  return code;
};
Blockly.Python['equal'] = function(block) {
  var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
  var value_value2 = Blockly.Python.valueToCode(block, 'value2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'b.is_equal(${value_value1}, ${value_value2})';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['if'] = function(block) {
  var value_condition = Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_ATOMIC);
  var statements_true_processing = Blockly.Python.statementToCode(block, 'true_processing');
  // TODO: Assemble Python into code variable.
  var code = 'b.control_if('+value_condition+','+statements_true_processing;
  return code;
};