import React, { useState } from 'react'
import { set, ref } from "firebase/database";
import { storage, db } from "../../utils/firebase";
import {
    ref as storeRef,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import { useParams } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";


export default function PrintForm() {
    const { id } = useParams();
    const [files, setFiles] = useState()
    const [order, setOrder] = useState({
        shop_Id: id,
        is_paid: false,
        is_printed: false,
    })
    const [page, setPage] = useState()
    const [progress, setProgress] = useState(0);

    const countPrice = () => {
        const printPage = page.to - page.from + 1
        console.log(printPage)
        let price = 0;
        if (order.type == 'color') {
            console.log("color xerox ke pese")
            price = 7 * printPage
        } else {
            console.log("black and white ke pese")
            if (order.choice == 'one-side') {
                price = 2 * printPage
            } else {
                price = 2 * (printPage / 2)
            }
        }
        return price
    }

    const uploadToStorage = (file) => {
        const imageStoreRef = storeRef(
            storage,
            `files/${file.name}_${Math.random().toString(16).slice(2)}`
        );

        const uploadTask = uploadBytesResumable(imageStoreRef, file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress);
            },
            (error) => {
                alert(error.message);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((downloadURL) => {
                        order.file = downloadURL
                    })
                    .finally(() => {
                        const price = countPrice();
                        order.price = price
                        order.print_page_range = page.from + ' - ' + page.to
                        order.createdAt = new Date().toISOString()
                        var doc_id = "id" + Math.random().toString(16).slice(2);
                        order.id = doc_id
                        console.log(order)
                        set(ref(db, `orders/${id}/${doc_id}`), order).then(() =>
                            alert("Order Placed successfully, You wll get sms once your print is ready, You need to pay Rs. " + countPrice() + " at the shop")
                        ).catch((err) => {
                            console.log(err)
                        });
                    });
            }
        );
        console.log("price", countPrice());
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (files == null) {
            alert("Please select image");
            return
        }
        if (page.from > page.to) {
            alert("Please enter valid page range")
            return
        }
        let temp = Object.values(files)
        temp.forEach(file => {
            uploadToStorage(file)
        })
    };

    return (
        <div>
            <LoadingBar
                color="#f11946"
                height={10}
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <section className="m-4">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 ">
                            <div
                                className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10  sm:px-12 md:px-[60px] custom_card"
                            >
                                <form method='post' onSubmit={(e) => handleSubmit(e)}>
                                    <div className="mb-6">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            required
                                            className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                            onChange={(e) => setOrder({ ...order, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="text"
                                            placeholder="Mobile No."
                                            required
                                            className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                            onChange={(e) => setOrder({ ...order, contactNo: e.target.value })}
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <p className=''> Enter print page range  here eg. 1 - 9</p>
                                        <br />
                                        <input
                                            type="number"
                                            required
                                            className="bordder-[#E9EDF4] w-1/3 rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none mx-2"
                                            onChange={(e) => setPage({ ...page, from: e.target.value })}
                                        />
                                        <input
                                            type="number"
                                            required
                                            className="bordder-[#E9EDF4] w-1/3 rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none mx-2"
                                            onChange={(e) => setPage({ ...page, to: e.target.value })}
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <div className="mb-2">
                                            <label htmlFor="files" >Choose files to print</label>
                                        </div>
                                        <input
                                            type="file"
                                            accept="application/pdf"
                                            name="files"
                                            required
                                            id="files"
                                            multiple
                                            placeholder="Select files to be printed"
                                            onChange={(e) => setFiles(e.target.files)}
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <p className='mb-2'>One side or Both side?</p>
                                        <span className="m-2">
                                            <input
                                                type='radio'
                                                value="both-side"
                                                name='choice'
                                                required
                                                id='both'
                                                onChange={(e) => setOrder({ ...order, choice: e.target.value })}
                                            />
                                            <label htmlFor="both">Both side</label>
                                        </span>
                                        <span className="m-2">
                                            <input
                                                type="radio"
                                                value="one-side"
                                                id='one-side'
                                                required
                                                onChange={(e) => setOrder({ ...order, choice: e.target.value })}
                                                name='choice' />
                                            <label htmlFor="one-side">One Side</label>
                                        </span>
                                    </div>

                                    <div className="mb-6">
                                        <p className='mb-2'>Colored print or just black-white</p>
                                        <span className="m-2">
                                            <input
                                                type='radio'
                                                value="black-white"
                                                name='type'
                                                id='black-white'
                                                required
                                                onChange={(e) => setOrder({ ...order, type: e.target.value })}
                                            />
                                            <label htmlFor="black-white">Black white</label>
                                        </span>
                                        <span className="m-2">
                                            <input
                                                type="radio"
                                                value="color"
                                                id='color'
                                                required
                                                onChange={(e) => setOrder({ ...order, type: e.target.value })}
                                                name='type' />
                                            <label htmlFor="color">Colored</label>
                                        </span>
                                    </div>
                                    <div className="mb-10">
                                        <button type='submit' className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Confirm Order
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
