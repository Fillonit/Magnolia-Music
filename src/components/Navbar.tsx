import React from "react";
import { SiMusicbrainz } from "react-icons/si";
import { FiGithub } from "react-icons/fi";

const Loader: React.FC = () => {
	return (
		<header className="text-indigo-200 body-font bg-indigo-950">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
					<SiMusicbrainz className="w-10 h-10 text-white p-2 bg-indigo-600 rounded-full" />
					<span className="ml-3 text-xl text-white">
						Magnolia Music
					</span>
				</a>
				<nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
					<a href="/" className="mr-5 hover:text-indigo-500">
						Player
					</a>
					<a href="/contact" className="mr-5 hover:text-indigo-500">
						Contact
					</a>
					<a href="/video" className="mr-5 hover:text-indigo-500">
						Video
					</a>
				</nav>
				<a href="https://github.com/Fillonit/Magnolia-Music/">
					<button className="text-white inline-flex items-center bg-indigo-700 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-800 rounded text-base mt-4 md:mt-0">
						<FiGithub className="w-6 h-6" />
					</button>
				</a>
			</div>
		</header>
	);
};

export default Loader;
