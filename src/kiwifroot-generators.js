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




/*
Overrides for blocks already in the core.
*/





// Override clock type.
Blockly.Kiwifroot['kiwi_event_time'] = function(block) {

  var funcName = defineFunctionFromBranch('onTick', block, 'Executed after time period of time.');

  var tick = Blockly.Kiwifroot.valueToCode(block, 'MILLISECOND', Blockly.Kiwifroot.ORDER_ASSIGNMENT) || 16;


  var constructorCode = errorCheck( this.workspace, ('!' + tick), '`Interval Time Event` block is missing a numeric value.' ) +  
    'this.' + funcName + '_ = this.state.clocks.world.setInterval( function() { \n' +
    Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT + 'if( this.owner && this.owner.exists ) {\n' +
    Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT + 'this.' + funcName + '();\n' + 
    Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT + '}\n' + 
    Blockly.Kiwifroot.INDENT + '}, ' + tick + ', this);';

  var destructorCode = 'if( this.' + funcName + '_ ) this.' + funcName + '_.stop();\n';
  destructorCode += 'this.state.clocks.world.removeTimer( this.' + funcName + '_ );';

  Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.CONSTRUCTOR,constructorCode);
  Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.DESTRUCTOR, destructorCode);

  return null;
};

// Override clock type.
Blockly.Kiwifroot['kiwi_event_time_single'] = function(block) {

  var funcName = Blockly.Kiwifroot.variableDB_.getDistinctName('onSingleTick', Blockly.Procedures.NAME_TYPE);
  var branch = Blockly.Kiwifroot.statementToCode(block, 'STACK');

  var tick = Blockly.Kiwifroot.valueToCode(block, 'MILLISECOND', Blockly.Kiwifroot.ORDER_ASSIGNMENT) || 16; 

  var code = errorCheck( this.workspace, ('!' + tick), '`Single Time Control` block is missing a numeric value.' ) + 
    'this.' + funcName + '_ = this.state.clocks.world.setTimeout( function() { \n' + 
    Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT + 'if( this.owner && this.owner.exists ) {\n' +
    Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT + branch +  
    Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT + '}\n' +
    Blockly.Kiwifroot.INDENT + '}, ' + tick + ', this);\n';
  
  var destructorCode = 'if( this.' + funcName + '_ ) this.' + funcName + '_.stop();\n'; 
  destructorCode += 'this.state.clocks.world.removeTimer( this.' + funcName + '_ );';
  Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.DESTRUCTOR, destructorCode);

  return code;
};

// Override clock type.
Blockly.Kiwifroot[ "kiwi_scratch_events_wait" ] = function( block ) {

  // Functionality copied from `kiwi_event_time_single`,
  // except this takes seconds instead of millis.

  var funcName = Blockly.Kiwifroot.variableDB_.getDistinctName(
      "wait", Blockly.Procedures.NAME_TYPE );
  var branch = Blockly.Kiwifroot.statementToCode( block, "STACK" );
  var tick = Blockly.Kiwifroot.valueToCode(
    block, "SECS", Blockly.Kiwifroot.ORDER_ASSIGNMENT ) || 1;
  var code = "";
  var destructorCode = "";

  code += errorCheck(
      this.workspace,
      ( "!" + tick ),
      "`Wait` block is missing a numeric value." ) +
    "this." + funcName + "_ = " +
    "this.state.clocks.world.setTimeout( function() {\n" +
    Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT +
    "if ( this.owner && this.owner.exists ) {\n" +
    Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT +
    branch +
    Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT +
    "}\n" +
    Blockly.Kiwifroot.INDENT + "}, " + tick + " * 1000, this );\n";

  destructorCode +=
    "if ( this." + funcName + "_ ) this." + funcName + "_.stop();\n" +
    "this.state.clocks.world.removeTimer( this." + funcName + "_ );";

  Blockly.Kiwifroot.provideAddition(
    Blockly.Kiwifroot.DESTRUCTOR, destructorCode );

  return code;
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
