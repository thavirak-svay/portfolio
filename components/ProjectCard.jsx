import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/framerMotionAnimation";

export default function ProjectCard({ title, description, keyFeatures, techHighlights, role, impact, imageSrc, challenge, solution, alignRight = false }) {
	return (
		<div className="grid grid-cols-12 ">
			<div
				className={`flex flex-col space-y-4 justify-between col-span-full z-[2] row-start-1 p-5 md:p-0 ${
					alignRight ? "md:col-start-7 md:col-end-[-1] md:text-right" : "md:col-end-7 md:text-left"
				}`}
			>
				<motion.div variants={fadeUp}>
					<p className="text-blue-700 dark:text-cyan-500 tracking-wide">Featured Project</p>
					<p className="font-semibold text-xl md:text-2xl hover:text-blue-700 dark:hover:text-cyan-500">{title}</p>
				</motion.div>
				<motion.div variants={fadeUp} className={`md:bg-sand-300 md:dark:bg-darkBlue-400 rounded-md`}>
					<p className={`text-sm p-0.5 md:p-4 text-current`}>{description}</p>
				</motion.div>
				{role && (
					<motion.p variants={fadeUp} className="text-xs font-semibold text-blue-700 dark:text-cyan-400 mt-2">Role: {role}</motion.p>
				)}
				{impact && (
					<motion.p variants={fadeUp} className="text-xs text-green-700 dark:text-green-400 mb-2">Impact: {impact}</motion.p>
				)}
				{keyFeatures && keyFeatures.length > 0 && (
					<motion.ul variants={fadeUp} className="list-disc ml-5 text-xs mb-2 opacity-90">
						{keyFeatures.map((f, i) => <li key={i}>{f}</li>)}
					</motion.ul>
				)}
				{techHighlights && techHighlights.length > 0 && (
					<motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-2">
						{techHighlights.map((t, i) => (
							<span key={i} className="bg-blue-100 dark:bg-cyan-900 text-blue-700 dark:text-cyan-300 px-2 py-1 rounded text-xs font-medium">{t}</span>
						))}
					</motion.div>
				)}
			</div>

			<motion.div variants={fadeUp} className={`col-span-full row-start-1 ${alignRight ? "md:col-end-8" : "md:col-start-6 md:col-end-[-1]"}`}>
				<figure className="relative brightness-100 dark:brightness-50 dark:opacity-25 opacity-[0.15] rounded-md bg-blue-300 dark:bg-cyan-400 md:bg-blue-200 md:brightness-90 md:dark:brightness-100 md:opacity-100 md:dark:opacity-70  min-h-full md:min-h-[17em] hover:bg-white hover:brightness-100 dark:hover:bg-white dark:hover:opacity-100 duration-300">
					<Image className="rounded-md mix-blend-multiply object-cover" src={imageSrc} alt="" layout="fill" />
				</figure>
			</motion.div>

			{challenge && (
				<motion.div variants={fadeUp} className="col-span-12 md:col-span-6 flex space-x-5 py-4">
					<p className="bg-sand-300 dark:bg-darkBlue-400 text-xl p-4 rounded-2xl h-[max-content]">🧐</p>
					<blockquote>
						<p className="text-xl py-4 tracking-wide text-blue-700 dark:text-cyan-500">Challenge</p>
						<p className="opacity-80">{challenge}</p>
					</blockquote>
				</motion.div>
			)}
			{solution && (
				<motion.div variants={fadeUp} className="col-span-12 md:col-span-6 flex space-x-5 py-4">
					<p className="bg-sand-300 dark:bg-darkBlue-400 text-xl p-4 rounded-2xl h-[max-content]">🙌</p>
					<blockquote>
						<p className="text-xl py-4 tracking-wide text-blue-700 dark:text-cyan-500">Solution</p>
						<p className="opacity-80">{solution}</p>
					</blockquote>
				</motion.div>
			)}
		</div>
	);
}
