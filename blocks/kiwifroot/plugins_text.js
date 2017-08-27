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
 * @fileoverview Textfield blocks for Kiwifroot.
 * @author benjamin.p.harding@gmail.com (Ben Harding)
 */
'use strict';

goog.provide('Blockly.Blocks.Kiwifroot.plugins.text');

goog.require('Blockly.Blocks');



Blockly.Blocks['kiwi_text_numeric_set'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_TEXT_NUMERIC_SET_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendValueInput("INST")
        .setCheck("Instance")
        .appendField( Blockly.Msg.KF_TEXT_NUMERIC_SET_MESSAGE_ONE )
        .appendField(new Blockly.FieldDropdown( [
          ['font size', 'fontSize'],
          ['max width', 'maxWidth'],
          ['line height', 'lineHeightNormalized']
        ] ), "PROP")
        .appendField( Blockly.Msg.KF_TEXT_NUMERIC_SET_MESSAGE_TWO );
    this.appendValueInput("NUMBER")
        .setCheck("Number")
        .appendField( Blockly.Msg.KF_TEXT_NUMERIC_SET_MESSAGE_THREE );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_TEXT_NUMERIC_SET_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_text_colour_set'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_TEXT_COLOUR_SET_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendValueInput("INST")
        .setCheck("Instance")
        .appendField( Blockly.Msg.KF_TEXT_COLOUR_SET_MESSAGE_ONE );
    this.appendValueInput("COLOUR")
        .setCheck("Colour")
        .appendField( Blockly.Msg.KF_TEXT_COLOUR_SET_MESSAGE_TWO );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_TEXT_COLOUR_SET_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_text_text_set'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_TEXT_TEXT_SET_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendValueInput("INST")
        .setCheck("Instance")
        .appendField( Blockly.Msg.KF_TEXT_TEXT_SET_MESSAGE_ONE );
    this.appendValueInput("TEXT")
        .setCheck("String")
        .appendField( Blockly.Msg.KF_TEXT_TEXT_SET_MESSAGE_TWO );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_TEXT_TEXT_SET_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_text_alignment_set'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_TEXT_ALIGNMENT_SET_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendValueInput("INST")
        .setCheck("Instance")
        .appendField( Blockly.Msg.KF_TEXT_ALIGNMENT_SET_MESSAGE_ONE );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_TEXT_ALIGNMENT_SET_MESSAGE_TWO )
        .appendField(new Blockly.FieldDropdown( [
          ['left', 'left'],
          ['center', 'center'],
          ['right', 'right'] 
        ] ), "VALUE");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_TEXT_ALIGNMENT_SET_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_text_weight_set'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_TEXT_WEIGHT_SET_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendValueInput("INST")
        .setCheck("Instance")
        .appendField( Blockly.Msg.KF_TEXT_WEIGHT_SET_MESSAGE_ONE );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_TEXT_WEIGHT_SET_MESSAGE_TWO )
        .appendField(new Blockly.FieldDropdown( [
          ['normal', 'normal'],
          ['bold', 'bold'],
          ['100', '100'],
          ['200', '200'],
          ['300', '300'],
          ['400', '400'],
          ['500', '500'],
          ['600', '600'],
          ['700', '700'] ,
          ['800', '800'] ,
          ['900', '900'] 
        ] ), "VALUE");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_TEXT_WEIGHT_SET_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_text_family_set'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_TEXT_FAMILY_SET_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendValueInput("INST")
        .setCheck("Instance")
        .appendField( Blockly.Msg.KF_TEXT_FAMILY_SET_MESSAGE_ONE );
    this.appendValueInput("FAMILY")
        .setCheck("String")
        .appendField( Blockly.Msg.KF_TEXT_FAMILY_SET_MESSAGE_TWO );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_TEXT_FAMILY_SET_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_text_font_presets'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_TEXT_FONT_PRESETS_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown( [ 
          ["sans-serif", "sans-serif"], 
          ["serif", "serif"], 
          ["cursive", "cursive"], 
          ["monospace", "monospace"],
          ["helvetica", "helvetica"], 
          ["arial", "arial"],
          ["'Times New Roman'", "'Times New Roman'"]
        ] ), "FONT");
    this.setInputsInline(true);
    this.setOutput(true, 'String');
    this.setTooltip( Blockly.Msg.KF_TEXT_FONT_PRESETS_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_text_numeric_get'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_TEXT_NUMERIC_GET_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendValueInput("INST")
        .setCheck("Instance")
        .appendField( Blockly.Msg.KF_TEXT_NUMERIC_GET_MESSAGE_ONE )
        .appendField(new Blockly.FieldDropdown( [
          ['font size', 'fontSize'],
          ['max width', 'maxWidth'],
          ['line height', 'lineHeightNormalized']
        ] ), "PROP")
        .appendField( Blockly.Msg.KF_TEXT_NUMERIC_GET_MESSAGE_TWO );
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip( Blockly.Msg.KF_TEXT_NUMERIC_GET_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_text_colour_get'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_TEXT_COLOUR_GET_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendValueInput("INST")
        .setCheck("Instance")
        .appendField( Blockly.Msg.KF_TEXT_COLOUR_GET_MESSAGE );
    this.setInputsInline(true);
    this.setOutput(true, 'Colour');
    this.setTooltip( Blockly.Msg.KF_TEXT_COLOUR_GET_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_text_text_get'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_TEXT_TEXT_GET_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendValueInput("INST")
        .setCheck("Instance")
        .appendField( Blockly.Msg.KF_TEXT_TEXT_GET_MESSAGE );
    this.setInputsInline(true);
    this.setOutput(true, 'String');
    this.setTooltip( Blockly.Msg.KF_TEXT_TEXT_GET_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_text_create'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_TEXT_CREATE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.DRAW );
    this.appendDummyInput()
        .appendField( Blockly.Msg.KF_TEXT_CREATE_MESSAGE_ONE )
        .appendField(new Blockly.FieldVariable('textfield'), 'VAR');
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
