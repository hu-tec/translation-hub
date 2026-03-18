import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Calculator, Send, CheckCircle2, Clock, Zap, BarChart3 } from "lucide-react";
import { useState } from "react";
import { ServiceSelector } from "./ServiceSelector";

type QuoteFormData = {
  name: string;
  email: string;
  phone: string;
  wordCount: string;
  sourceLang: string;
  targetLang: string;
  deadline: string;
  about: string;
};

export function QuoteRequestPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<QuoteFormData>();
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState({ large: "", medium: "", small: "" });

  const onSubmit = async (data: QuoteFormData) => {
    if (!selectedService.large || !selectedService.medium) {
      toast.error("번역 분야를 선택해 주세요.");
      return;
    }
    const finalData = { ...data, service: selectedService };
    console.log("Quote Request:", finalData);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
    toast.success("견적 의뢰가 성공적으로 접수되었습니다. 최단 시간 내에 안내드리겠습니다.");
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-[40px] shadow-2xl text-center max-w-xl border border-purple-50"
        >
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold mb-4">견적 의뢰 완료!</h2>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            신청하신 견적 의뢰가 성공적으로 접수되었습니다.<br />
            영업시간 내 기준, **1시간 이내**로<br />
            가장 정확한 견적서를 이메일로 발송해 드리겠습니다.
          </p>
          <button 
            onClick={() => { setSubmitted(false); reset(); }}
            className="w-full bg-[#4A1D96] text-white py-4 rounded-2xl font-bold hover:bg-[#3d187b] transition-all"
          >
            추가 견적 의뢰하기
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
        {/* Left Side */}
        <div className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="sticky top-24"
          >
            <div className="w-16 h-16 bg-[#4A1D96] rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-purple-200">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-8 leading-tight">투명하고 합리적인<br /><span className="text-[#4A1D96]">실시간 견적 의뢰</span></h1>
            <p className="text-lg text-gray-500 mb-12">
              번역 분량과 언어 정보를 입력하시면, 합리적인 가격 정책에 따른 최적의 견적을 산출해 드립니다.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "거품 없는 가격", desc: "AI 자동화 기술로 불필요한 비용 최소화", icon: Zap },
                { title: "신속한 응답", desc: "의뢰 접수 후 1시간 이내 견적서 발송", icon: Clock },
                { title: "맞춤형 플랜", desc: "프로젝트 규모 및 난이도별 최적 가격 제안", icon: BarChart3 },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-[#4A1D96]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Form Side */}
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-purple-50"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#4A1D96] text-white text-[12px] flex items-center justify-center">1</span>
                  번역 분야 선택
                </h3>
                <ServiceSelector onSelect={setSelectedService} />
              </div>

              <div className="pt-8 border-t border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#4A1D96] text-white text-[12px] flex items-center justify-center">2</span>
                  연락처 정보
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">성함/담당자</label>
                    <input 
                      {...register("name", { required: "성함을 입력해 주세요." })}
                      className="w-full bg-gray-50 border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#4A1D96] transition-all"
                      placeholder="홍길동"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">연락처</label>
                    <input 
                      {...register("phone", { required: "연락처를 입력해 주세요." })}
                      className="w-full bg-gray-50 border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#4A1D96] transition-all"
                      placeholder="010-0000-0000"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">이메일 주소</label>
                    <input 
                      {...register("email", { required: "이메일을 입력해 주세요." })}
                      className="w-full bg-gray-50 border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#4A1D96] transition-all"
                      placeholder="example@company.com"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#4A1D96] text-white text-[12px] flex items-center justify-center">3</span>
                  상세 내역 입력
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">출발어 (원본)</label>
                    <input 
                      {...register("sourceLang", { required: true })}
                      className="w-full bg-gray-50 border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#4A1D96] transition-all"
                      placeholder="한국어"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">도착어 (번역)</label>
                    <input 
                      {...register("targetLang", { required: true })}
                      className="w-full bg-gray-50 border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#4A1D96] transition-all"
                      placeholder="영어, 일본어 등"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">예상 분량 (단어/페이지)</label>
                    <input 
                      {...register("wordCount", { required: "예상 분량을 입력해 주세요." })}
                      className="w-full bg-gray-50 border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#4A1D96] transition-all"
                      placeholder="약 2,000단어 또는 10페이지"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">희망 납기일</label>
                    <input 
                      type="date"
                      {...register("deadline", { required: true })}
                      className="w-full bg-gray-50 border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#4A1D96] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">문의 사항</label>
                  <textarea 
                    {...register("about")}
                    rows={4}
                    className="w-full bg-gray-50 border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#4A1D96] transition-all"
                    placeholder="번역 용도나 특별히 신경 써야 할 부분을 알려주시면 더욱 정밀한 견적이 가능합니다."
                  ></textarea>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#4A1D96] text-white py-5 rounded-2xl font-bold hover:bg-[#3d187b] transition-all flex items-center justify-center gap-2 shadow-xl shadow-purple-100"
              >
                {isSubmitting ? "계산 중..." : (
                  <>견적 의뢰서 제출 <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
