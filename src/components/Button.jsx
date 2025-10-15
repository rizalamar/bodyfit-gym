import React from "react";

export default function Button(props) {
	const { text, func } = props;
	return (
		<button
			onClick={func}
			className="mx-auto px-8 py-4 font-bold transition duration-200 bg-yellow-400 border-yellow-700  yellowShadow border-[2px] rounded-md cursor-pointer text-slate-900 hover:bg-yellow-400"
		>
			<p>{text}</p>
		</button>
	);
}
