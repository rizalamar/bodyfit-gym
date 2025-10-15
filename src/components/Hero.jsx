import React from "react";
import Button from "./Button";

const Hero = () => {
	return (
		<section className="flex items-center justify-center min-h-screen px-4 py-16 text-center text-white max-w-[900px] w-full mx-auto">
			<div className="flex flex-col items-center justify-center gap-4 p-4 ">
				<h1 className="text-5xl font-semibold leading-tight uppercase md:text-6xl lg:text-7xl drop-shadow-md">
					Transform Your Body Transform Your Life
				</h1>
				<p className="w-full max-w-lg text-lg text-center md:text-xl">
					Join{" "}
					<span className="font-bold text-yellow-300">
						BodyFit Gym
					</span>{" "}
					and achieve your fitness goals with the best community.
				</p>
				<div className="flex gap-4">
					<Button
						func={() => {
							window.location.href = "#generate";
						}}
						text={"Start membership now"}
					></Button>
				</div>
				<ul className="flex flex-col gap-6 text-sm sm:flex-row md:text-base">
					<li className="flex items-center gap-2">
						<span className="text-yellow-300">✓</span>Professional
						Coach
					</li>
					<li className="flex items-center gap-2">
						<span className="text-yellow-300">✓</span> Very
						Completed Facilities
					</li>
					<li className="flex items-center gap-2">
						<span className="text-yellow-300">✓</span> Self-schedule
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Hero;
