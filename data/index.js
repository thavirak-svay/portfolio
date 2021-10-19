import CustomLink from "@/components/CustomLink";
import { SiSpringboot, SiReact, SiRedux, SiBootstrap, SiNextdotjs, SiTailwindcss, SiNodedotjs } from "react-icons/si";
import { RiGithubLine, RiFacebookCircleLine, RiTelegramLine, RiLinkedinBoxLine } from "react-icons/ri";

const ReactQueryIcon = (
	<svg className="custom-svg" viewBox="0 0 24 22">
		<path d="M18.9822 6.48551C19.3729 4.59321 19.4567 3.14182 19.2042 2.08792C19.054 1.46112 18.7795 0.949779 18.3619 0.580858C17.9212 0.191374 17.3639 0.000254175 16.7377 0.000254175C15.7047 0.000254175 14.6187 0.47082 13.4582 1.36477C12.9849 1.7294 12.4936 2.16889 11.9834 2.68351C11.9428 2.63129 11.8969 2.58203 11.8457 2.5365C10.4032 1.25242 9.18881 0.454601 8.1501 0.146987C7.53248 -0.0359197 6.95261 -0.0533454 6.42456 0.124172C5.86716 0.311554 5.42303 0.698899 5.10969 1.24145C4.59255 2.13684 4.45618 3.3134 4.64898 4.76615C4.72756 5.3583 4.86191 6.00333 5.05174 6.70223C4.98012 6.71087 4.90833 6.72673 4.83726 6.75026C3.00708 7.35611 1.71113 8.00763 0.926524 8.7522C0.459705 9.19521 0.154867 9.6884 0.0446704 10.2343C-0.0716426 10.8106 0.0417719 11.3885 0.354753 11.9307C0.870922 12.8248 1.82 13.53 3.17209 14.0885C3.715 14.3128 4.32927 14.5159 5.01559 14.6986C4.98427 14.7692 4.95998 14.8442 4.94373 14.9229C4.55307 16.8152 4.46923 18.2666 4.72175 19.3205C4.87194 19.9473 5.14651 20.4586 5.56402 20.8276C6.0048 21.2171 6.5621 21.4082 7.18827 21.4082C8.22128 21.4082 9.30722 20.9376 10.4677 20.0437C10.9461 19.6752 11.4428 19.2302 11.9589 18.7085C12.012 18.7914 12.0772 18.8685 12.1543 18.9372C13.5968 20.2213 14.8112 21.0191 15.8499 21.3267C16.4675 21.5096 17.0474 21.527 17.5754 21.3495C18.1328 21.1621 18.577 20.7748 18.8903 20.2322C19.4074 19.3368 19.5438 18.1603 19.351 16.7075C19.2696 16.094 19.1283 15.4237 18.9275 14.6955C19.006 14.6875 19.0848 14.6709 19.1627 14.6451C20.9929 14.0393 22.2889 13.3877 23.0735 12.6432C23.5403 12.2002 23.8451 11.707 23.9553 11.161C24.0716 10.5848 23.9582 10.0068 23.6452 9.46469C23.1291 8.57058 22.18 7.86541 20.8279 7.30687C20.2688 7.07591 19.6341 6.86739 18.9229 6.68052C18.9482 6.61856 18.9682 6.55341 18.9822 6.48551Z" />
		<path
			className="custom-fill"
			fillRule="evenodd"
			clipRule="evenodd"
			d="M10.1554 6.82105H13.8452C14.0715 6.82105 14.2804 6.94207 14.393 7.1383L16.2413 10.3593C16.353 10.554 16.353 10.7933 16.2413 10.988L14.393 14.2091C14.2804 14.4053 14.0715 14.5263 13.8452 14.5263H10.1554C9.92916 14.5263 9.7202 14.4053 9.6076 14.2091L7.75932 10.988C7.64761 10.7933 7.64761 10.554 7.75932 10.3593L9.6076 7.1383C9.7202 6.94207 9.92916 6.82105 10.1554 6.82105ZM13.3879 7.61388C13.6143 7.61388 13.8233 7.73502 13.9359 7.93141L15.3275 10.3596C15.439 10.5542 15.439 10.7932 15.3275 10.9877L13.9359 13.416C13.8233 13.6124 13.6143 13.7335 13.3879 13.7335H10.6127C10.3863 13.7335 10.1773 13.6124 10.0647 13.416L8.6731 10.9877C8.56162 10.7932 8.56162 10.5542 8.6731 10.3596L10.0647 7.93141C10.1773 7.73502 10.3863 7.61388 10.6127 7.61388H13.3879ZM12.8944 8.48103H11.1062C10.8801 8.48103 10.6712 8.60192 10.5586 8.798L9.6618 10.3591C9.54988 10.5539 9.54988 10.7935 9.6618 10.9883L10.5586 12.5494C10.6712 12.7454 10.8801 12.8663 11.1062 12.8663H12.8944C13.1205 12.8663 13.3294 12.7454 13.442 12.5494L14.3388 10.9883C14.4508 10.7935 14.4508 10.5539 14.3388 10.3591L13.442 8.798C13.3294 8.60192 13.1205 8.48103 12.8944 8.48103ZM12.4193 9.31102C12.6452 9.31102 12.854 9.43173 12.9667 9.62758L13.3874 10.3587C13.4996 10.5537 13.4996 10.7937 13.3874 10.9887L12.9667 11.7198C12.854 11.9156 12.6452 12.0364 12.4193 12.0364H11.5814C11.3554 12.0364 11.1467 11.9156 11.034 11.7198L10.6132 10.9887C10.501 10.7937 10.501 10.5537 10.6132 10.3587L11.034 9.62758C11.1467 9.43173 11.3554 9.31102 11.5814 9.31102H12.4193ZM12.0005 10.1286C11.8054 10.1286 11.6254 10.2325 11.528 10.4012C11.4305 10.5698 11.4305 10.7776 11.528 10.9462C11.6254 11.1149 11.8054 11.2188 12.0002 11.2188C12.1953 11.2188 12.3752 11.1149 12.4727 10.9462C12.5701 10.7776 12.5701 10.5698 12.4727 10.4012C12.3752 10.2325 12.1953 10.1286 12.0005 10.1286ZM7.57895 10.6738H8.56014Z"
		/>
		<path
			className="custom-fill"
			d="M6.92971 12.4241C7.09536 12.3295 7.30561 12.3884 7.39932 12.5557L7.45928 12.6623C7.93975 13.5136 8.4403 14.3217 8.96092 15.0865C9.57574 15.9897 10.2672 16.9041 11.0353 17.8296C11.1558 17.9749 11.1392 18.1909 10.9978 18.3155L10.9205 18.3833C8.38062 20.6025 6.72984 21.0458 5.96818 19.7131C5.22317 18.4096 5.49278 16.0399 6.77702 12.6042C6.8055 12.5279 6.85953 12.4642 6.92971 12.4241ZM17.7517 15.0368C17.9351 15.0044 18.1106 15.1253 18.1465 15.3087L18.1658 15.4088C18.7936 18.6942 18.3516 20.3368 16.8399 20.3368C15.3612 20.3368 13.479 18.9359 11.1932 16.1339C11.1425 16.0718 11.1151 15.9938 11.1158 15.9135C11.1175 15.7239 11.2719 15.5715 11.4608 15.5732L11.5812 15.574C12.5439 15.5793 13.4797 15.5459 14.3887 15.4739C15.4622 15.3888 16.5832 15.2431 17.7517 15.0368ZM18.6201 8.06046C18.6862 7.88245 18.8853 7.78907 19.068 7.8504L19.1675 7.88406C22.4316 8.99595 23.6719 10.2179 22.8882 11.5499C22.1217 12.8528 19.8928 13.8013 16.2015 14.3954C16.1196 14.4086 16.0356 14.3932 15.9641 14.3519C15.7954 14.2543 15.7392 14.041 15.8386 13.8755L15.9018 13.7697C16.4055 12.9242 16.8608 12.0826 17.2676 11.2452C17.748 10.2562 18.1988 9.19462 18.6201 8.06046ZM7.79853 7.07827C7.8804 7.0651 7.96439 7.08051 8.03587 7.12183C8.20459 7.21936 8.2608 7.43265 8.16141 7.59822L8.0982 7.70394C7.59447 8.54952 7.1392 9.39104 6.7324 10.2285C6.252 11.2175 5.80119 12.2791 5.37996 13.4132C5.31384 13.5912 5.11474 13.6846 4.93206 13.6233L4.83253 13.5896C1.56837 12.4777 0.328129 11.2558 1.1118 9.92378C1.87833 8.62088 4.10725 7.67238 7.79853 7.07827ZM13.0795 3.09037C15.6194 0.871163 17.2702 0.42789 18.0318 1.76055C18.7768 3.06408 18.5072 5.43374 17.223 8.86954C17.1945 8.94574 17.1405 9.00944 17.0703 9.04955C16.9047 9.14422 16.6944 9.08532 16.6007 8.91799L16.5407 8.81135C16.0603 7.96004 15.5597 7.15198 15.0391 6.38715C14.4243 5.48395 13.7328 4.56959 12.9647 3.64407C12.8442 3.49881 12.8609 3.2828 13.0022 3.15816L13.0795 3.09037ZM7.28644 1.01053C8.76509 1.01053 10.6473 2.4115 12.9331 5.21343C12.9838 5.27557 13.0112 5.3536 13.0105 5.43392C13.0089 5.62349 12.8544 5.77584 12.6656 5.77418L12.5451 5.77332C11.5824 5.76809 10.6466 5.80149 9.7376 5.87352C8.66413 5.95859 7.54314 6.10426 6.37464 6.31055C6.19123 6.34293 6.01573 6.22205 5.97984 6.03862L5.96049 5.93856C5.33276 2.65321 5.77474 1.01053 7.28644 1.01053Z"
		/>
	</svg>
);
const ChakraUIIcon = (
	<svg className="custom-svg" viewBox="0 0 24 24">
		<path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12Z" />
		<path
			className="custom-fill"
			d="m6.496 12.512 8.18-8.123c.152-.152.398.033.295.222l-3.044 5.58a.187.187 0 0 0 .164.276h5.26c.17 0 .252.207.128.323l-9.22 8.605c-.165.154-.41-.063-.278-.246l4.364-6.021a.187.187 0 0 0-.15-.296H6.626a.187.187 0 0 1-.131-.32Z"
		/>
	</svg>
);
export const defaultTheme = "dark";
export const email = "thaavirak@gmail.com";
export const cvUrl = "https://drive.google.com/file/d/1iVBQw_kTMaBtgvhgOfhpBIUkkLGbRmub/view?usp=sharing";

