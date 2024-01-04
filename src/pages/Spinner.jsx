
// eslint-disable-next-line import/no-extraneous-dependencies
import Loader from "react-js-loader";

export default function Spinner() {
  return (

    <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
      <Loader
        type="spinner-default"
        bgColor="#3244a8"
        color="#3244a8"
        size={60}
      />
    </div>

  );
}
