import { useState } from "react"

const INITIAL_VALUE = ["A", "B", "C"]

function ArrayComp() {
  const [array, setArray] = useState(INITIAL_VALUE)
  const [value, setValue] = useState("")

  function removeFirstElement() {
    setArray((currentArray) => {
      return currentArray.slice(1)
    })
  }

  function removeSpecificLetter(letter) {
    setArray((currentArray) => {
      return currentArray.filter((element) => element !== letter)
    })
  }

  function addLetterToStart(letter) {
    if (letter) {
      setArray((currentArray) => {
        return [letter, ...currentArray]
      })
    }
  }

  function addLetterToEnd(letter) {
    if (letter) {
      setArray((currentArray) => {
        return [...currentArray, letter]
      })
    }
  }

  function clear() {
    setArray([])
    setValue("")
  }

  function reset() {
    setArray(INITIAL_VALUE)
  }

  function updateAToH() {
    setArray((currentArray) => {
      return currentArray.map((element) => {
        if (element === "A") return "H"
        return element
      })
    })
  }

  function addLetterAtIndex(letter, index) {
    setArray((currentArray) => {
      return [
        ...currentArray.slice(0, index),
        letter,
        ...currentArray.slice(index),
      ]
    })
  }

  function handleButtonClick(callback) {
    callback()
    setValue("")
  }

  return (
    <div className="container">
      <label htmlFor="letter-input">Please enter a letter: </label>
      <input
        id="letter-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="buttons-grid">
        <button
          onClick={() => handleButtonClick(() => addLetterToStart(value))}
        >
          Add Letter To Start
        </button>
        <button onClick={() => handleButtonClick(() => addLetterToEnd(value))}>
          Add Letter To End
        </button>
        <button onClick={removeFirstElement}>Remove First Element</button>
        <button onClick={() => removeSpecificLetter("B")}>
          Remove All B's
        </button>
        <button onClick={updateAToH}>Update A To H</button>
        <button onClick={() => addLetterAtIndex("C", 2)}>Add C At 3</button>
        <button onClick={clear}>Clear</button>
        <button onClick={reset}>Reset</button>
      </div>
      <br />
      <br />
      <p>Output: {array.join(", ")}</p>
    </div>
  )
}

export default ArrayComp
