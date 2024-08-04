import React from 'react';
import Navbar from '../Components/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-slate-300 min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-8 mx-4 lg:mx-10 my-10">
          <h1 className="text-3xl font-bold text-center mb-6">About TaskTide</h1>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to TaskTide, your ultimate task management companion! Our application is designed to
            help you stay organized, productive, and on top of your daily tasks with ease. Whether you're
            managing personal errands, professional projects, or simply planning your day, TaskTide is here
            to assist you every step of the way.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            At TaskTide, we believe that effective task management is the key to success and peace of mind.
            Our mission is to provide a simple, intuitive, and powerful tool that helps you streamline your tasks
            and achieve your goals effortlessly.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
            <li>Intuitive Interface: Easily add, edit, and delete tasks with our user-friendly interface.</li>
            <li>Priority Levels: Organize your tasks by priority to focus on what's most important.</li>
            <li>Due Dates and Reminders: Set due dates and reminders to never miss a deadline.</li>
            <li>Task Categories: Categorize your tasks for better organization and clarity.</li>
            <li>Progress Tracking: Monitor your progress and stay motivated by completing tasks.</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Why Choose TaskTide?</h2>
          <p className="text-lg text-gray-700 mb-6">
            TaskTide is more than just a Todo application; it's a comprehensive solution for managing your
            time and tasks efficiently. We are committed to continuously improving our app to meet your needs
            and enhance your productivity.
          </p>
          <p className="text-lg text-gray-700">
            Thank you for choosing TaskTide. We hope our application helps you achieve more and worry less. If
            you have any feedback or suggestions, feel free to reach out to us. Together, let's ride the tide of productivity!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
