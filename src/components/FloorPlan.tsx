import { useState } from 'react';

interface FloorPlanProps {
  onRoomClick: (roomId: string) => void;
}

export function FloorPlan({ onRoomClick }: FloorPlanProps) {
  const [hoveredRoom, setHoveredRoom] = useState<string | null>(null);

  // Scale factor for the drawing (pixels per foot)
  const scale = 12;
  const marginTop = 100;
  const marginLeft = 150;
  
  // House dimensions at x=2
  const houseWidth = 30;
  const houseHeight = 42;
  
  // Left side rooms (all dimensions in feet, at x=2)
  const leftRooms = [
    {
      id: 'master-bedroom',
      name: 'Master Bedroom',
      x: 0,
      y: 0,
      width: 14,  // 7x = 14
      height: 14, // 5x+4 = 14
      widthPoly: '7x',
      heightPoly: '5x + 4',
      area: '35x² + 28x',
      areaValue: '196 sq ft',
      perimeter: '24x + 8'
    },
    {
      id: 'master-bathroom',
      name: 'Master Bathroom',
      x: 0,
      y: 14,
      width: 14,  // 9x-4 = 14
      height: 9,  // 3x+3 = 9
      widthPoly: '9x - 4',
      heightPoly: '3x + 3',
      area: '27x² + 15x - 12',
      areaValue: '126 sq ft',
      perimeter: '24x - 2'
    },
    {
      id: 'bathroom',
      name: 'Bathroom',
      x: 0,
      y: 23,
      width: 10,  // 4x+2 = 10
      height: 5,  // 2x+1 = 5
      widthPoly: '4x + 2',
      heightPoly: '2x + 1',
      area: '8x² + 8x + 2',
      areaValue: '50 sq ft',
      perimeter: '12x + 6'
    },
    {
      id: 'bedroom-2',
      name: 'Bedroom 2',
      x: 0,
      y: 28,
      width: 14,  // 8x-2 = 14
      height: 14, // 6x+2 = 14
      widthPoly: '8x - 2',
      heightPoly: '6x + 2',
      area: '48x² + 4x - 4',
      areaValue: '196 sq ft',
      perimeter: '28x'
    }
  ];
  
  // Right side rooms
  const rightRooms = [
    {
      id: 'kitchen',
      name: 'Kitchen',
      x: 19,
      y: 0,
      width: 11,  // 2x²+2x-1 = 11
      height: 14, // 3x+8 = 14
      widthPoly: '2x² + 2x - 1',
      heightPoly: '3x + 8',
      area: '6x³ + 22x² + 13x - 8',
      areaValue: '154 sq ft',
      perimeter: '4x² + 10x + 14'
    },
    {
      id: 'dining-room',
      name: 'Dining Room',
      x: 19,
      y: 14,
      width: 11,  // 3x²+2x-5 = 11
      height: 12, // 6x = 12
      widthPoly: '3x² + 2x - 5',
      heightPoly: '6x',
      area: '18x³ + 12x² - 30x',
      areaValue: '132 sq ft',
      perimeter: '6x² + 16x - 10'
    },
    {
      id: 'living-room',
      name: 'Living Room',
      x: 19,
      y: 26,
      width: 11,  // 4x+3 = 11
      height: 16, // 2x²+3x+2 = 16
      widthPoly: '4x + 3',
      heightPoly: '2x² + 3x + 2',
      area: '8x³ + 18x² + 17x + 6',
      areaValue: '176 sq ft',
      perimeter: '4x² + 14x + 10'
    }
  ];
  
  const allRooms = [...leftRooms, ...rightRooms];
  
  // Hallway
  const hallway = { x: 14, y: 0, width: 5, height: 42 }; // 3x-1 = 5

  const svgWidth = houseWidth * scale + marginLeft * 2 + 200;
  const svgHeight = houseHeight * scale + marginTop + 200;

  return (
    <div className="w-full overflow-auto bg-white p-4 rounded-lg shadow-2xl animate-fadeIn">
      <svg
        width={svgWidth}
        height={svgHeight}
        className="mx-auto"
        style={{ 
          background: `
            repeating-linear-gradient(
              0deg,
              #e5e5e5 0px,
              #e5e5e5 1px,
              white 1px,
              white 20px
            ),
            repeating-linear-gradient(
              90deg,
              #e5e5e5 0px,
              #e5e5e5 1px,
              white 1px,
              white 20px
            )
          `
        }}
      >
        {/* Define patterns for furniture */}
        <defs>
          {/* Arrow markers */}
          <marker id="arrowEnd" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" fill="#1a252f" />
          </marker>
          <marker id="arrowStart" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
            <path d="M9,0 L9,6 L0,3 z" fill="#1a252f" />
          </marker>
        </defs>

        {/* Title Block */}
        <g>
          <text x={svgWidth / 2} y="40" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#1a252f" fontFamily="Arial, sans-serif">
            THE POLYNOMIAL RESIDENCE
          </text>
          <text x={svgWidth / 2} y="65" textAnchor="middle" fontSize="14" fill="#555" fontFamily="Arial, sans-serif">
            ARCHITECTURAL SCHEMATIC BLUEPRINT | Scale: 1" = 1' | Verification Basis: x = 2
          </text>
          <rect x={svgWidth/2 - 250} y="20" width="500" height="55" fill="none" stroke="#1a252f" strokeWidth="2" />
        </g>

        {/* Main drawing group */}
        <g transform={`translate(${marginLeft}, ${marginTop})`}>
          
          {/* Outer dimension lines - Width (top) */}
          <g>
            <line 
              x1={0} 
              y1={-40} 
              x2={houseWidth * scale} 
              y2={-40} 
              stroke="#d63031" 
              strokeWidth="2"
              markerStart="url(#arrowStart)"
              markerEnd="url(#arrowEnd)"
            />
            <text 
              x={(houseWidth * scale) / 2} 
              y={-48} 
              textAnchor="middle" 
              fontSize="11" 
              fontWeight="bold"
              fill="#d63031"
              fontFamily="monospace"
            >
              16x - 2
            </text>
            <text 
              x={(houseWidth * scale) / 2} 
              y={-32} 
              textAnchor="middle" 
              fontSize="10"
              fill="#d63031"
              fontFamily="Arial, sans-serif"
            >
              (at x=2 → 30 ft)
            </text>
          </g>

          {/* Outer dimension lines - Height (left) */}
          <g>
            <line 
              x1={-40} 
              y1={0} 
              x2={-40} 
              y2={houseHeight * scale} 
              stroke="#d63031" 
              strokeWidth="2"
              markerStart="url(#arrowStart)"
              markerEnd="url(#arrowEnd)"
            />
            <text 
              x={-50} 
              y={(houseHeight * scale) / 2} 
              textAnchor="middle" 
              fontSize="11" 
              fontWeight="bold"
              fill="#d63031"
              fontFamily="monospace"
              transform={`rotate(-90, -50, ${(houseHeight * scale) / 2})`}
            >
              8x² + 3x + 4
            </text>
            <text 
              x={-70} 
              y={(houseHeight * scale) / 2} 
              textAnchor="middle" 
              fontSize="10"
              fill="#d63031"
              fontFamily="Arial, sans-serif"
              transform={`rotate(-90, -70, ${(houseHeight * scale) / 2})`}
            >
              (at x=2 → 42 ft)
            </text>
          </g>

          {/* House outer boundary */}
          <rect
            x={0}
            y={0}
            width={houseWidth * scale}
            height={houseHeight * scale}
            fill="none"
            stroke="#1a252f"
            strokeWidth="4"
          />

          {/* Hallway */}
          <rect
            x={hallway.x * scale}
            y={hallway.y * scale}
            width={hallway.width * scale}
            height={hallway.height * scale}
            fill="#f5f5f5"
            stroke="#1a252f"
            strokeWidth="2"
            strokeDasharray="8,4"
          />
          <text
            x={(hallway.x + hallway.width / 2) * scale}
            y={(hallway.height / 2) * scale}
            textAnchor="middle"
            fontSize="10"
            fill="#666"
            fontFamily="Arial, sans-serif"
            transform={`rotate(-90, ${(hallway.x + hallway.width / 2) * scale}, ${(hallway.height / 2) * scale})`}
          >
            HALLWAY
          </text>
          <text
            x={(hallway.x + hallway.width / 2) * scale}
            y={(hallway.height / 2) * scale + 15}
            textAnchor="middle"
            fontSize="8"
            fill="#666"
            fontFamily="monospace"
            transform={`rotate(-90, ${(hallway.x + hallway.width / 2) * scale}, ${(hallway.height / 2) * scale + 15})`}
          >
            3x - 1 = 5 ft
          </text>

          {/* Draw all rooms */}
          {allRooms.map((room) => {
            const roomX = room.x * scale;
            const roomY = room.y * scale;
            const roomW = room.width * scale;
            const roomH = room.height * scale;
            const isHovered = hoveredRoom === room.id;

            return (
              <g key={room.id}>
                {/* Room rectangle */}
                <rect
                  x={roomX}
                  y={roomY}
                  width={roomW}
                  height={roomH}
                  fill={isHovered ? '#2c3e50' : '#ffffff'}
                  stroke="#1a252f"
                  strokeWidth="3"
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHoveredRoom(room.id)}
                  onMouseLeave={() => setHoveredRoom(null)}
                  onClick={() => onRoomClick(room.id)}
                />

                {/* Dimension tick marks - width (top) */}
                <line x1={roomX} y1={roomY - 3} x2={roomX} y2={roomY - 10} stroke="#666" strokeWidth="1" />
                <line x1={roomX + roomW} y1={roomY - 3} x2={roomX + roomW} y2={roomY - 10} stroke="#666" strokeWidth="1" />
                <line x1={roomX} y1={roomY - 7} x2={roomX + roomW} y2={roomY - 7} stroke="#666" strokeWidth="1" />
                
                {/* Dimension tick marks - height (left) */}
                <line x1={roomX - 3} y1={roomY} x2={roomX - 10} y2={roomY} stroke="#666" strokeWidth="1" />
                <line x1={roomX - 3} y1={roomY + roomH} x2={roomX - 10} y2={roomY + roomH} stroke="#666" strokeWidth="1" />
                <line x1={roomX - 7} y1={roomY} x2={roomX - 7} y2={roomY + roomH} stroke="#666" strokeWidth="1" />

                {/* Width dimension label */}
                <text
                  x={roomX + roomW / 2}
                  y={roomY - 12}
                  textAnchor="middle"
                  fontSize="8"
                  fill="#0984e3"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  {room.widthPoly}
                </text>

                {/* Height dimension label */}
                <text
                  x={roomX - 15}
                  y={roomY + roomH / 2}
                  textAnchor="middle"
                  fontSize="8"
                  fill="#0984e3"
                  fontFamily="monospace"
                  fontWeight="bold"
                  transform={`rotate(-90, ${roomX - 15}, ${roomY + roomH / 2})`}
                >
                  {room.heightPoly}
                </text>

                {/* Room content */}
                <g>
                  {/* Room name */}
                  <text
                    x={roomX + roomW / 2}
                    y={roomY + 20}
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="bold"
                    fill={isHovered ? '#fff' : '#1a252f'}
                    fontFamily="Arial, sans-serif"
                    pointerEvents="none"
                  >
                    {room.name}
                  </text>

                  {/* Verified dimensions */}
                  <text
                    x={roomX + roomW / 2}
                    y={roomY + 35}
                    textAnchor="middle"
                    fontSize="9"
                    fill={isHovered ? '#fff' : '#555'}
                    fontFamily="Arial, sans-serif"
                    pointerEvents="none"
                  >
                    {room.width} ft × {room.height} ft
                  </text>

                  {/* Area value */}
                  <text
                    x={roomX + roomW / 2}
                    y={roomY + roomH - 25}
                    textAnchor="middle"
                    fontSize="8"
                    fill={isHovered ? '#ffeaa7' : '#d63031'}
                    fontFamily="monospace"
                    pointerEvents="none"
                  >
                    Area: {room.area}
                  </text>
                  <text
                    x={roomX + roomW / 2}
                    y={roomY + roomH - 13}
                    textAnchor="middle"
                    fontSize="9"
                    fill={isHovered ? '#fff' : '#555'}
                    fontFamily="Arial, sans-serif"
                    pointerEvents="none"
                  >
                    = {room.areaValue}
                  </text>

                  {/* Simple furniture icons */}
                  {room.id === 'master-bedroom' && (
                    <g>
                      {/* Bed */}
                      <rect x={roomX + 20} y={roomY + 50} width={50} height={70} fill="#dfe6e9" stroke="#2d3436" strokeWidth="2" />
                      <rect x={roomX + 20} y={roomY + 45} width={50} height={10} fill="#b2bec3" stroke="#2d3436" strokeWidth="1" />
                    </g>
                  )}
                  
                  {room.id === 'bedroom-2' && (
                    <g>
                      {/* Bed */}
                      <rect x={roomX + 20} y={roomY + 50} width={50} height={70} fill="#dfe6e9" stroke="#2d3436" strokeWidth="2" />
                      <rect x={roomX + 20} y={roomY + 45} width={50} height={10} fill="#b2bec3" stroke="#2d3436" strokeWidth="1" />
                    </g>
                  )}

                  {(room.id === 'master-bathroom' || room.id === 'bathroom') && (
                    <g>
                      {/* Toilet */}
                      <circle cx={roomX + 30} cy={roomY + roomH - 25} r="8" fill="#dfe6e9" stroke="#2d3436" strokeWidth="2" />
                      {/* Sink */}
                      <rect x={roomX + 55} y={roomY + roomH - 30} width="25" height="15" fill="#dfe6e9" stroke="#2d3436" strokeWidth="2" rx="3" />
                    </g>
                  )}

                  {room.id === 'kitchen' && (
                    <g>
                      {/* Counter */}
                      <rect x={roomX + 10} y={roomY + 50} width={roomW - 20} height="25" fill="#95a5a6" stroke="#2d3436" strokeWidth="2" />
                      {/* Stove */}
                      <rect x={roomX + 20} y={roomY + 85} width="35" height="35" fill="#636e72" stroke="#2d3436" strokeWidth="2" />
                      <circle cx={roomX + 30} cy={roomY + 95} r="5" fill="none" stroke="#2d3436" strokeWidth="1" />
                      <circle cx={roomX + 45} cy={roomY + 95} r="5" fill="none" stroke="#2d3436" strokeWidth="1" />
                    </g>
                  )}

                  {room.id === 'dining-room' && (
                    <g>
                      {/* Table */}
                      <rect x={roomX + 25} y={roomY + 50} width="70" height="50" fill="#d4a574" stroke="#2d3436" strokeWidth="2" />
                      {/* Chairs */}
                      <rect x={roomX + 20} y={roomY + 65} width="15" height="20" fill="#95a5a6" stroke="#2d3436" strokeWidth="1" />
                      <rect x={roomX + roomW - 35} y={roomY + 65} width="15" height="20" fill="#95a5a6" stroke="#2d3436" strokeWidth="1" />
                    </g>
                  )}

                  {room.id === 'living-room' && (
                    <g>
                      {/* Sofa */}
                      <rect x={roomX + 15} y={roomY + 60} width={roomW - 30} height="40" fill="#636e72" stroke="#2d3436" strokeWidth="2" />
                      <rect x={roomX + 15} y={roomY + 55} width={roomW - 30} height="10" fill="#7f8c8d" stroke="#2d3436" strokeWidth="1" />
                      {/* Coffee table */}
                      <rect x={roomX + 35} y={roomY + 115} width="50" height="35" fill="#d4a574" stroke="#2d3436" strokeWidth="2" />
                    </g>
                  )}
                </g>

                {isHovered && (
                  <text
                    x={roomX + roomW / 2}
                    y={roomY + roomH - 3}
                    textAnchor="middle"
                    fontSize="8"
                    fill="#ffeaa7"
                    fontFamily="Arial, sans-serif"
                    pointerEvents="none"
                    fontWeight="bold"
                  >
                    ► CLICK FOR DETAILS ◄
                  </text>
                )}
              </g>
            );
          })}

        </g>

        {/* Legend / Specifications Box */}
        <g transform={`translate(${marginLeft}, ${marginTop + houseHeight * scale + 50})`}>
          <rect x="0" y="0" width="480" height="110" fill="white" stroke="#1a252f" strokeWidth="3" />
          <rect x="5" y="5" width="470" height="100" fill="none" stroke="#1a252f" strokeWidth="1" />
          
          <text x="240" y="25" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1a252f" fontFamily="Arial, sans-serif">
            TOTAL HOUSE SPECIFICATIONS
          </text>
          
          <text x="15" y="45" fontSize="10" fontFamily="monospace" fill="#333">
            Total Area Polynomial: 128x³ + 32x² + 58x - 8 = 1,260 sq ft
          </text>
          
          <text x="15" y="63" fontSize="10" fontFamily="monospace" fill="#333">
            Total Perimeter Polynomial: 16x² + 38x + 4 = 144 ft
          </text>
          
          <text x="15" y="81" fontSize="9" fill="#555" fontFamily="Arial, sans-serif">
            All dimensions verified at x = 2 | Blueprint uses engineering standard line weights
          </text>
          
          <text x="15" y="96" fontSize="9" fill="#d63031" fontFamily="Arial, sans-serif" fontWeight="bold">
            ► Click any room for detailed mathematical analysis and cost breakdown
          </text>
        </g>

        {/* Side Annotations - Left Wing */}
        <g transform={`translate(${marginLeft + houseWidth * scale + 60}, ${marginTop + 30})`}>
          <rect x="-10" y="-15" width="180" height="140" fill="#f8f9fa" stroke="#1a252f" strokeWidth="2" />
          
          <text x="75" y="5" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1a252f" fontFamily="Arial, sans-serif">
            LEFT WING (Private)
          </text>
          
          <text x="5" y="25" fontSize="9" fontFamily="monospace" fill="#333">
            • Master Bedroom: 196 sq ft
          </text>
          <text x="5" y="42" fontSize="9" fontFamily="monospace" fill="#333">
            • Master Bathroom: 126 sq ft
          </text>
          <text x="5" y="59" fontSize="9" fontFamily="monospace" fill="#333">
            • Bathroom: 50 sq ft
          </text>
          <text x="5" y="76" fontSize="9" fontFamily="monospace" fill="#333">
            • Bedroom 2: 196 sq ft
          </text>
          <line x1="0" y1="85" x2="160" y2="85" stroke="#1a252f" strokeWidth="1" />
          <text x="5" y="100" fontSize="9" fontWeight="bold" fontFamily="monospace" fill="#d63031">
            Subtotal: 568 sq ft
          </text>
          <text x="5" y="117" fontSize="8" fill="#666" fontFamily="Arial, sans-serif">
            (4 rooms)
          </text>
        </g>

        {/* Side Annotations - Right Wing */}
        <g transform={`translate(${marginLeft + houseWidth * scale + 60}, ${marginTop + 190})`}>
          <rect x="-10" y="-15" width="180" height="125" fill="#f8f9fa" stroke="#1a252f" strokeWidth="2" />
          
          <text x="75" y="5" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1a252f" fontFamily="Arial, sans-serif">
            RIGHT WING (Common)
          </text>
          
          <text x="5" y="25" fontSize="9" fontFamily="monospace" fill="#333">
            • Kitchen: 154 sq ft
          </text>
          <text x="5" y="42" fontSize="9" fontFamily="monospace" fill="#333">
            • Dining Room: 132 sq ft
          </text>
          <text x="5" y="59" fontSize="9" fontFamily="monospace" fill="#333">
            • Living Room: 176 sq ft
          </text>
          <line x1="0" y1="68" x2="160" y2="68" stroke="#1a252f" strokeWidth="1" />
          <text x="5" y="83" fontSize="9" fontWeight="bold" fontFamily="monospace" fill="#d63031">
            Subtotal: 462 sq ft
          </text>
          <text x="5" y="100" fontSize="8" fill="#666" fontFamily="Arial, sans-serif">
            (3 rooms)
          </text>
        </g>

        {/* Footer Notes */}
        <text x={svgWidth / 2} y={svgHeight - 20} textAnchor="middle" fontSize="9" fill="#666" fontFamily="Arial, sans-serif" fontStyle="italic">
          Precise blueprint line weights | Dark navy blue ink | Engineering handwriting standard | All measurements verified at x = 2
        </text>
      </svg>
    </div>
  );
}