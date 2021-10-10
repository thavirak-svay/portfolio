import { useEffect } from "react";
import Script from "next/script";
import { defaultTheme } from "@/data";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import * as gtag from "@/libs/gtag";

import "../styles/globals.css";
import "tippy.js/animations/scale-subtle.css";

const App = ({ Component, pageProps }) => {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url) => {
			gtag.pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			{/* Global Site Tag (gtag.js) - Google Analytics */}
			<Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
			<Script
				id="gtag-init"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
				}}
			/>
			<ThemeProvider attribute="class" defaultTheme={defaultTheme} enableSystem={false}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
};

export default App;
