import Link from 'next/link';        // <-- THIS MUST BE FIRST
import ProtectedRoute from '../../components/ProtectedRoute';
import { useState } from 'react';

export default function MarketingTools() {
  const [copied, setCopied] = useState('');
  const copy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <ProtectedRoute allowedRoles={['affiliate']}>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Affiliate Marketing Tools</h1>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold">Email Swipe Copy</h2>
            <textarea
              rows="4"
              className="input w-full font-mono text-sm"
              readOnly
              value="Hi friends, I just discovered Ziongigi – a marketplace for digital products. Check it out: {{your_affiliate_link}}"
            />
            <button onClick={() => copy('Hi friends...', 'email')} className="mt-2 btn-secondary">Copy</button>
            {copied === 'email' && <span className="ml-2 text-green-600">Copied!</span>}
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold">Banners (300x250)</h2>
            <div className="bg-indigo-600 text-white p-8 text-center rounded">Ziongigi – Earn 20% Commission</div>
            <code className="block mt-2 text-sm bg-gray-100 p-2 rounded">&lt;img src="https://ziongigi.com/banner.jpg" /&gt;</code>
            <button onClick={() => copy('<img src="https://ziongigi.com/banner.jpg" />', 'banner')} className="mt-2 btn-secondary">Copy HTML</button>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold">Social Media Templates</h2>
            <p className="mb-2">Post this: "I earn 20% commission by sharing digital products on @Ziongigi. Join free: {{link}}"</p>
            <button onClick={() => copy('I earn 20% commission...', 'social')} className="btn-secondary">Copy Text</button>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
