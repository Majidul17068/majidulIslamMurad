import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { ArrowUpRight } from "lucide-react";
import { forwardRef, type FC } from "react";

type LeadershipItem = {
  title: string;
  org: string;
  description: string;
  photos?: string[];
  linkUrl?: string;
};

const LeadershipCard: FC<{ item: LeadershipItem; index: number }> = ({ item, index }) => {
  const isExternal = !!item.linkUrl?.startsWith("http");
  const inner = (
    <>
      <div className="flex items-start justify-between gap-2 mb-1">
        <div className="text-[var(--accent)] font-mono text-[10px] uppercase tracking-widest">{item.org}</div>
        {item.linkUrl && <ArrowUpRight className="w-3 h-3 text-[#555] shrink-0" />}
      </div>
      <h3 className="text-sm font-semibold text-[#EDEDED] mb-1">{item.title}</h3>
      <p className="text-[11px] text-[#AAA] leading-relaxed mb-3">{item.description}</p>
      {item.photos && item.photos.length > 0 && (
        <div className="flex gap-2 mt-3">
          {item.photos.map((src, pi) => (
            <div key={pi} className="relative w-16 h-20 rounded-lg overflow-hidden border border-[#222]">
              <img
                src={src}
                alt={`Mentoring session ${pi + 1}`}
                loading="lazy"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-10)] to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      )}
    </>
  );

  const animation = {
    initial: { opacity: 0, x: -10 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { delay: index * 0.1, duration: 0.5 },
  };
  const baseClass = "block border-l-2 border-[#333] pl-4 mt-4 first:mt-0";
  const linkClass = item.linkUrl ? "hover:border-[var(--accent)] transition-colors" : "";

  if (item.linkUrl) {
    return (
      <motion.a
        href={item.linkUrl}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        {...animation}
        className={`${baseClass} ${linkClass}`}
      >
        {inner}
      </motion.a>
    );
  }
  return (
    <motion.div {...animation} className={baseClass}>
      {inner}
    </motion.div>
  );
};

export const Leadership = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="h-full bg-[#0F0F0F] border border-[#222] rounded-3xl p-6 lg:p-8 flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-sm font-mono text-[#666] uppercase mb-6 tracking-widest">Leadership</h2>
          <div className="space-y-6">
            {PORTFOLIO_DATA.leadership.slice(0, 2).map((item, index) => (
              <LeadershipCard key={index} item={item as LeadershipItem} index={index} />
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-sm font-mono text-[#666] uppercase mb-6 tracking-widest">Certifications</h2>
          <div className="flex flex-col gap-3">
            {PORTFOLIO_DATA.certifications.slice(0, 3).map((cert, index) => (
              <motion.a
                key={index}
                href={cert.link}
                target={cert.link?.startsWith("http") ? "_blank" : undefined}
                rel={cert.link?.startsWith("http") ? "noreferrer" : undefined}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group flex flex-col p-4 rounded-2xl bg-[#111] border border-[#222] hover:border-[#333] transition-colors relative"
              >
                <ArrowUpRight className="w-4 h-4 text-[#555] group-hover:text-[var(--accent)] transition-colors absolute top-4 right-4" />
                <span className="text-[var(--accent)] font-bold text-[10px] uppercase tracking-widest mb-2 opacity-50 block">
                  Verified {cert.year}
                </span>
                <span className="text-[#EDEDED] text-xs font-semibold pr-6">{cert.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
