type InputProps = {
  label: string;
  placeholder: string;
  type?: string;
};

type SelectProps = {
  label: string;
  options: string[];
};

export function PremiumInput({ label, placeholder, type = "text" }: InputProps) {
  return (
    <label className="block">
      <span className="mb-[9px] block text-[10px] font-black uppercase tracking-[0.18em] text-[#f3ad16]">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="h-[56px] w-full rounded-[16px] border border-[#f3ad16]/24 bg-[#120c08]/68 px-[17px] text-[15px] text-[#fff4d3] outline-none transition placeholder:text-[#a58251] focus:border-[#f3ad16]/68 focus:shadow-[0_0_28px_rgba(243,173,22,0.14)]"
      />
    </label>
  );
}

export function PremiumSelect({ label, options }: SelectProps) {
  return (
    <label className="block">
      <span className="mb-[9px] block text-[10px] font-black uppercase tracking-[0.18em] text-[#f3ad16]">{label}</span>
      <select className="h-[56px] w-full rounded-[16px] border border-[#f3ad16]/24 bg-[#120c08]/68 px-[17px] text-[15px] text-[#fff4d3] outline-none transition focus:border-[#f3ad16]/68 focus:shadow-[0_0_28px_rgba(243,173,22,0.14)]">
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
