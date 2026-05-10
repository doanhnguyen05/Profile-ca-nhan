import { useState, useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  Code,
  Database,
  Shield,
  Brain,
  Smartphone,
  Globe,
  GraduationCap,
  Github,
  Mail,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  Award,
  Target,
  Users,
  Lightbulb,
  BookOpen,
  CheckCircle2,
  Rocket,
  Search,
  FileText,
  Lock,
  Cpu,
  Server,
  MessageSquare,
  Phone,
  Facebook,
  Linkedin,
  Video,
  Star,
  Zap,
  TrendingUp,
  Sparkles,
} from 'lucide-react';

// Import personal images
import profileImage1 from '/src/imports/9F87094A-F1FC-49AF-8B60-98D5D97E9634_1_105_c.jpeg';
import profileImage2 from '/src/imports/4105936C-596B-47CE-9000-4404BF3A6198_1_105_c.jpeg';
import profileImage3 from '/src/imports/6355C408-0438-49EF-8705-802A2629F96D_1_102_o.jpeg';
import profileImage4 from '/src/imports/F8D396CD-107E-445E-B909-F7DA1E016BA7_1_105_c.jpeg';
import profileImage5 from '/src/imports/CF2CC101-E0F6-43B1-B739-23EE2A83FF0A_4_5005_c.jpeg';
import profileImage6 from '/src/imports/288134AB-D01E-46FD-808E-0270154C748C_1_105_c.jpeg';
import profileImage7 from '/src/imports/77E380B4-E761-4878-BB33-E5A80706ACA4_1_105_c.jpeg';

// Import project images
import projectImage1 from '/src/imports/image.png';
import projectImage2 from '/src/imports/image-1.png';
import projectImage3 from '/src/imports/image-2.png';
import projectImage4 from '/src/imports/image-3.png';
import projectImage5 from '/src/imports/image-4.png';

// Import logo
import logo from '/src/imports/image-6.png';
import epuLogo from '/src/imports/epu-logo.png';

// Custom hook for scroll animations
function useScrollAnimation() {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return { elementRef, isVisible };
}

