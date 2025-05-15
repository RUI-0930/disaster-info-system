"use client";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function MainMenu() {
  const [open, setOpen] = useState(false);

  const nav = [
    { label: "業務資訊", items: ["水利建設", "河川管理", "防洪工程"] },
    { label: "政府資訊公開", items: ["法規資訊", "預算決算", "標案公告"] },
    { label: "便民服務", items: ["線上申辦", "常見問答", "下載專區"] },
    { label: "關於我們", items: ["單位介紹", "組織架構", "聯絡方式"] },
  ];

  return (
    <header className="bg-teal-600 text-white">
      {/* Desktop bar */}
      <nav className="hidden lg:flex justify-center space-x-10 py-3 hover:bg-teal-700 transition-all duration-300">
        {nav.map((n) => (
          <Dropdown key={n.label} {...n} />
        ))}
      </nav>

      {/* Mobile hamburger */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3">
        <button onClick={() => setOpen(!open)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="lg:hidden bg-teal-700 px-5 py-3 space-y-2 rounded-md">
          {nav.map((n) => (
            <MobileGroup key={n.label} {...n} />
          ))}
        </div>
      )}
    </header>
  );
}


function Dropdown({ label, items }) {
  const [show, setShow] = useState(false);
  return (
    <div
      className="relative group"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <button className="text-white font-medium hover:text-yellow-300">{label}</button>
      {show && (
        <ul className="absolute left-0 top-full bg-white text-black shadow-lg mt-2 w-40 rounded-md z-10">
          {items.map((i) => (
            <li
              key={i}
              className="px-4 py-2 hover:bg-gray-100 rounded-md whitespace-nowrap"
            >
              {i}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function MobileGroup({ label, items }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="w-full text-left font-medium flex justify-between px-4 py-2 rounded-md hover:bg-teal-600 transition-all duration-200"
        onClick={() => setOpen(!open)}
      >
        {label}
        <span>{open ? "−" : "+"}</span>
      </button>
      {open && (
        <ul className="pl-4 pt-1 space-y-1">
          {items.map((i) => (
            <li key={i} className="py-1 border-b border-teal-500 text-white">
              {i}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
