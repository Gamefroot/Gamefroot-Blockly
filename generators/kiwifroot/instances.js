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
 * @fileoverview Generating Kiwifroot Javascript that resolves instance tokens
 * @author rani_sputnik@hotmail.com
 * @author benjamin.p.harding@gmail.com
 */
'use strict';

goog.provide('Blockly.Kiwifroot.instances');

goog.require('Blockly.Kiwifroot');


Blockly.Kiwifroot['kiwi_instance_self'] = function(block) {
	var code = 'this.owner'; 
  	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_instance_select'] = function(block) {
  var dropdown_id = block.getFieldValue('ID');
  var code = 'this.state.getChildByID("' + dropdown_id + '")';
  
  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_instance_set'] = function(block) {
	var inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || '(null)';
	var prop = block.getFieldValue('PROP');
	var val = Blockly.Kiwifroot.valueToCode(block, 'VALUE', Blockly.Kiwifroot.ORDER_ASSIGNMENT);

  var code = errorCheck( this.workspace, ('!' + inst ), '`Set Instance` block could not find a Instance.' );

  code += inst + '.' + prop + ' = (' + val + ')';

  if( prop === 'rotation' ) {
    code += ' * Kiwi.Utils.GameMath.DEG_TO_RAD';
  }

  code += ';\n';

	return code;
};

Blockly.Kiwifroot['kiwi_instance_get'] = function(block) {
	var inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || 'this.owner';
	var prop = block.getFieldValue('PROP');

  inst = errorCheckConditional( this.workspace, 'NotNull', inst, '!%1', 'this.owner', "No Instance could be found for a `get transform of instance` block.");
	var code = inst + '.' + prop;
  
  //Add error check here...

  if( prop === 'rotation' ) {
    code = '(' + inst + '.' + prop + ' * Kiwi.Utils.GameMath.RAD_TO_DEG)';
  }

	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_instance_get_visible'] = function(block) {
  var inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || 'this.owner';
  var code = errorCheckConditional( this.workspace, 'NotNull', inst, '!%1', 'this.owner', "No Instance could be found for a `get visibility of instance` block.") + '.visible';
  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_instance_set_visible'] = function(block) {
  var value_vis = Blockly.Kiwifroot.valueToCode(block, 'VISIBLE', Blockly.Kiwifroot.ORDER_ATOMIC);
  var inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || '(null)';
  var code = errorCheck( this.workspace, ('!' + inst ), '`Set Instance Visibility` block could not find a Instance.' );
  code += inst + '.visible = ' + value_vis + ';\n';
  return code;
};

Blockly.Kiwifroot['kiwi_instance_death'] = function(block) {
  var value_inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || '(null)';
  var code = errorCheck( this.workspace, ('!' + value_inst ), '`Destroy Instance` block could not find a Instance.' );
  code += value_inst + '.exists = false;\n';
  return code;
};

Blockly.Kiwifroot['kiwi_instance_tag_management'] = function(block) {
  var value_tag = Blockly.Kiwifroot.valueToCode(block, 'TAG', Blockly.Kiwifroot.ORDER_ATOMIC) || null;
  var value_instance = Blockly.Kiwifroot.valueToCode(block, 'INSTANCE', Blockly.Kiwifroot.ORDER_ATOMIC) || '(null)';
  var dropdown_type = block.getFieldValue('TYPE');

  var code = errorCheck( this.workspace, ('!' + value_instance ), '`Add/Remove Tag from Instance` block could not find a Instance.' );
  code += value_instance + '.' + dropdown_type + '(' + value_tag + ');\n';
  return code;
};

Blockly.Kiwifroot['kiwi_instance_has_tags'] = function(block) {
  var value_instance = Blockly.Kiwifroot.valueToCode(block, 'INSTANCE', Blockly.Kiwifroot.ORDER_ATOMIC) || 'this.owner';
  var value_tag = Blockly.Kiwifroot.valueToCode(block, 'TAG', Blockly.Kiwifroot.ORDER_ATOMIC) || null;

  var code = errorCheckConditional( this.workspace, 'NotNull', value_instance, '!%1', 'this.owner', "No Instance could be found for a `instance has tag` block.") + '.hasTag(' + value_tag + ')';
  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_instance_get_by_tag'] = function(block) {
  var value_tag = Blockly.Kiwifroot.valueToCode(block, 'TAG', Blockly.Kiwifroot.ORDER_ATOMIC) || null;
  var dropdown_type = block.getFieldValue('TYPE');

  var code  = 'this.state.' + dropdown_type + '(' + value_tag + ')';
  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_instance_get_all_by_tag'] = function(block) {
  var value_tag = Blockly.Kiwifroot.valueToCode(block, 'TAG', Blockly.Kiwifroot.ORDER_ATOMIC) || null;

  var code = 'this.state.getChildrenByTag(' + value_tag + ')';
  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_instance_move'] = function(block) {
  var value_inst_one = Blockly.Kiwifroot.valueToCode(block, 'INST_ONE', Blockly.Kiwifroot.ORDER_ATOMIC) || null;
  var value_inst_two = Blockly.Kiwifroot.valueToCode(block, 'INST_TWO', Blockly.Kiwifroot.ORDER_ATOMIC) || null;
  var dropdown_method = block.getFieldValue('METHOD');

  var code = errorCheck( this.workspace, ('!' + value_inst_one + '|| !' + value_inst_two ), '`Depth` block could not find a Instance.' );
  code += 'this.state.' + dropdown_method + '(' + value_inst_one + ', ' + value_inst_two + ');\n';
  return code;
};

