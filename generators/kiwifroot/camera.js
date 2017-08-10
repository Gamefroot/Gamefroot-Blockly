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
 * @fileoverview Generating Kiwifroot javascript for all camera functions
 * @author benjamin.p.harding@gmail.com
 */
'use strict';

goog.provide('Blockly.Kiwifroot.camera');

goog.require('Blockly.Kiwifroot');


Blockly.Kiwifroot.camera.COMPONENT_PREFIX  = 'this.camera';

Blockly.Kiwifroot.camera.addCameraToConstructor_ = function() {

	var constructorCode = 'this.camera = this.state.components.getComponent( "Camera" );\n\n';
	constructorCode += errorCheck( this.workspace, ('!this.camera'), 'Camera component not found on the state. Camera blocks will not work.' );
	
	Blockly.Kiwifroot.provideAdditionOnce('cameraConstructor', Blockly.Kiwifroot.BOOT, constructorCode);

};

Blockly.Kiwifroot['kiwi_camera_go_to'] = function(block) {
	Blockly.Kiwifroot.camera.addCameraToConstructor_.call( this );

	var dropdown_method = block.getFieldValue('METHOD');
	var value_x_pos = Blockly.Kiwifroot.valueToCode(block, 'X_POS', Blockly.Kiwifroot.ORDER_ATOMIC) || 0;
	var value_y_pos = Blockly.Kiwifroot.valueToCode(block, 'Y_POS', Blockly.Kiwifroot.ORDER_ATOMIC) || 0;
	// TODO: Assemble JavaScript into code variable.

	return Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.' + dropdown_method + '(' + value_x_pos + ',' + value_y_pos + ');\n';
};


Blockly.Kiwifroot['kiwi_camera_set_speed'] = function(block) {
	Blockly.Kiwifroot.camera.addCameraToConstructor_.call( this );

	var value_value = Blockly.Kiwifroot.valueToCode(block, 'VALUE', Blockly.Kiwifroot.ORDER_ATOMIC) || 100;

	return Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.panSpeed = ' + value_value + ';\n';
};

Blockly.Kiwifroot['kiwi_camera_get_speed'] = function(block) {
	Blockly.Kiwifroot.camera.addCameraToConstructor_.call( this );

	var dropdown_method = block.getFieldValue('METHOD');
	var code = Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.panSpeed';
	
	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};



Blockly.Kiwifroot['kiwi_camera_state'] = function(block) {

	Blockly.Kiwifroot.camera.addCameraToConstructor_.call( this );

	var dropdown_type = block.getFieldValue('TYPE');
	var code = Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.' + dropdown_type;
	
	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_camera_scale'] = function(block) {
  Blockly.Kiwifroot.camera.addCameraToConstructor_.call( this );

  var value_value = Blockly.Kiwifroot.valueToCode(block, 'VALUE', Blockly.Kiwifroot.ORDER_ATOMIC) || 1;
  var dropdown_name = block.getFieldValue('PROP');

  var code = Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.' + dropdown_name + ' = ' + value_value + ';\n';

  return code;
};

Blockly.Kiwifroot['kiwi_camera_scale_get'] = function(block) {
  Blockly.Kiwifroot.camera.addCameraToConstructor_.call( this );
  
  var dropdown_name = block.getFieldValue('PROP');
  var code = Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.' + dropdown_name;

  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_camera_center_on_instance'] = function(block) {
	Blockly.Kiwifroot.camera.addCameraToConstructor_.call( this );

	var value_instance = Blockly.Kiwifroot.valueToCode(block, 'INSTANCE', Blockly.Kiwifroot.ORDER_ATOMIC) || 'this.owner';

	//Check to see if there is a instance?
	var code = errorCheck( this.workspace, ('!' + value_instance), 'A Instance could not be located when executing the `Center Camera on Instance` block.' );

	code += 'var x = ' + value_instance + '.transform.x + (' + value_instance + '.anchorPointX);\n' + 
				'x -= ' + Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.camera.width / 2;\n' +
			'var y = ' + value_instance + '.transform.y + (' + value_instance + '.anchorPointY);\n' +
				'y -= ' + Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.camera.height / 2;\n' +
			Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.snapTo(x,y);\n';

  	return code;
};

// 22/10/2015
Blockly.Kiwifroot['kiwi_camera_get_read_only_position'] = function(block) {
  Blockly.Kiwifroot.camera.addCameraToConstructor_.call( this );

	var dropdown_method = block.getFieldValue('METHOD');
	var code = Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.' + dropdown_method;
	
	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};
Blockly.Kiwifroot['kiwi_camera_get_read_only_dimensions'] = function(block) {
  Blockly.Kiwifroot.camera.addCameraToConstructor_.call( this );

	var dropdown_method = block.getFieldValue('METHOD');
	var code = Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.' + dropdown_method;
	
	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};


