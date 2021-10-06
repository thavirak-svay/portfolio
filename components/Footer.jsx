import { socialMedia } from "@/data";

export default function Footer() {
	return (
		<div className="md:hidden">
			<ul className="flex h-full overflow-hidden gap-6 pt-2 items-center">
				{socialMedia.map(({ icon, href }) => (
					<li key={href} className="hover:-translate-y-1 transition-transform duration-300 hover:text-blue-700 dark:hover:text-cyan-500">
						<a aria-label={href} target="_blank" rel="noreferrer" href={href}>
							{icon}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
