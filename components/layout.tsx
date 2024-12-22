import { Header } from "./header";
import { Footer } from "./footer";
import { FloatingNav } from "./ui/floating-navbar";

const navItems = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <FloatingNav navItems={navItems} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

