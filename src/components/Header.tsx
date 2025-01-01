import React from 'react';
import { Menu, Github, Linkedin, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-900">JD</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
            <a href="#projects" className="text-gray-700 hover:text-gray-900">Projects</a>
            <a href="#skills" className="text-gray-700 hover:text-gray-900">Skills</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
              <Linkedin className="w-5 h-5" />
            </a>
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}