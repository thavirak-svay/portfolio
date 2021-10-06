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
					<motion.h3 variants={fadeUp} className="font-normal">
						{greeting[0]()}
					</motion.h3>
					<motion.h1 variants={fadeUp}>{greeting[1]()}</motion.h1>

					<motion.h5 className="py-2 md:py-4" variants={fadeUp}>
						{greeting[2]()}
					</motion.h5>

					<motion.h3 variants={fadeUp} className="font-normal">
						Current&nbsp;Favorite&nbsp;Tech&nbsp;Stack
					</motion.h3>
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
				<section id="contact" className={`flex flex-col space-y-20  justify-center items-center min-h-screen lg:px-[20%] md:px-[15%] px-[4%] text-center`}>
					<h2>Get In Touch</h2>
					<h5>Currently, I’m looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</h5>
					<div className="space-x-4">
						<a name="sayHello" className="outline-button" href={`mailto:${email}`}>
							Say Hello
						</a>
						<a name="resume" className="outline-button" href={cvUrl} target="_blank" rel="noreferrer">
							Résumé
						</a>
					</div>
					<Footer />
				</section>
			</motion.div>
			<RightSidebar />
		</>
	);
}
