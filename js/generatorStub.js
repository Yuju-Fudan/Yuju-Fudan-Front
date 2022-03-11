Blockly.JavaScript['column'] = function(block) {
  var dropdown_column_list = block.getFieldValue('column_list');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['row'] = function(block) {
  var dropdown_row_list = block.getFieldValue('row_list');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['col_and_row'] = function(block) {
  var dropdown_row_list = block.getFieldValue('row_list');
  var dropdown_row_list = block.getFieldValue('row_list');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['get_value_from_locations'] = function(block) {
  var value_location = Blockly.JavaScript.valueToCode(block, 'location', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'b.get_value_from_locations()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['get_locations_from_value'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'b.get_locations_from_value()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['get_number_of_value'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'b.get_number_of_value()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['turn'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'b.get_turn()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['score'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'b.get_score()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['max_of_board'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'b.get_max_of_board()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['min_of_board'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'b.get_min_of_board()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['multiplication'] = function(block) {
  var value_value1 = Blockly.JavaScript.valueToCode(block, 'value1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value2 = Blockly.JavaScript.valueToCode(block, 'value2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'b.get_multiplication(${value_value1}, ${value_value2})';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['addition'] = function(block) {
  var value_value1 = Blockly.JavaScript.valueToCode(block, 'value1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value2 = Blockly.JavaScript.valueToCode(block, 'value2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'b.get_addition(${value_value1}, ${value_value2})';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['subtraction'] = function(block) {
  var value_value1 = Blockly.JavaScript.valueToCode(block, 'value1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value2 = Blockly.JavaScript.valueToCode(block, 'value2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'b.get_subtraction(${value_value1}, ${value_value2})';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['division'] = function(block) {
  var value_value1 = Blockly.JavaScript.valueToCode(block, 'value1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value2 = Blockly.JavaScript.valueToCode(block, 'value2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'b.get_division(${value_value1}, ${value_value2})';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['remainder'] = function(block) {
  var value_value1 = Blockly.JavaScript.valueToCode(block, 'value1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value2 = Blockly.JavaScript.valueToCode(block, 'value2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'b.get_remainder(${value_value1}, ${value_value2})';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['random_number'] = function(block) {
  var value_value1 = Blockly.JavaScript.valueToCode(block, 'value1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value2 = Blockly.JavaScript.valueToCode(block, 'value2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'b.get_random_number(${value_value1}, ${value_value2})';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['move_to_left'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'b.move_to_left()\n';
  return code;
};

Blockly.JavaScript['move_to_right'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'b.move_to_right()\n';
  return code;
};

Blockly.JavaScript['move_to_up'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'b.move_to_up()\n';
  return code;
};

Blockly.JavaScript['move_to_down'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'b.move_to_down()\n';
  return code;
};

Blockly.JavaScript['move_randomly'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'b.move_randomly()\n';
  return code;
};

Blockly.JavaScript['invert_horizontally'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'b.invert_horizontally()\n';
  return code;
};

Blockly.JavaScript['invert_vertically'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'b.invert_vertically()\n';
  return code;
};

Blockly.JavaScript['invert_diagonally'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'b.invert_diagonally()\n';
  return code;
};

Blockly.JavaScript['greater'] = function(block) {
  var value_value1 = Blockly.JavaScript.valueToCode(block, 'value1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value2 = Blockly.JavaScript.valueToCode(block, 'value2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'b.is_greater(${value_value1}, ${value_value2})';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['smaller'] = function(block) {
  var value_value1 = Blockly.JavaScript.valueToCode(block, 'value1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value2 = Blockly.JavaScript.valueToCode(block, 'value2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'b.is_smaller(${value_value1}, ${value_value2})';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['more_than'] = function(block) {
  var value_value1 = Blockly.JavaScript.valueToCode(block, 'value1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value2 = Blockly.JavaScript.valueToCode(block, 'value2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'b.is_more_than(${value_value1}, ${value_value2})';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['less_than'] = function(block) {
  var value_value1 = Blockly.JavaScript.valueToCode(block, 'value1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value2 = Blockly.JavaScript.valueToCode(block, 'value2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'b.is_less_than(${value_value1}, ${value_value2})';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['equal'] = function(block) {
  var value_value1 = Blockly.JavaScript.valueToCode(block, 'value1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value2 = Blockly.JavaScript.valueToCode(block, 'value2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'b.is_equal(${value_value1}, ${value_value2})';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['and'] = function(block) {
  var value_value1 = Blockly.JavaScript.valueToCode(block, 'value1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value2 = Blockly.JavaScript.valueToCode(block, 'value2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'b.is_and(${value_value1}, ${value_value2})';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['or'] = function(block) {
  var value_value1 = Blockly.JavaScript.valueToCode(block, 'value1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value2 = Blockly.JavaScript.valueToCode(block, 'value2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'b.is_or(${value_value1}, ${value_value2})';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['not'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'b.is_not(${value_value})';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['if'] = function(block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_true_processing = Blockly.JavaScript.statementToCode(block, 'true_processing');
  // TODO: Assemble JavaScript into code variable.
  var code = 'b.control_if(${value_condition}, ${statements_true_processing}';
  return code;
};

Blockly.JavaScript['if_else'] = function(block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_true_processing = Blockly.JavaScript.statementToCode(block, 'true_processing');
  var statements_false_processing = Blockly.JavaScript.statementToCode(block, 'false_processing');
  // TODO: Assemble JavaScript into code variable.
  var code = 'b.control_if(${value_condition}, ${statements_true_processing}, ${statements_false_processing}';
  return code;
};

Blockly.JavaScript['while_true'] = function(block) {
  var statements_roop_processing = Blockly.JavaScript.statementToCode(block, 'roop_processing');
  // TODO: Assemble JavaScript into code variable.
  var code = 'while True:\n\t${statements_true_processing}';
  return code;
};

Blockly.JavaScript['while'] = function(block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_roop_processing = Blockly.JavaScript.statementToCode(block, 'roop_processing');
  // TODO: Assemble JavaScript into code variable.
  var code = 'while True:;\n';
  return code;
};

Blockly.JavaScript['for'] = function(block) {
  var value_values = Blockly.JavaScript.valueToCode(block, 'values', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_roop_processing = Blockly.JavaScript.statementToCode(block, 'roop_processing');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['value'] = function(block) {
  var number_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
