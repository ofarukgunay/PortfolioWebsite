import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Moon,
  Sun,
  Globe,
  ExternalLink,
  Send,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "../hooks/use-toast";

const Portfolio = () => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");
  const [activeSection, setActiveSection] = useState("about");
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const content = {
    en: {
      nav: {
        about: "About",
        projects: "Projects",
        certificates: "Certificates",
        contact: "Contact",
      },
      hero: {
        name: "Omer Faruk Gunay",
        title:
          "Computer Engineering Student | AI & Game Developer | Cybersecurity",
        description:
          "I'm a computer engineering student passionate about artificial intelligence, cybersecurity, and software development. With leadership experience in student organizations and hands-on project work, I enjoy creating innovative and practical solutions in tech.",
      },
      about: {
        title: "About Me",
        skills: "Skills & Technologies",
        skillsList: [
          "Python",
          "FastAPI",
          "ROS 2",
          "AI/ML (YOLOv8, LLMs)",
          "C#",
          "Hardware",
          "GitHub",
          "Unity",
          "Linux",
          "Cybersecurity Fundamentals",
        ],
      },
      projects: {
        title: "Featured Projects",
        subtitle:
          "A collection of my work in AI, robotics, and software development",
        categories: [
          "AI & Machine Learning",
          "Robotics & Embedded Systems",
          "Web & Mobile Development",
          "Game Development",
          "Cybersecurity",
        ],
        items: [
          {
            title: "Blue Dreams (2D Platformer Game)",
            description:
              "A 2D platformer game built with Unity, featuring engaging gameplay and stunning visuals.",
            tech: ["Unity", "C#", "Game Development"],
            category: "Game Development",
            github: "https://github.com/ofarukgunay/BlueDreams",
          },
          {
            title: "Hamsi AUV (Autonomous Underwater Vehicle)",
            description:
              "The project aims to enable an autonomous underwater vehicle, designed and built by our team, to independently perform obstacle detection and object recognition tasks underwater using sensors, artificial intelligence, and control systems.",
            tech: ["ROS 2", "Python", "Gazebo", "Robotics"],
            category: "Robotics & Embedded Systems",
            github: "https://github.com/ofarukgunay/UnderwaterSystems",
          },
          {
            title: "Beyno App (AI Assistant in Education)",
            description:
              "Interactive learning mobile app powered by large language models for personalized education.",
            tech: ["FastAPI", "API", "Python", "Swift"],
            category: "AI & Machine Learning",
            github: "https://github.com/AIJAM-GROUP42",
          },
          {
            title: "Fullstack Portfolio Website",
            description:
              "A fullstack portfolio web application showcasing personal projects, certificates, and contact information, built with modern web technologies.",
            tech: ["React", "CSS", "FastAPI", "JavaScript"],
            category: "Web Development",
            github: "https://github.com/ofarukgunay/PortfolioWebsite",
          },
        ],
      },
      certificates: {
        title: "Courses & Certificates",
        subtitle:
          "Professional development and continuous learning achievements",
        description:
          "As a graduate of the Google Games and Apps Academy and a scholar of the Artificial Intelligence and Technology Academy, I have received extensive training in the Siber Vatan program and am constantly expanding my knowledge of emerging technologies and cybersecurity practices.",
        viewCertificates: "View All Certificates",
        verificationLink:
          "https://verified.sertifier.com/tr/profile/omerfarukgunay1155750/",
        achievements: [
          "Google Game and Application Academy Graduate",
          "AI and Technology Academy Scholar",
          "Siber Vatan Program Graduate",
          "Yetkin Gençler Program Graduate and Active Software Team Member",
        ],
      },
      contact: {
        title: "Get In Touch",
        subtitle:
          "Feel free to reach out for collaboration opportunities or just to say hello!",
        email: "o.farukgny@gmail.com",
        form: {
          name: "Name",
          email: "Email",
          message: "Message",
          send: "Send Message",
          namePlaceholder: "Your Name",
          emailPlaceholder: "your.email@example.com",
          messagePlaceholder: "Your message...",
        },
      },
    },
    tr: {
      nav: {
        about: "Hakkımda",
        projects: "Projeler",
        certificates: "Sertifikalar",
        contact: "İletişim",
      },
      hero: {
        name: "Ömer Faruk Günay",
        title:
          "Bilgisayar Mühendisliği Öğrencisi | AI & Oyun Geliştirici | Siber Güvenlik",
        description:
          "Yapay zeka, siber güvenlik ve yazılım geliştirme konularında tutkulu bir bilgisayar mühendisliği öğrencisiyim. Öğrenci organizasyonlarında liderlik deneyimim ve pratik proje çalışmalarımla, teknolojide yenilikçi ve pratik çözümler üretmeyi seviyorum.",
      },
      about: {
        title: "Hakkımda",
        skills: "Yetenekler & Teknolojiler",
        skillsList: [
          "Python",
          "FastAPI",
          "ROS 2",
          "AI/ML (YOLOv8, LLMs)",
          "C#",
          "Hardware",
          "GitHub",
          "Unity",
          "Linux",
          "Siber Güvenlik Temelleri",
        ],
      },
      projects: {
        title: "Öne Çıkan Projeler",
        subtitle:
          "AI, robotik ve yazılım geliştirme alanındaki çalışmalarımdan bir koleksiyon",
        categories: [
          "AI & Makine Öğrenmesi",
          "Robotik & Gömülü Sistemler",
          "Web & Mobil Geliştirme",
          "Siber Güvenlik",
          "Oyun Geliştirme",
        ],
        items: [
          {
            title: "Blue Dreams (2D Platformer Oyunu)",
            description:
              "Unity ile geliştirilen, etkileyici görseller ve sürükleyici oyun deneyimi sunan bir 2D platformer oyunu.",
            tech: ["Unity", "C#", "Oyun Geliştirme"],
            category: "Oyun Geliştirme",
            github: "https://github.com/ofarukgunay/BlueDreams",
          },
          {
            title: "Hamsi AUV (Otonom Sualtı Aracı)",
            description:
              "Ekibimiz tarafından tasarlanıp üretilen otonom bir su altı aracının, sensörler, yapay zeka ve kontrol sistemleri ile su altında engel algılama ve nesne tespiti görevlerini bağımsız olarak gerçekleştirmesini amaçlamaktadır.",
            tech: ["ROS 2", "Python", "Gazebo", "Robotics"],
            category: "Robotik & Gömülü Sistemler",
            github: "https://github.com/ofarukgunay/UnderwaterSystems",
          },
          {
            title: "Beyno App (Eğitim'de AI Asistanı)",
            description:
              "Kişiselleştirilmiş eğitim için büyük dil modelleriyle güçlendirilmiş interaktif öğrenme mobil uygulaması.",
            tech: ["FastAPI", "LLMs", "Python", "React"],
            category: "AI & Makine Öğrenmesi",
            github: "https://github.com/AIJAM-GROUP42",
          },
          {
            title: "Fullstack Portföy Web Sitesi",
            description:
              "Kişisel projelerimi, sertifikalarımı ve iletişim bilgilerimi sergileyen modern web teknolojileriyle inşa edilmiş bir fullstack portföy web uygulaması.",
            tech: ["React", "CSS", "FastAPI", "JavaScript"],
            category: "Web Geliştirme",
            github: "https://github.com/ofarukgunay/PortfolioWebsite",
          },
        ],
      },
      certificates: {
        title: "Kurslar & Sertifikalar",
        subtitle: "Mesleki gelişim ve sürekli öğrenme başarıları",
        description:
          "Google Oyun ve Uygulama Akademisi mezunu ve Yapay Zeka ve Teknoloji Akademisi bursiyeri olarak, Siber Vatan programında kapsamlı eğitim aldım ve sürekli olarak gelişen teknolojiler ve siber güvenlik uygulamaları konusundaki bilgimi genişletiyorum.",
        viewCertificates: "Tüm Sertifikaları Görüntüle",
        verificationLink:
          "https://verified.sertifier.com/tr/profile/omerfarukgunay1155750/",
        achievements: [
          "Google Oyun ve Uygulama Akademisi Mezunu",
          "Yapay Zeka ve Teknoloji Akademisi Bursiyeri",
          "Siber Vatan Programı Mezunu",
          "Yetkin Gençler Programı Mezunu ve Aktif Yazılım Ekibi Üyesi",
        ],
      },
      contact: {
        title: "İletişime Geçin",
        subtitle:
          "İş birliği fırsatları için veya sadece merhaba demek için çekinmeden ulaşın!",
        email: "o.farukgny@gmail.com",
        form: {
          name: "Ad",
          email: "E-posta",
          message: "Mesaj",
          send: "Mesaj Gönder",
          namePlaceholder: "Adınız",
          emailPlaceholder: "ornek@email.com",
          messagePlaceholder: "Mesajınız...",
        },
      },
    },
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ofarukgunay/",
      icon: Linkedin,
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      url: "https://github.com/ofarukgunay",
      icon: Github,
      color: "hover:text-gray-800 dark:hover:text-gray-300",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/omerr_gny",
      icon: Instagram,
      color: "hover:text-pink-600",
    },
  ];

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "tr" : "en");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onSubmit = (data) => {
    // Mock form submission
    toast({
      title: language === "en" ? "Message sent!" : "Mesaj gönderildi!",
      description:
        language === "en"
          ? "Thank you for your message. I'll get back to you soon!"
          : "Mesajınız için teşekkürler. Size en kısa sürede dönüş yapacağım!",
    });
    reset();
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "certificates", "contact"];
      const scrollPos = window.scrollY + 100;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-500">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-2xl font-bold text-blue-600 dark:text-cyan-400">
              ÖFG
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              {Object.entries(currentContent.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-cyan-400 ${
                    activeSection === key
                      ? "text-blue-600 dark:text-cyan-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {value}
                </button>
              ))}
            </nav>

            {/* Theme & Language Toggle */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {theme === "light" ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Globe className="h-4 w-4 mr-1" />
                {language.toUpperCase()}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Profile Photo */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <img
                  src="/images/Roma.jpg"
                  alt={currentContent.hero.name}
                  className="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800 animate-fade-in"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 dark:from-cyan-400/20 dark:to-blue-400/20"></div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
              {currentContent.hero.name}
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 dark:text-cyan-400 mb-8 animate-fade-in-delay">
              {currentContent.hero.title}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-delay-2">
              {currentContent.hero.description}
            </p>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-16">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-600 dark:text-gray-400 ${social.color} transition-colors transform hover:scale-110 duration-200`}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>

            {/* Skills */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                {currentContent.about.skills}
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {currentContent.about.skillsList.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium bg-blue-100 dark:bg-cyan-900 text-blue-800 dark:text-cyan-100 hover:bg-blue-200 dark:hover:bg-cyan-800 transition-colors transform hover:scale-105 duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {currentContent.projects.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {currentContent.projects.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.projects.items.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-900 border-0 shadow-lg"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-blue-200 dark:border-cyan-700 text-blue-700 dark:text-cyan-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {currentContent.certificates.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {currentContent.certificates.subtitle}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {currentContent.certificates.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {currentContent.certificates.achievements.map(
              (achievement, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-900 border-0 shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-cyan-900 dark:to-blue-900 rounded-full flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-blue-600 dark:text-cyan-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-center text-gray-700 dark:text-gray-300 font-medium">
                      {achievement}
                    </p>
                  </CardContent>
                </Card>
              )
            )}
          </div>

          <div className="text-center">
            <a
              href={currentContent.certificates.verificationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              {currentContent.certificates.viewCertificates}
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {currentContent.contact.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {currentContent.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 dark:bg-cyan-900 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Email
                  </h3>
                  <a
                    href={`mailto:${currentContent.contact.email}`}
                    className="text-blue-600 dark:text-cyan-400 hover:underline"
                  >
                    {currentContent.contact.email}
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Social Media
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-600 dark:text-gray-400 ${social.color} transition-colors transform hover:scale-110 duration-200`}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-white dark:bg-gray-900 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">
                  {currentContent.contact.form.send}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {currentContent.contact.form.name}
                    </label>
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      placeholder={currentContent.contact.form.namePlaceholder}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    />
                    {errors.name && (
                      <span className="text-red-500 text-sm">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {currentContent.contact.form.email}
                    </label>
                    <input
                      {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                      type="email"
                      placeholder={currentContent.contact.form.emailPlaceholder}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm">
                        Please enter a valid email
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {currentContent.contact.form.message}
                    </label>
                    <textarea
                      {...register("message", { required: true })}
                      rows="4"
                      placeholder={
                        currentContent.contact.form.messagePlaceholder
                      }
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                    ></textarea>
                    {errors.message && (
                      <span className="text-red-500 text-sm">
                        This field is required
                      </span>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-lg transition-colors transform hover:scale-105 duration-200"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {currentContent.contact.form.send}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>© 2025 {currentContent.hero.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
