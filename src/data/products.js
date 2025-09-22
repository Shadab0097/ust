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
  {
    "id": 7,
    "name": "Atta Chakki Machine",
    "shortDescription": "Traditional stone-based flour grinding for fresh, nutritious flour",
    "description": "Commercial-grade atta chakki machine designed for high-quality flour production from wheat, rice, maize, and other grains. Features traditional stone grinding technology that preserves nutritional value and natural taste, with robust construction for continuous commercial operation and consistent flour quality.",
    "category": "Flour Milling Equipment",
    "images": [
      "/assets/attaChakki/ac1.jpg",
      "/assets/attaChakki/ac2.jpg",
    ],
    "model3D": "",
    "features": [
      "Traditional stone grinding mechanism for natural flour texture",
      "Heavy-duty motor with copper winding for continuous operation",
      "Adjustable grinding settings from coarse to fine",
      "Large capacity hopper for uninterrupted production",
      "Auto-stop safety feature when hopper is empty",
      "Easy maintenance with accessible grinding chamber",
      "Robust MS body construction with color-coated finish",
      "Multi-grain processing capability (wheat, rice, maize, millets)"
    ],
    "specifications": {
      "Motor Power": "1 HP - 25 HP (varies by model)",
      "Production Capacity": "8-200 kg/hr",
      "Stone Size": "14-30 inches",
      "Power Consumption": "0.75-15 kWh",
      "Operation Mode": "Semi-Automatic",
      "Voltage": "220V Single Phase / 440V Three Phase",
      "Weight": "100-1050 kg (model dependent)",
      "Material": "Mild Steel body with Stainless Steel contact parts",
      "RPM": "1440-2880 RPM",
      "Electricity Connection": "Single/Three Phase"
    }
  },
  {
    "id": 8,
    "name": "Sheet Rolling Machine",
    "shortDescription": "3-roll pyramid type for precise plate bending and forming",
    "description": "Industrial-grade 3-roll pyramid type sheet rolling machine designed for forming cylindrical, conical, and curved shapes from metal plates. Features asymmetrical roller configuration with upper main drive roller and adjustable lower rollers for versatile plate forming applications in fabrication and manufacturing industries.",
    "category": "Metal Forming Equipment",
    "images": [
      "/assets/sheetRolling/sr1.jpg",
      "/assets/sheetRolling/sr2.jpg",
      "/assets/sheetRolling/sr3.jpg",
      "/assets/sheetRolling/sr4.jpg",

    ],
    "model3D": "",
    "features": [
      "3-roll pyramid type asymmetrical design for superior forming",
      "Upper roller main drive with vertical lifting capability",
      "Two lower rollers with independent horizontal movement",
      "Pre-bending capability for plate edge forming",
      "Heavy-duty cast iron frame construction",
      "Mechanical gear drive system for consistent torque",
      "Manual control with easy operation handles",
      "Hardened and ground roller surfaces for durability",
      "Wide range of plate thickness handling capability",
      "Emergency stop safety features"
    ],
    "specifications": {
      "Max Plate Thickness": "3-50 mm (model dependent)",
      "Max Plate Width": "1500-6000 mm",
      "Min Rolling Diameter": "300-1200 mm",
      "Upper Roller Diameter": "150-670 mm",
      "Lower Roller Diameter": "120-620 mm",
      "Motor Power": "3-75 kW",
      "Production Capacity": "1-6 ton/day",
      "Plate Yield Limit": "245 MPa",
      "Rolling Speed": "6 m/min",
      "Machine Weight": "300-90000 kg (varies by model)",
      "Operating Mode": "Manual/Semi-Automatic"
    }
  },
  {
    "id": 9,
    "name": "Telescopic Belt Conveyor",
    "shortDescription": "Extendable loading system for efficient truck and container operations",
    "description": "Multi-stage telescopic belt conveyor system designed for rapid loading and unloading of trucks, containers, and warehouses. Features hydraulic extension and retraction capabilities with adjustable height settings, enabling operators to reach deep into vehicles while minimizing manual handling and improving operational efficiency.",
    "category": "Material Handling Equipment",
    "images": [
      "/assets/telescopicBelt/ts1.jpg",
      "/assets/telescopicBelt/ts2.jpg",
      "/assets/telescopicBelt/ts3.jpg",
      "/assets/telescopicBelt/ts4.jpg",

    ],
    "model3D": "",
    "features": [
      "Multi-stage telescopic extension up to 21 meters",
      "Hydraulic height adjustment system (up to 3 meters lift)",
      "Bi-directional belt movement for loading/unloading",
      "PLC intelligent controller with fault detection",
      "Mobile design with solid tires and castor wheels",
      "Variable speed control with VFD drive",
      "Emergency stop safety features",
      "Compact retracted length for space efficiency",
      "Heavy-duty steel frame construction",
      "Remote control operation capability"
    ],
    "specifications": {
      "Number of Stages": "3-5 stages",
      "Fixed Length": "4-16 meters",
      "Extension Length": "5.4-22 meters",
      "Total Extended Length": "9.4-38 meters",
      "Belt Width": "600-800 mm",
      "Belt Material": "PVC/PU/Rubber with alligator clip joints",
      "Load Capacity": "50 kg/meter",
      "Maximum Load": "4000 kg total",
      "Belt Speed": "15-40 m/min (adjustable)",
      "Extension Speed": "10-20 m/min",
      "Height Range": "750-2100 mm (adjustable)",
      "Motor Power": "3-6.95 kW total system",
      "Voltage": "220V/380V/415V, 50/60Hz",
      "Control System": "PLC with touch panel interface"
    }
  }
  ,
  {
    "id": 10,
    "name": "Vibro De-Stoner",
    "shortDescription": "Precision stone and heavy impurity removal from grains and pulses",
    "description": "Advanced vibratory destoning machine designed for efficient separation of stones, glass, metal fragments, and other heavy impurities from grains, pulses, and seeds. Utilizes specific gravity differences and controlled air flow with reciprocating motion to achieve superior cleaning performance in grain processing applications.",
    "category": "Grain Cleaning Equipment",
    "images": [
      "/assets/vibroDeStoner/vd1.jpg",
      "/assets/vibroDeStoner/vd2.jpg",
      "/assets/vibroDeStoner/vd3.jpg",
      "/assets/vibroDeStoner/vd4.jpg",
      "/assets/vibroDeStoner/vd5.jpg",

    ],
    "model3D": "",
    "features": [
      "Fluidized air bed technology for precise stratification",
      "Adjustable deck inclination for optimal separation efficiency",
      "Transparent viewing window for process monitoring",
      "Dual vibro motors for consistent reciprocating motion",
      "Integrated aspiration system with cyclone blower",
      "Stainless steel contact parts for food-grade safety",
      "Rubber spring suspension system for smooth operation",
      "Easy maintenance with accessible screen deck",
      "Dust-free operation with enclosed design",
      "Multiple discharge outlets for different fractions"
    ],
    "specifications": {
      "Processing Capacity": "1-12 TPH (varies by model)",
      "Motor Configuration": "Main: 5-10 HP, Vibro: 0.5-1 HP x 2",
      "Screen Deck Size": "950-1340 mm width",
      "Number of Decks": "1-2 decks",
      "Separation Efficiency": ">95% stone removal",
      "Power Consumption": "7.5-15 kW total",
      "Voltage": "440V, 3 Phase, 50 Hz",
      "Air Flow Rate": "2000-4000 m³/hr",
      "Dimensions (LxWxH)": "1537x1130x1930 to 1537x1340x1930 mm",
      "Weight": "800-1440 kg",
      "Material": "MS body with SS contact parts",
      "Operating Mode": "Automatic with manual controls"
    }
  }
  ,
  {
    "id": 11,
    "name": "Hammer Mill",
    "shortDescription": "High-speed crushing and grinding for feed and grain processing",
    "description": "Industrial hammer mill designed for crushing and grinding various materials including grains, feed components, agricultural products, and biomass. Features high-speed rotating hammers that reduce material size through multiple impact crushing, with adjustable screen perforations for precise particle size control in feed mills and processing plants.",
    "category": "Crushing & Grinding Equipment",
    "images": [
      "/assets/hammerMill/hm1.jpg",
      "/assets/hammerMill/hm2.jpg",
      "/assets/hammerMill/hm3.jpg",
      "/assets/hammerMill/hmi4.jpg",

    ],
    "model3D": "",
    "features": [
      "High-speed rotating hammer system for impact crushing",
      "Interchangeable perforated screens for size control",
      "Free-swinging hammers to minimize wear and blocking",
      "Heavy-duty rotor shaft with balanced design",
      "Adjustable hammer-to-screen gap settings",
      "Dust collection system with cyclone separator",
      "Reversible hammers for extended service life",
      "Easy access doors for maintenance and screen changes",
      "Robust steel construction with wear-resistant linings",
      "Variable speed control for different materials"
    ],
    "specifications": {
      "Motor Power": "5-100 HP (3.7-75 kW)",
      "Production Capacity": "200-3000 kg/hr",
      "Hammer Tip Speed": "80-100 m/sec",
      "RPM Range": "1500-3600 RPM",
      "Rotor Diameter": "200-760 mm",
      "Number of Hammers": "8-48 pieces",
      "Screen Hole Size": "1-40 mm (interchangeable)",
      "Feed Size": "Up to 100 mm",
      "Final Fineness": "0.5-15 mm",
      "Chamber Dimensions": "200x150 to 760x600 mm",
      "Voltage": "220V/380V/415V, 3-phase",
      "Material Construction": "MS/SS contact parts",
      "Machine Weight": "150-5000 kg (model dependent)"
    }
  }




];

export default products;