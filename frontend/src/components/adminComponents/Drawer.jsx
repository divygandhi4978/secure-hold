import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Copy,
  Pencil,
  Share2,
  Key,
  Globe,
  Trash2,
  FileText,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import UpdataForm from "./UpdateForm";

export default function DrawerDemo(props) {
  const [user, setUser] = useState({});
  const { getPasswords } = props;

  const getSingle = () => {
    const { userData } = props;
    setUser(userData);
  };

  const getStrength = () => {
    return "Strong";
  };

  const [active, setActive] = useState(1);
  const activePage = (data) => {
    setActive(data);
  };

  function copyPass() {
    var copyText = document.getElementById("pass").innerHTML;
    navigator.clipboard.writeText(copyText);
    alert("Password Copied.");
  }

  const siteNameTitle = user.site;
  document.title = `Password for ${siteNameTitle}`;

  const deleteEvent = async () => {
    document.title = `Confirm Delete?`;
    if (confirm("Confirm ?")) {
      console.log(user);
      await fetch(`http://localhost:3000/crud/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
    }

    getPasswords();
    document.title = `All Passwords`;
  };

  async function sharePass() {
    if (!navigator.share) {
      alert("Sharing not supported on this browser.");
      return;
    }

    try {
      await navigator.share({
        title: `Password for *${user.site}*`,
        text: ` *Credentials* : 🔐
*Website* : ${user.site}
*Username* : ${user.username}
*Password* : ${user.password}
*Notes* : ${user.notes || "None"}`,
      });

      console.log("Image shared successfully!");
    } catch (error) {
      console.error("Error sharing image:", error);
    }
  }

  const time = (log) => {
    if (!log) return;
    const utcDate = new Date(log);

    const indiaTimeString = utcDate.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    const indiaDate = new Date(indiaTimeString);

    const date = indiaDate.getDate();
    const month = indiaDate.getMonth() + 1;
    const year = indiaDate.getFullYear();

    const hour = indiaDate.getHours();
    const min = indiaDate.getMinutes();
    const formattedMin = min < 10 ? `0${min}` : min;

    return `${month}/${date}/${year}      ${hour}:${formattedMin}`;
  };

  const date = time(user.date);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          onClick={() => {
            getSingle();
          }}
        >
          More.
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          {active == 1 && (
            <div className="p-6 max-w-xl mx-auto">
              <Card>
                <CardContent className="space-y-4 p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h1 className="text-xl font-bold">{user.username}</h1>
                      <p className="text-sm text-gray-500">{user.site}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Key className="w-4 h-4" />
                    <p className="font-medium">Passwords</p>
                    <div
                      className="flex-1 text-right text-xl tracking-widest"
                      id="pass"
                    >
                      {user.password}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <p className="text-sm">
                      {getStrength()}Strong, Weak, Vulnerable
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4" />
                    <p className="text-sm">Website :</p>
                    <p className="text-sm text-blue-600">{user.site}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4" />
                    <p className="text-sm">{user.notes}</p>
                  </div>

                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <p>Last Modified</p>
                    <p>{date}</p>
                  </div>

                  <div className="flex space-x-2 ">
                    <Button
                      className="w-1/4"
                      size="icon"
                      variant="outline"
                      onClick={() => {
                        activePage(0);
                      }}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      className=" w-1/4"
                      onClick={() => {
                        sharePass();
                      }}
                      variant="outline"
                    >
                      <Share2 className="w-4 h-4 " />
                    </Button>
                    <Button
                      variant="outline"
                      className="flex items-center space-x-2 w-1/4"
                      // useRef={useRef}
                      onClick={() => {
                        copyPass();
                      }}
                    >
                      <Copy className=" h-4" />
                    </Button>
                    <Button
                      onClick={() => {
                        deleteEvent();
                      }}
                      variant="ghost"
                      className="flex items-center space-x-2 bg-red-600/60 hover:bg-red-500 w-1/4"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {active == 0 && (
            <UpdataForm
              setActive={setActive}
              user={user}
              getPassword={getPasswords}
            />
          )}

          <DrawerFooter className="hidden">
            <DrawerClose asChild>
              <Button
                variant="outline"
                onClick={() => {
                  setActive(1);
                }}
              >
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
