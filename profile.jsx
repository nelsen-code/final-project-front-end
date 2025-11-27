import React from 'react'


export default function Profile({ profile }) {
if (!profile) return null


return (
<section className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm">
<h2 className="text-xl font-semibold mb-2">Profile</h2>
<div className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
<div><span className="font-medium">Name:</span> {profile.name}</div>
<div><span className="font-medium">Title:</span> {profile.title}</div>
<div><span className="font-medium">Location:</span> {profile.location}</div>
<div><span className="font-medium">Email:</span> {profile.email}</div>
<div><span className="font-medium">Phone:</span> {profile.phone}</div>
{profile.socials && (
<div>
<span className="font-medium">GitHub:</span> {profile.socials.github}
</div>
)}
</div>
</section>
)
}
