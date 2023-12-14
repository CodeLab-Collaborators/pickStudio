import React from "react";
import Toggle from "../../props/toggle";


const Display: React.FC = () => {
  const [on, setOn] = React.useState(false);
  return (
    <div
      onClick={() => setOn(!on)}
      className="text-[13px] font-medium rounded-lg border-[1px] flex items-center h-full px-3 gap-2 cursor-pointer min-w-[200px]">
      <div>Display total before taxes</div>
      <div>
        <Toggle onclick={() => setOn(!on)} on={on ? true : false} />
      </div>
    </div>
  );
};

export default Display;
