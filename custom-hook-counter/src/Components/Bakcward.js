import useCustomHook from "./Hooks/useCustomHook";

function Bakcward() {
  const count = useCustomHook(false);

  return <div>{count}</div>;
}

export default Bakcward;
