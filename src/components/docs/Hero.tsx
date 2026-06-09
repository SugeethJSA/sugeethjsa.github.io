import Image from "next/image";
import React from "react";

export default function DocsHero({ title, imageSrc }: { title: string; imageSrc?: string }) {
  return (
    <section className="relative w-full h-64 md:h-80 lg:h-96 mb-8 rounded-xl overflow-hidden shadow-lg">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-purple-600 to-blue-500" />
      )}
      <div className="absolute inset-0 bg-black/30" />
      <h1 className="relative text-4xl md:text-5xl font-black text-white drop-shadow-lg text-center pt-12">
        {title}
      </h1>
    </section>
  );
}
