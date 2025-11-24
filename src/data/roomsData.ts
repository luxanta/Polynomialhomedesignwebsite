export const roomsData = {
  'master-bedroom': {
    id: 'master-bedroom',
    name: 'Master Bedroom',
    dimensions: '7x by (5x + 4)',
    areaPolynomial: '35x² + 28x',
    perimeterPolynomial: '24x + 8',
    verification: '14ft x 14ft = 196 sq ft',
    description: 'The master bedroom is a spacious retreat designed for comfort and relaxation. With ample room for a king-size bed, nightstands, and a seating area, this room serves as the primary sleeping quarters for the residence.',
    features: [
      'King-size bed accommodation',
      'Large windows for natural lighting',
      'Space for dresser and wardrobe',
      'Adjacent master bathroom access',
      'Carpet flooring included in cost analysis',
      'Crown molding ready',
      'Closet space planning',
      'Optimal room temperature control'
    ],
    costBreakdown: {
      carpet: { area: 196, rate: 2.49, total: 488.04 },
      total: 488.04
    }
  },
  'master-bathroom': {
    id: 'master-bathroom',
    name: 'Master Bathroom',
    dimensions: '(9x - 4) by (3x + 3)',
    areaPolynomial: '27x² + 15x - 12',
    perimeterPolynomial: '24x - 2',
    verification: '14ft x 9ft = 126 sq ft',
    description: 'An ensuite bathroom designed exclusively for the master bedroom. This private bath features modern fixtures and enough space for a double vanity, separate shower, and tub area.',
    features: [
      'Double vanity sink',
      'Separate shower enclosure',
      'Bathtub installation area',
      'Linen closet storage',
      'Tile flooring (not included in current cost)',
      'Exhaust ventilation system',
      'Privacy from main living areas',
      'Modern plumbing fixtures'
    ]
  },
  'bathroom': {
    id: 'bathroom',
    name: 'Bathroom',
    dimensions: '(4x + 2) by (2x + 1)',
    areaPolynomial: '8x² + 8x + 2',
    perimeterPolynomial: '12x + 6',
    verification: '10ft x 5ft = 50 sq ft',
    description: 'A compact guest bathroom centrally located for convenient access from common areas and the second bedroom. This efficient design maximizes functionality in a smaller footprint.',
    features: [
      'Single vanity sink',
      'Shower/tub combo',
      'Space-efficient design',
      'Guest accessible',
      'Medicine cabinet storage',
      'Tile flooring recommended',
      'Proper ventilation',
      'Standard toilet placement'
    ]
  },
  'bedroom-2': {
    id: 'bedroom-2',
    name: 'Bedroom 2',
    dimensions: '(8x - 2) by (6x + 2)',
    areaPolynomial: '48x² + 4x - 4',
    perimeterPolynomial: '28x',
    verification: '14ft x 14ft = 196 sq ft',
    description: 'The second bedroom offers generous space ideal for children, guests, or a home office. With the same square footage as the master bedroom, this versatile room provides flexibility for various household needs.',
    features: [
      'Queen or full-size bed space',
      'Large closet capacity',
      'Desk area for home office use',
      'Natural window lighting',
      'Adjacent to guest bathroom',
      'Carpet or hardwood options',
      'Sufficient storage space',
      'Multi-purpose room potential'
    ]
  },
  'kitchen': {
    id: 'kitchen',
    name: 'Kitchen',
    dimensions: '(2x² + 2x - 1) by (3x + 8)',
    areaPolynomial: '6x³ + 22x² + 13x - 8',
    perimeterPolynomial: '4x² + 10x + 14',
    verification: '11ft x 14ft = 154 sq ft',
    description: 'The heart of the home, this kitchen provides ample workspace for meal preparation and cooking. The layout accommodates modern appliances and offers counter space for food prep and casual dining.',
    features: [
      'Full-size refrigerator space',
      'Range and oven installation',
      'Dishwasher placement',
      'Upper and lower cabinetry',
      'Countertop workspace',
      'Pantry storage options',
      'Proper lighting fixtures',
      'Tile or vinyl flooring',
      'Backsplash area',
      'Electrical outlets for appliances'
    ]
  },
  'dining-room': {
    id: 'dining-room',
    name: 'Dining Room',
    dimensions: '(3x² + 2x - 5) by 6x',
    areaPolynomial: '18x³ + 12x² - 30x',
    perimeterPolynomial: '6x² + 16x - 10',
    verification: '11ft x 12ft = 132 sq ft',
    description: 'A dedicated dining space perfect for family meals and entertaining guests. This room connects the kitchen to the living areas, creating a natural flow for gatherings and daily dining.',
    features: [
      'Table seating for 6-8 people',
      'China cabinet or buffet space',
      'Chandelier/lighting fixture ready',
      'Open flow to kitchen',
      'Hardwood or carpet flooring',
      'Window with natural light',
      'Wall space for artwork',
      'Formal dining capability'
    ]
  },
  'living-room': {
    id: 'living-room',
    name: 'Living Room',
    dimensions: '(4x + 3) by (2x² + 3x + 2)',
    areaPolynomial: '8x³ + 18x² + 17x + 6',
    perimeterPolynomial: '4x² + 14x + 10',
    verification: '11ft x 16ft = 176 sq ft',
    description: 'The primary gathering space for family activities and entertainment. This generous living room provides comfortable seating areas and space for media equipment, making it perfect for relaxation and socializing.',
    features: [
      'Entertainment center area',
      'Sofa and seating arrangement',
      'Coffee table space',
      'Large window views',
      'Crown molding included',
      'Carpet flooring installed',
      'Electrical outlets strategically placed',
      'Bookshelf or display areas',
      'Ambient lighting options',
      'Open concept connection to dining'
    ],
    costBreakdown: {
      carpet: { area: 176, rate: 2.49, total: 438.24 },
      molding: { perimeter: 54, rate: 5.49, total: 296.46 },
      installation: 250.00,
      total: 984.70
    }
  }
};
