import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="pt-8 text-theme mx-auto ">
      <h2 className="text-4xl font-bold mb-6">Контакти</h2>

      <p className="text-lg mb-8">
        Якщо у вас виникли питання, пропозиції або просто бажаєте з нами
        зв’язатися — будь ласка, скористайтеся будь-яким з наведених способів
        нижче.
      </p>

      <h3 className="text-2xl font-semibold mb-4">Електронна пошта</h3>
      <p className="text-base mb-6">
        📧{" "}
        <a
          href="mailto:example@email.com"
          className="text-blue-600 hover:underline"
        >
          example@email.com
        </a>
      </p>

      <h3 className="text-2xl font-semibold mb-4">Телефон</h3>
      <p className="text-base mb-6">
        📞{" "}
        <a href="tel:+380961234567" className="text-blue-600 hover:underline">
          +38 (096) 123 45 67
        </a>
      </p>

      <h3 className="text-2xl font-semibold mb-4">Ми в соцмережах</h3>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://t.me/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Telegram
          </a>
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mb-4">Адреса</h3>
      <p className="text-base mb-6">🏢 Київ, Україна</p>

      <h3 className="text-2xl font-semibold mb-4">Карта</h3>
      <div className="mb-8">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386126.8369498396!2d30.532690549999998!3d50.402035500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNGX0LIsIDAyMDAw!5e1!3m2!1suk!2sua!4v1746348474404!5m2!1suk!2sua"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg shadow-md border"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
