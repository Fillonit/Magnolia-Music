import { Stage, Sprite, useApp } from "@pixi/react";
import { useEffect } from "react";

import FutureCover from "/Future-Cover.jpg";

const AnimatedBackground: React.FC = () => {
	const app = useApp();

	useEffect(() => {
		app.ticker.add(animate);
		return () => {
			app.ticker.remove(animate);
		};
	}, [app]);

	const animate = (delta: number) => {
		if (app.stage.children[0]) {
			app.stage.children[0].x -= 1 * delta;
			if (app.stage.children[0].x < -app.renderer.width) {
				app.stage.children[0].x = 0;
			}
		}
	};

	return (
		<Stage options={{ background: 0xffffff }}>
			<Sprite image={FutureCover} x={0} y={0} />
			<Sprite image={FutureCover} x={app.renderer.width} y={0} />
		</Stage>
	);
};

export default AnimatedBackground;
