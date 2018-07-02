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
 * @fileoverview All deprecated blocks.
 * @author rani_sputnik@hotmail.com (Ryan Loader)
 */

'use strict';

goog.require('Blockly.Blocks');

// 19 - 03 - 2015

Blockly.Blocks['kiwi_instance_select'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_INSTANCE_SELECT_HELPURL );
    this.setColour( Blockly.Variables.COLOUR_INSTANCE );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_INSTANCE_SELECT_MESSAGE )
        .appendField(new Blockly.FieldDropdown( Blockly.Kiwifroot.instances_ ), "ID");
    this.setInputsInline(true);
    this.setOutput(true, "Instance");
    this.setTooltip( Blockly.Msg.KF_INSTANCE_SELECT_TOOLTIP );
  }
};

// 12 - 02 - 2015

Blockly.Blocks['kiwi_classes_selector'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_CLASSES_SELECTOR_HELPURL );
    this.setColour( Blockly.Variables.COLOUR_CLASS );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown( Blockly.Kiwifroot.classes_ ), "NAME");
    this.setInputsInline(true);
    this.setOutput( true, "Class" );
    this.setTooltip( Blockly.Msg.KF_CLASSES_SELECTOR_TOOLTIP );
  }
};

// 12 - 02 - 2015

Blockly.Blocks['kiwi_messaging_class'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_MESSAGING_CLASS_HELPURL );
    this.setColour( Blockly.Blocks.STATEMENT_COLOUR );
    this.appendValueInput("MESSAGE")
        .setCheck("String")
        .appendField( Blockly.Msg.KF_MESSAGING_CLASS_MESSAGE_BEFORE );
    this.appendValueInput("CLASS")
        .setCheck("Class")
        .appendField( Blockly.Msg.KF_MESSAGING_CLASS_MESSAGE_AFTER );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_MESSAGING_CLASS_TOOLTIP );
  }
};

// 12 - 02 - 2015

Blockly.Blocks['kiwi_event_stage_press'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl(Blockly.Msg.KF_EVENT_STAGE_PRESS_HELPURL);
    this.setColour( Blockly.Blocks.CALLABLE_COLOUR );
    this.appendDummyInput()
        .appendField(Blockly.Msg.KF_EVENT_STAGE_PRESS_MESSAGE);
    this.setTooltip(Blockly.Msg.KF_EVENT_STAGE_PRESS_TOOLTIP);
    this.appendStatementInput('STACK');
  }
};

// 12 - 02 - 2015

Blockly.Blocks['kiwi_event_stage_release'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl(Blockly.Msg.KF_EVENT_STAGE_RELEASE_HELPURL);
    this.setColour( Blockly.Blocks.CALLABLE_COLOUR );
    this.appendDummyInput()
        .appendField(Blockly.Msg.KF_EVENT_STAGE_RELEASE_MESSAGE);
    this.setTooltip(Blockly.Msg.KF_EVENT_STAGE_RELEASE_TOOLTIP);
    this.appendStatementInput('STACK');
  }
};

// 12 - 02 - 2015

Blockly.Blocks['kiwi_event_inst_press'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl(Blockly.Msg.KF_EVENT_INST_PRESS_HELPURL);
    this.setColour( Blockly.Blocks.CALLABLE_COLOUR );
    this.appendDummyInput()
      .appendField(Blockly.Msg.KF_EVENT_INST_PRESS_MESSAGE);
    this.appendValueInput("INST")
      .setCheck("Instance");
    this.setTooltip(Blockly.Msg.KF_EVENT_INST_PRESS_TOOLTIP);
    this.appendStatementInput('STACK');
    this.setInputsInline(true);
  }
};

// 12 - 02 - 2015

Blockly.Blocks['kiwi_event_inst_release'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl(Blockly.Msg.KF_EVENT_INST_RELEASE_HELPURL);
    this.setColour( Blockly.Blocks.CALLABLE_COLOUR );
    this.appendDummyInput()
      .appendField(Blockly.Msg.KF_EVENT_INST_RELEASE_MESSAGE);
    this.appendValueInput("INST")
      .setCheck("Instance");
    this.setTooltip(Blockly.Msg.KF_EVENT_INST_RELEASE_TOOLTIP);
    this.appendStatementInput('STACK');
    this.setInputsInline(true);
  }
};

// 12 - 02 - 2015

Blockly.Blocks['kiwi_event_key_press'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl(Blockly.Msg.KF_EVENT_KEY_PRESS_HELPURL);
    this.setColour( Blockly.Blocks.CALLABLE_COLOUR );
    this.appendDummyInput()
      .appendField(Blockly.Msg.KF_EVENT_KEY_PRESS_MESSAGE);
    this.appendValueInput("KEY")
        .setCheck("Number");
    this.setTooltip(Blockly.Msg.KF_EVENT_KEY_PRESS_TOOLTIP);
    this.appendStatementInput('STACK');
    this.setInputsInline(true);
  }
};

// 12 - 02 - 2015

Blockly.Blocks['kiwi_event_key_release'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl(Blockly.Msg.KF_EVENT_KEY_RELEASE_HELPURL);
    this.setColour( Blockly.Blocks.CALLABLE_COLOUR );
    this.appendDummyInput()
      .appendField(Blockly.Msg.KF_EVENT_KEY_RELEASE_MESSAGE);
    this.appendValueInput("KEY")
        .setCheck("Number");
    this.setTooltip(Blockly.Msg.KF_EVENT_KEY_RELEASE_TOOLTIP);
    this.appendStatementInput('STACK');
    this.setInputsInline(true);
  }
};

// 17 - 02 - 2015

Blockly.Blocks['kiwi_camera_lock_on'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_LOCK_ON_HELPURL );
    this.setColour( Blockly.Blocks.STATEMENT_HUE );
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

// 17 - 02 - 2015

Blockly.Blocks['kiwi_camera_unlock'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_UNLOCK_HELPURL );
    this.setColour( Blockly.Blocks.STATEMENT_HUE );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CAMERA_UNLOCK_MESSAGE );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_CAMERA_UNLOCK_TOOLTIP );
  }
};


// 25 - 05 - 2015


Blockly.Blocks['kiwi_classes_create_instance'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_CLASSES_CREATE_INSTANCE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR_INSTANCE );
    this.appendValueInput("CLASS")
        .setCheck("Class")
        .appendField( Blockly.Msg.KF_CLASSES_CREATE_INSTANCE_MESSAGE_BEFORE );
    this.appendValueInput("X_LOC")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_CLASSES_CREATE_INSTANCE_MESSAGE_AFTER );
    this.appendValueInput("Y_LOC")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Instance");
    this.setTooltip( Blockly.Msg.KF_CLASSES_CREATE_INSTANCE_TOOLTIP );
  }
};


// 22/10/2015

