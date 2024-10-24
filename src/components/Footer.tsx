import { Facebook, Instagram, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
  ];

  return (
    <footer className="bg-white border-t mt-auto py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex justify-center space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Button
                key={label}
                variant="ghost"
                size="icon"
                className="hover:text-indigo-600 transition-colors"
                asChild
              >
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
            ))}
          </div>
          <p className="text-center text-sm text-gray-600">
            The platform developed is open source and the open community is ComicFix
          </p>
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Study Planner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;