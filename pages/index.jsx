import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SiSpring, SiReact, SiRedux, SiBootstrap } from "react-icons/si";
import Tippy from "@tippyjs/react";
import { AnimatePresence } from "framer-motion";

import Nav from "@/components/Nav";
import CustomLink from "@/components/CustomLink";
import TechStack from "@/components/TechStack";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import InView from "@/components/InView";
import { container, fadeUp, inView } from "@/utils/framerMotionAnimation";

export default function Index() {
	return (
		<>
			<Nav />
			<LeftSidebar />
			<motion.div variants={container} initial="initial" animate="animate" className={`flex flex-col w-full justify-center`}>
				<section id="home" className={`flex justify-center items-center min-h-screen relative`}>
					<div className="lg:px-[20%] px-[12%] ">
						<div className="pb-6">
							<article>
								<motion.h3 variants={fadeUp} className="md:mb-2 font-light">
									👋Hi! Nice to see you
								</motion.h3>
								<motion.h1 variants={fadeUp} className="mb-2">
									My name is{" "}
									<span className="relative w-max group">
										<span className="text-blue-700 dark:text-blue-600">Svay Thavirak</span>
										<span className="absolute -bottom-0.5 group-hover:w-full left-0 w-0 transition-all h-1 bg-gray-800 dark:bg-white" />
									</span>
								</motion.h1>
								<motion.p variants={fadeUp} className="dark:text-light">
									I&apos;m a hard working and a quick learner student at SETEC Institute. Currently, I&apos;m fascinated in Frontend Development and UI & UX design.
								</motion.p>
							</article>
						</div>
						<div className="py-6">
							<article>
								<motion.h3 variants={fadeUp} className="mb-2 font-light ">
									Current Favorite Tech Stack
								</motion.h3>
								<motion.div variants={fadeUp}>
									<TechStack />
								</motion.div>
							</article>
						</div>

						<motion.h3
							initial={{ y: -20 }}
							animate={{ y: 0 }}
							transition={{ ease: "easeIn", duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
							className="absolute bottom-5 text-center mx-auto left-[50%]"
						>
							<a href="#project">👇</a>
						</motion.h3>
					</div>
				</section>
				<section id="project" className={`min-h-screen`}>
					<div className="lg:pt-[6%] md:py-[8%] lg:px-[18%] md:px-[10%] py-[20%] px-[5%]">
						<InView variants={inView} className="grid grid-cols-12">
							<div className="flex flex-col gap-4 justify-between md:col-start-7 md:col-end-[-1] col-span-full row-start-1 z-[2] p-5 md:p-0">
								<div className="text-right">
									<motion.p variants={fadeUp} className="text-blue-700 dark:text-blue-600">
										Featured Project
									</motion.p>
									<motion.p variants={fadeUp} className="font-semibold text-2xl">
										Payroll Management System
									</motion.p>
								</div>
								<motion.div variants={fadeUp} className="text-sm md:bg-sand-300 md:dark:bg-sea-green-500 text-current font-light p-2 md:p-4 rounded-md">
									A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information
									about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
								</motion.div>

								<motion.div variants={fadeUp} className="flex gap-4 self-end text-right mb-5 text-gray-800 dark:text-gray-50">
									<Tippy
										animation="scale-subtle"
										interactive={true}
										content={<span className="p-2 bg-sand-100 dark:bg-sea-green-500 rounded-md shadow-md dark:bg-dark border-thin">Create React App</span>}
									>
										<button>
											<SiReact size="1.5rem" />
										</button>
									</Tippy>

									<Tippy
										animation="scale-subtle"
										interactive={true}
										content={<span className="p-2 bg-sand-100 dark:bg-sea-green-500 rounded-md shadow-md dark:bg-dark border-thin">Redux Thunk</span>}
									>
										<button>
											<SiRedux size="1.5rem" />
										</button>
									</Tippy>
									<Tippy
										animation="scale-subtle"
										interactive={true}
										content={<span className="p-2 bg-sand-100 dark:bg-sea-green-500 rounded-md shadow-md dark:bg-dark border-thin">React Bootstrap</span>}
									>
										<button>
											<SiBootstrap size="1.5rem" />
										</button>
									</Tippy>
									<Tippy
										animation="scale-subtle"
										interactive={true}
										content={<span className="p-2 bg-sand-100 dark:bg-sea-green-500 rounded-md shadow-md dark:bg-dark border-thin">Spring Boot</span>}
									>
										<button>
											<SiSpring size="1.5rem" />
										</button>
									</Tippy>
								</motion.div>
							</div>

							<motion.div variants={fadeUp} className="md:col-end-8 col-span-full row-start-1 ">
								<figure className="brightness-50 md:brightness-100 opacity-50 md:opacity-100 rounded-md min-h-full md:min-h-[17em] bg-gray-300 dark:bg-sea-green-300 hover:bg-white dark:hover:bg-white duration-300">
									<Image className="rounded-md mix-blend-multiply object-cover" src={require("@/public/a.png")} alt="" layout="fill" />
								</figure>
							</motion.div>
							<motion.div variants={fadeUp} className="col-span-12 md:col-span-6 flex py-4">
								<p className="bg-sand-300 dark:bg-sea-green-500 text-2xl p-5 rounded-3xl h-[max-content]">🧐</p>
								<blockquote className="border-blue-600 p-5">
									<p className="text-2xl pb-5">Challenge</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sapiente quo dolores cumque praesentium ex quisquam nobis eum quam alias
										itaque, placeat nulla, laboriosam fugit error enim esse, commodi iusto?
									</p>
								</blockquote>
							</motion.div>
							<motion.div variants={fadeUp} className="col-span-12 md:col-span-6 flex py-4">
								<p className="bg-sand-300 dark:bg-sea-green-500 text-2xl p-5 rounded-3xl h-[max-content]">🙌</p>
								<blockquote className="border-blue-600 p-5">
									<p className="text-2xl pb-5">Solution</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sapiente quo dolores cumque praesentium ex quisquam nobis eum quam alias
										itaque, placeat nulla, laboriosam fugit error enim esse, commodi iusto?
									</p>
								</blockquote>
							</motion.div>
						</InView>
						<InView variants={inView} className="grid grid-cols-12 my-[30%]">
							<div className="flex flex-col gap-4 justify-between md:col-end-7 col-span-full row-start-1 z-[2]">
								<div>
									<motion.p variants={fadeUp} className="text-blue-700 dark:text-blue-600">
										Featured Project
									</motion.p>
									<motion.p variants={fadeUp} className="font-medium text-2xl">
										GPS Tracking System
									</motion.p>
								</div>
								<motion.div
									variants={fadeUp}
									className="text-sm md:bg-sand-100 ring-2 ring-sand-300 dark:ring-0 md:dark:bg-sea-green-500 text-current font-light p-4 rounded-md"
								>
									A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information
									about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
								</motion.div>

								<motion.p variants={fadeUp} className="text-blue-700 mb-5 dark:text-blue-600">
									React , JAVA Springboot
								</motion.p>
							</div>
							<motion.div variants={fadeUp} className="md:col-start-6 md:col-end-[-1] col-span-full h-full row-start-1">
								<figure className="brightness-50 md:brightness-100 opacity-50 md:opacity-100 rounded-md min-h-full md:min-h-[17em] bg-gray-300 dark:bg-sea-green-300 hover:bg-white dark:hover:bg-white duration-300">
									<Image className="rounded-md mix-blend-multiply object-cover" src={require("@/public/a.png")} alt="" layout="fill" />
								</figure>
							</motion.div>
						</InView>
						<InView variants={inView} className="grid grid-cols-12">
							<div className="flex flex-col gap-4 justify-between md:col-start-7 md:col-end-[-1] col-span-full row-start-1 z-[2]">
								<div className="text-right">
									<motion.p variants={fadeUp} className="text-blue-700 dark:text-blue-600">
										Featured Project
									</motion.p>
									<motion.p variants={fadeUp} className="font-medium text-2xl">
										Payroll Management System
									</motion.p>
								</div>
								<motion.div
									variants={fadeUp}
									className="text-sm md:bg-sand-100 ring-2 ring-sand-300 dark:ring-0 md:dark:bg-sea-green-500 text-current font-light p-4 rounded-md"
								>
									A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information
									about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
								</motion.div>
								<motion.p variants={fadeUp} className="text-right mb-5 text-blue-700 dark:text-blue-600">
									React , JAVA Springboot
								</motion.p>
							</div>
							<motion.div variants={fadeUp} className="md:col-end-8 col-span-full row-start-1">
								<figure className="rounded-md h-full md:h-max bg-gray-50 ring-2 ring-sand-300 dark:ring-0 dark:bg-sea-green-300 hover:bg-white dark:hover:bg-white duration-300 ">
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
