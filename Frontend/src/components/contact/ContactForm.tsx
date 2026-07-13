"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "General Inquiry",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
        body: JSON.stringify(formData),
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
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-[640px] flex-col"
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">

        <div>
          <label className="text-sm text-gray-500">
            First Name
          </label>

          <input
            type="text"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="mt-2 w-full border-b border-gray-300 pb-2 outline-none focus:border-[#2F5EF7]"
          />
        </div>

        <div>
          <label className="text-sm text-gray-500">
            Last Name
          </label>

          <input
            type="text"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="mt-2 w-full border-b border-gray-300 pb-2 outline-none focus:border-[#2F5EF7]"
          />
        </div>

        <div>
          <label className="text-sm text-gray-500">
            Email
          </label>

          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-2 w-full border-b border-gray-300 pb-2 outline-none focus:border-[#2F5EF7]"
          />
        </div>

        <div>
          <label className="text-sm text-gray-500">
            Phone Number
          </label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-2 w-full border-b border-gray-300 pb-2 outline-none focus:border-[#2F5EF7]"
          />
        </div>

      </div>

      <div className="mt-10">

        <label className="text-sm text-gray-500">
          Reason For Enquiry
        </label>

        <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3 text-sm">

          {[
            "General Inquiry",
            "Partnership",
            "Careers",
            "Others",
          ].map((reason) => (
            <label
              key={reason}
              className="flex items-center gap-2"
            >
              <input
                type="radio"
                name="reason"
                value={reason}
                checked={formData.reason === reason}
                onChange={handleChange}
              />
              {reason}
            </label>
          ))}

        </div>

      </div>

      <div className="mt-8">

        <label className="text-sm text-gray-500">
          Message
        </label>

        <textarea
          rows={6}
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          className="mt-2 w-full resize-none border-b border-gray-300 outline-none focus:border-[#2F5EF7]"
        />

      </div>

      {status && (
        <p className="mt-6 text-sm font-medium">
          {status}
        </p>
      )}

      <div className="mt-8 flex justify-end">

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-[#1A2340] px-8 py-3 text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

      </div>

    </form>
  );
}