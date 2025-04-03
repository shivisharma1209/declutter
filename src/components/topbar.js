import { IoCalendarOutline, IoChevronDown } from "react-icons/io5";
import { useState } from "react";

export default function TopBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-sm text-black">
      <h2 className="text-xl font-semibold">Quick Commerce</h2>
      <div className="relative">
        <div
          className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md cursor-pointer"
          onClick={toggleDropdown}
        >
          <IoCalendarOutline className="text-black" />
          <span>Aug 01, 2024 - Aug 03, 2024</span>
          <IoChevronDown
            className={`text-black transition-transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
            <ul className="py-1">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Last 7 Days
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Last 30 Days
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Custom Range
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}