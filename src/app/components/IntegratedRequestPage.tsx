import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Send, UserPlus, Calculator, FileText, Check,
  ArrowRight, Shield, Globe, Award, Sparkles,
  Phone, Mail, Clock, MapPin, Search, ChevronRight, BookOpen, GraduationCap, MessageSquare
} from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useLocation } from "react-router";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

type RequestType = "translation" | "expert" | "quote";

interface RequestInfo {
  id: RequestType;
  label: string;
  icon: any;
  title: string;
  subtitle: string;
  benefits: string[];
  description: string;
}

const REQUEST_TYPES: RequestInfo[] = [
  {
    id: "translation",
    label: "번역 신청",
    icon: FileText,
    title: "전문 번역 신청하기",
    subtitle: "AI와 전문가의 하이브리드 번역으로 정확하고 빠르게",
    description: "문서, 영상, 웹툰 등 모든 분야의 전문 번역을 신청하실 수 있습니다. 17,000명의 전문가 네트워크가 최상의 결과물을 보장합니다.",
    benefits: [
      "분야별 최적화된 프롬프트 적용",
      "2단계 검수 (AI + 전문 번역사)",
      "철저한 기밀 유지 및 보안 관리",
      "합리적인 고정가 정책"
    ]
  },
  {
    id: "quote",
    label: "견적 의뢰",
    icon: Calculator,
    title: "실시간 견적 의뢰",
    subtitle: "프로젝트 규모에 맞는 최적의 비용 산출",
    description: "대량 번역이나 장기 프로젝트를 준비 중이신가요? 프로젝트의 성격에 맞춰 가장 합리적인 견적을 산출해 드립니다.",
    benefits: [
      "24시간 이내 빠른 견적 회신",
      "대량 프로젝트 특별 할인 적용",
      "유연한 예산 맞춤형 제안",
      "무료 샘플 번역 제공 (일정 규모 이상)"
    ]
  },
  {
    id: "expert",
    label: "전문가 신청",
    icon: UserPlus,
    title: "전문가 파트너 지원",
    subtitle: "휴텍씨와 함께 글로벌 시장을 리드할 파트너를 모십니다",
    description: "전 세계 17,000명의 전문가들과 함께 성장하세요. AI 기술을 활용한 효율적인 작업 환경과 공정한 보상을 제공합니다.",
    benefits: [
      "AI 번역 보조 도구 활용 지원",
      "다양한 분야의 프로젝트 매칭",
      "정기적인 번역 품질 피드백",
      "업계 최고 수준의 대우 및 정산"
    ]
  },
];

