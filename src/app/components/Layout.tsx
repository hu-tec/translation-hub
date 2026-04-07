import { Link, Outlet, useLocation } from "react-router";
import { useState, useRef, useEffect } from "react";
import { 
  Menu, X, Phone, Mail, MapPin, ChevronDown, 
  BookOpen, Dumbbell, Cpu, Factory, Languages, 
  Layers, Palette, Utensils, Film, Gavel, Briefcase,
  Tv, Mic, Sparkles, GraduationCap, Globe, Zap,
  FileText, UserPlus, Calculator, Award, Shield, Sun,
  ArrowRight, HardHat, Building2, Hammer, MessageCircle, HelpCircle, MessageSquare
} from "lucide-react";

const mainNavLinks = [
  { to: "/", label: "홈" },
  { 
    to: "/fields", 
    label: "분야", 
    dropdown: [
      { to: "/fields#stt", label: "서비스 유형", icon: Zap, color: "#4A1D96", subItems: ["STT", "TTS", "STS", "문서번역", "세부전문분야"] },
      { to: "/fields#industry", label: "산업별", icon: Factory, color: "#1565C0", subItems: ["반도체/조선", "방산", "태양광", "법률/특허", "비즈니스", "웹툰/웹소설"] },
      { to: "/fields#life", label: "생활영역", icon: Utensils, color: "#E91E63", subItems: ["요리/라이프", "재무/부동산", "입시/교육", "사주/운세"] },
      { to: "/fields#specialized", label: "전문영역", icon: Layers, color: "#6B3FA0", subItems: ["AI 고전 번역", "피지컬", "학술/논문", "기사/뉴스", "의료/건강"] },
    ]
  },
  { to: "/pricing", label: "요금안내" },
  { to: "/experts", label: "전문가" },
  { to: "/b2b", label: "B2B" },
  { to: "/request", label: "신청 및 의뢰" },
];

const communityDropdown = [
  { to: "/support#faq", label: "FAQ", icon: HelpCircle, color: "#4A1D96", desc: "자주 묻는 질문" },
  { to: "/support#qna", label: "Q&A", icon: MessageCircle, color: "#2563EB", desc: "공개 게시판" },
  { to: "/support#1on1", label: "1:1 문의", icon: MessageSquare, color: "#7C3AED", desc: "전문가 상담" },
];

