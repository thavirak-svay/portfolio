import Tippy from "@tippyjs/react";
import { favoriteTechStacks } from "@/data";

export default function TechStack() {
	return (
		<div className="flex mt-2 space-x-2 md:space-x-8">
			{Object.values(favoriteTechStacks).map((tech, i) => (
				<Tippy
					key={i}
					animation="scale-subtle"
					interactive={true}
					content={<span className="inline-block p-2 bg-sand-100 dark:bg-darkBlue-500 ring-1 ring-blue-700 dark:ring-cyan-500 rounded-md shadow-md dark:bg-dark">{tech[0]()}</span>}
				>
					<button className="w-10 h-10 md:w-12 md:h-12 hover:text-blue-700 dark:hover:text-cyan-500">{tech[1]()}</button>
				</Tippy>
			))}
		</div>
	);
}
