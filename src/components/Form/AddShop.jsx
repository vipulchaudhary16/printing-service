import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { set, ref } from "firebase/database";
import { storage, db } from "../../utils/firebase";
import {
    ref as storeRef,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import LoadingBar from "react-top-loading-bar";


export default function AddShop() {
    const [authCred, setAuthCred] = useState()
    const [files, setFiles] = useState()
    const [progress, setProgress] = useState(0);
    const [shop, setShop] = useState({
        name: '',
        address: '',
        Id: '',
        img: '',
        phoneNo: ''
    })
    const navigate = useNavigate()

    const createAuthUserWithEmailAndPassword = async (email, password) => {
        const auth = getAuth();
        if (!email || !password) return
        await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            shop.Id = userCredential.user.uid;
            set(ref(db, `shops/${shop.Id}`), shop).then(() => {

                alert("Your shop has been added successfully")
                navigate('/login')
            }
            ).catch((err) => {
                console.log(err)
            });
        }).catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage)
        });
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
                        shop.img = downloadURL
                    })
                    .finally(() => {
                        createAuthUserWithEmailAndPassword(authCred.email, authCred.password)
                    });
            }
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        uploadToStorage(files[0])
    }

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
                        <div className="w-full px-4">
                            <div
                                className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10  sm:px-12 md:px-[60px]"
                            >
                                <form method='post' onSubmit={(e) => handleSubmit(e)}>
                                    <div className="mb-6">
                                        <input
                                            type="text"
                                            placeholder="Shop Name"
                                            required
                                            className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                            onChange={(e) => setShop({
                                                ...shop, name: e.target.value
                                            })}
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            required
                                            className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                            onChange={(e) => {
                                                setShop({
                                                    ...shop, email: e.target.value
                                                })
                                                setAuthCred(
                                                    {
                                                        ...authCred, email: e.target.value
                                                    }
                                                )
                                            }}
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            required
                                            className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                            onChange={(e) =>
                                                setAuthCred({
                                                    ...authCred, password: e.target.value
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="text"
                                            placeholder="Shop Address"
                                            required
                                            className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                            onChange={(e) => setShop({
                                                ...shop, address: e.target.value
                                            })}
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="text"
                                            placeholder="Phone Number"
                                            required
                                            className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                            onChange={(e) => setShop({
                                                ...shop, phoneNo: e.target.value
                                            })}
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <div className="mb-2">
                                            <label htmlFor="files" >Choose picture representing your shop</label>
                                        </div>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            name="files"
                                            required
                                            id="files"
                                            placeholder="Select files to be printed"
                                            onChange={(e) => setFiles(e.target.files)}
                                        />
                                    </div>

                                    <div className="mb-10">
                                        <button type='submit' className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Add
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div>
    )
}
