import React, { useState, useRef, useEffect } from "react";
import { CiPlay1, CiPause1, CiVolumeHigh, CiVolumeMute } from "react-icons/ci";
import { HiOutlineBackward, HiOutlineForward } from "react-icons/hi2";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

type Song = {
	title: string;
	artist: string;
	cover: string;
	src: string;
};

import AllIEverWanted from "../assets/Music/All_I_EVER_WANTED.mp3";
import FutureCover from "../assets/Image/Future-Cover.webp";
import MariaImDrunk from "../assets/Music/Maria I'm Drunk (feat. Justin Bieber & Young Thug).mp3";
import MariaImDrunkImg from "../assets/Image/MariaImDrunk.webp";
import Menage from "../assets/Music/Menage (Master).mp3";
import MenageImg from "../assets/Image/wlr.webp";
import RichardMilliePlain from "../assets/Music/Richard Millie Plain.mp3";
import RichardMilliePlainImg from "../assets/Image/Richard Millie Plain.webp";
import DrugsYouShouldTryIt from "../assets/Music/Travis Scott - Drugs You Should Try It (Music Video).mp3";
import DrugsYouShouldTryItImg from "../assets/Image/Drugs.webp";

const MusicPlayer: React.FC = () => {
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [currentTime, setCurrentTime] = useState<number>(0);
	const [duration, setDuration] = useState<number>(0);
	const [volume, setVolume] = useState<number>(1);
	const [isMuted, setIsMuted] = useState<boolean>(false);
	const audioRef = useRef<HTMLAudioElement>(null);
	const [songs] = useState<Song[]>([
		{
			title: "Drugs You Should Try It",
			artist: "Travis Scott",
			cover: DrugsYouShouldTryItImg,
			src: DrugsYouShouldTryIt,
		},
		{
			title: "Maria I'm Drunk",
			artist: "Travis Scott",
			cover: MariaImDrunkImg,
			src: MariaImDrunk,
		},
		{
			title: "All I Ever Wanted",
			artist: "Future",
			cover: FutureCover,
			src: AllIEverWanted,
		},
		{
			title: "Menage",
			artist: "Playboi Carti",
			cover: MenageImg,
			src: Menage,
		},
		{
			title: "Richard Millie Plain",
			artist: "Gunna",
			cover: RichardMilliePlainImg,
			src: RichardMilliePlain,
		},
	]);
	const [currentSong, setCurrentSong] = useState<Song>(songs[0]);

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.src = currentSong.src;
			// audioRef.current.oncanplay = function () {
			// 	audioRef.current!.play();
			// 	setIsPlaying(true);
			// };
		}
	}, [currentSong]);

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.volume = volume;
		}
	}, [volume]);

	const handleSongChange = (song: Song) => {
		setCurrentSong(song);
	};

	const handlePlayPause = () => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause();
			} else {
				audioRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	const handleTimeUpdate = () => {
		if (audioRef.current) {
			setCurrentTime(audioRef.current.currentTime);
		}
	};

	const handleLoadedMetadata = () => {
		if (audioRef.current) {
			setDuration(audioRef.current.duration);
		}
	};

	const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (audioRef.current) {
			const newTime = (event.target.valueAsNumber / 100) * duration;
			audioRef.current.currentTime = newTime;
			setCurrentTime(newTime);
		}
	};

	const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (audioRef.current) {
			const newVolume = event.target.valueAsNumber / 100;
			audioRef.current.volume = newVolume;
			setVolume(newVolume);
			setIsMuted(newVolume === 0);
		}
	};

	const toggleMute = () => {
		if (audioRef.current) {
			audioRef.current.muted = !isMuted;
			setIsMuted(!isMuted);
			if (!isMuted) {
				setVolume(0);
			} else {
				setVolume(1);
			}
		}
	};

	const skipForward = () => {
		if (audioRef.current) {
			audioRef.current.currentTime = Math.min(
				audioRef.current.currentTime + 10,
				duration
			);
		}
	};

	const skipBackward = () => {
		if (audioRef.current) {
			audioRef.current.currentTime = Math.max(
				audioRef.current.currentTime - 10,
				0
			);
		}
	};

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-[90vh]">
			<div className="w-full max-w-screen-lg flex flex-col items-center p-8 bg-slate-800 text-white rounded-lg shadow-2xl">
				<div className="w-full flex justify-center items-center bg-indigo-700 text-white p-4 rounded-lg mb-4 shadow-lg transition-transform duration-300">
					<div className="text-center">
						<h2 className="text-2xl font-bold animate-fadeInOut">
							Now Playing
						</h2>
						<p
							className="text-xl animate-fadeInOut"
							key={currentSong.title}
						>
							{currentSong.title}
						</p>
						<p
							className="text-md text-white animate-fadeInOut"
							key={currentSong.artist}
						>
							{currentSong.artist}
						</p>
					</div>
				</div>
				<Carousel
					opts={{
						align: "start",
					}}
					className="w-full max-w-screen-md px-8"
				>
					<CarouselContent>
						{songs.map((song, index) => (
							<CarouselItem
								key={index}
								className="md:basis-1/2 lg:basis-1/3 hover:cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
								onClick={() => handleSongChange(song)}
							>
								<div className="p-4">
									<Card className="bg-slate-900 text-white rounded-lg overflow-hidden border-none">
										<CardContent className="flex flex-col items-center justify-center p-6">
											<img
												src={song.cover}
												alt={song.title}
												className="w-32 h-32 object-cover rounded-lg shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
											/>
											<p className="text-sm mt-2 font-semibold truncate">
												{song.title}
											</p>
											<p className="text-xs text-gray-400">
												{song.artist}
											</p>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition duration-200" />
					<CarouselNext className="text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition duration-200" />
				</Carousel>
				{/* </div> */}
				<audio
					ref={audioRef}
					src={currentSong.src}
					onTimeUpdate={handleTimeUpdate}
					onLoadedMetadata={handleLoadedMetadata}
					className="hidden"
					autoPlay={false}
				></audio>
				<div className="controls flex items-center space-x-4 mt-4 w-full px-4 py-2 bg-gray-700 rounded-lg">
					<button
						onClick={handlePlayPause}
						name="play-pause"
						aria-label={isPlaying ? "Pause" : "Play"}
						className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
					>
						{isPlaying ? (
							<CiPause1 size={24} />
						) : (
							<CiPlay1 size={24} />
						)}
					</button>
					<button
						onClick={skipBackward}
						aria-label="Skip Backward"
						name="skip-backward"
						className="bg-slate-600 hover:bg-slate-500 text-white font-bold py-2 px-3 rounded-full transition duration-300 ease-in-out shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
					>
						<HiOutlineBackward size={24} />
					</button>
					<button
						onClick={skipForward}
						aria-label="Skip Forward"
						name="skip-forward"
						className="bg-slate-600 hover:bg-slate-500 text-white font-bold py-2 px-3 rounded-full transition duration-300 ease-in-out shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
					>
						<HiOutlineForward size={24} />
					</button>
					<input
						type="range"
						min="0"
						max="100"
						value={(currentTime / duration) * 100 || 0}
						onChange={handleSeek}
						aria-label="seekbar"
						className="w-full h-2 bg-slate-500 accent-indigo-600 rounded-lg cursor-pointer"
					/>
					<div className="text-sm font-mono w-1/2">
						{formatTime(currentTime)} / {formatTime(duration)}
					</div>
					<div className="controls flex items-center space-x-4 w-full px-4 py-2 bg-gray-700 rounded-lg">
						<button
							onClick={toggleMute}
							aria-label="Toggle Mute"
							name="toggle-mute"
							className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-3 rounded-full transition duration-300 ease-in-out shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
						>
							{isMuted ? (
								<CiVolumeMute size={24} />
							) : (
								<CiVolumeHigh size={24} />
							)}
						</button>
						<input
							type="range"
							min="0"
							max="100"
							value={isMuted ? 0 : volume * 100}
							onChange={handleVolumeChange}
							aria-label="volumebar"
							className="w-full h-2 bg-slate-500 rounded-lg accent-indigo-600 cursor-pointer"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MusicPlayer;
