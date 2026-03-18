import { ArrowRight, Dumbbell, Target, Heart, Flame, Trophy, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

const EXTERNAL_URL = "https://hutechc.com/physical"; // 외부 상세 페이지 URL (실제 URL로 교체 필요)

const highlights = [
  { icon: Target, text: "스포츠 과학 전문 번역" },
  { icon: Heart, text: "스포츠 의학 문서 번역" },
  { icon: Flame, text: "피트니스 콘텐츠 현지화" },
  { icon: Trophy, text: "국제 대회 자료 번역" },
];

export function PhysicalTranslation() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[420px] md:h-[500px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758875568074-0e7e4389b7d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHNwb3J0cyUyMGF0aGxldGUlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NzI0MjE2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="피지컬 번역"
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
              <div className="inline-flex items-center gap-2 bg-[#E53935]/80 backdrop-blur rounded-full px-4 py-1.5 text-sm text-white mb-4">
                <Dumbbell className="w-4 h-4" /> 피지컬
              </div>
              <h1 className="text-3xl md:text-5xl text-white mb-4" style={{ fontWeight: 700, lineHeight: 1.3 }}>
                스포츠·피트니스<br />전문 번역 서비스
              </h1>
              <p className="text-gray-200 text-lg mb-6" style={{ lineHeight: 1.7 }}>
                스포츠 과학, 피트니스, 체육 분야의 전문 용어와 맥락을 정확히 이해하는 AI 기반 특화 번역.
              </p>
              <a
                href={EXTERNAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#E53935] text-white px-6 py-3 rounded-xl hover:bg-[#C62828] transition-colors"
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
          <h2 className="text-3xl mb-6" style={{ fontWeight: 700 }}>왜 피지컬 전문 번역인가?</h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto" style={{ lineHeight: 1.8 }}>
            "rep", "set", "periodization" 같은 스포츠 전문 용어는 일반 번역기로 정확히 처리할 수 없습니다. 스포츠 전문 용어 DB 10,000+와 체육학 전공 번역사의 이중 검수로 맥락에 맞는 정확한 번역을 보장합니다.
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
                <div className="w-12 h-12 rounded-xl bg-[#E53935]/10 flex items-center justify-center">
                  <h.icon className="w-6 h-6 text-[#E53935]" />
                </div>
                <span className="text-sm text-gray-700 text-center" style={{ fontWeight: 500 }}>{h.text}</span>
              </motion.div>
            ))}
          </div>
          <a
            href={EXTERNAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#E53935] text-white px-8 py-4 rounded-xl hover:bg-[#C62828] transition-colors"
            style={{ fontWeight: 600 }}
          >
            서비스 상세 페이지로 이동 <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
