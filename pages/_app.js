import "../styles/globals.css";
import "tippy.js/animations/scale-subtle.css";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
