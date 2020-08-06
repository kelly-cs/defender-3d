			   **************************************************************
			   **						DEFENDER 						   **					
			   **			By Christopher Kelly & Owen Tang			   **
			   **			Clarkson University - Spring 2017			   **
			   **************************************************************
			   
			   TENTATIVE DOCUMENTATION:
			   This is a defense style game that requires the player to point a weapon at oncoming enemies
			   in 3D space. It is aimed to illustrate a realistic environment (as possibly as it can be at the moment).
			   There are multiple polyhedra, in the form of enemies, weapons, and static scene objects. The weapon, sandbags,
			   and enemies make up the polyhedra on the scene. Furthermore, these are all very distinct objects, or 'pieces'.
			   
			   INTERACTIVITY:
			   The player's gun moves in response to mouse location, to allow the player to  "aim" at oncoming
			   opponents. This is achieved with raycasting provided by THREEJS. Clicking/holding left mouse will fire
			   and damage enemies that are aimed at. Once damaged enough, enemies disappear. 
			   
			   
			   LIGHTS:
			   In order to render this, three scenes are made. One scene is for drawing enemies, another is for
			   the sandbags inbetween the enemies and the player, while the other
			   is for drawing the player's weapon and nearby items. This allows us to manipulate the depth
			   of the objects in each scene separately, and make it look more believable.
			   
			   Because these are in separate scenes, different lights are made for each scene. One is made for
			   the "enemy" scene, one for the "sandbag" scene, and one is made for the player scene. 
			   
			   
			   TEXTURES:
			   There are a variety of textures in this game. A list may include, but not be limited to, the ground
			   texture, sky texture, sandbag textures, and other extra textures.
			   
			   
			   PROJECTION:
			   The scene is displayed through a perspective projection camera.
			   
			   
			   CONTROLS:
			   The only control is LEFTMOUSE. Aim at oncoming enemies, and click to fire at them. Over time enemies
			   become stronger.
			   
			   
			   WIN CONDITION:
			   There is currently no win condition. The goal is to survive as long as possible.
			   
			   
			   KNOWN BUGS:
			   If you hold down LEFTMOUSE for continuous fire, and drag off of the window and release (near the URL 
			   bar), the weapon will continue firing. Once this is done it cannot be stopped. Furthermore, if you
			   click back into the window while this is occurring, you can fire twice. This process can get repeated
			   so the firing process overlaps over and over. Need to fix!
			   
			   The raycaster damages ALL objects within the aiming area, not just the closest one. This means all objects
			   in a given area will be damaged regardless of where they are relative to the player. This can be changed by
			   editing the intercept array in the fire function and utilizing a for loop of only 2 elements, as one tends to 
			   be the floor usually. This would remedy the problem to near undetectable proportions.
			   
			   
			   REFERENCES CONSULTED:
			   http://stackoverflow.com/questions/43728072/raycaster-not-detecting-certain-objects-threejs
			   
			   EXTERNAL FILES/RESOURCES:
			   ThreeJS - www.threejs.org
			   Ultimate Tank - https://clara.io/view/0a3abdfc-e24b-4e55-b9a1-b3da5e0db665
			   M60 - Unknown Origin
			   Sandbags - https://www.yobi3d.com/q/free-3d-file-sandbag
			   Serious Sam OST - Croteam
			   Sand Texture - Unknown Origin
			   Sky Texture - Unknown Origin
			