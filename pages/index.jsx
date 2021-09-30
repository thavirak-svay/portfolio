import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Nav from "@/components/Nav";
import CustomLink from "@/components/CustomLink";
import TechStack from "@/components/TechStack";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import { fadeUpContainerVariant, fadeUpItemVariant, fadeInLeft, fadeInRight } from "@/utils/framerMotionAnimation";
import InView from "@/components/InView";

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
					<div className="lg:py-[5%] md:py-[8%] lg:px-[18%] md:px-[10%] pt-[10%] px-[5%]">
						<InView variants={fadeUpContainerVariant} className="grid grid-cols-12">
							<div className="flex flex-col gap-4 justify-between md:col-start-7 md:col-end-[-1] col-span-full row-start-1 z-[2]">
								<div className="text-right">
									<motion.p variants={fadeUpItemVariant} className="text-blue-700 dark:text-blue-600">
										Featured Project
									</motion.p>
									<motion.p variants={fadeUpItemVariant} className="font-medium text-2xl">
										Payroll Management System
									</motion.p>
								</div>
								<motion.div variants={fadeUpItemVariant} className="text-sm md:bg-blue-600 md:dark:bg-sea-green-500 text-white font-light p-4 rounded-md">
									A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information
									about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
								</motion.div>

								<motion.p variants={fadeUpItemVariant} className="text-right mb-5 text-blue-700 dark:text-blue-600">
									React , JAVA Springboot
								</motion.p>
							</div>
							<motion.div variants={fadeUpItemVariant} className="md:col-end-8 col-span-full row-start-1 ">
								<figure className="rounded-md h-full md:h-max bg-sand-200 dark:bg-blue-200 hover:bg-white  dark:hover:bg-white hover:brightness-100 duration-300 brightness-95">
									<Image className="rounded-md mix-blend-multiply" src={require("@/public/a.png")} alt="" layout="responsive" objectFit="cover" />
								</figure>
							</motion.div>
						</InView>
						<InView variants={fadeUpContainerVariant} className="grid grid-cols-12 my-[20%]">
							<div className="flex flex-col gap-4 justify-between md:col-end-7 col-span-full row-start-1 z-[2]">
								<div>
									<motion.p variants={fadeUpItemVariant} className="text-blue-700 dark:text-blue-600">
										Featured Project
									</motion.p>
									<motion.p variants={fadeUpItemVariant} className="font-medium text-2xl">
										GPS Tracking System
									</motion.p>
								</div>
								<motion.div variants={fadeUpItemVariant} className="text-sm md:bg-blue-600 md:dark:bg-sea-green-500 text-white font-light p-4 rounded-md">
									A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information
									about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
								</motion.div>

								<motion.p variants={fadeUpItemVariant} className="text-blue-700 mb-5 dark:text-blue-600">
									React , JAVA Springboot
								</motion.p>
							</div>
							<motion.div variants={fadeUpItemVariant} className="md:col-start-6 md:col-end-[-1] col-span-full h-full row-start-1">
								<figure className="rounded-md h-full md:h-max bg-sand-200 dark:bg-blue-200 hover:bg-white  dark:hover:bg-white hover:brightness-100 duration-300 brightness-95">
									<Image className="rounded-md mix-blend-multiply" src={require("@/public/b.png")} alt="" layout="responsive" objectFit="cover" />
								</figure>
							</motion.div>
						</InView>
						<InView variants={fadeUpContainerVariant} className="grid grid-cols-12">
							<div className="flex flex-col gap-4 justify-between md:col-start-7 md:col-end-[-1] col-span-full row-start-1 z-[2]">
								<div className="text-right">
									<motion.p variants={fadeUpItemVariant} className="text-blue-700 dark:text-blue-600">
										Featured Project
									</motion.p>
									<motion.p variants={fadeUpItemVariant} className="font-medium text-2xl">
										Payroll Management System
									</motion.p>
								</div>
								<motion.div variants={fadeUpItemVariant} className="text-sm md:bg-blue-600 md:dark:bg-sea-green-500 text-white font-light p-4 rounded-md">
									A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information
									about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
								</motion.div>
								<motion.p variants={fadeUpItemVariant} className="text-right mb-5 text-blue-700 dark:text-blue-600">
									React , JAVA Springboot
								</motion.p>
							</div>
							<motion.div variants={fadeUpItemVariant} className="md:col-end-8 col-span-full row-start-1">
								<figure className="rounded-md h-full md:h-max bg-sand-200 dark:bg-blue-200 hover:bg-white  dark:hover:bg-white hover:brightness-100 duration-300 brightness-95">
									<Image className="rounded-md mix-blend-multiply" src={require("@/public/a.png")} alt="" layout="responsive" objectFit="cover" />
								</figure>
							</motion.div>
						</InView>
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
