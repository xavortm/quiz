import { useLocalStorage } from "@/hooks/use-localstorage";
import { AddPlayerForm } from "./AddPlayerForm";
import { AddedPlayers, Player } from "./AddedPlayers";

const Welcome = () => {
  const [players, setPlayers] = useLocalStorage<Player[]>('players', []);

  const handlePlayerAdd = () => { }

  return (
    <div className="h-full flex flex-col gap-12 items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold">Quiz time!</h1>
      </div>

      <AddPlayerForm onSubmit={handlePlayerAdd} />
      <AddedPlayers players={players} />
    </div>
  );
}

export default Welcome;
