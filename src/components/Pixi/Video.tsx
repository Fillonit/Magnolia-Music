import { useEffect, useState } from "react";
import { BaseTexture, Texture, VideoResource } from "@pixi/core";
import { Stage, Sprite } from "@pixi/react";
import Travis from "../../assets/Image/Travis.jpeg";
import { FaArrowRight } from "react-icons/fa";

interface AppProps {
	videoUrl: string;
}

// const useWindowDimensions = () => {
// 	const [windowDimensions, setWindowDimensions] = useState({
// 		width: window.innerWidth,
// 		height: window.innerHeight,
// 	});

// 	useEffect(() => {
// 		const handleResize = () => {
// 			setWindowDimensions({
// 				width: window.innerWidth,
// 				height: window.innerHeight,
// 			});
// 		};

// 		window.addEventListener("resize", handleResize);

// 		return () => {
// 			window.removeEventListener("resize", handleResize);
// 		};
// 	}, []);

// 	return windowDimensions;
// };

const App: React.FC<AppProps> = ({ videoUrl }) => {
	// const { width, height } = useWindowDimensions();
	const [dimensions, setDimensions] = useState({
		width: 900,
		height: 600,
	});

	useEffect(() => {
		const handleResize = () => {
			setDimensions({
				width: 900,
				height: 600,
			});
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const videoResource = new VideoResource(videoUrl, {
		autoPlay: true,
		loop: true,
	});

	const baseTexture = new BaseTexture(videoResource);

	const videoTexture = new Texture(baseTexture);

	return (
		<section className="text-slate-400 body-font">
			<div className="container px-5 py-12 mx-auto flex flex-col">
				<div className="lg:w-4/6 mx-auto">
					<div className="rounded-lg h-96 overflow-hidden">
						{/* <img
							alt="content"
							className="object-cover object-center h-full w-full"
							src="https://dummyimage.com/1200x500"
						/> */}
						<Stage
							width={dimensions.width}
							height={500}
							className="object-fit"
						>
							<Sprite
								texture={videoTexture}
								width={dimensions.width}
								height={500}
							/>
						</Stage>
					</div>
					<div className="flex flex-col sm:flex-row mt-10">
						<div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
							<div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
								{/* <svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-10 h-10"
									viewBox="0 0 24 24"
								>
									<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
									<circle cx="12" cy="7" r="4"></circle>
								</svg> */}
								<img
									src={Travis}
									alt="Travis"
									className="w-20 h-20 object-cover rounded-full"
								/>
							</div>
							<div className="flex flex-col items-center text-center justify-center">
								<h2 className="font-medium title-font mt-4 text-white text-lg">
									Travis Scott
								</h2>
								<div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
								<p className="text-base">
									AKA: La Flame, Cactus Jack, Jacques Webster,
									Jacques B. Webster, Jacques Bermon Webster,
									Jacques Webster II, Jacques B. Webster II,
									Jacques Bermon Webster II
								</p>
							</div>
						</div>
						<div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
							<p className="leading-relaxed text-lg mb-4">
								Jacques Bermon Webster II (born April 30, 1991),
								popularly known as Travis Scott (previously
								stylized as Travi$ Scott) is a rapper and
								producer from Missouri City, Texas, located
								within the Houston Metropolitan area. Scott
								began producing and releasing beats via Myspace
								at 16. He moved to Los Angeles after dropping
								out of The University of Texas at San Antonio
								following his sophomore year, adopting the name
								Travi$ Scott in homage to his uncle named
								Travis, and his musical idol Kid Cudi (real name
								Scott Mescudi).
							</p>
							<a
								className="text-indigo-500 inline-flex items-center"
								href="https://www.travisscott.com/"
							>
								Learn More
								<FaArrowRight className="w-4 h-4 ml-2" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default App;