Blockly.Blocks['kiwi_arcadephysics_get_numeric'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_GET_NUMERIC_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown( [
          ["velocity x", "velocity.x"], 
          ["velocity y", "velocity.y"], 
          ["acceleration x", "acceleration.x"], 
          ["acceleration y", "acceleration.y"], 
          ["max velocity x", "maxVelocity.x"], 
          ["max velocity y", "maxVelocity.y"], 
          ["drag x", "drag.x"], 
          ["drag y", "drag.y"], 
          ["mass", "mass"], 
          ["elasticity", "elasticity"], 
          ["layer", "layer"]
        ]), "PROP");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_GET_NUMERIC_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_arcadephysics_set_numeric'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_SET_NUMERIC_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_ARCADEPHYSICS_SET_NUMERIC_MESSAGE )
        .appendField(new Blockly.FieldDropdown([
          ["velocity x", "velocity.x"], 
          ["velocity y", "velocity.y"], 
          ["acceleration x", "acceleration.x"], 
          ["acceleration y", "acceleration.y"], 
          ["max velocity x", "maxVelocity.x"], 
          ["max velocity y", "maxVelocity.y"], 
          ["drag x", "drag.x"], 
          ["drag y", "drag.y"], 
          ["mass", "mass"], 
          ["elasticity", "elasticity"], 
          ["layer", "layer"]
        ]), "PROP");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_SET_NUMERIC_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_arcadephysics_set_boolean'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_SET_BOOLEAN_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendValueInput("VALUE")
        .setCheck("Boolean")
        .appendField( Blockly.Msg.KF_ARCADEPHYSICS_SET_BOOLEAN_MESSAGE )
        .appendField(new Blockly.FieldDropdown([
          ["reacts to gravity", "gravity"], 
          ["immovable", "immovable"], 
          ["moves", "moves"],
            ["enabled", "enabled"]
        ]), "PROP");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_SET_BOOLEAN_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_arcadephysics_get_boolean'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_GET_BOOLEAN_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["reacts to gravity", "gravity"], 
          ["immovable", "immovable"], 
          ["moves", "moves"],
            ["enabled", "enabled"]
        ]), "PROP");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_GET_BOOLEAN_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_arcadephysics_get_collisions'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_ARCADEPHYSICS_GET_COLLISIONS_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["touching", "touching"], 
          ["was touching", "wasTouching"], 
          ["can collide", "allowCollisions"]
        ]), "TYPE")
        .appendField( Blockly.Msg.KF_ARCADEPHYSICS_GET_COLLISIONS_MESSAGE_BEFORE )
        .appendField(new Blockly.FieldDropdown([
          ["any", "Kiwi.Components.ArcadePhysics.ANY"],
          ["left", "Kiwi.Components.ArcadePhysics.LEFT"], 
          ["right", "Kiwi.Components.ArcadePhysics.RIGHT"], 
          ["top", "Kiwi.Components.ArcadePhysics.UP"], 
          ["bottom", "Kiwi.Components.ArcadePhysics.DOWN"]
        ]), "PROP")
        .appendField( Blockly.Msg.KF_ARCADEPHYSICS_GET_COLLISIONS_MESSAGE_AFTER );
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip( Blockly.Msg.KF_ARCADEPHYSICS_GET_COLLISIONS_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_camera_get_read_only'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_GET_READ_ONLY_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.LOOKS );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CAMERA_GET_READ_ONLY_MESSAGE );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown( [
            ["x", "x"],
            ["y", "y"],
            ["width", "camera.width"],
            ["height", "camera.height"]
        ] ), "METHOD");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_CAMERA_GET_READ_ONLY_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_camera_set'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_SET_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.LOOKS );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CAMERA_SET_MESSAGE_BEFORE );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown( [ 
            ["x offset", "offset.x"], 
            ["y offset", "offset.y"], 
            ["x minimum", "minX"], 
            ["y minimum", "minY"],
            ["x maximum", "maxX"], 
            ["y maximum", "maxY"]
        ] ), "METHOD")
        .appendField( Blockly.Msg.KF_CAMERA_SET_MESSAGE_AFTER );
    this.appendValueInput("VALUE")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_CAMERA_SET_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_camera_get'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_CAMERA_GET_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.LOOKS );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CAMERA_GET_MESSAGE );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown( [
            ["x offset", "offset.x"], 
            ["y offset", "offset.y"], 
            ["x minimum", "minX"], 
            ["y minimum", "minY"],
            ["x maximum", "maxX"], 
            ["y maximum", "maxY"]
        ] ), "METHOD");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip( Blockly.Msg.KF_CAMERA_GET_TOOLTIP );
  }
};


// 1/12/2015

Blockly.Blocks['kiwi_classes_create_instance_with_var'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_CLASSES_CREATE_INSTANCE_WITH_VAR_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_CLASSES_CREATE_INSTANCE_WITH_VAR_MESSAGE_BEFORE )
        .appendField(new Blockly.FieldVariable('instance'), 'VAR');
    this.appendValueInput("CLASS")
        .setCheck("Class")
        .appendField( Blockly.Msg.KF_CLASSES_CREATE_INSTANCE_WITH_VAR_MESSAGE_AFTER );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_CLASSES_CREATE_INSTANCE_WITH_VAR_TOOLTIP );
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Iterator is always a number type, return this.
   * @return {string}
   * @this Blockly.Block
   */
  typeOf: function(name) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      return Blockly.Variables.TYPE_INSTANCE;
    }
    else return undefined;
  },
  /**
   * Notfication that the workspace wants to change this variables type.
   * We can not change type! This is immutable.
   * @this Blockly.Block
   */
  changeType: function(name, type) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      //Is the type different?
      if( type !== this.typeOf(name) ) {
        setTimeout(function(){
          // This type is immutable, change it back!
          Blockly.Variables.changeType(name, Blockly.Variables.TYPE_INSTANCE, 
            Blockly.mainWorkspace);
        },1);
      }
    }
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  }
};


