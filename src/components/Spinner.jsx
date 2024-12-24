import SpinnerGIF from "../assets/Spinner.gif";

function Spinner() {
  return (
    <>
      <img
        src={SpinnerGIF}
        alt=""
        className="d-block m-auto"
        style={{ width: "200px" }}
      />
    </>
  );
}

export default Spinner;
