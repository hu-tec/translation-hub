import { motion } from "motion/react";
import { CheckCircle2, Target, Users, Award, ShieldCheck, Zap, BookOpen, Globe } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const networks = [
  {
    title: "전 대학 교육장 소개",
    icon: BookOpen,
    color: "#7C3AED",
    items: ["연세대학교", "한동대학교", "단국대학교", "동국대학교", "부산대학교", "영남대학교", "한림대학교", "동아대학교", "서울교육대학교", "충남대학교"]
  },
  {
    title: "언론 교육센터 및 학회 협약처",
    icon: Award,
    color: "#10B981",
    items: ["코리아 헤럴드 교육센터", "코리아 타임스 교육센터", "CBS교육 센터", "부산 KNN 교육센터", "중앙일보 IT 데일리 교육센터", "국제통역번역협회", "한국 번역학회"]
  },
  {
    title: "해외 교육 센터 및 교육 협약처",
    icon: Globe,
    color: "#3B82F6",
    items: ["캐나다 교육 센터", "중국 교육센터", "미국 교육센터", "캘리포니아 주립대학교-롱비치", "캘리포니아 주립대학교-샌버나디노"]
  },
  {
    title: "해외 제휴 협업기관",
    icon: Users,
    color: "#A855F7",
    items: ["UBC", "STIBC", "Purdue University", "CSULB", "USM", "IVY TECH", "호주 NATTI", "미국 콩코디아 대학교"]
  }
];

const boardMembers = [
  {
    role: "(주)메타트랜스 회장",
    name: "이정우",
    nameEn: "Lee Jeong-Woo",
    careers: [
      "(현) (주)메타트랜스 회장",
      "(현) KNN방송 감사",
      "(현) 하나금융그룹 고문",
      "(전) 코리아헤럴드 대표이사 발행인",
      "(전) 내외경제신문 대표이사 발행인",
      "(전) 키즈헤럴드 발행인 회장",
      "(전) 현대투자신탁 대표이사"
    ]
  },
  {
    role: "(주)메타트랜스 대표이사",
    name: "박미진",
    nameEn: "Park Mi-Jin",
    careers: [
      "(현) (주)메타트랜스 대표이사",
      "(현) ICS 국제협회 이사장",
      "(현) (주)타임즈 미디어 대표이사",
      "(현) (사)국제통역번역협회 협회 사무총장",
      "(현) (사)한국 번역 학회 상임이사",
      "(현) 한국 번역 연구원 사무총장",
      "(전) UN 산하 UN IAEWP 교육위원"
    ]
  },
  {
    role: "(주)메타트랜스 기술이사",
    name: "정의용",
    nameEn: "Jeong Eui-yong",
    careers: [
      "(현) (주)메타트랜스 CTO",
      "(현) 한국번역학회 산학협력위원",
      "(전) (주)시스트란 대표이사",
      "(전) (주)시스트란 인터내셔널 부사장",
      "(전) (주)심과솔루션 연구소장",
      "(전) (유)위번아이티 연구소장",
      "(전) (유)하니소프트 개발부 부장"
    ]
  },
  {
    role: "(주)메타트랜스 고문이사",
    name: "윤태희",
    nameEn: "Yoon Tae-Hee",
    careers: [
      "(현) Korea Economic Intelligence New York Wall St. 회장",
      "(전) (세계은행)국제 금융공사 수석고문",
      "(전) 국제방송교류재단 이사장",
      "(전) 서울외국어대학원대학교 총장",
      "(전) 국제영어대학원 회장",
      "(전) 주미 한국정부 장학생 선발위원장"
    ]
  },
  {
    role: "(주)메타트랜스 고문이사",
    name: "김동익",
    nameEn: "Kim Dong-Ik",
    careers: [
      "(현) ICS 이사장",
      "(전) 성균관대학교 언론정보대학원 겸임교수",
      "(전) 정무장관",
      "(전) 중앙일보 사장",
      "(전) 조선일보 편집국장"
    ]
  },
  {
    role: "(주)메타트랜스 고문이사",
    name: "유명우",
    nameEn: "Yoo Myeong-u",
    careers: [
      "(현) 국제통역 번역협회 고문",
      "(현) 한국 번역 학회 창립회장",
      "(현) 한국 번역 연구원 원장",
      "(전) 한국 번역학회 창립 고문",
      "(전) 호남대학교 영어영문학과 명예교수",
      "(전) 한국 추리작가협회 부회장",
      "(전) 한국 번역가 협회 부회장"
    ]
  }
];

