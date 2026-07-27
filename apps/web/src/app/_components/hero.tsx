import Image from "next/image";
import { Badge } from "../../components/badge";

export function Hero() {
	return (
		<div className="relative animate-fade-in-up">
			<Badge className="absolute left-3 top-3 z-10">Pré-venda</Badge>
			<div className="relative overflow-hidden rounded-2xl border border-white/10">
				<Image
					src="/images/hero.jpg"
					alt="GTA VI"
					width={4160}
					height={2600}
					priority
					quality={100}
					className="h-auto w-full"
				/>
				<div className="absolute inset-0 bg-linear-to-t from-[#121220]/80 via-transparent to-transparent" />
				<Badge className="absolute left-3 bottom-3" variant="secondary">
					Rockstar Games
				</Badge>
				<div className="flex gap-2 absolute right-3 bottom-3">
					<Badge variant="secondary">PS5</Badge>
					<Badge variant="secondary">Xbox Series X|S</Badge>
				</div>
			</div>
		</div>
	);
}