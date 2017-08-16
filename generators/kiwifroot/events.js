/**
 * @license
 * Visual Blocks Language
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
 * @fileoverview Generating Kiwifroot Kiwifroot for event blocks.
 * @author rani_sputnik@hotmail.com (Ryan Loader)
 * @author benjamin.p.harding@gmail.com (Benjamin Harding)
 */
'use strict';

goog.provide('Blockly.Kiwifroot.events');

goog.require('Blockly.Kiwifroot');


function addMessageRecievedBlock() {

	var t = Blockly.Kiwifroot.INDENT;
	var funcName = Blockly.Kiwifroot.provideFunction_(
		'onMessageReceived',
		[ Blockly.Kiwifroot.FUNCTION_NAME_PLACEHOLDER_ + ' = function( name, message ) {',
        t + 'switch( message ) {',
        '{{'+t+t+',EVENT_MESSAGE_RELEASED,\n}}',
        t + '}',
        '};']);


	var constructorCode = 'this.owner.properties.onUpdate( this.' + funcName + ', this, "_messaging_");';
	Blockly.Kiwifroot.provideAdditionOnce('EventMessageRecieved', Blockly.Kiwifroot.CONSTRUCTOR, constructorCode);
	
};

Blockly.Kiwifroot['kiwi_event_create'] = function(block) {
	var funcName = defineFunctionFromBranch('onCreate', block, 'Executed when this script is initially created.');

	var bootCode = '//Attach the information to the boot method.\n' + 
		'\t//This is to make sure all the components are loaded/attached before executing any code.\n' +
		'\tthis.' + funcName + '();';

	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.BOOT_END, bootCode);
	return null;
};


Blockly.Kiwifroot['kiwi_event_remove'] = function(block) {
	var codeComment = 'Executed when this script is to be removed.\n';
	codeComment += 'Either because the level is now being changed, or because it has been destroyed';

	var funcName = defineFunctionFromBranch('onRemove', block, codeComment);

	var destructorCode = 'this.'+funcName + '();';
	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.DESTRUCTOR, destructorCode);

	return null;
};

Blockly.Kiwifroot['kiwi_event_constantly'] = function(block){
	var funcName = defineFunctionFromBranch('onUpdate', block, 'Executed every frame.');
	var constructorCode = 'this.state.robots.onUpdate.add(this.'+funcName + ', this);';
	var destructorCode = 'this.state.robots.onUpdate.remove(this.'+funcName+ ', this);';

	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.CONSTRUCTOR, constructorCode);
	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.DESTRUCTOR, destructorCode);
	return null;
};

// Pressed / Released

Blockly.Kiwifroot['kiwi_event_stage_input'] = function(block) {

  var dropdown_type = block.getFieldValue( 'TYPE' );

  var funcName = defineFunctionFromBranch('onStageInput', block, 'Executed whenever the stage is pressed.');

  var constructorCode = 'this.game.input.' + dropdown_type + '.add(this.'+funcName+', this, 25);';
  var destructorCode = 'this.game.input.' + dropdown_type + '.remove(this.'+funcName+', this);';

  Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.CONSTRUCTOR, constructorCode);
  Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.DESTRUCTOR, destructorCode);
  return null;
};

//Instance Pressed / Released

Blockly.Kiwifroot['kiwi_event_inst_input'] = function(block) {
  // Create an onPressed function with the onPressed section
  var dropdown_type = block.getFieldValue( 'TYPE' );
  var dropdown_namespace = dropdown_type.toUpperCase();

  var t = Blockly.Kiwifroot.INDENT;
  var SECTION_EVENT = 'EVENT_PRESSED_' +dropdown_namespace ;
  
  var funcName = Blockly.Kiwifroot.provideFunction_(
    ( 'onInstanceInput' + dropdown_namespace ),
    [ Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + ' = function(x, y, timeDown, timeUp, duration, pointer) {',
    	t + 'var point = this.game.cameras.defaultCamera.transformPoint( pointer.point );\n',
        '{{,' + SECTION_EVENT + ',\n}}',
        '};']);
  // Add the add/remove listeners in the constructor/desctructor
  var constructorCode = 'this.game.input.' + dropdown_type + '.add(this.'+funcName+', this, 50);';
  var destructorCode = 'this.game.input.' + dropdown_type + '.remove(this.'+funcName+', this);';

  Blockly.Kiwifroot.provideAdditionOnce('EventInstanceInput' + dropdown_namespace , Blockly.Kiwifroot.CONSTRUCTOR, constructorCode);
  Blockly.Kiwifroot.provideAdditionOnce('EventInstanceInput' + dropdown_namespace , Blockly.Kiwifroot.DESTRUCTOR, destructorCode);

  // Add the code into the onPressed function
  var inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || 'this.owner';

  var branch = Blockly.Kiwifroot.statementToCode(block, 'STACK');
  	
  	var code = errorCheck( this.workspace, ('!' + inst), "`Instance Pressed/Released Event` block is missing a Instance value." );
    code += 'if ('+inst+'.box.worldHitbox.containsPoint( point )) {\n' + branch + '}';  
    code = Blockly.Kiwifroot.prefixLines(code, Blockly.Kiwifroot.INDENT);

	Blockly.Kiwifroot.provideAddition( SECTION_EVENT, code );

	return null;
};


