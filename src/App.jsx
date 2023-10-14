import { Car } from "./components/Car/Car";
import { Greetings } from "./components/Greetings/Greetings";
import "./global.css";

export function App() {
  const a = true;
  return (
    <>
      <div>
        <Car />
        <Greetings />
      </div>
    </>
  );
}
