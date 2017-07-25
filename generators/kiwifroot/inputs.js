/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating Kiwifroot Javascript that resolves keyboard keys
 * @author rani_sputnik@hotmail.com
 * @author ben@gamefroot.com (Ben Richards)
 */
'use strict';

goog.provide('Blockly.Kiwifroot.keys');

goog.require('Blockly.Kiwifroot');

Blockly.Kiwifroot['kiwi_key_special'] = function(block) {
	var code = block.getFieldValue('KEY');
  	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Kiwifroot[ "kiwi_input_key_down" ] = function( block ) {
  var keycode = Blockly.Kiwifroot.valueToCode(
    block, "KEY", Blockly.Kiwifroot.ORDER_ATOMIC ) || 0;

  var code = "this.game.input.keyboard.isDown( " + keycode + " )";

  return [ code, Blockly.JavaScript.ORDER_ATOMIC ];
};

Blockly.Kiwifroot['kiwi_input_mouse'] = function(block) {
	var axis = block.getFieldValue('AXIS');
	var code = 'this.game.input.mouse.' + axis;
  	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_input_fingers'] = function(block) {
	var code = 'this.game.input.touch.fingers';
  	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_input_finger_select'] = function(block) {
	var dropdown_number = block.getFieldValue('NUMBER');
  var code = "this.game.input.touch['finger" + dropdown_number +"']";
  	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_input_finger_get_coords'] = function(block) {
  var dropdown_prop = block.getFieldValue('PROP');
  var value_name = Blockly.Kiwifroot.valueToCode(block, 'POINTER', Blockly.JavaScript.ORDER_ATOMIC) || 'this.game.input.touch.latestFinger';
  var code = errorCheckConditional( this.workspace, 'NotNull', value_name, '!%1', 'this.game.input.touch.latestFinger', "No Pointer could be found for a `get x/y of pointer` block.") + '.' + dropdown_prop;
  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_input_finger_get_bool'] = function(block) {
  var value_name = Blockly.Kiwifroot.valueToCode(block, 'POINTER', Blockly.JavaScript.ORDER_ATOMIC) || 'this.game.input.touch.latestFinger';
  var dropdown_prop = block.getFieldValue('PROP');

  var code = errorCheckConditional( this.workspace, 'NotNull', value_name, '!%1', 'this.game.input.touch.latestFinger', "No Pointer could be found for a `get active/down/up of pointer` block.") + '.' + dropdown_prop;

  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_input_finger_get_times'] = function(block) {
  var value_pointer = Blockly.Kiwifroot.valueToCode(block, 'POINTER', Blockly.JavaScript.ORDER_ATOMIC) || 'this.game.input.touch.latestFinger';
  var dropdown_prop = block.getFieldValue('PROP');

  var code = errorCheckConditional( this.workspace, 'NotNull', value_pointer, '!%1', 'this.game.input.touch.latestFinger', "No Pointer could be found for a `get duration/timedown/timeup/id of pointer` block.") + '.' + dropdown_prop;

  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_input_finger_latest'] = function(block) {
  var code = 'this.game.input.touch.latestFinger';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};