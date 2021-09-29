import * as React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import { Disclosure } from "@headlessui/react";
import { HiX, HiMenu } from "react-icons/hi";
import { motion } from "framer-motion";

import { menu } from "@/data/menu";
import { lightDarkToggleVariant, navbarItemVariant, navbarContainerVariant, mobileNavbarContainerVariant, mobileNavbarItemVariant } from "@/utils/framerMotionAnimation";

let newScroll = 0;

export default function Nav() {
	const [scrollY, setScrollY] = React.useState(0);
	const [active, setActive] = React.useState("home");

	const { theme, setTheme } = useTheme();

	React.useEffect(() => {
		window.addEventListener("scroll", handleScrollChange);
	}, []);

	React.useEffect(() => {
		window.addEventListener("wheel", handleWheelChange);
	}, []);

	const handleScrollChange = () => {
		document.querySelectorAll("section").forEach((section) => {
			if (window.scrollY >= section.offsetTop - 60) {
				setActive(section.getAttribute("id"));
			}
		});
		window.scrollY === 0 && setScrollY(window.scrollY);
	};

	const handleWheelChange = (e) => {
		window.scrollY !== 0 && setScrollY(e.deltaY);
	};

	return (
		<Disclosure>
			{({ open }) => (
				<>
					<header
						id="navbar"
						className={`fixed w-full border-b-2 ${
							scrollY < 0 ? "border-gray-800 dark:border-gray-50" : "border-transparent dark:border-transparent"
						}  dark:border-gray-50 z-20 ${scrollY <= 0 ? "top-0" : "top-[-70px]"} transition-all duration-500 h-[60px] md:h-[70px] bg-sand-200 dark:bg-sea-green-700`}
					>
						<motion.div variants={mobileNavbarContainerVariant} initial="initial" animate="animate" className="flex md:hidden justify-between h-full items-center mx-4">
							<motion.div variants={navbarItemVariant}>
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-blue-700 hover:text-white hover:bg-blue-700 dark:text-gray-50 dark:hover:text-white dark:hover:bg-blue-600">
									<span className="sr-only" />
									{open ? <HiX size={18} aria-hidden="true" /> : <HiMenu size={18} aria-hidden="true" />}
								</Disclosure.Button>
							</motion.div>
							<motion.button
								variants={navbarItemVariant}
								className="p-2 rounded-md text-blue-700 hover:text-white hover:bg-blue-700 dark:text-gray-50 dark:hover:text-white dark:hover:bg-blue-600"
								onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
							>
								{theme === "light" ? (
									<motion.div key="moon" variants={lightDarkToggleVariant} positionTransition initial="initial" animate="animate" exit="exit">
										<FiMoon size={18} />
									</motion.div>
								) : (
									<motion.div key="sun" variants={lightDarkToggleVariant} positionTransition initial="initial" animate="animate" exit="exit">
										<FiSun size={18} />
									</motion.div>
								)}
							</motion.button>
						</motion.div>

						<motion.div
							variants={navbarContainerVariant}
							initial="initial"
							animate="animate"
							className="md:max-w-sm mx-auto hidden md:flex justify-between uppercase text-sm font-medium tracking-wider h-full items-center"
						>
							{menu.map(({ id, name }) => (
								<motion.div key={id} variants={navbarItemVariant} className="flex flex-col items-center group">
									<span
										className={`rounded-[50%] group-hover:bg-blue-600 dark:group-hover:bg-blue-700 w-1 h-1 transition duration-200 ${
											active === id ? "bg-blue-700 dark:bg-blue-600" : ""
										}`}
									/>

									<a
										href={`#${id}`}
										className={`text-gray-800 dark:text-gray-50 group-hover:text-blue-700 dark:group-hover:text-blue-600 py-2 ${
											active === id ? "text-blue-600 dark:gray-50" : ""
										}`}
									>
										{name}
									</a>
								</motion.div>
							))}
							<button
								className="absolute right-10 inline-flex items-center justify-center p-2 rounded-md text-blue-700 hover:text-white hover:bg-blue-700 dark:text-gray-50 dark:hover:text-white dark:hover:bg-blue-600"
								onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
							>
								{theme === "light" ? (
									<motion.div key="moon" variants={lightDarkToggleVariant} positionTransition initial="initial" animate="animate" exit="exit">
										<FiMoon size={18} />
									</motion.div>
								) : (
									<motion.div key="sun" variants={lightDarkToggleVariant} positionTransition initial="initial" animate="animate" exit="exit">
										<FiSun size={18} />
									</motion.div>
								)}
							</button>
						</motion.div>
					</header>

					{scrollY <= 0 && (
						<Disclosure.Panel className="fixed w-full z-30 top-[60px] bg-sand-200 dark:bg-sea-green-700 transition-all duration-500">
							<motion.div
								variants={navbarContainerVariant}
								initial="initial"
								animate="animate"
								className="flex flex-col bg-sand-200 w-full md:hidden border-b-2 border-blue-700 dark:border-gray-50 dark:bg-sea-green-700 justify-between uppercase text-sm font-medium tracking-wider gap-3 px-8 py-2"
							>
								{menu.map(({ id, name }) => (
									<motion.div key={id} variants={mobileNavbarItemVariant} className="flex items-center group">
										<span
											className={`rounded-[50%] group-hover:bg-blue-600 dark:group-hover:bg-blue-700 w-1 h-1 transition duration-200 ${
												active === id ? "bg-blue-700 dark:bg-blue-600" : ""
											}`}
										/>
										<a
											href={`#${id}`}
											className={`ml-5 text-gray-800 dark:text-gray-50 group-hover:text-blue-600 dark:group-hover:text-blue-700 py-2   ${
												active === id ? "text-blue-600 dark:gray-50" : ""
											}`}
										>
											{name}
										</a>
									</motion.div>
								))}
							</motion.div>
						</Disclosure.Panel>
					)}
				</>
			)}
		</Disclosure>
	);
}
