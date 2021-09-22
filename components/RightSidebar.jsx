import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { FaTelegramPlane } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";

export default function RightSidebar() {
	const { theme, setTheme } = useTheme();

	return (
		<aside className="fixed right-1 bottom-0 md:visible invisible ">
			<ul className="flex h-full overflow-hidden w-20 flex-col gap-6 items-center">
				<li>
					<a style={{ writingMode: "vertical-lr" }} href="#">
						thaavirak@gmail.com
					</a>
				</li>

				<li>
					<div className="h-24 w-0.5 bg-gray-900 dark:bg-white"></div>
				</li>
			</ul>
		</aside>
	);
}
