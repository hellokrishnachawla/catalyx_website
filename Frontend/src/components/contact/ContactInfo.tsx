import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="relative mx-auto flex h-full min-h-[430px] w-full flex-col overflow-hidden rounded-[20px] bg-gradient-to-br from-[#2F5EF7] to-[#2755DA] px-9 py-9 text-white sm:px-10 sm:py-10">
      <div>
        <h2 className="max-w-[300px] text-[22px] font-semibold leading-[1.3] tracking-[-0.02em]">
          Have a question or want to learn more?
        </h2>

        <p className="mt-2 max-w-[300px] text-[15px] leading-7 text-blue-100">
          Get in touch with our team.
        </p>
      </div>

      <div className="mt-10 space-y-5 text-[15px]">
        <div className="flex items-center gap-4">
          <Phone size={18} />
          <span>+91-9654307204</span>
        </div>

        <div className="flex items-center gap-4">
          <Mail size={18} />
          <span>info@officialcatalyx.tech</span>
        </div>

        <div className="flex items-center gap-4">
          <MapPin size={18} />
          <span>Delhi, India</span>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 h-36 w-36 rounded-full bg-white/10" />
      <div className="absolute bottom-8 right-20 h-24 w-24 rounded-full bg-white/10" />
    </div>
  );
}