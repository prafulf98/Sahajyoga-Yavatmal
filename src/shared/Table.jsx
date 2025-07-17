import { useEffect } from "react"

const Table = ({ tHead, tBody, customStyle }) => {
    useEffect(() => {
        console.log(tBody)
    }, [])

    return (
        <>
            <div className={`${customStyle} flex flex-col max-w-[95%]  border border-gray-400`}>
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                <thead>
                                    <tr className="bg-primary rounded-t-lg">
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-primary uppercase dark:text-neutral-500 "> Sr. No.</th>
                                        {tHead.map((headItem, i) =>
                                            <th key={i} scope="col" className="px-6 py-3 text-start text-xs font-medium text-primary uppercase dark:text-neutral-500">
                                                {headItem}
                                            </th>
                                        )}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                    {tBody.map((bodyItem, i) =>
                                        <tr key={i}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                {i + 1}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                {bodyItem.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                {bodyItem.designation}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                {bodyItem.contactNo}
                                            </td>
                                        </tr>
                                    )}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Table
