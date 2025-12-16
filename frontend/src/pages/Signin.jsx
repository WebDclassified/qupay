import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { Logo } from "../components/Logo";
import { QuoteBox } from "../components/QuoteBox";
import { SubHeading } from "../components/SubHeading";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
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
          <div className="basis-1/3  pt-25 pr-40">
            <div className="bg-white rounded-lg shadow-md w-90 max-w-sm p-4 text-center px-6">
              <Heading label="Sign in" />
              <SubHeading label="Access your Qupay account" />
              <InputBox
                label="Email"
                placeholder="prabhat@gmail.com"
                onChange={setUsername}
              />
              <InputBox label="Password" onChange={setPassword} />

              <div className="pt-4">
                <Button
                  label="Sign in"
                  onClick={async () => {
                    const res = await axios.post("http://localhost:3000/api/v1/user/signin",
                      // `${API_URL}/api/v1/user/signin`,
                      {
                        username,
                        password,
                      }
                    );
                    localStorage.setItem("token", res.data.token);
                    navigate("/dashboard");
                  }}
                />
              </div>

              <BottomWarning
                label="Don't have an account?"
                buttonText="Sign up"
                to="/signup"
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
