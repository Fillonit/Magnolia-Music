import { useCallback, useState } from "react";
import { Stage, Graphics, Text } from "@pixi/react";
import { TextStyle } from "@pixi/text";

function GraphicsExample() {
	const [showIframe, setShowIframe] = useState(false);

	const handleButtonClick = () => {
		setShowIframe((prevShowIframe) => !prevShowIframe);
	};

	const drawNotes = useCallback(
		(g: {
			bezierCurveTo(
				arg0: number,
				arg1: number,
				arg2: number,
				arg3: number,
				arg4: number,
				arg5: number
			): unknown;
			drawEllipse(
				arg0: number,
				arg1: number,
				arg2: number,
				arg3: number
			): unknown;
			quadraticCurveTo(
				arg0: number,
				arg1: number,
				arg2: number,
				arg3: number
			): unknown;
			clear: () => void;
			beginFill: (arg0: number, arg1?: number | undefined) => void;
			lineStyle: (
				arg0: number,
				arg1?: number | undefined,
				arg2?: number | undefined
			) => void;
			moveTo: (arg0: number, arg1: number) => void;
			lineTo: (arg0: number, arg1: number) => void;
			endFill: () => void;
			drawRect: (
				arg0: number,
				arg1: number,
				arg2: number,
				arg3: number
			) => void;
			drawRoundedRect: (
				arg0: number,
				arg1: number,
				arg2: number,
				arg3: number,
				arg4: number
			) => void;
			drawCircle: (arg0: number, arg1: number, arg2: number) => void;
		}) => {
			g.clear();
			g.beginFill(0x4f46e5);
			for (let i = 0; i < 3; i++) {
				const xOffset = i * 100;
				g.drawRect(50 + xOffset, 50, 5, 100);
				g.moveTo(50 + xOffset, 150);
				g.lineTo(65 + xOffset, 150);
				g.bezierCurveTo(
					80 + xOffset,
					150,
					80 + xOffset,
					165,
					65 + xOffset,
					165
				);
				g.lineTo(50 + xOffset, 165);
				g.bezierCurveTo(
					35 + xOffset,
					165,
					35 + xOffset,
					150,
					50 + xOffset,
					150
				);

				g.moveTo(55 + xOffset, 50);
				g.bezierCurveTo(
					75 + xOffset,
					70,
					55 + xOffset,
					90,
					75 + xOffset,
					110
				);
				g.lineTo(55 + xOffset, 50);
			}

			g.beginFill(0x4f46e5);

			for (let i = 0; i < 2; i++) {
				const xOffset = i * 60 + 350;
				g.drawRect(50 + xOffset, 50, 5, 100);
				g.moveTo(50 + xOffset, 150);
				g.lineTo(65 + xOffset, 150);
				g.bezierCurveTo(
					80 + xOffset,
					150,
					80 + xOffset,
					165,
					65 + xOffset,
					165
				);
				g.lineTo(50 + xOffset, 165);
				g.bezierCurveTo(
					35 + xOffset,
					165,
					35 + xOffset,
					150,
					50 + xOffset,
					150
				);
			}
			g.moveTo(400, 50);
			g.lineTo(520, 50);
			g.lineTo(520, 60);
			g.lineTo(400, 60);
			g.lineTo(400, 50);
			g.endFill();
		},
		[]
	);
	const drawPiano = useCallback(
		(g: {
			bezierCurveTo(
				arg0: number,
				arg1: number,
				arg2: number,
				arg3: number,
				arg4: number,
				arg5: number
			): unknown;
			drawEllipse(
				arg0: number,
				arg1: number,
				arg2: number,
				arg3: number
			): unknown;
			quadraticCurveTo(
				arg0: number,
				arg1: number,
				arg2: number,
				arg3: number
			): unknown;
			clear: () => void;
			beginFill: (arg0: number, arg1?: number | undefined) => void;
			lineStyle: (
				arg0: number,
				arg1?: number | undefined,
				arg2?: number | undefined
			) => void;
			moveTo: (arg0: number, arg1: number) => void;
			lineTo: (arg0: number, arg1: number) => void;
			endFill: () => void;
			drawRect: (
				arg0: number,
				arg1: number,
				arg2: number,
				arg3: number
			) => void;
			drawRoundedRect: (
				arg0: number,
				arg1: number,
				arg2: number,
				arg3: number,
				arg4: number
			) => void;
			drawCircle: (arg0: number, arg1: number, arg2: number) => void;
		}) => {
			for (let i = 0; i < 14; i++) {
				const xOffset = i * 40;
				g.beginFill(0xffffff);
				g.drawRect(xOffset, 200, 35, 100);
				g.endFill();
				if (i !== 0 && i !== 7 && i !== 14) {
					g.beginFill(0x000000);
					g.drawRect(xOffset - 10, 200, 20, 60);
					g.endFill();
				}
			}
		},
		[]
	);

	const textStyle = new TextStyle({ fill: 0xffffff });

	return (
		<div className="flex flex-col items-center">
			<h1 className="text-2xl font-bold text-center mt-8">
				Graphics done with Pixi-React
			</h1>
			<Stage width={600} height={300} options={{ backgroundAlpha: 0 }}>
				<Text text="Notes" x={50} y={10} style={textStyle} />
				<Graphics draw={drawNotes} />
				<Text text="Piano" x={50} y={160} style={textStyle} />
				<Graphics draw={drawPiano} />
			</Stage>
			<h1 className="text-2xl pt-4 pb-2">
				Want to try playing the Piano?
			</h1>
			<button
				onClick={handleButtonClick}
				className="bg-indigo-600 p-6 rounded-none mb-2"
			>
				{showIframe ? "Hide the Piano" : "Play the Piano"}
			</button>
			{showIframe && (
				<iframe
					src="https://4four.io/embed/piano/2AgERNQYC"
					width="900"
					height="330"
					frameBorder="0"
				></iframe>
			)}
		</div>
	);
}

export default GraphicsExample;
