import { 
  Factory, Utensils, Film, Layers, Languages, Mic, 
  Cpu, Gavel, Briefcase, Tv, GraduationCap, Microscope, 
  Stethoscope, Globe, Zap, FileText, Layout
} from "lucide-react";

export interface Category {
  id: string;
  label: string;
  icon?: any;
  color?: string;
  subItems?: string[];
  children?: MiddleCategory[];
}

export interface MiddleCategory {
  id: string;
  label: string;
  subItems?: string[];
}

export const CATEGORIES: Category[] = [
  {
    id: "industry",
    label: "산업별",
    icon: Factory,
    color: "#1565C0",
    children: [
      { id: "semi-ship", label: "반도체/조선" },
      { id: "defense", label: "방산" },
      { id: "solar", label: "태양광" },
      { id: "legal-patent", label: "법률/특허" },
      { id: "business-doc", label: "비즈니스/문서" },
      { id: "webtoon", label: "웹툰/웹소설" },
    ]
  },
  {
    id: "life",
    label: "생활영역",
    icon: Utensils,
    color: "#E91E63",
    children: [
      { id: "cooking", label: "요리/라이프" },
      { id: "finance-realestate", label: "재무/부동산" },
      { id: "exam-edu", label: "입시/교육" },
      { id: "fortune", label: "사주/운세" },
    ]
  },
  {
    id: "video",
    label: "영상",
    icon: Film,
    color: "#0288D1",
    children: [
      { id: "youtube-sns", label: "유튜브/SNS" },
      { id: "documentary-movie", label: "다큐멘터리/영화" },
      { id: "drama-show", label: "드라마/예능" },
    ]
  },
  {
    id: "specialized",
    label: "전문영역",
    icon: Layers,
    color: "#6B3FA0",
    children: [
      { id: "ai-classic", label: "AI 고전 번역" },
      { id: "physical", label: "피지컬" },
      { id: "academic", label: "학술/논문" },
      { id: "news", label: "기사/뉴스" },
      { id: "lecture", label: "교육/강의" },
      { id: "medical", label: "의료/건강" },
      { 
        id: "voice", 
        label: "음성", 
        subItems: ["아나운서", "관광가이드", "큐레이터", "안내방송", "교육강의"] 
      },
    ]
  },
  {
    id: "language",
    label: "언어별",
    icon: Languages,
    color: "#00897B",
    children: [
      { 
        id: "by-lang", 
        label: "언어별", 
        subItems: ["영어", "일어", "중국어"] 
      },
      { 
        id: "special-lang", 
        label: "특수언어", 
        subItems: ["아랍어", "우크라이나어", "러시아어", "체코어"] 
      },
      { 
        id: "rare-lang", 
        label: "희귀어", 
        subItems: ["마우리어", "제주방언"] 
      },
    ]
  },
];
