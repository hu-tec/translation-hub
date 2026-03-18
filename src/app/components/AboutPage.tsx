import { motion } from "motion/react";
import { CheckCircle2, Target, Users, Award, ShieldCheck, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#4A1D96] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            기술과 인간의 조화,<br />(주)휴텍씨(HUTECHC)
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed"
          >
            Human Tech Coexistence. 우리는 AI 기술의 효율성과 전문 번역사의 통찰력을 결합하여 
            전 세계 모든 지식이 언어의 장벽 없이 공유되는 세상을 만듭니다.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 border-l-4 border-[#4A1D96] pl-6">경영 이념</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-[#4A1D96]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">정확성 (Accuracy)</h3>
                  <p className="text-gray-600 leading-relaxed">단순한 단어의 치환을 넘어, 원문의 맥락과 전문성을 완벽하게 전달합니다.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-[#4A1D96]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">효율성 (Efficiency)</h3>
                  <p className="text-gray-600 leading-relaxed">최신 AI 기술인 프롬프트 엔지니어링을 활용하여 번역 속도를 혁신적으로 단축합니다.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-[#4A1D96]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">조화 (Harmony)</h3>
                  <p className="text-gray-600 leading-relaxed">AI의 속도와 인간의 감수성이 조화를 이루는 하이브리드 시스템을 지향합니다.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-purple-200">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1522071823991-b9671f903f7a?auto=format&fit=crop&q=80&w=1000" 
                alt="HutechC Office"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl border border-purple-50 hidden lg:block">
              <div className="flex items-center gap-4 mb-2">
                <Award className="w-8 h-8 text-[#4A1D96]" />
                <span className="text-2xl font-bold">27+</span>
              </div>
              <p className="text-gray-500 font-medium">통번역 교육 및<br />실무 노하우 축적</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* History */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">주요 연혁</h2>
          <div className="space-y-12">
            {[
              { year: "2024", event: "메타트랜스 AI 하이브리드 시스템 구축 및 상용화" },
              { year: "2022", event: "전 세계 109개 언어 실시간 AI 통역 솔루션 도입" },
              { year: "2018", event: "국내외 전문 통번역사 네트워크 15,000명 돌파" },
              { year: "2010", event: "주요 대기업(삼성, LG, SK 등) 기술 번역 파트너십 체결" },
              { year: "2000", event: "(주)휴텍씨 설립 - 통번역 전문 인프라 구축 시작" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 items-start"
              >
                <div className="text-2xl font-bold text-[#4A1D96] w-24 shrink-0">{item.year}</div>
                <div className="pt-1.5 border-l-2 border-purple-200 pl-8 pb-8 relative last:pb-0">
                  <div className="absolute top-2.5 -left-1.5 w-3 h-3 rounded-full bg-[#4A1D96]" />
                  <p className="text-lg text-gray-700 font-medium">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ShieldCheck className="w-16 h-16 text-[#4A1D96] mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">신뢰할 수 있는 파트너</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-12">
            휴텍씨는 보안을 최우선으로 생각합니다. 모든 번역 데이터는 철저한 기밀 유지가 보장되며, 
            전문 보안 시스템을 통해 소중한 정보를 안전하게 보호합니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["NDA 보장", "데이터 암호화", "보안 서버 운영", "전문가 보안 서약"].map((tag) => (
              <span key={tag} className="px-6 py-2 bg-purple-50 text-[#4A1D96] rounded-full font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
