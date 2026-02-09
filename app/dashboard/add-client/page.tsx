"use client";

import react from "react";
import { addDoc , collection , serverTimestamp } from "firebase/firestore";
import { auth , db } from "@/app/lib/firebase";
import { useRouter } from "next/navigation";

export default function AddClient(){
    const[name , setName] = react.useState("");
    const[ phone , setPhone] = react.useState("");
    const [ monthlyfee , setMonthlyFee] = react.useState("");
    const router = useRouter();

    const saveClient = async () => {
        if ( !name || !phone || !monthlyfee ) {
            alert("Please fill in all fields");
            return;
        }

        if (!auth.currentUser){
            alert("User not authenticated");
            return;
        }

        try{
            await addDoc(collection(db , "clients") , {
                name,
                phone,
                monthlyfee :Number(monthlyfee),
                paymentStatus : "panding",
                createdAt : serverTimestamp(),
                
            });
            alert("Client added successfully");
            router.push("/dashboard");
        }
        catch  (error: any ){
            alert("Error adding client: " + error.message);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-6">Add New Client</h2>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                    className="border p-2 w-full mb-3"
                    placeholder="Client Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Phone</label>
                <input
                    className="border p-2 w-full mb-3"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Monthly Fee</label>
                <input
                    className="border p-2 w-full mb-3"
                    placeholder="Monthly Fee"
                    value={monthlyfee}
                    onChange={(e) => setMonthlyFee(e.target.value)}
                />
            </div>
            <button
                onClick={saveClient}
                className="bg-blue-500 text-white p-2 w-full rounded"
            >
                Add Client
            </button>
        </div>
    );
}
