import useCustomHook from "./Hooks/useCustomHook";

const Forward = (props) => {
  const count = useCustomHook();

  return <div>{count}</div>;
};

export default Forward;
