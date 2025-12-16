import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// const API_URL = import.meta.env.VITE_API_URL;

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const { user: loggedInUser } = useAuth();

  useEffect(() => {
    axios
      //   .get(`${API_URL}/api/v1/user/bulk?filter=${filter}`)
      .get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`)
      .then((response) => {
        const fetchUsers = response.data.user || [];
        const filteredUsers = loggedInUser
          ? fetchUsers.filter((u) => String(u._id) !== String(loggedInUser._id))
          : fetchUsers;

        setUsers(filteredUsers);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      });
  }, [filter, loggedInUser]);

  return (
    <>
      <div className="font-bold mt-6 text-lg">
        <hr className="w-full h-0.5 mx-auto my-1 bg-gray-500 border-0 rounded-sm md:my-4" />
        Send To :
      </div>
      <div className="mb-3">
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
          placeholder="Search Name..."
          className="w-full px-2 py-1 border rounded border-slate-300"
        ></input>
      </div>
      <div>
        {users.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </>
  );
};

function User({ user }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0] + user.lastName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-full">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center h-full">
        <Button
          onClick={(e) => {
            navigate("/send?id=" + user._id + "&name=" + user.firstName);
          }}
          label={"Send Money"}
        />
      </div>
    </div>
  );
}
