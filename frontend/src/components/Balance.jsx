
export const Balance = ({value}) => {
    return <div className="flex rounded bg-gray-300 p-4">
        <div className="font-bold text-lg">
            Balance:
        </div>
        <div className="pl-2">
            ௹ {value}
        </div>
    </div>
}