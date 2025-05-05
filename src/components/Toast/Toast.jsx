"use client";
import { useEffect, useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

const Toast = ({ type = "success", message = "", onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose?.();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-18 left-1/2 transform -translate-x-1/2 z-[9999] px-6 py-3 w-max rounded-lg text-white shadow-lg transition-all duration-500 ease-in-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
        ${type === "success" ? "bg-green-600" : "bg-red-600"}
      `}
    >
      <div className="flex items-center gap-2 text-sm font-medium">
        {type === "success" ? <CheckCircle size={18} /> : <XCircle size={18} />}
        {message}
      </div>
    </div>
  );
};

export default Toast;
