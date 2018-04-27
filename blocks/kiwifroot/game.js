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
 * @fileoverview Game blocks for Kiwifroot.
 * @author rani_sputnik@hotmail.com (Ryan Loader)
 */
'use strict';

goog.provide('Blockly.Blocks.Kiwifroot.game');

goog.require('Blockly.Blocks');

// A list of 'special' levels, 'Current Level', 'Previous Level' etc.
Blockly.Blocks['kiwi_game_level_special'] = {
    init:function(){
        this.setHelpUrl(Blockly.Msg.KF_GAME_LEVEL_SPECIAL_HELPURL);
        this.setColour( Blockly.Variables.COLOUR.CONTROL );
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                    ["next level", 'nextLevel']
                    ,["current level", 'currentLevel']
                    ,["previous level", 'previousLevel']
                    ,["first level", 'firstLevel']
                    ,["last level", 'lastLevel']
                ]), "LEVEL");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setTooltip(Blockly.Msg.KF_GAME_LEVEL_SPECIAL_TOOLTIP);
    }
};

// A blocks that changes the current level
Blockly.Blocks['kiwi_game_goto_level_num'] = {
    init:function(){
        this.setHelpUrl(Blockly.Msg.KF_GAME_GOTO_LEVEL_NUM_HELPURL);
        this.setColour( Blockly.Variables.COLOUR.CONTROL );
        this.appendDummyInput()
            .appendField(Blockly.Msg.KF_GAME_GOTO_LEVEL_NUM_MESSAGE);
        this.appendValueInput("LEVEL")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.KF_GAME_GOTO_LEVEL_NUM_TOOLTIP);
    }
};


Blockly.Blocks['kiwi_game_stage_get_size'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_GAME_STAGE_GET_SIZE_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.SENSING );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
            ["width","width"],
            ["height","height"]
        ]), "PROP")
        .appendField("of the stage");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.KF_GAME_STAGE_GET_SIZE_TOOLTIP);
  }
};

Blockly.Blocks['kiwi_game_stage_set_colour'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_GAME_STAGE_SET_COLOUR_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.LOOKS );
    this.appendDummyInput()
        .appendField(Blockly.Msg.KF_GAME_STAGE_SET_COLOUR_MESSAGE);
    this.appendValueInput("VALUE")
        .setCheck("Colour");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.KF_GAME_STAGE_SET_COLOUR_TOOLTIP);
  }
};

Blockly.Blocks['kiwi_game_stage_get_colour'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_GAME_STAGE_GET_COLOUR_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.LOOKS );
    this.appendDummyInput()
        .appendField(Blockly.Msg.KF_GAME_STAGE_GET_COLOUR_MESSAGE);
    this.setInputsInline(true);
    this.setOutput(true, "Colour");
    this.setTooltip(Blockly.Msg.KF_GAME_STAGE_GET_COLOUR_TOOLTIP);
  }
};

Blockly.Blocks['kiwi_game_get_time'] = {
  init: function() {

    this.setHelpUrl( Blockly.Msg.KF_GAME_GET_TIME_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.SENSING );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_GAME_GET_TIME_MESSAGE )
        .appendField(new Blockly.FieldDropdown( [
            ['elapsed', 'elapsed'], 
            ["delta", 'delta()'], 
            ["rate", "clock.rate"]
        ] ), "METHOD");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_GAME_GET_TIME_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_game_time_method'] = {
  init: function() {

    this.setHelpUrl( Blockly.Msg.KF_GAME_TIME_METHOD_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.CONTROL );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown( [["pause", "clock.pause"], ["resume", "clock.resume"]] ), "METHOD")
        .appendField( Blockly.Msg.KF_GAME_TIME_METHOD_MESSAGE );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_GAME_TIME_METHOD_TOOLTIP );
  }
};