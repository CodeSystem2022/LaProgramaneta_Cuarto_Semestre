

export function Button({children}) {
  return (
    <button className="relative inline-flex items-center gap-1.5 rounded-md bg-blue-500 px-3 py-3 text-sm font-serif
     text-white shadow-sm hover:border-blue-400 focus-visible:outline focus-visible:outline-2
      focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:opacity-50 disabled:cursor-not-allowed">{children}</button>
  )
}

export default Button