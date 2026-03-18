import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Search, ChevronDown, ChevronUp, MessageSquare, HelpCircle, Filter, FileQuestion, Users, Send, MessageCircle } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  type: "공통" | "유형별" | "분야별";
  category: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 1,
    type: "공통",
    category: "결제/견적",
    question: "번역 비용 산정 기준은 어떻게 되나요?",
    answer: "번역 비용은 언어 종류, 문서의 난이도(일반/전문), 문서의 양(단어수/글자수), 그리고 희망하시는 납기 일정에 따라 산정됩니다. '견적의뢰' 메뉴를 통해 문서를 업로드해 주시면 정확한 견적을 받으실 수 있습니다."
  },
  {
    id: 2,
    type: "분야별",
    category: "산업별",
    question: "반도체나 조선해양 기술 문서 번역 시 전문 용어 관리가 되나요?",
    answer: "네, 휴텍씨는 각 산업 분야별 전용 용어집(Glossary)을 보유하고 있습니다. 특히 반도체, 조선, 방산 분야는 전문 지식을 갖춘 번역사가 매칭되어 업계 표준 용어를 정확하게 사용합니다."
  },
  {
    id: 3,
    type: "유형별",
    category: "STT/TTS",
    question: "음성번역(STT) 서비스의 정확도는 어느 정도인가요?",
    answer: "AI 엔진의 1차 추출 후 전문 감수자가 2차 교정을 거치므로 99% 이상의 정확도를 보장합니다. 배경 소음이 있는 현장 녹음이나 특수 전문 용어가 포함된 음성도 무리 없이 텍스트로 변환 가능합니다."
  },
  {
    id: 4,
    type: "분야별",
    category: "법률/특허",
    question: "해외 소송 서류나 특허 명세서 번역도 가능한가요?",
    answer: "법률 및 특허 분야 전문 번역 팀이 별도로 운영되고 있습니다. 고도의 정확성과 법적 맥락 이해가 필요한 문서를 위해 변호사급 감수 프로세스를 거쳐 최상의 품질을 제공합니다."
  },
  {
    id: 5,
    type: "공통",
    category: "보안",
    question: "문서 보안 및 비밀 유지는 어떻게 이루어지나요?",
    answer: "모든 문서는 종단간 암호화되어 관리되며, 프로젝트 참여 전문가는 엄격한 NDA(비밀유지계약)를 체결합니다. 공공기관 및 대기업 프로젝트 수행 실적을 통해 검증된 보안 체계를 갖추고 있습니다."
  },
  {
    id: 6,
    type: "유형별",
    category: "영상번역",
    question: "유튜브 영상 자막 제작 시 현지화 작업도 포함되나요?",
    answer: "단순 직역을 넘어 해당 국가의 문화와 유행어를 반영한 '초월번역'급 현지화를 제공합니다. 영상의 분위기에 맞는 폰트 설정 및 싱크 작업까지 올인원으로 진행됩니다."
  },
  {
    id: 7,
    type: "분야별",
    category: "건설/인프라",
    question: "대규모 플랜트 건설 매뉴얼 번역도 수행하시나요?",
    answer: "네, 중동 및 동남아 지역의 SOC 인프라, 대규모 에너지 플랜트 프로젝트 매뉴얼 번역 실적을 다수 보유하고 있습니다. 수만 장 분량의 대형 프로젝트도 체계적인 시스템으로 완벽히 수행합니다."
  },
  {
    id: 8,
    type: "유형별",
    category: "동시통역",
    question: "메타트랜스를 활용한 실시간 통역 서비스는 어떻게 이용하나요?",
    answer: "비즈니스 회의, 글로벌 강의, 관광 가이드 등 목적에 따라 맞춤형 하이브리드 솔루션을 제공합니다. 전용 기기 대여나 앱 연동을 통해 109개 언어를 실시간으로 통역 받으실 수 있습니다."
  }
];

