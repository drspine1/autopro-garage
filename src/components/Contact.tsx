export default function Contact() {
  return (
    <section id="contact" className="px-8 py-20 bg-[#111] text-center space-y-8">
      <h2 className="text-3xl font-semibold text-[var(--secondary)]">
        Contact Us
      </h2>
      <p className="text-[var(--gray)]">
        Get in touch for bookings or inquiries — we're always here to help.
      </p>

      <form className="max-w-lg mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 bg-[#222] rounded-md outline-none border border-[#333]"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 bg-[#222] rounded-md outline-none border border-[#333]"
        />
        <textarea
          placeholder="Your Message"
          className="p-3 bg-[#222] rounded-md outline-none border border-[#333] min-h-[100px]"
        ></textarea>
        <button className="bg-[var(--secondary)] text-[var(--primary)] py-3 rounded-lg font-semibold hover:scale-105 transition">
          Send Message
        </button>
      </form>

      <div className="mt-8 text-[var(--gray)]">
        <p>25 Workshop Avenue, Lagos</p>
        <p> +234 802 123 4567</p>
      </div>
    </section>
  );
}