Blockly.Kiwifroot['kiwi_instance_execute'] = function(block) {
  // Print statement.
  var argument0 = Blockly.Kiwifroot.valueToCode(block, 'TEXT',
      Blockly.Kiwifroot.ORDER_NONE) || '\'\'';
  //AHHH AHHH RUN AWAY
  var code  = 'eval('+argument0+');\n';

  return code;
};

Blockly.Kiwifroot['kiwi_instance_properties_set'] = function(block) {
  var value_prop_name = Blockly.Kiwifroot.valueToCode(block, 'PROP_NAME', Blockly.Kiwifroot.ORDER_ATOMIC) || '(null)';
  var value_value = Blockly.Kiwifroot.valueToCode(block, 'VALUE', Blockly.Kiwifroot.ORDER_ATOMIC) || "''";
  var value_inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || '(null)';

  var code = errorCheck( this.workspace, ('!' + value_inst ), '`Set Key` block could not find a Instance.' );
  code += value_inst + '.properties.set(' + value_prop_name + ',' + value_value + ');\n';
  
  return code;
};

Blockly.Kiwifroot['kiwi_instance_properties_get'] = function(block) {
  var value_prop_name = Blockly.Kiwifroot.valueToCode(block, 'PROP_NAME', Blockly.Kiwifroot.ORDER_ATOMIC) || '(null)';
  var value_inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || 'this.owner';

  var code = errorCheckConditional( this.workspace, 'NotNull', value_inst, '!%1', 'this.owner', "No Instance could be found for a `get key on instance` block.") + '.properties.get(' + value_prop_name + ')';
  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};


// 22/10/2015

Blockly.Kiwifroot['kiwi_instance_set_position'] = function(block) {
  var inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || '(null)';
  var prop = block.getFieldValue('PROP');
  var val = Blockly.Kiwifroot.valueToCode(block, 'VALUE', Blockly.Kiwifroot.ORDER_ASSIGNMENT) || 0;

  var code = errorCheck( this.workspace, ('!' + inst ), '`Set Instance Position` block could not find a Instance.' );
  code += inst + '.' + prop + ' = ' + val;
  code += ';\n';
  return code;
};
Blockly.Kiwifroot[ 'kiwi_instance_set_position_from_location' ] = function( block ) {
  var inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || '(null)';
  var val = Blockly.Kiwifroot.valueToCode(block, 'VALUE', Blockly.Kiwifroot.ORDER_ASSIGNMENT) || 0;

  var code = errorCheck( this.workspace, ('!' + inst ), '`Set Instance Position` block could not find a Instance.' );
  code += inst + '.x' + ' = ' + val + ".x";
  code += ';\n';
  code += inst + '.y' + ' = ' + val + ".y";
  code += ';\n';

  return code;
};
Blockly.Kiwifroot['kiwi_instance_set_dimensions'] = function(block) {
  var inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || '(null)';
  var prop = block.getFieldValue('PROP');
  var val = Blockly.Kiwifroot.valueToCode(block, 'VALUE', Blockly.Kiwifroot.ORDER_ASSIGNMENT) || 0;

  var code = errorCheck( this.workspace, ('!' + inst ), '`Set Instance Dimensions` block could not find a Instance.' );
  code += inst + '.' + prop + ' = ' + val;
  code += ';\n';
  return code;
};
Blockly.Kiwifroot['kiwi_instance_set_rotation'] = function(block) {
  var inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || '(null)';
  var val = Blockly.Kiwifroot.valueToCode(block, 'VALUE', Blockly.Kiwifroot.ORDER_ASSIGNMENT) || 0;

  var code = errorCheck( this.workspace, ('!' + inst ), '`Set Instance Rotation` block could not find a Instance.' );
  code += inst + '.rotation = (' + val + ') * Kiwi.Utils.GameMath.DEG_TO_RAD';
  code += ';\n';
  return code;
};
Blockly.Kiwifroot['kiwi_instance_set_scale'] = function(block) {
  var inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || '(null)';
  var prop = block.getFieldValue('PROP');
  var val = Blockly.Kiwifroot.valueToCode(block, 'VALUE', Blockly.Kiwifroot.ORDER_ASSIGNMENT) || 0;

  var code = errorCheck( this.workspace, ('!' + inst ), '`Set Instance Scale` block could not find a Instance.' );
  code += inst + '.' + prop + ' = ' + val;
  code += ';\n';
  return code;
};
Blockly.Kiwifroot['kiwi_instance_set_alpha'] = function(block) {
  var inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || '(null)';
  var val = Blockly.Kiwifroot.valueToCode(block, 'VALUE', Blockly.Kiwifroot.ORDER_ASSIGNMENT) || 0;

  var code = errorCheck( this.workspace, ('!' + inst ), '`Set Instance Alpha` block could not find a Instance.' );
  code += inst + '.alpha = ' + val;
  code += ';\n';
  return code;
};
Blockly.Kiwifroot['kiwi_instance_set_anchor_point'] = function(block) {
  var inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || '(null)';
  var prop = block.getFieldValue('PROP');
  var val = Blockly.Kiwifroot.valueToCode(block, 'VALUE', Blockly.Kiwifroot.ORDER_ASSIGNMENT) || 0;

  var code = errorCheck( this.workspace, ('!' + inst ), '`Set Instance Anchor` block could not find a Instance.' );
  code += inst + '.' + prop + ' = ' + val;
  code += ';\n';
  return code;
};

