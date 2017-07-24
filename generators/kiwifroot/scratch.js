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
 * @fileoverview Generating Kiwifroot javascript for all scratch functions
 * @author priyasodhi4s@gmail.com (Priya Sodhi)
 * @author benjamin.p.harding@gmail.com (Ben Harding)
 */
"use strict";

goog.provide( "Blockly.Kiwifroot.scratch" );

goog.require( "Blockly.Kiwifroot" );

// Motion category

Blockly.Kiwifroot[ "kiwi_scratch_motion_move_steps" ] = function( block ) {

	var val = Blockly.Kiwifroot.valueToCode(
			block, "STEPS", Blockly.Kiwifroot.ORDER_ATOMIC ) || 0;
	var code = "";
	code += "this.owner.x += Math.cos( this.owner.rotation ) * " + val;
	code += ";\n";
	code += "this.owner.y += Math.sin( this.owner.rotation ) * " + val;
	code += ";\n";
	return code;
};

Blockly.Kiwifroot[ "kiwi_scratch_motion_turn_right_by_degree" ] =
function( block ) {

	var val = Blockly.Kiwifroot.valueToCode(
			block, "DEGREE", Blockly.Kiwifroot.ORDER_ATOMIC ) || 0;
	var code = "";
	code += "this.owner.rotation += ( " + val +
		" ) * Kiwi.Utils.GameMath.DEG_TO_RAD";
	code += ";\n";
	return code;
};

Blockly.Kiwifroot[ "kiwi_scratch_motion_turn_left_by_degree" ] =
function( block ) {

	var val = Blockly.Kiwifroot.valueToCode(
			block, "DEGREE", Blockly.Kiwifroot.ORDER_ATOMIC ) || 0;
	var code = "";
	code += "this.owner.rotation -= ( " + val +
		" ) *Kiwi.Utils.GameMath.DEG_TO_RAD";
	return code;
};

Blockly.Kiwifroot[ "kiwi_scratch_motion_point_direction" ] =
function( block ) {

	var val = Blockly.Kiwifroot.valueToCode(
			block, "DIRECTION", Blockly.Kiwifroot.ORDER_ATOMIC ) || 0;
	var code = "";
	code += "this.owner.rotation = ( " + val +
		" ) * Kiwi.Utils.GameMath.DEG_TO_RAD";
	code +=";\n";
	return code;
};

Blockly.Kiwifroot[ "kiwi_scratch_motion_go_to_xy" ] = function( block ) {

	var val_x = Blockly.Kiwifroot.valueToCode(
			block, "X", Blockly.Kiwifroot.ORDER_ATOMIC ) || 0;
	var val_y = Blockly.Kiwifroot.valueToCode(
			block, "Y", Blockly.Kiwifroot.ORDER_ATOMIC ) || 0;
	var code = "";
	code += "this.owner.x = " + val_x;
	code += ";\n";
	code += "this.owner.y = " + val_y;
	code += ";\n";
	return code;
};
