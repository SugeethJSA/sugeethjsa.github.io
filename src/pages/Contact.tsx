import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sugeeth@example.com",
      href: "mailto:sugeeth@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/sugeeth",
      username: "@sugeeth"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/sugeeth",
      username: "Sugeeth Jayaraj"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/sugeeth",
      username: "@sugeeth"
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have a project in mind or just want to say hello? I'd love to hear from you. 
              Let's create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="elevation-1">
                <CardHeader>
                  <CardTitle className="font-display text-2xl">Send me a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="focus-ring"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                          className="focus-ring"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What's this about?"
                        className="focus-ring"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell me about your project or just say hello..."
                        rows={6}
                        className="focus-ring"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto elevation-2 hover:elevation-3 transition-all"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="elevation-1">
                <CardHeader>
                  <CardTitle className="font-display text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center space-x-3 text-sm hover:text-primary transition-colors focus-ring rounded-sm"
                    >
                      <info.icon className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">{info.label}</p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="elevation-1">
                <CardHeader>
                  <CardTitle className="font-display text-xl">Follow Me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-sm hover:text-primary transition-colors focus-ring rounded-sm"
                    >
                      <social.icon className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">{social.label}</p>
                        <p className="text-muted-foreground">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="elevation-1">
                <CardHeader>
                  <CardTitle className="font-display text-xl">Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                    <span className="text-sm font-medium">Available for new projects</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I'm currently open to freelance opportunities and full-time positions. 
                    Let's discuss how we can work together!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}