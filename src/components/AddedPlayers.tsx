import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface Player {
  name: string,
  color: 'red' | 'black' | 'green' | 'blue' | 'purple',
}

interface AddedPlayersProps {
  players: Player[]
}

export function AddedPlayers({ players }: AddedPlayersProps) {
  if (players?.length === 0) {
    return null;
  }

  return (
    <Card className="w-2/3">
      <CardHeader>
        <CardTitle>Added players</CardTitle>
        <CardDescription>Each player can respond and be scored</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="">
          {players.map(player => <li>{player.name}</li>)}
        </ul>
      </CardContent>
    </Card>
  );
}
