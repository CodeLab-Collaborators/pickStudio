import { useState } from "react";
import GlobalInput from "../../components/props/GlobalInput";
import { GlobalButton } from "../../components";
import { userHooks } from "../../hooks/userHooks";
import {
  updateBankAccount,
  updateBankAccountName,
  updateBankName,
} from "../../api/userAPI";

import { bankCodes } from "../../utils/bankCdes";

const AccountDetailScreen = () => {
  const { data } = userHooks();

  const [toggle, setToggle] = useState<boolean>(false);
  const [toggle1, setToggle1] = useState<boolean>(false);
  const [toggle2, setToggle2] = useState<boolean>(false);

  const [bankName, setBankName] = useState<string>("");
  const [bankAccount, setBankAccount] = useState<string>("");
  const [accountNumber, setAccountNumber] = useState<string>("");

  const dataCode: any = bankCodes.find((el) => {
    return el.name === bankName;
  });

  const onToggle = () => {
    setToggle(!toggle);
  };

  const onToggle1 = () => {
    setToggle1(!toggle1);
  };

  const onToggle2 = () => {
    setToggle2(!toggle2);
  };

  return (
    <div className=" grid col-span-3 pr-0 h-[100px] ">
      {/* forms */}
      <div>
        <div className="flex w-full justify-between h-[100px] relative ">
          {" "}
          <div>
            <div>Bank Name</div>
            <div className="font-[400]">
              {data?.bankName ? data.bankName : "No Bank Name added yet"}
            </div>
          </div>
          <div
            className="text-[12px] underline font-[500] hover:cursor-pointer  ml-10"
            onClick={onToggle2}
          >
            Change
          </div>
        </div>
        {toggle2 && (
          <div
            className="absolute left:0 sm:left-16 top-[19.5rem] h-[200px] w-[90%] sm:w-[45%]  bg-fuchsia-500 py-4 z-10 "
            style={{
              background: "rgba(255, 255, 255, 0.25)",
              backdropFilter: " blur( 4px )",
            }}
          >
            <div className="z-20">
              <div className="flex w-full backdrop-blur-md">
                <select
                  className="w-full border rounded-md h-[50px] px-2 backdrop-blur-md"
                  value={bankName}
                  onChange={(e: any) => {
                    setBankName(e.target.value);
                  }}
                >
                  {bankCodes.map((props: any) => (
                    <option key={props.id}>{props?.name}</option>
                  ))}
                </select>
              </div>
              <div className="w-[200px] mt-3 ">
                <GlobalButton
                  style={{ background: "var(--gradient)" }}
                  onClick={() => {
                    updateBankName(data?._id, {
                      bankName,
                      bankCode: dataCode?.code,
                    });

                    onToggle2();
                  }}
                >
                  save
                </GlobalButton>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* forms */}
      <div>
        <div className="flex w-full justify-between h-[100px] relative ">
          {" "}
          <div>
            <div>Bank Account</div>
            <div className="font-[400]">
              {data?.bankAccount
                ? data.bankAccount
                : "No Bank Account Number added yet"}
            </div>
          </div>
          <div
            className="text-[12px] underline font-[500] hover:cursor-pointer  ml-10"
            onClick={() => {
              updateBankAccount(data?._id, accountNumber);
              onToggle();
            }}
          >
            Change
          </div>
        </div>
        {toggle && (
          <div
            className="absolute left:0 sm:left-16 top-[25.0rem] h-[200px] w-[90%] sm:w-[45%]  bg-fuchsia-500 py-4 z-10 "
            style={{
              background: "rgba(255, 255, 255, 0.25)",
              backdropFilter: " blur( 4px )",
            }}
          >
            <div className="z-20">
              <div className="flex w-full">
                <GlobalInput
                  className="flex-1 ml-1"
                  placeholder="Enter Bank Account Number"
                  value={accountNumber}
                  onChange={(e) => {
                    setAccountNumber(e.target.value);
                  }}
                />
              </div>
              <div className="w-[200px] mt-3 ">
                <GlobalButton
                  style={{ background: "var(--gradient)" }}
                  onClick={() => {
                    updateBankAccount(data?._id, accountNumber);
                    onToggle();
                  }}
                >
                  save
                </GlobalButton>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        <div className="flex w-full justify-between h-[100px] relative ">
          {" "}
          <div>
            <div>Account Name</div>
            <div className="font-[400]">
              {data?.accountName
                ? data.accountName
                : "No account name added yet"}
            </div>
          </div>
          <div
            className="text-[12px] underline font-[500] hover:cursor-pointer  ml-10"
            onClick={() => {
              updateBankAccountName(data?._id, bankAccount);
              onToggle1();
            }}
          >
            Change
          </div>
        </div>
        {toggle1 && (
          <div
            className="absolute left:0 sm:left-16 top-[31.5rem] h-[200px] w-[90%] sm:w-[45%]  bg-fuchsia-500 py-4 z-10 "
            style={{
              background: "rgba(255, 255, 255, 0.25)",
              backdropFilter: " blur( 4px )",
            }}
          >
            <div className="z-20">
              <div className="flex w-full">
                <GlobalInput
                  value={bankAccount}
                  onChange={(e) => {
                    setBankAccount(e.target.value);
                  }}
                  className="flex-1 ml-1"
                  placeholder="eg: Peter Oti"
                />
              </div>
              <div className="w-[200px] mt-3 ">
                <GlobalButton
                  style={{ background: "var(--gradient)" }}
                  onClick={onToggle1}
                >
                  save
                </GlobalButton>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>{/* <GlobalTextArea className="h-[200px] rounded-md" /> */}</div>
    </div>
  );
};

export default AccountDetailScreen;
