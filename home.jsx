import React from 'react'


export default function Home({ profile }) {
    return (
        <section className="w-full py-16 flex flex-col items-center text-center bg-gradient-to-b from-blue-600 to-blue-800 dark:from-slate-800 dark:to-slate-900 text-white rounded-2xl shadow-lg mb-8">
           <h1 className="text-4xl font-bold mb-3 tracking-wide">
                Hi, I'm {profile?.name || "Nelsen William"}
</h1>
<p className="text-lg opacity-90 mb-4">{profile?.title || "Your Title"}</p>
<p className="max-w-xl opacity-80">
    {profile?.summary || "Welcome to my personal website built with React, Vite, Tailwind, and JSON Server."}
    </p>
</section>
    )
}
