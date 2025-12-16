import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Logo } from "../components/Logo";
import { Appbar } from "../components/Appbar";
import { QuoteBox } from "../components/QuoteBox";

const API_URL = import.meta.env.VITE_API_URL;

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-slate-200 justify-center">
      <header className="sticky top-0 z-50 flex  ml-4 w-32 h-10 p-6">
        <Logo />
      </header>
      <div className="bg-slate-200 h-screen flex justify-center">
        <div className="flex flex-row justify-center">
          <div className="basis-1/3 pt-25 pr-40 ">
          <div className="rounded-lg  bg-white w-90 text-center p-4 h-max px-6">
            <Heading label={"Sign up"} />
            <SubHeading label={"Enter your information to create an account"} />
            <InputBox
              onChange={(value) => setFirstName(value)}
              label={"First Name"}
              placeholder={"Prabhat"}
            />
            <InputBox
              onChange={(value) => setLastName(value)}
              label={"Last Name"}
              placeholder={"Teotia"}
            />
            <InputBox
              onChange={(value) => setUsername(value)}
              label={"Email"}
              placeholder={"prabhat@gmail.com"}
            />
            <InputBox
              onChange={(value) => setPassword(value)}
              label={"Password"}
            />
            <div className="pt-4">
              <Button
                onClick={async () => {
                  const response = await axios.post("http://localhost:3000/api/v1/user/signup",
                    // `${API_URL}/api/v1/user/signup`,
                    {
                      firstName,
                      lastName,
                      username,
                      password,
                    }
                  );
                  localStorage.setItem("token", response.data.token);
                  navigate("/dashboard");
                }}
                label={"Sign up"}
              />
            </div>
            <BottomWarning
              label={"Already have an account"}
              buttonText={"Sign in"}
              to={"/signin"}
            />
          </div>
          </div>
          <div className="basis-2/3 pl-25">
            <QuoteBox />
          </div>
        </div>
      </div>
    </div>
  );
};
