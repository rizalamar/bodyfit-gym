import React, { useState } from "react";

export default function ExerciseCard(props) {
	const { exercise, index } = props;
	const [setsCompleted, setSetsCompleted] = useState(0);

	function handleSetIncrement() {
		setSetsCompleted((setsCompleted + 1) % 6);
	}

	return (
		<div className="flex flex-col gap-4 p-4 rounded-md bg-slate-950 sm:flex-wrap">
			<div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4">
				<h4 className="hidden text-3xl font-semibold sm:inline sm:text-4xl md:text-5xl text-slate-400">
					0{index + 1}
				</h4>

				<h2 className="flex-1 max-w-full text-lg capitalize truncate whitespace-nowrap sm:text-xl md:text-2xl md:text-center">
					{exercise.name.replaceAll("_", " ")}
				</h2>
				<p className="text-sm capitalize text-slate-400 ">
					{exercise.type}
				</p>
			</div>

			<div className="flex flex-col">
				<h3 className="text-sm text-slate-400">Muscle Group</h3>
				<p className="capitalize">{exercise.muscles.join(" & ")}</p>
			</div>

			<div className="flex flex-col gap-2 rounded bg-slate-950">
				{exercise.description.split("___").map((val) => {
					return <div className="text-sm">{val}</div>;
				})}
			</div>

			<div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:place-items-center">
				{["reps", "rest", "tempo"].map((info) => {
					return (
						<div
							key={info}
							className="flex flex-col p-2 rounded border-[1.5px] border-solid border-slate-900 w-full"
						>
							<h3 className="text-sm capitalize text-slate-400">
								{info === "reps" ? `${exercise.unit}` : info}
							</h3>

							<p className="font-medium">{exercise[info]}</p>
						</div>
					);
				})}
				<button
					onClick={handleSetIncrement}
					className="flex flex-col w-full p-2 duration-200 bg-yellow-500 rounded cursor-pointer hover:bg-yellow-300"
				>
					<h3 className="text-sm font-medium capitalize text-slate-900">
						sets completed
					</h3>
					<p className="font-medium text-slate-900">
						{setsCompleted} / 5
					</p>
				</button>
			</div>
		</div>
	);
}
