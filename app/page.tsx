import ProjectCard from "@/components/ProjectCard";


export default function HomePage() {
  return (
    <div className="space-y-40">

      <section id="home" className="min-h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold">Hello, I’m Swesan!</h1>
      </section>

      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Side — Image */}
          <div className="flex justify-center">
            {/* replace with global color */}
            <div className="w-72 h-96 bg-[#161b22]/30 rounded-xl backdrop-blur-sm flex items-center justify-center">
              {/* Replace this with your image later */}
              <img src="/upper-body.png" className="w-72 h-96 object-cover rounded-xl" />

            </div>
          </div>

          {/* Right Side — Text */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
            <p className="text-lg leading-relaxed text-foreground">
              I’m Swesan, a Software Engineering student specializing in full-stack
              development, machine learning, and system design. I love building
              clean, modern, functional web applications — and I’m currently creating
              my developer portfolio using Next.js, TypeScript, and TailwindCSS.
            </p>
          </div>

        </div>
      </section>

      <section
        id="projects"
        className="min-h-screen px-6 flex flex-col items-center justify-center"
      >
        <h2 className="text-4xl font-bold mb-10">Projects</h2>

        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <ProjectCard
            title="Hitchly – Campus Ride Sharing"
            description="A full-stack ride sharing system for university campuses."
            imgSrc="/images/hitchly.png"
            github="https://github.com/swesan123/hitchly"
            details="Built with Next.js, PostgreSQL, tRPC, Prisma, and Tailwind. Implements scheduling, matching, authentication, and pricing modules."
          />

          <ProjectCard
            title="X-Ray Pneumonia Detection"
            description="CNN-based medical imaging classification using PyTorch."
            imgSrc="/images/xray.png"
            github="https://github.com/swesan123/pneumonia-detection"
            details="Trained on 5,863 chest X-ray images (normal vs pneumonia). Used CNNs, SVM baseline, feature extraction, and evaluation metrics."
          />

          <ProjectCard
            title="Breast Cancer Prediction"
            description="ML model with LR, SVM, and feedforward networks."
            imgSrc="/images/breastcancer.png"
            github="https://github.com/swesan123/breast-cancer"
            details="Compared LR, SVM, and NN models using scikit-learn and PyTorch. Includes visualizations, data prep, and metrics."
          />

          <ProjectCard
            title="Portfolio Website"
            description="This site! Built using Next.js, TypeScript, TailwindCSS."
            imgSrc="/images/portfolio.png"
            github="https://github.com/swesan123/portfolio"
            details="Complete design system with scroll-spy navbar, dark mode theme, componentized UI, and motion effects."
          />

        </div>
      </section>


      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center px-6"
      >
        <h2 className="text-4xl font-bold mb-10 text-white">Contact</h2>

        <div className="flex flex-col gap-6 text-lg">

          {/* GitHub */}
          <a
            href="https://github.com/swesan123"
            target="_blank"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            GitHub →
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/YOUR-LINKEDIN-ID"
            target="_blank"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            LinkedIn →
          </a>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            Resume →
          </a>

          {/* Email */}
          <a
            href="mailto:YOUR_EMAIL@gmail.com"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            Email →
          </a>

        </div>
      </section>


    </div>
  );
}
