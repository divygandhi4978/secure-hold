import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Drawer from "../adminComponents/Drawer";
import { useEffect, useState } from "react";

export default function TableDemo(props) {
  const [logged, setLogged] = useState(0);
  useEffect(() => {
    if (sessionStorage.user) {
      getPasswords();
      setLogged(1);
    }
  }, []);

  const [init_data, setInitData] = useState([]);
  const getPasswords = async () => {
    const userInfo = JSON.parse(sessionStorage.user);

    const id = userInfo.userId;

    let r = await fetch(
      `${import.meta.env.VITE_BACKEND}/crud/find-all?id=${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await r.json();

    setInitData(data);
  };

  const { activePage } = props;
  return (
    <>
      {logged == 1 && (
        <Table>
          {init_data.length === 0 && (
            <p className="text-xl p-5 font-semibold text-start">
              No data available to display. Please save new passwords first..!
            </p>
          )}
          <TableBody>
            {init_data?.map((element) => (
              <TableRow
                key={element.site}
                className="flex items-center justify-evenly sm:p-1"
              >
                <TableCell className="font-medium text-start sm:min-w-[225px] min-w-[175px]">
                  <h6>
                    <span class="bg-gray-300 p-1 rounded-sm mb-5 ">
                      {element.tags ? element.tags : "Tags"}
                    </span>
                  </h6>
                  <div className="flex-col justify-between mt-2">
                    <p className="text-[20px] py-1 text-zinc-700">
                      {element.site}{" "}
                    </p>
                    <p className="text-gray-500">{element.username}</p>
                  </div>
                </TableCell>

                <Drawer
                  activePage={activePage}
                  userData={element}
                  getPasswords={getPasswords}
                />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
}