Blockly.Kiwifroot['kiwi_event_key_input'] = function(block) {
  	var dropdown_type = block.getFieldValue( 'TYPE' );
  	var dropdown_namespace = dropdown_type.toUpperCase();

	var t = Blockly.Kiwifroot.INDENT;
	var SECTION_EVENT = 'EVENT_KEY_' + dropdown_namespace;

	var funcName = Blockly.Kiwifroot.provideFunction_(
		( 'onKeyPressed' + dropdown_namespace ),
		[ Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + ' = function(keyCode) {',
        t + 'switch (keyCode) {',
        '{{'+t+t+',' + SECTION_EVENT + ',\n}}',
        t + '}',
        '};']);

	// Add the remove function
	var destructorCode = 'this.game.input.keyboard.' + dropdown_type + '.remove(this.' + funcName + ', this);';
	Blockly.Kiwifroot.provideAdditionOnce('EventKeyInput' + dropdown_namespace, Blockly.Kiwifroot.DESTRUCTOR, destructorCode);


	var constructorCode = 'this.game.input.keyboard.' + dropdown_type + '.add(this.' + funcName + ', this);';
	Blockly.Kiwifroot.provideAdditionOnce('EventKeyInput' + dropdown_namespace, Blockly.Kiwifroot.CONSTRUCTOR, constructorCode);

	// Generate the new function
	var keyCode = Blockly.Kiwifroot.valueToCode(block, 'KEY', Blockly.Kiwifroot.ORDER_ASSIGNMENT) || '32';
	var funcName = defineFunctionFromBranch('onKeyInput', block);

	var code = 'case ' + keyCode + ': this.'+funcName+'(); break;';

	Blockly.Kiwifroot.provideAddition( SECTION_EVENT, code);
	return null;
};


Blockly.Kiwifroot['kiwi_event_time'] = function(block) {

	var funcName = defineFunctionFromBranch('onTick', block, 'Executed after time period of time.');

	var tick = Blockly.Kiwifroot.valueToCode(block, 'MILLISECOND', Blockly.Kiwifroot.ORDER_ASSIGNMENT) || 16;


	var constructorCode = errorCheck( this.workspace, ('!' + tick), '`Interval Time Event` block is missing a numeric value.' ) +  
		'this.' + funcName + '_ = this.game.time.clock.setInterval( function() { \n' +
		Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT + 'if( this.owner && this.owner.exists ) {\n' +
		Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT + 'this.' + funcName + '();\n' + 
		Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT + '}\n' + 
		Blockly.Kiwifroot.INDENT + '}, ' + tick + ', this);';

	var destructorCode = 'if( this.' + funcName + '_ ) this.' + funcName + '_.stop();\n';
	destructorCode += 'this.game.time.clock.removeTimer( this.' + funcName + '_ );';

	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.CONSTRUCTOR,constructorCode);
	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.DESTRUCTOR, destructorCode);

	return null;
};

Blockly.Kiwifroot['kiwi_event_time_single'] = function(block) {

	var funcName = Blockly.Kiwifroot.variableDB_.getDistinctName('onSingleTick', Blockly.Procedures.NAME_TYPE);
	var branch = Blockly.Kiwifroot.statementToCode(block, 'STACK');

	var tick = Blockly.Kiwifroot.valueToCode(block, 'MILLISECOND', Blockly.Kiwifroot.ORDER_ASSIGNMENT) || 16; 

	var code = errorCheck( this.workspace, ('!' + tick), '`Single Time Control` block is missing a numeric value.' ) + 
		'this.' + funcName + '_ = this.game.time.clock.setTimeout( function() { \n' + 
		Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT + 'if( this.owner && this.owner.exists ) {\n' +
		Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT + branch +  
		Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT + '}\n' +
		Blockly.Kiwifroot.INDENT + '}, ' + tick + ', this);\n';
	
	var destructorCode = 'if( this.' + funcName + '_ ) this.' + funcName + '_.stop();\n'; 
	destructorCode += 'this.game.time.clock.removeTimer( this.' + funcName + '_ );';
	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.DESTRUCTOR, destructorCode);

	return code;
};

