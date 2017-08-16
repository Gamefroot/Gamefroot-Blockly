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
 * @fileoverview All the deprecated Kiwifroot Javascript generators
 * @author rani_sputnik@hotmail.com (Ryan Loader)
 */
'use strict';

goog.require('Blockly.Kiwifroot');

// 12 - 02 - 2015

Blockly.Kiwifroot['kiwi_classes_selector'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var code = "'" + dropdown_name + "'";
  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

// 12 - 02 - 2015

Blockly.Kiwifroot['kiwi_messaging_class'] = function(block) {
  var value_message = Blockly.Kiwifroot.valueToCode(block, 'MESSAGE', Blockly.Kiwifroot.ORDER_ATOMIC);
  var value_class = Blockly.Kiwifroot.valueToCode(block, 'CLASS', Blockly.Kiwifroot.ORDER_ATOMIC);

  var code  = 'var classes = this.state.getAllChildrenByName(' + value_class +');\n' +
  			  'for( var i = 0; i < classes.length; i++) {\n' +
  			  '\tclasses[ i ].properties.set("_messaging_", ' + value_message + ');\n' +
  			  '}\n';

  return code;
};

// 12 - 02 - 2015

Blockly.Kiwifroot['kiwi_event_stage_press'] = function(block) {
  var funcName = defineFunctionFromBranch('onStagePress', block);
  var constructorCode = 'this.game.input.onDown.add(this.'+funcName+', this, 25);';
  var destructorCode = 'this.game.input.onDown.remove(this.'+funcName+', this, 25);';

  Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.CONSTRUCTOR,constructorCode);
  Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.DESTRUCTOR, destructorCode);
  return null;
};

// 12 - 02 - 2015

Blockly.Kiwifroot['kiwi_event_stage_release'] = function(block) {
  var funcName = defineFunctionFromBranch('onStageRelease', block);
  var constructorCode = 'this.game.input.onUp.add(this.'+funcName+', this, 25);';
  var destructorCode = 'this.game.input.onUp.remove(this.'+funcName+', this, 25);';

  Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.CONSTRUCTOR,constructorCode);
  Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.DESTRUCTOR, destructorCode);
  return null;
};

// 12 - 02 - 2015

Blockly.Kiwifroot['kiwi_event_inst_press'] = function(block) {
  // Create an onPressed function with the onPressed section
  var t = Blockly.Kiwifroot.INDENT;
  var SECTION_EVENT_PRESSED = 'EVENT_PRESSED';
  var funcName = Blockly.Kiwifroot.provideFunction_(
    'onInstancePressed',
    [ Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + ' = function(x,y) {',
        '{{,'+SECTION_EVENT_PRESSED+',\n}}',
        '};']);
  // Add the add/remove listeners in the constructor/desctructor
  var constructorCode = 'this.game.input.onDown.add(this.'+funcName+', this, 50);';
  var destructorCode = 'this.game.input.onDown.remove(this.'+funcName+', this);';
  Blockly.Kiwifroot.provideAdditionOnce('EventPressed',Blockly.Kiwifroot.CONSTRUCTOR, constructorCode);
  Blockly.Kiwifroot.provideAdditionOnce('EventPressed',Blockly.Kiwifroot.DESTRUCTOR, destructorCode);
  // Add the code into the onPressed function
  var inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || '(null)';
  var branch = Blockly.Kiwifroot.statementToCode(block, 'STACK');
    var code = 'if ('+inst+'.box.worldHitbox.contains(x,y)) {\n' + branch + '}';  
    code = Blockly.Kiwifroot.prefixLines(code, Blockly.Kiwifroot.INDENT);
  Blockly.Kiwifroot.provideAddition(SECTION_EVENT_PRESSED,code);
  return null;
};

// 12 - 02 - 2015

