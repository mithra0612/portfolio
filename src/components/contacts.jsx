"use client";
import {
  Mail,
  Twitter,
  Linkedin,
  Github,
  ArrowRight,
  Copy,
  Clock,
  MapPin,
  CheckCircle,
  Calendar,
} from "lucide-react";
import { useState } from "react";

export default function ContactsSection() {
  const [copied, setCopied] = useState(false);
  const [projectCount] = useState(47);

  const copyEmail = () => {
    navigator.clipboard.writeText("mithramadhu005@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-black text-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-cyan-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-cyan-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 border border-cyan-400 rotate-45"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Status Badge */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-sm font-medium">
            Available for new projects
          </span>
        </div>

        {/* Main Split Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE - Main Heading & Contact */}
          <div className="space-y-10">
            <div>
              <h2 className="text-6xl lg:text-7xl font-light mb-8 leading-tight">
                Have a project in
                <span className="text-cyan-400 block font-normal animate-pulse">
                  mind?
                </span>
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed mb-10">
                Let's collaborate and create something amazing together. I'm
                always excited to hear about new opportunities.
              </p>
            </div>

            {/* Get in Touch */}
            <div>
              <p className="text-gray-500 text-sm uppercase tracking-wider mb-6">
                Get in touch
              </p>

              <div className="flex items-center gap-4 mb-6">
                <a
                  href="mailto:mithramadhu005@gmail.com"
                  className="text-cyan-400 hover:text-white transition-colors text-3xl font-medium hover:glow"
                >
                  mithramadhu005@gmail.com
                </a>
                <button
                  onClick={copyEmail}
                  className="text-gray-500 hover:text-cyan-400 transition-colors p-2 rounded-full hover:bg-gray-900/50"
                  title="Copy email"
                >
                  {copied ? (
                    <CheckCircle size={24} className="text-green-400" />
                  ) : (
                    <Copy size={24} />
                  )}
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Github, href: "#", label: "GitHub" },
                ].map(({ icon: Icon, href, label }, index) => (
                  <a
                    key={label}
                    href={href}
                    className="text-gray-600 hover:text-cyan-400 transition-all duration-300 p-3 rounded-full hover:bg-gray-900/50 hover:scale-110 transform border border-gray-800"
                    aria-label={label}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Details & Actions */}
          <div className="space-y-8">
            {/* Timezone & Availability */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <h3 className="text-xl font-semibold mb-6 text-cyan-400">
                Availability
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Clock size={20} />
                  <div>
                    <div className="font-medium">Response Time</div>
                    <div className="text-gray-500 text-sm">
                      Usually within 24 hours
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin size={20} />
                  <div>
                    <div className="font-medium">Timezone</div>
                    <div className="text-gray-500 text-sm">
                      Eastern Standard Time (EST)
                    </div>
                  </div>
                </div>
                {/* <div className="flex items-center gap-3 text-gray-300">
                  <Calendar size={20} />
                  <div>
                    <div className="font-medium">Next Available</div>
                    <div className="text-gray-500 text-sm">Q3 2025 - Limited spots</div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Book a Call CTA */}
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-800/50">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                Ready to start?
              </h3>
              <p className="text-gray-400 mb-6">
                Schedule a free consultation to discuss your project and see how
                we can work together.
              </p>

              <button className="group bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 w-full justify-center shadow-lg hover:shadow-cyan-400/25 mb-4">
                Book a call
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <p className="text-gray-600 text-sm text-center">
                No commitment required
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover\\:glow:hover {
          text-shadow: 0 0 10px rgba(34, 211, 238, 0.5);
        }
      `}</style>
    </section>
  );
}
