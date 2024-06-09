import { useEffect, useRef } from "react";
import { Application, Loader, Sprite, Ticker } from "pixi.js";

const PixiComponent = () => {
	const pixiContainer = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const app = new Application({
			width: 800,
			height: 600,
			backgroundColor: 0x1099bb,
		});

		if (pixiContainer.current) {
			pixiContainer.current.appendChild(app.view as unknown as Node);
		}

		Loader.sharedLoader.add("bunny", "path/to/bunny.png").load(setup);

		let bunny: Sprite;

		function setup() {
			bunny = new Sprite(Loader.sharedLoader.resources.bunny.texture);

			bunny.x = app.view.width / 2;
			bunny.y = app.view.height / 2;

			app.stage.addChild(bunny);

			app.ticker.add((ticker: Ticker) => gameLoop(ticker.deltaTime));
		}

		function gameLoop(deltaTime: number) {
			bunny.rotation += 0.01 * deltaTime;
		}

		return () => {
			app.destroy(true, {
				children: true,
				texture: true,
			});
		};
	}, []);

	return <div ref={pixiContainer} />;
};

export default PixiComponent;
