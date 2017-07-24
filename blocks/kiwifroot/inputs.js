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
 * @fileoverview Keyboard key blocks for Kiwifroot.
 * @author rani_sputnik@hotmail.com (Ryan Loader)
 */
'use strict';

goog.provide('Blockly.Blocks.Kiwifroot.keys');

goog.require('Blockly.Blocks');


Blockly.Blocks['kiwi_key_special'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_KEY_SPECIAL_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.SENSING );
    this.appendDummyInput()
      .appendField( new Blockly.FieldDropdown( [
        [ "backspace/delete", "8" ],
        [ "tab", "9" ],
        [ "enter", "13" ],
        [ "shift", "16" ],
        [ "ctrl", "17" ],
        [ "alt", "18" ],
        [ "pause/break", "19" ],
        [ "caps lock", "20" ],
        [ "escape", "27" ],
        [ "spacebar", "32" ],
        [ "page up", "33" ],
        [ "page down", "34" ],
        [ "end", "35" ],
        [ "home", "36" ],
        [ "left arrow", "37" ],
        [ "up arrow", "38" ],
        [ "right arrow", "39" ],
        [ "down arrow", "40" ],
        [ "insert", "45" ],
        [ "delete", "46" ],
        [ "0", "48" ],
        [ "1", "49" ],
        [ "2", "50" ],
        [ "3", "51" ],
        [ "4", "52" ],
        [ "5", "53" ],
        [ "6", "54" ],
        [ "7", "55" ],
        [ "8", "56" ],
        [ "9", "57" ],
        [ "a", "65" ],
        [ "b", "66" ],
        [ "c", "67" ],
        [ "d", "68" ],
        [ "e", "69" ],
        [ "f", "70" ],
        [ "g", "71" ],
        [ "h", "72" ],
        [ "i", "73" ],
        [ "j", "74" ],
        [ "k", "75" ],
        [ "l", "76" ],
        [ "m", "77" ],
        [ "n", "78" ],
        [ "o", "79" ],
        [ "p", "80" ],
        [ "q", "81" ],
        [ "r", "82" ],
        [ "s", "83" ],
        [ "t", "84" ],
        [ "u", "85" ],
        [ "v", "86" ],
        [ "w", "87" ],
        [ "x", "88" ],
        [ "y", "89" ],
        [ "z", "90" ],
        [ "left meta", "91" ],
        [ "right meta", "92" ],
        [ "select", "93" ],
        [ "numpad 0", "96" ],
        [ "numpad 1", "97" ],
        [ "numpad 2", "98" ],
        [ "numpad 3", "99" ],
        [ "numpad 4", "100" ],
        [ "numpad 5", "101" ],
        [ "numpad 6", "102" ],
        [ "numpad 7", "103" ],
        [ "numpad 8", "104" ],
        [ "numpad 9", "105" ],
        [ "multiply", "106" ],
        [ "add", "107" ],
        [ "subtract", "109" ],
        [ "decimal point", "110" ],
        [ "divide", "111" ],
        [ "f1", "112" ],
        [ "f2", "113" ],
        [ "f3", "114" ],
        [ "f4", "115" ],
        [ "f5", "116" ],
        [ "f6", "117" ],
        [ "f7", "118" ],
        [ "f8", "119" ],
        [ "f9", "120" ],
        [ "f10", "121" ],
        [ "f11", "122" ],
        [ "f12", "123" ],
        [ "num lock", "144" ],
        [ "scroll lock", "145" ],
        [ "semicolon", "186" ],
        [ "equal sign", "187" ],
        [ "comma", "188" ],
        [ "dash", "189" ],
        [ "period", "190" ],
        [ "slash", "191" ],
        [ "grave accent/tilde", "192" ],
        [ "open bracket", "219" ],
        [ "backslash", "220" ],
        [ "close bracket", "221" ],
        [ "quote", "222" ],
      ] ), "KEY" );
    this.setOutput( true, "Number" );
    this.setTooltip( Blockly.Msg.KF_KEY_SPECIAL_TOOLTIP );
  }
};

