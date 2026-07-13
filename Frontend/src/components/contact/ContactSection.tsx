import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="w-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1180px] rounded-[26px] bg-white p-6 shadow-[0_15px_60px_rgba(0,0,0,0.08)] sm:p-10">
        <div className="mx-auto flex w-full max-w-[1020px] flex-col gap-8 lg:flex-row lg:items-start lg:justify-center">
          <div className="mx-auto w-full lg:mx-0 lg:w-[360px]">
            <ContactInfo />
          </div>

          <div className="mx-auto w-full lg:mx-0 lg:w-[640px]">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}