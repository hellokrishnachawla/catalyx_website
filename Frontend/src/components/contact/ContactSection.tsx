import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="w-full px-2 py-2 sm:px-4 lg:px-6">
      <div className="mx-auto w-full max-w-[1120px] rounded-[24px] bg-white px-6 py-6 shadow-[0_12px_35px_rgba(15,23,42,0.08)] sm:px-8 sm:py-8 lg:px-8 lg:py-8">
        <div className="flex flex-col items-stretch gap-[32px] lg:flex-row">
          <div className="w-full lg:w-[430px]">
            <ContactInfo />
          </div>

          <div className="w-full lg:flex-1 lg:max-w-[620px]">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}