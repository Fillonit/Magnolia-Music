import { useEffect, useState, lazy } from "react";
const TopArtists = lazy(() => import("./TopArtists"));
const TopTracks = lazy(() => import("./TopTracks"));
const RecentTracks = lazy(() => import("./RecentTracks"));
import { FaSpotify } from "react-icons/fa";

interface SongData {
	isPlaying: boolean;
	title: string;
	album: string;
	artist: string;
	albumImageUrl: string;
	songUrl: string;
	progress: number;
	duration: number;
	timestamp: number;
	releaseDate: string;
	releaseDatePrecision: string;
	trackNumber: number;
}

const NowListening = () => {
	const [songData, setSongData] = useState<SongData | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				"https://portfolio-fillonit.vercel.app/api/spotify"
			);
			const data = await response.json();
			setSongData(data.data);
		};

		fetchData();
	}, []);

	if (!songData) {
		return <div>Loading...</div>;
	}

	return (
		<div className="pt-8 px-4 md:px-0 md:mx-auto md:max-w-[90rem]">
			<a
				href={songData.songUrl}
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="max-w-md mx-auto bg-indigo-900 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
					<div className="md:flex">
						<div className="md:flex-shrink-0">
							<img
								className="h-48 w-full object-cover md:w-48"
								src={songData.albumImageUrl}
								alt="Album cover"
							/>
						</div>
						<div className="p-8">
							{songData.isPlaying && (
								<div className="uppercase tracking-wide text-sm text-indigo-300 font-semibold">
									Now Playing
								</div>
							)}
							<a
								href={songData.songUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="block mt-1 text-lg leading-tight font-medium text-white hover:underline"
							>
								{songData.title}
							</a>
							<p className="mt-2 text-slate-300">
								{songData.album}
							</p>
							<p className="mt-2 text-slate-300">
								{songData.artist}
							</p>
						</div>
					</div>
				</div>
			</a>
			<a
				href="https://open.spotify.com/user/liwesdgpsa2jdtlqpp0wx4dvp?si=849585c01e4a47cf"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="flex items-center justify-center mt-8">
					<FaSpotify className="text-indigo-600 text-4xl" />
					<p className="text-white ml-2">View Profile on Spotify</p>
				</div>
			</a>
			<div className="grid grid-cols-3 gap-8">
				<div className="p-4">
					<TopTracks />
				</div>
				<div className="p-4">
					<TopArtists />
				</div>
				<div className="p-4">
					<RecentTracks />
				</div>
			</div>
		</div>
	);
};

export default NowListening;
