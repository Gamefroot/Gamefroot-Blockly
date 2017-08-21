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
 * @fileoverview Generating Kiwifroot Javascript for primitives
 * @author benjamin.p.harding@gmail.com (Benjamin Harding)
 */
'use strict';

goog.provide('Blockly.Kiwifroot.plugins.primitives');

goog.require('Blockly.Kiwifroot');


Blockly.Kiwifroot['kiwi_primitives_change_colour'] = function(block) {

	var value_inst = Blockly.Kiwifroot.valueToCode( block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC ) || null;
	var value_colour = Blockly.Kiwifroot.valueToCode( block, 'COLOUR', Blockly.Kiwifroot.ORDER_ATOMIC ) || "#000000";

	var code = errorCheck( this.workspace, ('!' + value_inst ), '`Primitive set colour` block could not find a Instance.' );
		code += 'var inst = ' + value_inst + ';\n';
		code += 'if( inst._color && inst._strokeColor ) {\n';
		code += '\tvar color = ' + value_colour + ';\n';
		code += '\tinst._color.set( color );\n';
		code += '\tinst._strokeColor.set( color );\n';
		code += '}\n';
	
	return code;
};

Blockly.Kiwifroot['kiwi_primitives_get_colour'] = function(block) {

	var value_inst = Blockly.Kiwifroot.valueToCode( block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC ) || null;

	var funcName = Blockly.Kiwifroot.provideFunction_(
	'getColorOfPrimitive',
	[ Blockly.Kiwifroot.FUNCTION_NAME_PLACEHOLDER_ + ' = function( instance ) {',
		Blockly.Kiwifroot.INDENT + errorCheck( this.workspace, ('!instance' ), '`Primitive get colour` block could not find a Instance.' ),
		Blockly.Kiwifroot.INDENT + '//Returns the colour of a primitive passed.',
		Blockly.Kiwifroot.INDENT + "//If the primitive doesn't have a colour, then #ffffff will be returned.",
		Blockly.Kiwifroot.INDENT + 'if( instance._color ) {',
		Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT + 'return "#" + instance._color.getHex();',
		Blockly.Kiwifroot.INDENT + '}',
		Blockly.Kiwifroot.INDENT + 'return "#ffffff";',
		'};']);

	var code = 'this.' + funcName + '(' + value_inst + ')';

	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};


Blockly.Kiwifroot['kiwi_primitives_create_rectangle'] = function(block) {

	var value_width = Blockly.Kiwifroot.valueToCode( block, 'WIDTH', Blockly.Kiwifroot.ORDER_ATOMIC ) || 0;
	var value_height = Blockly.Kiwifroot.valueToCode( block, 'HEIGHT', Blockly.Kiwifroot.ORDER_ATOMIC ) || 0;
	var variable0 = Blockly.Kiwifroot.variableDB_.getName( block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE );

	var code  = 'this.' + variable0 + ' = this.state.objects.create( {\n';
		code += '\t"type": "rectangle",\n';
		code += '\t"x": 0,\n';
		code += '\t"y": 0,\n';
		code += '\t"width": ' + value_width + ',\n';
		code += '\t"height": ' + value_height + '\n';
		code += '}, this.owner.parent, true);\n';

	return code;
};

Blockly.Kiwifroot['kiwi_primitives_create_circle'] = function(block) {

	var value_radius = Blockly.Kiwifroot.valueToCode( block, 'RADIUS', Blockly.Kiwifroot.ORDER_ATOMIC ) || 0;
	var variable0 = Blockly.Kiwifroot.variableDB_.getName( block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE );

	var code  = 'this.' + variable0 + ' = this.state.objects.create( {\n';
		code += '\t"type": "ellipse",\n';
		code += '\t"x": 0,\n';
		code += '\t"y": 0,\n';
		code += '\t"radius": ' + value_radius + '\n';
		code += '}, this.owner.parent, true);\n';

	return code;
};

Blockly.Kiwifroot['kiwi_primitives_create_line'] = function(block) {

	var value_x = Blockly.Kiwifroot.valueToCode( block, 'X', Blockly.Kiwifroot.ORDER_ATOMIC ) || 0;
	var value_y = Blockly.Kiwifroot.valueToCode( block, 'Y', Blockly.Kiwifroot.ORDER_ATOMIC ) || 0;

	var value_width = Blockly.Kiwifroot.valueToCode( block, 'WIDTH', Blockly.Kiwifroot.ORDER_ATOMIC );

	var variable0 = Blockly.Kiwifroot.variableDB_.getName( block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE );

	var code  = 'this.' + variable0 + ' = this.state.objects.create( {\n';
		code += '\t"type": "line",\n';
		code += '\t"x": 0,\n';
		code += '\t"y": 0,\n';
		code += '\t"strokeWidth": ' + value_width + ',\n';
		code += '\t"points": [\n';
		code += '\t\t[0, 0],\n';
		code += '\t\t[' + value_x + ', ' + value_y + ']\n';
		code += '\t]\n';
		code += '}, this.owner.parent, true);\n';

	return code;
};

Blockly.Kiwifroot['kiwi_primitives_create_star'] = function(block) {

	var value_radius = Blockly.Kiwifroot.valueToCode( block, 'RADIUS', Blockly.Kiwifroot.ORDER_ATOMIC ) || 0;
	var value_points = Blockly.Kiwifroot.valueToCode( block, 'POINTS', Blockly.Kiwifroot.ORDER_ATOMIC ) || 0;

	var variable0 = Blockly.Kiwifroot.variableDB_.getName( block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE );

	var code  = 'this.' + variable0 + ' = this.state.objects.create( {\n';
		code += '\t"type": "star",\n';
		code += '\t"x": 0,\n';
		code += '\t"y": 0,\n';
		code += '\t"radius": ' + value_radius + ',\n';
		code += '\t"segments": '+ value_points +',\n';
		code += '\t"spikeRandom": 0,\n';
		code += '\t"spikeLength": 1,\n';
		code += '}, this.owner.parent, true);\n';

	return code;
};

Blockly.Kiwifroot['kiwi_primitives_create_polygon'] = function(block) {

	var value_radius = Blockly.Kiwifroot.valueToCode( block, 'RADIUS', Blockly.Kiwifroot.ORDER_ATOMIC ) || 0;
	var value_edges = Blockly.Kiwifroot.valueToCode( block, 'NUM_EDGES', Blockly.Kiwifroot.ORDER_ATOMIC ) || 0;
	var variable0 = Blockly.Kiwifroot.variableDB_.getName( block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE );

	var code  = 'this.' + variable0 + ' = this.state.objects.create( {\n';
		code += '\t"type": "ellipse",\n';
		code += '\t"x": 0,\n';
		code += '\t"y": 0,\n';
		code += '\t"segments": ' + value_edges + ',\n';
		code += '\t"radius": ' + value_radius + '\n';
		code += '}, this.owner.parent, true);\n';

	return code;
};
