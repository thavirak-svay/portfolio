import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
				<section id="home" className={`flex justify-center items-center min-h-screen`}>
					<div className="lg:px-[20%] px-[12%]">
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
				<section id="resume" className={`min-h-screen`}>
					<div className="lg:px-[25%] px-[12%]">
						<div className="grid grid-cols-12 group ">
							<div className="col-start-7 col-end-[-1] grid grid-rows-6 col-span-full row-start-2 row-end-5 z-[2]">
								<div className="text-right whitespace-nowrap">
									<p className="text-blue-700 dark:text-blue-600">Featured Project</p>
									<p className="font-semibold text-2xl">Payroll Management System</p>
								</div>
								<div className="h-full row-start-3 row-end-5 rounded-sm ">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eum illo, saepe dolorum nihil praesentium beatae sunt alias labore, quidem vel
									temporibus eligendi quisquam excepturi eaque quod neque quas recusandae.
								</div>
							</div>
							<div className="h-80 col-start-1 col-end-8 row-start-2 row-end-5 w-full ">
								<img
									className="rounded-md object-cover mix-blend-multiply dark:mix-blend-screen h-full w-full  dark:brightness-50 transition"
									src="https://source.unsplash.com/random/1920x1080"
									alt=""
								/>
							</div>
						</div>
						<div className="grid grid-cols-12">
							<div className="col-start-1 col-end-7 grid grid-rows-6 row-start-2 row-end-5 z-[2]">
								<div className="text-left whitespace-nowrap">
									<p>Featured Project</p>
									<h3>Payroll Management System</h3>
								</div>
								<div className="h-full row-start-3 row-end-5 rounded-sm">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eum illo, saepe dolorum nihil praesentium beatae sunt alias labore, quidem vel
									temporibus eligendi quisquam excepturi eaque quod neque quas recusandae.
								</div>
							</div>
							<div className=" h-80 col-start-6 col-end-13 row-start-2 row-end-5 w-full">
								<img className="rounded-md object-cover h-full w-full" src="https://source.unsplash.com/random/1920x1080" alt="" />
							</div>
						</div>
					</div>
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
