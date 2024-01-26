import React from "react";
import PersonRecord from "./PersonRecord";
import { Link, useNavigate, useParams } from "react-router-dom";
import Transition from "../../utils/transition";
import { userHooks } from "../../hooks/userHooks";
import { useReadOneArticles } from "../../hooks/reviewHooks";
import moment from "moment";
import { LiaGreaterThanSolid } from "react-icons/lia";
import "./styled.css";

const ReadArticles = () => {
  const navigate = useNavigate();
  const { data } = userHooks();
  const { articleID } = useParams();
  const { oneArticle } = useReadOneArticles(articleID!);

  const htmlContent = `${oneArticle?.articleContent}`;
  //   const htmlContent = `<h1 class="font-bold">started</h1>`;

  return (
    <div className="w-full items-center flex flex-col">
      {/* little */}

      <div className=" w-full pl-16 mt-10 ">
        <div className="flex items-center mb-5">
          htmlContent Account{" "}
          <LiaGreaterThanSolid size={13} className="mx-4 " /> Article{" "}
          <LiaGreaterThanSolid size={13} className="mx-4 " />{" "}
          <div
            className="capitalize underline cursor-pointer"
            onClick={() => {
              navigate(-1);
            }}
          >
            Go Back
          </div>
        </div>
        <div className="mt-3 w-full font-[500] text-[30px] mb-1 capitalize">
          {"Reading Article titled"}
        </div>
      </div>

      <div className="w-[90%] mt-[20px]">
        <div className="border rounded-md mt-20 p-4 capitalize">
          <div className="text-[30px] font-medium ">
            {oneArticle?.articleTitle}
          </div>
          <div className="text-[13px]">
            Published: {moment(oneArticle?.createdAt).format("llll")}
          </div>

          <div className="mt-4 text-[15px] font-medium">
            description: {oneArticle?.articleDescription}
          </div>

          <div className="mt-16 w-full pb-5 prose normal-case ">
            <div
              className=""
              dangerouslySetInnerHTML={{ __html: oneArticle?.articleContent }}
            />
          </div>
        </div>

        <div className="flex w-full items-center justify-between">
          <div className="font-medium mt-10 text-[18px] ">
            Hope you Enjoy this Read, {data?.firstName.trim()}!
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadArticles;
