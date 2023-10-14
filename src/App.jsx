import { Car } from "./components/Car/Car";
import { Greetings } from "./components/Greetings/Greetings";
import "./global.css";

export function App() {

  function hello(number) {
    alert("Hello de <App/>" + number)
  }
  const a = true;
  return (
    <>
      <div>Je suis {"<App/>"}
        <Car onCarClick={hello}/>
      </div>
    </>
  );
}
