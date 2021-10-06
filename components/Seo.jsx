import Head from "next/head";
import { useRouter } from "next/router";

export default function Seo(props) {
	const router = useRouter();
	const meta = {
		title: "Svay Thavirak | Portfolio",
		description: "An online portfolio by Svay Thavirak and the showcase of my works.",
		image: "https://thaavirak.vercel.app/favicon.ico",
		type: "website",
		robots: "follow, index",
		...props,
	};

	return (
		<Head>
			<title>{meta.title}</title>
			<meta name="robots" content={meta.robots} />
			<meta content={meta.description} name="description" />
			<meta property="og:url" content={`https://thaavirak.vercel.app${router.asPath}`} />
			<link rel="canonical" href={`https://thaavirak.vercel.app${router.asPath}`} />
			{/* Open Graph */}
			<meta property="og:type" content={meta.type} />
			<meta property="og:site_name" content="Svay Thavirak" />
			<meta property="og:description" content={meta.description} />
			<meta property="og:title" content={meta.title} />
			<meta name="image" property="og:image" content={meta.image} />
			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@thavirak_svay" />
			<meta name="twitter:title" content={meta.title} />
			<meta name="twitter:description" content={meta.description} />
			<meta name="twitter:image" content={meta.image} />
			{meta.date && (
				<>
					<meta property="article:published_time" content={meta.date} />
					<meta name="publish_date" property="og:publish_date" content={meta.date} />
					<meta name="author" property="article:author" content="Svay Thavirak" />
				</>
			)}
		</Head>
	);
}
