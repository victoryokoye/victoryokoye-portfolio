"use client";

import { useState } from "react";

import { FiArrowRight } from "react-icons/fi";
import { FiLoader } from "react-icons/fi";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      alert("Message sent!");
      form.reset();
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="text" name="name" id="name" placeholder="Name:" required className="bg-bg-sec h-12 w-full p-5 rounded-sm"/>
      <input type="email" name="email" id="email"  placeholder="Email:" required className="bg-bg-sec h-12 w-full p-5 rounded-sm"/>
      <textarea name="message" id="message" placeholder="Message:" required className="bg-bg-sec h-30 w-full p-5 rounded-sm"></textarea>
      <button type="submit" className={`button cursor-pointer bg-brand h-12 w-full rounded-sm text-white px-4 flex items-center justify-between ${loading && ""}`}>{loading ? "Sending..." : "Send Messsage"}{loading ? <FiLoader/> : <FiArrowRight/> }</button>
    </form>
  )
}