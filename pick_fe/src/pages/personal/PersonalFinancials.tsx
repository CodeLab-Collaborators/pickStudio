import _ from "lodash";
import React, { FC } from "react";

interface iProps {
  props?: any;
}
const PersonalFinancials: FC<iProps> = ({ props }) => {
  const monthNames: any = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let costMonth = _.groupBy(props, (item) =>
    new Date(item?.createdAt).getMonth()
  );

  const sumByMonth: any = {};

  _.forEach(costMonth, (data, month) => {
    sumByMonth[month!] = _?.sumBy(data, "cost");
  });

  let values: any = Object.values(sumByMonth);
  let months: any = Object.keys(sumByMonth);

  const combinedObject: any = months.map((key: any, index: any) => ({
    [key]: values[index],
  }));

  return (
    <div>
      <p className="mb-10 w-full" style={{ color: "var(--secondary)" }}>
        Money Made from Inception: ₦
        <span className="font-bold text-[16px]">
          {values
            .reduce((a: number, b: number) => {
              return a + b;
            })
            .toLocaleString()}
        </span>
      </p>

      <div className="grid grid-cols-3 gap-3">
        {combinedObject.map((props: any, i: number) => (
          <div className="border rounded-md h-[100px] min-w-[200px] flex flex-col justify-center items-center">
            <p className="text-center">
              Revenue for <br />
              <span className="font-medium text-[20px]">
                {monthNames[Number(Object.keys(props))]}
              </span>
            </p>
            {}
            <p className="mt-10 font-medium text-[22px]  ">
              ₦{Object.values(props)?.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalFinancials;
