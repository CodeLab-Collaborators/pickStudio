import _ from "lodash";
import React, { FC } from "react";

interface iProps {
  props?: any;
}
const PersonalFinancials: FC<iProps> = ({ props }) => {
  let costMonth = _.groupBy(props, (item) =>
    new Date(item?.createdAt).getMonth()
  );

  const sumByMonth: any = {};

  _.forEach(costMonth, (data, month) => {
    sumByMonth[month!] = _?.sumBy(data, "cost");
  });

  let values: any = Object.values(sumByMonth);

  return (
    <div>
      <p className="text-center mb-5">
        Money Made from Inception: ₦
        <span className="font-medium">
          {values
            .reduce((a: number, b: number) => {
              return a + b;
            })
            .toLocaleString()}
        </span>
      </p>
      <div className="grid grid-cols-3">
        <div className="border rounded-md h-[200px] min-w-[200px] flex flex-col justify-center items-center">
          <p>Revenue for December</p>

          <p className="mt-10 font-medium ">₦{values[0].toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalFinancials;
