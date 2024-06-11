import { useEffect, useState } from "react";

interface Track {
	title: string;
	artist: string;
	songUrl: string;
	images: { url: string }[];
}

const TopTracks = () => {
	const [tracks, setTracks] = useState<Track[]>([]);

	useEffect(() => {
		const fetchTracks = async () => {
			const response = await fetch(
				"https://portfolio-fillonit.vercel.app/api/top-tracks"
			);
			const { tracks } = await response.json();
			console.log(tracks);
			setTracks(tracks);
		};

		fetchTracks();
	}, []);

	return (
		<div className="mx-auto py-8 flex items-center flex-col">
			<h1 className="text-4xl font-bold mb-8">Top 3 Tracks</h1>
			<ol>
				{/* <div className="mx-auto py-8 flex justify-center flex-col"> */}
				{tracks.slice(0, 3).map((track, index) => (
					<li
						key={index + 1}
						className="text-xl mb-4 flex items-center"
					>
						<div className="flex items-center">
							<span className="font-bold mr-2">{index + 1}.</span>
							<img
								src={track.images[0].url}
								alt={track.title}
								className="w-10 h-10 rounded-full mr-2"
							/>
							<div className="flex flex-col">
								<a
									href={track.songUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-green-500 visited:text-green-700 no-underline"
								>
									{track.title}
								</a>
								<span className="text-gray-500 text-sm">
									{track.artist}
								</span>
							</div>
						</div>
					</li>
				))}
				{/* </div> */}
			</ol>
		</div>
	);
};

export default TopTracks;
