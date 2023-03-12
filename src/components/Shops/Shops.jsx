import React, { useState, useEffect } from "react";
import Card from "../Card";

import { getDatabase, ref, child, get } from "firebase/database";
import Loader from "../Loader";
import { useNavigate } from "react-router-dom";

export default function Shops() {
    const [loading, setLoading] = useState(true);

    const [shops, setShops] = useState([]);

    useEffect(() => {
        loadShops();
    }, []);

    const loadShops = async () => {
        const dbRef = ref(getDatabase());

        get(child(dbRef, `shops/`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const data = Object.values(snapshot.val());
                    setShops(data);
                    setLoading(false);
                } else {
                    console.log("No data available");
                    setLoading(false);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            <h2 class="text-center mb-4 mt-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:">Available stores</h2>
            {loading == false ? (
                <div id="shops" className=" flex flex-wrap m-6 justify-center">
                    {shops.map((shop) => {
                        return <>
                            <Card shop={shop} />
                        </>
                    })}
                </div>
            ) : (
                <Loader />
            )}
            {
                loading == false && shops.length == 0 ? (
                    <div className="flex justify-center">
                        <h1 className="text-2xl font-bold">No Shops Found</h1>
                    </div>
                ) : null
            }
        </>

    );
}
