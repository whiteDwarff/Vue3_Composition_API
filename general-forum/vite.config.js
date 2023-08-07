// vite의 환경설정 파일
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			// src의 경로를 @로 설정
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
