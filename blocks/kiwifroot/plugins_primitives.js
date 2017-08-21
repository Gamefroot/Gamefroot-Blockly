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
 * @fileoverview Primitive blocks for Kiwifroot.
 * @author benjamin.p.harding@gmail.com (Ben Harding)
 */
'use strict';

goog.provide('Blockly.Blocks.Kiwifroot.plugins.primitives');

goog.require('Blockly.Blocks');


Blockly.Blocks['kiwi_primitives_change_colour'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_PRIMITIVES_CHANGE_COLOUR_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendValueInput("INST")
        .setCheck("Instance")
        .appendField( Blockly.Msg.KF_PRIMITIVES_CHANGE_COLOUR_MESSAGE_ONE );
    this.appendValueInput("COLOUR")
        .setCheck("Colour")
        .appendField( Blockly.Msg.KF_PRIMITIVES_CHANGE_COLOUR_MESSAGE_TWO );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_PRIMITIVES_CHANGE_COLOUR_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_primitives_get_colour'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_PRIMITIVES_GET_COLOUR_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendValueInput("INST")
        .setCheck("Instance")
        .appendField( Blockly.Msg.KF_PRIMITIVES_GET_COLOUR_MESSAGE );
    this.setOutput(true, 'Colour');
    this.setInputsInline(true);
    this.setTooltip( Blockly.Msg.KF_PRIMITIVES_GET_COLOUR_TOOLTIP );
  }
};



Blockly.Blocks['kiwi_primitives_create_rectangle'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_PRIMITIVES_CREATE_RECTANGLE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_PRIMITIVES_CREATE_RECTANGLE_MESSAGE_BEFORE )
        .appendField(new Blockly.FieldVariable('rectangle'), 'VAR');
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
      xmlField.setAttribute( 'name', 'VAR' );
      var xmlBlock = goog.dom.createDom( 'block', null, xmlField );
      xmlBlock.setAttribute( 'type', 'variables_get' );
      option.callback = Blockly.ContextMenu.callbackFactory( this, xmlBlock );
      options.push( option );
    }
  }
};

Blockly.Blocks['kiwi_primitives_create_circle'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_PRIMITIVES_CREATE_CIRCLE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_PRIMITIVES_CREATE_CIRCLE_MESSAGE_BEFORE )
        .appendField(new Blockly.FieldVariable('circle'), 'VAR');
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
   * Add menu option to create getter block for loop variable.
   * @paramoptions  {!Array} List of menu options to add to.
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
      xmlBlock.setAttribute('type', 'variables_get');
      option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
      options.push(option);
    }
  }
};

Blockly.Blocks['kiwi_primitives_create_line'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_PRIMITIVES_CREATE_LINE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_PRIMITIVES_CREATE_LINE_MESSAGE_ONE)
        .appendField(new Blockly.FieldVariable('line'), 'VAR');
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
      xmlBlock.setAttribute('type', 'variables_get');
      option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
      options.push(option);
    }
  }
};

Blockly.Blocks['kiwi_primitives_create_star'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_PRIMITIVES_CREATE_STAR_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_PRIMITIVES_CREATE_STAR_MESSAGE_ONE)
        .appendField(new Blockly.FieldVariable('star'), 'VAR');
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
      xmlBlock.setAttribute('type', 'variables_get');
      option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
      options.push(option);
    }
  }
};

Blockly.Blocks['kiwi_primitives_create_polygon'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_PRIMITIVES_CREATE_POLYGON_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_PRIMITIVES_CREATE_POLYGON_MESSAGE_ONE )
        .appendField(new Blockly.FieldVariable('polygon'), 'VAR');
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
      xmlBlock.setAttribute('type', 'variables_get');
      option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
      options.push(option);
    }
  }
};
