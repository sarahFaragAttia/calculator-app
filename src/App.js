import {
  useState,
  useRef, useEffect
} from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState(0)
  const [result, setResult] = useState(0)
  const [mathFunction, setMathFunction] = useState('')

  function handleChange(event) {
    setInputValue(event.target.value)
  }
  function reset(e) {
    e.preventDefault();
    setInputValue(0);
  };

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  };


  function plus(e) {

    e.preventDefault();

    console.log(mathFunction)


    if (mathFunction === '')
      setResult(inputValue)
    if (mathFunction === 'add')
      setResult(prevResult => Number(prevResult) + Number(inputValue))
    if (mathFunction === 'subtract')
      setResult(prevResult => Number(prevResult) - Number(inputValue))
    if (mathFunction === 'multiply')
      setResult(prevResult => Number(prevResult) * Number(inputValue))
    if (mathFunction === 'divide')
      setResult(prevResult => Number(prevResult) / Number(inputValue))
    setMathFunction("add");

    setInputValue("");
    inputRef.current.focus()
  }


  function minus(e) {
    e.preventDefault();
    inputRef.current.focus()

    if (mathFunction === 'add')
      setResult(prevResult => Number(prevResult) + Number(inputValue))
    if (mathFunction === 'subtract')
      setResult(prevResult => Number(prevResult) - Number(inputValue))
    if (mathFunction === 'multiply')
      setResult(prevResult => Number(prevResult) * Number(inputValue))
    if (mathFunction === 'divide')
      setResult(prevResult => Number(prevResult) / Number(inputValue))
    if (mathFunction === '')
      setResult(inputValue)
    setMathFunction("subtract");
    setInputValue("");
  };

  function multiply(e) {
    e.preventDefault();
    inputRef.current.focus()

    if (mathFunction === '')
      setResult(inputValue)
    if (mathFunction === 'add')
      setResult(prevResult => Number(prevResult) + Number(inputValue))
    if (mathFunction === 'subtract')
      setResult(prevResult => Number(prevResult) - Number(inputValue))
    if (mathFunction === 'multiply')
      setResult(prevResult => Number(prevResult) * Number(inputValue))
    if (mathFunction === 'divide')
      setResult(prevResult => Number(prevResult) / Number(inputValue))
    setMathFunction("multiply");
    setInputValue("");

  };

  function divide(e) {
    e.preventDefault();
    inputRef.current.focus()


    if (mathFunction === '')
      setResult(inputValue)
    if (mathFunction === 'add')
      setResult(prevResult => Number(prevResult) + Number(inputValue))
    if (mathFunction === 'subtract')
      setResult(prevResult => Number(prevResult) - Number(inputValue))
    if (mathFunction === 'multiply')
      setResult(prevResult => Number(prevResult) * Number(inputValue))
    if (mathFunction === 'divide')
      setResult(prevResult => Number(prevResult) / Number(inputValue))

    setMathFunction("divide");

    setInputValue("");
  };

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p >
          {result}
        </p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
          value={inputValue}
          onChange={handleChange}

        />
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={multiply}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={reset}>reset input</button>
        <button onClick={resetResult}>reset result</button>


      </form>
    </div>
  );
}

export default App; 
