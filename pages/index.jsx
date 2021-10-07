import * as React from "react";
import { motion } from "framer-motion";

import Seo from "@/components/Seo";
import Nav from "@/components/Nav";
import InView from "@/components/InView";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";
import ProjectCard from "@/components/ProjectCard";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";

import { greeting, projects, email, cvUrl } from "@/data";
import { container, fadeUp, inView } from "@/utils/framerMotionAnimation";
export default function Index() {
	return (
		<>
			<Seo />
			<Nav />
			<LeftSidebar />
			<motion.div variants={container} initial="initial" animate="animate" className={`flex flex-col w-full justify-center`}>
				<section id="home" className={`flex flex-col space-y-4 justify-center min-h-screen lg:mx-[20%] md:mx-[15%] mx-[12%]`}>
					<motion.p variants={fadeUp} className="h3">
						{greeting[0]()}
					</motion.p>
					<motion.p variants={fadeUp} className="h1 font-semibold">
						{greeting[1]()}
					</motion.p>

					<motion.p className="h5 py-2 md:py-4" variants={fadeUp}>
						{greeting[2]()}
					</motion.p>

					<motion.p variants={fadeUp} className="h3">
						Current&nbsp;Favorite&nbsp;Tech&nbsp;Stack
					</motion.p>
					<motion.div variants={fadeUp}>
						<TechStack />
					</motion.div>
				</section>
				<section id="project" className={`min-h-screen lg:px-[20%] md:px-[15%] px-[4%]`}>
					{projects.map(({ ...props }, i) => (
						<InView key={i} variants={inView} className="lg:pt-[6%] md:py-[8%] py-[20%] ">
							<ProjectCard alignRight={i % 2 === 0} {...props} />
						</InView>
					))}
				</section>
				<section id="contact" className={`min-h-screen flex items-center lg:px-[20%] md:px-[15%] px-[4%]`}>
					<InView variants={inView} className="flex flex-col space-y-20 justify-center items-center text-center">
						<motion.p variants={fadeUp} className="h2 font-semibold tracking-wide text-blue-700 dark:text-cyan-500">
							Get In Touch
						</motion.p>
						<motion.p variants={fadeUp} className="h5">
							Currently, I’m looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to
							you!
						</motion.p>
						<motion.div variants={fadeUp} className="space-x-4 flex">
							<a aria-label="sayHello" className="outline-button" href={`mailto:${email}`}>
								Say Hello
							</a>
							<a aria-label="resume" className="outline-button" href={cvUrl} target="_blank" rel="noreferrer">
								Résumé
							</a>
						</motion.div>
						<motion.div variants={fadeUp}>
							<Footer />
						</motion.div>
					</InView>
				</section>
			</motion.div>
			<RightSidebar />
		</>
	);
}
