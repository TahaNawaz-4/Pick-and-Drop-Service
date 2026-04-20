export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">

      {/* Header Section */}
      <div className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
          Get in Touch
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          We’re here to help you with Smart Laundry — from booking pickups to tracking orders in real time.
          Let’s make your laundry experience effortless and smart.
        </p>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 pb-20">

        {/* Contact Form */}
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">

          <h2 className="text-2xl font-bold text-blue-600 mb-6">
            Send a Message
          </h2>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              rows="5"
              placeholder="Your Message..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>

          </form>
        </div>

        {/* Info Card */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white shadow-xl rounded-2xl p-8">

          <h2 className="text-2xl font-bold mb-4">
            Smart Laundry System
          </h2>

          <p className="text-blue-100 mb-6 leading-relaxed">
            Smart Laundry is a modern web-based solution designed to simplify laundry management.
            Users can schedule pickups, track orders in real-time, and manage everything from one dashboard.
          </p>

          <div className="space-y-3 text-sm">

            <p>📍 Location: Online Service (Pakistan)</p>
            <p>⏱ Response Time: Within 24 hours</p>
            <p>📡 Real-time Tracking Enabled</p>
            <p>🧼 Services: Pickup • Wash • Delivery</p>

          </div>

          <div className="mt-8 border-t border-blue-300 pt-4 text-sm text-blue-100">
            thnaks for choosing our service 
          </div>

        </div>

      </div>

    </div>
  );
}