import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="flex justify-center px-6">
      <div className="flex w-[1040px] items-center gap-10 rounded-[26px] bg-white p-8 shadow-[0_15px_60px_rgba(0,0,0,0.08)]">

        <ContactInfo />

        <ContactForm />

      </div>
    </section>
  );
}