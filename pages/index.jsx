import * as React from "react";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import TechStack from "../components/TechStack";
import { useMount } from "react-use";

export default function Index() {
	const [isLoaded, setIsLoaded] = React.useState(false);
	useMount(() => setTimeout(() => setIsLoaded(true), 200));
	return (
		<>
			<Nav />
			<div className="flex w-full justify-center">
				<LeftSidebar />
				<div className="flex-col w-full">
					<div id="home" className={`min-h-screen snap snap-y snap-proximity ${isLoaded && "animate-fade-in-start"}`}>
						<div className="lg:pt-[10%] lg:px-[20%] pt-[25%] px-[12%]">
							<section className="pb-6">
								<article>
									<motion.h1
										inherit={{ y: -100 }}
										animate={{ y: 0 }}
										transition={{ duration: 0.5 }}
										className="md:mb-2 font-light animate-fade-in-initial fade-in-1"
									>
										Hi! Nice to see you
									</motion.h1>
									<h1 className="mb-2 animate-fade-in-initial fade-in-2">
										My name is <span className="text-blue-700 dark:text-blue-600">Svay Thavirak</span>
									</h1>
									<p className="dark:text-light animate-fade-in-initial fade-in-3">
										I&apos;m a hard working and quick learner MIS students at SETEC Institute. Currently, I&apos;m fascinated in Frontend Development and UI &
										UX design.
									</p>
								</article>
							</section>
							<section className="py-6">
								<article>
									<h2 className="mb-2 font-light animate-fade-in-initial fade-in-4">Current Favorite Tech Stack</h2>
									<figure className="animate-fade-in-initial fade-in-5">
										<TechStack />
									</figure>
								</article>
							</section>
						</div>
					</div>
					<div id="resume" className={`text-white bg-blue-700 min-h-screen snap snap-y snap-proximity ${isLoaded && "animate-fade-in-start"}`}>
						<h1 className="animate-fade-in-initial fade-in-2">
							My name is <span className="text-blue-700 dark:text-blue-600">Svay Thavirak</span>
						</h1>
					</div>
					<div id="contact" className={`min-h-screen snap snap-y snap-proximity ${isLoaded && "animate-fade-in-start"}`}>
						<h1 className="animate-fade-in-initial fade-in-2">
							My name is <span className="text-blue-700 dark:text-blue-600">Svay Thavirak</span>
						</h1>
					</div>
				</div>
				<RightSidebar />
			</div>
		</>
	);
}
