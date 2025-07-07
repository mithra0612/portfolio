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
    <section className="bg-black text-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Status Badge */}
        <div className="flex items-center justify-center sm:justify-start gap-3 mb-12">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-green-400 text-sm sm:text-base font-medium">
            Available for new projects
          </span>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-stretch">
          {/* Left Side - Main Content */}
          <div className="flex flex-col justify-between min-h-full">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 leading-[1.1] text-white">
                  Let's work
                  <br />
                  <span className="text-blue-400">
                    together
                  </span>
                </h2>
                <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-lg text-justify">
                  I'm always open to exploring new opportunities and enthusiastic
                  about collaborating on meaningful, impactful projects that drive
                  growth and positive change.
                </p>
              </div>

              {/* Contact Links */}
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <a
                    href="mailto:mithramadhu005@gmail.com"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    aria-label="Email"
                  >
                    <Mail size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/madhumithra-m/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/mithra0612"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    aria-label="GitHub"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Cards */}
          <div className="flex flex-col space-y-4 min-h-full">
            {/* Availability Card */}
            <div className="rounded-lg bg-gray-900 p-5 flex-1">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-green-400">
                  Availability
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-white text-sm">
                        Response Time
                      </div>
                      <div className="text-gray-400 text-sm">
                        Usually within 24 hours
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-white text-sm">
                        Timezone
                      </div>
                      <div className="text-gray-400 text-sm">
                        Indian Standard Time (IST)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Call Card */}
            <div className="rounded-lg bg-gray-900 p-5 flex-1">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-green-400">
                  Schedule a Call
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Let's discuss your project and explore how we can work together.
                </p>
                <a
                  href="https://cal.com/madhumithra-m/30min?user=madhumithra-m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2.5 rounded transition-colors duration-200"
                >
                  Book a call
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}