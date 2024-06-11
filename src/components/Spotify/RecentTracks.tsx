import React from "react";
import { useEffect, useState } from "react";

interface Artist {
	name: string;
	external_urls: {
		spotify: string;
	};
}

interface Track {
	name: string;
	image: string;
	trackURL: string;
	artist: Artist[];
}

const RecentTracks = () => {
	const [tracks, setTracks] = useState<Track[]>([]);

	useEffect(() => {
		const fetchTracks = async () => {
			const response = await fetch(
				"https://portfolio-fillonit.vercel.app/api/recent-tracks"
			);
			const { tracks } = await response.json();
			console.log(tracks);
			setTracks(tracks);
		};

		fetchTracks();
	}, []);

	return (
		<div className="mx-auto py-8 flex items-center flex-col">
			<h1 className="text-4xl font-bold mb-8">Recent Tracks</h1>
			<ol>
				{tracks.slice(0, 3).map((track, index) => (
					<li
						key={index + 1}
						className="text-xl mb-4 flex items-center"
					>
						<div className="flex items-center">
							<span className="font-bold mr-2">{index + 1}.</span>
							<img
								src={track.image}
								alt={track.name}
								className="w-10 h-10 rounded-full mr-2"
							/>
							<div className="flex flex-col">
								<a
									href={track.trackURL}
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-indigo-500 visited:text-indigo-700 no-underline"
								>
									{track.name}
								</a>
								<span className="text-gray-500 text-sm">
									by{" "}
									<>
										{track.artist.map((artist, index) => (
											<React.Fragment key={index}>
												<a
													href={
														artist.external_urls
															.spotify
													}
													target="_blank"
													rel="noopener noreferrer"
													className="text-gray-500 hover:text-indigo-500 visited:text-indigo-700 no-underline"
												>
													{artist.name}
												</a>
												{index <
													track.artist.length - 1 &&
													", "}
											</React.Fragment>
										))}
									</>
								</span>
							</div>
						</div>
					</li>
				))}
			</ol>
		</div>
	);
};

export default RecentTracks;
