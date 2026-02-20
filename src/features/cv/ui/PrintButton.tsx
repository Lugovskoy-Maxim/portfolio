"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="print-btn"
      aria-label="Печать или сохранение в PDF"
    >
      Печать / PDF
    </button>
  );
}
