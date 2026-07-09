"use client";

export default function ContactForm() {
  return (
   <form className="flex w-[640px] flex-col">

      <div className="grid grid-cols-2 gap-x-12 gap-y-10">

        <div>
          <label className="text-sm text-gray-500">
            First Name
          </label>

          <input
            className="mt-2 w-full border-b border-gray-300 pb-2 outline-none focus:border-[#2F5EF7]"
          />
        </div>

        <div>
          <label className="text-sm text-gray-500">
            Last Name
          </label>

          <input
            className="mt-2 w-full border-b border-gray-300 pb-2 outline-none focus:border-[#2F5EF7]"
          />
        </div>

        <div>
          <label className="text-sm text-gray-500">
            Email
          </label>

          <input
            className="mt-2 w-full border-b border-gray-300 pb-2 outline-none focus:border-[#2F5EF7]"
          />
        </div>

        <div>
          <label className="text-sm text-gray-500">
            Phone Number
          </label>

          <input
            className="mt-2 w-full border-b border-gray-300 pb-2 outline-none focus:border-[#2F5EF7]"
          />
        </div>

      </div>

      <div className="mt-10">

        <label className="text-sm text-gray-500">
          Reason For Enquiry
        </label>

        <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3 text-sm">

          <label className="flex items-center gap-2">
            <input type="radio" name="reason"/>
            General Inquiry
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" name="reason"/>
            Partnership
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" name="reason"/>
            Careers
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" name="reason"/>
            Others
          </label>

        </div>

      </div>

      <div className="mt-8 flex-1">

        <label className="text-sm text-gray-500">
          Message
        </label>

        <textarea
         rows={6}
          className="mt-2 w-full resize-none border-b border-gray-300 outline-none focus:border-[#2F5EF7]"
        />

      </div>

      <div className="mt-8 flex justify-end">

        <button
          className="rounded-xl bg-[#1A2340] px-8 py-3 text-white transition hover:bg-black"
        >
          Send Message
        </button>

      </div>

    </form>
  );
}