import { Link } from "react-router";
import {
  ArrowRight, Globe, Users, Award, Zap,
  Factory, Cpu, Shield, Sun, Gavel, Briefcase, 
  ChefHat, Home, GraduationCap, Sparkles, Tv, 
  Mic, Heart, Utensils, ShieldCheck, ChevronRight,
  FileText, Volume2, MessageSquare, Film, Target,
  Database, Activity, Globe2, BarChart3, Fingerprint,
  Layers, Code2, PenTool, HardHat, Building2, Hammer,
  Languages, Search, Stethoscope, BookOpen, Dumbbell, FileSearch,
  Headphones, Type, FileSpreadsheet, Box
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useState } from "react";

const stats = [
  { value: "109개", label: "AI 동시통역 지원 언어", icon: Globe, color: "text-purple-400" },
  { value: "17,000명", label: "국내 통번역사 네트워크", icon: Users, color: "text-blue-400" },
  { value: "195개국", label: "활용 국가", icon: Award, color: "text-emerald-400" },
  { value: "27년+", label: "교육 노하우", icon: Zap, color: "text-amber-400" },
];

const serviceGroups = [
  {
    id: "industry",
    groupTitle: "산업별",
    groupSubtitle: "첨단 기술 및 국가 기간 산업 전문 번역",
    groupIcon: Factory,
    groupColor: "#1565C0",
    items: [
      {
        id: "semi-ship",
        title: "반도체/조선",
        description: "반도체 공정 매뉴얼, 조선해양 설계 도면 등 산업 기술 문서를 AI와 전문 번역사가 정확하게 번역합니다.",
        icon: Cpu,
        color: "#1565C0",
        image: "https://images.unsplash.com/photo-1672307613484-3254a04651fd?auto=format&fit=crop&q=80&w=1000",
      },
      {
        id: "defense",
        title: "방산",
        description: "방위산업 기술 제안서, 무기체계 규격서, 군사 교범 등 보안이 필요한 문서의 전문 번역.",
        icon: Shield,
        color: "#37474F",
        image: "https://images.unsplash.com/photo-1770200423785-ace012300f09?auto=format&fit=crop&q=80&w=1000",
      },
      {
        id: "solar",
        title: "태양광",
        description: "태양광·신재생에너지 분야의 기술 문서, 인증 서류, 설비 매뉴얼 전문 번역.",
        icon: Sun,
        color: "#F57C00",
        image: "https://images.unsplash.com/photo-1628206554160-63e8c921e398?auto=format&fit=crop&q=80&w=1000",
      },
      {
        id: "law-patent",
        title: "법률/특허",
        description: "소송 서류, 판결문, 특허 명세서 등 고도의 정확성이 요구되는 법적 문서 전문 번역.",
        icon: Gavel,
        color: "#455A64",
        image: "https://images.unsplash.com/photo-1767972159871-b9f5d320be2b?auto=format&fit=crop&q=80&w=1000",
      },
    ],
  },
  {
    id: "life",
    groupTitle: "생활영역",
    groupSubtitle: "일상 생활 및 라이프스타일 현지화 서비스",
    groupIcon: Utensils,
    groupColor: "#E91E63",
    items: [
      {
        id: "cooking-life",
        title: "요리/라이프",
        description: "전 세계 다양한 레시피, 요리 서적, 라이프스타일 콘텐츠의 감각적인 번역.",
        icon: ChefHat,
        color: "#D81B60",
        image: "https://images.unsplash.com/photo-1635661988046-306631057df3?auto=format&fit=crop&q=80&w=1000",
      },
      {
        id: "finance-estate",
        title: "재무/부동산",
        description: "해외 투자 자료, 부동산 계약서, 금융 보고서 등 생활 밀착형 금융 정보 번역.",
        icon: Home,
        color: "#C2185B",
        image: "https://images.unsplash.com/photo-1709080381729-965c62ab0471?auto=format&fit=crop&q=80&w=1000",
      },
      {
        id: "edu-exam",
        title: "입시/교육",
        description: "유학 서류, 교육 교재, 입시 정보 등 교육 분야의 정확한 번역 서비스를 제공합니다.",
        icon: GraduationCap,
        color: "#880E4F",
        image: "https://images.unsplash.com/photo-1760121788536-9797394e210e?auto=format&fit=crop&q=80&w=1000",
      },
      {
        id: "fortune-astrology",
        title: "사주/운세",
        description: "동양 사주, 서양 점성술 등 신비롭고 특화된 콘텐츠의 의미 전달 중심 번역.",
        icon: Sparkles,
        color: "#AD1457",
        image: "https://images.unsplash.com/photo-1737029114774-7fcf8f8eb7c3?auto=format&fit=crop&q=80&w=1000",
      },
    ],
  },
  {
    id: "specialized",
    groupTitle: "전문영역",
    groupSubtitle: "고도의 학술적 지식과 전문성이 요구되는 분야",
    groupIcon: Layers,
    groupColor: "#6B3FA0",
    items: [
      {
        id: "ancient",
        title: "AI 고전 번역",
        description: "역사적 문헌과 한문 텍스트를 AI 기술로 해독하고 현대적 언어로 복원합니다.",
        icon: BookOpen,
        color: "#5D4037",
        image: "https://images.unsplash.com/photo-1771777311183-5a046a357178?auto=format&fit=crop&q=80&w=1000",
      },
      {
        id: "physical",
        title: "피지컬",
        description: "스포츠 과학, 운동 생리학, 재활 의학 등 신체 활동 관련 전문 지식 번역.",
        icon: Dumbbell,
        color: "#D32F2F",
        image: "https://images.unsplash.com/photo-1758875569440-4abefff43277?auto=format&fit=crop&q=80&w=1000",
      },
      {
        id: "academic",
        title: "학술/논문",
        description: "국제 학술지 투고 논문, 연구 보고서, 대학 교재 등 학술적 가치가 높은 문서 번역.",
        icon: FileSearch,
        color: "#1976D2",
        image: "https://images.unsplash.com/photo-1657394404815-6e8d8b164edf?auto=format&fit=crop&q=80&w=1000",
      },
      {
        id: "medical",
        title: "의료/건강",
        description: "의학 논문, 임상 시험 보고서, 의료 기기 매뉴얼 등 생명과 직결된 정확한 의료 번역.",
        icon: Stethoscope,
        color: "#00796B",
        image: "https://images.unsplash.com/photo-1739185069005-8cb46fef2702?auto=format&fit=crop&q=80&w=1000",
      },
    ],
  },
];

