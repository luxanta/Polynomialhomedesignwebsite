import { useState } from 'react';
import { Home, FileText, DollarSign, LayoutGrid } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-[#2c3e50] text-white py-8 px-6 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h1 className="mb-2">The Polynomial Residence</h1>
            <p className="mb-3 opacity-90">Architectural Analysis & Cost Estimation</p>
            <div className="inline-block bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              <p className="font-mono">Model Verification Basis: x = 2</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-3 mt-6">
            <button
              onClick={() => setCurrentPage('home')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                currentPage === 'home'
                  ? 'bg-white text-[#2c3e50]'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              <Home size={18} />
              <span>Home</span>
            </button>
            <button
              onClick={() => setCurrentPage('floor-plan')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                currentPage === 'floor-plan'
                  ? 'bg-white text-[#2c3e50]'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              <LayoutGrid size={18} />
              <span>Floor Plan</span>
            </button>
            <button
              onClick={() => setCurrentPage('technical')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                currentPage === 'technical'
                  ? 'bg-white text-[#2c3e50]'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              <FileText size={18} />
              <span>Technical Data</span>
            </button>
            <button
              onClick={() => setCurrentPage('cost-analysis')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                currentPage === 'cost-analysis'
                  ? 'bg-white text-[#2c3e50]'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              <DollarSign size={18} />
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
            <section className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-[#2c3e50]">
              <div className="text-center mb-8">
                <h2 className="text-[#2c3e50] mb-4">Welcome to The Polynomial Residence</h2>
                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Explore an innovative architectural project where mathematics meets design. 
                  Each room's dimensions are expressed as polynomial functions, demonstrating 
                  real-world applications of algebra in architectural planning and cost estimation.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-[#2c3e50] mb-2">Total Area</h3>
                  <p className="text-3xl mb-2">1,260 sq ft</p>
                  <code className="text-sm text-[#c0392b] font-mono">128x³ + 32x² + 58x - 8</code>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                  <h3 className="text-[#2c3e50] mb-2">Total Rooms</h3>
                  <p className="text-3xl mb-2">7 Rooms</p>
                  <p className="text-sm text-gray-600">4 Bedrooms/Bathrooms + 3 Common Areas</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                  <h3 className="text-[#2c3e50] mb-2">Dimensions</h3>
                  <p className="text-3xl mb-2">30ft × 42ft</p>
                  <code className="text-sm text-[#c0392b] font-mono">(16x - 2) by (8x² + 3x + 4)</code>
                </div>
              </div>
            </section>

            {/* Room Cards Grid */}
            <section>
              <h2 className="text-center mb-8 text-[#2c3e50] pb-3 border-b-2 border-[#2c3e50]">
                Explore Individual Rooms
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.values(roomsData).map((room) => (
                  <div
                    key={room.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                    onClick={() => navigateToRoom(room.id)}
                  >
                    <div className="bg-gradient-to-r from-[#2c3e50] to-[#34495e] p-4">
                      <h3 className="text-white">{room.name}</h3>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-gray-600 mb-3">{room.dimensions}</p>
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Area:</p>
                          <code className="text-xs bg-gray-100 px-2 py-1 rounded text-[#c0392b] font-mono block">
                            {room.areaPolynomial}
                          </code>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Perimeter:</p>
                          <code className="text-xs bg-gray-100 px-2 py-1 rounded text-green-700 font-mono block">
                            {room.perimeterPolynomial}
                          </code>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-3">{room.verification}</p>
                      <button className="mt-4 w-full bg-[#2c3e50] text-white py-2 rounded hover:bg-[#34495e] transition-colors">
                        View Details
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
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-center mb-6 text-[#2c3e50]">Interactive Floor Plan</h2>
              <p className="text-center text-gray-600 mb-8">
                Click on any room to view detailed specifications and cost analysis
              </p>
              <FloorPlan onRoomClick={navigateToRoom} />
            </div>
          </div>
        )}

        {/* Technical Data Page */}
        {currentPage === 'technical' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-center mb-8 text-[#2c3e50] border-b-2 border-[#2c3e50] pb-3">
                Technical Room Analysis
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left Column - Private Wing */}
                <div className="space-y-4">
                  <div className="bg-[#2c3e50] text-white p-3 text-center rounded-t-lg">
                    <h3>Private Wing</h3>
                  </div>

                  {['master-bedroom', 'master-bathroom', 'bathroom', 'bedroom-2'].map((roomId) => {
                    const room = roomsData[roomId as keyof typeof roomsData];
                    return (
                      <div key={roomId} className="border-2 border-[#2c3e50] p-5 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                        <h4 className="text-[#2c3e50] mb-3 pb-2 border-b border-gray-300">{room.name}</h4>
                        <p className="mb-2"><strong>Dimensions:</strong> {room.dimensions}</p>
                        <p className="mb-2">
                          <strong>Area Polynomial:</strong>{' '}
                          <code className="bg-gray-200 px-2 py-1 text-[#c0392b] font-mono text-sm">
                            {room.areaPolynomial}
                          </code>
                        </p>
                        <p className="mb-2">
                          <strong>Perimeter Polynomial:</strong>{' '}
                          <code className="bg-gray-200 px-2 py-1 text-green-700 font-mono text-sm">
                            {room.perimeterPolynomial}
                          </code>
                        </p>
                        <p className="text-sm text-gray-700">
                          <strong>Verification (x=2):</strong> {room.verification}
                        </p>
                        <button
                          onClick={() => navigateToRoom(roomId)}
                          className="mt-3 w-full bg-[#2c3e50] text-white py-2 rounded hover:bg-[#34495e] transition-colors text-sm"
                        >
                          View Full Details
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* Right Column - Common Wing */}
                <div className="space-y-4">
                  <div className="bg-[#2c3e50] text-white p-3 text-center rounded-t-lg">
                    <h3>Common Wing</h3>
                  </div>

                  {['kitchen', 'dining-room', 'living-room'].map((roomId) => {
                    const room = roomsData[roomId as keyof typeof roomsData];
                    return (
                      <div key={roomId} className="border-2 border-[#2c3e50] p-5 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                        <h4 className="text-[#2c3e50] mb-3 pb-2 border-b border-gray-300">{room.name}</h4>
                        <p className="mb-2"><strong>Dimensions:</strong> {room.dimensions}</p>
                        <p className="mb-2">
                          <strong>Area Polynomial:</strong>{' '}
                          <code className="bg-gray-200 px-2 py-1 text-[#c0392b] font-mono text-sm">
                            {room.areaPolynomial}
                          </code>
                        </p>
                        <p className="mb-2">
                          <strong>Perimeter Polynomial:</strong>{' '}
                          <code className="bg-gray-200 px-2 py-1 text-green-700 font-mono text-sm">
                            {room.perimeterPolynomial}
                          </code>
                        </p>
                        <p className="text-sm text-gray-700">
                          <strong>Verification (x=2):</strong> {room.verification}
                        </p>
                        <button
                          onClick={() => navigateToRoom(roomId)}
                          className="mt-3 w-full bg-[#2c3e50] text-white py-2 rounded hover:bg-[#34495e] transition-colors text-sm"
                        >
                          View Full Details
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Total House Specifications */}
              <div className="mt-12 bg-[#2c3e50] text-white p-8 border-4 border-double border-[#2c3e50] rounded-lg">
                <h2 className="text-center mb-6">Total House Specifications</h2>
                <div className="max-w-3xl mx-auto space-y-3">
                  <p className="flex justify-between items-center border-b border-white/30 pb-2">
                    <span>Overall Dimensions:</span>
                    <span className="font-mono">(16x - 2) by (8x² + 3x + 4)</span>
                  </p>
                  <p className="flex justify-between items-center border-b border-white/30 pb-2">
                    <span>Total Area Polynomial:</span>
                    <code className="bg-white/20 px-3 py-1 rounded text-yellow-300 font-mono">
                      128x³ + 32x² + 58x - 8
                    </code>
                  </p>
                  <p className="flex justify-between items-center border-b border-white/30 pb-2">
                    <span>Total Perimeter Polynomial:</span>
                    <code className="bg-white/20 px-3 py-1 rounded text-yellow-300 font-mono">
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
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-center mb-8 text-[#2c3e50] border-b-2 border-[#2c3e50] pb-3">
                Cost Analysis Invoice
              </h2>
              
              <div className="max-w-2xl mx-auto bg-white border-4 border-[#2c3e50] p-8 shadow-lg font-mono">
                <div className="text-center mb-6 pb-4 border-b-2 border-dashed border-gray-400">
                  <p className="text-sm">THE POLYNOMIAL RESIDENCE</p>
                  <p className="text-sm">Official Cost Estimate</p>
                  <p className="text-xs text-gray-600 mt-1">Date: November 23, 2025</p>
                </div>

                {/* Item A */}
                <div className="mb-6 pb-4 border-b border-gray-300">
                  <h3 className="mb-3 text-[#2c3e50]">ITEM A: Living Room (Carpet + Crown Molding)</h3>
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
                    <div className="flex justify-between pt-2 border-t border-gray-200">
                      <span>Subtotal:</span>
                      <span>$984.70</span>
                    </div>
                  </div>
                </div>

                {/* Item B */}
                <div className="mb-6 pb-4 border-b border-gray-300">
                  <h3 className="mb-3 text-[#2c3e50]">ITEM B: Master Bedroom (Carpet Only)</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Area: 196 sq ft</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Carpet Material ($2.49/sq ft):</span>
                      <span>$488.04</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-gray-200">
                      <span>Subtotal:</span>
                      <span>$488.04</span>
                    </div>
                  </div>
                </div>

                {/* Grand Total */}
                <div className="mt-6 pt-4 border-t-4 border-double border-[#2c3e50]">
                  <div className="flex justify-between items-center">
                    <span className="text-xl">GRAND TOTAL:</span>
                    <span className="text-2xl text-[#2c3e50]">$1,472.74</span>
                  </div>
                </div>

                <div className="mt-6 text-center text-xs text-gray-500">
                  <p>Thank you for your business!</p>
                  <p>All measurements verified at x = 2</p>
                </div>
              </div>

              {/* Room Cost Breakdown */}
              <div className="mt-12 max-w-4xl mx-auto">
                <h3 className="text-[#2c3e50] mb-6 text-center">Detailed Room Cost Breakdown</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow"
                       onClick={() => navigateToRoom('living-room')}>
                    <h4 className="text-[#2c3e50] mb-3">Living Room</h4>
                    <p className="text-2xl mb-2">$984.70</p>
                    <p className="text-sm text-gray-600 mb-3">Carpet, molding & installation</p>
                    <button className="text-sm text-blue-700 hover:underline">View Full Details →</button>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-2 border-purple-300 cursor-pointer hover:shadow-lg transition-shadow"
                       onClick={() => navigateToRoom('master-bedroom')}>
                    <h4 className="text-[#2c3e50] mb-3">Master Bedroom</h4>
                    <p className="text-2xl mb-2">$488.04</p>
                    <p className="text-sm text-gray-600 mb-3">Carpet material only</p>
                    <button className="text-sm text-purple-700 hover:underline">View Full Details →</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Print Button */}
        <div className="text-center py-12">
          <button
            onClick={handlePrint}
            className="bg-[#2c3e50] text-white px-8 py-3 rounded-lg border-2 border-[#2c3e50] hover:bg-white hover:text-[#2c3e50] transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Print Official Report
          </button>
        </div>
      </main>

      <footer className="bg-[#2c3e50] text-white text-center py-6 mt-12">
        <p className="mb-2">© 2025 The Polynomial Residence | Educational Mathematics Project</p>
        <p className="text-sm opacity-75">Demonstrating Real-World Applications of Algebra in Architecture</p>
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