export const menu = [
	{
		id: "home",
		name: "Home",
	},
	{
		id: "project",
		name: "Project",
	},
	{
		id: "contact",
		name: "contact",
	},
];

export const greeting = [
	() => "👋 Hi! My name is",
	() => (
		<>
			<CustomLink name="Svay Thavirak." />
		</>
	),
	() => (
		<>
			I&apos;m a hard-working and quick learner student at <CustomLink href="https://www.setecu.com/" name="SETEC&nbsp;Institute" />. Currently, I&apos;m interested in{" "}
			<CustomLink name="front-end&nbsp;development" /> and <CustomLink name="UI&nbsp;&&nbsp;UX&nbsp;design" />.
		</>
	),
];

export const socialMedia = [
	{
		icon: <RiGithubLine size="1.5rem" />,
		href: "https://github.com/ThavirakSvay",
	},
	{
		icon: <RiFacebookCircleLine size="1.5rem" />,
		href: "https://www.facebook.com/thaavirak",
	},
	{
		icon: <RiLinkedinBoxLine size="1.5rem" />,
		href: "https://www.linkedin.com/in/thavirak-svay/",
	},
	{
		icon: <RiTelegramLine size="1.5rem" />,
		href: "https://t.me/thaa_virak",
	},
];

export const favoriteTechStacks = {
	react: [
		() => (
			<p>
				<CustomLink href="https://reactjs.org" name="Create React App" />, where I started my front-end development journey, great for building an authenticated website.
			</p>
		),
		() => <SiReact className="w-full h-full" />,
	],
	nextjs: [
		() => (
			<p>
				<CustomLink href="https://nextjs.org" name="Next.js" />, I really enjoy learning Next.js because of its cool features such as static site generation, dynamic paths and api
				route.
			</p>
		),
		() => <SiNextdotjs className="w-full h-full" />,
	],
	tailwindcss: [
		() => (
			<p>
				<CustomLink href="https://tailwindcss.com" name="Tailwind CSS" />, an utility-first CSS framework is such a breeze to work with, the more I use it the more I like it.
			</p>
		),
		() => <SiTailwindcss className="w-full h-full" />,
	],
	nodejs: [
		() => (
			<p>
				<CustomLink href="https://nodejs.org" name="Node.js" />, simple but powerful backend language so you don&apos;t need to learn another language.
			</p>
		),
		() => <SiNodedotjs className="w-full h-full" />,
	],
	chakraui: [
		() => (
			<p>
				<CustomLink href="https://chakra-ui.com" name="Chakra UI" />, a ready-to-use component library, comes with all the styling benefits of Tailwind CSS that will give you an
				ability to build a beautiful website at fast pace.
			</p>
		),
		() => ChakraUIIcon,
	],
	reactquery: [
		() => (
			<p>
				<CustomLink href="https://react-query.tanstack.com" name="React Query" /> from the author <CustomLink href="https://github.com/tannerlinsley" name="tannerlinsley" />, great
				react hooks for data fetching and caching, the revalidate on focus is unreal. <CustomLink href="https://swr.vercel.app" name="SWR" /> is also a great alternative to this.
			</p>
		),
		() => ReactQueryIcon,
	],
};

