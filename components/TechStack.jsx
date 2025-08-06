import { skills } from "@/data";

export default function TechStack() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
			{skills.map((group, i) => (
				<div key={i} className="bg-sand-200 dark:bg-darkBlue-500 rounded-lg p-4 shadow-md">
					<p className="font-semibold text-blue-700 dark:text-cyan-500 mb-1">{group.category}</p>
					<p className="text-xs opacity-80 mb-2">{group.description}</p>
					<ul className="flex flex-wrap gap-2">
						{group.items.map((item) => (
							<li key={item} className="bg-blue-100 dark:bg-cyan-900 text-blue-700 dark:text-cyan-300 px-2 py-1 rounded text-xs font-medium">
								{item}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}
