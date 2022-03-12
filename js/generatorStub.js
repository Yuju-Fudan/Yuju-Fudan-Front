Blockly.Python['column'] = function(block) {
  var dropdown_column_list = block.getFieldValue('column_list');
  var code = `col=${dropdown_column_list}`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['row'] = function(block) {
  var dropdown_row_list = block.getFieldValue('row_list');
  var code = `row=${dropdown_row_list}`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['col_and_row'] = function(block) {
  var dropdown_column_list = block.getFieldValue('column_list');
  var dropdown_row_list = block.getFieldValue('row_list');
  var code = `col=${dropdown_column_list}, row=${dropdown_row_list}`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['get_value_from_locations'] = function(block) {
  var value_location = Blockly.Python.valueToCode(block, 'location', Blockly.Python.ORDER_ATOMIC);
  var code = `b.get_value_from_locations(${value_location})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['get_value_from_column'] = function(block) {
  var value_column = Blockly.Python.valueToCode(block, 'column', Blockly.Python.ORDER_ATOMIC);
  var code = `b.get_value_from_column(${value_column})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['get_value_from_row'] = function(block) {
  var value_row = Blockly.Python.valueToCode(block, 'row', Blockly.Python.ORDER_ATOMIC);
  var code = `b.get_value_from_row(${value_row})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['get_locations_from_value'] = function(block) {
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var code = `b.get_locations_from_value(${value_value})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['get_number_of_value'] = function(block) {
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var code = `b.get_number_of_value(${value_value})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['turn'] = function(block) {
  var code = 'b.get_turn()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['score'] = function(block) {
  var code = 'b.get_score()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['max_of_board'] = function(block) {
  var code = 'b.get_max_of_board()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['min_of_board'] = function(block) {
  var code = 'b.get_min_of_board()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['multiplication'] = function(block) {
  var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
  var value_value2 = Blockly.Python.valueToCode(block, 'value2', Blockly.Python.ORDER_ATOMIC);
  var code = `b.get_multiplication(${value_value1}, ${value_value2})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['addition'] = function(block) {
  var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
  var value_value2 = Blockly.Python.valueToCode(block, 'value2', Blockly.Python.ORDER_ATOMIC);
  var code = `b.get_addition(${value_value1}, ${value_value2})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['subtraction'] = function(block) {
  var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
  var value_value2 = Blockly.Python.valueToCode(block, 'value2', Blockly.Python.ORDER_ATOMIC);
  var code = `b.get_subtraction(${value_value1}, ${value_value2})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['division'] = function(block) {
  var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
  var value_value2 = Blockly.Python.valueToCode(block, 'value2', Blockly.Python.ORDER_ATOMIC);
  var code = `b.get_division(${value_value1}, ${value_value2})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['remainder'] = function(block) {
  var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
  var value_value2 = Blockly.Python.valueToCode(block, 'value2', Blockly.Python.ORDER_ATOMIC);
  var code = `b.get_remainder(${value_value1}, ${value_value2})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['random_number'] = function(block) {
  var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
  var value_value2 = Blockly.Python.valueToCode(block, 'value2', Blockly.Python.ORDER_ATOMIC);
  var code = `b.get_random_number(${value_value1}, ${value_value2})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['move_to_left'] = function(block) {
  var code = 'b.move_to_left()\n';
  return code;
};

Blockly.Python['move_to_right'] = function(block) {
  var code = 'b.move_to_right()\n';
  return code;
};

Blockly.Python['move_to_up'] = function(block) {
  var code = 'b.move_to_up()\n';
  return code;
};

Blockly.Python['move_to_down'] = function(block) {
  var code = 'b.move_to_down()\n';
  return code;
};

Blockly.Python['move_randomly'] = function(block) {
  var code = 'b.move_randomly()\n';
  return code;
};

Blockly.Python['invert_horizontally'] = function(block) {
  var code = 'b.invert_horizontally()\n';
  return code;
};

Blockly.Python['invert_vertically'] = function(block) {
  var code = 'b.invert_vertically()\n';
  return code;
};

Blockly.Python['invert_diagonally'] = function(block) {
  var code = 'b.invert_diagonally()\n';
  return code;
};

Blockly.Python['greater'] = function(block) {
  var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
  var value_value2 = Blockly.Python.valueToCode(block, 'value2', Blockly.Python.ORDER_ATOMIC);
  var code = `b.is_greater(${value_value1}, ${value_value2})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['smaller'] = function(block) {
  var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
  var value_value2 = Blockly.Python.valueToCode(block, 'value2', Blockly.Python.ORDER_ATOMIC);
  var code = `b.is_smaller(${value_value1}, ${value_value2})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['more_than'] = function(block) {
  var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
  var value_value2 = Blockly.Python.valueToCode(block, 'value2', Blockly.Python.ORDER_ATOMIC);
  var code = `b.is_more_than(${value_value1}, ${value_value2})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['less_than'] = function(block) {
  var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
  var value_value2 = Blockly.Python.valueToCode(block, 'value2', Blockly.Python.ORDER_ATOMIC);
  var code = `b.is_less_than(${value_value1}, ${value_value2})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['equal'] = function(block) {
  var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
  var value_value2 = Blockly.Python.valueToCode(block, 'value2', Blockly.Python.ORDER_ATOMIC);
  var code = `b.is_equal(${value_value1}, ${value_value2})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['and'] = function(block) {
  var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
  var value_value2 = Blockly.Python.valueToCode(block, 'value2', Blockly.Python.ORDER_ATOMIC);
  var code = `b.is_and(${value_value1}, ${value_value2})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['or'] = function(block) {
  var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
  var value_value2 = Blockly.Python.valueToCode(block, 'value2', Blockly.Python.ORDER_ATOMIC);
  var code = `b.is_or(${value_value1}, ${value_value2})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['not'] = function(block) {
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var code = `b.is_not(${value_value})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['if'] = function(block) {
  var value_condition = Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_ATOMIC);
  var statements_true_processing = Blockly.Python.statementToCode(block, 'true_processing');
  var code = `b.control_if(${value_condition}, ${statements_true_processing}`;
  return code;
};

Blockly.Python['if_else'] = function(block) {
  var value_condition = Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_ATOMIC);
  var statements_true_processing = Blockly.Python.statementToCode(block, 'true_processing');
  var statements_false_processing = Blockly.Python.statementToCode(block, 'false_processing');
  var code = `b.control_if_else(${value_condition}, ${statements_true_processing}, ${statements_false_processing}`;
  return code;
};

Blockly.Python['while_true'] = function(block) {
  var statements_roop_processing = Blockly.Python.statementToCode(block, 'roop_processing');
  var code = `b.control_while_true(${statements_true_processing})`;
  return code;
};

Blockly.Python['while'] = function(block) {
  var value_condition = Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_ATOMIC);
  var statements_roop_processing = Blockly.Python.statementToCode(block, 'roop_processing');
  var code = `b.control_while(${value_condition}, ${statements_true_processing})`;
  return code;
};

Blockly.Python['for'] = function(block) {
  var value_values = Blockly.Python.valueToCode(block, 'values', Blockly.Python.ORDER_ATOMIC);
  var statements_roop_processing = Blockly.Python.statementToCode(block, 'roop_processing');
  var code = `b.control_for(${value_values}, ${statements_true_processing})`;
  return code;
};

Blockly.Python['value'] = function(block) {
  var number_name = block.getFieldValue('NAME');
  var code = `b.get_value(${number_name})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['len_of_array'] = function(block) {
  var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
  var code = `b.get_len_of_array(${value_array})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['value_of_array'] = function(block) {
  var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var code = `b.get_value_of_array(${value_array}, ${value_vallue})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['max_value_of_array'] = function(block) {
  var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
  var code = `b.get_max_of_array(${value_array})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['min_value_of_array'] = function(block) {
  var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
  var code = `b.get_min_of_array(${value_array})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['included_in_the_array'] = function(block) {
  var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var code = `b.is_included_in_array(${value_array}, ${value_value})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['insert_into_an_array'] = function(block) {
  var variable_array_name = Blockly.Python.nameDB_.getName(block.getFieldValue('array_name'), Blockly.Variables.NAME_TYPE);
  var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
  var value_value2 = Blockly.Python.valueToCode(block, 'value2', Blockly.Python.ORDER_ATOMIC);
  var code = `${value_array_name} = b.insert_into_array(${value_array_name}, ${value_value1}, ${value_value2})\n`;
  return code;
};

Blockly.Python['remove_from_array'] = function(block) {
  var variable_array_name = Blockly.Python.nameDB_.getName(block.getFieldValue('array_name'), Blockly.Variables.NAME_TYPE);
  var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
  var code = `${value_array_name} = b.remove_from_array(${value_array_name}, ${value_value})\n`;
  return code;
};

Blockly.Python['update_value_of_array'] = function(block) {
  var variable_array_name = Blockly.Python.nameDB_.getName(block.getFieldValue('array_name'), Blockly.Variables.NAME_TYPE);
  var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
  var value_value2 = Blockly.Python.valueToCode(block, 'value2', Blockly.Python.ORDER_ATOMIC);
  var code = `${value_array_name} = b.update_value_of_array(${value_array_name}, ${value_value1}, ${value_value2})\n`;
  return code;
};

Blockly.Python['delete_array'] = function(block) {
  var variable_array_name = Blockly.Python.nameDB_.getName(block.getFieldValue('array_name'), Blockly.Variables.NAME_TYPE);
  var code = `${value_array_name} = b.delete_array(${value_array_name})\n`;
  return code;
};

Blockly.Python['append_to_array'] = function(block) {
  var variable_array_name = Blockly.Python.nameDB_.getName(block.getFieldValue('array_name'), Blockly.Variables.NAME_TYPE);
  var value_value = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
  var code = `${value_array_name} = b.append_to_array(${value_array_name}, ${value_value})\n`;
  return code;
};

Blockly.Python['define_array'] = function(block) {
  var variable_array_name = Blockly.Python.nameDB_.getName(block.getFieldValue('array_name'), Blockly.Variables.NAME_TYPE);
  var code = `b.define_array(${value_array_name})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['substitute_array'] = function(block) {
  var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
  var variable_array_name = Blockly.Python.nameDB_.getName(block.getFieldValue('array_name'), Blockly.Variables.NAME_TYPE);
  var code = `${value_array_name} = b.substitute_array(${value_array}, ${value_array_name})`;
  return [code, Blockly.Python.ORDER_NONE];
};
