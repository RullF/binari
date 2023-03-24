import axios from "axios";
import { useEffect, useState } from "react";

export default function Admin() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);
    
    function getUsers() {

        axios.get('http://localhost:80/binari/user/').then(function(responses) {
            console.log(responses.data);
            setUsers(responses.data);
        });

    }
    
    return (
        <>
<div className=" mx-auto w-[95%] pt-16">
<h1 className="text-center text-3xl mb-10">ADMIN</h1>
  <div className="flex flex-col">
    <div className="overflow-x-auto shadow-md sm:rounded-lg ">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden ">
          <table className="min-w-full divide-gray-200 table-fixed dark:divide-gray-700">
            <thead className="bg-pink-500 text-white dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-center uppercase dark:text-gray-400"
                >
                  Nama
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-center uppercase dark:text-gray-400"
                >
                  email
                </th>

                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-center uppercase dark:text-gray-400"
                >
                  No Telpon
                </th>

                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-center uppercase dark:text-gray-400"
                >
                  Opsi
                </th>

                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-center uppercase dark:text-gray-400 overflow-x-hidden"
                >
                  pesan
                </th>


              </tr>


            </thead>


            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700 overflow-x-hidden">
                        {users.map((user, key) => 
                            <tr key={key}>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900  dark:text-white text-center">{user.nama_pengguna}</td>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900  dark:text-white text-center">{user.email}</td>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900  dark:text-white text-center">{user.no_telp}</td>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900  dark:text-white text-center">{user.option}</td>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900  dark:text-white text-center">{user.massage}</td>
                            </tr>

                        )}
                    
                    </tbody>

          </table>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}