import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"

export function AddedPlayers() {
	return (
		<Card className="w-2/3">
			<CardHeader>
				<CardTitle>Added players</CardTitle>
				<CardDescription>Each player can respond and be scored</CardDescription>
			</CardHeader>
			<CardContent>
				<ul className="">
					<li>
						Player 1
					</li>
				</ul>
			</CardContent>
		</Card>
	);
}
