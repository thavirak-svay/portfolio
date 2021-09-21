import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { FaTelegramPlane } from "react-icons/fa";
import { BiMoon, BiSun } from "react-icons/bi";
import { useTheme } from "next-themes";

export default function SocialMedia() {
	const { theme, setTheme } = useTheme();
	return (
		<div className="flex h-full overflow-hidden w-20 flex-col gap-6 items-center">
			{theme === "light" ? <BiMoon onClick={() => setTheme("dark")} /> : <BiSun onClick={() => setTheme("light")} />}

			<div className="h-1 w-1 rounded-sm bg-gray-900 dark:bg-white"></div>
			<TiSocialFacebook size="1.8rem" className="text-lg text-blue-700 dark:text-blue-500" />
			<TiSocialTwitter size="1.5rem" className="text-lg text-blue-700 dark:text-blue-500" />
			<FaTelegramPlane size="1.2rem" className="text-lg text-blue-700 dark:text-blue-500" />
			<div className="h-16 w-1 rounded-t-sm bg-blue-600 dark:bg-blue-500"></div>
		</div>
	);
}