Blockly.Kiwifroot['kiwi_event_inst_release'] = function(block) {
  // Create an onPressed function with the onPressed section
  var t = Blockly.Kiwifroot.INDENT;
  var SECTION_EVENT_RELEASED = 'EVENT_RELEASED';
  var funcName = Blockly.Kiwifroot.provideFunction_(
    'onInstanceReleased',
    [ Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + ' = function(x,y) {',
        '{{,'+SECTION_EVENT_RELEASED+',\n}}',
        '};']);
  // Add the add/remove listeners in the constructor/desctructor
  var constructorCode = 'this.game.input.onUp.add(this.'+funcName+', this, 50);';
  var destructorCode = 'this.game.input.onUp.remove(this.'+funcName+', this);';
  Blockly.Kiwifroot.provideAdditionOnce('EventReleased',Blockly.Kiwifroot.CONSTRUCTOR, constructorCode);
  Blockly.Kiwifroot.provideAdditionOnce('EventReleased',Blockly.Kiwifroot.DESTRUCTOR, destructorCode);
  // Add the code into the onPressed function
  var inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || '(null)';
  var branch = Blockly.Kiwifroot.statementToCode(block, 'STACK');
    var code = 'if ('+inst+'.box.worldHitbox.contains(x,y)) {\n' + branch + '}';  
    code = Blockly.Kiwifroot.prefixLines(code, Blockly.Kiwifroot.INDENT);
  Blockly.Kiwifroot.provideAddition(SECTION_EVENT_RELEASED,code);
  return null;
};

// 12 - 02 - 2015

Blockly.Kiwifroot['kiwi_event_key_press'] = function(block) {
  var t = Blockly.Kiwifroot.INDENT;
  var funcName = Blockly.Kiwifroot.provideFunction_(
    'onKeyPressed',
    [ Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + ' = function(keyCode) {',
        t + 'switch (keyCode) {',
        '{{'+t+t+',EVENT_KEY_PRESSED,\n}}',
        t + '}',
        '};']);
  // Add the remove function
  var destructorCode = 'this.game.input.keyboard.onKeyDownOnce.remove(this.' + funcName + ', this);';
  Blockly.Kiwifroot.provideAdditionOnce('removeOnKeyPressed',Blockly.Kiwifroot.DESTRUCTOR, destructorCode);

  // Generate the new function
  var keyCode = Blockly.Kiwifroot.valueToCode(block, 'KEY', Blockly.Kiwifroot.ORDER_ASSIGNMENT)
  var constructorCode = 'this.game.input.keyboard.onKeyDownOnce.add(this.' + funcName + ', this);';
  Blockly.Kiwifroot.provideAdditionOnce('EventKeyPressed', Blockly.Kiwifroot.CONSTRUCTOR, constructorCode);
  var funcName = defineFunctionFromBranch('onKeyPressed', block);
  // Generate the code for the switch statement and add it
  var code = 'case '+keyCode+': this.'+funcName+'(); break;';

  Blockly.Kiwifroot.provideAddition('EVENT_KEY_PRESSED', code);
  return null;
};

// 12 - 02 - 2015

Blockly.Kiwifroot['kiwi_event_key_release'] = function(block) {
  var t = Blockly.Kiwifroot.INDENT;
  var funcName = Blockly.Kiwifroot.provideFunction_(
    'onKeyReleased',
    [ Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + ' = function(keyCode) {',
        t + 'switch (keyCode) {',
        '{{'+t+t+',EVENT_KEY_RELEASED,\n}}',
        t + '}',
        '};']);
  // Add the remove function
  var destructorCode = 'this.game.input.keyboard.onKeyUp.remove(this.' + funcName + ', this);';
  Blockly.Kiwifroot.provideAdditionOnce('removeOnKeyReleased',Blockly.Kiwifroot.DESTRUCTOR, destructorCode);

  // Generate the code for the new function
  var keyCode = Blockly.Kiwifroot.valueToCode(block, 'KEY', Blockly.Kiwifroot.ORDER_ASSIGNMENT);
  var constructorCode = 'this.game.input.keyboard.onKeyUp.add(this.' + funcName + ', this);';

  Blockly.Kiwifroot.provideAdditionOnce('EventKeyReleased', Blockly.Kiwifroot.CONSTRUCTOR, constructorCode);

  var funcName = defineFunctionFromBranch('onKeyReleased', block);

  // Generate the code for the switch
  var code = 'case '+keyCode+': this.'+funcName+'(); break;';
  Blockly.Kiwifroot.provideAddition('EVENT_KEY_RELEASED', code);
  return null;
};

