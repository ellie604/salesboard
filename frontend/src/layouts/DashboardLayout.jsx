// src/layouts/DashboardLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
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
  
    return (
      <div className="flex h-screen">
        {/* Sidebar - vertical */}
        <aside className="w-64 bg-white border-r p-4 flex flex-col items-start">
          <img src="/logo.png" alt="California Business Sales" className="mb-6 w-full" />
          <nav className="flex flex-col space-y-2 w-full">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                className={`text-left border border-black px-3 py-1 w-full ${
                  item === 'Home' ? 'bg-purple-300' : 'hover:bg-gray-100'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </aside>
  
        {/* Main content area */}
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
          <Outlet />
        </main>
      </div>
    );
  }
  