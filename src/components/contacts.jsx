import React, { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Copy,
  Clock,
  MapPin,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

export default function ContactsSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("mithramadhu005@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-black text-white py-12 sm:py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-1 sm:px-2 md:px-0 w-full">
        {/* Status */}
        <div className="flex items-center gap-2 mb-8 sm:mb-12">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-blue-400 text-base sm:text-lg font-bold">
            Available for new projects
          </span>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-8 md:gap-10">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black mb-6 sm:mb-8 leading-tight text-white">
              Let's work
              <br />
              <span className="text-blue-500">together</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl md:text-2xl leading-relaxed mb-4 sm:mb-6">
              I’m always open to exploring new opportunities and enthusiastic
              about collaborating on meaningful, impactful projects that drive
              growth, creativity, or positive change.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <div className="flex gap-6 sm:gap-8">
                  <a
                    href="mailto:mithramadhu005@gmail.com"
                    className="text-gray-500 hover:text-blue-400 transition-colors p-2 sm:p-1 -ml-2 sm:ml-0"
                    aria-label="Email"
                  >
                    <Mail size={28} className="sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/madhumithra-m/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-400 transition-colors p-2 sm:p-1"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={28} className="sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href="https://github.com/mithra0612"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-400 transition-colors p-2 sm:p-1"
                    aria-label="GitHub"
                  >
                    <Github size={28} className="sm:w-6 sm:h-6" />
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4 mt-6">
                  <span className="text-blue-400 text-xl sm:text-2xl md:text-3xl font-black break-all">
                    mithramadhu005@gmail.com
                  </span>
                  <button
                    onClick={copyEmail}
                    className="text-gray-400 hover:text-blue-400 transition-colors p-1 self-start sm:self-auto"
                    title="Copy email"
                  >
                    {copied ? (
                      <CheckCircle size={18} className="text-green-500" />
                    ) : (
                      <Copy size={18} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-8 sm:space-y-10 w-full min-w-0">
            {/* Availability */}
            <div className="border border-gray-800 rounded-lg p-6 sm:p-7 hover:border-blue-500/30 transition-colors">
              <h3 className="text-xl sm:text-2xl font-black mb-4 text-blue-400">
                Availability
              </h3>
              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-start gap-3">
                  <Clock
                    size={24}
                    className="text-blue-400 mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <div className="font-black text-base sm:text-lg text-white">
                      Response Time
                    </div>
                    <div className="text-gray-400 text-base sm:text-lg font-semibold">
                      Usually within 24 hours
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin
                    size={24}
                    className="text-blue-400 mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <div className="font-black text-base sm:text-lg text-white">
                      Timezone
                    </div>
                    <div className="text-gray-400 text-base sm:text-lg font-semibold">
                      Indian Standard Time (IST)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Call */}
            <div className="border border-gray-800 rounded-lg p-6 sm:p-7 hover:border-green-500/30 transition-colors">
              <h3 className="text-xl sm:text-2xl font-black mb-3 text-green-400">
                Schedule a Call
              </h3>
              <p className="text-gray-400 mb-5 text-base sm:text-lg ">
                Let's discuss your project and explore how we can work together.
              </p>
              <a
                href="https://cal.com/madhumithra-m/30min?user=madhumithra-m"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-black font-semibold px-6 sm:px-8 py-4 rounded-md transition-colors text-base sm:text-lg w-full sm:w-auto"
              >
                Book a call
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
