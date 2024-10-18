import css from "../InputField.module.css";

function InputField(props) {
  return (
    <>
      <input
        className={`${css.Input}`}
        type="text"
        placeholder="Enter"
        value={props.exp}
        readOnly
        dir="rtl"
      ></input>
    </>
  );
}

export default InputField;
