import { Greetings } from "./Greetings";

export function App() {
  return (
    <>
      <h1>Hello to the React world</h1>
      <Greetings
        firstName={"Rachel"}
        age={50}
        car={{ color: "red", vitess: 300 }}
        doSomething={function () {
          console.log("Hello");
        }}
        isSunny={false}
      >
        <img src="https://fastly.picsum.photos/id/537/200/300.jpg?hmac=LG3kZs5AdrMmsgeVOdrfP0C5KT3WmP-q5TauEZdR4vk" />
      </Greetings>
    </>
  );
}
