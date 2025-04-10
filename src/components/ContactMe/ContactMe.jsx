import Form from "../Form/Form";

const ContactMe = () => {
  return (
    <section
      id="contact"
      className="relative min-sm:pb-12 pt-10 px-0 max-lg:mx-auto max-sm:pb-10"
    >
      <div className="relative z-10 container mx-auto px-4 flex flex-col justify-center items-center max-lg:w-full max-lg:p-0 max-sm:px-[11px] min-h-[86vh] max-sm:justify-end gap-2 max-sm:min-h-auto max-md:mt-6">
        <div className="max-w-3xl mx-auto text-center flex flex-col justify-end h-[170px] mb-4 max-md:mb-0">
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
            className="text-gray-400 text-lg mt-5
          "
          >
            ¿Tenés un proyecto en mente? Contactame y conversamos sobre cómo
            puedo ayudarte.
          </p>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default ContactMe;