Blockly.Blocks['kiwi_event_touch_return_instance_local'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_EVENT_TOUCH_RETURN_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_EVENT_TOUCH_RETURN_MESSAGE )
        .appendField(new Blockly.FieldVariable('toucher', null, Blockly.FieldVariable.SCOPE.LOCAL ), 'VAR');
    this.appendStatementInput("STACK");
    this.setTooltip( Blockly.Msg.KF_EVENT_TOUCH_RETURN_TOOLTIP );
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  localGetVars: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Iterator is always a number type, return this.
   * @return {string}
   * @this Blockly.Block
   */
  localTypeOf: function(name) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      return Blockly.Variables.TYPE_INSTANCE;
    }
    else return undefined;
  },
  /**
   * Indicates whether the variable used is immutable or not. 
   * @return {boolean}
   */
  localIsImmutable: function() {
    return true;
  },
  /**
   * Notfication that the workspace wants to change this variables type.
   * We can not change type! This is immutable.
   * @this Blockly.Block
   */
  localChangeType: function(name, type) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      //Is the type different?
      if( type !== this.localTypeOf(name) ) {
        setTimeout(function(){
          // This type is immutable, change it back!
          Blockly.Variables.Local.changeType(name, Blockly.Variables.TYPE_INSTANCE, 
            Blockly.mainWorkspace);
        },1);
      }
    }
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  localRenameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  /**
   * Add menu option to create getter block for loop variable.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function(options) {
    if (!this.isCollapsed()) {
      var option = {enabled: true};
      var name = this.getFieldValue('VAR');
      option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace('%1', name);
      var xmlField = goog.dom.createDom('field', null, name);
      xmlField.setAttribute('name', 'VAR');
      var xmlBlock = goog.dom.createDom('block', null, xmlField);
      xmlBlock.setAttribute('type', 'variables_local_get');
      option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
      options.push(option);
    }
  }
};


Blockly.Blocks['kiwi_event_stage_touched'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_EVENT_STAGE_TOUCHED_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.EVENT );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_EVENT_STAGE_TOUCHED_MESSAGE )
        .appendField(new Blockly.FieldDropdown( [ 
          ["pressed", "onDown"], 
          ["released", "onUp"]
        ]), "TYPE")
        .appendField(new Blockly.FieldVariable('pointer'), 'VAR');
    this.appendStatementInput("STACK");
    this.setTooltip( Blockly.Msg.KF_EVENT_STAGE_TOUCHED_TOOLTIP );
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Iterator is always a number type, return this.
   * @return {string}
   * @this Blockly.Block
   */
  typeOf: function(name) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      return Blockly.Variables.TYPE_POINTER;
    }
    else return undefined;
  },
  /**
   * Notfication that the workspace wants to change this variables type.
   * We can not change type! This is immutable.
   * @this Blockly.Block
   */
  changeType: function(name, type) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      //Is the type different?
      if( type !== this.typeOf(name) ) {
        setTimeout(function(){
          // This type is immutable, change it back!
          Blockly.Variables.changeType(name, Blockly.Variables.TYPE_POINTER, 
            Blockly.mainWorkspace);
        },1);
      }
    }
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  }
};


