import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm(props) {
  const { setActive, user } = props;

  const [formData, setFormData] = useState({
    userId: "",
    site: "",
    username: "",
    password: "",
    notes: "",
    tags: "",
  });

  const { getPassword } = props;

  useEffect(() => {
    setFormData({
      userId: user.userId,
      site: user.site,
      username: user.username,
      password: user.password,
      notes: user.notes,
      tags: user.tags,
    });
    console.log(formData);
    console.log(user);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(user, formData);
    await fetch(`http://localhost:3000/crud/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ oldJson: {...user}, newJson: { ...formData } }),
    });

    console.log("updated");
    getPassword();
    setActive(1);

    navigate("/admin");
  };

  return (
    <div className="max-w-lg lg:w-full mx-auto p-4 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-start">
        Update Here{" "}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["site", "username", "password", "notes", "tags"].map((field) => (
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
