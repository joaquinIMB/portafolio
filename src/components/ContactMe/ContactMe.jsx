"use client";

import { Mail, Send, User, MessageSquare } from "lucide-react";

const ContactMe = () => {
  return (
    <section className="relative py-12 px-0 overflow-auto max-lg:mx-auto">
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center max-lg:w-full max-lg:p-0 max-sm:px-[11px]">
        <div className="max-w-3xl mx-auto text-center flex flex-col justify-around h-[170px] mb-[1rem]">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px flex-grow bg-gradient-to-r from-transparent to-cyan-500/50"></div>
            <span className="text-cyan-400 text-lg font-mono tracking-wider px-4">
              {"<Contactame />"}
            </span>
            <div className="h-px flex-grow bg-gradient-to-l from-transparent to-purple-500/50"></div>
          </div>
          <h2 className="text-6xl font-bold text-white max-sm:text-4xl">
            Hablemos de tu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              proyecto
            </span>
          </h2>
          <p
            className="text-gray-400 text-lg my-6
          "
          >
            ¿Tenés un proyecto en mente? Contactame y conversamos sobre
            cómo puedo ayudarte.
          </p>
        </div>

        <form
          className="relative bg-[#1e1e2ecc] p-10 rounded-2xl border border-[#80808033] shadow-[0 10px 30px] shadow-[
        #0000004d] min-w-[860px] max-md:min-w-[460px] max-lg:min-w-[680px] max-sm:min-w-[95%] max-sm:p-4 transition-all max-sm:mt-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Nombre"
                className="w-full py-4 px-12 bg-[#1e1e2e80] border border-[#80808033] rounded-lg text-white transition duration-300 focus:outline-0 focus:border-[#9333ea] focus:shadow-[0 0 10px 39333ea80]"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                placeholder="Email"
                className="w-full py-4 px-12 bg-[#1e1e2e80] border border-[#80808033] rounded-lg text-white transition duration-300 focus:outline-0 focus:border-[#9333ea] focus:shadow-[0 0 10px 39333ea80]"
              />
            </div>
          </div>

          <div className="relative mb-6">
            <MessageSquare className="absolute left-3 top-5 text-gray-500" />
            <textarea
              placeholder="Mensaje"
              rows={5}
              className="w-full py-4 px-12 bg-[#1e1e2e80] border border-[#80808033] rounded-lg text-white transition duration-300 focus:outline-0 focus:border-[#9333ea] focus:shadow-[0 0 10px 39333ea80]"
            ></textarea>
          </div>

          <button type="submit" className="w-full p-4 border-none rounded-lg font-bold cursor-pointer text-white bg-linear-to-r from-[#06b6d4] to-[#9333ea]">
            <Send className="inline-block mr-2" />
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
