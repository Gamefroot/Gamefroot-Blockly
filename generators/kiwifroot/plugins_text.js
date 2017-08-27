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
 * @fileoverview Generating Kiwifroot Javascript for Textfields
 * @author benjamin.p.harding@gmail.com (Benjamin Harding)
 */
'use strict';

goog.provide('Blockly.Kiwifroot.plugins.text');

goog.require('Blockly.Kiwifroot');


Blockly.Kiwifroot['kiwi_text_numeric_set'] = function(block) {

	var value_prop = block.getFieldValue('PROP');
	var value_inst = Blockly.Kiwifroot.valueToCode( block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC ) || null;
	var value_numeric = Blockly.Kiwifroot.valueToCode( block, 'NUMBER', Blockly.Kiwifroot.ORDER_ATOMIC ) || 0; 

	var code = errorCheck( this.workspace, ('!' + value_inst ), '`Set Text Numeric` block could not find a Instance.' );
	code += value_inst + '.' + value_prop + ' = ' + value_numeric + ';\n';
  	
  	return code;
};

Blockly.Kiwifroot['kiwi_text_colour_set'] = function(block) {

	var value_inst = Blockly.Kiwifroot.valueToCode( block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC ) || null;
	var value_colour = Blockly.Kiwifroot.valueToCode( block, 'COLOUR', Blockly.Kiwifroot.ORDER_ATOMIC ) || '#ffffff'; 

	var code = errorCheck( this.workspace, ('!' + value_inst ), '`Set Text Colour` block could not find a Instance.' );
	code += value_inst + '.color = ' + value_colour + ';\n';
  	
  	return code;
};

Blockly.Kiwifroot['kiwi_text_text_set'] = function(block) {

	var value_inst = Blockly.Kiwifroot.valueToCode( block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC ) || null;
	var value_text = Blockly.Kiwifroot.valueToCode( block, 'TEXT', Blockly.Kiwifroot.ORDER_ATOMIC ) || "''";  

	var code = errorCheck( this.workspace, ('!' + value_inst ), '`Set Text on Text` block could not find a Instance.' );
	code += value_inst + '.text = ' + value_text.replace(/\\\\n/g, "\\n") + ';\n';
  	
  	return code;
};

Blockly.Kiwifroot['kiwi_text_alignment_set'] = function(block) {

	var value_value = block.getFieldValue('VALUE');
	var value_inst = Blockly.Kiwifroot.valueToCode( block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC ) || null;

	var code = errorCheck( this.workspace, ('!' + value_inst ), '`Set Text Alignment` block could not find a Instance.' );
	code += value_inst + '.alignment = "' + value_value + '";\n';
  	
  	return code;
};

Blockly.Kiwifroot['kiwi_text_weight_set'] = function(block) {

	var value_value = block.getFieldValue('VALUE');
	var value_inst = Blockly.Kiwifroot.valueToCode( block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC ) || null;

	var code = errorCheck( this.workspace, ('!' + value_inst ), '`Set Text Weight` block could not find a Instance.' );
	code += value_inst + '.fontWeight = "' + value_value + '";\n';
  	
  	return code;
};


Blockly.Kiwifroot['kiwi_text_family_set'] = function(block) {

	var value_inst = Blockly.Kiwifroot.valueToCode( block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC ) || null;
	var value_font = Blockly.Kiwifroot.valueToCode( block, 'FAMILY', Blockly.Kiwifroot.ORDER_ATOMIC ) || 'sans-serif'; 

	var code = errorCheck( this.workspace, ('!' + value_inst ), '`Set Text Family` block could not find a Instance.' );
	code += value_inst + '.fontFamily = ' + value_font + ';\n';
  	
  	return code;
};

Blockly.Kiwifroot['kiwi_text_font_presets'] = function(block) {

	var value_font = block.getFieldValue('FONT');
	var code = '"' + value_font + '"';

	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_text_numeric_get'] = function(block) {

	var value_prop = block.getFieldValue('PROP');
	var value_inst = Blockly.Kiwifroot.valueToCode( block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC ) || 'null';

	//Property error checker!

	var code = errorCheckConditional( this.workspace, 'NotNull', value_inst, '!%1', 'this.owner', "No Instance could be found for a `get font size/max width/line height of text` block.") + '.' + value_prop;
	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_text_colour_get'] = function(block) {

	var value_inst = Blockly.Kiwifroot.valueToCode( block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC ) || 'null';

	//Property error checker!

	var code = errorCheckConditional( this.workspace, 'NotNull', value_inst, '!%1', 'this.owner', "No Instance could be found for a `get colour of text` block.") + '.color';
	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};


Blockly.Kiwifroot['kiwi_text_text_get'] = function(block) {

	var value_inst = Blockly.Kiwifroot.valueToCode( block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC ) || 'null';

	var code = errorCheckConditional( this.workspace, 'NotNull', value_inst, '!%1', 'this.owner', "No Instance could be found for a `get text of text` block.") + '.text';
	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};


Blockly.Kiwifroot['kiwi_text_create'] = function(block) {

  var value_text = Blockly.Kiwifroot.valueToCode( block, 'TEXT', Blockly.Kiwifroot.ORDER_ATOMIC ) || "''";
  var variable0 = Blockly.Kiwifroot.variableDB_.getName( block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE );

  var code  = 'this.' + variable0 + ' = this.state.objects.create( {\n';
    code += '\t"type": "multiline-text",\n';
    code += '\t"x": 0,\n';
    code += '\t"y": 0,\n';
    code += '\t"maxWidth": Infinity,\n';
    code += '\t"text": ' + value_text.replace(/\\\\n/g, "\\n") + '\n';
    code += '}, this.owner.parent, true);\n';

    return code;
};
