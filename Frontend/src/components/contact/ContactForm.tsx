"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    reason: "General Inquiry",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          phone: `${formData.countryCode} ${formData.phone}`,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Request failed");
      }

      setStatus("✅ Message sent successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "+91",
        phone: "",
        reason: "General Inquiry",
        message: "",
      });

    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-full flex-col">
      <div className="grid grid-cols-1 gap-x-8 gap-y-7 md:grid-cols-2">
        <div>
          <label className="block text-[14px] font-medium leading-5 tracking-normal text-slate-600">
            First Name
          </label>

          <input
            type="text"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 h-10 w-full border-b border-[#D9D9D9] bg-transparent pb-2 text-sm leading-6 tracking-normal text-slate-900 outline-none placeholder:text-slate-400 transition focus:border-[#2F5EF7]"
          />
        </div>

        <div>
          <label className="block text-[14px] font-medium leading-5 tracking-normal text-slate-600">
            Last Name
          </label>

          <input
            type="text"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 h-10 w-full border-b border-[#D9D9D9] bg-transparent pb-2 text-sm leading-6 tracking-normal text-slate-900 outline-none placeholder:text-slate-400 transition focus:border-[#2F5EF7]"
          />
        </div>

        <div>
          <label className="block text-[14px] font-medium leading-5 tracking-normal text-slate-600">
            Email
          </label>

          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 h-10 w-full border-b border-[#D9D9D9] bg-transparent pb-2 text-sm leading-6 tracking-normal text-slate-900 outline-none placeholder:text-slate-400 transition focus:border-[#2F5EF7]"
          />
        </div>

        <div>
          <label className="block text-[14px] font-medium leading-5 tracking-normal text-slate-600">
            Phone Number
          </label>

          <div className="mt-1 flex h-10 items-center border-b border-[#D9D9D9] pb-1">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="h-full w-[84px] appearance-none bg-transparent pr-2 text-sm leading-6 tracking-normal text-slate-700 outline-none focus:outline-none"
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+61">+61</option>
            </select>
            <div className="h-6 w-px bg-slate-300" />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="h-full flex-1 bg-transparent px-3 text-sm leading-6 tracking-normal text-slate-900 outline-none placeholder:text-slate-400"
            />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <label className="text-[14px] font-medium leading-5 tracking-normal text-slate-600">
          Reason For Enquiry
        </label>

        <div className="mt-4 flex flex-wrap items-center gap-6 text-[14px] sm:gap-8">
          {[
            "General Inquiry",
            "Partnership",
            "Careers",
            "Others",
          ].map((reason) => (
            <label
              key={reason}
              className="flex items-center gap-3 text-sm leading-6 tracking-normal text-slate-700"
            >
              <span className="relative flex h-5 w-5 items-center justify-center rounded-full border border-[#D9D9D9] bg-white">
                <input
                  type="radio"
                  name="reason"
                  value={reason}
                  checked={formData.reason === reason}
                  onChange={handleChange}
                  className="peer absolute inset-0 h-full w-full cursor-pointer appearance-none opacity-0"
                />
                <span className="h-2.5 w-2.5 rounded-full bg-[#2F5EF7] opacity-0 transition peer-checked:opacity-100" />
              </span>
              {reason}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <label className="text-[14px] font-medium leading-5 tracking-normal text-slate-600">
          Message
        </label>

        <textarea
          rows={4}
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          className="mt-1 h-[100px] w-full resize-none border-b border-[#D9D9D9] bg-transparent pb-2 text-sm leading-6 tracking-normal text-slate-900 outline-none placeholder:text-slate-400 transition focus:border-[#2F5EF7]"
        />
      </div>

      {status && (
        <p className="mt-4 text-[14px] font-normal leading-6 tracking-normal text-slate-700">
          {status}
        </p>
      )}

      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-[#0f172a] px-4 text-sm font-semibold tracking-wide text-white shadow-[0_10px_24px_rgba(15,23,42,0.16)] transition hover:bg-[#111827] disabled:cursor-not-allowed disabled:opacity-60 sm:w-[190px]"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}