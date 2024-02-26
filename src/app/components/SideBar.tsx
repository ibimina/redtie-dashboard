"use client"
import Link from "next/link";
import Image from "next/image";
import { dashboards } from "../constants/dashboard";
import { useState } from "react";

function SideBar({ isSideBarOpen }: {
    isSideBarOpen: boolean,
}) {
    const [dashboardArr, setDashBoardArr] = useState(dashboards)
    const handleActiveTab = (dashboard: {
        name: string;
        image: string;
        alt: string;
        active: boolean;
    }) => {
        setDashBoardArr((prev) => {
            return prev.map((p) => p.name === dashboard.name ? { ...p, active: true } : { ...p, active: false })
        })
    }
    return (
        <div
            data-testid="side-bar"
            className={`${isSideBarOpen
                ? "flex w-7/12 md:w-4/12 fixed z-50 shadow-3xl lg:shadow-none lg:hidden"
                : "hidden lg:block"
                } bg-red overflow-y-scroll md:w-4/12 transition-all flex-col justify-between lg:fixed lg:left-0 top-0 h-full lg:w-2/12`}
        >
            <div className="pt-6 mb-20">
                <div className="mb-4">
                    <Image
                        width={64}
                        height={64}
                        src="/logo.png"
                        alt="logo"
                        className="mx-auto"
                    />
                </div>
                <div className="pl-8 pr-4">
                    <div>
                        <p className="text-white font-normal text-[9px] opacity-40">
                            Bem-vindo
                        </p>
                        <p className="text-grey  font-medium text-[13px]">Luan Bani</p>
                    </div>
                    <ul className="mt-4 text-grey mb-6 text-[10.21px] pl-4 list-disc marker:text-[hsl(0,37%,48%)]">
                        <li>
                            {" "}
                            <div className="flex items-center justify-between">
                                <p>Home</p>
                                <Image src="/menu.svg" width={14} height={14} alt="home" />
                            </div>
                        </li>
                        <li>Cadastros</li>
                    </ul>
                    <div>
                        <p className="text-white opacity-40 mb-2 text-[10.21px]">
                            Dashboards
                        </p>
                        <ul className="text-grey mb-10 [&>*:nth-child(6)]:mb-12">
                            {dashboardArr.map((dashboard) => {
                                return (
                                    <li key={dashboard?.name} onClick={() => handleActiveTab(dashboard) } className={`${dashboard.active ? "border-l-2 border-[#C6C6C6] bg-[hsl(0,69%,44%)]" : ''} mb-2  px-2 py-1 rounded `}>
                                        <Link href="/" className="flex items-center gap-1 ">
                                            <Image
                                                src={dashboard?.image}
                                                width={14}
                                                height={14}
                                                alt={dashboard?.alt}
                                            />
                                            <p className="capitalize text-[10.21px] le leading-[14px]">
                                                {dashboard?.name}
                                            </p>
                                        </Link>
                                    </li>
                                )
                            }
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-2  mb-6">
                <Image src="/settings.png" alt="settings" width={14} height={14} />
                <p className="text-white">RedTie</p>
            </div>
        </div>
    );
}

export default SideBar;