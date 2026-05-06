export default function SectionHeader({ label, title, subtitle, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center mx-auto'
  return (
    <div className={`max-w-2xl mb-10 ${alignClass}`}>
      {label && (
        <span
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3 border"
          style={{
            backgroundColor: "#FFF4CC",
            color: "#A07C08",
            borderColor: "#E8C84A",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "#C8990A" }}
          ></span>
          {label}
        </span>
      )}
      <h2 className="font-display font-bold text-slate-800 text-3xl sm:text-4xl leading-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-500 text-base leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}