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
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function LoginForm({ className, ...props }) {
  const toggleLoading = props.toggleLoading;

  document.title = "Login Page";
  const navigate = useNavigate();

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      navigate("/admin");
    }
    setCheckingSession(false);
  }, []);

  const [checkingSession, setCheckingSession] = useState(true);

  const [form, setForm] = useState({ email: "", password: "" });

  const userId = () => {
    let d = form.email.split("@")[0];
    return d;
  };
  const [error, setError] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();

    //Verify user details
    console.log(form);

    toggleLoading(1);
    let res = await fetch(`${import.meta.env.VITE_BACKEND}/auth/check`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    
    let response = await res.json();
    console.log(response);
    toggleLoading(0);
    
    //Update user log if user exists
    if (response.length != 0) {
      const getLog = async () => {
        toggleLoading(1);
        const data = await fetch(
          `${import.meta.env.VITE_BACKEND}/logs/getLog?id=${userId()}`,
          {
            method: "GET",
          }
        );
        const res = await data.json();
        toggleLoading(0);
        console.log(res);
        sessionStorage.setItem("lastLog", JSON.stringify(res));
      };
      
      await getLog();
      
      toggleLoading(1);
      await fetch(`${import.meta.env.VITE_BACKEND}/logs/setLog`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: userId() }),
      });
      console.log("log updated");
      //setUser session in local storage
      console.log("session updated");
      //Have to store obj as string
      sessionStorage.setItem("user", JSON.stringify(response));
      toggleLoading(0);
      
      navigate("/admin");
    } else {
      setError("wrongPass");
      setTimeout(() => {
        setError("");
        navigate("/login");
      }, 3000);
    }
  };

  if (checkingSession) return null;
  return (
    <>
      {error == "wrongPass" && (
        <div className="mt-20">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">
                Incorrect Password. Try again
              </CardTitle>

              <CardTitle className="text-xl">User doesn't exists </CardTitle>
            </CardHeader>
          </Card>
        </div>
      )}

      {error != "wrongPass" && (
        <div className={cn("flex flex-col gap-", className)} {...props}>
          <div className="w-full flex justify-center sm:mt-24 max-sm:mt-20">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Login</CardTitle>
                  <CardDescription>
                    Enter your email below to login to your account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    name="login"
                    onSubmit={(e) => {
                      handelSubmit(e);
                    }}
                  >
                    <div className="flex flex-col gap-6">
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="m@example.com"
                          value={form.email}
                          onChange={(e) => {
                            setForm({ ...form, email: e.target.value });
                          }}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <div className="flex items-center">
                          <Label htmlFor="password">Password</Label>
                        </div>
                        <Input
                          id="password"
                          type="text"
                          value={form.password}
                          onChange={(e) => {
                            setForm({ ...form, password: e.target.value });
                          }}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Login
                      </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                      Don&apos;t have an account?{" "}
                      <div
                        type="button"
                        onClick={() => {
                          navigate("/signup");
                        }}
                        className="w-full cursor-pointer"
                      >
                        SignUp
                      </div>
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
