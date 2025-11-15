"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imgSrc: string;
  github: string;
  details: string;
}

export default function ProjectCard({
  title,
  description,
  imgSrc,
  github,
  details,
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-nav-bg/40 border border-nav-border backdrop-blur-xl rounded-xl overflow-hidden flex shadow-lg hover:shadow-xl transition">
      
      {/* Left: Image (1/3 width) */}
      <div className="relative w-1/3 h-44">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Right: Text Content (2/3 width) */}
      <div className="w-2/3 p-4 flex flex-col justify-between">
        
        <div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="text-gray-300 mt-2">{description}</p>
        </div>

        {/* GitHub link */}
        <a 
          href={github}
          target="_blank"
          className="text-blue-400 hover:underline mt-3"
        >
          GitHub →
        </a>

        {/* Expand / Collapse */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-gray-400 hover:text-white mt-2"
        >
          {expanded ? "Show less ▲" : "Show more ▼"}
        </button>

        {/* Collapsible content */}
        {expanded && (
          <p className="text-gray-400 mt-3 border-t border-nav-border pt-3">
            {details}
          </p>
        )}
      </div>
    </div>
  );
}
