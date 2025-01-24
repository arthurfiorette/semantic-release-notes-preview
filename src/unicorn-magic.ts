import { fileURLToPath } from 'node:url';

export function toPath(urlOrPath:string | URL) {
	return urlOrPath instanceof URL ? fileURLToPath(urlOrPath) : urlOrPath;
}