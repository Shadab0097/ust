// Mock product data with placeholder images
// In a real application, this would come from a backend/CMS

const products = [
  {
    id: 1,
    name: "Industrial Material Handling Trolley",
    shortDescription: "High strength, rust-resistant handling solution",
    description: "Heavy-duty industrial material handling trolley designed for durability and ease of use. Features a robust steel frame, ergonomic handles, and swivel casters for maximum maneuverability.",
    category: "Handling Trolleys",
    image: "https://images.pexels.com/photos/6169678/pexels-photo-6169678.jpeg?auto=compress&cs=tinysrgb&w=800",
    model3D: "", // In a real app, this would be a path to a GLTF/GLB file
    features: [
      "Heavy-duty steel construction",
      "Rust-resistant powder coating",
      "360° swivel casters with locks",
      "Ergonomic handle design",
      "500kg load capacity"
    ],
    specifications: {
      "Dimensions": "120 x 80 x 95 cm",
      "Weight": "45 kg",
      "Material": "High-grade steel",
      "Finish": "Powder coated",
      "Load Capacity": "500 kg",
      "Wheels": "6-inch polyurethane"
    }
  },
  {
    id: 2,
    name: "Industrial Ventilation Hood",
    shortDescription: "Efficient fume extraction for industrial environments",
    description: "High-efficiency industrial ventilation hood designed for optimal fume and particulate extraction in manufacturing environments. Features adjustable airflow and durable stainless steel construction.",
    category: "Industrial Hoods",
    image: "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=800",
    model3D: "",
    features: [
      "Stainless steel construction",
      "Adjustable airflow control",
      "Integrated lighting system",
      "Easy-clean surfaces",
      "Customizable dimensions"
    ],
    specifications: {
      "Dimensions": "180 x 90 x 60 cm",
      "Material": "304 Stainless Steel",
      "Airflow": "1200-1800 m³/h",
      "Noise Level": "<70 dB",
      "Power": "1.5 kW",
      "Installation": "Wall or ceiling mounted"
    }
  },
  {
    id: 3,
    name: "Industrial Hopper Machine",
    shortDescription: "Precision material dispensing for production lines",
    description: "High-precision industrial hopper machine designed for controlled material dispensing in production environments. Features adjustable flow rate and durable construction for continuous operation.",
    category: "Hopper Machines",
    image: "https://images.pexels.com/photos/159358/pexels-photo-159358.jpeg?auto=compress&cs=tinysrgb&w=800",
    model3D: "",
    features: [
      "Precision flow control",
      "Variable speed operation",
      "Heavy-duty steel construction",
      "Anti-bridging design",
      "Low maintenance requirements"
    ],
    specifications: {
      "Capacity": "150 liters",
      "Material": "Carbon steel/Stainless steel",
      "Flow Rate": "5-50 kg/min",
      "Power": "2.2 kW",
      "Control": "Manual/Automated",
      "Weight": "120 kg"
    }
  },
  {
    id: 4,
    name: "Multi-Level Storage Trolley",
    shortDescription: "Organized storage for tools and components",
    description: "Versatile multi-level storage trolley designed for organized tool and component management. Features adjustable shelves, lockable drawers, and smooth-rolling casters for workplace efficiency.",
    category: "Storage Trolleys",
    image: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=800",
    model3D: "",
    features: [
      "Adjustable shelf heights",
      "Lockable drawers",
      "Integrated tool holders",
      "Heavy-duty casters",
      "Anti-tilt safety design"
    ],
    specifications: {
      "Dimensions": "90 x 60 x 160 cm",
      "Weight": "75 kg",
      "Material": "Steel with powder coating",
      "Load Capacity": "300 kg total",
      "Shelves": "4 adjustable",
      "Drawers": "3 with lock"
    }
  },
  {
    id: 5,
    name: "Wall-Mounted JIB Crane",
    shortDescription: "Precise lifting for workshop applications",
    description: "Heavy-duty wall-mounted JIB crane designed for precise material handling in workshops and factories. Features 180° rotation, adjustable height, and durable construction for reliable operation.",
    category: "JIB Cranes",
    image: "https://images.pexels.com/photos/2237257/pexels-photo-2237257.jpeg?auto=compress&cs=tinysrgb&w=800",
    model3D: "",
    features: [
      "180° rotation arc",
      "Adjustable boom height",
      "Manual or electric hoist compatible",
      "Reinforced mounting plate",
      "Safety overload protection"
    ],
    specifications: {
      "Boom Length": "3 meters",
      "Height": "3.5 meters",
      "Lift Capacity": "1000 kg",
      "Rotation": "180°",
      "Material": "High-tensile steel",
      "Finish": "Powder coated"
    }
  },
  {
    id: 6,
    name: "Heavy-Duty Pallet Trolley",
    shortDescription: "Robust solution for pallet transportation",
    description: "Industrial-grade pallet trolley designed for efficient transportation of heavy palletized loads. Features hydraulic lift system, reinforced forks, and ergonomic handle for operator comfort.",
    category: "Handling Trolleys",
    image: "https://images.pexels.com/photos/5025523/pexels-photo-5025523.jpeg?auto=compress&cs=tinysrgb&w=800",
    model3D: "",
    features: [
      "Hydraulic lift system",
      "Reinforced steel forks",
      "Ergonomic handle design",
      "Tandem load wheels",
      "Overload protection valve"
    ],
    specifications: {
      "Dimensions": "160 x 55 x 120 cm",
      "Fork Length": "115 cm",
      "Lift Height": "20 cm",
      "Material": "High-grade steel",
      "Load Capacity": "2500 kg",
      "Weight": "85 kg"
    }
  }
];

export default products;