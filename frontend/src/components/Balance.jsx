import { useAuth } from "../context/AuthContext";

export const Balance = () => {
  const { user } = useAuth();

  const balance = Number(user?.balance ?? 0);

  return (
    <div
      className="flex flex-col sm:flex-row
      items-start sm:items-center
      justify-between
      rounded-lg
      bg-gray-300
      p-3 sm:p-4 md:p-5
      w-full
      max-w-sm sm:max-w-md
      mx-auto"
    >
      <div
        className="font-semibold
        text-base sm:text-lg
        mb-1 sm:mb-0"
      >
        Balance:
      </div>
      <div
        className=" text-lg sm:text-xl md:text-2xl
        font-bold
        text-gray-800"
      >
        ₦ {balance.toFixed(2)}
      </div>
    </div>
  );
};
