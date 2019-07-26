/*
Blockly blocks for Gamefroot
*/


// TODO: Deprecate blocks that are no longer used.
// - kiwi_event_constantly
// - kiwi_event_pre_constantly
// - kiwi_event_post_constantly
// - kiwi_arcadephysics_set_enabled
// - kiwi_instance_select

//
// NEW BLOCKS
//

Blockly.Blocks[ "kiwi_game_open_url" ] = {
  init: function() {
    this.jsonInit( {
      "type": "kiwi_game_open_url",
      "message0": "go to URL %1",
      "args0": [
        {
          "type": "input_value",
          "name": "URL",
          "check": "String"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Variables.COLOUR.CONTROL,
      "tooltip": "Open the specified URL. If it is not a Gamefroot location, prompt the user to continue. Be sure to specify a protocol, e.g. https://example.com.",
      "helpUrl": ""
    } );
  }
};

// Does the instance exist?
Blockly.Blocks[ "kiwi_instance_exists" ] = {
  init: function() {
    this.jsonInit({
        "message0": "%1 exists",
        "args0": [
          {
            "type": "input_value",
            "name": "INST",
            "check": [ "Instance" ],
          }
        ],
        "output": "Boolean",
        "colour": Blockly.Variables.COLOUR_BOOLEAN,
        "tooltip": "Check if an instance has been destroyed. You may experience unusual results or errors if you try to operate on a destroyed instance.",
        "helpUrl": "",
    } );
  }
};

//
// TWEAKED BLOCKS
//

Blockly.Blocks['kiwi_event_create'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.KF_EVENT_CREATE_HELPURL);
    this.setColour( Blockly.Variables.COLOUR.EVENT );
    this.appendDummyInput()
    	.appendField(Blockly.Msg.KF_EVENT_CREATE_MESSAGE);
    this.setTooltip( "This code runs when the game object is created. Caution: the level starts after all initial game objects are created, so other objects may not exist when this code runs. Consider using \"When the level starts\"." );
    this.appendStatementInput('STACK');
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
    this.setTooltip( "This code runs once every time you play a level. The level \"starts\" once all initial game objects have been created, and \"switches\" once you change to another level. Caution: game objects may only work properly between the start and switch events." );
    this.appendStatementInput('STACK');
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
    this.setTooltip( "Return an instance that has this tag. Caution: you may not get a result if you use this in a When Created block. It will only work properly after the level starts." );
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
    this.setTooltip( "Return all instances that have this tag. Caution: you may not get results if you use this in a When Created block. It will only work properly after the level starts." );
  }
};
