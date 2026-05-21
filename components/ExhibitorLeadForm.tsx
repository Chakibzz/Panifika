const countries = ["Please select...", "Algeria", "France", "Italy", "Spain", "Tunisia", "Morocco", "Germany", "Belgium", "Turkey", "United Arab Emirates"];
const standOptions = ["Please select...", "9 sqm", "12 sqm", "18 sqm", "24 sqm", "36 sqm", "Custom pavilion"];
const sectors = ["Please Select...", "Bakery", "Pastry", "Pizza", "Coffee", "Food equipment", "Ingredients", "Packaging", "Services"];
const sources = ["Please Select...", "LinkedIn", "Instagram", "Google search", "Email invitation", "Media partner", "Industry association", "Word of mouth"];

type FieldProps = {
  label: string;
  placeholder: string;
  required?: boolean;
  type?: string;
};

type SelectFieldProps = {
  label: string;
  options: string[];
  required?: boolean;
};

function RequiredMark() {
  return <span className="text-[#ff5d45]"> *</span>;
}

function Field({ label, placeholder, required, type = "text" }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-[8px] block text-[14px] font-semibold tracking-[-0.01em] text-[#fff4d3] md:text-[15px]">
        {label}
        {required ? <RequiredMark /> : null}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-[48px] w-full rounded-[6px] border border-[#f3ad16]/28 bg-[#fff7e6]/[0.03] px-[14px] text-[14px] text-[#fff4d3] outline-none transition placeholder:text-[#9f8763] focus:border-[#f3ad16]/72 focus:bg-[#120c08]/70 focus:shadow-[0_0_28px_rgba(243,173,22,0.14)]"
      />
    </label>
  );
}

function SelectField({ label, options, required }: SelectFieldProps) {
  return (
    <label className="block">
      <span className="mb-[8px] block text-[14px] font-semibold tracking-[-0.01em] text-[#fff4d3] md:text-[15px]">
        {label}
        {required ? <RequiredMark /> : null}
      </span>
      <select
        required={required}
        className="h-[48px] w-full rounded-[6px] border border-[#f3ad16]/28 bg-[#fff7e6]/[0.03] px-[14px] text-[14px] text-[#fff4d3] outline-none transition focus:border-[#f3ad16]/72 focus:bg-[#120c08]/70 focus:shadow-[0_0_28px_rgba(243,173,22,0.14)]"
      >
        {options.map((option) => (
          <option key={option} className="bg-[#120c08] text-[#fff4d3]">
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export function ExhibitorLeadForm() {
  return (
    <form className="gold-line-frame rounded-[24px] bg-[#23130d]/82 p-[22px] shadow-[0_24px_74px_rgba(0,0,0,0.34)] md:p-[28px]">
      <h2 className="text-[34px] font-black uppercase leading-[1] text-[#fff4d3]">Request exhibitor brochure.</h2>
      <p className="mt-[12px] text-[15px] leading-[1.7] text-[#d9bb82]">
        Complete the participation request below. Fields marked with an asterisk are required.
      </p>

      <div className="mt-[26px]">
        <p className="mb-[8px] text-[14px] font-semibold text-[#fff4d3]">Salutation</p>
        <div className="flex items-center gap-[14px] text-[13px] text-[#e4c78e]">
          <label className="flex items-center gap-[6px]">
            <input type="checkbox" className="h-[13px] w-[13px] accent-[#f3ad16]" />
            Mr
          </label>
          <label className="flex items-center gap-[6px]">
            <input type="checkbox" className="h-[13px] w-[13px] accent-[#f3ad16]" />
            Mrs
          </label>
        </div>
      </div>

      <div className="mt-[26px] grid gap-x-[20px] gap-y-[19px] md:grid-cols-2">
        <div className="md:col-span-2">
          <Field label="Full Name / Nom et prenom" placeholder="Full Name" required />
        </div>
        <Field label="Company / Entreprise" placeholder="Company" required />
        <Field label="Email" placeholder="Email" type="email" required />
        <Field label="Job Title / Poste occupe" placeholder="Job Title" required />
        <SelectField label="Company Country / Pays de l'entreprise" options={countries} required />
        <div className="md:col-span-2">
          <Field label="Mobile / Numero de telephone" placeholder="Mobile: Ex +213561112233" required />
        </div>
        <div className="md:col-span-2">
          <SelectField label="Stand Option / Dimensions du stand" options={standOptions} required />
        </div>
        <div className="md:col-span-2">
          <Field label="Linkedin Profile / Profil LinkedIn" placeholder="Linkedin Profile" />
        </div>
        <div className="md:col-span-2">
          <SelectField label="Company Sector / Secteur d'activite" options={sectors} required />
        </div>
        <div className="md:col-span-2">
          <SelectField label="How did you hear about the event? / Comment avez-vous entendu parler de notre evenement ?" options={sources} required />
        </div>
      </div>

      <button
        type="submit"
        className="mt-[20px] h-[48px] w-full rounded-[6px] bg-[#8a4d60] text-[12px] font-black uppercase tracking-[0.2em] text-[#fff7df] shadow-[0_0_34px_rgba(138,77,96,0.24)] transition duration-300 hover:bg-[#9b5a6e] focus:outline-none focus:ring-2 focus:ring-[#f3ad16]/60"
      >
        Send / Envoyer
      </button>
    </form>
  );
}
