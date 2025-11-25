import { ArrowLeft, Ruler, SquareEqual, Calculator, CheckCircle2, Info } from 'lucide-react';

interface RoomData {
  id: string;
  name: string;
  dimensions: string;
  areaPolynomial: string;
  perimeterPolynomial: string;
  verification: string;
  description: string;
  features: string[];
  costBreakdown?: {
    carpet?: { area: number; rate: number; total: number };
    molding?: { perimeter: number; rate: number; total: number };
    installation?: number;
    total: number;
  };
}

interface RoomDetailProps {
  room: RoomData;
  onBack: () => void;
}

export function RoomDetail({ room, onBack }: RoomDetailProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 animate-fadeIn">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-6 px-6 shadow-2xl animate-gradientShift">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={onBack}
            className="btn-modern flex items-center gap-2 mb-4 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl border border-white/20 transform hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
          <h1 className="mb-2 animate-fadeIn">{room.name}</h1>
          <p className="opacity-90 animate-fadeIn delay-100">Detailed Room Analysis & Specifications</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Dimensions Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-blue-500 hover-lift animate-slideInLeft">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-lg animate-float">
                <Ruler className="text-white" size={24} />
              </div>
              <h2 className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Dimensions</h2>
            </div>
            <p className="font-mono bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border-2 border-blue-200">
              {room.dimensions}
            </p>
            <div className="mt-4 flex items-start gap-2 text-sm text-gray-600">
              <CheckCircle2 size={16} className="mt-0.5 text-green-600 animate-pulse-custom" />
              <span>{room.verification}</span>
            </div>
          </div>

          {/* Area Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-red-500 hover-lift animate-slideInRight">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-red-400 to-red-600 rounded-xl shadow-lg animate-float delay-100">
                <SquareEqual className="text-white" size={24} />
              </div>
              <h2 className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Area Polynomial</h2>
            </div>
            <code className="block bg-gradient-to-r from-red-50 to-pink-50 text-red-700 p-4 rounded-xl border-2 border-red-200 font-mono">
              {room.areaPolynomial}
            </code>
            <div className="mt-4 text-sm text-gray-600">
              <p>Calculated by multiplying length × width expressions</p>
            </div>
          </div>

          {/* Perimeter Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-green-500 hover-lift animate-slideInLeft delay-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-green-400 to-green-600 rounded-xl shadow-lg animate-float delay-200">
                <Calculator className="text-white" size={24} />
              </div>
              <h2 className="bg-gradient-to-r from-green-600 to-indigo-600 bg-clip-text text-transparent">Perimeter Polynomial</h2>
            </div>
            <code className="block bg-gradient-to-r from-green-50 to-indigo-50 text-green-700 p-4 rounded-xl border-2 border-green-200 font-mono">
              {room.perimeterPolynomial}
            </code>
            <div className="mt-4 text-sm text-gray-600">
              <p>Calculated by 2(length + width)</p>
            </div>
          </div>

          {/* Description Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-purple-500 hover-lift animate-slideInRight delay-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl shadow-lg animate-float delay-300">
                <Info className="text-white" size={24} />
              </div>
              <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Room Description</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">{room.description}</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 hover-lift animate-slideInLeft delay-200">
          <h2 className="text-[#2c3e50] mb-4 pb-3 border-b-2 border-gray-200">Room Features</h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {room.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2 size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cost Breakdown (if available) */}
        {room.costBreakdown && (
          <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-[#2c3e50] hover-lift animate-slideInRight delay-200">
            <h2 className="text-[#2c3e50] mb-6 pb-3 border-b-2 border-[#2c3e50]">
              Cost Analysis
            </h2>
            <div className="font-mono space-y-4">
              {room.costBreakdown.carpet && (
                <div className="bg-gray-50 p-4 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Carpet Material</span>
                    <span className="text-gray-600 text-sm">
                      {room.costBreakdown.carpet.area} sq ft × ${room.costBreakdown.carpet.rate}/sq ft
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Subtotal</span>
                    <span className="text-lg">${room.costBreakdown.carpet.total.toFixed(2)}</span>
                  </div>
                </div>
              )}

              {room.costBreakdown.molding && (
                <div className="bg-gray-50 p-4 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Crown Molding</span>
                    <span className="text-gray-600 text-sm">
                      {room.costBreakdown.molding.perimeter} ft × ${room.costBreakdown.molding.rate}/ft
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Subtotal</span>
                    <span className="text-lg">${room.costBreakdown.molding.total.toFixed(2)}</span>
                  </div>
                </div>
              )}

              {room.costBreakdown.installation && (
                <div className="bg-gray-50 p-4 rounded">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Installation Fee</span>
                    <span className="text-lg">${room.costBreakdown.installation.toFixed(2)}</span>
                  </div>
                </div>
              )}

              <div className="border-t-4 border-double border-[#2c3e50] pt-4 mt-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl text-[#2c3e50]">Total Cost:</span>
                  <span className="text-2xl text-[#2c3e50]">
                    ${room.costBreakdown.total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mathematical Work Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-lg p-6 mt-8 border border-blue-200">
          <h2 className="text-[#2c3e50] mb-4">Mathematical Verification (x = 2)</h2>
          <div className="space-y-3 font-mono text-sm">
            <div className="bg-white p-3 rounded border border-blue-100">
              <p className="text-gray-600 mb-1">Dimensions:</p>
              <p className="text-gray-800">{room.dimensions}</p>
            </div>
            <div className="bg-white p-3 rounded border border-blue-100">
              <p className="text-gray-600 mb-1">Area Calculation:</p>
              <code className="text-[#c0392b]">{room.areaPolynomial}</code>
            </div>
            <div className="bg-white p-3 rounded border border-blue-100">
              <p className="text-gray-600 mb-1">Perimeter Calculation:</p>
              <code className="text-green-700">{room.perimeterPolynomial}</code>
            </div>
            <div className="bg-green-100 p-3 rounded border-2 border-green-300">
              <p className="text-gray-700">
                <CheckCircle2 size={16} className="inline mr-2 text-green-600" />
                <strong>Verified Result:</strong> {room.verification}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}