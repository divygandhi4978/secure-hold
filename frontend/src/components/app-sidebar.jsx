import * as React from "react";
import { useEffect, useState } from "react";
import { GalleryVerticalEnd, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";

export function AppSidebar({ ...props }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("user") == null) {
      navigate("/login");
    } else {
    }
    time(JSON.parse(sessionStorage.getItem("lastLog")));
  }, []);

  const user = JSON.parse(sessionStorage.getItem("user"));

  const [log, setLog] = useState("");

  const time = (log) => {
    if (!log) return;
    const utcDate = new Date(log.date);

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

    setLog(`${month}/${date}/${year}      ${hour}:${formattedMin}`);
  };

  const handelLogout = () => {
    sessionStorage.clear();

    navigate("/logged-Out");
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <div className="flex items-center gap-2">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold text-lg">{user?.name}</span>
                  <span>{user?.email}</span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <a href="#">
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-bold text-start mt-1 text-xl">
                  Last session
                </span>
                <span className="text-start mt-1 font-semibold">
                  {log ? log : "No Login history available"}
                </span>
              </div>
            </a>
            <div className="flex flex-col gap-0.5 leading-none mt-3">
              <hr />
              <Button
                onClick={() => {
                  handelLogout();
                }}
              >
                LogOut
              </Button>
              <hr />
            </div>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
