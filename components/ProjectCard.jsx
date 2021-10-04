import Image from "next/image";
import InView from "./InView";
import Tippy from "@tippyjs/react";
import { motion } from "framer-motion";
import { fadeUp, inView } from "@/utils/framerMotionAnimation";

export default function ProjectCard({ title, description, tectStacks, imageSrc, challenge, solution, alignRight = false }) {
	return (
		<div className="grid grid-cols-12 ">
			<div className={`flex flex-col gap-4 justify-between col-span-full z-[2] row-start-1 p-5 md:p-0 ${alignRight ? "md:col-start-7 md:col-end-[-1]" : "md:col-end-7"} `}>
				<div className={`${alignRight ? "text-right" : "text-left"}`}>
					<motion.p variants={fadeUp} className="text-blue-700 dark:text-blue-600">
						Featured Project
					</motion.p>
					<motion.p variants={fadeUp} className="font-semibold text-2xl">
						{title}
					</motion.p>
				</div>
				<motion.div variants={fadeUp} className="text-sm md:bg-sand-300 md:dark:bg-sea-green-500 text-current font-light p-2 md:p-4 rounded-md">
					{description}
				</motion.div>

				<motion.div variants={fadeUp} className={`flex gap-4 text-right mb-5 text-gray-800 dark:text-gray-50 ${alignRight ? "self-end" : "self-start"}`}>
					{tectStacks.map(({ name, icon }) => (
						<Tippy
							key={name}
							animation="scale-subtle"
							interactive={true}
							content={<span className="p-2 bg-sand-100 dark:bg-sea-green-500 rounded-md shadow-md dark:bg-dark border-thin">{name}</span>}
						>
							<button>{icon}</button>
						</Tippy>
					))}
				</motion.div>
			</div>

			<motion.div variants={fadeUp} className={`col-span-full row-start-1 ${alignRight ? "md:col-end-8" : "md:col-start-6 md:col-end-[-1]"}`}>
				<figure className="brightness-90 dark:brightness-50 md:brightness-100 md:dark:brightness-100 opacity-10 dark:opacity-50 md:opacity-100 rounded-md min-h-full md:min-h-[17em] bg-gray-200 dark:bg-sea-green-300 hover:bg-white dark:hover:bg-white duration-300">
					<Image className="rounded-md mix-blend-multiply object-cover" src={imageSrc} alt="" layout="fill" />
				</figure>
			</motion.div>

			<motion.div variants={fadeUp} className="col-span-12 md:col-span-6 flex py-4">
				<p className="bg-sand-300 dark:bg-sea-green-500 text-2xl p-5 rounded-3xl h-[max-content]">🧐</p>
				<blockquote className="border-blue-600 p-5">
					<p className="text-2xl pb-5">Challenge</p>
					<p>{challenge}</p>
				</blockquote>
			</motion.div>
			<motion.div variants={fadeUp} className="col-span-12 md:col-span-6 flex py-4">
				<p className="bg-sand-300 dark:bg-sea-green-500 text-2xl p-5 rounded-3xl h-[max-content]">🙌</p>
				<blockquote className="border-blue-600 p-5">
					<p className="text-2xl pb-5">Solution</p>
					<p>{solution}</p>
				</blockquote>
			</motion.div>
		</div>
	);
}
