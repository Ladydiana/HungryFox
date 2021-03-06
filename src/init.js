import gameState from "./gameState";

const TICK_RATE = 3000;


/*function tick() {
	console.log("tick", Date.now());
}*/


// setInterval and setTimeout are not suitable as it isdifficult to get those times to line up well
async function init() {
	console.log("starting game");

	let nextTimeToTick = Date.now();

	function nextAnimationFrame() {

		const now = Date.now();
		if (nextTimeToTick <= now) {
			//tick();
			gameState.tick();
			nextTimeToTick = now + TICK_RATE;
		}
		requestAnimationFrame(nextAnimationFrame);
	}

	nextAnimationFrame();
}


init();
