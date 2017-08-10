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
 * @fileoverview English strings.
 * @author fraser@google.com (Neil Fraser)
 *
 * Note: To be built, strings must be in 'singlequotes' and
 * come directly after a line with a /// descriptor.
 *
 * After modifying this file, either run "build.py" from the parent directory,
 * or run (from this directory):
 * ../i18n/js_to_json.py
 * to regenerate json/{en,qqq,synonyms}.json.
 *
 * To convert all of the json files to .js files, run:
 * ../i18n/create_messages.py json/*.json
 */
'use strict';

goog.provide('Blockly.Msg.en');

goog.require('Blockly.Msg');


/**
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to message files.
 */

/**
 * Tip: Generate URLs for read-only blocks by creating the blocks in the Code app,
 * then evaluating this in the console:
 * 'http://blockly-demo.appspot.com/static/apps/code/readonly.html?lang=en&xml=' + encodeURIComponent(Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(Blockly.mainWorkspace)).slice(5, -6))
 */

/// default name - A simple, general default name for a variable, preferably short.
/// For more context, see
/// [[Translating:Blockly#infrequent_message_types]].\n{{Identical|Item}}
Blockly.Msg.VARIABLES_DEFAULT_NAME = 'item';
/// button text - Botton that sets a calendar to today's date.\n{{Identical|Today}}
Blockly.Msg.TODAY = 'Today';
/// message -
Blockly.Msg.VARIABLES_SET_MESSAGE_ONE = 'set';
/// ,essage -
Blockly.Msg.VARIABLES_SET_MESSAGE_TWO = 'to';

// Context menus.
/// context menu - Make a copy of the selected block (and any blocks it contains).\n{{Identical|Duplicate}}
Blockly.Msg.DUPLICATE_BLOCK = 'Duplicate';
/// context menu - Add a descriptive comment to the selected block.
Blockly.Msg.ADD_COMMENT = 'Add Comment';
/// context menu - Remove the descriptive comment from the selected block.
Blockly.Msg.REMOVE_COMMENT = 'Remove Comment';
/// context menu - Change from 'external' to 'inline' mode for displaying blocks used as inputs to the selected block.  See [[Translating:Blockly#context_menus]].
Blockly.Msg.EXTERNAL_INPUTS = 'External Inputs';
/// context menu - Change from 'internal' to 'external' mode for displaying blocks used as inputs to the selected block.  See [[Translating:Blockly#context_menus]].
Blockly.Msg.INLINE_INPUTS = 'Inline Inputs';
/// context menu - Permanently delete the selected block.
Blockly.Msg.DELETE_BLOCK = 'Delete Block';
/// context menu - Permanently delete the %1 selected blocks.\n\nParameters:\n* %1 - an integer greater than 1.
Blockly.Msg.DELETE_X_BLOCKS = 'Delete %1 Blocks';
/// context menu - Reposition all the blocks so that they form a neat line.
Blockly.Msg.CLEAN_UP = 'Clean up Blocks';
/// context menu - Make the appearance of the selected block smaller by hiding some information about it.
Blockly.Msg.COLLAPSE_BLOCK = 'Collapse Block';
/// context menu - Make the appearance of all blocks smaller by hiding some information about it.  Use the same terminology as in the previous message.
Blockly.Msg.COLLAPSE_ALL = 'Collapse Blocks';
/// context menu - Restore the appearance of the selected block by showing information about it that was hidden (collapsed) earlier.
Blockly.Msg.EXPAND_BLOCK = 'Expand Block';
/// context menu - Restore the appearance of all blocks by showing information about it that was hidden (collapsed) earlier.  Use the same terminology as in the previous message.
Blockly.Msg.EXPAND_ALL = 'Expand Blocks';
/// context menu - Make the selected block have no effect (unless reenabled).
Blockly.Msg.DISABLE_BLOCK = 'Disable Block';
/// context menu - Make the selected block have effect (after having been disabled earlier).
Blockly.Msg.ENABLE_BLOCK = 'Enable Block';
/// context menu - Provide helpful information about the selected block.\n{{Identical|Help}}
Blockly.Msg.HELP = 'Help';

// Realtime collaboration.
/// collaboration instruction - Tell the user that they can talk with other users.
Blockly.Msg.CHAT = 'Chat with your collaborator by typing in this box!';
/// authorization instruction - Ask the user to authorize this app so it can be saved and shared by them.
Blockly.Msg.AUTH = 'Please authorize this app to enable your work to be saved and to allow it to be shared by you.';
/// First person singular - objective case
Blockly.Msg.ME = 'Me';

// Variable renaming.
/// prompt - This message is only seen in the Opera browser.  With most browsers, users can edit numeric values in blocks by just clicking and typing.  Opera does not allows this, so we have to open a new window and prompt users with this message to chanage a value.
Blockly.Msg.CHANGE_VALUE_TITLE = 'Change value:';
/// dropdown choice - When the user clicks on a variable block, this is one of the dropdown menu choices.  It is used to define a new variable.  See [https://github.com/google/blockly/wiki/Variables#dropdown-menu https://github.com/google/blockly/wiki/Variables#dropdown-menu].
Blockly.Msg.NEW_VARIABLE = 'New variable...';
/// prompt - Prompts the user to enter the name for a new variable.  See [https://github.com/google/blockly/wiki/Variables#dropdown-menu https://github.com/google/blockly/wiki/Variables#dropdown-menu].
Blockly.Msg.NEW_VARIABLE_TITLE = 'New variable name:';
/// dropdown choice - When the user clicks on a variable block, this is one of the dropdown menu choices.  It is used to rename the current variable.  See [https://github.com/google/blockly/wiki/Variables#dropdown-menu https://github.com/google/blockly/wiki/Variables#dropdown-menu].
Blockly.Msg.RENAME_VARIABLE = 'Rename variable...';
/// prompt - Prompts the user to enter the new name for the selected variable.  See [https://github.com/google/blockly/wiki/Variables#dropdown-menu https://github.com/google/blockly/wiki/Variables#dropdown-menu].\n\nParameters:\n* %1 - the name of the variable to be renamed.
Blockly.Msg.RENAME_VARIABLE_TITLE = 'Rename all "%1" variables to:';

// Colour Blocks.
/// url - Information about colour.
Blockly.Msg.COLOUR_PICKER_HELPURL = 'https://en.wikipedia.org/wiki/Color';
/// tooltip - See [https://github.com/google/blockly/wiki/Colour#picking-a-colour-from-a-palette https://github.com/google/blockly/wiki/Colour#picking-a-colour-from-a-palette].
Blockly.Msg.COLOUR_PICKER_TOOLTIP = 'Choose a colour from the palette.';
/// url - A link that displays a random colour each time you visit it.
Blockly.Msg.COLOUR_RANDOM_HELPURL = 'http://randomcolour.com';
/// block text - Title of block that generates a colour at random.
Blockly.Msg.COLOUR_RANDOM_TITLE = 'random colour';
/// tooltip - See [https://github.com/google/blockly/wiki/Colour#generating-a-random-colour https://github.com/google/blockly/wiki/Colour#generating-a-random-colour].
Blockly.Msg.COLOUR_RANDOM_TOOLTIP = 'Choose a colour at random.';
/// url - A link for color codes with percentages (0-100%) for each component, instead of the more common 0-255, which may be more difficult for beginners.
Blockly.Msg.COLOUR_RGB_HELPURL = 'http://www.december.com/html/spec/colorper.html';
/// block text - Title of block for [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].
Blockly.Msg.COLOUR_RGB_TITLE = 'colour with';
/// block input text - The amount of red (from 0 to 100) to use when [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].\n{{Identical|Red}}
Blockly.Msg.COLOUR_RGB_RED = 'red';
/// block input text - The amount of green (from 0 to 100) to use when [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].
Blockly.Msg.COLOUR_RGB_GREEN = 'green';
/// block input text - The amount of blue (from 0 to 100) to use when [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].\n{{Identical|Blue}}
Blockly.Msg.COLOUR_RGB_BLUE = 'blue';
/// tooltip - See [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].
Blockly.Msg.COLOUR_RGB_TOOLTIP = 'Create a colour with the specified amount of red, green, and blue. All values must be between 0 and 100.';
/// url - A useful link that displays blending of two colors.
Blockly.Msg.COLOUR_BLEND_HELPURL = 'http://meyerweb.com/eric/tools/color-blend/';
/// block text - A verb for blending two shades of paint.
Blockly.Msg.COLOUR_BLEND_TITLE = 'blend';
/// block input text - The first of two colours to [https://github.com/google/blockly/wiki/Colour#blending-colours blend].
Blockly.Msg.COLOUR_BLEND_COLOUR1 = 'colour 1';
/// block input text - The second of two colours to [https://github.com/google/blockly/wiki/Colour#blending-colours blend].
Blockly.Msg.COLOUR_BLEND_COLOUR2 = 'colour 2';
/// block input text - The proportion of the [https://github.com/google/blockly/wiki/Colour#blending-colours blend] containing the first color; the remaining proportion is of the second colour.  For example, if the first colour is red and the second color blue, a ratio of 1 would yield pure red, a ratio of .5 would yield purple (equal amounts of red and blue), and a ratio of 0 would yield pure blue.\n{{Identical|Ratio}}
Blockly.Msg.COLOUR_BLEND_RATIO = 'ratio';
/// tooltip - See [https://github.com/google/blockly/wiki/Colour#blending-colours https://github.com/google/blockly/wiki/Colour#blending-colours].
Blockly.Msg.COLOUR_BLEND_TOOLTIP = 'Blends two colours together with a given ratio (0.0 - 1.0).';

// Loop Blocks.
/// url - Describes 'repeat loops' in computer programs; consider using the translation of the page [https://en.wikipedia.org/wiki/Control_flow http://en.wikipedia.org/wiki/Control_flow].
Blockly.Msg.CONTROLS_REPEAT_HELPURL = 'https://en.wikipedia.org/wiki/For_loop';
/// block input text - Title of [https://github.com/google/blockly/wiki/Loops#repeat repeat block].\n\nParameters:\n* %1 - the number of times the body of the loop should be repeated.
Blockly.Msg.CONTROLS_REPEAT_TITLE = 'repeat %1 times';
/// block text - Preceding the blocks in the body of the loop.  See [https://github.com/google/blockly/wiki/Loops https://github.com/google/blockly/wiki/Loops].\n{{Identical|Do}}
Blockly.Msg.CONTROLS_REPEAT_INPUT_DO = 'do';
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#repeat https://github.com/google/blockly/wiki/Loops#repeat].
Blockly.Msg.CONTROLS_REPEAT_TOOLTIP = 'Do some statements several times.';
/// url - Describes 'while loops' in computer programs; consider using the translation of [https://en.wikipedia.org/wiki/While_loop https://en.wikipedia.org/wiki/While_loop], if present, or [https://en.wikipedia.org/wiki/Control_flow https://en.wikipedia.org/wiki/Control_flow].
Blockly.Msg.CONTROLS_WHILEUNTIL_HELPURL = 'https://github.com/google/blockly/wiki/Loops#repeat';
/// dropdown -
Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
/// dropdown - Specifies that a loop should [https://github.com/google/blockly/wiki/Loops#repeat-while repeat while] the following condition is true.
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = 'repeat while';
/// dropdown - Specifies that a loop should [https://github.com/google/blockly/wiki/Loops#repeat-until repeat until] the following condition becomes true.
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = 'repeat until';
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#repeat-while Loops#repeat-while https://github.com/google/blockly/wiki/Loops#repeat-while Loops#repeat-while].
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = 'While a value is true, then do some statements.';
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#repeat-until https://github.com/google/blockly/wiki/Loops#repeat-until].
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = 'While a value is false, then do some statements.';

/// url - Describes 'for loops' in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/For_loop https://en.wikipedia.org/wiki/For_loop], if present.
Blockly.Msg.CONTROLS_FOR_HELPURL = 'https://github.com/google/blockly/wiki/Loops#count-with';
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#count-with https://github.com/google/blockly/wiki/Loops#count-with].\n\nParameters:\n* %1 - the name of the loop variable.
Blockly.Msg.CONTROLS_FOR_TOOLTIP = 'Have the variable "%1" take on the values from the start number to the end number, counting by the specified interval, and do the specified blocks.';
/// block text - Repeatedly counts a variable (%1)
/// starting with a (usually lower) number in a range (%2),
/// ending with a (usually higher) number in a range (%3), and counting the
/// iterations by a number of steps (%4).  As in
/// [https://github.com/google/blockly/wiki/Loops#count-with
/// https://github.com/google/blockly/wiki/Loops#count-with].
/// [[File:Blockly-count-with.png]]
Blockly.Msg.CONTROLS_FOR_TITLE = 'count with %1 from %2 to %3 by %4';
/// message -
Blockly.Msg.CONTROLS_FOR_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;

/// url - Describes 'for-each loops' in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Foreach https://en.wikipedia.org/wiki/Foreach] if present.
Blockly.Msg.CONTROLS_FOREACH_HELPURL = 'https://github.com/google/blockly/wiki/Loops#for-each';
/// block text - Title of [https://github.com/google/blockly/wiki/Loops#for-each for each block].
/// Sequentially assigns every item in array %2 to the valiable %1.
Blockly.Msg.CONTROLS_FOREACH_TITLE = 'for each item %1 in list %2';
/// input -
Blockly.Msg.CONTROLS_FOREACH_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
/// block text - Description of [https://github.com/google/blockly/wiki/Loops#for-each for each blocks].\n\nParameters:\n* %1 - the name of the loop variable.
Blockly.Msg.CONTROLS_FOREACH_TOOLTIP = 'For each item in a list, set the variable "%1" to the item, and then do some statements.';

/// url - Describes control flow in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Control_flow https://en.wikipedia.org/wiki/Control_flow], if it exists.
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL = 'https://github.com/google/blockly/wiki/Loops#loop-termination-blocks';
/// dropdown - The current loop should be exited.  See [https://github.com/google/blockly/wiki/Loops#break https://github.com/google/blockly/wiki/Loops#break].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = 'break out of loop';
/// dropdown - The current iteration of the loop should be ended and the next should begin.  See [https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = 'continue with next iteration of loop';
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#break-out-of-loop https://github.com/google/blockly/wiki/Loops#break-out-of-loop].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = 'Break out of the containing loop.';
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = 'Skip the rest of this loop, and continue with the next iteration.';
/// warning - The user has tried placing a block outside of a loop (for each, while, repeat, etc.), but this type of block may only be used within a loop.  See [https://github.com/google/blockly/wiki/Loops#loop-termination-blocks https://github.com/google/blockly/wiki/Loops#loop-termination-blocks].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING = 'Warning: This block may only be used within a loop.';

// Logic Blocks.
/// url - Describes conditional statements (if-then-else) in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_else https://en.wikipedia.org/wiki/If_else], if present.
Blockly.Msg.CONTROLS_IF_HELPURL = 'https://github.com/google/blockly/wiki/IfElse';
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-blocks 'if' blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement], if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_1 = 'If a value is true, then do some statements.';
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-else-blocks if-else blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement], if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_2 = 'If a value is true, then do the first block of statements. Otherwise, do the second block of statements.';
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-else-if-blocks if-else-if blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement], if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_3 = 'If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.';
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-else-if-else-blocks if-else-if-else blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement], if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_4 = 'If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.';
/// block text - See [https://github.com/google/blockly/wiki/IfElse https://github.com/google/blockly/wiki/IfElse].
/// It is recommended, but not essential, that this have text in common with the translation of 'else if'
Blockly.Msg.CONTROLS_IF_MSG_IF = 'if';
/// block text - See [https://github.com/google/blockly/wiki/IfElse https://github.com/google/blockly/wiki/IfElse].  The English words "otherwise if" would probably be clearer than "else if", but the latter is used because it is traditional and shorter.
Blockly.Msg.CONTROLS_IF_MSG_ELSEIF = 'else if';
/// block text - See [https://github.com/google/blockly/wiki/IfElse https://github.com/google/blockly/wiki/IfElse].  The English word "otherwise" would probably be superior to "else", but the latter is used because it is traditional and shorter.
Blockly.Msg.CONTROLS_IF_MSG_ELSE = 'else';
Blockly.Msg.CONTROLS_IF_MSG_THEN = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.CONTROLS_IF_IF_TITLE_IF = Blockly.Msg.CONTROLS_IF_MSG_IF;
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#block-modification if block modification].
Blockly.Msg.CONTROLS_IF_IF_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this if block.';
Blockly.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = Blockly.Msg.CONTROLS_IF_MSG_ELSEIF;
/// tooltip - Describes the 'else if' subblock during [https://github.com/google/blockly/wiki/IfElse#block-modification if block modification].
Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP = 'Add a condition to the if block.';
/// tooltip -
Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE = Blockly.Msg.CONTROLS_IF_MSG_ELSE;
/// tooltip - Describes the 'else' subblock during [https://github.com/google/blockly/wiki/IfElse#block-modification if block modification].
Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP = 'Add a final, catch-all condition to the if block.';

/// url - Information about comparisons.
Blockly.Msg.LOGIC_COMPARE_HELPURL = 'https://en.wikipedia.org/wiki/Inequality_(mathematics)';
/// tooltip - Describes the equals (=) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ = 'Return true if both inputs equal each other.';
/// tooltip - Describes the not equals (≠) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ = 'Return true if both inputs are not equal to each other.';
/// tooltip - Describes the less than (<) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT = 'Return true if the first input is smaller than the second input.';
/// tooltip - Describes the less than or equals (≤) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE = 'Return true if the first input is smaller than or equal to the second input.';
/// tooltip - Describes the greater than (>) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT = 'Return true if the first input is greater than the second input.';
/// tooltip - Describes the greater than or equals (≥) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE = 'Return true if the first input is greater than or equal to the second input.';

