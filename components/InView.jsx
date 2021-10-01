import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function InViewSection({ variants, ...props }) {
	const controls = useAnimation();
	const [ref, inView] = useInView({
		threshold: 0.7,
	});

	useEffect(() => {
		if (inView) {
			controls.start("animate");
		}
	}, [controls, inView]);

	return (
		<motion.div {...props} ref={ref} initial="initial" animate={controls} variants={variants}>
			{props.children}
		</motion.div>
	);
}
