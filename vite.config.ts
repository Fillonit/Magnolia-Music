// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// import fs from "fs";
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	// server: {
	// 	port: 443,
	// 	https: {
	// 		key: fs.readFileSync("./localhost-privateKey.key"),
	// 		cert: fs.readFileSync("./localhost.crt"),
	// 	},
	// },
});
