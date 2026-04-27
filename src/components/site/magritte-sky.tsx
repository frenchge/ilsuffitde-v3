function CloudA({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 140" fill="white" xmlns="http://www.w3.org/2000/svg" className={className}>
      <ellipse cx="180" cy="118" rx="162" ry="28" />
      <circle cx="100" cy="92" r="40" />
      <circle cx="158" cy="74" r="54" />
      <circle cx="226" cy="80" r="46" />
      <circle cx="278" cy="96" r="36" />
    </svg>
  );
}

function CloudB({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 120" fill="white" xmlns="http://www.w3.org/2000/svg" className={className}>
      <ellipse cx="140" cy="100" rx="120" ry="24" />
      <circle cx="82" cy="80" r="34" />
      <circle cx="138" cy="62" r="46" />
      <circle cx="198" cy="72" r="38" />
      <circle cx="238" cy="88" r="26" />
    </svg>
  );
}

function CloudC({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 100" fill="white" xmlns="http://www.w3.org/2000/svg" className={className}>
      <ellipse cx="120" cy="84" rx="104" ry="20" />
      <circle cx="72" cy="68" r="28" />
      <circle cx="120" cy="54" r="38" />
      <circle cx="172" cy="62" r="30" />
      <circle cx="210" cy="76" r="22" />
    </svg>
  );
}

export function MagritteSky() {
  return (
    <section className="relative overflow-hidden bg-[#6898c0] py-20 md:py-28">
      <div className="magritte-cloud-1 pointer-events-none absolute -top-6 left-[1%]">
        <CloudA className="w-[300px] md:w-[380px]" />
      </div>
      <div className="magritte-cloud-2 pointer-events-none absolute -top-3 right-[4%]">
        <CloudB className="w-[240px] md:w-[310px]" />
      </div>
      <div className="magritte-cloud-3 pointer-events-none absolute top-4 left-[36%]">
        <CloudC className="w-[180px] md:w-[240px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-6">
        <p className="font-display text-center text-xl italic font-light tracking-wide text-white/90 md:text-2xl">
          Ceci n'est pas une association comme les autres.
        </p>
      </div>
    </section>
  );
}
