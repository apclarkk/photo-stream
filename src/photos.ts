import { getImageSize } from "react-image-size";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const imagesContext = import.meta.glob("../public/assets/images/*");

const imagesPromise = Promise.all(
	Object.entries(imagesContext).map(async ([path]) => {
		const { height, width } = await getImageSize(path);

		const module = await imagesContext[path as any]();
		return {
			path: (module as any).default,
			width,
			height,
		};
	})
);
const images = await imagesPromise;

const photos = images.map((photo) => ({
	src: photo.path,
	width: photo.width,
	height: photo.height,
	srcSet: breakpoints.map((breakpoint) => {
		const height = Math.round((photo.height / photo.width) * breakpoint);
		return {
			src: photo.path,
			width: breakpoint,
			height,
		};
	}),
}));

export default photos;
