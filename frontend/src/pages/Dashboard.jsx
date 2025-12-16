import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Saving } from "../components/Saving";
import { Spending } from "../components/Spending";
import { Users } from "../components/Users";

export const Dashboard = () => {
  return (
    <div>
      <Appbar />
      <div className="m-6">
        <div className="flex flex-row justify-between">
          <Balance  />
          <Spending value={"0.00"} />
          <Saving value={"0.00"} />
        </div>
        <div>
          <Users />
        </div>
      </div>
    </div>
  );
};
