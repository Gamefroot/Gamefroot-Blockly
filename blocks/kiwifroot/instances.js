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
 * @fileoverview Instance blocks for Kiwifroot.
 * @author rani_sputnik@hotmail.com (Ryan Loader)
 * @author benjamin.p.harding@gmail.com (Ben Harding)
 */
'use strict';

goog.provide('Blockly.Blocks.Kiwifroot.instances');

goog.require('Blockly.Blocks');

Blockly.Blocks['kiwi_instance_self'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_INSTANCE_SELF_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.SENSING );
    this.appendDummyInput()
        .appendField(Blockly.Msg.KF_INSTANCE_SELF_MESSAGE);
    this.setInputsInline(true);
    this.setOutput(true, "Instance");
    this.setTooltip(Blockly.Msg.KF_INSTANCE_SELF_TOOLTIP);
  }
};

Blockly.Blocks['kiwi_instance_set'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_INSTANCE_SET_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.MOTION );
    this.appendDummyInput()
    	.appendField("set")
        .appendField(new Blockly.FieldDropdown([
            ["x position","x"]
            ,["y position","y"]
            ,["width", "width"]
            ,["height", "height"]
            ,["rotation", "rotation"]
            ,["scale x", "scaleX"]
            ,["scale y", "scaleY"]
            ,["alpha", "alpha"]
            ,["anchor point x", "anchorPointX"]
            ,["anchor point y", "anchorPointY"]
        ]), "PROP")
        .appendField("of");
    this.appendValueInput("INST")
        .setCheck("Instance");
    this.appendDummyInput()
    	.appendField("to");
    this.appendValueInput("VALUE")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.KF_INSTANCE_SET_TOOLTIP);
  }
};

Blockly.Blocks['kiwi_instance_get'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_INSTANCE_GET_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.MOTION );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
            ["x position","x"]
            ,["y position","y"]
            ,["width", "width"]
            ,["height", "height"]
            ,["rotation", "rotation"]
            ,["scale x", "scaleX"]
            ,["scale y", "scaleY"]
            ,["alpha", "alpha"]
            ,["anchor point x", "anchorPointX"]
            ,["anchor point y", "anchorPointY"]
        ]), "PROP")
        .appendField("of");
    this.appendValueInput("INST")
        .setCheck("Instance");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.KF_INSTANCE_GET_TOOLTIP);
  }
};