Blockly.Kiwifroot['kiwi_event_message'] = function(block) {

	addMessageRecievedBlock();

	var message = Blockly.Kiwifroot.valueToCode(block, 'MESSAGE', Blockly.Kiwifroot.ORDER_ASSIGNMENT) || 'message';
	var funcName = defineFunctionFromBranch('executeMessage' + message.slice(1, message.length - 1), block, "Executed when the " + message + " is received.");

	// Generate the code for the switch
	var code = 'case ' + message + ':\n';
	code += '\t\t\tthis.' + funcName + '();\n';
	code += '\t\t\tbreak;';

	Blockly.Kiwifroot.provideAddition('EVENT_MESSAGE_RELEASED', code);

	return null;
};


Blockly.Kiwifroot['kiwi_event_animation'] = function(block) {

  	Blockly.Kiwifroot.addAnimationToConstructor_.call( this );

  	var value_anim = Blockly.Kiwifroot.valueToCode( block, 'ANIM', Blockly.Kiwifroot.ORDER_ATOMIC ) || '""';
  	var dropdown_type = block.getFieldValue( 'TYPE' );

	var funcName = defineFunctionFromBranch( 'onAnimation', block );

	var bootCode  = errorCheck( this.workspace, ('!' + value_anim), '`Animation Event` block is missing a Text operator.' );
		bootCode += 'var anim = ' + Blockly.Kiwifroot.animation.COMPONENT_PREFIX + '.getAnimation(' + value_anim + ');\n';
		bootCode += '\tif( anim ) {\n';
		bootCode += '\t\tanim.' + dropdown_type + '.add(this.' + funcName + ', this);\n';
		bootCode += '\t}\n';

	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.BOOT, bootCode);

  	return null;
};

Blockly.Kiwifroot['kiwi_event_touch_on'] = function(block) {

	Blockly.Kiwifroot.arcadephysics.addArcadePhysicsToConstructor_.call( this);

  	var value_inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || null;

	var funcName = Blockly.Kiwifroot.provideFunction_(
		'onTouch',
		[ Blockly.Kiwifroot.FUNCTION_NAME_PLACEHOLDER_ + ' = function( instanceA, instanceB ) {',
        '{{\t,EVENT_TOUCH_ON,\n}}',
        '};']);

  	var code = Blockly.Kiwifroot.arcadephysics.SYSTEM_PREFIX + '.onCollision.add( this.' + funcName + ', this );';
	Blockly.Kiwifroot.provideAdditionOnce( 'EventTouchOn', Blockly.Kiwifroot.BOOT, code );

	var code = Blockly.Kiwifroot.arcadephysics.SYSTEM_PREFIX +'.onCollision.remove( this.' + funcName + ', this );';
	Blockly.Kiwifroot.provideAddition( Blockly.Kiwifroot.DESTRUCTOR, code );

	var funcName = defineFunctionFromBranch( 'touchedByInstance', block );

	//var code = errorCheck( this.workspace, ('!' + value_inst), '`On Touch Event` block could not find a Instance.' );
	
	var code = 'if( instanceA === this.owner && instanceB === ' + value_inst + ' || \n\tinstanceA === ' + value_inst + ' && instanceB === this.owner) {\n\t\t this.' + funcName + '(); \n\t\t }\n';
	Blockly.Kiwifroot.provideAddition('EVENT_TOUCH_ON', code);

  	return null;
};


Blockly.Kiwifroot['kiwi_event_level_start'] = function(block){
	
	var branch = Blockly.Kiwifroot.statementToCode(block, 'STACK');
  	var dropdown_type = block.getFieldValue( 'TYPE' );

	var funcName = Blockly.Kiwifroot.variableDB_.getDistinctName('onLevelEvent', Blockly.Procedures.NAME_TYPE);

	funcName = Blockly.Kiwifroot.provideFunction_(
		funcName,
		[ Blockly.Kiwifroot.FUNCTION_NAME_PLACEHOLDER_ + ' = function( event ) {',
		'\t/*',
		'\t Executed when the level starts.',
		'\t*/',
		'\tif( event !== Kiwifroot.States.Level.EVENTS["' + dropdown_type + '"] ) {',
		'\t\treturn;',
        '\t}\n',
        branch,
        '};']);


	var constructorCode = 'this.state.onExecute.add(this.' + funcName + ', this);';
	var destructorCode = 'this.state.onExecute.remove(this.' + funcName + ', this);';

	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.CONSTRUCTOR, constructorCode);
	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.DESTRUCTOR, destructorCode);
	return null;
};


