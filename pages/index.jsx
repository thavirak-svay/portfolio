import * as React from "react";
import { motion } from "framer-motion";
import Nav from "../components/nav";
import SocialMedia from "../components/socialMedia";
import { classNames } from "../utils/helper";
import { useMount } from "react-use";
export default function Index() {
	const [isLoaded, setIsLoaded] = React.useState(false);
	useMount(() => setTimeout(() => setIsLoaded(true), 500));
	return (
		<>
			<div className="sticky top-0 z-10 bg-white">
				<Nav />
			</div>
			<div className="px-24 py-10">
				<div className="flex relative justify-center">
					<aside className="fixed left-1 bottom-0">
						<SocialMedia />
					</aside>
					<motion.main>
						<div className={classNames("flex max-w-4xl flex-col justify-center min-h-[calc(100vh-82px)]", isLoaded && "animate-fade-in-start")}>
							<section className="pb-6">
								<article className="layout">
									<h1 className="md:mb-2 animate-fade-in-initial fade-in-1">Hi ! </h1>
									<h1 className="mb-2 animate-fade-in-initial fade-in-2">
										My name is <span className="accent no-under bg-accent-200/50">Svay Thavirak</span>
									</h1>
									<p className="prose dark:text-light animate-fade-in-initial fade-in-3">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consequuntur rem itaque dolorum voluptatem voluptatum perspiciatis quae
										nemo unde, architecto accusantium, blanditiis est accusamus saepe excepturi reprehenderit deserunt numquam tenetur?
									</p>
								</article>
							</section>
							<section className="py-6">
								<article className="layout">
									<h2 className="mb-2 animate-fade-in-initial fade-in-4">Current Favorite Tech Stack</h2>
									<figure className="animate-fade-in-initial fade-in-5">{/* <TechStack /> */}</figure>
								</article>
							</section>
						</div>
					</motion.main>
				</div>
			</div>
		</>
	);
}