Blockly.Blocks['kiwi_instance_get_visible'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_INSTANCE_GET_VISIBLE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.LOOKS );
    this.appendValueInput("INST")
        .setCheck("Instance")
        .appendField( Blockly.Msg.KF_INSTANCE_GET_VISIBLE_MESSAGE );;
    this.setOutput(true, "Boolean");
    this.setInputsInline(true);
    this.setTooltip( Blockly.Msg.KF_INSTANCE_GET_VISIBLE_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_instance_set_visible'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_INSTANCE_SET_VISIBLE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.LOOKS );
    this.appendValueInput("INST")
        .setCheck("Instance")
        .appendField( Blockly.Msg.KF_INSTANCE_SET_VISIBLE_MESSAGE_BEFORE );
    this.appendValueInput("VISIBLE")
        .setCheck("Boolean")
        .appendField( Blockly.Msg.KF_INSTANCE_SET_VISIBLE_MESSAGE_AFTER );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_INSTANCE_GET_VISIBLE_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_instance_death'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_INSTANCE_DEATH_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.CONTROL );
    this.appendValueInput("INST")
        .setCheck("Instance")
        .appendField( Blockly.Msg.KF_INSTANCE_DEATH_MESSAGE );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_INSTANCE_DEATH_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_instance_tag_management'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_INSTANCE_ADD_TAG_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.SENSING );
    this.appendValueInput("TAG")
        .setCheck("String")
        .appendField( new Blockly.FieldDropdown([ 
            ["add", "addTag"], 
            ["remove", "removeTag"]
        ]), "TYPE")
        .appendField( Blockly.Msg.KF_INSTANCE_ADD_TAG_MESSAGE_BEFORE );
    this.appendValueInput("INSTANCE")
        .setCheck("Instance")
        .appendField( Blockly.Msg.KF_INSTANCE_ADD_TAG_MESSAGE_AFTER );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_INSTANCE_ADD_TAG_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_instance_has_tags'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_INSTANCE_HAS_TAG_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.SENSING );
    this.appendValueInput("INSTANCE")
        .setCheck("Instance");
    this.appendValueInput("TAG")
        .setCheck("String")
        .appendField( Blockly.Msg.KF_INSTANCE_HAS_TAG_MESSAGE );
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip( Blockly.Msg.KF_INSTANCE_HAS_TAG_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_instance_get_by_tag'] = {
    init: function() {
        this.setHelpUrl( Blockly.Msg.KF_INSTANCE_GET_BY_TAG_HELPURL );
        this.setColour( Blockly.Variables.COLOUR.SENSING );
        this.appendValueInput("TAG")
            .setCheck("String")
            .appendField(new Blockly.FieldDropdown( [
                ["first", "getFirstChildByTag"], 
                ["last", "getLastChildByTag"]
            ] ), "TYPE")
            .appendField( Blockly.Msg.KF_INSTANCE_GET_BY_TAG_MESSAGE );
        this.setInputsInline(true);
        this.setOutput(true, "Instance");
        this.setTooltip( Blockly.Msg.KF_INSTANCE_GET_BY_TAG_TOOLTIP );
    }
};

Blockly.Blocks['kiwi_instance_get_all_by_tag'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_INSTANCE_GET_ALL_BY_TAG_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.SENSING );
    this.appendValueInput("TAG")
        .setCheck("String")
        .appendField( Blockly.Msg.KF_INSTANCE_GET_ALL_BY_TAG_MESSAGE );
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setTooltip( Blockly.Msg.KF_INSTANCE_GET_ALL_BY_TAG_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_instance_move'] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_INSTANCE_MOVE_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.LOOKS );
    this.appendValueInput("INST_ONE")
        .setCheck("Instance");
    this.appendValueInput("INST_TWO")
        .setCheck("Instance")
        .appendField(new Blockly.FieldDropdown([
            ["move in front", "addChildAfter"], 
            ["move behind", "addChildBefore"], 
            ["swap with", "swapChildren"]
        ]), "METHOD");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_INSTANCE_MOVE_TOOLTIP );
  }
};



Blockly.Blocks['kiwi_instance_execute'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_INSTANCE_EXECUTE_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.CONTROL );
    this.appendValueInput("TEXT")
        .appendField( Blockly.Msg.KF_INSTANCE_EXECUTE_MESSAGE );
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.KF_INSTANCE_EXECUTE_TOOLTIP);
  }
};


Blockly.Blocks['kiwi_instance_properties_set'] = {
  init: function() {

    this.setHelpUrl( Blockly.Msg.KF_INSTANCE_PROPERTIES_SET_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.EVENT );

    this.appendValueInput("PROP_NAME")
        .setCheck("String")
        .appendField( Blockly.Msg.KF_INSTANCE_PROPERTIES_SET_MESSAGE_ONE );
    this.appendValueInput("VALUE")
        .appendField( Blockly.Msg.KF_INSTANCE_PROPERTIES_SET_MESSAGE_TWO );
    this.appendValueInput("INST")
        .setCheck("Instance")
        .appendField( Blockly.Msg.KF_INSTANCE_PROPERTIES_SET_MESSAGE_THREE );
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip( Blockly.Msg.KF_INSTANCE_PROPERTIES_SET_TOOLTIP );
  }
};

Blockly.Blocks['kiwi_instance_properties_get'] = {
  init: function() {

    this.setHelpUrl( Blockly.Msg.KF_INSTANCE_PROPERTIES_GET_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.EVENT );

    this.appendValueInput("PROP_NAME")
        .setCheck("String")
        .appendField( Blockly.Msg.KF_INSTANCE_PROPERTIES_GET_MESSAGE_ONE );
    this.appendValueInput("INST")
        .setCheck("Instance")
        .appendField( Blockly.Msg.KF_INSTANCE_PROPERTIES_GET_MESSAGE_TWO );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip( Blockly.Msg.KF_INSTANCE_PROPERTIES_GET_TOOLTIP );
  }
};


