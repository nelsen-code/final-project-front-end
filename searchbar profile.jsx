import React from 'react'


export default function SearchBar({ query, setQuery }) {
return (
<div className="w-full mb-6">
<input
type="text"
placeholder="Search anything..."
value={query}
onChange={(e) => setQuery(e.target.value)}
className="w-full px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
/>
</div>
)
}
