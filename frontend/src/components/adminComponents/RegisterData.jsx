import { useState } from "react";
// import SelectInput from "./selectInput";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function RegistrationForm(props) {
  const { activePage } = props;
  const [formData, setFormData] = useState({
    userId: "",
    site: "",
    username: "",
    password: "",
    notes: "",
    tags: "",
  });

  const handleChange = (e) => {
    console.log(formData);
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(sessionStorage.getItem("user"));
    console.log(user);
    setFormData({ ...formData, userId: user.userId });

    console.log("Submitted Data:", formData);

    const mixedJson = {
      userId: user.userId,
      site: formData.site,
      username: formData.username,
      password: formData.password,
      notes: formData.notes,
      tags: formData.tags,
    };
    let r = await fetch(`https://secure-hold.onrender.com/crud/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mixedJson),
    });

    console.log("done");

    activePage(0);
  };

  document.title = "Register new Password";

  return (
    <div className="max-w-lg lg:w-full mx-auto p-4 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-start">
        Register new Password
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["site", "username", "password", "notes"].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-700 capitalize text-start">
              {field}
            </label>
            <input
              type={field}
              name={field}
              value={formData[field]}
              placeholder={field == "email" ? "abc@gmail.com" : field}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        ))}

        <di className="flex justify-start items-center">
          <label className="block text-sm font-medium text-gray-700 capitalize text-start">
            Tag :{" "}
          </label>{" "}
          <div className="ml-2">
            <Select className="m-5">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    value="personal"
                    onClick={() => {
                      setFormData({ ...formData, tags: "Personal" });
                    }}
                  >
                    Personal
                  </SelectItem>
                  <SelectItem
                    value="work"
                    onClick={() => {
                      setFormData({ ...formData, tags: "Work" });
                    }}
                  >
                    Work
                  </SelectItem>
                  <SelectItem
                    value="other"
                    onClick={() => {
                      setFormData({ ...formData, tags: "Other" });
                    }}
                  >
                    Other
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* <SelectInput /> */}
          </div>
        </di>
        <button
          type="submit"
          className="w-full bg-zinc-900 text-white py-2 rounded-xl hover:bg-zinc-800 transition"
        >
          Save
        </button>
      </form>
    </div>
  );
}