// 22/10/2015

Blockly.Blocks['kiwi_instance_set_position'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_INSTANCE_SET_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.MOTION );
    this.appendDummyInput()
        .appendField("set")
        .appendField(new Blockly.FieldDropdown([
            ["x","x"]
            ,["y","y"]
        ]), "PROP")
        .appendField("position of");
    this.appendValueInput("INST")
        .setCheck("Instance");
    this.appendDummyInput()
        .appendField("to");
    this.appendValueInput("VALUE")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.KF_INSTANCE_SET_TOOLTIP);
  }
};

Blockly.Blocks[ "kiwi_instance_set_position_from_location" ] = {
  init: function() {
    this.setHelpUrl(
        Blockly.Msg.KF_INSTANCE_SET_POSITION_FROM_LOCATION_HELPURL );
    this.setColour( Blockly.Variables.COLOUR.MOTION );
    this.appendDummyInput()
        .appendField( "set position of" );
    this.appendValueInput( "INST" )
        .setCheck( "Instance" );
    this.appendDummyInput()
        .appendField( "to" );
    this.appendValueInput( "VALUE" )
        .setCheck( "Coordinate" );
    this.setInputsInline( true );
    this.setPreviousStatement( true );
    this.setNextStatement( true );
    this.setTooltip(
        Blockly.Msg.KF_INSTANCE_SET_POSITION_FROM_LOCATION_TOOLTIP );
  }
};


Blockly.Blocks['kiwi_instance_set_dimensions'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_INSTANCE_SET_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.MOTION );
    this.appendDummyInput()
        .appendField("set")
        .appendField(new Blockly.FieldDropdown([
            ,["width", "width"]
            ,["height", "height"]
        ]), "PROP")
        .appendField("of");
    this.appendValueInput("INST")
        .setCheck("Instance");
    this.appendDummyInput()
        .appendField("to");
    this.appendValueInput("VALUE")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.KF_INSTANCE_SET_TOOLTIP);
  }
};

Blockly.Blocks['kiwi_instance_set_rotation'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_INSTANCE_SET_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.MOTION );
    this.appendDummyInput()
        .appendField("set rotation of");
    this.appendValueInput("INST")
        .setCheck("Instance");
    this.appendDummyInput()
        .appendField("to");
    this.appendValueInput("VALUE")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.KF_INSTANCE_SET_TOOLTIP);
  }
};

Blockly.Blocks['kiwi_instance_set_scale'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_INSTANCE_SET_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.MOTION );
    this.appendDummyInput()
        .appendField("set scale")
        .appendField(new Blockly.FieldDropdown([
            ["x", "scaleX"]
            ,["y", "scaleY"]
        ]), "PROP")
        .appendField("of");
    this.appendValueInput("INST")
        .setCheck("Instance");
    this.appendDummyInput()
        .appendField("to");
    this.appendValueInput("VALUE")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.KF_INSTANCE_SET_TOOLTIP);
  }
};

Blockly.Blocks['kiwi_instance_set_alpha'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_INSTANCE_SET_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.LOOKS );
    this.appendDummyInput()
        .appendField("set alpha of");
    this.appendValueInput("INST")
        .setCheck("Instance");
    this.appendDummyInput()
        .appendField("to");
    this.appendValueInput("VALUE")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.KF_INSTANCE_SET_TOOLTIP);
  }
};

Blockly.Blocks['kiwi_instance_set_anchor_point'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_INSTANCE_SET_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.MOTION );
    this.appendDummyInput()
        .appendField("set anchor point")
        .appendField(new Blockly.FieldDropdown([
            ["x", "anchorPointX"]
            ,["y", "anchorPointY"]
        ]), "PROP")
        .appendField("of");
    this.appendValueInput("INST")
        .setCheck("Instance");
    this.appendDummyInput()
        .appendField("to");
    this.appendValueInput("VALUE")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.KF_INSTANCE_SET_TOOLTIP);
  }
};