Blockly.Blocks[ "kiwi_input_key_down" ] = {
    init: function() {
        this.setHelpUrl( Blockly.Msg.KF_INPUT_KEY_DOWN_HELPURL );
        this.setTooltip( Blockly.Msg.KF_INPUT_KEY_DOWN_TOOLTIP );
        this.setColour( Blockly.Variables.COLOUR.SENSING );
        this.setOutput( true, "Boolean" );
        this.setInputsInline( true );

        this.appendValueInput( "KEY" )
            .setCheck( "Number" )
            .appendField( Blockly.Msg.KF_INPUT_KEY_DOWN_MESSAGE1 );
        this.appendDummyInput()
            .appendField( Blockly.Msg.KF_INPUT_KEY_DOWN_MESSAGE2 );
    }
};

Blockly.Blocks['kiwi_input_mouse'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_INPUT_MOUSE_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.SENSING );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
            ["x position", "x"]
            ,["y position", "y"]
        ]), "AXIS")
        .appendField(Blockly.Msg.KF_INPUT_MOUSE_MESSAGE);
        // TODO add other key codes
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.KF_INPUT_MOUSE_TOOLTIP);
  }
};

Blockly.Blocks['kiwi_input_fingers'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_INPUT_FINGERS_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.SENSING );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_INPUT_FINGERS_MESSAGE );
    this.setOutput(true, "Array");
    this.setTooltip( Blockly.Msg.KF_INPUT_FINGERS_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_input_finger_select'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_INPUT_FINGER_SELECT_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.SENSING );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_INPUT_FINGER_SELECT_MESSAGE )
        .appendField(new Blockly.FieldDropdown([
            ["1", "1"], 
            ["2", "2"], 
            ["3", "3"], 
            ["4", "4"], 
            ["5", "5"], 
            ["6", "6"], 
            ["7", "7"], 
            ["8", "8"], 
            ["9", "9"], 
            ["10", "10"]
        ]), "NUMBER");
    this.setOutput(true, "Pointer");
    this.setTooltip( Blockly.Msg.KF_INPUT_FINGER_SELECT_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_input_finger_get_coords'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_INPUT_FINGER_GET_COORDS_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.SENSING );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
            ["x", "x"], 
            ["y", "y"], 
            ["startX", "startPoint.x"], 
            ["startY", "startPoint.y"], 
            ["endX", "endPoint.x"], 
            ["endY", "endPoint.y"]
        ]), "PROP")
        .appendField(Blockly.Msg.KF_INPUT_FINGER_GET_COORDS_MESSAGE);
    this.appendValueInput("POINTER")
        .setCheck("Pointer");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_INPUT_FINGER_GET_COORDS_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_input_finger_get_bool'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_INPUT_FINGER_GET_BOOL_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.SENSING );
    this.appendValueInput("POINTER")
        .setCheck("Pointer");
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_INPUT_FINGER_GET_BOOL_MESSAGE )
        .appendField(new Blockly.FieldDropdown([
            ["active", "active"], 
            ["down", "isDown"], 
            ["up", "isUp"]
        ]), "PROP");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip( Blockly.Msg.KF_INPUT_FINGER_GET_BOOL_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_input_finger_get_times'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_INPUT_FINGER_GET_TIMES_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.SENSING );
    this.appendDummyInput()
        .appendField( new Blockly.FieldDropdown([
            ["duration", "duration"], 
            ["time down", "timeDown"], 
            ["time up", "timeUp"],
            ["id", "id"]
        ]), "PROP")
        .appendField( Blockly.Msg.KF_INPUT_FINGER_GET_TIMES_MESSAGE );
    this.appendValueInput("POINTER")
        .setCheck("Pointer");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_INPUT_FINGER_GET_TIMES_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_input_finger_latest'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_INPUT_FINGER_LATEST_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.SENSING );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_INPUT_FINGER_LATEST_MESSAGE );
    this.setInputsInline(true);
    this.setOutput(true, "Pointer");
    this.setTooltip( Blockly.Msg.KF_INPUT_FINGER_LATEST_TOOLTIP );
  }
};