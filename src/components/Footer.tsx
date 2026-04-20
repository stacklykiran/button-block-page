import React from 'react';
import Link from 'next/link';
import { Mail, Send, Users, Video, Camera, MessageCircle, Briefcase, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#051b3b] text-white flex-shrink-0 z-50 relative border-t border-[#1a315e] min-h-[113px] py-6 flex flex-col justify-center">
      <div className="max-w-[1200px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 md:col-span-1">
            {/* TITLE */}
            {/* <h3 className="text-white font-black text-sm uppercase tracking-wider">
              Subscribe to our Updates
            </h3> */}

            {/* FORM */}
            <form className="max-w-[260px] flex items-center gap-2">
              {/* INPUT */}
              <div className="flex-grow relative">
                {/* Envelope Icon */}
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white text-black text-sm outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* SEND BUTTON */}
              <button
                type="submit"
                className="text-white hover:text-blue-300 transition group flex-shrink-0"
              >
                <Send className="w-[18px] h-[18px] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>

            {/* ADDRESS */}
            <div className="text-[13px] text-white/80 leading-relaxed space-y-1">
              <h4 className="font-bold text-white mb-3 text-[15px]">Headquarters</h4>
              <p>MMR COMPLEX, SALEM,</p>
              <p>Tamil Nadu 636008</p>
            </div>
          </div>

          {/* PRODUCT */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-white text-[15px]">Product</h3>
            <ul className="flex flex-col gap-3 text-[13px] text-white/70">
              <Link href="/page-not-found" className="hover:text-white cursor-pointer -mt-1 block">
                Features
              </Link>
              <Link href="/page-not-found" className="hover:text-white cursor-pointer border-t border-transparent block">
                Templates
              </Link>
              <Link href="/page-not-found" className="hover:text-white cursor-pointer border-t border-transparent block">
                Pricing
              </Link>
              <Link href="/page-not-found" className="hover:text-white cursor-pointer border-t border-transparent block">
                Changelog
              </Link>
            </ul>
          </div>

          {/* RESOURCES */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-white text-[15px]">Resources</h3>
            <ul className="flex flex-col gap-3 text-[13px] text-white/70">
              <Link href="/page-not-found" className="hover:text-white cursor-pointer -mt-1 block">
                Documentation
              </Link>
              <Link href="/page-not-found" className="hover:text-white cursor-pointer border-t border-transparent block">
                API Reference
              </Link>
              <Link href="/page-not-found" className="hover:text-white cursor-pointer border-t border-transparent block">
                Blog
              </Link>
              <Link href="/page-not-found" className="hover:text-white cursor-pointer border-t border-transparent block">
                Status
              </Link>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-white text-[15px]">Company</h3>
            <ul className="flex flex-col gap-3 text-[13px] text-white/70">
              <Link href="/page-not-found" className="hover:text-white cursor-pointer -mt-1 block">
                About
              </Link>
              <Link href="/page-not-found" className="hover:text-white cursor-pointer border-t border-transparent block">
                Privacy Policy
              </Link>
              <Link href="/page-not-found" className="hover:text-white cursor-pointer border-t border-transparent block">
                Terms of Service
              </Link>
              <li className="hover:text-white cursor-pointer border-t border-transparent block">Contact</li>
            </ul>
          </div>

          {/* LOGO + ABOUT */}
          <div className="flex flex-col gap-6 items-start md:items-end text-left md:text-right">
            <div className="flex flex-col gap-3">
              {/* <img src="/stackly-logo1.png" className="h-[20px]" /> */}
              <Link
                href="/"
                className="flex items-center justify-center rounded-[60%] bg-white transition-all duration-300 hover:scale-105 shadow-sm w-[100px] h-[40px] overflow-hidden leading-none"
              >
                <img src="/stackly-logo1.png" className="w-full h-full object-cover object-center scale-[1.15]" alt="Logo" />
              </Link>
            </div>

            <p className="text-[12px] text-white/70 max-w-[220px]">
              The <strong className="text-white">NO-CODE</strong> website builder for everyone. Powered by AWS infrastructure, built by The <strong className="text-white">Stackly</strong> team.
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-white/10 mb-4"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* ✅ UPDATED SOCIAL ICONS */}
          <div className="bg-white rounded-full px-5 py-2.5 flex items-center gap-4 text-[#051b3b]">
            <a
              href="https://www.facebook.com/thestackly/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-blue-600 transition"
            >
              <Users size={14} />
            </a>
            <a
              href="https://www.youtube.com/@TheStackly"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-red-600 transition"
            >
              <Video size={14} />
            </a>
            <a
              href="https://www.instagram.com/the_stackly/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-pink-600 transition"
            >
              <Camera size={14} />
            </a>

            <a
              href="https://x.com/the_stackly"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-black transition"
            >
              <MessageCircle size={14} />
            </a>

            <a
              href="https://www.linkedin.com/company/stackly/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-blue-700 transition"
            >
              <Briefcase size={14} />
            </a>

            <a
              href="https://www.thestackly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-green-600 transition"
            >
              <Globe size={14} />
            </a>
          </div>

          {/* COPYRIGHT */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[12px] text-white/70">
            <Link href="/page-not-found" className="hover:text-white transition block border-t border-transparent">
              Terms of Use
            </Link>
            <Link href="/page-not-found" className="hover:text-white transition block border-t border-transparent">
              Privacy Policy
            </Link>
            <span>© 2018-2026 Stackly.com, Inc</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
