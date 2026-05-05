"use client";

import { useState, useCallback } from "react";
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

  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const isOpen = govDropdownOpen && govSearch.length > 0 && !selectedGov;

  const handleSelect = useCallback((gov: string) => {
    selectGovernorate(gov);
    setHighlightedIndex(-1);
  }, [selectGovernorate]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < filteredGovernorates.length - 1 ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredGovernorates.length - 1
        );
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0 && highlightedIndex < filteredGovernorates.length) {
          handleSelect(filteredGovernorates[highlightedIndex]);
        }
        break;
      case "Escape":
        setGovDropdownOpen(false);
        setHighlightedIndex(-1);
        break;
    }
  }, [isOpen, filteredGovernorates, highlightedIndex, handleSelect, setGovDropdownOpen]);

  return (
    <div className="flex flex-col relative group">
      <input
        required
        type="text"
        id="governorate"
        role="combobox"
        aria-expanded={isOpen}
        aria-controls="governorate-listbox"
        aria-activedescendant={highlightedIndex >= 0 ? `governorate-option-${highlightedIndex}` : undefined}
        aria-autocomplete="list"
        value={govSearch}
        onChange={(e) => {
          setGovSearch(e.target.value);
          setGovDropdownOpen(true);
          setHighlightedIndex(-1);
        }}
        onFocus={() => setGovDropdownOpen(true)}
        onBlur={() => setTimeout(() => { setGovDropdownOpen(false); setHighlightedIndex(-1); }, 150)}
        onKeyDown={handleKeyDown}
        className="w-full bg-transparent border-b border-brand-text/10 py-3 text-sm text-brand-text focus:outline-none focus:border-brand-pink-dark/60 transition-colors duration-500 peer placeholder-transparent"
        placeholder="المحافظة"
      />
      <label
        htmlFor="governorate"
        className="absolute right-0 top-3 text-xs text-brand-muted/40 transition-all duration-300 peer-placeholder-shown:text-xs peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-brand-pink-dark/60 peer-focus:tracking-[0.15em] peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-[9px] peer-[&:not(:placeholder-shown)]:tracking-[0.15em] peer-[&:not(:placeholder-shown)]:text-brand-muted/50 uppercase tracking-widest pointer-events-none"
      >
        المحافظة
      </label>
      {isOpen && (
        <div role="listbox" id="governorate-listbox" className="absolute top-full right-0 left-0 mt-1 bg-white border border-brand-text/5 rounded-lg shadow-lg max-h-36 overflow-y-auto z-50">
          {filteredGovernorates.map((g, i) => (
            <div
              key={g}
              role="option"
              id={`governorate-option-${i}`}
              aria-selected={i === highlightedIndex}
              onMouseDown={() => handleSelect(g)}
              onMouseEnter={() => setHighlightedIndex(i)}
              className={`w-full text-right px-3 py-2 text-sm text-brand-text hover:bg-brand-pink/10 transition-colors cursor-default ${i === highlightedIndex ? "bg-brand-pink/10" : ""}`}
            >
              {g}
            </div>
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
