import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from './card';
import { Smartphone, Code, Zap, Shield, Globe, Laptop, Cloud, Users } from 'lucide-react';
import Getintouch from "../GetInTouch/getintouch";

const AppDevelopment = () => {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8 text-blue-500" />,
      title: "Native Performance",
      description: "Apps built with native code for optimal speed and responsiveness on both iOS and Android platforms."
    },
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "Cross-Platform Development",
      description: "Single codebase for multiple platforms, reducing development time and maintenance costs."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "Real-time Updates",
      description: "Implement real-time features like chat, notifications, and live data synchronization."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Secure Architecture",
      description: "Built-in security features including encryption, secure authentication, and data protection."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "Offline Functionality",
      description: "Apps work seamlessly offline with data synchronization when connection is restored."
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: "Cloud Integration",
      description: "Seamless integration with cloud services for scalable backend operations."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, target audience, and business goals to create a comprehensive development strategy."
    },
    {
      number: "02",
      title: "UI/UX Design",
      description: "Our designers create intuitive and engaging interfaces that provide exceptional user experiences."
    },
    {
      number: "03",
      title: "Development",
      description: "We build your app using the latest technologies and best practices in mobile development."
    },
    {
      number: "04",
      title: "Testing & QA",
      description: "Rigorous testing across different devices and scenarios to ensure quality and reliability."
    },
    {
      number: "05",
      title: "Deployment",
      description: "We handle the app store submission process and ensure successful deployment."
    },
    {
      number: "06",
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and maintenance to keep your app running smoothly."
    }
  ];

  // Sample showcase apps (placeholder data)
  const showcaseApps = [
    {
      title: "HealthTrack Pro",
      description: "Fitness & wellness tracking application",
      image: "https://res.cloudinary.com/elonatech/image/upload/v1709817850/webDesignPage/web_dev_prchtz.jpg",
      category: "Healthcare"
    },
    {
      title: "EduLearn",
      description: "Interactive learning platform",
      image: "https://res.cloudinary.com/elonatech/image/upload/v1709817850/webDesignPage/web_dev_prchtz.jpg",
      category: "Education"
    },
    {
      title: "SmartCommerce",
      description: "E-commerce solution with AR features",
      image: "https://res.cloudinary.com/elonatech/image/upload/v1709817850/webDesignPage/web_dev_prchtz.jpg",
      category: "Retail"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mobile App Development Services</title>
        <meta name="description" content="Professional mobile app development services for iOS and Android. We create custom, high-performance mobile applications that deliver exceptional user experiences." />
        <link rel="canonical" href="https://elonatech.com.ng/app-development" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/elonatech/image/upload/v1709817850/webDesignPage/web_dev_prchtz.jpg')] opacity-10 bg-cover bg-center" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold text-white mb-6"
            >
              Transform Your Ideas Into Powerful Mobile Apps
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-200 mb-8"
            >
              We develop innovative mobile applications that engage users and drive business growth
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Start Your Project
            </motion.button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our App Development Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Development Process */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-4 top-0 text-6xl font-bold text-gray-100">
                  {step.number}
                </div>
                <div className="relative z-10 pl-4">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* App Showcase */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Apps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcaseApps.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg"
              >
                <img 
                  src={app.image} 
                  alt={app.title}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-sm text-gray-300 mb-2">{app.category}</span>
                  <h3 className="text-xl font-semibold mb-1">{app.title}</h3>
                  <p className="text-gray-300">{app.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {['React Native', 'Flutter', 'iOS (Swift)', 'Android (Kotlin)'].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-gray-50"
              >
                <h3 className="text-lg font-semibold">{tech}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Get in Touch Section */}
      <Getintouch />
    </>
  );
};

export default AppDevelopment;