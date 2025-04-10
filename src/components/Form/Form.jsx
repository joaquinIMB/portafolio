import { Mail, Send, User, MessageSquare } from "lucide-react";

const Form = () => {
  return (
    <form
      className="relative bg-[#1e1e2ecc] p-10 rounded-2xl border border-[#80808033] shadow-[0 10px 30px] shadow-[
        #0000004d] min-w-[860px] max-md:min-w-[460px] max-lg:min-w-[680px] max-sm:min-w-[95%] max-sm:p-4 transition-all max-md:mt-4"
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

      <button
        type="submit"
        className="w-full p-4 border-none rounded-lg font-bold cursor-pointer text-white bg-linear-to-r from-[#06b6d4] to-[#9333ea]"
      >
        <Send className="inline-block mr-2" />
        Enviar mensaje
      </button>
    </form>
  );
};

export default Form;