export function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top bar */}
      <div className="bg-[#4A1D96] text-white/90 py-2 hidden lg:block border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[12px]">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 opacity-90 font-bold">
              <Phone className="w-3.5 h-3.5" />
              02-6207-9090
            </span>
            <span className="flex items-center gap-1.5 opacity-90 font-bold">
              <Mail className="w-3.5 h-3.5" />
              hutechc01@gmail.com
            </span>
          </div>
          <span className="flex items-center gap-1.5 opacity-90 font-bold">
            <MapPin className="w-3.5 h-3.5" />
            서울 서초구 양재천로 19길 26, 6층(양재동)
          </span>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/98 backdrop-blur shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-[#4A1D96] flex items-center justify-center text-white text-lg font-bold shadow-lg shadow-purple-200 group-hover:scale-105 transition-transform">H</div>
            <div className="flex flex-col">
              <span className="text-xl tracking-tighter text-[#4A1D96]" style={{ fontWeight: 800 }}>HUTECHC</span>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] leading-none">Human Tech Coexistence</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" ref={dropdownRef}>
            {mainNavLinks.map((link) => (
              link.dropdown ? (
                <div key={link.to} className="relative">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                    className={`flex items-center gap-1 px-4 py-2.5 rounded-xl transition-all text-[14px] cursor-pointer ${
                      location.pathname.startsWith(link.to)
                        ? "bg-[#4A1D96] text-white shadow-lg shadow-purple-100 font-bold"
                        : "text-gray-600 hover:text-[#4A1D96] hover:bg-purple-50 font-semibold"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                  </button>
                  {activeDropdown === link.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[450px] bg-white rounded-[32px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.25)] border border-gray-100 py-6 px-5 z-50">
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-t border-l border-gray-100" />
                      <div className="grid grid-cols-1 gap-4">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="flex items-start gap-4 px-5 py-4 rounded-2xl hover:bg-gray-50 transition-all group/item"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-all group-hover/item:scale-110" style={{ backgroundColor: item.color + "15" }}>
                              <item.icon className="w-5 h-5" style={{ color: item.color }} />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[15px] text-gray-800 font-black group-hover/item:text-[#4A1D96] transition-colors whitespace-nowrap mb-1.5">{item.label}</span>
                              {"subItems" in item && (
                                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                                  {item.subItems.map((sub: string, idx: number) => (
                                    <span key={sub} className="text-[11px] text-gray-400 font-bold hover:text-gray-600 flex items-center gap-2.5">
                                      {sub}
                                      {idx < item.subItems.length - 1 && <span className="w-0.5 h-0.5 rounded-full bg-gray-200" />}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2.5 rounded-xl transition-all text-[14px] ${
                    location.pathname === link.to
                      ? "bg-[#4A1D96] text-white shadow-lg shadow-purple-100 font-bold"
                      : "text-gray-600 hover:text-[#4A1D96] hover:bg-purple-50 font-semibold"
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
            
            {/* Community Dropdown (3-tier) */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === "커뮤니티" ? null : "커뮤니티")}
                className={`ml-3 bg-gray-900 text-white px-6 py-2.5 rounded-xl text-[13px] font-bold hover:bg-gray-800 transition-all shadow-lg flex items-center gap-2 cursor-pointer ${activeDropdown === "커뮤니티" ? "ring-2 ring-purple-500 ring-offset-2" : ""}`}
              >
                커뮤니티
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "커뮤니티" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "커뮤니티" && (
                <div className="absolute top-full right-0 mt-3 w-[260px] bg-white rounded-[28px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.25)] border border-gray-100 py-4 px-3 z-50">
                   <div className="absolute -top-1.5 right-10 w-3 h-3 bg-white rotate-45 border-t border-l border-gray-100" />
                   <div className="space-y-1">
                      {communityDropdown.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="flex items-center gap-4 px-4 py-3.5 rounded-2xl hover:bg-gray-50 transition-all group/comm"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: item.color + "15" }}>
                            <item.icon className="w-5 h-5" style={{ color: item.color }} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[14px] text-gray-800 font-black group-hover/comm:text-[#4A1D96] transition-colors">{item.label}</span>
                            <span className="text-[10px] text-gray-400 font-bold">{item.desc}</span>
                          </div>
                        </Link>
                      ))}
                   </div>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-3 rounded-2xl bg-gray-50 text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="lg:hidden border-t border-gray-100 bg-white px-6 pb-8 pt-4 overflow-y-auto max-h-[calc(100vh-80px)] space-y-2">
            {mainNavLinks.map((link) => (
              <div key={link.to}>
                {link.dropdown ? (
                  <div className="py-2">
                    <p className="text-xs text-gray-400 font-bold mb-2 uppercase px-4">{link.label}</p>
                    <div className="space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="flex items-center gap-3 p-4 rounded-2xl hover:bg-purple-50 transition-all text-gray-600 font-semibold"
                          onClick={() => setMobileOpen(false)}
                        >
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: item.color + "15" }}>
                            <item.icon className="w-4 h-4" style={{ color: item.color }} />
                          </div>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.to}
                    className={`block p-4 rounded-2xl transition-all ${
                      location.pathname === link.to
                        ? "bg-[#4A1D96] text-white font-bold"
                        : "text-gray-600 hover:bg-purple-50 font-semibold"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="py-2">
               <p className="text-xs text-gray-400 font-bold mb-2 uppercase px-4">커뮤니티</p>
               <div className="space-y-1">
                  {communityDropdown.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="flex items-center gap-3 p-4 rounded-2xl hover:bg-gray-100 transition-all text-gray-800 font-bold"
                      onClick={() => setMobileOpen(false)}
                    >
                      <item.icon className="w-5 h-5" style={{ color: item.color }} />
                      {item.label}
                    </Link>
                  ))}
               </div>
            </div>
          </nav>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#0f0e21] text-gray-400 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#4a1d96] flex items-center justify-center text-white text-[14px] font-bold">HT</div>
                <span className="text-2xl text-white font-bold tracking-tight">휴텍씨</span>
              </div>
              <p className="text-[14.5px] leading-relaxed max-w-xs text-gray-300 font-medium mb-8">
                외국어 교육과 번역 분야의 리딩 그룹으로, 인공지능 기술을 융합한 혁신적인 글로벌 소통 솔루션을 제공합니다.
              </p>
              <div className="flex gap-4">
                 <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                    <Globe className="w-4 h-4" />
                 </div>
                 <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                    <Zap className="w-4 h-4" />
                 </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-black mb-8 text-lg">사업 영역</h4>
              <ul className="space-y-4 text-sm font-bold">
                <li><Link to="/fields" className="hover:text-white transition-colors">AITe 시험</Link></li>
                <li><Link to="/fields" className="hover:text-white transition-colors">ITT 시험</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">메타트랜스</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">통독 서비스</Link></li>
                <li><Link to="/experts" className="hover:text-white transition-colors">프롬프트 전문가</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black mb-8 text-lg">바로가기</h4>
              <ul className="space-y-4 text-sm font-bold">
                <li><Link to="/about" className="hover:text-white transition-colors">그룹 소개</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">AI 신사업</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">30년 정통사업</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">사회 공헌</Link></li>
                <li><Link to="/portfolio" className="hover:text-white transition-colors">파트너십 및 인증</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">언론 보도</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black mb-8 text-lg">연락처</h4>
              <ul className="space-y-6 text-sm">
                <li className="flex items-start gap-4">
                  <Building2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <p className="text-gray-300 font-bold leading-relaxed">상호명 : (주)휴텍씨</p>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-gray-300 font-bold leading-relaxed">주소 : 서울 서초구 양재천로 19길 26, 6층(양재동)</p>
                </li>
                <li className="flex items-center gap-4">
                  <FileText className="w-5 h-5 text-purple-500 shrink-0" />
                  <p className="text-gray-300 font-bold">사업자번호 : 368-81-01113</p>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                  <p className="text-gray-300 font-bold">문의 : hutechc01@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
              <div className="space-y-2">
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm font-bold text-gray-300">
                   <p>상호명: (주)휴텍씨</p>
                   <p>대표이사: 박미진</p>
                   <p>사업자등록번호: 368-81-01113</p>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm font-bold text-gray-300">
                   <p>통신판매업신고: 제 2024-서울서초-0123호</p>
                   <p>문의: hutechc01@gmail.com</p>
                </div>
                <p className="text-xs text-gray-500 mt-8 font-medium tracking-wider uppercase">&copy; 2026 HuTechC Global Group. All rights reserved.</p>
              </div>
              <div className="flex gap-8 text-sm font-black">
                <span className="cursor-pointer text-gray-400 hover:text-white transition-colors">개인정보처리방침</span>
                <span className="cursor-pointer text-gray-400 hover:text-white transition-colors">利用약관</span>
                <span className="cursor-pointer text-gray-400 hover:text-white transition-colors">이메일무단수집거부</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
