"use client";
import { Mail, Send, User, MessageSquare } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguageStore } from "@/app/store";
import Toast from "@/components/Toast/Toast";

const Form = () => {
  const { language } = useLanguageStore();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = nameRef.current?.value.trim();
    const email = emailRef.current?.value.trim();
    const message = messageRef.current?.value.trim();

    if (!name || !email || !message) {
      setStatus({ type: "error", message: "Completa todos los campos." });
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: "success", message: "Mensaje enviado con éxito." });
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
      } else {
        setStatus({ type: "error", message: data.error || "Error al enviar el mensaje." });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "Error al conectar con el servidor." });
    }
  };

  return (
    <>
      {status && (
        <Toast
          type={status.type}
          message={status.message}
          onClose={() => setStatus(null)}
        />
      )}

      <form
        onSubmit={handleSubmit}
        className="relative bg-[#1e1e2ecc] p-10 rounded-2xl border border-[#80808033] shadow-[0_10px_30px] shadow-[#0000004d] min-w-[860px] max-lg:min-w-[680px] max-md:min-w-[95%] max-sm:p-4 transition-all max-md:mt-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              ref={nameRef}
              type="text"
              placeholder={language === "es" ? "Nombre" : "Name"}
              className="w-full py-4 px-12 bg-[#1e1e2e80] border border-[#80808033] rounded-lg text-white transition duration-300 focus:outline-0 focus:border-[#9333ea] focus:shadow-[0_0_10px_#9333ea80]"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              ref={emailRef}
              type="email"
              placeholder="Email"
              className="w-full py-4 px-12 bg-[#1e1e2e80] border border-[#80808033] rounded-lg text-white transition duration-300 focus:outline-0 focus:border-[#9333ea] focus:shadow-[0_0_10px_#9333ea80]"
            />
          </div>
        </div>

        <div className="relative mb-6">
          <MessageSquare className="absolute left-3 top-5 text-gray-500" />
          <textarea
            ref={messageRef}
            placeholder={language === "es" ? "Mensaje" : "Message"}
            rows={5}
            className="w-full py-4 px-12 bg-[#1e1e2e80] border border-[#80808033] min-h-20 max-h-56 rounded-lg text-white transition duration-300 focus:outline-0 focus:border-[#9333ea] focus:shadow-[0_0_10px_#9333ea80]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full p-4 border-none rounded-lg font-bold cursor-pointer outline-none text-white bg-linear-to-r from-[#06b6d4] to-[#9333ea]"
        >
          <Send className="inline-block mr-2" />
          {language === "es" ? "Enviar" : "Send"}
        </button>
      </form>
    </>
  );
};

export default Form;