export function SupportPage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<"FAQ" | "Q&A" | "1:1">("FAQ");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<"전체" | "공통" | "유형별" | "분야별">("전체");
  const [openId, setOpenId] = useState<number | null>(null);

  useEffect(() => {
    const hash = location.hash;
    if (hash === "#qna") setActiveTab("Q&A");
    else if (hash === "#1on1") setActiveTab("1:1");
    else setActiveTab("FAQ");
  }, [location.hash]);

  const filteredFaqs = FAQ_DATA.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "전체" || faq.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#4A1D96] py-24 px-6 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-300 blur-3xl" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">고객지원 센터</h1>
          <p className="text-purple-100 text-lg mb-12 opacity-90 leading-relaxed">
            무엇을 도와드릴까요? 휴텍씨의 전문 매니저가 여러분의 궁금증을 해결해 드립니다.
          </p>

          <div className="max-w-2xl mx-auto relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-[#4A1D96] transition-colors" />
            <input 
              type="text"
              placeholder="궁금한 내용을 입력하세요 (예: 견적, 언어, 보안...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white text-gray-900 rounded-2xl pl-14 pr-6 py-5 shadow-2xl focus:ring-4 focus:ring-purple-500/20 transition-all outline-none text-base font-medium"
            />
          </div>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-20 pb-24">
        {/* Navigation Tabs (3-tier) */}
        <div className="flex p-1.5 bg-white rounded-[28px] shadow-xl border border-gray-100 mb-12 max-w-lg mx-auto">
          <button 
            onClick={() => setActiveTab("FAQ")}
            className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-[22px] text-[15px] font-bold transition-all ${
              activeTab === "FAQ" ? "bg-[#4A1D96] text-white shadow-lg" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <FileQuestion className="w-5 h-5" />
            FAQ
          </button>
          <button 
            onClick={() => setActiveTab("Q&A")}
            className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-[22px] text-[15px] font-bold transition-all ${
              activeTab === "Q&A" ? "bg-[#4A1D96] text-white shadow-lg" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <MessageCircle className="w-5 h-5" />
            Q&A
          </button>
          <button 
            onClick={() => setActiveTab("1:1")}
            className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-[22px] text-[15px] font-bold transition-all ${
              activeTab === "1:1" ? "bg-[#4A1D96] text-white shadow-lg" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            1:1 문의
          </button>
        </div>

        {activeTab === "FAQ" ? (
          <div className="space-y-8">
            {/* FAQ Filters */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/50 backdrop-blur p-4 rounded-3xl border border-white">
              <div className="flex items-center gap-3">
                <Filter className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-bold text-gray-500 mr-2">분류 필터</span>
                <div className="flex gap-2">
                  {(["전체", "공통", "유형별", "분야별"] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                        selectedType === type 
                          ? "bg-purple-100 text-[#4A1D96] border border-purple-200" 
                          : "bg-white text-gray-500 border border-gray-100 hover:bg-gray-50"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-400 font-medium">총 {filteredFaqs.length}건의 답변이 있습니다.</p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq) => (
                  <motion.div 
                    key={faq.id}
                    layout
                    className={`bg-white rounded-3xl border transition-all duration-300 ${
                      openId === faq.id ? "border-purple-200 shadow-xl shadow-purple-50" : "border-gray-100 hover:shadow-md"
                    }`}
                  >
                    <button 
                      onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                      className="w-full px-8 py-6 flex items-center justify-between text-left group"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                        <div className="flex items-center gap-2">
                          <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold ${
                            faq.type === "공통" ? "bg-blue-50 text-blue-600" : 
                            faq.type === "유형별" ? "bg-purple-50 text-purple-600" : "bg-emerald-50 text-emerald-600"
                          }`}>
                            {faq.type}
                          </span>
                          <span className="text-gray-400 text-[11px] font-bold bg-gray-50 px-2 py-1 rounded-lg uppercase tracking-wider">{faq.category}</span>
                        </div>
                        <span className="font-bold text-gray-800 text-lg group-hover:text-[#4A1D96] transition-colors leading-snug">
                          {faq.question}
                        </span>
                      </div>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                        openId === faq.id ? "bg-[#4A1D96] text-white rotate-180" : "bg-gray-50 text-gray-400"
                      }`}>
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </button>
                    {openId === faq.id && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="px-8 pb-8 pt-0"
                      >
                        <div className="pt-6 border-t border-gray-50 flex gap-6">
                          <div className="w-10 h-10 rounded-2xl bg-green-50 flex items-center justify-center shrink-0 border border-green-100">
                            <span className="text-green-600 font-black text-sm">A</span>
                          </div>
                          <p className="text-gray-600 text-[15px] leading-loose pt-1">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))
              ) : (
                <div className="bg-white py-24 rounded-[40px] text-center border border-dashed border-gray-200">
                  <Search className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                  <p className="text-gray-400 font-bold">검색 결과가 없습니다.</p>
                </div>
              )}
            </div>
          </div>
        ) : activeTab === "Q&A" ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[48px] p-8 md:p-16 shadow-2xl border border-gray-100 text-center"
          >
            <div className="w-20 h-20 bg-blue-50 rounded-[32px] flex items-center justify-center mx-auto mb-8">
              <MessageCircle className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-950">공개 Q&A 게시판</h2>
            <p className="text-gray-500 max-w-md mx-auto leading-relaxed mb-12">
              서비스 이용에 관한 일반적인 질문들을 자유롭게 남겨주세요.<br />
              비밀글 설정이 가능하며 담당자가 순차적으로 답변해 드립니다.
            </p>
            <div className="border border-dashed border-gray-200 rounded-3xl p-20">
               <p className="text-gray-400 font-bold">현재 등록된 게시글이 없습니다.</p>
               <button className="mt-8 px-10 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-gray-800 transition-all">글쓰기</button>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[48px] p-8 md:p-16 shadow-2xl border border-purple-50"
          >
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-purple-50 rounded-[32px] flex items-center justify-center mx-auto mb-8 shadow-inner">
                <Users className="w-10 h-10 text-[#4A1D96]" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-950">1:1 전문가 상담</h2>
              <p className="text-gray-500 max-w-md mx-auto leading-relaxed font-medium">
                번역 프로젝트에 대한 구체적인 상담이 필요하신가요?<br />
                내용을 남겨주시면 담당 매니저가 신속히 안내드립니다.
              </p>
            </div>

            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[13px] font-bold text-gray-700 ml-1">성함 / 담당자</label>
                  <input className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#4A1D96] transition-all font-medium" placeholder="성함을 입력하세요" />
                </div>
                <div className="space-y-3">
                  <label className="text-[13px] font-bold text-gray-700 ml-1">이메일 주소</label>
                  <input className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#4A1D96] transition-all font-medium" placeholder="답변을 받으실 이메일" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[13px] font-bold text-gray-700 ml-1">문의 유형</label>
                <div className="relative group">
                  <select className="w-full appearance-none bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#4A1D96] transition-all font-medium text-gray-600">
                    <option>문의 유형을 선택해 주세요</option>
                    <option>번역 신청 관련</option>
                    <option>견적 및 결제 문의</option>
                    <option>전문가 파트너 지원</option>
                    <option>기밀 유지 및 보안</option>
                    <option>기기(메타트랜스) 문의</option>
                    <option>기타 일반 문의</option>
                  </select>
                  <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none group-hover:text-gray-600 transition-colors" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[13px] font-bold text-gray-700 ml-1">문의 상세 내용</label>
                <textarea rows={6} className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#4A1D96] transition-all font-medium" placeholder="궁금하신 내용을 상세히 기재해 주세요."></textarea>
              </div>
              <div className="pt-4">
                <button className="w-full bg-[#4A1D96] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#3d187b] transition-all shadow-xl shadow-purple-100 flex items-center justify-center gap-3">
                  문의 등록하기
                  <Send className="w-5 h-5" />
                </button>
                <p className="text-center text-xs text-gray-400 mt-6">
                  등록하신 문의 사항은 담당자 확인 후 24시간 이내에 기입하신 이메일로 답변을 보내드립니다.
                </p>
              </div>
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
}
