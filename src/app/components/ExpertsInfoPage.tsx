import { motion } from "motion/react";
import {
  Users, Globe, Award, ShieldCheck, Zap, Briefcase,
  GraduationCap, CheckCircle2, DollarSign, Clock,
  TrendingUp, Headphones, PenTool, Database, Heart,
  ArrowRight, Check, Shield, Sparkles, FileText, Send,
  FileSearch, BookOpen, MessageSquare, Laptop, UserPlus,
  Monitor, Cpu
} from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const expertSupportSections = [
  {
    category: "WORK & ADMIN SUPPORT",
    title: "업무 & 행정 지원",
    quote: '"번역에만 집중할 수 있도록, 모든 행정을 지원합니다."',
    items: [
      "등본 관리 시스템 연동 → 자동 견적서/영수증",
      "세금계산서 발행 & 정산/정산서 관리 대행",
      "4대 보험 가이드 지원",
      "화상미팅, 긴급관리 센터 운영"
    ],
    tags: ["#행정대행", "#세무지원", "#SLA보장", "#전용문의창구"],
    img: "https://images.unsplash.com/photo-1758630737361-ca7532fb5e7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    reverse: false
  },
  {
    category: "STABLE INCOME & REVENUE SHARING",
    title: "안정적 수익 & 배분",
    quote: '"정직한 정산과 다양한 수익 배분"',
    items: [
      "매달 정산서 및 판매 수익 확인",
      "수수료 배분 중 투명하게 공유",
      "프로젝트 참여도에 따른 보너스 수익 배분",
      "전문 마케팅 협업 시 인센티브 지원"
    ],
    tags: ["#고정수익", "#추가수익", "#보너스배분", "#인센티브지원"],
    img: "https://images.unsplash.com/photo-1724331340514-a302e7f8944d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    reverse: true
  },
  {
    category: "COLLABORATION & GROWTH",
    title: "협업 & 성장 기회",
    quote: '"함께 성장하는 글로벌 번역 네트워크"',
    items: [
      "본인 성과 데이터 → 타 분야 프로젝트 매칭 지원",
      "타 분야 전문가들과 비주기적 미팅 가능",
      "부가서비스 및 신규 채널 지원 자격 부여",
      "주기적 전문가/라이브 워크숍 참여"
    ],
    tags: ["#네트워킹", "#커리어확장", "#성장지원프로그램", "#워크숍지원"],
    img: "https://images.unsplash.com/photo-1750768145390-f0ad18d3e65b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    reverse: false
  },
  {
    category: "AI TOOLS & TECH BENEFITS",
    title: "AI 툴 & 기술 혜택",
    quote: '"AI와 함께 더 쉽고, 더 빠르게"',
    items: [
      "메타 T 전용 에디팅 시스템 무상",
      "AI 번역 결과물 → 단수 오류 90% 완화",
      "메타 T 캐시 및 할인 혜택",
      "AI 번역 학습 → 시간 단축 & 정확성 보장"
    ],
    tags: ["#AI번역", "#에디팅툴", "#효율성극대화", "#기술지원"],
    img: "https://images.unsplash.com/photo-1770278856325-e313d121ea16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    reverse: true
  }
];

