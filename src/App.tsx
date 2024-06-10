import React, { useState, useEffect } from "react";
import { Application } from "@pixi/app";
import { AppProvider } from "@pixi/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MusicPlayer from "./components/MusicPlayer";
import AnimatedBackground from "./components/Pixi/Background";
import Video from "./components/Pixi/Video";
import Preloader from "./components/Loader";
import Navbar from "./components/Navbar";
import Serenade from "./assets/Video/Serenade.mp4";

const App: React.FC = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		window.onload = () => {
			setTimeout(() => setLoading(false), 1000);
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
		<Router>
			<div className="overflow-hidden overflow-y-hidden">
				<Navbar />
				<div className="min-h-screen bg-gray-900 text-white z-50">
					<AppProvider value={app}>
						<Routes>
							<Route path="/" element={<MusicPlayer />} />
							<Route
								path="/contact"
								element={<AnimatedBackground />}
							/>
							<Route
								path="/video"
								element={<Video videoUrl={Serenade} />}
							/>
						</Routes>
					</AppProvider>
				</div>
			</div>
		</Router>
	);
};

export default App;
