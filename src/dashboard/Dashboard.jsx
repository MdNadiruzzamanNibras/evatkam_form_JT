import { useEffect, useState } from "react";


const Dashboard = () => {
    const [datas, setdatas] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
        .then(data=> setdatas(data))
    }, [])
    console.log(datas);
    return (
        <div>
            <p>this dashboard</p>
        </div>
    );
};

export default Dashboard;