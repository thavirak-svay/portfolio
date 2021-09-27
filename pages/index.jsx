import * as React from "react";
import { motion } from "framer-motion";

import Nav from "@/components/Nav";
import CustomLink from "@/components/CustomLink";
import TechStack from "@/components/TechStack";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import { fadeUpContainerVariant, fadeUpItemVariant } from "@/utils/framerMotionAnimation";

export default function Index() {
	return (
		<>
			<Nav />
			<LeftSidebar />
			<motion.div variants={fadeUpContainerVariant} initial="initial" animate="animate" className={`flex w-full justify-center`}>
				<div className="flex-col h-full w-full">
					<section id="home" className={`min-h-screen`}>
						<div className="lg:pt-[10%] lg:px-[20%] pt-[35%] px-[12%]">
							<div className="pb-6">
								<article>
									<motion.h3 variants={fadeUpItemVariant} className="md:mb-2 font-light">
										Hi! Nice to see you
									</motion.h3>
									<motion.h1 variants={fadeUpItemVariant} className="mb-2">
										My name is{" "}
										<span className="relative w-max group">
											<span className="text-blue-700 dark:text-blue-600">Svay Thavirak</span>
											<span className="absolute -bottom-0.5 group-hover:w-full left-0 w-0 transition-all h-1 bg-gray-800 dark:bg-white" />
										</span>
									</motion.h1>
									<motion.p variants={fadeUpItemVariant} className="dark:text-light">
										I&apos;m a hard working and a quick learner student at SETEC Institute. Currently, I&apos;m fascinated in Frontend Development and UI & UX
										design.
									</motion.p>
								</article>
							</div>
							<div className="py-6">
								<article>
									<motion.h3 variants={fadeUpItemVariant} className="mb-2 font-light ">
										Current Favorite Tech Stack
									</motion.h3>
									<motion.div variants={fadeUpItemVariant}>
										<TechStack />
									</motion.div>
								</article>
							</div>
						</div>
					</section>
					<section id="resume" className={` min-h-screen mt-[2px]`}>
						<div className="lg:pt-[5%] lg:px-[20%] pt-[25%] px-[12%]">
							<div className="">
								<button className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded">
									Button
								</button>
							</div>
						</div>
					</section>
					<section id="contact" className={`min-h-screen mt-[2px]`}>
						<div className="lg:pt-[10%] lg:px-[20%] pt-[25%] px-[12%]">
							<h1 className="">
								My name is <span className="text-blue-700 dark:text-blue-600">Svay Thavirak</span>
							</h1>
						</div>
					</section>
				</div>
			</motion.div>
			<RightSidebar />
		</>
	);
}
