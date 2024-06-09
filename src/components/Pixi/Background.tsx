import { Stage, Sprite, useApp, Text } from "@pixi/react";
import { useEffect } from "react";

import Magnolia from "/Magnolia.png";

const AnimatedBackground: React.FC = () => {
	const app = useApp();

	useEffect(() => {
		// app.ticker.add(animate);
		// return () => {
		// 	app.ticker.remove(animate);
		// };
	}, [app]);

	// const animate = (delta: number) => {
	// 	if (app.stage.children[0]) {
	// 		app.stage.children[0].x -= 1 * delta;
	// 		if (app.stage.children[0].x < -250) {
	// 			app.stage.children[0].x = 0;
	// 		}
	// 	}
	// };

	return (
		<Stage width={900} height={300} options={{ backgroundAlpha: 0 }}>
			<Sprite
				image={Magnolia}
				scale={{ x: 0.5, y: 0.5 }}
				anchor={0.5}
				x={150}
				y={150}
			/>
			{/* <Sprite image={FutureCover} x={250} y={0} /> */}
			<Text
				text="Magnolia Music"
				anchor={0.5}
				x={650}
				y={150}
				style={{
					align: "center",
					fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
					fontSize: 70,
					fontWeight: "300",
					fill: ["#ffffff"],
					stroke: "#4f46e5",
					strokeThickness: 3,
					letterSpacing: 10,
					wordWrap: true,
					wordWrapWidth: 300,
					styleID: 0,
				}}
			/>
		</Stage>
	);
};

export default AnimatedBackground;
