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
 * @fileoverview Sound blocks for Gamefroot
 * @author rani_sputnik@hotmail.com (Ryan Loader)
 * @author benjamin.p.harding@gmail.com (Ben Harding)
 */
'use strict';

goog.provide('Blockly.Blocks.Kiwifroot.sound');

goog.require('Blockly.Blocks');

// @deprecated DO NOT USE
Blockly.Blocks['kiwi_sound'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_SOUND_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.SOUND );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Kiwifroot.sounds_), "SOUND");
    this.setOutput(true, "Sound");
    this.setTooltip(Blockly.Msg.KF_SOUND_TOOLTIP);
  }
};

Blockly.Blocks['kiwi_sound_play_background'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_SOUND_PLAY_BACKGROUND_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.SOUND );
    this.appendDummyInput()
    	.appendField(Blockly.Msg.KF_SOUND_PLAY_BACKGROUND_MESSAGE)
    this.appendValueInput("SOUND")
        .setCheck("Sound");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.KF_SOUND_PLAY_BACKGROUND_TOOLTIP);
  }
};

Blockly.Blocks['kiwi_sound_stop_background'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_SOUND_STOP_BACKGROUND_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.SOUND );
    this.appendDummyInput()
        .appendField(Blockly.Msg.KF_SOUND_STOP_BACKGROUND_MESSAGE);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.KF_SOUND_STOP_BACKGROUND_TOOLTIP);
  }
};

Blockly.Blocks['kiwi_sound_play_effect'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_SOUND_PLAY_EFFECT_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.SOUND );
    this.appendDummyInput()
        .appendField(Blockly.Msg.KF_SOUND_PLAY_EFFECT_MESSAGE)
    this.appendValueInput("SOUND")
        .setCheck("Sound");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.KF_SOUND_PLAY_EFFECT_TOOLTIP);
  }
};


Blockly.Blocks['kiwi_sound_background_state'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_SOUND_BACKGROUND_STATE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.SOUND );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
            ["pause", "pauseBackgroundTrack()"],
            ["resume", "resumeBackgroundTrack()"]
        ]), "METHOD")
        .appendField( Blockly.Msg.KF_SOUND_BACKGROUND_STATE_MESSAGE );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_SOUND_BACKGROUND_STATE_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_sound_set_mute'] = {
    init: function() {
        this.setHelpUrl( Blockly.Msg.KF_SOUND_SET_MUTE_HELPURL );
        this.setColour( Blockly.Variables.COLOUR.SOUND );
        this.appendValueInput("STATE")
            .setCheck("Boolean")
            .appendField( Blockly.Msg.KF_SOUND_SET_MUTE_MESSAGE )
            .appendField(new Blockly.FieldDropdown([
                ["music", "muteBackground"],
                ["effects", "muteEffects"]
            ]), "PROP");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip( Blockly.Msg.KF_SOUND_SET_MUTE_TOOLTIP );
    }
};

Blockly.Blocks['kiwi_sound_get_mute'] = {
    init: function() {
        this.setHelpUrl( Blockly.Msg.KF_SOUND_GET_MUTE_HELPURL );
        this.setColour( Blockly.Variables.COLOUR.SOUND );
        this.appendDummyInput()
            .appendField( Blockly.Msg.KF_SOUND_GET_MUTE_MESSAGE )
            .appendField(new Blockly.FieldDropdown([
                ["music", "muteBackground"],
                ["effects", "muteEffects"]
            ]), "PROP");
        this.setOutput(true, "Boolean");
        this.setTooltip( Blockly.Msg.KF_SOUND_GET_MUTE_TOOLTIP );
    }
};

Blockly.Blocks['kiwi_sound_get_volume'] = {
    init: function() {
        this.setHelpUrl( Blockly.Msg.KF_SOUND_GET_VOLUME_HELPURL );
        this.setColour( Blockly.Variables.COLOUR.SOUND );
        this.appendDummyInput()
            .appendField( Blockly.Msg.KF_SOUND_GET_VOLUME_MESSAGE );
        this.setOutput(true, "Number");
        this.setTooltip( Blockly.Msg.KF_SOUND_GET_VOLUME_TOOLTIP );
    }
};

Blockly.Blocks['kiwi_sound_set_volume'] = {
    init: function() {
        this.setHelpUrl( Blockly.Msg.KF_SOUND_SET_VOLUME_HELPURL );
        this.setColour( Blockly.Variables.COLOUR.SOUND );
        this.appendValueInput("VOLUME")
            .setCheck("Number")
            .appendField( Blockly.Msg.KF_SOUND_SET_VOLUME_MESSAGE );
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip( Blockly.Msg.KF_SOUND_SET_VOLUME_TOOLTIP );
    }
};
