import { motion } from "motion/react";
import { 
  Check, ArrowRight, HelpCircle, Zap, CreditCard, 
  Settings, Users, Clock, ShieldCheck, FileText, 
  Sparkles, MousePointer2, Save, Headphones, Languages,
  Trophy, Gem, Crown
} from "lucide-react";
import { Link } from "react-router";

const translationPricing = [
  { type: "AI 번역", policy: "글자당 1.5원", price: "952원" },
  { type: "AI 번역 + 원어민 검수", policy: "글자당 15원", price: "9,722원" },
  { type: "전문가 휴먼번역", policy: "글자당 50원", price: "32,825원" },
];

const textAudioPricing = [
  { type: "TTS (Text to Speech)", cost: "글자당 0.87원", quote: "8글자 5.22원 (AI 번역 추가시 글자당 1.5원 추가)" },
  { type: "SST (Speech to Text)", cost: "1분당 99원", quote: "음원파일 세팅 & 추가시 분당 2,525원 추가 (A4 약 600자 미만 기준)" },
  { type: "웹 (WEB)", cost: "별도 문의", quote: "별도 문의" },
  { type: "동시통역", cost: "별도 문의", quote: "별도 문의" },
];

const subscriptionPlans = [
  {
    id: "A",
    name: "구독형 A",
    target: "(개인/학생용)",
    price: "49",
    features: [
      "TEXT 번역 무제한",
      "파일 번역 125,000단어 (약 500 pages)",
      "PPT, Excel 등 번역 지원",
      "폰서식 유지 번역",
      "메타 T 에디팅 툴 제공 (1계정)"
    ],
    highlight: false,
    icon: Trophy
  },
  {
    id: "B",
    name: "구독형 B",
    target: "(프리랜서용)",
    price: "99",
    features: [
      "TEXT 번역 무제한",
      "파일 번역 250,000단어 (약 1,000 pages)",
      "PPT, Excel 등 번역 지원",
      "폰서식 유지 번역",
      "메타 T 에디팅 툴 제공 (1계정)"
    ],
    highlight: true,
    icon: Gem
  },
  {
    id: "C",
    name: "구독형 C",
    target: "(기업/외주업체)",
    price: "169",
    features: [
      "TEXT 번역 무제한",
      "파일 번역 500,000단어 (약 2,000 pages)",
      "PPT, Excel 등 번역 지원",
      "폰서식 유지 번역",
      "메타 T 에디팅 툴 제공 (1계정)"
    ],
    highlight: false,
    icon: Crown
  }
];

const points = [
  { amount: "5,000", total: "6,500" },
  { amount: "10,000", total: "13,000" },
  { amount: "20,000", total: "26,000" },
  { amount: "50,000", total: "65,000" },
];

const editorBenefits = [
  { title: "누구나 다루기 쉬운 메타 에디팅툴", icon: MousePointer2 },
  { title: "문장편집 없이 문장 나누기 기능", icon: FileText },
  { title: "AI 초절번역물과 편집본을 함께 보고 빠르게 수정", icon: Zap },
  { title: "임시저장기능으로 편한 시간대별 틈틈이 번역 업무 가능", icon: Clock },
  { title: "저장만 누르면 번역문서 자동 저장", icon: Save },
  { title: "STT, TTS에서도 편집사용 가능한 에디팅 툴", icon: Headphones },
];