Blockly.Kiwifroot['kiwi_camera_set_offset'] = function(block) {
  Blockly.Kiwifroot.camera.addCameraToConstructor_.call( this );

	var value_value = Blockly.Kiwifroot.valueToCode(block, 'VALUE', Blockly.Kiwifroot.ORDER_ATOMIC) || '0';
	var dropdown_method = block.getFieldValue('METHOD');
	return Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.' + dropdown_method + ' = ' + value_value + ';\n';
};
Blockly.Kiwifroot['kiwi_camera_set_min'] = function(block) {
  Blockly.Kiwifroot.camera.addCameraToConstructor_.call( this );

	var value_value = Blockly.Kiwifroot.valueToCode(block, 'VALUE', Blockly.Kiwifroot.ORDER_ATOMIC) || '-Infinity';
	var dropdown_method = block.getFieldValue('METHOD');
	return Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.' + dropdown_method + ' = ' + value_value + ';\n';
};
Blockly.Kiwifroot['kiwi_camera_set_max'] = function(block) {
  Blockly.Kiwifroot.camera.addCameraToConstructor_.call( this );

	var value_value = Blockly.Kiwifroot.valueToCode(block, 'VALUE', Blockly.Kiwifroot.ORDER_ATOMIC) || 'Infinity';
	var dropdown_method = block.getFieldValue('METHOD');
	return Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.' + dropdown_method + ' = ' + value_value + ';\n';
};



Blockly.Kiwifroot['kiwi_camera_get_offset'] = function(block) {
  Blockly.Kiwifroot.camera.addCameraToConstructor_.call( this );

	var dropdown_method = block.getFieldValue('METHOD');
	var code = Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.' + dropdown_method;
	
	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};
Blockly.Kiwifroot['kiwi_camera_get_min'] = function(block) {
  Blockly.Kiwifroot.camera.addCameraToConstructor_.call( this );

	var dropdown_method = block.getFieldValue('METHOD');
	var code = Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.' + dropdown_method;
	
	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};
Blockly.Kiwifroot['kiwi_camera_get_max'] = function(block) {
  Blockly.Kiwifroot.camera.addCameraToConstructor_.call( this );

	var dropdown_method = block.getFieldValue('METHOD');
	var code = Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.' + dropdown_method;
	
	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

// Shake the camera using offset values...
Blockly.Kiwifroot[ "kiwi_camera_shake_offset" ] = function( block ) {
	var code = "",
		cam = Blockly.Kiwifroot.camera.COMPONENT_PREFIX + ".offset",
		tab = Blockly.Kiwifroot.INDENT,
		baseName = Blockly.Kiwifroot.variableDB_.getDistinctName(
			"base", Blockly.Variables.NAME_TYPE ),
		trackerName = Blockly.Kiwifroot.variableDB_.getDistinctName(
			"tracker", Blockly.Variables.NAME_TYPE ),
		axis = block.getFieldValue( "AXIS" ),
		duration = Blockly.Kiwifroot.valueToCode(
			block,
			"DURATION",
			Blockly.Kiwifroot.ORDER_ATOMIC ) || 0,
		amplitude = Blockly.Kiwifroot.valueToCode(
			block,
			"AMPLITUDE",
			Blockly.Kiwifroot.ORDER_ATOMIC ) || 0,
		frequency = Blockly.Kiwifroot.valueToCode(
			block,
			"FREQUENCY",
			Blockly.Kiwifroot.ORDER_ATOMIC ) || 0;

	Blockly.Kiwifroot.camera.addCameraToConstructor_.call( this );

	/*
	game.tweens.create( $camera ).to(
		{ $AXIS: $camera.$AXIS },
		$DURATION * 1000,
		Kiwi.Animations.Tweens.Easing.Exponential.Out,
		true );
	*/

	// Create a tracker to control the amplitude.
	code += "var " + trackerName + " = { k: " + amplitude + " };\n";

	// Track the base value around which shake oscillates.
	code += "var " + baseName + " = " + cam + "." + axis + ";\n";

	// Create tween.
	code += "game.tweens.create( " + trackerName + " ).to(\n";
	code += tab + "{ k: 0 },\n";
	code += tab + duration + " * 1000,\n";
	code += tab + "Kiwi.Animations.Tweens.Easing.Exponential.Out,\n";
	code += tab + "true )\n";
	code += ".onUpdate(\n";

	// Update camera offsets with tween progress.
	code += tab + "function() {\n";
	code += tab + tab + cam + "." + axis + " = " +
		baseName + " + " + trackerName + ".k * " +
		"Math.sin( this.game.idealFrame * " + frequency + ");\n";
	code += tab + "}, this );\n";

	console.log( code );

	return code;
};