Blockly.Kiwifroot['kiwi_event_instance_properties_set'] = function(block){
	
	var value_name = Blockly.Kiwifroot.valueToCode(block, 'PROP_NAME', Blockly.Kiwifroot.ORDER_ATOMIC) || null;
	var funcName = defineFunctionFromBranch('onPropertySet', block, "When the property " + value_name + " updates.");


	var constructorCode = 'this.owner.properties.onUpdate( this.' + funcName + ', this, ' + value_name + ' );';
	//var destructorCode = 'this.owner.properties.removeOnUpdate( this.' + funcName + ', this, ' + value_name + ');';

	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.CONSTRUCTOR, constructorCode);
	//Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.DESTRUCTOR, destructorCode);
	return null;
};


Blockly.Kiwifroot['kiwi_event_pre_constantly'] = function(block){
	var funcName = defineFunctionFromBranch('onPreUpdate', block, 'Executed every frame before the regular update method.');
	var constructorCode = 'this.state.robots.onPreUpdate.add(this.'+funcName + ', this);';
	var destructorCode = 'this.state.robots.onPreUpdate.remove(this.'+funcName+ ', this);';

	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.CONSTRUCTOR, constructorCode);
	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.DESTRUCTOR, destructorCode);
	return null;
};

Blockly.Kiwifroot['kiwi_event_post_constantly'] = function(block){
	var funcName = defineFunctionFromBranch('onPostUpdate', block, 'Executed every frame after the regular update method.');
	var constructorCode = 'this.state.robots.onPostUpdate.add(this.'+funcName + ', this);';
	var destructorCode = 'this.state.robots.onPostUpdate.remove(this.'+funcName+ ', this);';

	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.CONSTRUCTOR, constructorCode);
	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.DESTRUCTOR, destructorCode);
	return null;
};



Blockly.Kiwifroot['kiwi_event_pre_constantly'] = function(block){
	var funcName = defineFunctionFromBranch('onPreUpdate', block, 'Executed every frame before the regular update method.');
	var constructorCode = 'this.state.robots.onPreUpdate.add(this.'+funcName + ', this);';
	var destructorCode = 'this.state.robots.onPreUpdate.remove(this.'+funcName+ ', this);';

	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.CONSTRUCTOR, constructorCode);
	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.DESTRUCTOR, destructorCode);
	return null;
};

Blockly.Kiwifroot['kiwi_event_constantly_dropdown'] = function(block){

  	var dropdown_type = block.getFieldValue( 'TYPE' );
	var funcName = defineFunctionFromBranch(dropdown_type, block, 'Executed every frame.');

	var constructorCode = 'this.state.robots.' + dropdown_type + '.add(this.' + funcName + ', this);';
	var destructorCode = 'this.state.robots.' + dropdown_type + '.remove(this.' + funcName + ', this);';

	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.CONSTRUCTOR, constructorCode);
	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.DESTRUCTOR, destructorCode);
	return null;
};


function defineFunctionFromBranch(desiredName, block, codeComment){

	// Define a procedure with a return value.
	var funcName = Blockly.Kiwifroot.variableDB_.getDistinctName(desiredName, Blockly.Procedures.NAME_TYPE);
	var branch = Blockly.Kiwifroot.statementToCode(block, 'STACK');

	if (Blockly.Kiwifroot.STATEMENT_PREFIX) {
		branch = Blockly.Kiwifroot.prefixLines(
			Blockly.Kiwifroot.STATEMENT_PREFIX.replace(/%1/g,
			'\'' + block.id + '\''), Blockly.Kiwifroot.INDENT) + branch;
	}

	if (Blockly.Kiwifroot.INFINITE_LOOP_TRAP) {
		branch = Blockly.Kiwifroot.INFINITE_LOOP_TRAP.replace(/%1/g,
			'\'' + block.id + '\'') + branch;
	}

	branch = Blockly.Kiwifroot.scrub_(block, branch);
	
	var code = funcName + ' = function() {\n';

	if( codeComment ) {
		code += '\t/*\n';
		code += '\t' + codeComment + '\n';
		code += '\t*/\n\n';
	}

	code += branch + '};';

	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.DEFINITIONS,code);
	return funcName;
};





