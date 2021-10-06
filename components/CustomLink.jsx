import React from "react";

export default function CustomLink({ href, name }) {
	return (
		<span className="relative w-max group">
			{href ? (
				<a aria-label={name} className="text-blue-700 dark:text-cyan-500" target="_blank" rel="noreferrer" href={href}>
					{name}
				</a>
			) : (
				<span className="text-blue-700 dark:text-cyan-500">{name}</span>
			)}

			<span className="absolute -bottom-0.5 group-hover:w-full left-0 w-0 transition-all h-[7%] bg-gray-800 dark:bg-gray-300" />
		</span>
	);
}
