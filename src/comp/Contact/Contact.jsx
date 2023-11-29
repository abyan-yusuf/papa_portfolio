import { useRef } from "react";
import Card from "./Card/Card";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact",
        "template_h9urt8y",
        form.current,
        "pRV-7qgcm3XqtnM8F"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="skill" className="bg-bodybc md:ml-64 px-5 py-20">
      <div className="flex justify-between">
        <Card
          icon="mobile-screen"
          subject="Phone"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing."
          button="+880 1918181600"
          buttonLink="callto: 01918181600"
        />
        <Card
          icon="map"
          subject="Location"
          desc="House-19, Block-C, Main Road, Aftabnagar, Dhaka-1219"
          button="View on map"
          buttonLink="https://maps.app.goo.gl/zxr9t9n5jvZNXKc58"
        />
        <Card
          icon="envelope"
          subject="Saturday - Thusrday"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing."
          button="akmaibwork@gmail.com"
          buttonLink="https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/akmaibwork%40gmail.com?compose=new"
        />
      </div>
      <form
        ref={form}
        className="mt-16 space-y-5 form-control flex flex-wrap justify-center"
        onSubmit={sendEmail}
      >
        <input
          type="text"
          placeholder="Your Name"
          name="from_name"
          className="input w-full bg-bodybc border-2 border-borderc placeholder:text-[#F3F3F3]"
        />
        <input
          type="email"
          placeholder="Your Email"
          name="from_email"
          className="input w-full bg-bodybc border-2 border-borderc placeholder:text-[#F3F3F3]"
        />
        <textarea
          cols="30"
          rows="7"
          name="message"
          className="resize-none w-full textarea bg-opacity-0 border-2 border-borderc placeholder:text-[#F3F3F3] placeholder:text-[15px]"
          placeholder="Your Message"
        />
        <input
          type="submit"
          className="text-black bg-gb w-40 h-14 rounded-lg ml-96"
          value="Send"
        />
      </form>
    </section>
  );
};

export default Contact;
