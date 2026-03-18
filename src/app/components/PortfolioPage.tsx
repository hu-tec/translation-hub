import { motion } from "motion/react";
import { Award, Globe, FileText, CheckCircle2, TrendingUp, Cpu, Factory, Ship, Shield } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const trackRecords = [
  { 
    title: "대형 반도체 공정 매뉴얼 번역", 
    desc: "10,000페이지 분량의 설비 매뉴얼 및 공정 프로세스 국영 번역", 
    client: "S사 반도체 사업부", 
    icon: Cpu, 
    year: "2023",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
  },
  { 
    title: "조선해양 설계 도면 및 규격서 현지화", 
    desc: "LNG선 및 드릴십 관련 기술 문서 50여 종 다국어 번역", 
    client: "H중공업", 
    icon: Ship, 
    year: "2022",
    image: "https://images.unsplash.com/photo-1590432168486-09a82e99d949?auto=format&fit=crop&q=80&w=1000"
  },
  { 
    title: "방위산업 기술 제안서 및 규격서", 
    desc: "수출용 무기 체계 제안서 및 군사 표준 규격 다국어 번역", 
    client: "L사 방산 사업본부", 
    icon: Shield, 
    year: "2024",
    image: "https://images.unsplash.com/photo-1770200423785-ace012300f09?auto=format&fit=crop&q=80&w=1000"
  },
  { 
    title: "K-웹툰 글로벌 시장 진출 현지화", 
    desc: "인기 웹툰 20여 편의 북미 및 동남아 시장 타겟 현지화 번역", 
    client: "N사 웹툰 플랫폼", 
    icon: FileText, 
    year: "2023",
    image: "https://images.unsplash.com/photo-1657584905470-ac4ef76ee2b4?auto=format&fit=crop&q=80&w=1000"
  },
];

const clientLogos = [
  "SAMSUNG", "LG", "SK", "POSCO", "HYUNDAI", "KT", "LOTTE", "KEPCO", "KORAIL", "KOGAS", "금융감독원", "인천공항공사"
];

export function PortfolioPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gray-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            휴텍씨의 압도적인 성과
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            27년간 축적된 노하우와 분야별 전문성을 바탕으로 수많은 글로벌 기업의 
            성공적인 비즈니스 파트너로서 함께하고 있습니다.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">주요 실적</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {trackRecords.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-xl shadow-gray-100 hover:shadow-2xl transition-all"
              >
                <div className="h-64 overflow-hidden">
                  <ImageWithFallback 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-8 right-8 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#4A1D96] flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-bold opacity-80">{item.year} Portfolio</span>
                    </div>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-500 leading-relaxed mb-6">{item.desc}</p>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                    <div className="text-sm font-bold text-gray-400">CLIENT</div>
                    <div className="text-sm font-bold text-[#4A1D96]">{item.client}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Wall */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-12 text-center text-gray-400 uppercase tracking-widest">Main Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {clientLogos.map((logo) => (
              <div key={logo} className="h-24 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 grayscale hover:grayscale-0 transition-all cursor-default text-gray-300 font-black text-xl tracking-tighter italic">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Board */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#4A1D96] rounded-[48px] p-12 text-white grid md:grid-cols-3 gap-12 text-center">
            <div>
              <TrendingUp className="w-12 h-12 text-purple-200 mx-auto mb-6" />
              <div className="text-5xl font-bold mb-2">2M+</div>
              <p className="text-purple-200 font-medium">연간 번역 문서량 (Pages)</p>
            </div>
            <div>
              <Globe className="w-12 h-12 text-purple-200 mx-auto mb-6" />
              <div className="text-5xl font-bold mb-2">109+</div>
              <p className="text-purple-200 font-medium">글로벌 서비스 지원 언어</p>
            </div>
            <div>
              <CheckCircle2 className="w-12 h-12 text-purple-200 mx-auto mb-6" />
              <div className="text-5xl font-bold mb-2">27Y</div>
              <p className="text-purple-200 font-medium">업계 최고 수준 업력</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
