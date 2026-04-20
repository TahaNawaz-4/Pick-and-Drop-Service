import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* 🌟 HERO SECTION */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">

          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Smart Laundry System
            </h1>

            <p className="mt-4 text-blue-100 text-lg">
              A modern digital laundry solution that saves your time, reduces effort,
              and brings doorstep laundry management to your fingertips.
            </p>

            <div className="mt-6 flex gap-4">
              <span className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                <a href="user">Booking here</a> 
              </span>
              <span className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                <a href="user">📡 Real-time Tracking </a>
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac"
              alt="Laundry Service"
              className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
            />
          </div>

        </div>
      </div>

      {/* 🧠 BIO SECTION */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">

        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
          alt="Laundry Work"
          className="rounded-2xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Who We Are? And Why
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Smart Laundry is built for modern users who want convenience without compromise.
            We handle pickup, washing, ironing, and delivery — all tracked in real-time through our smart system.
          </p>

          <p className="mt-4 text-gray-600">
            Our goal is simple: <b>save your time and give you premium laundry care</b> with technology-driven service.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">




  <div className="mt-8 w-full">
    <p className="text-3xl font-bold text-gray-800 mb-4">
      What we offer
    </p>
    <div className="grid grid-cols-2 gap-3 3xl:grid-cols-4">
      {[
        { label: "Pickup", desc: "We come to you, whenever it suits you" },
        { label: "Expert Washing", desc: "Handled with care, washed to perfection" },
        { label: "Ironing", desc: "Crisp, sharp, and ready to wear" },
        { label: "Delivery", desc: "Back at your door, right on time" },
      ].map((item) => (
        <div key={item.label} className="bg-gray-50 rounded-lg p-4 text-center">
          <p className="font-medium text-gray-800 text-sm mb-1">{item.label}</p>
          <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>

  <div className="mt-8 w-full flex flex-col items-center gap-4">
    <p className="text-3xl font-bold text-gray-800 ">
      Why choose us
    </p>
    {[
      { title: "Real-time tracking", desc: "Know exactly where your clothes are at every stage — no guessing, no waiting in the dark." },
      { title: "Trusted professionals", desc: "Our trained team treats every garment with the same care, whether it's a t-shirt or a delicate suit." },
      { title: "Flexible scheduling", desc: "Book a pickup in minutes through our app. Choose your time slot and let us handle the rest." },
      { title: "Eco-friendly process", desc: "We use responsible detergents and energy-efficient machines — clean clothes shouldn't cost the planet." },
    ].map((item) => (
      <div key={item.title} className="flex flex-col items-center gap-1 max-w-md">
        <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="#378ADD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p className="font-medium text-gray-800 text-sm">{item.title}</p>
        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
      </div>
    ))}
  </div>

  <div className="mt-10 bg-gray-50 rounded-xl p-6 w-full">
    <p className="text-3xl font-bold text-gray-800 mb-4">
      How it works
    </p>
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {[
        { step: "01", title: "Schedule", desc: "Pick a time through the app" },
        { step: "02", title: "We pickup", desc: "Our team collects from your door" },
        { step: "03", title: "We clean", desc: "Washed, ironed and folded" },
        { step: "04", title: "Delivered", desc: "Fresh clothes back at your door" },
      ].map((item) => (
        <div key={item.step} className="p-3">
          <p className="text-2xl font-semibold text-blue-400 mb-1">{item.step}</p>
          <p className="font-medium text-gray-800 text-sm mb-1">{item.title}</p>
          <p className="text-xs text-gray-500">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>

  <div className="mt-10 pt-6 border-t border-gray-100 w-full">
    <p className="text-xl font-semibold text-gray-800 mb-1">
      Life's too short for laundry day.
    </p>
    <p className="text-gray-500 text-sm">
      Let Smart Laundry handle it — so you don't have to.
    </p>
  </div>
</div>

      {/* 🧼 SERVICES */}
      <div className="bg-gray-50 py-16 px-6">
        <h2 className="text-center text-3xl font-bold text-blue-700 mb-10">
          Our Services
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="font-bold text-lg text-blue-600">Pickup & Delivery</h3>
            <p className="text-gray-600 mt-2">Doorstep pickup and drop service for complete convenience.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="font-bold text-lg text-blue-600">Professional Washing</h3>
            <p className="text-gray-600 mt-2">High-quality cleaning with modern machines and care.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="font-bold text-lg text-blue-600">Iron & Fold</h3>
            <p className="text-gray-600 mt-2">Perfect finishing so your clothes are ready to wear.</p>
          </div>

        </div>
      </div>

      {/* ⏱ DELIVERY + GUARANTEE */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">

        <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-blue-600">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Delivery Time
          </h3>

          <p className="text-gray-600">
            Standard service: <b>24 - 48 hours</b><br />
            Express service: <b>Same day delivery</b>
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-green-500">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Our Guarantee
          </h3>

          <p className="text-gray-600">
            We guarantee safe handling of your clothes, premium cleaning quality,
            and on-time delivery. If we fail — we fix it.
          </p>
        </div>

      </div>

      {/* ⭐ RATING */}
      <div className="text-center py-16 bg-blue-600 text-white">

        <h2 className="text-3xl font-bold">Customer Rating</h2>

        <p className="mt-4 text-blue-100">
          Trusted by hundreds of users
        </p>

        <div className="mt-6 text-4xl">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="mt-2 text-sm text-blue-100">
          4.9/5 Average Service Rating
        </p>

      </div>

      {/* 🔧 TOOLS */}
      <div className="max-w-6xl mx-auto py-16 px-6">



      </div>

    </div>
  );
}