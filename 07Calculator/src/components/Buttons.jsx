import css from "../Buttons.module.css";

function Buttons(props) {
  const values = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
    "D",
  ];

  return (
    <div className={`${css.buttonContainer}`}>
      {values.map((val) => (
        <button
          key={val}
          className={`border-1 ${css.button}`}
          type="button"
          onClick={(e) => {
            if (val == "=") {
              props.cal(props.express);
            } else if (val == "C") {
              props.clear();
            } else if (val == "D") {
              props.del(props.express);
            } else {
              props.buttonAction(e, props.express, props.opt);
            }
          }}
          value={val}
        >
          {val}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
