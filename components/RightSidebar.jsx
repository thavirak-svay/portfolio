import { motion } from "framer-motion";
import { useTheme } from "next-themes";

import { sidebarVariant } from "@/utils/framerMotionAnimation";

export default function RightSidebar() {
	return (
		<motion.aside variants={sidebarVariant} initial="initial" animate="animate" className="fixed right-10 bottom-0 md:block hidden">
			<ul className="flex h-full overflow-hidden flex-col pt-2 gap-6 items-center">
				<li className="hoverable-social-media">
					<a className="vertical-lr tracking-wider" href="#">
						thaavirak@gmail.com
					</a>
				</li>

				<li>
					<div className="h-24 w-0.5 bg-gray-900 dark:bg-white"></div>
				</li>
			</ul>
		</motion.aside>
	);
}
