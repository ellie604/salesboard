// src/components/Sidebar.jsx
import React from 'react';

const navItems = [
  'Home',
  'Email Agent',
  'Listing Agreement',
  'Questionnaire',
  'Upload Docs',
  'Buyer Activity',
  'Purchase Agreement',
  'Due Diligence',
  'Pre Close Checklist',
  'Closing Docs',
  'After The Sale',
];

export default function Sidebar({ activeItem = 'Home' }) {
  return (
    <aside className="w-64 bg-white border-r h-screen p-4">
      <img src="/logo.png" alt="California Business Sales" className="mb-6 w-full" />
      <nav className="flex flex-col space-y-1">
        {navItems.map((item, idx) => (
          <button
            key={idx}
            className={`text-left border border-black px-3 py-1 ${
              item === activeItem ? 'bg-purple-300' : 'hover:bg-gray-100'
            }`}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}
