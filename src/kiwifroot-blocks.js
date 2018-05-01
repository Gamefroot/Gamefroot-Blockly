/*
Blockly blocks for Gamefroot
*/


Blockly.Blocks[ "kiwi_game_goto_url" ] = {
  init: function() {
    this.jsonInit( {
      "type": "kiwi_game_goto_url",
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
      "tooltip": "Prompt the user to navigate to the specified URL. Be sure to specify a protocol, e.g. https://example.com.",
      "helpUrl": ""
    } );
  }
};
