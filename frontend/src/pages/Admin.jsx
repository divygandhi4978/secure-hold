import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import DataTabel from "../components/adminComponents/DataTabel";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import RegisterData from "../components/adminComponents/RegisterData";
import { useNavigate } from "react-router-dom";

export default function Admin(props) {
  const { setNav } = props;

  const navigate = useNavigate();
  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      setNav(0);
    } else {
      navigate("/login");
    }
  }, []);

  const [active, setActive] = useState(0);

  const activePage = (data) => {
    setActive(data);
  };

  document.title = "Secured Data of User";

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className=" border-b px-4 sticky top-0 bg-white z-30 ">
          <div className="flex h-16  shrink-0 items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <p>Secured Access.</p>
          </div>
        </header>
        <div className="flex justify-start gap-4 h-12 mt-3">
          <div
            onClick={() => {
              activePage(1);
            }}
          >
            <Button>New</Button>
          </div>
          <div
            onClick={() => {
              activePage(0);
            }}
          >
            <Button>Show</Button>
          </div>
        </div>

        <div className="flex justify-center items-center w-full">
          {active == 0 && (
            <div className="bg-zinc-100  w-full rounded-sm flex items-center">
              <DataTabel activePage={activePage} className="sm:p-16 mt-10" />
            </div>
          )}
          {active == 1 && <RegisterData activePage={activePage} />}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
