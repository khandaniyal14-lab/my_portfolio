import { motion } from "framer-motion";
import { Download, Eye, FileText, Cpu, Code2, Workflow } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Resume() {
  const resumeUrl =
    "/resume/Daniyal_Khan_CV.pdf";

  const stats = [
    {
      label: "Experience",
      value: "2+",
    },
    {
      label: "AI Projects",
      value: "10+",
    },
    {
      label: "CGPA",
      value: "3.75",
    },
    {
      label: "Efficiency Gains",
      value: "50%",
    },
  ];

  const highlights = [
    {
      icon: Cpu,
      title: "AI Engineering",
      items: [
        "LLM Applications",
        "RAG Pipelines",
        "Agentic AI",
        "LangChain & LangGraph",
        "Computer Vision",
      ],
    },
    {
      icon: Code2,
      title: "Full Stack Development",
      items: [
        "Python & FastAPI",
        "React & TypeScript",
        "PostgreSQL",
        "Docker",
        "REST APIs",
      ],
    },
    {
      icon: Workflow,
      title: "Automation Systems",
      items: [
        "n8n Workflows",
        "AI Agents",
        "Twilio Integration",
        "Business Automation",
        "API Orchestration",
      ],
    },
  ];

  return (
    <div className="min-h-screen">

      {/* ================= HERO ================= */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="max-w-4xl">

            <ScrollReveal>

              <span className="text-gold text-sm font-display tracking-[0.2em] uppercase">
                Resume
              </span>

              <h1 className="mt-4 text-4xl lg:text-6xl font-display font-bold text-white leading-[1.1]">
                AI Fullstack Engineer Resume
              </h1>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
                Download my latest resume to explore my experience building
                production-ready AI systems including LLM applications,
                Computer Vision solutions, autonomous agents, workflow
                automation platforms, and scalable full-stack software.
              </p>


              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href={resumeUrl}
                  download="Daniyal_Khan_AI_Fullstack_Engineer_Resume.pdf"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-gold
                    px-6
                    py-3
                    text-background
                    font-semibold
                    transition-all
                    hover:opacity-90
                  "
                >
                  <Download size={18}/>
                  Download CV
                </a>


                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-gold/30
                    px-6
                    py-3
                    text-gold
                    transition-all
                    hover:bg-gold/10
                  "
                >
                  <Eye size={18}/>
                  Open PDF
                </a>

              </div>


              <p className="mt-5 text-xs text-muted-foreground">
                Last Updated: July 2026
              </p>

            </ScrollReveal>

          </div>
        </div>
      </section>



      {/* ================= RESUME SUMMARY ================= */}

      <section className="pb-20">

        <div className="container">

          <div className="grid lg:grid-cols-5 gap-8">


            <div className="lg:col-span-3">

              <ScrollReveal>

                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-card
                    p-8
                  "
                >

                  <div className="flex gap-5">

                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-xl
                        bg-gold/10
                      "
                    >
                      <FileText
                        size={26}
                        className="text-gold"
                      />
                    </div>


                    <div>

                      <h2
                        className="
                          text-2xl
                          font-display
                          font-semibold
                          text-white
                        "
                      >
                        Daniyal Khan
                      </h2>


                      <p className="mt-1 text-gold">
                        AI Fullstack Engineer
                      </p>


                      <p
                        className="
                          mt-5
                          leading-relaxed
                          text-muted-foreground
                        "
                      >
                        AI Fullstack Engineer with 2+ years of experience
                        developing production AI applications using FastAPI,
                        React, PostgreSQL, Docker, LangChain, and modern LLM
                        technologies. Experienced in building intelligent
                        automation systems, RAG applications, Computer Vision
                        solutions, and AI-powered SaaS platforms.
                      </p>


                    </div>

                  </div>


                </div>

              </ScrollReveal>

            </div>



            {/* STATS */}

            <div className="lg:col-span-2">

              <div className="grid grid-cols-2 gap-4">

                {stats.map((stat,index)=>(

                  <ScrollReveal
                    key={stat.label}
                    delay={index*0.08}
                  >

                    <motion.div

                      initial={{
                        opacity:0,
                        y:15
                      }}

                      whileInView={{
                        opacity:1,
                        y:0
                      }}

                      viewport={{
                        once:true
                      }}

                      className="
                        rounded-xl
                        border
                        border-white/10
                        bg-card
                        p-5
                        text-center
                      "

                    >

                      <h3 className="text-3xl font-bold text-gold">
                        {stat.value}
                      </h3>


                      <p
                        className="
                          mt-2
                          text-xs
                          uppercase
                          tracking-wider
                          text-muted-foreground
                        "
                      >
                        {stat.label}
                      </p>


                    </motion.div>


                  </ScrollReveal>

                ))}

              </div>

            </div>


          </div>

        </div>

      </section>




      {/* ================= SKILLS ================= */}

      <section className="py-20 bg-surface">

        <div className="container">

          <ScrollReveal>

            <div
              className="
                grid
                md:grid-cols-3
                gap-6
              "
            >

              {highlights.map((item)=>(

                <div
                  key={item.title}
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-card
                    p-6
                  "
                >

                  <item.icon
                    size={28}
                    className="text-gold"
                  />


                  <h3
                    className="
                      mt-5
                      text-xl
                      font-semibold
                      text-white
                    "
                  >
                    {item.title}
                  </h3>


                  <ul className="mt-5 space-y-3">

                    {item.items.map(skill=>(

                      <li
                        key={skill}
                        className="
                          text-sm
                          text-muted-foreground
                          flex
                          gap-2
                        "
                      >

                        <span className="text-gold">
                          •
                        </span>

                        {skill}

                      </li>

                    ))}

                  </ul>


                </div>

              ))}


            </div>

          </ScrollReveal>


        </div>

      </section>




      {/* ================= PDF PREVIEW ================= */}


      <section className="py-20">

        <div className="container">

          <ScrollReveal>


            <div
              className="
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-card
              "
            >

              <iframe

                src={resumeUrl}

                title="Daniyal Khan Resume"

                className="
                  h-[900px]
                  w-full
                "

              />

            </div>


          </ScrollReveal>


        </div>

      </section>


    </div>
  );
}