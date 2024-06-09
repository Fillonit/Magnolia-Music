import React from "react";

interface Song {
	title: string;
	url: string;
}

interface SongListProps {
	songs: Song[];
	onSongSelect: (song: Song) => void;
}

const SongList: React.FC<SongListProps> = ({ songs, onSongSelect }) => {
	return (
		<div className="song-list mb-6 w-full overflow-x-auto scrollbar-hide py-4">
			<div className="flex space-x-4 p-2">
				{songs.map((song, index) => (
					<button
						key={index}
						onClick={() => onSongSelect(song)}
						className="bg-gray-700 text-white py-2 px-4 rounded-lg shadow-md transition-transform duration-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
					>
						{song.title}
					</button>
				))}
			</div>
		</div>
	);
};

export default SongList;
