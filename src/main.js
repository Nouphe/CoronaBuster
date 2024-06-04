import Phaser from 'phaser'

import CoronaBusterScene from './scenes/CoronaBusterScene';

import GameOverScene from "./scenes/GameOverScene";


const config = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 400,
	height: 620,
	physics: {
		default: "arcade",
		arcade: {
			gravity: { y: 0 },
		},
	},
	scene: [CoronaBusterScene, GameOverScene],
	scale: { 
		mode: Phaser.Scale.FIT, 
		autoCenter: Phaser.Scale.CENTER_BOTH,
	  }
};

export default new Phaser.Game(config)
