import * as React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import { Menu, Transition } from "@headlessui/react";
import { HiX, HiMenu } from "react-icons/hi";
import { motion } from "framer-motion";
import { useWindowScroll, usePrevious } from "react-use";

import { menu } from "@/data";
import { lightDarkToggle, navbarItem, navbarContainer, mobileNavbarContainer, mobileNavbarItem } from "@/utils/framerMotionAnimation";

export default function Nav() {
	const [active, setActive] = React.useState("home");
	const { y } = useWindowScroll();
	const previousY = usePrevious(y);
	const { theme, setTheme } = useTheme();

	React.useEffect(() => {
		window.addEventListener("scroll", handleScrollChange);
	}, []);

	const handleScrollChange = () => {
		document.querySelectorAll("section").forEach((section) => {
			if (window.scrollY >= section.offsetTop - 60) {
				setActive(section.getAttribute("id"));
			}
		});
	};

	return (
		<Menu
			as="header"
			id="navbar"
			className={`fixed w-full border-b-2 ${y !== 0 ? "border-gray-800 dark:border-white" : "border-transparent dark:border-transparent"} z-20 top-0 ${
				previousY >= y || y === 0 ? "top-0" : "top-[-70px]"
			} transition-all h-[60px] md:h-[70px] bg-sand-200 dark:bg-darkBlue-500`}
		>
			{({ open }) => (
				<>
					<motion.div variants={mobileNavbarContainer} initial="initial" animate="animate" className="flex md:hidden justify-between h-full items-center mx-4">
						<motion.div variants={navbarItem}>
							<Menu.Button className="inline-flex items-center justify-center p-2 rounded-md text-blue-700 hover:text-white hover:bg-blue-700 dark:text-white dark:hover:text-gray-800 dark:hover:bg-cyan-500">
								{open && previousY >= y ? <HiX size={18} aria-hidden="true" /> : <HiMenu size={18} aria-hidden="true" />}
							</Menu.Button>
						</motion.div>
						<motion.button
							variants={navbarItem}
							className="p-2 rounded-md text-blue-700 hover:text-white hover:bg-blue-700 dark:text-white dark:hover:text-gray-800 dark:hover:bg-cyan-500"
							onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
						>
							{theme === "light" ? (
								<motion.div key="moon" variants={lightDarkToggle} positionTransition initial="initial" animate="animate" exit="exit">
									<FiMoon size={18} />
								</motion.div>
							) : (
								<motion.div key="sun" variants={lightDarkToggle} positionTransition initial="initial" animate="animate" exit="exit">
									<FiSun size={18} />
								</motion.div>
							)}
						</motion.button>
					</motion.div>

					<motion.div variants={navbarContainer} className={`fixed w-full z-30 ${previousY <= y ? "top-[-150px]" : "top-[60px]"}  bg-sand-200 dark:bg-darkBlue-500 duration-100`}>
						<Menu.Items>
							<motion.div
								variants={navbarContainer}
								initial="initial"
								animate="animate"
								className="flex flex-col bg-sand-200 w-full md:hidden border-b-2 border-blue-700 dark:border-cyan-500 dark:bg-darkBlue-500 justify-between uppercase text-sm font-medium tracking-wider gap-3 px-8 py-2"
							>
								{menu.map(({ id, name }) => (
									<Menu.Item key={id}>
										<motion.div variants={mobileNavbarItem} className="flex items-center group">
											<span
												className={`rounded-[50%] group-hover:bg-blue-700 dark:group-hover:bg-cyan-500 w-1 h-1 transition duration-200 ${
													active === id ? "bg-blue-700 dark:bg-cyan-500" : ""
												}`}
											/>
											<a
												href={`#${id}`}
												className={`ml-5 group-hover:text-blue-700 dark:group-hover:text-cyan-500  py-2   ${
													active === id ? "text-blue-700 dark:text-cyan-500" : ""
												}`}
											>
												{name}
											</a>
										</motion.div>
									</Menu.Item>
								))}
							</motion.div>
						</Menu.Items>
					</motion.div>

					<motion.div
						variants={navbarContainer}
						initial="initial"
						animate="animate"
						className="md:max-w-sm mx-auto hidden md:flex justify-between uppercase text-sm font-medium tracking-wider h-full items-center"
					>
						{menu.map(({ id, name }) => (
							<motion.div key={id} variants={navbarItem} className="flex flex-col items-center group">
								<span
									className={`rounded-[50%] group-hover:bg-blue-700 dark:group-hover:bg-cyan-500  w-1 h-1 transition duration-200 ${
										active === id ? "bg-blue-700 dark:bg-cyan-500" : ""
									}`}
								/>

								<a
									href={`#${id}`}
									className={` group-hover:text-blue-700 dark:group-hover:text-cyan-500 py-2 ${active === id ? "text-blue-700 dark:text-cyan-500" : ""}`}
								>
									{name}
								</a>
							</motion.div>
						))}
						<button
							className="absolute right-10 inline-flex items-center justify-center p-2 rounded-md text-blue-700 hover:text-white hover:bg-blue-700 dark:text-white dark:hover:text-gray-800 dark:hover:bg-cyan-500"
							onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
						>
							{theme === "light" ? (
								<motion.div key="moon" variants={lightDarkToggle} positionTransition initial="initial" animate="animate" exit="exit">
									<FiMoon size={18} />
								</motion.div>
							) : (
								<motion.div key="sun" variants={lightDarkToggle} positionTransition initial="initial" animate="animate" exit="exit">
									<FiSun size={18} />
								</motion.div>
							)}
						</button>
					</motion.div>
				</>
			)}
		</Menu>
	);
}
