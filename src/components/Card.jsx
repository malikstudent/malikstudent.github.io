export default function Card({ children, className = '' }) {
  return (
    <div
      className={`rounded-[1.5rem] border border-slate-200 bg-white/80 p-5 shadow-soft backdrop-blur-sm sm:p-6 ${className}`.trim()}
    >
      {children}
    </div>
  )
}