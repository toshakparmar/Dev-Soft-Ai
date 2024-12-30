import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import Button from "./Button";

const Contact = () => {
  return (
    <Section className="overflow-hidden" id="contact">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          tag="Reach Out to Dev-Soft"
          title="Contact Us Anytime"
        />

        <div className={`md:flex even:md:translate-y-[7rem] p-1 rounded-[2.5rem] bg-conic-gradient`}>
          <div className="relative w-full p-10 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-20">
            <div className="relative z-1 w-full">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-semibold text-white mb-2">Contact Us</h4>
                <p className="text-sm text-gray-400">
                  We'd love to hear from you! Fill out the form below, and we'll get in touch soon.
                </p>
              </div>
              <div className="flex justify-center">
                {/* Contact Form */}
                <form className="w-full max-w-md space-y-6">
                  {/* Name Field */}
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-n-8 text-white border border-gray-600 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-gray-500"
                      placeholder="Your Name"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-n-8 text-white border border-gray-600 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-gray-500"
                      placeholder="Your Email"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-n-8 text-white border border-gray-600 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-gray-500"
                      placeholder="Write your message here..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center">
                    <Button className="w-full" type="submit">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>


        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/contact-details"
          >
            See more ways to contact us
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
