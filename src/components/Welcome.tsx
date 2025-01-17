import { AddPlayerForm } from "./AddPlayerForm";
import { AddedPlayers } from "./AddedPlayers";

const Welcome = () => {
  return (
    <div className="h-full flex flex-col gap-12 items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold">Quiz time!</h1>
      </div>

      <AddPlayerForm />
      <AddedPlayers />
    </div>
  );
}

export default Welcome;
