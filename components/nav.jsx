export default function Nav() {
	const active = "dashboard";

	return (
		<header className="max-w-sm mx-auto p-4">
			<div className="flex justify-between uppercase text-sm font-medium tracking-wider">
				<div className="flex flex-col items-center group">
					<span className={`rounded-full group-hover:bg-blue-700 w-1 h-1 transition duration-700 ease-in-out ${active === "dashboard" && "bg-blue-700"}`}></span>
					<a href="#" className={`text-gray-500 py-2 transition duration-1000 ease-in-out group-hover:text-blue-700 ${active === "dashboard" && "text-blue-700"}`}>
						Dashboard
					</a>
				</div>
				<div className="flex flex-col items-center group">
					<span className="rounded-full group-hover:bg-blue-700 w-1 h-1 transition duration-700 ease-in-out"></span>
					<a href="#" className="text-gray-500 py-2 transition duration-1000 ease-in-out group-hover:text-blue-700">
						Team
					</a>
				</div>
				<div className="flex flex-col items-center group">
					<span className="rounded-full group-hover:bg-blue-700 w-1 h-1 transition duration-700 ease-in-out"></span>
					<a href="#" className="text-gray-500 py-2 transition duration-1000 ease-in-out group-hover:text-blue-700">
						Projects
					</a>
				</div>
				<div className="flex flex-col items-center group ">
					<span className="rounded-full group-hover:bg-blue-700 w-1 h-1 transition duration-700 ease-in-out"></span>
					<a href="#" className="text-gray-500 py-2  transition duration-1000 ease-in-out group-hover:text-blue-700">
						Contact
					</a>
				</div>
			</div>
		</header>
	);
}
