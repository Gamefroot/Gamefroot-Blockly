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
 * @fileoverview Camera blocks for Gamefroot
 * @author benjamin.p.harding@gmail.com (Ben Harding)
 */
'use strict';

goog.provide('Blockly.Blocks.Kiwifroot.camera');

goog.require('Blockly.Blocks');


Blockly.Blocks['kiwi_camera_go_to'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_PAN_TO_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.LOOKS );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
        ["pan", "panTo"],
        ["snap", "snapTo"]
    ]), "METHOD");
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CAMERA_PAN_TO_MESSAGE );
    this.appendValueInput("X_POS")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("x");
    this.appendValueInput("Y_POS")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("y");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['kiwi_camera_set_speed'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_SET_SPEED_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.LOOKS );
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_CAMERA_SET_SPEED_MESSAGE );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_CAMERA_SET_SPEED_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_camera_get_speed'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_GET_SPEED_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.LOOKS );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CAMERA_GET_SPEED_MESSAGE );
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_CAMERA_GET_SPEED_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_camera_lock_on'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_LOCK_ON_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.LOOKS );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CAMERA_LOCK_ON_MESSAGE );
    this.appendValueInput("INSTANCE")
        .setCheck("Instance");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_CAMERA_LOCK_ON_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_camera_unlock'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_UNLOCK_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.LOOKS );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CAMERA_UNLOCK_MESSAGE );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_CAMERA_UNLOCK_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_camera_state'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_STATE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.LOOKS );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CAMERA_STATE_MESSAGE )
        .appendField(new Blockly.FieldDropdown( [
            ["locked", "locked"], 
            ["panning", "panning"]
        ] ), "TYPE");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip( Blockly.Msg.KF_CAMERA_STATE_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_camera_scale'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_SCALE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.LOOKS );
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_CAMERA_SCALE_MESSAGE )
        .appendField(new Blockly.FieldDropdown([
            ["x", "scaleX"], 
            ["y", "scaleY"]
        ]), "PROP");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_CAMERA_SCALE_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_camera_scale_get'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_SCALE_GET_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.LOOKS );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CAMERA_SCALE_GET_MESSAGE )
        .appendField(new Blockly.FieldDropdown([
            ["x", "scaleX"], 
            ["y", "scaleY"]
        ]), "PROP");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_CAMERA_SCALE_GET_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_camera_center_on_instance'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_CENTER_ON_INSTANCE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.LOOKS );
    this.appendValueInput("INSTANCE")
        .setCheck("Instance")
        .appendField( Blockly.Msg.KF_CAMERA_CENTER_ON_INSTANCE_MESSAGE );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_CAMERA_CENTER_ON_INSTANCE_TOOLTIP );
  }
};

// 22/10/2015


Blockly.Blocks['kiwi_camera_get_read_only_position'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_GET_READ_ONLY_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.LOOKS );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CAMERA_GET_READ_ONLY_MESSAGE );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown( [
            ["x", "x"],
            ["y", "y"]
        ] ), "METHOD");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_CAMERA_GET_READ_ONLY_TOOLTIP );
  }
};
Blockly.Blocks['kiwi_camera_get_read_only_dimensions'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_GET_READ_ONLY_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.LOOKS );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CAMERA_GET_READ_ONLY_MESSAGE );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown( [
            ["width", "camera.width"],
            ["height", "camera.height"]
        ] ), "METHOD");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_CAMERA_GET_READ_ONLY_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_camera_set_offset'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_SET_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.LOOKS );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CAMERA_SET_MESSAGE_BEFORE );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown( [ 
            ["x", "offset.x"], 
            ["y", "offset.y"]
        ] ), "METHOD")
        .appendField( 'offset ' + Blockly.Msg.KF_CAMERA_SET_MESSAGE_AFTER );
    this.appendValueInput("VALUE")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_CAMERA_SET_TOOLTIP );
  }
};
Blockly.Blocks['kiwi_camera_set_min'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_SET_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.LOOKS );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CAMERA_SET_MESSAGE_BEFORE );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown( [ 
            ["x", "minX"], 
            ["y", "minY"]
        ] ), "METHOD")
        .appendField( 'minimum ' + Blockly.Msg.KF_CAMERA_SET_MESSAGE_AFTER );
    this.appendValueInput("VALUE")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_CAMERA_SET_TOOLTIP );
  }
};
Blockly.Blocks['kiwi_camera_set_max'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_SET_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.LOOKS );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CAMERA_SET_MESSAGE_BEFORE );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown( [ 
            ["x", "maxX"], 
            ["y", "maxY"]
        ] ), "METHOD")
        .appendField( 'maximum ' + Blockly.Msg.KF_CAMERA_SET_MESSAGE_AFTER );
    this.appendValueInput("VALUE")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_CAMERA_SET_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_camera_get_offset'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_GET_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.LOOKS );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CAMERA_GET_MESSAGE );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown( [
            ["x offset", "offset.x"], 
            ["y offset", "offset.y"]
        ] ), "METHOD");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_CAMERA_GET_TOOLTIP );
  }
};
Blockly.Blocks['kiwi_camera_get_min'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_GET_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.LOOKS );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CAMERA_GET_MESSAGE );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown( [
            ["x minimum", "minX"], 
            ["y minimum", "minY"]
        ] ), "METHOD");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_CAMERA_GET_TOOLTIP );
  }
};
Blockly.Blocks['kiwi_camera_get_max'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_GET_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.LOOKS );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CAMERA_GET_MESSAGE );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown( [
            ["x maximum", "maxX"], 
            ["y maximum", "maxY"]
        ] ), "METHOD");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_CAMERA_GET_TOOLTIP );
  }
};

// Shake the camera using offset values...
Blockly.Blocks[ "kiwi_camera_shake_offset" ] = {
    init: function() {
        this.setHelpUrl( Blockly.Msg.KIWI_CAMERA_SHAKE_OFFSET_HELPURL );
        this.setTooltip( Blockly.Msg.KIWI_CAMERA_SHAKE_OFFSET_TOOLTIP );
        this.setColour( Blockly.Variables.COLOUR.LOOKS );
        this.setInputsInline( true );
        this.setPreviousStatement( true );
        this.setNextStatement( true );

        this.appendDummyInput()
            .appendField( new Blockly.FieldDropdown( [
                [ "Vertically", "y" ],
                [ "Horizontally", "x" ]
            ] ), "AXIS" );
        this.appendDummyInput()
            .appendField( Blockly.Msg.KIWI_CAMERA_SHAKE_OFFSET_MESSAGE1 );
        this.appendValueInput( "AMPLITUDE" )
            .setCheck( "Number" );
        this.appendDummyInput()
            .appendField( Blockly.Msg.KIWI_CAMERA_SHAKE_OFFSET_MESSAGE_AMP );
        this.appendValueInput( "DURATION" )
            .setCheck( "Number" );
        this.appendDummyInput()
            .appendField( Blockly.Msg.KIWI_CAMERA_SHAKE_OFFSET_MESSAGE_DUR );
    }
};