/// url - Information about the Boolean conjunction ("and") and disjunction ("or") operators.  Consider using the translation of [https://en.wikipedia.org/wiki/Boolean_logic https://en.wikipedia.org/wiki/Boolean_logic], if it exists in your language.
Blockly.Msg.LOGIC_OPERATION_HELPURL = 'https://github.com/google/blockly/wiki/Logic#logical-operations';
/// tooltip - See [https://en.wikipedia.org/wiki/Logical_conjunction https://en.wikipedia.org/wiki/Logical_conjunction].
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND = 'Return true if both inputs are true.';
/// block text - See [https://en.wikipedia.org/wiki/Logical_conjunction https://en.wikipedia.org/wiki/Logical_conjunction].
Blockly.Msg.LOGIC_OPERATION_AND = 'and';
/// block text - See [https://en.wikipedia.org/wiki/Disjunction https://en.wikipedia.org/wiki/Disjunction].
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR = 'Return true if at least one of the inputs is true.';
/// block text - See [https://en.wikipedia.org/wiki/Disjunction https://en.wikipedia.org/wiki/Disjunction].
Blockly.Msg.LOGIC_OPERATION_OR = 'or';

/// url - Information about logical negation.  The translation of [https://en.wikipedia.org/wiki/Logical_negation https://en.wikipedia.org/wiki/Logical_negation] is recommended if it exists in the target language.
Blockly.Msg.LOGIC_NEGATE_HELPURL = 'https://github.com/google/blockly/wiki/Logic#not';
/// block text - This is a unary operator that returns ''false'' when the input is ''true'', and ''true'' when the input is ''false''.
/// \n\nParameters:\n* %1 - the input (which should be either the value "true" or "false")
Blockly.Msg.LOGIC_NEGATE_TITLE = 'not %1';
/// tooltip - See [https://en.wikipedia.org/wiki/Logical_negation https://en.wikipedia.org/wiki/Logical_negation].
Blockly.Msg.LOGIC_NEGATE_TOOLTIP = 'Returns true if the input is false. Returns false if the input is true.';

/// url - Information about the logic values ''true'' and ''false''.  Consider using the translation of [https://en.wikipedia.org/wiki/Truth_value https://en.wikipedia.org/wiki/Truth_value] if it exists in your language.
Blockly.Msg.LOGIC_BOOLEAN_HELPURL = 'https://github.com/google/blockly/wiki/Logic#values';
/// block text - The word for the [https://en.wikipedia.org/wiki/Truth_value logical value] ''true''.
Blockly.Msg.LOGIC_BOOLEAN_TRUE = 'true';
/// block text - The word for the [https://en.wikipedia.org/wiki/Truth_value logical value] ''false''.
Blockly.Msg.LOGIC_BOOLEAN_FALSE = 'false';
/// tooltip - Indicates that the block returns either of the two possible [https://en.wikipedia.org/wiki/Truth_value logical values].
Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP = 'Returns either true or false.';

/// url - Provide a link to the translation of [https://en.wikipedia.org/wiki/Nullable_type https://en.wikipedia.org/wiki/Nullable_type], if it exists in your language; otherwise, do not worry about translating this advanced concept.
Blockly.Msg.LOGIC_NULL_HELPURL = 'https://en.wikipedia.org/wiki/Nullable_type';
/// block text - In computer languages, ''null'' is a special value that indicates that no value has been set.  You may use your language's word for "nothing" or "invalid".
Blockly.Msg.LOGIC_NULL = 'null';
/// tooltip - This should use the word from the previous message.
Blockly.Msg.LOGIC_NULL_TOOLTIP = 'Returns null.';

/// url - Describes the programming language operator known as the ''ternary'' or ''conditional'' operator.  It is recommended that you use the translation of [https://en.wikipedia.org/wiki/%3F: https://en.wikipedia.org/wiki/%3F:] if it exists.
Blockly.Msg.LOGIC_TERNARY_HELPURL = 'https://en.wikipedia.org/wiki/%3F:';
/// block input text - Label for the input whose value determines which of the other two inputs is returned.  In some programming languages, this is called a ''''predicate''''.
Blockly.Msg.LOGIC_TERNARY_CONDITION = 'test';
/// block input text - Indicates that the following input should be returned (used as output) if the test input is true.  Remember to try to keep block text terse (short).
Blockly.Msg.LOGIC_TERNARY_IF_TRUE = 'if true';
/// block input text - Indicates that the following input should be returned (used as output) if the test input is false.
Blockly.Msg.LOGIC_TERNARY_IF_FALSE = 'if false';
/// tooltip - See [https://en.wikipedia.org/wiki/%3F: https://en.wikipedia.org/wiki/%3F:].
Blockly.Msg.LOGIC_TERNARY_TOOLTIP = 'Check the condition in "test". If the condition is true, returns the "if true" value; otherwise returns the "if false" value.';

// Math Blocks.
/// url - Information about (real) numbers.
Blockly.Msg.MATH_NUMBER_HELPURL = 'https://en.wikipedia.org/wiki/Number';
/// tooltip - Any positive or negative number, not necessarily an integer.
Blockly.Msg.MATH_NUMBER_TOOLTIP = 'A number.';

/// {{optional}}\nmath - The symbol for the binary operation addition.
Blockly.Msg.MATH_ADDITION_SYMBOL = '+';
/// {{optional}}\nmath - The symbol for the binary operation indicating that the right operand should be
/// subtracted from the left operand.
Blockly.Msg.MATH_SUBTRACTION_SYMBOL = '-';
/// {{optional}}\nmath - The binary operation indicating that the left operand should be divided by
/// the right operand.
Blockly.Msg.MATH_DIVISION_SYMBOL = '÷';
/// {{optional}}\nmath - The symbol for the binary operation multiplication.
Blockly.Msg.MATH_MULTIPLICATION_SYMBOL = '×';
/// {{optional}}\nmath - The symbol for the binary operation exponentiation.  Specifically, if the
/// value of the left operand is L and the value of the right operand (the exponent) is
/// R, multiply L by itself R times.  (Fractional and negative exponents are also legal.)
Blockly.Msg.MATH_POWER_SYMBOL = '^';

/// math - The short name of the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent sine].
Blockly.Msg.MATH_TRIG_SIN = 'sin';
/// math - The short name of the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent cosine].
Blockly.Msg.MATH_TRIG_COS = 'cos';
/// math - The short name of the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent tangent].
Blockly.Msg.MATH_TRIG_TAN = 'tan';
/// math - The short name of the ''inverse of'' the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent sine].
Blockly.Msg.MATH_TRIG_ASIN = 'asin';
/// math - The short name of the ''inverse of'' the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent cosine].
Blockly.Msg.MATH_TRIG_ACOS = 'acos';
/// math - The short name of the ''inverse of'' the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent tangent].
Blockly.Msg.MATH_TRIG_ATAN = 'atan';

/// url - Information about addition, subtraction, multiplication, division, and exponentiation.
Blockly.Msg.MATH_ARITHMETIC_HELPURL = 'https://en.wikipedia.org/wiki/Arithmetic';
/// tooltip - See [https://en.wikipedia.org/wiki/Addition https://en.wikipedia.org/wiki/Addition].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD = 'Return the sum of the two numbers.';
/// tooltip - See [https://en.wikipedia.org/wiki/Subtraction https://en.wikipedia.org/wiki/Subtraction].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS = 'Return the difference of the two numbers.';
/// tooltip - See [https://en.wikipedia.org/wiki/Multiplication https://en.wikipedia.org/wiki/Multiplication].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = 'Return the product of the two numbers.';
/// tooltip - See [https://en.wikipedia.org/wiki/Division_(mathematics) https://en.wikipedia.org/wiki/Division_(mathematics)].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE = 'Return the quotient of the two numbers.';
/// tooltip - See [https://en.wikipedia.org/wiki/Exponentiation https://en.wikipedia.org/wiki/Exponentiation].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER = 'Return the first number raised to the power of the second number.';

/// url - Information about the square root operation.
Blockly.Msg.MATH_SINGLE_HELPURL = 'https://en.wikipedia.org/wiki/Square_root';
/// dropdown - This computes the positive [https://en.wikipedia.org/wiki/Square_root square root] of its input.  For example, the square root of 16 is 4.
Blockly.Msg.MATH_SINGLE_OP_ROOT = 'square root';
/// tooltip - Please use the same term as in the previous message.
Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT = 'Return the square root of a number.';
/// dropdown - This leaves positive numeric inputs changed and inverts negative inputs.  For example, the absolute value of 5 is 5; the absolute value of -5 is also 5.  For more information, see [https://en.wikipedia.org/wiki/Absolute_value https://en.wikipedia.org/wiki/Absolute_value].
Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE = 'absolute';
/// tooltip - Please use the same term as in the previous message.
Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS = 'Return the absolute value of a number.';

/// tooltip - Calculates '''0-n''', where '''n''' is the single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_NEG = 'Return the negation of a number.';
/// tooltip - Calculates the [https://en.wikipedia.org/wiki/Natural_logarithm|natural logarithm] of its single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_LN = 'Return the natural logarithm of a number.';
/// tooltip - Calculates the [https://en.wikipedia.org/wiki/Common_logarithm common logarithm] of its single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG10 = 'Return the base 10 logarithm of a number.';
/// tooltip - Multiplies [https://en.wikipedia.org/wiki/E_%28mathematical_constant%29 e] by itself n times, where n is the single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_EXP = 'Return e to the power of a number.';
/// tooltip - Multiplies 10 by itself n times, where n is the single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_POW10 = 'Return 10 to the power of a number.';

/// url - Information about the trigonometric functions sine, cosine, tangent, and their inverses (ideally using degrees, not radians).
Blockly.Msg.MATH_TRIG_HELPURL = 'https://en.wikipedia.org/wiki/Trigonometric_functions';
/// tooltip - Return the [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent sine] of an [https://en.wikipedia.org/wiki/Degree_(angle) angle in degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_SIN = 'Return the sine of a degree (not radian).';
/// tooltip - Return the [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent cosine] of an [https://en.wikipedia.org/wiki/Degree_(angle) angle in degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_COS = 'Return the cosine of a degree (not radian).';
/// tooltip - Return the [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent tangent] of an [https://en.wikipedia.org/wiki/Degree_(angle) angle in degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_TAN = 'Return the tangent of a degree (not radian).';
/// tooltip - The [https://en.wikipedia.org/wiki/Inverse_trigonometric_functions inverse] of the [https://en.wikipedia.org/wiki/Cosine#Sine.2C_cosine_and_tangent sine function], using [https://en.wikipedia.org/wiki/Degree_(angle) degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_ASIN = 'Return the arcsine of a number.';
/// tooltip - The [https://en.wikipedia.org/wiki/Inverse_trigonometric_functions inverse] of the [https://en.wikipedia.org/wiki/Cosine#Sine.2C_cosine_and_tangent cosine] function, using [https://en.wikipedia.org/wiki/Degree_(angle) degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_ACOS = 'Return the arccosine of a number.';
/// tooltip - The [https://en.wikipedia.org/wiki/Inverse_trigonometric_functions inverse] of the [https://en.wikipedia.org/wiki/Cosine#Sine.2C_cosine_and_tangent tangent] function, using [https://en.wikipedia.org/wiki/Degree_(angle) degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_ATAN = 'Return the arctangent of a number.';

/// url - Information about the mathematical constants Pi (π), e, the golden ratio (φ), √ 2, √ 1/2, and infinity (∞).
Blockly.Msg.MATH_CONSTANT_HELPURL = 'https://en.wikipedia.org/wiki/Mathematical_constant';
/// tooltip - Provides the specified [https://en.wikipedia.org/wiki/Mathematical_constant mathematical constant].
Blockly.Msg.MATH_CONSTANT_TOOLTIP = 'Return one of the common constants: π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), sqrt(½) (0.707…), or ∞ (infinity).';
/// dropdown - A number is '''even''' if it is a multiple of 2.  For example, 4 is even (yielding true), but 3 is not (false).
Blockly.Msg.MATH_IS_EVEN = 'is even';
/// dropdown - A number is '''odd''' if it is not a multiple of 2.  For example, 3 is odd (yielding true), but 4 is not (false).  The opposite of "odd" is "even".
Blockly.Msg.MATH_IS_ODD = 'is odd';
/// dropdown - A number is [https://en.wikipedia.org/wiki/Prime prime] if it cannot be evenly divided by any positive integers except for 1 and itself.  For example, 5 is prime, but 6 is not because 2 × 3 = 6.
Blockly.Msg.MATH_IS_PRIME = 'is prime';
/// dropdown - A number is '''whole''' if it is an [https://en.wikipedia.org/wiki/Integer integer].  For example, 5 is whole, but 5.1 is not.
Blockly.Msg.MATH_IS_WHOLE = 'is whole';
/// dropdown - A number is '''positive''' if it is greater than 0.  (0 is neither negative nor positive.)
Blockly.Msg.MATH_IS_POSITIVE = 'is positive';
/// dropdown - A number is '''negative''' if it is less than 0.  (0 is neither negative nor positive.)
Blockly.Msg.MATH_IS_NEGATIVE = 'is negative';
/// dropdown - A number x is divisible by y if y goes into x evenly.  For example, 10 is divisible by 5, but 10 is not divisible by 3.
Blockly.Msg.MATH_IS_DIVISIBLE_BY = 'is divisible by';
/// tooltip - This block lets the user specify via a dropdown menu whether to check if the numeric input is even, odd, prime, whole, positive, negative, or divisible by a given value.
Blockly.Msg.MATH_IS_TOOLTIP = 'Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.';

/// url - Information about incrementing (increasing the value of) a variable.
/// For other languages, just use the translation of the Wikipedia page about
/// addition ([https://en.wikipedia.org/wiki/Addition https://en.wikipedia.org/wiki/Addition]).
Blockly.Msg.MATH_CHANGE_HELPURL = 'https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter';
/// - As in: ''change'' [the value of variable] ''item'' ''by'' 1 (e.g., if the variable named 'item' had the value 5, change it to 6).
/// %1 is a variable name.
/// %2 is the amount of change.
Blockly.Msg.MATH_CHANGE_TITLE = 'change %1 by %2';
/// tooltip -
Blockly.Msg.MATH_CHANGE_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/// tooltip - This updates the value of the variable by adding to it the following numeric input.\n\nParameters:\n* %1 - the name of the variable whose value should be increased.
Blockly.Msg.MATH_CHANGE_TOOLTIP = 'Add a number to variable "%1".';

/// url - Information about how numbers are rounded to the nearest integer
Blockly.Msg.MATH_ROUND_HELPURL = 'https://en.wikipedia.org/wiki/Rounding';
/// tooltip - See [https://en.wikipedia.org/wiki/Rounding https://en.wikipedia.org/wiki/Rounding].
Blockly.Msg.MATH_ROUND_TOOLTIP = 'Round a number up or down.';
/// dropdown - This rounds its input to the nearest whole number.  For example, 3.4 is rounded to 3.
Blockly.Msg.MATH_ROUND_OPERATOR_ROUND = 'round';
/// dropdown - This rounds its input up to the nearest whole number.  For example, if the input was 2.2, the result would be 3.
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDUP = 'round up';
/// dropdown - This rounds its input down to the nearest whole number.  For example, if the input was 3.8, the result would be 3.
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN = 'round down';

/// url - Information about applying a function to a list of numbers.  (We were unable to find such information in English.  Feel free to skip this and any other URLs that are difficult.)
Blockly.Msg.MATH_ONLIST_HELPURL = '';
/// dropdown - This computes the sum of the numeric elements in the list.  For example, the sum of the list {1, 4} is 5.
Blockly.Msg.MATH_ONLIST_OPERATOR_SUM = 'sum of list';
/// tooltip - Please use the same term for "sum" as in the previous message.
Blockly.Msg.MATH_ONLIST_TOOLTIP_SUM = 'Return the sum of all the numbers in the list.';
/// dropdown - This finds the smallest (minimum) number in a list.  For example, the smallest number in the list [-5, 0, 3] is -5.
Blockly.Msg.MATH_ONLIST_OPERATOR_MIN = 'min of list';
/// tooltip - Please use the same term for "min" or "minimum" as in the previous message.
Blockly.Msg.MATH_ONLIST_TOOLTIP_MIN = 'Return the smallest number in the list.';
/// dropdown - This finds the largest (maximum) number in a list.  For example, the largest number in the list [-5, 0, 3] is 3.
Blockly.Msg.MATH_ONLIST_OPERATOR_MAX = 'max of list';
/// tooltip
Blockly.Msg.MATH_ONLIST_TOOLTIP_MAX = 'Return the largest number in the list.';
/// dropdown - This adds up all of the numbers in a list and divides the sum by the number of elements in the list.  For example, the [https://en.wikipedia.org/wiki/Arithmetic_mean average] of the list [1, 2, 3, 4] is 2.5 (10/4).
Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE = 'average of list';
/// tooltip - See [https://en.wikipedia.org/wiki/Arithmetic_mean https://en.wikipedia.org/wiki/Arithmetic_mean] for more informatin.
Blockly.Msg.MATH_ONLIST_TOOLTIP_AVERAGE = 'Return the average (arithmetic mean) of the numeric values in the list.';
/// dropdown - This finds the [https://en.wikipedia.org/wiki/Median median] of the numeric values in a list.  For example, the median of the list {1, 2, 7, 12, 13} is 7.
Blockly.Msg.MATH_ONLIST_OPERATOR_MEDIAN = 'median of list';
/// tooltip - See [https://en.wikipedia.org/wiki/Median median https://en.wikipedia.org/wiki/Median median] for more information.
Blockly.Msg.MATH_ONLIST_TOOLTIP_MEDIAN = 'Return the median number in the list.';
/// dropdown - This finds the most common numbers ([https://en.wikipedia.org/wiki/Mode_(statistics) modes]) in a list.  For example, the modes of the list {1, 3, 9, 3, 9}  are {3, 9}.
Blockly.Msg.MATH_ONLIST_OPERATOR_MODE = 'modes of list';
/// tooltip - See [https://en.wikipedia.org/wiki/Mode_(statistics) https://en.wikipedia.org/wiki/Mode_(statistics)] for more information.
Blockly.Msg.MATH_ONLIST_TOOLTIP_MODE = 'Return a list of the most common item(s) in the list.';
/// dropdown - This finds the [https://en.wikipedia.org/wiki/Standard_deviation standard deviation] of the numeric values in a list.
Blockly.Msg.MATH_ONLIST_OPERATOR_STD_DEV = 'standard deviation of list';
/// tooltip - See [https://en.wikipedia.org/wiki/Standard_deviation https://en.wikipedia.org/wiki/Standard_deviation] for more information.
Blockly.Msg.MATH_ONLIST_TOOLTIP_STD_DEV = 'Return the standard deviation of the list.';
/// dropdown - This choose an element at random from a list.  Each element is chosen with equal probability.
Blockly.Msg.MATH_ONLIST_OPERATOR_RANDOM = 'random item of list';
/// tooltip - Please use same term for 'random' as in previous entry.
Blockly.Msg.MATH_ONLIST_TOOLTIP_RANDOM = 'Return a random element from the list.';

