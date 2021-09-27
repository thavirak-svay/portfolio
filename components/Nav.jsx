import * as React from "react";
import Link from "next/link";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import { Disclosure } from "@headlessui/react";
import { HiX, HiMenu } from "react-icons/hi";
import { motion } from "framer-motion";

import { menu } from "../data/menu";
export default function Nav() {
	const [scrollChange, setScrollChange] = React.useState(false);
	const [active, setActive] = React.useState("home");

	const { theme, setTheme } = useTheme();

	const handleScrollChange = () => {
		if (window.scrollY > 50) {
			setScrollChange(true);
		} else {
			setScrollChange(false);
		}
		document.querySelectorAll("section").forEach((section) => {
			if (window.scrollY >= section.offsetTop - 50) {
				setActive(section.getAttribute("id"));
			}
		});
	};
	React.useEffect(() => {
		window.addEventListener("scroll", handleScrollChange);
	}, []);

	return (
		<Disclosure>
			{({ open }) => (
				<>
					<header className={`fixed w-full ${scrollChange && "border-b-2"} border-gray-800 dark:border-gray-50 top-0 z-10 p-4 bg-sand-200 dark:bg-sea-green-700`}>
						<div className="flex md:hidden justify-between">
							<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-blue-700 hover:text-white hover:bg-blue-700 dark:text-gray-50 dark:hover:text-white dark:hover:bg-blue-600">
								<span className="sr-only" />
								{open ? <HiX size={18} aria-hidden="true" /> : <HiMenu size={18} aria-hidden="true" />}
							</Disclosure.Button>
							<button
								className="absolute right-7 inline-flex items-center justify-center p-2 rounded-md text-blue-700 hover:text-white hover:bg-blue-700 dark:text-gray-50 dark:hover:text-white dark:hover:bg-blue-600"
								onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
							>
								{theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
							</button>
						</div>
						<div className="md:max-w-sm mx-auto hidden md:flex justify-between uppercase text-sm font-medium tracking-wider">
							{menu.map(({ id, name }, i) => (
								<motion.div
									initial={{ y: -20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ delay: (i * 1) / 8, duration: 0.5, type: "spring" }}
									key={id}
									className="flex flex-col items-center group"
								>
									<span
										className={`rounded-[50%] group-hover:bg-blue-600 dark:group-hover:bg-blue-700 w-1 h-1 transition duration-200 ${
											active === id ? "bg-blue-700 dark:bg-blue-600" : ""
										}`}
									/>

									<a
										href={`#${id}`}
										className={`text-gray-800 dark:text-gray-50 group-hover:text-blue-600 dark:group-hover:text-blue-700 py-2 ${
											active === id ? "text-blue-600 dark:gray-50" : ""
										}`}
									>
										{name}
									</a>
								</motion.div>
							))}

							<button
								className="absolute right-7 inline-flex items-center justify-center p-2 rounded-md text-blue-700 hover:text-white hover:bg-blue-700 dark:text-gray-50 dark:hover:text-white dark:hover:bg-blue-600"
								onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
							>
								{theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
							</button>
						</div>
					</header>

					<Disclosure.Panel className="fixed w-full z-10 top-14 bg-sand-200 dark:bg-sea-green-700">
						<div className="flex flex-col bg-sand-200 w-full md:hidden border-b-2 border-blue-700 dark:border-gray-50 dark:bg-sea-green-700 justify-between uppercase text-sm font-medium tracking-wider gap-3 px-8 py-2">
							{menu.map(({ id, name }) => (
								<div key={id} className="flex items-center group">
									<span
										className={`rounded-[50%] group-hover:bg-blue-600 dark:group-hover:bg-blue-700 w-1 h-1 transition duration-200 ${
											active === id ? "bg-blue-700 dark:bg-blue-600" : ""
										}`}
									></span>
									<a
										href={`#${id}`}
										className={`ml-5 text-gray-800 dark:text-gray-50 group-hover:text-blue-600 dark:group-hover:text-blue-700 py-2   ${
											active === id ? "text-blue-600 dark:gray-50" : ""
										}`}
									>
										{name}
									</a>
								</div>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
