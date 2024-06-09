import React, { useState, useEffect } from "react";
import { Application } from "@pixi/app";
import { AppProvider } from "@pixi/react";
import "./App.css";
import MusicPlayer from "./components/MusicPlayer";
import AnimatedBackground from "./components/Pixi/Background";
import Preloader from "./components/Loader";

const App: React.FC = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		window.onload = () => {
			setTimeout(() => setLoading(false), 1000);
			// setLoading(false);
		};
	}, []);

	const app = new Application({
		width: window.innerWidth,
		height: window.innerHeight,
		backgroundColor: 0x1099bb,
	});

	if (loading) {
		return <Preloader />;
	}

	return (
		<div className="App">
			<header className="App-header flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
				<h1 className="text-4xl font-bold mb-8">React Music Player</h1>
				<AppProvider value={app}>
					<AnimatedBackground />
				</AppProvider>
				<MusicPlayer />
			</header>
		</div>
	);
};

export default App;
