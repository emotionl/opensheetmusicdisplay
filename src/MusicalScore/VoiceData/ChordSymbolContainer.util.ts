type FormatFn = (text: string) => string;

export const formatChordKind: FormatFn = (chordKind) => {
  const chordKindMapping: Record<string, string> = {
    m7b5: "-7b5",
    mi69: "-69",
  };
  if (chordKindMapping[chordKind]) {
    chordKind = chordKindMapping[chordKind];
  }
  return chordKind;
};

export const formatDegreesText: FormatFn = (degreesText: string): string => {
  const degreesTextMapping: Record<string, string> = {
    "(alt #5)": "#5",
    "(alt b5)": "b5",
    "(#9)": "#9",
    "(b9)": "b9",
    "(2)": "2",
    "(9)": "add9",
    "(#7)": "Δ7",
    "(#9)(alt b5)": "alt",
  };
  if (degreesTextMapping[degreesText]) {
    degreesText = degreesTextMapping[degreesText];
  }
  return degreesText;
};