export function PricingPage() {
  return (
    <div className="bg-white font-sans">
      {/* Header */}
      <section className="bg-white pt-24 pb-16 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-[#4A1D96] mb-6"
          >
            메타트랜스 Pricing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 font-bold"
          >
            메타 T만의 차별화된 서비스를 경험하세요
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {["메타트랜스 번역", "구독형 서비스", "포인트 충전", "에디팅 툴"].map((cat, i) => (
              <a 
                key={i}
                href={`#section-${i}`}
                className="bg-gray-50 hover:bg-purple-50 px-8 py-4 rounded-2xl flex items-center gap-3 transition-all group border border-gray-100 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FileText className="w-5 h-5 text-[#4A1D96]" />
                </div>
                <span className="font-black text-gray-700">{cat}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 0: 메타트랜스 번역 가격 */}
      <section id="section-0" className="py-24 border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-6">메타트랜스 번역 가격</h2>
            <p className="text-gray-500 font-bold mb-2">단기 프로젝트나, 일회성 번역이 필요하신 분을 위한 서비스입니다.</p>
            <p className="text-sm text-[#4A1D96] font-black">** 1장 기준: 12포인트 25라인 (글자수 : 500글자 / 단어수 : 200단어)</p>
          </div>

          <div className="overflow-x-auto mb-16 rounded-[32px] border border-gray-100 shadow-xl shadow-gray-100/50">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#4A1D96] text-white">
                  <th className="px-8 py-5 font-black uppercase tracking-wider">구분</th>
                  <th className="px-8 py-5 font-black uppercase tracking-wider">정책</th>
                  <th className="px-8 py-5 font-black uppercase tracking-wider">A4 한장</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {translationPricing.map((item, i) => (
                  <tr key={i} className="hover:bg-purple-50/30 transition-colors">
                    <td className="px-8 py-6 font-bold text-gray-900">{item.type}</td>
                    <td className="px-8 py-6 font-medium text-gray-600">{item.policy}</td>
                    <td className="px-8 py-6 font-black text-[#4A1D96]">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-black text-gray-900 flex items-center gap-3 mb-8">
              <Headphones className="w-6 h-6 text-[#4A1D96]" />
              텍스트 음성번역
            </h3>
            <div className="overflow-x-auto rounded-[32px] border border-gray-100 shadow-xl shadow-gray-100/50">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#4A1D96] text-white">
                    <th className="px-8 py-5 font-black uppercase tracking-wider">구분</th>
                    <th className="px-8 py-5 font-black uppercase tracking-wider">비용</th>
                    <th className="px-8 py-5 font-black uppercase tracking-wider">견적</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {textAudioPricing.map((item, i) => (
                    <tr key={i} className="hover:bg-purple-50/30 transition-colors">
                      <td className="px-8 py-6 font-bold text-gray-900">{item.type}</td>
                      <td className="px-8 py-6 font-medium text-gray-600">{item.cost}</td>
                      <td className="px-8 py-6 font-medium text-gray-500 text-sm">{item.quote}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            {["전문가 컨설팅 50%", "긴급 서비스 50%", "파일 편집 서비스 30%"].map((service, i) => (
              <span key={i} className="px-6 py-3 bg-purple-50 text-[#4A1D96] rounded-full font-black text-sm border border-purple-100">
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: 구독 서비스 */}
      <section id="section-1" className="py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-gray-900 mb-6">구독 서비스</h2>
            <p className="text-2xl text-[#4A1D96] font-black">메타 트랜스를 효율적으로</p>
            <Link 
              to="/request"
              className="inline-block mt-8 bg-gray-900 text-white px-8 py-4 rounded-full font-black text-sm hover:scale-105 transition-all shadow-xl"
            >
              나에게 맞는 구독 서비스 문의하기
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {subscriptionPlans.map((plan) => (
              <motion.div
                key={plan.id}
                whileHover={{ y: -10 }}
                className={`relative rounded-[48px] p-12 flex flex-col transition-all ${
                  plan.highlight 
                    ? "bg-[#4A1D96] text-white shadow-[0_40px_80px_-15px_rgba(74,29,150,0.3)] scale-105 z-10" 
                    : "bg-white text-gray-900 border border-gray-100 shadow-xl shadow-gray-200/50"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                    Best Choice
                  </div>
                )}
                
                <div className="mb-10 text-center">
                  <div className={`w-16 h-16 rounded-[24px] mx-auto mb-6 flex items-center justify-center ${plan.highlight ? "bg-white/10" : "bg-purple-50"}`}>
                    <plan.icon className={`w-8 h-8 ${plan.highlight ? "text-amber-300" : "text-[#4A1D96]"}`} />
                  </div>
                  <h3 className="text-2xl font-black mb-1">{plan.name}</h3>
                  <p className={`text-sm font-bold ${plan.highlight ? "text-purple-200" : "text-gray-400"}`}>{plan.target}</p>
                </div>

                <div className="text-center mb-10">
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-sm font-bold mb-2">₩</span>
                    <span className="text-5xl font-black">{plan.price}</span>
                    <span className={`text-lg font-bold ${plan.highlight ? "text-purple-300" : "text-gray-400"}`}>만원/년</span>
                  </div>
                </div>

                <ul className="space-y-6 mb-12 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.highlight ? "bg-white/20" : "bg-purple-50"}`}>
                        <Check className={`w-3 h-3 ${plan.highlight ? "text-white" : "text-[#4A1D96]"}`} />
                      </div>
                      <span className={`text-sm font-bold leading-tight ${plan.highlight ? "text-purple-100" : "text-gray-600"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-5 rounded-[24px] font-black transition-all ${
                  plan.highlight 
                    ? "bg-white text-[#4A1D96] hover:bg-gray-100 shadow-xl" 
                    : "bg-[#4A1D96] text-white hover:bg-[#3d187b] shadow-lg shadow-purple-100"
                }`}>
                  상세보기
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: 포인트 충전 */}
      <section id="section-2" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight">
                포인트 충전<span className="text-[#4A1D96]">(메타 캐시)</span>
              </h2>
              <div className="space-y-6 mb-12">
                <div className="bg-purple-50 p-6 rounded-[32px] border border-purple-100">
                  <p className="text-[#4A1D96] font-black mb-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" /> 자동 결제 회원들을 위한 추가혜택
                  </p>
                  <p className="text-gray-600 font-bold leading-relaxed">
                    포인트(메타캐시) 자동충전 시 <span className="text-[#4A1D96] font-black">30% 추가지급</span> 혜택을 드립니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[48px] p-8 md:p-12 border border-gray-100 shadow-2xl shadow-purple-100/30">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#4A1D96] flex items-center justify-center text-white font-black">B</div>
                  <span className="font-black text-gray-900">포인트 충전</span>
                </div>
                <div className="bg-[#4A1D96] text-white text-[10px] font-black px-4 py-1.5 rounded-full">자동 충전 시 30% 추가지급</div>
              </div>
              
              <p className="text-xs font-black text-gray-400 mb-6 uppercase tracking-widest">충전 포인트 선택</p>
              
              <div className="space-y-4">
                {points.map((p, i) => (
                  <div 
                    key={i} 
                    className={`flex items-center justify-between p-6 rounded-2xl border transition-all cursor-pointer group ${
                      i === 0 ? "border-[#4A1D96] bg-purple-50" : "border-gray-100 hover:border-purple-200"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${i === 0 ? "border-[#4A1D96] bg-[#4A1D96]" : "border-gray-200"}`}>
                        {i === 0 && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <span className="font-black text-gray-900">{p.amount} 포인트</span>
                    </div>
                    <span className="font-black text-[#4A1D96]">{p.total} 포인트 적립</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: 에디팅 툴 */}
      <section id="section-3" className="py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left: Cards */}
            <div className="order-2 lg:order-1 space-y-6">
               {[
                 { duration: "1개월", price: "100,000", desc: "에디팅 툴 사용료 월 10만원 시중가", discount: null },
                 { duration: "6개월", price: "480,000", original: "600,000", desc: "시세가 주 20만원 대비 30% 저렴", discount: "20% 할인" },
                 { duration: "12개월", price: "840,000", original: "1,200,000", desc: "6개월 이상 사용 시 월 7만원 혜택", discount: "30% 할인" },
               ].map((item, i) => (
                 <div key={i} className="bg-white p-8 rounded-[40px] shadow-xl shadow-gray-200/50 border border-gray-50 relative overflow-hidden group">
                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
                     <div>
                       <span className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2 block">{item.duration}</span>
                       <div className="flex items-center gap-3">
                         {item.original && <span className="text-lg text-gray-300 line-through font-bold">₩{item.original}</span>}
                         <span className="text-3xl font-black text-[#4A1D96]">₩{item.price}</span>
                       </div>
                       <p className="text-[11px] text-gray-400 font-bold mt-2">{item.desc}</p>
                     </div>
                     {item.discount && (
                       <div className="bg-red-50 text-red-500 font-black px-5 py-2 rounded-full text-sm">
                         {item.discount}
                       </div>
                     )}
                   </div>
                   <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />
                 </div>
               ))}
            </div>

            {/* Right: Info */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-black text-gray-900 mb-6">메타트랜스 에디팅 툴</h2>
              <p className="text-gray-500 font-bold mb-10 leading-relaxed">
                에디팅만 필요하신 분들을 위해<br />
                에디팅 툴만 사용도 가능합니다.
              </p>

              <div className="mb-12">
                <p className="text-sm font-black text-[#4A1D96] uppercase tracking-[0.2em] mb-8">에디팅 툴에 대한 장점</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {editorBenefits.map((benefit, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                        <benefit.icon className="w-5 h-5 text-[#4A1D96]" />
                      </div>
                      <p className="text-sm font-bold text-gray-600 leading-snug">{benefit.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-[#4A1D96] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-10 leading-tight">
            합리적인 가격으로<br />최고의 번역 품질을 경험하세요
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/request"
              className="bg-white text-[#4A1D96] px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-all shadow-2xl"
            >
              지금 시작하기
            </Link>
            <Link 
              to="/contact"
              className="bg-transparent border-2 border-white/30 text-white px-12 py-5 rounded-full font-black text-xl hover:bg-white/10 transition-all"
            >
              도움이 필요하신가요?
            </Link>
          </div>
        </div>
        
        {/* Animated Background Icons */}
        <div className="absolute top-20 left-20 opacity-10 animate-pulse">
           <Gem className="w-40 h-40 text-white" />
        </div>
        <div className="absolute bottom-20 right-20 opacity-10 animate-bounce">
           <Zap className="w-40 h-40 text-white" />
        </div>
      </section>
    </div>
  );
}
