import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const History = () => {
    const {user} = useContext(AuthContext);
    const [history, setHistory] = useState([]);
    fetch(`https://summer-camp-server-darkasfu.vercel.app/payment/${user?.email}`)
    .then(res => res.json())
    .then(data => setHistory(data))
    return (
        <div>
            <h1>Payment History</h1>
            <table className="table ">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Transition Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((item, index) => (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                {item.transactionId}
                                </td>
                                <td>{user.displayName}</td>
                                <td className="text-start">${item.email}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    );
};

export default History;