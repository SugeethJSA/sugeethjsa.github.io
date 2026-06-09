"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Uses Web3Forms (free tier) - replace with your own access key at https://web3forms.com
    data.append("access_key", "YOUR_ACCESS_KEY");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    });

    if (res.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <section className="py-24 relative z-10 bg-background overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 dark:bg-purple-500/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black mb-4">Let's Connect</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 space-y-6"
          >
            <Card className="glassmorphism h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Contact Information</CardTitle>
                <CardDescription>Reach out to me directly.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a href="mailto:sugeeth2007@gmail.com" className="hover:text-primary transition-colors">sugeeth2007@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Location</p>
                    <p>Chennai, Tamil Nadu</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3"
          >
            <Card className="glassmorphism p-2">
              <CardContent className="pt-6">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                    <CheckCircle2 className="w-16 h-16 text-emerald-500" />
                    <h3 className="text-2xl font-bold">Message Sent!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                    <Button variant="outline" onClick={() => setSubmitted(false)}>Send Another</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <Input type="text" id="name" name="name" placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <Input type="email" id="email" name="email" placeholder="john@example.com" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <Textarea id="message" name="message" rows={5} placeholder="Hi Sugeeth, I'd like to talk about..." required />
                    </div>
                    <Button type="submit" className="w-full shadow-md hover:shadow-primary/25 transition-all">
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
