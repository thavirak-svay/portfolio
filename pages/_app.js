import "../styles/globals.css";
import "tippy.js/animations/scale-subtle.css";
import { ThemeProvider } from "next-themes";
import { defaultTheme } from "@/data";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider attribute="class" defaultTheme={defaultTheme} enableSystem={false}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
