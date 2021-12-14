import React from "react";
import { motion } from "framer-motion";
import CustomLink from "./CustomLink";
export const cubicBezier = [0.6, 0.01, -0.05, 0.95];

const container = {
	animate: { transition: { staggerChildren: 0.25 } },
};
const item = {
	initial: {
		opacity: 0,
		// y: 200,
	},
	animate: {
		opacity: 1,
		// y: 0,
		transition: {
			ease: cubicBezier,
			duration: 1.2,
		},
	},
	exit: {
		opacity: 0,
		// y: -200,
		transition: {
			ease: "easeInOut",
			duration: 0.5,
		},
	},
};

const itemMain = {
	initial: {
		opacity: 0,
		// y: 200,
	},
	animate: {
		opacity: 1,
		// y: 0,
		transition: {
			ease: cubicBezier,
			duration: 1.6,
		},
	},
};

const Loader = ({ setLoading }) => {
	return (
		<motion.div variants={container} initial="initial" animate="animate" exit="exit" onAnimationComplete={() => setLoading(false)} className="overflow-hidden">
			<motion.div variants={item}>
				<motion.p className="w-screen h-screen flex items-center text-center">
					<span className="text-4xl md:text-7xl flex-1">
						👋
						<span className="font-semibold">
							<CustomLink name="Hi!" />
						</span>
					</span>
				</motion.p>
			</motion.div>
		</motion.div>
	);
};

export default Loader;
