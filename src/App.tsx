import { useState } from 'react';
import { Home, FileText, DollarSign, LayoutGrid, Sparkles } from 'lucide-react';
import { FloorPlan } from './components/FloorPlan';
import { RoomDetail } from './components/RoomDetail';
import { roomsData } from './data/roomsData';

type Page = 'home' | 'floor-plan' | 'cost-analysis' | 'technical' | string;

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handlePrint = () => {
    window.print();
  };

  const navigateToRoom = (roomId: string) => {
    setCurrentPage(roomId);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
  };

  // If we're on a room detail page
  if (currentPage in roomsData) {
    return (
      <RoomDetail
        room={roomsData[currentPage as keyof typeof roomsData]}
        onBack={navigateToHome}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header with modern gradient */}
      <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-8 px-6 shadow-2xl sticky top-0 z-50 animate-gradientShift">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 animate-fadeIn">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Sparkles className="animate-pulse-custom" size={28} />
              <h1 className="mb-0">The Polynomial Residence</h1>
              <Sparkles className="animate-pulse-custom" size={28} />
            </div>
            <p className="mb-3 opacity-90 animate-fadeIn delay-100">Architectural Analysis & Cost Estimation</p>
            <div className="inline-block bg-white/20 px-6 py-3 rounded-xl backdrop-blur-md shadow-lg border border-white/30 animate-fadeIn delay-200">
              <p className="font-mono">Model Verification Basis: x = 2</p>
            </div>
          </div>

          {/* Navigation with modern buttons */}
          <nav className="flex flex-wrap justify-center gap-3 mt-6">
            <button
              onClick={() => setCurrentPage('home')}
              className={`btn-modern flex items-center gap-2 px-6 py-3 rounded-xl font-semibold shadow-lg transform transition-all duration-300 ${
                currentPage === 'home'
                  ? 'bg-white text-indigo-600 scale-105 shadow-2xl'
                  : 'bg-white/10 hover:bg-white/20 hover:scale-105 border border-white/20'
              }`}
            >
              <Home size={20} />
              <span>Home</span>
            </button>
            <button
              onClick={() => setCurrentPage('floor-plan')}
              className={`btn-modern flex items-center gap-2 px-6 py-3 rounded-xl font-semibold shadow-lg transform transition-all duration-300 ${
                currentPage === 'floor-plan'
                  ? 'bg-white text-purple-600 scale-105 shadow-2xl'
                  : 'bg-white/10 hover:bg-white/20 hover:scale-105 border border-white/20'
              }`}
            >
              <LayoutGrid size={20} />
              <span>Floor Plan</span>
            </button>
            <button
              onClick={() => setCurrentPage('technical')}
              className={`btn-modern flex items-center gap-2 px-6 py-3 rounded-xl font-semibold shadow-lg transform transition-all duration-300 ${
                currentPage === 'technical'
                  ? 'bg-white text-pink-600 scale-105 shadow-2xl'
                  : 'bg-white/10 hover:bg-white/20 hover:scale-105 border border-white/20'
              }`}
            >
              <FileText size={20} />
              <span>Technical Data</span>
            </button>
            <button
              onClick={() => setCurrentPage('cost-analysis')}
              className={`btn-modern flex items-center gap-2 px-6 py-3 rounded-xl font-semibold shadow-lg transform transition-all duration-300 ${
                currentPage === 'cost-analysis'
                  ? 'bg-white text-indigo-600 scale-105 shadow-2xl'
                  : 'bg-white/10 hover:bg-white/20 hover:scale-105 border border-white/20'
              }`}
            >
              <DollarSign size={20} />
              <span>Cost Analysis</span>
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Home Page */}
        {currentPage === 'home' && (
          <div className="space-y-12">
            {/* Hero Section */}
            <section className="bg-white rounded-2xl shadow-2xl p-8 border border-indigo-100 animate-fadeInUp">
              <div className="text-center mb-8">
                <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  Welcome to The Polynomial Residence
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Explore an innovative architectural project where mathematics meets design. 
                  Each room's dimensions are expressed as polynomial functions, demonstrating 
                  real-world applications of algebra in architectural planning and cost estimation.
                </p>
              </div>

              {/* Quick Stats with animations */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-2xl shadow-lg hover-lift animate-float">
                  <h3 className="text-white mb-2">Total Area</h3>
                  <p className="text-4xl text-white mb-2">1,260 sq ft</p>
                  <code className="text-sm text-blue-100 font-mono bg-white/20 px-3 py-1 rounded-lg">
                    128x³ + 32x² + 58x - 8
                  </code>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-6 rounded-2xl shadow-lg hover-lift animate-float delay-200">
                  <h3 className="text-white mb-2">Total Rooms</h3>
                  <p className="text-4xl text-white mb-2">7 Rooms</p>
                  <p className="text-sm text-purple-100">4 Bedrooms/Bathrooms + 3 Common Areas</p>
                </div>
                <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-6 rounded-2xl shadow-lg hover-lift animate-float delay-300">
                  <h3 className="text-white mb-2">Dimensions</h3>
                  <p className="text-4xl text-white mb-2">30ft × 42ft</p>
                  <code className="text-sm text-pink-100 font-mono bg-white/20 px-3 py-1 rounded-lg">
                    (16x - 2) by (8x² + 3x + 4)
                  </code>
                </div>
              </div>
            </section>

            {/* Room Cards Grid */}
            <section className="animate-fadeInUp delay-200">
              <h2 className="text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent pb-3">
                Explore Individual Rooms
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.values(roomsData).map((room, index) => (
                  <div
                    key={room.id}
                    className={`bg-white rounded-2xl shadow-xl overflow-hidden hover-lift cursor-pointer border border-indigo-100 animate-scaleIn delay-${index * 100}`}
                    onClick={() => navigateToRoom(room.id)}
                  >
                    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 animate-gradientShift">
                      <h3 className="text-white mb-0">{room.name}</h3>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-gray-600 mb-3">{room.dimensions}</p>
                      <div className="space-y-2">
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg border border-blue-100">
                          <p className="text-xs text-gray-500 mb-1">Area:</p>
                          <code className="text-xs font-mono text-indigo-700 block">
                            {room.areaPolynomial}
                          </code>
                        </div>
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg border border-purple-100">
                          <p className="text-xs text-gray-500 mb-1">Perimeter:</p>
                          <code className="text-xs font-mono text-purple-700 block">
                            {room.perimeterPolynomial}
                          </code>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-3">{room.verification}</p>
                      <button className="mt-4 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 btn-modern">
                        View Details →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Floor Plan Page */}
        {currentPage === 'floor-plan' && (
          <div className="space-y-8 animate-fadeInUp">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-indigo-100">
              <h2 className="text-center mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Interactive Floor Plan
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Click on any room to view detailed specifications and cost analysis
              </p>
              <FloorPlan onRoomClick={navigateToRoom} />
            </div>
          </div>
        )}

        {/* Technical Data Page */}
        {currentPage === 'technical' && (
          <div className="space-y-8 animate-fadeInUp">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-indigo-100">
              <h2 className="text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent pb-3">
                Technical Room Analysis
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left Column - Private Wing */}
                <div className="space-y-4 animate-slideInLeft">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 text-center rounded-xl shadow-lg">
                    <h3 className="mb-0">Private Wing</h3>
                  </div>

                  {['master-bedroom', 'master-bathroom', 'bathroom', 'bedroom-2'].map((roomId, index) => {
                    const room = roomsData[roomId as keyof typeof roomsData];
                    return (
                      <div key={roomId} className={`border-2 border-indigo-200 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover-lift animate-fadeIn delay-${index * 100}`}>
                        <h4 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3 pb-2 border-b border-indigo-200">
                          {room.name}
                        </h4>
                        <p className="mb-2"><strong>Dimensions:</strong> {room.dimensions}</p>
                        <p className="mb-2">
                          <strong>Area Polynomial:</strong>{' '}
                          <code className="bg-white px-3 py-1 text-indigo-700 font-mono text-sm rounded-lg border border-indigo-200">
                            {room.areaPolynomial}
                          </code>
                        </p>
                        <p className="mb-2">
                          <strong>Perimeter Polynomial:</strong>{' '}
                          <code className="bg-white px-3 py-1 text-purple-700 font-mono text-sm rounded-lg border border-purple-200">
                            {room.perimeterPolynomial}
                          </code>
                        </p>
                        <p className="text-sm text-gray-700">
                          <strong>Verification (x=2):</strong> {room.verification}
                        </p>
                        <button
                          onClick={() => navigateToRoom(roomId)}
                          className="mt-3 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm btn-modern"
                        >
                          View Full Details →
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* Right Column - Common Wing */}
                <div className="space-y-4 animate-slideInRight">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 text-center rounded-xl shadow-lg">
                    <h3 className="mb-0">Common Wing</h3>
                  </div>

                  {['kitchen', 'dining-room', 'living-room'].map((roomId, index) => {
                    const room = roomsData[roomId as keyof typeof roomsData];
                    return (
                      <div key={roomId} className={`border-2 border-purple-200 p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl hover-lift animate-fadeIn delay-${index * 100}`}>
                        <h4 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 pb-2 border-b border-purple-200">
                          {room.name}
                        </h4>
                        <p className="mb-2"><strong>Dimensions:</strong> {room.dimensions}</p>
                        <p className="mb-2">
                          <strong>Area Polynomial:</strong>{' '}
                          <code className="bg-white px-3 py-1 text-purple-700 font-mono text-sm rounded-lg border border-purple-200">
                            {room.areaPolynomial}
                          </code>
                        </p>
                        <p className="mb-2">
                          <strong>Perimeter Polynomial:</strong>{' '}
                          <code className="bg-white px-3 py-1 text-pink-700 font-mono text-sm rounded-lg border border-pink-200">
                            {room.perimeterPolynomial}
                          </code>
                        </p>
                        <p className="text-sm text-gray-700">
                          <strong>Verification (x=2):</strong> {room.verification}
                        </p>
                        <button
                          onClick={() => navigateToRoom(roomId)}
                          className="mt-3 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm btn-modern"
                        >
                          View Full Details →
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Total House Specifications */}
              <div className="mt-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-8 rounded-2xl shadow-2xl animate-floatSlow">
                <h2 className="text-center mb-6">Total House Specifications</h2>
                <div className="max-w-3xl mx-auto space-y-3">
                  <p className="flex justify-between items-center border-b border-white/30 pb-2">
                    <span>Overall Dimensions:</span>
                    <span className="font-mono">(16x - 2) by (8x² + 3x + 4)</span>
                  </p>
                  <p className="flex justify-between items-center border-b border-white/30 pb-2">
                    <span>Total Area Polynomial:</span>
                    <code className="bg-white/20 px-3 py-1 rounded-lg text-yellow-200 font-mono">
                      128x³ + 32x² + 58x - 8
                    </code>
                  </p>
                  <p className="flex justify-between items-center border-b border-white/30 pb-2">
                    <span>Total Perimeter Polynomial:</span>
                    <code className="bg-white/20 px-3 py-1 rounded-lg text-yellow-200 font-mono">
                      16x² + 38x + 4
                    </code>
                  </p>
                  <p className="flex justify-between items-center pt-2">
                    <span>Verification:</span>
                    <span className="font-mono">30ft Width x 42ft Length = 1,260 sq ft Total Area</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Cost Analysis Page */}
        {currentPage === 'cost-analysis' && (
          <div className="space-y-8 animate-fadeInUp">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-indigo-100">
              <h2 className="text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent pb-3">
                Cost Analysis Invoice
              </h2>
              
              <div className="max-w-2xl mx-auto bg-gradient-to-br from-gray-50 to-white border-4 border-indigo-200 p-8 shadow-2xl font-mono rounded-2xl animate-scaleIn">
                <div className="text-center mb-6 pb-4 border-b-2 border-dashed border-indigo-300">
                  <p className="text-sm">THE POLYNOMIAL RESIDENCE</p>
                  <p className="text-sm">Official Cost Estimate</p>
                  <p className="text-xs text-gray-600 mt-1">Date: November 25, 2025</p>
                </div>

                {/* Item A */}
                <div className="mb-6 pb-4 border-b border-indigo-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl">
                  <h3 className="mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    ITEM A: Living Room (Carpet + Crown Molding)
                  </h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Area: 176 sq ft | Perimeter: 54 ft</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Carpet Material ($2.49/sq ft):</span>
                      <span>$438.24</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Crown Molding ($5.49/ft):</span>
                      <span>$296.46</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Installation Fee:</span>
                      <span>$250.00</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-indigo-200">
                      <span>Subtotal:</span>
                      <span>$984.70</span>
                    </div>
                  </div>
                </div>

                {/* Item B */}
                <div className="mb-6 pb-4 border-b border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl">
                  <h3 className="mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    ITEM B: Master Bedroom (Carpet Only)
                  </h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Area: 196 sq ft</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Carpet Material ($2.49/sq ft):</span>
                      <span>$488.04</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-purple-200">
                      <span>Subtotal:</span>
                      <span>$488.04</span>
                    </div>
                  </div>
                </div>

                {/* Grand Total */}
                <div className="mt-6 pt-4 border-t-4 border-double border-indigo-400 bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-xl">
                  <div className="flex justify-between items-center">
                    <span className="text-xl">GRAND TOTAL:</span>
                    <span className="text-3xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      $1,472.74
                    </span>
                  </div>
                </div>

                <div className="mt-6 text-center text-xs text-gray-500">
                  <p>Thank you for your business!</p>
                  <p>All measurements verified at x = 2</p>
                </div>
              </div>

              {/* Room Cost Breakdown */}
              <div className="mt-12 max-w-4xl mx-auto">
                <h3 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 text-center">
                  Detailed Room Cost Breakdown
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-2xl shadow-xl cursor-pointer hover-lift text-white animate-float"
                       onClick={() => navigateToRoom('living-room')}>
                    <h4 className="text-white mb-3">Living Room</h4>
                    <p className="text-4xl mb-2">$984.70</p>
                    <p className="text-sm text-blue-100 mb-3">Carpet, molding & installation</p>
                    <button className="text-sm text-white hover:underline bg-white/20 px-4 py-2 rounded-lg">
                      View Full Details →
                    </button>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-6 rounded-2xl shadow-xl cursor-pointer hover-lift text-white animate-float delay-200"
                       onClick={() => navigateToRoom('master-bedroom')}>
                    <h4 className="text-white mb-3">Master Bedroom</h4>
                    <p className="text-4xl mb-2">$488.04</p>
                    <p className="text-sm text-purple-100 mb-3">Carpet material only</p>
                    <button className="text-sm text-white hover:underline bg-white/20 px-4 py-2 rounded-lg">
                      View Full Details →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Print Button */}
        <div className="text-center py-12 animate-fadeIn">
          <button
            onClick={handlePrint}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 btn-modern"
          >
            🖨️ Print Official Report
          </button>
        </div>
      </main>

      <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-center py-8 mt-12 animate-gradientShift">
        <p className="mb-2">© 2025 The Polynomial Residence | Educational Mathematics Project</p>
        <p className="text-sm opacity-90">Demonstrating Real-World Applications of Algebra in Architecture</p>
      </footer>

      {/* Print-specific styles */}
      <style>{`
        @media print {
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          button {
            display: none;
          }
          nav {
            display: none;
          }
          @page {
            margin: 0.5in;
          }
        }
      `}</style>
    </div>
  );
}
