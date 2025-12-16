import { Logo } from "./Logo";
import notifyIcon from "../assets/bell.png"

export const Appbar = () => {
  
  return (
    <div className="shadow h-14 flex justify-between">
      <div className="flex ml-4 w-32 h-10 p-4 pt-7">
        <Logo/>
      </div>
      <div className="flex">
            <img src={notifyIcon} alt="notificaiton" className="h-4 w-4 mr-4 mt-5" />
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
            <div className="flex flex-col justify-center h-full text-xl">
                U
            </div>
        </div>
      </div>
    </div>
  );
};
