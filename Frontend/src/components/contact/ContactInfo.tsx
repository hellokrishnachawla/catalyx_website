import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="relative mx-auto flex min-h-[420px] w-full max-w-[420px] flex-col overflow-hidden rounded-[24px] bg-gradient-to-br from-[#2F5EF7] to-[#2755DA] px-8 py-10 text-white sm:px-10 sm:py-12">

      <h2 className="max-w-[240px] text-[30px] font-bold leading-tight sm:text-[34px]">
        Have a question or want to learn more?
      </h2>

      <p className="mt-5 text-[18px] text-blue-100">
        Get in touch with our team.
      </p>

      <div className="mt-16 space-y-8">

        <div className="flex items-center gap-4">
          <Phone size={20}/>
          <span>+91 9654307204</span>
        </div>

        <div className="flex items-center gap-4">
          <Mail size={20}/>
          <span>info@officialcatalyx.tech</span>
        </div>

        <div className="flex items-center gap-4">
          <MapPin size={20}/>
          <span>Delhi, India</span>
        </div>

      </div>

      <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-white/10" />

      <div className="absolute bottom-10 right-16 h-28 w-28 rounded-full bg-white/10" />

    </div>
  );
}