import React, { useEffect, useState } from 'react'
import { getDatabase, ref, child, get, onValue } from "firebase/database";
import OrderItem from './OrderItem';
import { GetSortOrder } from '../../utils/firebase';

function Orders({ shopId }) {
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);
    const [CompletedOrders, setCompletedOrders] = useState([]);

    useEffect(() => {
        loadOrders();
        loadRealTime();
    }, [])

    const loadRealTime = () => {
        const db = getDatabase();
        const starCountRef = ref(db, 'orders/' + shopId + '/is_printed');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
        });
    }

    const loadOrders = async () => {
        const dbRef = ref(getDatabase());

        get(child(dbRef, `orders/${shopId}`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const data = Object.values(snapshot.val());
                    const orders = [];
                    const completedOrders = [];
                    data.forEach((order) => {
                        if (order.is_printed) {
                            completedOrders.push(order);
                        } else {
                            orders.push(order);
                        }
                    })
                    // setOrders(data);
                    orders.sort(GetSortOrder('createdAt'))
                    setOrders(orders);
                    completedOrders.sort(GetSortOrder('createdAt'))
                    setCompletedOrders(completedOrders);
                    setLoading(false);
                } else {
                    console.log("No data available");
                    setLoading(false);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (<>
        <p className='text-center mb-4 text-xl font-bold'>Pending Orders</p>
        <div className='flex justify-center w-full'>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="text-sm text-left text-gray-500">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Contact
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Print type
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Page Choice
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Pages
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                File
                            </th>
                            <th scope="col" class="px-6 py-3">

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loading == false ?
                                <>
                                    {
                                        orders.map((orderItem) => {
                                            return (
                                                <OrderItem orderItem={orderItem} />
                                            )
                                        })
                                    }
                                </> : <>
                                </>
                        }
                        {
                            loading == false && orders.length == 0 ?
                                <>
                                    <tr>
                                        <td class="px-6 py-4 text-center" colSpan={7}>
                                            No pending orders
                                        </td>
                                    </tr>
                                </> : <>
                                </>
                        }
                    </tbody>
                </table>
            </div>

        </div>
        <p className='text-center mt-8 mb-4 text-xl font-bold'>Completed Orders</p>
        <div className='flex justify-center w-full'>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="text-sm text-left text-gray-500">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Contact
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Print type
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Page Choice
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Pages
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                File
                            </th>
                            <th scope="col" class="px-6 py-3">

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loading == false ?
                                <>
                                    {
                                        CompletedOrders.map((orderItem) => {
                                            return (
                                                <OrderItem orderItem={orderItem} />
                                            )
                                        })
                                    }
                                </> : <>
                                </>
                        }
                        {
                            loading == false && CompletedOrders.length == 0 ?
                                <>
                                    <tr>
                                        <td class="px-6 py-4 text-center" colSpan={7}>
                                            No completed orders
                                        </td>
                                    </tr>
                                </> : <>
                                </>
                        }
                    </tbody>
                </table>
            </div>

        </div>
    </>

    )
}

export default Orders
