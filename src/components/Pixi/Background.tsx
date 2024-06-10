import { Stage, Sprite, useApp, Text as PixiReactText } from "@pixi/react";
import { Text as PixiText } from "@pixi/text";
import { useEffect, useRef } from "react";

import Magnolia from "/Magnolia.png";

const AnimatedBackground: React.FC = () => {
	const app = useApp();
	const textRef = useRef<PixiText>(null);
	const directionRef = useRef(1);
	const bounceDirectionRef = useRef(1);

	useEffect(() => {
		const animate = (delta: number) => {
			if (textRef.current) {
				textRef.current.x += directionRef.current * delta;
				textRef.current.y += bounceDirectionRef.current * delta;
				if (textRef.current.x > 700) {
					directionRef.current = -1;
				} else if (textRef.current.x < 300) {
					directionRef.current = 1;
				}
				if (textRef.current.y > 250) {
					bounceDirectionRef.current = -1;
				} else if (textRef.current.y < 50) {
					bounceDirectionRef.current = 1;
				}
			}
		};

		app.ticker.add(animate);
		return () => {
			app.ticker.remove(animate);
		};
	}, [app]);

	return (
		<Stage width={900} height={300} options={{ backgroundAlpha: 0 }}>
			<Sprite
				image={Magnolia}
				scale={{ x: 0.5, y: 0.5 }}
				anchor={0.5}
				x={150}
				y={150}
			/>
			<PixiReactText
				ref={textRef}
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
