import Image from "next/image";
import InView from "./InView";
import Tippy from "@tippyjs/react";
import { motion } from "framer-motion";
import { fadeUp, inView } from "@/utils/framerMotionAnimation";

export default function ProjectCard({ title, description, tectStacks, imageSrc, challenge, solution, alignRight = false }) {
	return (
		<div className="grid grid-cols-12 ">
			<div className={`flex flex-col gap-4 justify-between col-span-full z-[2] row-start-1 p-5 md:p-0 ${alignRight ? "md:col-start-7 md:col-end-[-1]" : "md:col-end-7"} `}>
				<div className={`${alignRight ? "md:text-right" : "md:text-left"}`}>
					<motion.p variants={fadeUp} className="text-blue-700 dark:text-cyan-500">
						Featured Project
					</motion.p>
					<motion.p variants={fadeUp} className="font-semibold text-2xl">
						{title}
					</motion.p>
				</div>
				<motion.div variants={fadeUp} className={`md:bg-sand-300 md:dark:bg-darkBlue-400 rounded-md`}>
					<p className={`text-sm p-0.5 md:p-4 text-current`}>{description}</p>
				</motion.div>

				<motion.div variants={fadeUp} className={`flex gap-4 text-right md:mb-5 self-end ${alignRight ? "md:self-end" : "md:self-start"}`}>
					{tectStacks.map(({ name, icon }) => (
						<Tippy
							key={name}
							animation="scale-subtle"
							interactive={true}
							content={
								<span className="inline-block p-2 bg-sand-200 dark:bg-darkBlue-500 ring-1 ring-blue-700 dark:ring-cyan-500 rounded-md shadow-md dark:bg-dark">
									{name}
								</span>
							}
						>
							<button className="hover:text-blue-700 dark:hover:text-cyan-500">{icon}</button>
						</Tippy>
					))}
				</motion.div>
			</div>

			<motion.div variants={fadeUp} className={`col-span-full row-start-1 ${alignRight ? "md:col-end-8" : "md:col-start-6 md:col-end-[-1]"}`}>
				<figure className="brightness-75 dark:brightness-50 dark:opacity-20 opacity-10 rounded-md md:bg-blue-200 md:dark:bg-cyan-400 md:brightness-90 md:dark:brightness-100 md:opacity-100 md:dark:opacity-70  min-h-full md:min-h-[17em] hover:bg-white hover:brightness-100 dark:hover:bg-white dark:hover:opacity-100 duration-300 ">
					<Image className="rounded-md mix-blend-multiply object-cover " src={imageSrc} alt="" layout="fill" />
				</figure>
			</motion.div>

			<motion.div variants={fadeUp} className="col-span-12 md:col-span-6 flex py-4">
				<p className="bg-sand-300 dark:bg-darkBlue-600 text-2xl p-5 rounded-3xl h-[max-content]">🧐</p>
				<blockquote className="p-5">
					<p className="text-2xl pb-5">Challenge</p>
					<p>{challenge}</p>
				</blockquote>
			</motion.div>
			<motion.div variants={fadeUp} className="col-span-12 md:col-span-6 flex py-4">
				<p className="bg-sand-300 dark:bg-darkBlue-600 text-2xl p-5 rounded-3xl h-[max-content]">🙌</p>
				<blockquote className="p-5">
					<p className="text-2xl pb-5">Solution</p>
					<p>{solution}</p>
				</blockquote>
			</motion.div>
		</div>
	);
}