export const projects = [
	{
		title: "Payroll Management System",
		description:
			"A web app for managing employees data for enterprise companies. Add and modify employees' information, payslips, deposit & withdrawal funds, mistakes & achievements and leave requests. Print and exports reports & summaries related to payroll, employee, funding, and more.",
		imageSrc: require("@/public/a.png"),
		tectStacks: [
			{
				name: "Create React App",
				icon: <SiReact className="w-full h-full" />,
			},
			{
				name: "Redux Thunk",
				icon: <SiRedux className="w-full h-full" />,
			},
			{
				name: "React Bootstrap",
				icon: <SiBootstrap className="w-full h-full" />,
			},
			{
				name: "Spring Boot",
				icon: <SiSpringboot className="w-full h-full" />,
			},
		],
		challenge:
			"Build tables that contain large datasets and require cells to be editable. Simply putting all the data from API into a react table library is not enough because tables become lagging as users typing and big chunks of data pile up.",
		solution: "I built a custom table component that is capable of performing calculations vertically and horizontally using JavaScript DOM. Since it does not use React's virtual DOM, we can avoid frequent re-rendering and significantly improve performance.",
	},
	{
		title: "GPS Tracking System",
		description:
			"A web app for monitoring GPS devices. Receive real-time updates of location, speed, altitude, etc. Draw zone areas and assign devices directly on the map. Pinpoint the exact location and alert the screen and Telegram whenever the device is out of the zone.",
		imageSrc: require("@/public/b.png"),
		tectStacks: [
			{
				name: "Create React App",
				icon: <SiReact className="w-full h-full" />,
			},
			{
				name: "Chakra UI",
				icon: ChakraUIIcon,
			},
			{
				name: "React Query",
				icon: ReactQueryIcon,
			},
			{
				name: "Spring Boot",
				icon: <SiSpringboot className="w-full h-full" />,
			},
		],
		challenge: "Opting out of Redux, means there is no longer a global state in our React App to consume data from WebSockets.",
		solution: "Thanks to React Query, we can easily modify the cached data and broadcast new data across the app without having to re-fetch queries.",
	},
];
