/**
@fileoverview Advanced game mechanics blocks for Gamefroot
@author benjamindrichards@gmail.com (Ben Richards)
**/

"use strict";
goog.provide( "Blockly.Kiwifroot.GameMechanics" );
goog.require( "Blockly.Kiwifroot" );

Blockly.Kiwifroot[ "kiwi_mechanics_easing" ] = function( block ) {

	/**
	Block for easing a normalized value (0-1). Useful for tweening.
	**/

	var code = "",
		easingAlgorithm = block.getFieldValue( "EASING_ALGORITHM" ),
		easingDirection = block.getFieldValue( "EASING_DIRECTION" ),
		value = Blockly.Kiwifroot.valueToCode(
			block, "VALUE", Blockly.Kiwifroot.ORDER_ATOMIC ) || 0;

	code += "Kiwi.Animations.Tweens.Easing." + easingAlgorithm + "." +
		easingDirection + "( " + value + " )";
	return [ code, Blockly.Kiwifroot.ORDER_ATOMIC ];
};
