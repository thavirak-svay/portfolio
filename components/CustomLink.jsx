import React from "react";

export default function CustomLink({ href, name }) {
	return (
		<span className="relative w-max group">
			<a className="text-blue-700 dark:text-blue-500" target="_blank" rel="noreferrer" href={href}>
				{name}
			</a>
			<span className="absolute -bottom-0.5 group-hover:w-full left-0 w-0 transition-all h-[6%] bg-gray-800 dark:bg-white" />
		</span>
	);
}
