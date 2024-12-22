"use client";

import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/moving-border";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the form data to your backend
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <TextGenerateEffect words="Get in Touch" className="text-4xl font-bold mb-4 text-primary" />
          <p className="text-gray-400">Feel free to reach out for collaborations or just a friendly hello</p>
        </motion.div>
        <div className="flex flex-wrap -mx-4">
          <motion.div
            className="w-full md:w-1/2 px-4 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: "Name is required" })}
                  className="bg-gray-800 border-gray-700 text-white"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="bg-gray-800 border-gray-700 text-white"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div>
                <Textarea
                  placeholder="Message"
                  {...register("message", { required: "Message is required" })}
                  rows={4}
                  className="bg-gray-800 border-gray-700 text-white"
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">
                    {errors.message.message}
                  </span>
                )}
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Send Message</Button>
            </form>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 px-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="flex items-center">
                <IconMail className="text-2xl text-primary mr-4" />
                <div>
                  <h3 className="font-semibold text-primary">Email</h3>
                  <p className="text-gray-400">moradadidi6@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <IconPhone className="text-2xl text-primary mr-4" />
                <div>
                  <h3 className="font-semibold text-primary">Phone</h3>
                  <p className="text-gray-400">0634728767</p>
                </div>
              </div>
              <div className="flex items-center">
                <IconMapPin className="text-2xl text-primary mr-4" />
                <div>
                  <h3 className="font-semibold text-primary">Location</h3>
                  <p className="text-gray-400">Casablanca, Morocco</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

