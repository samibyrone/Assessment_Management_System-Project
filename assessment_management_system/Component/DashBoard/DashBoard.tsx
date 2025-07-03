'use client'
import * as React from 'react';
import Link from 'next/link'
import Image from "next/image";
import { useState } from 'react';
import { features } from '../../Dashboard_Features/Features'
import { ArrowRight, CheckCircle, X, Menu } from 'lucide-react'
import { testimonials } from '../../Dashboard_Features/Testimonials'

export default function LandingPage() {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      <div className={`fixed w-full bg-blue-900 transition-all duration-300 h-[12vh] z-[1000] shadow-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center mt-10">
              <div className="flex-shrink-0">
                <Link href="#home" className="text-4xl font-bold text-white mt-10 items-center hover:text-cyan-500">AMS Hub</Link>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 mt-10">
                <a href="#features" className="group relative text-white hover:text-green-600 px-3 py-2 rounded-md text-xl font-semibold after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-400 after:w-0 after:left-0 after:bottom-[-5px] hover:after:w-full after:transition-all after:duration-300">Features</a>
                <a href="#about" className="group relative text-white hover:text-green-400 px-3 py-2 rounded-md text-xl font-semibold after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-400 after:w-0 after:left-0 after:bottom-[-5px] hover:after:w-full after:transition-all after:duration-300">About</a>
                <a href="#testimonials" className="group relative text-white hover:text-green-400 px-3 py-2 rounded-md text-xl font-semibold after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-400 after:w-0 after:left-0 after:bottom-[-5px] hover:after:w-full after:transition-all after:duration-300">Testimonials</a>
                <Link href="/login" className="group relative text-white hover:text-green-400 px-3 py-2 rounded-md text-xl font-semibold after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-400 after:w-0 after:left-0 after:bottom-[-5px] hover:after:w-full after:transition-all after:duration-300">Become a Creator</Link>
                <Link href="/signup" className="group relative text-white hover:text-black hover:bg-cyan-500 px-3 py-2 rounded-md text-xl font-semibold after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-400 after:w-0 after:left-0 after:bottom-[-5px] hover:after:w-full after:transition-all after:duration-300">Get Started</Link>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-primary p-2"
              >
                {isMenuOpen ? <X className="w-8 h-8 mt-10" /> : <Menu className="w-8 h-8 mt-10" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t mt-8">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
              <a href="#features" className="group relative bg-primary text-gray-600 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-semibold after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300 after:w-0 after:left-0 after:bottom-[-5px] hover:after:w-full after:transition-all after:duration-300">Features</a>
              <a href="#about" className="group relative bg-primary text-gray-600 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-semibold after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300 after:w-0 after:left-0 after:bottom-[-5px] hover:after:w-full after:transition-all after:duration-300">About</a>
              <a href="#testimonials" className="group relative bg-primary text-gray-600 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-semibold after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300 after:w-0 after:left-0 after:bottom-[-5px] hover:after:w-full after:transition-all after:duration-300">Testimonials</a>
              <Link href="/login" className="group relative bg-primary text-gray-600 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-semibold after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300 after:w-0 after:left-0 after:bottom-[-5px] hover:after:w-full after:transition-all after:duration-300">Become a Creator</Link>
              <Link href="/signup" className="group relative bg-primary text-gray-600 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-semibold">Get Started</Link>
            </div>
          </div>
        )}
      </div>
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mt-20">
            <Image src="/assessment.jpeg" width={500} height={300} alt="assessmentDesign" className="w-full h-auto mb-12" priority/>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-10">
              Streamline Your
              <span className="text-rose-700"> Assessment </span>
              Process
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A comprehensive platform for creating, delivering, and evaluating assessments. 
              Perfect for educators, employers, and learners seeking efficient assessment solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <Link href="/signup" className=" border border-primary text-primary px-8 py-3 mr-5 mt-10 rounded-lg text-lg font-semibold hover:bg-blue-800 hover:text-white transition-colors flex items-center justify-center">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/marketplace" className="border border-primary text-primary px-8 py-3 mr-5 mt-10 rounded-lg text-lg font-semibold hover:bg-blue-800 hover:text-white transition-colors">
                Browse Assessments
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              Powerful Features for Every User
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl font-semibold mx-auto mb-20">
              Whether you are a student, educator, or creator, our platform provides the tools you need to succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-200 transform hover:scale-105 mb-7 ml-5">
                <div className="mb-4 text-orange-500">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white mt-10 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-10">
            <div>
              <h2 className="text-3xl md:text-4xl items-center font-bold text-gray-900 mb-10 ">
                Designed for Modern Assessment Needs
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our platform addresses the inefficiencies in traditional assessment workflows by providing 
                a centralized, automated solution that serves multiple user types.
              </p>
              <div className="space-y-4 mt-10">
                <div className="flex items-start">
                  <CheckCircle className="w-8 h-8 text-green-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">For Students &amp; Job Seekers</h4>
                    <p className="text-gray-600">Take skill-based assessments, track progress, and earn valuable badges</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-8 h-8 text-green-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">For Educators</h4>
                    <p className="text-gray-600">Create and manage quizzes with auto-scoring and detailed feedback</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-8 h-8 text-green-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">For Employers</h4>
                    <p className="text-gray-600">Streamline interviews with instant assessment results</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-400 p-8 rounded-lg hover:shadow-md transform scale-105 transition duration-200">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-700 mb-3">50,000+</div>
                <div className="text-primary mb-5">Assessments Created</div>
                <div className="text-4xl font-bold text-blue-700 mb-3">100,000+</div>
                <div className="text-primary mb-5">Users Worldwide</div>
                <div className="text-4xl font-bold text-blue-700 mb-3">20,000+</div>
                <div className="text-primary mb-5">Badge Issued</div>
                <div className="text-4xl font-bold text-blue-700 mb-3">95%</div>
                <div className="text-primary">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">
              What Our Users Say
            </h2>
            <p className="text-2xl text-gray-600 font-semibold">
              Join thousands of satisfied users who have transformed their assessment process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-200 transform hover:scale-105  mb-7 ml-5">
                <p className="text-gray-600 mb-4 italic">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-purple-400">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 mt-20 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ready to Transform Your Assessment Process?
          </h2>
          <p className="text-2xl text-blue-900 font-semibold mb-8">
            Join thousands of users who have already streamlined their assessment workflows using our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="border bg-white text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 hover:text-white transition-colors">
              Start Free Trial
            </Link>
            <Link href="/marketplace" className="border bg-white text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 hover:text-white transition-colors">
              Explore Platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
