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
			<div className={`flex w-full justify-center ${isLoaded && "animate-fade-in-start"}`}>
				<LeftSidebar />
				<div className="flex-col h-full w-full">
					<section id="home" className={`min-h-screen`}>
						<div className="lg:pt-[10%] lg:px-[20%] pt-[35%] px-[12%]">
							<div className="pb-6">
								<article>
									<h3 className="md:mb-2 font-light animate-fade-in-initial fade-in-2">Hi! Nice to see you</h3>
									<h1 className="mb-2 animate-fade-in-initial fade-in-3">
										My name is <span className="text-blue-700 dark:text-blue-600">Svay Thavirak</span>
									</h1>
									<p className="dark:text-light animate-fade-in-initial fade-in-4">
										I&apos;m a hard working and a quick learner student at SETEC Institute. Currently, I&apos;m fascinated in Frontend Development and UI & UX
										design.
									</p>
								</article>
							</div>
							<div className="py-6">
								<article>
									<h3 className="mb-2 font-light animate-fade-in-initial fade-in-5">Current Favorite Tech Stack</h3>
									<figure className="animate-fade-in-initial fade-in-6">
										<TechStack />
									</figure>
								</article>
							</div>
						</div>
					</section>
					<section id="resume" className={` min-h-screen mt-[2px] ${isLoaded && "animate-fade-in-start"}`}>
						<div className="lg:pt-[5%] lg:px-[20%] pt-[25%] px-[12%]">
							<div className="animate-fade-in-initial fade-in-2">
								<button className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded">
									Button
								</button>
							</div>
						</div>
					</section>
					<section id="contact" className={`min-h-screen mt-[2px] ${isLoaded && "animate-fade-in-start"}`}>
						<div className="lg:pt-[10%] lg:px-[20%] pt-[25%] px-[12%]">
							<h1 className="animate-fade-in-initial fade-in-2">
								My name is <span className="text-blue-700 dark:text-blue-600">Svay Thavirak</span>
							</h1>
						</div>
					</section>
				</div>
				<RightSidebar />
			</div>
		</>
	);
}
