import { ArrowRight, Cpu, Anchor, Shield, Lock, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

const EXTERNAL_URL = "https://hutechc.com/industry"; // 외부 상세 페이지 URL (실제 URL로 교체 필요)

const highlights = [
  { icon: Cpu, text: "반도체 공정·설계 문서" },
  { icon: Anchor, text: "조선해양 기술 문서" },
  { icon: Shield, text: "방산 기술 제안서·규격서" },
  { icon: Lock, text: "NDA 기반 보안 관리 체계" },
];

export function IndustryTranslation() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[420px] md:h-[500px] overflow-hidden bg-gray-900">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1770368787729-6a42187b668c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkaWdpdGFsJTIwd29ya3NwYWNlJTIwQUl8ZW58MXx8fHwxNzcyNDIxNzAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="산업 기술 번역"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-xl"
            >
              <div className="inline-flex items-center gap-2 bg-[#1565C0]/80 backdrop-blur rounded-full px-4 py-1.5 text-sm text-white mb-4">
                <Cpu className="w-4 h-4" /> 산업 특화 번역
              </div>
              <h1 className="text-3xl md:text-5xl text-white mb-4" style={{ fontWeight: 700, lineHeight: 1.3 }}>
                반도체 · 조선 · 방산<br />기술 번역의 정석
              </h1>
              <p className="text-gray-300 text-lg mb-6" style={{ lineHeight: 1.7 }}>
                대한민국 주력 산업의 기술 문서를 AI와 산업 전문 번역사가 정확하게 번역합니다.
              </p>
              <a
                href={EXTERNAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1565C0] text-white px-6 py-3 rounded-xl hover:bg-[#0D47A1] transition-colors"
                style={{ fontWeight: 600 }}
              >
                자세히 알아보기 <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brief Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl mb-6" style={{ fontWeight: 700 }}>산업 특화 번역의 강점</h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto" style={{ lineHeight: 1.8 }}>
            반도체·조선해양·방위산업 각 분야의 전문 용어 DB와 AI를 결합하여 일관성 있고 정확한 기술 번역을 제공합니다. 도면, 스펙시트, 매뉴얼 등 기술 문서 특유의 형식을 정확히 유지합니다.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {highlights.map((h, i) => (
              <motion.div
                key={h.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1565C0]/10 flex items-center justify-center">
                  <h.icon className="w-6 h-6 text-[#1565C0]" />
                </div>
                <span className="text-sm text-gray-700 text-center" style={{ fontWeight: 500 }}>{h.text}</span>
              </motion.div>
            ))}
          </div>
          <a
            href={EXTERNAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1565C0] text-white px-8 py-4 rounded-xl hover:bg-[#0D47A1] transition-colors"
            style={{ fontWeight: 600 }}
          >
            서비스 상세 페이지로 이동 <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
