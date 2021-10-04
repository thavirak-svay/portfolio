import { motion } from "framer-motion";
import { socialMedia } from "@/data";
import { sidebar } from "@/utils/framerMotionAnimation";

export default function LeftSidebar() {
	return (
		<motion.div variants={sidebar} initial="initial" animate="animate" className="fixed left-10 bottom-0 md:block hidden">
			<ul className="flex h-full overflow-hidden flex-col gap-6 pt-2 items-center">
				{socialMedia.map(({ icon, href }) => (
					<li key={href} className="text-gray-800 dark:text-white hover:-translate-y-1 transition-transform duration-300 hover:text-blue-700 dark:hover:text-cyan-500">
						<a target="_blank" rel="noreferrer" href={href}>
							{icon}
						</a>
					</li>
				))}

				<li>
					<div className="h-24 w-0.5 bg-gray-900 dark:bg-white"></div>
				</li>
			</ul>
		</motion.div>
	);
}
