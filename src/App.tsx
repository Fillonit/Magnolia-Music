import React, { useState, useEffect } from "react";
import { Application } from "@pixi/app";
import { AppProvider } from "@pixi/react";
import "./App.css";
import MusicPlayer from "./components/MusicPlayer";
import AnimatedBackground from "./components/Pixi/Background";
import Preloader from "./components/Loader";
import SongList from "./components/SongList";

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
			<div className="App-header flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
				<AppProvider value={app}>
					<AnimatedBackground />
				</AppProvider>
				<MusicPlayer />
				<SongList
					songs={[
						{
							title: "All I Ever Wanted",
							url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
						},
						{
							title: "Menage",
							url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
						},
					]}
					onSongSelect={(song) => console.log(song)}
				/>
			</div>
		</div>
	);
};

export default App;
