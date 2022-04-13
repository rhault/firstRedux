import "./styles.css";
import { increment, decrement, stateCounter } from "./redux/counter";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.countname);

  const incrementCounter = () => {
    dispatch(increment());
    console.log("dispatch", counter);
  };

  const decrementCounter = () => {
    dispatch(decrement());
    console.log("dispatch", counter);
  };

  return (
    <div className="App">
      <h1>Count {counter}</h1>
      <button onClick={incrementCounter}>increment</button>
      <button onClick={decrementCounter}>decrement</button>
    </div>
  );
}
