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
 * @fileoverview Generating Kiwifroot for loop blocks.
 * @author fraser@google.com (Neil Fraser)
 */

'use strict';






goog.provide('Blockly.Kiwifroot.loops');

goog.require('Blockly.Kiwifroot');


Blockly.Kiwifroot['controls_repeat'] = function(block) {
  // Repeat n times (internal number).
  var repeats = Number(block.getFieldValue('TIMES'));
  var branch = Blockly.Kiwifroot.statementToCode(block, 'DO');
  branch = Blockly.Kiwifroot.addLoopTrap(branch, block.id);
  var loopVar = Blockly.Kiwifroot.localVariableDB_.getDistinctName(
      'count', Blockly.Variables.NAME_TYPE);
  var code = 'for (var ' + loopVar + ' = 0; ' +
      loopVar + ' < ' + repeats + '; ' +
      loopVar + '++) {\n' +
      branch + '}\n';
  return code;
};

Blockly.Kiwifroot['controls_repeat_ext'] = function(block) {
  // Repeat n times (external number).
  var repeats = Blockly.Kiwifroot.valueToCode(block, 'TIMES',
      Blockly.Kiwifroot.ORDER_ASSIGNMENT) || '0';
  var branch = Blockly.Kiwifroot.statementToCode(block, 'DO');
  branch = Blockly.Kiwifroot.addLoopTrap(branch, block.id);
  var code = '';
  var loopVar = Blockly.Kiwifroot.localVariableDB_.getDistinctName(
      'count', Blockly.Variables.NAME_TYPE);
  var endVar = repeats;
  if (!repeats.match(/^\w+$/) && !Blockly.isNumber(repeats)) {
    var endVar = Blockly.Kiwifroot.localVariableDB_.getDistinctName(
        'repeat_end', Blockly.Variables.NAME_TYPE);
    code += 'var ' + endVar + ' = ' + repeats + ';\n';
  }
  code += 'for (var ' + loopVar + ' = 0; ' +
      loopVar + ' < ' + endVar + '; ' +
      loopVar + '++) {\n' +
      branch + '}\n';
  return code;
};

Blockly.Kiwifroot['controls_whileUntil'] = function(block) {
  // Do while/until loop.
  var until = block.getFieldValue('MODE') == 'UNTIL';
  var argument0 = Blockly.Kiwifroot.valueToCode(block, 'BOOL',
      until ? Blockly.Kiwifroot.ORDER_LOGICAL_NOT :
      Blockly.Kiwifroot.ORDER_NONE) || 'false';
  var branch = Blockly.Kiwifroot.statementToCode(block, 'DO');
  branch = Blockly.Kiwifroot.addLoopTrap(branch, block.id);
  if (until) {
    argument0 = '!' + argument0;
  }
  return 'while (' + argument0 + ') {\n' + branch + '}\n';
};

Blockly.Kiwifroot['controls_flow_statements'] = function(block) {
  // Flow statements: continue, break.
  switch (block.getFieldValue('FLOW')) {
    case 'BREAK':
      return 'break;\n';
    case 'CONTINUE':
      return 'continue;\n';
  }
  throw 'Unknown flow statement.';
};


Blockly.Kiwifroot['controls_for'] = function(block) {
  // For loop.
  var variable0 = Blockly.Kiwifroot.variableDB_.getName(
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
    code = 'for ( this.' + variable0 + ' = ' + argument0 + '; ' +
        'this.' + variable0 + (up ? ' <= ' : ' >= ') + argument1 + '; ' +
        'this.' + variable0;
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
      var startVar = Blockly.Kiwifroot.variableDB_.getDistinctName(
          variable0 + '_start', Blockly.Variables.NAME_TYPE);
      code += 'var ' + startVar + ' = ' + argument0 + ';\n';
    }
    var endVar = argument1;
    if (!argument1.match(/^\w+$/) && !Blockly.isNumber(argument1)) {
      var endVar = Blockly.Kiwifroot.variableDB_.getDistinctName(
          variable0 + '_end', Blockly.Variables.NAME_TYPE);
      code += 'var ' + endVar + ' = ' + argument1 + ';\n';
    }
    // Determine loop direction at start, in case one of the bounds
    // changes during loop execution.
    var incVar = Blockly.Kiwifroot.variableDB_.getDistinctName(
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
    code += 'for (this.' + variable0 + ' = ' + startVar + ';\n' +
        '     ' + incVar + ' >= 0 ? ' +
        'this.' + variable0 + ' <= ' + endVar + ' : ' +
        'this.' + variable0 + ' >= ' + endVar + ';\n' +
        '     ' + 'this.' + variable0 + ' += ' + incVar + ') {\n' +
        branch + '}\n';
  }
  return code;
};


Blockly.Kiwifroot['controls_forEach'] = function(block) {
  // For each loop.
  var variable0 = Blockly.Kiwifroot.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.Kiwifroot.valueToCode(block, 'LIST',
      Blockly.Kiwifroot.ORDER_ASSIGNMENT) || '[]';
  var branch = Blockly.Kiwifroot.statementToCode(block, 'DO');
  branch = Blockly.Kiwifroot.addLoopTrap(branch, block.id);
  var indexVar = Blockly.Kiwifroot.variableDB_.getDistinctName(
      variable0 + '_index', Blockly.Variables.NAME_TYPE);
  branch = Blockly.Kiwifroot.INDENT + 'this.' + variable0 + ' = ' +
      argument0 + '[' + indexVar + '];\n' + branch;
  var code = 'for (var ' + indexVar + ' in ' + argument0 + ') {\n' +
      branch + '}\n';
  return code;
};