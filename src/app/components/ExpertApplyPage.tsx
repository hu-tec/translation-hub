import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { UserPlus, Briefcase, GraduationCap, CheckCircle2, Globe, FileText, Send } from "lucide-react";
import { useState } from "react";
import { ServiceSelector } from "./ServiceSelector";

type ExpertApplyFormData = {
  name: string;
  email: string;
  phone: string;
  langs: string;
  experience: string;
  portfolio: any;
  resume: any;
  about: string;
};

export function ExpertApplyPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ExpertApplyFormData>();
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState({ large: "", medium: "", small: "" });

  const onSubmit = async (data: ExpertApplyFormData) => {
    if (!selectedService.large || !selectedService.medium) {
      toast.error("전문 분야를 선택해 주세요.");
      return;
    }
    const finalData = { ...data, specialty: selectedService };
    console.log("Expert Application:", finalData);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
    toast.success("전문가 지원이 성공적으로 접수되었습니다. 담당자가 확인 후 연락드리겠습니다.");
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
          <h2 className="text-3xl font-bold mb-4">지원 완료!</h2>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            휴텍씨 전문가 파트너 지원이 완료되었습니다.<br />
            입력하신 경력과 포트폴리오를 꼼꼼히 검토한 후,<br />
            등록 여부를 안내드리겠습니다. (평균 3~5영업일 소요)
          </p>
          <button 
            onClick={() => { setSubmitted(false); reset(); }}
            className="w-full bg-[#4A1D96] text-white py-4 rounded-2xl font-bold hover:bg-[#3d187b] transition-all"
          >
            추가 서류 제출 또는 재지원
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
            <h1 className="text-4xl font-bold mb-8 leading-tight">함께 성장할<br /><span className="text-[#4A1D96]">최고의 전문가</span>를 모십니다</h1>
            <p className="text-lg text-gray-500 mb-12">
              휴텍씨의 글로벌 네트워크와 최신 AI 하이브리드 환경에서 여러분의 역량을 발휘하세요.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Globe, title: "글로벌 비즈니스 기회", desc: "전 세계 109개 언어권의 다양한 프로젝트 참여" },
                { icon: Briefcase, title: "전문 분야 매칭", desc: "자신의 전공과 경력에 최적화된 프로젝트 전담 배정" },
                { icon: UserPlus, title: "상생 파트너십", desc: "공정한 보상 체계와 장기적이고 안정적인 협력 관계" }
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
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#4A1D96] text-white text-[12px] flex items-center justify-center">1</span>
                  전문 분야 선택
                </h3>
                <ServiceSelector onSelect={setSelectedService} />
              </div>

              <div className="pt-8 border-t border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#4A1D96] text-white text-[12px] flex items-center justify-center">2</span>
                  인적 사항
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">성함</label>
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
                      {...register("email", { 
                        required: "이메일을 입력해 주세요.",
                        pattern: { value: /^\S+@\S+$/i, message: "올바른 이메일 형식이 아닙니다." }
                      })}
                      className="w-full bg-gray-50 border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#4A1D96] transition-all"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#4A1D96] text-white text-[12px] flex items-center justify-center">3</span>
                  경력 및 역량
                </h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">주요 가능 언어 (및 수준)</label>
                    <input 
                      {...register("langs", { required: "주요 언어를 입력해 주세요." })}
                      className="w-full bg-gray-50 border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#4A1D96] transition-all"
                      placeholder="영어(상), 중국어(중), 일본어(상) 등"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">경력 요약</label>
                    <textarea 
                      {...register("experience", { required: "주요 경력을 입력해 주세요." })}
                      rows={4}
                      className="w-full bg-gray-50 border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#4A1D96] transition-all"
                      placeholder="주요 프로젝트 참여 이력, 번역 경력 등을 간단히 기재해 주세요."
                    ></textarea>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">이력서 첨부</label>
                      <div className="border-2 border-dashed border-gray-200 rounded-2xl p-6 text-center hover:border-[#4A1D96] transition-all cursor-pointer bg-gray-50 group">
                        <input type="file" {...register("resume")} className="hidden" id="resume-upload" />
                        <label htmlFor="resume-upload" className="cursor-pointer text-sm text-gray-500">
                          <FileText className="w-8 h-8 text-gray-300 mx-auto mb-2 group-hover:text-[#4A1D96] transition-colors" />
                          <p className="font-bold">이력서 업로드</p>
                        </label>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">포트폴리오 첨부</label>
                      <div className="border-2 border-dashed border-gray-200 rounded-2xl p-6 text-center hover:border-[#4A1D96] transition-all cursor-pointer bg-gray-50 group">
                        <input type="file" {...register("portfolio")} className="hidden" id="portfolio-upload" />
                        <label htmlFor="portfolio-upload" className="cursor-pointer text-sm text-gray-500">
                          <FileText className="w-8 h-8 text-gray-300 mx-auto mb-2 group-hover:text-[#4A1D96] transition-colors" />
                          <p className="font-bold">포트폴리오 업로드</p>
                        </label>
                      </div>
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
                  <>전문가 파트너 지원하기 <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