/// url - information about the modulo (remainder) operation.
Blockly.Msg.MATH_MODULO_HELPURL = 'https://en.wikipedia.org/wiki/Modulo_operation';
/// block text - Title of block providing the remainder when dividing the first numerical input by the second.  For example, the remainder of 10 divided by 3 is 1.\n\nParameters:\n* %1 - the dividend (10, in our example)\n* %2 - the divisor (3 in our example).
Blockly.Msg.MATH_MODULO_TITLE = 'remainder of %1 ÷ %2';
/// tooltip - For example, the remainder of 10 divided by 3 is 1.
Blockly.Msg.MATH_MODULO_TOOLTIP = 'Return the remainder from dividing the two numbers.';

/// url - Information about constraining a numeric value to be in a specific range.  (The English URL is not ideal.  Recall that translating URLs is the lowest priority.)
Blockly.Msg.MATH_CONSTRAIN_HELPURL = 'https://en.wikipedia.org/wiki/Clamping_%28graphics%29';
/// block text - The title of the block that '''constrain'''s (forces) a number to be in a given range.
///For example, if the number 150 is constrained to be between 5 and 100, the result will be 100.
///\n\nParameters:\n* %1 - the value to constrain (e.g., 150)\n* %2 - the minimum value (e.g., 5)\n* %3 - the maximum value (e.g., 100).
Blockly.Msg.MATH_CONSTRAIN_TITLE = 'constrain %1 low %2 high %3';
/// tooltip - This compares a number ''x'' to a low value ''L'' and a high value ''H''.  If ''x'' is less then ''L'', the result is ''L''.  If ''x'' is greater than ''H'', the result is ''H''.  Otherwise, the result is ''x''.
Blockly.Msg.MATH_CONSTRAIN_TOOLTIP = 'Constrain a number to be between the specified limits (inclusive).';

/// url - Information about how computers generate random numbers.
Blockly.Msg.MATH_RANDOM_INT_HELPURL = 'https://en.wikipedia.org/wiki/Random_number_generation';
/// block text - The title of the block that generates a random integer (whole number) in the specified range.  For example, if the range is from 5 to 7, this returns 5, 6, or 7 with equal likelihood. %1 is a placeholder for the lower number, %2 is the placeholder for the larger number.
Blockly.Msg.MATH_RANDOM_INT_TITLE = 'random integer from %1 to %2';
/// tooltip - Return a random integer between two values specified as inputs.  For example, if one input was 7 and another 9, any of the numbers 7, 8, or 9 could be produced.
Blockly.Msg.MATH_RANDOM_INT_TOOLTIP = 'Return a random integer between the two specified limits, inclusive.';

/// url - Information about how computers generate random numbers (specifically, numbers in the range from 0 to just below 1).
Blockly.Msg.MATH_RANDOM_FLOAT_HELPURL = 'https://en.wikipedia.org/wiki/Random_number_generation';
/// block text - The title of the block that generates a random number greater than or equal to 0 and less than 1.
Blockly.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM = 'random fraction';
/// tooltip - Return a random fraction between 0 and 1.  The value may be equal to 0 but must be less than 1.
Blockly.Msg.MATH_RANDOM_FLOAT_TOOLTIP = 'Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).';

// Text Blocks.
/// url - Information about how computers represent text (sometimes referred to as ''string''s).
Blockly.Msg.TEXT_TEXT_HELPURL = 'https://en.wikipedia.org/wiki/String_(computer_science)';
/// tooltip - See [https://github.com/google/blockly/wiki/Text https://github.com/google/blockly/wiki/Text].
Blockly.Msg.TEXT_TEXT_TOOLTIP = 'A letter, word, or line of text.';

/// url - Information on concatenating/appending pieces of text.
Blockly.Msg.TEXT_JOIN_HELPURL = 'https://github.com/google/blockly/wiki/Text#text-creation';
/// block text - See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation].
Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH = 'create text with';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#text-creation create text with] for more information.
Blockly.Msg.TEXT_JOIN_TOOLTIP = 'Create a piece of text by joining together any number of items.';

/// block text - This is shown when the programmer wants to change the number of pieces of text being joined together.  See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation], specifically the last picture in the 'Text creation' section.\n{{Identical|Join}}
Blockly.Msg.TEXT_CREATE_JOIN_TITLE_JOIN = 'join';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation], specifically the last picture in the 'Text creation' section.
Blockly.Msg.TEXT_CREATE_JOIN_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this text block.';
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/// block text - See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation], specifically the last picture in the 'Text creation' section.
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP = 'Add an item to the text.';

/// url - This and the other text-related URLs are going to be hard to translate.  As always, it is okay to leave untranslated or paste in the English-language URL.  For these URLs, you might also consider a general URL about how computers represent text (such as the translation of [https://en.wikipedia.org/wiki/String_(computer_science) this Wikipedia page]).
Blockly.Msg.TEXT_APPEND_HELPURL = 'https://github.com/google/blockly/wiki/Text#text-modification';
/// block input text - Message preceding the name of a variable to which text should be appended.
/// [[File:blockly-append-text.png]]
Blockly.Msg.TEXT_APPEND_TO = 'to';
/// block input text - Message following the variable and preceding the piece of text that should
/// be appended, as shown below.
/// [[File:blockly-append-text.png]]
Blockly.Msg.TEXT_APPEND_APPENDTEXT = 'append text';
/// default name -
Blockly.Msg.TEXT_APPEND_VARIABLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/// tooltip - See [https://github.com/google/blockly/wiki/Text#text-modification https://github.com/google/blockly/wiki/Text#text-modification] for more information.\n\nParameters:\n* %1 - the name of the variable to which text should be appended
Blockly.Msg.TEXT_APPEND_TOOLTIP = 'Append some text to variable "%1".';

/// url - Information about text on computers (usually referred to as 'strings').
Blockly.Msg.TEXT_LENGTH_HELPURL = 'https://github.com/google/blockly/wiki/Text#text-modification';
/// block text - See [https://github.com/google/blockly/wiki/Text#text-length https://github.com/google/blockly/wiki/Text#text-length].
/// \n\nParameters:\n* %1 - the piece of text to take the length of
Blockly.Msg.TEXT_LENGTH_TITLE = 'length of %1';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#text-length https://github.com/google/blockly/wiki/Text#text-length].
Blockly.Msg.TEXT_LENGTH_TOOLTIP = 'Returns the number of letters (including spaces) in the provided text.';

/// url - Information about empty pieces of text on computers (usually referred to as 'empty strings').
Blockly.Msg.TEXT_ISEMPTY_HELPURL = 'https://github.com/google/blockly/wiki/Text#checking-for-empty-text';
/// block text - See [https://github.com/google/blockly/wiki/Text#checking-for-empty-text https://github.com/google/blockly/wiki/Text#checking-for-empty-text].
/// \n\nParameters:\n* %1 - the piece of text to test for emptiness
Blockly.Msg.TEXT_ISEMPTY_TITLE = '%1 is empty';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#checking-for-empty-text https://github.com/google/blockly/wiki/Text#checking-for-empty-text].
Blockly.Msg.TEXT_ISEMPTY_TOOLTIP = 'Returns true if the provided text is empty.';

/// url - Information about finding a character in a piece of text.
Blockly.Msg.TEXT_INDEXOF_HELPURL = 'https://github.com/google/blockly/wiki/Text#finding-text';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#finding-text https://github.com/google/blockly/wiki/Text#finding-text].
Blockly.Msg.TEXT_INDEXOF_TOOLTIP = 'Returns the index of the first/last occurrence of the first text in the second text. Returns 0 if text is not found.';
/// block text - Title of blocks allowing users to find text.  See
/// [https://github.com/google/blockly/wiki/Text#finding-text
/// https://github.com/google/blockly/wiki/Text#finding-text].
/// [[File:Blockly-find-text.png]].
Blockly.Msg.TEXT_INDEXOF_INPUT_INTEXT = 'in text';
/// dropdown - See [https://github.com/google/blockly/wiki/Text#finding-text
/// https://github.com/google/blockly/wiki/Text#finding-text].
/// [[File:Blockly-find-text.png]].
Blockly.Msg.TEXT_INDEXOF_OPERATOR_FIRST = 'find first occurrence of text';
/// dropdown - See [https://github.com/google/blockly/wiki/Text#finding-text
/// https://github.com/google/blockly/wiki/Text#finding-text].  This would
/// replace "find first occurrence of text" below.  (For more information on
/// how common text is factored out of dropdown menus, see
/// [https://translatewiki.net/wiki/Translating:Blockly#Drop-Down_Menus
/// https://translatewiki.net/wiki/Translating:Blockly#Drop-Down_Menus)].)
/// [[File:Blockly-find-text.png]].
Blockly.Msg.TEXT_INDEXOF_OPERATOR_LAST = 'find last occurrence of text';
/// block text - Optional text to follow the rightmost block in a
/// [https://github.com/google/blockly/wiki/Text#finding-text
/// https://github.com/google/blockly/wiki/Text#finding-text in text ... find block]
/// (after the "a" in the below picture).  This will be the empty string in most languages.
/// [[File:Blockly-find-text.png]].
Blockly.Msg.TEXT_INDEXOF_TAIL = '';

/// url - Information about extracting characters (letters, number, symbols, etc.) from text.
Blockly.Msg.TEXT_CHARAT_HELPURL = 'https://github.com/google/blockly/wiki/Text#extracting-text';
/// block text - Appears before the piece of text from which a letter (or number,
/// punctuation character, etc.) should be extracted, as shown below.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_INPUT_INTEXT = 'in text';
/// dropdown - Indicates that the letter (or number, punctuation character, etc.) with the
/// specified index should be obtained from the preceding piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_FROM_START = 'get letter #';
/// block text - Indicates that the letter (or number, punctuation character, etc.) with the
/// specified index from the end of a given piece of text should be obtained. See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_FROM_END = 'get letter # from end';
/// block text - Indicates that the first letter of the following piece of text should be
/// retrieved.  See [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_FIRST = 'get first letter';
/// block text - Indicates that the last letter (or number, punctuation mark, etc.) of the
/// following piece of text should be retrieved.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_LAST = 'get last letter';
/// block text - Indicates that any letter (or number, punctuation mark, etc.) in the
/// following piece of text should be randomly selected.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_RANDOM = 'get random letter';
/// block text - Text that goes after the rightmost block/dropdown when getting a single letter from
/// a piece of text, as in [https://blockly-demo.appspot.com/static/apps/code/index.html#3m23km these
/// blocks] or shown below.  For most languages, this will be blank.
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_TAIL = '';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_TOOLTIP = 'Returns the letter at the specified position.';

/// See [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
Blockly.Msg.TEXT_GET_SUBSTRING_TOOLTIP = 'Returns a specified portion of the text.';
/// url - Information about extracting characters from text.  Reminder: urls are the
/// lowest priority translations.  Feel free to skip.
Blockly.Msg.TEXT_GET_SUBSTRING_HELPURL = 'https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text';
/// block text - Precedes a piece of text from which a portion should be extracted.
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT = 'in text';
/// dropdown - Indicates that the following number specifies the position (relative to the start
/// position) of the beginning of the region of text that should be obtained from the preceding
/// piece of text.  See [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_START = 'get substring from letter #';
/// dropdown - Indicates that the following number specifies the position (relative to the end
/// position) of the beginning of the region of text that should be obtained from the preceding
/// piece of text.  See [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// Note: If {{msg-Blockly|ORDINAL_NUMBER_SUFFIX}} is defined, it will
/// automatically appear ''after'' this and any other
/// [https://translatewiki.net/wiki/Translating:Blockly#Ordinal_numbers ordinal numbers]
/// on this block.
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_END = 'get substring from letter # from end';
/// block text - Indicates that a region starting with the first letter of the preceding piece
/// of text should be extracted.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_START_FIRST = 'get substring from first letter';
/// dropdown - Indicates that the following number specifies the position (relative to
/// the start position) of the end of the region of text that should be obtained from the
/// preceding piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_START = 'to letter #';
/// dropdown - Indicates that the following number specifies the position (relative to the
/// end position) of the end of the region of text that should be obtained from the preceding
/// piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_END = 'to letter # from end';
/// block text - Indicates that a region ending with the last letter of the preceding piece
/// of text should be extracted.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_END_LAST = 'to last letter';
/// block text - Text that should go after the rightmost block/dropdown when
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// extracting a region of text].  In most languages, this will be the empty string.
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_TAIL = '';

/// url - Information about the case of letters (upper-case and lower-case).
Blockly.Msg.TEXT_CHANGECASE_HELPURL = 'https://github.com/google/blockly/wiki/Text#adjusting-text-case';
/// tooltip - Describes a block to adjust the case of letters.  For more information on this block,
/// see [https://github.com/google/blockly/wiki/Text#adjusting-text-case
/// https://github.com/google/blockly/wiki/Text#adjusting-text-case].
Blockly.Msg.TEXT_CHANGECASE_TOOLTIP = 'Return a copy of the text in a different case.';
/// block text - Indicates that all of the letters in the following piece of text should be
/// capitalized.  If your language does not use case, you may indicate that this is not
/// applicable to your language.  For more information on this block, see
/// [https://github.com/google/blockly/wiki/Text#adjusting-text-case
/// https://github.com/google/blockly/wiki/Text#adjusting-text-case].
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE = 'to UPPER CASE';
/// block text - Indicates that all of the letters in the following piece of text should be converted to lower-case.  If your language does not use case, you may indicate that this is not applicable to your language.  For more information on this block, see [https://github.com/google/blockly/wiki/Text#adjusting-text-case https://github.com/google/blockly/wiki/Text#adjusting-text-case].
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE = 'to lower case';
/// block text - Indicates that the first letter of each of the following words should be capitalized and the rest converted to lower-case.  If your language does not use case, you may indicate that this is not applicable to your language.  For more information on this block, see [https://github.com/google/blockly/wiki/Text#adjusting-text-case https://github.com/google/blockly/wiki/Text#adjusting-text-case].
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE = 'to Title Case';

/// url - Information about trimming (removing) text off the beginning and ends of pieces of text.
Blockly.Msg.TEXT_TRIM_HELPURL = 'https://github.com/google/blockly/wiki/Text#trimming-removing-spaces';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
/// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].
Blockly.Msg.TEXT_TRIM_TOOLTIP = 'Return a copy of the text with spaces removed from one or both ends.';
/// dropdown - Removes spaces from the beginning and end of a piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
/// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].  Note that neither
/// this nor the other options modify the original piece of text (that follows);
/// the block just returns a version of the text without the specified spaces.
Blockly.Msg.TEXT_TRIM_OPERATOR_BOTH = 'trim spaces from both sides of';
/// dropdown - Removes spaces from the beginning of a piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
/// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].
/// Note that in right-to-left scripts, this will remove spaces from the right side.
Blockly.Msg.TEXT_TRIM_OPERATOR_LEFT = 'trim spaces from left side of';
/// dropdown - Removes spaces from the end of a piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
/// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].
/// Note that in right-to-left scripts, this will remove spaces from the left side.
Blockly.Msg.TEXT_TRIM_OPERATOR_RIGHT = 'trim spaces from right side of';

/// url - Information about displaying text on computers.
Blockly.Msg.TEXT_PRINT_HELPURL = 'https://github.com/google/blockly/wiki/Text#printing-text';
/// block text - Display the input on the screen.  See
/// [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
/// \n\nParameters:\n* %1 - the value to print
Blockly.Msg.TEXT_PRINT_TITLE = 'print %1';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PRINT_TOOLTIP = 'Print the specified text, number or other value.';
/// url - Information about getting text from users.
Blockly.Msg.TEXT_PROMPT_HELPURL = 'https://github.com/google/blockly/wiki/Text#getting-input-from-the-user';
/// dropdown - Specifies that a piece of text should be requested from the user with
/// the following message.  See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PROMPT_TYPE_TEXT = 'prompt for text with message';
/// dropdown - Specifies that a number should be requested from the user with the
/// following message.  See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER = 'prompt for number with message';
/// dropdown - Precedes the message with which the user should be prompted for
/// a number.  See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER = 'Prompt for user for a number.';
/// dropdown - Precedes the message with which the user should be prompted for some text.
/// See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT = 'Prompt for user for some text.';

// Lists Blocks.
/// url - Information on empty lists.
Blockly.Msg.LISTS_CREATE_EMPTY_HELPURL = 'https://github.com/google/blockly/wiki/Lists#create-empty-list';
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-empty-list https://github.com/google/blockly/wiki/Lists#create-empty-list].
Blockly.Msg.LISTS_CREATE_EMPTY_TITLE = 'create empty list';
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-empty-list https://github.com/google/blockly/wiki/Lists#create-empty-list].
Blockly.Msg.LISTS_CREATE_EMPTY_TOOLTIP = 'Returns a list, of length 0, containing no data records';

/// helpurl -
Blockly.Msg.LISTS_ADD_HELPURL = '';
/// message one -
Blockly.Msg.LISTS_ADD_MESSAGE_ONE = 'in list';
/// message two -
Blockly.Msg.LISTS_ADD_MESSAGE_TWO = 'add';
/// message three-
Blockly.Msg.LISTS_ADD_MESSAGE_THREE = 'to the';
/// tooltip -
Blockly.Msg.LISTS_ADD_TOOLTIP = 'Adds a value to either the front or to the end of a list provided.';

