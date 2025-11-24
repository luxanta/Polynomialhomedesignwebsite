import { useState } from 'react';

interface FloorPlanProps {
  onRoomClick: (roomId: string) => void;
}

export function FloorPlan({ onRoomClick }: FloorPlanProps) {
  const [hoveredRoom, setHoveredRoom] = useState<string | null>(null);

  // Scale factor for the drawing (pixels per foot)
  const scale = 15;
  
  // Calculated dimensions at x = 2
  const hallwayWidth = 5; // 3x - 1 = 5 ft
  
  // Left side rooms (top to bottom)
  const masterBedroom = { width: 14, height: 14, x: 0, y: 0 }; // 7x by (5x + 4)
  const masterBathroom = { width: 14, height: 9, x: 0, y: 14 }; // (9x - 4) by (3x + 3)
  const bathroom = { width: 10, height: 5, x: 0, y: 23 }; // (4x + 2) by (2x + 1)
  const bedroom2 = { width: 14, height: 14, x: 0, y: 28 }; // (8x - 2) by (6x + 2)
  
  // Right side rooms (top to bottom)
  const kitchen = { width: 11, height: 14, x: 19, y: 0 }; // (2x² + 2x - 1) by (3x + 8)
  const diningRoom = { width: 11, height: 12, x: 19, y: 14 }; // (3x² + 2x - 5) by 6x - adjusted width to fit
  const livingRoom = { width: 11, height: 16, x: 19, y: 26 }; // (4x + 3) by (2x² + 3x + 2)
  
  // Overall house dimensions
  const houseWidth = 30; // 16x - 2 = 30 ft
  const houseHeight = 42; // 8x² + 3x + 4 = 42 ft

  const rooms = [
    { 
      id: 'master-bedroom', 
      name: 'Master Bedroom', 
      ...masterBedroom,
      dims: '7x by (5x + 4)',
      verified: '14 ft × 14 ft',
      area: '35x² + 28x',
      perimeter: '24x + 8'
    },
    { 
      id: 'master-bathroom', 
      name: 'Master Bathroom', 
      ...masterBathroom,
      dims: '(9x - 4) by (3x + 3)',
      verified: '14 ft × 9 ft',
      area: '27x² + 15x - 12',
      perimeter: '24x - 2'
    },
    { 
      id: 'bathroom', 
      name: 'Bathroom', 
      ...bathroom,
      dims: '(4x + 2) by (2x + 1)',
      verified: '10 ft × 5 ft',
      area: '8x² + 8x + 2',
      perimeter: '12x + 6'
    },
    { 
      id: 'bedroom-2', 
      name: 'Bedroom 2', 
      ...bedroom2,
      dims: '(8x - 2) by (6x + 2)',
      verified: '14 ft × 14 ft',
      area: '48x² + 4x - 4',
      perimeter: '28x'
    },
    { 
      id: 'kitchen', 
      name: 'Kitchen', 
      ...kitchen,
      dims: '(2x² + 2x - 1) by (3x + 8)',
      verified: '11 ft × 14 ft',
      area: '6x³ + 22x² + 13x - 8',
      perimeter: '4x² + 10x + 14'
    },
    { 
      id: 'dining-room', 
      name: 'Dining Room', 
      ...diningRoom,
      dims: '(3x² + 2x - 5) by 6x',
      verified: '11 ft × 12 ft',
      area: '18x³ + 12x² - 30x',
      perimeter: '6x² + 16x - 10'
    },
    { 
      id: 'living-room', 
      name: 'Living Room', 
      ...livingRoom,
      dims: '(4x + 3) by (2x² + 3x + 2)',
      verified: '11 ft × 16 ft',
      area: '8x³ + 18x² + 17x + 6',
      perimeter: '4x² + 14x + 10'
    }
  ];

  const viewWidth = houseWidth * scale + 200;
  const viewHeight = houseHeight * scale + 180;
  const offsetX = 80;
  const offsetY = 60;

  return (
    <div className="w-full flex justify-center items-center p-8">
      <div className="bg-white p-8 rounded-lg shadow-2xl border-4 border-[#2c3e50]">
        <svg
          viewBox={`0 0 ${viewWidth} ${viewHeight}`}
          className="max-w-full h-auto"
          style={{ maxWidth: '1200px', background: 'repeating-linear-gradient(0deg, #f0f0f0 0px, #f0f0f0 1px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, #f0f0f0 0px, #f0f0f0 1px, transparent 1px, transparent 20px)' }}
        >
          {/* Title */}
          <text 
            x={viewWidth / 2} 
            y="30" 
            textAnchor="middle" 
            className="fill-[#2c3e50]"
            fontSize="24"
            fontWeight="bold"
            fontFamily="Arial, sans-serif"
          >
            THE POLYNOMIAL RESIDENCE
          </text>
          <text 
            x={viewWidth / 2} 
            y="50" 
            textAnchor="middle" 
            className="fill-gray-600"
            fontSize="14"
            fontFamily="Arial, sans-serif"
          >
            Architectural Schematic Blueprint | Verification Basis: x = 2
          </text>

          {/* Overall house dimensions - Top */}
          <line 
            x1={offsetX} 
            y1={offsetY - 20} 
            x2={offsetX + houseWidth * scale} 
            y2={offsetY - 20} 
            stroke="#c0392b" 
            strokeWidth="2"
            markerStart="url(#arrowLeft)"
            markerEnd="url(#arrowRight)"
          />
          <text 
            x={offsetX + (houseWidth * scale) / 2} 
            y={offsetY - 25} 
            textAnchor="middle" 
            className="fill-[#c0392b]"
            fontSize="11"
            fontWeight="bold"
            fontFamily="monospace"
          >
            16x - 2 = 30 ft
          </text>

          {/* Overall house dimensions - Left */}
          <line 
            x1={offsetX - 20} 
            y1={offsetY} 
            x2={offsetX - 20} 
            y2={offsetY + houseHeight * scale} 
            stroke="#c0392b" 
            strokeWidth="2"
            markerStart="url(#arrowUp)"
            markerEnd="url(#arrowDown)"
          />
          <text 
            x={offsetX - 30} 
            y={offsetY + (houseHeight * scale) / 2} 
            textAnchor="middle" 
            className="fill-[#c0392b]"
            fontSize="11"
            fontWeight="bold"
            fontFamily="monospace"
            transform={`rotate(-90 ${offsetX - 30} ${offsetY + (houseHeight * scale) / 2})`}
          >
            8x² + 3x + 4 = 42 ft
          </text>

          {/* Arrow markers */}
          <defs>
            <marker id="arrowRight" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="#c0392b" />
            </marker>
            <marker id="arrowLeft" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M9,0 L9,6 L0,3 z" fill="#c0392b" />
            </marker>
            <marker id="arrowUp" markerWidth="10" markerHeight="10" refX="3" refY="0" orient="auto" markerUnits="strokeWidth">
              <path d="M0,9 L6,9 L3,0 z" fill="#c0392b" />
            </marker>
            <marker id="arrowDown" markerWidth="10" markerHeight="10" refX="3" refY="9" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L6,0 L3,9 z" fill="#c0392b" />
            </marker>
          </defs>

          {/* House outline */}
          <rect
            x={offsetX}
            y={offsetY}
            width={houseWidth * scale}
            height={houseHeight * scale}
            fill="none"
            stroke="#2c3e50"
            strokeWidth="4"
          />

          {/* Hallway */}
          <rect
            x={offsetX + 14 * scale}
            y={offsetY}
            width={hallwayWidth * scale}
            height={houseHeight * scale}
            fill="#e8e8e8"
            stroke="#2c3e50"
            strokeWidth="2"
            strokeDasharray="5,3"
          />
          <text
            x={offsetX + 14 * scale + (hallwayWidth * scale) / 2}
            y={offsetY + (houseHeight * scale) / 2}
            textAnchor="middle"
            className="fill-gray-600"
            fontSize="9"
            fontFamily="Arial, sans-serif"
            transform={`rotate(-90 ${offsetX + 14 * scale + (hallwayWidth * scale) / 2} ${offsetY + (houseHeight * scale) / 2})`}
          >
            HALLWAY (3x - 1 = 5 ft)
          </text>

          {/* Draw all rooms */}
          {rooms.map((room) => (
            <g key={room.id}>
              {/* Room rectangle */}
              <rect
                x={offsetX + room.x * scale}
                y={offsetY + room.y * scale}
                width={room.width * scale}
                height={room.height * scale}
                fill={hoveredRoom === room.id ? '#2c3e50' : '#ffffff'}
                stroke="#2c3e50"
                strokeWidth="3"
                className="cursor-pointer transition-all duration-200"
                onMouseEnter={() => setHoveredRoom(room.id)}
                onMouseLeave={() => setHoveredRoom(null)}
                onClick={() => onRoomClick(room.id)}
              />
              
              {/* Room name */}
              <text
                x={offsetX + room.x * scale + (room.width * scale) / 2}
                y={offsetY + room.y * scale + (room.height * scale) / 2 - 15}
                textAnchor="middle"
                className={hoveredRoom === room.id ? 'fill-white' : 'fill-[#2c3e50]'}
                fontSize="12"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
                pointerEvents="none"
              >
                {room.name}
              </text>

              {/* Polynomial dimensions */}
              <text
                x={offsetX + room.x * scale + (room.width * scale) / 2}
                y={offsetY + room.y * scale + (room.height * scale) / 2}
                textAnchor="middle"
                className={hoveredRoom === room.id ? 'fill-white' : 'fill-[#c0392b]'}
                fontSize="9"
                fontFamily="monospace"
                pointerEvents="none"
              >
                {room.dims}
              </text>

              {/* Verified dimensions */}
              <text
                x={offsetX + room.x * scale + (room.width * scale) / 2}
                y={offsetY + room.y * scale + (room.height * scale) / 2 + 12}
                textAnchor="middle"
                className={hoveredRoom === room.id ? 'fill-white' : 'fill-gray-600'}
                fontSize="8"
                fontFamily="monospace"
                pointerEvents="none"
              >
                {room.verified}
              </text>

              {/* Area polynomial (on hover) */}
              {hoveredRoom === room.id && (
                <>
                  <text
                    x={offsetX + room.x * scale + (room.width * scale) / 2}
                    y={offsetY + room.y * scale + (room.height * scale) / 2 + 25}
                    textAnchor="middle"
                    className="fill-yellow-300"
                    fontSize="8"
                    fontFamily="monospace"
                    pointerEvents="none"
                  >
                    Area: {room.area}
                  </text>
                  <text
                    x={offsetX + room.x * scale + (room.width * scale) / 2}
                    y={offsetY + room.y * scale + (room.height * scale) / 2 + 35}
                    textAnchor="middle"
                    className="fill-white"
                    fontSize="7"
                    fontFamily="monospace"
                    pointerEvents="none"
                  >
                    Click for details
                  </text>
                </>
              )}
            </g>
          ))}

          {/* Legend box */}
          <g transform={`translate(${offsetX}, ${offsetY + houseHeight * scale + 40})`}>
            <rect x="0" y="0" width="260" height="80" fill="white" stroke="#2c3e50" strokeWidth="2" />
            <text x="130" y="18" textAnchor="middle" fontSize="12" fontWeight="bold" className="fill-[#2c3e50]">
              TOTAL HOUSE SPECIFICATIONS
            </text>
            <text x="10" y="35" fontSize="9" fontFamily="monospace" className="fill-gray-700">
              Total Area: 128x³ + 32x² + 58x - 8 = 1,260 sq ft
            </text>
            <text x="10" y="50" fontSize="9" fontFamily="monospace" className="fill-gray-700">
              Total Perimeter: 16x² + 38x + 4 = 144 ft
            </text>
            <text x="10" y="70" fontSize="8" className="fill-gray-600">
              Click any room for detailed analysis
            </text>
          </g>

          {/* Side annotations - LEFT WING */}
          <g transform={`translate(${offsetX + houseWidth * scale + 20}, ${offsetY + 20})`}>
            <text x="0" y="0" fontSize="11" fontWeight="bold" className="fill-[#2c3e50]">
              LEFT WING (Private)
            </text>
            <text x="0" y="18" fontSize="8" fontFamily="monospace" className="fill-gray-700">
              • Master Bedroom: 196 sq ft
            </text>
            <text x="0" y="32" fontSize="8" fontFamily="monospace" className="fill-gray-700">
              • Master Bathroom: 126 sq ft
            </text>
            <text x="0" y="46" fontSize="8" fontFamily="monospace" className="fill-gray-700">
              • Bathroom: 50 sq ft
            </text>
            <text x="0" y="60" fontSize="8" fontFamily="monospace" className="fill-gray-700">
              • Bedroom 2: 196 sq ft
            </text>
          </g>

          {/* Side annotations - RIGHT WING */}
          <g transform={`translate(${offsetX + houseWidth * scale + 20}, ${offsetY + 120})`}>
            <text x="0" y="0" fontSize="11" fontWeight="bold" className="fill-[#2c3e50]">
              RIGHT WING (Common)
            </text>
            <text x="0" y="18" fontSize="8" fontFamily="monospace" className="fill-gray-700">
              • Kitchen: 154 sq ft
            </text>
            <text x="0" y="32" fontSize="8" fontFamily="monospace" className="fill-gray-700">
              • Dining Room: 132 sq ft
            </text>
            <text x="0" y="46" fontSize="8" fontFamily="monospace" className="fill-gray-700">
              • Living Room: 176 sq ft
            </text>
          </g>

          {/* Drawing notes */}
          <text 
            x={viewWidth / 2} 
            y={viewHeight - 10} 
            textAnchor="middle" 
            className="fill-gray-500"
            fontSize="9"
            fontStyle="italic"
            fontFamily="Arial, sans-serif"
          >
            Precise Blueprint Line Weights | Engineering Standard | All Measurements Verified at x = 2
          </text>
        </svg>
      </div>
    </div>
  );
}
