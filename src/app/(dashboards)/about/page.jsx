export default function AboutPage() {
  const stats = [
    { value: "5,000+", label: "Happy customers" },
    { value: "20,000+", label: "Orders completed" },
    { value: "4.9 ★", label: "Average rating" },
    { value: "24 hrs", label: "Turnaround time" },
  ];

const team = [
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    name: "Ahmed Khan",
    role: "Founder & CEO",
    bio: "Visionary behind Smart Laundry's tech-first approach.",
  },
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    name: "Sara Rizvi",
    role: "Head of Operations",
    bio: "Ensures every order is handled with precision and care.",
  },
  {
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    name: "Omar Malik",
    role: "Lead Developer",
    bio: "Built the real-time tracking system from the ground up.",
  },
  {
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    name: "Nadia Aslam",
    role: "Customer Success",
    bio: "Your go-to person for support, feedback & happiness.",
  },
];

  return (
    <div className="max-w-4xl mx-auto font-sans">

      {/* ── Hero ── */}
      <div className="text-center py-16 px-6">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
          <span className="text-xs font-medium tracking-widest uppercase text-blue-600">
            About Smart Laundry
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
          We're redefining<br />how Pakistan does laundry.
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto">
          Smart Laundry was founded with one belief — your time is too valuable
          to spend on laundry. We combine professional care with real-time
          technology to deliver an experience that's fast, reliable, and
          completely hassle-free.
        </p>
      </div>

      {/* ── Stats ── */}
      <div className="border-t border-b border-gray-100 py-8 px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {stats.map((s) => (
            <div key={s.label} className="py-4">
              <p className="text-3xl font-bold text-blue-500 mb-1">{s.value}</p>
              <p className="text-xs text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Story + Mission ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 py-12 px-6">
        <div>
          <p className="text-xs font-medium tracking-widest uppercase text-gray-300 mb-3">
            Our story
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-snug">
            Born out of frustration, built for convenience.
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-3">
            Finding a reliable, high-quality laundry service was unnecessarily
            hard — long waits, unclear pricing, no tracking, inconsistent
            results.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            So we built Smart Laundry — professional-grade washing and ironing
            with a real-time tracking system that puts you in control from
            pickup to delivery.
          </p>
        </div>
        <div>
          <p className="text-xs font-medium tracking-widest uppercase text-gray-300 mb-3">
            Our mission
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-snug">
            Save your time. Protect your clothes.
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-3">
            Our mission is to make premium laundry care accessible to everyone
            — working professionals, busy parents, students with no time to
            spare.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            Clean, well-cared-for clothes shouldn't require effort from you.
            That's what we show up to deliver — every single day.
          </p>
        </div>
      </div>

{/* ── Team ── */}
<div className="px-6 pb-12">
  <p className="text-xs font-medium tracking-widest uppercase text-gray-300 mb-5">
    Meet the team
  </p>
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
    {team.map((member) => (
      <div
        key={member.name}
        className="border border-gray-100 rounded-xl p-5 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-46 h-46 rounded-xl object-cover mx-auto mb-3"
        />
        <p className="font-semibold text-gray-800 text-sm">{member.name}</p>
        <p className="text-sm text-gray-400 mt-0.5 mb-2">{member.role}</p>
        <p className="text-xs text-gray-400 leading-relaxed">{member.bio}</p>
      </div>
    ))}
  </div>
</div>

      {/* ── CTA ── */}
      <div className="border-t border-gray-100 py-12 px-6 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          Ready to never worry about laundry again?
        </h3>
        <p className="text-sm text-gray-400 mb-6">
          Schedule your first pickup in under 2 minutes.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-8 py-3 rounded-lg transition-colors">
          Get started today
        </button>
      </div>

    </div>
  );
}