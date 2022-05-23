import { useRef, useState, useEffect } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    console.log("Name input is valid");
  }, [enteredNameIsValid]);

  const nameInputedChangeHandler = (e) => {
    setEnteredName(e.target.value);
    if (e.target.value.trim() !== "") {
      setEnteredNameIsValid(true);
    }
  };

  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
    if (enteredName.trim() == "") {
      setEnteredNameIsValid(false);
    }
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() == "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    // nameInputRef.current.value = ''; => NOT BEST PRACTICE, Don't manipute the DOM
    setEnteredName("");
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onBlur={nameInputBlurHandler}
          onChange={nameInputedChangeHandler}
          value={enteredName}
        />
      </div>
      {nameInputIsInvalid && (
        <small className="error-text">Name must not be empty</small>
      )}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
