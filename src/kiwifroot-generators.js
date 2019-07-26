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

// Override camera offset not returning to zero.
//
// Shake the camera using offset values...
Blockly.Kiwifroot[ "kiwi_camera_shake_offset" ] = function( block ) {
  var code = "",
    cam = Blockly.Kiwifroot.camera.COMPONENT_PREFIX + ".offset",
    tab = Blockly.Kiwifroot.INDENT,
    trackerName = Blockly.Kiwifroot.variableDB_.getDistinctName(
      "tracker", Blockly.Variables.NAME_TYPE ),
    axis = block.getFieldValue( "AXIS" ),
    duration = Blockly.Kiwifroot.valueToCode(
      block,
      "DURATION",
      Blockly.Kiwifroot.ORDER_ATOMIC ) || 0,
    amplitude = Blockly.Kiwifroot.valueToCode(
      block,
      "AMPLITUDE",
      Blockly.Kiwifroot.ORDER_ATOMIC ) || 0;

  Blockly.Kiwifroot.camera.addCameraToConstructor_.call( this );

  // Create a tracker to control the amplitude.
  code += "var " + trackerName + " = { k: " + amplitude + " };\n";

  // Create tween.
  code += "game.tweens.create( " + trackerName + " ).to(\n";
  code += tab + "{ k: 0 },\n";
  code += tab + duration + " * 1000,\n";
  code += tab + "Kiwi.Animations.Tweens.Easing.Exponential.Out,\n";
  code += tab + "true )\n";
  code += ".onUpdate(\n";

  // Update camera offsets with tween progress.
  code += tab + "function() {\n";
  code += tab + tab + cam + "." + axis + " = " + "Math.round( " +
    trackerName + ".k * Math.sin( this.game.idealFrame ) );\n";
  code += tab + "}, this );\n";

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


// Override textfield creation to add anchor point defaults.
Blockly.Kiwifroot['kiwi_text_create'] = function(block) {

  var value_text = Blockly.Kiwifroot.valueToCode( block, 'TEXT', Blockly.Kiwifroot.ORDER_ATOMIC ) || "''";
  var variable0 = Blockly.Kiwifroot.variableDB_.getName( block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE );

  var t = Blockly.Kiwifroot.INDENT;
  var code  = 'this.' + variable0 + ' = this.state.objects.create( {\n';
  code += t + '"type": "multiline-text",\n';
  code += t + '"x": 0,\n';
  code += t + '"y": 0,\n';
  code += t + '"maxWidth": Infinity,\n';
  code += t + '"text": ' + value_text.replace(/\\\\n/g, "\\n") + '\n';
  code += '}, this.owner.parent, true);\n';
  code += "// Render text so width and height are defined."
  code += "this." + variable0 + ".renderText();\n";
  code += "this." + variable0 + ".anchorPointX = this.state.game.info.data.anchorDefault.x * this." + variable0 + ".width;\n";
  code += "this." + variable0 + ".anchorPointY = this.state.game.info.data.anchorDefault.y * this." + variable0 + ".height;\n";
  code += "\n";

  return code;
};
