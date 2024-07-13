import React, { useState } from "react";
import { DashboardIcon } from "../svgs/DashboardIcon";
import { TransactionIcon } from "../svgs/TransactionIcon";
import { ReportIcon } from "../svgs/ReportIcon";
import { MemberIcon } from "../svgs/MemberIcon";
import { SettingIcon } from "../svgs/SettingIcon";
import { FinancfyIcon } from "../svgs/FinancfyIcons";
import { RightArrow } from "../svgs/RightArrow";

export default function SideBar() {
  const [active, setActive] = useState(1);
  const [subNav, setSubNav] = useState("");
  const [prev, setPrev] = useState(subNav);

  return (
    <div className="w-[260px] flex" onMouseLeave={() => setSubNav(prev)}>
      <div
        className={`p-2 flex flex-col gap-2 bg-[#003a46] h-screen ${
          subNav ? "w-[60px]" : "w-full"
        } duration-300`}
        onMouseEnter={() => setPrev(subNav) || setSubNav("")}
      >
        <div className="flex items-center gap-2 p-3 lg:mb-3 mb-1 ">
          <FinancfyIcon className="w-7 h-7" />
          <span
            className={`lg:text-3xl text-lg text-white whitespace-nowrap font-semibold ${
              subNav ? "hidden" : "block"
            }`}
          >
            Financfy
          </span>
        </div>
        <div
          className={`p-3 flex items-center rounded-md gap-3 hover:bg-[#779ea6] hover:text-[#1d505d] cursor-pointer ${
            active === 1
              ? "text-white bg-[#006980] hover:text-white"
              : "text-[#8abac5]"
          }`}
          onClick={() => setActive(1) || setSubNav("") || setPrev("")}
        >
          <DashboardIcon className="w-4 h-4 lg:w-5 lg:h-5" />
          <span
            className={`text-xs lg:text-sm whitespace-nowrap ${
              subNav ? "hidden" : "block"
            }`}
          >
            Dashboard
          </span>
        </div>
        <div
          className={`p-3 flex justify-between items-center rounded-md gap-3 hover:bg-[#779ea6] hover:text-[#1d505d] cursor-pointer ${
            active === 2
              ? "text-white bg-[#006980] hover:text-white"
              : "text-[#8abac5]"
          }`}
          onClick={() =>
            setActive(2) || setSubNav("Transaction") || setPrev("Transaction")
          }
        >
          <div className="flex items-center gap-3">
            <TransactionIcon className="w-4 h-4 lg:w-5 lg:h-5" />
            <span
              className={`text-xs lg:text-sm whitespace-nowrap ${
                subNav ? "hidden" : "block"
              }`}
            >
              Transactions
            </span>
          </div>
          <RightArrow
            className={`-rotate-90 flex-shrink-0 w-2 ${
              subNav ? "hidden" : "block"
            }`}
          />
        </div>
        <div
          className={`p-3 flex justify-between items-center rounded-md gap-3 hover:bg-[#779ea6] hover:text-[#1d505d] cursor-pointer ${
            active === 3
              ? "text-white bg-[#006980] hover:text-white"
              : "text-[#8abac5]"
          }`}
          onClick={() =>
            setActive(3) || setSubNav("Reports") || setPrev("Reports")
          }
        >
          <div className="flex items-center gap-3">
            <ReportIcon className="w-4 h-4 lg:w-5 lg:h-5" />
            <span
              className={`text-xs lg:text-sm whitespace-nowrap ${
                subNav ? "hidden" : "block"
              }`}
            >
              Reports
            </span>
          </div>
          <RightArrow
            className={`-rotate-90 flex-shrink-0 w-2 ${
              subNav ? "hidden" : "block"
            }`}
          />
        </div>
        <div
          className={`p-3 flex justify-between items-center rounded-md gap-3 hover:bg-[#779ea6] hover:text-[#1d505d] cursor-pointer ${
            active === 4
              ? "text-white bg-[#006980] hover:text-white"
              : "text-[#8abac5]"
          }`}
          onClick={() =>
            setActive(4) || setSubNav("Members") || setPrev("Members")
          }
        >
          <div className="flex items-center gap-3">
            <MemberIcon className="w-4 h-4 lg:w-5 lg:h-5" />
            <span
              className={`text-xs lg:text-sm whitespace-nowrap ${
                subNav ? "hidden" : "block"
              }`}
            >
              Members
            </span>
          </div>
          <RightArrow
            className={`-rotate-90 flex-shrink-0 w-2 ${
              subNav ? "hidden" : "block"
            }`}
          />
        </div>
        <div
          className={`p-3 flex items-center rounded-md gap-3 hover:bg-[#779ea6] hover:text-[#1d505d] cursor-pointer ${
            active === 5
              ? "text-white bg-[#006980] hover:text-white"
              : "text-[#8abac5]"
          }`}
          onClick={() => setActive(5) || setSubNav("") || setPrev("")}
        >
          <SettingIcon className="w-4 h-4 lg:w-5 lg:h-5" />
          <span
            className={`text-xs lg:text-sm whitespace-nowrap ${
              subNav ? "hidden" : "block"
            }`}
          >
            Settings
          </span>
        </div>
      </div>
      <div
        className={`${
          subNav ? "w-full" : "w-0"
        } duration-300 overflow-hidden bg-[rgb(0,44,54)]`}
      >
        <div className="text-center text-[#d9ebef] border-b p-3">{subNav}</div>
        {subNav === "Transaction" && (
          <div className="flex flex-col gap-2 text-[white] text-sm mt-12">
            <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
              Cash flow
            </div>
            <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
              Cash transfer
            </div>
            <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
              Cash in
            </div>
            <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
              Cash out
            </div>
            <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
              Balk entries
            </div>
            <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
              Cash out approval
            </div>
            <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
              Cash in request
            </div>
            <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
              Advance cash out
            </div>
            <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
              Import
            </div>
          </div>
        )}
        {/* {subNav === "Banking" && (
            <div className="flex flex-col gap-2 text-[white] text-sm mt-12">
              <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
                Bank Transactions
              </div>
              <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
                Rules
              </div>
            </div>
          )}
          {subNav === "Sales" && (
            <div className="flex flex-col gap-2 text-[white] text-sm mt-12">
              <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
                All sales
              </div>
              <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
                Estimate
              </div>
              <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
                Invoice
              </div>
              <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
                Receive payment
              </div>
              <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
                Recurring invoice
              </div>
            </div>
          )} */}
      </div>
    </div>
  );
}
