/*
Blockly generators for Gamefroot
*/

Blockly.JavaScript[ 'kiwi_game_open_url' ] = function( block ) {
  var value_url = Blockly.JavaScript.valueToCode(block, 'URL', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '';

  code += '// Confirm that user wants to leave the site.\n';
  code += 'if ( !' + value_url + '.match( /^http[s]?:\\/\\//gi ) ) {\n';
  code += '  // User did not supply the protocol.\n';
  code += '  window.alert( "URL " + ' + value_url + ' + " missing protocol. Add \'http:\\/\\/\' or \'https:\\/\\/\' to the address and try again." );\n';
  code += '} else if (\n';
  code += '  ' + value_url + '.match( /^http[s]?:\\/\\/make\.gamefroot\\.com\\//gi ) ) {\n';
  code += '  // Site is on Gamefroot, and we regard it as safe.\n';
  code += '  window.open( ' + value_url + ' );\n';
  code += '} else if ( window.confirm(\n';
  code += '  "You are about to leave Gamefroot and go to " + ' + value_url + ' ) ) {\n';
  code += '  // Site is not on Gamefroot. We should confirm user intent.\n';
  code += '  window.open( ' + value_url + ' );\n';
  code += '}\n';

  return code;
};

// Does the instance exist?
Blockly.JavaScript[ "kiwi_instance_exists" ] = function( block ) {
  var value_inst = Blockly.Kiwifroot.valueToCode(
    block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || "(null)";
  var code = "( " + value_inst + " && " + value_inst + ".exists )";
  return [ code, Blockly.Kiwifroot.ORDER_ATOMIC ];
};


// Override buggy definition.
// The original version didn't check whether the `getGameSoundByID` call
// returned structured data, and could crash the whole game on compile
// if it was pointing at the wrong data - e.g. in a remix situation.
Blockly.Kiwifroot[ "kiwi_get_editor_sounds" ] = function ( block ) {
  var script;
  var code = null;
  var dropdownProp = block.getFieldValue( "PROP" );
  if ( typeof LevelEditor !== "undefined" && dropdownProp !== "none" ) {
    script = LevelEditor.getGameSoundByID( dropdownProp );
    if ( script ) {
      code =  script.id;
    }
  }

  return [ code, Blockly.Kiwifroot.ORDER_ATOMIC ];
};
