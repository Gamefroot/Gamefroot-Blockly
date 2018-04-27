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
 * @fileoverview Generating Kiwifroot Javascript for all game blocks. Game
 * blocks include states, state changes (levels), anything with the games
 * properties like target platform and stage size.
 * @author rani_sputnik@hotmail.com (Ryan Loader)
 */
'use strict';

goog.provide('Blockly.Kiwifroot.game');

goog.require('Blockly.Kiwifroot');

Blockly.Kiwifroot['kiwi_game_level_special'] = function(block) {
	var level = block.getFieldValue('LEVEL');
	switch (level) {
		case 'currentLevel': 
			return ['this.game.info.currentLevelNumber'
					,Blockly.Kiwifroot.ORDER_ATOMIC];
        case 'previousLevel': 
        	return ['this.game.info.currentLevelNumber - 1'
        			,Blockly.Kiwifroot.ORDER_SUBTRACTION];
        case 'nextLevel': 
        	return ['this.game.info.currentLevelNumber + 1'
        			,Blockly.Kiwifroot.ORDER_ADDITION];
        case 'firstLevel': 
        	return ['0',Blockly.Kiwifroot.ORDER_ATOMIC];
        case 'lastLevel': 
        	return ['this.game.info.numLevels - 1'
        			,Blockly.Kiwifroot.ORDER_SUBTRACTION];
	}
};

Blockly.Kiwifroot['kiwi_game_goto_level_num'] = function(block) {
	var levelNum = Blockly.Kiwifroot.valueToCode(block, 'LEVEL', Blockly.Kiwifroot.ORDER_ATOMIC) || '(null)';
	return 'this.game.info.switchLevelByNumber('+levelNum+');\n';
};

Blockly.Kiwifroot['kiwi_game_stage_get_size'] = function(block) {
	var prop = block.getFieldValue('PROP');
	var code = 'this.game.stage.' + prop;
	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_game_stage_set_colour'] = function(block) {
	var val = Blockly.Kiwifroot.valueToCode(block, 'VALUE', Blockly.Kiwifroot.ORDER_ASSIGNMENT) || '#000000';
  //var code = errorCheck( this.workspace, ('typeof ' + val + ' !== "string"' ), '`Stage Set Colour` block requires colours passed as Text.' );
	//code += 'this.game.stage.color = ('+val+').slice(1);\n';
  var code = 'this.game.stage.color = ('+val+').slice(1);\n';

  return code;
};

Blockly.Kiwifroot['kiwi_game_stage_get_colour'] = function(block) {
	var code = '"#" + this.game.stage.color';
	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_game_get_time'] = function(block) {

  	var dropdown_method = block.getFieldValue('METHOD');

  	if( dropdown_method === 'elapsed') {
  		var code = '(this.game.time.clock.elapsed() * this.game.time.clock.units)';
  	} else {
  		var code = 'this.game.time.' + dropdown_method;
  	}

  	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_game_time_method'] = function(block) {
  var dropdown_method = block.getFieldValue('METHOD');
  var code = 'this.game.time.' + dropdown_method + '();\n';
  return code;
};