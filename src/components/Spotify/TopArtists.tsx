import { useEffect, useState } from "react";

interface Artist {
	artist: string;
	artistURL: string;
	images: { url: string }[];
	genres: string[];
}

const TopArtists = () => {
	const [AllArtists, setArtists] = useState<Artist[]>([]);

	useEffect(() => {
		const fetchArtists = async () => {
			const response = await fetch(
				"https://portfolio-fillonit.vercel.app/api/top-artists"
			);
			const { artists } = await response.json();
			console.log(artists);
			setArtists(artists);
		};

		fetchArtists();
	}, []);

	return (
		<div className="container mx-auto py-8 flex flex-col items-center">
			<h1 className="text-4xl font-bold mb-8">Top 3 Artists</h1>
			<ol className="list-decimal">
				{AllArtists.slice(0, 3).map((artist, index) => (
					<li
						key={index + 1}
						className="text-xl mb-4 flex items-center"
					>
						<span className="font-bold mr-2">{index + 1}.</span>
						<a
							href={artist.artistURL}
							className="flex items-center"
							target="_blank"
							rel="noreferrer"
						>
							<img
								src={artist.images[0].url}
								alt={`${artist.artist}'s profile picture`}
								className="w-10 h-10 rounded-full mr-4"
							/>
							<div className="flex flex-col">
								<span className="text-white hover:text-green-500 visited:text-green-700 no-underline">
									{artist.artist}
								</span>
								<span className="text-gray-500 text-sm">
									{artist.genres.slice(0, 3).join(", ")}
								</span>
							</div>
						</a>
					</li>
				))}
			</ol>
		</div>
	);
};

export default TopArtists;
