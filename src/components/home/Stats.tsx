"use client";

import { motion } from "framer-motion";

type Stat = {
  value: string;
  label: string;
};

type StatsProps = {
  stats: Stat[];
};

export function Stats({ stats }: StatsProps) {
  return (
    <section className="py-16 border-y border-border bg-background/50 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center group"
            >
              <div className="text-5xl font-black mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
