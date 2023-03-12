import React, { useEffect, useState } from 'react'
import { getDatabase, ref, child, get } from "firebase/database";
import Loader from "../Loader";
import Card from '../Card';
import Orders from './Orders';

function DashBoard() {
    const [currentUser, setCurrentUser] = useState(
        localStorage.getItem('user')
    )
    const [loading, setLoading] = useState(true);
    const [shop, setShop] = useState({});

    useEffect(() => {
        loadShopData()
    }, [])

    const loadShopData = async () => {
        const dbRef = ref(getDatabase());

        get(child(dbRef, `shops/${currentUser}`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    setShop(data);
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

    return (
        <div>
            {loading == false ? (
                <>
                    <div id="shops" className="flex flex-wrap m-6">
                        <div class="w-full px-4 md:w-full">
                            <div class="overflow-hidden rounded-lg bg-white custom_card">
                                <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                                    <h3>
                                        <a
                                            href="javascript:void(0)"
                                            class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                                        >
                                            {shop.name}
                                        </a>
                                    </h3>
                                    <p class="text-body-color mb-7 text-base leading-relaxed">
                                        {shop.address}
                                    </p>
                                    <p class="text-body-color mb-7 text-base leading-relaxed">
                                        {shop.phoneNo}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Orders shopId={currentUser} />
                </>

            ) : (
                <Loader />
            )}
        </div>
    )
}

export default DashBoard