// Snap anchor point to instance centroid.
Blockly.Kiwifroot[ "kiwi_instance_center_anchor_point" ] = function( block ) {
  var code = "",
    inst = Blockly.Kiwifroot.valueToCode(
      block, "INST", Blockly.Kiwifroot.ORDER_ATOMIC );

  code += errorCheck(
    this.workspace,
    ( "!" + inst ),
    "`Center Anchor` block could not find an Instance." );
  code += inst + ".anchorPointX = " + inst + ".width / 2;\n";
  code += inst + ".anchorPointY = " + inst + ".height / 2;\n";

  return code;
};



Blockly.Kiwifroot['kiwi_instance_get_position'] = function(block) {
  var inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || 'this.owner';
  var prop = block.getFieldValue('PROP');
  var code = errorCheckConditional( this.workspace, 'NotNull', inst, '!%1', 'this.owner', "No Instance could be found for a `get position of instance` block.") + '.' + prop;
  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_instance_get_location_from_position'] = function(block) {
  var inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || 'this.owner';
  var code =
    "{ x: " +
    errorCheckConditional( this.workspace, 'NotNull', inst, '!%1', 'this.owner', "No Instance could be found for a `get position of instance` block.") +
    ".x, y: " + inst + ".y }";
  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_instance_get_dimensions'] = function(block) {
  var inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || 'this.owner';
  var prop = block.getFieldValue('PROP');
  var mode = block.getFieldValue('MODE');
  var code = errorCheckConditional( this.workspace, 'NotNull', inst, '!%1', 'this.owner', "No Instance could be found for a `get width/height of instance` block.") + '.' + prop;
  if ( mode === "actual" ) {
    code += " * " + inst + "." + ( prop === "width" ? "scaleX" : "scaleY" );
  }

  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};
Blockly.Kiwifroot['kiwi_instance_get_rotation'] = function(block) {
  var inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || 'this.owner';
  var code = '(' + errorCheckConditional( this.workspace, 'NotNull', inst, '!%1', 'this.owner', "No Instance could be found for a `get rotation of instance` block.") + '.rotation * Kiwi.Utils.GameMath.RAD_TO_DEG)';

  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};
Blockly.Kiwifroot['kiwi_instance_get_scale'] = function(block) {
  var inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || 'this.owner';
  var prop = block.getFieldValue('PROP');
  var code = errorCheckConditional( this.workspace, 'NotNull', inst, '!%1', 'this.owner', "No Instance could be found for a `get scale of instance` block.") + '.' + prop;

  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};
Blockly.Kiwifroot['kiwi_instance_get_alpha'] = function(block) {
  var inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || 'this.owner';
  var code = errorCheckConditional( this.workspace, 'NotNull', inst, '!%1', 'this.owner', "No Instance could be found for a `get alpha of instance` block.") + '.alpha';

  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};
Blockly.Kiwifroot['kiwi_instance_get_anchor_point'] = function(block) {
  var inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || 'this.owner';
  var prop = block.getFieldValue('PROP');
  var code = errorCheckConditional( this.workspace, 'NotNull', inst, '!%1', 'this.owner', "No Instance could be found for a `get anchor point of instance` block.") + '.' + prop;

  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};