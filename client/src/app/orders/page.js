"use client"
import { fetchDataFromApi }from"@/utils/api";
import { useEffect ,useState} from "react";
const Orders=()=>{
     const [orders,setOrders]=useState([]);
useEffect(()=>{
    fetchDataFromApi('/api/orders').then(res=>{
        console.log(res.data)
        setOrders(res.data)
    });
},[]);
return(
    <>
    <div className="orderPage">
        <div className="container-fluid">
            <h1 className="hd">Orders</h1>

            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th>Total Amount</th>
                            <th>Payment Id</th>
                            <th>Date</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.length!==0 && orders?.map((order)=>{
                                return(
                                    <tr>
                                        <td>{order?.attributes?.userName}</td>
                                        <td>{order?.attributes?.phone}</td>
                                        <td>{order?.attributes?.address}</td>
                                        <td>{order?.attributes?.totalOrderAmount}</td>
                                        <td>{order?.attributes?.paymentId}</td>
                                        <td>{order?.attributes?.date}</td>
                                        <td>{order?.attributes?.email}</td>
                                    </tr>
                                )
                            })
                        }
                         
                            
                            </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
   
)
}

export default Orders;
    