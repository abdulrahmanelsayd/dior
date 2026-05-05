import { useState, useMemo, useCallback } from "react";
import { GOVERNORATES } from "@/constants/governorates";
import type { UseGovernorateSearchReturn } from "@/types/hooks";

export function useGovernorateSearch(): UseGovernorateSearchReturn {
  const [govSearch, setGovSearch] = useState("");
  const [govDropdownOpen, setGovDropdownOpen] = useState(false);
  const [selectedGov, setSelectedGov] = useState("");

  const filteredGovernorates = useMemo(
    () => GOVERNORATES.filter((g) => g.includes(govSearch)),
    [govSearch]
  );

  const selectGovernorate = useCallback((gov: string) => {
    setGovSearch(gov);
    setSelectedGov(gov);
    setGovDropdownOpen(false);
  }, []);

  return {
    govSearch,
    setGovSearch,
    govDropdownOpen,
    setGovDropdownOpen,
    selectedGov,
    filteredGovernorates,
    selectGovernorate,
  };
}