Blockly.Kiwifroot['kiwi_event_touch_return_instance_local'] = function(block) {

	Blockly.Kiwifroot.arcadephysics.addArcadePhysicsToConstructor_.call( this );

	var variable0 = Blockly.Kiwifroot.localVariableDB_.getName(
		block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);

  	var branch = Blockly.Kiwifroot.statementToCode(block, 'STACK');
	var funcName = Blockly.Kiwifroot.variableDB_.getDistinctName('onTouchInstance', Blockly.Procedures.NAME_TYPE);

	funcName = Blockly.Kiwifroot.provideFunction_(
		funcName,
		[ Blockly.Kiwifroot.FUNCTION_NAME_PLACEHOLDER_ + ' = function( instanceA, instanceB ) {',
		Blockly.Kiwifroot.INDENT + 'var instanceSet = false;',
        Blockly.Kiwifroot.INDENT + 'if( instanceA === this.owner ) {',
        Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT + 'var ' + variable0 + ' = instanceB;',
        Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT + 'instanceSet = true;',
        Blockly.Kiwifroot.INDENT + '} else if( instanceB === this.owner) {',
        Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT + 'var ' + variable0 + ' = instanceA;',
        Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT + 'instanceSet = true;',
        Blockly.Kiwifroot.INDENT + '}',
        Blockly.Kiwifroot.INDENT + 'if( !instanceSet ) {',
        Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT + 'return;',
        Blockly.Kiwifroot.INDENT + '}',
        branch,
        '};']);


  	var code = Blockly.Kiwifroot.arcadephysics.SYSTEM_PREFIX + '.onCollision.add( this.' + funcName + ', this );';
	Blockly.Kiwifroot.provideAddition( Blockly.Kiwifroot.BOOT, code );

	var code = Blockly.Kiwifroot.arcadephysics.SYSTEM_PREFIX +'.onCollision.remove( this.' + funcName + ', this );';
	Blockly.Kiwifroot.provideAddition( Blockly.Kiwifroot.DESTRUCTOR, code );

	return null;
};


Blockly.Kiwifroot['kiwi_event_stage_touched_local'] = function(block) {

	var variable0 = Blockly.Kiwifroot.localVariableDB_.getName(
		block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);

  	var branch = Blockly.Kiwifroot.statementToCode(block, 'STACK');
	var funcName = Blockly.Kiwifroot.variableDB_.getDistinctName('onStageTouch', Blockly.Procedures.NAME_TYPE);

	funcName = Blockly.Kiwifroot.provideFunction_(
		funcName,
		[ Blockly.Kiwifroot.FUNCTION_NAME_PLACEHOLDER_ + ' = function( x, y, td, tu, dur, pointer ) {',
		Blockly.Kiwifroot.INDENT + 'var ' + variable0 + ' = pointer;',
        branch,
        '};']);


	var dropdown_type = block.getFieldValue( 'TYPE' );
  	var constructorCode = 'this.game.input.' + dropdown_type + '.add(this.' + funcName + ', this, 25);';
  	var destructorCode = 'this.game.input.' + dropdown_type + '.remove(this.' + funcName + ', this);';

  	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.CONSTRUCTOR, constructorCode);
  	Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.DESTRUCTOR, destructorCode);

	return null;
};


Blockly.Kiwifroot[ 'kiwi_event_message_value' ] = function( block ) {

	addMessageRecievedBlock();

	var variable0 = Blockly.Kiwifroot.variableDB_.getName(
		block.getFieldValue( 'VAR' ),
		Blockly.Variables.NAME_TYPE);
	var message = Blockly.Kiwifroot.valueToCode(
		block,
		'MESSAGE',
		Blockly.Kiwifroot.ORDER_ASSIGNMENT) || '""';

	var funcName = defineFunctionFromBranch(
		'executeMessage'+ message.slice( 1, message.length - 1 ),
		block,
		"Executed when the " + message + " is received." );

	// Generate the code for the switch
	var code  = 'case ' + message + ':\n';
	code += '\t\t\t' + 'this.' + variable0 +
		' = this.owner.properties.get("_messaging-value_");\n';
	code += '\t\t\t' + 'this.' + funcName + '();\n';
	code += '\t\t\tbreak;';

	Blockly.Kiwifroot.provideAddition( 'EVENT_MESSAGE_RELEASED', code );

	return null;
};