/// url - Information on building lists.
Blockly.Msg.LISTS_CREATE_WITH_HELPURL = 'https://github.com/google/blockly/wiki/Lists#create-list-with';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#create-list-with https://github.com/google/blockly/wiki/Lists#create-list-with].
Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP = 'Create a list with any number of items.';
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-list-with https://github.com/google/blockly/wiki/Lists#create-list-with].
Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH = 'create list with';
/// block text - This appears in a sub-block when [https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs changing the number of inputs in a ''''create list with'''' block].\n{{Identical|List}}
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = 'list';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs].
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this list block.';
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs].
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP = 'Add an item to the list.';

/// url - Information about [https://github.com/google/blockly/wiki/Lists#create-list-with creating a list with multiple copies of a single item].
Blockly.Msg.LISTS_REPEAT_HELPURL = 'https://github.com/google/blockly/wiki/Lists#create-list-with';
/// url - See [https://github.com/google/blockly/wiki/Lists#create-list-with creating a list with multiple copies of a single item].
Blockly.Msg.LISTS_REPEAT_TOOLTIP = 'Creates a list consisting of the given value repeated the specified number of times.';
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-list-with
/// https://github.com/google/blockly/wiki/Lists#create-list-with].
///\n\nParameters:\n* %1 - the item (text) to be repeated\n* %2 - the number of times to repeat it
Blockly.Msg.LISTS_REPEAT_TITLE = 'create list with item %1 repeated %2 times';

/// url - Information about how the length of a list is computed (i.e., by the total number of elements, not the number of different elements).
Blockly.Msg.LISTS_LENGTH_HELPURL = 'https://github.com/google/blockly/wiki/Lists#length-of';
/// block text - See [https://github.com/google/blockly/wiki/Lists#length-of https://github.com/google/blockly/wiki/Lists#length-of].
/// \n\nParameters:\n* %1 - the list whose length is desired
Blockly.Msg.LISTS_LENGTH_TITLE = 'length of %1';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#length-of https://github.com/google/blockly/wiki/Lists#length-of Blockly:Lists:length of].
Blockly.Msg.LISTS_LENGTH_TOOLTIP = 'Returns the length of a list.';

/// url - See [https://github.com/google/blockly/wiki/Lists#is-empty https://github.com/google/blockly/wiki/Lists#is-empty].
Blockly.Msg.LISTS_ISEMPTY_HELPURL = 'https://github.com/google/blockly/wiki/Lists#is-empty';
/// block text - See [https://github.com/google/blockly/wiki/Lists#is-empty
/// https://github.com/google/blockly/wiki/Lists#is-empty].
/// \n\nParameters:\n* %1 - the list to test
Blockly.Msg.LISTS_ISEMPTY_TITLE = '%1 is empty';
/// block tooltip - See [https://github.com/google/blockly/wiki/Lists#is-empty
/// https://github.com/google/blockly/wiki/Lists#is-empty].
Blockly.Msg.LISTS_ISEMPTY_TOOLTIP = 'Returns true if the list is empty.';

/// block text - Title of blocks operating on [https://github.com/google/blockly/wiki/Lists lists].
Blockly.Msg.LISTS_INLIST = 'in list';

/// url - See [https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list
/// https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list].
Blockly.Msg.LISTS_INDEX_OF_HELPURL = 'https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list';
Blockly.Msg.LISTS_INDEX_OF_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
/// dropdown - See [https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list
/// Lists#finding-items-in-a-list].
/// [[File:Blockly-list-find.png]]
Blockly.Msg.LISTS_INDEX_OF_FIRST = 'find first occurrence of item';
/// dropdown - See [https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list
/// https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list].
/// [[File:Blockly-list-find.png]]
Blockly.Msg.LISTS_INDEX_OF_LAST = 'find last occurrence of item';
/// dropdown - See [https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list
/// https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list].
/// [[File:Blockly-list-find.png]]
Blockly.Msg.LISTS_INDEX_OF_TOOLTIP = 'Returns the index of the first/last occurrence of the item in the list. Returns 0 if item is not found.';

Blockly.Msg.LISTS_GET_INDEX_HELPURL = Blockly.Msg.LISTS_INDEX_OF_HELPURL;
/// dropdown - Indicates that the user wishes to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
/// get an item from a list] without removing it from the list.
Blockly.Msg.LISTS_GET_INDEX_GET = 'get';
/// dropdown - Indicates that the user wishes to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
/// get and remove an item from a list], as opposed to merely getting
/// it without modifying the list.
Blockly.Msg.LISTS_GET_INDEX_GET_REMOVE = 'get and remove';
/// dropdown - Indicates that the user wishes to
/// [https://github.com/google/blockly/wiki/Lists#removing-an-item
/// remove an item from a list].\n{{Identical|Remove}}
Blockly.Msg.LISTS_GET_INDEX_REMOVE = 'remove';
/// dropdown - Indicates that an index relative to the front of the list should be used to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item get and/or remove
/// an item from a list].  Note: If {{msg-Blockly|ORDINAL_NUMBER_SUFFIX}} is defined, it will
/// automatically appear ''after'' this number (and any other ordinal numbers on this block).
/// See [[Translating:Blockly#Ordinal_numbers]] for more information on ordinal numbers in Blockly.
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_FROM_START = '#';
/// dropdown - Indicates that an index relative to the end of the list should be used
/// to [https://github.com/google/blockly/wiki/Lists#getting-a-single-item access an item in a list].
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_FROM_END = '# from end';
/// dropdown - Indicates that the '''first''' item should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item accessed in a list].
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_FIRST = 'first';
/// dropdown - Indicates that the '''last''' item should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item accessed in a list].
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_LAST = 'last';
/// dropdown - Indicates that a '''random''' item should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item accessed in a list].
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_RANDOM = 'random';
/// block text - Text that should go after the rightmost block/dropdown when
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
/// accessing an item from a list].  In most languages, this will be the empty string.
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_TAIL = '';
/// block text -
Blockly.Msg.LISTS_GET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
/// https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM_START = 'Returns the item at the specified position in a list. #1 is the first item.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
/// https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM_END = 'Returns the item at the specified position in a list. #1 is the last item.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
/// https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = 'Returns the first item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
/// https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST = 'Returns the last item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
/// https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = 'Returns a random item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item]
/// (for remove and return) and
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for '# from start'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM_START = 'Removes and returns the item at the specified position in a list. #1 is the first item.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for '# from end'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM_END = 'Removes and returns the item at the specified position in a list. #1 is the last item.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'first'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = 'Removes and returns the first item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'last'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = 'Removes and returns the last item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'random'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = 'Removes and returns a random item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for '# from start'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM_START = 'Removes the item at the specified position in a list. #1 is the first item.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for '# from end'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM_END = 'Removes the item at the specified position in a list. #1 is the last item.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'first'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = 'Removes the first item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'last'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = 'Removes the last item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'random'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = 'Removes a random item in a list.';
/// url - Information about putting items in lists.
Blockly.Msg.LISTS_SET_INDEX_HELPURL = 'https://github.com/google/blockly/wiki/Lists#in-list--set';
Blockly.Msg.LISTS_SET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
/// block text - [https://github.com/google/blockly/wiki/Lists#in-list--set
/// Replaces an item in a list].
/// [[File:Blockly-in-list-set-insert.png]]
Blockly.Msg.LISTS_SET_INDEX_SET = 'set';
/// block text - [https://github.com/google/blockly/wiki/Lists#in-list--insert-at
/// Inserts an item into a list].
/// [[File:Blockly-in-list-set-insert.png]]
Blockly.Msg.LISTS_SET_INDEX_INSERT = 'insert at';
/// block text - The word(s) after the position in the list and before the item to be set/inserted.
/// [[File:Blockly-in-list-set-insert.png]]
Blockly.Msg.LISTS_SET_INDEX_INPUT_TO = 'as';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM_START = 'Sets the item at the specified position in a list. #1 is the first item.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM_END = 'Sets the item at the specified position in a list. #1 is the last item.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = 'Sets the first item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST = 'Sets the last item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = 'Sets a random item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM_START = 'Inserts the item at the specified position in a list. #1 is the first item.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM_END = 'Inserts the item at the specified position in a list. #1 is the last item.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = 'Inserts the item at the start of a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = 'Append the item to the end of a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = 'Inserts the item randomly in a list.';

/// url - Information describing extracting a sublist from an existing list.
Blockly.Msg.LISTS_GET_SUBLIST_HELPURL = 'https://github.com/google/blockly/wiki/Lists#getting-a-sublist';
/// url -
Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
/// dropdown - Indicates that an index relative to the front of the list should be used
/// to specify the beginning of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
/// [[File:Blockly-get-sublist.png]]
/// Note: If {{msg-Blockly|ORDINAL_NUMBER_SUFFIX}} is defined, it will
/// automatically appear ''after'' this number (and any other ordinal numbers on this block).
/// See [[Translating:Blockly#Ordinal_numbers]] for more information on ordinal numbers in Blockly.
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_START = 'get sub-list from #';
/// dropdown - Indicates that an index relative to the end of the list should be used
/// to specify the beginning of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_END = 'get sub-list from # from end';
/// dropdown - Indicates that the
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist sublist to extract]
/// should begin with the list's first item.
Blockly.Msg.LISTS_GET_SUBLIST_START_FIRST = 'get sub-list from first';
/// dropdown - Indicates that an index relative to the front of the list should be
/// used to specify the end of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_START = 'to #';
/// dropdown - Indicates that an index relative to the end of the list should be
/// used to specify the end of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_END = 'to # from end';
/// dropdown - Indicates that the '''last''' item in the given list should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist the end
/// of the selected sublist].
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_END_LAST = 'to last';
/// block text - This appears in the rightmost position ("tail") of the
/// sublist block, as described at
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist
/// https://github.com/google/blockly/wiki/Lists#getting-a-sublist].
/// In English and most other languages, this is the empty string.
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_TAIL = '';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-sublist
/// https://github.com/google/blockly/wiki/Lists#getting-a-sublist] for more information.
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP = 'Creates a copy of the specified portion of a list.';

/// url - Information describing splitting text into a list, or joining a list into text.
Blockly.Msg.LISTS_SPLIT_HELPURL = 'https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists';
/// dropdown - Indicates that text will be split up into a list (e.g. "a-b-c" -> ["a", "b", "c"]).
Blockly.Msg.LISTS_SPLIT_LIST_FROM_TEXT = 'make list from text';
/// dropdown - Indicates that a list will be joined together to form text (e.g. ["a", "b", "c"] -> "a-b-c").
Blockly.Msg.LISTS_SPLIT_TEXT_FROM_LIST = 'make text from list';
/// block text - Prompts for a letter to be used as a separator when splitting or joining text.
Blockly.Msg.LISTS_SPLIT_WITH_DELIMITER = 'with delimiter';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#make-list-from-text
/// https://github.com/google/blockly/wiki/Lists#make-list-from-text] for more information.
Blockly.Msg.LISTS_SPLIT_TOOLTIP_SPLIT = 'Split text into a list of texts, breaking at each delimiter.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#make-text-from-list
/// https://github.com/google/blockly/wiki/Lists#make-text-from-list] for more information.
Blockly.Msg.LISTS_SPLIT_TOOLTIP_JOIN = 'Join a list of texts into one text, separated by a delimiter.';

/// grammar - Text that follows an ordinal number (a number that indicates
/// position relative to other numbers).  In most languages, such text appears
/// before the number, so this should be blank.  An exception is Hungarian.
/// See [[Translating:Blockly#Ordinal_numbers]] for more information.
Blockly.Msg.ORDINAL_NUMBER_SUFFIX = '';

// Variables Blocks.
/// The display name of the any variable type
Blockly.Msg.VARIABLES_TYPE_ANY = 'any';
/// The display name of the true/false variable type
Blockly.Msg.VARIABLES_TYPE_BOOLEAN = 'true/false';
/// The display name of the number variable type
Blockly.Msg.VARIABLES_TYPE_NUMBER = 'number';
/// The display name of the text variable type
Blockly.Msg.VARIABLES_TYPE_STRING = 'text';
/// The display name of the colour variable type
Blockly.Msg.VARIABLES_TYPE_COLOUR = 'colour';
/// The display name of the array variable type
Blockly.Msg.VARIABLES_TYPE_ARRAY = 'list';
/// The display name of the instace variable type
Blockly.Msg.VARIABLES_TYPE_INSTANCE = 'instance';
/// The display name of the class variable type
Blockly.Msg.VARIABLES_TYPE_CLASS = 'class';
/// The display name of the sound variable type
Blockly.Msg.VARIABLES_TYPE_SOUND = 'sound';
/// The display name of the pointer variable type
Blockly.Msg.VARIABLES_TYPE_POINTER = 'finger/pointer';
/// The display name of the location variable type
Blockly.Msg.VARIABLES_TYPE_COORDINATE = 'location';


/// url - Information about ''variables'' in computer programming.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Variable_(computer_science) https://en.wikipedia.org/wiki/Variable_(computer_science)], if it exists.
Blockly.Msg.VARIABLES_GET_HELPURL = 'https://github.com/google/blockly/wiki/Variables#get';
/// tooltip - This gets the value of the named variable without modifying it.
Blockly.Msg.VARIABLES_GET_TOOLTIP = 'Returns the value of this property. Properties persist for the duration of a gameobjects life.';
/// tooltip - This gets the value of the named local scope variable without modifying it.
Blockly.Msg.VARIABLES_GET_TOOLTIP_LOCAL = 'Returns the value of this local variable. Local variables persist for the duration of a function or event.';
/// tooltip - This gets the value of the named global scope variable without modifying it.
Blockly.Msg.VARIABLES_GET_TOOLTIP_GLOBAL = 'Returns the value of this global variable. Global variables persist for the duration of the game.';
/// context menu - Selecting this creates a block to set (change) the value of this variable.
/// \n\nParameters:\n* %1 - the name of the variable.
Blockly.Msg.VARIABLES_GET_CREATE_SET = 'Create "set %1"';

/// url - Information about ''variables'' in computer programming.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Variable_(computer_science) https://en.wikipedia.org/wiki/Variable_(computer_science)], if it exists.
Blockly.Msg.VARIABLES_SET_HELPURL = 'https://github.com/google/blockly/wiki/Variables#set';
/// block text - Change the value of a mathematical variable: '''set [the value of] x to 7'''.\n\nParameters:\n* %1 - the name of the variable.\n* %2 - the value to be assigned.
Blockly.Msg.VARIABLES_SET = 'set %1 to %2';
/// tooltip - This initializes or changes the value of the named variable.
Blockly.Msg.VARIABLES_SET_TOOLTIP = 'Sets this variable to be equal to the input which will persist for the duration of the gameobjects life.';
/// tooltip - This initializes or changes the value of the named variable.
Blockly.Msg.VARIABLES_SET_TOOLTIP_LOCAL = 'Sets this variable to be equal to the input which will persist for the duration of the function or event.';
/// tooltip - This initializes or changes the value of the named variable.
Blockly.Msg.VARIABLES_SET_TOOLTIP_GLOBAL = 'Sets this variable to be equal to the input which will persist for the duration of the game.';
/// context menu - Selecting this creates a block to get (change) the value of
/// this variable.\n\nParameters:\n* %1 - the name of the variable.
Blockly.Msg.VARIABLES_SET_CREATE_GET = 'Create "get %1"';

// Procedures Blocks.
/// url - Information about defining [https://en.wikipedia.org/wiki/Procedure_(computer_science) functions] that do not have return values.
Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL = 'https://en.wikipedia.org/wiki/Procedure_%28computer_science%29';
/// block text - This precedes the name of the function when defining it.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#c84aoc this sample
/// function definition].
Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE = 'to';
/// default name - This acts as a placeholder for the name of a function on a
/// function definition block, as shown on
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#w7cfju this block].
/// The user will replace it with the function's name.
Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE = 'do something';
/// block text - This precedes the list of parameters on a function's defiition block.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#voztpd this sample
/// function with parameters].
Blockly.Msg.PROCEDURES_BEFORE_PARAMS = 'with:';
/// block text - This precedes the list of parameters on a function's caller block.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#voztpd this sample
/// function with parameters].
Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS = 'with:';
/// block text - This appears next to the function's "body", the blocks that should be
/// run when the function is called, as shown in
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#voztpd this sample
/// function definition].
Blockly.Msg.PROCEDURES_DEFNORETURN_DO = '';
/// tooltip
Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP = 'Creates a function with no output.';
/// url - Information about defining [https://en.wikipedia.org/wiki/Procedure_(computer_science) functions] that have return values.
Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL = 'https://en.wikipedia.org/wiki/Procedure_%28computer_science%29';
/// message -
Blockly.Msg.PROCEDURES_DEFRETURN_TITLE = Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE;
/// message -
Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE = Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE;
/// message -
Blockly.Msg.PROCEDURES_DEFRETURN_DO = Blockly.Msg.PROCEDURES_DEFNORETURN_DO;
/// block text - This imperative or infinite verb precedes the value that is used as the return value
/// (output) of this function.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#6ot5y5 this sample
/// function that returns a value].
///
Blockly.Msg.PROCEDURES_DEFRETURN_RETURN = 'return';
/// tooltip
Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP = 'Creates a function with an output.';
/// Label for a checkbox that controls if statements are allowed in a function.
Blockly.Msg.PROCEDURES_ALLOW_STATEMENTS = 'allow statements';

/// alert - The user has created a function with two parameters that have the same name.  Every parameter must have a different name.
Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING = 'Warning: This function has duplicate parameters.';

/// url - Information about calling [https://en.wikipedia.org/wiki/Procedure_(computer_science) functions] that do not return values.
Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL = 'https://en.wikipedia.org/wiki/Procedure_%28computer_science%29';
/// block text - In most (if not all) languages, this will be the empty string.
/// It precedes the name of the function that should be run.  See, for example,
/// the "draw square" block in [https://blockly-demo.appspot.com/static/apps/turtle/index.html#ztz96g].
Blockly.Msg.PROCEDURES_CALLNORETURN_CALL = '';
/// tooltip - This block causes the body (blocks inside) of the named function definition to be run.
Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP = 'Run the user-defined function "%1".';

