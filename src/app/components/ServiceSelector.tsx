import { useState, useEffect } from "react";
import { CATEGORIES } from "../constants/categories";
import { ChevronDown, CheckCircle2 } from "lucide-react";

interface ServiceSelectorProps {
  onSelect: (selection: { large: string; medium: string; small: string }) => void;
  initialSelection?: { large: string; medium: string; small: string };
}

export function ServiceSelector({ onSelect, initialSelection }: ServiceSelectorProps) {
  const [largeId, setLargeId] = useState(initialSelection?.large || "");
  const [mediumId, setMediumId] = useState(initialSelection?.medium || "");
  const [smallLabel, setSmallLabel] = useState(initialSelection?.small || "");

  const largeCategory = CATEGORIES.find(c => c.id === largeId);
  const mediumCategory = largeCategory?.children?.find(c => c.id === mediumId);
  const smallItems = mediumCategory?.subItems || [];

  useEffect(() => {
    onSelect({ 
      large: largeCategory?.label || "", 
      medium: mediumCategory?.label || "", 
      small: smallLabel 
    });
  }, [largeId, mediumId, smallLabel]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Large Category */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 ml-1">대분류</label>
          <div className="relative group">
            <select
              value={largeId}
              onChange={(e) => {
                setLargeId(e.target.value);
                setMediumId("");
                setSmallLabel("");
              }}
              className="w-full appearance-none bg-gray-50 border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#4A1D96] transition-all font-medium text-gray-800 cursor-pointer"
            >
              <option value="">대분류 선택</option>
              {CATEGORIES.map(c => (
                <option key={c.id} value={c.id}>{c.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none group-hover:text-gray-600 transition-colors" />
          </div>
        </div>

        {/* Medium Category */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 ml-1">중분류</label>
          <div className="relative group">
            <select
              value={mediumId}
              disabled={!largeId}
              onChange={(e) => {
                setMediumId(e.target.value);
                setSmallLabel("");
              }}
              className="w-full appearance-none bg-gray-50 border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#4A1D96] transition-all font-medium text-gray-800 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="">중분류 선택</option>
              {largeCategory?.children?.map(c => (
                <option key={c.id} value={c.id}>{c.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none group-hover:text-gray-600 transition-colors" />
          </div>
        </div>

        {/* Small Category */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 ml-1">소분류</label>
          <div className="relative group">
            <select
              value={smallLabel}
              disabled={!mediumId || smallItems.length === 0}
              onChange={(e) => setSmallLabel(e.target.value)}
              className="w-full appearance-none bg-gray-50 border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#4A1D96] transition-all font-medium text-gray-800 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="">소분류 선택</option>
              {smallItems.map(item => (
                <option key={item} value={item}>{item}</option>
              ))}
              {!smallItems.length && mediumId && (
                <option value={mediumCategory?.label}>일반 ({mediumCategory?.label})</option>
              )}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none group-hover:text-gray-600 transition-colors" />
          </div>
        </div>
      </div>

      {/* Selection Summary */}
      {(largeId || mediumId || smallLabel) && (
        <div className="bg-purple-50/50 rounded-2xl p-4 border border-purple-100 flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-[#4A1D96]" />
          </div>
          <div className="flex items-center gap-2 text-[13px] font-bold text-[#4A1D96]">
            <span>{largeCategory?.label || "---"}</span>
            <span className="text-purple-300">/</span>
            <span>{mediumCategory?.label || "---"}</span>
            <span className="text-purple-300">/</span>
            <span>{smallLabel || "---"}</span>
          </div>
        </div>
      )}
    </div>
  );
}
