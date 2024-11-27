import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ContactForm() {
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const onChangeFormData = (e) => {
    console.log("On change E value: ", e.target);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errorsList = {};
    if (!formData.name) errorsList.name = "Name is required";
    if (!formData.message) errorsList.message = "Message is required";
    if (!formData.email) {
      errorsList.email = "Email  is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errorsList.email = "Email is invalid";
    }
    return errorsList;
  };

  const onSubmitContactForm = (e) => {
    e.preventDefault();
    const validateFormErrors = validateForm();

    if (Object.keys(validateFormErrors).length > 0) {
      setErrors(validateFormErrors);
    } else {
      setErrors({});
      setIsSending(true);

      // Send
      emailjs
        .send(
          "service_3bcwimp",
          "template_qcyileh",
          formData,
          "hFXXegQDjNHp00LJD"
        )
        .then((res) => {
          toast.success("Message Sent Successfully");
          setFormData(initialFormData);
        })
        .catch((error) => {
          console.log("Message sent Failed: ", error);

          toast.error("Failed to send a message, please try agin later!!!");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <section className="p-4 lg:w-3/4 mx-auto" id="contact">
      <Toaster />

      {/* Heading */}
      <h1 className="my-8 text-3xl lg:text-4xl text-center font-bold">
        Let's Connect
      </h1>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        onSubmit={onSubmitContactForm}
      >
        <div className="mb-4 flex space-x-4">
          {/* Name & Email Container*/}
          <div className="w-1/2 ">
            <input
              type="input"
              name="name"
              id="name"
              value={formData.name}
              placeholder="Name"
              onChange={onChangeFormData}
              className="mb-8 text-sm font-semibold w-full appearance-none px-3 py-2 rounded-lg bg-transparent border border-stone-50/30 focus:border-stone-400 focus:outline-none"
            />
            {errors.name && (
              <p className="text-sm  text-rose-800">{errors.name}</p>
            )}
          </div>
          <div className="w-1/2">
            <input
              type="input"
              name="email"
              id="email"
              value={formData.email}
              placeholder="Email"
              onChange={onChangeFormData}
              className="mb-8 text-sm w-full font-semibold appearance-none px-3 py-2 rounded-lg bg-transparent border border-stone-50/30 focus:border-stone-400 focus:outline-none"
            />
            {errors.email && (
              <p className="text-sm text-rose-800">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Message Container*/}
        <div className="">
          <textarea
            type="input"
            name="message"
            id="message"
            value={formData.message}
            placeholder="Message"
            onChange={onChangeFormData}
            rows={6}
            className="mb-8 text-sm w-full appearance-none px-3 py-2 rounded-lg bg-transparent border border-stone-50/30 focus:border-stone-400 focus:outline-none"
          />
          {errors.message && (
            <p className="text-sm mb-8 text-rose-800">{errors.message}</p>
          )}
        </div>

        {/* Send Button Container */}
        <div>
          <button
            disabled={isSending}
            className={` ${
              isSending && "cursor-not-allowed opacity-50"
            } mb-4 w-full px-4 py-2 rounded-lg border border-stone-50/30 text-sm font-semibold text-stone-900 bg-stone-200 hover:bg-stone-300`}
          >
            <div className="flex justify-center items-center gap-3">
              {isSending ? "Sending..." : "Send"}
              <FiSend />
            </div>
          </button>
        </div>
      </motion.form>
    </section>
  );
}
