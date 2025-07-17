// Mock product data with placeholder images
// In a real application, this would come from a backend/CMS

// const products = [
//   {
//     id: 1,
//     name: "Industrial Material Handling Trolley",
//     shortDescription: "High strength, rust-resistant handling solution",
//     description: "Heavy-duty industrial material handling trolley designed for durability and ease of use. Features a robust steel frame, ergonomic handles, and swivel casters for maximum maneuverability.",
//     category: "Handling Trolleys",
//     image: "https://images.pexels.com/photos/6169678/pexels-photo-6169678.jpeg?auto=compress&cs=tinysrgb&w=800",
//     model3D: "", // In a real app, this would be a path to a GLTF/GLB file
//     features: [
//       "Heavy-duty steel construction",
//       "Rust-resistant powder coating",
//       "360° swivel casters with locks",
//       "Ergonomic handle design",
//       "500kg load capacity"
//     ],
//     specifications: {
//       "Dimensions": "120 x 80 x 95 cm",
//       "Weight": "45 kg",
//       "Material": "High-grade steel",
//       "Finish": "Powder coated",
//       "Load Capacity": "500 kg",
//       "Wheels": "6-inch polyurethane"
//     }
//   },
//   {
//     id: 2,
//     name: "Industrial Ventilation Hood",
//     shortDescription: "Efficient fume extraction for industrial environments",
//     description: "High-efficiency industrial ventilation hood designed for optimal fume and particulate extraction in manufacturing environments. Features adjustable airflow and durable stainless steel construction.",
//     category: "Industrial Hoods",
//     image: "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=800",
//     model3D: "",
//     features: [
//       "Stainless steel construction",
//       "Adjustable airflow control",
//       "Integrated lighting system",
//       "Easy-clean surfaces",
//       "Customizable dimensions"
//     ],
//     specifications: {
//       "Dimensions": "180 x 90 x 60 cm",
//       "Material": "304 Stainless Steel",
//       "Airflow": "1200-1800 m³/h",
//       "Noise Level": "<70 dB",
//       "Power": "1.5 kW",
//       "Installation": "Wall or ceiling mounted"
//     }
//   },
//   {
//     id: 3,
//     name: "Industrial Hopper Machine",
//     shortDescription: "Precision material dispensing for production lines",
//     description: "High-precision industrial hopper machine designed for controlled material dispensing in production environments. Features adjustable flow rate and durable construction for continuous operation.",
//     category: "Hopper Machines",
//     image: "https://images.pexels.com/photos/159358/pexels-photo-159358.jpeg?auto=compress&cs=tinysrgb&w=800",
//     model3D: "",
//     features: [
//       "Precision flow control",
//       "Variable speed operation",
//       "Heavy-duty steel construction",
//       "Anti-bridging design",
//       "Low maintenance requirements"
//     ],
//     specifications: {
//       "Capacity": "150 liters",
//       "Material": "Carbon steel/Stainless steel",
//       "Flow Rate": "5-50 kg/min",
//       "Power": "2.2 kW",
//       "Control": "Manual/Automated",
//       "Weight": "120 kg"
//     }
//   },
//   {
//     id: 4,
//     name: "Multi-Level Storage Trolley",
//     shortDescription: "Organized storage for tools and components",
//     description: "Versatile multi-level storage trolley designed for organized tool and component management. Features adjustable shelves, lockable drawers, and smooth-rolling casters for workplace efficiency.",
//     category: "Storage Trolleys",
//     image: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=800",
//     model3D: "",
//     features: [
//       "Adjustable shelf heights",
//       "Lockable drawers",
//       "Integrated tool holders",
//       "Heavy-duty casters",
//       "Anti-tilt safety design"
//     ],
//     specifications: {
//       "Dimensions": "90 x 60 x 160 cm",
//       "Weight": "75 kg",
//       "Material": "Steel with powder coating",
//       "Load Capacity": "300 kg total",
//       "Shelves": "4 adjustable",
//       "Drawers": "3 with lock"
//     }
//   },
//   {
//     id: 5,
//     name: "Wall-Mounted JIB Crane",
//     shortDescription: "Precise lifting for workshop applications",
//     description: "Heavy-duty wall-mounted JIB crane designed for precise material handling in workshops and factories. Features 180° rotation, adjustable height, and durable construction for reliable operation.",
//     category: "JIB Cranes",
//     image: "https://images.pexels.com/photos/2237257/pexels-photo-2237257.jpeg?auto=compress&cs=tinysrgb&w=800",
//     model3D: "",
//     features: [
//       "180° rotation arc",
//       "Adjustable boom height",
//       "Manual or electric hoist compatible",
//       "Reinforced mounting plate",
//       "Safety overload protection"
//     ],
//     specifications: {
//       "Boom Length": "3 meters",
//       "Height": "3.5 meters",
//       "Lift Capacity": "1000 kg",
//       "Rotation": "180°",
//       "Material": "High-tensile steel",
//       "Finish": "Powder coated"
//     }
//   },
//   {
//     id: 6,
//     name: "Heavy-Duty Pallet Trolley",
//     shortDescription: "Robust solution for pallet transportation",
//     description: "Industrial-grade pallet trolley designed for efficient transportation of heavy palletized loads. Features hydraulic lift system, reinforced forks, and ergonomic handle for operator comfort.",
//     category: "Handling Trolleys",
//     image: "https://images.pexels.com/photos/5025523/pexels-photo-5025523.jpeg?auto=compress&cs=tinysrgb&w=800",
//     model3D: "",
//     features: [
//       "Hydraulic lift system",
//       "Reinforced steel forks",
//       "Ergonomic handle design",
//       "Tandem load wheels",
//       "Overload protection valve"
//     ],
//     specifications: {
//       "Dimensions": "160 x 55 x 120 cm",
//       "Fork Length": "115 cm",
//       "Lift Height": "20 cm",
//       "Material": "High-grade steel",
//       "Load Capacity": "2500 kg",
//       "Weight": "85 kg"
//     }
//   }
// ];

