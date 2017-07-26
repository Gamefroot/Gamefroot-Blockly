/**
 * @license
 * Visual Blocks Editor
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
 * @fileoverview Scratch blocks for Gamefroot
 * @author priyasodhi4s@gmail.com (Priya Sodhi)
 * @author ben@gamefroot.com (Ben Richards)
 */
"use strict";

goog.provide( "Blockly.Blocks.Kiwifroot.scratch" );

goog.require( "Blockly.Blocks" );

// Motion category

Blockly.Blocks[ "kiwi_scratch_motion_move_steps" ] = {
	init: function() {
		this.setHelpUrl( Blockly.Msg.KF_SCRATCH_MOVE_STEPS_HELPURL );
		this.setColour( Blockly.Variables.COLOUR.SOUND );
		this.appendDummyInput()
			.appendField( Blockly.Msg.KF_SCRATCH_MOVE_STEPS_MESSAGE_BEFORE );
		this.appendValueInput( "STEPS" )
			.setCheck( "Number" );
		this.appendDummyInput()
			.appendField( Blockly.Msg.KF_SCRATCH_MOVE_STEPS_MESSAGE_AFTER );
		this.setInputsInline( true );
		this.setPreviousStatement( true );
		this.setNextStatement( true );
		this.setTooltip( Blockly.Msg.KF_SCRATCH_MOVE_STEPS_TOOLTIP );
	}
};

Blockly.Blocks[ "kiwi_scratch_motion_turn_right_by_degree" ] = {
	init: function() {

		var workspace = Blockly.mainWorkspace || this.workspace;

		this.setHelpUrl( Blockly.Msg.KF_SCRATCH_TURN_RIGHT_BY_DEGREE_HELPURL );
		this.setColour( Blockly.Variables.COLOUR.SOUND );
		this.appendDummyInput()
			.appendField(
				Blockly.Msg.KF_SCRATCH_TURN_RIGHT_BY_DEGREE_MESSAGE_BEFORE )
			.appendField( new Blockly.FieldImage(
				workspace.options.pathToMedia + "rotate-right.png",
				20, 20, "*" ) );
		this.appendValueInput( "DEGREE" )
			.setCheck( "Number" );
		this.appendDummyInput()
			.appendField(
				Blockly.Msg.KF_SCRATCH_TURN_RIGHT_BY_DEGREE_MESSAGE_AFTER );
		this.setInputsInline( true );
		this.setPreviousStatement( true );
		this.setNextStatement( true );
		this.setTooltip( Blockly.Msg.KF_SCRATCH_TURN_RIGHT_BY_DEGREE_TOOLTIP );
	}
};

Blockly.Blocks[ "kiwi_scratch_motion_turn_left_by_degree" ] = {
	init: function() {

		var workspace = Blockly.mainWorkspace || this.workspace;

		this.setHelpUrl( Blockly.Msg.KF_SCRATCH_TURN_LEFT_BY_DEGREE_HELPURL );
		this.setColour( Blockly.Variables.COLOUR.SOUND );
		this.appendDummyInput()
			.appendField(
				Blockly.Msg.KF_SCRATCH_TURN_LEFT_BY_DEGREE_MESSAGE_BEFORE )
			.appendField( new Blockly.FieldImage(
				workspace.options.pathToMedia + "rotate-left.png",
				20, 20, "*" ) );
		this.appendValueInput( "DEGREE" )
			.setCheck( "Number" );
		this.appendDummyInput()
			.appendField(
				Blockly.Msg.KF_SCRATCH_TURN_LEFT_BY_DEGREE_MESSAGE_AFTER );
		this.setInputsInline( true );
		this.setPreviousStatement( true );
		this.setNextStatement( true );
		this.setTooltip( Blockly.Msg.KF_SCRATCH_TURN_LEFT_BY_DEGREE_TOOLTIP );
	}
};

Blockly.Blocks[ "kiwi_scratch_motion_point_direction" ] = {
	init: function() {
		this.setHelpUrl( Blockly.Msg.KF_SCRATCH_POINT_DIRECTION_HELPURL );
		this.setColour( Blockly.Variables.COLOUR.SOUND );
		this.appendDummyInput()
			.appendField( Blockly.Msg.KF_SCRATCH_POINT_DIRECTION_MESSAGE );
		this.appendValueInput( "DIRECTION" )
			.setCheck( "Number" );
		this.setInputsInline( true );
		this.setPreviousStatement( true );
		this.setNextStatement( true );
		this.setTooltip( Blockly.Msg.KF_SCRATCH_POINT_DIRECTION_TOOLTIP );
	}
};

Blockly.Blocks[ "kiwi_scratch_motion_go_to_xy" ] = {
	init: function() {
		this.setHelpUrl( Blockly.Msg.KF_SCRATCH_GO_TO_XY_HELPURL );
		this.setColour( Blockly.Variables.COLOUR.SOUND );
		this.appendDummyInput()
			.appendField( Blockly.Msg.KF_SCRATCH_GO_TO_XY_MESSAGE_ONE );
		this.appendValueInput( "X" )
			.setCheck( "Number" );
		this.appendDummyInput()
			.appendField( Blockly.Msg.KF_SCRATCH_GO_TO_XY_MESSAGE_TWO );
		this.appendValueInput( "Y" )
			.setCheck( "Number" );
		this.setInputsInline( true );
		this.setPreviousStatement( true );
		this.setNextStatement( true );
		this.setTooltip( Blockly.Msg.KF_SCRATCH_GO_TO_XY_TOOLTIP );
	}
};

// Events category

Blockly.Blocks[ "kiwi_scratch_events_wait" ] = {
	init: function() {
		this.setHelpUrl( Blockly.Msg.KF_SCRATCH_EVENTS_WAIT_HELPURL );
		this.setTooltip( Blockly.Msg.KF_SCRATCH_EVENTS_WAIT_TOOLTIP );
		this.setColour( Blockly.Variables.COLOUR.CONTROL );
		this.setInputsInline( true );
		this.setPreviousStatement( true );
		this.setNextStatement( true );

		this.appendDummyInput()
			.appendField( Blockly.Msg.KF_SCRATCH_EVENTS_WAIT_MESSAGE1 );
		this.appendValueInput( "SECS" )
			.setCheck( "Number" );
		this.appendDummyInput()
			.appendField( Blockly.Msg.KF_SCRATCH_EVENTS_WAIT_MESSAGE2 );
		this.appendStatementInput( "STACK" );
	}
};

Blockly.Blocks[ "kiwi_scratch_control_repeat_frames" ] = {
	init: function() {
		this.setHelpUrl( Blockly.Msg.KF_SCRATCH_CONTROL_REPEAT_FRAMES_HELPURL );
		this.setTooltip( Blockly.Msg.KF_SCRATCH_CONTROL_REPEAT_FRAMES_TOOLTIP );
		this.setColour( Blockly.Variables.COLOUR.CONTROL );
		this.setInputsInline( true );
		this.setPreviousStatement( true );
		this.setNextStatement( true );

		this.appendDummyInput()
			.appendField( Blockly.Msg.KF_SCRATCH_CONTROL_REPEAT_FRAMES_MESSAGE1 );
		this.appendValueInput( "TIMES" )
			.setCheck( "Number" );
		this.appendStatementInput( "STACK" );
	}
};
