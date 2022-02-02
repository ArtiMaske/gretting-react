import "./app.css";
const App = function () {
  let curDate = new Date(2020, 5, 5, 22).getHours();
  let gretting = "";
  const cssStyle = {};

  if (curDate >= 1 && curDate < 12) {
    gretting = "Good Morning";
    cssStyle.color = "green";
  } else if (curDate >= 12 && curDate < 19) {
    gretting = "Good Afternoon";
    cssStyle.color = "orange";
  } else {
    gretting = "Good Neight";
    cssStyle.color = "brown";
  }
  return (
    <>
      <div>
        <h1>
          Hello sir <span style={cssStyle}>{gretting}</span>
        </h1>
      </div>
    </>
  );
};

export default App;
