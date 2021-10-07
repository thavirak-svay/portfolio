import Tippy from "@tippyjs/react";
import { favoriteTechStacks } from "@/data";

export default function TechStack() {
	return (
		<div className="flex mt-2 space-x-3 md:space-x-6">
			{Object.values(favoriteTechStacks).map((tech, i) => (
				<Tippy
					key={i}
					animation="scale-subtle"
					interactive={true}
					content={<span className="inline-block p-2 bg-sand-200 dark:bg-darkBlue-500 ring-1 ring-blue-700 dark:ring-cyan-500 rounded-md shadow-md dark:bg-dark">{tech[0]()}</span>}
				>
					<button aria-label="techstacks" className="w-8 h-8 md:w-10 md:h-10 hover:text-blue-700 dark:hover:text-cyan-500">
						{tech[1]()}
					</button>
				</Tippy>
			))}
		</div>
	);
}
