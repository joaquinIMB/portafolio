import Form from "../Form/Form";
import { useTranslations } from "@/hooks/useTranslations";
import { SpanPresentation } from "../SpanPresentation/SpanPresentation";

const ContactMe = () => {
  const { contactMeSection } = useTranslations();

  return (
    <section
      id="contact"
      className="relative min-sm:pb-12 pt-18 px-0 max-lg:mx-auto max-sm:pb-20 max-md:pt-22 transition-all duration-300"
    >
      <div className="relative z-10 container mx-auto px-4 flex flex-col justify-center items-center max-lg:w-full max-lg:p-0 max-sm:px-[11px] min-h-[86vh] max-sm:justify-end gap-2 max-sm:min-h-auto max-md:mt-6">
        <div className="max-w-3xl mx-auto text-center flex flex-col justify-end h-[170px] mb-4 max-md:mb-0">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px flex-grow bg-gradient-to-r from-transparent to-cyan-500/50"></div>
            <SpanPresentation span={contactMeSection.spanPresentation} />
            <div className="h-px flex-grow bg-gradient-to-l from-transparent to-purple-500/50"></div>
          </div>
          <h2 className="text-6xl font-bold text-white max-sm:text-4xl">
            {contactMeSection.title}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              {contactMeSection.span}
            </span>
          </h2>
          <p
            className="text-gray-400 text-lg mt-5
          "
          >
            {contactMeSection.paragraph1}
          </p>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default ContactMe;
