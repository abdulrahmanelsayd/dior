"use client";

import { useGovernorateSearch } from "@/hooks/useGovernorateSearch";

export default function GovernorateSelect() {
  const {
    govSearch,
    setGovSearch,
    govDropdownOpen,
    setGovDropdownOpen,
    selectedGov,
    filteredGovernorates,
    selectGovernorate,
  } = useGovernorateSearch();

  return (
    <div className="flex flex-col relative group">
      <input
        required
        type="text"
        id="governorate"
        value={govSearch}
        onChange={(e) => {
          setGovSearch(e.target.value);
          setGovDropdownOpen(true);
        }}
        onFocus={() => setGovDropdownOpen(true)}
        onBlur={() => setTimeout(() => setGovDropdownOpen(false), 150)}
        className="w-full bg-transparent border-b border-brand-text/10 py-3 text-sm text-brand-text focus:outline-none focus:border-brand-pink-dark/60 transition-colors duration-500 peer placeholder-transparent"
        placeholder="المحافظة"
      />
      <label
        htmlFor="governorate"
        className="absolute right-0 top-3 text-xs text-brand-muted/40 transition-all duration-300 peer-placeholder-shown:text-xs peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-brand-pink-dark/60 peer-focus:tracking-[0.15em] peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-[9px] peer-[&:not(:placeholder-shown)]:tracking-[0.15em] peer-[&:not(:placeholder-shown)]:text-brand-muted/50 uppercase tracking-widest pointer-events-none"
      >
        المحافظة
      </label>
      {govDropdownOpen && govSearch.length > 0 && !selectedGov && (
        <div className="absolute top-full right-0 left-0 mt-1 bg-white border border-brand-text/5 rounded-lg shadow-lg max-h-36 overflow-y-auto z-50">
          {filteredGovernorates.map((g) => (
            <button
              type="button"
              key={g}
              onMouseDown={() => selectGovernorate(g)}
              className="w-full text-right px-3 py-2 text-sm text-brand-text hover:bg-brand-pink/10 transition-colors"
            >
              {g}
            </button>
          ))}
          {filteredGovernorates.length === 0 && (
            <div className="px-3 py-2 text-xs text-brand-muted/40">
              اكتبي اسم المحافظة يدوياً
            </div>
          )}
        </div>
      )}
    </div>
  );
}
