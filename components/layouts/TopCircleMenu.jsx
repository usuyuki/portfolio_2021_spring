import { FC } from "react";

type Props = {
  //something
};
const TopCircleMenu: FC<Props> = () => {
  return (
    <div className="mx-auto text-center text-black border-black top-circle  border-2 rounded-full h-48 w-48 flex items-center justify-center  p-4 mb-10 ">
      <p className="">
        Usuyuki
        <br />
        Portfolio
        <br />
        <br />↓
      </p>
    </div>
  );
};

export { TopCircleMenu };