/// url - Information about calling [https://en.wikipedia.org/wiki/Procedure_(computer_science) functions] that return values.
Blockly.Msg.PROCEDURES_CALLRETURN_HELPURL = 'https://en.wikipedia.org/wiki/Procedure_%28computer_science%29';
Blockly.Msg.PROCEDURES_CALLRETURN_CALL = Blockly.Msg.PROCEDURES_CALLNORETURN_CALL;
/// tooltip - This block causes the body (blocks inside) of the named function definition to be run.\n\nParameters:\n* %1 - the name of the function.
Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP = 'Run the user-defined function "%1" and use its output.';

/// block text - This text appears on a block in a window that appears when the user clicks
/// on the plus sign or star on a function definition block.  It refers to the set of parameters
/// (referred to by the simpler term "inputs") to the function.  See
/// [[Translating:Blockly#function_definitions]].
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE = 'inputs';
/// tooltip
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP = 'Add, remove, or reorder inputs to this function.';
/// block text - This text appears on a block in a window that appears when the user clicks
/// on the plus sign or star on a function definition block].  It appears on the block for
/// adding an individual parameter (referred to by the simpler term "inputs") to the function.
/// See [[Translating:Blockly#function_definitions]].
Blockly.Msg.PROCEDURES_MUTATORARG_TITLE = 'input name:';
/// tooltip
Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP = 'Add an input to the function.';

/// context menu - This appears on the context menu for function calls.  Selecting
/// it causes the corresponding function definition to be highlighted (as shown at
/// [[Translating:Blockly#context_menus]].
Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF = 'Highlight function definition';
/// context menu - This appears on the context menu for function definitions.
/// Selecting it creates a block to call the function.\n\nParameters:\n* %1 - the name of the function.\n{{Identical|Create}}
Blockly.Msg.PROCEDURES_CREATE_DO = 'Create "%1"';

/// tooltip - If the first value is true, this causes the second value to be returned
/// immediately from the enclosing function.
Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP = 'If a value is true, then return a second value.';
/// warning - This appears if the user tries to use this block outside of a function definition.
Blockly.Msg.PROCEDURES_IFRETURN_WARNING = 'Warning: This block may be used only within a function definition.';

/// warning - This appears when a block is being removed from use and can be replaced with another block
Blockly.Msg.KF_BLOCK_DEPRECATED = 'Warning: This block is being discontinued';

/// The display name of the boolean type
Blockly.Msg.KF_TYPE_BOOLEAN = 'True/False';
/// The display name of the boolean type
Blockly.Msg.KF_TYPE_NUMBER = 'Number';
/// The display name of the boolean type
Blockly.Msg.KF_TYPE_STRING = 'Text';
/// The display name of the boolean type
Blockly.Msg.KF_TYPE_INSTANCE = 'Instance';

/// Label text for the kiwifroot create event
Blockly.Msg.KF_EVENT_CREATE_MESSAGE = 'When created';
/// tooltip - The event dispatched when the game object this script is attached to is created
Blockly.Msg.KF_EVENT_CREATE_TOOLTIP = 'The event triggered when this game object is created';
/// url - Information on the kiwifroot create event
Blockly.Msg.KF_EVENT_CREATE_HELPURL = '';
/// Label text for the kiwifroot constantly event
Blockly.Msg.KF_EVENT_CONSTANTLY_MESSAGE = 'Constantly';
/// tooltip - The event triggered every frame
Blockly.Msg.KF_EVENT_CONSTANTLY_TOOLTIP = 'The event triggered every frame';
/// url - Information on the kiwifroot constantly event
Blockly.Msg.KF_EVENT_CONSTANTLY_HELPURL = '';
/// Label text for the kiwifroot stage pressed event
Blockly.Msg.KF_EVENT_STAGE_PRESS_MESSAGE = 'When stage is pressed';
/// tooltip - The event dispatched when the player clicks/touches the game stage
Blockly.Msg.KF_EVENT_STAGE_PRESS_TOOLTIP = 'The event triggered when the player presses a click/touch down anywhere in the game scene.';
/// url - Information on the kiwifroot stage press event
Blockly.Msg.KF_EVENT_STAGE_PRESS_HELPURL = '';
/// Label - text for the kiwifroot stage released event
Blockly.Msg.KF_EVENT_STAGE_RELEASE_MESSAGE = 'When stage is released';
/// tooltip - The event dispatched when the player releases a click/touch of the game stage
Blockly.Msg.KF_EVENT_STAGE_RELEASE_TOOLTIP = 'The event triggered when the player releases a click/touch anywhere in the game scene.';
/// url - Information on the kiwifroot stage release event
Blockly.Msg.KF_EVENT_STAGE_RELEASE_HELPURL = '';

/// helpurl -
Blockly.Msg.KF_EVENT_PRE_CONSTANTLY_HELPURL = '';
/// message -
Blockly.Msg.KF_EVENT_PRE_CONSTANTLY_MESSAGE = 'Pre Constantly';
/// tooltip -
Blockly.Msg.KF_EVENT_PRE_CONSTANTLY_TOOLTIP = 'Triggered every frame BEFORE the constantly event blocks.';

/// helpurl -
Blockly.Msg.KF_EVENT_POST_CONSTANTLY_HELPURL = '';
/// message -
Blockly.Msg.KF_EVENT_POST_CONSTANTLY_MESSAGE = 'Post Constantly';
/// tooltip -
Blockly.Msg.KF_EVENT_POST_CONSTANTLY_TOOLTIP = 'Triggered every frame AFTER the constantly event blocks.';


/// url -
Blockly.Msg.KF_EVENT_STAGE_INPUT_HELPURL = '';
/// Label -
Blockly.Msg.KF_EVENT_STAGE_INPUT_MESSAGE = 'When the stage is';
/// tooltip -
Blockly.Msg.KF_EVENT_STAGE_INPUT_TOOLTIP = 'The event is trggered when the player either pressed or releases anywhere in the game scene.';

/// Label text for the kiwifroot instance pressed event.
Blockly.Msg.KF_EVENT_INST_PRESS_MESSAGE = 'When the player presses on ';
/// tooltip - The event triggered when the player presses a click/touch on the given instance.
Blockly.Msg.KF_EVENT_INST_PRESS_TOOLTIP = 'The event triggered when the player presses a click/touch on the given instance.';
/// url - Information on the kiwifroot instance pressed event.
Blockly.Msg.KF_EVENT_INST_PRESS_HELPURL = '';
/// Label text for the kiwifroot instance pressed event.
Blockly.Msg.KF_EVENT_INST_RELEASE_MESSAGE = 'When the player releases over ';
//// tooltip - The event triggered when the player presses a click/touch on the given instance.
Blockly.Msg.KF_EVENT_INST_RELEASE_TOOLTIP = 'The event triggered when the player releases a click/touch on the given instance.';
/// url - Information on the kiwifroot instance pressed event.
Blockly.Msg.KF_EVENT_INST_RELEASE_HELPURL = '';

/// url -
Blockly.Msg.KF_EVENT_INST_INPUT_HELPURL = '';
/// Label -
Blockly.Msg.KF_EVENT_INST_INPUT_MESSAGE = 'When the player ';
/// tooltip -
Blockly.Msg.KF_EVENT_INST_INPUT_TOOLTIP = 'The event is triggered when the player releases/presses (click/touch) a given instance';

/// Label - text for the kiwifroot key pressed event
Blockly.Msg.KF_EVENT_KEY_PRESS_MESSAGE = 'When the player presses';
/// tooltip - The event triggered when the player presses the given key on their keyboard.
Blockly.Msg.KF_EVENT_KEY_PRESS_TOOLTIP = 'The event triggered when the player presses the given key on their keyboard.';
/// url - Information on the kiwifroot key press event
Blockly.Msg.KF_EVENT_KEY_PRESS_HELPURL = '';
/// Label text for the kiwifroot key released event
Blockly.Msg.KF_EVENT_KEY_RELEASE_MESSAGE = 'When the player releases';
/// tooltip - The event triggered when the player releases the given key on their keyboard.
Blockly.Msg.KF_EVENT_KEY_RELEASE_TOOLTIP = 'The event triggered when the player releases the given key on their keyboard.';
/// url - Information on the kiwifroot key release event
Blockly.Msg.KF_EVENT_KEY_RELEASE_HELPURL = '';

/// url -
Blockly.Msg.KF_EVENT_KEY_INPUT_HELPURL = '';
/// Label -
Blockly.Msg.KF_EVENT_KEY_INPUT_MESSAGE = 'When';
/// tooltip -
Blockly.Msg.KF_EVENT_KEY_INPUT_TOOLTIP = 'The event is triggered when the player presses/releases the given key on their keyboard.';

/// url -
Blockly.Msg.KF_EVENT_TIME_HELPURL = '';

/// Label -
Blockly.Msg.KF_EVENT_TIME_MESSAGE_BEFORE = 'Every' ;
/// Label -
Blockly.Msg.KF_EVENT_TIME_MESSAGE_AFTER = 'milliseconds';
/// tooltip -
Blockly.Msg.KF_EVENT_TIME_TOOLTIP = 'Triggers the event when the number of milliseconds set has passed. The number of milliseconds passed is not dynamic, meaning that it will not update once set.';
/// url -
Blockly.Msg.KF_EVENT_TIME_SINGLE_HELPURL = '';
/// Label -
Blockly.Msg.KF_EVENT_TIME_SINGLE_MESSAGE_BEFORE = 'After' ;
/// Label -
Blockly.Msg.KF_EVENT_TIME_SINGLE_MESSAGE_AFTER = 'milliseconds have passed';
/// tooltip -
Blockly.Msg.KF_EVENT_TIME_SINGLE_TOOLTIP = 'Triggers the inner blocks after the set period of time has occured. Warning: Does not check to see if the object was destroyed before the event fires.';
/// url -
Blockly.Msg.KF_EVENT_ANIMATION_HELPURL = '';
/// Label -
Blockly.Msg.KF_EVENT_ANIMATION_MESSAGE_BEFORE = 'When the animation';
/// Label -
Blockly.Msg.KF_EVENT_ANIMATION_MESSAGE_AFTER = 'has';
/// tooltip -
Blockly.Msg.KF_EVENT_ANIMATION_TOOLTIP = 'Fires events when a selected event occurs on the animation passed.';
/// url -
Blockly.Msg.KF_EVENT_TOUCH_ON_HELPURL = '';
/// Label -
Blockly.Msg.KF_EVENT_TOUCH_ON_MESSAGE = 'When I am touched by';
/// tooltip -
Blockly.Msg.KF_EVENT_TOUCH_ON_TOOLTIP = 'Triggers the inner blocks when this instance collides with the instance passed.';
/// helpurl -
Blockly.Msg.KF_EVENT_STAGE_TOUCHED_HELPURL = '';
/// message -
Blockly.Msg.KF_EVENT_STAGE_TOUCHED_MESSAGE = 'When the stage is';
/// tooltip -
Blockly.Msg.KF_EVENT_STAGE_TOUCHED_TOOLTIP = 'Executes when the stage is touched.';

/// helpurl -
Blockly.Msg.KF_EVENT_TOUCH_RETURN_HELPURL = '';
/// message -
Blockly.Msg.KF_EVENT_TOUCH_RETURN_MESSAGE = 'When I am touched get';
/// tooltip -
Blockly.Msg.KF_EVENT_TOUCH_RETURN_TOOLTIP = 'Whenever this instance is touched by another instance (using arcadephysics) it will set a variable to that instance who touched it.';

/// url -
Blockly.Msg.KF_EVENT_REMOVE_HELPURL = '';
/// tooltip -
Blockly.Msg.KF_EVENT_REMOVE_TOOLTIP = 'The event is triggered when this gameobject is destroyed.';
/// Label -
Blockly.Msg.KF_EVENT_REMOVE_MESSAGE = 'When removed';
/// url -
Blockly.Msg.KF_EVENT_MESSAGE_HELPURL = '';
/// Label -
Blockly.Msg.KF_EVENT_MESSAGE_MESSAGE_BEFORE = 'When I receive';
/// tooltip -
Blockly.Msg.KF_EVENT_MESSAGE_TOOLTIP = 'Run the enclosed code when the specified message is received. Useful for passing commands between game objects.';
/// helpurl -
Blockly.Msg.KF_EVENT_MESSAGE_VALUE_HELPURL = '';
/// message one -
Blockly.Msg.KF_EVENT_MESSAGE_VALUE_MESSAGE_ONE = 'When I receive';
/// message two -
Blockly.Msg.KF_EVENT_MESSAGE_VALUE_MESSAGE_TWO = 'with a';
/// tooltip -
Blockly.Msg.KF_EVENT_MESSAGE_VALUE_TOOLTIP = 'Run the enclosed code when the specified message is received. If a value was passed along with the message, it is stored in a variable. Useful for passing commands and data between game objects.';

/// helpurl -
Blockly.Msg.KF_EVENT_LEVEL_START_HELPURL = '';
/// message -
Blockly.Msg.KF_EVENT_LEVEL_START_MESSAGE = 'When the level';
/// tooltip -
Blockly.Msg.KF_EVENT_LEVEL_START_TOOLTIP = 'Executes when the current level starts. Only executes when a level starts up.';

/// url -
Blockly.Msg.KF_EVENT_INSTANCE_PROPERTIES_SET_HELPURL = '';
/// tooltip -
Blockly.Msg.KF_EVENT_INSTANCE_PROPERTIES_SET_TOOLTIP = '';
/// message -
Blockly.Msg.KF_EVENT_INSTANCE_PROPERTIES_SET_MESSAGE_ONE = 'When key';
/// message -
Blockly.Msg.KF_EVENT_INSTANCE_PROPERTIES_SET_MESSAGE_TWO = 'updates';


/// tooltip - A list of special levels, they include previous/current/next and the first/last levels
Blockly.Msg.KF_GAME_LEVEL_SPECIAL_TOOLTIP = 'A list of special levels, they include previous/current/next and the first/last levels.';
/// url - Information on the special level block
Blockly.Msg.KF_GAME_LEVEL_SPECIAL_HELPURL = '';
/// Label - for the 'go to level numbered' block
Blockly.Msg.KF_GAME_GOTO_LEVEL_NUM_MESSAGE = 'go to';
/// tooltip - Changes the current level to the level specified
Blockly.Msg.KF_GAME_GOTO_LEVEL_NUM_TOOLTIP = 'Changes the current level to the level specified.';
/// url - Information on the goto level block
Blockly.Msg.KF_GAME_GOTO_LEVEL_NUM_HELPURL = '';
/// tooltip - Sets the size of the games viewport on the screen
Blockly.Msg.KF_GAME_STAGE_SET_SIZE_TOOLTIP = 'Sets the size of the games viewport on the screen.';
/// url - Information on the set position block
Blockly.Msg.KF_GAME_STAGE_SET_SIZE_HELPURL = '';
/// tooltip - Sets the size of the games viewport on the screen
Blockly.Msg.KF_GAME_STAGE_GET_SIZE_TOOLTIP = 'Gets the size of the games viewport on the screen.';
/// url - Information on the set position block
Blockly.Msg.KF_GAME_STAGE_GET_SIZE_HELPURL = '';

/// message -
Blockly.Msg.KF_GAME_STAGE_SET_COLOUR_MESSAGE = 'set background colour to';
/// tooltip -
Blockly.Msg.KF_GAME_STAGE_SET_COLOUR_TOOLTIP = 'Sets the colour of the game background.';
/// helpurl -
Blockly.Msg.KF_GAME_STAGE_SET_COLOUR_HELPURL = '';

/// message -
Blockly.Msg.KF_GAME_STAGE_GET_COLOUR_MESSAGE = 'background colour';
/// tooltip -
Blockly.Msg.KF_GAME_STAGE_GET_COLOUR_TOOLTIP = 'Gets the colour of the game background.';
/// helpurl -
Blockly.Msg.KF_GAME_STAGE_GET_COLOUR_HELPURL = '';

/// url -
Blockly.Msg.KF_GAME_GET_TIME_HELPURL = '';
/// Label -
Blockly.Msg.KF_GAME_GET_TIME_MESSAGE = 'time';
/// tooltip -
Blockly.Msg.KF_GAME_GET_TIME_TOOLTIP = 'Returns the associate time method associated.';
/// url -
Blockly.Msg.KF_GAME_TIME_METHOD_HELPURL = '';
/// Label -
Blockly.Msg.KF_GAME_TIME_METHOD_MESSAGE = 'time';
/// tooltip -
Blockly.Msg.KF_GAME_TIME_METHOD_TOOLTIP = 'Pauses or resumes the clock, thus pausing/resume gameplay.';

