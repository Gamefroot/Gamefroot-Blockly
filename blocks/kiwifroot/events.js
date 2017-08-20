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
 * @fileoverview Event blocks for Kiwifroot.
 * @author rani_sputnik@hotmail.com (Ryan Loader)
 * @author benjamin.p.harding@gmail.com (Benjamin Harding)
 */
'use strict';

goog.provide('Blockly.Blocks.Kiwifroot.events');

goog.require('Blockly.Blocks');


Blockly.Blocks['kiwi_event_create'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_EVENT_CREATE_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.EVENT );
    this.appendDummyInput()
    	.appendField(Blockly.Msg.KF_EVENT_CREATE_MESSAGE);
    this.setTooltip(Blockly.Msg.KF_EVENT_CREATE_TOOLTIP);
    this.appendStatementInput('STACK');
  }
};

Blockly.Blocks['kiwi_event_remove'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_EVENT_REMOVE_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.EVENT );
    this.appendDummyInput()
      .appendField(Blockly.Msg.KF_EVENT_REMOVE_MESSAGE);
    this.setTooltip(Blockly.Msg.KF_EVENT_REMOVE_TOOLTIP);
    this.appendStatementInput('STACK');
  }
};

Blockly.Blocks['kiwi_event_constantly'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_EVENT_CONSTANTLY_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.EVENT );
    this.appendDummyInput()
      .appendField(Blockly.Msg.KF_EVENT_CONSTANTLY_MESSAGE);
    this.setTooltip(Blockly.Msg.KF_EVENT_CONSTANTLY_TOOLTIP);
    this.appendStatementInput('STACK');
  }
};

//Pressed / Released

Blockly.Blocks['kiwi_event_stage_input'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_EVENT_STAGE_INPUT_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.EVENT );
    this.appendDummyInput()
        .appendField(Blockly.Msg.KF_EVENT_STAGE_INPUT_MESSAGE)
        .appendField(new Blockly.FieldDropdown([
            ["pressed", "onDown"], 
            ["released", "onUp"]
        ]), "TYPE");
    this.setTooltip(Blockly.Msg.KF_EVENT_STAGE_INPUT_TOOLTIP);
    this.appendStatementInput('STACK');
  }
};

// Pressed / Released Instance

Blockly.Blocks['kiwi_event_inst_input'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_EVENT_INST_INPUT_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.EVENT );
    this.appendDummyInput()
      .appendField(Blockly.Msg.KF_EVENT_INST_INPUT_MESSAGE)
        .appendField(new Blockly.FieldDropdown([
            ["presses", "onDown"], 
            ["releases", "onUp"]
        ]), "TYPE");
    this.appendValueInput("INST")
      .setCheck("Instance");
    this.setTooltip(Blockly.Msg.KF_EVENT_INST_INPUT_TOOLTIP);
    this.appendStatementInput('STACK');
    this.setInputsInline(true);
  }
};


Blockly.Blocks['kiwi_event_key_input'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_EVENT_KEY_INPUT_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.EVENT );
    this.appendDummyInput()
      .appendField( Blockly.Msg.KF_EVENT_KEY_INPUT_MESSAGE )
    this.appendValueInput( "KEY" )
      .setCheck( "Number" );
    this.appendDummyInput()
      .appendField( new Blockly.FieldDropdown( [
        [ "pressed", "onKeyDownOnce" ],
        [ "released", "onKeyUp" ],
        [ "held", "onKeyDown" ],
      ] ), "TYPE" );
    this.setTooltip(Blockly.Msg.KF_EVENT_KEY_INPUT_TOOLTIP);
    this.appendStatementInput('STACK');
    this.setInputsInline(true);
  }
};


Blockly.Blocks['kiwi_event_time'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_EVENT_TIME_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.EVENT );
    this.appendDummyInput()
      .appendField(Blockly.Msg.KF_EVENT_TIME_MESSAGE_BEFORE );
    this.appendValueInput("MILLISECOND")
        .setCheck("Number");
    this.appendDummyInput()
      .appendField(Blockly.Msg.KF_EVENT_TIME_MESSAGE_AFTER );
    this.setTooltip(Blockly.Msg.KF_EVENT_TIME_TOOLTIP );
    this.appendStatementInput('STACK');
    this.setInputsInline(true);
  }
};


