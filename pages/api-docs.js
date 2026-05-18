// pages/api-docs.js
export default function ApiDocs() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-bold mb-4">Ziongigi API Documentation</h1>
      <p className="text-gray-600 mb-8">For developers – integrate your tools with our marketplace</p>
      <div className="space-y-8">
        <div className="bg-gray-50 p-6 rounded-xl"><h2 className="text-2xl font-semibold">Authentication</h2><p>All API requests require a Bearer token. Get your token from <code className="bg-gray-200 px-1">/api/auth/token</code> (coming soon).</p></div>
        <div className="bg-gray-50 p-6 rounded-xl"><h2 className="text-2xl font-semibold">Public Endpoints</h2><ul className="list-disc pl-6 space-y-2"><li><code>GET /api/products</code> – list approved products</li><li><code>GET /api/product/{id}</code> – single product details</li><li><code>GET /api/categories</code> – all categories</li></ul></div>
        <div className="bg-gray-50 p-6 rounded-xl"><h2 className="text-2xl font-semibold">Authenticated Endpoints</h2><ul className="list-disc pl-6 space-y-2"><li><code>POST /api/orders</code> – create order (requires payment)</li><li><code>GET /api/orders</code> – view own orders</li></ul></div>
        <div className="bg-gray-50 p-6 rounded-xl"><h2 className="text-2xl font-semibold">Example Request</h2><pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">curl -X GET https://api.ziongigi.com/v1/products -H "Authorization: Bearer YOUR_TOKEN"</pre></div>
      </div>
    </div>
  );
}