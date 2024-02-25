"use client";
import Image from "next/image";
import { useState } from "react";
import { dashboards } from "./constants/dashboard";
import './globals.css'
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Table from "./components/Table";
import TableEdits from "./components/TableEdits";
import Filters from "./components/Filters";

export default function Home() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const handleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  const handleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <main className="lg:flex lg:justify-end">
      <button
        onClick={handleSideBar}
        className={` ${isSideBarOpen ? "absolute right-3 z-50 top-2" : "hidden"
          } lg:hidden`}
      >
        close
      </button>
      <SideBar isSideBarOpen={isSideBarOpen} />
      <div
        className={` ${isSideBarOpen ? "lg:w-full" : "lg:w-10/12"
          } w-full lg:w-10/12 z-50 lg:justify-end`}
      >
        <Header handleSideBar={handleSideBar} />
        <section className="px-6 py-6 overflow-x-auto">
          <Filters handleFilter={handleFilter} isFilterOpen={isFilterOpen}/>
          <TableEdits />
          <Table />
          <div className="shadow p-3 mt-3 w-full">
            <p className="text-[grey]">MORE</p>
          </div>
          <div className="flex flex-col md:flex-row justify-end gap-3 my-4 text-[10px]">
            <p>Linhas por página:5</p>
            <p>1-5 de 50</p>
            <div className="flex items-center gap-5">
              <Image
                src="/arrowright.svg"
                className={`rotate-180`}
                width={15}
                height={15}
                alt="less than arrow"
              />
              <Image
                src="/arrowright.svg"
                width={15}
                height={15}
                alt="greater than arrow"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
