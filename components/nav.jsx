import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";

export default function Nav() {
	const { theme, setTheme } = useTheme();
	const active = "home";

	return (
		<div className="sticky top-0 z-10">
			<div className="absolute left-6 top-3">
				<button className="rounded-md p-2 border-2 border-current" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
					{theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
				</button>
			</div>
			<header className="max-w-sm mx-auto p-4">
				<div className="flex justify-between uppercase text-sm font-medium tracking-wider">
					<div className="flex flex-col items-center group">
						<span
							className={`rounded-full  group-hover:bg-blue-600 dark:group-hover:bg-blue-700 w-1 h-1 transition duration-700 ease-in-out ${
								active === "home" && "bg-blue-700 dark:bg-blue-600"
							}`}
						></span>
						<a
							href="#"
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
							href="#"
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
							href="#"
							className={`text-gray-800 dark:text-gray-50 group-hover:text-blue-600 dark:group-hover:text-blue-700 py-2 ease-in-out   ${
								active === "contact" && "text-blue-600 dark:gray-50"
							}`}
						>
							contact
						</a>
					</div>
				</div>
			</header>
		</div>
	);
}
