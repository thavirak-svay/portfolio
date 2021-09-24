import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { HiX, HiMenu } from "react-icons/hi";
export default function Nav() {
	const { theme, setTheme } = useTheme();
	const active = "home";

	return (
		<Disclosure>
			{({ open }) => (
				<>
					<header className="sticky w-full border-b-2 border-black top-0 z-10 p-4 bg-sand-200 dark:bg-sea-green-700">
						<div className="flex md:hidden justify-between">
							<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-blue-700 hover:text-white hover:bg-blue-700 dark:text-gray-50 dark:hover:text-white dark:hover:bg-blue-600">
								<span className="sr-only">Open main menu</span>
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
							<div className="flex flex-col items-center group">
								<span
									className={`rounded-full group-hover:bg-blue-600 dark:group-hover:bg-blue-700 w-1 h-1 transition duration-700 ease-in-out ${
										active === "home" && "bg-blue-700 dark:bg-blue-600"
									}`}
								></span>
								<a
									href="#home"
									className={`text-gray-800 dark:text-gray-50 group-hover:text-blue-600 dark:group-hover:text-blue-700 py-2 ease-in-out   ${
										active === "home" && "text-blue-600 dark:gray-50"
									}`}
								>
									Home
								</a>
							</div>
							<div className="flex flex-col items-center group">
								<span
									className={`rounded-full  group-hover:bg-blue-600 dark:group-hover:bg-blue-700 w-1 h-1 transition duration-700 ease-in-out ${
										active === "resume" && "bg-blue-700 dark:bg-blue-600"
									}`}
								></span>
								<a
									href="#resume"
									className={`text-gray-800 dark:text-gray-50 group-hover:text-blue-600 dark:group-hover:text-blue-700 py-2 ease-in-out   ${
										active === "resume" && "text-blue-600 dark:gray-50"
									}`}
								>
									Resume
								</a>
							</div>
							<div className="flex flex-col items-center group">
								<span
									className={`rounded-full  group-hover:bg-blue-600 dark:group-hover:bg-blue-700 w-1 h-1 transition duration-700 ease-in-out ${
										active === "contact" && "bg-blue-700 dark:bg-blue-600"
									}`}
								></span>
								<a
									href="#contact"
									className={`text-gray-800 dark:text-gray-50 group-hover:text-blue-600 dark:group-hover:text-blue-700 py-2 ease-in-out   ${
										active === "contact" && "text-blue-600 dark:gray-50"
									}`}
								>
									contact
								</a>
							</div>

							<button
								className="absolute right-7 inline-flex items-center justify-center p-2 rounded-md text-blue-700 hover:text-white hover:bg-blue-700 dark:text-gray-50 dark:hover:text-white dark:hover:bg-blue-600"
								onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
							>
								{theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
							</button>
						</div>
					</header>

					<Disclosure.Panel className="sticky w-full z-10 top-16 bg-sand-200 dark:bg-sea-green-700">
						<div className="flex flex-col bg-sand-200 w-full md:hidden border-b-2 border-blue-700 dark:border-gray-50 dark:bg-sea-green-700 justify-between uppercase text-sm font-medium tracking-wider gap-3 px-8 py-2">
							<div className="flex items-center group">
								<span
									className={`rounded-full  group-hover:bg-blue-600 dark:group-hover:bg-blue-700 w-1 h-1 transition duration-700 ease-in-out ${
										active === "home" && "bg-blue-700 dark:bg-blue-600"
									}`}
								></span>
								<a
									href="#home"
									className={`ml-5 text-gray-800 dark:text-gray-50 group-hover:text-blue-600 dark:group-hover:text-blue-700 py-2 ease-in-out   ${
										active === "home" && "text-blue-600 dark:gray-50"
									}`}
								>
									Home
								</a>
							</div>
							<div className="flex items-center group">
								<span
									className={`rounded-full  group-hover:bg-blue-600 dark:group-hover:bg-blue-700 w-1 h-1 transition duration-700 ease-in-out ${
										active === "resume" && "bg-blue-700 dark:bg-blue-600"
									}`}
								></span>
								<a
									href="#resume"
									className={`ml-5 text-gray-800 dark:text-gray-50 group-hover:text-blue-600 dark:group-hover:text-blue-700 py-2 ease-in-out   ${
										active === "resume" && "text-blue-600 dark:gray-50"
									}`}
								>
									Resume
								</a>
							</div>
							<div className="flex items-center group">
								<span
									className={`rounded-full  group-hover:bg-blue-600 dark:group-hover:bg-blue-700 w-1 h-1 transition duration-700 ease-in-out ${
										active === "contact" && "bg-blue-700 dark:bg-blue-600"
									}`}
								></span>
								<a
									href="#contact"
									className={`ml-5 text-gray-800 dark:text-gray-50 group-hover:text-blue-600 dark:group-hover:text-blue-700 py-2 ease-in-out   ${
										active === "contact" && "text-blue-600 dark:gray-50"
									}`}
								>
									contact
								</a>
							</div>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
