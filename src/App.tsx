import PhotoAlbum from "react-photo-album";
import photos from "./photos";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Navigation } from "./components/Navigation";
import "./fonts.css";
import { useMediaQuery } from "react-responsive";

export default function App() {
	const [index, setIndex] = useState(-1);
	const theme = {
		primary: "#F5F2E5",
		secondary: "#23272D",
		divider: "4px solid #F5F2E5",
		isTabletOrMobile: useMediaQuery({
			query: "(max-width: 1224px)",
		}),
	};

	return (
		<ThemeProvider theme={theme}>
			<Navigation />
			<div className="photo-album-wrapper">
				<PhotoAlbum
					photos={photos}
					layout="masonry"
					spacing={4}
					columns={(containerWidth) => {
						if (containerWidth < 800) return 2;
						if (containerWidth < 1000) return 3;
						return 4;
					}}
					onClick={({ index }) => setIndex(index)}
					padding={0}
				/>
			</div>

			<Lightbox
				slides={photos}
				open={index >= 0}
				index={index}
				close={() => setIndex(-1)}
				plugins={[Zoom]}
			/>
		</ThemeProvider>
	);
}
