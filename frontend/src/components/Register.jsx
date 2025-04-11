import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from './Loader'

export default function LoginForm({ className, ...props }) {
  document.title = "SignUp Page";

  // const toggleLoading = props.toggleLoading;

  const [loading, isLoading] = useState(0);

  const toggleLoading = () => {
    if (loading) {
      console.log(loading);
      isLoading(0);
    } else {
      console.log(loading);
      isLoading(1);
    }
  };

  const navigate = useNavigate();

  const [error, setError] = useState("");
  const userId = () => {
    let d = form.email.split("@")[0];
    return d;
  };

  const handellogin = (e) => {
    navigate("/login");
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (form.pass != form.repass || form.verify != "GECG28") {
      setError("err");
    } else {
      setError("");

      toggleLoading();
      let r = await fetch(`${import.meta.env.VITE_BACKEND}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId(),
          name: form.name,
          email: form.email,
          password: form.pass,
        }),
      });

      const response = await r.json();
      toggleLoading();

      console.log(response);

      //Update user log if user exists
      if (response.length === 0) {
        setError("registered");

        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        await fetch(`${import.meta.env.VITE_BACKEND}/logs/setLog`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: response.userId }),
        });
        console.log("log updated");

        //setUser session in local storage
        console.log("session updated");
        //Have to store obj as string
        sessionStorage.setItem("user", JSON.stringify(response));

        console.log("in else");

        navigate("/admin");
      }
    }
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    pass: "",
    repass: "",
    verify: "",
  });

  document.title = "Register Here";

  return (
    <>
      {loading && <Loader className="sm:mt-28" />}

      {!loading && error == "registered" && (
        <div className="mt-10">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">
                User is already Registered. Please login to access passwords.!
              </CardTitle>
            </CardHeader>
          </Card>
        </div>
      )}

      {!loading && error != "registered" && (
        <div className={cn("flex flex-col gap-", className)} {...props}>
          <div className="flex justify-center sm:mt-24 max-sm:mt-20 mb-10">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Register Yourself</CardTitle>
                  <CardDescription>
                    Enter your details below to get registered.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form name="f1">
                    <div className="flex flex-col gap-3">
                      <div className="grid gap-1">
                        <div className="flex items-center">
                          <Label htmlFor="Name">Name</Label>
                        </div>
                        <Input
                          id="name"
                          type="text"
                          value={form.name}
                          onChange={(e) => {
                            setForm({ ...form, name: e.target.value });
                          }}
                          placeholder="Rohit Sharma"
                          required
                        />
                      </div>

                      <div className="grid gap-1">
                        <div className="flex items-center">
                          <Label htmlFor="Name">Email-Id</Label>
                        </div>
                        <Input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={(e) => {
                            setForm({ ...form, email: e.target.value });
                          }}
                          placeholder="abc@gmail.com"
                          required
                        />
                      </div>

                      <div className="grid gap-1">
                        <div className="flex items-center">
                          <Label htmlFor="password">Password</Label>
                        </div>
                        <Input
                          id="password"
                          type="password"
                          value={form.pass}
                          onChange={(e) => {
                            setForm({ ...form, pass: e.target.value });
                          }}
                          required
                        />
                      </div>
                      <div className="grid gap-1 ">
                        <div className="flex items-center">
                          <Label htmlFor="password">Re-Enter Password</Label>
                        </div>
                        <Input
                          id="passwordCheck"
                          value={form.repass}
                          onChange={(e) => {
                            setForm({ ...form, repass: e.target.value });
                          }}
                          type="password"
                          required
                        />
                      </div>

                      <div className="grid gap-1">
                        <div className="flex items-center">
                          <Label htmlFor="Name">Verification Code</Label>
                        </div>
                        <Input
                          id="text1"
                          value={form.verify}
                          onChange={(e) => {
                            setForm({ ...form, verify: e.target.value });
                          }}
                          type="text"
                          placeholder="Verification Code"
                          required
                        />
                      </div>

                      {error == "err" && (
                        <h1 className="w-full">
                          Password mismatched or verification code is
                          incorrect..!
                        </h1>
                      )}
                      <Button
                        type="submit"
                        onClick={(e) => {
                          handelSubmit(e);
                        }}
                        className="w-full sm:mt-5"
                      >
                        Register
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