Blockly.Blocks['kiwi_event_message_value_local'] = {
  init: function() {
    this.setWarningText( Blockly.Msg.KF_BLOCK_DEPRECATED );
    this.setHelpUrl( Blockly.Msg.KF_EVENT_MESSAGE_VALUE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.EVENT );
    this.appendValueInput("MESSAGE")
        .setCheck("String")
        .appendField( Blockly.Msg.KF_EVENT_MESSAGE_VALUE_MESSAGE_ONE );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_EVENT_MESSAGE_VALUE_MESSAGE_TWO )
        .appendField(new Blockly.FieldVariable('value', null, Blockly.FieldVariable.SCOPE.LOCAL ), 'VAR');
    this.appendStatementInput("STACK");
    this.setInputsInline(true);
    this.setTooltip( Blockly.Msg.KF_EVENT_MESSAGE_VALUE_TOOLTIP );
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  localGetVars: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  localRenameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  /**
   * Add menu option to create getter block for loop variable.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function(options) {
    if (!this.isCollapsed()) {
      var option = {enabled: true};
      var name = this.getFieldValue('VAR');
      option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace('%1', name);
      var xmlField = goog.dom.createDom('field', null, name);
      xmlField.setAttribute('name', 'VAR');
      var xmlBlock = goog.dom.createDom('block', null, xmlField);
      xmlBlock.setAttribute('type', 'variables_local_get');
      option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
      options.push(option);
    }
  }
};


Blockly.Blocks['kiwi_primitives_create_rectangle_local'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_PRIMITIVES_CREATE_RECTANGLE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_PRIMITIVES_CREATE_RECTANGLE_MESSAGE_BEFORE )
        .appendField(new Blockly.FieldVariable('rectangle', null, Blockly.FieldVariable.SCOPE.LOCAL), 'VAR');
    this.appendValueInput("WIDTH")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_PRIMITIVES_CREATE_RECTANGLE_MESSAGE_AFTER );
    this.appendValueInput("HEIGHT")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_PRIMITIVES_CREATE_RECTANGLE_TOOLTIP );
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  localGetVars: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Iterator is always a number type, return this.
   * @return {string}
   * @this Blockly.Block
   */
  localTypeOf: function(name) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      return Blockly.Variables.TYPE_INSTANCE;
    }
    else return undefined;
  },
  /**
   * Indicates whether the variable used is immutable or not. 
   * @return {boolean}
   */
  localIsImmutable: function() {
    return true;
  },
  /**
   * Notfication that the workspace wants to change this variables type.
   * We can not change type! This is immutable.
   * @this Blockly.Block
   */
  localChangeType: function(name, type) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      //Is the type different?
      if( type !== this.localTypeOf(name) ) {
        setTimeout(function(){
          // This type is immutable, change it back!
          Blockly.Variables.Local.changeType(name, Blockly.Variables.TYPE_INSTANCE, 
            Blockly.mainWorkspace);
        },1);
      }
    }
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  localRenameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  /**
   * Add menu option to create getter block for loop variable.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function(options) {
    if (!this.isCollapsed()) {
      var option = {enabled: true};
      var name = this.getFieldValue('VAR');
      option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace('%1', name);
      var xmlField = goog.dom.createDom('field', null, name);
      xmlField.setAttribute('name', 'VAR');
      var xmlBlock = goog.dom.createDom('block', null, xmlField);
      xmlBlock.setAttribute('type', 'variables_local_get');
      option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
      options.push(option);
    }
  }
};

Blockly.Blocks['kiwi_primitives_create_circle_local'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_PRIMITIVES_CREATE_CIRCLE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_PRIMITIVES_CREATE_CIRCLE_MESSAGE_BEFORE )
        .appendField(new Blockly.FieldVariable('circle',null, Blockly.FieldVariable.SCOPE.LOCAL), 'VAR');
    this.appendValueInput("RADIUS")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_PRIMITIVES_CREATE_CIRCLE_MESSAGE_AFTER );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_PRIMITIVES_CREATE_CIRCLE_TOOLTIP );
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  localGetVars: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Iterator is always a number type, return this.
   * @return {string}
   * @this Blockly.Block
   */
  localTypeOf: function(name) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      return Blockly.Variables.TYPE_INSTANCE;
    }
    else return undefined;
  },
  /**
   * Indicates whether the variable used is immutable or not. 
   * @return {boolean}
   */
  localIsImmutable: function() {
    return true;
  },
  /**
   * Notfication that the workspace wants to change this variables type.
   * We can not change type! This is immutable.
   * @this Blockly.Block
   */
  localChangeType: function(name, type) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      //Is the type different?
      if( type !== this.localTypeOf(name) ) {
        setTimeout(function(){
          // This type is immutable, change it back!
          Blockly.Variables.Local.changeType(name, Blockly.Variables.TYPE_INSTANCE, 
            Blockly.mainWorkspace);
        },1);
      }
    }
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  localRenameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  /**
   * Add menu option to create getter block for loop variable.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function(options) {
    if (!this.isCollapsed()) {
      var option = {enabled: true};
      var name = this.getFieldValue('VAR');
      option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace('%1', name);
      var xmlField = goog.dom.createDom('field', null, name);
      xmlField.setAttribute('name', 'VAR');
      var xmlBlock = goog.dom.createDom('block', null, xmlField);
      xmlBlock.setAttribute('type', 'variables_local_get');
      option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
      options.push(option);
    }
  }
};

Blockly.Blocks['kiwi_primitives_create_line_local'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_PRIMITIVES_CREATE_LINE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_PRIMITIVES_CREATE_LINE_MESSAGE_ONE)
        .appendField(new Blockly.FieldVariable('line',null, Blockly.FieldVariable.SCOPE.LOCAL), 'VAR');
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_PRIMITIVES_CREATE_LINE_MESSAGE_TWO );
    this.appendValueInput("Y")
        .setCheck("Number");
    this.appendValueInput("WIDTH")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_PRIMITIVES_CREATE_LINE_MESSAGE_THREE );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_PRIMITIVES_CREATE_LINE_TOOLTIP );
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  localGetVars: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Iterator is always a number type, return this.
   * @return {string}
   * @this Blockly.Block
   */
  localTypeOf: function(name) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      return Blockly.Variables.TYPE_INSTANCE;
    }
    else return undefined;
  },
  /**
   * Indicates whether the variable used is immutable or not. 
   * @return {boolean}
   */
  localIsImmutable: function() {
    return true;
  },
  /**
   * Notfication that the workspace wants to change this variables type.
   * We can not change type! This is immutable.
   * @this Blockly.Block
   */
  localChangeType: function(name, type) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      //Is the type different?
      if( type !== this.localTypeOf(name) ) {
        setTimeout(function(){
          // This type is immutable, change it back!
          Blockly.Variables.Local.changeType(name, Blockly.Variables.TYPE_INSTANCE, 
            Blockly.mainWorkspace);
        },1);
      }
    }
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  localRenameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  /**
   * Add menu option to create getter block for loop variable.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function(options) {
    if (!this.isCollapsed()) {
      var option = {enabled: true};
      var name = this.getFieldValue('VAR');
      option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace('%1', name);
      var xmlField = goog.dom.createDom('field', null, name);
      xmlField.setAttribute('name', 'VAR');
      var xmlBlock = goog.dom.createDom('block', null, xmlField);
      xmlBlock.setAttribute('type', 'variables_local_get');
      option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
      options.push(option);
    }
  }
};

Blockly.Blocks['kiwi_primitives_create_star_local'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_PRIMITIVES_CREATE_STAR_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_PRIMITIVES_CREATE_STAR_MESSAGE_ONE)
        .appendField(new Blockly.FieldVariable('star', null, Blockly.FieldVariable.SCOPE.LOCAL), 'VAR');
    this.appendValueInput("RADIUS")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_PRIMITIVES_CREATE_STAR_MESSAGE_TWO );
    this.appendValueInput("POINTS")
        .setCheck("Number")
        .appendField(Blockly.Msg.KF_PRIMITIVES_CREATE_STAR_MESSAGE_THREE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.KF_PRIMITIVES_CREATE_STAR_MESSAGE_FOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_PRIMITIVES_CREATE_STAR_TOOLTIP );
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  localGetVars: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Iterator is always a number type, return this.
   * @return {string}
   * @this Blockly.Block
   */
  localTypeOf: function(name) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      return Blockly.Variables.TYPE_INSTANCE;
    }
    else return undefined;
  },
  /**
   * Indicates whether the variable used is immutable or not. 
   * @return {boolean}
   */
  localIsImmutable: function() {
    return true;
  },
  /**
   * Notfication that the workspace wants to change this variables type.
   * We can not change type! This is immutable.
   * @this Blockly.Block
   */
  localChangeType: function(name, type) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      //Is the type different?
      if( type !== this.localTypeOf(name) ) {
        setTimeout(function(){
          // This type is immutable, change it back!
          Blockly.Variables.Local.changeType(name, Blockly.Variables.TYPE_INSTANCE, 
            Blockly.mainWorkspace);
        },1);
      }
    }
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  localRenameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  /**
   * Add menu option to create getter block for loop variable.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function(options) {
    if (!this.isCollapsed()) {
      var option = {enabled: true};
      var name = this.getFieldValue('VAR');
      option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace('%1', name);
      var xmlField = goog.dom.createDom('field', null, name);
      xmlField.setAttribute('name', 'VAR');
      var xmlBlock = goog.dom.createDom('block', null, xmlField);
      xmlBlock.setAttribute('type', 'variables_local_get');
      option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
      options.push(option);
    }
  }
};

Blockly.Blocks['kiwi_primitives_create_polygon_local'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_PRIMITIVES_CREATE_POLYGON_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_PRIMITIVES_CREATE_POLYGON_MESSAGE_ONE )
        .appendField(new Blockly.FieldVariable('polygon', null, Blockly.FieldVariable.SCOPE.LOCAL), 'VAR');
    this.appendValueInput("RADIUS")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_PRIMITIVES_CREATE_POLYGON_MESSAGE_TWO );
    this.appendValueInput("NUM_EDGES")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_PRIMITIVES_CREATE_POLYGON_MESSAGE_THREE );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_PRIMITIVES_CREATE_POLYGON_MESSAGE_FOUR )
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_PRIMITIVES_CREATE_POLYGON_TOOLTIP );
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  localGetVars: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Iterator is always a number type, return this.
   * @return {string}
   * @this Blockly.Block
   */
  localTypeOf: function(name) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      return Blockly.Variables.TYPE_INSTANCE;
    }
    else return undefined;
  },
  /**
   * Indicates whether the variable used is immutable or not. 
   * @return {boolean}
   */
  localIsImmutable: function() {
    return true;
  },
  /**
   * Notfication that the workspace wants to change this variables type.
   * We can not change type! This is immutable.
   * @this Blockly.Block
   */
  localChangeType: function(name, type) {
    //If the name matches
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      //Is the type different?
      if( type !== this.localTypeOf(name) ) {
        setTimeout(function(){
          // This type is immutable, change it back!
          Blockly.Variables.Local.changeType(name, Blockly.Variables.TYPE_INSTANCE, 
            Blockly.mainWorkspace);
        },1);
      }
    }
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  localRenameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  /**
   * Add menu option to create getter block for loop variable.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function(options) {
    if (!this.isCollapsed()) {
      var option = {enabled: true};
      var name = this.getFieldValue('VAR');
      option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace('%1', name);
      var xmlField = goog.dom.createDom('field', null, name);
      xmlField.setAttribute('name', 'VAR');
      var xmlBlock = goog.dom.createDom('block', null, xmlField);
      xmlBlock.setAttribute('type', 'variables_local_get');
      option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
      options.push(option);
    }
  }
};


Blockly.Blocks['kiwi_text_create_local'] = {
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl( Blockly.Msg.KF_TEXT_CREATE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_TEXT_CREATE_MESSAGE_ONE )
        .appendField(new Blockly.FieldVariable('textfield', null, Blockly.FieldVariable.SCOPE.LOCAL), 'VAR');
    this.appendValueInput("TEXT")
        .setCheck("String")
        .appendField( Blockly.Msg.KF_TEXT_CREATE_MESSAGE_TWO );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_TEXT_CREATE_TOOLTIP );
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  localGetVars: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Iterator is always a number type, return this.
   * @return {string}
   * @this Blockly.Block
   */
  localTypeOf: function(name) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      return Blockly.Variables.TYPE_INSTANCE;
    }
    else return undefined;
  },
  /**
   * Indicates whether the variable used is immutable or not. 
   * @return {boolean}
   */
  localIsImmutable: function() {
    return true;
  },
  /**
   * Notfication that the workspace wants to change this variables type.
   * We can not change type! This is immutable.
   * @this Blockly.Block
   */
  localChangeType: function(name, type) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      //Is the type different?
      if( type !== this.localTypeOf(name) ) {
        setTimeout(function(){
          // This type is immutable, change it back!
          Blockly.Variables.Local.changeType(name, Blockly.Variables.TYPE_INSTANCE, 
            Blockly.mainWorkspace);
        },1);
      }
    }
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  localRenameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  /**
   * Add menu option to create getter block for loop variable.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function(options) {
    if (!this.isCollapsed()) {
      var option = {enabled: true};
      var name = this.getFieldValue('VAR');
      option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace('%1', name);
      var xmlField = goog.dom.createDom('field', null, name);
      xmlField.setAttribute('name', 'VAR');
      var xmlBlock = goog.dom.createDom('block', null, xmlField);
      xmlBlock.setAttribute('type', 'variables_local_get');
      option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
      options.push(option);
    }
  }
};


Blockly.Blocks['controls_for_local'] = {
  /**
   * Block for 'for' loop.
   * @this Blockly.Block
   */
  init: function() {

    //Statement input
    this.jsonInit({
      "message0": Blockly.Msg.CONTROLS_FOR_TITLE,
      "args0": [
        {
          "type": "field_variable",
          "name": "VAR",
          "variable": null,
          "scope": Blockly.FieldVariable.SCOPE.LOCAL
        },
        {
          "type": "input_value",
          "name": "FROM",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value",
          "name": "TO",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value",
          "name": "BY",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Variables.COLOUR.CONTROL,
      "helpUrl": Blockly.Msg.CONTROLS_FOR_HELPURL
    });
    this.appendStatementInput('DO')
        .appendField(Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO);
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  localGetVars: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Iterator is always a number type, return this.
   * @return {string}
   * @this Blockly.Block
   */
  localTypeOf: function(name) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      return Blockly.Variables.TYPE_NUMBER;
    }
    else return undefined;
  },
  /**
   * Indicates whether the variable used is immutable or not. 
   * @return {boolean}
   */
  localIsImmutable: function() {
    return true;
  },
  /**
   * Notfication that the workspace wants to change this variables type.
   * We can not change type! This is immutable.
   * @this Blockly.Block
   */
  localChangeType: function(name, type) {
    if (Blockly.Names.equals(name, this.getFieldValue('VAR'))) {
      //Is the type different?
      if( type !== this.localTypeOf(name) ) {
        setTimeout(function(){
          // This type is immutable, change it back!
          Blockly.Variables.Local.changeType(name, Blockly.Variables.TYPE_NUMBER, 
            Blockly.mainWorkspace);
        },1);
      }
    }
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  localRenameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  /**
   * Add menu option to create getter block for loop variable.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function(options) {
    if (!this.isCollapsed()) {
      var option = {enabled: true};
      var name = this.getFieldValue('VAR');
      option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace('%1', name);
      var xmlField = goog.dom.createDom('field', null, name);
      xmlField.setAttribute('name', 'VAR');
      var xmlBlock = goog.dom.createDom('block', null, xmlField);
      xmlBlock.setAttribute('type', 'variables_local_get');
      option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
      options.push(option);
    }
  }
};


Blockly.Blocks['controls_forEach_local'] = {
  /**
   * Block for 'for each' loop.
   * @this Blockly.Block
   */
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl(Blockly.Msg.CONTROLS_FOREACH_HELPURL);
    this.setColour(Blockly.Variables.COLOUR.CONTROL);
    this.appendValueInput('LIST')
        .setCheck('Array')
        .appendField(Blockly.Msg.CONTROLS_FOREACH_INPUT_ITEM)
        .appendField(new Blockly.FieldVariable(null, null, Blockly.FieldVariable.SCOPE.LOCAL), 'VAR')
        .appendField(Blockly.Msg.CONTROLS_FOREACH_INPUT_INLIST);
    if (Blockly.Msg.CONTROLS_FOREACH_INPUT_INLIST_TAIL) {
      this.appendDummyInput()
          .appendField(Blockly.Msg.CONTROLS_FOREACH_INPUT_INLIST_TAIL);
      this.setInputsInline(true);
    }
    this.appendStatementInput('DO')
        .appendField(Blockly.Msg.CONTROLS_FOREACH_INPUT_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      return Blockly.Msg.CONTROLS_FOREACH_TOOLTIP.replace('%1',
          thisBlock.getFieldValue('VAR'));
    });
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  localGetVars: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  localRenameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  customContextMenu: Blockly.Blocks['controls_for_local'].customContextMenu
};