Blockly.Blocks['kiwi_event_time_single'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_EVENT_TIME_SINGLE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.CONTROL );
    this.appendDummyInput()
      .appendField(Blockly.Msg.KF_EVENT_TIME_SINGLE_MESSAGE_BEFORE );
    this.appendValueInput("MILLISECOND")
        .setCheck("Number");
    this.appendDummyInput()
      .appendField(Blockly.Msg.KF_EVENT_TIME_SINGLE_MESSAGE_AFTER );
    this.setTooltip(Blockly.Msg.KF_EVENT_TIME_SINGLE_TOOLTIP );
    this.appendStatementInput('STACK');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks['kiwi_event_message'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_EVENT_MESSAGE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.EVENT );
    this.appendDummyInput()
      .appendField( Blockly.Msg.KF_EVENT_MESSAGE_MESSAGE_BEFORE );
    this.appendValueInput( "MESSAGE" )
        .setCheck( "String" );
    this.setTooltip( Blockly.Msg.KF_EVENT_MESSAGE_TOOLTIP );
    this.appendStatementInput('STACK');
    this.setInputsInline(true);
  }
};

Blockly.Blocks['kiwi_event_animation'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_EVENT_ANIMATION_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.ANIMATION );
    this.appendValueInput("ANIM")
        .setCheck("String")
        .appendField( Blockly.Msg.KF_EVENT_ANIMATION_MESSAGE_BEFORE );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_EVENT_ANIMATION_MESSAGE_AFTER )
        .appendField(new Blockly.FieldDropdown([
            ["completed", "onComplete"], 
            ["stopped", "onStop"], 
            ["started", "onPlay"], 
            ["looped", "onLoop"], 
            ["updated", "onUpdate"]
        ]), "TYPE");
    this.appendStatementInput("STACK");
    this.setInputsInline(true);
    this.setTooltip( Blockly.Msg.KF_EVENT_ANIMATION_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_event_touch_on'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_EVENT_TOUCH_ON_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendValueInput("INST")
        .setCheck("Instance")
        .appendField( Blockly.Msg.KF_EVENT_TOUCH_ON_MESSAGE );
    this.appendStatementInput('STACK');
    this.setInputsInline(true);
    this.setTooltip( Blockly.Msg.KF_EVENT_TOUCH_ON_TOOLTIP );
  }
};



Blockly.Blocks['kiwi_event_level_start'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_EVENT_LEVEL_START_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.EVENT );
    this.appendDummyInput()
        .appendField(Blockly.Msg.KF_EVENT_LEVEL_START_MESSAGE)
        .appendField(new Blockly.FieldDropdown([
            ["starts", "START"], 
            ["switches", "SHUT_DOWN"]
        ]), "TYPE");
    this.setTooltip(Blockly.Msg.KF_EVENT_LEVEL_START_TOOLTIP);
    this.appendStatementInput('STACK');
  }
};


Blockly.Blocks['kiwi_event_instance_properties_set'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_EVENT_INSTANCE_PROPERTIES_SET_HELPURL );
    this.setTooltip(Blockly.Msg.KF_EVENT_INSTANCE_PROPERTIES_SET_TOOLTIP );
    this.setInputsInline(true);
    this.setColour( Blockly.Variables.COLOUR.EVENT );
    this.appendValueInput('PROP_NAME')
        .setCheck("String")
        .appendField(Blockly.Msg.KF_EVENT_INSTANCE_PROPERTIES_SET_MESSAGE_ONE );
    this.appendDummyInput()
        .appendField(Blockly.Msg.KF_EVENT_INSTANCE_PROPERTIES_SET_MESSAGE_TWO );
    this.appendStatementInput('STACK');
  }
};


Blockly.Blocks['kiwi_event_pre_constantly'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_EVENT_PRE_CONSTANTLY_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.EVENT );
    this.appendDummyInput()
      .appendField(Blockly.Msg.KF_EVENT_PRE_CONSTANTLY_MESSAGE);
    this.setTooltip(Blockly.Msg.KF_EVENT_PRE_CONSTANTLY_TOOLTIP);
    this.appendStatementInput('STACK');
  }
};

