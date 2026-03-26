import React from 'react';

const SocialLinks = ({ className = "" }) => {
  const socialLinks = [
    { 
      name: 'facebook', 
      href: 'https://facebook.com/degreefyd',
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>, 
      color: 'text-[#1877F2]', 
      hoverBg: 'hover:bg-[#1877F2]' 
    },
    { 
      name: 'twitter', 
      href: 'https://x.com/degreefyd',
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>, 
      color: 'text-black', 
      hoverBg: 'hover:bg-black' 
    },
    { 
      name: 'linkedin', 
      href: 'https://linkedin.com/company/degreefyd',
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>, 
      color: 'text-[#0077b5]', 
      hoverBg: 'hover:bg-[#0077b5]' 
    },
    { 
      name: 'instagram', 
      href: 'https://instagram.com/degreefyd',
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m4.4 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m5.1-1.3a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z"/></svg>, 
      color: 'text-[#E4405F]', 
      hoverBg: 'hover:bg-[#E4405F]' 
    },
    { 
      name: 'youtube', 
      href: 'https://youtube.com/@degreefyd',
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21.8 8a2.7 2.7 0 0 0-1.9-1.9c-1.7-.5-8.4-.5-8.4-.5s-6.7 0-8.4.5A2.7 2.7 0 0 0 1.2 8c-.5 1.7-.5 5.2-.5 5.2s0 3.5.5 5.2c.3 1.1 1.1 2 2.2 2.2 1.7.5 8.4.5 8.4.5s6.7 0 8.4-.5c1.1-.3 2-1.1 2.2-2.2.5-1.7.5-5.2.5-5.2s0-3.5-.5-5.2m-12.3 8.3V9.7l5.4 3.3-5.4 3.3z"/></svg>, 
      color: 'text-[#FF0000]', 
      hoverBg: 'hover:bg-[#FF0000]' 
    }
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((social) => (
        <a 
          key={social.name} 
          href={social.href} 
          target="_blank"
          rel="noopener noreferrer"
          className={`w-11 h-11 flex items-center justify-center rounded-xl bg-white border border-slate-200 ${social.color} transition-all duration-300 hover:text-white hover:border-transparent hover:shadow-lg hover:-translate-y-1 ${social.hoverBg}`}
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