/// Label for the kiwifroot self block
Blockly.Msg.KF_INSTANCE_SELF_MESSAGE = 'myself';
/// tooltip - This block returns the game object that the script is attached to
Blockly.Msg.KF_INSTANCE_SELF_TOOLTIP = 'The game object that this script is attached to.';
/// url - Information on the self block
Blockly.Msg.KF_INSTANCE_SELF_HELPURL = '';
/// Label -
Blockly.Msg.KF_INSTANCE_SELECT_MESSAGE = 'instance ';
/// url -
Blockly.Msg.KF_INSTANCE_SELECT_HELPURL = '';
/// tooltip -
Blockly.Msg.KF_INSTANCE_SELECT_TOOLTIP = 'Selects a game object with the corresponding id.';
/// tooltip - Sets the selected property of a given instance to a new value
Blockly.Msg.KF_INSTANCE_SET_TOOLTIP = 'Sets the selected property of a given instance to a new value.';
/// url - Information on the self block
Blockly.Msg.KF_INSTANCE_SET_HELPURL = '';
/// tooltip - This block returns the game object that the script is attached to
Blockly.Msg.KF_INSTANCE_GET_TOOLTIP = 'Gets the value of a selected property of the given instance.';
/// url - Information on the self block
Blockly.Msg.KF_INSTANCE_GET_HELPURL = '';
/// url -
Blockly.Msg.KF_INSTANCE_GET_DIMENSIONS_HELPURL = '';
/// tooltip -
Blockly.Msg.KF_INSTANCE_GET_DIMENSIONS_TOOLTIP = 'Width or height of this object. Actual height includes current scale. Raw height is simply image size.';
/// tooltip -
Blockly.Msg.KF_INSTANCE_GET_LOCATION_FROM_POSITION_TOOLTIP = 'Gets the location of the given instance.';
/// url -
Blockly.Msg.KF_INSTANCE_GET_LOCATION_FROM_POSITION_HELPURL = '';
/// url -
Blockly.Msg.KF_INSTANCE_GET_VISIBLE_HELPURL = '';
/// Label -
Blockly.Msg.KF_INSTANCE_GET_VISIBLE_MESSAGE = 'get visibility of';
/// tooltip -
Blockly.Msg.KF_INSTANCE_GET_VISIBLE_TOOLTIP = 'Returns visibility state of this gameobject. An alpha of zero is does not mean that the visiblity is false.';
/// url -
Blockly.Msg.KF_INSTANCE_SET_POSITION_FROM_LOCATION_HELPURL = '';
/// tooltip -
Blockly.Msg.KF_INSTANCE_SET_POSITION_FROM_LOCATION_TOOLTIP = 'Sets the object X and Y to a given location.';
/// url -
Blockly.Msg.KF_INSTANCE_SET_VISIBLE_HELPURL = '';
/// Label -
Blockly.Msg.KF_INSTANCE_SET_VISIBLE_MESSAGE_BEFORE = 'set visibility of';
/// Label -
Blockly.Msg.KF_INSTANCE_SET_VISIBLE_MESSAGE_AFTER = 'to';
/// tooltip -
Blockly.Msg.KF_INSTANCE_SET_VISIBLE_TOOLTIP = 'Sets whether the gameobject should be renderer or not. An alpha of zero is does not mean that the visiblity is false.';
/// url -
Blockly.Msg.KF_INSTANCE_DEATH_HELPURL = '';
/// Label -
Blockly.Msg.KF_INSTANCE_DEATH_MESSAGE = 'destroy';
/// tooltip -
Blockly.Msg.KF_INSTANCE_DEATH_TOOLTIP = 'Destroys the selected instance. Destruction cannot be reverted!';
/// Label -
Blockly.Msg.KF_INSTANCE_ADD_TAG_MESSAGE_BEFORE = 'tag';
/// Label -
Blockly.Msg.KF_INSTANCE_ADD_TAG_MESSAGE_AFTER = 'on';
/// url -
Blockly.Msg.KF_INSTANCE_ADD_TAG_HELPURL = '';
/// tooltip -
Blockly.Msg.KF_INSTANCE_ADD_TAG_TOOLTIP = 'Adds a tag passed to the given gameobject.';
/// url -
Blockly.Msg.KF_INSTANCE_HAS_TAG_HELPURL = '';
/// Label -
Blockly.Msg.KF_INSTANCE_HAS_TAG_MESSAGE = 'has tag';
/// tooltip -
Blockly.Msg.KF_INSTANCE_HAS_TAG_TOOLTIP = 'Returns a boolean indicating if the gameobject has the tag or not.';
/// url -
Blockly.Msg.KF_INSTANCE_GET_BY_TAG_HELPURL = '';
/// Label -
Blockly.Msg.KF_INSTANCE_GET_BY_TAG_MESSAGE = 'instance by tag';
/// tooltip -
Blockly.Msg.KF_INSTANCE_GET_BY_TAG_TOOLTIP = 'Returns a single instance by the tag passed.';
/// url -
Blockly.Msg.KF_INSTANCE_GET_ALL_BY_TAG_HELPURL = '';
/// Label -
Blockly.Msg.KF_INSTANCE_GET_ALL_BY_TAG_MESSAGE = 'get all children by tag';
/// tooltip -
Blockly.Msg.KF_INSTANCE_GET_ALL_BY_TAG_TOOLTIP = 'Returns a list of all the instances that have the tag passed.';
/// message -
Blockly.Msg.KF_INSTANCE_EXECUTE_MESSAGE = 'Execute';
/// tooltip -
Blockly.Msg.KF_INSTANCE_EXECUTE_TOOLTIP = 'Executes the text directly pasted as code.';
/// helpurl
Blockly.Msg.KF_INSTANCE_EXECUTE_HELPURL = '';

/// tooltip -
Blockly.Msg.KF_INSTANCE_PROPERTIES_SET_TOOLTIP = '';
/// url -
Blockly.Msg.KF_INSTANCE_PROPERTIES_SET_HELPURL = '';
/// message -
Blockly.Msg.KF_INSTANCE_PROPERTIES_SET_MESSAGE_ONE = 'set key';
/// message -
Blockly.Msg.KF_INSTANCE_PROPERTIES_SET_MESSAGE_TWO = 'to';
/// message -
Blockly.Msg.KF_INSTANCE_PROPERTIES_SET_MESSAGE_THREE = 'on';

/// url -
Blockly.Msg.KF_INSTANCE_PROPERTIES_GET_HELPURL = '';
/// tooltip -
Blockly.Msg.KF_INSTANCE_PROPERTIES_GET_TOOLTIP = '';
/// message -
Blockly.Msg.KF_INSTANCE_PROPERTIES_GET_MESSAGE_ONE = 'get key';
/// message -
Blockly.Msg.KF_INSTANCE_PROPERTIES_GET_MESSAGE_TWO = 'on';

/// url -
Blockly.Msg.KF_INTERSECTS_OVERLAPS_HELPURL = '';
/// Label -
Blockly.Msg.KF_INTERSECTS_OVERLAPS_MESSAGE = 'overlaps';
/// tooltip -
Blockly.Msg.KF_INTERSECTS_OVERLAPS_TOOLTIP = 'Checks to see if the two passed instances overlap.';
/// url -
Blockly.Msg.KF_INTERSECTS_CONTAINS_HELPURL = '';
/// Label -
Blockly.Msg.KF_INTERSECTS_CONTAINS_MESSAGE = 'contains';
/// tooltip -
Blockly.Msg.KF_INTERSECTS_CONTAINS_TOOLTIP = 'Checks to see if an x/y location is within an instance\'s hitbox.';

/// Label for the keyboard key block
Blockly.Msg.KF_KEY_SPECIAL_MESSAGE = 'key:';
/// tooltip
Blockly.Msg.KF_KEY_SPECIAL_TOOLTIP = 'A keyboard key. These are not letters, but actual keys. For example, + and = are the same key. Not all keyboards may have all keys.';
/// url - information on the special key block
Blockly.Msg.KF_KEY_SPECIAL_HELPURL = '';

// Key input sensing
/// message -
Blockly.Msg.KF_INPUT_KEY_DOWN_MESSAGE1 = 'key';
/// message -
Blockly.Msg.KF_INPUT_KEY_DOWN_MESSAGE2 = 'pressed?';
/// tooltip -
Blockly.Msg.KF_INPUT_KEY_DOWN_TOOLTIP = 'Is the specified key down?';
/// helpurl -
Blockly.Msg.KF_INPUT_KEY_DOWN_HELPURL = '';

/// Label for the mouse position block
Blockly.Msg.KF_INPUT_MOUSE_MESSAGE = 'of mouse';
/// tooltip - The position of the mouse in the level
Blockly.Msg.KF_INPUT_MOUSE_TOOLTIP = 'The position of the mouse in the current level';
/// url - Information on the mouse position block
Blockly.Msg.KF_INPUT_MOUSE_HELPURL = '';
/// helpurl -
Blockly.Msg.KF_INPUT_FINGERS_HELPURL = '';
/// message -
Blockly.Msg.KF_INPUT_FINGERS_MESSAGE = 'all fingers';
/// tooltip -
Blockly.Msg.KF_INPUT_FINGERS_TOOLTIP = 'Returns a list of all the finger objects.';
/// helpurl -
Blockly.Msg.KF_INPUT_FINGER_SELECT_HELPURL = '';
/// message -
Blockly.Msg.KF_INPUT_FINGER_SELECT_MESSAGE = 'finger';
/// tooltip -
Blockly.Msg.KF_INPUT_FINGER_SELECT_TOOLTIP = 'Returns the finger associated with the number passed.';
/// helpurl -
Blockly.Msg.KF_INPUT_FINGER_GET_COORDS_HELPURL = '';
/// message -
Blockly.Msg.KF_INPUT_FINGER_GET_COORDS_MESSAGE = 'of';
/// tooltip
Blockly.Msg.KF_INPUT_FINGER_GET_COORDS_TOOLTIP = '';
/// helpurl -
Blockly.Msg.KF_INPUT_FINGER_GET_BOOL_HELPURL = '';
/// message -
Blockly.Msg.KF_INPUT_FINGER_GET_BOOL_MESSAGE = 'is';
/// tooltip -
Blockly.Msg.KF_INPUT_FINGER_GET_BOOL_TOOLTIP = 'Returns a boolean associated with the selected statement.';
/// helpurl -
Blockly.Msg.KF_INPUT_FINGER_GET_TIMES_HELPURL = '';
/// message -
Blockly.Msg.KF_INPUT_FINGER_GET_TIMES_MESSAGE = 'of';
/// tooltip -
Blockly.Msg.KF_INPUT_FINGER_GET_TIMES_TOOLTIP = 'A number associated with the time selected.';
/// helpurl -
Blockly.Msg.KF_INPUT_FINGER_LATEST_HELPURL = '';
/// message -
Blockly.Msg.KF_INPUT_FINGER_LATEST_MESSAGE = 'latest finger';
/// tooltip -
Blockly.Msg.KF_INPUT_FINGER_LATEST_TOOLTIP = 'The finger which was used in the last event.';

/// tooltip - A list of all the sounds included in the game
Blockly.Msg.KF_SOUND_TOOLTIP = 'A list of all the sounds included in the game.';
/// url - Information on the sound block
Blockly.Msg.KF_SOUND_HELPURL = '';
/// Label for the 'play music' block
Blockly.Msg.KF_SOUND_PLAY_BACKGROUND_MESSAGE = 'play music';
/// tooltip - Starts playing the specified music from the beginning
Blockly.Msg.KF_SOUND_PLAY_BACKGROUND_TOOLTIP = 'Starts playing the specified music from the beginning.';
/// url - Information on the play background music block
Blockly.Msg.KF_SOUND_PLAY_BACKGROUND_HELPURL = '';
/// Label for the 'stop music' block
Blockly.Msg.KF_SOUND_STOP_BACKGROUND_MESSAGE = 'stop the current music';
/// tooltip - Stops playing the current music and clears the playhead. If resumed it will start from the beginning.
Blockly.Msg.KF_SOUND_STOP_BACKGROUND_TOOLTIP = 'Stops playing the current music and clears the playhead. If resumed it will start from the beginning.';
/// url - Information on the stop background music block
Blockly.Msg.KF_SOUND_STOP_BACKGROUND_HELPURL = '';
/// Label for the 'stop music' block
Blockly.Msg.KF_SOUND_PLAY_EFFECT_MESSAGE = 'play sound effect';
/// tooltip - Plays the given sound effect once.
Blockly.Msg.KF_SOUND_PLAY_EFFECT_TOOLTIP = 'Plays the given sound effect once.';
/// url - Information on the play sound effect block
Blockly.Msg.KF_SOUND_PLAY_EFFECT_HELPURL = '';
/// url -
Blockly.Msg.KF_SOUND_BACKGROUND_STATE_HELPURL = '';
/// Label -
Blockly.Msg.KF_SOUND_BACKGROUND_STATE_MESSAGE = 'music';
/// tooltip -
Blockly.Msg.KF_SOUND_BACKGROUND_STATE_TOOLTIP = 'Pauses or resumes the current background track.';
/// url -
Blockly.Msg.KF_SOUND_SET_MUTE_HELPURL = '';
/// Label -
Blockly.Msg.KF_SOUND_SET_MUTE_MESSAGE = 'mute';
/// tooltip -
Blockly.Msg.KF_SOUND_SET_MUTE_TOOLTIP = 'Sets the mute state of the selected piece of audio by a boolean passed.';
/// url -
Blockly.Msg.KF_SOUND_GET_MUTE_HELPURL = '';
/// Label -
Blockly.Msg.KF_SOUND_GET_MUTE_MESSAGE = 'mute';
/// tooltip -
Blockly.Msg.KF_SOUND_GET_MUTE_TOOLTIP = 'Sets the mute state of the selected piece of audio by a boolean passed.';
/// url -
Blockly.Msg.KF_SOUND_GET_VOLUME_HELPURL = '';
/// Label -
Blockly.Msg.KF_SOUND_GET_VOLUME_MESSAGE = 'get volume';
/// tooltip -
Blockly.Msg.KF_SOUND_GET_VOLUME_TOOLTIP = 'Gets the volume of all sounds played. A number from 0 - 100.';
/// url -
Blockly.Msg.KF_SOUND_SET_VOLUME_HELPURL = '';
/// Label -
Blockly.Msg.KF_SOUND_SET_VOLUME_MESSAGE = 'set volume';
/// tooltip -
Blockly.Msg.KF_SOUND_SET_VOLUME_TOOLTIP = 'Sets the volume of all sounds played. A number from 0 - 100.';
/// url -
Blockly.Msg.KF_SOUND_GET_EDITOR_HELPURL = '';
/// Label -
Blockly.Msg.KF_SOUND_GET_EDITOR_MESSAGE = 'audio';
/// tooltip -
Blockly.Msg.KF_SOUND_GET_EDITOR_TOOLTIP = 'Gets audio from the Editor';
/// message -
Blockly.Msg.KF_ANIMATION_PLAY_MESSAGE = 'play animation';
/// url -
Blockly.Msg.KF_ANIMATION_PLAY_HELPURL = '';
/// tooltip -
Blockly.Msg.KF_ANIMATION_PLAY_TOOLTIP = 'Starts playing an animation on this gameobject.';
/// message -
Blockly.Msg.KF_ANIMATION_STATE_MESSAGE = 'current animation';
/// url -
Blockly.Msg.KF_ANIMATION_STATE_HELPURL = '';
/// tooltip -
Blockly.Msg.KF_ANIMATION_STATE_TOOLTIP = ' The state of the current animation.';
/// message before -
Blockly.Msg.KF_ANIMATION_FRAME_MESSAGE_BEFORE = 'goto';
/// message after -
Blockly.Msg.KF_ANIMATION_FRAME_MESSAGE_AFTER = 'animation frame';
/// url -
Blockly.Msg.KF_ANIMATION_FRAME_HELPURL = '';
/// tooltip -
Blockly.Msg.KF_ANIMATION_FRAME_TOOLTIP = 'Goes to the selected frame in the current animation. If at the end of an animation it will go to the first frame, or the start if at the end.';

/// message -
Blockly.Msg.KF_ANIMATION_CURRENT_MESSAGE = 'current animation';
/// url -
Blockly.Msg.KF_ANIMATION_CURRENT_HELPURL = '';
/// tooltip -
Blockly.Msg.KF_ANIMATION_CURRENT_TOOLTIP = 'Returns the current animation that is playing on this game object.';

/// message -
Blockly.Msg.KF_ANIMATION_NUMBERS_MESSAGE = 'current animation';
/// url -
Blockly.Msg.KF_ANIMATION_NUMBERS_HELPURL = '';
/// tooltip -
Blockly.Msg.KF_ANIMATION_NUMBERS_TOOLTIP = 'Returns a number related to the selected field..';

/// message -
Blockly.Msg.KF_ANIMATION_BOOLEAN_MESSAGE = 'current animation';
/// url -
Blockly.Msg.KF_ANIMATION_BOOLEAN_HELPURL = '';
/// tooltip -
Blockly.Msg.KF_ANIMATION_BOOLEAN_TOOLTIP = 'Returns true if the statement is true. False if the statement isn\'t.';


/// message -
Blockly.Msg.KF_CAMERA_PAN_TO_MESSAGE = 'camera to';
/// url -
Blockly.Msg.KF_CAMERA_PAN_TO_HELPURL = '';
/// tooltip -
Blockly.Msg.KF_CAMERA_PAN_TO_TOOLTIP = 'Returns true if the statement is true. False if the statement isn\'t.';

/// message -
Blockly.Msg.KF_CAMERA_SET_MESSAGE_BEFORE = 'set camera';
/// message -
Blockly.Msg.KF_CAMERA_SET_MESSAGE_AFTER = 'to';
/// url -
Blockly.Msg.KF_CAMERA_SET_HELPURL = '';
/// tooltip -
Blockly.Msg.KF_CAMERA_SET_TOOLTIP = 'Sets a selected property on the camera to the value passed.';

/// message -
Blockly.Msg.KF_CAMERA_GET_MESSAGE = 'camera';
/// url -
Blockly.Msg.KF_CAMERA_GET_HELPURL = '';
/// tooltip -
Blockly.Msg.KF_CAMERA_GET_TOOLTIP = 'Returns a selected property on the camera.';

/// url -
Blockly.Msg.KF_CAMERA_GET_READ_ONLY_HELPURL = '';
/// message -
Blockly.Msg.KF_CAMERA_GET_READ_ONLY_MESSAGE = 'camera';
/// tooltip -
Blockly.Msg.KF_CAMERA_GET_READ_ONLY_TOOLTIP = 'Returns a selected read only property on the camera.';

/// message -
Blockly.Msg.KF_CAMERA_LOCK_ON_MESSAGE = 'lock camera on';
/// url -
Blockly.Msg.KF_CAMERA_LOCK_ON_HELPURL = '';
/// tooltip -
Blockly.Msg.KF_CAMERA_LOCK_ON_TOOLTIP = 'Locks the camera to an Instance passed.';

/// message -
Blockly.Msg.KF_CAMERA_UNLOCK_MESSAGE = 'unlock camera';
/// url -
Blockly.Msg.KF_CAMERA_UNLOCK_HELPURL = '';
/// tooltip -
Blockly.Msg.KF_CAMERA_UNLOCK_TOOLTIP = 'Unlocks the camera.';


/// message -
Blockly.Msg.KF_CAMERA_STATE_MESSAGE = 'is camera';
/// url -
Blockly.Msg.KF_CAMERA_STATE_HELPURL = '';
/// tooltip -
Blockly.Msg.KF_CAMERA_STATE_TOOLTIP = 'Returns true if the statement is correct.';

