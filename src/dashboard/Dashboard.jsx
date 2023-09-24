import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css"
const Dashboard = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users'); // Replace with your API endpoint
        setDatas(response.data);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
         <div className="max-w-7xl mx-auto mt-20">
            <button
          className=" ml-24 my-7 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-800 text-lg hover:font-bold "
         
        >
          Add Data
        </button>
           
            <div >

 
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
                        <tr> 
                            
        <th className="text-xl font-bold">Name</th> 
        <th className="text-xl font-bold">Username</th> 
        <th className="text-xl font-bold">Email</th> 
        <th className="text-xl font-bold">Address</th> 
        <th className="text-xl font-bold">Phone</th> 
        <th className="text-xl font-bold">Website</th>
      </tr>
    </thead> 
    <tbody className="text-center">
                        {
                            datas && datas?.map((data)=>
                                <tr key={data.id}>
        
        <td className="px-2 text-lg">{data.name}</td> 
        <td className="px-2 text-lg">{data.username}</td> 
        <td className="px-2 text-lg">{data.email }</td> 
        <td className="px-2 text-lg">{data?.address?.suite}{data?.address?.street} <br /> { data?.address?.city}</td> 
        <td className="px-2 text-lg">{ data?.phone}</td> 
        <td className="px-2 text-lg">{ data?.website}</td>
      </tr>
                            )
      }
      
    </tbody> 
    
                </table>
                
            </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