const visualFlow = [
  {
    title: "STT",
    color: "#6B3FA0",
    icons: [
      { icon: Headphones, label: "음성 인식" },
      { icon: Mic, label: "녹음본 변환" },
      { icon: Volume2, label: "실시간 자막" }
    ]
  },
  {
    title: "TTS",
    color: "#4A1D96",
    icons: [
      { icon: Volume2, label: "음성 합성" },
      { icon: Tv, label: "나레이션" },
      { icon: Sparkles, label: "AI 보이스" }
    ]
  },
  {
    title: "STS",
    color: "#7C3AED",
    icons: [
      { icon: Languages, label: "언어 변환" },
      { icon: Globe, label: "실시간 통역" },
      { icon: Zap, label: "하이브리드" }
    ]
  },
  {
    title: "문서",
    color: "#4F46E5",
    icons: [
      { icon: FileSpreadsheet, label: "엑셀/PPT" },
      { icon: FileText, label: "전문 매뉴얼" },
      { icon: ShieldCheck, label: "공증 번역" }
    ]
  },
  {
    title: "세부전문",
    color: "#3B82F6",
    icons: [
      { icon: Box, label: "특화 솔루션" },
      { icon: Target, label: "맞춤형 감수" },
      { icon: Fingerprint, label: "고유 DB 활용" }
    ]
  }
];

