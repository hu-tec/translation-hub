import { ArrowRight, BookOpen, Sparkles, Users, Shield, Clock, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

const EXTERNAL_URL = "https://hutechc.com/classic"; // 외부 상세 페이지 URL (실제 URL로 교체 필요)

const highlights = [
  { icon: Sparkles, text: "AI 프롬프트 기반 고전 번역" },
  { icon: Users, text: "한문학·동양학 전문가 감수" },
  { icon: Shield, text: "원문 충실도 보장" },
  { icon: Clock, text: "기존 대비 2배 빠른 납기" },
];

export function ClassicTranslation() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[420px] md:h-[500px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1486303954368-398fea0e72cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb3JlYW4lMjBjYWxsaWdyYXBoeSUyMGJydXNoJTIwaW5rfGVufDF8fHx8MTc3MjQyMTcwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="고전 번역"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-xl"
            >
              <div className="inline-flex items-center gap-2 bg-[#6B3FA0]/80 backdrop-blur rounded-full px-4 py-1.5 text-sm text-white mb-4">
                <BookOpen className="w-4 h-4" /> AI 고전 번역
              </div>
              <h1 className="text-3xl md:text-5xl text-white mb-4" style={{ fontWeight: 700, lineHeight: 1.3 }}>
                동양 고전의 지혜를<br />현대 언어로 잇다
              </h1>
              <p className="text-gray-200 text-lg mb-6" style={{ lineHeight: 1.7 }}>
                AI 프롬프트와 인문학 전문가의 협업으로 한문 고전을 정확하고 품격 있게 번역합니다.
              </p>
              <a
                href={EXTERNAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#6B3FA0] text-white px-6 py-3 rounded-xl hover:bg-[#5B2DA8] transition-colors"
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
          <h2 className="text-3xl mb-6" style={{ fontWeight: 700 }}>왜 AI 고전 번역인가?</h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto" style={{ lineHeight: 1.8 }}>
            유교 경전, 불교 문헌, 역사 기록, 고전 문학까지 — ChatGPT 전용 프롬프트와 한문학 전문가의 이중 검수 체계로 기존 대비 2배 빠르고 정확한 고전 번역을 제공합니다.
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
                <div className="w-12 h-12 rounded-xl bg-[#6B3FA0]/10 flex items-center justify-center">
                  <h.icon className="w-6 h-6 text-[#6B3FA0]" />
                </div>
                <span className="text-sm text-gray-700 text-center" style={{ fontWeight: 500 }}>{h.text}</span>
              </motion.div>
            ))}
          </div>
          <a
            href={EXTERNAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#6B3FA0] text-white px-8 py-4 rounded-xl hover:bg-[#5B2DA8] transition-colors"
            style={{ fontWeight: 600 }}
          >
            서비스 상세 페이지로 이동 <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
