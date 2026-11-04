import { socialLinks } from "../../data/SocialLinks"
import { Coffee, Heart, ArrowUp } from "lucide-react";


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#0f172a] px-6 py-12">

      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-40 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto flex flex-col items-center">

        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="text-3xl font-extrabold tracking-tight text-white hover:scale-105 transition-transform duration-300"
        >
          Suyog<span className="text-blue-500">.</span>
        </a>

        {/* Made with coffee and love */}
        <div className="mt-5 flex items-center gap-2 text-sm text-slate-400">
          <span>Made with</span>
          <Coffee size={16} className="text-amber-400" />
          <span>and</span>
          <Heart
            size={16}
            className="text-rose-500 fill-rose-500 animate-pulse"
          />
          <span>by</span>
          <span className="font-semibold text-slate-200">
            Suyog Poudel
          </span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 mt-7">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            if (!social.url) return null;

            return (
              <a
                key={social.platform}
                href={social.url}
                target={social.platform !== "Email" ? "_blank" : undefined}
                rel={
                  social.platform !== "Email"
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={social.platform}
                title={social.platform}
                className="w-11 h-11 flex items-center justify-center rounded-xl
                bg-slate-800/60 text-slate-400
                border border-white/5
                hover:text-white hover:bg-blue-600
                hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20
                transition-all duration-300"
              >
                <Icon size={19} />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="mt-9 text-xs text-slate-500 text-center">
          © {new Date().getFullYear()} Suyog Poudel. All rights reserved.
        </p>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Back to top"
          className="absolute right-0 top-0 sm:right-2 sm:top-0
          w-11 h-11 rounded-full
          flex items-center justify-center
          bg-blue-600/10 border border-blue-500/20
          text-blue-400
          hover:bg-blue-600 hover:text-white
          hover:-translate-y-1
          hover:shadow-lg hover:shadow-blue-500/20
          transition-all duration-300 cursor-pointer"
        >
          <ArrowUp size={20} />
        </button>

      </div>
    </footer>
  );
};

export default Footer;