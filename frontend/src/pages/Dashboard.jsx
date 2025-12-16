import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Spending } from "../components/Spending";
import { Users } from "../components/Users";

export const Dashboard = () => {
  return (
    <div>
      <Appbar />
      <div className="m-6">
        <div className="flex flex-row justify-between">
          <Balance value={"10,000"} />
          <Spending value={"2456"} />
        </div>
        <div>
          <Users />
        </div>
      </div>
    </div>
  );
};
