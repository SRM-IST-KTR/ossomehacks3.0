"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  quickStart,
  installGuides,
  gitCommands,
  buildPlaybook,
  architectureBlueprints,
  demoPrep,
  judgingCriteria,
  failureModes,
  mentorQuestions,
  teamRoleTemplates,
  apiReadinessChecklist,
  securityQuickChecks,
  pitchScripts,
  trackResources,
  generalTechResources,
  gitCheatSheet,
  submissionTemplate,
  finalChecklist,
} from "@/data/resources";

const sectionAnim = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45 },
};

function copyText(value, setCopiedKey, key) {
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(value).then(() => {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(""), 1400);
    });
    return;
  }

  const textArea = document.createElement("textarea");
  textArea.value = value;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  setCopiedKey(key);
  setTimeout(() => setCopiedKey(""), 1400);
}

function SectionHeading({ text }) {
  return (
    <div className="mb-12 flex flex-col items-center">
      <h2 className="text-center font-poppins font-bold text-yellow text-5xl sm:text-7xl xl:text-8xl">{text}</h2>
    </div>
  );
}

export default function ResourcesPage() {
  const [copiedKey, setCopiedKey] = useState("");

  return (
    <main className="w-full bg-background pb-36 text-text font-poppins md:pb-44">
      <section className="relative overflow-hidden px-4 pb-14 pt-36 md:px-10 md:pt-44">
        <div className="pointer-events-none absolute -top-10 right-0 h-52 w-52 rounded-full bg-yellow/20 blur-3xl" />
        <div className="mx-auto w-full max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-text/80">OssomeHacks 3.0 Field Manual</p>
          <h1 className="max-w-4xl text-[44px] font-bold leading-[0.95] text-yellow sm:text-[72px] md:text-[92px]">
            Resources For First-Time Hackers
          </h1>
          <p className="mt-5 max-w-3xl text-base text-text/90 md:text-xl">
            Setup guides, Git workflows, Claw/Open track docs, downloadable templates, and submission prep in one place.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium">
            <a href="#start" className="border border-text/40 px-3 py-1.5 hover:border-yellow hover:text-yellow transition-colors">Start</a>
            <a href="#setup" className="border border-text/40 px-3 py-1.5 hover:border-yellow hover:text-yellow transition-colors">Setup</a>
            <a href="#git" className="border border-text/40 px-3 py-1.5 hover:border-yellow hover:text-yellow transition-colors">Git</a>
            <a href="#judge" className="border border-text/40 px-3 py-1.5 hover:border-yellow hover:text-yellow transition-colors">Judging</a>
            <a href="#tracks" className="border border-text/40 px-3 py-1.5 hover:border-yellow hover:text-yellow transition-colors">Tracks</a>
            <a href="#submit" className="border border-text/40 px-3 py-1.5 hover:border-yellow hover:text-yellow transition-colors">Submission</a>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 md:px-10 md:py-10" id="start">
        <motion.div {...sectionAnim} className="mx-auto w-full max-w-7xl border-y border-text/35 py-8">
          <SectionHeading text="Start Here" />
          <ul className="space-y-4 text-base md:text-lg">
            {quickStart.map((item, idx) => (
              <li key={item} className="flex gap-3 border-b border-text/15 pb-4 last:border-b-0 last:pb-0">
                <span className="mt-0.5 text-yellow font-semibold">{String(idx + 1).padStart(2, "0")}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      <section className="px-4 py-8 md:px-10 md:py-12" id="setup">
        <motion.div {...sectionAnim} className="mx-auto w-full max-w-7xl">
          <SectionHeading text="Installation Setup" />
          <div className="divide-y divide-text/25 border-y border-text/35">
            {installGuides.map((item) => {
              const key = `setup-${item.tool}`;
              return (
                <div key={item.tool} className="grid grid-cols-1 gap-4 py-5 md:grid-cols-[180px_1fr_280px] md:items-center">
                  <div>
                    <p className="text-2xl font-semibold text-yellow">{item.tool}</p>
                    <p className="text-sm text-text/80">{item.purpose}</p>
                  </div>

                  <div className="relative bg-[#1f4047]/30 p-3">
                    <button
                      type="button"
                      onClick={() => copyText(item.command, setCopiedKey, key)}
                      className="absolute right-2 top-2 border border-text/35 px-2 py-0.5 text-xs hover:border-yellow hover:text-yellow transition-colors"
                    >
                      {copiedKey === key ? "Copied" : "Copy"}
                    </button>
                    <pre className="overflow-x-auto pt-6 text-sm text-text whitespace-pre-wrap">{item.command}</pre>
                  </div>

                  <a href={item.docs} target="_blank" rel="noreferrer" className="w-fit border border-text/40 px-3 py-2 text-sm hover:border-yellow hover:text-yellow transition-colors">
                    Official Docs
                  </a>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>

      <section className="px-4 py-8 md:px-10 md:py-12" id="git">
        <motion.div {...sectionAnim} className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="mb-12 flex flex-col items-center gap-4 lg:items-start">
              <h2 className="text-center lg:text-left font-poppins font-bold text-yellow text-5xl sm:text-7xl xl:text-8xl">Git Essentials</h2>
              <a
                href={gitCheatSheet.url}
                target="_blank"
                rel="noreferrer"
                className="w-fit border border-text/35 px-3 py-2 text-sm hover:border-yellow hover:text-yellow transition-colors"
              >
                {gitCheatSheet.label}
              </a>
            </div>
            <div className="divide-y divide-text/20 border-y border-text/35">
              {gitCommands.map((item) => {
                const key = `git-${item.command}`;
                return (
                  <div key={item.command} className="grid grid-cols-1 gap-3 py-4 md:grid-cols-[1fr_auto_auto] md:items-center">
                    <code className="text-sm md:text-base">{item.command}</code>
                    <span className="text-sm text-text/75">{item.note}</span>
                    <button
                      type="button"
                      onClick={() => copyText(item.command, setCopiedKey, key)}
                      className="w-fit border border-text/35 px-2 py-0.5 text-xs hover:border-yellow hover:text-yellow transition-colors"
                    >
                      {copiedKey === key ? "Copied" : "Copy"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-yellow">Hackathon Build Playbook</h3>
            <div className="mt-5 space-y-5">
              {buildPlaybook.map((step) => (
                <div key={step.phase} className="border-l-2 border-yellow pl-4">
                  <p className="text-sm uppercase tracking-[0.1em] text-text/75">{step.phase}</p>
                  <p className="mt-1 text-lg font-semibold text-text">{step.focus}</p>
                  <p className="mt-1 text-sm text-text/85">{step.actions}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="px-4 py-8 md:px-10 md:py-12">
        <motion.div {...sectionAnim} className="mx-auto w-full max-w-7xl border-y border-text/35 py-6">
          <h3 className="text-2xl font-semibold text-yellow">Starter Architecture Blueprints</h3>
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
            {architectureBlueprints.map((item) => (
              <div key={item.name} className="border border-text/30 bg-[#1f4047]/20 p-4">
                <p className="text-lg font-semibold text-yellow">{item.name}</p>
                <p className="mt-1 text-sm text-text">{item.stack}</p>
                <p className="mt-2 text-sm text-text/80">{item.whenToUse}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-8 text-2xl font-semibold text-yellow">Demo Prep</h3>
          <ul className="mt-4 space-y-3 text-sm md:text-base">
            {demoPrep.map((item, idx) => (
              <li key={item} className="flex gap-3 border-b border-text/15 pb-3 last:border-b-0 last:pb-0">
                <span className="text-yellow">{idx + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* <section className="px-4 py-8 md:px-10 md:py-12" id="tracks">
        <motion.div {...sectionAnim} className="mx-auto w-full max-w-7xl">
          <SectionHeading text="Track Resources" />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {trackResources.map((track) => (
              <article key={track.track} className="border border-text/35 bg-[#1f4047]/20 p-5 md:p-6">
                <h3 className="text-2xl font-semibold text-yellow">{track.track}</h3>
                <p className="mt-2 text-sm text-text/85">{track.description}</p>

                {track.categories?.map((cat) => (
                  <div key={cat.category} className="mt-5">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.08em] text-yellow/80">{cat.category}</h4>
                    <div className="mt-2 space-y-2">
                      {cat.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-baseline gap-2 border-b border-text/20 py-2 text-sm hover:text-yellow hover:border-yellow/50 transition-colors"
                        >
                          <span>{link.label}</span>
                          {link.description && (
                            <span className="text-xs text-text/50">— {link.description}</span>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}

                {track.links?.length > 0 && (
                  <div className="mt-5 space-y-2">
                    {track.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="block border-b border-text/20 py-2 text-sm hover:text-yellow hover:border-yellow/50 transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>

          <div className="mt-10 border-y border-text/35 py-6">
            <h3 className="text-2xl font-semibold text-yellow">General Tech Stack References</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {generalTechResources.map((item) => (
                <a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-text/35 px-3 py-2 text-sm hover:border-yellow hover:text-yellow transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </section> */}

            <section className="px-4 pb-12 pt-8 md:px-10" id="submit">
        <motion.div {...sectionAnim} className="mx-auto w-full max-w-7xl border border-yellow/50 bg-[#1f4047]/20 p-6 md:p-8">
          <div className="mb-12 flex flex-col items-center gap-4">
            <h2 className="text-center font-poppins font-bold text-yellow text-5xl sm:text-7xl xl:text-8xl">Submission Checklist</h2>
            <a
              href={submissionTemplate.url}
              download
              className="w-fit border border-text/35 px-3 py-2 text-sm hover:border-yellow hover:text-yellow transition-colors"
            >
              {submissionTemplate.label}
            </a>
          </div>
          <ul className="space-y-4 text-base md:text-lg">
            {finalChecklist.map((item) => (
              <li key={item} className="flex gap-3 border-b border-text/15 pb-4 last:border-b-0 last:pb-0">
                <span className="text-yellow">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-2xl font-semibold text-yellow">Pitch Script Templates</h3>
          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
            {pitchScripts.map((script) => (
              <div key={script.duration} className="border border-text/25 bg-[#1f4047]/20 p-4">
                <p className="text-lg font-semibold text-yellow">{script.duration}</p>
                <p className="mt-1 text-sm text-text/85">{script.structure}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="px-4 py-8 md:px-10 md:py-12" id="judge">
        <motion.div {...sectionAnim} className="mx-auto w-full max-w-7xl border-y border-text/35 py-8">
          <SectionHeading text="What Judges Look For" />
          <div className="space-y-4">
            {judgingCriteria.map((item) => (
              <div key={item.area} className="border border-text/25 bg-[#1f4047]/20 p-4">
                <p className="text-xl font-semibold text-yellow">{item.area}</p>
                <p className="mt-1 text-sm text-text">{item.what}</p>
                <p className="mt-2 text-sm text-text/80">Self-check: {item.selfCheck}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-8 text-2xl font-semibold text-yellow">Common Failure Modes</h3>
          <ul className="mt-4 space-y-3 text-sm md:text-base">
            {failureModes.map((item) => (
              <li key={item} className="flex gap-3 border-b border-text/15 pb-3 last:border-b-0 last:pb-0">
                <span className="text-yellow">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      <section className="px-4 py-8 md:px-10 md:py-12">
        <motion.div {...sectionAnim} className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-yellow">Mentor Question Bank</h3>
            <ul className="mt-4 space-y-2 text-sm md:text-base">
              {mentorQuestions.map((q, idx) => (
                <li key={q} className="border-b border-text/15 pb-2">
                  <span className="text-yellow mr-2">{idx + 1}.</span>{q}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-yellow">Team Role Templates</h3>
            <div className="mt-4 space-y-3">
              {teamRoleTemplates.map((tpl) => (
                <div key={tpl.teamSize} className="border border-text/25 bg-[#1f4047]/20 p-4">
                  <p className="text-lg font-semibold text-yellow">{tpl.teamSize}</p>
                  <p className="mt-1 text-sm text-text/85">{tpl.split}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="px-4 py-8 md:px-10 md:py-12">
        <motion.div {...sectionAnim} className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-2">
          <div className="border border-text/25 bg-[#1f4047]/20 p-5">
            <h3 className="text-2xl font-semibold text-yellow">API Readiness Checklist</h3>
            <ul className="mt-4 space-y-2 text-sm md:text-base">
              {apiReadinessChecklist.map((item) => (
                <li key={item} className="border-b border-text/15 pb-2">{item}</li>
              ))}
            </ul>
          </div>

          <div className="border border-text/25 bg-[#1f4047]/20 p-5">
            <h3 className="text-2xl font-semibold text-yellow">Security Quick Checks</h3>
            <ul className="mt-4 space-y-2 text-sm md:text-base">
              {securityQuickChecks.map((item) => (
                <li key={item} className="border-b border-text/15 pb-2">{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
