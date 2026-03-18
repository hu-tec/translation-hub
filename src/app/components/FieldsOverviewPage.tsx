import { motion } from "motion/react";
import { 
  Factory, Utensils, Film, Layers, Languages, 
  Cpu, Shield, Sun, Gavel, Briefcase, PenTool,
  ChefHat, Home, GraduationCap, Sparkles,
  Globe, Tv, FileSearch, Newspaper, Mic, Stethoscope,
  ArrowRight, Volume2, Headphones, FileText, Search, Check,
  HardHat, Building2, Hammer
} from "lucide-react";
import { Link } from "react-router";

const translationTypes = [
  {
    id: "stt",
    title: "음성 → 텍스트 (STT)",
    subtitle: "Speech to Text",
    description: "음성을 인식해 텍스트로 변환하는 서비스",
    color: "#4A1D96",
    icon: Mic,
    features: ["예능 / 드라마 / 영화", "SNS · 유튜브", "다큐 · 아나운서 방송", "관광 가이드 · 안내방송", "큐레이션"]
  },
  {
    id: "tts",
    title: "텍스트 → 음성 (TTS)",
    subtitle: "Text to Speech",
    description: "텍스트를 자연스러운 음성으로 변환",
    color: "#7C3AED",
    icon: Volume2,
    features: ["오디오북", "강의 · 음악", "홍보 영상", "방송 나레이션"]
  },
  {
    id: "sts",
    title: "음성 → 음성 (STS)",
    subtitle: "Speech to Speech",
    description: "실시간 다국어 음성 변환 서비스",
    color: "#6B3FA0",
    icon: Headphones,
    features: ["동시통역", "다국어 강의", "외국어 노래/음악 변환", "인터뷰"]
  },
  {
    id: "doc",
    title: "문서 번역",
    subtitle: "Document Translation",
    description: "전문 문서를 다양한 언어로 번역",
    color: "#1E293B",
    icon: FileText,
    features: ["원문 번역 · 고전 번역", "비즈니스 번역", "PPT 번역", "사업 소개서"]
  },
  {
    id: "language",
    title: "언어별 번역",
    subtitle: "Language Specific",
    description: "전 세계 주요 언어 및 희귀 언어 전문 번역",
    color: "#4F46E5",
    icon: Languages,
    features: ["영어 · 일어 · 중국어", "유럽어권 · 동남아어권", "특수 언어 · 희귀 언어", "방언 현지화"]
  }
];

const categories = [
  {
    id: "industry",
    title: "산업분야 전문 번역",
    subtitle: "첨단 기술 및 국가 기간 산업 전문",
    icon: Factory,
    color: "#1565C0",
    items: [
      { name: "반도체/조선", icon: Cpu, desc: "정밀 공정 및 설계 도면 전문" },
      { name: "방산", icon: Shield, desc: "무기체계 및 군사 규격서" },
      { name: "태양광", icon: Sun, desc: "에너지 인프라 및 기술 문서" },
      { name: "법률/특허", icon: Gavel, desc: "소송 서류 및 특허 명세서" },
      { name: "비즈니스/문서", icon: Briefcase, desc: "IR 및 사업 계획서 현지화" },
      { name: "웹툰/웹소설", icon: PenTool, desc: "창의적 콘텐츠 현지화" },
    ],
  },
  {
    id: "construction",
    title: "건설분야 전문 번역",
    subtitle: "대형 플랜트 및 인프라 건설 기술 전문",
    icon: HardHat,
    color: "#F57C00",
    items: [
      { name: "건축/토목", icon: Building2, desc: "설계도면 및 시공계획서" },
      { name: "에너지/플랜트", icon: Factory, desc: "플랜트 설계 및 운영 매뉴얼" },
      { name: "중기계/설비", icon: Hammer, desc: "중장비 사양서 및 유지보수" },
      { name: "SOC/인프라", icon: Globe, desc: "국가 기반 시설 프로젝트" },
    ],
  },
  {
    id: "life",
    title: "생활분야 전문 번역",
    subtitle: "일상 및 라이프스타일 콘텐츠",
    icon: Utensils,
    color: "#E91E63",
    items: [
      { name: "요리/라이프", icon: ChefHat, desc: "글로벌 레시피 및 생활 가이드" },
      { name: "재무/부동산", icon: Home, desc: "자산 관리 및 해외 계약서" },
      { name: "입시/교육", icon: GraduationCap, desc: "유학 서류 및 교육 콘텐츠" },
      { name: "사주/운세", icon: Sparkles, desc: "동서양 운세 콘텐츠 번역" },
    ],
  },
];

export function FieldsOverviewPage() {
  return (
    <div className="bg-gray-50 pb-24 font-sans">
      {/* Hero */}
      <section className="bg-white border-b border-gray-100 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-purple-50 text-[#4A1D96] px-4 py-1.5 rounded-full text-xs font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#4A1D96] animate-pulse" />
              메타트랜스 맞춤형 번역 솔루션
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-gray-900 leading-[1.15]">
              산업별 전문 지식과<br />
              AI 기술의 결합
            </h1>
            <p className="text-xl text-gray-500 mb-10 leading-relaxed font-medium">
              109개 언어를 아우르는 올인원 번역을 통해 글로벌 솔루션을 제공합니다.<br className="hidden md:block" />
              각 분야별 전담 번역사와 AI 엔진이 최상의 결과물을 보장합니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/request"
                className="inline-flex items-center gap-2 bg-[#4A1D96] text-white px-8 py-4 rounded-2xl hover:bg-[#3d187b] transition-all font-bold shadow-xl shadow-purple-100"
              >
                무료 견적/신청 <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-1/2 h-[120%] opacity-[0.03] pointer-events-none rotate-12">
            <Languages className="w-full h-full text-[#4A1D96]" />
          </div>
        </div>
      </section>

      {/* Type-based Classification */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">서비스 유형별 구분</h2>
            <p className="text-gray-500 font-bold">미디어 형태에 최적화된 하이브리드 번역 프로세스</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {translationTypes.map((type, i) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-purple-100 transition-all flex flex-col group"
              >
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-gray-100 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: type.color }}
                >
                  <type.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-1">{type.title}</h3>
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-4">{type.subtitle}</p>
                <p className="text-xs text-gray-500 leading-relaxed mb-8 font-bold">{type.description}</p>
                
                <div className="mt-auto space-y-3">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#4A1D96] shrink-0" />
                      <span className="text-[11px] font-black text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">전문 분야별 상세 서비스</h2>
            <p className="text-gray-500 font-bold">해당 산업의 전문 용어와 맥락을 정확히 이해하는 전문가 매칭</p>
          </div>

          <div className="grid gap-12">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[48px] p-8 md:p-14 shadow-sm border border-gray-100 overflow-hidden relative"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-8 mb-16 relative z-10">
                  <div 
                    className="w-20 h-20 rounded-[28px] flex items-center justify-center shrink-0 shadow-2xl shadow-purple-50"
                    style={{ backgroundColor: cat.color }}
                  >
                    <cat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-2">{cat.title}</h2>
                    <p className="text-lg text-gray-500 font-bold">{cat.subtitle}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                  {cat.items.map((item, ii) => (
                    <div 
                      key={ii}
                      className="group p-8 rounded-[32px] border border-gray-50 hover:border-purple-100 hover:bg-purple-50/20 transition-all cursor-default"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-white transition-all shadow-sm">
                        <item.icon className="w-6 h-6 text-gray-400 group-hover:text-[#4A1D96]" />
                      </div>
                      <h3 className="text-xl font-black text-gray-900 mb-3">{item.name}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed font-bold">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
