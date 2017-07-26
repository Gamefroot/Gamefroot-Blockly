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
 * @author ben@gamefroot.com (Ben Richards)
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

// Events category

Blockly.Kiwifroot[ "kiwi_scratch_events_wait" ] = function( block ) {

	// Functionality copied from `kiwi_event_time_single`,
	// except this takes seconds instead of millis.

	var funcName = Blockly.Kiwifroot.variableDB_.getDistinctName(
			"wait", Blockly.Procedures.NAME_TYPE );
	var branch = Blockly.Kiwifroot.statementToCode( block, "STACK" );
	var tick = Blockly.Kiwifroot.valueToCode(
		block, "SECS", Blockly.Kiwifroot.ORDER_ASSIGNMENT ) || 1;
	var code = "";
	var destructorCode = "";

	code += errorCheck(
			this.workspace,
			( "!" + tick ),
			"`Wait` block is missing a numeric value." ) +
		"this." + funcName + "_ = " +
		"this.game.time.clock.setTimeout( function() {\n" +
		Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT +
		"if ( this.owner && this.owner.exists ) {\n" +
		Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT +
		branch +
		Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT +
		"}\n" +
		Blockly.Kiwifroot.INDENT + "}, " + tick + " * 1000, this );\n";

	destructorCode +=
		"if ( this." + funcName + "_ ) this." + funcName + "_.stop();\n" +
		"this.game.time.clock.removeTimer( this." + funcName + "_ );";

	Blockly.Kiwifroot.provideAddition(
		Blockly.Kiwifroot.DESTRUCTOR, destructorCode );

	return code;
};

Blockly.Kiwifroot[ "kiwi_scratch_control_repeat_frames" ] = function( block ) {

	var branch = Blockly.Kiwifroot.statementToCode( block, "STACK" );
	var countdown = Blockly.Kiwifroot.valueToCode(
			block, "TIMES", Blockly.Kiwifroot.ORDER_ASSIGNMENT ) || 1;
	var code = "";

	// Check countdown
	code += errorCheck(
		this.workspace,
		( countdown + " < 1" ),
		"`Repeat frames` block is missing a frame count." );
	var countdownProp = Blockly.Kiwifroot.variableDB_.getDistinctName(
			"countdownProp", Blockly.Variables.NAME_TYPE );

	// Create unique component
	var componentName = Blockly.Kiwifroot.variableDB_.getDistinctName(
			"component", Blockly.Procedures.NAME_TYPE );
	code += "var " + componentName + " = new Kiwi.Component( this.owner, \"" +
		componentName + "\" );\n";

	// Generate unique callback
	var funcName = Blockly.Kiwifroot.variableDB_.getDistinctName(
			"componentUpdate", Blockly.Procedures.NAME_TYPE );
	code += "var " + funcName + " = function() {\n" +
		branch + "\n" +
		Blockly.Kiwifroot.INDENT +
		"if ( this." + countdownProp + " > 0 ) {\n" +
		Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT +
		"this." + countdownProp + "--;\n" +
		Blockly.Kiwifroot.INDENT + "} else {\n" +
		Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT +
		"this.owner.components.removeComponent( " + componentName + " );\n" +
		Blockly.Kiwifroot.INDENT + "}\n" +
		"};\n";

	// Assign update to component
	code += componentName + ".update = " + funcName + ".bind( this );\n";

	// Add countdown data to component
	code += "this." + countdownProp + " = " + countdown + ";\n";

	// Assign component to owner
	code += "this.owner.components.add( " + componentName + " );\n";

	// Update once
	code += componentName + ".update();\n";

	return code;
};
