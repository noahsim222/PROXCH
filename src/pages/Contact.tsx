import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import { FaPaperPlane } from "react-icons/fa6";

const Contact: React.FC = () => {
  const service_id: string = "service_ggqu5dz";
  const template_id: string = "template_tu6y8ub";
  const public_key: string = "bkopRJJBTfQEds-3B";
  const app_name: string = 'hades';
  const app_gmail: string = 'noahsim222@gmail.com';

  const formRef = useRef<HTMLFormElement | null>(null)

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const isValidEmail = (email: string): boolean => {
    const re = /\S+@+\S+\.\S+/
    return re.test(email)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })

    if (name === "email") {
      setError(!isValidEmail(value))
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setLoading(true)

    if (!error && form.name && form.email && form.message) {
      emailjs
        .send(
          service_id,
          template_id,
          {
            from_name: form.name,
            to_name: app_name,
            from_email: form.email,
            to_email: app_gmail,
            message: form.message
          },
          public_key
        )
        .then(
          () => {
            setLoading(false)
            alert(
              "Thank you. I will get back to you as soon as possible."
            )

            setForm({ name: "", email: "", message: "" })
          },
          error => {
            setLoading(false)
            console.log(error)
            alert("Something went wrong. Please try again.")
            setForm({ name: "", email: "", message: "" })
          }
        )
    } else {
      setLoading(false)
      alert("Please fill in all the fields correctly.")
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-2xl font-bold py-10">Contact Us</p>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-[700px] w-full flex gap-10 justify-center flex-col my-5"
      >
        <div className="flex flex-col justify-center gap-10 items-center sm:flex-row sm:justify-between">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className="px-6 py-3 font-medium w-full text-lg text-black border border-gray-300 rounded-lg outline-none placeholder:text-secondary focus:outline-none focus:ring focus:border-gray-900"
            required
          />
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email?"
            className={`${error ? ' focus:ring-red-300 focus:ring-2' : 'border-gray-300 focus:ring focus:border-gray-900'} px-6 py-3 font-medium w-full text-lg text-black border rounded-lg outline-none placeholder:text-gray-400 focus:outline-none `}
            required 
          />
        </div>
        <textarea
          rows={7}
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="What do you want to say?"
          className="px-6 py-4 font-medium text-lg text-black border border-gray-300 rounded-lg outline-none placeholder:text-gray-400 focus:ring focus:border-gray-900"
          required
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className={`${loading ? "text-gray-400 cursor-wait" : "text-blue-400" } flex justify-center items-center gap-5 px-8 py-3 font-bold text-lg shadow-md outline-none bg-tertiary w-fit shadow-primary rounded-xl`}
            disabled={loading ? true : false}
          >
            <FaPaperPlane />
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact