import { motion } from "motion/react";
import { 
  Factory, Utensils, Film, Layers, Languages, 
  Cpu, Shield, Sun, Gavel, Briefcase, PenTool,
  ChefHat, Home, GraduationCap, Sparkles,
  Globe, Tv, FileSearch, Newspaper, Mic, Stethoscope,
  ArrowRight, Volume2, Headphones, FileText, Search, Check,
  HardHat, Building2, Hammer, Zap, BookOpen, Dumbbell
} from "lucide-react";
import { Link } from "react-router";

const categories = [
  {
    id: "stt",
    title: "서비스 유형",
    subtitle: "다양한 형태의 미디어 지원 로직",
    icon: Zap,
    color: "#4A1D96",
    items: [
      { name: "STT (음성→텍스트)", icon: Mic, desc: "예능/드라마/유튜브 자막 및 녹음본 텍스트 변환" },
      { name: "TTS (텍스트→음성)", icon: Volume2, desc: "오디오북, 홍보 영상, 방송 나레이션 생성" },
      { name: "STS (음성→음성)", icon: Headphones, desc: "실시간 동시통역 및 다국어 음성 변환" },
      { name: "문서 번역", icon: FileText, desc: "비즈니스, 사업 소개서, 원문 및 다국어 문서 번역" },
      { name: "세부전문분야", icon: Search, desc: "특수한 산업과 환경에 맞춘 심화 전문 번역" },
    ],
  },
  {
    id: "industry",
    title: "산업별",
    subtitle: "첨단 기술 및 국가 기간 산업 전문 번역",
    icon: Factory,
    color: "#1565C0",
    items: [
      { name: "반도체/조선", icon: Cpu, desc: "정밀 공정 매뉴얼 및 설계 도면 번역 작업" },
      { name: "방산", icon: Shield, desc: "방위산업 기술 제안서 및 고도 보안 문서" },
      { name: "태양광", icon: Sun, desc: "신재생에너지 인프라 및 기술 가이드라인" },
      { name: "법률/특허", icon: Gavel, desc: "국제 소송 판결문 및 특허 출원 명세서" },
      { name: "비즈니스", icon: Briefcase, desc: "글로벌 IR 자료 및 사업 계획서 현지화" },
      { name: "웹툰/웹소설", icon: PenTool, desc: "K-콘텐츠 글로벌 수출을 위한 창의적 현지화" },
    ],
  },
  {
    id: "life",
    title: "생활영역",
    subtitle: "일상 및 라이프스타일 현지화 서비스",
    icon: Utensils,
    color: "#E91E63",
    items: [
      { name: "요리/라이프", icon: ChefHat, desc: "다양한 글로벌 레시피 및 라이프스타일 가이드" },
      { name: "재무/부동산", icon: Home, desc: "해외 투자 자료 및 자산/부동산 계약서" },
      { name: "입시/교육", icon: GraduationCap, desc: "해외 유학 서류 및 전문 교육용 콘텐츠" },
      { name: "사주/운세", icon: Sparkles, desc: "동서양 운세, 사주 등 문화적 맥락의 번역" },
    ],
  },
  {
    id: "specialized",
    title: "전문영역",
    subtitle: "고도의 학술 지식과 깊이가 요구되는 분야",
    icon: Layers,
    color: "#6B3FA0",
    items: [
      { name: "AI 고전 번역", icon: BookOpen, desc: "역사적 문헌 및 한문 텍스트의 현대어 복원" },
      { name: "피지컬", icon: Dumbbell, desc: "스포츠 과학, 운동 생리학 등 신체 활동 전문 번역" },
      { name: "학술/논문", icon: FileSearch, desc: "국제 학술지 투고 논문 및 대학 전문 교재" },
      { name: "기사/뉴스", icon: Newspaper, desc: "글로벌 시사 뉴스 및 보도자료 신속 번역" },
      { name: "의료/건강", icon: Stethoscope, desc: "의학 논문 및 의료 기기 등의 생명/건강 문서" },
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
                id={cat.id}
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
