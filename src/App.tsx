import React, { useState, useEffect, Suspense, lazy } from "react";
import { Application } from "@pixi/app";
import { AppProvider } from "@pixi/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Preloader from "./components/Loader";
import Navbar from "./components/Navbar";
import Serenade from "./assets/Video/Serenade.mp4";

const MusicPlayer = lazy(() => import("./components/MusicPlayer"));
const AnimatedBackground = lazy(() => import("./components/Pixi/Background"));
const Video = lazy(() => import("./components/Pixi/Video"));
const Graphics = lazy(() => import("./components/Pixi/Graphics"));
const NowListening = lazy(() => import("./components/Spotify/NowListening"));

const App: React.FC = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		window.onload = () => {
			setTimeout(() => setLoading(false), 500);
		};
	}, []);

	const app = new Application({
		width: window.innerWidth,
		height: window.innerHeight,
		backgroundColor: 0x1099bb,
	});

	useEffect(() => {
		const handleLoad = () => {
			setTimeout(() => setLoading(false), 500);
		};

		if (document.readyState === "complete") {
			handleLoad();
		} else {
			window.addEventListener("load", handleLoad);
		}

		return () => {
			window.removeEventListener("load", handleLoad);
		};
	}, []);

	if (loading) {
		return <Preloader />;
	}

	return (
		<Router>
			<div className="">
				<Navbar />
				<div className="min-h-screen bg-gray-900 text-white z-50">
					<AppProvider value={app}>
						<Suspense fallback={<Preloader />}>
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
								<Route
									path="/graphics"
									element={<Graphics />}
								/>
								<Route
									path="/spotify"
									element={<NowListening />}
								/>
							</Routes>
						</Suspense>
					</AppProvider>
				</div>
			</div>
		</Router>
	);
};

export default App;
