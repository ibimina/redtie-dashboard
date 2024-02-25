import Image from "next/image";

function Filters({ handleFilter, isFilterOpen }: { handleFilter: () => void, isFilterOpen: boolean }) {
    return (
        <>
            <div className="flex items-center gap-1 mb-2">
                <p className="text-[10.21px] font-semibold">Search Filters</p>
                <button onClick={handleFilter} >
                    <Image
                        src="/arrowright.svg"
                        className={`rotate-90`}
                        width={10}
                        height={10}
                        alt="greater than arrow"
                    />
                </button>
            </div>
            <ul
                className={`${isFilterOpen ? "visible" : "invisible"
                    } text-[10.21px] text-faint-grey shadow rounded w-max p-2 pl-6 list-disc marker:text-[rgba(209, 209, 214, 1)]`}
            >
                <li>Estabelecimento</li>
                <li>Tipo De Usuário</li>
                <li>Status</li>
            </ul>
        </>
    );
}

export default Filters;