// Snap anchor point to instance centroid.
Blockly.Blocks[ "kiwi_instance_center_anchor_point" ] = {
  init: function() {
    this.setHelpUrl( Blockly.Msg.KF_INSTANCE_GET_HELPURL );
    this.setTooltip( Blockly.Msg.KIWI_INSTANCE_CENTER_ANCHOR_POINT_TOOLTIP );
    this.setColour( Blockly.Variables.COLOUR.MOTION );

    this.setInputsInline( true );
    this.setPreviousStatement( true );
    this.setNextStatement( true );

    this.appendDummyInput()
        .appendField( Blockly.Msg.KIWI_INSTANCE_CENTER_ANCHOR_POINT_MSG );
    this.appendValueInput( "INST" )
        .setCheck( "Instance" );
  }
};


Blockly.Blocks['kiwi_instance_get_position'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_INSTANCE_GET_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.MOTION );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
            ["x","x"]
            ,["y","y"]
        ]), "PROP")
        .appendField("position of");
    this.appendValueInput("INST")
        .setCheck("Instance");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.KF_INSTANCE_GET_TOOLTIP);
  }
};


Blockly.Blocks['kiwi_instance_get_location_from_position'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_INSTANCE_GET_LOCATION_FROM_POSITION_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.MOTION );
    this.appendDummyInput()
        .appendField("get location of");
    this.appendValueInput("INST")
        .setCheck("Instance");
    this.setInputsInline(true);
    this.setOutput(true, "Coordinate");
    this.setTooltip(Blockly.Msg.KF_INSTANCE_GET_LOCATION_FROM_POSITION_TOOLTIP);
  }
};

Blockly.Blocks['kiwi_instance_get_dimensions'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_INSTANCE_GET_DIMENSIONS_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.MOTION );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
            ["actual", "actual"]
            ,["raw", "raw"]
        ]), "MODE")
        .appendField( " " );
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
            ["width", "width"]
            ,["height", "height"]
        ]), "PROP")
        .appendField("of");
    this.appendValueInput("INST")
        .setCheck("Instance");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.KF_INSTANCE_GET_DIMENSIONS_TOOLTIP);
  }
};

Blockly.Blocks['kiwi_instance_get_rotation'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_INSTANCE_GET_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.MOTION );
    this.appendDummyInput()
        .appendField("rotation of");
    this.appendValueInput("INST")
        .setCheck("Instance");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.KF_INSTANCE_GET_TOOLTIP);
  }
};
Blockly.Blocks['kiwi_instance_get_scale'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_INSTANCE_GET_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.MOTION );
    this.appendDummyInput()
        .appendField("scale")
        .appendField(new Blockly.FieldDropdown([
            ["x", "scaleX"]
            ,["y", "scaleY"]
        ]), "PROP")
        .appendField("of");
    this.appendValueInput("INST")
        .setCheck("Instance");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.KF_INSTANCE_GET_TOOLTIP);
  }
};

Blockly.Blocks['kiwi_instance_get_alpha'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_INSTANCE_GET_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.LOOKS );
    this.appendDummyInput()
        .appendField("get alpha of");
    this.appendValueInput("INST")
        .setCheck("Instance");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.KF_INSTANCE_GET_TOOLTIP);
  }
};

Blockly.Blocks['kiwi_instance_get_anchor_point'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_INSTANCE_GET_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.MOTION );
    this.appendDummyInput()
        .appendField('anchor point')
        .appendField(new Blockly.FieldDropdown([
            ["x", "anchorPointX"]
            ,["y", "anchorPointY"]
        ]), "PROP")
        .appendField("of");
    this.appendValueInput("INST")
        .setCheck("Instance");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.KF_INSTANCE_GET_TOOLTIP);
  }
};