export function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#4A1D96] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            기술과 인간의 조화,<br />(주)휴텍씨(HUTECHC)
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed"
          >
            Human Tech Coexistence. 우리는 AI 기술의 효율성과 전문 번역사의 통찰력을 결합하여 
            전 세계 모든 지식이 언어의 장벽 없이 공유되는 세상을 만듭니다.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 border-l-4 border-[#4A1D96] pl-6">경영 이념</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-[#4A1D96]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">정확성 (Accuracy)</h3>
                  <p className="text-gray-600 leading-relaxed">단순한 단어의 치환을 넘어, 원문의 맥락과 전문성을 완벽하게 전달합니다.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-[#4A1D96]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">효율성 (Efficiency)</h3>
                  <p className="text-gray-600 leading-relaxed">최신 AI 기술인 프롬프트 엔지니어링을 활용하여 번역 속도를 혁신적으로 단축합니다.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-[#4A1D96]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">조화 (Harmony)</h3>
                  <p className="text-gray-600 leading-relaxed">AI의 속도와 인간의 감수성이 조화를 이루는 하이브리드 시스템을 지향합니다.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-purple-200">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1522071823991-b9671f903f7a?auto=format&fit=crop&q=80&w=1000" 
                alt="HutechC Office"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl border border-purple-50 hidden lg:block">
              <div className="flex items-center gap-4 mb-2">
                <Award className="w-8 h-8 text-[#4A1D96]" />
                <span className="text-2xl font-bold">27+</span>
              </div>
              <p className="text-gray-500 font-medium">통번역 교육 및<br />실무 노하우 축적</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* History */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">주요 연혁</h2>
          <div className="space-y-12">
            {[
              { year: "2024", event: "메타트랜스 AI 하이브리드 시스템 구축 및 상용화" },
              { year: "2022", event: "전 세계 109개 언어 실시간 AI 통역 솔루션 도입" },
              { year: "2018", event: "국내외 전문 통번역사 네트워크 15,000명 돌파" },
              { year: "2010", event: "주요 대기업(삼성, LG, SK 등) 기술 번역 파트너십 체결" },
              { year: "2000", event: "(주)휴텍씨 설립 - 통번역 전문 인프라 구축 시작" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 items-start"
              >
                <div className="text-2xl font-bold text-[#4A1D96] w-24 shrink-0">{item.year}</div>
                <div className="pt-1.5 border-l-2 border-purple-200 pl-8 pb-8 relative last:pb-0">
                  <div className="absolute top-2.5 -left-1.5 w-3 h-3 rounded-full bg-[#4A1D96]" />
                  <p className="text-lg text-gray-700 font-medium">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Network */}
      <section className="py-24 bg-[#F8F9FE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-[#4A1D96] text-[11px] font-bold mb-4 uppercase tracking-wider">
              Organization & Global Network
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">교육 네트워크 현황</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {networks.map((net, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[24px] p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-8 border-b border-gray-50 pb-6">
                  <net.icon className="w-5 h-5 shrink-0" style={{ color: net.color }} />
                  <h3 className="font-bold text-gray-900 text-[15px]">{net.title}</h3>
                </div>
                <ul className="space-y-4">
                  {net.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-200 shrink-0" />
                      <span className="text-[13px] text-gray-600 font-bold">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-[#4A1D96] text-[11px] font-bold mb-4 uppercase tracking-wider">
              경영진
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-4">경영진 및 자문 위원</h2>
            <p className="text-gray-500 font-bold">풍부한 경험과 전문성을 갖춘 리더십이 그룹의 비전을 이끕니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-purple-100 transition-all flex flex-col items-center text-center group"
              >
                <div className="w-28 h-28 rounded-full overflow-hidden mb-6 border-4 border-gray-50 shadow-inner">
                  <ImageWithFallback 
                    src={`https://ui-avatars.com/api/?name=${member.nameEn.replace(/ /g, '+')}&background=random&color=fff&size=150`} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-xs font-bold text-blue-600 mb-2">{member.role}</h4>
                <h3 className="text-2xl font-black text-gray-900 mb-1">{member.name}</h3>
                <p className="text-xs font-medium text-gray-400 italic mb-8">{member.nameEn}</p>
                
                <div className="w-full border-t border-gray-50 pt-8 text-left space-y-3">
                  {member.careers.map((career, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                      <span className="text-[12px] text-gray-600 font-semibold leading-relaxed">{career}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ShieldCheck className="w-16 h-16 text-[#4A1D96] mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">신뢰할 수 있는 파트너</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-12">
            휴텍씨는 보안을 최우선으로 생각합니다. 모든 번역 데이터는 철저한 기밀 유지가 보장되며, 
            전문 보안 시스템을 통해 소중한 정보를 안전하게 보호합니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["NDA 보장", "데이터 암호화", "보안 서버 운영", "전문가 보안 서약"].map((tag) => (
              <span key={tag} className="px-6 py-2 bg-purple-50 text-[#4A1D96] rounded-full font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
