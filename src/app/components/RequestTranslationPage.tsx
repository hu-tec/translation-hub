import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { FileText, Send, CheckCircle2, Globe, Clock, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { ServiceSelector } from "./ServiceSelector";

type RequestFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  sourceLang: string;
  targetLang: string;
  deadline: string;
  description: string;
  files: any;
};

export function RequestTranslationPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<RequestFormData>();
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState({ large: "", medium: "", small: "" });

  const onSubmit = async (data: RequestFormData) => {
    if (!selectedService.large || !selectedService.medium) {
      toast.error("번역 서비스 분야를 선택해 주세요.");
      return;
    }
    
    const finalData = { ...data, service: selectedService };
    console.log("Translation Request:", finalData);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
    toast.success("번역 신청이 성공적으로 접수되었습니다. 전문가가 검토 후 연락드리겠습니다.");
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
          <h2 className="text-3xl font-bold mb-4">접수 완료!</h2>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            신청하신 번역 요청이 안전하게 접수되었습니다.<br />
            분야별 전담 매니저가 내용을 검토한 후,<br />
            기입해주신 연락처로 24시간 이내에 안내드리겠습니다.
          </p>
          <button 
            onClick={() => { setSubmitted(false); reset(); }}
            className="w-full bg-[#4A1D96] text-white py-4 rounded-2xl font-bold hover:bg-[#3d187b] transition-all"
          >
            새로운 신청하기
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
        {/* Left Info */}
        <div className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="sticky top-24"
          >
            <h1 className="text-4xl font-bold mb-8 leading-tight">빠르고 정확한<br /><span className="text-[#4A1D96]">번역 신청</span></h1>
            <p className="text-lg text-gray-500 mb-12 leading-relaxed">
              필요하신 번역 서비스의 상세 내용을 입력해 주세요. 
              대분류부터 소분류까지 상세히 선택해 주시면 더 정확한 전문가 매칭이 가능합니다.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Globe, title: "109개 국어 지원", desc: "전 세계 모든 주요 언어 및 희귀 언어 번역" },
                { icon: Clock, title: "2배 빠른 속도", desc: "AI 초벌 번역과 전문가 감수로 납기 단축" },
                { icon: ShieldCheck, title: "철저한 보안", desc: "문서 암호화 및 엄격한 NDA 관리" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/50 border border-white">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                    <item.icon className="w-5 h-5 text-[#4A1D96]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Form Area */}
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-purple-50"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Service Selection */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#4A1D96] text-white text-[12px] flex items-center justify-center">1</span>
                  번역 분야 선택
                </h3>
                <ServiceSelector onSelect={setSelectedService} />
              </div>

              {/* Basic Info */}
              <div className="pt-8 border-t border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#4A1D96] text-white text-[12px] flex items-center justify-center">2</span>
                  기본 정보 입력
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
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">이메일 주소</label>
                    <input 
                      {...register("email", { 
                        required: "이메일을 입력해 주세요.",
                        pattern: { value: /^\S+@\S+$/i, message: "올바른 이메일 형식이 아닙니다." }
                      })}
                      className="w-full bg-gray-50 border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#4A1D96] transition-all"
                      placeholder="example@company.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">회사명/소속</label>
                    <input 
                      {...register("company")}
                      className="w-full bg-gray-50 border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#4A1D96] transition-all"
                      placeholder="(주)휴텍씨"
                    />
                  </div>
                </div>
              </div>

              {/* Translation Details */}
              <div className="pt-8 border-t border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#4A1D96] text-white text-[12px] flex items-center justify-center">3</span>
                  번역 상세 정보
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">원본 언어</label>
                    <input 
                      {...register("sourceLang", { required: "원본 언어를 입력해 주세요." })}
                      className="w-full bg-gray-50 border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#4A1D96] transition-all"
                      placeholder="한국어"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">번역 언어</label>
                    <input 
                      {...register("targetLang", { required: "번역 언어를 입력해 주세요." })}
                      className="w-full bg-gray-50 border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#4A1D96] transition-all"
                      placeholder="영어, 일본어 등"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">희망 납기일</label>
                    <input 
                      type="date"
                      {...register("deadline", { required: "납기일을 선택해 주세요." })}
                      className="w-full bg-gray-50 border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#4A1D96] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">상세 요청 사항</label>
                    <textarea 
                      {...register("description")}
                      rows={4}
                      className="w-full bg-gray-50 border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#4A1D96] transition-all"
                      placeholder="번역할 문서의 특징, 용도 등을 상세히 기재해 주시면 더 정확한 견적이 가능합니다."
                    ></textarea>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">파일 첨부</label>
                    <div className="border-2 border-dashed border-gray-200 rounded-2xl p-10 text-center hover:border-[#4A1D96] transition-all cursor-pointer bg-gray-50 group">
                      <input type="file" multiple {...register("files")} className="hidden" id="file-upload" />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4 group-hover:text-[#4A1D96] transition-colors" />
                        <p className="text-gray-500 font-bold mb-1">클릭하거나 파일을 드래그하여 업로드하세요</p>
                        <p className="text-xs text-gray-400">최대 100MB, PDF, DOCX, XLSX, PPTX, ZIP 등 지원</p>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#4A1D96] text-white py-5 rounded-2xl font-bold hover:bg-[#3d187b] transition-all flex items-center justify-center gap-2 shadow-xl shadow-purple-100 disabled:bg-gray-400"
              >
                {isSubmitting ? "처리 중..." : (
                  <>번역 서비스 신청하기 <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
