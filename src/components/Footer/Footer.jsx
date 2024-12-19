import React from "react";
import { useSelector } from "react-redux";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
  const isToggled = useSelector((state) => state.myCart?.toggle || false);

  return (
    <div>
      <footer
       className="bg-black text-white"
      >
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-1 gap-8 px-4 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:py-8">
            <div>
              <h2 className="mb-6 text-2xl sm:text-4xl uppercase font-poppins font-bold">
                Fashion
              </h2>
              <p>Complete your style with awesome clothes from us.</p>
              <div className="flex space-x-4 mt-3">
                {[
                  { href: "https://facebook.com", icon: <FaFacebookF /> },
                  { href: "https://instagram.com", icon: <FaInstagram /> },
                  { href: "https://twitter.com", icon: <FaTwitter /> },
                  { href: "https://github.com", icon: <FaGithub /> },
                ].map(({ href, icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black bg-[#EBD96B] p-2 sm:p-3 rounded text-xl sm:text-2xl"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
            {[
              {
                title: "Company",
                links: ["About", "Contact us", "Support", "Careers"],
              },
              {
                title: "Quick Links",
                links: [
                  "Share Location",
                  "Orders Tracking",
                  "FAQs",
                  "Terms & Conditions",
                ],
              },
              {
                title: "Legal",
                links: ["Terms & Condition", "Privacy Policy"],
              },
            ].map(({ title, links }) => (
              <div key={title}>
                <h2 className="mb-6 text-sm font-semibold uppercase">{title}</h2>
                <ul className="font-medium space-y-4">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:underline">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
