import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState({ message: "", type: "" });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
    e.preventDefault();

    if (username && password) {
        setAlert({ message: "تم تسجيل الدخول بنجاح ✅", type: "success" });
        setTimeout(() => {
        navigate("/admin"); 
        setAlert({ message: "", type: "" });
        }, 500);
    } else {
        setAlert({ message: "يرجى إدخال اسم المستخدم وكلمة المرور ❗", type: "error" });

        setTimeout(() => {
        setAlert({ message: "", type: "" });
        }, 3000);
    }
};

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-[rgb(31,171,232)] to-white">
        <div className=" bg-opacity-10 p-10 rounded-xl shadow-lg w-full max-w-sm">
            <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 rounded-full from-[rgb(31,171,232)] flex items-center justify-center">
                <svg
                className="w-15 h-15 bg-white text-[rgb(31,171,232)]  rounded-full p-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                >
                <path d="M10 10a4 4 0 100-8 4 4 0 000 8zM2 18a8 8 0 0116 0H2z" />
                </svg>
            </div>
            </div>

            {alert.message && (
                <div
                    className={`mb-4 p-3 rounded text-sm font-medium ${
                    alert.type === "success"
                        ? "bg-green-100 text-green-800 border border-green-300"
                        : "bg-red-100 text-red-800 border border-red-300"
                    }`}
                >
                    {alert.message}
                </div>
            )}

            <form className="space-y-4"onSubmit={handleSubmit}>
            <div>
                {/* <label className="block text-white font-semibold mb-1">اسم المستخدم</label> */}
                <input
                    type="text"
                    className="w-full px-4 py-2 rounded text-[rgb(31,171,232)] bg-white focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="أدخل اسم المستخدم"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                {/* <label className="block text-white font-semibold mb-1">كلمة السر</label> */}
                <input
                    type="password"
                    className="w-full px-4 py-2 rounded text-[rgb(31,171,232)] bg-white focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="أدخل كلمة المرور"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="flex items-center justify-between text-sm text-white">
                <label className="flex items-center">
                <input
                    type="checkbox"
                    className="form-checkbox text-[rgb(31,171,232)] ml-2"
                />
                تذكرني
                </label>
            </div>
            <button
                type="submit"
                className="w-full bg-[rgb(31,171,232)] hover:bg-white hover:text-[rgb(31,171,232)] text-white font-bold py-2 rounded-lg shadow-lg"
            >
                Log in
            </button>
            </form>
        </div>
        </div>
    );
}

export default  Login;