Blockly.Blocks['procedures_defnoreturn'] = {
  /**
   * Block for defining a procedure with no return value.
   * @this Blockly.Block
   */
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.FUNCTIONS );
    var nameField = new Blockly.FieldTextInput(
        Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE,
        Blockly.Procedures.rename);
    nameField.setSpellcheck(false);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE)
        .appendField(nameField, 'NAME')
        .appendField('', 'PARAMS');
    this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
    this.setTooltip(Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP);
    this.arguments_ = [];
    this.setStatements_(true);
    this.statementConnection_ = null;
  },
  /**
   * Initialization of the block has completed, clean up anything that may be
   * inconsistent as a result of the XML loading.
   * @this Blockly.Block
   */
  validate: function () {
    var name = Blockly.Procedures.findLegalName(
        this.getFieldValue('NAME'), this);
    this.setFieldValue(name, 'NAME');
  },
  /**
   * Add or remove the statement block from this function definition.
   * @param {boolean} hasStatements True if a statement block is needed.
   * @this Blockly.Block
   */
  setStatements_: function(hasStatements) {
    if (this.hasStatements_ === hasStatements) {
      return;
    }
    if (hasStatements) {
      this.appendStatementInput('STACK')
          .appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_DO);
      if (this.getInput('RETURN')) {
        this.moveInputBefore('STACK', 'RETURN');
      }
    } else {
      this.removeInput('STACK', true);
    }
    this.hasStatements_ = hasStatements;
  },
  /**
   * Update the display of parameters for this procedure definition block.
   * Display a warning if there are duplicately named parameters.
   * @private
   * @this Blockly.Block
   */
  updateParams_: function() {
    // Check for duplicated arguments.
    var badArg = false;
    var hash = {};
    for (var i = 0; i < this.arguments_.length; i++) {
      if (hash['arg_' + this.arguments_[i].toLowerCase()]) {
        badArg = true;
        break;
      }
      hash['arg_' + this.arguments_[i].toLowerCase()] = true;
    }
    if (badArg) {
      this.setWarningText(Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING);
    } else {
      this.setWarningText(null);
    }
    // Merge the arguments into a human-readable list.
    var paramString = '';
    if (this.arguments_.length) {
      paramString = Blockly.Msg.PROCEDURES_BEFORE_PARAMS +
          ' ' + this.arguments_.join(', ');
    }
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setFieldValue(paramString, 'PARAMS');
  },
  /**
   * Create an object to represent the argument inputs.
   * @return {object} mutation data.
   * @this Blockly.Block
   */
  mutationToObject: function() {
    return {
      'arguments' : this.arguments_.concat()
      ,'statements' : this.hasStatements_
    };
  },
  /**
   * Parse mutation data to restore the argument inputs.
   * @param {object} obj The mutation data.
   * @this Blockly.Block
   */
  objectToMutation: function(obj) {
    this.arguments_ = obj.arguments.concat();
    this.updateParams_();
    this.setStatements_(!!obj.statements);
  },
  /**
   * Create XML to represent the argument inputs.
   * @return {!Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    for (var i = 0; i < this.arguments_.length; i++) {
      var parameter = document.createElement('arg');
      parameter.setAttribute('name', this.arguments_[i]);
      container.appendChild(parameter);
    }

    // Save whether the statement input is visible.
    if (!this.hasStatements_) {
      container.setAttribute('statements', 'false');
    }
    return container;
  },
  /**
   * Parse XML to restore the argument inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    this.arguments_ = [];
    for (var i = 0, childNode; childNode = xmlElement.childNodes[i]; i++) {
      if (childNode.nodeName.toLowerCase() == 'arg') {
        this.arguments_.push(childNode.getAttribute('name'));
      }
    }
    this.updateParams_();

    // Show or hide the statement input.
    this.setStatements_(xmlElement.getAttribute('statements') !== 'false');
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function(workspace) {
    var containerBlock = Blockly.Block.obtain(workspace,
                                              'procedures_mutatorcontainer');
    containerBlock.initSvg();

    // Check/uncheck the allow statement box.
    if (this.getInput('RETURN')) {
      containerBlock.setFieldValue(this.hasStatements_ ? 'TRUE' : 'FALSE',
                                   'STATEMENTS');
    } else {
      containerBlock.getInput('STATEMENT_INPUT').setVisible(false);
    }

    // Parameter list.
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.arguments_.length; i++) {
      var paramBlock = Blockly.Block.obtain(workspace, 'procedures_mutatorarg');
      paramBlock.initSvg();
      paramBlock.setFieldValue(this.arguments_[i], 'NAME');
      // Store the old location.
      paramBlock.oldLocation = i;
      connection.connect(paramBlock.previousConnection);
      connection = paramBlock.nextConnection;
    }
    // Initialize procedure's callers with blank IDs.
    Blockly.Procedures.mutateCallers(this.getFieldValue('NAME'),
                                     this.workspace, this.arguments_, null);
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  compose: function(containerBlock) {
    // Parameter list.
    this.arguments_ = [];
    this.paramIds_ = [];
    var paramBlock = containerBlock.getInputTargetBlock('STACK');
    while (paramBlock) {
      this.arguments_.push(paramBlock.getFieldValue('NAME'));
      this.paramIds_.push(paramBlock.id);
      paramBlock = paramBlock.nextConnection &&
          paramBlock.nextConnection.targetBlock();
    }
    this.updateParams_();
    Blockly.Procedures.mutateCallers(this.getFieldValue('NAME'),
        this.workspace, this.arguments_, this.paramIds_);

    // Show/hide the statement input.
    var hasStatements = containerBlock.getFieldValue('STATEMENTS');
    if (hasStatements !== null) {
      hasStatements = hasStatements == 'TRUE';
      if (this.hasStatements_ != hasStatements) {
        if (hasStatements) {
          this.setStatements_(true);
          // Restore the stack, if one was saved.
          var stackConnection = this.getInput('STACK').connection;
          if (stackConnection.targetConnection ||
              !this.statementConnection_ ||
              this.statementConnection_.targetConnection ||
              this.statementConnection_.sourceBlock_.workspace !=
              this.workspace) {
            // Block no longer exists or has been attached elsewhere.
            this.statementConnection_ = null;
          } else {
            stackConnection.connect(this.statementConnection_);
          }
        } else {
          // Save the stack, then disconnect it.
          var stackConnection = this.getInput('STACK').connection;
          this.statementConnection_ = stackConnection.targetConnection;
          if (this.statementConnection_) {
            var stackBlock = stackConnection.targetBlock();
            stackBlock.setParent(null);
            stackBlock.bumpNeighbours_();
          }
          this.setStatements_(false);
        }
      }
    }
  },
  /**
   * Dispose of any callers.
   * @this Blockly.Block
   */
  dispose: function() {
    var name = this.getFieldValue('NAME');
    Blockly.Procedures.disposeCallers(name, this.workspace);
    // Call parent's destructor.
    this.constructor.prototype.dispose.apply(this, arguments);
  },
  /**
   * Return the signature of this procedure definition.
   * @return {!Array} Tuple containing three elements:
   *     - the name of the defined procedure,
   *     - a list of all its arguments,
   *     - that it DOES NOT have a return value.
   * @this Blockly.Block
   */
  getProcedureDef: function() {
    return [this.getFieldValue('NAME'), this.arguments_, false];
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  getVars: function() {
    return this.arguments_;
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function(oldName, newName) {
    var change = false;
    for (var i = 0; i < this.arguments_.length; i++) {
      if (Blockly.Names.equals(oldName, this.arguments_[i])) {
        this.arguments_[i] = newName;
        change = true;
      }
    }
    if (change) {
      this.updateParams_();
      // Update the mutator's variables if the mutator is open.
      if (this.mutator.isVisible()) {
        var blocks = this.mutator.workspace_.getAllBlocks();
        for (var i = 0, block; block = blocks[i]; i++) {
          if (block.type == 'procedures_mutatorarg' &&
              Blockly.Names.equals(oldName, block.getFieldValue('NAME'))) {
            block.setFieldValue(newName, 'NAME');
          }
        }
      }
    }
  },
  /**
   * Add custom menu options to this block's context menu.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function(options) {
    // Add option to create caller.
    var option = {enabled: true};
    var name = this.getFieldValue('NAME');
    option.text = Blockly.Msg.PROCEDURES_CREATE_DO.replace('%1', name);
    var xmlMutation = goog.dom.createDom('mutation');
    xmlMutation.setAttribute('name', name);
    for (var i = 0; i < this.arguments_.length; i++) {
      var xmlArg = goog.dom.createDom('arg');
      xmlArg.setAttribute('name', this.arguments_[i]);
      xmlMutation.appendChild(xmlArg);
    }
    var xmlBlock = goog.dom.createDom('block', null, xmlMutation);
    xmlBlock.setAttribute('type', this.callType_);
    option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
    options.push(option);

    // Add options to create getters for each parameter.
    if (!this.isCollapsed()) {
      for (var i = 0; i < this.arguments_.length; i++) {
        var option = {enabled: true};
        var name = this.arguments_[i];
        option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace('%1', name);
        var xmlField = goog.dom.createDom('field', null, name);
        xmlField.setAttribute('name', 'VAR');
        var xmlBlock = goog.dom.createDom('block', null, xmlField);
        xmlBlock.setAttribute('type', 'variables_get');
        option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
        options.push(option);
      }
    }
  },
  callType_: 'procedures_callnoreturn'
};

Blockly.Blocks['procedures_defreturn'] = {
  /**
   * Block for defining a procedure with a return value.
   * @this Blockly.Block
   */
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.FUNCTIONS );
    var nameField = new Blockly.FieldTextInput(
        Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE,
        Blockly.Procedures.rename);
    nameField.setSpellcheck(false);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_TITLE)
        .appendField(nameField, 'NAME')
        .appendField('', 'PARAMS');
    this.appendValueInput('RETURN')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
    this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
    this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP);
    this.arguments_ = [];
    this.setStatements_(true);
    this.statementConnection_ = null;
  },
  setStatements_: Blockly.Blocks['procedures_defnoreturn'].setStatements_,
  validate: Blockly.Blocks['procedures_defnoreturn'].validate,
  updateParams_: Blockly.Blocks['procedures_defnoreturn'].updateParams_,
  mutationToDom: Blockly.Blocks['procedures_defnoreturn'].mutationToDom,
  domToMutation: Blockly.Blocks['procedures_defnoreturn'].domToMutation,
  mutationToObject: Blockly.Blocks['procedures_defnoreturn'].mutationToObject,
  objectToMutation: Blockly.Blocks['procedures_defnoreturn'].objectToMutation,
  decompose: Blockly.Blocks['procedures_defnoreturn'].decompose,
  compose: Blockly.Blocks['procedures_defnoreturn'].compose,
  dispose: Blockly.Blocks['procedures_defnoreturn'].dispose,
  /**
   * Return the signature of this procedure definition.
   * @return {!Array} Tuple containing three elements:
   *     - the name of the defined procedure,
   *     - a list of all its arguments,
   *     - that it DOES have a return value.
   * @this Blockly.Block
   */
  getProcedureDef: function() {
    return [this.getFieldValue('NAME'), this.arguments_, true];
  },
  getVars: Blockly.Blocks['procedures_defnoreturn'].getVars,
  renameVar: Blockly.Blocks['procedures_defnoreturn'].renameVar,
  customContextMenu: Blockly.Blocks['procedures_defnoreturn'].customContextMenu,
  callType_: 'procedures_callreturn'
};