/// url -
Blockly.Msg.KF_CAMERA_SCALE_HELPURL = '';
/// message -
Blockly.Msg.KF_CAMERA_SCALE_MESSAGE = 'camera scale';
/// tooltip -
Blockly.Msg.KF_CAMERA_SCALE_TOOLTIP = 'Sets the camera scale on the selected axis to a value passed.';
/// url -
Blockly.Msg.KF_CAMERA_SCALE_GET_HELPURL = '';
/// message -
Blockly.Msg.KF_CAMERA_SCALE_GET_MESSAGE = 'camera scale';
/// tooltip -
Blockly.Msg.KF_CAMERA_SCALE_GET_TOOLTIP = 'Returns the values for the cameras scale on the selected axis.';

/// url -
Blockly.Msg.KF_CAMERA_SET_SPEED_HELPURL = '';
/// message -
Blockly.Msg.KF_CAMERA_SET_SPEED_MESSAGE = 'set camera pan speed';
/// tooltip -
Blockly.Msg.KF_CAMERA_SET_SPEED_TOOLTIP = 'Sets the cameras pan speed to a value passed.';

/// url -
Blockly.Msg.KF_CAMERA_GET_SPEED_HELPURL = '';
/// message -
Blockly.Msg.KF_CAMERA_GET_SPEED_MESSAGE = 'camera pan speed';
/// tooltip -
Blockly.Msg.KF_CAMERA_GET_SPEED_TOOLTIP = 'Returns the cameras pan speed.';

/// url -
Blockly.Msg.KF_CAMERA_CENTER_ON_INSTANCE_HELPURL = '';
/// message -
Blockly.Msg.KF_CAMERA_CENTER_ON_INSTANCE_MESSAGE = 'center camera on';
/// tooltip -
Blockly.Msg.KF_CAMERA_CENTER_ON_INSTANCE_TOOLTIP = 'Centers the cameras to the instances current position.';

/// url -
Blockly.Msg.KIWI_CAMERA_SHAKE_OFFSET_HELPURL = '';
/// tooltip -
Blockly.Msg.KIWI_CAMERA_SHAKE_OFFSET_TOOLTIP = 'Shake the camera by wobbling its offset values for a duration (in seconds). Who knows what might happen if you edit the offset during the shake?';
/// message -
Blockly.Msg.KIWI_CAMERA_SHAKE_OFFSET_MESSAGE1 = 'camera shake axis';
/// message -
Blockly.Msg.KIWI_CAMERA_SHAKE_OFFSET_MESSAGE_AMP = 'amplitude';
/// message -
Blockly.Msg.KIWI_CAMERA_SHAKE_OFFSET_MESSAGE_FREQ = 'frequency';
/// message -
Blockly.Msg.KIWI_CAMERA_SHAKE_OFFSET_MESSAGE_DUR = 'duration';

/// helpurl -
Blockly.Msg.KF_MATH_LERP_HELPURL = '';
/// tooltip -
Blockly.Msg.KF_MATH_LERP_MESSAGE_TOOLTIP = '';
/// message -
Blockly.Msg.KF_MATH_LERP_MESSAGE_ONE = 'linear interpolation from';
/// message -
Blockly.Msg.KF_MATH_LERP_MESSAGE_TWO = 'to';
/// message -
Blockly.Msg.KF_MATH_LERP_MESSAGE_THREE = 'by';

/// url -
Blockly.Msg.KF_MATH_INSTANCE_HELPURL = '';
/// Label -
Blockly.Msg.KF_MATH_INSTANCE_MESSAGE_BEFORE = 'from';
/// Label -
Blockly.Msg.KF_MATH_INSTANCE_MESSAGE_AFTER = 'to';
/// tooltip -
Blockly.Msg.KF_MATH_INSTANCE_TOOLTIP = 'Returns the selected value between two instances.';

/// url -
Blockly.Msg.KF_MATH_XY_TO_XY_HELPURL = '';
/// message -
Blockly.Msg.KF_MATH_XY_TO_XY_MESSAGE_BEFORE = Blockly.Msg.KF_MATH_INSTANCE_MESSAGE_BEFORE;
/// message
Blockly.Msg.KF_MATH_XY_TO_XY_MESSAGE_AFTER = Blockly.Msg.KF_MATH_INSTANCE_MESSAGE_AFTER;

/// tooltip -
Blockly.Msg.KF_MATH_XY_TO_XY_TOOLTIP = 'Returns the selected value between an instance and a location passed.';
/// url -
Blockly.Msg.KF_MATH_UTILS_HELPURL = '';
/// tooltip -
Blockly.Msg.KF_MATH_UTILS_TOOLTIP = '';

/// message -
Blockly.Msg.KF_WRITE_MSG = 'write';
/// url -
Blockly.Msg.KF_WRITE_URL = '';
/// tooltip -
Blockly.Msg.KF_WRITE_TOOLTIP = 'Used to log a message in the console and to display it on the debug screen.';

/// Label -
Blockly.Msg.KF_CLASSES_INSTANCE_MESSAGE = 'class of';
/// url -
Blockly.Msg.KF_CLASSES_INSTANCE_HELPURL = '';
/// tooltip
Blockly.Msg.KF_CLASSES_INSTANCE_TOOLTIP = 'Returns the class of the selected instance.';

/// url -
Blockly.Msg.KF_CLASSES_SELECTOR_HELPURL = '';
/// tooltip -
Blockly.Msg.KF_CLASSES_SELECTOR_TOOLTIP = 'Returns the class selected.';

/// url -
Blockly.Msg.KF_CLASSES_GET_INSTANCE_HELPURL = '';
/// message -
Blockly.Msg.KF_CLASSES_GET_INSTANCE_MESSAGE = 'instance of';
/// tooltip -
Blockly.Msg.KF_CLASSES_GET_INSTANCE_TOOLTIP = 'Selects the corresponding instance.';

/// url -
Blockly.Msg.KF_CLASSES_GET_ALL_INSTANCES_HELPURL = '';
/// message -
Blockly.Msg.KF_CLASSES_GET_ALL_INSTANCES_MESSAGE = 'get all instances of';
/// tooltip -
Blockly.Msg.KF_CLASSES_GET_ALL_INSTANCES_TOOLTIP = 'Returns a list of all the instances with that class.';

/// url -
Blockly.Msg.KF_CLASSES_CREATE_INSTANCE_HELPURL = '';
/// Label -
Blockly.Msg.KF_CLASSES_CREATE_INSTANCE_MESSAGE_BEFORE = 'create new instance of';
/// Label -
Blockly.Msg.KF_CLASSES_CREATE_INSTANCE_MESSAGE_AFTER = 'at';
/// tooltip -
Blockly.Msg.KF_CLASSES_CREATE_INSTANCE_TOOLTIP = 'Creates a new instance of a class type at the location specified.';

/// url -
Blockly.Msg.KF_CLASSES_CREATE_INSTANCE_WITH_VAR_HELPURL = '';
/// label -
Blockly.Msg.KF_CLASSES_CREATE_INSTANCE_WITH_VAR_MESSAGE_BEFORE = 'create new';
/// label -
Blockly.Msg.KF_CLASSES_CREATE_INSTANCE_WITH_VAR_MESSAGE_AFTER = 'of';
/// tooltip -
Blockly.Msg.KF_CLASSES_CREATE_INSTANCE_WITH_VAR_TOOLTIP = 'Creates a new instance of a class and assigns a variable to the instance.';

/// url -
Blockly.Msg.KF_ARCADEPHYSICS_GET_NUMERIC_HELPURL = '';
/// tooltip -
Blockly.Msg.KF_ARCADEPHYSICS_GET_NUMERIC_TOOLTIP = 'Returns a value for the selected property.';
/// url -
Blockly.Msg.KF_ARCADEPHYSICS_SET_NUMERIC_HELPURL = '';
/// tooltip -
Blockly.Msg.KF_ARCADEPHYSICS_SET_NUMERIC_TOOLTIP = 'Sets a numeric property selected.';
/// message -
Blockly.Msg.KF_ARCADEPHYSICS_SET_NUMERIC_MESSAGE = 'set';
/// url -
Blockly.Msg.KF_ARCADEPHYSICS_SET_BOOLEAN_HELPURL = '';
/// message -
Blockly.Msg.KF_ARCADEPHYSICS_SET_BOOLEAN_MESSAGE = 'set';
/// tooltip -
Blockly.Msg.KF_ARCADEPHYSICS_SET_BOOLEAN_TOOLTIP = 'Sets a boolean property selected.';
/// url -
Blockly.Msg.KF_ARCADEPHYSICS_GET_BOOLEAN_HELPURL = '';
/// tooltip -
Blockly.Msg.KF_ARCADEPHYSICS_GET_BOOLEAN_TOOLTIP = 'Returns the state of a property selected.';
/// message -
Blockly.Msg.KF_ARCADEPHYSICS_GET_ROTATION_FROM_MESSAGE = 'get rotation based on';
/// helpurl -
Blockly.Msg.KF_ARCADEPHYSICS_GET_ROTATION_FROM_HELPURL = '';
/// tooltip -
Blockly.Msg.KF_ARCADEPHYSICS_GET_ROTATION_FROM_TOOLTIP = 'Returns a rotation for the property based on a selected property.';


/// url -
Blockly.Msg.KF_ARCADEPHYSICS_GET_COLLISIONS_HELPURL = '';
/// message -
Blockly.Msg.KF_ARCADEPHYSICS_GET_COLLISIONS_MESSAGE_BEFORE = 'on';
/// message -
Blockly.Msg.KF_ARCADEPHYSICS_GET_COLLISIONS_MESSAGE_AFTER = 'side';
/// tooltip -
Blockly.Msg.KF_ARCADEPHYSICS_GET_COLLISIONS_TOOLTIP = 'Is this gameobject touching on the selected side? "Any" means one or more sides. Collisions must be enabled.';
/// tooltip -
Blockly.Msg.KF_ARCADEPHYSICS_GET_COLLISIONS_WAS_TOOLTIP = 'Was this gameobject touching on the selected side last frame? "Any" means one or more sides. Collisions must be enabled.';
/// tooltip -
Blockly.Msg.KF_ARCADEPHYSICS_GET_COLLISIONS_CAN_TOOLTIP = 'Can this gameobject be touched on the selected side? "Any" means one or more sides. Collisions must be enabled.';

/// url -
Blockly.Msg.KF_ARCADEPHYSICS_SET_COLLISIONS_HELPURL = '';
/// message -
Blockly.Msg.KF_ARCADEPHYSICS_SET_COLLISIONS_MESSAGE_BEFORE = 'set';
/// message -
Blockly.Msg.KF_ARCADEPHYSICS_SET_COLLISIONS_MESSAGE_AFTER = 'side collisions to';
/// tooltip -
Blockly.Msg.KF_ARCADEPHYSICS_SET_COLLISIONS_TOOLTIP = 'Sets the sides of this gameobject that can collide with other gameobjects.';

/// url -
Blockly.Msg.KF_ARCADEPHYSICS_SET_GRAVITY_HELPURL = '';
/// message -
Blockly.Msg.KF_ARCADEPHYSICS_SET_GRAVITY_MESSAGE = 'set gravity';
/// tooltip -
Blockly.Msg.KF_ARCADEPHYSICS_SET_GRAVITY_TOOLTIP = 'Sets the global gravity property to a value passed.';
/// url -
Blockly.Msg.KF_ARCADEPHYSICS_GET_GRAVITY_HELPURL = '';
/// message -
Blockly.Msg.KF_ARCADEPHYSICS_GET_GRAVITY_MESSAGE = 'gravity';
/// tooltip -
Blockly.Msg.KF_ARCADEPHYSICS_GET_GRAVITY_TOOLTIP = 'Returns the selected gravity value.';
/// helpurl -
Blockly.Msg.KF_ARCADEPHYSICS_SET_PHYSICS_ENABLED_HELPURL = '';
/// tooltip -
Blockly.Msg.KF_ARCADEPHYSICS_SET_PHYSICS_ENABLED_TOOLTIP = 'Set the state of this objects arcadephysics component.';
/// message -
Blockly.Msg.KF_ARCADEPHYSICS_SET_PHYSICS_ENABLED_MESSAGE = 'set physics enabled';
/// helpurl -
Blockly.Msg.KF_ARCADEPHYSICS_GET_PHYSICS_ENABLED_HELPURL = '';
///message -
Blockly.Msg.KF_ARCADEPHYSICS_GET_PHYSICS_ENABLED_MESSAGE = 'get physics enabled';
/// tooltip -
Blockly.Msg.KF_ARCADEPHYSICS_GET_PHYSICS_ENABLED_TOOLTIP = 'A boolean indicating if physics are enabled or not.';

/// url -
Blockly.Msg.KF_MESSAGING_INSTANCE_HELPURL = '';
/// message -
Blockly.Msg.KF_MESSAGING_INSTANCE_MESSAGE_BEFORE = 'send';
/// message -
Blockly.Msg.KF_MESSAGING_INSTANCE_MESSAGE_AFTER = 'to';
/// tooltip -
Blockly.Msg.KF_MESSAGING_INSTANCE_TOOLTIP = 'Send a message to another game object.';
/// url -
Blockly.Msg.KF_MESSAGING_CLASS_HELPURL = '';
/// message -
Blockly.Msg.KF_MESSAGING_CLASS_MESSAGE_BEFORE = 'send';
/// message -
Blockly.Msg.KF_MESSAGING_CLASS_MESSAGE_AFTER = 'to all';
/// tooltip -
Blockly.Msg.KF_MESSAGING_CLASS_TOOLTIP = 'Send a message to all instances of a class you pass.';
/// url -
Blockly.Msg.KF_MESSAGING_EVERYONE_HELPURL = '';
/// message -
Blockly.Msg.KF_MESSAGING_EVERYONE_MESSAGE = 'broadcast';
/// tooltip -
Blockly.Msg.KF_MESSAGING_EVERYONE_TOOLTIP = 'Send a message to every gameobject.';
/// url -
Blockly.Msg.KF_MESSAGING_LIST_HELPURL = '';
/// message -
Blockly.Msg.KF_MESSAGING_LIST_MESSAGE_BEFORE = 'send';
/// message -
Blockly.Msg.KF_MESSAGING_LIST_MESSAGE_AFTER = 'to each instance in';
/// tooltip -
Blockly.Msg.KF_MESSAGING_LIST_TOOLTIP = 'Send a message to every instance in a list.';
/// helpurl
Blockly.Msg.KF_MESSAGING_EVERYONE_VALUE_HELPURL = '';
/// message one -
Blockly.Msg.KF_MESSAGING_EVERYONE_VALUE_MESSAGE_ONE = 'broadcast';
/// message two -
Blockly.Msg.KF_MESSAGING_EVERYONE_VALUE_MESSAGE_TWO = 'with';
/// tooltip -
Blockly.Msg.KF_MESSAGING_EVERYONE_VALUE_TOOLTIP = 'Send a message to every gameobject along with a value.';
/// tooltip -
Blockly.Msg.KF_MESSAGING_INSTANCE_VALUE_TOOLTIP = 'Send a message to an instance along with a value.';
/// helpurl -
Blockly.Msg.KF_MESSAGING_INSTANCE_VALUE_HELPURL = '';
/// message one -
Blockly.Msg.KF_MESSAGING_INSTANCE_VALUE_MESSAGE_ONE = 'send';
/// message two -
Blockly.Msg.KF_MESSAGING_INSTANCE_VALUE_MESSAGE_TWO = 'to';
/// message three -
Blockly.Msg.KF_MESSAGING_INSTANCE_VALUE_MESSAGE_THREE = 'with';

/// url -
Blockly.Msg.KF_ARCADEPHYSICS_PROBE_HELPURL = '';
/// message -
Blockly.Msg.KF_ARCADEPHYSICS_PROBE_MESSAGE = 'collidable object exists at';
/// tooltip -
Blockly.Msg.KF_ARCADEPHYSICS_PROBE_TOOLTIP = 'Returns a boolean indiciating if a colliable object exists at the cooridnates passed. ';
/// tooltip -
Blockly.Msg.KF_ARCADEPHYSICS_PROBE_LAYER_TOOLTIP = 'Returns a boolean indiciating if a colliable object (with the collision shape AND layer as passed) exists at the location passed.';
/// message -
Blockly.Msg.KF_ARCADEPHYSICS_PROBE_LAYER_MESSAGE_ONE = 'collidable object of';
/// message -
Blockly.Msg.KF_ARCADEPHYSICS_PROBE_LAYER_MESSAGE_TWO = 'side exists at';
/// message -
Blockly.Msg.KF_ARCADEPHYSICS_PROBE_LAYER_MESSAGE_THREE = 'and is on the layer';
/// url -
Blockly.Msg.KF_ARCADEPHYSICS_PROBE_LAYER_HELPURL = '';

/// url -
Blockly.Msg.KF_INSTANCE_MOVE_HELPURL = '';
/// tooltip -
Blockly.Msg.KF_INSTANCE_MOVE_TOOLTIP = 'Changes the depth (layer ordering) of an instance passed by the selected dropdown method.';

/// Label -
Blockly.Msg.LOG_MESSAGE  = 'Log';
/// url -
Blockly.Msg.LOG_HELPURL = '';
/// tooltip -
Blockly.Msg.LOG_TOOLTIP = 'Log a value to the console';


/// helpurl -
Blockly.Msg.KF_PRIMITIVES_CREATE_RECTANGLE_HELPURL = '';
/// message -
Blockly.Msg.KF_PRIMITIVES_CREATE_RECTANGLE_MESSAGE_BEFORE = 'create new';
/// message -
Blockly.Msg.KF_PRIMITIVES_CREATE_RECTANGLE_MESSAGE_AFTER = 'with a width/height of';
/// tooltip -
Blockly.Msg.KF_PRIMITIVES_CREATE_RECTANGLE_TOOLTIP = 'Creates a new rectangle with a width and height that you set.';


/// helpurl -
Blockly.Msg.KF_PRIMITIVES_CREATE_CIRCLE_HELPURL = '';
/// message -
Blockly.Msg.KF_PRIMITIVES_CREATE_CIRCLE_MESSAGE_BEFORE = 'create new';
/// message -
Blockly.Msg.KF_PRIMITIVES_CREATE_CIRCLE_MESSAGE_AFTER = 'with a radius of';
/// tooltip -
Blockly.Msg.KF_PRIMITIVES_CREATE_CIRCLE_TOOLTIP = 'Creates a new circle with a radius that you set.';


