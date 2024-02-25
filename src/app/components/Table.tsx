import Image from "next/image";
import { tableHeading } from "../constants/table";
import { users } from "../constants/users";

function Table() {
    const getFilledColorClass = (value: number) => {
        if (value < 35) {
            return '[&::-webkit-progress-value]:bg-[#FF8A00]';
        } else if (value >= 35 && value <= 50) {
            return '[&::-webkit-progress-value]:bg-[#FFE600]';
        } else if (value >= 75) {
            return '[&::-webkit-progress-value]:bg-[#00D92F]';
        } else {
            return '[&::-webkit-progress-value]:bg-gray-500';
        }
    };
    return ( 
        <table className="block relative lg:table mt-6 lg:w-full">
            <thead className=" float-left block lg:table-header-group lg:float-none lg:shadow">
                <tr className="block lg:table-row text-left">
                    <td className="block  px-2  whitespace-nowrap lg:table-cell capitalize text-[10px] h-9 lg:h-auto text-left"><input type="checkbox" name="" id="" /></td>

                    {tableHeading.map((hd) =>
                        <th key={hd.name} className={`block text-left lg:text-center px-2  whitespace-nowrap lg:table-cell capitalize text-[10px] h-9`}>{hd.name}</th>
                    )}
                </tr>

            </thead>
            <tbody
                className="block w-auto relative overflow-x-auto whitespace-nowrap lg:whitespace-normal lg:table-row-group"
            >
                {
                    users.map((user, i) =>
                        <tr key={user.name} className="inline-block lg:table-row text-left">
                            <td className="block lg:whitespace-nowrap whitespace-normal lg:table-cell text-[8px]  h-9 px-2 lg:h-auto text-left"><input type="checkbox" name="" id="" /></td>
                            <td className=" lg:whitespace-nowrap whitespace-normal lg:table-cell text-[8px]  h-9 pr-4 block">
                                <p className="flex items-center gap-2">
                                    <Image
                                        className=""
                                        src={user.img}
                                        alt="three dot"
                                        width={24}
                                        height={24}
                                    />{user.name}
                                </p>
                            </td>
                            <td className="block lg:whitespace-nowrap whitespace-normal lg:table-cell text-[8px]  h-9 pr-4">{user.email}</td>
                            <td className="block lg:whitespace-nowrap whitespace-normal lg:table-cell text-[8px] h-9 text-center">{user.reg}</td>
                            <td className="block lg:whitespace-nowrap whitespace-normal lg:table-cell text-[8px] h-9"> <progress max={100} value={user.status} className={`bg-transparent ${getFilledColorClass(user.status)} mr-4`}></progress>{user.status}%</td>
                            <td className="block lg:whitespace-nowrap whitespace-normal lg:table-cell text-[8px] h-9">{user.contact}</td>
                            <td className="block lg:whitespace-nowrap whitespace-normal lg:table-cell text-[8px] h-9">{user.dept}</td>
                            <td className="block lg:whitespace-nowrap whitespace-normal lg:table-cell text-[8px] h-9 text-center">{user.acitive}</td>
                            <td className="block lg:whitespace-nowrap whitespace-normal lg:table-cell text-[8px] h-9">{user.gender}</td>
                            <td className="block lg:whitespace-nowrap whitespace-normal lg:table-cell text-[8px] h-9"> <Image
                                className="rotate-90 lg:mx-auto"
                                src="/more.svg"
                                alt="three dot"
                                width={14}
                                height={14}
                            /></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
     );
}

export default Table;