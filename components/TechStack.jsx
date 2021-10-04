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
					content={<span className="inline-block p-2 bg-sand-100 dark:bg-sea-green-500 rounded-md shadow-md dark:bg-dark border-thin">{tech[0]()}</span>}
				>
					<button className="rounded-sm md:w-12">{tech[1]()}</button>
				</Tippy>
			))}
		</div>
	);
}
