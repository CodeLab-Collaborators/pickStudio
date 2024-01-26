import { FC, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

interface iProps {
  to: string;
}
const Transition: FC<PropsWithChildren<iProps>> = (props: any, { to }) => {
  const { children } = props;
  const navigate = useNavigate();

  const nav = () => {
    if (!document.startViewTransition) {
      navigate(to);
    } else {
      document.startViewTransition(() => {
        navigate(to);
      });
    }
  };

  return (
    <div>
      <button onClick={nav}>{children}</button>
    </div>
  );
};

export default Transition;
