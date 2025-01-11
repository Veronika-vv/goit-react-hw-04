import css from "./Loader.module.css";
import { MutatingDots } from "react-loader-spinner";

export default function Loader() {
  return (
    <MutatingDots
      visible={true}
      height="100"
      width="100"
      color="#646cff"
      secondaryColor="#646cff"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass={css.wrap}
    />
  );
}
