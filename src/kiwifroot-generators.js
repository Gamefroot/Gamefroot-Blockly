/*
Blockly generators for Gamefroot
*/

Blockly.JavaScript[ 'kiwi_game_goto_url' ] = function( block ) {
  var value_url = Blockly.JavaScript.valueToCode(block, 'URL', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '';

  code += '// Confirm that user wants to leave the site.\n';
  code += 'if ( !' + value_url + '.match( /^http[s]?:\\/\\//gi ) ) {\n';
  code += '  // User did not supply the protocol.\n';
  code += '  window.alert( "URL " + ' + value_url + ' + " missing protocol. Add \'http:\\/\\/\' or \'https:\\/\\/\' to the address and try again." );\n';
  code += '} else if (\n';
  code += '  ' + value_url + '.match( /^http[s]?:\\/\\/make\.gamefroot\\.com\\//gi ) ) {\n';
  code += '  // Site is on Gamefroot, and we regard it as safe.\n';
  code += '  window.location.assign( ' + value_url + ' );\n';
  code += '} else if ( window.confirm(\n';
  code += '  "You are about to leave Gamefroot and go to " + ' + value_url + ' ) ) {\n';
  code += '  // Site is not on Gamefroot. We should confirm user intent.\n';
  code += '  window.location.assign( ' + value_url + ' );\n';
  code += '}\n';

  return code;
};
