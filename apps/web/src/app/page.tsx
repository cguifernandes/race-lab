import { Ps5Logo } from "../../public/logos/ps5";
import { XboxLogo } from "../../public/logos/xbox";
import { Button } from "../components/button";
import { Hero } from "./_components/hero";

export default function Home() {
	return (
		<main className="bg-linear-to-t to-[#292949] from-[#121220] min-h-screen">
			<div className="mx-auto max-w-5xl px-4 py-12">
				<Hero />

				<div className="my-10 flex flex-wrap items-center justify-between gap-6">
					<h1
						className="animate-fade-in-up flex-1 text-2xl font-bold leading-tight text-white"
						style={{ animationDelay: "0.2s" }}
					>
						Dispon&iacute;vel em
						<br /> 19 de novembro de
						<br /> 2026
					</h1>

					<Button
						size="lg"
						className="animate-fade-in-up rounded-full px-10 py-8 text-lg font-bold tracking-wide"
						style={{ animationDelay: "0.35s" }}
					>
						Reservar Agora
					</Button>
					<div
						className="animate-fade-in-up flex-1 items-end flex flex-col gap-4"
						style={{ animationDelay: "0.2s" }}
					>
						<Ps5Logo className="h-5 w-fit text-white" />
						<XboxLogo className="h-5 w-fit text-white" />
					</div>
				</div>
			</div>
		</main>
	);
}
