import { motion } from "motion/react";
import { 
  Building2, Globe, ShieldCheck, Zap, BarChart3, 
  Users, Rocket, Cpu, FileText, CheckCircle2, 
  ArrowRight, Mail, Phone, MessageSquare,
  Check, X, Search, Headphones, Monitor, Laptop, Smartphone,
  Network
} from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const comparisonData = [
  { feature: "문서 번역", traditional: false, generalAI: true, meta: true },
  { feature: "화상/영상 번역", traditional: false, generalAI: false, meta: true },
  { feature: "STT 서비스", traditional: false, generalAI: false, meta: true },
  { feature: "품질 검수 (Accuracy)", traditional: false, generalAI: false, meta: true, metaLabel: "초고속/정밀" },
  { feature: "실시간 연동", traditional: false, generalAI: false, meta: true },
  { feature: "대용량 문서 / API", traditional: false, generalAI: false, meta: true },
];

const processSteps = [
  { title: "견적 요청", desc: "온라인/전화 견적 접수 및 상담" },
  { title: "전략협의 & 계약 체결", desc: "기업별 맞춤 견적 제시 및 계약 진행" },
  { title: "전담 PM 배정", desc: "프로젝트 특성에 맞는 최적의 전담팀 및 검수관 배정" },
  { title: "AI 번역 + 전문가 QC", desc: "AI의 빠른 속도와 전문 인력의 꼼꼼한 품질 검수" },
  { title: "최종 납품 & 피드백 반영", desc: "고객만족도 조사 및 필요 시 피드백 사항 보강/업데이트" }
];

const industries = [
  {
    title: "법률 (Legal)",
    desc: "계약서, 투자 유치, 저작권 등 법률 전문 지식 서비스 제공. 정확한 법률적 문맥 파악을 통해 번역의 정확도를 높입니다.",
    icon: ShieldCheck
  },
  {
    title: "의료·제약 (Medical)",
    desc: "임상 시험 보고서, 의학 논문, 제약 메뉴얼 등 까다로운 규격과 용어 관리가 필요한 분야에 최적화된 서비스를 제공합니다.",
    icon: Laptop
  },
  {
    title: "금융·보험 (Finance)",
    desc: "연간 보고서, 주주 서한, 금융 상품 설명서 등을 번역합니다. 보안성이 뛰어난 데이터 가드닝을 통해 완벽한 정보 보호를 보장합니다.",
    icon: BarChart3
  },
  {
    title: "IT·소프트웨어 (Tech)",
    desc: "소프트웨어 UI, 가이드라인, API 문서 번역을 지원합니다. 현지화 과정에서 엔지니어와 긴밀한 협력을 통해 사용자 경험을 최적화합니다.",
    icon: Cpu
  },
  {
    title: "학술·연구 (Academics)",
    desc: "인공지능, 빅데이터, 연구 보고서 등의 고난도 학술 문서를 전문가 집단의 협업과 AI의 학습 능력을 바탕으로 신속하고 정확하게 번역합니다.",
    icon: Search
  },
  {
    title: "마케팅·광고 (Marketing)",
    desc: "글로벌 캠페인 카피, SNS 카드뉴스 등의 감각적인 현지화 번역을 지원합니다. 단순 번역을 넘어 현지 문화와 정서를 반영한 정성적 의미를 전달합니다.",
    icon: Rocket
  }
];

const b2bSolutions = [
  { title: "기업 번역 서비스", desc: "계약서, 보고서, 사내 자료 등 기업 전반의 전문 번역", icon: Building2 },
  { title: "로컬라이제이션 솔루션", desc: "글로벌 진출을 위한 웹/앱, 게임 등의 현지화 서비스", icon: Globe },
  { title: "대량 문서 번역", desc: "방대한 양의 사내 문서 등 빠른 처리가 필요한 대규모 번역", icon: FileText },
  { title: "맞춤형 워크플로우 & API", desc: "기업 시스템과 연동 가능한 유연한 API 솔루션 제공", icon: Network },
  { title: "다국어 세계 진출 지원", desc: "전 세계 109개 이상의 언어 지원 및 마케팅 연계", icon: Rocket },
  { title: "예산 맞춤형 번역 & 챗봇", desc: "예산 규모에 따른 방식 제안 및 24시간 고객지원 챗봇", icon: MessageSquare },
  { title: "긴급 번역", desc: "신속한 대처가 필요한 긴급 사안 최우선 번역 서비스", icon: Zap },
  { title: "간단 온라인 견적 서비스", desc: "클릭 몇 번만으로 쉽고 빠른 자동 견적 산출 가능", icon: CalculatorIcon }
];

