import "../styles/globals.css";
import "tippy.js/animations/scale-subtle.css";
import { ThemeProvider } from "next-themes";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
			<AnimateSharedLayout>
				<Component {...pageProps} />
			</AnimateSharedLayout>
		</ThemeProvider>
	);
}

export default MyApp;
