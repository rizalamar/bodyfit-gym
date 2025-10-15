import SectionWrapper from "./SectionWrapper";
import { WORKOUTS, SCHEMES } from "../utils/bodygym";
import { useEffect, useState } from "react";
import Button from "./Button";

function Header(props) {
	const { index, title, description } = props;
	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center justify-center gap-2">
				<p className="text-3xl font-semibold sm:text-4xl md:text-5xl text-slate-400">
					{index}
				</p>
				<h4 className="text-lg sm:text-2xl md:text-3xl">{title}</h4>
			</div>
			<p className="mx-auto text-sm sm:text-base">{description}</p>
		</div>
	);
}

export default function Generator(props) {
	const {
		poison,
		setPoison,
		muscles,
		setMuscles,
		goal,
		setGoal,
		updateWorkout,
	} = props;

	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		console.log("Clicked: ", muscles);
	}, [muscles]);

	function toggleModal() {
		setShowModal(!showModal);
	}

	function updateMuscles(muscleGroup) {
		if (poison === "individual") {
			const isSelected = muscles.includes(muscleGroup);
			const updatedMuscles = isSelected
				? muscles.filter((m) => m !== muscleGroup)
				: [...muscles, muscleGroup];

			setMuscles(updatedMuscles);

			if (updatedMuscles.length >= 3) setShowModal(false);

			return;
		}

		setMuscles([muscleGroup]);
		setShowModal(false);
	}

	return (
		<SectionWrapper
			id={"generate"}
			header={"generate your workout"}
			title={["Its's", "Huge", "O'clock"]}
		>
			<Header
				index={"01"}
				title={"Pick your poison"}
				description={"Select the workout you wish to endure."}
			/>

			<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
				{Object.keys(WORKOUTS).map((type, typeIndex) => {
					return (
						<button
							key={typeIndex}
							className={`py-3 duration-300 font-semibold rounded-lg cursor-pointer px-4 ${
								type === poison
									? "bg-yellow-500"
									: "bg-yellow-300"
							}`}
							onClick={() => {
								setMuscles([]);
								setPoison(type);
							}}
						>
							<p className="text-sm capitalize text-slate-900">
								{type.replaceAll("_", " ")}
							</p>
						</button>
					);
				})}
			</div>

			<Header
				index={"02"}
				title={"Lock on targets"}
				description={"Select the muscles judged for annihilation."}
			/>

			<div className="flex flex-col rounded-lg bg-slate-950">
				<button
					className="relative flex items-center justify-center p-3 cursor-pointer"
					onClick={toggleModal}
				>
					<p className="font-semibold capitalize">
						{muscles.length == 0
							? "Select muscles groups"
							: muscles.join(" ")}
					</p>
					<i className="absolute text-yellow-300 -translate-y-1/2 right-3 top-1/2 fa-solid fa-caret-down"></i>
				</button>

				{showModal && (
					<div className="flex flex-col px-3 pb-3 ">
						{(poison === "individual"
							? WORKOUTS[poison]
							: Object.keys(WORKOUTS[poison])
						).map((muscleGroup, muscleGroupIndex) => {
							return (
								<button
									key={muscleGroupIndex}
									className={`duration-300 cursor-pointer hover:text-yellow-300 ${
										muscles.includes(muscleGroup)
											? "text-yellow-300"
											: ""
									}`}
									onClick={() => {
										updateMuscles(muscleGroup);
									}}
								>
									<p className="capitalize">{muscleGroup}</p>
								</button>
							);
						})}
					</div>
				)}
			</div>

			<Header
				index={"03"}
				title={"Become Juggernaut"}
				description={"Select your ultimate objective."}
			/>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
				{Object.keys(SCHEMES).map((schemes, schemesIndex) => {
					return (
						<button
							key={schemesIndex}
							className={`py-3 duration-300 font-semibold px-4 rounded-lg cursor-pointer ${
								goal === schemes
									? "bg-yellow-500"
									: "bg-yellow-300"
							}`}
							onClick={() => {
								setGoal(schemes);
							}}
						>
							<p className="text-sm capitalize text-slate-900">
								{schemes.replaceAll("_", " ")}
							</p>
						</button>
					);
				})}
			</div>
			<Button func={updateWorkout} text={"Formulate"}></Button>
		</SectionWrapper>
	);
}
