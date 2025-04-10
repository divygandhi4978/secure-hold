import * as React from "react";
import { useEffect, useState } from "react";
import { GalleryVerticalEnd, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

// import { SearchForm } from "@/components/search-form";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";

// This is sample data.
const userName = { name: "Divy Gandhi", email: "divygandhi4978@gmail.com" };
const sessionData = "25 January 2025";

const data = {
  navMain: [], // or provide real data here
};

// const data = {
//   navMain: [
//     {
//       title: "Manage Passwords",
//       items: [
//         {
//           title: "All",
//           url: "#",
//         },
//         {
//           title: "Favourites",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Cards",
//       items: [
//         {
//           title: "Credit Cards",
//           url: "#",
//         },
//         {
//           title: "Debit Cards",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Notes",
//       items: [
//         {
//           title: "Work ",
//           url: "#",
//         },
//         {
//           title: "Personal",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "ID Cards",
//       items: [
//         {
//           title: "Aadhar Card",
//           url: "#",
//         },
//         {
//           title: "Pan Card",
//           url: "#",
//         },
//       ],
//     },
//   ],
// };

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
        {/* <SearchForm /> */}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain?.map((item, index) => (
              <Collapsible
                key={item.title}
                defaultOpen={index === 1}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      {item.title}{" "}
                      <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                      <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={item.isActive}
                            >
                              <a href={item.url}>{item.title}</a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
            <a href="#">
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-bold text-start mt-1 text-xl">
                  Last session
                </span>
                <span className="text-start mt-1 font-semibold">{log?log:'No Login history available'}</span>
              </div>
            </a>
            <div className="flex flex-col gap-0.5 leading-none mt-5">
              <hr />
              <Button className="bg-blue-900 hover:bg-blue-950">
                {" "}
                Give Me a chai please.!
              </Button>
              <hr />
            </div>

            <div className="flex flex-col gap-0.5 leading-none mt-1">
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
