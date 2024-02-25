import Image from "next/image";

function Header({ handleSideBar }: { handleSideBar: () => void }) {
    return (
        <header className="bg-grey shadow grid grid-cols-12 p-3 lg:items-center px-6 py-4">
            <div className="relative row-start-2 mt-2 col-span-6 lg:col-span-4 flex flex-col lg:flex-row lg:gap-2 lg:row-start-1 lg:mt-0 lg:items-center ">
                <button
                    onClick={handleSideBar}
                    className="absolute -top-7 lg:relative lg:top-0"
                >
                    <Image
                        src="/sidebar.svg"
                        alt="left side bar"
                        width={24}
                        height={24}
                    />
                </button>
                <div className="text-[10.21px]">
                    <p>
                        <span>Usuários / </span>
                        <span className="text-sharp-black">Gestão de Pessoas</span>
                    </p>
                </div>
            </div>

            <p className="col-span-11  text-center row-start-1 font-bold">
                McDonald &apos;s
            </p>
            <label className="relative col-span-12 rounded  row-start-3 mt-4 md:mt-0 lg:row-start-1 lg:col-span-4 lg:mr-2">
                <Image className="absolute top-3 left-2" width={13} height={13} src='/search.svg' alt="search" />
                <input
                    placeholder="search"
                    type="Search"
                    className="pl-7 py-2 w-full placeholder:text-gray-400 rounded"
                />
                <span className="absolute top-3 text-[14px] right-2">⌘/</span>
            </label>

            <div className="row-start-1 col-span-1 flex items-center gap-1 ">
                <Image

                    src="/notification.svg"
                    alt="notification"
                    width={24}
                    height={24}
                />
                <Image
                    className="1"
                    src="/logout.svg"
                    alt="logout"
                    width={24}
                    height={24}
                />
            </div>
        </header>
    );
}

export default Header;