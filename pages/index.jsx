import * as React from "react";
import { motion } from "framer-motion";

import Nav from "@/components/Nav";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import InView from "@/components/InView";
import ProjectCard from "@/components/ProjectCard";
import { greeting, projects } from "@/data";
import { container, fadeUp, inView } from "@/utils/framerMotionAnimation";
import TechStack from "@/components/TechStack";

export default function Index() {
	return (
		<>
			<Nav />
			<LeftSidebar />
			<motion.div variants={container} initial="initial" animate="animate" className={`flex flex-col w-full justify-center`}>
				<section id="home" className={`flex justify-center items-center min-h-screen`}>
					<div className="lg:px-[20%] px-[12%] ">
						<article className="pb-6">
							<motion.h3 variants={fadeUp} className="md:mb-2 font-light">
								{greeting[0]()}
							</motion.h3>
							<motion.h1 variants={fadeUp} className="mb-2">
								{greeting[1]()}
							</motion.h1>
							<motion.p variants={fadeUp} className="dark:text-light">
								{greeting[2]()}
							</motion.p>
						</article>
						<article className="py-6">
							<motion.h3 variants={fadeUp} className="mb-2 font-light">
								Current Favorite Tech Stack
							</motion.h3>
							<motion.div variants={fadeUp}>
								<TechStack />
							</motion.div>
						</article>
					</div>
				</section>
				<section id="project" className={`min-h-screen`}>
					{projects.map(({ ...props }, i) => (
						<InView key={i} variants={inView} className="lg:pt-[6%] md:py-[8%] lg:px-[18%] md:px-[10%] py-[20%] px-[5%]">
							<ProjectCard alignRight={i % 2 === 0} {...props} />
						</InView>
					))}
				</section>
				<section id="contact" className={`min-h-screen`}>
					<div className="lg:pt-[10%] lg:px-[20%] pt-[25%] px-[12%]">
						<h1 className="">
							My name is <span className="text-blue-700 dark:text-blue-600">Svay Thavirak</span>
						</h1>
					</div>
				</section>
			</motion.div>
			<RightSidebar />
		</>
	);
}
