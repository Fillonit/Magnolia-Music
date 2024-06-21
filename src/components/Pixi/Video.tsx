import { useEffect, useState } from "react";
import { BaseTexture, Texture, VideoResource } from "@pixi/core";
import { Stage, Sprite } from "@pixi/react";
import Travis from "../../assets/Image/Travis.webp";
import { FaArrowRight } from "react-icons/fa";
// import Loader from "../Loader";


interface AppProps {
	videoUrl: string;
}

const App: React.FC<AppProps> = ({ videoUrl }) => {
	const [dimensions, setDimensions] = useState({
		width: 900,
		height: 600,
	});
	const [loading, setLoading] = useState(true);
	const [videoTexture, setVideoTexture] = useState<Texture>();

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

	useEffect(() => {
		const video = document.createElement('video');
		video.src = videoUrl;
		video.autoplay = true;
		video.loop = true;
		video.muted = true;
		video.preload = "metadata";

		video.addEventListener('loadeddata', () => {
			setTimeout(() => {
				setLoading(false);
				const videoResource = new VideoResource(video);
				const baseTexture = new BaseTexture(videoResource);
				setVideoTexture(new Texture(baseTexture));
			}, 1000);
		}, { once: true });

		return () => {
			video.removeEventListener('loadeddata', () => setLoading(false));
		};
	}, [videoUrl]);

	return (
		<section className="text-slate-400 body-font">
			<div className="container px-5 py-12 mx-auto flex flex-col">
				<div className="lg:w-4/6 mx-auto">
					{loading ? (
						<div className="relative flex justify-center items-center">
							<div className="absolute animate-spin rounded-full h-48 w-48 border-t-4 border-b-4 border-amber-700"></div>
							<img src={Travis} alt="Loading" className="rounded-full h-44 w-44" />
						</div>
					) : (
						<div className="rounded-lg h-96 overflow-hidden">
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
					)}
					<div className="flex flex-col sm:flex-row mt-10">
						<div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
							<div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
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