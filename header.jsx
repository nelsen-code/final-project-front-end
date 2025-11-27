import React from 'react'


export default function Header({ profile, loading }) {
return (
<header className="flex items-center justify-between">
<div>
<h1 className="text-3xl font-bold">{loading ? '...' : profile?.name || 'Nama Anda'}</h1>
<p className="text-sm text-slate-600">{profile?.title || 'Profession'}</p>
</div>
<div className="text-right">
<p className="text-sm">{profile?.location}</p>
<div className="mt-2 text-sm">
{profile?.email && <a className="mr-3 hover:underline" href={`mailto:${profile.email}`}>Email</a>}
{profile?.phone && <a className="hover:underline" href={`tel:${profile.phone}`}>Phone</a>}
</div>
</div>
</header>
)
}
