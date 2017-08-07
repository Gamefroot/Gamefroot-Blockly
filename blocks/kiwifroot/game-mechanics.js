/**
@fileoverview Advanced game mechanics blocks for Gamefroot
@author benjamindrichards@gmail.com (Ben Richards)
**/

"use strict";
goog.provide( "Blockly.Blocks.Kiwifroot.GameMechanics" );
goog.require( "Blockly.Blocks" );

Blockly.Blocks[ "kiwi_mechanics_easing" ] = {

	/**
	Block for easing a normalized value (0-1). Useful for tweening.
	**/

	init: function() {

		var algo = [
				[ "quadratic", "Quadratic" ],
				[ "cubic", "Cubic" ],
				[ "quartic", "Quartic" ],
				[ "quintic", "Quintic" ],
				[ "exponential", "Exponential" ],
				[ "sinusoidal", "Sinusoidal" ],
				[ "circular", "Circular" ],
				[ "back", "Back" ],
				[ "elastic", "Elastic" ],
				[ "bounce", "Bounce" ],
			],
			direction = [
				[ "in/out", "InOut" ],
				[ "in", "In" ],
				[ "out", "Out" ],
			];

		this.setColour( Blockly.Variables.COLOUR.SENSING );
		this.setHelpUrl( Blockly.Msg.KIWI_MECHANICS_EASING_HELPURL );
		this.setTooltip( Blockly.Msg.KIWI_MECHANICS_EASING_TOOLTIP );
		this.setInputsInline( true );
		this.setOutput( true, "Number" );

		this.appendDummyInput()
		.appendField( Blockly.Msg.KIWI_MECHANICS_EASING_MESSAGE1 );

		this.appendValueInput( "VALUE" )
		.setCheck( "Number" );

		this.appendDummyInput()
		.appendField( Blockly.Msg.KIWI_MECHANICS_EASING_MESSAGE2 );

		this.appendDummyInput()
		.appendField(
			new Blockly.FieldDropdown( algo ),
			"EASING_ALGORITHM" )
		.appendField( "", "SPACE" );

		this.appendDummyInput()
		.appendField(
			new Blockly.FieldDropdown( direction ),
			"EASING_DIRECTION" );
	},
};
