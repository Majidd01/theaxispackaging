import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface TOCItem {
  id: string;
  level: number;
  text: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
  onItemClick?: (id: string) => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ 
  items,
  onItemClick 
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      for (const item of items) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveId(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const handleClick = (id: string) => {
    setActiveId(id);
    if (onItemClick) {
      onItemClick(id);
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (items.length === 0) return null;

  return (
    <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
      <div className="flex items-center justify-between mb-3 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="font-semibold text-gray-900">Table of Contents</h3>
        <ChevronDown
          size={20}
          className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {isOpen && (
        <nav className="space-y-2">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`block w-full text-left text-sm transition-colors py-1 px-2 rounded ${
                activeId === item.id
                  ? "text-blue-600 font-medium bg-blue-50"
                  : "text-gray-700 hover:text-blue-600"
              }`}
              style={{ paddingLeft: `${(item.level - 2) * 16 + 8}px` }}
            >
              {item.text}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
};
