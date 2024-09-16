'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react'

export default function PortfolioComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const projects = [
    { title: 'Project 1', description: 'A brief description of Project 1', link: '#' },
    { title: 'Project 2', description: 'A brief description of Project 2', link: '#' },
    { title: 'Project 3', description: 'A brief description of Project 3', link: '#' },
  ]

  const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Git']

  return (
    <div className="w-full min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Your Name</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-md p-4"
        >
          <a href="#about" className="block py-2 hover:text-blue-600 transition-colors">About</a>
          <a href="#projects" className="block py-2 hover:text-blue-600 transition-colors">Projects</a>
          <a href="#skills" className="block py-2 hover:text-blue-600 transition-colors">Skills</a>
          <a href="#contact" className="block py-2 hover:text-blue-600 transition-colors">Contact</a>
        </motion.nav>
      )}

      <main className="container mx-auto px-4 py-8">
        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            I&apos;m a passionate software developer with experience in web development and a love for creating efficient, scalable solutions.
          </p>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a href={project.link} className="text-blue-600 hover:underline">Learn more</a>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.span 
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-lg mb-4">
            I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" className="text-gray-600 hover:text-gray-800">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" className="text-gray-600 hover:text-gray-800">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-gray-800">
              <Mail size={24} />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-200 py-4 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-600">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </footer>
    </div>
  )
}