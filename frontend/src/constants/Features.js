import image1 from "../assets/icons/webicon.svg";
import image2 from "../assets/icons/locked.svg";
import image3 from "../assets/icons/menu.svg";
import image4 from "../assets/icons/secure.svg";

const main = {
  head: "How does a password manager work?",
  body: "Using a password manager is one of the best and simplest ways to keep your online accounts secure. Here’s how you can set up your password management app.",
};

const ele = [
  {
    head: "Use SecureHold",
    body: "Browse a password manager on your device or download a browser extension.",
    icon: `${image1}`,
    bgClr: "bg-gray-800",
    bgHover: "hover:bg-gray-900",
  },

  {
    head: "Import passwords",
    body: "Import or manually add your passwords and other sensitive data to your password vault.",
    icon: `${image2}`,
    bgClr: "bg-zinc-800",
    bgHover: "hover:bg-zinc-900",
  },
  {
    head: "Organize your vault",
    body: "Organize your passwords using folders in the password manager for easier access.",
    icon: `${image3}`,
    bgClr: "bg-slate-800",
    bgHover: "hover:bg-slate-900",
  },
  {
    head: "Improve your security",
    body: "Synchronize your passwords across multiple devices and explore additional security features.",
    icon: `${image4}`,
    bgClr: "bg-neutral-800",
    bgHover: "hover:bg-neutral-900",
  },
];

export default ele;
export { main };
