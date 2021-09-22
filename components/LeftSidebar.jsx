import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { FaTelegramPlane } from "react-icons/fa";

export default function LeftSidebar() {
	return (
		<aside className="fixed left-1 bottom-0 md:visible invisible">
			<ul className="flex h-full overflow-hidden w-20 flex-col gap-6 items-center">
				<li>
					<TiSocialFacebook size="1.8rem" className="text-lg text-gray-900 dark:text-white" />
				</li>
				<li>
					<TiSocialTwitter size="1.5rem" className="text-lg text-gray-900 dark:text-white" />
				</li>
				<li>
					<FaTelegramPlane size="1.2rem" className="text-lg text-gray-900 dark:text-white" />
				</li>
				<li>
					<div className="h-24 w-0.5 bg-gray-900 dark:bg-white"></div>
				</li>
			</ul>
		</aside>
	);
}
