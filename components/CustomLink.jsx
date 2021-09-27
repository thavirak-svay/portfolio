import React from "react";

export default function CustomLink(props) {
	return (
		<p className="font-bold text-3xl m-16 relative w-max one">
			<a {...props}></a>
			<span className="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-yellow-400"></span>
		</p>
	);
}
