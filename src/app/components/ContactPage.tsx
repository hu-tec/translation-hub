import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#4A1D96] to-[#7C3AED] py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl mb-4" style={{ fontWeight: 700 }}>문의하기</h1>
          <p className="text-purple-200 text-lg">번역 서비스에 대해 궁금한 점이 있으시면 언제든 문의해 주세요.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl mb-6" style={{ fontWeight: 700 }}>연락처 정보</h2>
              <div className="space-y-6">
                {[
                  { icon: Phone, label: "전화", value: "02-6207-9090", sub: "P. 010-3899-6896" },
                  { icon: Mail, label: "이메일", value: "hutechc01@gmail.com", sub: null },
                  { icon: MapPin, label: "주소", value: "서울 강남구 테헤란로53길 23", sub: "평화빌딩 4층" },
                  { icon: Clock, label: "운영시간", value: "월~금 10:00~16:00", sub: "수요일 휴일" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#4A1D96]/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-[#4A1D96]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-0.5">{item.label}</p>
                      <p style={{ fontWeight: 500 }}>{item.value}</p>
                      {item.sub && <p className="text-sm text-gray-500">{item.sub}</p>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-gray-50 rounded-2xl">
                <h4 className="mb-3" style={{ fontWeight: 600 }}>빠른 견적이 필요하신가요?</h4>
                <p className="text-sm text-gray-500 mb-3" style={{ lineHeight: 1.7 }}>
                  번역할 문서를 이메일로 보내주시면 1영업일 이내에 무료 견적을 보내드립니다.
                </p>
                <a
                  href="mailto:hutechc01@gmail.com"
                  className="inline-flex items-center gap-2 text-[#4A1D96] text-sm"
                  style={{ fontWeight: 600 }}
                >
                  <Mail className="w-4 h-4" /> hutechc01@gmail.com
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl mb-2" style={{ fontWeight: 700 }}>문의가 접수되었습니다</h3>
                  <p className="text-gray-500">담당자가 확인 후 빠른 시일 내에 연락드리겠습니다.</p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", service: "", message: "" }); }}
                    className="mt-6 text-[#4A1D96] underline text-sm"
                  >
                    새 문의 작성
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <h3 className="text-xl mb-6" style={{ fontWeight: 700 }}>번역 문의 / 견적 요청</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1.5">이름 *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-[#4A1D96] focus:outline-none transition-colors"
                        placeholder="홍길동"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1.5">이메일 *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-[#4A1D96] focus:outline-none transition-colors"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1.5">연락처</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-[#4A1D96] focus:outline-none transition-colors"
                        placeholder="010-1234-5678"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1.5">관심 서비스</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-[#4A1D96] focus:outline-none transition-colors"
                      >
                        <option value="">서비스 선택</option>
                        <option value="classic">AI 고전 번역</option>
                        <option value="physical">피지컬</option>
                        <option value="industry">반도체/조선/방산</option>
                        <option value="other">기타</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm text-gray-600 mb-1.5">문의 내용 *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-[#4A1D96] focus:outline-none transition-colors resize-none"
                      placeholder="번역할 문서의 종류, 분량, 희망 납기일 등을 알려주세요."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#4A1D96] text-white py-3 rounded-xl hover:bg-[#3B1578] transition-colors flex items-center justify-center gap-2"
                    style={{ fontWeight: 600 }}
                  >
                    <Send className="w-4 h-4" /> 문의 보내기
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
