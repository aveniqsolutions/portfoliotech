import React, { useState, useRef, useEffect } from 'react';
import { Send, Mail, User, MessageSquare, CheckCircle2, Loader2 } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission (replace with actual Formspree endpoint later)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsSuccess(false);
      }, 3000);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#8b5cf6]/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#a78bfa]/10 blur-[100px] rounded-full"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <h2 className="font-['Space_Grotesk'] text-5xl md:text-6xl font-bold mb-4">
            Let's Build Something <span className="text-[#8b5cf6]">Exceptional</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] mx-auto mb-6"></div>
          <p className="text-[#9ca3af] text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-300 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <form onSubmit={handleSubmit} className="relative">
            {/* Form Container with Glow Effect */}
            <div className="relative p-8 md:p-12 border border-[#27272a] rounded-2xl bg-[#0a0a0f]/50 backdrop-blur-sm">
              {/* Success Overlay */}
              {isSuccess && (
                <div className="absolute inset-0 bg-[#0a0a0f]/95 backdrop-blur-sm rounded-2xl flex items-center justify-center z-20 animate-in fade-in duration-500">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto bg-[#8b5cf6]/20 rounded-full flex items-center justify-center">
                      <CheckCircle2 size={48} className="text-[#8b5cf6] animate-in zoom-in duration-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                    <p className="text-[#9ca3af]">Thank you for reaching out.</p>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                {/* Name Field */}
                <div className="relative group">
                  <label className="block text-sm font-medium text-[#9ca3af] mb-2 flex items-center gap-2">
                    <User size={16} className={focusedField === 'name' ? 'text-[#8b5cf6]' : ''} />
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-4 bg-[#1a1a2e] border border-[#27272a] rounded-lg text-white focus:outline-none focus:border-[#8b5cf6] focus:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300"
                    placeholder="Enter your name"
                  />
                  {focusedField === 'name' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] animate-in slide-in-from-left duration-300"></div>
                  )}
                </div>

                {/* Email Field */}
                <div className="relative group">
                  <label className="block text-sm font-medium text-[#9ca3af] mb-2 flex items-center gap-2">
                    <Mail size={16} className={focusedField === 'email' ? 'text-[#8b5cf6]' : ''} />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-4 bg-[#1a1a2e] border border-[#27272a] rounded-lg text-white focus:outline-none focus:border-[#8b5cf6] focus:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                  {focusedField === 'email' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] animate-in slide-in-from-left duration-300"></div>
                  )}
                </div>

                {/* Message Field */}
                <div className="relative group">
                  <label className="block text-sm font-medium text-[#9ca3af] mb-2 flex items-center gap-2">
                    <MessageSquare size={16} className={focusedField === 'message' ? 'text-[#8b5cf6]' : ''} />
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-[#1a1a2e] border border-[#27272a] rounded-lg text-white focus:outline-none focus:border-[#8b5cf6] focus:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                  {focusedField === 'message' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] animate-in slide-in-from-left duration-300"></div>
                  )}
                </div>

                {/* Submit Button with Animation */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full md:w-auto px-8 py-4 bg-[#8b5cf6] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-[#a78bfa] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </button>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-[#8b5cf6]/30 rounded-tl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[#8b5cf6]/30 rounded-br-2xl"></div>
            </div>
          </form>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-[#9ca3af] mb-4">Or reach out directly at</p>
            <a
              href="mailto:ilsa@example.com"
              className="inline-flex items-center gap-2 text-[#8b5cf6] hover:text-[#a78bfa] font-semibold text-lg transition-colors"
            >
              <Mail size={20} />
              ilsa@example.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