export function IntegratedRequestPage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<RequestType>("translation");
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const type = searchParams.get("type") as RequestType;
    
    if (type && REQUEST_TYPES.some(t => t.id === type)) {
      setActiveTab(type);
    } else if (location.pathname === "/apply-expert") {
      setActiveTab("expert");
    } else if (location.pathname === "/quote") {
      setActiveTab("quote");
    }
  }, [location]);

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (_data: any) => {
    const form = formRef.current;
    if (!form) return;
    // 개인정보 동의 수동 검증
    const privacyCheckbox = form.querySelector<HTMLInputElement>('input[name="privacyConsent"]');
    if (!privacyCheckbox?.checked) {
      toast.error("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }
    const formData = new FormData(form);
    const collected: Record<string, any> = { requestType: activeTab };
    formData.forEach((value, key) => {
      if (collected[key]) {
        // 체크박스 다중값
        if (Array.isArray(collected[key])) collected[key].push(value);
        else collected[key] = [collected[key], value];
      } else {
        collected[key] = value;
      }
    });
    try {
      const res = await fetch(`${API_URL}/api/translation_integrated`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(collected),
      });
      if (!res.ok) throw new Error('서버 오류');
      toast.success(`${REQUEST_TYPES.find(t => t.id === activeTab)?.label}이 접수되었습니다. 곧 연락드리겠습니다.`);
      reset();
      form.reset();
    } catch {
      toast.error("접수에 실패했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  const currentInfo = REQUEST_TYPES.find(t => t.id === activeTab)!;

  // Expert specific info from Image 2
  const EXPERT_BENEFITS = [
    {
      title: "업무 & 행정 지원",
      desc: "프로젝트 배정부터 계약, 정산까지 모든 행정 업무를 휴텍씨가 대행하여 전문가님이 번역에만 집중할 수 있는 환경을 제공합니다.",
      icon: Shield
    },
    {
      title: "안정적 수익 & 배분",
      desc: "투명한 정산 시스템과 업계 최고 수준의 배분율을 통해 전문가님의 노력이 합당한 보상으로 이어지도록 보장합니다.",
      icon: Award
    },
    {
      title: "최첨단 기술 & 인프라",
      desc: "휴텍씨만의 AI 하이브리드 시스템과 CAT Tool 연동을 통해 작업 효율을 극대화하고 품질을 상향 평준화합니다.",
      icon: Sparkles
    },
    {
      title: "교육 & 커뮤니티",
      desc: "SST, TTS 등 최신 번역 트렌드 교육과 정기적인 워크숍을 통해 전문가님의 역량 강화를 지속적으로 지원합니다.",
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24 font-sans">
      {/* Reduced Hero (Image 1 reference) */}
      <section className="bg-gradient-to-br from-[#4A1D96] to-[#2D115F] py-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-8"
          >
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold mb-4">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                미래 번역업무 메타 시스템
              </div>
              <h1 className="text-3xl md:text-4xl font-black mb-3">
                {activeTab === 'expert' ? '전문가 파트너 지원' : '휴텍씨 통합 신청 센터'}
              </h1>
              <p className="text-purple-100/80 font-medium">
                AI와 인간의 조화로운 협업을 통해 번역의 새로운 기준을 제시합니다.
              </p>
            </div>
            
            <div className="flex bg-white/10 p-1.5 rounded-2xl backdrop-blur-md border border-white/10">
              {REQUEST_TYPES.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveTab(type.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                    activeTab === type.id
                      ? "bg-white text-[#4A1D96] shadow-lg"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <type.icon className="w-4 h-4" />
                  {type.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Side (Left) - Image 2 Reference for Expert Tab */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-6"
              >
                {activeTab === 'expert' ? (
                  <div className="bg-white rounded-[40px] p-8 md:p-10 shadow-sm border border-gray-100 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-purple-50 rounded-full -mr-24 -mt-24 opacity-50" />
                    
                    <div className="relative">
                      <h2 className="text-2xl font-black text-gray-900 mb-2">HutechC Partner Benefits</h2>
                      <p className="text-[#4A1D96] font-bold mb-8">휴텍씨와 함께 성장하는 전문가 파트너 혜택</p>
                      
                      <div className="space-y-8">
                        {EXPERT_BENEFITS.map((benefit, idx) => (
                          <div key={idx} className="flex gap-5 group">
                            <div className="w-12 h-12 shrink-0 rounded-2xl bg-purple-50 flex items-center justify-center group-hover:bg-[#4A1D96] transition-colors">
                              <benefit.icon className="w-6 h-6 text-[#4A1D96] group-hover:text-white transition-colors" />
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-gray-900 mb-1">{benefit.title}</h4>
                              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                                {benefit.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-12 p-6 bg-gray-50 rounded-3xl border border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                            <Sparkles className="w-4 h-4" />
                          </div>
                          <h4 className="font-black text-gray-900">전문가 풀 운영 현황</h4>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white p-4 rounded-2xl border border-gray-100">
                            <p className="text-[10px] text-gray-400 font-bold mb-1 uppercase tracking-wider">지원 언어</p>
                            <p className="text-xl font-black text-[#4A1D96]">109+</p>
                          </div>
                          <div className="bg-white p-4 rounded-2xl border border-gray-100">
                            <p className="text-[10px] text-gray-400 font-bold mb-1 uppercase tracking-wider">활동 전문가</p>
                            <p className="text-xl font-black text-[#4A1D96]">17,000+</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-purple-50 rounded-full -mr-24 -mt-24 opacity-50" />
                    
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-[#4A1D96] flex items-center justify-center text-white mb-8 shadow-lg shadow-purple-200">
                        <currentInfo.icon className="w-8 h-8" />
                      </div>
                      
                      <h2 className="text-3xl font-black text-gray-900 mb-4">{currentInfo.title}</h2>
                      <p className="text-[#4A1D96] font-bold mb-6 text-lg">{currentInfo.subtitle}</p>
                      <p className="text-gray-500 leading-relaxed mb-10 font-medium">
                        {currentInfo.description}
                      </p>

                      <div className="space-y-4">
                        <h4 className="text-gray-900 font-bold mb-6 flex items-center gap-2">
                          <Sparkles className="w-5 h-5 text-amber-400" />
                          주요 서비스 혜택
                        </h4>
                        {currentInfo.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3.5 h-3.5 text-[#4A1D96]" />
                            </div>
                            <span className="text-gray-700 font-bold text-sm leading-tight">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="bg-gray-900 rounded-[32px] p-8 text-white relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <h4 className="text-lg font-bold mb-6">궁금한 점이 있으신가요?</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 group/item cursor-pointer">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover/item:bg-white/20 transition-all">
                          <Phone className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[10px] text-white/50 font-bold uppercase tracking-wider">유선 문의</p>
                          <p className="font-bold">02-6207-9090</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 group/item cursor-pointer">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover/item:bg-white/20 transition-all">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[10px] text-white/50 font-bold uppercase tracking-wider">이메일 문의</p>
                          <p className="font-bold">hutechc01@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Form Side (Right) - Image 3 Reference for Expert Tab */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeTab + "-form"}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-[40px] p-8 md:p-10 shadow-sm border border-gray-100"
            >
              <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                
                {/* 1. 신청 구분 Box */}
                <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 flex flex-col xl:flex-row xl:items-center gap-6">
                  <div className="flex items-center gap-2 text-[#4A1D96] font-extrabold shrink-0">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-[#4A1D96] ring-4 ring-purple-200" />
                    </div>
                    <span className="text-[17px]">신청 구분</span>
                  </div>
                  <div className="flex flex-wrap gap-4 xl:ml-4">
                    {["수업신청", "레벨테스트", "설명회신청", "TIP신청"].map((type, idx) => (
                      <label key={type} className="flex items-center gap-2.5 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          defaultChecked={idx === 0}
                          name="requestTypes"
                          value={type}
                          className="w-5 h-5 text-[#4A1D96] rounded border-gray-300 focus:ring-[#4A1D96] transition-colors"
                        />
                        <span className="text-[15px] font-bold text-gray-700 group-hover:text-gray-900 transition-colors">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-12 gap-y-10">
                  {/* Left Column */}
                  <div className="space-y-10">
                    
                    {/* 기본 정보 */}
                    <div>
                      <div className="flex items-center gap-2 text-[#4A1D96] font-bold mb-6 border-b border-gray-100 pb-3">
                        <UserPlus className="w-5 h-5" />
                        <span className="text-[16px]">기본 정보</span>
                      </div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                        <div className="space-y-2">
                          <label className="text-[13px] font-black text-gray-700 ml-1">성명</label>
                          <input name="name" className="w-full bg-gray-50 border-none rounded-2xl px-4 py-3.5 text-[14px] focus:ring-2 focus:ring-[#4A1D96] font-medium placeholder:text-gray-400 transition-shadow" placeholder="성함" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[13px] font-black text-gray-700 ml-1">생년월일</label>
                          <input name="birthDate" type="date" className="w-full bg-gray-50 border-none rounded-2xl px-4 py-3.5 text-[14px] focus:ring-2 focus:ring-[#4A1D96] font-medium text-gray-600 appearance-none transition-shadow" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[13px] font-black text-gray-700 ml-1">연락처</label>
                          <input name="phone" className="w-full bg-gray-50 border-none rounded-2xl px-4 py-3.5 text-[14px] focus:ring-2 focus:ring-[#4A1D96] font-medium placeholder:text-gray-400 transition-shadow" placeholder="010-0000-0000" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[13px] font-black text-gray-700 ml-1">이메일</label>
                          <input name="email" className="w-full bg-gray-50 border-none rounded-2xl px-4 py-3.5 text-[14px] focus:ring-2 focus:ring-[#4A1D96] font-medium placeholder:text-gray-400 transition-shadow" placeholder="example@email.com" />
                        </div>
                      </div>
                    </div>
                    
                    {/* 신청 영역 및 지역 */}
                    <div>
                      <div className="flex items-center gap-2 text-[#4A1D96] font-bold mb-6 border-b border-gray-100 pb-3">
                        <BookOpen className="w-5 h-5" />
                        <span className="text-[16px]">신청 영역 및 지역</span>
                      </div>
                      <div className="space-y-6">
                        <div className="grid grid-cols-3 gap-3">
                          <div className="space-y-2">
                            <label className="text-[13px] font-black text-gray-700 ml-1">신청 영역</label>
                            <select name="area" className="w-full bg-gray-50 border-none rounded-2xl px-3 py-3 text-[13px] focus:ring-2 focus:ring-[#4A1D96] font-medium text-gray-600 appearance-none transition-shadow cursor-pointer">
                              <option value="">영역 선택</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[13px] font-black text-gray-700 ml-1">분류</label>
                            <select name="classification" className="w-full bg-gray-50 border-none rounded-2xl px-3 py-3 text-[13px] focus:ring-2 focus:ring-[#4A1D96] font-medium text-gray-600 appearance-none transition-shadow cursor-pointer">
                              <option value="">분류 선택</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[13px] font-black text-gray-700 ml-1">급수</label>
                            <select name="level" className="w-full bg-gray-50 border-none rounded-2xl px-3 py-3 text-[13px] focus:ring-2 focus:ring-[#4A1D96] font-medium text-gray-600 appearance-none transition-shadow cursor-pointer">
                              <option value="">급수 선택</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-[13px] font-black text-gray-700 ml-1">수업 신청지역</label>
                            <select name="region" className="w-full bg-gray-50 border-none rounded-2xl px-4 py-3.5 text-[13px] focus:ring-2 focus:ring-[#4A1D96] font-medium text-gray-600 appearance-none transition-shadow cursor-pointer">
                              <option value="">지역 선택</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[13px] font-black text-gray-700 ml-1">희망 일정</label>
                            <div className="flex gap-2">
                              <select name="scheduleMonth" className="w-full bg-gray-50 border-none rounded-xl px-2 py-3.5 text-[13px] focus:ring-2 focus:ring-[#4A1D96] font-medium text-gray-600 appearance-none text-center transition-shadow cursor-pointer"><option>월</option></select>
                              <select name="scheduleDay" className="w-full bg-gray-50 border-none rounded-xl px-2 py-3.5 text-[13px] focus:ring-2 focus:ring-[#4A1D96] font-medium text-gray-600 appearance-none text-center transition-shadow cursor-pointer"><option>일</option></select>
                              <select name="scheduleTime" className="w-full bg-gray-50 border-none rounded-xl px-2 py-3.5 text-[13px] focus:ring-2 focus:ring-[#4A1D96] font-medium text-gray-600 appearance-none text-center transition-shadow cursor-pointer"><option>시</option></select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Right Column */}
                  <div className="space-y-10">
                    
                    {/* 추가 배경 정보 */}
                    <div>
                      <div className="flex items-center gap-2 text-[#4A1D96] font-bold mb-6 border-b border-gray-100 pb-3">
                        <GraduationCap className="w-5 h-5" />
                        <span className="text-[16px]">추가 배경 정보</span>
                      </div>
                      <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                        <div className="space-y-4">
                          <label className="text-[13px] font-black text-gray-700 ml-1 block">최종 학력</label>
                          <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                            {["현재 학생", "대학교", "석사", "박사", "해외대학"].map((edu) => (
                              <label key={edu} className="flex items-center gap-2 cursor-pointer group">
                                <input type="checkbox" name="education" value={edu} className="w-4 h-4 text-[#4A1D96] rounded border-gray-300 focus:ring-[#4A1D96] transition-colors" />
                                <span className="text-[13px] font-bold text-gray-600 group-hover:text-gray-900">{edu}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-4">
                          <label className="text-[13px] font-black text-gray-700 ml-1 block">현재 직업</label>
                          <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                            {["강사", "번역사", "직장인", "취업준비생"].map((job) => (
                              <label key={job} className="flex items-center gap-2 cursor-pointer group">
                                <input type="checkbox" name="job" value={job} className="w-4 h-4 text-[#4A1D96] rounded border-gray-300 focus:ring-[#4A1D96] transition-colors" />
                                <span className="text-[13px] font-bold text-gray-600 group-hover:text-gray-900">{job}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 관심 영역 */}
                    <div>
                      <div className="flex items-center gap-2 text-[#4A1D96] font-bold mb-6 border-b border-gray-100 pb-3">
                        <Award className="w-5 h-5" />
                        <span className="text-[16px]">관심 영역</span>
                      </div>
                      <div className="space-y-5">
                        <div className="flex flex-wrap gap-x-6 gap-y-3">
                          {["취업", "자격증 취득", "업무 능력향상", "그외"].map((interest) => (
                            <label key={interest} className="flex items-center gap-2 cursor-pointer group">
                              <input type="checkbox" name="interests" value={interest} className="w-4 h-4 text-[#4A1D96] rounded border-gray-300 focus:ring-[#4A1D96] transition-colors" />
                              <span className="text-[13px] font-bold text-gray-600 group-hover:text-gray-900">{interest}</span>
                            </label>
                          ))}
                        </div>
                        <input name="otherInterests" className="w-full bg-gray-50 border-none rounded-2xl px-4 py-3.5 text-[14px] focus:ring-2 focus:ring-[#4A1D96] font-medium placeholder:text-gray-400 transition-shadow" placeholder="그외 관심 분야 직접 입력" />
                      </div>
                    </div>

                    {/* 추가 문의 사항 */}
                    <div>
                      <div className="flex items-center gap-2 text-[#4A1D96] font-bold mb-6 border-b border-gray-100 pb-3">
                        <MessageSquare className="w-5 h-5" />
                        <span className="text-[16px]">추가 문의 사항</span>
                      </div>
                      <textarea
                        name="additionalNotes"
                        rows={3}
                        className="w-full bg-gray-50 border-none rounded-2xl px-4 py-3.5 text-[14px] focus:ring-2 focus:ring-[#4A1D96] font-medium placeholder:text-gray-400 resize-none transition-shadow"
                        placeholder="상담 시 참고 사항이나 궁금한 점"
                      />
                    </div>

                  </div>
                </div>

                {/* Bottom Privacy & Submit */}
                <div className="flex flex-col xl:flex-row justify-between items-center gap-6 pt-6 border-t border-gray-100 mt-6">
                  <div className="p-5 bg-gray-50 rounded-2xl flex-1 w-full border border-gray-100 hover:border-[#4A1D96]/30 transition-colors">
                    <label className="flex items-start gap-4 cursor-pointer group">
                      <input type="checkbox" name="privacyConsent" required className="mt-1 w-5 h-5 rounded border-gray-300 text-[#4A1D96] focus:ring-[#4A1D96] transition-colors" />
                      <div className="flex flex-col">
                        <span className="text-[14px] text-gray-900 font-extrabold mb-1 group-hover:text-[#4A1D96] transition-colors">
                          개인정보 수집 및 이용에 동의합니다 (필수)
                        </span>
                        <span className="text-[12px] text-gray-500 font-medium leading-relaxed">
                          입력하신 정보는 상담 안내 목적으로만 활용되며 관련 법령에 따라 보호됩니다.
                        </span>
                      </div>
                    </label>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full xl:w-auto px-10 bg-[#4A1D96] hover:bg-[#3d187b] text-white py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 shadow-xl shadow-purple-900/20 disabled:opacity-50 shrink-0"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        전송 중...
                      </span>
                    ) : (
                      <>
                        신청 완료하기 <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
                
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
