import { useTheme } from "next-themes";
export default function RightSidebar() {
	return (
		<div className="fixed right-5 bottom-0 md:block hidden animate-fade-in-initial fade-in-8">
			<ul className="flex h-full overflow-hidden flex-col pt-2 gap-6 items-center">
				<li>
					<a style={{ writingMode: "vertical-lr" }} className="hoverable-social-media" href="#">
						thaavirak@gmail.com
					</a>
				</li>

				<li>
					<div className="h-24 w-0.5 bg-gray-900 dark:bg-white"></div>
				</li>
			</ul>
		</div>
	);
}