Blockly.Blocks['procedures_callnoreturn'] = {
  /**
   * Block for calling a procedure with no return value.
   * @this Blockly.Block
   */
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl(Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.FUNCTIONS );
    this.appendDummyInput('TOPROW')
        .appendField(Blockly.Msg.PROCEDURES_CALLNORETURN_CALL)
        .appendField('', 'NAME');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    // Tooltip is set in domToMutation.
    this.arguments_ = [];
    this.quarkConnections_ = {};
    this.quarkArguments_ = null;
  },
  /**
   * Returns the name of the procedure this block calls.
   * @return {string} Procedure name.
   * @this Blockly.Block
   */
  getProcedureCall: function() {
    // The NAME field is guaranteed to exist, null will never be returned.
    return /** @type {string} */ (this.getFieldValue('NAME'));
  },
  /**
   * Notification that a procedure is renaming.
   * If the name matches this block's procedure, rename it.
   * @param {string} oldName Previous name of procedure.
   * @param {string} newName Renamed procedure.
   * @this Blockly.Block
   */
  renameProcedure: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getProcedureCall())) {
      this.setFieldValue(newName, 'NAME');
      this.setTooltip(
          (this.outputConnection ? Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP :
           Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP)
          .replace('%1', newName));
    }
  },
  /**
   * Notification that the procedure's parameters have changed.
   * @param {!Array.<string>} paramNames New param names, e.g. ['x', 'y', 'z'].
   * @param {!Array.<string>} paramIds IDs of params (consistent for each
   *     parameter through the life of a mutator, regardless of param renaming),
   *     e.g. ['piua', 'f8b_', 'oi.o'].
   * @this Blockly.Block
   */
  setProcedureParameters: function(paramNames, paramIds) {
    // Data structures:
    // this.arguments = ['x', 'y']
    //     Existing param names.
    // this.quarkConnections_ {piua: null, f8b_: Blockly.Connection}
    //     Look-up of paramIds to connections plugged into the call block.
    // this.quarkArguments_ = ['piua', 'f8b_']
    //     Existing param IDs.
    // Note that quarkConnections_ may include IDs that no longer exist, but
    // which might reappear if a param is reattached in the mutator.
    if (!paramIds) {
      // Reset the quarks (a mutator is about to open).
      this.quarkConnections_ = {};
      this.quarkArguments_ = null;
      return;
    }
    if (goog.array.equals(this.arguments_, paramNames)) {
      // No change.
      this.quarkArguments_ = paramIds;
      return;
    }
    this.setCollapsed(false);
    if (paramIds.length != paramNames.length) {
      throw 'Error: paramNames and paramIds must be the same length.';
    }
    if (!this.quarkArguments_) {
      // Initialize tracking for this block.
      this.quarkConnections_ = {};
      if (paramNames.join('\n') == this.arguments_.join('\n')) {
        // No change to the parameters, allow quarkConnections_ to be
        // populated with the existing connections.
        this.quarkArguments_ = paramIds;
      } else {
        this.quarkArguments_ = [];
      }
    }
    // Switch off rendering while the block is rebuilt.
    var savedRendered = this.rendered;
    this.rendered = false;
    // Update the quarkConnections_ with existing connections.
    for (var i = this.arguments_.length - 1; i >= 0; i--) {
      var input = this.getInput('ARG' + i);
      if (input) {
        var connection = input.connection.targetConnection;
        this.quarkConnections_[this.quarkArguments_[i]] = connection;
        // Disconnect all argument blocks and remove all inputs.
        this.removeInput('ARG' + i);
      }
    }
    // Rebuild the block's arguments.
    this.arguments_ = [].concat(paramNames);
    this.renderArgs_();
    this.quarkArguments_ = paramIds;
    // Reconnect any child blocks.
    if (this.quarkArguments_) {
      for (var i = 0; i < this.arguments_.length; i++) {
        var input = this.getInput('ARG' + i);
        var quarkName = this.quarkArguments_[i];
        if (quarkName in this.quarkConnections_) {
          var connection = this.quarkConnections_[quarkName];
          if (!connection || connection.targetConnection ||
              connection.sourceBlock_.workspace != this.workspace) {
            // Block no longer exists or has been attached elsewhere.
            delete this.quarkConnections_[quarkName];
          } else {
            input.connection.connect(connection);
          }
        }
      }
    }
    // Restore rendering and show the changes.
    this.rendered = savedRendered;
    if (this.rendered) {
      this.render();
    }
  },
  /**
   * Render the arguments.
   * @this Blockly.Block
   * @private
   */
  renderArgs_: function() {
    for (var i = 0; i < this.arguments_.length; i++) {
      var input = this.appendValueInput('ARG' + i)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(this.arguments_[i]);
      input.init();
    }
    // Add 'with:' if there are parameters.
    var input = this.getInput('TOPROW');
    if (input) {
      if (this.arguments_.length) {
        if (!this.getField('WITH')) {
          input.appendField(Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS, 'WITH');
          input.init();
        }
      } else {
        if (this.getField('WITH')) {
          input.removeField('WITH');
        }
      }
    }
  },
  /**
   * Create an object to represent the (non-editable) name and arguments.
   * @return {object} Mutation data.
   * @this Blockly.Block
   */
  mutationToObject:function(){
    return {
      'name' : this.getProcedureCall()
      ,'arguments' : this.arguments_.concat()
    };
  },
  /**
   * Parse an object to restore the (non-editable) name and parameters.
   * @param {object} obj The mutation data.
   * @this Blockly.Block
   */
  objectToMutation: function(obj) {
    var name = obj.name;
    this.setFieldValue(name, 'NAME');

    if( this.outputConnection ) {
      var tooltip = Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP || "";
    } else {
      var tooltip = Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP || "";
    }

    this.setTooltip( tooltip.replace('%1', name) );

    var def = Blockly.Procedures.getDefinition(name, this.workspace);
    if (def && def.mutator && def.mutator.isVisible()) {
      // Initialize caller with the mutator's IDs.
      this.setProcedureParameters(def.arguments_, def.paramIds_);
    } else {
      var args = obj.arguments.concat();
      // For the second argument (paramIds) use the arguments list as a dummy
      // list.
      this.setProcedureParameters(args, args);
    }
  },
  /**
   * Create XML to represent the (non-editable) name and arguments.
   * @return {!Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('name', this.getProcedureCall());
    for (var i = 0; i < this.arguments_.length; i++) {
      var parameter = document.createElement('arg');
      parameter.setAttribute('name', this.arguments_[i]);
      container.appendChild(parameter);
    }
    return container;
  },
  /**
   * Parse XML to restore the (non-editable) name and parameters.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var name = xmlElement.getAttribute('name');
    this.setFieldValue(name, 'NAME');
    this.setTooltip(
        (this.outputConnection ? Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP :
         Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP).replace('%1', name));
    var def = Blockly.Procedures.getDefinition(name, this.workspace);
    if (def && def.mutator && def.mutator.isVisible()) {
      // Initialize caller with the mutator's IDs.
      this.setProcedureParameters(def.arguments_, def.paramIds_);
    } else {
      var args = [];
      for (var i = 0, childNode; childNode = xmlElement.childNodes[i]; i++) {
        if (childNode.nodeName.toLowerCase() == 'arg') {
          args.push(childNode.getAttribute('name'));
        }
      }
      // For the second argument (paramIds) use the arguments list as a dummy
      // list.
      this.setProcedureParameters(args, args);
    }
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function(oldName, newName) {
    for (var i = 0; i < this.arguments_.length; i++) {
      if (Blockly.Names.equals(oldName, this.arguments_[i])) {
        this.arguments_[i] = newName;
        this.getInput('ARG' + i).fieldRow[0].setText(newName);
      }
    }
  },
  /**
   * Add menu option to find the definition block for this call.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function(options) {
    var option = {enabled: true};
    option.text = Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF;
    var name = this.getProcedureCall();
    var workspace = this.workspace;
    option.callback = function() {
      var def = Blockly.Procedures.getDefinition(name, workspace);
      def && def.select();
    };
    options.push(option);
  }
};

Blockly.Blocks['procedures_callreturn'] = {
  /**
   * Block for calling a procedure with a return value.
   * @this Blockly.Block
   */
  init: function() {
    this.setWarningText(Blockly.Msg.KF_BLOCK_DEPRECATED);
    this.setHelpUrl(Blockly.Msg.PROCEDURES_CALLRETURN_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.FUNCTIONS );
    this.appendDummyInput('TOPROW')
        .appendField(Blockly.Msg.PROCEDURES_CALLRETURN_CALL)
        .appendField('', 'NAME');
    this.setOutput(true);
    // Tooltip is set in domToMutation.
    this.arguments_ = [];
    this.quarkConnections_ = {};
    this.quarkArguments_ = null;
  },
  getProcedureCall: Blockly.Blocks['procedures_callnoreturn'].getProcedureCall,
  renameProcedure: Blockly.Blocks['procedures_callnoreturn'].renameProcedure,
  setProcedureParameters:
      Blockly.Blocks['procedures_callnoreturn'].setProcedureParameters,
  renderArgs_: Blockly.Blocks['procedures_callnoreturn'].renderArgs_,
  mutationToDom: Blockly.Blocks['procedures_callnoreturn'].mutationToDom,
  domToMutation: Blockly.Blocks['procedures_callnoreturn'].domToMutation,
  mutationToObject: Blockly.Blocks['procedures_callnoreturn'].mutationToObject,
  objectToMutation: Blockly.Blocks['procedures_callnoreturn'].objectToMutation,
  renameVar: Blockly.Blocks['procedures_callnoreturn'].renameVar,
  customContextMenu: Blockly.Blocks['procedures_callnoreturn'].customContextMenu
};


// Deprecated because the dropdown sets itself by value;
// however, if you remix the game, the value changes,
// and the whole script becomes uneditable.
Blockly.Blocks['kiwi_get_editor_sounds'] = {
    init: function() {
        this.setHelpUrl( Blockly.Msg.KF_SOUND_GET_EDITOR_HELPURL );
        this.setColour( Blockly.Variables.COLOUR.SOUND );
        this.appendDummyInput()
            .appendField( Blockly.Msg.KF_SOUND_GET_EDITOR_MESSAGE )
            .appendField(new Blockly.FieldDropdown(function(){
                if ( typeof LevelEditor != "undefined" ){
                    return LevelEditor.getGameSounds();
                } else {
                    return [
                        ["Select", "none"]
                    ]
                }
            }), "PROP");
        this.setOutput(true, "Sound");
        this.setTooltip( Blockly.Msg.KF_SOUND_GET_EDITOR_TOOLTIP  );
    }
};