// Animated Section Component
function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState<Record<number, boolean>>({});
  const [expandedResearch, setExpandedResearch] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'goals', 'education', 'skills', 'projects', 'research', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navigationItems = [
    { id: 'about', label: 'Về tôi' },
    { id: 'skills', label: 'Kỹ năng' },
    { id: 'projects', label: 'Dự án' },
    { id: 'research', label: 'Nghiên cứu' },
    { id: 'contact', label: 'Liên hệ' },
  ];

  const socialLinks = [
    { icon: Phone, label: 'Phone/Zalo', href: 'tel:0344939275', color: 'from-green-500 to-emerald-500' },
    { icon: Facebook, label: 'Facebook', href: 'https://web.facebook.com/doanh.nguyen.155218/', color: 'from-blue-600 to-blue-700' },
    { icon: Video, label: 'TikTok', href: 'https://www.tiktok.com/@coding803?lang=vi-VN', color: 'from-pink-600 to-rose-600' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/nguyễn-doanh-0425093ab/', color: 'from-blue-500 to-cyan-600' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/doanhnguyen05', color: 'from-gray-700 to-gray-900' },
  ];

  const floatingIcons = [
    { Icon: Code, delay: '0s', duration: '20s', top: '10%', left: '10%' },
    { Icon: Database, delay: '2s', duration: '25s', top: '20%', left: '80%' },
    { Icon: Brain, delay: '4s', duration: '22s', top: '60%', left: '15%' },
    { Icon: Shield, delay: '6s', duration: '28s', top: '70%', left: '85%' },
    { Icon: Smartphone, delay: '8s', duration: '24s', top: '40%', left: '90%' },
    { Icon: Cpu, delay: '10s', duration: '26s', top: '80%', left: '20%' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 3 + 'px',
                height: Math.random() * 3 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animation: `twinkle ${Math.random() * 5 + 3}s infinite ${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Floating Tech Icons Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {floatingIcons.map(({ Icon, delay, duration, top, left }, index) => (
          <div
            key={index}
            className="absolute opacity-5"
            style={{
              top,
              left,
              animation: `float ${duration} infinite ${delay}`,
            }}
          >
            <Icon className="w-20 h-20 text-blue-400" />
          </div>
        ))}
      </div>

      {/* Social Media Sidebar */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            style={{ animation: `slideInRight 0.5s ease-out ${index * 0.1}s both` }}
          >
            <div className={`p-3 rounded-full bg-gradient-to-r ${social.color} shadow-lg hover:scale-110 transition-transform duration-300`}>
              <social.icon className="w-5 h-5 text-white" />
            </div>
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {social.label}
            </span>
          </a>
        ))}
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <button
                  onClick={() => scrollToSection('home')}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-xl shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/60 group-hover:scale-110 transition-all duration-300">
                    <img
                      src={logo}
                      alt="NVD Logo"
                      className="h-10 w-auto brightness-0 invert"
                    />
                  </div>
                </button>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-medium transition-all duration-300 relative ${
                      activeSection === item.id ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse"></span>
                    )}
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800" style={{ animation: 'slideDown 0.3s ease-out' }}>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                      activeSection === item.id ? 'bg-blue-900/50 text-cyan-400' : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <AnimatedSection>
                <div className="text-left space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30 mb-4">
                    <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                    <span className="text-sm text-cyan-400">Welcome to my portfolio</span>
                  </div>

                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                    <span className="block mb-2">Xin chào, tôi là</span>
                    <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Nguyễn Viết Doanh
                    </span>
                  </h1>

                  <div className="text-xl sm:text-2xl text-slate-300 h-20">
                    <TypeAnimation
                      sequence={[
                        'Sinh viên Công nghệ thông tin',
                        2000,
                        'Định hướng Dev Mobile',
                        2000,
                        'Web, Mobile, AI',
                        2000,
                        'Database & Security',
                        2000,
                        'Học hỏi công nghệ mới',
                        2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                  </div>

                  <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                    Sinh viên năm 3 Trường Đại học Điện lực, GPA 3.39, định hướng phát triển trong lĩnh vực lập trình Web,
                    Mobile, AI và bảo mật hệ thống. Tôi đã thực hiện nhiều dự án học phần và tham gia nghiên cứu khoa học
                    liên quan đến hệ thống thông tin, dữ liệu và bảo mật.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 py-6">
                    {[
                      { value: '3.39', label: 'GPA' },
                      { value: '5+', label: 'Dự án' },
                      { value: 'IEEE', label: 'Công bố' },
                    ].map((stat, index) => (
                      <div key={index} className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all" style={{ animation: `fadeInUp 1s ease-out ${index * 0.2 + 0.5}s both` }}>
                        <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => scrollToSection('projects')}
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-medium hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all flex items-center gap-2 group"
                    >
                      Xem dự án
                      <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="px-8 py-4 bg-slate-800/50 border border-slate-700 rounded-xl font-medium hover:bg-slate-700 transition-all flex items-center gap-2"
                    >
                      <Mail className="h-5 w-5" />
                      Liên hệ
                    </button>
                  </div>
                </div>
              </AnimatedSection>

              {/* Right Column - Image */}
              <AnimatedSection delay={300}>
                <div className="relative">
                  <div className="relative w-full max-w-md mx-auto">
                    {/* Animated Ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 blur-3xl opacity-30 animate-pulse"></div>

                    {/* Main Image */}
                    <div className="relative rounded-3xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl shadow-cyan-500/20 hover:scale-105 transition-transform duration-500">
                      <img
                        src={profileImage3}
                        alt="Nguyễn Viết Doanh"
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                    </div>

                    {/* Floating Badges */}
                    <div className="absolute -top-6 -right-6 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg" style={{ animation: 'float 3s infinite' }}>
                      <div className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-white" />
                        <span className="font-semibold text-white">Sẵn sàng học hỏi</span>
                      </div>
                    </div>

                    <div className="absolute -bottom-6 -left-6 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg" style={{ animation: 'float 3s infinite 1.5s' }}>
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-white" />
                        <span className="font-semibold text-white">GPA 3.39</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative">
            <AnimatedSection>
              <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Về tôi</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-12"></div>
            </AnimatedSection>

            <div className="grid lg:grid-cols-3 gap-8 items-start mb-12">
              {/* Left - Profile Image */}
              <AnimatedSection delay={100}>
                <div className="relative rounded-2xl overflow-hidden aspect-[2/3] group cursor-pointer border-4 border-cyan-500/20 hover:border-cyan-500/50 transition-all">
                  <img
                    src={profileImage7}
                    alt="Nguyễn Viết Doanh"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </AnimatedSection>

              {/* Middle - About Text */}
              <AnimatedSection delay={200} className="lg:col-span-2">
                <div className="space-y-6">
                  <div className="space-y-4 text-slate-300 leading-relaxed">
                    <p className="text-lg">
                      Tôi là <span className="font-semibold text-cyan-400">Nguyễn Viết Doanh</span>, sinh viên năm 3 Trường Đại học Điện lực,
                      GPA 3.39, định hướng phát triển trong lĩnh vực lập trình Web, Mobile, AI và bảo mật hệ thống.
                    </p>
                    <p>
                      Trong quá trình học tập, tôi đã thực hiện nhiều dự án học phần như hệ thống quản lý nhà trọ bằng .NET và Java,
                      Edu LMS, Mobile EduLMS và hệ thống sàng lọc theo triệu chứng. Các dự án giúp tôi rèn luyện kỹ năng phân tích yêu cầu,
                      thiết kế giao diện, xây dựng chức năng, xử lý dữ liệu và viết báo cáo.
                    </p>
                    <p>
                      Bên cạnh đó, tôi đã tham gia và đang thực hiện các đề tài nghiên cứu khoa học liên quan đến bảo mật cơ sở dữ liệu,
                      Apache Spark, Elasticsearch, RabbitMQ, AI, OCR, chữ ký số và hệ thống thông tin hỗ trợ giáo dục.
                    </p>
                    <p>
                      Tôi có tinh thần tự học, khả năng nghiên cứu, tư duy phân tích hệ thống và mong muốn phát triển thành lập trình viên
                      có khả năng làm việc trên Web, Mobile và tích hợp AI.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      { title: 'Định hướng', value: 'Dev Mobile, Web, AI và hệ thống thông tin' },
                      { title: 'Điểm mạnh', value: 'Tự học, nghiên cứu, phân tích hệ thống và viết báo cáo' },
                      { title: 'Phù hợp', value: 'Mobile intern, web intern, fresher developer' },
                    ].map((item) => (
                      <div key={item.title} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                        <div className="text-sm font-semibold text-cyan-400 mb-2">{item.title}</div>
                        <p className="text-sm text-slate-300 leading-relaxed">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Skills Progress */}
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mt-6">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <TrendingUp className="text-cyan-400" />
                      Lĩnh vực tập trung
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { name: 'Phát triển Web', icon: Globe, progress: 85 },
                        { name: 'Phát triển Mobile', icon: Smartphone, progress: 75 },
                        { name: 'Trí tuệ nhân tạo', icon: Brain, progress: 70 },
                        { name: 'Bảo mật Database', icon: Database, progress: 80 },
                        { name: 'Phân tích hệ thống', icon: Cpu, progress: 78 },
                        { name: 'Nghiên cứu & Đổi mới', icon: Lightbulb, progress: 82 },
                      ].map((area, index) => (
                        <div key={area.name} className="group" style={{ animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both` }}>
                          <div className="flex items-center gap-3 mb-2">
                            <area.icon className="h-5 w-5 text-cyan-400" />
                            <span className="text-sm font-medium">{area.name}</span>
                          </div>
                          <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${area.progress}%`, animation: `growWidth 1.5s ease-out ${index * 0.1 + 0.5}s both` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Career Goals Section */}
        <section id="goals" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Background Image - More visible */}
          <div className="absolute -left-20 top-32 w-80 h-80 opacity-40 rounded-3xl overflow-hidden rotate-12 border-4 border-cyan-500/30">
            <img src={profileImage1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -right-20 bottom-20 w-96 h-96 opacity-40 rounded-3xl overflow-hidden -rotate-12 border-4 border-blue-500/30">
            <img src={profileImage4} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="max-w-7xl mx-auto relative">
            <AnimatedSection>
              <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Mục tiêu nghề nghiệp</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-12"></div>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  title: 'Hiện tại',
                  subtitle: 'Sinh viên IT',
                  description: 'Đang theo học ngành Công nghệ phần mềm tại Trường Đại học Điện lực, tập trung phát triển Web, Mobile, cơ sở dữ liệu, AI và bảo mật.',
                  icon: GraduationCap,
                  color: 'from-blue-500 to-cyan-500',
                },
                {
                  title: 'Mục tiêu ngắn hạn',
                  subtitle: 'Thực tập / Fresher',
                  description: 'Tìm cơ hội thực tập để rèn luyện quy trình làm sản phẩm thực tế, cải thiện kỹ năng lập trình, làm việc nhóm và giao tiếp trong dự án.',
                  icon: Code,
                  color: 'from-purple-500 to-pink-500',
                },
                {
                  title: 'Mục tiêu tương lai gần',
                  subtitle: 'Mobile Developer',
                  description: 'Phát triển theo hướng Mobile Development, xây dựng ứng dụng có giao diện thân thiện, luồng sử dụng rõ ràng và có khả năng kết nối API/backend.',
                  icon: Smartphone,
                  color: 'from-green-500 to-teal-500',
                },
                {
                  title: 'Mục tiêu dài hạn',
                  subtitle: 'Senior Full Stack Developer',
                  description: 'Phát triển thành lập trình viên Full Stack có thể tham gia xây dựng hệ thống Web, Mobile và tích hợp AI vào sản phẩm thực tế.',
                  icon: Rocket,
                  color: 'from-orange-500 to-red-500',
                },
              ].map((goal, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="flex gap-6 items-start group">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${goal.color} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <goal.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 group-hover:border-cyan-500/50 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-xl text-white">{goal.title}</h3>
                        <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm font-medium text-cyan-400">{goal.subtitle}</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">{goal.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 relative overflow-hidden">
          {/* Background Image - More visible */}
          <div className="absolute -right-20 top-20 w-96 h-96 opacity-40 rounded-3xl overflow-hidden -rotate-12 border-4 border-purple-500/30">
            <img src={profileImage2} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -left-20 bottom-32 w-80 h-80 opacity-40 rounded-3xl overflow-hidden rotate-12 border-4 border-green-500/30">
            <img src={profileImage6} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="max-w-7xl mx-auto relative">
            <AnimatedSection>
              <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Học vấn</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-12"></div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="max-w-4xl mx-auto">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="h-28 w-28 bg-white rounded-2xl p-3 flex-shrink-0 shadow-lg shadow-cyan-500/20 border border-cyan-500/30">
                      <img
                        src={epuLogo}
                        alt="Logo Trường Đại học Điện lực"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-2">Trường Đại học Điện lực</h3>
                      <p className="text-lg text-slate-400 mb-4">Electric Power University</p>
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="px-4 py-2 bg-blue-600 rounded-full text-sm font-medium">Cử nhân - Công nghệ phần mềm</span>
                        <span className="px-4 py-2 bg-purple-600 rounded-full text-sm font-medium">Sinh viên năm 3</span>
                        <span className="px-4 py-2 bg-cyan-600 rounded-full text-sm font-medium">09/2023 - Hiện tại</span>
                        <span className="px-4 py-2 bg-green-600 rounded-full text-sm font-medium">GPA: 3.39</span>
                      </div>
                      <p className="text-slate-300 mb-6">
                        <span className="font-semibold text-cyan-400">Tập trung:</span> Web, Mobile, cơ sở dữ liệu, AI và bảo mật. Đã thực hiện các dự án môn học .NET, Java, Edu LMS, Mobile EduLMS và hệ thống sàng lọc triệu chứng.
                      </p>
                      <div>
                        <h4 className="font-bold text-lg mb-3">Các môn học nổi bật</h4>
                        <div className="flex flex-wrap gap-2">
                          {[
                            'Lập trình .NET',
                            'Lập trình Java',
                            'Lập trình Web nâng cao',
                            'Lập trình thiết bị di động',
                            'Trí tuệ nhân tạo',
                            'Cơ sở dữ liệu',
                            'Phân tích thiết kế hệ thống',
                            'An toàn và bảo mật thông tin',
                          ].map((course, index) => (
                            <span
                              key={course}
                              className="px-3 py-1 bg-slate-700/50 rounded-lg text-sm border border-slate-600 hover:border-cyan-500/50 transition-colors"
                              style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both` }}
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Background Images - More visible */}
          <div className="absolute -right-20 top-20 w-96 h-96 opacity-40 rounded-3xl overflow-hidden rotate-12 border-4 border-cyan-500/30">
            <img src={profileImage3} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -left-20 bottom-20 w-80 h-80 opacity-40 rounded-3xl overflow-hidden -rotate-12 border-4 border-orange-500/30">
            <img src={profileImage5} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="max-w-7xl mx-auto relative">
            <AnimatedSection>
              <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Kỹ năng chuyên môn</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-12"></div>
            </AnimatedSection>

            <div className="grid lg:grid-cols-3 gap-6">
              {[
                {
                  category: 'Kỹ năng chính',
                  icon: Code,
                  color: 'from-blue-500 to-cyan-500',
                  description: 'Các kỹ năng đã sử dụng trong dự án học phần và đang tiếp tục củng cố.',
                  items: ['.NET Core (1 năm)', 'Java (< 1 năm)', 'React (< 1 năm)', 'CSS (1 năm)', 'Git/GitHub (1 năm)', 'HTML5 (1 năm)', 'JavaScript (1 năm)', 'MySQL (1 năm)', 'UI-UX (1 năm)'],
                },
                {
                  category: 'Kỹ năng bổ sung',
                  icon: Brain,
                  color: 'from-purple-500 to-pink-500',
                  description: 'Các công nghệ tôi đã tiếp cận qua dự án, nghiên cứu và sản phẩm demo.',
                  items: ['Artificial Intelligence (< 1 năm)', 'ElasticSearch (< 1 năm)', 'Mobile Development (< 1 năm)', 'PostgreSQL (< 1 năm)', 'RabbitMQ (< 1 năm)', 'REST API (< 1 năm)'],
                },
                {
                  category: 'Kỹ năng mềm & ngoại ngữ',
                  icon: Users,
                  color: 'from-green-500 to-teal-500',
                  description: 'Những kỹ năng hỗ trợ quá trình học tập, nghiên cứu và làm việc nhóm.',
                  items: ['Thích nghi nhanh', 'Lắng nghe và tiếp thu góp ý', 'Học hỏi công nghệ mới', 'Thuyết trình', 'Viết báo cáo', 'Kiên trì', 'Làm việc nhóm', 'Tiếng Anh sơ cấp'],
                },
              ].map((skill, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 hover:scale-105 transition-all group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color}`}>
                        <skill.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">{skill.category}</h3>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">{skill.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-700/50 rounded-lg text-sm hover:bg-cyan-500/20 transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 relative overflow-hidden">
          {/* Background Images - More visible with borders */}
          <div className="absolute -left-24 top-20 w-96 h-96 opacity-40 rounded-3xl overflow-hidden rotate-12 border-4 border-blue-500/30">
            <img src={profileImage6} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -right-24 top-1/2 w-80 h-80 opacity-40 rounded-3xl overflow-hidden -rotate-12 border-4 border-pink-500/30">
            <img src={profileImage7} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute left-1/3 bottom-20 w-72 h-72 opacity-40 rounded-3xl overflow-hidden rotate-6 border-4 border-purple-500/30">
            <img src={profileImage2} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="max-w-7xl mx-auto relative">
            <AnimatedSection>
              <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Dự án học tập</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-12"></div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  period: '03/2026 - 05/2026',
                  title: 'Hệ thống sàng lọc AI',
                  description: 'Hệ thống hỗ trợ sàng lọc theo triệu chứng, ứng dụng kiến thức AI để xử lý dữ liệu đầu vào và đưa ra kết quả gợi ý phù hợp.',
                  role: 'Tôi phân tích bài toán sàng lọc dựa trên triệu chứng, xây dựng chức năng nhập thông tin triệu chứng, xử lý dữ liệu đầu vào, hiển thị kết quả gợi ý và viết báo cáo mô tả bài toán, phương pháp xử lý, kết quả thực hiện.',
                  tech: ['Artificial Intelligence', 'Data Processing', 'Logic Reasoning', 'Python/AI Basic'],
                  github: 'https://github.com/doanhnguyen05/hethongsangloctheotrieuchung.git',
                  icon: Brain,
                  color: 'from-indigo-500 to-blue-500',
                  image: projectImage5,
                },
                {
                  period: '02/2026 - 05/2026',
                  title: 'Mobile EduLMS',
                  description: 'Ứng dụng di động hỗ trợ người học truy cập nội dung học tập, xem danh sách khóa học, theo dõi thông tin khóa học và sử dụng các chức năng cơ bản của hệ thống học tập trực tuyến.',
                  role: 'Tôi thiết kế giao diện mobile thân thiện, xây dựng các màn hình đăng nhập, danh sách khóa học, chi tiết khóa học và nội dung học tập; phân tích luồng điều hướng giữa các màn hình và tìm hiểu cách xử lý dữ liệu người dùng, tích hợp với backend.',
                  tech: ['Mobile Development', 'Mobile UI', 'App Screen Flow', 'API Integration', 'User Experience'],
                  github: 'https://github.com/doanhnguyen05/MobileEduLMS.git',
                  icon: Smartphone,
                  color: 'from-orange-500 to-red-500',
                  image: projectImage4,
                },
                {
                  period: '01/2026 - 04/2026',
                  title: 'Edu LMS Web',
                  description: 'Hệ thống Web hỗ trợ quản lý đào tạo trực tuyến cho quản trị viên, giảng viên và người học.',
                  role: 'Tôi phân tích yêu cầu và nghiệp vụ hệ thống học tập trực tuyến, thiết kế chức năng cho Admin, Instructor và Learner, xây dựng giao diện và chức năng quản lý khóa học, bài học, người dùng, thiết kế cơ sở dữ liệu và áp dụng phân quyền theo vai trò.',
                  tech: ['HTML', 'CSS', 'JavaScript', 'Backend', 'Database', 'MVC', 'Role-based Access Control'],
                  github: 'https://github.com/doanhnguyen05/Edu_LMS.git',
                  icon: GraduationCap,
                  color: 'from-green-500 to-teal-500',
                  image: projectImage3,
                },
                {
                  period: '09/2025 - 12/2025',
                  title: 'Quản lý nhà trọ Java',
                  description: 'Hệ thống quản lý nhà trọ sử dụng Java, tập trung vào lập trình hướng đối tượng, quản lý dữ liệu và xử lý các chức năng nghiệp vụ cơ bản.',
                  role: 'Tôi áp dụng lập trình hướng đối tượng để xây dựng các lớp xử lý dữ liệu, xây dựng chức năng quản lý phòng trọ, khách thuê, hợp đồng và hóa đơn; kết nối cơ sở dữ liệu, thao tác CRUD, tổ chức cấu trúc chương trình theo nhóm chức năng, kiểm tra lỗi và hoàn thiện chức năng.',
                  tech: ['Java', 'JavaFX', 'OOP', 'JDBC', 'SQL', 'Database', 'CRUD'],
                  github: 'https://github.com/doanhnguyen05/Quanlynhatrojava.git',
                  icon: Code,
                  color: 'from-purple-500 to-pink-500',
                  image: projectImage2,
                },
                {
                  period: '09/2025 - 12/2025',
                  title: 'Quản lý nhà trọ .NET',
                  description: 'Hệ thống quản lý nhà trọ bằng .NET, hỗ trợ quản lý phòng trọ, khách thuê, hợp đồng, hóa đơn và các nghiệp vụ cơ bản trong vận hành nhà trọ.',
                  role: 'Tôi phân tích nghiệp vụ quản lý nhà trọ, thiết kế cơ sở dữ liệu cho phòng trọ, khách thuê, hợp đồng và hóa đơn; xây dựng chức năng thêm, sửa, xóa, tìm kiếm, hiển thị dữ liệu và xử lý logic nghiệp vụ trong quá trình quản lý thông tin.',
                  tech: ['C#', '.NET', 'MVC', 'SQL', 'Database Design', 'CRUD'],
                  github: 'https://github.com/doanhnguyen05/Quanlynhatro.net.git',
                  icon: Server,
                  color: 'from-blue-500 to-cyan-500',
                  image: projectImage1,
                },
              ].map((project, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 hover:scale-105 transition-all">
                    {/* Project Image Header */}
                    <div className="relative h-56 overflow-hidden bg-slate-900">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 group-hover:opacity-40 transition-opacity`}></div>
                      <div className="absolute top-4 right-4 p-3 bg-slate-900/80 backdrop-blur-sm rounded-xl">
                        <project.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="mb-2 inline-flex items-center rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-500/30">
                        {project.period}
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                      <p className="text-sm text-slate-400 mb-4 leading-relaxed">{project.description}</p>
                      <button
                        type="button"
                        onClick={() => setExpandedProjects((current) => ({ ...current, [index]: !current[index] }))}
                        className="mb-4 flex w-full items-center justify-between rounded-xl bg-slate-900/60 border border-slate-700/50 px-3 py-2 text-left hover:border-cyan-500/50 transition-colors"
                        aria-expanded={!!expandedProjects[index]}
                      >
                        <span className="text-xs font-semibold uppercase tracking-wide text-cyan-400">Tôi đã làm</span>
                        <ChevronRight className={`h-4 w-4 text-cyan-400 transition-transform ${expandedProjects[index] ? 'rotate-90' : ''}`} />
                      </button>
                      {expandedProjects[index] && (
                        <div className="mb-4 rounded-xl bg-slate-900/60 border border-slate-700/50 p-3">
                          <p className="text-sm text-slate-300 leading-relaxed">{project.role}</p>
                        </div>
                      )}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-slate-700/50 rounded-full text-xs border border-slate-600/50 hover:border-cyan-500/50 transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all group-hover:scale-105 font-medium"
                      >
                        <Github className="w-5 h-5" />
                        Xem trên GitHub
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Background Images - More visible */}
          <div className="hidden lg:block absolute -left-20 top-40 w-96 h-96 opacity-40 rounded-3xl overflow-hidden rotate-12 border-4 border-green-500/30">
            <img src={profileImage4} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="hidden lg:block absolute -right-20 bottom-20 w-80 h-80 opacity-40 rounded-3xl overflow-hidden -rotate-12 border-4 border-red-500/30">
            <img src={profileImage1} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="max-w-7xl mx-auto relative">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-5xl font-bold text-center mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Nghiên cứu khoa học</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4"></div>
              <p className="text-center text-sm sm:text-base text-slate-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
                Các đề tài không chỉ dừng ở tìm hiểu lý thuyết. Tôi có tham gia xây dựng sản phẩm thử nghiệm, demo chức năng,
                kiểm tra luồng xử lý và trình bày kết quả theo hướng có thể ứng dụng.
              </p>
            </AnimatedSection>

            <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6">
              {[
                {
                  title: 'Nghiên cứu, thử nghiệm một số tính năng bảo mật trên hệ quản trị CSDL MariaDB và PostgreSQL',
                  description: 'Đề tài có sản phẩm thử nghiệm các cơ chế bảo mật, phân quyền, xác thực và kiểm soát truy cập trên MariaDB/PostgreSQL.',
                  contribution: 'Tôi trực tiếp dựng môi trường MariaDB/PostgreSQL, tạo user/role mẫu, cấu hình phân quyền, chạy các kịch bản kiểm tra truy cập trái phép và ghi nhận kết quả để làm bộ demo minh họa cho đề tài.',
                  status: 'Đã xuất bản trên IEEE',
                  type: 'published',
                  link: 'https://ieeexplore.ieee.org/document/11473793',
                  icon: Database,
                  color: 'from-green-500 to-emerald-500',
                  keywords: ['MariaDB', 'PostgreSQL', 'Database Security', 'Access Control'],
                },
                {
                  title: 'Nghiên cứu bảo mật trên Apache Spark và Elasticsearch',
                  description: 'Đề tài hướng đến sản phẩm Web quản lý, lưu trữ và tìm kiếm tài liệu được mã hóa bằng Apache Spark và Elasticsearch.',
                  contribution: 'Tôi tham gia xây dựng luồng demo cho hệ thống: đưa tài liệu vào hệ thống, xử lý dữ liệu, lập chỉ mục tìm kiếm, kiểm tra kết quả tìm kiếm và ghi nhận các điểm cần bảo vệ khi lưu trữ/tìm kiếm tài liệu mã hóa.',
                  status: 'Đã hoàn thành',
                  type: 'completed',
                  icon: Search,
                  color: 'from-blue-500 to-cyan-500',
                  keywords: ['Apache Spark', 'Elasticsearch', 'Encrypted Documents', 'Search Engine'],
                },
                {
                  title: 'Hệ thống quản lý thông điệp RabbitMQ kết hợp AI',
                  description: 'Sản phẩm đang nghiên cứu dùng RabbitMQ và AI để hỗ trợ tạo sinh, quản lý ngân hàng câu hỏi trắc nghiệm.',
                  contribution: 'Tôi đang tham gia thiết kế prototype luồng gửi/nhận thông điệp, xây dựng hàng đợi xử lý câu hỏi, mô phỏng bước tạo/phân loại câu hỏi bằng AI và kiểm tra cách hệ thống xử lý khi có nhiều yêu cầu.',
                  status: 'Đang thực hiện',
                  type: 'ongoing',
                  icon: MessageSquare,
                  color: 'from-purple-500 to-pink-500',
                  keywords: ['RabbitMQ', 'AI', 'Question Bank', 'Message Queue'],
                },
                {
                  title: 'Hệ thống tư vấn tuyển sinh tích hợp AI và Security',
                  description: 'Đề tài cấp trường phát triển sản phẩm tư vấn tuyển sinh, chọn ngành/chuyên ngành cho Trường Đại học Điện lực.',
                  contribution: 'Tôi đang tham gia phân tích nhu cầu thí sinh, chuẩn bị dữ liệu ngành học/chuyên ngành, xây dựng luồng hỏi đáp tư vấn, kiểm tra câu trả lời gợi ý và bổ sung các yêu cầu bảo mật cho thông tin người dùng.',
                  status: 'Đề tài cấp trường - Đang thực hiện',
                  type: 'ongoing',
                  icon: Lightbulb,
                  color: 'from-orange-500 to-red-500',
                  keywords: ['AI Consulting', 'Security', 'Admission System', 'Career Guidance'],
                },
                {
                  title: 'Hệ thống quản lý công văn ứng dụng OCR và chữ ký số',
                  description: 'Sản phẩm đang nghiên cứu hỗ trợ quản lý công văn đi/đến bằng OCR, chữ ký số và quy trình xử lý điện tử.',
                  contribution: 'Tôi đang tham gia xây dựng prototype quản lý công văn: nhập công văn, nhận dạng nội dung bằng OCR, theo dõi trạng thái xử lý và tìm hiểu cách tích hợp chữ ký số vào quy trình xác nhận tài liệu.',
                  status: 'Đang thực hiện',
                  type: 'ongoing',
                  icon: FileText,
                  color: 'from-red-500 to-rose-500',
                  keywords: ['OCR', 'Digital Signature', 'Document Management', 'Automation'],
                },
              ].map((research, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-slate-700/50 group-hover:border-cyan-500/50 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-3">
                      <div className="flex items-start gap-3 min-w-0 flex-1">
                        <div className={`p-3 sm:p-4 rounded-2xl bg-gradient-to-r ${research.color} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <research.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold leading-snug break-words min-w-0">{research.title}</h3>
                      </div>
                      <span className={`w-fit px-3 py-1 rounded-full text-xs font-bold ${
                          research.type === 'published' ? 'bg-green-500/20 text-green-400' :
                          research.type === 'completed' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-purple-500/20 text-purple-400'
                        }`}>
                          {research.status}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">{research.description}</p>
                    <button
                      type="button"
                      onClick={() => setExpandedResearch((current) => ({ ...current, [index]: !current[index] }))}
                      className="mb-4 flex w-full items-center justify-between rounded-xl bg-slate-900/60 border border-slate-700/50 px-3 py-2 text-left hover:border-cyan-500/50 transition-colors"
                      aria-expanded={!!expandedResearch[index]}
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide text-cyan-400">Vai trò của tôi</span>
                      <ChevronRight className={`h-4 w-4 text-cyan-400 transition-transform ${expandedResearch[index] ? 'rotate-90' : ''}`} />
                    </button>
                    {expandedResearch[index] && (
                      <div className="mb-4 rounded-xl bg-slate-900/60 border border-slate-700/50 p-3">
                        <p className="text-sm text-slate-300 leading-relaxed">{research.contribution}</p>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {research.keywords.map((keyword, i) => (
                        <span key={i} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-300">
                          {keyword}
                        </span>
                      ))}
                    </div>
                    {research.link && (
                      <a
                        href={research.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex max-w-full items-center gap-2 text-sm sm:text-base text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <Award className="w-4 h-4 flex-shrink-0" />
                        <span className="break-words">Xem bài nghiên cứu trên IEEE</span>
                        <ExternalLink className="w-4 h-4 flex-shrink-0" />
                      </a>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
          {/* Background Images */}
          <div className="absolute -left-20 top-20 w-80 h-80 opacity-40 rounded-3xl overflow-hidden rotate-12 border-4 border-cyan-500/30">
            <img src={profileImage5} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -right-20 bottom-20 w-96 h-96 opacity-40 rounded-3xl overflow-hidden -rotate-12 border-4 border-blue-500/30">
            <img src={profileImage3} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="max-w-7xl mx-auto relative">
            <AnimatedSection>
              <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Liên hệ & Kết nối</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-12"></div>
            </AnimatedSection>

            <div className="max-w-5xl mx-auto">
              <AnimatedSection delay={200}>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold mb-6">Thông tin liên hệ</h3>

                      <div className="space-y-4">
                        <a href="tel:0344939275" className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-all group">
                          <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
                            <Phone className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-sm text-slate-400">Điện thoại / Zalo</div>
                            <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors">0344939275</div>
                          </div>
                        </a>

                        <a href="mailto:Vietdoanhk5@gmail.com" className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-all group">
                          <div className="p-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full">
                            <Mail className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-sm text-slate-400">Email</div>
                            <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors">Vietdoanhk5@gmail.com</div>
                          </div>
                        </a>
                      </div>

                      <div className="pt-6">
                        <h4 className="text-lg font-semibold mb-4">Mạng xã hội</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {socialLinks.map((social, index) => (
                            <a
                              key={index}
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r ${social.color} hover:scale-105 transition-transform`}
                            >
                              <social.icon className="w-5 h-5 text-white" />
                              <span className="text-sm font-medium text-white">{social.label}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* GitHub & Research Links */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold mb-6">Dự án & Nghiên cứu</h3>

                      <a
                        href="https://ieeexplore.ieee.org/document/11473793"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl hover:shadow-lg hover:shadow-green-500/50 transition-all group"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <Award className="w-6 h-6 text-white" />
                          <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold text-white">IEEE Publication</span>
                        </div>
                        <h4 className="font-semibold text-white mb-2">Nghiên cứu bảo mật Database</h4>
                        <p className="text-sm text-white/80 mb-3">Nghiên cứu bảo mật trên MariaDB & PostgreSQL</p>
                        <div className="flex items-center gap-2 text-white font-medium">
                          Xem bài nghiên cứu
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </a>

                      <div className="space-y-3">
                        <h4 className="font-semibold">GitHub Projects</h4>
                        {[
                          { name: 'Dự án .NET', url: 'https://github.com/doanhnguyen05/Quanlynhatro.net.git' },
                          { name: 'Edu LMS Web', url: 'https://github.com/doanhnguyen05/Edu_LMS.git' },
                          { name: 'Mobile EduLMS', url: 'https://github.com/doanhnguyen05/MobileEduLMS.git' },
                        ].map((project, index) => (
                          <a
                            key={index}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all group"
                          >
                            <span className="text-sm font-medium">{project.name}</span>
                            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto text-center">
            <AnimatedSection>
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  Nguyễn Viết Doanh
                </h3>
                <p className="text-slate-400">IT Student | Full Stack Developer | AI & Security Researcher</p>
              </div>

              <div className="flex justify-center gap-4 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800 rounded-full hover:scale-110 transition-transform"
                  >
                    <social.icon className="w-5 h-5 text-slate-400 hover:text-cyan-400 transition-colors" />
                  </a>
                ))}
              </div>

              <div className="border-t border-slate-800 pt-6">
                <p className="text-slate-500 text-sm">
                  © 2026 Nguyễn Viết Doanh. Được xây dựng với ❤️ và công nghệ hiện đại.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </footer>
      </div>

      {/* Global Styles for Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes growWidth {
          from {
            width: 0;
          }
        }
      `}</style>
    </div>
  );
}
