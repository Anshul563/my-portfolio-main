import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const socials = [
  { label: "GitHub", href: "https://github.com/Anshul563", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/anshulshakya-bca84", icon: Linkedin },
  { label: "Instagram", href: "https://instagram.com/anshulll_84", icon: Instagram },
  { label: "Email", href: "mailto:anshulshakya18168@gmail.com", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[rgba(255,255,255,0.1)]">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-xs text-[#666]">
          © {new Date().getFullYear()} Anshul Shakya. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-xs text-[#666] transition-colors hover:text-[#F5F5F5]"
            >
              <social.icon className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
