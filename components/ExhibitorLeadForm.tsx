import { submitExhibitorLead } from "@/app/actions";
import type { LocalizedValue } from "./LocalizedText";
import { LocalizedTextView } from "./LocalizedText";
import { StandSelector } from "./StandSelector";
import { tx } from "@/lib/i18n";

const countries = ["Please select...", "Algeria", "France", "Italy", "Spain", "Tunisia", "Morocco", "Germany", "Belgium", "Turkey", "United Arab Emirates"];
const sectors = ["Please Select...", "Bakery", "Pastry", "Pizza", "Coffee", "Food equipment", "Ingredients", "Packaging", "Services"];
const sources = ["Please Select...", "LinkedIn", "Instagram", "Google search", "Email invitation", "Media partner", "Industry association", "Word of mouth"];

type FieldProps = {
  label: LocalizedValue;
  name: string;
  placeholder: string;
  required?: boolean;
  type?: string;
};

type SelectFieldProps = {
  label: LocalizedValue;
  name: string;
  options: string[];
  required?: boolean;
};

function RequiredMark() {
  return <span className="text-[#ff5d45]"> *</span>;
}

function Field({ label, name, placeholder, required, type = "text" }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-[8px] block text-[14px] font-semibold tracking-[-0.01em] text-[#fff4d3] md:text-[15px]">
        <LocalizedTextView value={label} />
        {required ? <RequiredMark /> : null}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-[48px] w-full rounded-[6px] border border-[#f3ad16]/28 bg-[#fff7e6]/[0.03] px-[14px] text-[14px] text-[#fff4d3] outline-none transition placeholder:text-[#9f8763] focus:border-[#f3ad16]/72 focus:bg-[#120c08]/70 focus:shadow-[0_0_28px_rgba(243,173,22,0.14)]"
      />
    </label>
  );
}

function SelectField({ label, name, options, required }: SelectFieldProps) {
  return (
    <label className="block">
      <span className="mb-[8px] block text-[14px] font-semibold tracking-[-0.01em] text-[#fff4d3] md:text-[15px]">
        <LocalizedTextView value={label} />
        {required ? <RequiredMark /> : null}
      </span>
      <select
        name={name}
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
    <form action={submitExhibitorLead} className="gold-line-frame rounded-[24px] bg-[#23130d]/82 p-[22px] shadow-[0_24px_74px_rgba(0,0,0,0.34)] md:p-[28px]">
      <h2 className="text-[34px] font-black uppercase leading-[1] text-[#fff4d3]"><LocalizedTextView value={tx("Demander la brochure exposant.", "Request exhibitor brochure.")} /></h2>
      <p className="mt-[12px] text-[15px] leading-[1.7] text-[#d9bb82]">
        <LocalizedTextView value={tx("Completez la demande de participation ci-dessous. Les champs marques d'un asterisque sont obligatoires.", "Complete the participation request below. Fields marked with an asterisk are required.")} />
      </p>

      <div className="mt-[26px]">
        <p className="mb-[8px] text-[14px] font-semibold text-[#fff4d3]"><LocalizedTextView value={tx("Civilite", "Salutation")} /></p>
        <div className="flex items-center gap-[14px] text-[13px] text-[#e4c78e]">
          <label className="flex items-center gap-[6px]">
            <input type="radio" name="salutation" value="Mr" className="h-[13px] w-[13px] accent-[#f3ad16]" />
            Mr
          </label>
          <label className="flex items-center gap-[6px]">
            <input type="radio" name="salutation" value="Mrs" className="h-[13px] w-[13px] accent-[#f3ad16]" />
            Mrs
          </label>
        </div>
      </div>

      <div className="mt-[26px] grid gap-x-[20px] gap-y-[19px] md:grid-cols-2">
        <div className="md:col-span-2">
          <Field label={tx("Nom et prenom", "Full name")} name="full_name" placeholder="Full Name" required />
        </div>
        <Field label={tx("Entreprise", "Company")} name="company" placeholder="Company" required />
        <Field label={tx("Email", "Email")} name="email" placeholder="Email" type="email" required />
        <Field label={tx("Poste occupe", "Job title")} name="job_title" placeholder="Job Title" required />
        <SelectField label={tx("Pays de l'entreprise", "Company country")} name="country" options={countries} required />
        <div className="md:col-span-2">
          <Field label={tx("Numero de telephone", "Mobile number")} name="phone" placeholder="Mobile: Ex +213561112233" required />
        </div>
        <StandSelector />
        <div className="md:col-span-2">
          <Field label={tx("Profil LinkedIn", "LinkedIn profile")} name="linkedin" placeholder="Linkedin Profile" />
        </div>
        <div className="md:col-span-2">
          <SelectField label={tx("Secteur d'activite", "Company sector")} name="sector" options={sectors} required />
        </div>
        <div className="md:col-span-2">
          <SelectField label={tx("Comment avez-vous entendu parler de notre evenement ?", "How did you hear about the event?")} name="source" options={sources} required />
        </div>
      </div>

      <button
        type="submit"
        className="mt-[20px] h-[48px] w-full rounded-[6px] bg-[#8a4d60] text-[12px] font-black uppercase tracking-[0.2em] text-[#fff7df] shadow-[0_0_34px_rgba(138,77,96,0.24)] transition duration-300 hover:bg-[#9b5a6e] focus:outline-none focus:ring-2 focus:ring-[#f3ad16]/60"
      >
        <LocalizedTextView value={tx("Envoyer", "Send")} />
      </button>
    </form>
  );
}
