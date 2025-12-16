
export const Spending = ({value}) =>{
    return (
        <div className="flex flex-row bg-gray-300 rounded p-4">
            <div className="font-bold text-lg ">
                Spending: 
            </div>
            <div className="pl-2 m-1">
               ௹ {value}
            </div>
        </div>
    )
}