/// helpurl -
Blockly.Msg.KF_PRIMITIVES_CREATE_LINE_HELPURL = '';
/// message -
Blockly.Msg.KF_PRIMITIVES_CREATE_LINE_MESSAGE_ONE = 'create new';
/// message -
Blockly.Msg.KF_PRIMITIVES_CREATE_LINE_MESSAGE_TWO = 'from origin to';
/// message -
Blockly.Msg.KF_PRIMITIVES_CREATE_LINE_MESSAGE_THREE = 'with a width of';
/// tooltip -
Blockly.Msg.KF_PRIMITIVES_CREATE_LINE_TOOLTIP = 'Creates a new line from the transforms origin to a point in space.';

/// helpurl -
Blockly.Msg.KF_PRIMITIVES_CREATE_STAR_HELPURL = '';
/// tooltip -
Blockly.Msg.KF_PRIMITIVES_CREATE_STAR_TOOLTIP = 'Creates a new star with a specified number of points.';
/// message -
Blockly.Msg.KF_PRIMITIVES_CREATE_STAR_MESSAGE_ONE = 'create new';
/// message -
Blockly.Msg.KF_PRIMITIVES_CREATE_STAR_MESSAGE_TWO = 'with a radius of';
/// message -
Blockly.Msg.KF_PRIMITIVES_CREATE_STAR_MESSAGE_THREE = 'and';
/// message -
Blockly.Msg.KF_PRIMITIVES_CREATE_STAR_MESSAGE_FOUR = 'points';

/// helpurl -
Blockly.Msg.KF_PRIMITIVES_CHANGE_COLOUR_HELPURL = '';
/// message -
Blockly.Msg.KF_PRIMITIVES_CHANGE_COLOUR_MESSAGE_ONE = 'set colour of shape';
/// message -
Blockly.Msg.KF_PRIMITIVES_CHANGE_COLOUR_MESSAGE_TWO = 'to';
/// tooltip -
Blockly.Msg.KF_PRIMITIVES_CHANGE_COLOUR_TOOLTIP = 'Sets the colour a shape will render to a particular value.';

/// helpurl -
Blockly.Msg.KF_PRIMITIVES_GET_COLOUR_HELPURL = '';
/// message -
Blockly.Msg.KF_PRIMITIVES_GET_COLOUR_MESSAGE = 'get colour of shape';
/// tooltip -
Blockly.Msg.KF_PRIMITIVES_GET_COLOUR_TOOLTIP = 'Returns the colour of a shape passed.';

/// helpurl -
Blockly.Msg.KF_PRIMITIVES_CREATE_POLYGON_HELPURL = '';
/// message -
Blockly.Msg.KF_PRIMITIVES_CREATE_POLYGON_MESSAGE_ONE = 'create new';
/// message -
Blockly.Msg.KF_PRIMITIVES_CREATE_POLYGON_MESSAGE_TWO = 'with a radius of';
/// message -
Blockly.Msg.KF_PRIMITIVES_CREATE_POLYGON_MESSAGE_THREE = ' and ';
/// message -
Blockly.Msg.KF_PRIMITIVES_CREATE_POLYGON_MESSAGE_FOUR = ' edges';
/// tooltip -
Blockly.Msg.KF_PRIMITIVES_CREATE_POLYGON_TOOLTIP = 'Creates a new polygon.';

/// helpurl -
Blockly.Msg.KF_TEXT_CREATE_HELPURL = '';
/// message -
Blockly.Msg.KF_TEXT_CREATE_MESSAGE_ONE = 'create new';
/// message -
Blockly.Msg.KF_TEXT_CREATE_MESSAGE_TWO = 'with text';
/// tooltip -
Blockly.Msg.KF_TEXT_CREATE_TOOLTIP = 'Creates a new textfield.';

/// helpurl -
Blockly.Msg.KF_TEXT_NUMERIC_SET_HELPURL = '';
/// message -
Blockly.Msg.KF_TEXT_NUMERIC_SET_MESSAGE_ONE = 'set';
/// message -
Blockly.Msg.KF_TEXT_NUMERIC_SET_MESSAGE_TWO = 'of';
/// message -
Blockly.Msg.KF_TEXT_NUMERIC_SET_MESSAGE_THREE = 'to';
/// tooltip -
Blockly.Msg.KF_TEXT_NUMERIC_SET_TOOLTIP = 'Sets the numeric value of a textfield to the value passed';

/// helpurl -
Blockly.Msg.KF_TEXT_COLOUR_SET_HELPURL = '';
/// message -
Blockly.Msg.KF_TEXT_COLOUR_SET_MESSAGE_ONE = 'set font colour of';
/// message -
Blockly.Msg.KF_TEXT_COLOUR_SET_MESSAGE_TWO = 'to';
/// tooltip -
Blockly.Msg.KF_TEXT_COLOUR_SET_TOOLTIP = 'Sets the font colour of a passed textfield to a colour passed';


/// helpurl -
Blockly.Msg.KF_TEXT_TEXT_SET_HELPURL = '';
/// message -
Blockly.Msg.KF_TEXT_TEXT_SET_MESSAGE_ONE = 'set text of';
/// message -
Blockly.Msg.KF_TEXT_TEXT_SET_MESSAGE_TWO = 'to';
/// tooltip -
Blockly.Msg.KF_TEXT_TEXT_SET_TOOLTIP = 'Sets the text which a textfield should display textfield to a string passed';


/// helpurl -
Blockly.Msg.KF_TEXT_ALIGNMENT_SET_HELPURL = '';
/// message -
Blockly.Msg.KF_TEXT_ALIGNMENT_SET_MESSAGE_ONE = 'set text alignment of';
/// message -
Blockly.Msg.KF_TEXT_ALIGNMENT_SET_MESSAGE_TWO = 'to';
/// tooltip -
Blockly.Msg.KF_TEXT_ALIGNMENT_SET_TOOLTIP = 'Sets the alignment of a textfield to a selected value in the dropdown';

/// helpurl -
Blockly.Msg.KF_TEXT_WEIGHT_SET_HELPURL = '';
/// message -
Blockly.Msg.KF_TEXT_WEIGHT_SET_MESSAGE_ONE = 'set text weight of';
/// message -
Blockly.Msg.KF_TEXT_WEIGHT_SET_MESSAGE_TWO = 'to';
/// tooltip -
Blockly.Msg.KF_TEXT_WEIGHT_SET_TOOLTIP = 'Sets the font weight of a textfield to a selected value in the dropdown';


/// helpurl -
Blockly.Msg.KF_TEXT_FAMILY_SET_HELPURL = '';
/// message -
Blockly.Msg.KF_TEXT_FAMILY_SET_MESSAGE_ONE = 'set font family of';
/// message -
Blockly.Msg.KF_TEXT_FAMILY_SET_MESSAGE_TWO = 'to';
/// tooltip -
Blockly.Msg.KF_TEXT_FAMILY_SET_TOOLTIP = 'Sets the font family that a textfield should use.';

/// helpurl -
Blockly.Msg.KF_TEXT_FONT_PRESETS_HELPURL = '';
/// tooltip -
Blockly.Msg.KF_TEXT_FONT_PRESETS_TOOLTIP = 'Returns the string which identifies the font family selected';

/// helpurl -
Blockly.Msg.KF_TEXT_NUMERIC_GET_HELPURL = '';
/// message -
Blockly.Msg.KF_TEXT_NUMERIC_GET_MESSAGE_ONE = 'get';
/// message -
Blockly.Msg.KF_TEXT_NUMERIC_GET_MESSAGE_TWO = 'of';
/// tooltip -
Blockly.Msg.KF_TEXT_NUMERIC_GET_TOOLTIP = 'Returns the current value of the selected property from a textfield';

/// helpurl -
Blockly.Msg.KF_TEXT_COLOUR_GET_HELPURL = '';
/// message -
Blockly.Msg.KF_TEXT_COLOUR_GET_MESSAGE = 'get font colour of';
/// tooltip -
Blockly.Msg.KF_TEXT_COLOUR_GET_TOOLTIP = 'Returns the font colour of a textfield';

/// helpurl -
Blockly.Msg.KF_TEXT_TEXT_GET_HELPURL = '';
/// message -
Blockly.Msg.KF_TEXT_TEXT_GET_MESSAGE = 'get text of';
/// tooltip -
Blockly.Msg.KF_TEXT_TEXT_GET_TOOLTIP = 'Returns the text of a textfield';

/// helpurl -
Blockly.Msg.KF_COORDINATE_GET_HELPURL = '';
/// message -
Blockly.Msg.KF_COORDINATE_GET_MESSAGE_ONE = 'get';
/// message -
Blockly.Msg.KF_COORDINATE_GET_MESSAGE_TWO = 'of';
/// tooltip -
Blockly.Msg.KF_COORDINATE_GET_TOOLTIP = 'Returns the numeric value for the passed location';

/// helpurl -
Blockly.Msg.KF_COORDINATE_SET_HELPURL = '';
/// message -
Blockly.Msg.KF_COORDINATE_SET_MESSAGE_ONE = 'set';
/// message -
Blockly.Msg.KF_COORDINATE_SET_MESSAGE_TWO = 'of';
/// message -
Blockly.Msg.KF_COORDINATE_SET_MESSAGE_THREE = 'to';
/// tooltip -
Blockly.Msg.KF_COORDINATE_SET_TOOLTIP = 'Sets the selected axis to a defined value for the passed location';

/// helpurl -
Blockly.Msg.KF_COORDINATE_CREATE_HELPURL = '';
/// message -
Blockly.Msg.KF_COORDINATE_CREATE_MESSAGE = 'create new location at';
/// tooltip -
Blockly.Msg.KF_COORDINATE_CREATE_TOOLTIP = 'Creates a new location';

/// helpurl -
Blockly.Msg.KF_COORDINATE_GET_ANGLE_HELPURL = '';
/// message -
Blockly.Msg.KF_COORDINATE_GET_ANGLE_MESSAGE = 'angle to location';
/// tooltip -
Blockly.Msg.KF_COORDINATE_GET_ANGLE_TOOLTIP = 'Get angle from (0, 0) to this location';

/// helpurl -
Blockly.Msg.KF_SET_DEBUG_MODE_URL = '';
/// message -
Blockly.Msg.KF_SET_DEBUG_MODE_MESSAGE = 'set debug mode';
/// tooltip -
Blockly.Msg.KF_SET_DEBUG_MODE_TOOLTIP = 'Sets the debug mode of the game';

/// helpurl -
Blockly.Msg.KF_GET_DEBUG_MODE_URL = '';
/// message -
Blockly.Msg.KF_GET_DEBUG_MODE_MESSAGE = 'get debug mode';
/// tooltip -
Blockly.Msg.KF_GET_DEBUG_MODE_TOOLTIP = 'Returns the boolean indiciating if debug mode is currently on or off';

/// helpurl -
Blockly.Msg.KF_CLASSES_GET_BY_TEXT_HELPURL = '';
/// message -
Blockly.Msg.KF_CLASSES_GET_BY_TEXT_MESSAGE = 'get class of';
/// tooltip -
Blockly.Msg.KF_CLASSES_GET_BY_TEXT_TOOLTIP = 'Returns a class of the text passed.';

/// helpurl -
Blockly.Msg.KF_EVENT_CONSTANTLY_DROPDOWN_HELPURL = '';
/// message -
Blockly.Msg.KF_EVENT_CONSTANTLY_DROPDOWN_MESSAGE = '';
/// tooltip -
Blockly.Msg.KF_EVENT_CONSTANTLY_DROPDOWN_TOOLTIP = 'Executes every frame. The order of execution depends on the choosen dropdown item.';

/// helpurl -
Blockly.Msg.KF_DEVICE_COCOON_URL = '';
/// message -
Blockly.Msg.KF_DEVICE_COCOON_MESSAGE = 'running on mobile?';
/// tooltip -
Blockly.Msg.KF_DEVICE_COCOON_TOOLTIP = 'TRUE if the game is running in mobile mode. Mobile mode is set when you use Playtest On Mobile or create a Cocoon build. Mobile devices do not have keyboards, so use this block to set up alternate control schemes.';

/// helpurl -
Blockly.Msg.KF_HITBOX_POSITION_GET_HELPURL = '';
/// message -
Blockly.Msg.KF_HITBOX_POSITION_GET_MESSAGE = 'get hitbox';
/// tooltip -
Blockly.Msg.KF_HITBOX_POSITION_GET_TOOLTIP = 'Returns the selected position of the hitbox in world coordinates.';

/// helpurl -
Blockly.Msg.KF_HITBOX_DIMENSIONS_GET_HELPURL = '';
/// message -
Blockly.Msg.KF_HITBOX_DIMENSIONS_GET_MESSAGE = 'get hitbox';
/// tooltip -
Blockly.Msg.KF_HITBOX_DIMENSIONS_GET_TOOLTIP = 'Returns the selected dimensions of the hitbox in world coordinates.';

/// helpurl -
Blockly.Msg.KF_HITBOX_OFFSET_GET_HELPURL = '';
/// message -
Blockly.Msg.KF_HITBOX_OFFSET_GET_MESSAGE = 'get hitbox offset';
/// tooltip -
Blockly.Msg.KF_HITBOX_OFFSET_GET_TOOLTIP = 'Returns the difference between the hitbox position and the instances position.';

// Scratch

// Motion category

/// helpurl -
Blockly.Msg.KF_SCRATCH_MOVE_STEPS_HELPURL = '';
/// message -
Blockly.Msg.KF_SCRATCH_MOVE_STEPS_MESSAGE_BEFORE = 'move';
/// message -
Blockly.Msg.KF_SCRATCH_MOVE_STEPS_MESSAGE_AFTER = 'steps';
/// tooltip -
Blockly.Msg.KF_SCRATCH_MOVE_STEPS_TOOLTIP = 'Move this object by the specified value in the direction of its current rotation.';

/// helpurl -
Blockly.Msg.KF_SCRATCH_TURN_RIGHT_BY_DEGREE_HELPURL = '';
/// message -
Blockly.Msg.KF_SCRATCH_TURN_RIGHT_BY_DEGREE_MESSAGE_BEFORE = 'turn ';
/// message -
Blockly.Msg.KF_SCRATCH_TURN_RIGHT_BY_DEGREE_MESSAGE_AFTER = 'to the right';
/// tooltip -
Blockly.Msg.KF_SCRATCH_TURN_RIGHT_BY_DEGREE_TOOLTIP = 'Turn the object to the right by this many degrees.';

/// helpurl -
Blockly.Msg.KF_SCRATCH_TURN_LEFT_BY_DEGREE_HELPURL = '';
/// message -
Blockly.Msg.KF_SCRATCH_TURN_LEFT_BY_DEGREE_MESSAGE_BEFORE = 'turn ';
/// message -
Blockly.Msg.KF_SCRATCH_TURN_LEFT_BY_DEGREE_MESSAGE_AFTER = 'to the left';
/// tooltip -
Blockly.Msg.KF_SCRATCH_TURN_LEFT_BY_DEGREE_TOOLTIP = 'Turn the object to the left by this many degrees.';

/// helpurl -
Blockly.Msg.KF_SCRATCH_POINT_DIRECTION_HELPURL = '';
/// message -
Blockly.Msg.KF_SCRATCH_POINT_DIRECTION_MESSAGE = 'point in direction';
//// tooltip -
Blockly.Msg.KF_SCRATCH_POINT_DIRECTION_TOOLTIP = 'Rotate this object so that it points in the specified direction.';

/// helpurl -
Blockly.Msg.KF_SCRATCH_GO_TO_XY_HELPURL = '';
/// message -
Blockly.Msg.KF_SCRATCH_GO_TO_XY_MESSAGE_ONE = 'go to x ';
/// message -
Blockly.Msg.KF_SCRATCH_GO_TO_XY_MESSAGE_TWO = 'y';
/// tooltip -
Blockly.Msg.KF_SCRATCH_GO_TO_XY_TOOLTIP = 'Move this object to the position specified by x and y.';

// Event category

/// helpurl -
Blockly.Msg.KF_SCRATCH_EVENTS_WAIT_HELPURL = '';
/// tooltip -
Blockly.Msg.KF_SCRATCH_EVENTS_WAIT_TOOLTIP = 'Wait before running the code inside this block. Code after this block will run right away.';
/// message -
Blockly.Msg.KF_SCRATCH_EVENTS_WAIT_MESSAGE1 = 'wait';
/// message -
Blockly.Msg.KF_SCRATCH_EVENTS_WAIT_MESSAGE2 = 'seconds';

// Control category

/// helpurl
Blockly.Msg.KF_SCRATCH_CONTROL_REPEAT_FRAMES_HELPURL = '';
/// tooltip
Blockly.Msg.KF_SCRATCH_CONTROL_REPEAT_FRAMES_TOOLTIP = 'Run the code inside this block this many times. The first run happens immediately. Subsequent runs occur on subsequent game frames.';
/// message1
Blockly.Msg.KF_SCRATCH_CONTROL_REPEAT_FRAMES_MESSAGE1 = 'repeat';

/// helpurl
Blockly.Msg.KF_SCRATCH_CONTROL_FOREVER_FRAMES_HELPURL = '';
/// tooltip
Blockly.Msg.KF_SCRATCH_CONTROL_FOREVER_FRAMES_TOOLTIP = 'Run the code inside this block forever. The first run happens immediately. Subsequent runs occur on subsequent game frames.';
/// message1
Blockly.Msg.KF_SCRATCH_CONTROL_FOREVER_FRAMES_MESSAGE1 = 'forever';


// Kiwifroot Game Mechanics
Blockly.Msg.KIWI_MECHANICS_EASING_HELPURL = '';
Blockly.Msg.KIWI_MECHANICS_EASING_TOOLTIP = 'Apply easing to a number from 0-1. Easing smooths out linear transitions and interpolations: it can make things start and/or stop smoothly, or create other cool effects. Useful in tweens.';
Blockly.Msg.KIWI_MECHANICS_EASING_MESSAGE1 = 'ease';
Blockly.Msg.KIWI_MECHANICS_EASING_MESSAGE2 = 'using';


// Overrides

Blockly.Msg.CONTROLS_IF_MSG_THEN = 'then';
