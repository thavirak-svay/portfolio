import { email } from "@/data";
import { motion } from "framer-motion";
import { sidebar } from "@/utils/framerMotionAnimation";

export default function RightSidebar() {
	return (
		<motion.aside variants={sidebar} initial="initial" animate="animate" className="fixed right-10 bottom-0 md:block hidden">
			<ul className="flex h-full overflow-hidden flex-col pt-2 gap-6 items-center">
				<li className="text-gray-800 dark:text-white hover:-translate-y-1 transition-transform duration-300 hover:text-blue-700 dark:hover:text-cyan-500">
					<a className="vertical-lr" href={`mailto:${email}`}>
						{email}
					</a>
				</li>

				<li>
					<div className="h-24 w-0.5 bg-gray-900 dark:bg-white"></div>
				</li>
			</ul>
		</motion.aside>
	);
}
