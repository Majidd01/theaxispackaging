type EnquiryHoneypotProps = {
  value: string;
  onChange: (value: string) => void;
};

export function EnquiryHoneypot({ value, onChange }: EnquiryHoneypotProps) {
  return (
    <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
      <label htmlFor="companyWebsite">Company website</label>
      <input
        id="companyWebsite"
        name="companyWebsite"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}