// 17 - 02 - 2015

Blockly.Kiwifroot['kiwi_camera_lock_on'] = function(block) {
  Blockly.Kiwifroot.camera.addCameraToConstructor_.call( this );

    var value_instance = Blockly.Kiwifroot.valueToCode(block, 'INSTANCE', Blockly.Kiwifroot.ORDER_ATOMIC);
    var code = Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.lock(' + value_instance + '.transform, ' + value_instance + '.width * 0.5, ' + value_instance + '.height * 0.5);\n';
    return code;
};

// 17 - 02 - 2015

Blockly.Kiwifroot['kiwi_camera_unlock'] = function(block) {
  Blockly.Kiwifroot.camera.addCameraToConstructor_.call( this );

    var code = Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.unlock();\n';
    return code;
};


// 25 - 05 - 2015

Blockly.Kiwifroot['kiwi_classes_create_instance'] = function(block) {
  var value_class = Blockly.Kiwifroot.valueToCode(block, 'CLASS', Blockly.Kiwifroot.ORDER_ATOMIC);
  var value_x_loc = Blockly.Kiwifroot.valueToCode(block, 'X_LOC', Blockly.Kiwifroot.ORDER_ATOMIC);
  var value_y_loc = Blockly.Kiwifroot.valueToCode(block, 'Y_LOC', Blockly.Kiwifroot.ORDER_ATOMIC);

  var createInstanceFuncName = Blockly.Kiwifroot.provideFunction_(
    'createInstanceByClass',
    [ Blockly.Kiwifroot.FUNCTION_NAME_PLACEHOLDER_ + ' = function( className, x, y ) {',
        Blockly.Kiwifroot.INDENT + '//Get the object configuration, modify it, and then create an object.',
        Blockly.Kiwifroot.INDENT + 'var obj = this.state.objects.get( className );',
        Blockly.Kiwifroot.INDENT +'if( obj ) {',
        Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT + 'obj.x = x;',
        Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT + 'obj.y = y;',
        Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT + 'return this.state.objects.create( obj, this.owner.parent );',
        Blockly.Kiwifroot.INDENT + '}',
        Blockly.Kiwifroot.INDENT + 'return null;',
        '};']);

  //value_class
  //value_x_loc
  //value_y_loc

  var code = 'this.' + createInstanceFuncName + '(' + value_class + ', ' + value_x_loc + ', ' + value_y_loc + ')';

  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};


// 22/10/2015


Blockly.Kiwifroot['kiwi_arcadephysics_get_numeric'] = function(block) {
    Blockly.Kiwifroot.arcadephysics.addArcadePhysicsToConstructor_.call( this );

    var dropdown_prop = block.getFieldValue('PROP');
    var code = Blockly.Kiwifroot.arcadephysics.COMPONENT_PREFIX + '.' + dropdown_prop;

    return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};


Blockly.Kiwifroot['kiwi_arcadephysics_set_numeric'] = function(block) {
  Blockly.Kiwifroot.arcadephysics.addArcadePhysicsToConstructor_.call( this );

    var value_value = Blockly.Kiwifroot.valueToCode(block, 'VALUE', Blockly.Kiwifroot.ORDER_ATOMIC);
    var dropdown_prop = block.getFieldValue('PROP');

    var code = Blockly.Kiwifroot.arcadephysics.COMPONENT_PREFIX + '.' + dropdown_prop + ' = ' + value_value + ';\n';
    return code;
};


