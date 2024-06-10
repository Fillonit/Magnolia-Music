import { Stage, Sprite, useApp, Text as PixiReactText } from "@pixi/react";
import { Text as PixiText } from "@pixi/text";
import { useEffect, useRef } from "react";
import { TextStyle } from "@pixi/text";

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
				if (textRef.current.x > 900) {
					directionRef.current = -1;
				} else if (textRef.current.x < 500) {
					directionRef.current = 1;
				}
				if (textRef.current.y > 400) {
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

	const textStyle = new TextStyle({
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
	});

	return (
		<section className="text-gray-600 body-font relative min-h-screen">
			<div className="absolute inset-0 bg-slate-900">
				{/* <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe> */}
				<Stage
					width={document.body.clientWidth}
					height={document.body.clientHeight}
					options={{ backgroundAlpha: 0 }}
				>
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
						style={textStyle}
					/>
				</Stage>
			</div>
			<div className="container px-5 py-24 mx-auto flex">
				<div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
					<h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
						Feedback
					</h2>
					<p className="leading-relaxed mb-5 text-gray-600">
						Post-ironic portland shabby chic echo park, banjo
						fashion axe
					</p>
					<div className="relative mb-4">
						<label className="leading-7 text-sm text-gray-600">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
					<div className="relative mb-4">
						<label className="leading-7 text-sm text-gray-600">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
						></textarea>
					</div>
					<button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
						Button
					</button>
					<p className="text-xs text-gray-500 mt-3">
						Chicharrones blog helvetica normcore iceland tousled
						brook viral artisan.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AnimatedBackground;