Blockly.Blocks['kiwi_event_post_constantly'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_EVENT_POST_CONSTANTLY_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.EVENT );
    this.appendDummyInput()
      .appendField(Blockly.Msg.KF_EVENT_POST_CONSTANTLY_MESSAGE);
    this.setTooltip(Blockly.Msg.KF_EVENT_POST_CONSTANTLY_TOOLTIP);
    this.appendStatementInput('STACK');
  }
};


Blockly.Blocks['kiwi_event_constantly_dropdown'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_EVENT_CONSTANTLY_DROPDOWN_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.EVENT );

    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown( [ 
        ["Constantly", "onUpdate"], 
        ["Pre constantly", "onPreUpdate"], 
        ["Post constantly", "onPostUpdate"]
      ]), "TYPE")
      .appendField(Blockly.Msg.KF_EVENT_CONSTANTLY_DROPDOWN_MESSAGE);

    this.setTooltip(Blockly.Msg.KF_EVENT_CONSTANTLY_DROPDOWN_TOOLTIP);
    this.appendStatementInput('STACK');
  }
};


Blockly.Blocks['kiwi_event_touch_return_instance'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_EVENT_TOUCH_RETURN_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.PHYSICS );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_EVENT_TOUCH_RETURN_MESSAGE )
        .appendField(new Blockly.FieldVariable('toucher'), 'VAR');
    this.appendStatementInput("STACK");
    this.setTooltip( Blockly.Msg.KF_EVENT_TOUCH_RETURN_TOOLTIP );
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
  },
  /**
   * Add menu option to create getter block for variable.
   * @param options {!Array} List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function( options ) {
    if ( !this.isCollapsed() ) {
      var option = { enabled: true };
      var name = this.getFieldValue( 'VAR' );
      option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace( '%1', name );
      var xmlField = goog.dom.createDom( 'field', null, name );
      xmlField.setAttribute('name', 'VAR');
      var xmlBlock = goog.dom.createDom( 'block', null, xmlField );
      xmlBlock.setAttribute( 'type', 'variables_get' );
      option.callback = Blockly.ContextMenu.callbackFactory( this, xmlBlock );
      options.push( option );
    }
  }
};


Blockly.Blocks['kiwi_event_stage_touched_local'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_EVENT_STAGE_TOUCHED_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.EVENT );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_EVENT_STAGE_TOUCHED_MESSAGE )
        .appendField(new Blockly.FieldDropdown( [ 
          ["pressed", "onDown"], 
          ["released", "onUp"]
        ]), "TYPE")
        .appendField(new Blockly.FieldVariable('pointer', null, Blockly.FieldVariable.SCOPE.LOCAL ), 'VAR');
    this.appendStatementInput("STACK");
    this.setTooltip( Blockly.Msg.KF_EVENT_STAGE_TOUCHED_TOOLTIP );
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
      return Blockly.Variables.TYPE_POINTER;
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
          Blockly.Variables.Local.changeType(name, Blockly.Variables.TYPE_POINTER, 
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


Blockly.Blocks['kiwi_event_message_value'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_EVENT_MESSAGE_VALUE_HELPURL );
    this.setTooltip( Blockly.Msg.KF_EVENT_MESSAGE_VALUE_TOOLTIP );
    this.setColour( Blockly.Variables.COLOUR.EVENT );
    this.setInputsInline(true);
    this.appendValueInput("MESSAGE")
        .setCheck("String")
        .appendField( Blockly.Msg.KF_EVENT_MESSAGE_VALUE_MESSAGE_ONE );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_EVENT_MESSAGE_VALUE_MESSAGE_TWO )
        .appendField(new Blockly.FieldVariable('value'), 'VAR');
    this.appendStatementInput("STACK");
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
  },
  /**
   * Add menu option to create getter block for value.
   * @param options {!Array} List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function( options ) {
    if ( !this.isCollapsed() ) {
      var option = { enabled: true };
      var name = this.getFieldValue( 'VAR' );
      option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace( '%1', name );
      var xmlField = goog.dom.createDom( 'field', null, name );
      xmlField.setAttribute( 'name', 'VAR' );
      var xmlBlock = goog.dom.createDom( 'block', null, xmlField );
      xmlBlock.setAttribute( 'type', 'variables_get' );
      option.callback = Blockly.ContextMenu.callbackFactory( this, xmlBlock );
      options.push( option );
    }
  }
};
