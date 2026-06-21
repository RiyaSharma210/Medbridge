"use client";
export const dynamic = "force-dynamic";
import { useState } from "react";
import { supabase } from "../lib/supabase";
export default function RegisterPage() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    full_name: "",
    neet_score: "",
    neet_air: "",
    looking_for: "",
    preferred_state: "",
    college_choice: "",
    neet_attempt: "",
    hsc_score: "",
    category: "",
    phone_number: "",
    whatsapp_number: "",
    email: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);

  const { error } = await supabase
    .from("Students")
    .insert([
      {
        full_name: formData.full_name,
        NEET_Score: formData.neet_score,
        NEET_AIR: formData.neet_air,
        Looking_for: formData.looking_for,
        Preffered_State: formData.preferred_state,
        College_Choice: formData.college_choice,
        NEET_Attempt: formData.neet_attempt,
        HSC_Score: formData.hsc_score,
        Category: formData.category,
        Phone_Number: formData.phone_number,
        Whatsapp_Number: formData.whatsapp_number,
        Email_ID: formData.email,
        Address: formData.address,
        NEET_Coaching: "",
      },
    ]);

  setLoading(false);

  if (error) {
    console.log("SUPABASE ERROR:", error);
    alert(error.message);
    return;
  }

  alert("Registration Submitted Successfully!");

  setFormData({
    full_name: "",
    neet_score: "",
    neet_air: "",
    looking_for: "",
    preferred_state: "",
    college_choice: "",
    neet_attempt: "",
    hsc_score: "",
    category: "",
    phone_number: "",
    whatsapp_number: "",
    email: "",
    address: "",
  });
};

  return (
    <section className="min-h-screen bg-slate-50 py-24 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-center mb-3">
          Book Your Counselling
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Fill the form below and our team will contact you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-5"
        >

          <input
            name="full_name"
            placeholder="Full Name"
            value={formData.full_name}
            onChange={handleChange}
            required
            className="border p-3 rounded-xl"
          />

          <input
            name="neet_score"
            placeholder="NEET Score"
            value={formData.neet_score}
            onChange={handleChange}
            required
            className="border p-3 rounded-xl"
          />

          <input
            name="neet_air"
            placeholder="NEET AIR"
            value={formData.neet_air}
            onChange={handleChange}
            required
            className="border p-3 rounded-xl"
          />

          <select
            name="looking_for"
            value={formData.looking_for}
            onChange={handleChange}
            required
            className="border p-3 rounded-xl"
          >
            <option value="">Looking For</option>
            <option>MBBS</option>
            <option>BDS</option>
            <option>BAMS</option>
            <option>BHMS</option>
            <option>BPT</option>
          </select>

          <select
            name="preferred_state"
            value={formData.preferred_state}
            onChange={handleChange}
            required
            className="border p-3 rounded-xl"
          >
            <option value="">Preferred State</option>
            <option>Maharashtra</option>
            <option>Haryana</option>
            <option>Uttar Pradesh</option>
            <option>Madhya Pradesh</option>
          </select>

          <select
            name="college_choice"
            value={formData.college_choice}
            onChange={handleChange}
            required
            className="border p-3 rounded-xl"
          >
            <option value="">College Choice</option>
            <option>Government</option>
            <option>Semi Government</option>
            <option>Private</option>
            <option>Deemed</option>
          </select>

          <select
            name="neet_attempt"
            value={formData.neet_attempt}
            onChange={handleChange}
            required
            className="border p-3 rounded-xl"
          >
            <option value="">NEET Attempt</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>

          <input
            name="hsc_score"
            placeholder="HSC Score (%)"
            value={formData.hsc_score}
            onChange={handleChange}
            required
            className="border p-3 rounded-xl"
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="border p-3 rounded-xl"
          >
            <option value="">Category</option>
            <option>Open</option>
            <option>OBC</option>
            <option>EWS</option>
            <option>SC</option>
            <option>ST</option>
            <option>VJNT</option>
            <option>Defence</option>
            <option>Other</option>
          </select>

          <input
            name="phone_number"
            placeholder="Phone Number"
            value={formData.phone_number}
            onChange={handleChange}
            required
            className="border p-3 rounded-xl"
          />

          <input
            name="whatsapp_number"
            placeholder="WhatsApp Number"
            value={formData.whatsapp_number}
            onChange={handleChange}
            required
            className="border p-3 rounded-xl"
          />

          <input
            name="email"
            type="email"
            placeholder="Student Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border p-3 rounded-xl"
          />

          <input
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="border p-3 rounded-xl md:col-span-2"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-cyan-500 text-white py-4 rounded-xl font-semibold md:col-span-2"
          >
            {loading ? "Submitting..." : "Submit Registration"}
          </button>

        </form>
      </div>
    </section>
  );
}