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
			<motion.div variants={fadeUpContainerVariant} initial="initial" animate="animate" className={`flex flex-col w-full justify-center`}>
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
									I&apos;m a hard working and a quick learner student at SETEC Institute. Currently, I&apos;m fascinated in Frontend Development and UI & UX design.
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
					<div className="lg:pt-[15%] lg:px-[20%] pt-[20%] px-[12%]">
						<div className="grid grid-cols-12 grid-rows-1 relative">
							<div className="col-start-1 col-end-13 m-5 text-right">
								<p>Featured Project</p>
								<h3>Payroll Management System</h3>
							</div>
							<div className="md:col-start-5 md:col-end-[-1]">
								<div className="h-max p-5 m-5 rounded-md absolute bg-gray-500 md:bg-blue-600">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eum illo, saepe dolorum nihil praesentium beatae sunt alias labore, quidem vel
									temporibus eligendi quisquam excepturi eaque quod neque quas recusandae.
								</div>
							</div>
							<div className="hidden md:block col-start-1 col-end-6 bg-gray-500">
								<img className="rounded-md" src="https://source.unsplash.com/random/1200x600" alt="" />
							</div>
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
			</motion.div>
			<RightSidebar />
		</>
	);
}