export function HomePage() {
  return (
    <div className="font-sans overflow-x-hidden">
      {/* Redesigned Hero Section: High-Tech Concept */}
      <section className="relative min-h-screen flex items-center bg-[#020617] pt-32 pb-24 overflow-hidden">
        {/* Animated Background Layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4A1D96]/20 rounded-full blur-[160px] -mr-96 -mt-96 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] -ml-48 -mb-48" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-10" />
          
          {/* Tech lines decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
             <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4A1D96] to-transparent" />
             <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
             <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-black tracking-[0.2em] text-emerald-400 uppercase">AI Hybrid Global Solution</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight"
              >
                언어의 장벽을<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-purple-400 to-emerald-400">기술로 허물다</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-gray-400 max-w-2xl font-bold leading-relaxed"
              >
                27년의 번역 노하우와 최첨단 AI 기술이 결합된 휴텍씨 메타트랜스.<br className="hidden md:block" />
                195개국, 109개 언어를 아우르는 글로벌 커뮤니케이션의 정점.
              </motion.p>

              {/* Categorization Keywords (1-2) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex items-center gap-4">
                    <span className="text-[11px] font-black text-[#4A1D96] bg-white/10 px-3 py-1 rounded-lg uppercase tracking-widest border border-white/5">Service Type</span>
                    <div className="flex flex-wrap gap-2">
                      {["STT", "TTS", "STS", "문서", "세부전문"].map((kw) => (
                        <span key={kw} className="px-4 py-1.5 bg-white/5 rounded-xl text-xs font-black text-white/70 border border-white/10 hover:border-purple-500 transition-colors cursor-default">{kw}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[11px] font-black text-emerald-400 bg-white/10 px-3 py-1 rounded-lg uppercase tracking-widest border border-white/5">Fields</span>
                    <div className="flex flex-wrap gap-2">
                      {["산업별", "생활영역", "전문영역"].map((kw) => (
                        <span key={kw} className="px-4 py-1.5 bg-white/5 rounded-xl text-xs font-black text-white/70 border border-white/10 hover:border-emerald-500 transition-colors cursor-default">{kw}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Link
                  to="/request"
                  className="bg-white text-gray-950 px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-2xl shadow-white/10 flex items-center gap-3"
                >
                  프로젝트 시작하기 <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/pricing"
                  className="bg-white/5 backdrop-blur-xl text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all border border-white/10"
                >
                  요금 안내
                </Link>
              </motion.div>
            </div>

            {/* Right Visual (Floating Tech Elements) */}
            <div className="lg:col-span-5 relative h-[600px] flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="relative z-10"
              >
                {/* Central Brain/AI core */}
                <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-[#4A1D96] to-[#7C3AED] flex items-center justify-center relative">
                   <div className="absolute inset-0 rounded-full animate-ping bg-purple-500/20" />
                   <div className="absolute inset-[-20px] rounded-full border border-white/10 border-dashed animate-spin-slow" />
                   <Cpu className="w-24 h-24 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]" />
                </div>
              </motion.div>

              {/* Slow Clockwise Rotating Orbitals (1-1: 2.5x Size) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full flex items-center justify-center pointer-events-none"
              >
                {stats.map((item, i) => {
                  const angle = (i * 90);
                  return (
                    <div 
                      key={i} 
                      className="absolute" 
                      style={{ transform: `rotate(${angle}deg) translate(320px)` }}
                    >
                      <motion.div
                        animate={{ rotate: [-angle, -angle - 360] }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="bg-white/5 backdrop-blur-2xl px-12 py-10 rounded-[64px] border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col items-center gap-6 group hover:bg-white/10 transition-colors cursor-default min-w-[320px] pointer-events-auto"
                      >
                        <item.icon className={`w-24 h-24 ${item.color} drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]`} />
                        <div className="flex flex-col items-center text-center">
                          <span className="text-[42px] font-black text-white whitespace-nowrap tracking-tighter leading-none mb-2">{item.value}</span>
                          <span className="text-[18px] font-black text-gray-400 whitespace-nowrap tracking-tight uppercase">{item.label}</span>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>

              {/* Background glowing rings */}
              <div className="absolute w-[600px] h-[600px] border border-white/5 rounded-full" />
              <div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* "What's possible" Section (2: 1 Row with 5 Cards) */}
      <section className="py-32 bg-white relative">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-24">
            <div className="max-w-2xl px-4">
              <h2 className="text-4xl md:text-5xl font-black text-gray-950 mb-8 tracking-tight">메타트랜스의 가능성.</h2>
              <p className="text-xl text-gray-500 font-bold leading-relaxed">
                STT부터 문서 번역까지, 모든 글로벌 소통 솔루션을 한눈에 확인하십시오.
              </p>
            </div>
            <div className="hidden lg:block px-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center"><Fingerprint className="text-[#4A1D96]" /></div>
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center"><Database className="text-emerald-500" /></div>
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center"><BarChart3 className="text-purple-400" /></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {visualFlow.map((flow, i) => (
              <motion.div
                key={flow.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[40px] p-8 border border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl transition-all group flex flex-col items-center h-full"
              >
                <div 
                  className="inline-block px-8 py-2.5 rounded-full text-white font-black text-[13px] mb-10 tracking-widest shadow-lg"
                  style={{ backgroundColor: flow.color }}
                >
                  {flow.title.toUpperCase()}
                </div>
                
                <div className="flex flex-col gap-6 w-full flex-1 justify-center">
                  {flow.icons.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 group/icon cursor-default bg-gray-50/50 p-4 rounded-2xl hover:bg-gray-100 transition-all border border-transparent hover:border-gray-200">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center group-hover/icon:scale-110 transition-all shadow-sm">
                        <item.icon className="w-5 h-5 text-gray-400 group-hover/icon:text-[#4A1D96]" />
                      </div>
                      <span className="text-[13px] font-black text-gray-600 tracking-tight">{item.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Sections - Updated structure */}
      {serviceGroups.map((group) => (
        <section key={group.id} className="py-32 odd:bg-gray-50 even:bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
              <div>
                <div className="inline-flex items-center gap-2 mb-6 text-gray-400 font-black text-xs uppercase tracking-[0.3em]">
                   <group.groupIcon className="w-4 h-4" />
                   <span>{group.id === 'industry' ? 'INDUSTRY' : group.id === 'life' ? 'LIFE' : 'SPECIALIZED'} SOLUTIONS</span>
                </div>
                <h2 className="text-4xl font-black text-gray-950 mb-4 tracking-tight">
                  {group.groupTitle}{group.id === 'industry' ? '별' : group.id === 'life' ? '영역' : '영역'} 전문 솔루션
                </h2>
                <p className="text-gray-500 font-bold text-lg">{group.groupSubtitle}</p>
              </div>
              <Link to="/fields" className="inline-flex items-center gap-4 bg-gray-950 text-white px-8 py-4 rounded-2xl font-black text-sm hover:scale-105 transition-all">
                {group.groupTitle} 전체보기 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {group.items.map((item) => (
                 <Link 
                  key={item.id} 
                  to="/fields"
                  className="group relative h-[450px] rounded-[48px] overflow-hidden shadow-2xl transition-all"
                 >
                   <ImageWithFallback src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                   <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-90" />
                   <div className="absolute bottom-0 left-0 p-10 w-full">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-black text-white mb-3 tracking-tight">{item.title}</h3>
                      <p className="text-sm text-gray-400 font-bold leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {item.description}
                      </p>
                   </div>
                 </Link>
               ))}
            </div>
          </div>
        </section>
      ))}

      {/* About Section - Corporate Tech Dark */}
      <section id="about" className="py-40 bg-[#020617] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[#4A1D96]/10 rounded-full blur-[200px] opacity-50" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-12 leading-[1.1] tracking-tight">
                27년간 쌓아온<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">데이터와 경험의 가치</span>
              </h2>
              <p className="text-xl text-gray-400 font-bold leading-relaxed mb-16">
                Human Tech Coexistence. 우리는 AI 기술의 효율성과 전문 번역사의 통찰력을 결합하여 전 세계 모든 지식이 언어의 장벽 없이 공유되는 세상을 만듭니다.
              </p>

              <div className="space-y-8">
                {[
                  { icon: Target, title: "Context Accuracy", desc: "단순한 단어 치환을 넘어, 원문의 맥락과 전문성을 100% 전달합니다." },
                  { icon: Code2, title: "AI Prompt Engineering", desc: "최신 LLM 기반 프롬프트 엔지니어링으로 번역 품질을 극대화합니다." },
                  { icon: Layers, title: "Hybrid Infrastructure", desc: "AI의 속도와 인간의 감수성이 조화를 이루는 독보적 시스템을 갖췄습니다." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#4A1D96] transition-colors">
                      <item.icon className="w-6 h-6 text-purple-400 group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-gray-500 font-bold text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6 pt-12">
                   <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[48px] h-64 flex flex-col justify-end">
                      <p className="text-5xl font-black text-purple-400 mb-2">17K</p>
                      <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Global Experts</p>
                   </div>
                   <div className="bg-[#4A1D96] p-10 rounded-[48px] h-80 flex flex-col justify-end">
                      <p className="text-5xl font-black text-white mb-2">27+</p>
                      <p className="text-xs font-black text-purple-200 uppercase tracking-widest">Years Experience</p>
                   </div>
                </div>
                <div className="space-y-6">
                   <div className="bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/20 p-10 rounded-[48px] h-80 flex flex-col justify-end">
                      <p className="text-5xl font-black text-emerald-400 mb-2">109</p>
                      <p className="text-xs font-black text-emerald-900/40 uppercase tracking-widest">Global Languages</p>
                   </div>
                   <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[48px] h-64 flex flex-col justify-end">
                      <p className="text-5xl font-black text-blue-400 mb-2">195</p>
                      <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Service Nations</p>
                   </div>
                </div>
              </div>
              
              {/* Decorative center element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl z-20">
                <ImageWithFallback src="figma:asset/9dbe9ad52c04620df43f1172b589ff933eac36a6.png" alt="HutechC Logo" className="w-16 h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security - High Tech Slate */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-24 bg-white rounded-[32px] shadow-2xl flex items-center justify-center mx-auto mb-12 border border-slate-200"
          >
            <ShieldCheck className="w-12 h-12 text-[#4A1D96]" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-8 tracking-tight">국가 기밀 수준의 철저한 보안</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-20 font-bold leading-relaxed">
            휴텍씨는 모든 고객의 소중한 데이터를 보호하기 위해 국제 수준의 보안 가이드라인과 비밀유지약정(NDA)을 완벽하게 준수합니다.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {["NDA 보장", "ISO 27001 인증", "데이터 종단간 암호화", "보안 전문팀 운영"].map((tag) => (
              <div key={tag} className="px-10 py-5 bg-white border border-slate-200 rounded-3xl font-black text-slate-900 shadow-sm hover:shadow-lg transition-all">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final High-Tech CTA */}
      <section className="py-40 bg-[#4A1D96] relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-indigo-900 opacity-90" />
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-white/5 rounded-full blur-[150px] -mr-96 -mt-96 group-hover:scale-110 transition-transform duration-1000" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-16 leading-tight tracking-tight">
            전 세계 지식의 흐름,<br />
            지금 바로 합류하십시오.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Link to="/quote" className="bg-white text-[#4A1D96] px-16 py-6 rounded-3xl font-black text-xl hover:scale-105 transition-all shadow-2xl">
              실시간 견적 시작
            </Link>
            <Link to="/request" className="bg-white/10 backdrop-blur-2xl border border-white/20 text-white px-16 py-6 rounded-3xl font-black text-xl hover:bg-white/20 transition-all">
              번역 서비스 신청
            </Link>
          </div>
          <p className="mt-16 text-purple-300 font-bold opacity-60 text-sm tracking-widest">TRUSTED BY 17,000+ EXPERTS & 2,000+ CORPORATIONS</p>
        </div>
      </section>
    </div>
  );
}
