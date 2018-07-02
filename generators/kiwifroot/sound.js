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
 * @fileoverview Generating Kiwifroot javascript for all sound functions
 * @author rani_sputnik@hotmail.com
 */
'use strict';

goog.provide('Blockly.Kiwifroot.sound');

goog.require('Blockly.Kiwifroot');


Blockly.Kiwifroot.sound.COMPONENT_PREFIX = 'this.state.sounds';


Blockly.Kiwifroot['kiwi_sound'] = function(block) {
    var code = block.getFieldValue('SOUND');
    return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_sound_play_background'] = function(block) {
    var val = Blockly.Kiwifroot.valueToCode(block, 'SOUND', Blockly.Kiwifroot.ORDER_ATOMIC) || "-1";
    console.log(val);
    return Blockly.Kiwifroot.sound.COMPONENT_PREFIX + '.playBackgroundTrack('+val+');\n';
};

Blockly.Kiwifroot['kiwi_sound_stop_background'] = function(block) {
    return Blockly.Kiwifroot.sound.COMPONENT_PREFIX + '.stopBackgroundTrack();\n';
};

Blockly.Kiwifroot['kiwi_sound_play_effect'] = function(block) {
    var val = Blockly.Kiwifroot.valueToCode(block, 'SOUND', Blockly.Kiwifroot.ORDER_ATOMIC) || "-1";
    return Blockly.Kiwifroot.sound.COMPONENT_PREFIX + '.playSoundEffect('+val+');\n';
};

Blockly.Kiwifroot['kiwi_sound_background_state'] = function(block) {
  	var dropdown_method = block.getFieldValue('METHOD');
  	var code = Blockly.Kiwifroot.sound.COMPONENT_PREFIX + '.' + dropdown_method + ';\n';
  	return code;
};

Blockly.Kiwifroot['kiwi_sound_set_mute'] = function(block) {
		var value_state = Blockly.Kiwifroot.valueToCode(block, 'STATE', Blockly.Kiwifroot.ORDER_ATOMIC) || false;
		var dropdown_prop = block.getFieldValue('PROP');

		var code = Blockly.Kiwifroot.sound.COMPONENT_PREFIX + '.' + dropdown_prop + ' = ' + value_state + ';\n';
		return code;
};

Blockly.Kiwifroot['kiwi_sound_get_mute'] = function(block) {
		var dropdown_prop = block.getFieldValue('PROP');

		var code = Blockly.Kiwifroot.sound.COMPONENT_PREFIX + '.' + dropdown_prop;
		return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_sound_get_volume'] = function(block) {
  	// TODO: Assemble JavaScript into code variable.
  	var code = '(this.game.audio.volume * 100)';
  	// TODO: Change ORDER_NONE to the correct strength.
  	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_sound_set_volume'] = function(block) {
		var value_volume = Blockly.Kiwifroot.valueToCode(block, 'VOLUME', Blockly.Kiwifroot.ORDER_ATOMIC) || 100;

		var code = 'this.game.audio.volume = (' + value_volume + '/ 100 )\n';
	 	return code;
};