// export default products;

// Mock product data with placeholder images
// In a real application, this would come from a backend/CMS

const products = [
  {
    id: 6,
    name: "Paint Shop Line",
    shortDescription: "Robust solution for pallet transportation",
    description: "Heavy-duty pallet trolley designed for efficient transportation of heavy palletized loads within paint shops and industrial facilities. Features a hydraulic lift system, reinforced forks, ergonomic handle, and overload protection valve—built for smooth, safe material handling.",
    category: "Handling Trolleys",
    images: [
      "/assets/paintShop/psimg1.jpg",
      "/assets/paintShop/psimg2.jpg",
      "/assets/paintShop/psimg3.jpg",
      "/assets/paintShop/psimg4.jpg",
      "/assets/paintShop/psimg5.jpg",
      "/assets/paintShop/psimg6.jpg",
      "/assets/paintShop/psimg7.jpg",
      "/assets/paintShop/psimg8.jpg"
    ],
    model3D: "",
    features: [
      "Hydraulic lift for easy pallet raising",
      "Reinforced steel forks (115 cm)",
      "Ergonomic handle reduces operator fatigue",
      "Tandem load wheels for stability",
      "Overload protection valve ensures safety"
    ],
    specifications: {
      "Dimensions": "160 x 55 x 120 cm",
      "Fork Length": "115 cm",
      "Lift Height": "20 cm",
      "Material": "High‑grade steel",
      "Load Capacity": "2,500 kg",
      "Weight": "85 kg"
    }
  },

  {

    id: 1,
    name: "Dust Collector System",
    shortDescription: "High‑performance industrial air filtration solution",
    description: "Robust industrial dust collector engineered for heavy‑duty operations. Features a modular steel housing, cartridge or bag‑filter media, and a powerful fan to capture and remove airborne particulates effectively, safeguarding equipment, personnel, and environmental compliance.",
    category: "Air Filtration Systems",
    images: [
      "/assets/dustCollector/dimg1.jpg",
      "/assets/dustCollector/dimg2.jpg",
      "/assets/dustCollector/dimg3.jpg",
      "/assets/dustCollector/dimg4.jpg",
      "/assets/dustCollector/dimg5.jpg",
      "/assets/dustCollector/dimg6.jpg",
      "/assets/dustCollector/dimg7.jpg",
      "/assets/dustCollector/dimg8.jpg",
      "/assets/dustCollector/dimg9.jpg"
    ],
    model3D: "", // Path to GLTF/GLB model if available
    features: [
      "Modular steel housing with powder‑coat finish",
      "Choice of cartridge or bag filter media (≥99% capture efficiency)",
      "Auto pulse‑jet or shaker filter cleaning",
      "Industrial fan/blower tuned for optimum CFM and static pressure balance",
      "Large-capacity hopper with tight‑seal discharge",
      "Compliant with OSHA, NFPA & EPA regulations"
    ],
    specifications: {
      "Airflow Capacity": "up to 5000 CFM (typical)",
      "Filter Surface Area": "400+ ft² cloth/cartridge media",
      "Efficiency": "> 99% particulate capture",
      "Construction Material": "Heavy‑duty steel with powder coat",
      "Cleaning Method": "Pulse‑jet or mechanical shaker",
      "Discharge": "Hopper with rotary/trickle valve or bin",
      "Noise Level": "Low‑noise design options available"
    }
  },

  {
    id: 2,
    name: "Ribbon Blender Machine",
    shortDescription: "Efficient industrial mixer for powders, granules & semi‑dry pastes",
    description: "Industrial ribbon blender engineered for uniform mixing of dry powders, granules, and low‑viscosity pastes. Features inner and outer helical ribbons housed in a U‑shaped stainless steel trough, providing thorough blending via counter‑current motion, ideal for food, chemical, pharmaceutical, and cosmetic applications.",
    category: "Industrial Mixers",
    images: [
      "/assets/ribbonBlender/rbimg1.jpg",
      "/assets/ribbonBlender/rbimg2.jpg",
      "/assets/ribbonBlender/rbimg3.jpg",
      "/assets/ribbonBlender/rbimg4.jpg",
      "/assets/ribbonBlender/rbimg5.jpg"
    ],
    model3D: "",
    features: [
      "304 SS U‑shaped trough with polished finish for hygiene and easy cleaning",
      "Counter‑current double‑ribbon agitator ensures rapid, uniform mixing",
      "Adjustable speed via VFD for gentle or intense blending",
      "Center discharge valve (butterfly/plug) for full batch evacuation",
      "Optional heating/cooling jacket or vacuum capability",
      "Safety interlocks and sealed shaft for contamination prevention"
    ],
    specifications: {
      "Batch Size": "30–70% of nominal capacity",
      "Speed": "Ribbon tip speed ≈ 300 ft/min (~1.5 m/s)",
      "Airflow": "Allows liquid addition/coating",
      "Noise Level": "<70 dB",
      "Power": "1.5 kW–30 kW (depending on capacity)",
      "Material": "304 stainless steel, GMP‑compliant"
    }
  }
  ,
  {
    id: 3,
    name: "Screw Conveyor",
    shortDescription: "Precision material dispensing for production lines",
    description: "Industrial screw (auger) conveyor engineered for reliable, continuous handling and metering of powders, granules, semi-solids, and slow-flowing materials. Equipped with a robust rotating helical screw within a U‑trough or tubular housing, it delivers smooth, variable-rate flow control ideal for production-line integration.",
    category: "Hopper Machines",
    images: [
      "/assets/screwConvey/scimg1.jpg",
      "/assets/screwConvey/scimg2.jpg",
      "/assets/screwConvey/scimg3.jpg",
      "/assets/screwConvey/scimg4.jpg",
      "/assets/screwConvey/scimg5.jpg",
      "/assets/screwConvey/scimg6.jpg",
      "/assets/screwConvey/scimg7.jpg",
      "/assets/screwConvey/scimg8.jpg",
      "/assets/screwConvey/scimg9.jpg"
    ],
    model3D: "",
    features: [
      "Adjustable flow rate via variable-speed drive",
      "Precision dispensing control for consistent batch output",
      "Heavy-duty steel or stainless-steel construction",
      "Anti-bridging screw design prevents clogging",
      "Enclosed trough prevents spills & dust",
      "Low maintenance with simple wear-component replacement"
    ],
    specifications: {
      "Capacity": "150 L",
      "Material": "Carbon steel / 304 SS",
      "Flow Rate": "5–50 kg/min (VFD-controlled)",
      "Power": "2.2 kW motor",
      "Control": "Manual or PLC-driven automation",
      "Weight": "≈120 kg"
    }
  }
  ,
  {
    id: 4,
    name: "Scissor Lift",
    shortDescription: "Versatile scissor lift trolley for ergonomic handling",
    description: "Heavy-duty scissor lift cart designed to elevate and transport tools, components, or equipment efficiently. Features a robust steel frame, hydraulically or mechanically powered X‑bar mechanism, and smooth-rolling casters, providing adjustable height positions and safe load handling.",
    category: "Storage & Lift Carts",
    images: [
      "/assets/scissorLift/slimg.jpg",
      "/assets/scissorLift/slimg1.jpg",
      "/assets/scissorLift/slimg2.jpg",
      "/assets/scissorLift/slimg3.jpg",
      "/assets/scissorLift/slimg4.jpg",
      "/assets/scissorLift/slimg5.jpg",
      "/assets/scissorLift/slimg6.jpg",
      "/assets/scissorLift/slimg7.jpg"
    ],
    model3D: "",
    features: [
      "Adjustable-height scissor-lift mechanism",
      "Lockable drawers and integrated tool holders",
      "Heavy‑duty steel construction with powder coating",
      "Smooth, non‑marking casters (2 swivel with brakes)",
      "Anti‑tilt safety design and overload protection"
    ],
    specifications: {
      "Dimensions": "90 x 60 x 160 cm",
      "Weight": "75 kg",
      "Material": "Powder‑coated steel",
      "Load Capacity": "300 kg total",
      "Shelves": "4 adjustable",
      "Drawers": "3 lockable"
    }
  }
  ,
  {
    id: 5,
    name: "Water Curtain Paint Booth",
    shortDescription: "Efficient overspray control and air purification",
    description: "Industrial-grade water curtain spray booth designed for high-volume painting applications. Utilizes a cascading water wall to scrub overspray particles from the paint-laden air, offering superior particle containment, consistent finishes, and environmental compliance.",
    category: "Paint Spray Booths",
    images: [
      "/assets/waterCurtain/wcimg1.jpg",
      "/assets/waterCurtain/wcimg2.jpg",
      "/assets/waterCurtain/wcimg3.jpg",
      "/assets/waterCurtain/wcimg4.jpg",
      "/assets/waterCurtain/wcimg5.jpg",
      "/assets/waterCurtain/wcimg6.jpg",
      "/assets/waterCurtain/wcimg7.jpg",
      "/assets/waterCurtain/wcimg8.jpg"
    ],
    model3D: "",
    features: [
      "Full-width water curtain to capture overspray",
      "High-efficiency axial or centrifugal exhaust fans",
      "Stainless steel or galvanized water scrubber walls",
      "Recirculating water system with pump and filtration",
      "Fire-suppressant water barrier",
      "Easy-access panels for sludge removal"
    ],
    specifications: {
      "Standard Widths": "800–4000 mm panels",
      "Airflow Capacity": "4,000–22,000 m³/h",
      "Fan Power": "0.37–2.2 kW",
      "Pump Power": "0.37–1.5 kW",
      "Water Flow Rate": "200–660 L/min",
      "Booth Weight": "300–1,050 kg (varies by model)"
    }
  }
  ,


];

export default products;