Blockly.Kiwifroot['kiwi_arcadephysics_set_boolean'] = function(block) {
  Blockly.Kiwifroot.arcadephysics.addArcadePhysicsToConstructor_.call( this );

    var value_value = Blockly.Kiwifroot.valueToCode(block, 'VALUE', Blockly.Kiwifroot.ORDER_ATOMIC);
    var dropdown_prop = block.getFieldValue('PROP');

    var code = Blockly.Kiwifroot.arcadephysics.COMPONENT_PREFIX + '.' + dropdown_prop + ' = ' + value_value + ';\n'; 
    return code;
}; 


Blockly.Kiwifroot['kiwi_arcadephysics_get_boolean'] = function(block) {
  Blockly.Kiwifroot.arcadephysics.addArcadePhysicsToConstructor_.call( this );

    var dropdown_prop = block.getFieldValue('PROP');
    var code = Blockly.Kiwifroot.arcadephysics.COMPONENT_PREFIX + '.' + dropdown_prop;

    return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

Blockly.Kiwifroot['kiwi_arcadephysics_get_collisions'] = function(block) {
  Blockly.Kiwifroot.arcadephysics.addArcadePhysicsToConstructor_.call( this );

    var dropdown_type = block.getFieldValue('TYPE');
    var dropdown_prop = block.getFieldValue('PROP');

    var code = '( ' + Blockly.Kiwifroot.arcadephysics.COMPONENT_PREFIX + '.' + dropdown_type + ' & ' + dropdown_prop + ' ) == ' + dropdown_prop;

    return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};


Blockly.Kiwifroot['kiwi_camera_get_read_only'] = function(block) {
  Blockly.Kiwifroot.camera.addCameraToConstructor_.call( this );

  var dropdown_method = block.getFieldValue('METHOD');
  var code = Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.' + dropdown_method;
  
  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};


Blockly.Kiwifroot['kiwi_camera_set'] = function(block) {
  Blockly.Kiwifroot.camera.addCameraToConstructor_.call( this );

  var value_value = Blockly.Kiwifroot.valueToCode(block, 'VALUE', Blockly.Kiwifroot.ORDER_ATOMIC);
  var dropdown_method = block.getFieldValue('METHOD');
  return Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.' + dropdown_method + ' = ' + value_value + ';\n';
};

Blockly.Kiwifroot['kiwi_camera_get'] = function(block) {
  Blockly.Kiwifroot.camera.addCameraToConstructor_.call( this );

  var dropdown_method = block.getFieldValue('METHOD');
  var code = Blockly.Kiwifroot.camera.COMPONENT_PREFIX + '.' + dropdown_method;
  
  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
};

// 1/12/2015


Blockly.Kiwifroot['kiwi_classes_create_instance_with_var'] = function(block) {

  var value_class = Blockly.Kiwifroot.valueToCode(block, 'CLASS', Blockly.Kiwifroot.ORDER_ATOMIC) || 'null';
  var variable0 = Blockly.Kiwifroot.variableDB_.getName(
    block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);

  var createInstanceFuncName = Blockly.Kiwifroot.provideFunction_(
    'createInstance',
    [ Blockly.Kiwifroot.FUNCTION_NAME_PLACEHOLDER_ + ' = function( className ) {',
        Blockly.Kiwifroot.INDENT + '//Get the object configuration, modify it, and then create an object.',
        Blockly.Kiwifroot.INDENT + 'var obj = this.state.objects.get( className );',
        Blockly.Kiwifroot.INDENT +'if( obj ) {',
        Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT + 'return this.state.objects.create( obj, this.owner.parent );',
        Blockly.Kiwifroot.INDENT + '}',
        Blockly.Kiwifroot.INDENT + 'return null;',
        '};']);

  //value_class

  var code = 'this.' + variable0 + ' = this.' + createInstanceFuncName + '(' + value_class + ');\n';

  return code;
};



Blockly.Kiwifroot['kiwi_event_touch_return_instance'] = function(block) {

  Blockly.Kiwifroot.arcadephysics.addArcadePhysicsToConstructor_.call( this );

  var variable0 = Blockly.Kiwifroot.variableDB_.getName(
    block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);

    var branch = Blockly.Kiwifroot.statementToCode(block, 'STACK');
  var funcName = Blockly.Kiwifroot.variableDB_.getDistinctName('onTouchInstance', Blockly.Procedures.NAME_TYPE);

  funcName = Blockly.Kiwifroot.provideFunction_(
    funcName,
    [ Blockly.Kiwifroot.FUNCTION_NAME_PLACEHOLDER_ + ' = function( instanceA, instanceB ) {',
    Blockly.Kiwifroot.INDENT + 'var instanceSet = false;',
        Blockly.Kiwifroot.INDENT + 'if( instanceA === this.owner ) {',
        Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT + 'this.' + variable0 + ' = instanceB;',
        Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT + 'instanceSet = true;',
        Blockly.Kiwifroot.INDENT + '} else if( instanceB === this.owner) {',
        Blockly.Kiwifroot.INDENT + Blockly.Kiwifroot.INDENT + 'this.' + variable0 + ' = instanceA;',
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


Blockly.Kiwifroot['kiwi_event_stage_touched'] = function(block) {

  var variable0 = Blockly.Kiwifroot.variableDB_.getName(
    block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);

    var branch = Blockly.Kiwifroot.statementToCode(block, 'STACK');
  var funcName = Blockly.Kiwifroot.variableDB_.getDistinctName('onStageTouch', Blockly.Procedures.NAME_TYPE);

  funcName = Blockly.Kiwifroot.provideFunction_(
    funcName,
    [ Blockly.Kiwifroot.FUNCTION_NAME_PLACEHOLDER_ + ' = function( x, y, td, tu, dur, pointer ) {',
    Blockly.Kiwifroot.INDENT + 'this.' + variable0 + ' = pointer;',
        branch,
        '};']);


  var dropdown_type = block.getFieldValue( 'TYPE' );
    var constructorCode = 'this.game.input.' + dropdown_type + '.add(this.' + funcName + ', this, 25);';
    var destructorCode = 'this.game.input.' + dropdown_type + '.remove(this.' + funcName + ', this);';

    Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.CONSTRUCTOR, constructorCode);
    Blockly.Kiwifroot.provideAddition(Blockly.Kiwifroot.DESTRUCTOR, destructorCode);

  return null;
};


Blockly.Kiwifroot['kiwi_event_message_value_local'] = function(block) {

  addMessageRecievedBlock();

  var variable0 = Blockly.Kiwifroot.localVariableDB_.getName(
    block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var message = Blockly.Kiwifroot.valueToCode(block, 'MESSAGE', Blockly.Kiwifroot.ORDER_ASSIGNMENT) || '""';

    var branch = Blockly.Kiwifroot.statementToCode(block, 'STACK');
  var funcName = Blockly.Kiwifroot.variableDB_.getDistinctName('executeMessage'+ message.slice(1, message.length - 1), Blockly.Procedures.NAME_TYPE);

  funcName = Blockly.Kiwifroot.provideFunction_(
    funcName,
    [ Blockly.Kiwifroot.FUNCTION_NAME_PLACEHOLDER_ + ' = function( ' + variable0 + ' ) {',
        branch,
        '};']);

  // Generate the code for the switch
  var code  = 'case ' + message + ':\n';
    code += '\t\t\t' + 'this.' + funcName + '( this.owner.properties.get("_messaging-value_") );\n';
    code += '\t\t\tbreak;';

  Blockly.Kiwifroot.provideAddition('EVENT_MESSAGE_RELEASED', code);

  return null;
};


Blockly.Kiwifroot['kiwi_primitives_create_rectangle'] = function(block) {

  var value_width = Blockly.Kiwifroot.valueToCode( block, 'WIDTH', Blockly.Kiwifroot.ORDER_ATOMIC ) || 0;
  var value_height = Blockly.Kiwifroot.valueToCode( block, 'HEIGHT', Blockly.Kiwifroot.ORDER_ATOMIC ) || 0;
  var variable0 = Blockly.Kiwifroot.variableDB_.getName( block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE );

  var code  = 'this.' + variable0 + ' = this.state.objects.create( {\n';
    code += '\t"type": "rectangle",\n';
    code += '\t"x": 0,\n';
    code += '\t"y": 0,\n';
    code += '\t"width": ' + value_width + ',\n';
    code += '\t"height": ' + value_height + '\n';
    code += '}, this.owner.parent, true);\n';
    
    return code;
};

Blockly.Kiwifroot['kiwi_primitives_create_circle'] = function(block) {

  var value_radius = Blockly.Kiwifroot.valueToCode( block, 'RADIUS', Blockly.Kiwifroot.ORDER_ATOMIC ) || 0;
  var variable0 = Blockly.Kiwifroot.variableDB_.getName( block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE );

  var code  = 'this.' + variable0 + ' = this.state.objects.create( {\n';
    code += '\t"type": "ellipse",\n';
    code += '\t"x": 0,\n';
    code += '\t"y": 0,\n';
    code += '\t"radius": ' + value_radius + '\n';
    code += '}, this.owner.parent, true);\n';
    
    return code;
};

Blockly.Kiwifroot['kiwi_primitives_create_line'] = function(block) {

  var value_x = Blockly.Kiwifroot.valueToCode( block, 'X', Blockly.Kiwifroot.ORDER_ATOMIC ) || 0;
  var value_y = Blockly.Kiwifroot.valueToCode( block, 'Y', Blockly.Kiwifroot.ORDER_ATOMIC ) || 0;

  var value_width = Blockly.Kiwifroot.valueToCode( block, 'WIDTH', Blockly.Kiwifroot.ORDER_ATOMIC );

  var variable0 = Blockly.Kiwifroot.variableDB_.getName( block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE );

  var code  = 'this.' + variable0 + ' = this.state.objects.create( {\n';
    code += '\t"type": "line",\n';
    code += '\t"x": 0,\n';
    code += '\t"y": 0,\n';
    code += '\t"strokeWidth": ' + value_width + ',\n';
    code += '\t"points": [\n';
    code += '\t\t[0, 0],\n';
    code += '\t\t[' + value_x + ', ' + value_y + ']\n';
    code += '\t]\n';
    code += '}, this.owner.parent, true);\n';
    
    return code;
};

Blockly.Kiwifroot['kiwi_primitives_create_star'] = function(block) {

  var value_radius = Blockly.Kiwifroot.valueToCode( block, 'RADIUS', Blockly.Kiwifroot.ORDER_ATOMIC ) || 0;
  var value_points = Blockly.Kiwifroot.valueToCode( block, 'POINTS', Blockly.Kiwifroot.ORDER_ATOMIC ) || 0;

  var variable0 = Blockly.Kiwifroot.variableDB_.getName( block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE );

  var code  = 'this.' + variable0 + ' = this.state.objects.create( {\n';
    code += '\t"type": "star",\n';
    code += '\t"x": 0,\n';
    code += '\t"y": 0,\n';
    code += '\t"radius": ' + value_radius + ',\n';
    code += '\t"segments": '+ value_points +',\n'
    code += '\t"spikeRandom": 0,\n';
    code += '\t"spikeLength": 1,\n';
    code += '}, this.owner.parent, true);\n';
    
    return code;
};

Blockly.Kiwifroot['kiwi_primitives_create_polygon'] = function(block) {

  var value_radius = Blockly.Kiwifroot.valueToCode( block, 'RADIUS', Blockly.Kiwifroot.ORDER_ATOMIC ) || 0;
  var value_edges = Blockly.Kiwifroot.valueToCode( block, 'NUM_EDGES', Blockly.Kiwifroot.ORDER_ATOMIC ) || 0;
  var variable0 = Blockly.Kiwifroot.variableDB_.getName( block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE );

  var code  = 'this.' + variable0 + ' = this.state.objects.create( {\n';
    code += '\t"type": "ellipse",\n';
    code += '\t"x": 0,\n';
    code += '\t"y": 0,\n';
    code += '\t"segments": ' + value_edges + ',\n';
    code += '\t"radius": ' + value_radius + '\n';
    code += '}, this.owner.parent, true);\n';
    
    return code;
};


Blockly.Kiwifroot['kiwi_text_create'] = function(block) {

  var value_text = Blockly.Kiwifroot.valueToCode( block, 'TEXT', Blockly.Kiwifroot.ORDER_ATOMIC ) || "''";
  var variable0 = Blockly.Kiwifroot.variableDB_.getName( block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE );

  var code  = 'this.' + variable0 + ' = this.state.objects.create( {\n';
    code += '\t"type": "multiline-text",\n';
    code += '\t"x": 0,\n';
    code += '\t"y": 0,\n';
    code += '\t"maxWidth": Infinity,\n';
    code += '\t"text": ' + value_text.replace(/\\\\n/g, "\\n") + '\n';
    code += '}, this.owner.parent, true);\n';
    
    return code;
};


Blockly.Kiwifroot['controls_for_local'] = function(block) {
  // For loop.
  var variable0 = Blockly.Kiwifroot.localVariableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.Kiwifroot.valueToCode(block, 'FROM',
      Blockly.Kiwifroot.ORDER_ASSIGNMENT) || '0';
  var argument1 = Blockly.Kiwifroot.valueToCode(block, 'TO',
      Blockly.Kiwifroot.ORDER_ASSIGNMENT) || '0';
  var increment = Blockly.Kiwifroot.valueToCode(block, 'BY',
      Blockly.Kiwifroot.ORDER_ASSIGNMENT) || '1';
  var branch = Blockly.Kiwifroot.statementToCode(block, 'DO');
  branch = Blockly.Kiwifroot.addLoopTrap(branch, block.id);
  var code;
  if (Blockly.isNumber(argument0) && Blockly.isNumber(argument1) &&
      Blockly.isNumber(increment)) {
    // All arguments are simple numbers.
    var up = parseFloat(argument0) <= parseFloat(argument1);
    code = 'for ( var ' + variable0 + ' = ' + argument0 + '; ' +
        variable0 + (up ? ' <= ' : ' >= ') + argument1 + '; ' +
        variable0;
    var step = Math.abs(parseFloat(increment));
    if (step == 1) {
      code += up ? '++' : '--';
    } else {
      code += (up ? ' += ' : ' -= ') + step;
    }
    code += ') {\n' + branch + '}\n';
  } else {
    code = '';
    // Cache non-trivial values to variables to prevent repeated look-ups.
    var startVar = argument0;
    if (!argument0.match(/^\w+$/) && !Blockly.isNumber(argument0)) {
      var startVar = Blockly.Kiwifroot.localVariableDB_.getDistinctName(
          variable0 + '_start', Blockly.Variables.NAME_TYPE);
      code += 'var ' + startVar + ' = ' + argument0 + ';\n';
    }
    var endVar = argument1;
    if (!argument1.match(/^\w+$/) && !Blockly.isNumber(argument1)) {
      var endVar = Blockly.Kiwifroot.localVariableDB_.getDistinctName(
          variable0 + '_end', Blockly.Variables.NAME_TYPE);
      code += 'var ' + endVar + ' = ' + argument1 + ';\n';
    }
    // Determine loop direction at start, in case one of the bounds
    // changes during loop execution.
    var incVar = Blockly.Kiwifroot.localVariableDB_.getDistinctName(
        variable0 + '_inc', Blockly.Variables.NAME_TYPE);
    code += 'var ' + incVar + ' = ';
    if (Blockly.isNumber(increment)) {
      code += Math.abs(increment) + ';\n';
    } else {
      code += 'Math.abs(' + increment + ');\n';
    }
    code += 'if (' + startVar + ' > ' + endVar + ') {\n';
    code += Blockly.Kiwifroot.INDENT + incVar + ' = -' + incVar + ';\n';
    code += '}\n';
    code += 'for (var ' + variable0 + ' = ' + startVar + ';\n' +
        '     ' + incVar + ' >= 0 ? ' +
        variable0 + ' <= ' + endVar + ' : ' +
        variable0 + ' >= ' + endVar + ';\n' +
        '     ' + variable0 + ' += ' + incVar + ') {\n' +
        branch + '}\n';
  }
  return code;
};


Blockly.Kiwifroot['controls_forEach_local'] = function(block) {
  // For each loop.
  var variable0 = Blockly.Kiwifroot.localVariableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.Kiwifroot.valueToCode(block, 'LIST',
      Blockly.Kiwifroot.ORDER_ASSIGNMENT) || '[]';
  var branch = Blockly.Kiwifroot.statementToCode(block, 'DO');
  branch = Blockly.Kiwifroot.addLoopTrap(branch, block.id);
  var indexVar = Blockly.Kiwifroot.localVariableDB_.getDistinctName(
      variable0 + '_index', Blockly.Variables.NAME_TYPE);
  branch = Blockly.Kiwifroot.INDENT + 'var ' + variable0 + ' = ' +
      argument0 + '[' + indexVar + '];\n' + branch;
  var code = 'for (var ' + indexVar + ' in ' + argument0 + ') {\n' +
      branch + '}\n';
  return code;
};


Blockly.Kiwifroot['procedures_defreturn'] = function(block) {
  // Define a procedure with a return value.
  var funcName = Blockly.Kiwifroot.variableDB_.getName(
    block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);

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

  var returnValue = Blockly.Kiwifroot.valueToCode(block, 'RETURN',
    Blockly.Kiwifroot.ORDER_NONE) || '';

  if (returnValue) {
  returnValue = '  return ' + returnValue + ';\n';
  }

  var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
  args[x] = Blockly.Kiwifroot.variableDB_.getName(block.arguments_[x],
    Blockly.Variables.NAME_TYPE);
  }

    var code  = funcName + ' = function(' + args.join(', ') + ') {\n';
      
      for( var i = 0; i < args.length; i++ ){
        code += '\tthis.' + args[ i ] + ' = ' + args[ i ] + ';\n';
      }
    
    code += branch + returnValue + '}';

    code = Blockly.Kiwifroot.scrub_(block, code);
    Blockly.Kiwifroot.definitions_[funcName] = code;
    return null;
};

// Defining a procedure without a return value uses the same generator as
// a procedure with a return value.
Blockly.Kiwifroot['procedures_defnoreturn'] =
  Blockly.Kiwifroot['procedures_defreturn'];

Blockly.Kiwifroot['procedures_callreturn'] = function(block) {
  // Call a procedure with a return value.
  var funcName = Blockly.Kiwifroot.variableDB_.getName(
    block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
  args[x] = Blockly.Kiwifroot.valueToCode(block, 'ARG' + x,
    Blockly.Kiwifroot.ORDER_COMMA) || 'null';
  }
  var code = 'this.' + funcName + '(' + args.join(', ') + ')';
  return [code, Blockly.Kiwifroot.ORDER_FUNCTION_CALL];
};

Blockly.Kiwifroot['procedures_callnoreturn'] = function(block) {
  // Call a procedure with no return value.
  var funcName = Blockly.Kiwifroot.variableDB_.getName(
    block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
  args[x] = Blockly.Kiwifroot.valueToCode(block, 'ARG' + x,
    Blockly.Kiwifroot.ORDER_COMMA) || 'null';
  }
  var code = 'this.' + funcName + '(' + args.join(', ') + ');\n';
  return code;
};
