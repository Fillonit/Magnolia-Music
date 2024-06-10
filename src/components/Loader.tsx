import React from "react";
import Trav from "../assets/trav.png";

const Loader: React.FC = () => {
	return (
		<div className="flex items-center justify-center w-full h-screen bg-slate-900">
			{/* <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-indigo-600" /> */}
			<div className="relative flex justify-center items-center">
				<div className="absolute animate-spin rounded-full h-48 w-48 border-t-4 border-b-4 border-indigo-700"></div>
				<img src={Trav} className="rounded-full h-44 w-44" />
			</div>
		</div>
	);
};

export default Loader;