export function ExpertsInfoPage() {
  const { register, handleSubmit, reset, watch, formState: { isSubmitting } } = useForm({
    defaultValues: {
      languages: []
    }
  });

  const onSubmit = async (data: any) => {
    try {
      const res = await fetch(`${API_URL}/api/translation_translators`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('서버 오류');
      toast.success("전문가 지원서가 정상적으로 접수되었습니다. 검토 후 연락드리겠습니다.");
      reset();
    } catch {
      toast.error("접수에 실패했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("application-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white font-sans overflow-hidden">
      {/* Intro Header */}
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight"
          >
            메타트랜스의 다양한 지원을 통해<br />
            <span className="text-[#4A1D96]">미래업무를 준비하세요</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 font-bold"
          >
            이미 많은 부서 및 전문가분들이 메타트랜스와 함께 진정한 혁신을 만들고 있습니다.
          </motion.p>
        </div>
      </section>

      {/* Support Sections */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 space-y-32 md:space-y-48">
          {expertSupportSections.map((section, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col ${section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-24`}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-1 w-full"
              >
                <div className="rounded-[40px] overflow-hidden shadow-2xl shadow-purple-100 border border-purple-50">
                  <ImageWithFallback 
                    src={section.img} 
                    alt={section.title} 
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: section.reverse ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 space-y-8"
              >
                <div className="space-y-4">
                  <span className="text-[11px] font-black text-gray-400 tracking-[0.2em] uppercase">{section.category}</span>
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900">{section.title}</h2>
                  <div className="bg-purple-50 inline-block px-5 py-2 rounded-2xl">
                    <p className="text-[#4A1D96] font-black text-lg">{section.quote}</p>
                  </div>
                </div>

                <ul className="space-y-5">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#4A1D96]" />
                      </div>
                      <span className="text-gray-600 font-bold leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  {section.tags.map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-gray-50 text-gray-400 rounded-full font-black text-[12px] border border-gray-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Button to Scroll to Form */}
      <div className="text-center pb-32">
        <button 
          onClick={scrollToForm}
          className="bg-[#4A1D96] text-white px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl shadow-purple-200"
        >
          번역사 신청하기
        </button>
      </div>

      {/* Recruitment Section */}
      <section id="application-form" className="py-32 bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Header */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                AI와 협업하는 새로운 번역<br />
                환경에서 함께 성장할<br />
                <span className="text-[#4A1D96]">번역가를 찾습니다.</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-6 bg-white rounded-3xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center">
                    <UserPlus className="w-6 h-6 text-[#4A1D96]" />
                  </div>
                  <div>
                    <p className="font-black text-gray-900">상시 채용 중</p>
                    <p className="text-xs text-gray-400 font-bold">지원 서류 검토 후 개별 연락</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-6 bg-white rounded-3xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#4A1D96]" />
                  </div>
                  <div>
                    <p className="font-black text-gray-900">유연한 근무</p>
                    <p className="text-xs text-gray-400 font-bold">재택 및 파트타임 가능</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[48px] p-8 md:p-12 shadow-2xl shadow-purple-100/30 border border-gray-50"
              >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  {/* Basic Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-900 ml-1">성명 <span className="text-red-500">*</span></label>
                      <input {...register("name", { required: true })} placeholder="성함을 입력하세요" className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#4A1D96] transition-all font-bold placeholder:text-gray-300" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-900 ml-1">연락처 <span className="text-red-500">*</span></label>
                      <input {...register("phone", { required: true })} placeholder="010-0000-0000" className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#4A1D96] transition-all font-bold placeholder:text-gray-300" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-900 ml-1">이메일 <span className="text-red-500">*</span></label>
                    <input {...register("email", { required: true })} placeholder="example@email.com" className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#4A1D96] transition-all font-bold placeholder:text-gray-300" />
                  </div>

                  {/* Languages */}
                  <div className="space-y-4">
                    <label className="text-xs font-black text-gray-900 ml-1">번역 가능 언어 <span className="text-red-500">*</span></label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {["영어", "일본어", "중국어", "기타"].map((lang) => (
                        <label key={lang} className="flex items-center gap-3 p-4 rounded-2xl border border-gray-100 bg-gray-50 cursor-pointer hover:bg-purple-50 transition-colors">
                          <input type="checkbox" value={lang} {...register("languages")} className="w-4 h-4 rounded text-[#4A1D96] focus:ring-[#4A1D96]" />
                          <span className="text-sm font-bold text-gray-700">{lang}</span>
                        </label>
                      ))}
                    </div>
                    {watch("languages")?.includes("기타") && (
                      <input {...register("langOther")} placeholder="기타 언어를 입력하세요" className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#4A1D96] transition-all font-bold placeholder:text-gray-300" />
                    )}
                  </div>

                  {/* Specialized Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-900 ml-1">KAT 등급 <span className="text-red-500">*</span></label>
                      <select {...register("katGrade", { required: true })} className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#4A1D96] transition-all font-bold text-gray-600 appearance-none">
                        <option value="">등급 선택</option>
                        <option value="1급">1급</option>
                        <option value="2급">2급</option>
                        <option value="3급">3급</option>
                        <option value="무급">해당없음</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-900 ml-1">어학능력 <span className="text-red-500">*</span></label>
                      <select {...register("proficiency", { required: true })} className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#4A1D96] transition-all font-bold text-gray-600 appearance-none">
                        <option value="">능력 선택</option>
                        <option value="원어민">원어민 수준</option>
                        <option value="최상">최상 (비즈니스 완벽)</option>
                        <option value="상">상 (일상 대화 원활)</option>
                        <option value="중">중</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-900 ml-1">번역 가능 시간 <span className="text-red-500">*</span></label>
                      <select {...register("availableTime", { required: true })} className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#4A1D96] transition-all font-bold text-gray-600 appearance-none">
                        <option value="">시간 선택</option>
                        <option value="전일">전일 (Full-time)</option>
                        <option value="오전">오전 (09:00 - 13:00)</option>
                        <option value="오후">오후 (13:00 - 18:00)</option>
                        <option value="저녁">저녁 (18:00 이후)</option>
                        <option value="주말">주말 가능</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-900 ml-1">경력 <span className="text-red-500">*</span></label>
                      <select {...register("experience", { required: true })} className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#4A1D96] transition-all font-bold text-gray-600 appearance-none">
                        <option value="">경력 선택</option>
                        <option value="신입">신입</option>
                        <option value="1~3년">1~3년</option>
                        <option value="3~5년">3~5년</option>
                        <option value="5~10년">5~10년</option>
                        <option value="10년 이상">10년 이상</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-900 ml-1">전공/학력 <span className="text-red-500">*</span></label>
                      <select {...register("major", { required: true })} className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#4A1D96] transition-all font-bold text-gray-600 appearance-none">
                        <option value="">선택</option>
                        <option value="어문계열">어문계열</option>
                        <option value="인문/사회">인문/사회</option>
                        <option value="이공계열">이공계열</option>
                        <option value="예체능">예체능</option>
                        <option value="기타">기타</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-900 ml-1">자격증 <span className="text-red-500">*</span></label>
                      <select {...register("certs", { required: true })} className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#4A1D96] transition-all font-bold text-gray-600 appearance-none">
                        <option value="">보유 여부</option>
                        <option value="있음">있음 (상세 기재 가능)</option>
                        <option value="없음">없음</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-900 ml-1">학위 <span className="text-red-500">*</span></label>
                      <select {...register("degree", { required: true })} className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#4A1D96] transition-all font-bold text-gray-600 appearance-none">
                        <option value="">학위 선택</option>
                        <option value="학사">학사</option>
                        <option value="석사">석사</option>
                        <option value="박사">박사</option>
                        <option value="기타">기타</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-900 ml-1">어학능력 자격 <span className="text-red-500">*</span></label>
                      <select {...register("langCert", { required: true })} className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#4A1D96] transition-all font-bold text-gray-600 appearance-none">
                        <option value="">보유 여부</option>
                        <option value="있음">있음</option>
                        <option value="없음">없음</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-6 bg-purple-50 rounded-3xl border border-purple-100">
                    <label className="flex items-start gap-4 cursor-pointer">
                      <input type="checkbox" {...register("privacyConsent", { required: true })} className="mt-1 w-5 h-5 rounded border-gray-300 text-[#4A1D96] focus:ring-[#4A1D96]" />
                      <span className="text-sm text-gray-600 font-bold leading-relaxed">
                        개인정보 수집 및 이용에 동의합니다. (필수)
                      </span>
                    </label>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#4A1D96] text-white py-6 rounded-[24px] font-black text-xl hover:bg-[#3d187b] transition-all flex items-center justify-center gap-3 shadow-2xl shadow-purple-200 disabled:opacity-50"
                  >
                    {isSubmitting ? "처리 중..." : "지원서 제출하기"}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Stats */}
      <section className="py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "전문 통번역사", value: "17,000+", icon: Users },
            { label: "지원 언어", value: "109+", icon: Globe },
            { label: "평균 경력", value: "10년+", icon: Award },
            { label: "보안 인증", value: "ISO27001", icon: ShieldCheck },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 bg-purple-50 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#4A1D96] transition-colors">
                <stat.icon className="w-8 h-8 text-[#4A1D96] group-hover:text-white transition-colors" />
              </div>
              <p className="text-3xl font-black text-[#4A1D96] mb-1">{stat.value}</p>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
