import Image from "next/image";

function TableEdits() {
    return (
    <div className="flex flex-col md:flex-row justify-end gap-3 mt-3">
        <input
            className="border-2 border-[rgba(58, 53, 65, 0.29)] placeholder-[rgba(58, 53, 65, 0.38)] p-2 rounded"
            type="search"
            placeholder="Procurar Usuários"
        />
        <button className="bg-[#3675f5] text-[10px] px-2 py-1 text-white shadow rounded">
            {" "}
            ADD USER
        </button>
        <button className="border-2 border-[rgba(58, 53, 65, 0.29)] text-[rgba(138, 141, 147, 1)] px-3 py-2 rounded-sm flex items-center gap-2 text-[8px]">
            <Image src="/export.svg" width={20} height={20} alt="export" />
            Exportar
        </button>
    </div> );
}

export default TableEdits;