

/**
* The core namespace used by Kiwifroot. 
* 
* @class Kiwifroot
* @static
*/
var Kiwifroot = {


	/**
	* The current version of Kiwifroot. 
	*
	* @property VERSION
	* @type string 
	* @public
	* @static
	*/
	VERSION: '1.4.0',


	/**
	* Contains the default values for core kiwifroot classes. 
	*
	* @property DEFAULT
	* @type object 
	* @public
	* @static
	*/
	DEFAULT: {

		/**
		* The default width of Kiwifroot games.
		* 
		* @property DEFAULT.width
		* @type number
		* @default 768
		* @public
		* @static
		*/
		width: 768,

		/**
		* The default height of Kiwifroot games.
		* 
		* @property DEFAULT.height
		* @type Number
		* @default 512
		* @public
		* @static
		*/
		height: 512,

		/**
		* Default name of the game.
		* 
		* @property DEFAULT.name
		* @type String
		* @default 'Kiwifroot'
		* @public
		* @static
		*/
		name: 'Kiwifroot',

		/**
		* 
		* @property taImageURL
		* @type String
		* @default '../../assets/kiwifrootAtlas.png'
		* @public
		* @static
		*/
		taImageURL: '../../assets/kiwifrootAtlas.png',

		/**
		* 
		* @property taJsonURL
		* @type String
		* @default '../../assets/kiwifrootAtlas.json'
		* @public
		* @static
		*/
		taJsonURL: '../../assets/kiwifrootAtlas.json',

		/**
		* 
		* @property debugMode
		* @type Boolean
		* @default false
		* @public
		*/ 
		debugMode: false,

		/**
		* When set to true, the game will configure itself to optimise performance. 
		* This can improve performance, but will make it harder to debug. 
		*
		* @property release
		* @type Boolean
		* @default false
		* @public
		*/
		release: false,


		/**
		* 
		* @property webviewURL
		* @type String
		* @default null
		* @public
		*/
		webviewURL: null,

		/**
		* 
		* @property skipLaunch
		* @type Boolean
		* @default false
		* @public
		*/
		skipLaunch: false,

		/**
		* If the splash graphic should open gamefroot when it is clicked
		* @property splashOpenURL
		* @type Boolean
		* @default false
		* @public
		*/
		splashOpenURL: false,

		/**
		* If the game should be rendered using canvas.
		* @property renderCanvas
		* @type Boolean
		* @default false
		* @public
		*/
		renderCanvas: false,

		/**
		* If all the level json should be loaded at the start.
		* Note: This does mean that the levels will have the 'keep' flag marked as true by default.
		* This means the data will be saved across levels, instead of being deleted and reloaded.
		*
		* @property loadLevelJsonAtStart
		* @type Boolean
		* @default false
		* @public
		*/
		loadLevelJsonAtStart: false,

		/**
		* If (image) assets should load via a XHR request instead of via image tags.
		* Turning this on will mean loading will take longer as we can load multiple images in at a time via image tags.
		* 
		* @property assetLoadViaXHR
		* @type Boolean
		* @default false
		* @public
		*/ 
		assetLoadViaXHR: false,

		/**
		* A prefix string to be added in front of all assets when loaded. 
		* 
		* @property assetPrefix
		* @type String
		* @default ''
		* @public
		* @since 0.11.0
		*/
		assetPrefix: ''
		 
	},

	/**
	*
	* @property States
	* @type Object
	* @public
	*/
	States: {},

	/**
	* 
	* @property GameObjects
	* @type Object
	* @public
	*/
	GameObjects: {},

	/**
	* 
	* @property Input
	* @type Object
	* @public
	*/
	Input: {},

	/**
	* 
	* @property Object
	* @type Object
	* @public
	*/
	Object: {

		/**
		*
		* @property Object.Core
		* @type Object
		* @public
		*/
		Core: {

		}

	},

	/**
	*
	* @property System
	* @type Object
	* @public
	*/
	System: {

		/**
		* 
		* @property System.Core
		* @type Object
		* @public
		*/
		Core: {
			
		}

	},

	/**
	* 
	* @property Components
	* @type Object
	* @public
	*/
	Components: {

		/**
		* 
		* @property Components.Core
		* @type Object
		* @public
		*/
		Core: {

		},

		/**
		* 
		* @property Components.Camera
		* @type Object
		* @public
		*/
		Camera: {

		}
		
	},

	/**
	*
	* @property Physics
	* @type Object
	* @public
	*/
	Physics: {

	},

	/**
	*
	* @property Plugins
	* @type Object
	* @public
	*/
	Plugins: {
		
		/**
		*
		* @property Plugins.GAMEOBJECT
		* @static
		* @type String
		* @default 'gameobject'
		* @public
		*/
		GAMEOBJECT: 'gameobject',

		/**
		* 
		* @property Plugins.COMPONENT
		* @static
		* @type String
		* @default 'component'
		* @public
		*/
		COMPONENT: 'component',

		/**
		* 
		* @property Plugins.SYSTEM
		* @static
		* @type String
		* @default 'system'
		* @public
		*/
		SYSTEM: 'system'

	},

	/**
	*
	* @property crossOrigin
	* @type Boolean
	* @default false
	* @public
	*/
	crossOrigin: false,

	/**
	* 
	* @property ERRORS
	* @type String
	* @public
	*/
	ERRORS: {

		/**
		*
		* @property ERRORS.GAME_JSON
		* @type String
		* @public
		*/
		GAME_JSON: "Game Information not found. Make sure you have either specified a JSON file or passed the raw information.",

		/**
		*
		* @property ERRORS.NO_LEVELS
		* @type String
		* @public
		*/
		NO_LEVELS: "No levels could be found. Make sure your game has at least a single level.",

		/**
		*
		* @property ERRORS.ASSET_NOT_FOUND
		* @type String
		* @public
		*/
		ASSET_NOT_FOUND: "Asset failed to load. Make sure you that the file specified exists.",

		/**
		*
		* @property ERRORS.CURRENT_LEVEL_NOT_FOUND
		* @type String
		* @public
		*/
		CURRENT_LEVEL_NOT_FOUND: "Opps. Could not locate the current level.",

		/**
		*
		* @property ERRORS.CURRENT_LEVEL_NO_DATA
		* @type String
		* @public
		*/
		CURRENT_LEVEL_NO_DATA: "Current level doesn't contain any data."

	}

};



/**
* 
* @module Components
* @submodule Camera
*
*/


/**
* 
* 
* @namespace Kiwifroot.Components.Camera
* @class Component
* @constructor
* @param gameObject {Kiwi.Entity}
* @param system {Kiwifroot.Components.Camera.System}
* @param [camera=this.game.cameras.defaultCamera]
* 
*/
Kiwifroot.Components.Camera.Component = function( gameObject, system, camera ) {

	Kiwi.Component.call( this, gameObject, 'Camera' );

	/**
	* 
	* @property camera
	* @type Kiwi.Camera
	* @public
	*/
	this.camera = camera || this.game.cameras.defaultCamera;

	/**
	*
	* @property snapToCamera
	* @type Boolean
	* @default false
	* @private
	*/
	this._snapToCamera = false;

	/**
	*
	* @property original
	* @type Kiwi.Geom.Point
	* @public
	*/
	this.original = new Kiwi.Geom.Point();

	/**
	* 
	* @property system
	* @type Kiwifroot.Components.Camera.System
	* @public
	*/ 
	this.system = system;

	this.system.add( this );

};

Kiwi.extend( Kiwifroot.Components.Camera.Component, Kiwi.Component );

/**
* 
* @property snapToCamera
* @type Boolean
* @default false
* @public
*/
Object.defineProperty(Kiwifroot.Components.Camera.Component.prototype, "snapToCamera", {

	get: function() {
		return this._snapToCamera;
	},

	set: function(val) {

		if( val ) {
			this._snapToCamera = true;
			this.original.setTo( this.owner.transform.x, this.owner.transform.y );

		} else {
			this._snapToCamera = false;
			this.owner.transform.x = this.original.x;
			this.owner.transform.y = this.original.y;

		}

	}

});


/**
*
* @method updateCoordinates
* @public
*/
Kiwifroot.Components.Camera.Component.prototype.updateCoordinates = function() {

	var p = this.camera.transformPoint( this.original );

	this.owner.transform.x = p.x;
	this.owner.transform.y = p.y;

};


/**
*
* @method destroy
* @public
*/
Kiwifroot.Components.Camera.Component.prototype.destroy = function() {

	Kiwi.Component.prototype.destroy.call( this );

	this.system.remove( this );

	delete this.system;

	delete this.camera;

	delete this.original;
	
};

/**
* 
* @module Components
* @submodule Camera
*
*/


/**
* 
* 
* @namespace Kiwifroot.Components.Camera
* @class System
* @constructor
* @param state {Kiwifroot.States.Level}
* 
*/
Kiwifroot.Components.Camera.System = function( state ) {

	Kiwi.Component.call( this, state, 'CameraSystem' );


	/**
	* 
	* @property components
	* @type Array
	* @public
	*/
	this.components = [];

};

Kiwi.extend( Kiwifroot.Components.Camera.System, Kiwi.Component );

Kiwifroot.Components.Camera.System.prototype.configure = function( params ) {
	//Parse any default parameters that can be set here...
};


/**
* 
* @method add
* @param component {Kiwi.Component}
* @public
*/
Kiwifroot.Components.Camera.System.prototype.add = function( component ) {

	if( component.name === 'Camera' ) {
		this.components.push( component );
		return true;
	}	

	return false;
};


/**
* 
* @method remove
* @param component {Kiwi.Component}
* @public
*/
Kiwifroot.Components.Camera.System.prototype.remove = function( component ) {

	var index = this.components.indexOf( component );

	if( index > -1) {
		this.components.splice( index, 1 );
		return true;
	}

	return false;
};


/**
* 
* @method postUpdate
* @public
*/
Kiwifroot.Components.Camera.System.prototype.postUpdate = function() {

	var i = 0;
	while( i < this.components.length) {

		if( this.components[ i ].snapToCamera ) {
			this.components[ i ].updateCoordinates( );
		}

		i++;
	}

};


/**
*
* @method destroy
* @public
*/
Kiwifroot.Components.Camera.System.prototype.destroy = function() {

	Kiwi.Component.prototype.destroy.call( this );

	this.components = [];
	
};

/**
* 
* @module Components
* @submodule Core
*
*/


/**
* 
* 
* @namespace Kiwifroot.Components.Core
* @class Animation
* @static
* 
*/
Kiwifroot.Components.Core.Animation = {

	/**
	* 
	* @property type
	* @type String
	* @default 'component'
	* @static
	* @readOnly
	* @public
	*/
	type: Kiwifroot.Plugins.COMPONENT,

	/**
	* 
	* @property component
	* @type String
	* @default 'animation'
	* @static
	* @readOnly
	* @public
	*/
	component: 'animation'

};	



/**
*
* @method add
* @param state {Kiwi.State}
* @param gameObject {Kiwi.Entity}
* @param params {Object}
* @public
*/
Kiwifroot.Components.Core.Animation.add = function( state, gameObject, params ) {

	if( !this.compatible( gameObject) ) {
		state.game.log.warn( "Cannot add a '" + this.component + "' to this type of gameobject as it does not have the required functionality." )
		return;
	}

	//Create an animation component and add it to the gameobject
	var animation = gameObject.components.add( new Kiwi.Components.AnimationManager( gameObject, false ) );

	//Loop through the parameters and create animations on each one.
	for( var index in params ) {

		if( !params[ index ].cells || !params[ index ].speed ) {
			state.game.log.error( "Animation could not be created. Missing 'cells' or 'speed' parameter." );
			continue;
		}

		animation.add( index, 
			params[ index ].cells, 
			params[ index ].speed, 
			params[ index ].loop, 
			params[ index ].play, 
			false );

	}

};


/**
* 
* @method compatible
* @param gameObject {Kiwi.Entity}
* @return {Boolean}
* @public
*/
Kiwifroot.Components.Core.Animation.compatible = function( gameObject ) {

	if( gameObject.atlas ) {
		return true;
	} else {
		return false;
	}

};


/**
* 
* @module Components
* @submodule Core
*
*/


/**
* 
* 
* @namespace Kiwifroot.Components.Core
* @class Box
* @static
* 
*/
Kiwifroot.Components.Core.Box = {

	/**
	* 
	* @property type
	* @type String
	* @default 'component'
	* @static
	* @readOnly
	* @public
	*/
	type: Kiwifroot.Plugins.COMPONENT,

	/**
	* 
	* @property component
	* @type String
	* @default 'box'
	* @static
	* @readOnly
	* @public
	*/
	component: 'box'

};	



/**
*
* @method add
* @param state {Kiwi.State}
* @param gameObject {Kiwi.Entity}
* @param params {Object}
* @public
*/
Kiwifroot.Components.Core.Box.add = function( state, gameObject, params ) {

	//Validate 
	if( !this.validate( params ) ) {

		state.game.log.warn( 'Parameters not valid. Box Component not created on GameObject.' );

		return;
	}

	//Does the gameObject already have a box component.
	if( gameObject.components.hasComponent( 'Box' ) ) {

		//Apply defauls passed.
		var box = gameObject.components.getComponent( 'Box' );
		box.hitbox = new Kiwi.Geom.Rectangle( params.x, params.y, params.width, params.height );
		
		return;
	}

	//Create an animation component and add it to the gameobject
	var box = gameObject.components.add( new Kiwi.Components.Box( gameObject, gameObject.x, gameObject.y, params.width, params.height ) );
	box.hitbox = new Kiwi.Geom.Rectangle( params.x, params.y, params.width, params.height );

};


/**
* 
* @method validate
* @param gameObject {Kiwi.Entity}
* @return {Boolean}
* @public
*/
Kiwifroot.Components.Core.Box.validate = function( params ) {

	if( typeof params.width === "undefined" ) {
		state.game.log.warn( 'Box Component: No width passed.' );
		return false;	
	} 

	if( typeof params.height === "undefined" ) {
		state.game.log.warn( 'Box Component: No height passed.' );
		return false;
	}

	if( typeof params.x === "undefined" ) {
		params.x = 0;
	}

	if( typeof params.y === "undefined" ) {
		params.y = 0;
	}

	return true;

};


/**
* 
* @module Components
* @submodule Core
*
*/


/**
* 
* 
* @namespace Kiwifroot.Components.Core
* @class Camera
* @static
* 
*/
Kiwifroot.Components.Core.Camera = {

	/**
	* 
	* @property type
	* @type String
	* @default 'component'
	* @static
	* @readOnly
	* @public
	*/
	type: Kiwifroot.Plugins.COMPONENT,

	/**
	* 
	* @property component
	* @type String
	* @default 'camera'
	* @static
	* @readOnly
	* @public
	*/
	component: 'camera'

};	



/**
*
* @method add
* @param state {Kiwi.State}
* @param gameObject {Kiwi.Entity}
* @param params {Object}
* @public
*/
Kiwifroot.Components.Core.Camera.add = function( state, gameObject, params ) {

	//Find out if a camera system exists.
	if( !state.components.hasComponent( 'CameraSystem' ) ) {
		state.game.log.error( "No 'CameraSystem' component found. Could not create a camera component." );
		return null;
	}


	//It does, so get it.
	var system = state.components.getComponent( 'CameraSystem' );

	//Create an animation component and add it to the gameobject
	var camera = gameObject.components.add( new Kiwifroot.Components.Camera.Component( gameObject, system ) );

	if( params.snap ) camera.snapToCamera = true;

};



/**
* 
* @module Components
* @submodule Core
*
*/


/**
* 
* 
* @namespace Kiwifroot.Components.Core
* @class ArcadePhysics
* @static
* 
*/
Kiwifroot.Components.Core.ArcadePhysics = {

	/**
	* 
	* @property type
	* @type String
	* @default 'component'
	* @static
	* @readOnly
	* @public
	*/
	type: Kiwifroot.Plugins.COMPONENT,

	/**
	* 
	* @property component
	* @type String
	* @default 'arcadephysics'
	* @static
	* @readOnly
	* @public
	*/
	component: 'arcadephysics'

};	



/**
*
* @method add
* @param state {Kiwi.State}
* @param gameObject {Kiwi.Entity}
* @param params {Object}
* @public
*/
Kiwifroot.Components.Core.ArcadePhysics.add = function( state, gameObject, params ) {

	//Does it have an old physics system?
	//This would be added by default by Kiwi
	if( gameObject.components.hasComponent( 'ArcadePhysics' ) ) {
		gameObject.components.removeComponentByName( 'ArcadePhysics' );
	}

	//Find out if a camera system exists.
	if( !state.components.hasComponent( 'ArcadeSystem' ) ) {
		state.game.log.error( "No 'ArcadeSystem' component found. Could not create a ArcadePhysics component." );
		return null;
	}

	//Is it a tilemaplayer?
	if( gameObject.objType() === 'TileMapLayer' ) {

		//Then it wont have a box...
		var box = null;

		//Loop through all tiletypes
		var tile, i = 0;
		while( i < gameObject.tilemap.tileTypes.length ) {

			tile = gameObject.tilemap.tileTypes[ i ];

			//For each one try to see if there is a physics property
			switch( tile.properties[ 'collision' ] ) {
				case "ANY":
					tile.allowCollisions = Kiwi.Components.ArcadePhysics.ANY;
					break;

				case "UP":
					tile.allowCollisions = Kiwi.Components.ArcadePhysics.UP;
					break;

				case "DOWN":
					tile.allowCollisions = Kiwi.Components.ArcadePhysics.DOWN;
					break;

				case "LEFT":
					tile.allowCollisions = Kiwi.Components.ArcadePhysics.LEFT;
					break;

				case "RIGHT":
					tile.allowCollisions = Kiwi.Components.ArcadePhysics.RIGHT;
					break;
			}

			i++;

		}

	} else {
		//Does it have a box component?
		if( !gameObject.components.hasComponent( 'Box' ) ) {
			state.game.log.error( "No 'Box' component found. Could not create a ArcadePhysics component." );
			return null;
		}

		var box = gameObject.components.getComponent( 'Box' );
	
	}


	//Create an animation component and add it to the gameobject
	var physics = gameObject.components.add( new Kiwifroot.Physics.ArcadeComponent( gameObject, box ) );

	//Defaults that can be passed
	if( params.velocity && typeof params.velocity.x !== "undefined" ) physics.velocity.x = params.velocity.x;
	if( params.velocity && typeof params.velocity.y !== "undefined" ) physics.velocity.y = params.velocity.y;

	if( params.acceleration && typeof params.acceleration.x !== "undefined" ) physics.acceleration.x = params.acceleration.x;
	if( params.acceleration && typeof params.acceleration.y !== "undefined" ) physics.acceleration.y = params.acceleration.y;

	if( params.maxVelocity && typeof params.maxVelocity.x !== "undefined" ) physics.maxVelocity.x = params.maxVelocity.x;
	if( params.maxVelocity && typeof params.maxVelocity.y !== "undefined" ) physics.maxVelocity.y = params.maxVelocity.y;

	if( params.drag  && typeof params.drag.x !== "undefined" ) physics.drag.x = params.drag.x;
	if( params.drag  && typeof params.drag.y !== "undefined" ) physics.drag.y = params.drag.y;

	if( typeof params.mass !== "undefined" ) physics.mass = params.mass;
	if( typeof params.elasticity !== "undefined" ) physics.elasticity = params.elasticity;

	if( typeof params.collisions !== "undefined" ) {

		physics.allowCollisions = Kiwi.Components.ArcadePhysics.NONE;
	
		if( !Kiwi.Utils.Common.isArray( params.collisions ) ) {
			params.collisions = [ params.collisions ];
		}


		for( var i = 0; i < params.collisions; i++ ) {

			switch( params.collisions ) {
				case "ANY":
					physics.allowCollisions = Kiwi.Components.ArcadePhysics.ANY;
					break;

				case "UP":
					physics.allowCollisions = physics.allowCollisions | Kiwi.Components.ArcadePhysics.UP;
					break;

				case "DOWN":
					physics.allowCollisions = physics.allowCollisions | Kiwi.Components.ArcadePhysics.DOWN;
					break;

				case "LEFT":
					physics.allowCollisions = physics.allowCollisions | Kiwi.Components.ArcadePhysics.LEFT;
					break;

				case "RIGHT":
					physics.allowCollisions = physics.allowCollisions | Kiwi.Components.ArcadePhysics.RIGHT;
					break;
			}
			

		}
 	
	}

	if( gameObject.objType() === 'TileMapLayer' ) {
		gameObject.physics = physics;
		physics.immovable = true;
		physics.gravity = false; 
	}


	if( typeof params.moves !== "undefined" ) physics.moves  = params.moves;
	if( typeof params.immovable  !== "undefined" ) physics.immovable  = params.immovable;
	if( typeof params.layer  !== "undefined" ) physics.layer  = params.layer;
	if( typeof params.gravity  !== "undefined" ) physics.gravity  = params.gravity;

};



/**
* 
* @module Components
* @submodule Core
*
*/


/**
* 
* 
* @namespace Kiwifroot.Components.Core
* @class Animation
* @static
* 
*/
Kiwifroot.Components.Core.TextureAnimation = {

	/**
	* 
	* @property type
	* @type String
	* @default 'component'
	* @static
	* @readOnly
	* @public
	*/
	type: Kiwifroot.Plugins.COMPONENT,

	/**
	* 
	* @property component
	* @type String
	* @default 'TextureAnimation'
	* @static
	* @readOnly
	* @public
	*/
	component: 'TextureAnimation'

};	



/**
*
* @method add
* @param state {Kiwi.State}
* @param gameObject {Kiwi.Entity}
* @param params {Object}
* @public
*/
Kiwifroot.Components.Core.TextureAnimation.add = function( state, gameObject, params ) {

	if( !this.compatible( gameObject ) ) {
		state.game.log.warn( "Cannot add a '" + this.component + "' to this type of gameobject as it does not have the required functionality." )
		return;
	}

	//Create an animation component and add it to the gameobject
	var animation = gameObject.components.add( new Kiwifroot.Components.TextureAnimation( gameObject, false ) );

	//Loop through the parameters and create animations on each one.
	for( var index in params ) {

		if( !params[ index ].cells ) {
			state.game.log.error( "Animation could not be created. Missing 'cells' parameter." );
			continue;
		}

		animation.create( index, 
			params[ index ].cells, 
			params[ index ].speed, 
			params[ index ].loop, 
			params[ index ].play );

	}

};


/**
* 
* @method compatible
* @param gameObject {Kiwi.Entity}
* @return {Boolean}
* @public
*/
Kiwifroot.Components.Core.TextureAnimation.compatible = function( gameObject ) {

	if( gameObject.atlas ) {
		return true;
	} else {
		return false;
	}

};


/**
* 
* @module Kiwifroot
* @submodule Components
*
*/

/**
*
* 
* @namespace Kiwifroot.Components
* @class Manager
* @constructor
* @param state {Kiwifroot.State}
* 
*/
Kiwifroot.Components.Manager = function( state ) {

	/**
	*
	* @property state
	* @type Kiwi.State
	* @public
	*/
	this.state = state;

	/**
	*
	* @property game
	* @type Kiwi.Game
	* @public
	*/
	this.game = this.state.game;

	/**
	* 
	* @property components
	* @type Object
	* @public
	*/
	this.components = {};

	//Create the defaults
	var c; 
	for( var index in Kiwifroot.Components.Core ) {
		c = Kiwifroot.Components.Core[ index ];

		if( c.component ) {
			this.components[ c.component ] = c;
		}
	}


	//Create the plugins 
	this.assignComponentsFromPlugins();


};



/**
* 
* @method exists
* @param type {String}
* @return
*/ 
Kiwifroot.Components.Manager.prototype.exists = function( type ) {
	return ( this.components[ type ] );
};



/**
*
* @method assignComponentsFromPlugins
* @private
*/
Kiwifroot.Components.Manager.prototype.assignComponentsFromPlugins = function() {

	//Get the plugins
	var plugin, i, j, kfp;

	for( i = 0; i < this.game.pluginManager._plugins.length; i++ ) {

		plugin = Kiwi.Plugins[ this.game.pluginManager._plugins[ i ] ];

		if( !plugin ) {
			this.game.log.warn( "Nothing found on 'Kiwi.Plugins." + this.game.pluginManager._plugins[ i ] + "' namespace.", '#components', '#plugins' );
			continue;
		}  


		//Is it a system?
		if( !plugin.kiwifrootPlugins || !Kiwi.Utils.Common.isArray( plugin.kiwifrootPlugins ) ) {
			//Skip to the next plugin...
			continue;
		}
		

		for( j = 0; j < plugin.kiwifrootPlugins.length; j++ ) {

			kfp = plugin.kiwifrootPlugins[ j ];

			if( kfp.type !== Kiwifroot.Plugins.COMPONENT ) {
				continue;
			}

			if( !kfp.name || !kfp.namespace ) {
				this.game.log.warn( "A Component on the '" + plugin.name + "' Plugin is missing a 'name' or 'namespace' property." , '#components', '#plugins');
				continue;
			}

			if( this.exists( kfp.name ) ) {
				this.game.log.warn( "Component creator for '" + kfp.name + "' already exists.", '#components', '#plugins' );
				continue;
			}

			this.components[ kfp.name ] = kfp.namespace;

		}

	}

};

/**
*
* @method addDefaults
* @param gameObject {Kiwi.Entity}
* @param params {Object}
* @public
*/
Kiwifroot.Components.Manager.prototype.addDefaults = function( gameObject, params ) {

	//Add the properties handler to the gameobject
	gameObject.properties = gameObject.components.add( new Kiwifroot.Components.Properties( gameObject, params.properties ) );


};

/**
*
* @method addTo
* @param gameObject {Kiwi.Entity}
* @param params {Object}
* @param [executeBoot] {Boolean}
* @public
*/
Kiwifroot.Components.Manager.prototype.addTo = function( gameObject, params, executeBoot ) {

	//Add the 'properties'
	this.addDefaults( gameObject, params );

	//See if there are any components
	if( typeof params.components !== "undefined" ) {
		//No components found...

		//For each component
		for( var index in params.components ) {

			//Does a component exist for that index?
			if( !this.exists( index ) ) {
				this.game.log.warn( "A '" + index +"' component does not exist.", '#components' );
				continue;
			}

			//Get the component 
			this.components[ index ].add( this.state, gameObject, params.components[ index ] );

		}

	}

	if( typeof executeBoot === "undefined" || executeBoot ) {
		this.bootComponentsOnGameObjectPassed( gameObject );
	}

};

/**
* 
* @method bootComponentsOnGameObjectPassed
* @param gameObject
* @public
*/
Kiwifroot.Components.Manager.prototype.bootComponentsOnGameObjectPassed = function( gameObject ) {

	//Loop through the components and execute a boot method...
	for( var name in gameObject.components._components ) {

		if( Kiwi.Utils.Common.isFunction( gameObject.components._components[ name ].boot ) ) {
			gameObject.components._components[ name ].boot();
		}

	}

};
	

/**
*
* @method destroy
* @public
*/
Kiwifroot.Components.Manager.prototype.destroy = function() {

	delete this.state;

	delete this.game;

	delete this.components;

};

/**
* 
* @module Kiwifroot
* @submodule Components
*
*/

/**
*
* 
* @namespace Kiwifroot.Components
* @extends Kiwi.Component
* @class Properties
* @constructor
* @param owner {Kiwi.Entity}
* 
*/
Kiwifroot.Components.Properties = function( owner, properties ) {

	Kiwi.Component.call( this, owner, 'Properties' );

	/**
	* 
	* @property callbacks
	* @type Array
	* @private
	*/
	this._callbacks = [];

	/**
	*
	* @property _properties
	* @type Object
	* @private
	*/
	this._properties = {  };

	//properties

	this.processValues( properties );

};

Kiwi.extend( Kiwifroot.Components.Properties, Kiwi.Component );


/**
*
* @method processValues
* @param properties {Array}
* @public
*/
Kiwifroot.Components.Properties.prototype.processValues = function( properties, override ) {

	properties = properties || {};
	override = override || false;

	var property, index, value;

	for( index in properties ) {

		property = properties[ index ];

		if( !override && this.has( index ) ) {
			this.game.log.warn( "Property with the same name already exists.", '#properties' );
			continue;
		}

		value = null;

		//Assign the default values based in the type. 
		switch( property.type ) {

			case 'boolean':
				if( !property.value ) {
					property.value = false;
				} 
				value = property.value;
				break;

			case 'number':
				if( !property.value ) {
					this.set( property.name, 0 );
				} 
				value = property.value;
				break;

			case 'node':
				if( !property.value ) {
					property.value = { x: 0, y: 0 };
				}

				value = new Kiwi.Geom.Point( property.value.x, property.value.y );
				break;

			case 'string':
				if( !property.value ) {
					property.value = '';
				}
				value = property.value;
				break;

			default:
				value = property.value;
				break;

		}

		if( value !== null ) {
			this.set( index, value, false );
		}

	}

};


/**
* 
* @method has
* @param name {String}
* @return {Boolean}
* @public
*/
Kiwifroot.Components.Properties.prototype.has = function( name ) {

	return( this._properties[ name ] );

};


/**
*
* @method get
* @param name {String}
* @return {Boolean}
* @public
*/
Kiwifroot.Components.Properties.prototype.get = function( name ) {

	return( this._properties[ name ] );

};


/**
*
* @method set
* @param name {String}
* @public
*/
Kiwifroot.Components.Properties.prototype.set = function( name, value, callbacks ) {

	this._properties[ name ] = value;

	if( typeof callback == "undefined" || callback ) {
		this._executeCallbacks( name, value );
	}

};


/**
*
* @method delete
* @param name {String}
* @public
*/
Kiwifroot.Components.Properties.prototype.delete = function( name, callback ) {

	delete this._properties[ name ];

	if( typeof callback == "undefined" || callback ) {
		this._executeCallbacks( name, null );
	}

};

/**
* 
* @method _executeCallbacks
* @param name {String}
* @private
*/
Kiwifroot.Components.Properties.prototype._executeCallbacks = function( name, value ) {

	var i = 0, current;

	while( i < this._callbacks.length ) {

		current = this._callbacks[ i ];

		if( !current.name || current.name === name ) {
			current.callback.call( current.context, name, value );
		}

		i++;
	}


};


/**
* 
* @method onUpdate
* @param callback { Function }
* @param context { Any }
* @param [name=null] {String}
* @public
*/
Kiwifroot.Components.Properties.prototype.onUpdate = function( callback, context, name ) {

	if( !callback ) {
		this.game.log.warn('Properties Component: No callback was passed. Skipping.', '#properties');
		return;
	}

	name = name || null;

	this._callbacks.push( {
		callback: callback,
		context: context,
		name: name
	} );

};


/**
* 
* @method removeOnUpdate
* @param callback { Function }
* @param context { Any }
* @param [name=null] {String}
* @return {Boolean} Successfully removed or not
* @public
*/
Kiwifroot.Components.Properties.prototype.removeOnUpdate = function( callback, context, name ) {

	name = name || null;

	var i = 0, current;

	while( i < this._callbacks.length ) {

		current = this._callbacks[ i ];

		if( current.callback === callback && current.context === context && current.name === name ) {
			this._callbacks.splice( i, 1 );
			return true;
		}

		i++;
	}

	return false;

};


/**
*
* @method destroy
* @public
*/
Kiwifroot.Components.Properties.prototype.destroy = function() {

	Kiwi.Component.prototype.destroy.call( this );

	delete this._callbacks;

	delete this._properties;

};

Kiwifroot.Components.TextureAnimation = function( owner ) {

	Kiwi.Component.call( this, owner, 'TextureAnimation' );

	this.state = this.owner.state;

	this.clock = this.owner.clock || this.game.time.clock;

	this._animations = {};

	this.isPlaying = true;

	this._startTime = null;
	this._lastFrameElapsed = this.clock.elapsed();

	//Inheritance

	//Create default animation

	this.currentAnimation = this.create( 'default', [ this.owner.atlas, this.owner.cellIndex ], 0.1, false );

	this.onChange = new Kiwi.Signal();
	this.onPlay = new Kiwi.Signal();
	this.onStop = new Kiwi.Signal();
	this.onUpdate = new Kiwi.Signal();

	//On Loop 

};

Kiwi.extend( Kiwifroot.Components.TextureAnimation, Kiwi.Component );


Kiwifroot.Components.TextureAnimation.prototype.objType = function() {
	return "TextureAnimation";
};


Kiwifroot.Components.TextureAnimation.prototype.create = function(name, cells, speed, loop, play) {
	//Kiwi creates sequence, and then uses that...
	return this.add( new Kiwifroot.Components.TextureAnimation.Animation( this, {
		name: name,
		speed: speed,
		loop: loop,
		cells: cells
	} ), play );
};


Kiwifroot.Components.TextureAnimation.prototype.add = function(animation, play) {
	if( !animation.name ) {
		Kiwi.Log.warn('TextureAnimation:Animation requires a name in order to function.');
		return animation;
	} 

	if( !Kiwi.Utils.Common.isArray( animation.cells ) ) {
		Kiwi.Log.warn('TextureAnimation:Animation missing cell definitions.');
		return animation;
	}

	this._animations[ animation.name ] = animation;

	if( play ) {
		this._play( animation.name );
	}
};


Kiwifroot.Components.TextureAnimation.prototype.play = function(name, resetTime) {

	name = name || this.currentAnimation.name;

	if( typeof resetTime === "undefined") resetTime = true;

	if( !resetTime && this.currentAnimation.name === name && this.isPlaying ) {
		return this.currentAnimation;
	} else {
		return this._play( name );
	}

};


Kiwifroot.Components.TextureAnimation.prototype.playAt = function(index, name) {
	name = name || this.currentAnimation.name;

	return this._play(name, index);
};


Kiwifroot.Components.TextureAnimation.prototype._play = function(name, index) {

	if( !this._setCurrentAnimation( name ) ) {
		//Could not play a animation which doesn't exist
		return;
	}

	this.currentAnimation.frameIndex = index || 0;
	
	this.onPlay.dispatch( this.currentAnimation );

	this.isPlaying = true;

	this.updateAnimationOnOwner();

	return this.currentAnimation;
};

Kiwifroot.Components.TextureAnimation.prototype.stop = function() {

	if( this.isPlaying ) {
		this.isPlaying = false;
		this.onStop.dispatch( this.currentAnimation );
	}

};

Kiwifroot.Components.TextureAnimation.prototype.pause = function() {
	//Pause the current animation
	this.stop();
};

Kiwifroot.Components.TextureAnimation.prototype.resume = function() {
	//Resume the current animation
	this.isPlaying = true;
};

//Switch to functionality missing ..

Kiwifroot.Components.TextureAnimation.prototype.nextFrame = function() {
	if( !this.currentAnimation ) return;

	this.currentAnimation.frameIndex++;
	if(this.currentAnimation.frameIndex >= this.currentAnimation.length) this.currentAnimation.frameIndex = 0;

};

Kiwifroot.Components.TextureAnimation.prototype.prevFrame = function() {
	if( !this.currentAnimation ) return;

	this.currentAnimation.frameIndex--;
	if (this.currentAnimation.frameIndex < 0) this.currentAnimation.frameIndex = this.currentAnimation.length - 1;
};

Kiwifroot.Components.TextureAnimation.prototype._setCurrentAnimation = function(name) {

	if( this.currentAnimation && this.currentAnimation.name === name ) {
		return false; 
	}

	if( !this._animations[ name ] ) {
		//Kiwi.Log.warn("TextureAnimation: No animation with the passed name was found. Please make sure it exists.");
		return false;
	}

	//Stop the current animation
	if( this.currentAnimation ) {
		this.stop();
	}

	//
	this.currentAnimation = this._animations[ name ];
	this.onChange.dispatch( this.currentAnimation );

	return true;
};	

Kiwifroot.Components.TextureAnimation.prototype.update = function() {
	//Update the current animation
	Kiwi.Component.prototype.update.call( this );

	if( !this.isPlaying || !this.currentAnimation) return;

	var frameDelta, 
		i,
		animation = this.currentAnimation, 
		length = animation.length;

	// How many frames do we move, ahead or behind?
	frameDelta = ( ( this.clock.elapsed() - this._lastFrameElapsed ) / animation.speed ) % ( length + 1 );

	// Round delta, towards zero
	if ( frameDelta > 0 ) {
		frameDelta = Math.floor( frameDelta );
	} else {
		frameDelta = Math.ceil( frameDelta );
	}

	if( frameDelta === 0 ) {
		return;
	}

	animation.frameIndex += frameDelta;
	this._lastFrameElapsed = this.clock.elapsed();

	// Loop check
	if ( animation.loop ) {

		if ( animation.frameIndex >= length ) {

			var repeats = Math.floor( animation.frameIndex / length );
			animation.frameIndex = animation.frameIndex % length;	

			if( animation._onLoop ) {
				for ( i = 0; i < repeats; i++ ) {
					animation._onLoop.dispatch();
				}
			}

		} else if ( animation.frameIndex < 0 ) {

			var repeats = Math.ceil( Math.abs( animation.frameIndex ) / length );

			animation.frameIndex = ( length + animation.frameIndex % length ) % length;

			if( animation._onLoop ) {
				for ( i = 0; i < repeats; i++ ) {
					animation._onLoop.dispatch();
				}
			}
		}

	} else if ( animation.frameIndex < 0 ) {

		animation.frameIndex = ( length + animation.frameIndex % length ) % length;
		this.stop();
		if( animation._onStop ) animation._onStop.dispatch();

	} else if ( animation.frameIndex >= length ) {
		animation.frameIndex = animation.frameIndex % length;

		this.stop();
		if( animation._onStop ) animation._onStop.dispatch();
		if( animation._onComplete ) animation._onComplete.dispatch();
	}

	this.updateAnimationOnOwner();
	if ( animation._onUpdate ) animation._onUpdate.dispatch();

};

// Missing get 'currentCell', 'frameIndex', 'length'

Kiwifroot.Components.TextureAnimation.prototype.getAnimation = function(name) {
	return this._animations[ name ];
};


Kiwifroot.Components.TextureAnimation.prototype.updateAnimationOnOwner = function() {

	//Get the current texture atlas / cell
	var indexInCells = this.currentAnimation.frameIndex * 2;

	this.owner.atlas = this.currentAnimation.cells[ indexInCells ];
	this.owner.cellIndex = this.currentAnimation.cells[ indexInCells + 1 ];

};


Kiwifroot.Components.TextureAnimation.prototype.destroy = function() {

	Kiwi.Component.prototype.destroy.call( this );

	for (var key in this._animations) {
		this._animations[key].destroy();
		delete this._animations[key];
	}

	delete this._animations;
	delete this.currentAnimation;
	delete this.clock;
	delete this.state;

	if( this.onChange ) this.onChange.dispose();
	if( this.onPlay ) this.onPlay.dispose();
	if( this.onStop ) this.onStop.dispose();
	if( this.onUpdate ) this.onUpdate.dispose();

	delete this.onChange;
	delete this.onPlay;
	delete this.onStop;
	delete this.onUpdate;


};


//Represents a singular animation 


Kiwifroot.Components.TextureAnimation.Animation = function(manager, params) {

	this.manager = manager;

	params = params || {};

	this.name = params.name || "Animation";

	this.speed = params.speed || 0.1;

	this.loop = params.loop || false;

	this.frameIndex = 0;

	//Cells 
	this.cells = this.parseCells( params.cells );
 	
	this._onLoop = null;
	this._onComplete = null;
	this._onPlay = null;
	this._onStop = null;
	this._onUpdate = null;

};	

Kiwifroot.Components.TextureAnimation.Animation.prototype = {

	objType: function() {
		return 'Animation'; //Duplicate of the regular Animation, but will do for now.  
	},

	parseCells: function( cells ) {

		if( !Kiwi.Utils.Common.isArray(cells) ) {
			Kiwi.Log.warn("TextureAnimation: Cells isn't in an array format.");
			return this.getCurrentCellOffOwner();
		}

		if( cells.length % 2 > 0 ) {
			Kiwi.Log.warn("TextureAnimation: Cell array passed isn't even. An animation maybe missing or not work as intended.");
		}

		var returnCells = [], 
			i = 0,
			texture;

		for( i; i < cells.length; i += 2 ) {

			//Get the texture 
			if( Kiwi.Utils.Common.isObject( cells[ i ] ) ) {
				//Passed as object 
				texture = cells[ i ];
			} else {
				//From ID on the state
				texture = this.manager.state.textures[ cells[ i ] ];
			}
			
			//Make sure it exists
			if( !texture ) {
				Kiwi.Log.warn("TextureAnimation: Could not find Texture '" + cells[ i ] + "'for Animation.");
				continue;
			}

			//Maybe validate the display = 'table-cell'

			returnCells.push( texture, cells[ i + 1 ] );
		}

		return returnCells;
	},

	getCurrentCellOffOwner: function() {
		return [ this.manager.owner.atlas, this.manager.owner.cellIndex ];
	},

	destroy: function() {

		if(this._onLoop) this._onLoop.dispose();
		if(this._onStop) this._onStop.dispose();
		if(this._onPlay) this._onPlay.dispose();
		if(this._onUpdate) this._onUpdate.dispose();
		if(this._onComplete) this._onComplete.dispose();

		this.cells = [];

		delete this._onLoop;
		delete this._onStop;
		delete this._onPlay;
		delete this._onUpdate;
		delete this._onComplete;
		delete this.manager;

	}

};

Object.defineProperty(Kiwifroot.Components.TextureAnimation.Animation.prototype, 'length', {
	get: function() {
		return Math.floor( this.cells.length * 0.5 );
	}
});

Object.defineProperty(Kiwifroot.Components.TextureAnimation.Animation.prototype, 'onLoop', {
	get: function() {
		if( !this._onLoop ) {
			this._onLoop = new Kiwi.Signal();
		}
		return this._onLoop;
	}
});

Object.defineProperty(Kiwifroot.Components.TextureAnimation.Animation.prototype, 'onComplete', {
	get: function() {
		if( !this._onComplete ) {
			this._onComplete = new Kiwi.Signal();
		}
		return this._onComplete;
	}
});

Object.defineProperty(Kiwifroot.Components.TextureAnimation.Animation.prototype, 'onPlay', {
	get: function() {
		if( !this._onPlay ) {
			this._onPlay = new Kiwi.Signal();
		}
		return this._onPlay;
	}
});

Object.defineProperty(Kiwifroot.Components.TextureAnimation.Animation.prototype, 'onStop', {
	get: function() {
		if( !this._onStop ) {
			this._onStop = new Kiwi.Signal();
		}
		return this._onStop;
	}
});

Object.defineProperty(Kiwifroot.Components.TextureAnimation.Animation.prototype, 'onUpdate', {
	get: function() {
		if( !this._onUpdate ) {
			this._onUpdate = new Kiwi.Signal();
		}
		return this._onUpdate;
	}
});

/**
* 
* @module Kiwifroot
*/

/**
* Controls translating, adding game assets from the game/level json to the Kiwi Loader.
* 
* @namespace Kiwifroot
* @class Asset
* @constructor
* @param game {Kiwi.Game}
* 
*/
Kiwifroot.Asset = function( game, gameOptions ) {

	/**
	*
	* @property game
	* @type Kiwi.Game
	* @public
	*/
	this.game = game;

	/**
	*
	* @property _assets
	* @type Array
	* @private
	*/
	this._assets = {};

	//Enable parallel loading?
	this._loadViaXHR = gameOptions.assetLoadViaXHR;

	/**
	* A prefix that should be added to all asset urls.
	* 
	* @property prefix
	* @type String
	* @public
	* @since 0.11.0
	*/
	this.prefix = gameOptions.assetPrefix || '';

	this.game.loader.enableParallelLoading = !this._loadViaXHR;

};

/**
* Returns the URL that should be used by taking into account prefix and absolution/relative directories.
* To Do: Absolute directory support.
* 
* @method getUrl
* @param url {String} 
* @return String
*/
Kiwifroot.Asset.prototype.getUrl = function( url ) {
	if( Kiwi.Utils.Common.isArray(url) ) {
		var i = url.length;
		while(i--) {
			url[i] = this.prefix + url[i];
		}
		return url;
	} else {
		return this.prefix + url;
	}
};

/**
* Static property holding the 'image' asset type. 
* @property IMAGE 
* @type String
* @default 'image'
* @static
* @readOnly
* @public
*/
Kiwifroot.Asset.IMAGE = 'image';


/**
* Static property holding the 'spritesheet' asset type. 
* @property SPRITESHEET 
* @type String
* @default 'spritesheet'
* @static
* @readOnly
* @public
*/
Kiwifroot.Asset.SPRITESHEET = 'spritesheet';


/**
* Static property holding the 'textureatlas' asset type. 
* @property TEXTUREATLAS 
* @type String
* @default 'textureatlas'
* @static
* @readOnly
* @public
*/
Kiwifroot.Asset.TEXTUREATLAS = 'textureatlas';



/**
* Static property holding the 'sound' asset type. 
* @property SOUND 
* @type String
* @default 'sound'
* @static
* @readOnly
* @public
*/
Kiwifroot.Asset.SOUND = 'sound';


/**
* Static property holding the 'json' asset type. 
* @property JSON 
* @type String
* @default 'json'
* @static
* @readOnly
* @public
*/
Kiwifroot.Asset.JSON = 'json';


/**
* 
* @property SPRITESHEET_COMPILED
* @type String
* @default 'spritesheet-compiled'
* @static
* @readOnly
* @public
* @since 1.2.0
*/
Kiwifroot.Asset.SPRITESHEET_COMPILED = 'spritesheet-compiled';

/**
* 
* @property TAG
* @type Object
* @static
* @readOnly
* @public
*/
Kiwifroot.Asset.TAG = {

	/**
	* 
	* @property TAG.GLOBAL
	* @type String
	* @default 'global'
	* @readOnly
	* @public
	*/
	'GLOBAL': 'global',

	/**
	* 
	* @property TAG.LEVEL
	* @type String
	* @default 'level'
	* @readOnly
	* @public
	*/
	'LEVEL': 'level'
};

/**
* Returns a boolean indiciating if an asset with an id passed exists. 
* @method exists
* @param id {Number}
* @return {Boolean}
* @public
*/
Kiwifroot.Asset.prototype.exists = function( id ) {

	return ( typeof this._assets[ id ] !== "undefined" );

};

/**
* Adds an asset with an id to the 'asset' property.
* @method _add
* @param id {Number}
* @param type {String}
* @param metadata {Any}
* @param tag {Any}
* @private
*/
Kiwifroot.Asset.prototype._add = function( id, type, metadata, tag ) {

	metadata = metadata || {};

	this._assets[ id ] = { type: type, metadata: metadata, tag: tag };

};


/**
* Removes an asset from the asset list
* @method _remove
* @param id {Number}
* @return {Boolean}
* @private
*/
Kiwifroot.Asset.prototype._remove = function( id ) {

	if( this._assets[ id ] ) {
		delete this._assets[ id ];
		return true;
	}
	
	return false;
};


/**
* 
* @method get
* @param id {Number}
* @return {Object}
* @public 
*/
Kiwifroot.Asset.prototype.get = function( id ) {
	
	if( this.exists( id ) ) {
		return this._assets[ id ];
	}

	return null;

};


/**
* 
* @method remove
* @param id {Number}
* @public
*/
Kiwifroot.Asset.prototype.remove = function( id ) {

	if( this._remove( id ) && this.game.fileStore.exists( id ) ) {
		this.game.fileStore.removeFile( id );
	}

};



/**
* 
* @method removeAllByTag
* @param tag {Any}
* @public
*/
Kiwifroot.Asset.prototype.removeAllByTag = function( tag ) {

	var index;

	for( index in this._assets ) {

		if( this._assets[ index ].tag === tag ) {
			
			this.remove( index );

		}

	}

};



/**
* Attempts to loading in an assets based on the 'type' passed. 
* 
* @method load 
* @param params {Object}
*	@param params.id {Number}
*	@param params.type {String}
* 	@param [params.global=false] {Boolean} 
* @param [global] {Boolean}
* @public
*/ 
Kiwifroot.Asset.prototype.load = function( param, global ) {

	param = param || {};

	if( typeof param.id === "undefined" || !param.type ) {
		this.game.log.error( 'The asset cannot be added. Missing either a type or id.', '#assets' );
		return;
	} 

	if( this.exists( param.id ) ) {
		this.game.log.warn( 'An asset with the id of ' + param.id + ' already exists.', '#assets' );
		return;
	}

	var tag = (global || param.global) ? Kiwifroot.Asset.TAG.GLOBAL : Kiwifroot.Asset.TAG.LEVEL ;

	switch( param.type ) {

		case Kiwifroot.Asset.IMAGE:
			this.loadImage( param, tag );
			break;

		case Kiwifroot.Asset.SPRITESHEET:
			this.loadSpriteSheet( param, tag );
			break;

		case Kiwifroot.Asset.SPRITESHEET_COMPILED:
			this.loadCompiledSpriteSheet( param, tag );
			break;

		case Kiwifroot.Asset.TEXTUREATLAS: 
			this.loadTextureAtlas( param, tag );
			break;

		case Kiwifroot.Asset.SOUND: 
			this.loadSound( param, tag );
			break;

		case Kiwifroot.Asset.JSON: 
			this.loadJson( param, tag );
			break;

		default: 
			this.game.log.error( 'Asset type match not found. Asset ID ' + param.id + ' not loaded.', '#assets' );
			break;
	}

};

/**
* Loops through its internal assets removes any assets that were not loaded.
* Returns an array of metadata for the assets it removed. 
* 
* @method removeAssetsNotLoaded
* @param [ignoreSounds=true] {Boolean} 
* @return Array
* @public
*/
Kiwifroot.Asset.prototype.removeAssetsNotLoaded = function( ignoreSounds ) {

	if( typeof ignoreSounds === "undefined" ) {
		ignoreSounds = true;
	}

	var assetsRemoved = [],
		data;

	for( var index in this._assets ) {

		data = this._assets[ index ].metadata;

		if( !this.hasLoaded( index ) ) {
			
			if( data.type === Kiwifroot.Asset.SOUND && ignoreSounds ) {
				continue;
			} else {
				assetsRemoved.push( data );
			}
		}

	}

	return assetsRemoved;

};

/**
* Returns a boolean indicating if that asset has been loaded or not.
* 
* If the asset has not loaded, and it exists on this asset manager, then it is removed.
* 
* @method hasLoaded
* @param id {Number}
* @public
*/
Kiwifroot.Asset.prototype.hasLoaded = function( id ) {

	if( typeof id === "undefined" ) {
		this.game.log.error( 'Could not check. Missing either a type or id.', '#assets' );
		return;
	} 

	if( this.game.fileStore.exists( id ) ) {
		return true;
	} 

	this._remove( id );
	return false;

};


/**
*
* @method loadImage
* @param params {Object}
*	@param params.id {Number}
* 	@param params.url {String}
*	@param [params.width] {Number}
*	@param [params.height] {Number}
*	@param [params.offsetX] {Number}
*	@param [params.offsetY] {Number}
* @param tag {Any}
* @public
*/
Kiwifroot.Asset.prototype.loadImage = function( params, tag ) {

	params = params || {};

	if( !params.id || !params.url ) {
		this.game.log.error( 'Not all the required parameters have been passed.', '#assets', '#image' );
		return;
	}
	params.width = params.width || null;
	params.height = params.height || null;
	params.offsetX = params.offsetX || null;
	params.offsetY = params.offsetY || null;

	var object = {
		key: params.id, 
		url: this.getUrl( params.url ), 
		width: params.width, 
		height: params.height, 
		offsetX: params.offsetX, 
		offsetY: params.offsetY,
		crossOrigin: "anonymous",
		timeout: null
	};

	if( this._loadViaXHR ) {
		object.xhrLoading = true;
	}

	this._add( params.id, Kiwifroot.Asset.IMAGE, params, tag );
	this.game.loader.addImage( object );

};



/**
*
* @method loadSpriteSheet
* @param params {Object}
*	@param params.id {Number}
* 	@param params.url {String|Array}
*	@param params.frameWidth {Number}
*	@param params.frameHeight {Number}
*	@param [params.numCells] {Number} 
*	@param [params.rows] {Number} 
*	@param [params.cols] {Number} 
*	@param [params.sheetOffsetX] {Number} 
*	@param [params.sheetOffsetY] {Number} 
*	@param [params.cellOffsetX] {Number} 
*	@param [params.cellOffsetY] {Number} 
* @param tag {Any}
* @public
*/
Kiwifroot.Asset.prototype.loadSpriteSheet = function( params, tag ) {

	params = params || {};

	if( !params.id || !params.url || !params.frameWidth || !params.frameHeight ) {
		this.game.log.error( 'Not all the required parameters have been passed.', '#assets', '#spritesheet' );
		return;
	}

	if( Kiwi.Utils.Common.isArray( params.url ) ) {
		this.loadCompiledSpriteSheet( params, tag );
		return;
	} 

	params.numCells = params.numCells || null;
	params.rows = params.rows || null;
	params.cols = params.cols || null;
	params.sheetOffsetX = params.sheetOffsetX || null;
	params.sheetOffsetY = params.sheetOffsetY || null;
	params.cellOffsetX = params.cellOffsetX || null;
	params.cellOffsetY = params.cellOffsetY || null;

	var object = {
		key: params.id, 
		url: this.getUrl( params.url ), 
		frameWidth: params.frameWidth, 
		frameHeight: params.frameHeight,
		numCells: params.numCells,
		rows: params.rows,
		cols: params.cols,
		sheetOffsetX: params.sheetOffsetX,
		sheetOffsetY: params.sheetOffsetY,
		cellOffsetX: params.cellOffsetX,
		cellOffsetY: params.cellOffsetY,
		crossOrigin: "anonymous",
 		timeout: null
	};

	if( this._loadViaXHR ) {
		object.xhrLoading = true;
	}

	this._add( params.id, Kiwifroot.Asset.SPRITESHEET, params, tag );
	this.game.loader.addSpriteSheet( object );


};

/**
*
* @method loadCompiledSpriteSheet
* @param params {Object}
*	@param params.id {Number}
* 	@param params.url {Array}
*	@param params.frameWidth {Number}
*	@param params.frameHeight {Number}
* @param tag {Any}
* @public
*/
Kiwifroot.Asset.prototype.loadCompiledSpriteSheet = function( params, tag ) {

	if( !params.id || !params.url || !params.frameWidth || !params.frameHeight ) {
		this.game.log.error( 'Not all the required parameters have been passed.', '#assets', '#spritesheet' );
		return;
	}

	var i,
		object, 
		file = new Kiwi.Files.TextureFile( this.game, {
			type: Kiwi.Files.File.SPRITE_SHEET, 
			url: this.getUrl( params.id + '.png' ), 
			key: params.id, 
			fileStore: this.game.fileStore,
			timeout: null,
			metadata: {
				frameWidth: params.frameWidth,
				frameHeight: params.frameHeight
			}
		} ),
		files = [];

	for( i = 0; i < params.url.length; i++ ) {

		object = {
			key: params.id + '-cell-' + i,
			url: this.getUrl( params.url[ i ] ),
			crossOrigin: "anonymous",
			timeout: null,
			state: this.game.states.current
		};

		if( this._loadViaXHR ) {
			object.xhrLoading = true;
		}

		files.push( this.game.loader.addImage( object ) );
	}


    this.game.fileStore.addFile( params.id, file );
	this._add( params.id, Kiwifroot.Asset.SPRITESHEET_COMPILED, params, tag );


	// When loading is complete, 
	// Compile the images into a singular one
	this.game.loader.onQueueComplete.addOnce( function() {

		var canvas = document.createElement('canvas'),
			ctx = canvas.getContext('2d'),
			i, data;

		canvas.width = params.frameWidth * files.length;
		canvas.height = params.frameHeight;

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		for( i = 0; i < files.length; i++) {

			data = files[i].data;

			if( !data ) {
				file.hasError = true;
				file.success = false;
				this.game.fileStore.removeFile( file.key );
				return;
			}

			ctx.drawImage( data, 
				0, 0, data.width, data.height, 
				i * params.frameWidth, 0, params.frameWidth, params.frameHeight );

		}

	    file.success = true;
	    file.hasError = false;
		file.data = canvas;

	}, this );

};

/**
*
* @method loadTextureAtlas
* @param params {Object}
*	@param params.id {Number}
* 	@param params.imageUrl {String}
*	@param params.jsonId {Number}
* 	@param params.jsonUrl {String}
* @param tag {Any}
* @public
*/
Kiwifroot.Asset.prototype.loadTextureAtlas = function( params, tag ) {

	if( !params.id || !params.imageUrl || !( params.jsonUrl || params.data) || !params.jsonId ) {
		this.game.log.error( 'Not all the required parameters have been passed.', '#assets', '#textureatlas' );
		return;
	}

	if( params.jsonUrl ) {

		this._add( params.id, Kiwifroot.Asset.TEXTUREATLAS, params, tag );
		this._add( params.jsonId, Kiwifroot.Asset.JSON, params, tag );

		var object = {
			textureAtlasKey: params.id,
			textureAtlasURL: this.getUrl( params.imageUrl ),
			jsonKey: params.jsonId,
			jsonURL: this.getUrl( params.jsonUrl ),
			crossOrigin: "anonymous",
 			timeout: null
		};

		if( this._loadViaXHR ) {
			object.xhrLoading = true;
		}

		//Load in the texture atlas and the image normally.
		this.game.loader.addTextureAtlas( object );

	} else if( params.data ) {
		//Load in the texture atlas but not the data
		this._loadTextureAtlasNotJson( params );
	}

};



/**
*
* @method _loadTextureAtlasNotJson
* @param params {Object}
*	@param params.id {Number}
* 	@param params.imageUrl {String}
*	@param params.jsonId {Number}
* 	@param params.data {Object}
* @param tag {Any}
* @private
*/
Kiwifroot.Asset.prototype._loadTextureAtlasNotJson = function( params, tag ) {

	//Create the Files
	var object = {
	        type: Kiwi.Files.File.TEXTURE_ATLAS,
	    	url: this.getUrl( params.imageUrl ), 
	    	fileStore: this.game.fileStore,
	    	key: params.id,
			crossOrigin: "anonymous",
 			timeout: null
    	};

	if( this._loadViaXHR ) {
		object.xhrLoading = true;
	}

    var tafile = new Kiwi.Files.TextureFile( this.game, object );
    var jsfile = new Kiwi.Files.DataFile( this.game, {
    		type: Kiwi.Files.File.JSON, 
    		url: this.getUrl( params.jsonId + '.json' ), 
    		key: params.jsonId,
    		fileStore: this.game.fileStore,
 			timeout: null
    	} );

    //Create the meta data.
    tafile.metadata = { jsonID: params.jsonId };
    jsfile.metadata = { imageID: params.id };

    //Add the TextureAtlas to the files to be loaded.
    this.game.loader.addFileToQueue( tafile );

    //Set the success of the load for the json file. This will stop it from loading.
    jsfile.data = JSON.stringify( params.data );
    jsfile.success = true;
    jsfile.hasError = false;

    //Add the JSON file to the filestore.
    this.game.fileStore.addFile( jsName, jsfile );
    
	this._add( params.id, Kiwifroot.Asset.TEXTUREATLAS, params, tag );
	this._add( params.jsonId, Kiwifroot.Asset.JSON, params, tag );

};


/**
*
* @method loadJson
* @param params {Object}
*	@param params.id {Number}
* 	@param params.url {String}
* @param tag {Any}
* @public
*/
Kiwifroot.Asset.prototype.loadJson = function( params, tag ) {

	if( !params.id || !(params.url || params.data) ) {
		this.game.log.error( 'Not all the required parameters have been passed.', '#assets', '#json' );
		return;
	}

	if( params.url ) {

		this._add( params.id, Kiwifroot.Asset.JSON, params, tag );
		this.game.loader.addJSON( {
			key: params.id, 
			url: this.getUrl( params.url ),
 			timeout: null
		} );

	} else {

 		var file = new Kiwi.Files.DataFile( this.game, {
 				type: Kiwi.Files.File.JSON, 
 				url: this.getUrl( params.id + '.json' ), 
 				key: params.id, 
 				fileStore: this.game.fileStore,
 				timeout: null
 			} );

        //Set the success of the load for the json.
        file.data = JSON.stringify( params.data );
        file.success = true;
        file.hasError = false;

        //Add the JSON file to the filestore.
        this.game.fileStore.addFile( params.id, file );
        this._add( params.id, Kiwifroot.Asset.JSON, params, tag );

	}

};


/**
*
* @method loadSound
* @param params {Object}
*	@param params.id {Number}
* 	@param params.url {String|Array}
* @param tag {Any}
* @public
*/
Kiwifroot.Asset.prototype.loadSound = function( params, tag ) {

	if( !params.id || !params.url ) {
		this.game.log.error( 'Not all the required parameters have been passed.', '#assets', '#sound' );
		return;
	}


	this._add( params.id, Kiwifroot.Asset.SOUND, params, tag );
	this.game.loader.addAudio( { 
		key: params.id, 
		url: this.getUrl( params.url ),
 		timeout: null,
		crossOrigin: "anonymous"
	} );

};

/**
* 
* @module Kiwifroot
*
*/

/**
* Core Component which contains useful methods when dealing with the game camera.
* This component is designed to be attached to States. Primarily the 'level' state.
* 
* @namespace Kiwifroot
* @class Camera
* @extends Kiwi.Component
* @constructor
* @param state {Kiwifroot.State}
* @param [params] {Object}
* 	@param [params.maxX=Infinity] {Number} The maximum value on the x-axis the camera can go to.
*	@param [params.maxY=Infinity] {Number} The maximum value on the y-axis the camera can go to.
*	@param [params.minX=-Infinity] {Number} The minimum value on the x-axis the camera can go to.
*	@param [params.minY=-Infinity] {Number} The minimum value on the y-axis the camera can go to.
* 
*/
Kiwifroot.Camera = function( state, params ) {

	params = params || {};

	Kiwi.Component.call( this, state, 'Camera' );

	/**
	*
	* @property state
	* @type Kiwi.State
	* @public
	*/
	this.state = this.owner;

	/**
	* The camera which this component changing.
	* @property camera
	* @type Kiwi.Camera
	* @default game.cameras.defaultCamera
	* @public
	*/
	this.camera = this.game.cameras.defaultCamera;

	/**
	* The transform of an object that the camera should lock on to.
	* @property _lockedTransform
	* @type Kiwi.Geom.Transform
	* @default null
	* @private
	*/
	this._lockedTransform = null;

	/**
	* Coordinates that the camera can be offset by when locked onto a transform.
	* @property _lockedOffset
	* @type Kiwi.Geom.Point
	* @private
	*/
	this._lockedOffset = new Kiwi.Geom.Point(0,0);

	/**
	* 
	* @property minX
	* @type Number
	* @default -Infinity
	* @public
	*/
	this.minX = -Infinity;

	/**
	* 
	* @property minY
	* @type Number
	* @default -Infinity
	* @public
	*/
	this.minY = -Infinity; 
    
	/**
	* 
	* @property maxX
	* @type Number
	* @default Infinity
	* @public
	*/
	this.maxX = Infinity;

	/**
	* 
	* @property maxY
	* @type Number
	* @default Infinity
	* @public
	*/
	this.maxY = Infinity; 

	/**
	* The cooridnates that the camera should pan to.
	* @property _pan
	* @type Kiwi.Geom.Point
	* @private
	*/
	this._pan = new Kiwi.Geom.Point( 0, 0 );

	/**
	* If the camera is currently panning or not.
	* @property panning
	* @type Boolean
	* @default false
	* @public
	*/
	this.panning = false;

	/**
	* The speed at which the camera should pan. In pixels per second.
	* @property panSpeed
	* @type Number
	* @default 100 
	* @public
	*/
	this.panSpeed = 100; //px per second

	/**
	* The current position of the camera
	* @property _pos
	* @type Kiwi.Geom.Point
	* @private
	*/
	this._pos = new Kiwi.Geom.Point( 0, 0 );

	/**
	* An offset set of coordinates to be applied to the camera.
	* @property offset
	* @type Kiwi.Geom.Point
	* @public
	*/
	this.offset = new Kiwi.Geom.Point( 0, 0 );

	this.applyDefaults( params );
};

Kiwi.extend( Kiwifroot.Camera, Kiwi.Component);


/**
*
* @method applyDefaults
* @param [params] {Object}
*	@param [params.x] {Number}
*	@param [params.y] {Number}
*	@param [params.offsetX] {Number}
*	@param [params.offsetY] {Number}
*	@param [params.panSpeed] {Number}
*	@param [params.minX] {Number}
*	@param [params.minY] {Number}
*	@param [params.maxX] {Number}
*	@param [params.maxY] {Number}
* @public
*/
Kiwifroot.Camera.prototype.applyDefaults = function( params ) {

	params = params || {};

	//Params
	params.x = params.x || this._pos.x;
	params.y = params.y || this._pos.y;
	params.offsetX = params.offsetX || this.offset.x;
	params.offsetY = params.offsetY || this.offset.y;
	params.panSpeed = params.panSpeed || this.panSpeed;

	//Apply Defaults
	this._pos.setTo( params.x, params.y );
	this.offset.setTo( params.offsetX, params.offsetY );
	this.panSpeed = params.panSpeed;

	if( typeof params.maxX !== "undefined") {
		this.maxX = params.maxX;
	}

	if( typeof params.maxY !== "undefined") {
		this.maxY = params.maxY; 
	}

	if( typeof params.minX !== "undefined") {
		this.minX = params.minX;
	}

	if( typeof params.minY !== "undefined") {
		this.minY = params.minY; 
	}

};

/**
* The cameras x location.
* @property x
* @type Number
* @readOnly
* @public
*/
Object.defineProperty( Kiwifroot.Camera.prototype, "x", {

	get: function () {
		return this._pos.x;
	},

	enumerable: true,

	configurable: true

});


/**
* The cameras y location.
* @property y
* @type Number
* @readOnly
* @public
*/
Object.defineProperty( Kiwifroot.Camera.prototype, "y", {

	get: function () {
		return this._pos.y;
	},

	enumerable: true,

	configurable: true

});


/**
* The scale on the x-axis for the camera.
* @property scaleX
* @type Number
* @default 1
* @public
*/
Object.defineProperty( Kiwifroot.Camera.prototype, "scaleX", {

	get: function () {
		return this.camera.transform.scaleX;
	},

	set: function(val) {
		this.camera.transform.scaleX = val;
	},

	enumerable: true,

	configurable: true

});


/**
* The scale on the y-axis for the camera.
* @property scaleY
* @type Number
* @default 1
* @public
*/
Object.defineProperty( Kiwifroot.Camera.prototype, "scaleY", {

	get: function () {
		return this.camera.transform.scaleY;
	},

	set: function(val) {
		this.camera.transform.scaleY = val;
	},

	enumerable: true,

	configurable: true

});

/**
* Method to quickly set the min/max values based on x, y, width, height values passed.
* @method setBoundary
* @param x {Number}
* @param y {Number}
* @param width {Number}
* @param height {Number}
* @public
*/
Kiwifroot.Camera.prototype.setBoundary = function(x, y, width, height) {

	this.minX = x;
	this.minY = y;

	this.maxX = x + width;
	this.maxY = y + height;

};

/**
* Pans the camera to a location passed. 
* You can decided if the camera should pan to the location right away, 
*
* This method will automatically 'unlock' the camera if you choose to pan right away.
* Otherwise you will have to manually 'unlock' the camera.
* 
* @method panTo
* @param x {Number} 
* @param y {Number} 
* @param [start=true] {Boolean} If panning should happen straight away. 
* @public
*/
Kiwifroot.Camera.prototype.panTo = function(x, y, start) {

	if( typeof start == "undefined") {
		this.panning = true;
	} else {
		this.panning = start;
	}

	//Unlock the camera if we are going to start panning.
	if( this.panning ) {
		this.unlock();
	}

	this._pan.setTo(x, y);

	if( this._pan.x === this._pos.x && this._pan.y === this._pos.y ) {
		this.panning = false;
	}

};


/**
* Snaps the camera to a set cooridnates passed.
* Unlocks and stops any panning currently occuring.
*
* @method snapTo
* @param x {Number}
* @param y {Number}
* @public
*/
Kiwifroot.Camera.prototype.snapTo = function(x, y) {

	this.panning = false;
	this.unlock();

	this._pos.x = x;
	this._pos.y = y;

};


/**
* Unlocks the camera. 
* @method unlock
* @public
*/
Kiwifroot.Camera.prototype.unlock = function() {
	this._lockedTransform = null;
};


/**
* Locks the camera to a transform passed.
* @method lock
* @param transform {Kiwi.Geom.Transform}
* @param offsetX {Number}
* @param offsetY {Number}
* @public
*/
Kiwifroot.Camera.prototype.lock = function( transform, offsetX, offsetY ) {

	offsetX = offsetX || 0;
	offsetY = offsetY || 0;

	this._lockedTransform = transform;
	this._lockedOffset.setTo( offsetX, offsetY );
};


/**
* Returns a boolean indicated whether or not the camera is currently 'locked' or not.
* @property locked
* @type Boolean
* @default false
* @public
*/
Object.defineProperty( Kiwifroot.Camera.prototype, "locked", {

	get: function () {
		return ( this._lockedTransform );
	},

	enumerable: true,

	configurable: true

});


/**
* If set, the camera will 'stick' to the transform.  
* 
* @property lockOn
* @type Kiwi.Geom.Transform
* @default null
* @public
*/
Object.defineProperty( Kiwifroot.Camera.prototype, "lockOn", {

	get: function () {
		return this._lockedTransform;
	},

	set: function(val) {
		this._lockedTransform = val;
		this._lockedOffset.setTo(0, 0);
	},

	enumerable: true,

	configurable: true

});



/**
*
* @method _calculateBoundary
* @private
*/
Kiwifroot.Camera.prototype._calculateBoundary = function() {

	this._pos.x = Kiwi.Utils.GameMath.clamp( this._pos.x, this.maxX, this.minX );
	this._pos.y = Kiwi.Utils.GameMath.clamp( this._pos.y, this.maxY, this.minY );

};


/**
*
* @method _calculatePan
* @private
*/
Kiwifroot.Camera.prototype._calculatePan = function() {

	if( this.panning ) {


		//Speed per milliseconds to per seconds
		var maxSpeedPerFrame = this.panSpeed * ( this.game.time.delta() / 1000 );
		var angle = this._pos.angleTo( this._pan );
		var moveDistance = Kiwi.Utils.GameMath.clamp( this._pos.distanceTo( this._pan ), -maxSpeedPerFrame, maxSpeedPerFrame);


		//Add the to position variable.
		this._pos.x += +(Math.cos( angle ) * moveDistance).toFixed( 1 );
		this._pos.y += +(Math.sin( angle ) * moveDistance).toFixed( 1 );


		//Are we there yet?
		if( Kiwi.Utils.GameMath.fuzzyEqual( this._pos.x|0, this._pan.x|0 ) &&
			Kiwi.Utils.GameMath.fuzzyEqual( this._pos.y|0, this._pan.y|0 ) ) {

			this.panning = false;
			this._pos.x = this._pos.x|0;
			this._pos.y = this._pos.y|0;

		} 

	}

};


/**
*
* @method _calculateLock
* @private
*/
Kiwifroot.Camera.prototype._calculateLock = function(){

	if( this.locked ) {

		this._pos.x = this._lockedTransform.x + this._lockedOffset.x;
		this._pos.y = this._lockedTransform.y + this._lockedOffset.y;

	}

};



/**
*
* @method postUpdate
* @public
*/
Kiwifroot.Camera.prototype.postUpdate = function() {

	this._calculateLock();
	this._calculatePan();
	this._calculateBoundary();

	this.camera.transform.x = -(this._pos.x + this.offset.x);
	this.camera.transform.y = -(this._pos.y + this.offset.y);

};



/**
*
* @method destroy
* @public
*/
Kiwifroot.Camera.prototype.destroy = function() {
	
	Kiwi.Component.prototype.destroy.call( this );

	//Reset the camera position
	this.camera.transform.x = 0;
	this.camera.transform.y = 0;
	this.camera.transform.scaleX = 1;
	this.camera.transform.scaleY = 1;

	delete this.state;

	delete this.camera;

	delete this._lockedTransform;

	delete this._pan;

	delete this._pos;

	delete this.offset;


};



/**
* 
* @module Kiwifroot
*
*/

/**
* Returns information regarding the fps of the game. 
* If the frame rate is stable, now much information it will collect each frame, e.t.c.
* 
* @namespace Kiwifroot
* @class FPSReadout
* @constructor
* @param game {Kiwifroot.Game}
* 
*/
Kiwifroot.FPSReadout = function(game) {

	/**
	* The game this FPSReadout is for.
	* @property game
	* @type Kiwi.Game
	* @public
	*/
	this.game = game;

	/**
	* The number of readings to contain at a single time
	* @property numReadings
	* @type number
	* @default 5
	* @public
	*/
	this.numReadings = 5;

	/**
	* The maximum difference that the fps can have can be to call the framerate stable.  
	* @property maxFlux
	* @type number
	* @default 3
	* @public
	*/
	this.maxFlux = 5;

	/**
	* Contains a list of time rates, which is used to check frame stablity and FPS
	* @property readings
	* @type Array
	* @public
	*/
	this.readings = [];

};


/**
* 
* @method objType
* @return {String} "FPSReadout"
* @public
*/
Kiwifroot.FPSReadout.prototype.objType = function() {
	return 'FPSReadout';
};


/**
* 
* @method update
* @public
*/
Kiwifroot.FPSReadout.prototype.update = function() {
	this.readings.push( Math.round( Math.min( 60 / this.game.time.rate, 60 ) ) );

	while( this.readings.length > this.numReadings ) {
		this.readings.shift();	
	}

	this.debug();
};


/**
* 
* @property fps
* @type number
* @readOnly
* @public
*/
Object.defineProperty(Kiwifroot.FPSReadout.prototype, "fps", {
	get: function() {
		return this.readings[this.readings.length-1];
	}
});


/**
* 
* @method normalizedFPS
* @type number
* @readOnly
* @public
*/
Object.defineProperty(Kiwifroot.FPSReadout.prototype, "normalizedFPS", {
	get: function() {

		var i = 0,
			sum = 0;

		while( i < this.readings.length ) {
			sum += this.readings[i];
 			i++;
		}

		return Math.round(sum / this.readings.length);
	}
});


/**
* 
* @method stable
* @type boolean
* @readOnly
* @public
*/
Object.defineProperty(Kiwifroot.FPSReadout.prototype, "stable", {
	get: function() {

 		var min, max, fps,
 			i = 0;

 		//Get the minimum and maximum readouts in the readings array.
 		while( i < this.readings.length ) {

 			fps = this.readings[i];

 			if( !min || min > fps) {
 				min = fps;
 			}

 			if( !max || max < fps ) {
 				max = fps;
 			}

 			i++;
 		}

 		//Return true/false based on the difference
 		return ( max - min <= this.maxFlux );

	}
});

/**
* 
* @method _getMembers
* @private
*/
Kiwifroot.FPSReadout.prototype._getMembers = function() {
	if( this.game.states.current ) {
		return this.game.states.current.members.length;
	}
	return 'null';
}

/**
* 
* @method debug
* @private
*/
Kiwifroot.FPSReadout.prototype.debug = function() {

	if( this.game.debugMode ) {

		var ctx = this.game.stage.dctx,
			y = 20,
			spacing = 5,
			textSize = 16;

		ctx.textAlign = "left";
		ctx.fillStyle = 'white';
		ctx.font = textSize.toString() + 'px Verdana';
		
		ctx.fillText( "State Members: " + this._getMembers(), 10, y );
		y += textSize + spacing;

		ctx.fillText( "Normalised FPS: " + this.normalizedFPS, 10, y );
		y += textSize + spacing;

		ctx.fillText( "FPS: " + this.fps, 10, y );
		y += textSize + spacing;


	}

}

/**
* 
* @module Kiwifroot
*
*/


/**
* The base class that is used when you create a new Game.
* Handles the creation of game wide managers and states used by the game.
* 
* @namespace Kiwifroot
* @class Game
* @extends Kiwi.Game
* @constructor
* @param params {Object}
*	@param params.jsonURL {String} The URL of the game json file to load.
*	@param [params.data] {Object} Game data. This can be used instead of the 'jsonURL'
*	@param [params.width=Kiwifroot.DEFAULTS.width] {Number} The width of the game. In pixels.
*	@param [params.height=Kiwifroot.DEFAULTS.height] {Number} The height of the game. In pixels.
* 	@param [params.elementId] {String} The ID of the dom element this game should go in.
* 	@param [params.name] {String} Name of the game.
*	@param [params.cocoon=false] {Boolean} If the game is to be executed with CocoonJS settings or not. 
* 	@param [params.taImageURL] {String}
*	@param [params.taJsonURL] {String}
* 
*/
Kiwifroot.Game = function( params ) {

	/**
	*
	* @property log
	* @type Kiwifroot.Log
	* @public
	*/
	this.log = Kiwi.Log;

	params = params || {};

	var gameOptions = this._getDefaultGameOptions( params );

	if( typeof params.name === "undefined") {
		params.name = Kiwifroot.DEFAULT.name;
	}

	/**
	* Executed when the game starts and all the states have been created.
	* @property onStart
	* @type Function
	* @public
	*/
	this._onStart = params.onStart;

	Kiwi.Game.call( this, params.elementId, params.name, null, gameOptions );

	/**
	* The URL of the webview to be loaded in. 
	*
	* @property webviewURL
	* @type String
	* @protected
	*/
	this.webviewURL = gameOptions.webviewURL;

	/**
	* 
	* @property debugMode
	* @type Boolean
	* @default false
	* @public
	*/ 
	this._debugMode = gameOptions.debugMode;

	/**
	* 
	* @property textureAtlas
	* @type Object
	* @public
	*/
	this.textureAtlas = {
	 	image: gameOptions.taImageURL,
		json: gameOptions.taJsonURL
	};


	/**
	*
	* @property info
	* @type Kiwifroot.Information
	* @public
	*/
	this.info = new Kiwifroot.Information( this, gameOptions, params );


	/**
	* 
	* @property fpsReadout
	* @type Kiwifroot.FPSReadout
	* @public
	*/
	this.fpsReadout = new Kiwifroot.FPSReadout( this );

	/**
	*
	* @property logReadout
	* @type Kiwifroot.LogReadout
	* @public
	*/
	this.logReadout = new Kiwifroot.LogReadout( this );

	/**
	*
	* @property asset
	* @type Kiwifroot.Asset
	* @public
	*/
	this.asset = new Kiwifroot.Asset( this, gameOptions );


	if( gameOptions.release ) {
		this.log.maxRecordings = 0;
		this.log.display = false;
		this.log.enabled = false;
		this.log.recording = false;
	}

	//Extend the kiwi plugins manager
	Kiwi.extend( this.pluginManager, Kiwifroot.PluginManagerExtension );

};

Kiwi.extend( Kiwifroot.Game, Kiwi.Game );


/**
* Returns an object literal for the gameoptions to be used with this Kiwifroot game.
* This method is only used when a game is instanated. 
* @method _getDefaultGameOptions
* @param params {Object} 
* @private
*/
Kiwifroot.Game.prototype._getDefaultGameOptions = function( params ) {

	var gameOptions = {};

	if( typeof params.width == "undefined" ) {
		gameOptions.width = Kiwifroot.DEFAULT.width;
	} else {
		gameOptions.width = params.width;
	}

	if( typeof params.height == "undefined" ) {
		gameOptions.height = Kiwifroot.DEFAULT.height;
	} else {
		gameOptions.height = params.height;
	}

	if( params.cocoon ) {
		gameOptions.deviceTarget = Kiwi.TARGET_COCOON;
		gameOptions.scaleType = Kiwi.Stage.SCALE_FIT;
	} else {
		gameOptions.deviceTarget = Kiwi.TARGET_BROWSER;
		gameOptions.scaleType = Kiwi.Stage.SCALE_NONE;
	}

	if( params.scaleType ) {
		gameOptions.scaleType = params.scaleType;
	}

	if( typeof params.plugins !== "undefined" ) {
		this.game.log.log('Plugins have to be added to the Kiwifroot game via their game JSON files/objects.');
		delete params.plugins;
	}

	if( typeof params.taImageURL === "undefined" ) {
		gameOptions.taImageURL = Kiwifroot.DEFAULT.taImageURL;
	} else {
		gameOptions.taImageURL = params.taImageURL;
	}

	if( typeof params.taJsonURL === "undefined" ) {
		gameOptions.taJsonURL = Kiwifroot.DEFAULT.taJsonURL;
	} else {
		gameOptions.taJsonURL = params.taJsonURL;
	}

	if( typeof params.debugMode == "undefined" ) {
		gameOptions.debugMode = Kiwifroot.DEFAULT.debugMode;
	} else {
		gameOptions.debugMode = params.debugMode;
	}

	if( typeof params.release === "undefined" ) {
		gameOptions.release = Kiwifroot.DEFAULT.release;
	} else {
		gameOptions.release = params.release;
	}

	if( typeof params.webviewURL === "undefined" ) {
		gameOptions.webviewURL = Kiwifroot.DEFAULT.webviewURL;
	} else {
		gameOptions.webviewURL = params.webviewURL;
	}

	if( typeof params.skipLaunch === "undefined" ) {
		gameOptions.skipLaunch = Kiwifroot.DEFAULT.skipLaunch;
	} else {
		gameOptions.skipLaunch = params.skipLaunch;
	}

	if( typeof params.splashOpenURL === "undefined" ) {
		gameOptions.splashOpenURL = Kiwifroot.DEFAULT.splashOpenURL;
	} else {
		gameOptions.splashOpenURL = params.splashOpenURL;
	}

	if( typeof params.loadLevelJsonAtStart === "undefined" ) {
		gameOptions.loadLevelJsonAtStart = Kiwifroot.DEFAULT.loadLevelJsonAtStart;
	} else {
		gameOptions.loadLevelJsonAtStart = params.loadLevelJsonAtStart;
	}

	if( typeof params.renderCanvas !== "undefined" && params.renderCanvas || Kiwifroot.DEFAULT.renderCanvas) {
		gameOptions.renderer = Kiwi.RENDERER_CANVAS;
	} //Default renderer is the kiwi default otherwise

	if( typeof params.assetLoadViaXHR === "undefined" ) {
		gameOptions.assetLoadViaXHR = Kiwifroot.DEFAULT.assetLoadViaXHR;
	} else {
		gameOptions.assetLoadViaXHR = params.assetLoadViaXHR;
	}

	if( typeof params.assetPrefix == "undefined" ) {
		gameOptions.assetPrefix = Kiwifroot.DEFAULT.assetPrefix;
	} else {
		gameOptions.assetPrefix = params.assetPrefix;
	}

	return gameOptions;

};


Object.defineProperty(Kiwifroot.Game.prototype, "debugMode", {
	set: function( val ) {

		this._debugMode = val;

		if( !this.stage.debugCanvas ) {
			if( val ) {
				this.stage.createDebugCanvas();
				this.stage.debugCanvas.style.display = "block";
			}
			return;
		}

		if( val ) {
			if( this.stage.debugCanvas.style.display === "none" )
				this.stage.toggleDebugCanvas();
		} else {
			if( this.stage.debugCanvas.style.display === "block" )
				this.stage.toggleDebugCanvas();
		}
	},

	get: function() {
		return this._debugMode;
	}
});
		


/**
* Executed when the DOM has been loaded.
* Boots game managers.
* 
* @method _start
* @private
*/
Kiwifroot.Game.prototype._start = function() {

	Kiwi.Game.prototype._start.call( this );

	if( this._debugMode ) {
		this.debugMode = true;
	}

	this._createStates();


};

/**
* 
* @method _loop
* @private
*/
Kiwifroot.Game.prototype._loop = function() {

	if( this.debugMode ) { 
		this.stage.clearDebugCanvas();
	}

	Kiwi.Game.prototype._loop.call( this );

	this.fpsReadout.update();

	this.logReadout.update();

}



/**
* 
* @method _createStates
* @private
*/
Kiwifroot.Game.prototype._createStates = function() {

	/**
	* 
	* @property launchState
	* @type Kiwifroot.States.Launch
	* @public
	*/ 
	this.launchState = new Kiwifroot.States.Launch();

	/**
	* 
	* @property preloaderState
	* @type Kiwifroot.States.Preloader
	* @public
	*/ 
	this.preloaderState = new Kiwifroot.States.Preloader();

	/**
	* 
	* @property levelState
	* @type Kiwifroot.States.Level
	* @public
	*/ 
	this.levelState = new Kiwifroot.States.Level();

	/**
	* 
	* @property errorState
	* @type Kiwifroot.States.Error
	* @public
	*/
	this.errorState = new Kiwifroot.States.Error();
	
	this.states.addState( this.errorState );
	this.states.addState( this.launchState, true );
	this.states.addState( this.preloaderState );
	this.states.addState( this.levelState );

	if( this._onStart && Kiwi.Utils.Common.isFunction( this._onStart ) ) {
		this._onStart( this );
	}

};

/**
* Storage location for global variables used in the Blockly Script Editor.
* @property GLOBAL_VARIABLES
* @type Object
* @public
*/
Kiwifroot.Game.prototype.GLOBAL_VARIABLES = {};

/**
* 
* @property userErrorMessage
* @type String
* @public
*/
Kiwifroot.Game.prototype.userErrorMessage = '';

/**
* 
* @property error
* @type String
* @public
*/
Kiwifroot.Game.prototype.error = null;

/**
* Halts the game and reports a nice userfacing error message.
* 
* @method reportError
* @param error {String}
* @param userMessage {String}
* @public
*/
Kiwifroot.Game.prototype.reportError = function( error, userMessage, errorType ) {

	this.error = error;
	this.userErrorMessage = userMessage || error;

	errorType = errorType || "ERR";
	this.userErrorMessage = errorType + ': ' + this.userErrorMessage;

	this.states.switchState( Kiwifroot.States.Error.NAME );

};

/**
* 
* @module Kiwifroot
*
*/


/**
* Stores the level and game information that can be, or is to be loaded. 
* 
* @namespace Kiwifroot
* @class Information
* @constructor
* 
*/
Kiwifroot.Information = function(game, gameOptions, params) {

	/**
	*
	* @property game
	* @type Kiwi.Game
	* @public
	*/
	this.game = game;

	/**
	* URL for the game json file to load in.
	* @property jsonURL
	* @type String
	* @public
	*/
	this.jsonURL = null;

	/**
	* The data contained within the game json file. 
	* @property data 
	* @type Object
	* @readOnly
	* @default null
	* @public
	*/
	this.data = null;
	
	/**
	* 
	* @property switchedLevelCount
	* @type Number
	* @public
	*/
	this.switchedLevelCount = 0;

	/**
	* A list of all the levels this game can have.
	* @property _levels
	* @type Array
	* @public
	*/
	this._levels = [];

	/**
	* The current level which is being displayed.
	* @property currentLevel
	* @type Object
	* @public
	*/
	this.currentLevel = null;

	/**
	* If the game should skip the splash screen animating in.
	* @property skipLaunch
	* @type Boolean
	* @public
	*/
	this.skipLaunch = gameOptions.skipLaunch;

	/**
	* If the splash screen should open the gamefroot URL when someone clicks it
	* @property splashOpenURL
	* @type Boolean
	* @public
	*/
	this.splashOpenURL = gameOptions.splashOpenURL;

	/**
	* If all the level json should be attempt to load at the start of the game.
	* @property loadLevelJsonAtStart
	* @type Boolean
	* @public
	*/
	this.loadLevelJsonAtStart = gameOptions.loadLevelJsonAtStart;

	/**
	* If any sound effects played should be muted or not. 
	* Property kept here to maintain state across levels. 
	* Should only be accessed via the Sound component on States.
	* 
	* @property muteEffects
	* @type Boolean
	* @private
	*/
	this._muteEffects = false;

	/**
	* If the background track should be muted or not.
	* Property kept here to maintain state across levels. 
	* Should only be accessed via the Sound component on States.
	* 
	* @property muteSounds
	* @type Boolean
	* @private
	*/
	this._muteBackground = false;

	if( typeof params.jsonURL !== "undefined" ) {
		this.jsonURL = params.jsonURL; 
	}

	if( typeof params.data !== "undefined" ) {
		this.assignData( params.data );
	} 

	if( !this.data && !this.jsonURL ) {
		this.game.log.error( 'Kiwifroot can\'t continue without a json file to load (jsonURL) or data defining the game.', '#gamejson', '#error' ); 
	}
};

/**
* Returns a list of the current levels.
* @property levels
* @type Array
* @readOnly 
* @public
*/
Object.defineProperty( Kiwifroot.Information.prototype , "levels", {

	get: function() {
		return this._levels;
	}

});


/**
* The index number of the current level in the 'levels' array.
* @property currentLevelNumber
* @type Number
* @readOnly
* @public
*/
Object.defineProperty( Kiwifroot.Information.prototype, "currentLevelNumber", {

	get: function () {
		return this._levels.indexOf( this.currentLevel );
	},

	enumerable: true,

	configurable: true

});


/**
* The number of levels on the game.
* @property numLevels
* @type Number
* @readOnly
* @public
*/
Object.defineProperty( Kiwifroot.Information.prototype, "numLevels", {

	get: function () {
		return this._levels.length;
	},

	enumerable: true,

	configurable: true

});


/**
* Creates a new level for this instance of Kiwifroot. 
* Each level needs to have an 'id' which should be unique (uniqueness is not checked)
*
* And must have either a url (which points to a json file) which contains the information about that level,
* Or an object which defines the information about the level.
* 
* @method createLevel
* @param id {Number} 
* @param params {Object} 
* 	@param params.url {String} The URL of the json object to load. 
*	@param params.data {Object} The information about the level.
* @return {Kiwifroot.Level}
* @public
*/
Kiwifroot.Information.prototype.createLevel = function( params ) {

	params = params || {};

	if( !params.id || !( params.url || params.data ) ) {
		this.game.log.error( 'No level URL, object specified, or id passed. Level not created.', '#leveljson' );
		return null;
	}

	var level = new Kiwifroot.Level( this.game, params.id, params );
	
	this._levels.push( level );

	return level;

};


/**
* Switches to the id of a level passed. 
* 
* @method switchLevel
* @param id {Number} 
* @return {Boolean} If the level will be switched to or not.
* @public
*/
Kiwifroot.Information.prototype.switchLevel = function( id ) {

	for( var i = 0; i < this._levels.length; i++ ) {
		
		if( id == this._levels[ i ].id ) {
			return this.changeLevel( this._levels[ i ] );
		}

	}

	this.game.log.warn( 'Level could not be found.', '#level' );
	return false;
};

/**
* 
* @method switchLevelByNumber
* @param num {Number} 
* @return {Boolean} If the level will be switched to or not.
* @public
*/
Kiwifroot.Information.prototype.switchLevelByNumber = function( num ) {

	var level = this._levels[ num ];

	if( level ) {
		return this.changeLevel( level );
	} 


	this.game.log.warn( 'Level with a number of ' + num + ' could not be found.', '#level' );
	return false;
};

/**
* Switches to the next level. If at the end, then this loops back to the first level
* 
* @method nextLevel
* @return {Boolean} If the level will be switched to or not.
* @public
*/
Kiwifroot.Information.prototype.nextLevel = function( id ) {

	var index = this._levels.indexOf( this.currentLevel );

	if( index == -1 ) {
		this.game.log.error( 'Odd... The currentLevel could not be found', '#level' );
		return false;
	}

	var level = this._levels[ index + 1 ];

	if( !level ) {
		this.game.log.warn( 'Next level not found. Loading in the first level.', '#level' );
		level = this._levels[ 0 ];
	}

	return this.changeLevel( level );
};

/**
* Switches the game to the level passed.
* 
* @method changeLevel
* @param level {Kiwi.Level} The level to be switched to.
* @return {Boolean} If the level will be switched to or not.
* @public
*/
Kiwifroot.Information.prototype.changeLevel = function( level ) {

	//If we cannot continue if the game is loading.
	if( this.game.states.current.name == Kiwifroot.States.Preloader.NAME ) {
		this.game.log.error( 'Cannot change levels whilst loading a level.', '#level' );
		return false;
	}

	if( this.game.states.switchState( Kiwifroot.States.Preloader.NAME ) ) {

		if( this.currentLevel ) {
			this.currentLevel.reset();
		}

		this.switchedLevelCount ++;
		this.currentLevel = level;
		return true;
	}

};


/**
* Assigns a object passed to the data method.
* Validates the object passed and then processes the data
*
* @method assignData 
* @param data {Object}
* @public
*/
Kiwifroot.Information.prototype.assignData = function( rawData ) {

	this.data = this.validateData( rawData );

	this.processData();

};


/**
* Validates a data object. Returns a new object literal with the update data.
* @method validateData
* @param data {object}
* @return data {object}
* @public
*/
Kiwifroot.Information.prototype.validateData = function( data ) {

	this.game.log.log( 'Validating game data passed.', '#game' );
	
	var newData = {};


	//Game Name
	if( typeof data.name !== "undefined" ) {
		newData.name = data.name;
	} else {
		this.game.log.log( 'Game name not found. Setting to default value.', '#game' );
		newData.name = Kiwifroot.DEFAULT.name;
	}


	//Game Dimensions
	newData.width = data.width || this.game.stage.width;
	newData.height = data.height || this.game.stage.height;


	//Levels
	if( typeof data.levels !== "undefined" ) {

		//If the levels were not in an array format, then make them so.
		if( !Kiwi.Utils.Common.isArray( data.levels ) ) {
			data.levels = [ data.levels ];
		}

		//Validate the levels array quickly. 
		for(var i = 0; i < data.levels.length; i++) {
			if( !data.levels[ i ].id || !( data.levels[ i ].url || data.levels[ i ].data) ) {
				this.game.log.error( 'Level @ index ' + i + ' is missing a required property.', '#game', '#level' );
			}
		}

		newData.levels = data.levels;

	} else {
		this.game.log.warn( 'No levels have been specified in the game json. Are you sure this is correct?', '#game', '#level' );
		newData.levels = [];
	}

	if( typeof data.firstLevel === "undefined" ) {

		//If we have a level that we can assign one to.
		if( newData.levels.length > 0 && newData.levels[0].id ) {
			newData.firstLevel = newData.levels[0].id;
			this.game.log.log( 'Default level to assigned to Level ID: ' + newData.firstLevel, '#game', '#level' );

		} else {
			this.game.log.log( 'No levels found. Cannot assign default level.', '#game', '#level' );

		}

	} else {
		
		newData.firstLevel = data.firstLevel;

	}

	//Assets 
	if( typeof data.assets === "undefined" ) {
		newData.assets = [];
		this.game.log.log( 'No game assets found.', '#game', '#assets' );
	} else {
		newData.assets = data.assets;
	}



	//Plugins
	if( typeof data.plugins === "undefined" ) {
		newData.plugins = [];
		this.game.log.log( 'No plugins found for this game.', '#plugins' );
	} else {
		
		if( !Kiwi.Utils.Common.isArray( data.plugins) ) {
			this.game.log.warn( 'Plugins parameter not in the appropriate format. Skipping parameter.', '#plugins' );
			data.plugins = [];
		}

		newData.plugins = data.plugins;
	}



	return newData;
	
};


/**
* Processes the 'data' property.
* @method processData
* @private
*/
Kiwifroot.Information.prototype.processData = function() {
	
	//Read the data object. 

	//Resize the game if its sizing differs from the current setting.
	if( this.game.stage.width !== this.data.width || this.game.stage.height !== this.data.height ) {
		this.game.log.log( 'Resizing game to: ' + this.data.width + 'x' + this.data.height, '#resizing' );
		this.game.stage.resize( this.data.width, this.data.height );
	}

	//Create the levels.
	for( var i = 0; i < this.data.levels.length; i++ ) {

		this.createLevel( this.data.levels[ i ] );

	}

	
};




/**
* 
* @module Kiwifroot
*
*/

/**
* Definition of a Level in Kiwifroot. 
* 
* @namespace Kiwifroot
* @class Level
* @constructor
* 
*/
Kiwifroot.Level = function( game, id, params ) {

	params = params || {};

	/**
	* 
	* @property game
	* @type Kiwi.Game
	* @public
	*/
	this.game = game;

	/**
	* The unique id of this level.
	* @property id
	* @type Number
	* @public
	*/
	this.id = id;

	/**
	* The location of the levels json file.
	* @property url
	* @type String
	* @public
	*/
	this.url = params.url || '';

	/**
	* The level object. This is usually the data located in the 'url' property. 
	* This property should never directly be set. Instead use the 'assignData' method.
	*
	* @property _data
	* @type Object
	* @default null
	* @private
	*/
	this._data = null;

	/**
	* The name of this level.
	* @property name
	* @type String
	* @public
	*/
	this.name = params.name || null;

	/**
	* If the data for this level should be kept after is has been loaded, or deleted. 
	* Delete the data can save memory, whilst keeping it can help with load times.
	* @property keep
	* @type Boolean
	* @default false
	* @public
	*/
	this.keep = params.keep || false;

	if( typeof params.data !== "undefined" ) {
		this.assignData( params.data );
	}

	//Set the 'keep' parameter to true if we were passed data AND the keep parameter was false  
	if( typeof params.data !== "undefined" && typeof params.keep == "undefined" ) {
		this.keep = true;
	}

};


/**
* If the Level has data or not. 
* Used to indicate if the level data needs to be loaded from the URL or not.
* 
* @property hasData
* @type Boolean
* @readOnly
* @public
*/
Object.defineProperty( Kiwifroot.Level.prototype, "hasData", {

	get: function () {
		return ( this._data );
	},

	enumerable: true,

	configurable: true

});

/**
* Returns the level data. These properties should be READ ONLY.
* 
* @property data
* @type Object
* @readOnly
* @public
*/
Object.defineProperty( Kiwifroot.Level.prototype, "data", {

	get: function () {
		return this._data;
	},

	enumerable: true,

	configurable: true

});

/**
* Assigns an object literal passed to the data object.
* The object passed is validated first. 
*
* @method assignData
* @param data {Object}
* @public
*/
Kiwifroot.Level.prototype.assignData = function( data ) {
	
	this._data = this.validate( data );

	if( !this.name ) {
		this.name = this._data.name;
	}

};


/**
* Validates a object literal passed and returns a fresh object
* containing correct values.
*
* @method validate
* @param data {Object}
* @return {Object}
* @private
*/
Kiwifroot.Level.prototype.validate = function( data ) {

	var newData = {};
	this.game.log.log( 'Validating data for Level ID ' + this.id, '#level' );
	

	newData.name = data.name || 'Level ' + this.id;

	//Validate Background Color

	newData.color = this._validateBackgroundColor( data.color );
	newData.gameObjects = this._validateObjects( data.gameObjects );
	newData.music = null;
	newData.keepMusicDuringSwitch = false;
	newData.definitions = this._validateObjects( data.definitions );

	if( typeof data.music !== "undefined" ) {
		newData.music = data.music;
	}

	if( typeof data.keepMusicDuringSwitch !== "undefined" ) {
		newData.keepMusicDuringSwitch = data.keepMusicDuringSwitch;
	} 


	//Validate Assets 
	if( typeof data.assets == "undefined" ) {
		this.game.log.log( 'No assets found', '#level', '#assets' );
		data.assets = [];
	}

	if( !Kiwi.Utils.Common.isArray( data.assets ) ) {
		data.assets = [data.assets];
	}

	newData.assets = data.assets;


	//Validate Systems
	if( typeof data.systems == "undefined" ) {
		newData.systems = {};
	} else {
		newData.systems = data.systems;
	}


	//Loading Screen
	if( typeof data.loader == "undefined" ) {
		this.game.log.log( 'Default loader object added to level.', '#level', '#loader' );
		data.loader = {};
	}

	newData.loader = {}; 
	newData.loader.color = this._validateBackgroundColor( data.loader.color, { r: 0, g: 0, b: 0, a: 1} );
	newData.loader.gameObjects = this._validateObjects( data.loader.gameObjects );
	newData.loader.music = null;
	newData.loader.definitions = this._validateObjects( data.loader.definitions );

	newData.loader.bar = data.loader.bar || {};
	if(typeof newData.loader.bar.visible === "undefined" ){
		newData.loader.bar.visible = true;
	}
	newData.loader.bar.tags = newData.loader.bar.tags || [ 'loading-bar' ];
	newData.loader.bar.addToTop = newData.loader.bar.addToTop || false;


	if( typeof data.loader.music !== "undefined" ) {
		newData.loader.music = data.loader.music;
	}

	if( typeof data.loader.keepMusicDuringSwitch !== "undefined" ) {
		newData.loader.keepMusicDuringSwitch = data.loader.keepMusicDuringSwitch;
	} else {
		newData.loader.keepMusicDuringSwitch = false;
	}

	if( typeof data.camera == "undefined") {
		data.camera = {}; 
	}

	newData.camera = {
		x: data.camera.x || 0,
		y: data.camera.y || 0,
		offsetX: data.camera.offsetX || 0,
		offsetY: data.camera.offsetY || 0
	};

	if( typeof data.camera.minX !== "undefined" ) {
		newData.camera.minX = data.camera.minX;
	} else {
		newData.camera.minX = -Infinity;
	}

	if( typeof data.camera.minY !== "undefined" ) {
		newData.camera.minY = data.camera.minY;
	} else {
		newData.camera.minY = -Infinity;
	}

	if( typeof data.camera.maxX !== "undefined" ) {
		 newData.camera.maxX = data.camera.maxX;
	} else {
		newData.camera.maxX = Infinity;
	}

	if( typeof data.camera.maxY !== "undefined" ) {
		 newData.camera.maxY = data.camera.maxY;
	} else {
		newData.camera.maxY = Infinity;
	}
	
	return newData;	
};


/**
*
* @method _validateBackgroundColor
* @param color {Object}
* @return {Object}
* @public
*/
Kiwifroot.Level.prototype._validateBackgroundColor = function( color, defaultColor ) {

	if( !defaultColor ) {
		var valid = { r: 255, g: 255, b: 255, a: 1 };
	} else {
		var valid = defaultColor;
	}

	
	if( typeof color === "undefined") {
		color = {};
	}

	if( typeof color.r !== "undefined" ) {
		valid.r = color.r;
	}

	if( typeof color.g !== "undefined" ) {
		valid.g = color.g;
	}

	if( typeof color.b !== "undefined" ) {
		valid.b = color.b;
	}

	if( typeof color.a !== "undefined" ) {
		valid.a = color.a;
	}

	return valid;

};


/**
* 
* @method _validateObjects
* @param objects {Array}
* @return {Array}
* @public
*/
Kiwifroot.Level.prototype._validateObjects = function( objects ) {

	var co, 
		i = 0;
	
	if( typeof objects == "undefined") {
		this.game.log.warn( 'No objects found', '#level');
		objects = [];
	}

	if( !Kiwi.Utils.Common.isArray( objects ) ) {
		objects = [ objects ];
	}

	return objects;

};



/**
* Called when this level is about to be switched off of. Deletes the level data.
* @method reset
* @public
*/
Kiwifroot.Level.prototype.reset = function() {
	
	if( !this.keep ) {
		delete this._data;
	}

};

/**
* 
* @module Kiwifroot
*
*/

/**
* Returns information regarding the logs users make. 
* 
* @namespace Kiwifroot
* @class LogReadout
* @constructor
* @param game {Kiwifroot.Game}
* 
*/
Kiwifroot.LogReadout = function(game) {

	/**
	* The game this FPSReadout is for.
	* @property game
	* @type Kiwi.Game
	* @public
	*/
	this.game = game;

	/**
	* The number of readings to contain at a single time
	* @property numReadings
	* @type number
	* @default 5
	* @public
	*/
	this.numReadings = 10;

	/**
	* 
	* @property logs
	* @type Array
	* @public
	*/
	this.logs = [];

};


/**
* 
* @method objType
* @return {String} "LogReadout"
* @public
*/
Kiwifroot.LogReadout.prototype.objType = function() {
	return 'LogReadout';
};


/**
* 
* @method update
* @public
*/
Kiwifroot.LogReadout.prototype.update = function() {
	this.debug();
};

/**
* 
* @method record
* @public
*/
Kiwifroot.LogReadout.prototype.record = function( message, tag ) {
	this.logs.push( message );
	this.game.log.log( message, tag );

	while( this.logs.length > this.numReadings ) {
		this.logs.shift();
	}
};

/**
* 
* @method debug
* @private
*/
Kiwifroot.LogReadout.prototype.debug = function() {

	if( this.game.debugMode ) {

		var ctx = this.game.stage.dctx,
			y = 20,
			spacing = 5,
			textSize = 16,
			i = this.logs.length;

		ctx.textAlign = "right";
		ctx.fillStyle = 'white';
		ctx.font = textSize.toString() + 'px Verdana';

		while( i-- ) {
			ctx.fillText( this.logs[i], this.game.stage.debugCanvas.width - 10, y );
			y += textSize + spacing;
		}

	}

}
/**
* 
* @module Kiwifroot
* 
*/


/**
* Essentually an alias to the Kiwi Plugin manager. 
* @namespace Kiwifroot
* @class PluginManager
* @extends Kiwi.PluginManager
* 
*/ 
Kiwifroot.PluginManager = Kiwi.PluginManager;


Kiwifroot.PluginManagerExtension = {

};


/**
* 
* @module Kiwifroot
*
*/

/**
* A System added to the Level when it is created. 
* Scripts can add callbacks to various signals which will fire them periodically.
* 
* @namespace Kiwifroot
* @class UpdateSystem
* @extends Kiwi.Component
* @constructor
* @param state {Kiwifroot.State}
*
*/
Kiwifroot.UpdateSystem = function( state ) {

	Kiwi.Component.call( this, state, 'RobotSystem' );

	/**
	*
	* @property onPreUpdate
	* @type Kiwi.Signal
	* @public
	*/
	this.onPreUpdate = new Kiwi.Signal();

	/**
	*
	* @property onUpdate
	* @type Kiwi.Signal
	* @public
	*/
	this.onUpdate = new Kiwi.Signal();

	/**
	*
	* @property onPostUpdate
	* @type Kiwi.Signal
	* @public
	*/
	this.onPostUpdate = new Kiwi.Signal();

};

Kiwi.extend( Kiwifroot.UpdateSystem, Kiwi.Component);
	

/**
*
* @method preUpdate
* @public
*/
Kiwifroot.UpdateSystem.prototype.preUpdate = function() {

	this.onPreUpdate.dispatch();

};

/**
*
* @method update
* @public
*/
Kiwifroot.UpdateSystem.prototype.update = function() {

	this.onUpdate.dispatch();

};


/**
*
* @method postUpdate
* @public
*/
Kiwifroot.UpdateSystem.prototype.postUpdate = function() {

	this.onPostUpdate.dispatch();

};



/**
*
* @method destroy
* @public
*/
Kiwifroot.UpdateSystem.prototype.destroy = function() {
	
	Kiwi.Component.prototype.destroy.call( this );

	this.onPreUpdate.dispose();
	delete this.onPreUpdate;

	this.onUpdate.dispose();
	delete this.onUpdate;

	this.onPostUpdate.dispose();
	delete this.onPostUpdate;

};



/**
*
* @module Kiwifroot
* @submodule GameObjects
*/

/**
*
* @namespace Kiwifroot.GameObjects
* @class Group
* @constructor
* @param state {Kiwi.State}
* @param [params] {Object}
*
*/
Kiwifroot.GameObjects.Group = function( state, params ) {

	params = params || {};

	Kiwi.Group.call( this, state );

	if( !Kiwi.Utils.Common.isUndefined( params.x ) ) 			this.x = params.x;
	if( !Kiwi.Utils.Common.isUndefined( params.y ) ) 			this.y = params.y; 
	if( !Kiwi.Utils.Common.isUndefined( params.anchorPointX ) ) this.anchorPointX = params.anchorPointX;
	if( !Kiwi.Utils.Common.isUndefined( params.anchorPointY ) ) this.anchorPointY = params.anchorPointY;
	if( !Kiwi.Utils.Common.isUndefined( params.rotation ) ) 	this.rotation = params.rotation;
	if( !Kiwi.Utils.Common.isUndefined( params.scaleX ) ) 		this.scaleX = params.scaleX;
	if( !Kiwi.Utils.Common.isUndefined( params.scaleY ) ) 		this.scaleY = params.scaleY;

};

Kiwi.extend( Kiwifroot.GameObjects.Group, Kiwi.Group );

/**
*
* @module Kiwifroot
* @submodule GameObjects
*/

/**
*
* @namespace Kiwifroot.GameObjects
* @class Sprite
* @constructor
* @param state {Kiwi.State}
* @param texture {Kiwi.Textures.TextureAtlas}
* @param [params] {Object}
*
*/
Kiwifroot.GameObjects.Sprite = function(state, texture, params ) {

	params = params || {};

	Kiwi.GameObjects.StaticImage.call( this, state, texture );

	if( !Kiwi.Utils.Common.isUndefined( params.x ) ) 			this.x = params.x;
	if( !Kiwi.Utils.Common.isUndefined( params.y ) ) 			this.y = params.y; 
	if( !Kiwi.Utils.Common.isUndefined( params.anchorPointX ) ) this.anchorPointX = params.anchorPointX;
	if( !Kiwi.Utils.Common.isUndefined( params.anchorPointY ) ) this.anchorPointY = params.anchorPointY;
	if( !Kiwi.Utils.Common.isUndefined( params.rotation ) ) 	this.rotation = params.rotation;
	if( !Kiwi.Utils.Common.isUndefined( params.scaleX ) ) 		this.scaleX = params.scaleX;
	if( !Kiwi.Utils.Common.isUndefined( params.scaleY ) ) 		this.scaleY = params.scaleY;
	if( !Kiwi.Utils.Common.isUndefined( params.opacity ) ) 		this.alpha = params.opacity;
	if( !Kiwi.Utils.Common.isUndefined( params.alpha ) ) 		this.alpha = params.alpha;
	if( !Kiwi.Utils.Common.isUndefined( params.cellIndex ) ) 	this.cellIndex = params.cellIndex;

};

Kiwi.extend( Kiwifroot.GameObjects.Sprite, Kiwi.GameObjects.StaticImage );

/**
*
* @module Kiwifroot
* @submodule GameObjects
*/

/**
*
* @namespace Kiwifroot.GameObjects
* @class StaticImage
* @constructor
* @param state {Kiwi.State}
* @param texture {Kiwi.Textures.TextureAtlas}
* @param [params] {Object}
*
*/
Kiwifroot.GameObjects.StaticImage = function(state, texture, params ) {

	params = params || {};

	Kiwi.GameObjects.StaticImage.call( this, state, texture );

	if( !Kiwi.Utils.Common.isUndefined( params.x ) )  			this.x = params.x;
	if( !Kiwi.Utils.Common.isUndefined( params.y ) ) 			this.y = params.y; 
	if( !Kiwi.Utils.Common.isUndefined( params.anchorPointX ) ) this.anchorPointX = params.anchorPointX;
	if( !Kiwi.Utils.Common.isUndefined( params.anchorPointY ) ) this.anchorPointY = params.anchorPointY;
	if( !Kiwi.Utils.Common.isUndefined( params.rotation ) )  	this.rotation = params.rotation;
	if( !Kiwi.Utils.Common.isUndefined( params.scaleX ) )  		this.scaleX = params.scaleX;
	if( !Kiwi.Utils.Common.isUndefined( params.scaleY ) )  		this.scaleY = params.scaleY;
	if( !Kiwi.Utils.Common.isUndefined( params.opacity ) ) 		this.alpha = params.opacity;
	if( !Kiwi.Utils.Common.isUndefined( params.alpha ) ) 		this.alpha = params.alpha;
	if( !Kiwi.Utils.Common.isUndefined( params.cellIndex ) )  	this.cellIndex = params.cellIndex;

};

Kiwi.extend( Kiwifroot.GameObjects.StaticImage, Kiwi.GameObjects.StaticImage );

/**
*
* @module Kiwifroot
* @submodule GameObjects
*/

/**
*
* @namespace Kiwifroot.GameObjects
* @class Text
* @constructor
* @param state {Kiwi.State}
* @param text {String}
* @param [params] {Object}
*
*/
Kiwifroot.GameObjects.Text = function(state, text, params ) {

	params = params || {};

	Kiwi.GameObjects.Textfield.call( this, state, text );

	if( !Kiwi.Utils.Common.isUndefined( params.x ) )			this.x = params.x;
	if( !Kiwi.Utils.Common.isUndefined( params.y ) )			this.y = params.y;
	if( !Kiwi.Utils.Common.isUndefined( params.color ) ) 		this.color = params.color;
	if( !Kiwi.Utils.Common.isUndefined( params.fontSize ) ) 	this.fontSize = params.fontSize;
	if( !Kiwi.Utils.Common.isUndefined( params.fontWeight ) ) 	this.fontWeight = params.fontWeight;
	if( !Kiwi.Utils.Common.isUndefined( params.textAlign ) ) 	this.textAlign = params.textAlign;
	if( !Kiwi.Utils.Common.isUndefined( params.fontFamily ) )	this.fontFamily = params.fontFamily;

	if( !Kiwi.Utils.Common.isUndefined( params.anchorPointX ) ) this.anchorPointX = params.anchorPointX;
	if( !Kiwi.Utils.Common.isUndefined( params.anchorPointY ) ) this.anchorPointY = params.anchorPointY;
	if( !Kiwi.Utils.Common.isUndefined( params.rotation ) ) 	this.rotation = params.rotation;
	if( !Kiwi.Utils.Common.isUndefined( params.scaleX ) ) 		this.scaleX = params.scaleX;
	if( !Kiwi.Utils.Common.isUndefined( params.scaleY ) ) 		this.scaleY = params.scaleY;
	if( !Kiwi.Utils.Common.isUndefined( params.opacity ) ) 		this.alpha = params.opacity;
	if( !Kiwi.Utils.Common.isUndefined( params.alpha ) ) 		this.alpha = params.alpha;

};

Kiwi.extend( Kiwifroot.GameObjects.Text, Kiwi.GameObjects.Textfield );

/**
* 
* @module Kiwifroot
* @submodule Input
* 
*/

/**
* 
* @class Binding
* @constructor
* @param signal {Kiwi.Signal}
* @param compare {Function}
*/
Kiwifroot.Input.Binding = function( signal, filter, context ) {

	/**
	* 
	* @property signal
	* @type Kiwi.Signal
	* @public
	*/
	this.signal = signal;

	/**
	*
	* @property filter
	* @type Function
	* @public
	*/
	this.filter = filter || function() { return true };

	/**
	*
	* @property context
	* @type Any
	* @public
	*/
	this.context = context;

	this._event = null;
};

/**
* 
* @method shutDown
* @public
*/
Kiwifroot.Input.Binding.prototype.shutDown = function() {
	delete this.callback;
	delete this.filter;
	delete this.signal;
	delete this.context;
};

/**
* 
* @module Kiwifroot
* @submodule Input
* 
*/

/**
* 
* @class Event
* @constructor
* @param name {String}
* @param [pressSignals] {Array}
*/
Kiwifroot.Input.Event = function( name, signals ) {

	/**
	*
	* @property name
	* @type String
	* @public
	*/
	this.name = name;

	/**
	* 
	* @property onEvent
	* @type Kiwi.Signal
	* @public
	*/
	this.onEvent = new Kiwi.Signal();

	/**
	* 
	* @property _bindings 
	* @type Kiwi.Signal
	* @public
	*/
	this._bindings = [];

	/**
	*
	* @property lastFired 
	* @type Number
	* @public
	*/
	this.lastFired = 0;


	if( signals && Kiwi.Utils.Common.isArray( signals ) ) {

		for( var i = 0; i < signals.length; i++ ) {
			this.add( signals[ i ].signal, signals[ i ].filter, signals[ i ].context );
		}

	}

};


/**
* 
* @method add
* @param signal {Kiwi.Signal}
* @param [filter] {Function}
* @public
*/
Kiwifroot.Input.Event.prototype.add = function( signal, filter, context ) {

	var binding = new Kiwifroot.Input.Binding( signal, filter, context );
	this._bindings.push( binding );


	var that = this;
	binding._event = function() {
		if( binding.filter.apply( binding.context, arguments ) ) {
			that._event();
		}
	};

	binding.signal.add( binding._event, this );

};


/**
* @method remove
* @param signal {Kiwi.Signal}
* @public
*/
Kiwifroot.Input.Event.prototype.remove = function( signal ) {

	var index = this._bindings.indexOf( signal );

	if( index ) {
		//Remove Event.
		binding.signal.remove( binding._event, this );
		signal.shutDown();
		this._bindings.splice( index, 1 ); 
	}

};


/**
* 
* @method _pressed
* @private
*/
Kiwifroot.Input.Event.prototype._event = function() {

	this.lastFired = Date.now();
	this.onEvent.dispatch();

};

/**
* 
* @method shutDown
* @public
*/
Kiwifroot.Input.Event.prototype.shutDown = function() {
	if( this.onEvent ) this.onEvent.dispose();

	delete this.onEvent;

	if( this._bindings ) {
		for(var i = 0; i < this._bindings.length; i++) {
			this._bindings[ i ].shutDown();
		}
	}
	delete this._bindings;


};

/**
* 
* @module Kiwifroot
* @submodule Input
* 
*/

/**
* 
* @class Handler
* @constructor
* 
*/
Kiwifroot.Input.Handler = function( state ) {

	/**
	* 
	* @property state
	* @type Kiwi.State
	* @public
	*/
	this.state = state;

	/**
	*
	* @property game
	* @type Kiwi.Game
	* @public
	*/
	this.game = this.state.game;

	/**
	*
	* @property events
	* @type Array
	* @public
	*/
	this.events = [];

};

/**
* 
* @method get
* @param name {String}
* @return {Kiwifroot.Input.Event}
* @public
*/
Kiwifroot.Input.Handler.prototype.get = function( name ) {

	for( var i = 0; i < this.events.length; i++) {
		if( this.events[ i ].name === name ) {
			return this.events[ i ];
		}
	}

	return null;
};

/**
* 
* @method add
* @param name {String}
* @param signals {Array}
* @return Kiwifroot.Input.Event
* @public
*/
Kiwifroot.Input.Handler.prototype.add = function( name, signals ) {

	var event = new Kiwifroot.Input.Event( name, signals );

	this.events.push( event );

	return event;

};

/**
* 
* @method removeByName
* @param name {String}
* @retur {Boolean}
* @public
*/
Kiwifroot.Input.Handler.prototype.removeByName = function( name ) {

	for( var i = 0; i < this.events.length; i++) {

		if( this.events[ i ].name === name ) {
			return this.remove( this.events[ i ] );
		}

	}

	return false;

};

/**
* 
* @method remove
* @param button {Kiwi.Input.Event}
* @return {Boolean}
* @public
*/
Kiwifroot.Input.Handler.prototype.remove = function( button ) {

	var index = this.events.indexOf( button );

	if( index !== -1 ) {
		button.shutDown();
		this.events.splice( index, 1 );
		return true;
	}

	return false;
};

/**
*
* @method destroy
* @public
*/
Kiwifroot.Input.Handler.prototype.destroy = function() {

	delete this.state;

	delete this.game;

	for( var i = 0; i < this.events.length; i++ ) {
		this.events[ i ].shutDown();
	}

	this.events = [];

};

/**
* 
* @module Object
* @submodule Core
*
*/

/**
* 
* @namespace Kiwifroot.Object.Core
* @static
* @extends Kiwifroot.Object.Group
* @class Group
* 
*/
Kiwifroot.Object.Core.Group = {

	/**
	*
	* @property type
	* @default 'gameobject'
	* @type String
	* @static
	* @public
	*/
	type: Kiwifroot.Plugins.GAMEOBJECT,
	
	/**
	* 
	* @property gameobject
	* @type String
	* @default 'group'
	* @static
	* @public
	*/
	gameobject: 'group'

};



/**
*
* @method add
* @param state {Kiwi.State}
* @param params {Object}
* 	@param params.type {string}
* @param parent {Kiwi.Entity}
* @static
* @public
*/
Kiwifroot.Object.Core.Group.add = function( state, params, parent, saved ) {

	if( !this.validate( params ) ) {
		state.game.log.error( 'Could not create a ' + this.type + ' object. Parameters passed were not valid.' );
		return null;
	}
	
	//Create the Group
	var go = new Kiwifroot.GameObjects.Group( state, params );

	//Create the gameobjects inside of it, and add them to the group
	state.objects.createFromArray( params.gameObjects, go, saved );

	//Add the group to its parent
	parent.addChild( go );

	return go;

};


/**
*
* @method validate
* @param params {Object} 
* @return {Boolean}
* @static
* @public
*/
Kiwifroot.Object.Core.Group.validate = function( params ) {

	if( typeof params.gameObjects == "undefined" || !Kiwi.Utils.Common.isArray( params.gameObjects ) ) {
		params.gameObjects = [];
	}

	if( typeof params.x === "undefined" ) {
		params.x = 0;
	}

	if( typeof params.y === "undefined" ) {
		params.y = 0;
	}

	return true;
};

/**
* 
* @module Object
* @submodule Core
*
*/

/**
* 
* @namespace Kiwifroot.Object.Core
* @static
* @extends Kiwifroot.Object.Creator
* @class Sprite
* 
*/
Kiwifroot.Object.Core.Sprite = {

	/**
	*
	* @property type
	* @default 'gameobject'
	* @type String
	* @static
	* @public
	*/
	type: Kiwifroot.Plugins.GAMEOBJECT,
	
	/**
	* 
	* @property gameobject
	* @type String
	* @default 'sprite'
	* @static
	* @public
	*/
	gameobject: 'sprite'

};



/**
*
* @method add
* @param state {Kiwi.State}
* @param params {Object}
* 	@param params.type {string}
* @param parent {Kiwi.Entity}
* @static
* @public
*/
Kiwifroot.Object.Core.Sprite.add = function( state, params, parent ) {

	if( !this.validate( params ) ) {
		state.game.log.error( 'Could not create a ' + this.type + ' object. Parameters passed were not valid.' );
		return null;
	}

	if( !state.textures[ params.imageId ] ) {
		state.game.log.error( "Image id '" + params.imageId + "' not found."  );
		return null;
	}
	
	var go = new Kiwifroot.GameObjects.Sprite( state, state.textures[ params.imageId ], params );
	

	parent.addChild( go );

	return go;

};


/**
*
* @method validate
* @param params {Object} 
* @return {Boolean}
* @static
* @public
*/
Kiwifroot.Object.Core.Sprite.validate = function( params ) {

	if( typeof params.imageId == "undefined" ) {
		return false;
	}

	if( typeof params.x === "undefined" ) {
		params.x = 0;
	}

	if( typeof params.y === "undefined" ) {
		params.y = 0;
	}

	return true;
};

/**
* 
* @module Object
* @submodule Core
*
*/

/**
* 
* @namespace Kiwifroot.Object.Core
* @static
* @extends Kiwifroot.Object.Creator
* @class StaticImage
* 
*/
Kiwifroot.Object.Core.StaticImage = {

	/**
	*
	* @property type
	* @default 'gameobject'
	* @type String
	* @static
	* @public
	*/
	type: Kiwifroot.Plugins.GAMEOBJECT,
	
	/**
	* 
	* @property gameobject
	* @type String
	* @default 'static-image'
	* @static
	* @public
	*/
	gameobject: 'static-image'

};




/**
*
* @method add
* @param state {Kiwi.State}
* @param params {Object}
* 	@param params.type {string}
* @param parent {Kiwi.Group}
* @static
* @public
*/
Kiwifroot.Object.Core.StaticImage.add = function( state, params, parent ) {

	if( !this.validate( params ) ) {
		state.game.log.error( 'Could not create a ' + this.type + ' object. Parameters passed were not valid.' );
		return null;
	}

	if( !state.textures[ params.imageId ] ) {
		state.game.log.error( "Image id '" + params.imageId + "' not found."  );
		return null;
	}
	
	var go = new Kiwifroot.GameObjects.StaticImage( state, state.textures[ params.imageId ], params );

	
	parent.addChild( go );

	return go;

};


/**
*
* @method validate
* @param params {Object} 
* @return {Boolean}
* @static
* @public
*/
Kiwifroot.Object.Core.StaticImage.validate = function( params ) {

	if( typeof params.imageId == "undefined" ) {
		return false;
	}

	if( typeof params.x === "undefined" ) {
		params.x = 0;
	}

	if( typeof params.y === "undefined" ) {
		params.y = 0;
	}

	return true;
};

/**
* 
* @module Object
* @submodule Core
*
*/

/**
* 
* @namespace Kiwifroot.Object.Core
* @static
* @extends Kiwifroot.Object.Creator
* @class Text
* 
*/
Kiwifroot.Object.Core.Text = {

	/**
	*
	* @property type
	* @default 'gameobject'
	* @type String
	* @static
	* @public
	*/
	type: Kiwifroot.Plugins.GAMEOBJECT,
	
	/**
	* 
	* @property gameobject
	* @type String
	* @default 'text'
	* @static
	* @public
	*/
	gameobject: 'text'

};




/**
*
* @method add
* @param state {Kiwi.State}
* @param params {Object}
* 	@param params.type {string}
* @param parent {Kiwi.Group}
* @static
* @public
*/
Kiwifroot.Object.Core.Text.add = function( state, params, parent ) {

	if( !this.validate( params ) ) {
		state.game.log.error( 'Could not create a ' + this.type + ' object. Parameters passed were not valid.' );
		return null;
	}
	
	var go = new Kiwifroot.GameObjects.Text( state, params.text, params );
	
	
	parent.addChild( go );

	return go;

};


/**
*
* @method validate
* @param params {Object} 
* @return {Boolean}
* @static
* @public
*/
Kiwifroot.Object.Core.Text.validate = function( params ) {

	if( typeof params.text == "undefined" ) {
		return false;
	}

	if( typeof params.x === "undefined" ) {
		params.x = 0;
	}

	if( typeof params.y === "undefined" ) {
		params.y = 0;
	}

	return true;
};

/**
* 
* @module Object
* @submodule Core
*
*/

/**
*
* @namespace Kiwifroot.Object.Core
* @static
* @extends Kiwifroot.Object.Creator
* @class Tilemap
* 
*/
Kiwifroot.Object.Core.Tilemap = {

	/**
	*
	* @property type
	* @default 'gameobject'
	* @type String
	* @static
	* @public
	*/
	type: Kiwifroot.Plugins.GAMEOBJECT,

	/**
	* 
	* @property gameobject
	* @type String
	* @default 'tilemap'
	* @static
	* @public
	*/
	gameobject: 'tilemap'

};



/**
*
* @method add
* @param state {Kiwi.State}
* @param params {Object}
* 	@param params.type {string}
* @param parent {Kiwi.Group}
* @static
* @public
*/
Kiwifroot.Object.Core.Tilemap.add = function( state, params, parent ) {

	if( !this.validate( params ) ) {
		state.game.log.error( 'Could not create a ' + this.type + ' object. Parameters passed were not valid.' );
		return null;
	}

	if( !state.textures[ params.imageId ] || !state.data[ params.jsonId ] ) {
		state.game.log.error( "An assets could not be found. Object not created." );
		return null;
	}
	
	var go = new Kiwi.GameObjects.Tilemap.TileMap( state, params.jsonId.toString(), state.textures[ params.imageId ] );


	for( var i = 0; i < go.layers.length; i++) {
		go.layers[ i ].x += params.x;
		go.layers[ i ].y += params.y;
		go.layers[ i ].alpha = params.alpha;
		go.layers[ i ].rotation = params.rotation;
		go.layers[ i ].scaleX = params.scaleX;
		go.layers[ i ].scaleY = params.scaleY;
		go.layers[ i ].visible = params.visible;

		if( parent ) {
			parent.addChild( go.layers[ i ] );
		}
	}

	return go.layers;

};


/**
*
* @method validate
* @param params {Object} 
* @return {Boolean}
* @static
* @public
*/
Kiwifroot.Object.Core.Tilemap.validate = function( params ) {

	if( typeof params.imageId == "undefined" ||
		typeof params.jsonId == "undefined" ) {
		return false;
	}

	if( typeof params.x === "undefined" ) {
		params.x = 0;
	}

	if( typeof params.y === "undefined" ) {
		params.y = 0;
	}

	if( typeof params.opacity !== "undefined" || typeof params.alpha !== "undefined") {
		params.alpha = params.opacity || params.alpha;
	} else {
		params.alpha = 1;
	}

	if( typeof params.visible === "undefined" ) {
		params.visible = true;
	}

	if( typeof params.scaleX === "undefined" ) {
		params.scaleX = 1;
	}

	if( typeof params.scaleY === "undefined" ) {
		params.scaleY = 1;
	}

	if( typeof params.rotation === "undefined" ) {
		params.rotation = 0;
	}

	return true;
};

/**
* 
* @module Kiwifroot
* @submodule Object
*
*/

/**
*
* 
* @namespace Kiwifroot.Object
* @class Manager
* @constructor
* @param state {Kiwifroot.State}
* 
*/
Kiwifroot.Object.Manager = function( state ) {

	/**
	* 
	* @property state
	* @type Kiwi.State
	* @public
	*/
	this.state = state;

	/**
	* 
	* @property game
	* @type Kiwi.Game
	* @public
	*/
	this.game = this.state.game;

	/**
	* 
	* @property creators
	* @type Object
	* @public
	*/
	this.creators = {};

	/**
	* Objects types that can be used created.
	* 
	* @property objects
	* @type Object
	* @public
	*/
	this.objects = {};

	//Add the default creators
	var c; 
	for( var index in Kiwifroot.Object.Core ) {
		c = Kiwifroot.Object.Core[ index ];

		if( c.gameobject ) {
			this.creators[ c.gameobject ] = c;
		}
	}

	//Create the plugins 
	this.assignCreatorsFromPlugins();

	/**
	* 
	* @property components
	* @type Kiwifroot.Components.Manager
	* @public
	*/
	this.component = new Kiwifroot.Components.Manager( this.state );

	/**
	* 
	* @property onCreate
	* @type Kiwi.Signal
	* @public
	*/
	this.onCreate = new Kiwi.Signal();

};



/**
* 
* @method creatorExists
* @param type {String}
* @return
*/ 
Kiwifroot.Object.Manager.prototype.creatorExists = function( type ) {
	return ( this.creators[ type ] );
};



/**
*
* @method assignCreatorsFromPlugins
* @private
*/
Kiwifroot.Object.Manager.prototype.assignCreatorsFromPlugins = function() {

	//Get the plugins
	var plugin, i, j, kfp;

	for( i = 0; i < this.game.pluginManager._plugins.length; i++ ) {

		plugin = Kiwi.Plugins[ this.game.pluginManager._plugins[ i ] ];

		if( !plugin ) {
			this.game.log.warn( "Nothing found on 'Kiwi.Plugins." + this.game.pluginManager._plugins[ i ] + "' namespace." );
			continue;
		}  


		//Is it a system?
		if( !plugin.kiwifrootPlugins || !Kiwi.Utils.Common.isArray( plugin.kiwifrootPlugins ) ) {
			//Skip to the next plugin...
			continue;
		}
		

		for( j = 0; j < plugin.kiwifrootPlugins.length; j++ ) {

			kfp = plugin.kiwifrootPlugins[ j ];

			if( kfp.type !== Kiwifroot.Plugins.GAMEOBJECT ) {
				continue;
			}

			if( !kfp.name || !kfp.namespace ) {
				this.game.log.warn( "A GameObject on the '" + plugin.name + "' Plugin is missing a 'name' or 'namespace' property." );
				continue;
			}

			if( this.creatorExists( kfp.name ) ) {
				this.game.log.warn( "Object creator for '" + kfp.name + "' already exists." );
				continue;
			}

			this.creators[ kfp.name ] = kfp.namespace;

		}

	}

};


/**
*
* @method hasCreator
* @param type {String}
* @return {Boolean}
* @public
*/
Kiwifroot.Object.Manager.prototype.hasCreator = function( type ) {
	return ( this.creators[ type ] );
};


/**
* 
* @method exists
* @param name {Any}
* @return {Boolean}
* @public
*/
Kiwifroot.Object.Manager.prototype.exists = function( name ) {

	return !( Kiwi.Utils.Common.isUndefined( this.objects[ name ] ) );

};


/**
* 
* @method get
* @param name {Any}
* @return {Object}
* @public
*/
Kiwifroot.Object.Manager.prototype.get = function( name ) {

	if( this.exists( name ) ) {
		return this.objects[ name ];
	}

	return null;

};


/**
* Saves a object definition (prefab in gamefroot context) to be used later on.
* 
* 
* @method createDefinition
* @param object {Object}
* 	@param object.type {String} 
*	@param object.name {String} The class that this gameobject should be assigned.
* @return {Boolean}
* @public 
*/
Kiwifroot.Object.Manager.prototype.createDefinition = function( object ) {

	if( typeof object === "undefined" ) {
		this.game.log.error( 'The object passed is empty.' );
		return false;
	}

	if( !object.type ) {
		this.game.log.error( 'The definition requires a `type`.' );
		return false;
	}

	if( !this.hasCreator( object.type ) ) {
		this.game.log.warn( "'" + object.type + "' game object types are not supported." );
		return false;
	} 


	//If the object does not have an name, then assign it one.
	//The name is the type that it abides by.
	if( Kiwi.Utils.Common.isUndefined( object.name ) ) {
		if( typeof object.class !== "undefined" ) {
			object.name = object.class;
		} else {
			this.game.log.error( "Definition does not contain a 'name'. Could not create a definition for it." );
			return false;
		}
	}

	if( typeof object.id !== "undefined" ) {
		this.game.log.warn('Definitions cannot be assigned as ID, as they should be UNIQUE.')
		delete object.id;
	}

	if( this.exists( object.name ) ) {
		this.game.log.error( "Definition with the name of '" + object.name + "' already exists." );
		return false;
	} else {
		this.objects[ object.name ] = object;
		return true;
	}

}

/**
* Creates a new 'definition' or default set of parameters for a object.
* 
* @method create
* @param object {Object}
* 	@param object.type {String} 
*	@param [object.id] {String} The unique id of this object.
*	@param [object.name|object.class] {String} The class that this gameobject should be assigned. Is automatically assigned on if undefined.
* 	@param [object.tags] {Array} Any tags this object should have by default
* @param [parent=this.state] {Kiwi.Group}
* @param [save] {Boolean}
* @param [executeBoot] {Boolean}
* @return {Kiwi.Entity}
* @public
*/
Kiwifroot.Object.Manager.prototype.create = function( object, parent, save, executeBoot ) {

	if( typeof object === "undefined" ) {
		this.game.log.error( 'A game object is undefined.' );
		return null;
	}

	if( !object.type ) {
		this.game.log.error( 'GameObject cannot be created without a type.' );
		return null;
	}

	if( !this.hasCreator( object.type ) ) {
		this.game.log.warn( "'" + object.type + "' game object types are not supported." );
		return null;
	} 


	//If the object does not have an name, then assign it one.
	//The name is the type that it abides by. (Class in gamefroot context)
	if( Kiwi.Utils.Common.isUndefined( object.name ) ) {
		if( object.class ) {
			object.name = object.class;
		} else {
			object.name = this.game.rnd.uuid();
		}
	}


	//Do we need to save this object to be used later? 
	//Not wanted/needed for objects created via robots
	if( save ) {

		if( this.exists( object.name ) ) {
			this.game.log.warn( "An Object with the name of '" + object.name + "' already exists. Creating the object, but others like it cannot be created." );
		} else {
			this.objects[ object.name ] = object;
		}

	}
  
	//Add the object
	var go = this.creators[ object.type ].add( this.state, object, parent || this.state, save );

	if( !go ) {
		this.game.log.warn( "'" + object.type + "' could not be created." );
		return null;
	} 

	//Object Creators can return an array of game objects they have created.
	if( Kiwi.Utils.Common.isArray( go ) ) {

		for( var i = 0; i < go.length; i++ ) {

			if( object.id ) go[ i ].id = object.id;
			go[ i ].name = object.name;

			if( object.tags && Kiwi.Utils.Common.isArray( object.tags ) ) {
				go[ i ].addTag.apply( go[ i ], object.tags );
			}

			this.component.addTo( go[ i ], object, executeBoot );
		}

	} else {

		//Add the components to the gameobject
		if( object.id ) go.id = object.id;
		go.name = object.name;

		if( object.tags && Kiwi.Utils.Common.isArray( object.tags ) ) {
			go.addTag.apply( go, object.tags );
		}

		this.component.addTo( go, object, executeBoot );

	}

	delete object.id; //Delete the id (if one existed). As it needs to be unique

	//Dispatch GameObject Created Event
	this.onCreate.dispatch( go );

	return go;
};


/**
* Creates a list of gameobjects from an array. 
* 
* If a item in the array contains a 'defined' flag, 
* then its creation will be based off of a pre-existing object creator.
* 
* @method createFromArray
* @param objectList {Array}
* @param parent {Kiwi.Entity}
* @param [save] {Boolean}
* @param [executeBoot] {Boolean}
* @public
*/
Kiwifroot.Object.Manager.prototype.createFromArray = function( objectList, parent, save, executeBoot ) {

	if( typeof objectList == "undefined" ) {
		this.game.log.error( 'The Array is undefined. Cannot generate game objects.' );
		return;
	}

	var i, obj, name, go, gameobjects = [];

	for( i = 0; i < objectList.length; i++ ) {
		obj = objectList[ i ];

		if( obj.defined ) {

			name = obj.name || obj.class;
			if( !name ) {
				this.game.log.warn("Object marked as 'defined' by does not contain a `name` or `class` property. Skipping creation.");
				continue;
			}

			go = this.createFromName( name, parent, obj, executeBoot );

		} else {

			go = this.create( obj, parent, save, executeBoot );

		}

		if( go ) {
			gameobjects.push( go );
		}

	}

	return gameobjects;

};


/**
* Creates a gameobject from a name specified. 
*
* @method createFromName
* @param name {String}
* @param parent {Kiwi.Entity}
* @param [overridingParams] {Object} Any parameters that should be changed from the defintion. Note: You cannot change the `components`.
* @param [executeBoot] {Boolean}
* @return {Kiwi.Entity}
* @public
*/
Kiwifroot.Object.Manager.prototype.createFromName = function( name, parent, overridingParams, executeBoot ) {

	if( typeof parent === "undefined" ) {
		parent = this.state;
	}

	if( !this.exists( name ) ) {
		this.game.log.warn( 'Object could not be found.' );
		return null;
	}

	if( typeof overridingParams === "undefined" ) {
		return this.create( this.objects[ name ], parent, false );
	} 

	var params = {};
	for( var index in this.objects[ name ] ) {
		params[ index ] = this.objects[ name ][ index ];
	}

	for( var index in overridingParams ) {
		if( index === "components" ) continue;
		params[ index ] = overridingParams[ index ];
	}

	return this.create( params, parent, false, executeBoot );

};


/**
*
* @method destroy
* @public
*/
Kiwifroot.Object.Manager.prototype.destroy = function() {

	delete this.game;

	delete this.state;

	delete this.creators;

	this.component.destroy();

};

/**
* 
* @module Kiwifroot
* @submodule Physics
* 
*/

/**
* 
* 
* @namespace Kiwifroot.Physics
* @class ArcadeComponent
* @constructor
* @param state {Kiwifroot.States.Level}
* 
*/
Kiwifroot.Physics.ArcadeComponent = function( entity, box ) {

	Kiwi.Components.ArcadePhysics.call( this, entity, box );

	if( !this.owner.state.components.hasComponent( 'ArcadeSystem' ) ) {
		this.game.log.warn( 'Arcade Physics: Could not find the Arcade Physics system.' );
		return;
	}

	//Get the arcade physics system
	this._immovable = false;
	
	/**
	*
	* @property system
	* @type Kiwifroot.Physics.ArcadeSystem
	* @public
	*/
	this.system = this.owner.state.components.getComponent( 'ArcadeSystem' );

	/**
	* If this arcade component is 'enabled' and so is being tracked by System.
	* Being enabled means that collisions, velocities, e.t.c will be applied.
	* If set to false then collisions, velocities (and all other phsyics things) will not apply.
	* 
	* @property _enabled
	* @type Boolean
	* @default true
	* @private
	*/
	this._enabled = false;
	this.enabled = true;

	/**
	* 
	* @property layer
	* @type number
	* @default 0 
	* @public
	*/
	this.layer = 0;

	/**
	* 
	* @property gravity
	* @type boolean
	* @default true
	* @public
	*/
	this.gravity = true;

	/**
	* Contains the hitbox of the owner for this frame.
	* @property _hitbox
	* @type Kiwi.Geom.Rectangle
	* @private
	*/
	this._hitbox = null;

	/**
	* The frame number of when the hitbox was last created/recieved. 
	* @property _lastHitbox
	* @type Number
	* @private
	*/
	this._lastHitbox = null;

	/**
	* 
	* @property canGoLeft
	* @type Boolean
	* @default true
	* @private
	*/
	this.canGoLeft = true;

	/**
	* 
	* @property canGoRight
	* @type Boolean
	* @default true
	* @private
	*/
	this.canGoRight = true;

	/**
	* 
	* @property canGoUp
	* @type Boolean
	* @default true
	* @private
	*/
	this.canGoUp = true;

	/**
	* 
	* @property canGoDown
	* @type Boolean
	* @default true
	* @private
	*/
	this.canGoDown = true;

};

Kiwi.extend( Kiwifroot.Physics.ArcadeComponent, Kiwi.Components.ArcadePhysics );

Object.defineProperty( Kiwifroot.Physics.ArcadeComponent.prototype, 'immovable', {
	get: function() {
		return this._immovable;
	}, 
	set: function(val) {

		if( this._immovable === val ) return;

		this._immovable = val;

		if( this.enabled ) {
			this.system.moveTo( this, this._immovable );
		}
	}
});

/**
* Returns the current hitbox for this Component. 
* This method will ensure that a hitbox is only generated once each frame.
*
* @method getHitbox
* @type Number
* @public
*/
Kiwifroot.Physics.ArcadeComponent.prototype.getHitbox = function() {

	if( this.system._passNumber !== this._lastHitbox ) {
		this._hitbox = this.box.worldHitbox;
		this._lastHitbox = this.system._passNumber;
	}

	return this._hitbox;
}


/**
* If this arcade component is 'enabled' and so is being tracked by System.
* Being enabled means that collisions, velocities, e.t.c will be applied.
* If set to false then collisions, velocities (and all other phsyics things) will not apply.
* 
* @property enabled
* @type Boolean
* @default true
* @public
*/
Object.defineProperty(Kiwifroot.Physics.ArcadeComponent.prototype, 'enabled', {
	
	get: function() {
		return this._enabled;
	},
	set: function( val ) {

		if( val ) {
			//If not currently enabled then add to the system
			if( !this._enabled ) this.system.register( this, this.immovable );
		} else {
			//If currently enabled, then remove from the system
			if( this._enabled ) this.system.deregister( this );
		}

		this._enabled = val;
	}
});


/**
* 
* @method updateMotion
* @public
*/
Kiwifroot.Physics.ArcadeComponent.prototype.updateMotion = function() {

	if( this.moves ) {

		Kiwi.Components.ArcadePhysics.prototype.updateMotion.call( this );

	}

};


/**
* 
* @method update
* @public
*/
Kiwifroot.Physics.ArcadeComponent.prototype.update = function() {
	//Override the normal update method, as we will let the system handle that now
};


/**
* 
* @method destroy
* @public
*/
Kiwifroot.Physics.ArcadeComponent.prototype.destroy = function() {

	this.enabled = false;

	Kiwi.Components.ArcadePhysics.prototype.destroy.call( this );

	delete this.system;


};

/**
* 
* @module Kiwifroot
* @submodule Physics
* 
*/

/**
* 
* 
* @namespace Kiwifroot.Physics
* @class ArcadeSystem
* @constructor
* @param state {Kiwifroot.States.Level}
* 
*/
Kiwifroot.Physics.ArcadeSystem = function( state ) {

	Kiwi.Component.call( this, state, 'ArcadeSystem' );

	/**
	* 
	* @property components
	* @type Array
	* @private
	*/
	this.components = [];

	/**
	* 
	* @property gravity
	* @type Kiwi.Geom.Point
	* @public
	*/
	this.gravity = new Kiwi.Geom.Point( 0, 0 );

	/**
	* 
	* @property gravityDelta_
	* @type Kiwi.Geom.Point
	* @private
	* @since 0.11.3
	*/
	this.gravityDelta_ = new Kiwi.Geom.Point( 0, 0 );

	/**
	* 
	* @property passes
	* @type number
	* @default 1
	* @public
	*/
	this.passes = 1;

	/**
	* If it should use the speed governor for updating motion or not. 
	* When true, the speed will update to match
	* 
	* @property useSpeedGovernor
	* @type Boolean
	* @default false
	* @public
	*/
	this.useSpeedGovernor = false;

	/**
	* The rate which should be applied to the physics system 
	* when the speed governor is NOT enabled.
	* 
	* @property updateRate
	* @type number
	* @default 1 / 60
	* @public
	*/
	this.updateRate = 1 / 60;

	/**
	* 
	* @property onCollision
	* @type Kiwi.Signal
	* @public
	*/
	this.onCollision = new Kiwi.Signal();

	/**
	* 
	* @property _rectA
	* @type Kiwi.Geom.Rectangle
	* @private
	*/
	this._rectA = new Kiwi.Geom.Rectangle();

	/**
	* 
	* @property _rectB
	* @type Kiwi.Geom.Rectangle
	* @private
	*/
	this._rectB = new Kiwi.Geom.Rectangle();

	/**
	*
	* @property _passNumber
	* @type number
	* @private
	*/
	this._passNumber = 0;

	/**
	* If ArcadePhysics should be enabled entirely or not.
	* @property enabled
	* @type Boolean
	* @default true
	* @public
	*/
	this.enabled = true;

};

Kiwi.extend( Kiwifroot.Physics.ArcadeSystem, Kiwi.Component );


/**
*
* @method configure
* @param params {Any} 
* @public
*/
Kiwifroot.Physics.ArcadeSystem.prototype.configure = function( params ) {

	if( params.gravity ) {
		
		if( typeof params.gravity.x !== "undefined" ) this.gravity.x = params.gravity.x;	
		if( typeof params.gravity.y !== "undefined" ) this.gravity.y = params.gravity.y;
	
	}

	if( typeof params.passes !== "undefined" ) {
		this.passes = params.passes;
	}

	if( typeof params.updateRate !== "undefined" ) {
		this.updateRate = params.updateRate;
	}

	if( typeof params.useSpeedGovernor !== "undefined") {
		this.useSpeedGovernor = params.useSpeedGovernor;
	}

	if( typeof params.enabled !== "undefined" ) {
		this.enabled = params.enabled;
	}

	if( typeof params.enabled !== "undefined" ) {
		this.enabled = params.enabled;
	}

};


/**
* Registers a ArcadePhysics component and it will be tracked for collisions, e.t.c.
* Does NOT check to see if that component has already been registered before or not.
*
* @method register
* @param component {Kiwifroot.Physics.ArcadeComponent} 
* @Param [front] {Boolean} 
* @public
*/
Kiwifroot.Physics.ArcadeSystem.prototype.register = function( component, front ) {

	if( front ) {
		this.components.unshift( component );
	} else {
		this.components.push( component );
	}
};


/**
* Removes a component from this System. 
* That component will no longer have its motion updated, or have collisions resolved.
* 
* @method deregister
* @param component {Kiwifroot.Physics.ArcadeComponent}
* @return {Boolean}
* @public
*/
Kiwifroot.Physics.ArcadeSystem.prototype.deregister = function( component ) {

	var index = this.components.indexOf( component );

	if( index > -1 ) {

		this.components.splice( index, 1 );
		return true;
	}

	return false;

};

/**
* 
* @method moveTo
* @param component {Kiwifroot.Physics.ArcadeComponent}
* @param [front] {Boolean}
* @public
*/
Kiwifroot.Physics.ArcadeSystem.prototype.moveTo = function( component, front ) {

	this.deregister( component );
	this.register( component, front );

};


/**
*
* @method preUpdate
* @public
*/
Kiwifroot.Physics.ArcadeSystem.prototype.preUpdate = function() {

	if( !this.enabled ) {
		return;
	}

	//Setup the update rate to take time into account
	var prevInterval = Kiwi.Components.ArcadePhysics.updateInterval;

	if( this.useSpeedGovernor ) {
		Kiwi.Components.ArcadePhysics.updateInterval = ( this.game.time.delta() * this.game.time.clock.rate ) / this.game.time.clock.units;
	} else {
		Kiwi.Components.ArcadePhysics.updateInterval = this.updateRate;
	}

	//Update Motion
	this.updateMotion();

	//Resolve Collisions 
	var i = 0;

	while( ++i <= this.passes ) {
		this.resolveCollisions();
		this._passNumber++;
	}

	Kiwi.Components.ArcadePhysics.updateInterval = prevInterval;


};

/**
* 
* @method postUpdate
* @private
*/
Kiwifroot.Physics.ArcadeSystem.prototype.postUpdate = function() {

	if( !this.enabled ) {
		return;
	}

	var i = 0, c;
	while( i < this.components.length ) {

		c = this.components[ i ];
		this.debugMode( c );

		c.wasTouching = this.touching;
		c.touching = Kiwi.Components.ArcadePhysics.NONE;

		i++;
	}

};

/**
* 
* @method debugMode
* @param componentA
* @param componentB
* @param tileMap {Boolean}
* @private
*/
Kiwifroot.Physics.ArcadeSystem.prototype.debugMode = function( obj ) {

	if( this.game.debugMode ) { 

		if( obj.owner.objType() === 'TileMapLayer' ) {

			var tiles = obj.owner.getCollidableTiles();
			var ct = this.game.cameras.defaultCamera.transform;

			this.game.stage.dctx.strokeStyle = "black";

			for( var i = 0; i < tiles.length; i++) {
				this.game.stage.dctx.strokeRect( tiles[i].x + ct.x + obj.owner.x,  
					tiles[i].y + ct.y + obj.owner.y, 
					obj.owner.tileWidth, 
					obj.owner.tileHeight);
			}

		} else {
			this._render( obj );
		}


	}

};

/**
* 
* @method render
* @param component
* @private
*/
Kiwifroot.Physics.ArcadeSystem.prototype._render = function( component ) {

	var ct = this.game.cameras.defaultCamera.transform;
	var t = component.owner.transform;
	var hitbox = component.box.worldHitbox;
	var bounds = component.box.worldBounds;

	this.game.stage.dctx.stokeStyle = 'red';
	this.game.stage.dctx.strokeRect( t.worldX + ct.x + t.rotPointX - 3, t.worldY + ct.y + t.rotPointY - 3, 7, 7);

	this.game.stage.dctx.strokeStyle = "blue";
	this.game.stage.dctx.strokeRect(bounds.x + ct.x,  bounds.y + ct.y, bounds.width, bounds.height);

	this.game.stage.dctx.strokeStyle = "black";
	this.game.stage.dctx.strokeRect(hitbox.x + ct.x,  hitbox.y + ct.y, hitbox.width, hitbox.height);


};

/**
* Returns a boolean indicating if a object exists at the coordinates passed.
* 
* @method probe
* @param x {Number}
* @param y {Number}
* @param [collision=Kiwi.Components.ArcadePhysics.ANY] {Number}
* @param [layer] {Number} 
* @public
*/
Kiwifroot.Physics.ArcadeSystem.prototype.probe = function( x, y, collision, layer ) {

	if( typeof collision === "undefined" ) {
		collision = Kiwi.Components.ArcadePhysics.ANY;
	}

	//Loop through all of the components
	var i = 0,
		c, 
		rect = new Kiwi.Geom.Rectangle(0, 0, 0, 0);

	while( i < this.components.length ) {

		c = this.components[ i ];

		if( typeof layer !== "undefined" && layer !== c.layer ) {
			i++;
			continue;
		}

		if( c.owner.objType() === 'TileMapLayer' ) {

			var tileType = c.owner.getTileFromCoords( x, y );

			if( tileType && ( tileType.allowCollisions & collision ) == collision ) {
				return true;
			}

		} else {

			if( ( c.allowCollisions & collision ) !== collision ) {
				i++;
				continue;
			}

			rect.setTo( c.last.x - c.velocity.x, c.last.y - c.velocity.y, c.owner.width + c.velocity.x * 2, c.owner.height + c.velocity.y * 2 );

			if( rect.contains( x, y ) && c.box.worldHitbox.contains( x, y ) ) {
				return true;
			}

		}

		i++;
	}

	return false;

};

/**
*
* @method updateMotion
* @private
*/
Kiwifroot.Physics.ArcadeSystem.prototype.updateMotion = function() {

	var c, 
		i = 0;
	
	this.gravityDelta_.x = this.gravity.x * Kiwi.Components.ArcadePhysics.updateInterval;
	this.gravityDelta_.y = this.gravity.y * Kiwi.Components.ArcadePhysics.updateInterval;

	while( i < this.components.length ) {

		c = this.components[ i ];

		c.last.x = c.transform.worldX;
		c.last.y = c.transform.worldY;

		c.canGoUp = true;
		c.canGoDown = true;
		c.canGoLeft = true;
		c.canGoRight = true;
		

		//Apply gravity
		if( c.gravity ) { 
			c.velocity.x += this.gravityDelta_.x;
			c.velocity.y += this.gravityDelta_.y;
		}

		//Update motion
		c.updateMotion();

		i++;
	}

};

/**
* 
* @method destroy
* @public
*/
Kiwifroot.Physics.ArcadeSystem.prototype.destroy = function() {

	Kiwi.Component.prototype.destroy.call( this );

	delete this.components;

};

/**
* 
* @property gravityDeltaX
* @type Number
* @public
* @readOnly 
* @since 0.11.3
*/
Object.defineProperty(Kiwifroot.Physics.ArcadeSystem.prototype, "gravityDeltaX", {

	get: function() {
		return this.gravityDelta_.x;
	}

});

/**
* 
* @property gravityDeltaY
* @type Number
* @public
* @readOnly 
* @since 0.11.3
*/
Object.defineProperty(Kiwifroot.Physics.ArcadeSystem.prototype, "gravityDeltaY", {

	get: function() {
		return this.gravityDelta_.y;
	}

});


/**
*
* @method resolveCollisions
* @private
*/
Kiwifroot.Physics.ArcadeSystem.prototype.resolveCollisions = function() {

	var j = 0,
		i = 0;

	while( i < this.components.length ) {

		j = i + 1;

		while( j < this.components.length ) {

			this.checkCollision( this.components[ i ], this.components[ j ] );

			j++;
		}

		i++;
	}

};

/**
*
* @method checkCollision
* @param componentA 
* @param componentB
* @public
*/
Kiwifroot.Physics.ArcadeSystem.prototype.checkCollision = function( componentA, componentB ) {

	var collision = false;

	if( componentA.layer !== componentB.layer ) {
		return;
	}


	//Check overlap 
	if( componentA.owner.objType() === 'TileMapLayer' ) {
		collision = this.overlapsTiles( componentB, componentA );

	} else if( componentB.owner.objType() === 'TileMapLayer' ) {
		collision = this.overlapsTiles( componentA, componentB );

	} else {
		collision = this.overlaps( componentA, componentB );
	}
		
	if( collision ) {
		this.onCollision.dispatch( componentA.owner, componentB.owner );
	}

};

	
/**
* Resolves collisions between two ArcadeComponents.
* 
* @method overlaps
* @param compA {Kiwifroot.Physics.ArcadeComponent}
* @param compB {Kiwifroot.Physics.ArcadeComponent}
* @return Boolean
* @public
*/
Kiwifroot.Physics.ArcadeSystem.prototype.overlaps = function(compA, compB) {

	if( compA.immovable && compB.immovable ) {
		return false;
	}

	var seperatedX = this.seperateX(compA, compB);
	var seperatedY = this.seperateY(compA, compB);

	return seperatedX || seperatedY;
};

/**
* 
* @method overlapsTiles
* @comp {Kiwifroot.Physics.ArcadeComponent}
* @tilemap {Kiwifroot.Physics.ArcadeComponent}
* @return Boolean
* @public
*/
Kiwifroot.Physics.ArcadeSystem.prototype.overlapsTiles = function(comp, tilemap) {

	if( comp.immovable ) {
		return false;
	}

	var tiles = this.getOverlappingTiles( tilemap, comp ),
		separatedX = false,
		separatedY = false,
		i = 0;

	// Until all tiles have been checked,
	// try to perform a single separation on X and a single on Y.
	// Collisions are based on pre-computed exposed sides of tiles,
	// and whether the physics object is moving into that side.
	while( i < tiles.length ) {
		if (
			!separatedX &&
			tiles[ i ].collisionLeft &&
			comp.velocity.x > 0 ) {

			separatedX = this.seperateTileX( comp, tilemap, tiles[ i ] );
		}
		if (
			!separatedX &&
			tiles[ i ].collisionRight &&
			comp.velocity.x < 0 ) {

			separatedX = this.seperateTileX( comp, tilemap, tiles[ i ] );
		}
		if (
			!separatedY &&
			tiles[ i ].collisionTop &&
			comp.velocity.y > 0 ) {

			separatedY = this.seperateTileY( comp, tilemap, tiles[ i ] );
		}
		if (
			!separatedY &&
			tiles[ i ].collisionBottom &&
			comp.velocity.y < 0 ) {

			separatedY = this.seperateTileY( comp, tilemap, tiles[ i ] );
		}

		if ( separatedX && separatedY ) {
			break;
		}

		i++;
	}

	return separatedX || separatedY;
};

/**
* 
* @method getOverlappingTiles
* @param comp
* @public
*/ 
Kiwifroot.Physics.ArcadeSystem.prototype.getOverlappingTiles = function( tilemap, comp ) {

	var hitbox = comp.getHitbox();
	var x = tilemap.transform.worldX;
	var y = tilemap.transform.worldY;

	if( hitbox.left > x + tilemap.owner.widthInPixels || 
		hitbox.right < x ||
		hitbox.bottom < y ||
		hitbox.top > y + tilemap.owner.heightInPixels ) {
		return [];
	}

	var nx = hitbox.x - x;
	var ny = hitbox.y - y;

	var x = Kiwi.Utils.GameMath.snapToFloor(nx, tilemap.owner.tileWidth) / tilemap.owner.tileWidth;
    var y = Kiwi.Utils.GameMath.snapToFloor(ny, tilemap.owner.tileHeight) / tilemap.owner.tileHeight;
    var w = Kiwi.Utils.GameMath.snapToCeil(hitbox.width, tilemap.owner.tileWidth) / tilemap.owner.tileWidth;
    var h = Kiwi.Utils.GameMath.snapToCeil(hitbox.height, tilemap.owner.tileHeight) / tilemap.owner.tileHeight;

	//Add one, because we want to include the very end tile.
	var tiles = tilemap.owner.getCollidableTiles(x, y, w + 1, h + 1);

	// Compute collision sides in real time.
	// This should prevent collisions with unintended (internal) tile sides.
	// However, it could be more optimal;
	// we could bake collision sides into tile maps on load,
	// or determine it by `tileType`.
	tiles.forEach( function computeCollisionSides ( tile ) {
		var o = tilemap.owner;
		var data = o.data;
		var mapX = tile.x / o.tileWidth;
		var mapY = tile.y / o.tileHeight;

		// Check sides
		tile.collisionTop = !data[ mapX + ( mapY - 1 ) * o.width ];
		tile.collisionBottom = !data[ mapX + ( mapY + 1 ) * o.width ];
		tile.collisionLeft = !data[ mapX - 1 + mapY * o.width ];
		tile.collisionRight = !data[ mapX + 1 + mapY * o.width ];
	}, this );

    return tiles;
};


/**
* Seperates one object from another on the x-axis.
* 
* @method seperateX
* @param compA {Kiwifroot.Physics.ArcadeComponent}
* @param compB {Kiwifroot.Physics.ArcadeComponent}
* @return Boolean
* @public
*/
Kiwifroot.Physics.ArcadeSystem.prototype.seperateX = function(compA, compB) {

	var deltaA = compA.transform.worldX - compA.last.x, 
		deltaB = compB.transform.worldX - compB.last.x;

	if( deltaA === deltaB ) return false;

	var hitA = compA.getHitbox(),
		hitB = compB.getHitbox();

	this._rectA.setTo( hitA.x - ((deltaA > 0) ? deltaA : 0), 
		compA.last.y + (compA.box.hitboxOffset.y * compA.owner.scaleY), 
		hitA.width + deltaA, 
		hitA.height);

	this._rectB.setTo( hitB.x - ((deltaB > 0) ? deltaB : 0), 
		compB.last.y + compB.box.hitboxOffset.y * compA.owner.scaleY,
		hitB.width + deltaB,
		hitB.height);

	if( this._rectA.right > this._rectB.left && this._rectA.left < this._rectB.right &&
		this._rectA.bottom > this._rectB.top && this._rectA.top < this._rectB.bottom ) {

		var maxOverlap = Math.abs(deltaA) + Math.abs(deltaB) + Kiwi.Components.ArcadePhysics.OVERLAP_BIAS;

		if( deltaA > deltaB ) {

			overlap = hitA.x + hitA.width - hitB.x;
			if( overlap > maxOverlap || 
				!(compA.allowCollisions & Kiwi.Components.ArcadePhysics.RIGHT) || 
				!(compB.allowCollisions & Kiwi.Components.ArcadePhysics.LEFT)) {
				overlap = 0;
			} else {
				compA.touching |= Kiwi.Components.ArcadePhysics.RIGHT;
				compB.touching |= Kiwi.Components.ArcadePhysics.LEFT;

			}

		} else {

			overlap = hitA.x - hitB.width - hitB.x;
			if( -overlap > maxOverlap || 
				!(compA.allowCollisions & Kiwi.Components.ArcadePhysics.LEFT) || 
				!(compB.allowCollisions & Kiwi.Components.ArcadePhysics.RIGHT)) {
				overlap = 0;
			} else {
				compA.touching |= Kiwi.Components.ArcadePhysics.LEFT;
				compB.touching |= Kiwi.Components.ArcadePhysics.RIGHT;
			}

		}

		if( overlap !== 0 ) {

			var va = compA.velocity.x;
			var vb = compB.velocity.x;

			if( !compA.immovable && !compB.immovable && (
				overlap < 0 && compA.canGoLeft && compB.canGoRight || 
				overlap > 0 && compA.canGoRight && compB.canGoLeft ) ) {

				overlap *= 0.5;
				compA.transform.x = compA.transform.x - overlap;
				compB.transform.x = compB.transform.x + overlap;

				var veloA = Math.sqrt( (vb * vb * compB.mass) / compA.mass );
				var veloB = Math.sqrt( (va * va * compA.mass) / compB.mass );

				if( va <= 0 ) veloB *= -1;
				if( vb <= 0 ) veloA *= -1;

				var average = (veloA + veloB) * 0.5;
				veloA -= average;
				veloB -= average;

				compA.velocity.x = average + veloA * compA.elasticity;
				compB.velocity.x = average + veloB * compB.elasticity;

			} else if( !compA.immovable && (
				overlap < 0 && compA.canGoLeft || 
				overlap > 0 && compA.canGoRight )) {

				if( overlap > 0 ) {
					compB.canGoRight = false;
				} else {
					compB.canGoLeft = false;
				}

				compA.transform.x = compA.transform.x - overlap;
				compA.velocity.x = vb - va * compA.elasticity;

			} else if( !compB.immovable && (
				overlap < 0 && compB.canGoRight || 
				overlap > 0 && compB.canGoLeft )) {

				if( overlap > 0 ) {
					compB.canGoLeft = false;
				} else {
					compB.canGoRight = false;
				}

				compB.transform.x = compB.transform.x + overlap;
				compB.velocity.x = va - vb * compB.elasticity;

			}

			return true;
		}
	}

	return false;
};

/**
* Seperates on object from another on the y-axis.
* 
* @method seperateY
* @param compA {Kiwifroot.Physics.ArcadeComponent}
* @param compB {Kiwifroot.Physics.ArcadeComponent}
* @return Boolean
* @public
*/
Kiwifroot.Physics.ArcadeSystem.prototype.seperateY = function(compA, compB) {

	var deltaA = compA.transform.worldY - compA.last.y, 
		deltaB = compB.transform.worldY - compB.last.y;

	if( deltaA === deltaB ) return false;

	var hitA = compA.getHitbox(),
		hitB = compB.getHitbox();

	var deltaAAbs = Math.abs( deltaA );
	var deltaBAbs = Math.abs( deltaB );

	this._rectA.setTo( hitA.x, 
		hitA.y - ((deltaA > 0) ? deltaA : 0), 
		hitA.width, 
		hitA.height + deltaAAbs );

	this._rectB.setTo( hitB.x, 
		hitB.y - ((deltaB > 0) ? deltaB : 0), 
		hitB.width, 
		hitB.height + deltaBAbs );

	if( this._rectA.right > this._rectB.left && this._rectA.left < this._rectB.right &&
		this._rectA.bottom > this._rectB.top && this._rectA.top < this._rectB.bottom ) {


		var maxOverlap = deltaAAbs + deltaBAbs + Kiwi.Components.ArcadePhysics.OVERLAP_BIAS;

		if( deltaA > deltaB ) {

			overlap = hitA.y + hitA.height - hitB.y;

			if( overlap > maxOverlap || 
				!(compA.allowCollisions & Kiwi.Components.ArcadePhysics.DOWN) || 
				!(compB.allowCollisions & Kiwi.Components.ArcadePhysics.UP)) {
				overlap = 0;
			} else {
				compA.touching |= Kiwi.Components.ArcadePhysics.DOWN;
				compB.touching |= Kiwi.Components.ArcadePhysics.UP;
			}

		} else {

			overlap = hitA.y - hitB.height - hitB.y;

			if( -overlap > maxOverlap || 
				!(compA.allowCollisions & Kiwi.Components.ArcadePhysics.UP) || 
				!(compB.allowCollisions & Kiwi.Components.ArcadePhysics.DOWN)) {
				overlap = 0;
			} else {
				compA.touching |= Kiwi.Components.ArcadePhysics.UP;
				compB.touching |= Kiwi.Components.ArcadePhysics.DOWN;
			}

		}

		if( overlap !== 0 ) {

			var va = compA.velocity.y;
			var vb = compB.velocity.y;

			if( !compA.immovable && !compB.immovable && (
				overlap < 0 && compA.canGoUp && compB.canGoDown || 
				overlap > 0 && compA.canGoDown && compB.canGoUp ) ) {

				overlap *= 0.5;
				compA.transform.y = compA.transform.y - overlap;
				compB.transform.y = compB.transform.y + overlap;

				var veloA = Math.sqrt( (vb * vb * compB.mass) / compA.mass );
				var veloB = Math.sqrt( (va * va * compA.mass) / compB.mass );

				if( va <= 0 ) veloB *= -1;
				if( vb <= 0 ) veloA *= -1;

				var average = (veloA + veloB) * 0.5;
				veloA -= average;
				veloB -= average;

				compA.velocity.y = average + veloA * compA.elasticity;
				compB.velocity.y = average + veloB * compB.elasticity;

			} else if( !compA.immovable && ( 
				overlap < 0 && compA.canGoUp ||
				overlap > 0 && compA.canGoDown ) ) {

				compA.transform.y = compA.transform.y - overlap;
				compA.velocity.y = vb - va * compA.elasticity;

				//Are we touching the bottom side?
				if( overlap > 0 ) {
					compA.canGoDown = false;
				} else {
					compA.canGoUp = false;
				}

				if( compB.moves && compB.owner.active && deltaA > deltaB) {
					compA.transform.x = compA.transform.worldX + compB.transform.worldX - compB.last.x;
				}

			} else if( !compB.immovable && ( 
				overlap < 0 && compB.canGoDown ||
				overlap > 0 && compB.canGoUp ) ) {

				compB.transform.y = compB.transform.y + overlap;
				compB.velocity.y = va - vb * compB.elasticity;

				if( overlap > 0 ) {
					compB.canGoUp = false;
				} else {
					compB.canGoDown = false;
				}

				if( compA.moves && compA.owner.active && deltaA < deltaB) {
					compB.transform.x = compB.transform.worldX + compA.transform.worldX - compA.last.x;
				}
			}

			return true;
		}
	}

	return false;
};

/**
* 
* @method seperateTileX
* @param comp 
* @param tilemap
* @param tile
* @return Boolean
* @public
*/
Kiwifroot.Physics.ArcadeSystem.prototype.seperateTileX = function(comp, tilemap, tile) {

	var deltaA = comp.transform.x - comp.last.x;
	var deltaB = tilemap.transform.x - tilemap.last.x;

	if( deltaA === deltaB ) return false;

	var box = comp.getHitbox();
	
	var x = tilemap.transform.x + tile.x;

	this._rectA.setTo( 
		box.x - ( (deltaA > 0) ? deltaA : 0 ),
		comp.last.y + (comp.box.hitboxOffset.y * comp.owner.scaleY) + 1,
		box.width + deltaA,
		box.height - 2
		);

	this._rectB.setTo(
		x - ( (deltaB > 0) ? deltaB : 0 ),
		tilemap.last.y + tile.y,
		tilemap.owner.tileWidth + deltaB,
		tilemap.owner.tileHeight
		);

	if( this._rectA.right > this._rectB.left && this._rectA.left < this._rectB.right && 
		this._rectA.bottom > this._rectB.top && this._rectA.top < this._rectB.bottom ) {

		var overlap = 0,
			maxOverlap = Math.abs(deltaA) + Math.abs(deltaB) + Kiwi.Components.ArcadePhysics.OVERLAP_BIAS,
			tileType = tilemap.owner.tilemap.tileTypes[ tilemap.owner.tileData[ tile.index ] ];


		if( deltaA > deltaB ) {
			
			overlap = box.x + box.width - x;
			if( overlap > maxOverlap ||  
				!(comp.allowCollisions & Kiwi.Components.ArcadePhysics.RIGHT) || 
				!(tileType.allowCollisions & Kiwi.Components.ArcadePhysics.LEFT) ) {
				overlap = 0;

			} else {
				comp.touching |= Kiwi.Components.ArcadePhysics.RIGHT;

			}

		} else {

			overlap = box.x - tilemap.owner.tileWidth - x;
			if( -overlap > maxOverlap ||
				!(comp.allowCollisions & Kiwi.Components.ArcadePhysics.RIGHT) || 
				!(tileType.allowCollisions & Kiwi.Components.ArcadePhysics.LEFT) ) {
				overlap = 0;

			} else {
				comp.touching |= Kiwi.Components.ArcadePhysics.LEFT;

			}

		}

		if( overlap !== 0 ) {
			comp.transform.x = comp.transform.x - overlap;
			comp.velocity.x = tilemap.velocity.x - comp.velocity.x * comp.elasticity;

			//Are we touching the bottom side?
			if( comp.touching & Kiwi.Components.ArcadePhysics.RIGHT ) {
				comp.canGoLeft = false;
			} else {
				comp.canGoRight = false;
			}

			return true;
		}

	}

	return false;

};


/**
* 
* @method seperateTileY
* @param comp 
* @param tilemap
* @param tile
* @return Boolean
* @public
*/
Kiwifroot.Physics.ArcadeSystem.prototype.seperateTileY = function(comp, tilemap, tile) {

	var deltaA = comp.transform.y - comp.last.y;
	var deltaB = tilemap.transform.y - tilemap.last.y;

	if( deltaA === deltaB ) return false;

	var box = comp.getHitbox();
	var deltaAAbs = Math.abs( deltaA ); 
	var deltaBAbs = Math.abs( deltaB );
	
	var y = tilemap.transform.y + tile.y;

	this._rectA.setTo( 
		box.x,
		box.y - ((deltaA > 0) ? deltaA : 0 ),
		box.width,
		box.height + deltaAAbs
		);

	this._rectB.setTo(
		tilemap.transform.x + tile.x,
		y - ((deltaB > 0) ? deltaB : 0),
		tilemap.owner.tileWidth,
		tilemap.owner.tileHeight + deltaBAbs
		);

	if( this._rectA.right > this._rectB.left && this._rectA.left < this._rectB.right && 
		this._rectA.bottom > this._rectB.top && this._rectA.top < this._rectB.bottom ) {

		var overlap = 0,
			maxOverlap = deltaAAbs + Math.abs(deltaB) + Kiwi.Components.ArcadePhysics.OVERLAP_BIAS,
			tileType = tilemap.owner.tilemap.tileTypes[ tilemap.owner.tileData[ tile.index ] ];


		if( deltaA > deltaB ) {
			
			overlap = box.y + box.height - y;
			if( overlap > maxOverlap ||  
				!(comp.allowCollisions & Kiwi.Components.ArcadePhysics.DOWN) || 
				!(tileType.allowCollisions & Kiwi.Components.ArcadePhysics.UP) ) {
				overlap = 0;

			} else {
				comp.touching |= Kiwi.Components.ArcadePhysics.DOWN;

			}

		} else {

			overlap = box.y - tilemap.owner.tileHeight - y;
			if( -overlap > maxOverlap ||
				!(comp.allowCollisions & Kiwi.Components.ArcadePhysics.UP) || 
				!(tileType.allowCollisions & Kiwi.Components.ArcadePhysics.DOWN) ) {
				overlap = 0;

			} else {
				comp.touching |= Kiwi.Components.ArcadePhysics.UP;

			}

		}

		if( overlap !== 0 ) {
			comp.transform.y = comp.transform.y - overlap;
			comp.velocity.y = tilemap.velocity.y - comp.velocity.y * comp.elasticity;

			//Are we touching the bottom side?
			if( comp.touching & Kiwi.Components.ArcadePhysics.UP ) {
				comp.canGoDown = false;
			} else {
				comp.canGoUp = false;
			}

			return true;
		}

	}

	return false;
};

/**
* 
* @module Kiwi
* @submodule Plugins
*
*/


/**
* 
* 
* @namespace Kiwi.Plugins
* @class ComponentExample
* @static
* 
*/
Kiwi.Plugins.ComponentExample = {

	/**
	*
	* @property name
	* @type String
	* @static
	* @default 'ComponentExample'
	* @public
	*/
	name: 'ComponentExample',

	/**
	*
	* @property version
	* @type String
	* @default '0.1.0'
	* @static
	* @readOnly
	* @public
	*/
	version: '0.1.0',

	/**
	* 
	* @property minimumKiwiVersion
	* @type String
	* @default '1.1.1'
	* @static
	* @readOnly
	* @public
	*/
	minimumKiwiVersion: '1.1.1',


	/**
	* 
	* @property pluginDependencies
	* @type Array
	* @default []
	* @static
	* @readOnly
	* @public
	*/
	pluginDependencies:  [

	],

	/**
	* 
	* @property kiwifrootPlugins
	* @type Array
	* @static
	* @readOnly
	* @public
	*/
	kiwifrootPlugins: [
		

	]

};	

// Register this with the kiwi plugin manager
Kiwi.PluginManager.register( Kiwi.Plugins.ComponentExample );



/**
*
* @method create
* @param state {Kiwi.State}
* @param object {Kiwi.Entity}
* @param params {Object}
* 	@param params.type {string}
* @public
*/
Kiwi.Plugins.ComponentExample.add = function( state, object, params ) {

	if( !this.validate( params ) ) {
		state.game.log.error( 'Could not create a ' + this.component + ' component. Parameters passed were not valid.' );
		return null;
	}
	
	alert( params.message );

};



/**
*
* @method validate
* @param params {Object} 
* @return {Boolean}
* @public
*/
Kiwi.Plugins.ComponentExample.validate = function( params ) {

	//Do your own validaton of the parameters passed to the 'add' method here....
	if( !params.message ) {
		return false;
	}

	return true;
};


//Add the plugins
Kiwi.Plugins.ComponentExample.kiwifrootPlugins.push( {
			type: Kiwifroot.Plugins.COMPONENT,
			name: 'example',
			namespace: Kiwi.Plugins.ComponentExample
		} );


/**
* 
* @module Kiwi
* @submodule Plugins
*
*/


/**
* 
* 
* @namespace Kiwi.Plugins
* @class GameObjectExample
* @static
* 
*/
Kiwi.Plugins.GameObjectExample = {

	/**
	*
	* @property name
	* @type String
	* @static
	* @default 'GameObjectExample'
	* @public
	*/
	name: 'GameObjectExample',

	/**
	*
	* @property version
	* @type String
	* @default '0.1.0'
	* @static
	* @readOnly
	* @public
	*/
	version: '0.1.0',

	/**
	* 
	* @property minimumKiwiVersion
	* @type String
	* @default '1.1.1'
	* @static
	* @readOnly
	* @public
	*/
	minimumKiwiVersion: '1.1.1',


	/**
	* 
	* @property pluginDependencies
	* @type Array
	* @default []
	* @static
	* @readOnly
	* @public
	*/
	pluginDependencies:  [

	],


	/**
	* 
	* @property kiwifrootPlugins
	* @type Array
	* @static
	* @readOnly
	* @public
	*/
	kiwifrootPlugins: [
		

	]

};	

// Register this with the kiwi plugin manager
Kiwi.PluginManager.register( Kiwi.Plugins.GameObjectExample );


/**
*
* @method create
* @param state {Kiwi.State}
* @param params {Object}
* 	@param params.type {string}
* @public
*/
Kiwi.Plugins.GameObjectExample.add = function( state, params, parent ) {

	if( !this.validate( params ) ) {
		state.game.log.error( 'Could not create a ' + this.gameobject + ' object. Parameters passed were not valid.' );
		return null;
	}
	
	alert('A GameObject has been created now.');

};


/**
*
* @method validate
* @param params {Object} 
* @return {Boolean}
* @public
*/
Kiwi.Plugins.GameObjectExample.validate = function( params ) {

	//Do your own validaton of the parameters passed to the 'add' method here....

	return true;
};


//Add to the kiwifroot plugin
Kiwi.Plugins.GameObjectExample.kiwifrootPlugins.push(  {
		type: Kiwifroot.Plugins.GAMEOBJECT,
		name: 'example',
		namespace: Kiwi.Plugins.GameObjectExample
	} );

/**
* 
* @module Kiwi
* @submodule Plugins
*
*/


/**
* 
* 
* @namespace Kiwi.Plugins
* @class MultipleExample
* @static
* 
*/
Kiwi.Plugins.MultipleExample = {

	/**
	*
	* @property name
	* @type String
	* @static
	* @default 'MultipleExample'
	* @public
	*/
	name: 'MultipleExample',

	/**
	*
	* @property version
	* @type String
	* @default '0.1.0'
	* @static
	* @readOnly
	* @public
	*/
	version: '0.1.0',

	/**
	* 
	* @property minimumKiwiVersion
	* @type String
	* @default '1.1.1'
	* @static
	* @readOnly
	* @public
	*/
	minimumKiwiVersion: '1.1.1',

	/**
	* 
	* @property kiwifrootPlugins
	* @type Array
	* @static
	* @readOnly
	* @public
	*/
	kiwifrootPlugins: [
		
		{
			type: Kiwifroot.Plugins.COMPONENT,
			name: 'example',
			namespace: Kiwi.Plugins.ComponentExample
		},

		{
			type: Kiwifroot.Plugins.GAMEOBJECT,
			name: 'example',
			namespace: Kiwi.Plugins.GameObjectExample
		}

	]

};	

// Register this with the kiwi plugin manager
Kiwi.PluginManager.register( Kiwi.Plugins.MultipleExample );


/**
* 
* @module Kiwi
* @submodule Plugins
*
*/


/**
* 
* 
* @namespace Kiwi.Plugins
* @class SystemExample
* @static
* 
*/
Kiwi.Plugins.SystemExample = {

	/**
	*
	* @property name
	* @type String
	* @static
	* @default 'SystemExample'
	* @public
	*/
	name: 'SystemExample',

	/**
	*
	* @property version
	* @type String
	* @default '0.1.0'
	* @static
	* @readOnly
	* @public
	*/
	version: '0.1.0',

	/**
	* 
	* @property minimumKiwiVersion
	* @type String
	* @default '1.1.1'
	* @static
	* @readOnly
	* @public
	*/
	minimumKiwiVersion: '1.1.1',


	/**
	* 
	* @property pluginDependencies
	* @type Array
	* @default []
	* @static
	* @readOnly
	* @public
	*/
	pluginDependencies:  [

	],


	/**
	* 
	* @property kiwifrootPlugins
	* @type Array
	* @static
	* @readOnly
	* @public
	*/
	kiwifrootPlugins: [
	]

};	

// Register this with the kiwi plugin manager
Kiwi.PluginManager.register( Kiwi.Plugins.SystemExample );


/**
* 
* @module Plugins
* @submodule SystemExample
* 
*/

/**
* 
* @namespace Kiwi.Plugins.SystemExample
* @class System
* @constructor
* @param state {Kiwi.State}
* @param params {Object}
*/
Kiwi.Plugins.SystemExample.System = function( state ) {

	Kiwi.Component.call( this, state, 'SystemExample' );

	/**
	* 
	* @property message
	* @type String
	* @default 'Hello World'
	* @public
	*/
	this.message = 'Hello World';

	/**
	* 
	* @property _count
	* @type number
	* @default 0 
	* @private
	*/
	this._count = 0;

	/**
	* 
	* @property frames
	* @type number
	* @default 2000
	* @public
	*/
	this.frames = 200;

	/**
	* 
	* @property active
	* @type boolean
	* @default true
	* @public
	*/
	this.active = true;

};

Kiwi.extend( Kiwi.Plugins.SystemExample.System, Kiwi.Component );

/**
* Executed when/if a level system is configured 
* @method configure
* @param [params] {Object}
* @public
*/
Kiwi.Plugins.SystemExample.System.prototype.configure = function( params ) {

	params = params || {};

	if( params.message ) {
		this.message = params.message;
	}

	if( params.frames ) {
		this.frames = params.frames;
	} 

	if( params.active ) {
		this.active = params.active;
	}

};

/**
* Executed after all the gameobjects have been created 
* @method start
* @public
*/
Kiwi.Plugins.SystemExample.System.prototype.start = function() {

};

/**
* Executed when/if a level system is configured after the start method.
* @method start
* @public
*/
Kiwi.Plugins.SystemExample.System.prototype.launch = function() {

};


/**
* 
* @method preUpdate
* @public
*/
Kiwi.Plugins.SystemExample.System.prototype.preUpdate = function( ) {

	if( !this.active ) {
		return;
	}

	this._count++;

	if( this._count >= this.frames ) {
		alert( this.message + ' \n\rIt has been '+ this.frames + ' frames.' );
		this._count = 0;
	}

};


//Add the System to the plugin config

Kiwi.Plugins.SystemExample.kiwifrootPlugins.push( {
	type: Kiwifroot.Plugins.SYSTEM,
	system: Kiwi.Plugins.SystemExample.System
} );

/**
* 
* @module Kiwifroot
* @submodule Sound
*/
Kiwifroot.Sound = Kiwifroot.Sound || {};

/**
* 
* @namespace Kiwifroot.Sound
* @class Factory
* @constructor
* @params state {Kiwi.State}
* @params params {Object}
*   @params params.id {Number} The unique id of this factory.
*   @params params.key {String} The asset key for the audio tags that are to be generated.
*   @params params.mute {Boolean} The default mute status of the sounds.
*   @params [params.maxSounds=Infinity] {Number} The maximum number of audio objects to be generated.
* 
*/
Kiwifroot.Sound.Factory = function( state, params ) {


    /**
    *
    * @property state
    * @type Kiwi.State
    * @public
    */
    this.state = state;


    /**
    *
    * @property game
    * @type Kiwi.Game
    * @public
    */
    this.game = this.state.game;

    if( !params.id || typeof params.mute == "undefined" ) {
        this.game.log.error('Kiwi.Sound.Factory: Failed to pass all required parameters.');
    }


    /**
    *
    * @property id
    * @type Number
    * @public
    */
    this.id = params.id || -1;

    /**
    *
    * @property _mute
    * @type Boolean
    * @private
    */
    this._mute = params.mute;


    /**
    *
    * @property maxSounds
    * @type Infinity
    * @public
    */
    this.maxSounds = params.maxSounds || Infinity;


    /**
    *
    * @property Sounds
    * @type Array
    * @public
    */
    this.sounds = [];

};


/**
*
* @method play
* @public
*/
Kiwifroot.Sound.Factory.prototype.play = function() {

    //Loop through the sounds and find one to play
    for (var index in this.sounds) {

        if (this.sounds[ index ].isPlaying == false) {
            this.sounds[ index ].play();
            return;
        }

    }

    //If one could not be found, try to create one. Make sure one is created.
    if ( this.create() ) {
        this.sounds[this.sounds.length - 1].play();
    }

};


/**
*
* @method stopAll
* @public
*/
Kiwifroot.Sound.Factory.prototype.stopAll = function() {

    for (var index in this.sounds) {
        this.sounds[index].stop();
    }

};



/**
*
* @property mute
* @type Boolean
* @public
*/
Object.defineProperty( Kiwifroot.Sound.Factory.prototype, "mute", {

    get: function () {
        return this._mute;
    },

    set: function (val) {
        this._mute = val;

        for (var index in this.sounds) {
            this.sounds[index].mute = this.mute;
        }
    },

    enumerable: true,

    configurable: true

});


/**
*
* @method create
* @params [amount=1] {Number}
* @public
*/
Kiwifroot.Sound.Factory.prototype.create = function( amount ) {

    amount = amount || 1;

    var created = false;

    for ( var i = 0; i < amount; i++ ) {

        if ( this.sounds.length < this.maxSounds ) {

            created = true;
            var sound = new Kiwi.Sound.Audio( this.game, this.id, 1, false );
            sound.mute = this.mute;
            this.sounds.push(sound);

        }

    }

    return created;

};


/**
*
* @method destroy
* @public
*/
Kiwifroot.Sound.Factory.prototype.destroy = function() {

    this.stopAll();

    for (var index in this.sounds) {
        this.sounds[index].destroy();
    }

    delete this.state;

    delete this.game;

    delete this.sounds;

};
/**
* 
* @module Kiwifroot
* @submodule Sound
*/
Kiwifroot.Sound = Kiwifroot.Sound || {};


/**
* 
* @namespace Kiwifroot.Sound
* @class Manager
* @extends Kiwi.Component
* @constructor
* @param state { Kiwifroot.Level }
*/
Kiwifroot.Sound.Manager = function( state ) {


    Kiwi.Component.call( this, state, 'SoundManager' );


    /**
    * 
    * @property state
    * @type Kiwifroot.Level
    * @public
    */
    this.state = this.owner;


    /**
    * 
    * @property factories
    * @type Object
    * @public
    */
    this.factories = {};


    /**
    *
    * @property backgroundTrack
    * @type Kiwi.Sound.Audio
    * @public
    */
    this.backgroundTrack = null;


    /**
    *
    * @property keepMusicOnDestroy
    * @type Boolean
    * @default false
    * @public
    */
    this.keepMusicOnDestroy = false;

    //Get the background track. Used if the background track is playing between states.
    var i = this.game.audio._sounds.length;
    while( i-- ) {
        if( this.game.audio._sounds[i]._backgroundTrack ) {
            this.backgroundTrack = this.game.audio._sounds[i];
            break;
        }
    }


};

Kiwi.extend( Kiwifroot.Sound.Manager, Kiwi.Component);


/**
*
* @method playBackgroundTrack
* @param [id] {Number}
* @public
*/
Kiwifroot.Sound.Manager.prototype.playBackgroundTrack = function( id ) {

    this.stopBackgroundTrack();

    if( typeof id == "undefined" && this.backgroundTrack != null ) {
        this.backgroundTrack.play();
        return;
    }

    if ( this.game.asset.exists( id ) ) {

        if (this.backgroundTrack != null) {
            
            //Are they trying to play the current background track
            if( id == this.backgroundTrack.id ) {
                this.restartBackgroundTrack();
                return;
            }

            //Kill the old background track.
            this.backgroundTrack.destroy();
        }


        this.backgroundTrack = new Kiwi.Sound.Audio(this.game, id, 1, true);
        this.backgroundTrack.play();
        this.backgroundTrack.mute = this.muteBackground;
        this.backgroundTrack._backgroundTrack = true;
           
    }

};


/**
*
* @method restartBackgroundTrack
* @public
*/
Kiwifroot.Sound.Manager.prototype.restartBackgroundTrack = function() {
    
    if (this.backgroundTrack !== null) {
        this.backgroundTrack.play('default', true);
    }

};


/**
* Resumes the background tracks from where it last left off
* @method restartBackgroundTrack
* @public
*/
Kiwifroot.Sound.Manager.prototype.resumeBackgroundTrack = function() {

    if (this.backgroundTrack !== null) {
        this.backgroundTrack.resume();
    }

};


/**
* Pauses the background track
* @method pauseBackgroundTrack
* @public
*/
Kiwifroot.Sound.Manager.prototype.pauseBackgroundTrack = function() {

    if (this.backgroundTrack !== null) {
        this.backgroundTrack.pause();
    }

};


/**
* Stops the background track
* @method stopBackgroundTrack
* @public
*/
Kiwifroot.Sound.Manager.prototype.stopBackgroundTrack = function() {

    if (this.backgroundTrack !== null) {
        this.backgroundTrack.stop();
    }

};


/**
* Plays a sound effect
* @method stopBackgroundTrack
* @param id {Number}
* @public
*/
Kiwifroot.Sound.Manager.prototype.playSoundEffect = function( id ) {

    //Do we need to create one?
    if (typeof this.factories[ id ] === "undefined") this.createFactory( id );

    //If it is null, then no sound exists for that id, so skip it.
    if (this.factories[ id ] !== null) {
        this.factories[ id ].play();
    }

}



/**
* Creates a new sound effect factory.
*
* @method createFactory
* @param id {Number}
* @param [maxSounds=Infinity] {Number}
* @public
*/
Kiwifroot.Sound.Manager.prototype.createFactory = function( id, maxSounds ) {

    if ( this.game.asset.exists( id ) ) {
        this.factories[ id ] = new Kiwifroot.Sound.Factory(this.state,
            {
                id: id, 
                mute: this.muteEffects,
                maxSounds: maxSounds
            } );

    } else {
        this.factories[ id ] = null;

    }
};


/**
*
* @property muteEffects
* @type Boolean
* @default false
* @public
*/
Object.defineProperty( Kiwifroot.Sound.Manager.prototype, "muteEffects", {

    get: function () {
        return this.game.info._muteEffects;
    },

    set: function (val) {

        this.game.info._muteEffects = val;

        for (var id in this.factories) {
            this.factories[ id ].mute = this.game.info._muteEffects;
        }
    },

    enumerable: true,

    configurable: true

});


/**
*
* @property muteBackground
* @type Boolean
* @default false
* @public
*/
Object.defineProperty( Kiwifroot.Sound.Manager.prototype, "muteBackground", {

    get: function () {
        return this.game.info._muteBackground;
    },

    set: function (mute) {
        this.game.info._muteBackground = mute;
        if( this.backgroundTrack !== null ) this.backgroundTrack.mute = this.game.info._muteBackground;
    },

    enumerable: true,

    configurable: true

});


/**
* Mutes or unmutes all the sounds
*
* @method muteAll
* @param [muted=true] {Boolean}
* @public
*/
Kiwifroot.Sound.Manager.prototype.muteAll = function( muted ) {

    if( typeof muted == "undefined" ) {
        muted = true;
    }
    
    this.muteBackground = muted;
    this.muteEffects = muted;

};


/**
* Stops all sounds from playing
*
* @method stopAll
* @public
*/
Kiwifroot.Sound.Manager.prototype.stopAll = function() {
    this.stopBackgroundTrack();

    for (var id in this.factories) {
        this.factories[ id ].stopAll();
    }
};


/**
* 
* @method destroy
* @public
*/
Kiwifroot.Sound.Manager.prototype.destroy = function() {

    Kiwi.Component.prototype.destroy.call( this );

    delete this.state;

    if( !this.keepMusicOnDestroy ) {
    
        this.stopBackgroundTrack();
        if( this.backgroundTrack ) {
            this.backgroundTrack.destroy();
        }

    }

    delete this.backgroundTrack;

    for (var id in this.factories) {
        if( this.factories[ id ] !== null ) {
            this.factories[ id ].destroy();
        }
    }
    delete this.factories;

};

/**
* 
* @module Kiwifroot
*
*/

/**
* Displays any defined runtime errors on the screen. 
*
* Main errors these can be generated from are:
* - Error with defined JSON files.
* - Script Editor bugs.
* 
* @namespace Kiwifroot.State
* @class Error
* @extends Kiwi.State
* @constructor
* 
*/
Kiwifroot.States.Error = function() {
	Kiwi.State.call( this, Kiwifroot.States.Error.NAME );
};


/**
* 
* @property NAME
* @type String
* @default 'Error'
* @static
* @public
*/
Kiwifroot.States.Error.NAME = 'Error';

Kiwi.extend( Kiwifroot.States.Error, Kiwi.State );

/**
* 
* @method preload
* @public
*/
Kiwifroot.States.Error.prototype.preload = function() {
	//Load in any error 'assets'
};


/**
*
* @method create
* @public
*/
Kiwifroot.States.Error.prototype.create = function() {

	var error = this.game.error,
		userMessage = this.game.userErrorMessage;


	//Reset the level
	for( var i = 0; i < this.members.length; i++) {
		this.members[i].visible = false;
	}
	this.game.stage.color = '#000000';

	//Display the error message.
	this.game.log.error( error );

	if( typeof Kiwi.Plugins.Text !== "undefined" ) {
		var text = new Kiwi.Plugins.Text( {
			addToState: false,
			maxWidth: this.game.stage.width - 20,
			x: 10,
			y: 10,
			color: "#ffffff",
			size: 20,
			text: '',
			state: this
		} );
	} else {
		var text = new Kiwi.GameObjects.TextField( this, '', 10, 10, "#ffffff", 20 );
	}

	text.fontFamily = "'Courier New', Courier, monospace";
	this.addChild( text );

	var interval = this.game.time.clock.setInterval( function() {

		if( userMessage.length > 0 ) {

			text.text += userMessage.charAt(0);
			userMessage = userMessage.slice(1);

		} else {

			this.game.time.clock.removeTimer( interval );

		}

	}, 50, this );

};

/**
* 
* @module Kiwifroot
*
*/

/**
* Initial state which loaded when a game is created. 
* Handles loading in the initial game information and any global assets.
* 
* @namespace Kiwifroot.States
* @class Launch
* @extends Kiwi.States
* @constructor
* 
*/
Kiwifroot.States.Launch = function() {

	Kiwi.State.call( this, Kiwifroot.States.Launch.NAME );

};

/**
* 
* @property NAME
* @static
* @type String
* @default 'Launch'
* @public
*/
Kiwifroot.States.Launch.NAME = 'Launch';

Kiwi.extend( Kiwifroot.States.Launch, Kiwi.State );

/**
* Apply the default game parameters
* @method init
* @public
*/
Kiwifroot.States.Launch.prototype.init = function() {

	/**
	* Dispatches events during the launch phase of the game. 
	* 
	* @property onExecute
	* @type Kiwi.Signal
	* @public
	*/
	this.onExecute = new Kiwi.Signal();

};

/**
*
* @method preload
* @public
*/
Kiwifroot.States.Launch.prototype.preload = function() {

	//Set color
	this.game.stage.rgbaColor = {
		r: 0,
		g: 0,
		b: 0,
		a: 255
	};

	//Prevent Scrolling
	this.game.input.keyboard.addKey( Kiwi.Input.Keycodes.SPACEBAR, true );
	this.game.input.keyboard.addKey( Kiwi.Input.Keycodes.LEFT, true );
	this.game.input.keyboard.addKey( Kiwi.Input.Keycodes.RIGHT, true );
	this.game.input.keyboard.addKey( Kiwi.Input.Keycodes.UP, true );
	this.game.input.keyboard.addKey( Kiwi.Input.Keycodes.DOWN, true );

	//Load in the game json file.
	this.loadGameJson();

	//Load in the texture atlas.
    this.game.loader.addTextureAtlas( {
    	textureAtlasKey: 'kiwifrootTextureAtlas', 
    	textureAtlasURL: this.game.asset.getUrl( this.game.textureAtlas.image ), 
    	jsonKey: 'kiwifrootAtlasJson', 
    	jsonURL: this.game.asset.getUrl( this.game.textureAtlas.json ),
		crossOrigin: "Anonymous" } );


    this.onExecute.dispatch( Kiwifroot.States.Launch.EVENTS.PRELOAD );

};


/**
*
* @method loadGameJson
* @public
*/
Kiwifroot.States.Launch.prototype.loadGameJson = function() {

	if( this.game.info.data ) {
		this.game.log.log( 'Game data already exists.' );
	}
	
	if( this.game.info.jsonURL ) {

		this.game.log.log( 'Loading in game json.' );
		console.log( this.game.asset.getUrl( this.game.info.jsonURL ) );
		this.game.loader.addJSON( 'gameData', this.game.asset.getUrl( this.game.info.jsonURL ) );

	}

};


/**
*
* @method create
* @public
*/
Kiwifroot.States.Launch.prototype.create = function() {

    this.onExecute.dispatch( Kiwifroot.States.Launch.EVENTS.CREATE );

	//If a gameData file exists, then assign the game data to that. 
	if( this.data.gameData ) {
		
		try {
			var extract = JSON.parse( this.data.gameData.data);
		} catch(e) {
			this.game.log.error( 'Error parsing game json. File must be malformed.' );
		}

		if( extract ) {
			this.game.info.assignData( extract );
		}
	}

	if( !this.game.info.data ) {
		this.game.reportError( 'No game data found. Runtime cannot progress', Kiwifroot.ERRORS.GAME_JSON );
		return;
	}

	this.assetLoadingComplete = false;

	this.loadGlobalGameAssets();


};


/**
* 
* @method loadGlobalGameAssets
* @private
*/
Kiwifroot.States.Launch.prototype.loadGlobalGameAssets = function() {

	var assetsLength = this.game.info.data.assets.length;

    this.onExecute.dispatch( Kiwifroot.States.Launch.EVENTS.GLOBAL_ASSETS_LOAD );

	//Display Splash Screen
	this.showSplashScreen();

	if( assetsLength > 0 || ( this.game.info.loadLevelJsonAtStart && this.game.info.levels.length > 0 ) ) {

		this.game.log.log( 'Starting to load global game assets.' );
	    
	    this.showAssetLoadBar();

		this.game.loader.onQueueProgress.add( this._loadProgress, this );
	    this.game.loader.onQueueComplete.addOnce( this.globalLoadComplete, this );
		
	    //Loop through the files and load them in...
	    this.game.log.log( assetsLength + ' are to be loaded.' );
	    for(var i = 0; i < assetsLength; i++) {
	    	this.game.asset.load( this.game.info.data.assets[ i ], true );
	    }

	    if( this.game.info.loadLevelJsonAtStart ) {

	    	var levels = this.game.info.levels,
	    		level;

	    	for (var i = 0; i < levels.length; i++) {
	    		level = levels[ i ];
	    		if( !level.hasData ) {
	    			this.addJSON('level-' + level.id, this.game.asset.getUrl( level.url ), false);
	    		}
	    	}

	    }

	    //Start the load
	    this.game.loader.startLoad();
	
	} else {

		this.game.log.log( 'No global game assets passed. Skipping global asset loading step.' );
		this.globalLoadComplete();

	}

};


/**
* 
* @method globalLoadComplete
* @private
*/
Kiwifroot.States.Launch.prototype.globalLoadComplete = function() {

    this.onExecute.dispatch( Kiwifroot.States.Launch.EVENTS.GLOBAL_ASSETS_COMPLETE );

	this.assetLoadingComplete = true;

	// Remove hooks on loading bar.
	if ( this.loadingBar ) {
		this.game.loader.onQueueProgress.remove( this._loadProgress, this );
		this.game.tweens.remove( this.tweenBar );
	}


	if( this.game.info.data.plugins.length <= 0) {
		this.game.log.log('No plugins for game detected. Skipping plugin phase.');
		this.checkAssetLoadingProgress();
		return;
	}

	//The plugin system for kiwi needs to be refactored...
	this.game.log.log( this.game.info.data.plugins.length + ' Plugins found. Including them now.' );

	//Assign the plugins to the plugin manager
	this.game.pluginManager._plugins = this.game.info.data.plugins;
	//Validate them
	this.game.pluginManager.validatePlugins();
	//Create them
    this.game.pluginManager._createPlugins();
    //Start the boot phase
    this.game.pluginManager.boot();
    //They will be updating themselves from here onwards.

	this.game.log.log( 'Plugins added to the game.' );

    this.onExecute.dispatch( Kiwifroot.States.Launch.EVENTS.PLUGINS_BOOTED );

	this.checkAssetLoadingProgress();

};


/**
* 
* @method loadFirstLevel
* @private
*/
Kiwifroot.States.Launch.prototype.loadFirstLevel = function(argument) {
	this.game.log.log( "#DEBUG", "loadFirstLevel()" );
	this.game.input.onUp.remove( this._openGamefrootPage, this );

	if( !this.game.info.data.firstLevel ) {
		this.game.log.error( "#DEBUG", "No first level set. Runtime cannot progress." );
		this.game.reportError( 'No first level set. Runtime cannot progress.', Kiwifroot.ERRORS.NO_LEVELS, 'LAUNCH' );
		return;
	} 

    //Attempt to load in a webview if we have access to the CocoonJS enviroment
	if( this.game.deviceTargetOption === Kiwi.TARGET_COCOON ) {
		if( typeof Cocoon !== "undefined" && typeof Cocoon.App !== "undefined" && this.game.webviewURL ) {
			Cocoon.App.loadInTheWebView( this.game.webviewURL );
		}
	}

	this.game.log.log( 'Kiwifroot now preloading Level ID ' + this.game.info.data.firstLevel );
	this.game.info.switchLevel( this.game.info.data.firstLevel );
};


Kiwifroot.States.Launch.prototype._loadProgress = function( percent, bytes, file ) {
	/**
	Update loading bar display.

	@method _loadProgress
	@param percent {Number}
	@param bytes {Number}
	@param file {Kiwi.Files.File}
	@private
	**/ 

	this.game.log.log( 'Global asset load percentage: ' + percent );
	var scale = ( this.game.stage.width * ( percent / 100 ) ) / this.loadingBar.width;

	this.tweenBar.delay( 50 );
	this.tweenBar.to(
		{ scaleX: scale },
		250,
		Kiwi.Animations.Tweens.Easing.Cubic.Out,
		true );
};


Kiwifroot.States.Launch.prototype.showAssetLoadBar = function () {
	/**
	Display a loading bar for global assets.

	@method showAssetLoadBar
	@private
	**/

	//Loading bar
	this.loadingBar = new Kiwi.GameObjects.Sprite( this, this.textures.kiwifrootTextureAtlas, 0, 0 );
	this.loadingBar.cellIndex = 1;
	this.loadingBar.y = (this.game.stage.height - this.loadingBar.height);
	this.loadingBar.scaleX = 0;
	this.loadingBar.anchorPointX = 0;
	this.addChild( this.loadingBar );

	this.tweenBar = this.game.tweens.create( this.loadingBar );
};


/**
* 
* @method showSplashScreen
* @private
*/
Kiwifroot.States.Launch.prototype.showSplashScreen = function() {

	//Set color
	this.game.stage.rgbaColor = {
		r: 0,
		g: 0,
		b: 0,
		a: 255
	};

	//Are we skipping this part?
	if( this.game.info.skipLaunch ) return;

	var splash = new Kiwi.GameObjects.Sprite( this, this.textures.kiwifrootTextureAtlas, 0, 0 );
	splash.cellIndex = 0;
	splash.x = (this.game.stage.width - splash.width) / 2;
	splash.y = (this.game.stage.height - splash.height) / 2;
	splash.alpha = 0;
	this.addChild( splash );

	//Apply Splash Scaling
	var padding = 20;
	if( this.game.stage.width < splash.width + padding * 2 ) {
		splash.scaleToWidth( this.game.stage.width - padding * 2 );
		splash.x = padding;
		splash.anchorPointX = 0;
		splash.anchorPointY = 0;
	}

	this.tween = this.game.tweens.create( splash );
	this.tween.onComplete( this.checkAssetLoadingProgress, this );
	this.tween.to( { alpha: 1 }, 750, Kiwi.Animations.Tweens.Easing.Cubic.Out, true );

	this.game.input.onUp.add( this._openGamefrootPage, this );

};

/**
* 
* @method _openGamefrootPage
* @private
*/
Kiwifroot.States.Launch.prototype._openGamefrootPage = function() {

	if( this.game.info.splashOpenURL ) {

		var gamefrootUrl = 'http://gamefroot.com/';

		if( this.game.deviceTargetOption === Kiwi.TARGET_COCOON ) {
			if( typeof Cocoon !== "undefined" && typeof Cocoon.App !== "undefined" ) {
				Cocoon.App.openURL( gamefrootUrl )
			}
		} else {
			window.open( gamefrootUrl );
		}

	}

};

/**
*
* @method checkAssetLoadingProgress
* @private 
*/
Kiwifroot.States.Launch.prototype.checkAssetLoadingProgress = function() {
	this.game.log.log( "#DEBUG", "checkAssetLoadingProgress()" );
	var self = this;
	if(this.assetLoadingComplete && ( this.game.info.skipLaunch || !this.tween.isRunning ) ) {
		this.game.log.log( "#DEBUG", "checkAssetLoadingProgress proceeding..." );
		if( this.game.info.loadLevelJsonAtStart ) {
			this.game.log.log( "#DEBUG", "checkAssetLoadingProgress loadLevelJsonAtStart" );
			var levels = this.game.info.levels;

	    	for (var i = 0; i < levels.length; i++) {
				this.game.log.log( "#DEBUG", "checkAssetLoadingProgress loadLevelJsonAtStart level", i );
	    		var level = levels[ i ],
	    			file = this.game.fileStore.getFile( ('level-' + level.id) );

	    		if( !file ) continue;

				try {
					var extract = JSON.parse( file.data );
				} catch(e) {
					this.game.log.error( 'Error parsing level json. Check json for malformation.' );
					continue;
				}

				if( extract ) {
					this.game.log.log( "#DEBUG", "checkAssetLoadingProgress loadLevelJsonAtStart level", i, "assigning data" );
					level.keep = true;
					level.assignData( extract );
				}
			}

	    }

		if( !this.game.info.skipLaunch && this.tween ) {
			this.game.log.log( "#DEBUG", "checkAssetLoadingProgress tweening out..." );
			// Defer execution until the tween is fully executed.
			// Otherwise, we could freeze if the game loads too fast.
			// Basically, don't trigger a tween inside a tween.
			setTimeout( function deferTweenOut () {
				self.tween.onComplete( self.checkAssetStatus, self );
				self.tween.delay( 1000 );
				self.tween.to(
					{ alpha: 0 },
					750,
					Kiwi.Animations.Tweens.Easing.Cubic.In,
					true );

				if ( self.loadingBar ) {
					self.tween.onUpdate( function coFadeBar ( obj, value ) {
						self.loadingBar.alpha = obj.alpha;
					}, self );
				}
			}, 1 );
		} else {
			this.checkAssetStatus();
		}


	}
};

/**
* 
* @method checkAssetStatus
* @public
*/
Kiwifroot.States.Launch.prototype.checkAssetStatus = function() {
	this.game.log.log( "#DEBUG", "checkAssetStatus()" );
	var assets = this.game.asset.removeAssetsNotLoaded();

	if( assets.length > 0) {
    	this.game.log.log( "#DEBUG", "checkAssetStatus found outstanding assets", assets );
    	this.onExecute.dispatch( Kiwifroot.States.Launch.EVENTS.GLOBAL_ASSETS_RELOAD );
		this.game.loader.onQueueComplete.addOnce( this.finalAssetCheck, this );
		
	    //Loop through the files and load them in...
	    this.game.log.log( assets.length + ' need to be reloaded.' );
	    for(var i = 0; i < assets.length; i++) {
	    	this.game.asset.load( assets[ i ], true );
	    }

	    //Start the load
	    this.game.loader.startLoad();
	} else {
		this.loadFirstLevel();
	}

}

/**
* 
* @method finalAssetCheck
* @public
*/
Kiwifroot.States.Launch.prototype.finalAssetCheck = function() {
	this.game.log.log( "#DEBUG", "finalAssetCheck()" );
	var assets = this.game.asset.removeAssetsNotLoaded();

	if( assets.length > 0) {
		this.game.log.log( "#DEBUG", "finalAssetCheck found outstanding assets", assets );
    	this.onExecute.dispatch( Kiwifroot.States.Launch.EVENTS.GLOBAL_ASSETS_FAILED );
		this.game.reportError( assets.length + " assets failed to load.", Kiwifroot.ERRORS.ASSET_NOT_FOUND, 'LAUNCH' );
	} else {
		this.loadFirstLevel();
	}
}


/**
* Contains the events you can listen to via the 'onExecute' property
* @property EVENTS
* @type Object
* @static
* @readOnly
* @public
*/
Kiwifroot.States.Launch.EVENTS = {
	'PRELOAD': 'preload',
	'CREATE': 'create',
	'ERROR': 'error',
	'PLUGINS_BOOTED': 'plugins-booted',
	'GLOBAL_ASSETS_LOAD': 'load-global-assets',
	'GLOBAL_ASSETS_RELOAD': 'load-global-assets-again',
	'GLOBAL_ASSETS_FAILED': 'load-global-assets-failed',
	'GLOBAL_ASSETS_COMPLETE': 'load-global-assets-complete'
};


/**
* 
* @module Kiwifroot
*
*/

/**
* The representation of a level in Gamefroot. 
* This state is used for all menus, game-levels, complete screen, on so on in gamefroot.
*
* 
* @namespace Kiwifroot.State
* @class Level
* @extends Kiwi.State
* @constructor
* 
*/
Kiwifroot.States.Level = function() {

	Kiwi.State.call( this, Kiwifroot.States.Level.NAME );

	/**
	*
	* @property onExecute
	* @type Kiwi.Signal
	* @public
	*/
	this.onExecute = new Kiwi.Signal();
};

/**
* 
* @property NAME
* @static
* @type String
* @default 'Level'
* @public
*/
Kiwifroot.States.Level.NAME = 'Level';

Kiwi.extend( Kiwifroot.States.Level, Kiwi.State );

/**
* 
* @method getAllChildrenByName
* @param name {String}
* @return {Array}
*/
Kiwifroot.States.Level.prototype.getAllChildrenByName = function(name) {

	var children = [];

	for (var i = 0; i < this.members.length; i++) {

		if (this.members[i].name === name) {
			children.push( this.members[i] );
		}
		
		if(this.members[i].objType() == "Group") {
			children = children.concat( this.members[i].getAllChildrenByName( name ) );
		}

	}

	return children;

};

/**
* 
* @method getLastChildByName
* @param name {String}
* @return {Kiwi.IChild}
*/
Kiwifroot.States.Level.prototype.getLastChildByName = function(name) {

	for (var i = this.members.length - 1; i >= 0; i--) {

		if (this.members[i].name === name) {
			return this.members[i];
		}
		
		if(this.members[i].objType() == "Group") {
			var child = this.members[i].getLastChildByName( name );

			if( child ) {
				return child;
			}
		}

	}

	return null;

};

/**
* 
* @method getRandomChildByName
* @param name {String}
* @return {Kiwi.IChild}
*/
Kiwifroot.States.Level.prototype.getRandomChildByName = function(name) {

	var children = this.getAllChildrenByName( name );

	if( children.length ) {
		return children[ this.game.rnd.integerInRange( 0, children.length - 1 ) ];
	}

	return null;

};

/**
*
* @method preload
* @public
*/
Kiwifroot.States.Level.prototype.preload = function() {

	this.onExecute.dispatch( Kiwifroot.States.Level.EVENTS.PRELOAD );

};

/**
*
* @method create
* @public
*/
Kiwifroot.States.Level.prototype.create = function() {

	this.onExecute.dispatch( Kiwifroot.States.Level.EVENTS.CREATE );

	this.game.log.log('Level is being created.');

	/**
	* Storage location for level variables used in the Blockly Script Editor.
	* @property LEVEL_VARIABLES
	* @type Object
	* @public
	*/
	this.LEVEL_VARIABLES = {};

	/**
	* Whether the whole level should be 'paused' and so not running or not.
	* Enabled each time the level is created to help reduce time lag when a level starts.
	*
	* @property _paused
	* @type Boolean
	* @default true
	* @private
	*/
	this._paused = true;

	/**
	* 
	* @property _unpauseWhenStable
	* @type Boolean
	* @default true
	* @private
	*/
	this._unpauseWhenStable = true;

	this.applyFocusEvents();

	/**
	* If the clock was paused before hand
	* @property _clockPrePaused
	* @type Boolean
	* @default false
	* @private
	*/
	this._clockPrePaused = false;

	/**
	* 
	* @property input
	* @type Kiwifroot.Input.Handler
	* @public
	*/
	this.input = new Kiwifroot.Input.Handler( this );

	/**
	*
	* @property objects
	* @type Kiwifroot.Object.Manager
	* @public
	*/
	this.objects = new Kiwifroot.Object.Manager( this );

	/**
	*
	* @property camera
	* @type Kiwifroot.Camera
	* @public
	*/
	this.camera = this.components.add( new Kiwifroot.Camera( this ) );

	/**
	*
	* @property sounds
	* @type Kiwifroot.Sound.Manager
	* @public
	*/
	this.sounds = this.components.add( new Kiwifroot.Sound.Manager( this ) );

	/**
	* 
	* @property updateSystem
	* @type Kiwifroot.UpdateSystem
	* @public
	*/
	this.updateSystem =  this.components.add( new Kiwifroot.UpdateSystem( this ) );

	/**
	* 
	* @property robots
	* @type Kiwifroot.RobotSystem
	* @deprecated
	* @public
	*/
	this.robots = this.updateSystem;
	
	/**
	* 
	* @property system
	* @type Kiwifroot.System.Manager
	* @public
	*/
	this.system = new Kiwifroot.System.Manager( this );

	/**
	Time helper for preventing out-of-state timer and tween issues
	@property timeHelper
	@type Kiwifroot.States.TimeHelper
	@public
	**/
	this.timeHelper = new Kiwifroot.States.TimeHelper( { owner: this } );

	this.start();

};

/**
* Pauses and resumes the whole level.
* @property paused
* @type Boolean
* @default false
* @public
*/
Object.defineProperty( Kiwifroot.States.Level.prototype, "paused", {
	get: function() {
		return this._paused;
	},

	set: function( val ) {


		if( val ) {

			//Only apply if we are not already paused
			if( !this._paused ) {
				this._clockPrePaused = this.game.time.clock.isPaused();
			}

			this._paused = true;
			this.onExecute.dispatch( Kiwifroot.States.Level.EVENTS.PAUSED );
			
			this.game.time.clock.pause();

		} else {

			this._unpauseWhenStable = true;
			this.onExecute.dispatch( Kiwifroot.States.Level.EVENTS.UN_PAUSED );

		}
		
	}
});

/**
* 
* @method applyDefaults
* @public
*/
Kiwifroot.States.Level.prototype.applyDefaults = function( defaultData ) {

	//Assign Background Color
	var color = defaultData.color || {};

	if( color.a ) {
		color.a = Math.floor(color.a * 255)
	} else {
		color.a = 255;
	}

	if( typeof color.r == "undefined" ) color.r = 255;
	if( typeof color.g == "undefined" ) color.g = 255;
	if( typeof color.b == "undefined" ) color.b = 255;

	this.game.stage.rgbaColor = {
		r: color.r,
		g: color.g,
		b: color.b,
		a: color.a
	};

	this.sounds.keepMusicOnDestroy = defaultData.keepMusicDuringSwitch;

	//Background Color
	if( defaultData.music ) {
		this.sounds.playBackgroundTrack( defaultData.music );
	}

	//Camera
	this.camera.applyDefaults( defaultData.camera );

};


/**
*
* @method start
* @public
*/
Kiwifroot.States.Level.prototype.start = function() {
	
	this.applyDefaults( this.game.info.currentLevel.data );

	//Create a list of avaliable object types 
	for( var i = 0; i < this.game.info.currentLevel.data.definitions.length; i++ ) {
		this.objects.createDefinition( this.game.info.currentLevel.data.definitions[ i ] );
	}
	
	var gameobjects = this.objects.createFromArray( this.game.info.currentLevel.data.gameObjects, this, true, false );

	this.bootComponents( gameobjects );
	
	this.system.start();

	this.onExecute.dispatch( Kiwifroot.States.Level.EVENTS.START );
};

Kiwifroot.States.Level.prototype.bootComponents = function( array ) {

	var i = array.length;

	while( i-- ) {
		if( array[ i ] ) {
			if( Kiwi.Utils.Common.isArray( array[ i ] ) ) {
				this.bootComponents( array[ i ] );
			} else {	
				this.objects.component.bootComponentsOnGameObjectPassed( array[ i ] );
			}
		}
	}

};

Kiwifroot.States.Level.prototype.preUpdate = function() {

	
	if( !this.paused ) {
		Kiwi.State.prototype.preUpdate.call( this );
	} 

};

Kiwifroot.States.Level.prototype.update = function() {
	
	if( !this.paused ) {
		Kiwi.State.prototype.update.call( this );
	}

};

Kiwifroot.States.Level.prototype.postUpdate = function() {
	
	if( !this.paused ) {
		Kiwi.State.prototype.postUpdate.call( this );
	}

	if( this._unpauseWhenStable && this._paused ) {

		if( this.game.fpsReadout.stable ) {
			this._paused = false;
			this._unpauseWhenStable = false;

			if( !this._clockPrePaused ) {		
				this.game.time.clock.resume();
			}
		}

	}

};



/**
*
* @method shutDown
* @public
*/
Kiwifroot.States.Level.prototype.shutDown = function() {

	this.onExecute.dispatch( Kiwifroot.States.Level.EVENTS.SHUT_DOWN );

	this.removeFocusEvents();

	//Destroy all of the gameobjects!!
	this.destroy( true );


	//Remove all of the components. 
	//Clear it up for the next level.
	this.components.removeAll();

	this.system.destroy();
	delete this.system;

	//this.sounds.destroy();
	delete this.sounds;

	//this.camera.destroy();
	delete this.camera;

	delete this.updateSystem;
	delete this.robots;

	this.objects.destroy();
	delete this.objects;

	this.input.destroy();
	delete this.input;

	//Delete the assets for this level...
	this.game.asset.removeAllByTag( Kiwifroot.Asset.TAG.LEVEL );

};


Kiwifroot.States.Level.prototype.pauseCheck = function() {
	this.paused = !this.game.stage.visibility;
};


Kiwifroot.States.Level.prototype.applyFocusEvents = function() {

	this.game.stage.onFocus.add( this.pauseCheck, this);
	this.game.stage.onBlur.add( this.pauseCheck, this);
	this.game.stage.onVisibilityChange.add( this.pauseCheck, this);

};


Kiwifroot.States.Level.prototype.removeFocusEvents = function() {

	this.game.stage.onFocus.remove( this.pauseCheck, this);
	this.game.stage.onBlur.remove( this.pauseCheck, this);
	this.game.stage.onVisibilityChange.remove( this.pauseCheck, this);
};


/**
* Contains the events you can listen to via the 'onExecute' property
* @property EVENTS
* @type Object
* @static
* @readOnly
* @public
*/
Kiwifroot.States.Level.EVENTS = {
	'PRELOAD': 'preload',
	'CREATE': 'create',
	'START': 'start',
	'SHUT_DOWN': 'shut-down',
	'PAUSED': 'paused',
	'UN_PAUSED': 'unpaused'
};

/**
* 
* @module Kiwifroot
*
*/

/**
* Handles the loading of assets for a singular level in gamefroot.
*
* 
* @namespace Kiwifroot.State
* @class Preloader
* @extends Kiwi.State
* @constructor
* 
*/
Kiwifroot.States.Preloader = function() {

	Kiwi.State.call( this, Kiwifroot.States.Preloader.NAME );

	/**
	* Dispatches events during the loading phase of a level. 
	* 
	* @property onExecute
	* @type Kiwi.Signal
	* @public
	*/
	this.onExecute = new Kiwi.Signal();

};


/**
* 
* @property NAME
* @type String
* @default 'Preloader'
* @static
* @public
*/
Kiwifroot.States.Preloader.NAME = 'Preloader';

Kiwi.extend( Kiwifroot.States.Preloader, Kiwi.State );


/**
* 
* @method preload
* @public
*/
Kiwifroot.States.Preloader.prototype.preload = function(){

	var cl = this.game.info.currentLevel;
	
	if( !cl ) {
		return;
	}

	//Look at 'currentLevel' and load in the json if it has no data.
	if( !cl.hasData ) {

		this.game.log.log( 'Loading in level data.' );
		this.addJSON( 'level-' + cl.id, this.game.asset.getUrl( cl.url ), false );

	} 

	//If it exists, do not load anything.
    this.onExecute.dispatch( Kiwifroot.States.Preloader.EVENTS.PRELOAD );

};


/**
*
* @method create
* @public
*/
Kiwifroot.States.Preloader.prototype.create = function() {

    this.onExecute.dispatch( Kiwifroot.States.Preloader.EVENTS.CREATE );

	var cl = this.game.info.currentLevel;

	if( !cl ) {
		this.game.reportError( 'Opps, well this is embarrassing. No current level found.', Kiwifroot.ERRORS.CURRENT_LEVEL_NOT_FOUND, "RUNTIME" );
		return;
	}

	//Then check the file store.
	if( this.data[ 'level-' + cl.id ] ) {

		try {
			var extract = JSON.parse( this.data[ 'level-' + cl.id ].data );
		} catch(e) {
			this.game.log.error( 'Error parsing level json. Check json for malformation.' );
		}

		if( extract ) {
			cl.assignData( extract );
		}

	}


	//Check to see if the level now has data.
	if( !cl.hasData ) {
		this.game.reportError( 'The current level does not have any data. Cannot progress.', Kiwifroot.ERRORS.CURRENT_LEVEL_NO_DATA, "RUNTIME" );
		return;
	}


	//Read the data from 'currentLevel' and see if there are any assets to be loaded.
	if( cl.data.assets.length <= 0 ) {
		this.game.log.log( 'Current level doesn\'t have any assets to load. Skipping asset loading.' );
		this.progressToLevel();
		return;
	}


	this.showUserLoadScreen();

	this._loadLevelAssets();

};


/**
*
* @method showUserLoadScreen
* @public
*/
Kiwifroot.States.Preloader.prototype.showUserLoadScreen = function() {

	/**
	*
	* @property objects
	* @type Kiwifroot.Object.Manager
	* @public
	*/
	this.objects = new Kiwifroot.Object.Manager( this );

	/**
	*
	* @property sounds
	* @type Kiwifroot.Sound.Manager
	* @public
	*/
	this.sounds = this.components.add( new Kiwifroot.Sound.Manager( this ) );


	this.applyDefaults( this.game.info.currentLevel.data.loader );


	for( var i = 0; i < this.game.info.currentLevel.data.loader.definitions.length; i++ ) {
		this.objects.createDefinition( this.game.info.currentLevel.data.loader.definitions[ i ] );
	}
	this.objects.createFromArray( this.game.info.currentLevel.data.loader.gameObjects, this, true );

	if( this.game.info.currentLevel.data.loader.bar.addToTop ) {
		this.addChild( this.loadingBar );
	}

};

/**
* 
* @method applyDefaults
* @public
*/
Kiwifroot.States.Preloader.prototype.applyDefaults = function( defaultData ) {

	//Assign Background Color
	var color = defaultData.color || {};

	if( color.a ) {
		color.a = Math.floor(color.a * 255)
	} else {
		color.a = 255;
	}

	if( typeof color.r == "undefined" ) color.r = 0;
	if( typeof color.g == "undefined" ) color.g = 0;
	if( typeof color.b == "undefined" ) color.b = 0;

	this.game.stage.rgbaColor = {
		r: color.r,
		g: color.g,
		b: color.b,
		a: color.a
	};

	this.sounds.keepMusicOnDestroy = defaultData.keepMusicDuringSwitch;

	//Background Color
	if( defaultData.music ) {
		this.sounds.playBackgroundTrack( defaultData.music );
	}


	//Loading bar
	this.loadingBar = new Kiwi.GameObjects.Sprite( this, this.textures.kiwifrootTextureAtlas, 0, 0 );
	this.loadingBar.cellIndex = 1;
	this.loadingBar.scaleX = 0;
	this.loadingBar.anchorPointX = 0;
	this.addChild( this.loadingBar );

	//Options
	if( typeof defaultData.bar.y !== "undefined" ) {
		this.loadingBar.y = defaultData.bar.y; 
	} else {
		this.loadingBar.y = (this.game.stage.height - this.loadingBar.height);
	}
	this.loadingBar.visible = defaultData.bar.visible;

	if( defaultData.bar.tags.length > 0 ) {
		this.loadingBar.addTag.apply( this.loadingBar, defaultData.bar.tags );
	}

	this.tween = this.game.tweens.create( this.loadingBar );
};

/**
*
* @method _loadLevelAssets
* @public
*/
Kiwifroot.States.Preloader.prototype._loadLevelAssets = function() {

    this.onExecute.dispatch( Kiwifroot.States.Preloader.EVENTS.ASSETS_LOAD );

	var cl = this.game.info.currentLevel;
	
	this.game.log.log( 'Starting to load level assets.' );
	this.assetsLoaded = false;


	//Add Loading Events
    this.game.loader.onQueueProgress.add( this._loadProgress, this );
	this.game.loader.onQueueComplete.addOnce( this.assetLoadComplete, this );


    //Loop through the files and load them in...
    this.game.log.log( cl.data.assets.length + ' assets to be loaded.' );
    for( var i = 0; i < cl.data.assets.length; i++ ) {
    	this.game.asset.load( cl.data.assets[ i ] );
    }

    //Start the load
    this.game.loader.startLoad();

};


/**
* 
* @method _loadProgress
* @param percent {Number}
* @param bytes {Number}
* @param file {Kiwi.Files.File}
* @private
*/ 
Kiwifroot.States.Preloader.prototype._loadProgress = function(percent, bytes, file) {

	this.game.log.log( 'Level asset load percentage: ' + percent );
	var scale = ( this.game.stage.width * ( percent / 100 ) ) / this.loadingBar.width;

	this.tween.onComplete( this.checkProgress, this );
	this.tween.delay( 50 );
	this.tween.to( { scaleX: scale }, 250, Kiwi.Animations.Tweens.Easing.Cubic.Out, true );

};


/**
*
* @method assetloadComplete
* @public
*/
Kiwifroot.States.Preloader.prototype.assetLoadComplete = function() {

    this.onExecute.dispatch( Kiwifroot.States.Preloader.EVENTS.ASSETS_COMPLETE );

	//Wait for the tween to complete first 
	this.assetsLoaded = true;
    this.game.log.log( 'Level assets have finished loading.' );
	this.game.loader.onQueueProgress.remove( this._loadProgress, this );

	this.checkProgress();

};



/**
* 
* @method checkProgress
* @public
*/
Kiwifroot.States.Preloader.prototype.checkProgress = function() {
	
	if( !this.tween.isRunning && this.assetsLoaded )  {
		this.game.time.clock.setTimeout( function() {

			this.checkAssetStatus();

		}, 250, this);
	}

};


/**
* Checks to see if all of the assets have loaded or not. 
* If any assets have not loaded, then those assets are attempted to load again.
* 
* @method checkAssetStatus
* @public
*/
Kiwifroot.States.Preloader.prototype.checkAssetStatus = function() {

	var assets = this.game.asset.removeAssetsNotLoaded();

	if( assets.length > 0 ) {

    	this.onExecute.dispatch( Kiwifroot.States.Preloader.EVENTS.ASSETS_RELOAD );
		this.game.log.log( assets.length  + ' asset failed to load. Attempting to reload.');

		//Add Loading Events
		this.game.loader.onQueueComplete.addOnce( this.finalAssetCheck, this );

	    //Loop through the files and load them in...
	    for( var i = 0; i < assets.length; i++ ) {
	    	this.game.asset.load( assets[ i ] );
	    }

	    //Start the load
	    this.game.loader.startLoad();

	} else {
		this.progressToLevel();
	}

}

Kiwifroot.States.Preloader.prototype.finalAssetCheck = function() {
	var assets = this.game.asset.removeAssetsNotLoaded();

	if( assets.length > 0 ) {
		//Report error
    	this.onExecute.dispatch( Kiwifroot.States.Preloader.EVENTS.ASSETS_FAILED );
		this.game.reportError( assets.length + " assets failed to load.", Kiwifroot.ERRORS.ASSET_NOT_FOUND, "RUNTIME" );
	
	} else {
		this.game.log.log( 'All assets were successfully loaded the second time.' );
		this.progressToLevel();
	
	}
}


/**
*
* @method progressToLevel
* @public
*/
Kiwifroot.States.Preloader.prototype.progressToLevel = function() {

	//Go to 'game complete screen.'
	this.game.log.log( 'Switching to the Level State.' );
	this.game.states.switchState( Kiwifroot.States.Level.NAME );

};


/**
*
* @method shutDown
* @public
*/
Kiwifroot.States.Preloader.prototype.shutDown = function() {
	
    this.onExecute.dispatch( Kiwifroot.States.Preloader.EVENTS.SHUT_DOWN );
	this.components.removeAll();
	
	delete this.sounds;
	delete this.loadingBar;

	this.tween && this.tween.stop();
	delete this.tween;

	this.objects && this.objects.destroy();
	delete this.objects;

};


/**
* Contains the events you can listen to via the 'onExecute' property
* @property EVENTS
* @type Object
* @static
* @readOnly
* @public
*/
Kiwifroot.States.Preloader.EVENTS = {
	'PRELOAD': 'preload',
	'CREATE': 'create',
	'ERROR': 'error',
	'ASSETS_LOAD': 'load-assets',
	'ASSETS_RELOAD': 'load-assets-again',
	'ASSETS_FAILED': 'load-assets-failed',
	'ASSETS_COMPLETE': 'load-assets-complete',
	'SHUT_DOWN': 'shut-down'
};
/**
State Time Helper

Derived from the KiwiJS plugin "State Time Helper v1.0.1".

This helper adds a pair of linked managers to a `State`.
These helpers are `clocks` and `tween`.
You may access the helper to create a `Clock`/`TweenManager` pair.
This pair is automatically linked, so each clock has associated tweens,
and each tween manager runs on its own clock.
The clock can also run timer functions.

The helper runs as a state component to ensure that
tween managers are updated.

By default, the helper creates `ui` and `world` pairs.
These are sufficient for the vast majority of timing purposes.
**/


Kiwifroot.States.TimeHelper = function( params ) {
    /**
    This component manages time helper functions
    and serves as central control.

    This component will automatically register itself to the owner,
    and create `clocks` and `tweens` properties on the owner.
    You may create clocks and tween managers using `create`.
    If you do not specify keys, it will automatically create
    `ui` and `world` clocks/tween managers.

    The component will automatically update tween managers.

    You may get, set, and run properties and functions on the entire
    list of clocks or tweens using functions. This may be useful for
    diagnostic purposes. Not all functions can be easily accessed
    in this way, but for some like `isPaused()` it is a convenient shortcut.

    @class TimeHelper
    @extends Kiwi.Component
    @namespace Kiwifroot.State
    @constructor
    @param params {object} Composite parameter object
        @param params.owner {Kiwi.Entity} Owner of the helper, ideally a State
        @param [params.keys=["ui","world"]] {array} List of names of
            `Clock`/`TweenManager` pairs to create
        @param [params.maxFrameDuration=100] {number} Maximum frame duration
            for clocks
        @param [params.state] {Kiwi.State} Alias for `owner`, as this is
            usually added to a state
    @return Kiwifroot.States.TimeHelper
    **/

    var i;

    if ( params.state && !params.owner ) {
        params.owner = params.state;
    }

    Kiwi.Component.call( this, params.owner, "TimeHelper" );

    params.owner.components.add( this );

    /**
    * Clock storage, mirrored on `owner`
    * @property clocks
    * @type object
    * @default {}
    */
    this.clocks = {};
    this.owner.clocks = this.clocks;

    /**
    * Tween storage, mirrored on `owner`
    * @property tweens
    * @type object
    * @default {}
    */
    this.tweens = {};
    this.owner.tweens = this.tweens;

    // Create key pairs
    if ( !params.keys ) {
        params.keys = [ "ui", "world" ];
    }
    for ( i in params.keys ) {
        this.create( params.keys[ i ] );
    }

    // Set maxframes
    for ( i in this.clocks ) {
        this.clocks[ i ].maxFrameDuration = params.maxFrameDuration || 100;
    }

    return this;
};
Kiwi.extend( Kiwifroot.States.TimeHelper, Kiwi.Component );


Kiwifroot.States.TimeHelper.prototype.create = function( key ) {
    /**
    Create a `Clock`/`TweenManager` pair.
    Link and register them.
    
    @method create
    @param key {string} Access key for the pair on `clocks` and `tweens`.
    **/

    var clock, tween;

    if ( typeof key !== "string" ) {
        Kiwi.Log.error(
            "#TimeHelper",
            "could not create invalid key name" );
        return;
    }

    if ( this.clocks[ key ] || this.tweens[ key ] ) {
        Kiwi.Log.error(
            "#TimeHelper",
            "could not create Clock/TweenManager with key",
            key,
            "as it already exists." );
        return;
    }

    clock = this.owner.game.time.addClock( key );
    tween = new Kiwi.Animations.Tweens.TweenManager( this.game, clock );

    this.clocks[ key ] = clock;
    this.tweens[ key ] = tween;

    clock.start();
};


Kiwifroot.States.TimeHelper.prototype.getOnAllClocks = function( property ) {
    /**
    Return a list of the property on all clocks.

    @method getOnAllClocks
    @param property {string} Name of the property to read
    @return array
    **/

    var i,
        array = [];

    for ( i in this.clocks ) {
        array.push( this.clocks[ i ][ property ] );
    }

    return array;
};


Kiwifroot.States.TimeHelper.prototype.getOnAllTweens = function( property ) {
    /**
    Return a list of the property on all tween managers.

    @method getOnAllTweens
    @param property {string} Name of the property to read
    @return array
    **/

    var i,
        array = [];

    for ( i in this.tweens ) {
        array.push( this.tweens[ i ][ property ] );
    }

    return array;
};


Kiwifroot.States.TimeHelper.prototype.runOnAllClocks = function( property ) {
    /**
    Execute the specified method on all clocks.
    Additional parameters will be passed to the functions.
    This returns a list of any return values.

    @method runOnAllClocks
    @param property {string} Name of the function to call
    @return {array} List of function returns
    */

    var i,
        args = [],
        returns = [];

    for ( i = 1; i < arguments.length; i++ ) {
        args.push( arguments[ i ] );
    }

    for ( i in this.clocks ) {
        returns.push(
            ( this.clocks[ i ][ property ] ).apply( this.clocks[ i ], args ) );
    }

    return returns;
};


Kiwifroot.States.TimeHelper.prototype.runOnAllTweens = function( property ) {
    /**
    Execute the specified method on all tween managers.
    Additional parameters will be passed to the functions.
    This returns a list of any return values.

    @method runOnAllClocks
    @param property {string} Name of the function to call
    @return {array} List of function returns
    **/

    var i,
        args = [],
        returns = [];

    for ( i = 1; i < arguments.length; i++ ) {
        args.push( arguments[ i ] );
    }

    for ( i in this.tweens ) {
        returns.push(
            ( this.tweens[ i ][ property ] ).apply( this.tweens[ i ], args ) );
    }

    return returns;
};


Kiwifroot.States.TimeHelper.prototype.setOnAllClocks = function(
    property, value ) {
    /**
    Set the property on all clocks.

    @method setOnAllClocks
    @param property {string} Name of the property to set
    @param value {any} Value to set
    **/

    var i;

    for ( i in this.clocks ) {
        this.clocks[ i ][ property ] = value;
    }
};


Kiwifroot.States.TimeHelper.prototype.setOnAllTweens = function(
    property, value ) {
    /**
    Set the property on all tween managers.

    @method setOnAllTweens
    @param property {string} Name of the property to set
    @param value {any} Value to set
    **/

    var i;

    for ( i in this.tweens ) {
        this.tweens[ i ][ property ] = value;
    }
};


Kiwifroot.States.TimeHelper.prototype.update = function() {
    /**
    Call every frame. Override default `Component.update`.

    @method update
    **/

    var i;

    for ( i in this.tweens ) {
        this.tweens[ i ].update();
    }
};


Kiwifroot.States.TimeHelper.prototype.destroy = function() {
    /**
    Clean up time components to avoid end-of-state errors.

    This method should be called automatically in KiwiJS versions 1.4.1
    and up.

    @method destroy
    **/

    var i, j;

    this.runOnAllClocks( "stop" );
    for ( i in this.tweens ) {
        this.tweens[ i ].removeAll();
    }

    // Somewhat naughty clock removal.
    // This violates privacy,
    // but it also prevents accumulation of orphan clocks.
    for ( i = this.game.time._clocks.length - 1; i >= 0; i-- ) {
        for ( j in this.clocks ) {
            if ( this.game.time._clocks[ i ] === this.clocks[ j ] ) {
                this.game.time._clocks.splice( i, 1 );
            }
        }
    }

    Kiwi.Component.prototype.destroy.call( this );
};

/**
* 
* @module System
* @submodule Core
*
*/


/**
* 
* 
* @namespace Kiwifroot.System.Core
* @class Camera
* @static
* 
*/
Kiwifroot.System.Core.Camera = {

	/**
	* 
	* @property type
	* @type String
	* @default 'system'
	* @static
	* @readOnly
	* @public
	*/
	type: Kiwifroot.Plugins.SYSTEM,

	/**
	* 
	* @property system
	* @type Object
	* @default Kiwifroot.Components.Camera.System
	* @static
	* @readOnly
	* @public
	*/
	System: Kiwifroot.Components.Camera.System

};	
/**
* 
* @module System
* @submodule Core
*
*/


/**
* 
* 
* @namespace Kiwifroot.System.Core
* @class ArcadePhysics
* @static
* 
*/
Kiwifroot.System.Core.ArcadePhysics = {

	/**
	* 
	* @property type
	* @type String
	* @default 'system'
	* @static
	* @readOnly
	* @public
	*/
	type: Kiwifroot.Plugins.SYSTEM,

	/**
	* 
	* @property system
	* @type Object
	* @default Kiwifroot.Physics.ArcadeSystem
	* @static
	* @readOnly
	* @public
	*/
	System: Kiwifroot.Physics.ArcadeSystem

};	

/**
* 
* 
* @module Kiwifroot
* @submodule System
*
*/

/**
*
* 
* @namespace Kiwifroot.System
* @class Manager
* @constructor
* @param state {Kiwifroot.State}
* 
*/
Kiwifroot.System.Manager = function( state ) {

	/**
	*
	* @property state
	* @type Kiwi.State
	* @public
	*/
	this.state = state;

	/**
	*
	* @property game
	* @type Kiwi.Game
	* @public
	*/
	this.game = this.state.game;

	//Create the defaults
	var c; 
	for( var index in Kiwifroot.System.Core ) {
		c = Kiwifroot.System.Core[ index ];

		if( c.System ) {
			this.add( c.System );
		}
	}


	//Create the plugins 
	this.addSystems();


};

/**
*
* @method add
* @param config {Object}
* @private
*/
Kiwifroot.System.Manager.prototype.add = function( config ) {

	//Was anything passed
	if( !config ) {
		this.game.log.error('No system config passed.');
		return false;
	}

	var comp = new config( this.state );

	if( this.state.components.hasComponent( comp.name ) ) {
		this.game.log.error("A system with the name of '" + config.name + "' already exists.");
		comp.destroy();
		return false;
	}

	//If the system has a 'configure' method
	if( comp.configure) {
		
		//Is there any parameters on the currentLevel?
		if( this.game.info.currentLevel.data.systems[ comp.name ] ) {
			this.game.log.log("System '"+comp.name+"' setting parameters.");
			comp.configure( this.game.info.currentLevel.data.systems[ comp.name ] );
		} 

	} else {
		this.game.log.log("System '"+comp.name+"' does not contain a 'configure' method.");

	}

	//Get the component 
	this.state.components.add( comp );
};


/**
*
* @method addSystems
* @private
*/
Kiwifroot.System.Manager.prototype.addSystems = function() {

	//Get the plugins
	var plugin, i, j, kfp;

	for( i = 0; i < this.game.pluginManager._plugins.length; i++ ) {

		plugin = Kiwi.Plugins[ this.game.pluginManager._plugins[ i ] ];

		//Does it exist
		if( !plugin ) {
			this.game.log.warn( "Nothing found on 'Kiwi.Plugins." + this.game.pluginManager._plugins[ i ] + "' namespace." );
			continue;
		}  

		//Is it a system?
		if( !plugin.kiwifrootPlugins || !Kiwi.Utils.Common.isArray( plugin.kiwifrootPlugins ) ) {
			//Skip to the next plugin...
			continue;
		}

		for( j = 0; j < plugin.kiwifrootPlugins.length; j++ ) {

			kfp = plugin.kiwifrootPlugins[ j ];

			if( kfp.type !== Kiwifroot.Plugins.SYSTEM ) {
				continue;
			}

			if( !kfp.system ) {
				this.game.log.warn( "'" + plugin.name + "' is missing a 'system' property." );
				continue;
			}

			this.add( kfp.system );

		}

	}

};


/**
* 
* @method start
* @public
*/
Kiwifroot.System.Manager.prototype.start = function() {

	this.game.log.log( 'Systems are starting up.' );

	var component; 

    for (var name in this.state.components._components) {

    	var component = this.state.components._components[name];

        if ( component.start ) {
            component.start();
        }

        //Check if they were configured also
        if( component.launch && this.game.info.currentLevel.data.systems[ name ] ) {
        	component.launch();
        }


    }

};


/**
* 
* @method destroy
* @public
*/
Kiwifroot.System.Manager.prototype.destroy = function() {

	delete this.state;
	delete this.game;

};

/**
* 
* @module Kiwi
* @submodule Plugins
*
*/

/**
* 
* 
* @namespace Kiwi.Plugins
* @class GamefrootText
* @static
* 
*/
Kiwi.Plugins.GamefrootText = {

	/**
	*
	* @property name
	* @type String
	* @static
	* @default 'GamefrootText'
	* @public
	*/
	name: 'GamefrootText',

	/**
	*
	* @property version
	* @type String
	* @default '0.0.1'
	* @static
	* @readOnly
	* @public
	*/
	version: '0.0.1',

	/**
	* 
	* @property minimumKiwiVersion
	* @type String
	* @default '1.3.0'
	* @static
	* @readOnly
	* @public
	*/
	minimumKiwiVersion: '1.3.0',


	/**
	* 
	* @property pluginDependencies
	* @type Array
	* @default []
	* @static
	* @readOnly
	* @public
	*/
	pluginDependencies:  [],

	/**
	*
	* @property kiwifrootPlugins
	* @type Array
	* @public
	*/
	kiwifrootPlugins: []
	

};	

// Register this with the kiwi plugin manager
Kiwi.PluginManager.register( Kiwi.Plugins.GamefrootText );


//Add the GameObject
Kiwi.Plugins.GamefrootText.kiwifrootPlugins.push( 
	{
		type: Kiwifroot.Plugins.GAMEOBJECT,
		name: 'multiline-text',
		namespace: Kiwi.Plugins.GamefrootText
	} 
);


/**
* 
* @module Kiwi
* @submodule Plugins
*
*/


/**
* 
* 
* @namespace Kiwi.Plugins
* @class GamefrootText
* @static
* 
*/

/**
*
* @method create
* @param state {Kiwi.State}
* @param params {Object}
* 	@param params.type {string}
* @public
*/
Kiwi.Plugins.GamefrootText.add = function( state, params, parent ) {
	
	params.state = state;
	
	/*
		params contain:
		x
		y
		maxWidth
		color
		size
		weight
		fontFamily
		lineHeight
		text
	*/

	var go = new Kiwi.Plugins.Text( params );
	parent.addChild( go );

	return go;

};


/**
* 
* @module Kiwi
* @submodule Plugins
*
*/

/**
* 
* 
* @namespace Kiwi.Plugins
* @class GamefrootText
* @static
* 
*/
Kiwi.Plugins.GamefrootText = {

	/**
	*
	* @property name
	* @type String
	* @static
	* @default 'GamefrootText'
	* @public
	*/
	name: 'GamefrootText',

	/**
	*
	* @property version
	* @type String
	* @default '0.0.1'
	* @static
	* @readOnly
	* @public
	*/
	version: '0.0.1',

	/**
	* 
	* @property minimumKiwiVersion
	* @type String
	* @default '1.3.0'
	* @static
	* @readOnly
	* @public
	*/
	minimumKiwiVersion: '1.3.0',


	/**
	* 
	* @property pluginDependencies
	* @type Array
	* @default []
	* @static
	* @readOnly
	* @public
	*/
	pluginDependencies:  [],

	/**
	*
	* @property kiwifrootPlugins
	* @type Array
	* @public
	*/
	kiwifrootPlugins: []
	

};	

// Register this with the kiwi plugin manager
Kiwi.PluginManager.register( Kiwi.Plugins.GamefrootText );


//Add the GameObject
Kiwi.Plugins.GamefrootText.kiwifrootPlugins.push( 
	{
		type: Kiwifroot.Plugins.GAMEOBJECT,
		name: 'multiline-text',
		namespace: Kiwi.Plugins.GamefrootText
	} 
);


/**
* 
* @module Kiwi
* @submodule Plugins
*
*/


/**
* 
* 
* @namespace Kiwi.Plugins
* @class GamefrootText
* @static
* 
*/

/**
*
* @method create
* @param state {Kiwi.State}
* @param params {Object}
* 	@param params.type {string}
* @public
*/
Kiwi.Plugins.GamefrootText.add = function( state, params, parent ) {
	
	params.state = state;
	
	/*
		params contain:
		x
		y
		maxWidth
		color
		size
		weight
		fontFamily
		lineHeight
		text
	*/

	var go = new Kiwi.Plugins.Text( params );
	parent.addChild( go );

	return go;

};

/**
* @module Kiwi
* @submodule Plugins
* @namespace Kiwi.Plugins
*/

Kiwi.Plugins.Text =
	function( params ) {

	/**
	* Text is a GameObject that is used when you are wanting to render
	* text onto the current State.
	*
	* Text has width/height and a hitbox, but because text is difficult
	* to measure, these may not be 100% accurate. It does not have an
	* "Input" component either, although you may choose to add one.
	* Be aware of these limitations.
	*
	* @class Text
	* @extends Kiwi.Entity
	* @constructor
	* @param params {object} Composite parameter object
	*	@param [params.addToState=true] {boolean} Whether the Text object
	*		should be automatically added to the State upon creation
	*	@param [params.alignment="left"] {string} Text alignment.
	*		May be "left", "right", "center",
	*		`Kiwi.Plugins.Text.TEXT_ALIGN_CENTER`,
	*		`Kiwi.Plugins.Text.TEXT_ALIGN_LEFT`,
	*		or `Kiwi.Plugins.Text.TEXT_ALIGN_RIGHT`.
	*	@param [params.alpha=1] {number} Object opacity
	*	@param [params.anchorNormalX=0] {number} Horizontal anchor point
	*		as a ratio of width
	*	@param [params.anchorNormalY=0] {number} Vertical anchor point
	*		as a ratio of height
	*	@param [params.anchorPointX=0] {number} Horizontal anchor point
	*		coordinate
	*	@param [params.anchorPointY=0] {number} Vertical anchor point
	*		coordinate
	*	@param [params.color="#000000"] {string} Text color
	*	@param [params.fontFamily="sans-serif"] {String}
	*		Font family to be used when rendering
	*	@param [params.fontSize=32] {number} Size of the text in pixels;
	*		equivalent to and overrides `size`
	*	@param [params.lineHeight="1em"] {string} Height of lines, defined
	*		in pixels or ems
	*	@param [params.lineHeightNormalized=1] {number} Height of lines in ems.
	*		Takes priority over `lineHeight` during creation.
	*	@param [params.maxHeight=Infinity] {number} Maximum pixel height
	*		of text.
	*	@param [params.maxLines=Infinity] {number} Maximum number
	*		of text lines to render.
	*	@param [params.maxWidth=Infinity] {number} Maximum pixel width
	*		of text lines.
	*	@param [params.rotation=0] {number} Initial rotation
	*	@param [params.scale=1] {number} Scale, before X and Y axes
	*	@param [params.scaleX=1] {number} Horizontal scale
	*	@param [params.scaleY=1] {number} Vertical scale
	*	@param [params.size=32] {number} Size of the text in pixels;
	*		equivalent to and overridden by `fontSize`. Deprecated.
	*	@param params.state {Kiwi.State} State that this Text belongs to
	*	@param [params.text="text"] {string} Text to be displayed
	*	@param [params.weight="normal"] {String} Weight of the text
	*	@param [params.x=0] {number} Horizontal coordinate
	*	@param [params.y=0] {number} Vertical coordinate
	*/

	/**
	* Maximum pixel height of text. If undefined, an infinite number
	* of lines will be permitted. Note that only the first 2048
	* pixel rows will display.
	*
	* @property _maxHeight
	* @type number
	* @default Infinity
	* @private
	*/
	this._maxHeight = params.maxHeight || Infinity;

	/**
	* Maximum number of text lines. If undefined, an infinite number
	* of lines will be permitted. Note that only the first 2048
	* pixel rows will display.
	*
	* @property _maxLines
	* @type number
	* @default Infinity
	* @private
	*/
	this._maxLines = params.maxLines || Infinity;

	/**
	* Maximum pixel width of text lines. If undefined, lines may be
	* infinite in length. Note that only the first 2048 pixel columns
	* will display.
	*
	* @property _maxWidth
	* @type number
	* @default Infinity
	* @private
	*/
	this._maxWidth = params.maxWidth || Infinity;

	/**
	* If the temporary canvas is dirty and needs to be re-rendered.
	*
	* @property _tempDirty
	* @type boolean
	* @private
	*/
	this._tempDirty = true;

	if ( typeof params.text !== "string" ) {
		if ( typeof params.text === "number" ) {
			params.text = "" + params.text;
		} else {
			params.text = "text";
		}
	}
	if ( isNaN( params.x ) ) {
		params.x = 0;
	}
	if ( isNaN( params.y ) ) {
		params.y = 0;
	}
	if ( params.color === void 0 ) {
		params.color = "#000000";
	}
	if ( params.size === void 0 ) {
		params.size = 32;
	}
	if ( params.fontSize === void 0 ) {
		params.fontSize = params.size;
	}
	if ( params.weight === void 0 ) {
		params.weight = "normal";
	}
	if ( params.fontFamily === void 0 ) {
		params.fontFamily = "sans-serif";
	}

	// Call super
	Kiwi.Entity.call( this, params.state, params.x, params.y );

	// Set transforms
	this.rotation = isNaN( params.rotation ) ? 0 : params.rotation;
	this.scale = isNaN( params.scale ) ? 1 : params.scale;
	this.scaleX = isNaN( params.scaleX ) ? this.scaleX : params.scaleX;
	this.scaleY = isNaN( params.scaleY ) ? this.scaleY : params.scaleY;
	this.alpha = isNaN( params.alpha ) ? 1 : params.alpha;
	this.anchorPointX = isNaN( params.anchorPointX ) ? 0 : params.anchorPointX;
	this.anchorPointY = isNaN( params.anchorPointY ) ? 0 : params.anchorPointY;

	/**
	* Horizontal anchor normal. This defines `anchorPointX` as a proportion
	* of `width`. If `anchorNormalX` is defined, it will update `anchorPointX`
	* when the dimensions of the rendered image change.
	*
	* @property _anchorNormalX
	* @type number
	* @default undefined
	* @private
	*/
	this._anchorNormalX = params.anchorNormalX;

	/**
	* Vertical anchor normal. This defines `anchorPointY` as a proportion
	* of `height`. If `anchorNormalY` is defined, it will update `anchorPointY`
	* when the dimensions of the rendered image change.
	*
	* @property _anchorNormalY
	* @type number
	* @default undefined
	* @private
	*/
	this._anchorNormalY = params.anchorNormalY;

	if ( this.game.renderOption === Kiwi.RENDERER_WEBGL ) {

		/**
		* GL renderer for this text object's internal canvas
		*
		* @property glRenderer
		* @type Kiwi.Renderers.Renderer
		*/

		this.glRenderer =
			this.game.renderer.requestSharedRenderer( "TextureAtlasRenderer" );
	}

	this.lineHeight = params.lineHeight || "1em";
	if ( params.lineHeightNormalized ) {
		this.lineHeightNormalized = params.lineHeightNormalized;
	}

	/**
	* The text that is to be rendered.
	* @property _text
	* @type string
	* @private
	*/
	this._text = params.text;

	/**
	* The weight of the font.
	* @property _fontWeight
	* @type string
	* @default "normal"
	* @private
	*/
	this._fontWeight = params.weight;

	/**
	* The size of the font.
	* @property _fontSize
	* @type number
	* @default 32
	* @private
	*/
	this._fontSize = params.fontSize;

	/**
	* The color of the text.
	* @property _fontColor
	* @type Kiwi.Utils.Color
	* @private
	*/
	this._fontColor = new Kiwi.Utils.Color( params.color );

	/**
	* The font family that is to be rendered.
	* @property _fontFamily
	* @type string
	* @default "sans-serif"
	* @private
	*/
	this._fontFamily = params.fontFamily;

	/**
	* The alignment of the text. This can either be "left", "right" or "center"
	* @property _textAlign
	* @type string
	* @default "center"
	* @private
	*/
	this._textAlign = "left";
	if ( params.alignment ) {
		this.alignment = params.alignment;
	}

	/**
	* The baseline of the text to be rendered.
	* @property _baseline
	* @type string
	* @private
	*/
	this._baseline = "top";


	/**
	* Canvas element onto which the text is rendered
	* @property _canvas
	* @type HTMLCanvasElement.
	* @private
	*/
	this._canvas = document.createElement( "canvas" );
	this._canvas.width = 2;
	this._canvas.height = 2;

	/**
	* Context for the canvas element. Used while rendering text.
	* @property _ctx
	* @type CanvasRenderingContext2D
	* @private
	*/
	this._ctx = this._canvas.getContext( "2d" );

	// Add it to the TextureLibrary
	this.atlas = new Kiwi.Textures.SingleImage(
		this.game.rnd.uuid(), this._canvas );
	this.state.textureLibrary.add( this.atlas );
	this.atlas.dirty = true;

	/**
	* Hitbox component
	* @property box
	* @type Kiwi.Components.Box
	* @public
	*/
	this.box = this.components.add( new Kiwi.Components.Box(
		this, this.x, this.y, this.width, this.height ) );

	// Auto-add to state
	if ( params.addToState !== false ) {
		this.state.addChild( this );
	}

	this._createPool();
};
Kiwi.extend( Kiwi.Plugins.Text, Kiwi.Entity );


Kiwi.Plugins.Text.prototype.create = function( game ) {

	/**
	* Execute when Kiwi Game that has been told to use this plugin
	* reaches the boot stage of the game loop.
	*
	* @method create
	* @param game {Kiwi.Game} Game that is current in the boot stage
	*/
};


Kiwi.Plugins.Text.prototype._createPool = function() {

	/**
	* Create a pool of objects to be used during rendering.
	*
	* @method _createPool
	* @private
	*/

	/**
	* Composite pool object
	*
	* @property _pool
	* @type object
	* @private
	*/
	this._pool = {
		pt1: new Kiwi.Geom.Point( 0, 0 ),
		pt2: new Kiwi.Geom.Point( 0, 0 ),
		pt3: new Kiwi.Geom.Point( 0, 0 ),
		pt4: new Kiwi.Geom.Point( 0, 0 ),
		xOffset: 0
	};
};


/**
* The name of this plugin.
*
* @property name
* @type string
* @default "Text"
*/
Kiwi.Plugins.Text.name = "Text";


/**
* The version of this plugin.
*
* @property version
* @type string
* @default "0.0.1"
*/
Kiwi.Plugins.Text.version = "0.0.1";


/**
* Returns the type of object that this is.
*
* @method objType
* @return {string} "Text"
*/
Kiwi.Plugins.Text.prototype.objType = function () {
	return "Text";
};


Object.defineProperty( Kiwi.Plugins.Text.prototype, "anchorNormalX", {

	/**
	* Horizontal anchor normal. This defines `anchorPointX` as a proportion
	* of `width`. If `anchorNormalX` is defined, it will update `anchorPointX`
	* when the dimensions of the rendered image change.
	*
	* @property anchorNormalX
	* @type number
	* @default undefined
	*/

	get: function () {
		return this._anchorNormalX;
	},
	set: function (value) {
		this._anchorNormalX = value;
		this.anchorPointX = this.width * this._anchorNormalX;
	}
} );


Object.defineProperty( Kiwi.Plugins.Text.prototype, "anchorNormalY", {

	/**
	* Vertical anchor normal. This defines `anchorPointY` as a proportion
	* of `height`. If `anchorNormalY` is defined, it will update `anchorPointY`
	* when the dimensions of the rendered image change.
	*
	* @property anchorNormalY
	* @type number
	* @default undefined
	*/

	get: function () {
		return this._anchorNormalY;
	},
	set: function (value) {
		this._anchorNormalY = value;
		this.anchorPointY = this.height * this._anchorNormalY;
	}
} );


Object.defineProperty( Kiwi.Plugins.Text.prototype, "alignment", {

	/**
	* Alignment of text. You can either use the static TEXT_ALIGN
	* constants or pass a string.
	*
	* Alias of `textAlign`.
	*
	* @property alignment
	* @type string
	*/

	get: function () {
		return this._textAlign;
	},
	set: function (value) {
		this._textAlign = value;
		this._tempDirty = true;
	}
} );


Object.defineProperty( Kiwi.Plugins.Text.prototype, "lineHeight", {

	/**
	* Height of individual text lines. Measured in pixels or ems.
	* For example, "100px" or "1.3em".
	*
	* @property lineHeight
	* @type string
	*/

	get: function() {

		/**
		* Main storage of line height.
		*
		* @property _lineHeight
		* @type string
		* @private
		*/

		return this._lineHeight;
	},
	set: function( value ) {
		this._lineHeight = value;
		this._tempDirty = true;
	}
} );


Object.defineProperty( Kiwi.Plugins.Text.prototype, "lineHeightNormalized", {

	/**
	* Height of individual text lines, determining separation
	* between lines. Measured in ems relative to font size.
	*
	* @property lineHeightNormalized
	* @type number
	*/

	get: function () {
		var factor = 1;

		if ( this._lineHeight.slice( -2 ) === "em" ) {
			factor = this._lineHeight.slice(0, this._lineHeight.length - 2 );
		} else if ( this._lineHeight.slice( -2 ) === "px" ) {
			factor = this._lineHeight.slice(0, this._lineHeight.length - 2 ) /
				this._fontSize;
		}
		
		if ( isNaN( factor ) ) {
			factor = 1;
		}
		return factor * 1;
	},
	set: function( value ) {
		if ( !isNaN( value ) ) {
			this._lineHeight = value + "em";
		}
	}
} );


Object.defineProperty(Kiwi.Plugins.Text.prototype, "text", {

	/**
	* The text that you would like to appear in this textfield.
	*
	* @property text
	* @type string
	*/

	get: function () {
		return this._text;
	},
	set: function ( value ) {
		this._text = value;
		this._tempDirty = true;
	},
	enumerable: true,
	configurable: true
} );


Object.defineProperty(Kiwi.Plugins.Text.prototype, "color", {

	/**
	* The color of the font that is contained in this textfield.
	* May be set with a string, or an array of any valid
	* Kiwi.Utils.Color arguments.
	*
	* Returns a hex string prepended with "#".
	*
	* @property color
	* @type string
	*/

	get: function () {
		return "#" + this._fontColor.getHex();
	},
	set: function ( value ) {
		if (!Kiwi.Utils.Common.isArray(value)) {
			value = [value];
		}
		this._fontColor.set.apply(this._fontColor, value);
		this._tempDirty = true;
	},
	enumerable: true,
	configurable: true
});


Object.defineProperty(Kiwi.Plugins.Text.prototype, "fontWeight", {

	/**
	* The weight of the font.
	*
	* @property fontWeight
	* @type string
	*/

	get: function () {
		return this._fontWeight;
	},
	set: function (value) {
		this._fontWeight = value;
		this._tempDirty = true;
	},
	enumerable: true,
	configurable: true
});


Object.defineProperty(Kiwi.Plugins.Text.prototype, "fontSize", {

	/**
	* The size on font when being displayed onscreen.
	* @property fontSize
	* @type number
	*/

	get: function () {
		return this._fontSize;
	},
	set: function (value) {
		this._fontSize = value;
		this._tempDirty = true;
	},
	enumerable: true,
	configurable: true
});


Object.defineProperty(Kiwi.Plugins.Text.prototype, "size", {

	/**
	* The size on font when being displayed onscreen.
	* Alias for `fontSize`.
	* @property size
	* @type number
	* @deprecated
	*/

	get: function () {
		return this._fontSize;
	},
	set: function (value) {
		this._fontSize = value;
		this._tempDirty = true;
	},
	enumerable: true,
	configurable: true
});


Object.defineProperty(Kiwi.Plugins.Text.prototype, "fontFamily", {

	/**
	* The font family that is being used to render the text.
	*
	* @property fontFamily
	* @type string
	*/

	get: function () {
		return this._fontFamily;
	},
	set: function (value) {
		this._fontFamily = value;
		this._tempDirty = true;
	},
	enumerable: true,
	configurable: true
});


Object.defineProperty( Kiwi.Plugins.Text.prototype, "maxHeight", {

	/**
	* Maximum pixel height of text. If undefined, an infinite number
	* of lines will be permitted. Note that only the first 2048
	* pixel columns will display.
	*
	* @property maxHeight
	* @type number
	* @default Infinity
	*/

	get: function() {
		return this._maxHeight;
	},
	set: function( value ) {
		this._maxHeight = value ? value : Infinity;
		this._tempDirty = true;
	},
	enumerable: true,
	configurable: true
} );


Object.defineProperty( Kiwi.Plugins.Text.prototype, "maxLines", {

	/**
	* Maximum number of text lines. If undefined, an infinite number
	* of lines will be permitted. Note that only the first 2048
	* pixel rows will display.
	*
	* @property maxLines
	* @type number
	* @default Infinity
	*/

	get: function() {
		return this._maxLines;
	},
	set: function( value ) {
		this._maxLines = value ? value : Infinity;
		this._tempDirty = true;
	},
	enumerable: true,
	configurable: true
} );


Object.defineProperty( Kiwi.Plugins.Text.prototype, "maxWidth", {

	/**
	* Maximum pixel width of text lines. If undefined, lines may be
	* infinite in length. Note that only the first 2048 pixel columns
	* will display.
	*
	* @property maxWidth
	* @type number
	* @default Infinity
	*/

	get: function() {
		return this._maxWidth;
	},
	set: function( value ) {
		this._maxWidth = value ? value : Infinity;
		this._tempDirty = true;
	},
	enumerable: true,
	configurable: true
} );


Object.defineProperty(Kiwi.Plugins.Text.prototype, "textAlign", {

	/**
	* Alignment of the text. You can either use the static TEXT_ALIGN
	* constants or pass a string.
	*
	* @property textAlign
	* @type string
	*/

	get: function () {
		return this._textAlign;
	},
	set: function (value) {
		this._textAlign = value;
		this._tempDirty = true;
	},
	enumerable: true,
	configurable: true
});


Kiwi.Plugins.Text.prototype.renderText = function () {

	/**
	* This method is used to render the text to an offscreen-canvas
	* which is held in a TextureAtlas (which is generated upon the
	* instanitation of this class). This is so that the canvas doesn't
	* render it every frame as it can be costly and so that it can be used
	* in WebGL with the TextureAtlasRenderer.
	*
	* You should not need to call this function. It will automatically
	* be invoked during the render cycle. In the event that you need to
	* get up-to-date metrics, however, you should use this method before
	* accessing object properties to ensure they are updated.
	*
	* @method renderText
	*/

	var height, i, measurements, maxWidth,
		textLine, textLines, textWords, width, word, x;

	this._ctx.font = this._fontWeight + " " + this._fontSize + "px " +
		this._fontFamily;


	// Split text onto multiple lines

	textWords = this.text;

	// Convert linebreak characters to words
	// We do not consider trailing spaces here, because we add one,
	// and the first trailing space will be stripped by line parsing.
	// This preserves any leading space that users might put on a newline,
	// such as for indentation.
	textWords = textWords.replace( / *$\s/gm, " \n " );

	textWords = textWords.split( " " );
	textLines = [];
	maxWidth = 0;
	while ( textWords.length > 0 ) {
		textLine = [];
		while ( this._ctx.measureText( textLine.join( " " ) ).width <=
				this._maxWidth && textWords.length > 0) {
			if ( textWords[ 0 ] === "\n" ) {

				// Allow line breaks
				textWords.shift();
				break;
			}
			textLine.push( textWords.shift() );
		}

		// If the last word overran the limits, remove it
		if ( this._ctx.measureText( textLine.join( " " ) ).width >
				this._maxWidth ) {
			if ( textLine.length > 1 ) {
				textWords.unshift( textLine.pop() );
			} else {

				// If a single word would overflow the entire line, hyphenate it
				textWords.unshift( textLine.pop() );
				word = "";
				while ( this._ctx.measureText( word + "-" ).width <=
						this._maxWidth && textWords[ 0 ].length > 1 ) {
					word += textWords[ 0 ].slice( 0, 1 );
					textWords[ 0 ] = textWords[ 0 ].slice( 1 );
				}
				if ( this._ctx.measureText( word + "-" ).width >
						this._maxWidth && word.length > 1 ) {

					// Put the last letter onto the next line
					textWords[ 0 ] = word.slice( -1 ) + textWords[ 0 ];
					word = word.slice( 0, word.length - 1 );
				}
				word = word + "-";
				textLine.push( word );
			}
		}

		// Finalize current line
		textLines.push( textLine.join( " " ) );

		// Track dimensions
		maxWidth = Math.max(
			maxWidth, this._ctx.measureText( textLine.join( " " ) ).width );

		// Limit number of lines
		if ( textLines.length === this._maxLines ||
				this._fontSize * this.lineHeightNormalized *
				( textLines.length + 1.5 ) > this._maxHeight ) {
			break;
		}
	}
	width = maxWidth;
	height = this._fontSize * this.lineHeightNormalized *
		( textLines.length + 0.5 );

	// Update inherited properties
	this.width = width;
	this.height = height;

	// Set normalized anchor points
	if ( this._anchorNormalX ) {
		this.anchorPointX = this._anchorNormalX * width;
	}
	if ( this._anchorNormalY ) {
		this.anchorPointY = this._anchorNormalY * height;
	}

	// Is the width base2?
	if ( Kiwi.Utils.Common.base2Sizes.indexOf( width ) === -1 ||
			width === 4096 ) {
		i = 0;
		while ( Kiwi.Utils.Common.base2Sizes[ i ] < 2048 &&
				width > Kiwi.Utils.Common.base2Sizes[ i ] ) {
			i++;
		}
		width = Kiwi.Utils.Common.base2Sizes[ i ];
	}

	// Is the height base2?
	if ( Kiwi.Utils.Common.base2Sizes.indexOf( height ) === -1 ||
			height === 4096  ) {
		i = 0;
		while ( Kiwi.Utils.Common.base2Sizes[ i ] < 2048 &&
				height > Kiwi.Utils.Common.base2Sizes[ i ] ) {
			i++;
		}
		height = Kiwi.Utils.Common.base2Sizes[ i ];
	}

	// Apply the width/height
	this._canvas.width = width;
	this._canvas.height = height;

	// Clear the canvas
	this._ctx.clearRect(0, 0, width, height);

	// Reapply the styles, as we've recreated the canvas
	this._ctx.font =
		this._fontWeight + " " + this._fontSize + "px " + this._fontFamily;
	this._ctx.fillStyle = this.color.slice( 0, 7 );
	this._ctx.textBaseline = this._baseline;

	// Draw the text
	for ( i in textLines ) {
		x = 0;
		switch ( this._textAlign ) {
			case Kiwi.Plugins.Text.TEXT_ALIGN_CENTER:
				x = ( this.width -
					this._ctx.measureText( textLines[ i ] ).width ) / 2;
				break;
			case Kiwi.Plugins.Text.TEXT_ALIGN_RIGHT:
				x = ( this.width -
					this._ctx.measureText( textLines[ i ] ).width );
				break;
		}
		this._ctx.fillText(
			textLines[ i ],
			x,
			i * this._fontSize * this.lineHeightNormalized );
	}

	// Update the cell and dirty/undirtyfy
	this.atlas.cells[ 0 ] = {
		x: 0,
		y: 0,
		w: this._canvas.width,
		h: this._canvas.height,
		hitboxes: [ {
			x: this._textAlign === Kiwi.Plugins.Text.TEXT_ALIGN_LEFT ?
				0 :
				this._textAlign === Kiwi.Plugins.Text.TEXT_ALIGN_CENTER ?
					-this.width * 0.5 :
					-this.width,
			y: 0,
			w: this.width,
			h: this.height
		} ]
	};
	this._tempDirty = false;
	this.atlas.dirty = true;
};


Kiwi.Plugins.Text.prototype.render = function ( camera ) {

	/**
	* Called by the Layer to which this Game Object is attached
	*
	* @method render
	* @param camera {Kiwi.Camera} Current camera
	* @public
	*/

	var m;

	if (this.alpha > 0 && this.visible) {

		// Render on stage
		this.game.stage.ctx.save();
		if (this.alpha > 0 && this.alpha <= 1) {
			this.game.stage.ctx.globalAlpha = this.alpha;
		}

		// Re-render text
		if (this._tempDirty) {
			this.renderText();
		}

		// Align the text
		switch (this._textAlign) {
			case Kiwi.Plugins.Text.TEXT_ALIGN_LEFT:
				this._pool.xOffset = 0;
				break;
			case Kiwi.Plugins.Text.TEXT_ALIGN_CENTER:
				this._pool.xOffset = this.width * 0.5;
				break;
			case Kiwi.Plugins.Text.TEXT_ALIGN_RIGHT:
				this._pool.xOffset = this.width;
				break;
		}

		// Draw the Image
		m = this.transform.getConcatenatedMatrix();
		this.game.stage.ctx.transform( m.a, m.b, m.c, m.d, m.tx, m.ty );
		this.game.stage.ctx.drawImage( this._canvas,
			0, 0,
			this._canvas.width, this._canvas.height,
			-this.transform.anchorPointX - this._pool.xOffset,
			-this.transform.anchorPointY,
			this._canvas.width, this._canvas.height) ;
		this.game.stage.ctx.restore();
	}
};



Kiwi.Plugins.Text.prototype.renderGL = function (gl, camera, params) {

	/**
	* Renders the GameObject using WebGL.
	*
	* @method renderGL
	* @param gl {WebGLRenderingContext} Target WebGL rendering context
	* @param camera {Kiwi.Camera} Current camera
	* @param params {Object} Composite parameter object
	* @public
	*/

	// Re-render text
	if ( this._tempDirty ) {
		this.renderText();
	}

	// Transform/Matrix
	var m = this.transform.getConcatenatedMatrix();

	// Align text
	switch (this._textAlign) {
		case Kiwi.Plugins.Text.TEXT_ALIGN_LEFT:
			this._pool.xOffset = 0;
			break;
		case Kiwi.Plugins.Text.TEXT_ALIGN_CENTER:
			this._pool.xOffset = -( this.width * 0.5 );
			break;
		case Kiwi.Plugins.Text.TEXT_ALIGN_RIGHT:
			this._pool.xOffset = -( this.width );
			break;
	}

	// Set the Point Objects.
	this._pool.pt1.setTo(
		this._pool.xOffset - this.transform.anchorPointX,
		0 - this.transform.anchorPointY );
	this._pool.pt2.setTo(
		this._canvas.width + this._pool.xOffset - this.transform.anchorPointX,
		0 - this.transform.anchorPointY );
	this._pool.pt3.setTo(
		this._canvas.width + this._pool.xOffset - this.transform.anchorPointX,
		this._canvas.height - this.transform.anchorPointY );
	this._pool.pt4.setTo(
		this._pool.xOffset - this.transform.anchorPointX,
		this._canvas.height - this.transform.anchorPointY );

	// Apply the matrix to the points
	m.transformPoint( this._pool.pt1 );
	m.transformPoint( this._pool.pt2 );
	m.transformPoint( this._pool.pt3 );
	m.transformPoint( this._pool.pt4 );

	// Add to the batch!
	this.glRenderer.concatBatch( [
		this._pool.pt1.x, this._pool.pt1.y,
		0, 0, this.alpha,
		this._pool.pt2.x, this._pool.pt2.y,
		this._canvas.width, 0, this.alpha,
		this._pool.pt3.x, this._pool.pt3.y,
		this._canvas.width, this._canvas.height, this.alpha,
		this._pool.pt4.x, this._pool.pt4.y,
		0, this._canvas.height, this.alpha
	] );
};


/**
* A static property that contains the string to center align the text.
* @property TEXT_ALIGN_CENTER
* @type string
* @static
* @final
* @public
*/
Kiwi.Plugins.Text.TEXT_ALIGN_CENTER = "center";


/**
* A static property that contains the string to right align the text.
* @property TEXT_ALIGN_RIGHT
* @type string
* @static
* @final
* @public
*/
Kiwi.Plugins.Text.TEXT_ALIGN_RIGHT = "right";


/**
* A static property that contains the string to left align the text.
* @property TEXT_ALIGN_LEFT
* @type string
* @static
* @final
* @public
*/
Kiwi.Plugins.Text.TEXT_ALIGN_LEFT = "left";


/**
* 
* @module Kiwi
* @submodule Plugins
*
*/


/**
* 
* 
* @namespace Kiwi.Plugins
* @class GamefrootParticleGameObject
* @static
* 
*/
Kiwi.Plugins.GamefrootParticles = {

	/**
	*
	* @property name
	* @type String
	* @static
	* @default 'GamefrootParticles'
	* @public
	*/
	name: 'GamefrootParticles',

	/**
	*
	* @property version
	* @type String
	* @default '1.0.0'
	* @static
	* @readOnly
	* @public
	*/
	version: '1.0.0',

	/**
	* 
	* @property minimumKiwiVersion
	* @type String
	* @default '1.1.1'
	* @static
	* @readOnly
	* @public
	*/
	minimumKiwiVersion: '1.1.1',


	/**
	* 
	* @property pluginDependencies
	* @type Array
	* @default []
	* @static
	* @readOnly
	* @public
	*/
	pluginDependencies:  [
		{
			name: "ParticlesGL",
			minimumVersion: "1.2.1"
		}
	],

	/**
	*
	* @property kiwifrootPlugins
	* @type Array
	* @public
	*/
	kiwifrootPlugins: [
	]
	

};	

// Register this with the kiwi plugin manager
Kiwi.PluginManager.register( Kiwi.Plugins.GamefrootParticles );


//Add the GameObject
Kiwi.Plugins.GamefrootParticles.kiwifrootPlugins.push( 
	{
		type: Kiwifroot.Plugins.GAMEOBJECT,
		name: 'particles',
		namespace: Kiwi.Plugins.GamefrootParticles
	} 
);


/**
* 
* @module Kiwi
* @submodule Plugins
*
*/


/**
* 
* 
* @namespace Kiwi.Plugins
* @class GamefrootParticleGameObject
* @static
* 
*/

/**
*
* @method create
* @param state {Kiwi.State}
* @param params {Object}
* 	@param params.type {string}
* @public
*/
Kiwi.Plugins.GamefrootParticles.add = function( state, params, parent ) {

	if( state.game.renderer.objType() !== "GLRenderManager" ) {
		state.game.log.warn( 'Not rendering using WebGL. Particles can only work when using the WebGL renderer.' );
		return null;
	}

	if( !this.validate( params ) ) {
		state.game.log.error( 'Could not create a Particle GameObject. Parameters passed were not valid.' );
		return null;
	}
	
	if( !state.textures[ params.imageId ] || typeof params.jsonId !== "undefined" && !state.data[ params.jsonId ] ) {
		state.game.log.error( "An asset could not be found. Object not created." );
		return null;
	}

	if( params.jsonId ) {
		try {
			var config = JSON.parse( state.data[ params.jsonId ].data );
		} catch(e) {
			state.game.log.error('Error parsing particle config file.');
			return null;
		}

	} else {
		var config = params.config;
	}
	
	var particles = new Kiwi.GameObjects.StatelessParticles( state, state.textures[ params.imageId ], params.x, params.y, config );
	
	if( params.emitting || typeof params.emitting == "undefined" ) {

		var loop = ( typeof params.looping !== "undefined" ) ? params.looping : true ; 
		var removeOnComplete = ( typeof params.removeOnComplete !== "undefined" ) ? params.removeOnComplete : true;

		particles.startEmitting( loop, removeOnComplete );
	}

	if( Kiwi.Utils.Common.isNumeric( params.scheduleStop ) ) {
		particles.scheduleStop( params.scheduleStop, true );
	}

	parent.addChild( particles );

	return particles;

};



/**
*
* @method validate
* @param params {Object} 
* @return {Boolean}
* @public
*/
Kiwi.Plugins.GamefrootParticles.validate = function( params ) {

	//Do your own validaton of the parameters passed to the 'add' method here....
	if( typeof params.imageId === "undefined" ||
		( typeof params.jsonId === "undefined" && typeof params.config === "undefined" ) ) {
		return false;
	}

	if( typeof params.x === "undefined" ) {
		params.x = 0;
	}

	if( typeof params.y === "undefined" ) {
		params.y = 0;
	}

	return true;
};



/**
* @module Kiwi
* @submodule GameObjects
* @main StatelessParticles
*/

/**
* Creates a particle game object
* @class StatelessParticles
* @extends Kiwi.Entity
* @constructor
* @param state {Kiwi.State} State to which the game object belongs
* @param atlas {Kiwi.Textures.TextureAtlas} Texture for the particle object
* @param x {number} X position of the game object
* @param y {number} Y position of the game object
* @param config {object} Particle configuration object;
*	see properties for more information.
* @param [clock] {Kiwi.Time.Clock} Clock to govern animation.
*	If omitted, will use state.game.time.clock.
* @public
* @return {Kiwi.GameObjects.StatelessParticles}
*/

Kiwi.GameObjects.StatelessParticles =
		function( state, atlas, x, y, config, clock ) {
	Kiwi.Entity.call( this, state, x, y );

	if ( !clock || clock.objType !== "Clock" ) {
		clock = state.game.time.clock;
	}

	return this.constructor( state, atlas, x, y, config, clock );

};
Kiwi.extend( Kiwi.GameObjects.StatelessParticles, Kiwi.Entity );


(function() {
	var protoProps = {

		constructor : function( state, atlas, x, y, config, clock ) {
			var i;

			/**
			* Config object. This allows you to alter any or all of the default
			*	properties of a particle object. You do not need to specify
			*	any config values; they all have default values.
			*	A complete listing is as follows:
			* <ul>
			* <li>additive: Whether to draw in additive mode. Boolean.
			*	Default false.</li>
			* <li>alpha: Overall object transparency. Number, range 0-1.
			*	More sophisticated alpha control is available via
			*	alphaGradient and alphaStops.
			*	Default 1.</li>
			* <li>alphaGradient: Alpha value at four points throughout the
			*	lifetime of each particle. Array of numbers, range 0-1.
			*	Default [ 1, 1, 1, 0 ].</li>
			* <li>alphaStops: Coordinates for alpha gradient stops.
			*	The beginning and end are always 0 and 1 respectively;
			*	this specifies the middle two stops.
			*	Array of numbers, range 0-1. Default [ 0.3, 0.7 ].</li>
			* <li>angStartMin: 0,</li>
			* <li>angStartMax: 0,</li>
			* <li>angVelocityConform: false,</li>
			* <li>colEnv0: Initial color value in the particle's lifespan.
			*	Array of three numbers, range 0-1. Default [ 1, 0, 0 ].</li>
			* <li>colEnv1: Second color value in the particle's lifespan.
			*	Array of three numbers, range 0-1. Default [ 1, 1, 0 ].</li>
			* <li>colEnv2: Third color value in the particle's lifespan.
			*	Array of three numbers, range 0-1. Default [ 1, 1, 1 ].</li>
			* <li>colEnv3: Final color value in the particle's lifespan.
			*	Array of three numbers, range 0-1. Default [ 0, 0, 0 ].</li>
			* <li>colEnvKeyframes: Coordinates for color gradient stops.
			*	The beginning and end are always 0 and 1 respectively;
			*	this specifies the middle two stops.
			*	Array of numbers, range 0-1. Default [ 0.5, 0.6 ].</li>
			* <li>endSize: Size of particle at end of lifespan in pixels.
			*	Number, default 150.</li>
			* <li>gravityX: Acceleration along X axis. Number, default 0.</li>
			* <li>gravityY: Acceleration along Y axis. Number, default -50.
			* <li>loop: Whether the particles repeat, or play once.
			*	Boolean, default true.</li>
			* <li>maxLifespan: Maximum random lifespan. Number, default 5.</li>
			* <li>maxStartTime: Maximum random start time.
			*	Number, default 6.</li>
			* <li>maxVel: Maximum random start velocity.
			*	Number, default 100.</li>
			* <li>minLifespan: Minimum random lifespan. Number, default 3.</li>
			* <li>minStartTime: Minimum random start time.
			*	Number, default 1.</li>
			* <li>minVel: Minimum random start velocity.
			*	Number, default 70.</li>
			* <li>numParts: Number of particles to emit, default 20.</li>
			* <li>posAngle: Angle of "line" emitter. Number, default 0.
			* <li>posConstrainRadial: Whether to emit from the edge of a
			*	"radial" emitter. Boolean, default true.</li>
			* <li>posConstrainRect: Whether to emit from the edge of a
			*	"rectangle" emitter. Boolean, default true.</li>
			* <li>posHeight: Height of "rectangle" emitter.
			*	Number, default 100.</li>
			* <li>posLength: Length of "line" emitter.
			*	Number, default 100.</li>
			* <li>posOffsetX: Position offset of emitter.
			*	Number, default 0.</li>
			* <li>posOffsetY: Position offset of emitter.
			*	Number, default 0.</li>
			* <li>posRadialStart: Beginning angle of arc of "radial"
			*	emitter. Number, default 4.363323129985823.</li>
			* <li>posRadialEnd: End angle of arc of "radial" emitter.
			*	Number, default 5.061454830783556.</li>
			* <li>posRadius: Radius of "radial" emitter.
			*	Number, default 50.</li>
			* <li>posShape: Shape of emitter. String, default "radial".
			*	Choose one of:
			* <ul>
			* <li>"radial"</li>
			* <li>"rectangle"</li>
			* <li>"line"</li>
			* </ul></li>
			* <li>posWidth: Width of "rectangle" emitter.
			*	Number, default 100.</li>
			* <li>startSize: Size of particle at start of lifespan in
			*	pixels. Number, default 4.</li>
			* <li>velAngle: Angle of "line" emission velocity type.
			*	Number, default 0.</li>
			* <li>velAngMin: Minimum angular velocity of emitted particles.
			*	Number, default -2.</li>
			* <li>velAngMax: Maximum angular velocity of emitted particles.
			*	Number, default 2.</li>
			* <li>velConstrainRadial: Whether to constrain velocities
			*	of particles emitted using "radial" velocity to the edge
			*	of a circle, ensuring they all have the same magnitude.
			*	Number, default false.</li>
			* <li>velConstrainRect: Whether to constrain velocities
			*	of particles emitted using "rectangle" velocity to the edge
			*	of the rectangle. Number, default false.</li>
			* <li>velHeight: Height of velocity vectors created by
			*	"rectangle" type emitter. Number, default 100.</li>
			* <li>velLength: Range of lengths of velocity vectors
			*	created by "line" type emitter. Number, default 30.</li>
			* <li>velOffsetX: Offset applied to all velocity vectors.
			*	Number, default 0.</li>
			* <li>velOffsetY: Offset applied to all velocity vectors.
			*	Number, default 0.</li>
			* <li>velRadialStart: Low angle of arc describing
			*	velocity vectors created with "radial" type velocity.
			*	Number, default 0.</li>
			* <li>velRadialEnd: High angle of arc describing
			*	velocity vectors created with "radial" type velocity.
			*	Number, default 6.283185307179586.</li>
			* <li>velRadius: Radius of velocity vectors created
			*	using "radial" type velocity. Number, default 100.</li>
			* <li>velShape: Shape of velocity vector creator.
			*	String, default "line".
			* <ul>
			* <li>"center"</li>
			* <li>"radial"</li>
			* <li>"rectangle"</li>
			* <li>"line"</li>
			* </ul></li>
			* <li>velWidth: Width of velocity vectors created by
			*	"rectangle" type emitter. Number, default 100.</li>
			* </ul>
			* @property config
			* @type Object
			* @public
			*/
			this.config = this.buildDefaultConfig();

			/**
			* Used to determine how to scale particles when the stage changes.
			* @property _stageScale
			* @type Kiwi.Geom.Point
			* @default ( 1, 1 )
			* @private
			* @since 1.1.1
			*/
			this._stageScale = new Kiwi.Geom.Point( 1, 1 );

			/**
			* Indicates whether the object has been altered
			*	and is in need of update.
			* @property dirty
			* @type Boolean
			* @public
			* @since 1.1.2
			*/
			this.dirty = false;

			/**
			* Color at stop 0 (start)
			* @property color0
			* @type Kiwi.Utils.Color
			* @private
			* @since 1.2.0
			*/
			this._color0 = new Kiwi.Utils.Color();

			/**
			* Color at stop 1
			* @property color1
			* @type Kiwi.Utils.Color
			* @private
			* @since 1.2.0
			*/
			this._color1 = new Kiwi.Utils.Color();

			/**
			* Color at stop 2
			* @property color2
			* @type Kiwi.Utils.Color
			* @private
			* @since 1.2.0
			*/
			this._color2 = new Kiwi.Utils.Color();

			/**
			* Color at stop 3 (end)
			* @property color3
			* @type Kiwi.Utils.Color
			* @private
			* @since 1.2.0
			*/
			this._color3 = new Kiwi.Utils.Color();

			/**
			* Timer used to schedule particle cessation
			* @property _timer
			* @type Kiwi.Time.Timer
			* @private
			*/
			this._timer = null;

			/**
			* Matrix used to compute angles during rendering.
			* This is a scratch value and has no other meaning.
			*
			* @property _deriveAngleTransformMatrix
			* @type Kiwi.Geom.Matrix
			* @private
			*/
			this._deriveAngleTransformMatrix = new Kiwi.Geom.Matrix();

			/**
			* Matrix used to compute angles during rendering.
			* This is a scratch value and has no other meaning.
			*
			* @property _deriveAngleOffsetMatrix
			* @type Kiwi.Geom.Matrix
			* @private
			*/
			this._deriveAngleOffsetMatrix = new Kiwi.Geom.Matrix();

			this.clock = clock;

			this.randoms = function() {
				var arr = [];
				for ( i =0; i < 5000; i++ ) {
					arr.push( Math.random() );
				}
				return arr;
			}();

			if ( typeof x === "undefined" ) {
				x = 0;
			}
			if ( typeof y === "undefined" ) {
				y = 0; }
			if( typeof config !== "undefined" ) {
				this.mergeConfig( this.config, config );
			}

			if ( this.game.renderOption === Kiwi.RENDERER_WEBGL ) {
				this.glRenderer = this.game.renderer.requestRendererInstance(
					"StatelessParticleRenderer",
					{
						config: this.config,
						gameObject: this
					} );
			}

			if ( typeof atlas === "undefined" ) {
				console.error( "A Texture Atlas was not passed when " +
					"instantiating a new StatelessParticles." );
				this.visible = false;
				this.active = false;
				return;
			}

			//Set coordinates and texture
			this.atlas = atlas;
			this.cellIndex = this.atlas.cellIndex;
			this.width = atlas.cells[ 0 ].w;
			this.height = atlas.cells[ 0 ].h;
			this.transform.rotPointX = 0;
			this.transform.rotPointY = 0;
			this.box = this.components.add(
				new Kiwi.Components.Box( this, x, y, this.width, this.height) );

			// Hide object until it is fully initialised by startEmitting
			this.visible = false;
		},

		/**
		* Sets a color stop using Kiwi.Utils.Color terminology.
		* Specify any valid Color arguments after the index.
		* You may set alpha in this way.
		* @method setColor
		* @param index {number} Index of the color stop: 0-3.
		* @public
		* @since 1.2.0
		*/
		setColor: function( index ) {
			// var args = arguments;//.slice( 1 );
			// Kiwi.Log.log( "Arguments", "#debug", arguments);
			var i,
				args = [];
			for ( i in arguments ) {
				args[ i ] = arguments[ i ];
			}
			args = args.slice( 1 );

			switch( index ) {
				case 0:
					this._color0.set.apply( this._color0, args );
					this.setConfigProp( "colEnv0",
						[ this._color0.r, this._color0.g, this._color0.b ],
						true );
					this.setConfigProp( "alphaGradient",
						[ this._color0.a,
						this.config.alphaGradient[1],
						this.config.alphaGradient[2],
						this.config.alphaGradient[3] ],
						true );
					break;
				case 1:
					this._color1.set.apply( this._color1, args );
					this.setConfigProp( "colEnv1",
						[ this._color1.r, this._color1.g, this._color1.b ],
						true );
					this.setConfigProp( "alphaGradient",
						[ this.configalphaGradient[0],
						this._color1.a,
						this.config.alphaGradient[2],
						this.config.alphaGradient[3] ],
						true );
					break;
				case 2:
					this._color2.set.apply( this._color2, args );
					this.setConfigProp( "colEnv2",
						[ this._color2.r, this._color2.g, this._color2.b ],
						true );
					this.setConfigProp( "alphaGradient",
						[ this.config.alphaGradient[0],
						this.config.alphaGradient[1],
						this._color2.a,
						this.config.alphaGradient[3] ],
						true );
					break;
				case 3:
					this._color3.set.apply( this._color3, args );
					this.setConfigProp( "colEnv3",
						[ this._color3.r, this._color3.g, this._color3.b ],
						true );
					this.setConfigProp( "alphaGradient",
						[ this.config.alphaGradient[0],
						this.config.alphaGradient[1],
						this.config.alphaGradient[2],
						this._color3.a ],
						true );
					break;
			}
		},

		/**
		* Returns a color from this object. Note that this color will not
		* update the particles if you change it; you must use "setColor".
		* @method getColor
		* @param index {number} Position of color stop, 0-3
		* @return Kiwi.Utils.Color
		* @public
		* @since 1.2.0
		*/
		getColor: function( index ) {
			switch( index ) {
				case 1:
					this._color1.set(
						this.config.colEnv1[0],
						this.config.colEnv1[1],
						this.config.colEnv1[2],
						this.config.alphaGradient[1] );
					return this._color1;
				case 2:
					this._color2.set(
						this.config.colEnv2[0],
						this.config.colEnv2[1],
						this.config.colEnv2[2],
						this.config.alphaGradient[2] );
					return this._color2;
				case 3:
					this._color3.set(
						this.config.colEnv3[0],
						this.config.colEnv3[1],
						this.config.colEnv3[2],
						this.config.alphaGradient[3] );
					return this._color3;
				default:
					this._color0.set(
						this.config.colEnv0[0],
						this.config.colEnv0[1],
						this.config.colEnv0[2],
						this.config.alphaGradient[0] );
					return this._color0;
			}
		},

		/**
		* Populates a new object with default config parameters
		* @method buildDefaultConfig
		* @return {object}
		* @public
		*/
		buildDefaultConfig: function()
		{
			return {
				"additive": false,
				"alpha": 1,
				"alphaGradient": [
					1,
					1,
					1,
					0
				],
				"alphaStops": [
					0.3,
					0.7
				],
				"angStartMin": 0,
				"angStartMax": 0,
				"angVelocityConform": false,
				"numParts": 20,
				"colEnv0": [
					1,
					0,
					0
				],
				"colEnv1": [
					1,
					1,
					0
				],
				"colEnv2": [
					1,
					1,
					1
				],
				"colEnv3": [
					0,
					0,
					0
				],
				"colEnvKeyframes": [
					0.5,
					0.6
				],
				"endSize": 150,
				"gravityX": 0,
				"gravityY": -50,
				"loop": true,
				"maxLifespan": 5,
				"maxStartTime": 6,
				"maxVel": 100,
				"minLifespan": 3,
				"minStartTime": 1,
				"minVel": 70,
				"posAngle": 0,
				"posConstrainRadial": true,
				"posConstrainRect": true,
				"posHeight": 100,
				"posLength": 100,
				"posOffsetX": 0,
				"posOffsetY": 0,
				"posRadialStart": 4.363323129985823,
				"posRadialEnd": 5.061454830783556,
				"posRadius": 50,
				"posShape": "radial",
				"posWidth": 100,
				"startSize": 4,
				"velAngle": 0,
				"velAngMin": -2,
				"velAngMax": +2,
				"velConstrainRadial": false,
				"velConstrainRect": false,
				"velHeight": 100,
				"velLength": 30,
				"velOffsetX": 0,
				"velOffsetY": 0,
				"velRadialStart": 0,
				"velRadialEnd": 6.283185307179586,
				"velRadius": 100,
				"velShape": "line",
				"velWidth": 100
			};
		},


		/**
		* Merges config objects, overwriting the first config with all
		* definitions in the second while preserving non-revised terms.
		* @method mergeConfig
		* @param config1 {object} Config object to modify
		* @param config2 {object} Config object to copy in
		* @public
		*/
		mergeConfig: function( config1, config2 ) {
			var i;

			for ( i in config2 ) {
				config1[ i ] = this.forceNumeric( config2[ i ] );
			}
		},

		/**
		* Recursively forces anything that can be a number
		* to be a number, including array members.
		* @method forceNumeric
		* @param value {any} A value to force
		* @return {any} The value
		* @public
		* @since 1.2.0
		*/
		forceNumeric: function( value ) {
			var i, num;

			if ( typeof value === "string" ) {
				num = +value;
				if ( !isNaN( num ) ) {
					return num;
				}
			}

			if ( Kiwi.Utils.Common.isArray( value ) ) {
				for ( i in value ) {
					value[ i ] = this.forceNumeric( value[ i ] );
				}
			}

			return value;
		},


		/**
		* Returns the state of the particle effect.
		* Either "stopped","started" or "stopping" 
		* @property state
		* @type boolean
		* @readonly
		* @public
		*/
		effectState : "stopped",


		/**
		* The type of object that this is.
		* @method objType
		* @return string
		* @public
		*/
		objType : function() {
			return "StatelessParticles";
		},

		/**
		* An array of vectors that conatains generated velocities
		* if useDrawingVectors is true. Used by the particle editor.
		* @property drawingVectors
		* @type array
		* @private
		*/
		drawingVectors : [],

		/**
		* If true, velocity vectors will be stored on particle generation.
		* Used by the particle editor.
		* @property useDrawingVectors
		* @type boolean
		* @private
		*/
		useDrawingVectors : false,

		/**
		* A function delegated to return a random number.
		* Used by the particle editor.
		* @property rnd
		* @type function
		* @private
		*/
		rnd : null,

		/**
		* If useRandoms is true, This array will contain pregenerate random
		* numbers which will be used every new generation refresh.
		* Used by the particle editor.
		* @property randoms
		* @type array
		* @private
		*/
		randoms : [],

		/**
		* If true, pregenerate random numbers. Used by the particle editor.
		* @property useRandoms
		* @type boolean
		* @private
		*/
		useRandoms : false,

		/**
		* The number of random numbers to generate if useRandoms is true.
		* @property numRandoms
		* @type number
		* @private
		*/
		numRandoms: 5000,

		/**
		* The index of the next random number in useRandoms.
		* Used by the particle editor.
		* @property nextRandomIndex
		* @type number
		* @private
		*/
		nextRandomIndex : -1,

		/**
		* The maximum loop length of the system. Used for calculating
		* the timeout when stopping emission. This is calculated when
		* the particles are generated. It can be overridden once
		* the emission has started.
		* @property timeoutLength
		* @type number
		* @public
		*/
		timeoutLength:0,

		/**
		* Get the next random number from the randoms list.
		* Used by the particle editor.
		* @method nextRandom
		* @return number
		* @private
		*/
		nextRandom : function() {
			this.nextRandomIndex++;
			if (this.nextRandomIndex >= this.numRandoms) {
				this.nextRandomIndex = -1;
			}
			return this.randoms[ this.nextRandomIndex ];
		},

		/**
		* Starts the system emitting particles.
		* Particles will be regenerated each time.
		* @method startEmitting
		* @param loop {boolean} Set to true for continuous looping.
		*	Overrides and updates the config loop setting. 
		* @param removeOnComplete {boolean} If not looping, then
		*	the gameobject will destroy itself after one full emission cycle.
		* @param numParts {number} Number of particles to generate,
		*	set on the config object - if not provided
		*	the current config value will be used 
		* @public
		*/
		startEmitting : function( loop, removeOnComplete, numParts ) {
			if ( typeof loop === "undefined" ) {
				loop = true;
			}
			if ( typeof removeOnComplete === "undefined" ) {
				removeOnComplete = false;
			}
			if ( typeof numParts === "undefined" ) {
				numParts = this.config.numParts;
			}

			this.config.numParts = numParts;
			this.config.loop = loop;
			
			this.glRenderer.resetTime();
			this.glRenderer.resetPauseTime();

			this.setConfig( this.config, true, true );

			if ( !loop && removeOnComplete ) {
				this.scheduleStop( this.timeoutLength * 1000, true );
			}

			this.effectState = "started";
			this.visible = true;
			this.clock.removeTimer( this._timer );
		},

		/**
		* Stops the system from emitting particles.
		* @method stopEmitting
		* @param immediate {boolean} Stops the emitter
		*	and removes any existing particles.
		* @param remove {boolean} If true the gameobject will mark itself
		*	for removal either immediately, or after a completed cycle.
		* @public
		*/
		stopEmitting : function( immediate, remove ) {
			if ( typeof immediate === "undefined") {
				immediate = false;
			}
			if ( typeof remove === "undefined") {
				remove = false;
			}

			if ( this.effectState === "started" ) {
				if ( immediate && remove ) {
					this.remove();
				} else if ( immediate && !remove ) {
					this.effectState = "stopped";
					this.visible = false;
				} else if ( !immediate && !remove ) {
					this.glRenderer.pause();
					this.effectState = "stopping";
					this.scheduleStop( this.timeoutLength * 1000, false );
				} else if ( !immediate && remove ) {
					this.config.loop = false;
					this.scheduleStop( this.timeoutLength * 1000, true );
				}
			}
		},

		/**
		* Schedules the particle effect to stop (discontinue rendering),
		*	and optionally marks the gameobject for removal.
		* @method scheduleStop
		* @param milliseconds {number} Delay time in milliseconds
		*	before being marked for removal.
		* @param remove {boolean} Mark the gameobject for removal.
		* @public
		*/
		scheduleStop: function( milliseconds, remove ) {
			var that = this;
			this.clock.removeTimer( this._timer );
			this._timer = this.clock.setTimeout( function() {
				that.effectState = "stopped";
				that.visible = false;
				if ( remove ) {
					that.remove.call( that );
				}
			}, milliseconds );
		},

		/**
		* Immediately marks the gameobject for removal.
		* @method remove
		* @public
		*/
		remove : function() {
			this.glRenderer.destroy();
			this.exists = false;
		},

		/**
		* Sets the configuration object and optionally regenerates particles
		*	and sets runtime properties.
		* @method setConfig
		* @param config {object} New configuration object
		* @param doGenerate {boolean} Immediately regenerate particles
		* @param doUniforms {boolean} Apply runtime properties.
		*	Deprecated: would apply runtime properties before rendering,
		*	and this parameter only served to create errors.
		* @public
		*/
		setConfig : function( config, doGenerate, doUniforms ) {
			this.config = config;
			this.glRenderer.setConfig( config );
			if ( doGenerate ) {
				this._generateParticles();
			}
			this.dirty = true;
		},

		/**
		* Sets a property on the configuration object and optionally
		* regenerates particles and sets runtime properties.
		* @method setConfigProp
		* @param prop {string} Name of the property to set
		* @param val {any} Value of the property to set
		* @param doGenerate {boolean} Immediately regenerate particles
		* @param doUniforms {boolean} Apply runtime properties.
		*	Deprecated: would apply runtime properties before rendering,
		*	and this parameter only served to create errors.
		* @public
		*/
		setConfigProp : function( prop, val, doGenerate, doUniforms ) {
			this.config[ prop ] = val;
			this.setConfig( this.config, doGenerate, doUniforms );
		},

		/**
		* Gets the configuration object.
		*	To change it, use setConfig or setConfigProp.
		* @method getConfig
		* @return {object}
		* @public
		*/
		getConfig : function() {
			return this.config;
		},


		/**
		* Generates particles based on configuration object.
		* @method _generateParticles
		* @private
		*/
		_generateParticles : function() {
			var angDiff, cell, cellIndex, diff, direction, i, lifespan,
				magnitude, numCells, pos, posSeed, startAng, startTime,
				vel, velAng, velSeed,
				cfg = this.config,
				vertexItems = [];
				

			this.nextRandomIndex = -1;
			this.drawingVectors = [];

			if ( this.useRandoms ) {
				this.rnd = this.nextRandom;
			} else {
				this.rnd = Math.random;
			}

			for ( i = 0; i < cfg.numParts; i++ ) {

				// Calculate pos
				pos = { x: 0, y: 0 };
				posSeed = { x: 0, y: 0 };
				vel = { x: cfg.velOffsetX, y: cfg.velOffsetY };
				velSeed = { x: 0, y: 0 };

				switch ( cfg.posShape ) {

					case "radial":
						if ( cfg.posRandomRadial ) {
							posSeed = ( cfg.posConstrainRadial ) ?
								this.randomPointCirclePerimeter(
									cfg.posRadialStart, cfg.posRadialEnd ) :
								this.randomPointCircle(
									cfg.posRadialStart, cfg.posRadialEnd );
						} else {
							posSeed = ( cfg.posConstrainRadial ) ?
							this.regularPointCirclePerimeter(
								cfg.posRadialStart, cfg.posRadialEnd,
								i, cfg.numParts - 1 ) :
							this.randomPointCircle(
								cfg.posRadialStart, cfg.posRadialEnd );
						}
						pos.x  = posSeed.x * cfg.posRadius;
						pos.y  = posSeed.y * cfg.posRadius;
						break;

					case "rectangle":
						posSeed = cfg.posConstrainRect ?
							this.randomPointRectPerimeter() :
							this.randomPointRect();
						pos.x += posSeed.x * cfg.posWidth;
						pos.y += posSeed.y * cfg.posHeight;
						break;

					case "line":
						if ( cfg.posRandomLine ) {
							posSeed = this.randomPointLine( cfg.posAngle );
						} else {
							posSeed = this.regularPointLine(
								cfg.posAngle, i, cfg.numParts - 1 );
						}
						pos.x += posSeed.x * cfg.posLength;
						pos.y += posSeed.y * cfg.posLength;
						break;

					case "point" :
						break;
				}

				switch (cfg.velShape) {

					case "center":
						direction = posSeed;
						magnitude = cfg.minVel + this.rnd() *
							(cfg.maxVel - cfg.minVel);
						vel.x = direction.x * magnitude ;
						vel.y = direction.y * magnitude ;
						break;

					case "radial":
						if ( cfg.velRandomRadial ) {
							velSeed = cfg.velConstrainRadial ?
								this.randomPointCirclePerimeter(
									cfg.velRadialStart, cfg.velRadialEnd ) :
								this.randomPointCircle(
									cfg.velRadialStart, cfg.velRadialEnd );
						} else {
							velSeed = cfg.velConstrainRadial ?
								this.regularPointCirclePerimeter(
									cfg.velRadialStart, cfg.velRadialEnd,
									i, cfg.numParts - 1 ) :
								this.randomPointCircle(
									cfg.velRadialStart, cfg.velRadialEnd );
						}

						vel.x += velSeed.x * cfg.velRadius;
						vel.y += velSeed.y * cfg.velRadius;
						break;

					case "rectangle":
						velSeed = cfg.velConstrainRect ?
							this.randomPointRectPerimeter() :
							this.randomPointRect();

						vel.x += velSeed.x * cfg.velWidth;
						vel.y += velSeed.y * cfg.velHeight;
						break;

					case "line":
						if ( cfg.velRandomLine ) {
							velSeed = this.randomPointLine( cfg.velAngle );
						} else {
							velSeed = this.regularPointLine(
								cfg.velAngle, i, cfg.numParts - 1 );
						}
						vel.x += velSeed.x * cfg.velLength;
						vel.y += velSeed.y * cfg.velLength;
						break;

					case "point":
						break;
				}

				// Angular velocity
				diff = Math.max( cfg.velAngMax, cfg.velAngMin ) -
					Math.min( cfg.velAngMax, cfg.velAngMin );
				velAng = cfg.velAngMin + this.rnd() * diff;

				// Angular spawn parameters
				angDiff = Math.abs( cfg.angStartMax - cfg.angStartMin );
				startAng = cfg.angStartMin + this.rnd() * angDiff;
				if ( cfg.angVelocityConform ) {

					// Base angle is based on velocity vector
					startAng += Math.atan2( vel.y, vel.x );
				}

				pos.x += cfg.posOffsetX;
				pos.y += cfg.posOffsetY;

				vertexItems.push( pos.x, pos.y, vel.x, vel.y );
				this.drawingVectors.push(
					{ x: pos.x, y: pos.y, vx: vel.x, vy: vel.y } );

				startTime = cfg.minStartTime + this.rnd() *
					( cfg.maxStartTime - cfg.minStartTime );
				lifespan = cfg.minLifespan + this.rnd() *
					( cfg.maxLifespan - cfg.minLifespan );

				this.timeoutLength =
					Math.max( this.timeoutLength, startTime + lifespan );
				cellIndex = 0;

				if ( cfg.cells ) {
					numCells = cfg.cells.length;
					if ( numCells > 1 ) {
						cellIndex =
							cfg.cells[ Math.floor( this.rnd() * numCells ) ];
					} else {
						cellIndex = cfg.cells[ 0 ];
					}
				}

				vertexItems.push(
					startTime,
					lifespan,
					velAng,
					startAng );
				cell = this.atlas.cells[ cellIndex ];
				vertexItems.push( cell.x, cell.y, cell.w, cell.h );
			}

			this.glRenderer.initBatch( vertexItems );
		},

		/**
		* Instructs the renderer to draw the particles.
		* @method renderGL
		* @private
		*/
		renderGL : function( gl, camera ) {
			var aspectRatioCanvas, aspectRatioWindow, scaleFactor,
				m = this.transform.getConcatenatedMatrix();

			if ( this.dirty ) {
				this.dirty = false;
				this.glRenderer.enableUniforms();
			}

			this.glRenderer.modelMatrix = m;
			this.glRenderer.setWorldAngle(
				this.deriveWorldAngle( this.transform, camera ) );
			this.glRenderer.setTextureUniforms( gl, this.atlas );

			// Set the stage scale factor when using CocoonJS
			// Because this is a WebGL-only plugin, we can safely assume
			// that we must use WebGL-specific scaling techniques,
			// as CocoonJS does not scale WebGL contexts using CSS techniques.
			if ( this.state.game.deviceTargetOption === Kiwi.TARGET_COCOON ) {
				if ( this.state.game.stage.scaleType ===
						Kiwi.Stage.SCALE_NONE ) {
					this._stageScale.setTo( 1, 1 );
				} else if ( this.state.game.stage.scaleType ===
						Kiwi.Stage.SCALE_FIT ) {
					aspectRatioCanvas = this.state.game.stage.width /
						this.state.game.stage.height;
					aspectRatioWindow = window.innerWidth /
						window.innerHeight;
					if ( aspectRatioWindow > aspectRatioCanvas ) {
						scaleFactor = window.innerHeight /
							this.state.game.stage.height;
						this._stageScale.setTo( scaleFactor, scaleFactor );
					} else {
						scaleFactor = window.innerWidth /
							this.state.game.stage.width;
						this._stageScale.setTo( scaleFactor, scaleFactor );
					}
				} else if ( this.state.game.stage.scaleType ===
						Kiwi.Stage.SCALE_STRETCH ) {
					this._stageScale.x = window.innerWidth /
						this.state.game.stage.width;
					this._stageScale.y = window.innerHeight /
						this.state.game.stage.height;
				}
			}
			this.glRenderer.stageScale.setTo(
				this._stageScale.x, this._stageScale.y );
		},

		/**
		* Computes a collapsed world rotation for the renderer.
		* @method deriveWorldAngle
		* @param transform {Kiwi.Geom.Transform} Transform of the gameObject
		* @param camera {Kiwi.Camera} Camera being rendered
		* @private
		*/
		deriveWorldAngle: function( transform, camera ) {
			var m, worldAngle,
				divisor = transform.scaleX * camera.transform.scaleX;

			this._deriveAngleTransformMatrix.copyFrom(
				transform.getConcatenatedMatrix() );
			m = this._deriveAngleTransformMatrix;

			// Apply camera perspective
			m.prependMatrix( camera.transform.getConcatenatedMatrix() );
			m.prependMatrix( this._deriveAngleOffsetMatrix.setTo( 1, 0, 0, 1,
				-camera.transform.rotPointX, -camera.transform.rotPointY ) );
			worldAngle = Math.acos( m.a / divisor );

			// acos does not distinguish between positive and negative angles,
			// so is wrong half the time. However, we know that sin will always
			// be negative when the angle is below 0 (and above -PI).
			if ( Math.asin( m.b / divisor ) < 0 ) {
				worldAngle *= -1;
			}
			return worldAngle;
		},

		/**
		* Returns a point on a unit arc based on a total number of points
		*	and an index
		* @method regularPointCirclePerimeter
		* @param a {number} Start angle of the arc
		* @param b {number} End angle of the arc
		* @param index {number} Point index
		* @param total {number} Total number of points
		* @private
		*/
		regularPointCirclePerimeter : function( a, b, index, total ) {
			var t = ( (b - a ) / total ) * index + a;
			return { x: Math.cos( t ), y: Math.sin( t ) };
		},

		/**
		* Returns a point on a unit arc
		* @method randomPointCirclePerimeter
		* @param a {number} Start angle of the arc
		* @param b {number} End angle of the arc
		* @private
		*/
		randomPointCirclePerimeter : function( a, b ) {
			var t = a + ( (b - a ) * this.rnd() );
			return { x: Math.cos( t ), y: Math.sin( t ) };
		},

		/**
		* Returns a point within the sector of a circle
		* @method randomPointCircle
		* @param a {number} Start angle of the sector
		* @param b {number} End angle of the sector
		* @private
		*/
		randomPointCircle : function( a, b ) {
			var t = a + ( (b - a )* this.rnd() );
			var u = this.rnd() + this.rnd();
			var r = ( u > 1 ) ? 2 - u : u;
			return { x: r * Math.cos( t ), y: r * Math.sin( t ) };
		},

		/**
		* Returns a point within the unit square
		* @method randomPointRect
		* @private
		*/
		randomPointRect : function() {
			return { x: this.rnd() - 0.5, y: this.rnd() -0.5 };
		},

		/**
		* Returns a point on the perimeter of the unit square
		* @method randomPointRectPerimeter
		* @private
		*/
		randomPointRectPerimeter : function() {
			var t = this.rnd() * 4;

			if ( t < 1 ) {
				return { x: t - 0.5, y: -0.5 };
			}
			if ( t < 2 ) {
				return { x: 0.5, y: t - 1.5 };
			}
			if ( t < 3 ) {
				return { x: t - 2.5, y: 0.5 };
			}

			return { x: -0.5, y: t - 3.5 };
		},

		/**
		* Returns a point on a unit line based on
		*	a total number of points and an index.
		* @method regularPointLine
		* @param radians {number} Angle of the line
		* @param index {number} Point index
		* @param total {number} Total number of points
		* @private
		*/
		regularPointLine : function( radians, index, total ) {
			var len = 1 / total * index - 0.5;
			var x = len * Math.cos( radians );
			var y = len * Math.sin( radians );
			return { x: x, y: y };
		},

		/**
		* Returns a point on a unit line.
		* @method regularPointLine
		* @param {number} radians : the angle of the line
		* @private
		*/
		randomPointLine : function( radians ) {
			var r = this.rnd() - 0.5;
			var x = r * Math.cos( radians );
			var y = r * Math.sin( radians );
			return { x: x, y: y };
		},
	};

	for ( var prop in protoProps ) {
		Kiwi.GameObjects.StatelessParticles.prototype[ prop ] =
			protoProps[ prop ];

	}
}());

/**
* The particles plugin creates a new gameobject "StatelessParticles".
*
* @module Kiwi
* @submodule Plugins
* @namespace Kiwi.Plugins
* @class ParticlesGL
*/
Kiwi.Plugins.ParticlesGL = {

	/**
	* The name of this plugin.
	* @property name
	* @type String
	* @default "ParticlesGL"
	* @public
	*/
	name:"ParticlesGL",

	/**
	* The version of this plugin.
	* @property version
	* @type String
	* @public
	*/
	version:"1.2.1",

	minimumKiwiVersion:"1.2.1",

	pluginDependencies: []
};

/**
* Registers this plugin with the Global Kiwi Plugins Manager if it is avaiable.
* 
*/
Kiwi.PluginManager.register(Kiwi.Plugins.ParticlesGL);

/**
* @module Kiwi
* @submodule Renderers
* @main StatelessParticleRenderer
*/

/**
* Renderer used by the Kiwi.GameObjects.StatelessParticle
* @class StatelessParticleRenderer
* @constructor
* @param gl {WebGLRenderingContext}
* @param shaderManager {Kiwi.Shaders.ShaderManager}
* @param params {object} Parameter object
* @param [params.config] {object} Configuration definitions
* @public
*/
Kiwi.Renderers.StatelessParticleRenderer =
		function( gl, shaderManager, params ) {
	Kiwi.Renderers.Renderer.call( this, gl, shaderManager, false, params );

	this.gl = gl;
	this._config = params.config;
	this._gameObject = params.gameObject;

	/**
	* Contains information on stage scaling.
	* @property _stageScale
	* @type Kiwi.Geom.Point
	* @default ( 1, 1 )
	* @private
	* @since 1.1.1
	*/
	this._stageScale = new Kiwi.Geom.Point( 1, 1 );
	
	if ( !this._config ) {
		console.log( "no particle configuration supplied" );
	}

	this.vertexBuffer = new Kiwi.Renderers.GLArrayBuffer( gl, 12 );

	this.shaderPair = this.shaderManager.requestShader(
		gl, "StatelessParticleShader", false );

	this.worldAngle = 0;

	/**
	* Concatenated transformation matrix of the particle object
	* currently being rendered
	*
	* @property modelMatrix
	* @type Kiwi.Geom.Matrix
	*/
	this.modelMatrix = new Kiwi.Geom.Matrix();

	/**
	* Camera matrix derived from render manager camera data.
	* Used to compute final matrix for shader.
	*
	* @property _camMatrix
	* @type Kiwi.Geom.Matrix
	*/
	this._camMatrix = new Kiwi.Geom.Matrix();

};
Kiwi.extend( Kiwi.Renderers.StatelessParticleRenderer,
	Kiwi.Renderers.Renderer );

/**
* Identification string
* @property RENDERER_ID
* @type string
* @default "StatelessParticleRenderer"
* @final
*/
Kiwi.Renderers.StatelessParticleRenderer.prototype.RENDERER_ID =
	"StatelessParticleRenderer";

/**
* Contains information on stage scaling, received from the rendered entity.
* @property stageScale
* @type Kiwi.Geom.Point
* @default ( 1, 1 )
* @public
* @since 1.1.1
*/
Object.defineProperty( Kiwi.Renderers.StatelessParticleRenderer.prototype,
		"stageScale", {
	get: function() {
		return this._stageScale;
	},
	set: function( value ) {
		this._stageScale = value;
	}
} );


/**
* Configures the shader to use the current configuration of the game object.
* @method setConfig
* @param config {object} Configuration object set up in GameObject
* @public
*/
Kiwi.Renderers.StatelessParticleRenderer.prototype.setConfig =
		function( config ) {
	this._config = config;

	// Set desired blend mode
	if ( config.additive ) {
		this.blendMode.setMode( "ADDITIVE" );
	} else {
		this.blendMode.setMode( "NORMAL" );
	}
};

/**
* Resets the timer, so that the particles begin from the start.
* @method resetTime
* @public
*/
Kiwi.Renderers.StatelessParticleRenderer.prototype.resetTime = function() {
	this.startTime = this._now();
};

/**
* Resets the pause time. This will probably hold for some 4 decades,
* longer than the physical lifetime of many devices.
* @method resetPauseTime
* @public
*/
Kiwi.Renderers.StatelessParticleRenderer.prototype.resetPauseTime =
		function() {
	this.pauseTime = 999999999;
};

/**
* Enables the renderer in the rendering pipeline.
* @method enable
* @param gl {WebGLRenderingContext}
* @param params {object}
* @param params.camMatrix {array} 3*3 transformation matrix
* @public
*/
Kiwi.Renderers.StatelessParticleRenderer.prototype.enable =
		function( gl, params ) {
	this.shaderPair = this.shaderManager.requestShader(
		gl, "StatelessParticleShader" );
	this._setStandardUniforms( gl, params.stageResolution, params.camMatrix );
	this._setConfigUniforms( gl );
};

/**
* Sets key uniforms.
* @method enableUniforms
* @param gl {WebGLRenderingContext}
* @public
*/
Kiwi.Renderers.StatelessParticleRenderer.prototype.enableUniforms =
		function( gl ) {
	this._setConfigUniforms( gl );
};

/**
* Configures basic uniforms in the shader.
* @method _setStandardUniforms
* @param gl {WebGLRenderingContext}
* @param stageResolution {Float32Array}
* @param camMatrix {array} 3*3 transformation matrix
* @private
*/
Kiwi.Renderers.StatelessParticleRenderer.prototype._setStandardUniforms =
		function( gl, stageResolution, camMatrix ) {

	// Texture
	gl.uniform1i( this.shaderPair.uniforms.uSampler.location, 0 );

	// Standard uniforms
	gl.uniformMatrix3fv( this.shaderPair.uniforms.uCamMatrix.location,
		false, camMatrix );
	gl.uniform2fv( this.shaderPair.uniforms.uResolution.location,
		stageResolution );

	this.camMatrix = new Float32Array( camMatrix.buffer );
};

/**
* Configures particle animation uniforms in the shader.
* @_setConfigUniforms
* @param gl {WebGLRenderingContext}
* @private
*/
Kiwi.Renderers.StatelessParticleRenderer.prototype._setConfigUniforms =
		function( gl ) {
	var pointSizeRange,
		cfg = this._config;
	
	gl = gl || this.gl;

	// Scale point size
	pointSizeRange = new Float32Array( [
		cfg.startSize * this._stageScale.x,
		cfg.endSize * this._stageScale.y
		] );

	// Particle uniforms
	gl.uniform1f( this.shaderPair.uniforms.uAlpha.location, cfg.alpha );
	gl.uniform4fv( this.shaderPair.uniforms.uAlphaGradient.location,
		new Float32Array( cfg.alphaGradient ) );
	gl.uniform2fv( this.shaderPair.uniforms.uAlphaStops.location,
		new Float32Array( cfg.alphaStops ) );
	gl.uniform3fv( this.shaderPair.uniforms.uColEnv0.location,
		new Float32Array( cfg.colEnv0 ) );
	gl.uniform3fv( this.shaderPair.uniforms.uColEnv1.location,
		new Float32Array( cfg.colEnv1 ) );
	gl.uniform3fv( this.shaderPair.uniforms.uColEnv2.location,
		new Float32Array( cfg.colEnv2 ) );
	gl.uniform3fv( this.shaderPair.uniforms.uColEnv3.location,
		new Float32Array( cfg.colEnv3 ) );
	gl.uniform2fv( this.shaderPair.uniforms.uColEnvKeyframes.location,
		new Float32Array( cfg.colEnvKeyframes ) );
	gl.uniform2fv( this.shaderPair.uniforms.uGravity.location,
		new Float32Array( [ cfg.gravityX, cfg.gravityY ] ) );
	gl.uniform1i( this.shaderPair.uniforms.uLoop.location,
		cfg.loop ? 1 : 0 );
	gl.uniform1f( this.shaderPair.uniforms.uPauseTime.location,
		this.pauseTime );
	gl.uniform2fv( this.shaderPair.uniforms.uPointSizeRange.location,
		pointSizeRange );
	gl.uniform1f( this.shaderPair.uniforms.uT.location, 0 );
};

/**
* Configures texture uniforms on the shader.
* @method setTextureUniforms
* @param gl {WebGLRenderingContext}
* @param textureAtlas {Kiwi.Textures.TextureAtlas}
* @public
*/
Kiwi.Renderers.StatelessParticleRenderer.prototype.setTextureUniforms =
		function( gl, textureAtlas ) {
	gl.uniform2fv( this.shaderPair.uniforms.uTextureSize.location,
		new Float32Array( [ textureAtlas.image.width,
			textureAtlas.image.height ] ) );
};

/**
* Disables the renderer to make way for subsequent batches.
* @method disable
* @param gl {WebGLRenderingContext}
* @public
*/
Kiwi.Renderers.StatelessParticleRenderer.prototype.disable = function( gl ) {
	gl.disableVertexAttribArray(
		this.shaderPair.attributes.aXYVxVy );
	gl.disableVertexAttribArray(
		this.shaderPair.attributes.aBirthLifespanAngle );
	gl.disableVertexAttribArray(
		this.shaderPair.attributes.aCellXYWH );
};

/**
* Clears the renderer to make way for new data.
* @method clear
* @public
*/
Kiwi.Renderers.StatelessParticleRenderer.prototype.clear = function() {
	this.vertexBuffer.clear();
};

/**
* The current time, used to drive stateless animation
* @property time
* @type number
* @default 0
* @public
*/
Kiwi.Renderers.StatelessParticleRenderer.prototype.time = 0;

/**
* The pause time
* @property pauseTime
* @type number
* @default 999999999
* @public
*/
Kiwi.Renderers.StatelessParticleRenderer.prototype.pauseTime = 999999999;

/**
* Pauses the particle emission.
* @method pause
* @param gl {WebGLRenderingContext}
* @public
*/
Kiwi.Renderers.StatelessParticleRenderer.prototype.pause = function( gl ) {
	gl = gl || this.gl;
	this.pauseTime = this.time;
};

/**
* Sets the "world angle"
* Configures the shader to render correctly when the world has been rotated.
* @method setWorldAngle
* @param angle {number}
* @public
*/
Kiwi.Renderers.StatelessParticleRenderer.prototype.setWorldAngle =
		function( angle ) {
	this.worldAngle = angle;
};

/**
* Renders the object using WebGL
* @method draw
* @param gl {WebGLRenderingContext}
* @public
*/
Kiwi.Renderers.StatelessParticleRenderer.prototype.draw = function( gl ) {
	this._camMatrix.setTo(
		this.camMatrix[ 0 ], this.camMatrix[ 1 ],
		this.camMatrix[ 3 ], this.camMatrix[ 4 ],
		this.camMatrix[ 6 ], this.camMatrix[ 7 ] );
	this._camMatrix.appendMatrix( this.modelMatrix );
	gl.uniformMatrix3fv( this.shaderPair.uniforms.uCamMatrix.location,
		false, new Float32Array( [
			this._camMatrix.a, this._camMatrix.b, 0,
			this._camMatrix.c, this._camMatrix.d, 0,
			this._camMatrix.tx, this._camMatrix.ty, 1 ] ) );

	// calculate time
	this.time = this._now() - this.startTime;
	gl.uniform1f( this.shaderPair.uniforms.uT.location, this.time );

	// World angle including current camera perspective
	gl.uniform1f( this.shaderPair.uniforms.uWorldAngle.location,
		this.worldAngle );

	gl.bindBuffer( gl.ARRAY_BUFFER, this.vertexBuffer.buffer );

	gl.enableVertexAttribArray( this.shaderPair.attributes.aXYVxVy );
	gl.vertexAttribPointer( this.shaderPair.attributes.aXYVxVy,
		4, gl.FLOAT, false, 48, 0 );

	gl.enableVertexAttribArray(
		this.shaderPair.attributes.aBirthLifespanAngle );
	gl.vertexAttribPointer( this.shaderPair.attributes.aBirthLifespanAngle,
		4, gl.FLOAT, false, 48, 16 );

	gl.enableVertexAttribArray( this.shaderPair.attributes.aCellXYWH );
	gl.vertexAttribPointer( this.shaderPair.attributes.aCellXYWH,
		4, gl.FLOAT, false, 48, 32 );

	gl.drawArrays( gl.POINTS, 0,this._config.numParts );
};

/**
* Updates the stage resolution so that the image renders at the correct size.
* @method updateStageResolution
* @param gl {WebGLRenderingContext}
* @param res {Float32Array}
* @public
*/
Kiwi.Renderers.StatelessParticleRenderer.prototype.updateStageResolution =
		function( gl, res ) {
	gl.uniform2fv( this.shaderPair.uniforms.uResolution.location, res );
};

/**
* Updates the texture information.
* @method updateTextureSize
* @param gl {WebGLRenderingContext}
* @param size {Float32Array}
* @public
*/
Kiwi.Renderers.StatelessParticleRenderer.prototype.updateTextureSize =
		function( gl, size ) {
	gl.uniform2fv( this.shaderPair.uniforms.uTextureSize.location, size );
};

/**
* Uploads the vertex buffer. Because these particles are stateless,
* this can be done once and left alone, making particles very efficient.
* @method initBatch
* @param vertexItems {Array}
*/
Kiwi.Renderers.StatelessParticleRenderer.prototype.initBatch =
		function( vertexItems ) {
	this.vertexBuffer.items = vertexItems;
	this.vertexBuffer.uploadBuffer( this.gl, this.vertexBuffer.items );
};

/**
* Returns the current time
* @method _now
* @return number
* @private
* @since 1.2.0
*/
Kiwi.Renderers.StatelessParticleRenderer.prototype._now = function() {
	return this._gameObject.clock.elapsed();
};


/**
* Removes external references, allowing this to be destroyed without
* memory leaks.
* @method destroy
* @param gl {WebGLRenderingContext}
* @public
*/
Kiwi.Renderers.StatelessParticleRenderer.prototype.destroy = function( gl ) {
	gl = gl || this.gl;
	gl.deleteBuffer( this.vertexBuffer.buffer );
};

/**
* @module Kiwi
* @submodule Shaders
* @main StatelessParticleShader
*/

/**
* Shader for stateless particles
* @class StatelessParticleShader
* @constructor
* @public
*/
Kiwi.Shaders.StatelessParticleShader = function(){
	Kiwi.Shaders.ShaderPair.call( this );

	/**
	* Records the attribute locations of this shader.
	* @property attributes
	* @type object
	*/
	this.attributes = {
		aXYVxVy: null,
		aBirthLifespanAngle: null,
		aCellXYWH: null
	};
};
Kiwi.extend( Kiwi.Shaders.StatelessParticleShader, Kiwi.Shaders.ShaderPair );

/**
* Initialises the shader wrapper with references to attributes and uniforms.
* @method init
* @param gl {WebGLRenderingContext}
* @public
*/
Kiwi.Shaders.StatelessParticleShader.prototype.init = function( gl ) {
	Kiwi.Shaders.ShaderPair.prototype.init.call(this,gl);

	this.attributes.aBirthLifespanAngle = gl.getAttribLocation(
		this.shaderProgram, "aBirthLifespanAngle" );
	this.attributes.aCellXYWH = gl.getAttribLocation(
		this.shaderProgram, "aCellXYWH" );
	this.attributes.aXYVxVy = gl.getAttribLocation(
		this.shaderProgram, "aXYVxVy" );
	this.initUniforms(gl);
};

/**
* List of uniforms and types
* @property uniforms
* @final
* @type object
* @public
*/
Kiwi.Shaders.StatelessParticleShader.prototype.uniforms = {
	uAlpha: {
		type: "1f"
	},
	uAlphaGradient: {
		type: "4fv"
	},
	uAlphaStops: {
		type: "2fv"
	},
	uCamMatrix: {
		type: "mat3"
	},
	uColEnv0: {
		type: "3fv"
	},
	uColEnv1: {
		type: "3fv"
	},
	uColEnv2: {
		type: "3fv"
	},
	uColEnv3: {
		type: "3fv"
	},
	uColEnvKeyframes: {
		type: "2fv"
	},
	uGravity: {
		type: "2fv"
	},
	uLoop: {
		type: "1i"
	},
	uPauseTime: {
		type: "1f"
	},
	uPointSizeRange: {
		type: "2fv"
	},
	uResolution: {
		type: "2fv"
	},
	uSampler: {
		type: "1i",
	},
	uT: {
		type: "1f"
	},
	uTextureSize: {
		type: "2fv"
	},
	uWorldAngle: {
		type: "1f"
	}
};

/**
* Fragment shader source
* @property texture2DFrag
* @type Array
* @public
*/
Kiwi.Shaders.StatelessParticleShader.prototype.fragSource = [
	"precision mediump float;",
	"uniform sampler2D uSampler;",
	"varying vec4 vCol;",
	"varying mat4 vRotationMatrix;",
	"varying vec4 vCell;",
	"void main( void ) {",
	"	vec2 cellCoord = vCell.xy + vCell.zw * gl_PointCoord;",
	"	vec2 texCoord = ( vRotationMatrix * vec4( cellCoord, 0, 1 ) ).xy;",
	"	vec4 sampleCol = texture2D( uSampler, texCoord );",
	"	gl_FragColor.rgb = vCol.rgb * sampleCol.rgb;",
	"	gl_FragColor.a = sampleCol.a * vCol.a;",
	"}"
];


/**
* Vertex shader source
* @property texture2DVert
* @type Array
* @public
*/
Kiwi.Shaders.StatelessParticleShader.prototype.vertSource = [
	"precision mediump float;",
	"attribute vec4 aXYVxVy;",
	"attribute vec4 aBirthLifespanAngle;",
	"attribute vec4 aCellXYWH;",

	"uniform mat3 uCamMatrix;",
	"uniform vec2 uTextureSize;",
	"uniform vec2 uResolution;",
	"uniform float uT;",
	"uniform float uPauseTime;",
	"uniform vec2 uGravity;",
	
	"uniform vec2 uPointSizeRange;",
	"uniform vec3 uColEnv0;",
	"uniform vec3 uColEnv1;",
	"uniform vec3 uColEnv2;",
	"uniform vec3 uColEnv3;",
	"uniform vec2 uColEnvKeyframes;",
	"uniform vec4 uAlphaGradient;",
	"uniform vec2 uAlphaStops;",
	"uniform float uWorldAngle;",
	
	"uniform float uAlpha;",
	"uniform bool uLoop;",

	"varying vec4 vCol;",
	"varying mat4 vRotationMatrix;",
	"varying vec4 vCell;",

	"vec3 deadPos = vec3( -0.02, -0.02, 0.01 );",

	"void main(void) {",
	"	float lerp;",
	"	float birthTime = aBirthLifespanAngle.x;",
	"	float lifespan = aBirthLifespanAngle.y;",
	"	float angularVelocity = aBirthLifespanAngle.z;",
	"	float angleStart = aBirthLifespanAngle.w;",
	"	float deathTime = birthTime + lifespan;",
	"	float age = mod(uT-birthTime,lifespan);",
	"	float pauseTimeAge = mod(uPauseTime-birthTime,lifespan);",

	"	float loopBirthTime = (uT - birthTime) / lifespan;",
	"	if ( uT < birthTime || (uT >= deathTime && !uLoop ) ||",
	"			(uT >= uPauseTime - pauseTimeAge + lifespan)) {",
	"		gl_Position = vec4(deadPos.x,deadPos.y,0,0);",
	"		gl_PointSize = deadPos.z;",
	"	} else {",
	"		lerp =  age / lifespan;",
	"		gl_PointSize = mix( uPointSizeRange.x, uPointSizeRange.y, lerp );",
	"		vec2 pos = aXYVxVy.xy;",
	"		vec2 vel = aXYVxVy.zw;",
	"		pos += age * vel;",
	"		pos += 0.5 * uGravity * age * age;",
	"		pos = ( uCamMatrix * vec3( pos, 1.0 ) ).xy;",
	"		pos = ( pos / uResolution ) * 2.0 - 1.0;",
	"		gl_Position = vec4( pos * vec2( 1, -1 ), 0, 1 );",

	"		float colLerp = 1.0;",
	"		if ( lerp <= uColEnvKeyframes.x ) {",
	"			float cLerp = lerp / uColEnvKeyframes.x;",
	"			vCol = vec4( mix( uColEnv0, uColEnv1, cLerp ), 1.0 );",
	"		} else if ( lerp > uColEnvKeyframes.x &&",
	"				lerp <= uColEnvKeyframes.y ) {",
	"			float cLerp = ( lerp - uColEnvKeyframes.x ) /",
	"				( uColEnvKeyframes.y - uColEnvKeyframes.x );",
	"			vCol = vec4( mix( uColEnv1, uColEnv2, cLerp ), 1.0 );",
	"		} else {",
	"			float cLerp = ( lerp - uColEnvKeyframes.y ) /",
	"				( 1.0 - uColEnvKeyframes.y );",
	"			vCol = vec4( mix( uColEnv2, uColEnv3, cLerp ), 1.0 );",
	"		}",
	"		if (lerp <= uAlphaStops.x) {",
	"			vCol.a = mix( uAlphaGradient.x, uAlphaGradient.y,",
	"				lerp / uAlphaStops.x );",
	"		} else if ( lerp > uAlphaStops.x && lerp <= uAlphaStops.y ) {",
	"			vCol.a = mix( uAlphaGradient.y, uAlphaGradient.z,",
	"				( lerp - uAlphaStops.x ) /",
	"				( uAlphaStops.y - uAlphaStops.x ) );",
	"		} else {",
	"			vCol.a = mix( uAlphaGradient.z, uAlphaGradient.w,",
	"				( lerp - uAlphaStops.y ) / ( 1.0 - uAlphaStops.y ) );",
	"		}",

	"		vCol.a *= uAlpha;",
	"		float ang = age * angularVelocity + angleStart + uWorldAngle;",
	"		vec2 ratio = vec2( 1.0 / uTextureSize.x, 1.0 / uTextureSize.y );",
	"		vec4 normCell = aCellXYWH;",
	"		normCell.xz *= ratio;",
	"		normCell.yw *= ratio;",
	"		vec2 cellCenter = vec2( normCell.x + normCell.z / 2.0,",
	"			normCell.y + normCell.w / 2.0 );",
	"		float c = cos( ang );",
	"		float s = sin( ang );",
	"		mat4 transInMat = mat4(",
	"			1.0, 0.0, 0.0, 0.0,",
	"			0.0, 1.0, 0.0, 0.0,",
	"			0.0, 0.0, 1.0, 0.0,",
	"			cellCenter.x, cellCenter.y, 0.0, 1.0 );",
	"		mat4 rotMat = mat4(",
	"			c, -s, 0.0, 0.0,",
	"			s, c, 0.0, 0.0,",
	"			0.0, 0.0, 1.0, 0.0,",
	"			0.0, 0.0, 0.0, 1.0 );",
	"		mat4 resultMat = transInMat * rotMat;",
	"		resultMat[ 3 ][ 0 ] = resultMat[ 3 ][ 0 ] + resultMat[ 0 ][ 0 ] *",
	"			-cellCenter.x + resultMat[ 1 ][ 0 ] * -cellCenter.y;",
	"		resultMat[ 3 ][ 1 ] = resultMat[ 3 ][ 1 ] + resultMat[ 0 ][ 1 ] *",
	"			-cellCenter.x + resultMat[ 1 ][ 1 ] * -cellCenter.y;",
	"		resultMat[ 3 ][ 2 ] = resultMat[ 3 ][ 2 ] + resultMat[ 0 ][ 2 ] *",
	"			-cellCenter.x + resultMat[ 1 ][ 2 ] * -cellCenter.y;",

	"		vRotationMatrix = resultMat;",
	"		vCell = normCell;",
	"	} ",
	"}"
];


/**
* 
* @module Kiwi
* @submodule Plugins
*
*/


/**
* 
* 
* @namespace Kiwi.Plugins
* @class GamefrootPrimitives
* @static
* 
*/
Kiwi.Plugins.GamefrootPrimitives = {

	/**
	*
	* @property name
	* @type String
	* @static
	* @default 'GamefrootPrimitives'
	* @public
	*/
	name: 'GamefrootPrimitives',

	/**
	*
	* @property version
	* @type String
	* @default '1.0.3'
	* @static
	* @readOnly
	* @public
	*/
	version: '1.0.3',

	/**
	* 
	* @property minimumKiwiVersion
	* @type String
	* @default '1.1.1'
	* @static
	* @readOnly
	* @public
	*/
	minimumKiwiVersion: '1.1.1',


	/**
	* 
	* @property pluginDependencies
	* @type Array
	* @default []
	* @static
	* @readOnly
	* @public
	*/
	pluginDependencies:  [
		{
			name: "Primitives",
			minimumVersion: "1.0.3"
		}
	],

	/**
	*
	* @property kiwifrootPlugins
	* @type Array
	* @public
	*/
	kiwifrootPlugins: [
	],

	Polygon: {},

	Rectangle: {},

	Ellipse: {},
	
	Line: {},

	Triangle: {},

	Star: {}

};	

// Register this with the kiwi plugin manager
Kiwi.PluginManager.register( Kiwi.Plugins.GamefrootPrimitives );


/**
* 
* @module Kiwi
* @submodule Plugins
*
*/

/**
* 
* 
* @namespace Kiwi.Plugins
* @class GamefrootPrimitives
* @static
* 
*/

/**
*
* @method create
* @param state {Kiwi.State}
* @param params {Object}
* 	@param params.type {string}
* @public
*/

Kiwi.Plugins.GamefrootPrimitives.Ellipse.add = function( state, params, parent ) {

	if( !this.validate( params ) ) {
		state.game.log.error( 'Could not create a Ellipse GameObject. Parameters passed were not valid.' );
		return null;
	}
	
	params.state = state;

	/**
	* x
	* y
	* radius
	* 	width
	* 	height 
	* segments
	* drawFill
	* drawStroke 
	* color
	* strokeColor
	* strokeWidth
	* centerOnTransform
	*/
	
	var object = new Kiwi.Plugins.Primitives.Ellipse( params );

	parent.addChild( object );

	return object;

};



/**
*
* @method validate
* @param params {Object} 
* @return {Boolean}
* @public
*/
Kiwi.Plugins.GamefrootPrimitives.Ellipse.validate = function( params ) {

	if( typeof params.x === "undefined" ) {
		params.x = 0;
	}

	if( typeof params.y === "undefined" ) {
		params.y = 0;
	}

	if( typeof params.drawStroke === "undefined" ) {
		params.drawStroke = false;
	}

	return true;
};


/**
* 
* 
* @namespace Kiwi.Plugins
* @class GamefrootParticleGameObject
* @static
* 
*/

//Add the GameObject
Kiwi.Plugins.GamefrootPrimitives.kiwifrootPlugins.push( 
	{
		type: Kiwifroot.Plugins.GAMEOBJECT,
		name: 'ellipse',
		namespace: Kiwi.Plugins.GamefrootPrimitives.Ellipse
	} 
);


/**
* 
* @module Kiwi
* @submodule Plugins
*
*/

/**
* 
* 
* @namespace Kiwi.Plugins
* @class GamefrootPrimitives
* @static
* 
*/

/**
*
* @method create
* @param state {Kiwi.State}
* @param params {Object}
* 	@param params.type {string}
* @public
*/
Kiwi.Plugins.GamefrootPrimitives.Line.add = function( state, params, parent ) {

	if( !this.validate( params ) ) {
		state.game.log.error( 'Could not create a Line GameObject. Parameters passed were not valid.' );
		return null;
	}
	
	params.state = state;

	/**
	* x
	* y
	* points
	* color
	* strokeColor
	* strokeWidth
	*/
	
	var object = new Kiwi.Plugins.Primitives.Line( params );

	parent.addChild( object );

	return object;

};



/**
*
* @method validate
* @param params {Object} 
* @return {Boolean}
* @public
*/
Kiwi.Plugins.GamefrootPrimitives.Line.validate = function( params ) {

	if( typeof params.x === "undefined" ) {
		params.x = 0;
	}

	if( typeof params.y === "undefined" ) {
		params.y = 0;
	}

	if( !Kiwi.Utils.Common.isArray( params.points ) ) {
		return false;
	}

	return true;
};


/**
* 
* 
* @namespace Kiwi.Plugins
* @class GamefrootParticleGameObject
* @static
* 
*/

//Add the GameObject
Kiwi.Plugins.GamefrootPrimitives.kiwifrootPlugins.push( 
	{
		type: Kiwifroot.Plugins.GAMEOBJECT,
		name: 'line',
		namespace: Kiwi.Plugins.GamefrootPrimitives.Line
	} 
);


/**
* 
* @module Kiwi
* @submodule Plugins
*
*/

/**
* 
* 
* @namespace Kiwi.Plugins
* @class GamefrootPrimitives
* @static
* 
*/

/**
*
* @method create
* @param state {Kiwi.State}
* @param params {Object}
* 	@param params.type {string}
* @public
*/
Kiwi.Plugins.GamefrootPrimitives.Polygon.add = function( state, params, parent ) {

	if( !this.validate( params ) ) {
		state.game.log.error( 'Could not create a Polygon GameObject. Parameters passed were not valid.' );
		return null;
	}
	
	params.state = state;
	params.enableInput = false;

	/**
	* x
	* y
	* drawFill
	* drawStroke - false by default
	* color
	* strokeColor
	* strokeWidth
	* indices - winding order of vertices
	* vertices - points in space 
	* strokeIndices
	*/
	
	var object = new Kiwi.Plugins.Primitives.Polygon( params );

	parent.addChild( object );

	return object;

};


/**
*
* @method validate
* @param params {Object} 
* @return {Boolean}
* @public
*/
Kiwi.Plugins.GamefrootPrimitives.Polygon.validate = function( params ) {

	if( typeof params.x === "undefined" ) {
		params.x = 0;
	}

	if( typeof params.y === "undefined" ) {
		params.y = 0;
	}

	if( typeof params.drawStroke === "undefined" ) {
		params.drawStroke = false;
	}

	if( !Kiwi.Utils.Common.isArray( params.vertices ) ) {
		return false;
	}

	if( !Kiwi.Utils.Common.isArray( params.indices ) ) {
		return false;
	}

	return true;
};


//Add the GameObject
Kiwi.Plugins.GamefrootPrimitives.kiwifrootPlugins.push( 
	{
		type: Kiwifroot.Plugins.GAMEOBJECT,
		name: 'polygon',
		namespace: Kiwi.Plugins.GamefrootPrimitives.Polygon
	} 
);


/**
* 
* @module Kiwi
* @submodule Plugins
*
*/

/**
* 
* 
* @namespace Kiwi.Plugins
* @class GamefrootPrimitives
* @static
* 
*/

/**
*
* @method create
* @param state {Kiwi.State}
* @param params {Object}
* 	@param params.type {string}
* @public
*/
Kiwi.Plugins.GamefrootPrimitives.Rectangle.add = function( state, params, parent ) {

	if( !this.validate( params ) ) {
		state.game.log.error( 'Could not create a Rectangle GameObject. Parameters passed were not valid.' );
		return null;
	}
	
	params.state = state;

	/**
	* x
	* y
	* width
	* height 
	* drawFill
	* drawStroke 
	* color
	* strokeColor
	* strokeWidth
	* centerOnTransform
	*/
	
	var object = new Kiwi.Plugins.Primitives.Rectangle( params );

	parent.addChild( object );

	return object;

};



/**
*
* @method validate
* @param params {Object} 
* @return {Boolean}
* @public
*/
Kiwi.Plugins.GamefrootPrimitives.Rectangle.validate = function( params ) {

	if( typeof params.x === "undefined" ) {
		params.x = 0;
	}

	if( typeof params.y === "undefined" ) {
		params.y = 0;
	}

	if( typeof params.drawStroke === "undefined" ) {
		params.drawStroke = false;
	}

	return true;
};


/**
* 
* 
* @namespace Kiwi.Plugins
* @class GamefrootParticleGameObject
* @static
* 
*/

//Add the GameObject
Kiwi.Plugins.GamefrootPrimitives.kiwifrootPlugins.push( 
	{
		type: Kiwifroot.Plugins.GAMEOBJECT,
		name: 'rectangle',
		namespace: Kiwi.Plugins.GamefrootPrimitives.Rectangle
	} 
);


/**
* 
* @module Kiwi
* @submodule Plugins
*
*/

/**
* 
* 
* @namespace Kiwi.Plugins
* @class GamefrootPrimitives
* @static
* 
*/

/**
*
* @method create
* @param state {Kiwi.State}
* @param params {Object}
* 	@param params.type {string}
* @public
*/
Kiwi.Plugins.GamefrootPrimitives.Star.add = function( state, params, parent ) {

	if( !this.validate( params ) ) {
		state.game.log.error( 'Could not create a Star GameObject. Parameters passed were not valid.' );
		return null;
	}
	
	params.state = state;

	/**
	* x
	* y
	* radius
	* 	width
	* 	height 
	* spikeRandom
	* spikeLength
	* segments
	* drawFill
	* drawStroke 
	* color
	* strokeColor
	* strokeWidth
	* centerOnTransform
	*/
	
	var object = new Kiwi.Plugins.Primitives.Star( params );

	parent.addChild( object );

	return object;

};



/**
*
* @method validate
* @param params {Object} 
* @return {Boolean}
* @public
*/
Kiwi.Plugins.GamefrootPrimitives.Star.validate = function( params ) {

	if( typeof params.x === "undefined" ) {
		params.x = 0;
	}

	if( typeof params.y === "undefined" ) {
		params.y = 0;
	}

	if( typeof params.drawStroke === "undefined" ) {
		params.drawStroke = false;
	}

	return true;
};


/**
* 
* 
* @namespace Kiwi.Plugins
* @class GamefrootParticleGameObject
* @static
* 
*/

//Add the GameObject
Kiwi.Plugins.GamefrootPrimitives.kiwifrootPlugins.push( 
	{
		type: Kiwifroot.Plugins.GAMEOBJECT,
		name: 'star',
		namespace: Kiwi.Plugins.GamefrootPrimitives.Star
	} 
);


/**
* 
* @module Kiwi
* @submodule Plugins
*
*/

/**
* 
* 
* @namespace Kiwi.Plugins
* @class GamefrootPrimitives
* @static
* 
*/

/**
*
* @method create
* @param state {Kiwi.State}
* @param params {Object}
* 	@param params.type {string}
* @public
*/
Kiwi.Plugins.GamefrootPrimitives.Triangle.add = function( state, params, parent ) {

	if( !this.validate( params ) ) {
		state.game.log.error( 'Could not create a Triangle GameObject. Parameters passed were not valid.' );
		return null;
	}
	
	params.state = state;

	/**
	* x
	* y
	* points 
	* drawFill
	* drawStroke 
	* color
	* strokeColor
	* strokeWidth
	* centerOnTransform
	*/
	
	var object = new Kiwi.Plugins.Primitives.Triangle( params );

	parent.addChild( object );

	return object;

};



/**
*
* @method validate
* @param params {Object} 
* @return {Boolean}
* @public
*/
Kiwi.Plugins.GamefrootPrimitives.Triangle.validate = function( params ) {

	if( typeof params.x === "undefined" ) {
		params.x = 0;
	}

	if( typeof params.y === "undefined" ) {
		params.y = 0;
	}

	if( !Kiwi.Utils.Common.isArray(params.points) || params.points.length !== 3 ) {
		return false;
	}

	if( typeof params.drawStroke === "undefined" ) {
		params.drawStroke = false;
	}

	return true;
};


/**
* 
* 
* @namespace Kiwi.Plugins
* @class GamefrootParticleGameObject
* @static
* 
*/

//Add the GameObject
Kiwi.Plugins.GamefrootPrimitives.kiwifrootPlugins.push( 
	{
		type: Kiwifroot.Plugins.GAMEOBJECT,
		name: 'triangle',
		namespace: Kiwi.Plugins.GamefrootPrimitives.Triangle
	} 
);


/**
* Primitive Gameobjects plugin, providing geometric objects to the designer.
*
* @module Kiwi
* @submodule Plugins
* @namespace Kiwi.Plugins
* @class Primitives
*/
Kiwi.Plugins.Primitives = {

	/**
	* The name of this plugin.
	* @property name
	* @type String
	* @default "Primitives"
	* @public
	*/
	name:"Primitives",

	/**
	* The version of this plugin.
	* @property version
	* @type String
	* @public
	*/
	version:"1.0.4",

	minimumKiwiVersion:"1.3.0"

};

/**
* Registers this plugin with the Global Kiwi Plugins Manager if it is avaiable.
* 
*/
Kiwi.PluginManager.register(Kiwi.Plugins.Primitives);

/**
* This create method is executed when Kiwi Game that has been told to
* use this plugin reaches the boot stage of the game loop.
* @method create
* @param game{Kiwi.Game} The game that is current in the boot stage.
* @private 
*/
Kiwi.Plugins.Primitives.create = function(game) {
	
};



/**
* Polygon Gameobject
* <br><br>
* This is the master system which handles all primitives. When you create
* another primitive (Ellipse, Line, Rectangle, Star or Triangle) you are
* really creating a Polygon with some options pre-set. All primitives
* inherit parameters and methods from Polygon.
* <br><br>
* Polygons are defined with a params object. This must contain the non-optional
* parameter "state", which is a reference to the current state. It also contains
* optional transform and style information.
* <br><br>
* You may specify common transform options in the params of any primitive.
* This includes alpha, visible, x, y, rotation, scale, scaleX, scaleY,
* anchorPointX, and anchorPointY. If not specified, these default to alpha = 1,
* visible = true, x = 0, y = 0, rotation = 0, scale = 1, and the anchorPoint
* defaults to the geometric center of the object.
* <br><br>
* All primitives contain both a fill and a stroke. You may style these
* separately and enable or disable rendering of either. Available style options
* include color (the color with which the primitive is filled; an array of 3
* normalized values, from black [ 0, 0, 0 ] to white [ 1, 1, 1 ] ), drawFill
* (whether to render the fill), strokeColor (as color, but for the stroke),
* drawStroke (whether to render the stroke), and strokeWidth (the width of the
* stroke line, in pixels).
* <br><br>
* If the default primitives do not meet your requirements, you can define your
* own by using the Polygon. You will need to provide the params object with
* arrays of vertices, indices, and strokeIndices.
* <br><br>
* new Kiwi.Plugins.Primitives.Polygon( {<br>
*	state: MyGame.state,<br>
*	indices: [ 0, 1, 2, 3 ],<br>
*	vertices: [[ 0, 0 ], [ 100, 100 ], [ 200, 0 ], [ 300, 100 ] ],<br>
*	strokeIndices: [ 0, 1, 2, 0 ]<br>
* } );
* <br><br>
* All three arrays are processed to create new internal representations.
* Two Polygons created from the same arrays will not contain the same data.
* This prevents unexpected modifications from one object affecting another.
* <br><br>
* The "vertices" param is a list of points, each defined as an array of two
* points. The order of vertices does not matter for rendering, but you must be
* aware of it. A simple vertices array might read [ [ 0, 0 ], [ 100, 100 ],
* [ 200, 0 ], [ 300, 100 ] ]. Each is an XY coordinate.
* <br><br>
* The "indices" param is a list of references to vertices. It is processed
* using a TRIANGLE_STRIP procedure. This means that every three consecutive
* values on the list define a new triangle. You can add new triangles simply
* by appending a single new index. Each index is the array position of a vertex.
* For example, to draw a single triangle you could pass [ 0, 1, 2 ]. To draw two
* triangles, you could pass [ 0, 1, 2, 3 ].
* <br><br>
* The TRIANGLE_STRIP procedure is very succinct, but it doesn't allow for every
* desirable form of geometry. If you need to stop positioning triangles in one
* place and start adding them elsewhere, you can't skip over empty space.
* Fortunately, you can use a concept called "degenerate triangles" to cheat.
* <br><br>
* A degenerate triangle is one with zero area. It is formed when a triangle has
* two or three vertices in the same place. It is very easy to simply not draw a
* degenerate triangle. We can use these to connect disparate triangles. (In
* fact, the renderer uses these behind the scenes to efficiently render numerous
* primitives at once.)
* <br><br>
* To create degenerate triangles, just double up an index on either side of the
* gap. For example, if you want to draw triangles at indices [ 0, 1, 2 ] and
* [ 8, 9, 10 ], you can combine them into one with the indices
* [ 0, 1, 2, 2, 8, 8, 9, 10 ]. This creates the degenerate triangles
* [ 1, 2, 2 ], [ 2, 2, 8 ], [ 2, 8, 8 ] and [ 8, 8, 9 ]. Although this
* introduces some overhead, it is often quicker than rendering them as separate
* objects.
* <br><br>
* You may reduce the degenerate data to a single index if you know what you're
* doing with winding orders. This is left as an exercise for the user.
* <br><br>
* The "strokeIndices" param is used to create a stroke. This is usually a line
* around the edge of a polygon, but it can be any sort of line. It is, like the
* indices param, a list of array positions in the vertices param. Unlike
* indices, strokeIndices does not use TRIANGLE_STRIP. It just connects points in
* order.
* <br><br>
* Technically, the stroke is itself a series of triangles, a sort of
* mini-polygon. It will usually have more triangles than the fill. For this
* reason, you should be careful about overusing stroke.
* <br><br>
* You may also construct polygons by building several objects and combining
* them using the ".combine()" method. This may not be as efficient as
* defining a polygon by hand, and will introduce several degenerate triangles,
* but for large-scale constructions it is very convenient.
*
* @class Polygon
* @constructor
* @namespace Kiwi.Plugins.Primitives
* @extends Kiwi.Entity
* @param params {Object} The parameter object.
* @param params.state {Kiwi.State} Context state
*	@param [params.color=[0.5,0.5,0.5]] {array} RGB normalized color
*	@param [params.drawFill=true] {boolean} Whether to fill the polygon
*	@param [params.drawStroke=true] {boolean} Whether to draw the stroke
*	@param [params.enableInput=false] {Boolean} Whether to enable input
*	@param [params.indices] {array} Array of vertices for triangle strips
*	@param [params.strokeColor=[0.5,0.5,0.5]] {array} RGB normalized color
*	@param [params.strokeWidth=1] {number} Width of stroke in pixels
*	@param [params.strokeIndices] {array} Array of vertices for strokes
*	@param [params.vertices] {array} Array of vertex coordinates
*		array pairs ([ [ x1, y1 ], [x2, y2 ] ] etc).
* @since 0.1.0
*/
Kiwi.Plugins.Primitives.Polygon = function( params ) {

	var state = params.state;

	this._initProperties();

	// Super
	Kiwi.Entity.call( this, state, 0, 0 );

	this.parseParams( params );

	// Create WebGL renderer
	if (this.game.renderOption === Kiwi.RENDERER_WEBGL) {
		this.glRenderer =
			this.game.renderer.requestSharedRenderer( "PrimitiveRenderer" );
		this.atlas = this.glRenderer.getAtlas();
	}

	this.rebuildBounds();
};
Kiwi.extend( Kiwi.Plugins.Primitives.Polygon, Kiwi.Entity );

/**
* Index of pointers to vertices. The sequence of points
* which constructs the poly.
* @property indices
* @type {array}
* @public
* @since 0.3.0
*/
Object.defineProperty( Kiwi.Plugins.Primitives.Polygon.prototype, "indices", {
	get: function() {
		return this._indices;
	},
	set: function( value ) {
		var i;
		this._indices = [];

		if ( value.length > 2 ) {
			for ( i = 0; i < value.length; i++ ) {
				this._indices.push( value[ i ] );
			}
		}
	}
} );

/**
* Index of vertices.
* @property vertices
* @type {array}
* @public
* @since 0.3.0
*/
Object.defineProperty( Kiwi.Plugins.Primitives.Polygon.prototype, "vertices", {
	get: function() {
		return this._vertices;
	},
	set: function( value ) {
		var i;
		this._vertices = [];
		for ( i = 0; i < value.length; i++ ) {
			this._vertices.push( [
				value[ i ][ 0 ],
				value[ i ][ 1 ]
			] );
		}
	}
} );

/**
* Index of pointers to vertices. The sequence of points which
* constructs the stroke. To be distinguished from the strokePolyIndices,
* which define the actual shape of the stroke.
* @property strokeIndices
* @type {array}
* @public
* @since 0.3.0
*/
Object.defineProperty(
		Kiwi.Plugins.Primitives.Polygon.prototype, "strokeIndices", {
	get: function() {
		return this._strokeIndices;
	},
	set: function( value ) {
		var i;
		this._strokeIndices = [];

		if ( value.length > 1 ) {
			for ( i = 0; i < value.length; i++ ) {
				this._strokeIndices.push( value[ i ] );
			}
			this.createstroke( this._strokeIndices, this._vertices );
		}
	}
} );

/**
* Index of pointers to vertices. The sequence of points which
* make up the stroke. To be distinguished from the strokeIndices,
* which define the construction of the stroke.
* @property strokePolyIndices
* @type {array}
* @public
* @since 0.3.0
*/
Object.defineProperty(
		Kiwi.Plugins.Primitives.Polygon.prototype, "strokePolyIndices", {
	get: function() {
		return this._strokePolyIndices;
	},
	set: function( value ) {
		var i;
		this._strokePolyIndices = [];

		if ( value.length > 2 ) {

			// Double up the first index to prevent strip connexion
			if ( value.length === 3 ) {
				this._strokePolyIndices.push( value[ 0 ] );
			}

			for ( i = 0; i < value.length; i++ ) {
				this._strokePolyIndices.push( value[ i ] );
			}
		}
	}
} );

/**
* Index of vertices for stroke shape.
* @property strokePolyVertices
* @type {array}
* @public
* @since 0.3.0
*/
Object.defineProperty(
		Kiwi.Plugins.Primitives.Polygon.prototype, "strokePolyVertices", {
	get: function() {
		return this._strokePolyVertices;
	},
	set: function( value ) {
		var i;
		this._strokePolyVertices = [];
		for ( i = 0; i < value.length; i++ ) {
			this._strokePolyVertices.push( [
				value[ i ][ 0 ],
				value[ i ][ 1 ]
			] );
		}
	}
} );

/**
* Constructs a miter, a building block for strokes.
* Miters sit atop vertices and form the endpoints for two stroke segments.
* @method _buildMiter
* @param line1 {Array} The first line, an array of 2 Points
* @param line2 {Array} The second line, an array of 2 Points;
* the first point on line2 is the actual position of the miter
* @return {object}
* @private
* @since 0.3.0
*/
Kiwi.Plugins.Primitives.Polygon.prototype._buildMiter =
		function( line1, line2) {
	var angle, angleDiffHalf, dx, dy, innerDist, line1Angle, line2Angle,
		line1Length, line2Length, lineMinLength, pointA, pointB,
		indices = [],
		vertices = [],
		pointN = line2[ 0 ];

	// Compute the length of the two lines
	line1Length = line1[0].distanceTo( line1[1] );
	line2Length = line2[0].distanceTo( line2[1] );
	lineMinLength = Math.min( line1Length, line2Length );

	// Compute the angles of the two lines
	line1Angle = Math.atan2(
		line1[ 1 ].y - line1[ 0 ].y,
		line1[ 1 ].x - line1[ 0 ].x );
	line2Angle = Math.atan2(
		line2[ 1 ].y - line2[ 0 ].y,
		line2[ 1 ].x - line2[ 0 ].x );
	line1Angle = Kiwi.Utils.GameMath.normalizeAngle( line1Angle );
	line2Angle = Kiwi.Utils.GameMath.normalizeAngle( line2Angle );

	// Compute the angle between the lines, then halve it for future use
	angleDiffHalf = line2Angle - line1Angle;
	if ( angleDiffHalf > Math.PI ) {
		angleDiffHalf = Math.PI * 2 - angleDiffHalf;
	} else if ( angleDiffHalf < -Math.PI ) {
		angleDiffHalf = -Math.PI * 2 - angleDiffHalf;
	}
	angleDiffHalf *= 0.5;

	// Compute the average angle of the two lines
	if ( Math.abs( line1Angle - line2Angle ) > Math.PI ) {
		if ( line1Angle < line2Angle ) {
			line1Angle += Math.PI * 2;
		} else {
			line2Angle += Math.PI * 2;
		}
	}
	angle = Kiwi.Utils.GameMath.normalizeAngle(
		( line1Angle + line2Angle ) * 0.5 );

	// Cache some trig
	dx = Math.cos( angle );
	dy = -Math.sin( angle );

	// Compute the distance to the inner corner, where two miter points overlap
	innerDist = this.strokeWidth / ( 2 * Math.cos( angleDiffHalf ) );
	if ( innerDist > lineMinLength ) {
		innerDist = lineMinLength;
	}

	// Create sharp miters
	pointA = new Kiwi.Geom.Point(
		dy * innerDist,
		dx * innerDist
	);
	pointB = new Kiwi.Geom.Point(
		dy * -innerDist,
		dx * -innerDist
	);
	pointA.x += pointN.x;
	pointA.y += pointN.y;
	pointB.x += pointN.x;
	pointB.y += pointN.y;

	indices = [ 0, 1, 0, 1 ];
	vertices = [ [ pointA.x, pointA.y ], [ pointB.x, pointB.y ] ];

	return { indices: indices, vertices: vertices };
};

/**
* Construct a stroke by tracing a connection through all vertices.
* @method _buildStroke
* @param srcIndices {array} List of points to connect in order.
* @param srcVertices {array} Definition of points.
* @private
* @since 0.3.0
*/
Kiwi.Plugins.Primitives.Polygon.prototype._buildStroke =
		function( srcIndices, srcVertices ) {
	var dx, dy, end, i, j, miter, point1, point2, point3,
		inds = [],
		offset = 0,
		vertLen = srcIndices.length,
		verts = [];

	if ( vertLen > 1 ) {

		// Begin with a double-up on vertex 0
		point1 = new Kiwi.Geom.Point(
			srcVertices[ srcIndices[ 0 ] ][ 0 ],
			srcVertices[ srcIndices[ 0 ] ][ 1 ]
		);
		point2 = new Kiwi.Geom.Point(
			srcVertices[ srcIndices[ 1 ] ][ 0 ],
			srcVertices[ srcIndices[ 1 ] ][ 1 ]
		);
		miter = this._buildMiter( [ point1, point2 ], [ point1, point2 ] );
		inds = inds.concat( miter.indices );
		verts = verts.concat( miter.vertices );
		offset += miter.vertices.length;

		// Connect all additional vertices
		for ( i = 1; i < vertLen - 1; i++ ) {
			point1 = new Kiwi.Geom.Point(
				srcVertices[ srcIndices[ i - 1 ] ][ 0 ],
				srcVertices[ srcIndices[ i - 1 ] ][ 1 ]
			);
			point2 = new Kiwi.Geom.Point(
				srcVertices[ srcIndices[ i ] ][ 0 ],
				srcVertices[ srcIndices[ i ] ][ 1 ]
			);
			point3 = new Kiwi.Geom.Point(
				srcVertices[ srcIndices[ i + 1 ] ][ 0 ],
				srcVertices[ srcIndices[ i + 1 ] ][ 1 ]
			);
			miter = this._buildMiter( [ point1, point2 ], [ point2, point3 ] );
			for ( j = 0; j < miter.indices.length; j++ ) {
				miter.indices[ j ] += offset;
			}
			inds = inds.concat( miter.indices );
			verts = verts.concat( miter.vertices );
			offset += miter.vertices.length;
		}

		// Finish with a double-up on the last vertex
		// We must first construct an extension of the last line segment
		end = srcIndices.length - 1;
		dx = srcVertices[ srcIndices[ end ] ][ 0 ] -
			srcVertices[ srcIndices[ end - 1 ] ][ 0 ];
		dy = srcVertices[ srcIndices[ end ] ][ 1 ] -
			srcVertices[ srcIndices[ end - 1 ] ][ 1 ];
		point1 = new Kiwi.Geom.Point(
			srcVertices[ srcIndices[ end ] ][ 0 ],
			srcVertices[ srcIndices[ end ] ][ 1 ]
		);
		point2 = new Kiwi.Geom.Point(
			srcVertices[ srcIndices[ end ] ][ 0 ] + dx,
			srcVertices[ srcIndices[ end ] ][ 1 ] + dy
		);
		miter = this._buildMiter( [ point1, point2 ], [ point1, point2 ] );
		for ( j = 0; j < miter.indices.length; j++ ) {
			miter.indices[ j ] += offset;
		}
		inds = inds.concat( miter.indices );
		verts = verts.concat( miter.vertices );

		return { indices: inds, vertices: verts };
	}

	return null;
};

/**
* Creates a copy of this polygon.
* @method clone
* @return {Kiwi.Plugins.Primitives.Polygon}
* @public
* @since 0.3.0
*/
Kiwi.Plugins.Primitives.Polygon.prototype.clone = function() {
	var params = {
			color: this.color,
			indices: this._indices,
			state: this.state,
			strokeColor: this.strokeColor,
			strokeIndices: this._strokeIndices,
			vertices: this._vertices,

			x: this.x,
			y: this.y,
			rotation: this.rotation,
			scaleX: this.scaleX,
			scaleY: this.scaleY,
			anchorPointX: this.anchorPointX,
			anchorPointY: this.anchorPointY,
			alpha: this.alpha,
			visible: this.visible
		};

	return (new Kiwi.Plugins.Primitives.Polygon( params ) );
};

/**
* Determines the min and max x and y coordinates from an array.
* @method computeMinMaxXY
* @param array {array} Array of points, defined as arrays [ x, y ]
* @return object
* @public
* @since 0.1.0
*/
Kiwi.Plugins.Primitives.Polygon.prototype.computeMinMaxXY = function( array ) {
	var i, vert,
		vertLen = array.length,
		maxX = 0,
		maxY = 0,
		minX = 0,
		minY = 0;

	for ( i = 0; i < vertLen; i++ ) {
		vert = array[ i ];
		if ( vert[0] < minX ) {
			minX = vert[0];
		}
		if ( vert[0] > maxX ) {
			maxX = vert[0];
		}
		if ( vert[1] < minY ) {
			minY = vert[1];
		}
		if ( vert[1] > maxY ) {
			maxY = vert[1];
		}
	}

	return {
		maxX: maxX,
		maxY: maxY,
		minX: minX,
		minY: minY
	};
};

/**
* Adds another poly to this.
* @method combine
* @param poly {Kiwi.Plugins.Primitives.Polygon} Primitive to combine.
* @param [discard=true] {boolean} Discard the combination source?
* @return {boolean}
* @public
* @since 0.3.0
*/
Kiwi.Plugins.Primitives.Polygon.prototype.combine = function( poly, discard ) {
	if ( typeof discard === "undefined" ) {
		discard = true;
	}

	// Do not self-combine
	if ( this.poly === this ) {
		return false;
	}

	var indexOffset,
		inverseMatrix = this.transform.getConcatenatedMatrix().invert(),
		matrix = poly.transform.getConcatenatedMatrix(),
		point = new Kiwi.Geom.Point( 0, 0 ),
		polyIndicesLen = poly.indices.length,
		polyVerticesLen = poly.vertices.length,
		polyStrokeIndicesLen = poly.strokePolyIndices.length,
		polyStrokeVerticesLen = poly.strokePolyVertices.length;


	// Attach fill
	if ( polyIndicesLen > 2 ) {
		indexOffset = this._vertices.length;

		// Create degenerate attachment
		if ( this._indices.length > 0 ) {
			this._indices.push( this._indices[ this._indices.length - 1 ] );
			this._indices.push( poly.indices[ 0 ] + indexOffset );
		}

		// Add vertices and indices
		for ( i = 0; i < polyIndicesLen; i++ ) {
			this._indices.push( poly.indices[ i ] + indexOffset );
		}
		for ( i = 0; i < polyVerticesLen; i++ ) {
			point.setTo(
				poly.vertices[ i ][ 0 ] - poly.anchorPointX,
				poly.vertices[ i ][ 1 ] - poly.anchorPointY
			);

			point = matrix.transformPoint( point );
			point = inverseMatrix.transformPoint( point );

			this._vertices.push( [
				point.x + this.anchorPointX,
				point.y + this.anchorPointY
			] );
		}
	}
	

	// Attach stroke
	if ( polyStrokeIndicesLen > 2 ) {
		indexOffset = this._strokePolyVertices.length;

		// Create degenerate attachment
		if ( this._strokePolyIndices.length > 0 ) {
			this._strokePolyIndices.push(
				this._strokePolyIndices[ this._strokePolyIndices.length - 1 ] );
			this._strokePolyIndices.push(
				poly.strokePolyIndices[ 0 ] + indexOffset );
		}

		// Add vertices and indices
		for ( i = 0; i < polyStrokeIndicesLen; i++ ) {
			this._strokePolyIndices.push(
				poly.strokePolyIndices[ i ] + indexOffset );
		}
		for ( i = 0; i < polyStrokeVerticesLen; i++ ) {
			point.setTo(
				poly.strokePolyVertices[ i ][ 0 ] - poly.anchorPointX,
				poly.strokePolyVertices[ i ][ 1 ] - poly.anchorPointY
			);

			point = matrix.transformPoint( point );
			point = inverseMatrix.transformPoint( point );

			this._strokePolyVertices.push( [
				point.x + this.anchorPointX,
				point.y + this.anchorPointY
			] );
		}
	}

	// Discard source
	if ( discard ) {
		poly.destroy();
	}

	return true;
};

/**
* Reports an error message.
* @method complain
* @param string {string} Text to report
* @public
* @since 0.4.0
*/
Kiwi.Plugins.Primitives.Polygon.prototype.complain = function( string ) {
	Kiwi.Log.log(
		"#primitive",
		"Primitive Error encountered:",
		string
	);
};

/**
* Put a stroke on this Polygon, following the strokeIndices vertex list.
* You should not need to do this manually.
* @method createstroke
* @public
* @return boolean
* @since 0.3.0
*/
Kiwi.Plugins.Primitives.Polygon.prototype.createstroke = function() {
	var strokeData = this._buildStroke( this.strokeIndices, this.vertices );

	if ( strokeData ) {
		this.strokePolyIndices = strokeData.indices;
		this.strokePolyVertices = strokeData.vertices;
	}
};

/**
* Initialise internal properties
* @method _initProperties
* @private
* @since 0.1.0
*/
Kiwi.Plugins.Primitives.Polygon.prototype._initProperties = function() {
	/**
	* Part of the WebGL rendering pipeline
	* @property glRenderer
	* @type Kiwi.Renderers.Renderer
	* @public
	* @since 0.1.0
	*/
	this.glRenderer = undefined;

	// Mirror properties: private data accessed by getters/setters
	this._indices = null;
	this._vertices = null;
	this._strokeIndices = null;
	this._strokePolyIndices = null;
	this._strokePolyVertices = null;

	/**
	* Geometry point used in rendering.
	*
	* @property _p0
	* @type Kiwi.Geom.Point
	* @private
	* @since 1.0.3
	*/
	this._p0 = new Kiwi.Geom.Point( 0, 0 );

	/**
	* Geometry point used in rendering.
	*
	* @property _p1
	* @type Kiwi.Geom.Point
	* @private
	* @since 1.0.3
	*/
	this._p1 = new Kiwi.Geom.Point( 0, 0 );

	/**
	* Geometry point used in rendering.
	*
	* @property _p2
	* @type Kiwi.Geom.Point
	* @private
	* @since 1.0.3
	*/
	this._p2 = new Kiwi.Geom.Point( 0, 0 );

	/**
	* Color Utility. 
	* 
	* @property _color
	* @type Kiwi.Utils.Color
	* @private
	* @since 1.0.4
	*/
	this._color = new Kiwi.Utils.Color();

	/**
	* Stroke color utility. 
	* 
	* @property _strokeColor
	* @type Kiwi.Utils.Color
	* @private
	* @since 1.0.4
	*/
	this._strokeColor = new Kiwi.Utils.Color();
};

/**
* Returns the type of object that this is.
* @method objType
* @return {string}
* @public
*/
Kiwi.Plugins.Primitives.Polygon.prototype.objType = function() {
	return "Primitive Polygon";
};


/**
* RGB color triplet, normalized to the range 0-1
* @property color
* @type {array} 
* @public
*/
Object.defineProperty(Kiwi.Plugins.Primitives.Polygon.prototype, "color", {
	get: function() {
		return [ this._color.rNorm, this._color.gNorm, this._color.bNorm ];
	},
	set: function( val ) {
		this._color.set.apply( this._color, val );
	}
});


/**
* RGB color triplet, normalized to the range 0-1
* @property strokeColor
* @type {array}
* @public
*/
Object.defineProperty(Kiwi.Plugins.Primitives.Polygon.prototype, "strokeColor", {
	get: function() {
		return [ this._strokeColor.rNorm, this._strokeColor.gNorm, this._strokeColor.bNorm ];
	},
	set: function( val ) {
		this._strokeColor.set.apply( this._strokeColor, val );
	}
});


/**
* Sets default parameters on primitive. Note that this will redefine the
* entire primitive. If you call parseParams after creation, you will have to
* take steps to preserve any shape, style, or transform data you wish to keep.
* @method parseParams
* @param params {object} The param objects
* @return boolean
* @public
* @since 0.1.0
*/
Kiwi.Plugins.Primitives.Polygon.prototype.parseParams = function( params ) {

	if( typeof params.color !== "undefined" ) {
		
		if( Kiwi.Utils.Common.isArray( params.color ) ) {
			this.color = params.color;
		} else {
			this._color.set( params.color );
		}

	} else {
		this.color = [ 0.5, 0.5, 0.5 ];
	}

	/**
	* Whether the fill will draw
	* @property drawFill
	* @type {boolean}
	* @public
	*/
	this.drawFill = ( typeof params.drawFill !== "undefined" ) ?
		params.drawFill :
		true;

	/**
	* Whether the stroke will draw
	* @property drawFill
	* @type {boolean}
	* @public
	*/
	this.drawStroke = ( typeof params.drawStroke !== "undefined" ) ?
		params.drawStroke :
		true;

	/**
	* Whether to enable input
	* @property enableInput
	* @type {Boolean}
	* @public
	* @since 1.0.1
	*/
	this.enableInput = params.enableInput === true;

	this.indices = params.indices || [];
	this.vertices = params.vertices || [];

	// These stroke properties must be defined
	// after base vertices and in unique order

	if( typeof params.strokeColor !== "undefined" ) {
		
		if( Kiwi.Utils.Common.isArray( params.strokeColor ) ) {
			this.strokeColor = params.strokeColor;
		} else {
			this._strokeColor.set( params.strokeColor );
		}

	} else {
		this.strokeColor = [ 0, 0, 0 ];
	}

	/**
	* Width of the stroke, in pixels. If the primitive is scaled, the stroke
	* will also change size.
	* @property strokeWidth
	* @type {number}
	* @public
	*/
	this.strokeWidth = typeof params.strokeWidth === "number" ?
		params.strokeWidth : 1;

	this.strokeIndices = params.strokeIndices || [];
	this.strokePolyIndices = this._strokePolyIndices || [];
	this.strokePolyVertices = this._strokePolyVertices || [];

	// Universal entity params
	this.alpha = typeof params.alpha === "number" ?
		params.alpha : 1;
	this.anchorPointX = typeof params.anchorPointX === "number" ?
		params.anchorPointX : undefined;
	this.anchorPointY = typeof params.anchorPointY === "number" ?
		params.anchorPointY : undefined;
	this.rotation = typeof params.rotation === "number" ?
		params.rotation : 0;
	if (
			typeof params.scaleX === "undefined" &&
			typeof params.scaleY === "undefined" ) {
		this.scale = typeof params.scale === "number" ?
			params.scale : 1;
	} else {
		this.scaleX = typeof params.scaleX === "number" ?
			params.scaleX : 1;
		this.scaleY = typeof params.scaleY === "number" ?
			params.scaleY : 1;
	}
	this.visible = typeof params.visible === "boolean" ?
		params.visible : true;
	this.x = typeof params.x === "number" ?
		params.x : 0;
	this.y = typeof params.y === "number" ?
		params.y : 0;

	return this.parseStrict();
};

/**
* Perform a strict compliance check on data. If this fails,
* it's because somebody passed bad data.
* @method parseStrict
* @return boolean
* @public
* @since 0.4.0
*/
Kiwi.Plugins.Primitives.Polygon.prototype.parseStrict = function() {
	var i;

	// Check stroke width
	if ( isNaN( this.strokeWidth ) ) {
		this.complain( "strokeWidth is not a number" );
		return false;
	}

	// Check indices
	if ( Kiwi.Utils.Common.isArray( this.indices ) ) {
		for ( i = 0; i < this.indices.length; i++ ) {
			if ( isNaN( this.indices[ i ] ) ) {
				this.complain( "Index " + i + " is not a number" );
				return false;
			}
			if ( this.indices[ i ] % 1 !== 0 ) {
				this.complain( "Index" + i + " is not an integer" );
				return false;
			}
		}
	} else {
		this.complain( "Could not parse indices: Not an array" );
		return false;
	}

	// Check stroke indices
	if ( Kiwi.Utils.Common.isArray( this.strokeIndices ) ) {
		for ( i = 0; i < this.strokeIndices.length; i++ ) {
			if ( isNaN( this.strokeIndices[ i ] ) ) {
				this.complain( "Stroke Index " + i + " is not a number" );
				return false;
			}
			if ( this.strokeIndices[ i ] % 1 !== 0 ) {
				this.complain( "Stroke Index" + i + " is not an integer" );
				return false;
			}
		}
	} else {
		this.complain( "Could not parse strokeIndices: Not an array" );
		return false;
	}

	// Check vertices
	if ( Kiwi.Utils.Common.isArray( this.vertices ) ) {
		for ( i = 0; i < this.vertices.length; i++ ) {
			if ( Kiwi.Utils.Common.isArray( this.vertices[ i ] ) ) {
				if ( isNaN( this.vertices[ i ][ 0 ] ) ) {
					this.complain( "Vertex " + i + ".x is not a number" );
					return false;
				}
				if ( isNaN( this.vertices[ i ][ 1 ] ) ) {
					this.complain( "Vertex " + i + ".y is not a number" );
					return false;
				}
			} else {
				this.complain( "Vertex " + i + " is not an array" );
				return false;
			}
		}
	} else {
		this.complain( "Could not parse indices: Not an array" );
		return false;
	}

	// We can't find anything wrong with it
	return true;
};

/**
* Compute width, height, box, anchor points etc
* @method rebuildBounds
* @public
* @since 0.1.0
*/
Kiwi.Plugins.Primitives.Polygon.prototype.rebuildBounds = function() {

	// Compute width, height, and anchor points
	var bounds = this.computeMinMaxXY( this._vertices );
	this.width = bounds.maxX - bounds.minX;
	this.height = bounds.maxY - bounds.minY;
	if ( typeof this.anchorPointX === "undefined" ) {
		this.anchorPointX = bounds.maxX - 0.5 * this.width;
	}
	if ( typeof this.anchorPointY === "undefined" ) {
		this.anchorPointY = bounds.maxY - 0.5 * this.height;
	}

	// Compute box
	this.box = this.components.add( new Kiwi.Components.Box(
		this, this.x + bounds.minX, this.x + bounds.minY,
		this.width, this.height ) );
	this.box.hitbox = new Kiwi.Geom.Rectangle( 
		bounds.minX, 
		bounds.minY, 
		this.width, 
		this.height );

	// Create input
	this.input = this.components.add( new Kiwi.Components.Input(
		this, this.box, this.enableInput ) );

	// Set dummy cell data for use in hitboxes
	if ( this.atlas ) {
		this.atlas.cells[0].hitboxes[0] = {
			x: 0,
			y: 0,
			w: this.width,
			h: this.height
		};
	}
};

/**
* Software rendering method
* @method render
* @param {Kiwi.Camera} camera
* @public
*/
Kiwi.Plugins.Primitives.Polygon.prototype.render = function( camera ) {

	var ctx, i, pTemp,
		indicesLen = this._indices.length;

	Kiwi.Entity.prototype.render.call( this, camera );
	if ( this.alpha > 0 ) {
		ctx = this.game.stage.ctx;
		ctx.save();

		if ( this.alpha <= 1 ) {
			ctx.globalAlpha = this.alpha;
		}

		var t = this.transform;
		var m = t.getConcatenatedMatrix();
		ctx.transform( m.a, m.b, m.c, m.d, m.tx, m.ty );


		// Draw fill
		if ( this.drawFill && this._indices.length > 2 ) {
			ctx.fillStyle =
				"rgb(" +
				this._color.r255 + "," +
				this._color.g255 + "," +
				this._color.b255 + ")";

			this._p1.setTo(
				this._vertices[ this._indices[ 1 ] ][ 0 ] - t.anchorPointX,
				this._vertices[ this._indices[ 1 ] ][ 1 ] - t.anchorPointY
			);
			this._p2.setTo(
				this._vertices[ this._indices[ 0 ] ][ 0 ] - t.anchorPointX,
				this._vertices[ this._indices[ 0 ] ][ 1 ] - t.anchorPointY
			);

			ctx.beginPath();

			for ( i = 2; i < indicesLen; i++ ) {

				// Overwrite start point
				this._p0.setTo(
					this._vertices[ this._indices[ i ] ][ 0 ] - t.anchorPointX,
					this._vertices[ this._indices[ i ] ][ 1 ] - t.anchorPointY
				);

				// Draw
				ctx.moveTo( this._p0.x, this._p0.y );
				ctx.lineTo( this._p1.x, this._p1.y );
				ctx.lineTo( this._p2.x, this._p2.y );

				// Cycle points
				pTemp = this._p2;
				this._p2 = this._p1;
				this._p1 = this._p0;
				this._p0 = pTemp;
			}

			ctx.closePath();
			ctx.fill();
		}


		// Draw stroke
		if ( this.drawStroke && this._strokePolyIndices.length > 2 ) {
			indicesLen = this._strokePolyIndices.length;

			ctx.fillStyle =
				"rgb(" +
				this._strokeColor.r255 + "," +
				this._strokeColor.g255 + "," +
				this._strokeColor.b255 + ")";

			this._p1.setTo(
				this._strokePolyVertices[
					this._strokePolyIndices[ 1 ] ][ 0 ] - t.anchorPointX,
				this._strokePolyVertices[
					this._strokePolyIndices[ 1 ] ][ 1 ] - t.anchorPointY
			);
			this._p2.setTo(
				this._strokePolyVertices[
					this._strokePolyIndices[ 0 ] ][ 0 ] - t.anchorPointX,
				this._strokePolyVertices[
					this._strokePolyIndices[ 0 ] ][ 1 ] - t.anchorPointY
			);

			ctx.beginPath();

			for ( i = 2; i < indicesLen; i++ ) {

				// Overwrite start point
				this._p0.setTo(
					this._strokePolyVertices[
						this._strokePolyIndices[ i ] ][ 0 ] - t.anchorPointX,
					this._strokePolyVertices[
						this._strokePolyIndices[ i ] ][ 1 ] - t.anchorPointY
				);

				// Draw
				ctx.moveTo( this._p0.x, this._p0.y );
				ctx.lineTo( this._p1.x, this._p1.y );
				ctx.lineTo( this._p2.x, this._p2.y );

				// Cycle points
				pTemp = this._p2;
				this._p2 = this._p1;
				this._p1 = this._p0;
				this._p0 = pTemp;
			}

			ctx.closePath();
			ctx.fill();
		}


		// Clean up context
		ctx.restore();
	}
};



/**
* Hardware rendering method using WebGL
* @method renderGL
* @param gl {WebGLRenderingContext}
* @param camera {Kiwi.Camera}
* @param params {object}
*/
Kiwi.Plugins.Primitives.Polygon.prototype.renderGL =
		function( gl ) {
	if ( this.alpha > 0 ) {
		if ( this.drawFill ) {
			this.glRenderer.addToBatch( gl, this,
				this._indices, this._vertices, this.color
			);
		}
		if ( this.drawStroke ) {
			this.glRenderer.addToBatch( gl, this,
				this._strokePolyIndices, this._strokePolyVertices,
				this.strokeColor
			);
		}
	}
};

/**
* Decompose a polygon into its constituent triangles.
* This will destroy the original polygon and substitute a group
* containing the triangles.
* @method shatter
* @return {Kiwi.Group}
* @public
* @since 0.3.0
*/
Kiwi.Plugins.Primitives.Polygon.prototype.shatter = function() {
	var dVert12, dVert13, dVert23, i, params, tri, vert1, vert2, vert3,
		indices = [ 0, 1, 2 ],
		group = new Kiwi.Group( this.state );

	for ( i = 0; i < this._indices.length - 2; i++ ) {

		vert1 = this._vertices[ this._indices[ i ] ];
		vert2 = this._vertices[ this._indices[ i + 1 ] ];
		vert3 = this._vertices[ this._indices[ i + 2 ] ];

		dVert12 = Math.sqrt(
			Math.pow( vert1[ 0 ] - vert2[ 0 ], 2 ) +
			Math.pow( vert1[ 1 ] - vert2[ 1 ], 2 )
		);
		dVert13 = Math.sqrt(
			Math.pow( vert1[ 0 ] - vert3[ 0 ], 2 ) +
			Math.pow( vert1[ 1 ] - vert3[ 1 ], 2 )
		);
		dVert23 = Math.sqrt(
			Math.pow( vert2[ 0 ] - vert3[ 0 ], 2 ) +
			Math.pow( vert2[ 1 ] - vert3[ 1 ], 2 )
		);

		// Avoid degenerate triangles
		if ( dVert12 !== 0 && dVert13 !== 0 && dVert23 !== 0 ) {
			params = {
				indices: indices,
				vertices: [ vert1, vert2, vert3 ],
				state: this.state,
				color: this.color,
				x: this.x,
				y: this.y,
				rotation: this.rotation,
				scaleX: this.scaleX,
				scaleY: this.scaleY,
				anchorPointX: this.anchorPointX,
				anchorPointY: this.anchorPointY
			};
			tri = (new Kiwi.Plugins.Primitives.Polygon( params ) ).clone();
			group.addChild( tri );
		}
	}

	// Eliminate original
	if ( this.parent ) {
		this.parent.addChildBefore( group, this );
	}
	this.destroy();

	return group;
};


/**
* Automatically called once per update loop.
* Handles input. If you override this, make sure to call the prototype:
* <code>Kiwi.Plugins.prototype.update.calL( this );</code>
* @method update
* @public
* @since 1.0.1
*/
Kiwi.Plugins.Primitives.Polygon.prototype.update = function() {
	Kiwi.Entity.prototype.update.call( this );

	this.input.update();
};



/**
* Ellipse Primitive
* <br><br>
* Create a ellipse primitive. Define a params object including a reference
* to the current state. You may also add style parameters from the Polygon.
* <br><br>
* You may draw regular polygons by reducing the segments. For example,
* to draw a hexagon:
* <br><br>
* new Kiwi.Plugins.Primitives.Ellipse( {<br>
*	drawStroke: false,<br>
*	radius: 32,<br>
*	state: MyGame.state,<br>
*	segments: 6<br>
* } );
* @class Ellipse
* @constructor
* @extends Kiwi.Plugins.Primitives.Polygon
* @namespace Kiwi.Plugins.Primitives
* @param params {object} Parameter object
* @param params.state {Kiwi.State} Current state
* @param [params.centerOnTransform=false] {boolean} If true, ellipse is centered
*	on transform; if false, ellipse has top left corner on transform
* @param [params.height=8] {number} Height of the ellipse
* @param [params.radius] {number} Radius of a circle; overide width and height
* @param [params.radiusPointer=false] {boolean} Whether to draw the radius,
*	useful for debugging rotation on circles.
* @param [params.segments=32] {number} Number of radial segments; detail.
* @param [params.width=8] {number} Width of the ellipse
* @since 0.4.0
*/
Kiwi.Plugins.Primitives.Ellipse = function( params ) {
	var angle, i,
		defaultDimension = 8,
		offsetX = 0,
		offsetY = 0;

	// Create elliptical geometry data
	if ( typeof params.segments === "undefined" ) {
		params.segments = 32;
	}
	if ( typeof params.radius !== "undefined" ) {
		params.width = params.radius * 2;
		params.height = params.radius * 2;
	}
	if ( typeof params.width !== "number" ) {
		params.width = defaultDimension;
	}
	if ( typeof params.height !== "number" ) {
		params.height = defaultDimension;
	}
	if ( !params.centerOnTransform ) {
		offsetX = params.width * 0.5;
		offsetY = params.height * 0.5;
	}
	params.indices = [];
	params.vertices = [];
	params.strokeIndices = [];
	for ( i = 0; i < params.segments; i++ ) {

		// Define indices, looping from the middle
		params.indices.push( i );
		params.indices.push( params.segments );
		params.indices.push( ( i + 1 ) % params.segments );

		// Define vertices
		angle = Math.PI * 2 * i / params.segments;
		params.vertices.push( [
			params.width * 0.5 * Math.cos( angle ) + offsetX,
			params.height * 0.5 * Math.sin( angle ) + offsetY
		] );

		// Define stroke
		params.strokeIndices.push( i );
	}

	// Define central vertex
	params.vertices.push( [ offsetX, offsetY ] );

	// Complete stroke
	params.strokeIndices.push( 0 );

	// Add radius pointer
	if ( params.radiusPointer ) {
		params.strokeIndices.push( params.segments );
	}

	Kiwi.Plugins.Primitives.Polygon.call( this, params );
};
Kiwi.extend( Kiwi.Plugins.Primitives.Ellipse,
	Kiwi.Plugins.Primitives.Polygon );


/**
* Line Primitive
* <br><br>
* Create a line primitive. Define a params object including a reference
* to the current state. You may also add style parameters from the Polygon.
* For example:
* <br><br>
* new Kiwi.Plugins.Primitives.Line( {<br>
*	points: [ [ 0, 0 ], [ 100, 100 ], [ 200, 0 ] ],<br>
*	state: MyGame.state,<br>
*	strokeColor: [ 1, 0.1, 1 ],<br>
*	strokeWidth: 4<br>
* } );
* @class Line
* @constructor
* @extends Kiwi.Plugins.Primitives.Polygon
* @namespace Kiwi.Plugins.Primitives
* @param params {object} Parameter object
* @param params.state {Kiwi.State} Current state
* @param [params.points] {array} Array of x,y points to connect with lines
* @since 0.4.0
*/
Kiwi.Plugins.Primitives.Line = function( params ) {
	var i;

	params.vertices = [];
	params.strokeIndices = [];
	params.drawFill = false;
	params.drawStroke = true;
	if ( params.points ) {
		for ( i = 0; i < params.points.length; i++ ) {
			params.vertices.push( params.points[ i ] );
			params.strokeIndices.push( i );
		}
	}

	Kiwi.Plugins.Primitives.Polygon.call( this, params );
};
Kiwi.extend( Kiwi.Plugins.Primitives.Line,
	Kiwi.Plugins.Primitives.Polygon );



/**
* Null Texture Atlas interfaces with KiwiJS rendering system
* which expects a texture atlas, and provides it with an atlas
* that has no texture.
*
* @class NullAtlas
* @constructor
* @namespace Kiwi.Plugins.Primitives
* @since 0.1.0
*/
Kiwi.Plugins.Primitives.NullAtlas = function() {
	this.cells = [ { hitboxes: [] } ];
};

/** Dummy texture enable method, doing the bare minimum to satisfy the
* texture manager requirements. Parameters don't matter.
* @method enableGL
* @public
* @since 0.1.0
*/
Kiwi.Plugins.Primitives.NullAtlas.prototype.enableGL = function() {};



/**
* Rectangle Primitive
* <br><br>
* Create a rectangular primitive. Define a params object including a reference
* to the current state. You may also add style parameters from the Polygon.
* For example:
* <br><br>
* new Kiwi.Plugins.Primitives.Rectangle( {<br>
*	state: MyGame.state,<br>
*	color: [ 0.9, 0.3, 0.7 ],<br>
*	strokeWidth: 4,<br>
*	width: 32,<br>
*	height: 16<br>
* } );
* @class Rectangle
* @constructor
* @extends Kiwi.Plugins.Primitives.Polygon
* @namespace Kiwi.Plugins.Primitives
* @param params {object} Parameter object
* @param params.state {Kiwi.State} Current state
* @param [params.centerOnTransform=true] {boolean} If true, rectangle is centered
*	on transform; if false, rectangle has top left corner on transform
* @param [params.height=8] {number} Height of the rectangle
* @param [params.width=8] {number} Width of the rectangle
* @since 0.4.0
*/
Kiwi.Plugins.Primitives.Rectangle = function( params ) {
	var defaultDimension = 8;

	// Create rectangle geometry data
	params.indices = [ 0, 1, 2, 3 ];
	params.strokeIndices = [ 0, 1, 3, 2, 0 ];
	if ( typeof params.width === "undefined" ) {
		params.width = defaultDimension;
	}
	if ( typeof params.height === "undefined" ) {
		params.height = defaultDimension;
	}

	// Position rectangle relative to transform
	if ( params.centerOnTransform ) {
		params.vertices = [
			[ -params.width * 0.5, -params.height * 0.5 ],
			[ params.width * 0.5, -params.height * 0.5 ],
			[ -params.width * 0.5, params.height * 0.5 ],
			[ params.width * 0.5, params.height * 0.5 ]
		];
	} else {
		params.vertices = [
			[ 0, 0 ],
			[ params.width, 0 ],
			[ 0, params.height ],
			[ params.width, params.height ]
		];
	}

	Kiwi.Plugins.Primitives.Polygon.call ( this, params );
};
Kiwi.extend( Kiwi.Plugins.Primitives.Rectangle,
	Kiwi.Plugins.Primitives.Polygon );




/**
* Primitive Renderer
* <br><br>
* This renders primitives using triangle strips.
* @class PrimitiveRenderer
* @constructor
* @namespace Kiwi.Renderers
* @param gl {WebGLRenderingContext} The WebGL rendering context in use.
* @param shaderManager {Kiwi.Renderers.ShaderManager} The Kiwi shader manager.
* @since 0.1.0
*/
Kiwi.Renderers.PrimitiveRenderer = function( gl, shaderManager ) {
	this.bufferItemSize = 6;
	this.indices = [];
	this.nullAtlas = new Kiwi.Plugins.Primitives.NullAtlas();
	this._tempPoint = new Kiwi.Geom.Point( 0, 0 );
	this._maxItems = 1000;
	this._vertexBuffer =
		new Kiwi.Renderers.GLArrayBuffer( gl, this.bufferItemSize );
	this._indexBuffer = new Kiwi.Renderers.GLElementArrayBuffer( gl, 1, [] );

	// Perform super functionality
	Kiwi.Renderers.Renderer.call( this, gl, shaderManager, true );

	this.setShaderPair( "PrimitiveShader" );
};
Kiwi.extend( Kiwi.Renderers.PrimitiveRenderer, Kiwi.Renderers.Renderer );

/**
* Returns a null atlas so that all primitives share a texture object.
* @method getAtlas
* @return Kiwi.Plugins.Primitives.NullAtlas
* @public
* @since 0.3.0
*/
Kiwi.Renderers.PrimitiveRenderer.prototype.getAtlas = function() {
	return this.nullAtlas;
};

/**
* Enables the renderer for drawing
* @method enable
* @param gl {WebGLRenderingContext}
* @param [params=null] {object}
* @public
*/
Kiwi.Renderers.PrimitiveRenderer.prototype.enable = function( gl, params ) {
	// Boilerplate extension
	Kiwi.Renderers.Renderer.
		prototype.enable.call( this, gl, params );

	this.shaderPair = this.shaderManager.requestShader(gl,
		this._shaderPairName, true);

	gl.uniform2fv( this.shaderPair.uniforms.uResolution.location,
		params.stageResolution );
	gl.uniformMatrix3fv( this.shaderPair.uniforms.uCamMatrix.location,
		false, params.camMatrix );
};

/**
* Disables the renderer
* @method disable
* @param gl {WebGLRenderingContext}
* @public
*/
Kiwi.Renderers.PrimitiveRenderer.prototype.disable = function( gl ) {
	gl.disableVertexAttribArray( this.shaderPair.attributes.aXY );
	gl.disableVertexAttribArray( this.shaderPair.attributes.aRGBA );
};

/**
* Clears the vertex buffer
* @method clear
* @param gl {WebGLRenderingContext}
* @public
*/
Kiwi.Renderers.PrimitiveRenderer.prototype.clear = function( gl, params ) {
	this._vertexBuffer.clear();
	gl.uniformMatrix3fv( this.shaderPair.uniforms.uCamMatrix.location,
		false, params.camMatrix );
};

/**
* Updates the stage resolution uniforms
* @method updateStageResolution
* @param gl {WebGLRenderingContext}
* @param res {Float32Array}
* @public
*/
Kiwi.Renderers.PrimitiveRenderer.prototype.updateStageResolution =
		function( gl, res ) {
	gl.uniform2fv(this.shaderPair.uniforms.uResolution.location, res);
};

/**
* Sets shader pair by name
* @method setShaderPair
* @param shaderPair {String}
* @public
*/
Kiwi.Renderers.PrimitiveRenderer.prototype.setShaderPair =
		function( shaderPair ) {
	if ( typeof shaderPair === "string" ) {
		this._shaderPairName = shaderPair;
	}
};

/**
* Collates all xy and uv coordinates into a buffer
* ready for upload to video memory
* @method _collateVertexAttributeArrays
* @param gl {WebGLRenderingContext}
* @param entity {Kiwi.Entity}
* @param camera {Camera}
* @public
*/
Kiwi.Renderers.PrimitiveRenderer.prototype.addToBatch =
		function( gl, entity, indices, vertices, color ) {

	var i,
		indexLen = indices.length,
		indexOffset = this._vertexBuffer.items.length / this.bufferItemSize,
		vertLen = vertices.length;

	var t = entity.transform;
	var m = t.getConcatenatedMatrix();
	var a = entity.alpha;
	var r = color[ 0 ] * a;
	var g = color[ 1 ] * a;
	var b = color[ 2 ] * a;

	for ( i = 0; i < vertLen; i++ ) {
		this._tempPoint.setTo(
			vertices[ i ][ 0 ] - t.anchorPointX,
			vertices[ i ][ 1 ] - t.anchorPointY );

		this._tempPoint = m.transformPoint( this._tempPoint );

		this._vertexBuffer.items.push(
			this._tempPoint.x, this._tempPoint.y, r, g, b, a
		);
	}

	// Append indices

	// Because we cannot guarantee winding order, we must always assume
	// that we will require two connectors, except for the first triangle.
	if ( this.indices.length > 0 ) {
		this.indices.push( this.indices[ this.indices.length - 1 ] );
		this.indices.push( indices[ 0 ] + indexOffset );
	}

	for ( i = 0; i < indexLen; i++ ) {
		this.indices.push( indices[ i ] + indexOffset );
	}
};

/**
* Makes a draw call. This is where things actually
* get rendered to the draw buffer (or a framebuffer).
* @method draw
* @param gl {WebGLRenderingContext}
* @public
*/
Kiwi.Renderers.PrimitiveRenderer.prototype.draw = function( gl ) {
	var byteHead = 0,
		bytesPerF32 = 4,
		bytes = this.bufferItemSize * bytesPerF32;

	this._vertexBuffer.uploadBuffer( gl, this._vertexBuffer.items );

	gl.enableVertexAttribArray( this.shaderPair.attributes.aXY );
	gl.vertexAttribPointer( this.shaderPair.attributes.aXY,
		bytesPerF32, gl.FLOAT, false, bytes, byteHead );
	byteHead += 2 * bytesPerF32;

	gl.enableVertexAttribArray( this.shaderPair.attributes.aRGBA );
	gl.vertexAttribPointer( this.shaderPair.attributes.aRGBA,
		bytesPerF32, gl.FLOAT, false, bytes, byteHead );
	// byteHead += 4 * bytesPerF32;

	// Generate vertex index strip
	this._indexBuffer.indices = this.indices;
	this._indexBuffer.refresh( gl );

	// Render
	gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, this._indexBuffer.buffer );
	gl.drawElements( gl.TRIANGLE_STRIP,
		this._indexBuffer.numItems,
		gl.UNSIGNED_SHORT, 0 );

	// Clear index buffer
	this.indices = [];
};



/**
* Primitive Shader Pair
* @class PrimitiveShader
* @constructor
* @namespace Kiwi.Shaders
* @since 0.1.0
*/
Kiwi.Shaders.PrimitiveShader = function() {

	// Super call
	Kiwi.Shaders.ShaderPair.call( this );

	// Extended functionality
	this.attributes = {
		aXY: null,
		aRGBA: null
	};

	// Configure uniforms
	this.uniforms = {
		uCamMatrix: {
			type: "mat3",
		},
		uResolution: {
			type: "2fv",
		}
	};

	// Declare shaders
	this.vertSource = [
		"attribute vec2 aXY;",
		"attribute vec4 aRGBA;",
		"uniform mat3 uCamMatrix;",
		"uniform vec2 uResolution;",
		"varying vec4 vRGBA;",
		"void main(void) {",
		"	vec2 pos = ( uCamMatrix * vec3( aXY, 1 ) ).xy; ",
		"	gl_Position = vec4( ( pos / uResolution * 2.0 - 1.0 ) *",
		"		vec2(1 , -1 ), 0, 1 );",
		"	vRGBA = aRGBA;",
		"}"
	];

	this.fragSource = [
		"precision mediump float;",
		"varying vec4 vRGBA;",
		"void main(void) {",
		"  gl_FragColor = vRGBA;",
		"}"
	];
};
Kiwi.extend( Kiwi.Shaders.PrimitiveShader, Kiwi.Shaders.ShaderPair );

Kiwi.Shaders.PrimitiveShader.prototype.init = function( gl ) {
	Kiwi.Shaders.ShaderPair.prototype.init.call( this, gl );

	this.attributes.aXY = gl.getAttribLocation(this.shaderProgram, "aXY");
	this.attributes.aRGBA = gl.getAttribLocation(this.shaderProgram, "aRGBA");

	this.initUniforms(gl);
};


/**
* Star Primitive
* <br><br>
* Create a star primitive. Define a params object including a reference
* to the current state. You may also add style parameters from the Polygon.
* <br><br>
* You may draw semi-random stars. For example, to draw a cartoon impact flare:
* <br><br>
* new Kiwi.Plugins.Primitives.Star( {<br>
*	centerOnTransform: true,<br>
*	color: [ 1, 0.01, 1 ],<br>
*	drawStroke: false,<br>
*	radius: 32,<br>
*	spikeRandom: 1,<br>
*	state: MyGame.state,<br>
*	segments: 16<br>
* } );
* @class Star
* @constructor
* @extends Kiwi.Plugins.Primitives.Polygon
* @namespace Kiwi.Plugins.Primitives
* @param params {object} Parameter object
* @param params.state {Kiwi.State} Current state
* @param [params.centerOnTransform=false] {boolean} If true, star is centered
*	on transform; if false star has top left corner on transform
* @param [params.height=8] {number} Height of the star
* @param [params.spikeLength=1] {number} Length of spikes relative to radius
* @param [params.spikeRandom=0] {number} Randomness of star spikes, where 0 is
*	no randomness and 1 will make some spikes up to twice as long;
*	there is no cap.
* @param [params.radius] {number} Radius of a star; overide width and height
* @param [params.segments=32] {number} Number of points
* @param [params.width=8] {number} Width of the star
* @since 0.4.0
*/
Kiwi.Plugins.Primitives.Star = function( params ) {
	var angle, i, spikiness,
		defaultDimension = 8,
		offsetX = 0,
		offsetY = 0;

	// Create stellar geometry data
	if ( typeof params.segments === "undefined" ) {
		params.segments = 32;
	}
	if ( typeof params.radius !== "undefined" ) {
		params.width = params.radius * 2;
		params.height = params.radius * 2;
	}
	if ( typeof params.width !== "number" ) {
		params.width = defaultDimension;
	}
	if ( typeof params.height !== "number" ) {
		params.height = defaultDimension;
	}
	if ( !params.centerOnTransform ) {
		offsetX = params.width * 0.5;
		offsetY = params.height * 0.5;
	}
	if( typeof params.spikeLength !== "number" ) {
		params.spikeLength = 1;
	}
	if( typeof params.spikeRandom !== "number" ) {
		params.spikeRandom = 0;
	}


	params.indices = [];
	params.vertices = [];
	params.strokeIndices = [];

	for ( i = 0; i < params.segments; i++ ) {

		// Define indices, looping from the middle
		params.indices.push( i );
		params.indices.push( params.segments );
		params.indices.push( ( i + 1 ) % params.segments );

		// Define vertices
		angle = Math.PI * 2 * i / params.segments;
		params.vertices.push( [
			params.width * 0.5 * Math.cos( angle ) + offsetX,
			params.height * 0.5 * Math.sin( angle ) + offsetY
		] );

		// Define stroke
		params.strokeIndices.push( i, i + 1 + params.segments );
	}

	// Define central vertex
	params.vertices.push( [ offsetX, offsetY ] );

	// Define stellar spikes
	for ( i = 0; i < params.segments; i++ ) {
		params.indices.push( i );
		params.indices.push( params.segments + i + 1 );
		params.indices.push( ( i + 1) % params.segments );

		// Define vertices
		angle = Math.PI * 2 * ( i + 0.5 ) / params.segments;
		spikiness = ( 1 + Math.random() * params.spikeRandom ) *
			( params.spikeLength + 1 ) * 0.5;
		params.vertices.push( [
			params.width * Math.cos( angle ) * spikiness + offsetX,
			params.height * Math.sin( angle ) * spikiness + offsetY
		] );
	}

	// Complete stroke
	params.strokeIndices.push( 0 );


	Kiwi.Plugins.Primitives.Polygon.call( this, params );


	// Reset anchor point to middle of core circle.
	// This compensates for random spike lengths.
	this.anchorPointX = params.anchorPointX || offsetX;
	this.anchorPointY = params.anchorPointY || offsetY;
};
Kiwi.extend( Kiwi.Plugins.Primitives.Star,
	Kiwi.Plugins.Primitives.Polygon );



/**
* Triangle Primitive
* <br><br>
* Create a triangle primitive. Define a params object including a reference
* to the current state. You may also add style parameters from the Polygon.
* For example:
* <br><br>
* new Kiwi.Plugins.Primitives.Triangle( {<br>
*	points: [ [ 0, 0 ], [ 100, 100 ], [ 200, 0 ] ],<br>
*	state: MyGame.state,<br>
*	x: 10,<br>
*	y: 10,<br>
*	scale: 2<br>
* } );
* <br><br>
* If you do not specify points in the param object, the Triangle will default to
* [ [ 0, 0 ], [ 0, 8 ], [ 8, 0 ] ]
* @class Triangle
* @constructor
* @extends Kiwi.Plugins.Primitives.Polygon
* @namespace Kiwi.Plugins.Primitives
* @param params {object} Parameter object
* @param params.state {Kiwi.State} Current state
* @param [params.points] {array} Array of x,y pairs to form triangle's corners.
* @since 0.4.0
*/
Kiwi.Plugins.Primitives.Triangle = function( params ) {
	var i,
		defaultDimension = 8;

	params.indices = [ 0, 1, 2 ];
	params.strokeIndices = [ 0, 1, 2, 0 ];
	params.vertices = [];
	
	// Create triangle geometry data
	if ( params.points ) {
		for ( i = 0; i < 3; i++ ) {
			if ( params.points[ i ] ) {
				params.vertices.push( params.points[ i ] );
			} else {
				params.vertices.push( [ 0, 0 ] );
			}
		}
	} else {
		params.vertices.push(
			[ 0, 0 ],
			[ 0, defaultDimension ],
			[ defaultDimension, 0 ]
		);
	}
	
	Kiwi.Plugins.Primitives.Polygon.call( this, params );
};
Kiwi.extend( Kiwi.Plugins.Primitives.Triangle,
	Kiwi.Plugins.Primitives.Polygon );

