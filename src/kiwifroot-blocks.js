/*
Blockly blocks for Gamefroot
*/


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
