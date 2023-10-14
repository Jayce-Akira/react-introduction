import { useState } from "react";
import { AgeDisplay } from "./AgeDisplay";

export function AgeCounter(props) {
    const [age, setAge] = useState(30);
    const [color, setColor] = useState("Red");
    const [person, setPerson] = useState({ name : "Jayce_Akira"});

    function increaseAge() {
        setAge(age + 1);
    }

    console.log("*** rerender AgeCounter");
    return (<>
    <button onClick={increaseAge}>Increase age</button>
    <AgeDisplay age={age} />
    </>
    );
}