export function B2BPage() {
  return (
    <div className="bg-white font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6"
            >
              기업을 위한 24시간<br />
              <span className="text-[#4A1D96]">AI 번역 비서</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-500 font-bold mb-10 leading-relaxed"
            >
              109개 언어, 전문 감수, 대량 번역까지<br className="hidden md:block" />
              한번에 해결합니다.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link 
                to="/request"
                className="inline-flex items-center bg-[#4A1D96] text-white px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-all shadow-xl shadow-purple-100"
              >
                견적 문의하기
              </Link>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <ImageWithFallback 
              src="figma:asset/1c385f0557f4dc7dcb9bbd10a153553881b71739.png" 
              alt="B2B AI Translation Assistant" 
              className="w-full h-auto rounded-[40px]"
            />
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">다른 번역 서비스와는 다릅니다.</h2>
            <p className="text-gray-500 font-bold text-lg">전통 번역과 단순 AI 번역의 한계를 넘어 메타트랜스만의 차별성을 제공합니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Traditional */}
            <div className="bg-gray-50 rounded-[40px] p-10 border border-gray-100 opacity-60">
              <h3 className="text-xl font-black text-center mb-8">전통 번역회사</h3>
              <div className="space-y-6">
                {comparisonData.map((item, i) => (
                  <div key={i} className="flex items-center justify-between gap-4">
                    <span className="text-sm font-bold text-gray-500">{item.feature}</span>
                    <div className="shrink-0">{item.traditional ? <Check className="w-5 h-5 text-green-500" /> : <X className="w-5 h-5 text-red-400" />}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* General AI */}
            <div className="bg-gray-50 rounded-[40px] p-10 border border-gray-100 opacity-60">
              <h3 className="text-xl font-black text-center mb-8">일반 AI 번역기</h3>
              <div className="space-y-6">
                {comparisonData.map((item, i) => (
                  <div key={i} className="flex items-center justify-between gap-4">
                    <span className="text-sm font-bold text-gray-500">{item.feature}</span>
                    <div className="shrink-0">{item.generalAI ? <Check className="w-5 h-5 text-green-500" /> : <X className="w-5 h-5 text-red-400" />}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* MetaTrans */}
            <div className="bg-[#4A1D96] rounded-[40px] p-10 shadow-2xl shadow-purple-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <div className="bg-white/10 backdrop-blur px-3 py-1 rounded-full text-[10px] text-white font-black uppercase tracking-widest">Premium Choice</div>
              </div>
              <h3 className="text-2xl font-black text-center text-white mb-8">메타트랜스</h3>
              <div className="space-y-6 relative z-10">
                {comparisonData.map((item, i) => (
                  <div key={i} className="flex items-center justify-between gap-4">
                    <span className="text-sm font-bold text-purple-100">{item.feature}</span>
                    <div className="flex items-center gap-2">
                      {item.metaLabel && <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full font-bold">{item.metaLabel}</span>}
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <Link to="/request" className="block w-full text-center bg-white text-[#4A1D96] py-4 rounded-2xl font-black transition-transform hover:scale-105">지금 도입하기</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">체계적인 번역 프로세스</h2>
            <p className="text-gray-500 font-bold">AI 속도와 전문 PM 관리로, 기업 번역 프로젝트를 안전하게 수행합니다.</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative">
             {processSteps.map((step, i) => (
               <div key={i} className="flex-1 w-full flex items-center gap-6 group">
                 <div className="flex flex-col items-center gap-6 flex-1">
                   <div className="w-20 h-20 rounded-[28px] bg-white shadow-lg flex items-center justify-center border border-gray-100 group-hover:border-[#4A1D96] transition-all relative">
                     <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#4A1D96] text-white text-xs font-black flex items-center justify-center shadow-lg">0{i+1}</div>
                     <FileText className="w-8 h-8 text-[#4A1D96]" />
                   </div>
                   <div className="text-center">
                     <h4 className="font-black text-gray-900 mb-2 whitespace-nowrap">{step.title}</h4>
                     <p className="text-[12px] text-gray-400 font-bold leading-tight max-w-[160px] mx-auto">{step.desc}</p>
                   </div>
                 </div>
                 {i < processSteps.length - 1 && (
                   <div className="hidden lg:block shrink-0">
                     <ArrowRight className="w-6 h-6 text-gray-300" />
                   </div>
                 )}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Industry Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">메타트랜스는 다양한 산업군을 지원합니다.</h2>
            <p className="text-gray-500 font-bold max-w-3xl mx-auto">
              복잡한 계약 문서, 전문 의학 논문, 대규모 IT 현지화까지 기업이 필요로 하는 모든 번역을 업종별 맞춤 솔루션으로 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[48px] border border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:shadow-purple-100/50 transition-all group">
                <div className="w-16 h-16 rounded-[24px] bg-purple-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-[#4A1D96]" />
                </div>
                <h4 className="text-xl font-black text-gray-900 mb-4">{item.title}</h4>
                <p className="text-sm text-gray-500 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-32 bg-gray-50/50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">메타트랜스가 답입니다.</h2>
            <h3 className="text-2xl font-black text-[#4A1D96] mb-8">기업을 위한 올인원 번역 솔루션</h3>
            <p className="text-gray-500 font-bold">문서, 음성, 영상, 로컬라이제이션까지 필요한 모든 번역을 한 곳에서 해결하세요.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {b2bSolutions.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-[#4A1D96]" />
                </div>
                <h4 className="font-black text-gray-900 mb-3 text-sm">{item.title}</h4>
                <p className="text-[11px] text-gray-400 font-bold leading-tight">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All-in-one Visual Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12">
                메타트랜스 번역과 함께라면<br />
                <span className="text-[#4A1D96]">이 모든 서비스를 한번에</span>
              </h2>
              
              <div className="space-y-4">
                {[
                  { label: "음성을 텍스트로", sub: "109개 언어 STT 지원" },
                  { label: "텍스트를 음성으로", sub: "다양한 보이스의 TTS" },
                  { label: "문서번역·동시통역", sub: "실시간 하이브리드 통번역" },
                  { label: "AI 유튜브영상", sub: "다국어 자막 및 더빙 지원" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 rounded-[28px] bg-purple-50 border border-purple-100 group hover:bg-[#4A1D96] hover:text-white transition-all">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                      <Zap className="w-6 h-6 text-[#4A1D96]" />
                    </div>
                    <div>
                      <p className="font-black text-lg">{item.label}</p>
                      <p className="text-xs font-bold opacity-60">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div className="relative z-10 scale-110">
                <ImageWithFallback 
                  src="figma:asset/5376df7b16bba9b58ecfcb082e4331ef8238a3fd.png" 
                  alt="MetaTrans Solutions Overview" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#4A1D96]/5 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section (from original image 1 bottom) */}
      <section className="py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-black text-gray-900 mb-12">메타트랜스와 함께하는 기업</h3>
          <p className="text-gray-400 font-bold mb-16">수 많은 기업들이 글로벌 커뮤니케이션 메타트랜스와 함께 실현하고 있습니다.</p>
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 grayscale opacity-40">
             <ImageWithFallback src="figma:asset/9dbe9ad52c04620df43f1172b589ff933eac36a6.png" alt="Partners" className="h-10 object-contain" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white p-16 rounded-[60px] shadow-2xl shadow-purple-100 border border-purple-50">
            <h3 className="text-3xl font-black text-gray-900 mb-6 leading-tight">기업의 글로벌 비즈니스 파트너,<br />메타트랜스와 지금 상담하세요.</h3>
            <p className="text-gray-500 mb-12 font-bold leading-relaxed">상세 제안서 요청 또는 도입 문의를 남겨주시면<br />전문 컨설턴트가 신속하게 안내해 드립니다.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/request" className="bg-[#4A1D96] text-white px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl shadow-purple-200">
                무료 상담 신청하기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CalculatorIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="16" x2="16" y1="14" y2="18" />
      <path d="M16 10h.01" />
      <path d="M12 10h.01" />
      <path d="M8 10h.01" />
      <path d="M12 14h.01" />
      <path d="M8 14h.01" />
      <path d="M12 18h.01" />
      <path d="M8 18h.01" />
    </svg>
  );
}
