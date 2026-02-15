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
    slug: "paint-shop-line",
    shortDescription: "Robust solution for pallet transportation",
    description: "U.S.T Enterprises is a leading manufacturer of Heavy-duty pallet trolleys/Paint Shop Lines in India. Designed for efficient transportation of heavy palletized loads within paint shops and industrial facilities. Features a hydraulic lift system, reinforced forks, ergonomic handle, and overload protection valve—built for smooth, safe material handling.",
    category: "Handling Trolleys",
    seoTitle: "Paint Shop Line & Pallet Trolley Manufacturer in Gurgaon | 2500 kg Capacity",
    seoDescription: "Paint Shop Line with hydraulic lift & 2500 kg capacity. Manufacturer in IMT Manesar, Gurgaon. Reinforced steel forks, overload protection. Get factory price.",
    seoKeywords: "Paint Shop Line, Paint Shop Line Manufacturer Gurgaon, Pallet Trolley for Paint Shop, Hydraulic Pallet Trolley 2500 kg, Paint Shop Conveyor System, Paint Line Equipment Manufacturer India, Paint Shop Material Handling Trolley, Heavy Duty Pallet Trolley Manufacturer, Industrial Paint Shop Trolley Price, Conveyorized Paint Line Gurgaon, Paint Shop Trolley with Hydraulic Lift, U.S.T Enterprises",
    faqs: [
      { question: "What is a Paint Shop Line used for in manufacturing?", answer: "A Paint Shop Line is used for transporting components through pre-treatment, primer application, top coating, and drying stages in automotive, appliance, and metal fabrication manufacturing plants." },
      { question: "What is the load capacity of your Paint Shop Line pallet trolley?", answer: "Our pallet trolley has a 2,500 kg load capacity with 115 cm reinforced steel forks, hydraulic lift system, and overload protection valve for safe heavy-load handling." },
      { question: "Can you customize Paint Shop Lines for our factory layout?", answer: "Yes, we design and manufacture custom Paint Shop Lines at our IMT Manesar facility, tailored to your factory dimensions, production volume, and specific coating process requirements." },
      { question: "How much does a Paint Shop Line cost?", answer: "Pricing depends on line length, trolley capacity, and automation level. As a direct manufacturer in Gurgaon, we offer competitive factory pricing. Contact us for a detailed quotation." }
    ],
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
    id: 15,
    name: "Hydro Turbine",
    slug: "hydro-turbine",
    shortDescription: "High-efficiency water-to-energy conversion for hydroelectric power generation",
    description: "Premium Industrial-grade Francis/Kaplan type hydro turbine manufacturer in Gurgaon, India. Our turbines are designed for converting kinetic and potential energy of flowing water into mechanical rotational energy for electricity generation. Features precision-engineered runner blades, wicket gate control system, and robust construction for reliable operation in medium-head hydroelectric applications.",
    category: "Power Generation Equipment",
    seoTitle: "Small Hydro Turbine Manufacturer India | Francis & Kaplan 100kW–50MW",
    seoDescription: "Small & micro hydro turbine manufacturer in India. Francis & Kaplan types, 100kW to 50MW, 85-95% efficiency. SS316 construction, 40+ year design life. Get quote.",
    seoKeywords: "Small Hydro Turbine Manufacturer India, Micro Hydro Turbine India, Francis Turbine Manufacturer, Kaplan Turbine Manufacturer India, Mini Hydro Power Plant India, Hydro Turbine 100kW, Small Hydroelectric Generator India, Water Turbine for Power Generation, Hydro Turbine Price India, Cross Flow Turbine India, Pelton Turbine Manufacturer, Hydroelectric Turbine Supplier Gurgaon, Off Grid Hydro Power India, Rural Electrification Hydro Turbine, U.S.T Enterprises",
    faqs: [
      { question: "What size hydro turbines do you manufacture?", answer: "We manufacture Francis and Kaplan type hydro turbines from 100 kW to 50 MW capacity, suitable for small hydro, mini hydro, and medium-scale hydroelectric power projects across India." },
      { question: "What is the efficiency of your small hydro turbines?", answer: "Our turbines achieve 85-95% peak efficiency with precision-engineered runner blades in SS316/SS410 stainless steel, optimized for maximum energy extraction from water flow." },
      { question: "How long does a hydro turbine last?", answer: "Our turbines are designed for 40-50 years of service life with proper maintenance. The corrosion-resistant stainless steel construction ensures durability in harsh water environments." },
      { question: "Do you supply hydro turbines for rural electrification projects?", answer: "Yes, we supply micro and small hydro turbines for rural electrification, off-grid power generation, and irrigation projects. We provide turnkey solutions including site assessment, installation, and commissioning." },
      { question: "What is the cost of a small hydro turbine in India?", answer: "Cost depends on turbine type (Francis/Kaplan), power output, head range, and site conditions. As a direct manufacturer, we offer competitive pricing. Contact us for a project-specific quotation." }
    ],
    images: [
      "/assets/hydroTurbine/ht1.jpg",
      "/assets/hydroTurbine/ht2.jpg",
      "/assets/hydroTurbine/ht3.jpg",
      "/assets/hydroTurbine/ht4.jpg",
      "/assets/hydroTurbine/ht5.jpg",
      "/assets/hydroTurbine/ht6.jpg",
      "/assets/hydroTurbine/ht7.jpg",
      "/assets/hydroTurbine/ht8.jpg"
    ],
    model3D: "",
    features: [
      "Precision-cast stainless steel runner with optimized blade geometry",
      "Adjustable wicket gate system for flow regulation",
      "Governor-controlled automatic operation",
      "Draft tube for energy recovery and cavitation prevention",
      "Spiral case for uniform water distribution",
      "Thrust and guide bearing systems for smooth operation",
      "Corrosion-resistant materials for marine environment",
      "High-efficiency blade design for maximum energy extraction",
      "Integrated monitoring and control systems",
      "Maintenance-friendly modular construction"
    ],
    specifications: {
      "Turbine Type": "Francis/Kaplan Reaction Turbine",
      "Power Output": "100 kW - 50 MW",
      "Operating Head": "10-300 meters",
      "Flow Rate": "0.5-100 m³/s",
      "Efficiency": "85-95% peak efficiency",
      "Rotational Speed": "75-1500 RPM",
      "Runner Diameter": "0.5-8 meters",
      "Number of Blades": "12-24 (Francis), 4-8 (Kaplan)",
      "Material": "Cast/Forged Stainless Steel (SS316/SS410)",
      "Operating Temperature": "0-40°C",
      "Design Life": "40-50 years",
      "Cavitation Index": "σ > 0.1-0.3 (design dependent)",
      "Generator Coupling": "Direct drive or gear box coupling",
      "Control System": "PLC-based with HMI interface"
    }
  },
  {
    id: 1,
    name: "Dust Collector System",
    slug: "dust-collector-system",
    shortDescription: "High‑performance industrial air filtration solution",
    description: "Leading Dust Collector System manufacturer in India. Robust industrial dust collector engineered for heavy‑duty operations. Features a modular steel housing, cartridge or bag‑filter media, and a powerful fan to capture and remove airborne particulates effectively, safeguarding equipment, personnel, and environmental compliance.",
    category: "Air Filtration Systems",
    seoTitle: "Pulse Jet Bag Filter Dust Collector Manufacturer Gurgaon | 5000 CFM Capacity",
    seoDescription: "Pulse jet bag filter & cartridge dust collector manufacturer in Gurgaon. Up to 5000 CFM, 99%+ efficiency, CPCB compliant. Factory direct price from IMT Manesar.",
    seoKeywords: "Pulse Jet Bag Filter Dust Collector, Dust Collector Manufacturer Gurgaon, Cartridge Dust Collector India, Industrial Dust Extraction System Manufacturer, Bag Filter Dust Collector 5000 CFM, Dust Collection System for Grinding, Dust Collector for Cement Plant, Dust Collector for Pharma Industry, Wood Dust Collector India, CPCB Compliant Dust Collector, Baghouse Dust Collector Manufacturer, Cyclone Dust Collector India, Welding Fume Extractor Manufacturer, U.S.T Enterprises",
    faqs: [
      { question: "What type of dust collectors do you manufacture?", answer: "We manufacture pulse-jet bag filter dust collectors, cartridge-type dust collectors, and cyclone separators with airflow capacity up to 5000 CFM and 99%+ particulate capture efficiency at our Gurgaon facility." },
      { question: "Which industries use your dust collector systems?", answer: "Our dust collectors serve cement plants, pharmaceutical facilities, woodworking shops, grinding operations, welding workshops, food processing units, and chemical industries across India." },
      { question: "Are your dust collectors CPCB compliant?", answer: "Yes, our dust collectors comply with CPCB (Central Pollution Control Board), OSHA, and EPA emission standards, helping your facility meet all environmental regulations." },
      { question: "How much does an industrial dust collector cost?", answer: "Pricing depends on airflow capacity (CFM), filter type (bag/cartridge), and application. As a direct manufacturer in IMT Manesar, we offer factory-direct competitive pricing. Request a free quote." }
    ],
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
    model3D: "",
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
    slug: "ribbon-blender-machine",
    shortDescription: "Efficient industrial mixer for powders, granules & semi‑dry pastes",
    description: "Top-rated Ribbon Blender Machine manufacturer. Industrial ribbon blender engineered for uniform mixing of dry powders, granules, and low‑viscosity pastes. Features inner and outer helical ribbons housed in a U‑shaped stainless steel trough, providing thorough blending via counter‑current motion, ideal for food, chemical, pharmaceutical, and cosmetic applications.",
    category: "Industrial Mixers",
    seoTitle: "SS304 Ribbon Blender Machine Manufacturer | GMP Compliant Powder Mixer",
    seoDescription: "GMP compliant SS304 ribbon blender manufacturer in India. 1.5-30kW, food grade & pharma grade. Powder, granule & paste mixing. Factory price from Gurgaon.",
    seoKeywords: "SS Ribbon Blender Manufacturer, Ribbon Blender Machine for Pharma, GMP Ribbon Blender India, Powder Mixer Machine Manufacturer, Ribbon Blender 500 kg Capacity, Ribbon Blender for Food Processing, Horizontal Ribbon Mixer India, Double Ribbon Blender Manufacturer, Ribbon Blender Machine Price India, Stainless Steel Ribbon Blender, Ribbon Blender for Spice Mixing, Ribbon Blender with Heating Jacket, Dry Powder Blender Machine, Ribbon Blender Manufacturer Delhi NCR, U.S.T Enterprises",
    faqs: [
      { question: "What industries use your ribbon blender machines?", answer: "Our SS304 ribbon blenders serve pharmaceutical, food processing, chemical, cosmetics, and spice blending industries. GMP-compliant design meets stringent hygiene requirements for regulated industries." },
      { question: "What capacities are available in your ribbon blenders?", answer: "We manufacture ribbon blenders from lab-scale to 500+ kg batch capacity with motor power from 1.5 kW to 30 kW, suitable for small batch to large-scale production." },
      { question: "Can you supply ribbon blenders with heating or cooling jackets?", answer: "Yes, we offer optional heating/cooling jackets, spray nozzles, and vacuum systems for applications requiring temperature-controlled or moisture-sensitive blending operations." },
      { question: "What is the cost of a GMP ribbon blender in India?", answer: "Pricing varies by capacity, material grade (SS304/SS316), and options (jacket, vacuum). As a direct manufacturer near Delhi NCR, we offer competitive factory pricing. Get a custom quote." }
    ],
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
  },
  {
    id: 3,
    name: "Screw Conveyor",
    slug: "screw-conveyor",
    shortDescription: "Precision material dispensing for production lines",
    description: "High-quality Screw Conveyor manufacturer and supplier in Delhi NCR. Industrial screw (auger) conveyor engineered for reliable, continuous handling and metering of powders, granules, semi-solids, and slow-flowing materials. Equipped with a robust rotating helical screw within a U‑trough or tubular housing, it delivers smooth, variable-rate flow control.",
    category: "Hopper Machines",
    seoTitle: "Screw Conveyor & Auger Feeder Manufacturer Delhi NCR | SS & MS Options",
    seoDescription: "Screw conveyor & auger feeder manufacturer in Delhi NCR. VFD controlled, 5-50 kg/min, SS304 & carbon steel. For powder, grain, cement handling. Factory price.",
    seoKeywords: "Screw Conveyor Manufacturer Delhi NCR, Auger Feeder Manufacturer India, Screw Feeder for Powder, Inclined Screw Conveyor Manufacturer, Screw Conveyor for Cement, Stainless Steel Screw Conveyor, Flexible Screw Conveyor for Food, Tubular Screw Conveyor India, Screw Conveyor for Grain Handling, Shaftless Screw Conveyor Manufacturer, Screw Conveyor Price India, Volumetric Screw Feeder, Dust Free Powder Transfer System, Screw Conveyor for Chemical Industry, U.S.T Enterprises",
    faqs: [
      { question: "What types of screw conveyors do you manufacture?", answer: "We manufacture U-trough, tubular, inclined, and shaftless screw conveyors in both SS304 stainless steel and carbon steel, with VFD-controlled drives for adjustable flow rates from 5 to 50 kg/min." },
      { question: "Can your screw conveyor handle food-grade materials?", answer: "Yes, our SS304 screw conveyors with food-grade finish and dust-free enclosed design are suitable for food processing, pharmaceutical, and chemical powder handling applications." },
      { question: "Do you make screw conveyors for cement and construction materials?", answer: "Yes, we manufacture heavy-duty carbon steel screw conveyors for cement, fly ash, limestone, and other abrasive construction materials with hardened screw flights for extended life." },
      { question: "What determines the cost of a screw conveyor?", answer: "Cost depends on length, screw diameter, material (MS or SS304), drive power, and application. As a direct manufacturer near Delhi NCR, we offer competitive pricing. Contact us for a quote." }
    ],
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
  },
  {
    id: 4,
    name: "Scissor Lift",
    slug: "scissor-lift",
    shortDescription: "Versatile scissor lift trolley for ergonomic handling",
    description: "Heavy-duty Scissor Lift Manufacturer in India. Scissor lift cart designed to elevate and transport tools, components, or equipment efficiently. Features a robust steel frame, hydraulically or mechanically powered X‑bar mechanism, and smooth-rolling casters, providing adjustable height positions and safe load handling.",
    category: "Storage & Lift Carts",
    seoTitle: "Hydraulic Scissor Lift Table Manufacturer Gurgaon | 300 kg Capacity Lift Cart",
    seoDescription: "Hydraulic scissor lift table & trolley manufacturer in Gurgaon. 300 kg capacity, adjustable height, smooth casters. For warehouse & assembly line. Factory price.",
    seoKeywords: "Hydraulic Scissor Lift Table Manufacturer, Scissor Lift Trolley 300 kg, Scissor Lift Cart Manufacturer India, Industrial Scissor Lift Table Price, Scissor Lift for Warehouse, Scissor Lift for Assembly Line, Low Profile Scissor Lift India, Mobile Scissor Lift Table, Heavy Duty Scissor Lift Manufacturer Gurgaon, Material Handling Lift Table, Ergonomic Lift Table Manufacturer, Die Loader Scissor Lift, Scissor Lift with Wheels, U.S.T Enterprises",
    faqs: [
      { question: "What is a hydraulic scissor lift table used for?", answer: "Our hydraulic scissor lift tables are used for ergonomic material handling in warehouses, assembly lines, loading docks, and maintenance work. The 300 kg capacity model lifts tools, components, and equipment to adjustable heights." },
      { question: "What is the load capacity and lift height of your scissor lift?", answer: "Our standard model offers 300 kg capacity with adjustable height positions. Custom models are available with higher capacities and specific platform sizes for specialized industrial applications." },
      { question: "Do you supply scissor lifts with wheels for mobility?", answer: "Yes, our scissor lift trolleys come with smooth-rolling casters for easy movement across the shop floor, plus locking brakes for stability when the lift is in use." },
      { question: "How much does a hydraulic scissor lift table cost?", answer: "Cost depends on capacity, platform size, lift height, and drive type. Manufactured at our Gurgaon facility, we offer direct factory pricing. Contact us for a tailored quotation." }
    ],
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
  },
  {
    id: 5,
    name: "Water Curtain Paint Booth",
    slug: "water-curtain-paint-booth",
    shortDescription: "Efficient overspray control and air purification",
    description: "Leading manufacturer of Water Curtain Paint Booths in Gurgaon. Industrial-grade water curtain spray booth designed for high-volume painting applications. Utilizes a cascading water wall to scrub overspray particles from the paint-laden air, offering superior particle containment, consistent finishes, and environmental compliance.",
    category: "Paint Spray Booths",
    seoTitle: "Water Wash Paint Booth Manufacturer Gurgaon | Wet Spray Booth for Automotive",
    seoDescription: "Water wash / water curtain paint booth manufacturer in Gurgaon. Wet spray booth for automotive, furniture & metal finishing. 22000 m³/h airflow. Turnkey setup.",
    seoKeywords: "Water Wash Paint Booth Manufacturer, Water Curtain Spray Booth Gurgaon, Wet Type Paint Booth India, Spray Paint Booth for Automotive, Paint Booth for Furniture Industry, Industrial Spray Booth Manufacturer Delhi NCR, Liquid Painting Booth Manufacturer, Downdraft Paint Booth India, Paint Booth with Water Scrubber, Paint Booth for Metal Finishing, Fire Retardant Paint Booth, Overspray Control Paint Booth, Custom Paint Booth Manufacturer India, Paint Booth Installation Service, U.S.T Enterprises",
    faqs: [
      { question: "What is the difference between water wash and dry filter paint booths?", answer: "Water wash (wet) paint booths use a cascading water wall to capture overspray, offering superior particle capture, built-in fire suppression, and lower recurring filter costs compared to dry filter booths. They're ideal for high-volume production." },
      { question: "Which industries use your water curtain paint booths?", answer: "Our booths serve automotive painting, furniture finishing, metal fabrication, appliance manufacturing, and any industry requiring high-quality spray painting with overspray control and environmental compliance." },
      { question: "Do you provide turnkey paint booth installation?", answer: "Yes, we provide complete turnkey solutions from our Gurgaon facility — including booth design, manufacturing, delivery, installation, ducting, exhaust system setup, and commissioning at your factory." },
      { question: "What is the cost of a water curtain paint booth in India?", answer: "Cost depends on booth dimensions, airflow capacity (up to 22,000 m³/h), and configuration. Standard panel widths range 800-4000mm. As a direct manufacturer, we offer competitive pricing. Get a free quote." }
    ],
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
  },
  {
    id: 7,
    name: "Atta Chakki Machine",
    slug: "atta-chakki-machine",
    shortDescription: "Traditional stone-based flour grinding for fresh, nutritious flour",
    description: "Commercial Atta Chakki Machine manufacturer for high-quality flour production. Designed for commercial processing of wheat, rice, maize, and other grains. Features traditional stone grinding technology that preserves nutritional value and natural taste, with robust construction for continuous commercial operation.",
    category: "Flour Milling Equipment",
    seoTitle: "Commercial Atta Chakki Machine 5HP 10HP 15HP | Stone Flour Mill Manufacturer",
    seoDescription: "Commercial atta chakki 1-25 HP stone flour mill manufacturer. 8-200 kg/hr capacity, multi-grain grinding. For shop, restaurant & business. Factory price India.",
    seoKeywords: "Commercial Atta Chakki Machine, Atta Chakki 5 HP Price, Atta Chakki 10 HP Price, Stone Flour Mill Machine, Atta Chakki Machine for Business, Automatic Atta Chakki, Domestic Flour Mill Machine, Mini Flour Mill for Shop, Masala Grinding Machine, Multi Grain Atta Chakki, Atta Chakki for Restaurant, Wheat Grinding Machine Manufacturer, Atta Chakki Plant Setup, Atta Chakki Machine Single Phase, Atta Chakki Manufacturer Gurgaon, U.S.T Enterprises",
    faqs: [
      { question: "Which HP atta chakki is best for a flour shop business?", answer: "For a flour shop, a 5 HP or 10 HP atta chakki is ideal, producing 30-80 kg/hr of fresh atta. For larger commercial operations, our 15-25 HP models handle 100-200 kg/hr output." },
      { question: "Can your atta chakki grind spices and multiple grains?", answer: "Yes, our stone atta chakki machines grind wheat, rice, maize, millets, pulses, and spices with adjustable coarseness settings — perfect for multi-grain flour and masala grinding businesses." },
      { question: "Does the atta chakki machine run on single phase power?", answer: "Our 1-5 HP models run on 220V single phase (home/shop supply). Larger models (10-25 HP) require 440V three phase. Power consumption ranges from 0.75 to 15 kWh." },
      { question: "What is the price of a 5 HP commercial atta chakki?", answer: "Pricing varies by HP, stone size (14-30 inches), and features. As a direct manufacturer, we offer competitive factory pricing without middlemen. Contact us for model-wise price list." },
      { question: "How to start an atta chakki business?", answer: "You need a 5-10 HP atta chakki (₹30,000-₹1,50,000 range), 100-200 sq ft space, single/three phase power connection, and FSSAI license. We provide complete setup guidance and after-sales support." }
    ],
    images: [
      "/assets/attaChakki/ac1.jpg",
      "/assets/attaChakki/ac2.jpg",
    ],
    model3D: "",
    features: [
      "Traditional stone grinding mechanism for natural flour texture",
      "Heavy-duty motor with copper winding for continuous operation",
      "Adjustable grinding settings from coarse to fine",
      "Large capacity hopper for uninterrupted production",
      "Auto-stop safety feature when hopper is empty",
      "Easy maintenance with accessible grinding chamber",
      "Robust MS body construction with color-coated finish",
      "Multi-grain processing capability (wheat, rice, maize, millets)"
    ],
    specifications: {
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
    id: 8,
    name: "Sheet Rolling Machine",
    slug: "sheet-rolling-machine",
    shortDescription: "3-roll pyramid type for precise plate bending and forming",
    description: "Industrial Sheet Rolling Machine manufacturer in India. 3-roll pyramid type sheet rolling machine designed for forming cylindrical, conical, and curved shapes from metal plates. Features asymmetrical roller configuration with upper main drive roller and adjustable lower rollers for versatile plate forming applications.",
    category: "Metal Forming Equipment",
    seoTitle: "3 Roll Plate Bending Machine Manufacturer India | 3-50mm Sheet Rolling",
    seoDescription: "3 roll pyramid plate bending machine manufacturer in India. 3-50mm thickness, 1500-6000mm width. For tank, pipe & vessel fabrication. Direct factory price.",
    seoKeywords: "3 Roll Plate Bending Machine Manufacturer, Sheet Rolling Machine India, Plate Rolling Machine 3mm to 50mm, Pyramid Roll Bending Machine, Plate Bending Machine for Tank Fabrication, Sheet Metal Rolling Machine Price India, Hydraulic Plate Rolling Machine Manufacturer, Plate Bending Machine for Pipe Making, Cone Rolling Machine India, Cylinder Rolling Machine Manufacturer, Pre Bending Plate Machine, Heavy Duty Plate Rolling Machine, Plate Bending Machine Manufacturer Delhi NCR, U.S.T Enterprises",
    faqs: [
      { question: "What plate thickness can your 3 roll bending machine handle?", answer: "Our 3-roll pyramid type machines handle 3mm to 50mm plate thickness with rolling widths from 1500mm to 6000mm. Motor power ranges from 3 to 75 kW based on capacity." },
      { question: "Can your machine roll both cylinders and cones?", answer: "Yes, our plate bending machines form cylindrical, conical, parabolic, and various curved shapes with pre-bending capability for edge forming — ideal for tank, vessel, and pipe fabrication." },
      { question: "Which industries use your sheet rolling machines?", answer: "Our machines serve pressure vessel manufacturers, tank fabricators, pipe makers, boiler manufacturers, wind tower producers, and structural steel fabrication workshops." },
      { question: "What determines the price of a plate bending machine?", answer: "Price depends on maximum plate thickness, rolling width, motor power, and hydraulic vs. mechanical operation. We manufacture directly in India, offering competitive pricing without import costs." }
    ],
    images: [
      "/assets/sheetRolling/sr1.jpg",
      "/assets/sheetRolling/sr2.jpg",
      "/assets/sheetRolling/sr3.jpg",
      "/assets/sheetRolling/sr4.jpg",
    ],
    model3D: "",
    features: [
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
    specifications: {
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
    id: 9,
    name: "Telescopic Belt Conveyor",
    slug: "telescopic-belt-conveyor",
    shortDescription: "Extendable loading system for efficient truck and container operations",
    description: "Telescopic Belt Conveyor system manufacturer. Multi-stage telescopic belt conveyor system designed for rapid loading and unloading of trucks, containers, and warehouses. Features hydraulic extension and retraction capabilities with adjustable height settings, enabling operators to reach deep into vehicles while minimizing manual handling.",
    category: "Material Handling Equipment",
    seoTitle: "Telescopic Belt Conveyor for Truck Loading | Extendable Conveyor Manufacturer India",
    seoDescription: "Telescopic belt conveyor for truck & container loading/unloading. 3-5 stage, extends up to 38m, PLC controlled. Manufacturer in India. Reduce manpower 60%.",
    seoKeywords: "Telescopic Conveyor for Truck Loading, Telescopic Belt Conveyor Manufacturer India, Extendable Conveyor for Container Loading, Truck Loading Conveyor System, Telescopic Conveyor for Warehouse, Boom Conveyor for Loading, PLC Controlled Telescopic Conveyor, Telescopic Conveyor Price India, Container Stuffing Conveyor, Retractable Belt Conveyor Manufacturer, Loading Conveyor for E-commerce, Telescopic Conveyor for FMCG, Parcel Loading Conveyor System, U.S.T Enterprises",
    faqs: [
      { question: "How does a telescopic conveyor speed up truck loading?", answer: "Our telescopic belt conveyors extend directly into trucks and containers (up to 38m), eliminating manual carrying. They reduce loading time by 50-60% and required manpower by up to 60% compared to manual loading." },
      { question: "What industries benefit from telescopic conveyors?", answer: "E-commerce fulfillment centers, FMCG warehouses, logistics hubs, courier companies, food & beverage distribution, and any operation involving frequent truck or container loading/unloading." },
      { question: "How many stages does your telescopic conveyor have?", answer: "Our conveyors feature 3-5 telescopic stages with total extended lengths from 9.4 to 38 meters. Belt speed is adjustable from 15-40 m/min with PLC-controlled operation and hydraulic height adjustment up to 2100mm." },
      { question: "What is the cost of a telescopic belt conveyor in India?", answer: "Cost varies by number of stages, extension length, belt width, and automation level. As a direct manufacturer in India, we offer significant cost savings over imported alternatives. Get a project-specific quote." }
    ],
    images: [
      "/assets/telescopicBelt/ts1.jpg",
      "/assets/telescopicBelt/ts2.jpg",
      "/assets/telescopicBelt/ts3.jpg",
      "/assets/telescopicBelt/ts4.jpg",
    ],
    model3D: "",
    features: [
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
    specifications: {
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
  },
  {
    id: 10,
    name: "Vibro De-Stoner",
    slug: "vibro-de-stoner",
    shortDescription: "Precision stone and heavy impurity removal from grains and pulses",
    description: "Advanced Vibro De-Stoner manufacturer for grain processing. Designed for efficient separation of stones, glass, metal fragments, and other heavy impurities from grains, pulses, and seeds. Utilizes specific gravity differences and controlled air flow with reciprocating motion to achieve superior cleaning performance.",
    category: "Grain Cleaning Equipment",
    seoTitle: "Vibro Destoner Machine for Dal Mill & Rice Mill | Manufacturer India",
    seoDescription: "Vibro destoner for dal mill, rice mill & grain cleaning. 1-12 TPH, 95%+ stone removal. Gravity separation technology. Manufacturer price India. Free quote.",
    seoKeywords: "Vibro Destoner for Dal Mill, Destoner Machine for Rice Mill, Grain Destoner Machine Manufacturer India, Stone Separator Machine for Pulses, Vibro Cleaner Destoner, Destoner Machine 5 TPH, Gravity Destoner Machine, Destoner for Wheat Cleaning, Spice Destoner Machine, Destoner for Cumin Sesame, Dal Cleaning Machine Manufacturer, Rice Destoner India, Seed Pre Cleaner Machine, Stone Removing Machine from Grain, U.S.T Enterprises",
    faqs: [
      { question: "Which mills use vibro destoner machines?", answer: "Vibro destoners are essential equipment in dal mills, rice mills, wheat flour mills, spice processing units, and seed cleaning plants for removing stones and heavy impurities before processing." },
      { question: "What capacity destoner machines do you offer?", answer: "We offer destoner machines from 1 TPH to 12 TPH processing capacity with 95%+ stone removal efficiency. Multi-deck configurations are available for higher throughput." },
      { question: "Can the destoner handle small seeds like cumin and sesame?", answer: "Yes, our vibro destoner processes wheat, rice, pulses (dal), cumin, sesame, mustard, millets, and other seeds with adjustable vibration and airflow for different seed sizes." },
      { question: "What is the price of a 5 TPH destoner machine?", answer: "Pricing varies by capacity, deck configuration, and motor setup. As a direct manufacturer, we offer factory-direct pricing without dealer markups. Contact us for a model-specific price list." }
    ],
    images: [
      "/assets/vibroDeStoner/vd1.jpg",
      "/assets/vibroDeStoner/vd2.jpg",
      "/assets/vibroDeStoner/vd3.jpg",
      "/assets/vibroDeStoner/vd4.jpg",
      "/assets/vibroDeStoner/vd5.jpg",
    ],
    model3D: "",
    features: [
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
    specifications: {
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
  },
  {
    id: 11,
    name: "Hammer Mill",
    slug: "hammer-mill",
    shortDescription: "High-speed crushing and grinding for feed and grain processing",
    description: "Industrial Hammer Mill manufacturer. Designed for crushing and grinding various materials including grains, feed components, agricultural products, and biomass. Features high-speed rotating hammers that reduce material size through multiple impact crushing, with adjustable screen perforations for precise particle size control.",
    category: "Crushing & Grinding Equipment",
    seoTitle: "Hammer Mill for Cattle Feed & Grain Grinding | 5-100 HP Manufacturer India",
    seoDescription: "Hammer mill for cattle feed, grain, biomass & spice grinding. 5-100 HP, 200-3000 kg/hr. Interchangeable screens 0.5-15mm. Manufacturer India. Factory price.",
    seoKeywords: "Hammer Mill for Cattle Feed, Hammer Mill for Grain Grinding, Hammer Mill Machine 10 HP, Hammer Mill for Biomass Grinding, Hammer Mill for Spices, Cattle Feed Hammer Mill Manufacturer India, Maize Hammer Mill, Rice Husk Hammer Mill, Hammer Mill Grinder for Flour, Hammer Mill for Poultry Feed, Small Hammer Mill Machine, Hammer Mill with Screen, Hammer Crusher for Agriculture, Hammer Mill 20 HP Price India, U.S.T Enterprises",
    faqs: [
      { question: "What HP hammer mill is best for cattle feed grinding?", answer: "For small cattle feed operations, a 10-20 HP hammer mill (500-1000 kg/hr) is ideal. For commercial feed mills, our 50-100 HP models handle 2000-3000 kg/hr with interchangeable screens for different particle sizes." },
      { question: "Can your hammer mill grind biomass and agricultural waste?", answer: "Yes, our hammer mills efficiently process biomass materials like rice husk, corn stalks, wood chips, and crop residues for pellet making, composting, and biofuel applications." },
      { question: "What particle sizes can the hammer mill produce?", answer: "Our hammer mills produce particle sizes from 0.5mm to 15mm using interchangeable screens. This range covers fine flour grinding (0.5-1mm) to coarse cattle feed (5-15mm)." },
      { question: "What is the price of a 10 HP hammer mill in India?", answer: "Pricing depends on HP rating, capacity, screen configuration, and material construction. As a direct manufacturer, we offer competitive factory pricing. Contact us for a model-wise price list." }
    ],
    images: [
      "/assets/hammerMill/hm1.jpg",
      "/assets/hammerMill/hm2.jpg",
      "/assets/hammerMill/hm3.jpg",
      "/assets/hammerMill/hmi4.jpg",
    ],
    model3D: "",
    features: [
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
    specifications: {
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
  },
  {
    id: 12,
    name: "Blower Fan",
    slug: "blower-fan",
    shortDescription: "High-pressure centrifugal air movement for industrial applications",
    description: "High-pressure Industrial Blower Fan manufacturer in India. Centrifugal blower fan designed for high-pressure air movement and ventilation applications. Features backward-curved impeller blades for maximum efficiency, robust construction for continuous operation, and variable speed control for precise airflow management.",
    category: "Air Handling Equipment",
    seoTitle: "Centrifugal Blower Fan Manufacturer Gurgaon | Industrial ID FD Blower 0.5-50 HP",
    seoDescription: "Centrifugal blower fan manufacturer in Gurgaon. ID & FD blowers, 0.5-50 HP, up to 52000 CFM, 85% efficiency. For dust collection, furnace & ventilation.",
    seoKeywords: "Centrifugal Blower Fan Manufacturer Gurgaon, ID Fan Manufacturer India, FD Fan Manufacturer India, Industrial Blower for Dust Collection, Centrifugal Blower for Furnace, High Pressure Blower Fan, Backward Curved Centrifugal Fan, Exhaust Blower Manufacturer, Air Blower for Boiler, Industrial Ventilation Fan Manufacturer, Blower Fan 5 HP Price, Blower Fan 10 HP, Centrifugal Fan for Pneumatic Conveying, Hot Air Blower for Dryer, U.S.T Enterprises",
    faqs: [
      { question: "What types of industrial blower fans do you manufacture?", answer: "We manufacture centrifugal blowers including ID (Induced Draft) fans, FD (Forced Draft) fans, and general-purpose blowers with backward-curved impellers from 0.5 to 50 HP, up to 52,000 CFM capacity." },
      { question: "Which applications use your centrifugal blower fans?", answer: "Our blowers serve dust collection systems, furnace/boiler draft control, pneumatic conveying, industrial ventilation, drying systems, fume extraction, and cooling applications across manufacturing plants." },
      { question: "What HP industrial blower do I need for my application?", answer: "The required HP depends on airflow (CFM) and static pressure (Pa). A 5 HP blower handles small dust collectors, while 20-50 HP units serve large furnaces and pneumatic conveying systems. Contact us for application-specific sizing." },
      { question: "How much does a 5 HP centrifugal blower cost?", answer: "Pricing depends on HP, CFM capacity, material (MS/SS), and impeller design. Manufactured at our Gurgaon facility, we offer direct factory pricing. Contact us for a model-wise quotation." }
    ],
    images: [
      "/assets/blowerFan/bf1.jpg",
      "/assets/blowerFan/bf2.jpg",
      "/assets/blowerFan/bf3.jpg",
      "/assets/blowerFan/bf4.jpg",
      "/assets/blowerFan/bf5.jpg",
      "/assets/blowerFan/bf6.jpg",
      "/assets/blowerFan/bf7.jpg",
      "/assets/blowerFan/bf8.jpg"
    ],
    model3D: "",
    features: [
      "High-efficiency backward-curved impeller design",
      "Heavy-duty cast iron or aluminum construction",
      "Direct drive motor mounting for reliability",
      "Dynamically balanced impeller for vibration-free operation",
      "Thermal protection with auto-restart capability",
      "Double-shielded shaft bearings for extended life",
      "Compact design for space-efficient installation",
      "Wide voltage and frequency range compatibility",
      "Dust-proof shaft seal for contamination protection",
      "Sound-dampened housing for reduced noise levels"
    ],
    specifications: {
      "Motor Power": "0.5-50 HP (0.37-37 kW)",
      "Air Flow Rate": "200-52000 CFM (340-88400 m³/h)",
      "Static Pressure": "2-10 inches WG (500-2500 Pa)",
      "Fan Speed": "1450-3600 RPM",
      "Impeller Diameter": "200-1000 mm",
      "Inlet Size": "150-800 mm",
      "Outlet Size": "125-750 mm",
      "Voltage": "220V/380V/415V, Single/Three Phase",
      "Frequency": "50/60 Hz",
      "Noise Level": "58-85 dB(A)",
      "Operating Temperature": "-20°C to +80°C",
      "Material": "Cast Iron/Aluminum housing, Steel impeller",
      "Efficiency": "Up to 85%",
      "Weight": "50-2500 kg (model dependent)"
    }
  },
  {
    id: 13,
    name: "Tensile Shed",
    slug: "tensile-shed",
    shortDescription: "Aesthetic membrane canopy structures for weather protection",
    description: "Custom Tensile Shed manufacturer and supplier. Modern tensile fabric structure designed for versatile outdoor coverage including car parking, walkways, and recreational areas. Features high-strength membrane materials stretched over steel framework to create elegant, curved architectural forms.",
    category: "Architectural Structures",
    seoTitle: "Tensile Car Parking Shade Manufacturer | ₹200-450/sq ft | PVC Membrane Structure",
    seoDescription: "Tensile car parking shade & walkway canopy manufacturer. PVC/PVDF membrane, ₹200-450 per sq ft, 7-15 yr warranty. Conical, arch & cantilever designs. India.",
    seoKeywords: "Tensile Car Parking Shade Manufacturer, Tensile Shed Price Per Sq Ft, Car Parking Tensile Structure, PVC Tensile Shed Manufacturer India, Tensile Canopy for Walkway, Tensile Structure for School, Tensile Shade for Restaurant, Cantilever Tensile Shade, Conical Tensile Structure, Tensile Shed for Factory, Waterproof Tensile Shed, Tensile Roof Structure Manufacturer, Tensile Shade for Swimming Pool, Arch Tensile Structure India, UV Resistant Car Parking Shade, U.S.T Enterprises",
    faqs: [
      { question: "How much does a tensile car parking shade cost per sq ft?", answer: "Tensile car parking shades typically cost ₹200-450 per sq ft depending on membrane type (PVC/PVDF/PTFE), design (conical/arch/cantilever), span size, and steel frame specifications." },
      { question: "What designs are available for tensile structures?", answer: "We manufacture conical, arch, cantilever, hypar, umbrella, and custom-shaped tensile structures for car parking, walkways, school grounds, restaurants, swimming pools, and factory yards." },
      { question: "How long does a PVC tensile shed last?", answer: "PVC membrane tensile sheds come with 7-15 years warranty. The fabric is UV-resistant, waterproof, and self-cleaning, while the galvanized steel framework lasts 25+ years with minimal maintenance." },
      { question: "Can tensile structures withstand monsoon winds and rain?", answer: "Yes, our tensile structures are engineered for wind loads up to 169 km/h and heavy rainfall. The membrane is 100% waterproof with proper drainage slopes and fire-retardant coating (B1/DIN 4102)." },
      { question: "Do you install tensile sheds across India?", answer: "Yes, we manufacture at our Gurgaon facility and provide design, fabrication, and installation services pan-India. Typical installation takes 7-15 days depending on size and complexity." }
    ],
    images: [
      "/assets/tensilShed/ts1.jpg",
      "/assets/tensilShed/ts2.jpg",
      "/assets/tensilShed/ts3.jpg",
      "/assets/tensilShed/ts4.jpg",
      "/assets/tensilShed/ts5.jpg",
      "/assets/tensilShed/ts6.jpg",
      "/assets/tensilShed/ts7.jpg",
    ],
    model3D: "",
    features: [
      "High-strength tensile fabric membrane construction",
      "UV-resistant and weatherproof material coating",
      "Galvanized steel framework with powder coating",
      "Self-cleaning fabric surface with anti-fungal properties",
      "Natural light transmission while blocking harmful UV rays",
      "Wind load resistance up to 169.2 km/h (47 m/s)",
      "Fire retardant membrane meeting B1/DIN 4102 standards",
      "Modular design for easy installation and expansion",
      "Temperature resistance from -50°C to +70°C",
      "Low maintenance with excellent durability"
    ],
    specifications: {
      "Membrane Material": "PVC/PVDF/PTFE coated polyester fabric",
      "Fabric Weight": "700-1500 GSM",
      "Fabric Thickness": "0.05-0.82 mm",
      "Tensile Strength": "2400-4200 N/5cm (warp/weft)",
      "Tear Strength": "270-580 N",
      "Frame Material": "Galvanized steel (IS 1239 standard)",
      "Steel Grade": "YST240 as per IS 800",
      "Wind Load Capacity": "1.38 kN/m² (44 m/s)",
      "Span Capability": "Up to 60 meters clear span",
      "Color Options": "White, Red, Blue, Green, Yellow, Custom",
      "Fire Rating": "B1/DIN 4102 compliant",
      "Warranty": "7-15 years on membrane",
      "Installation Cost": "₹300-800 per sq ft",
      "Maintenance": "Self-cleaning, minimal upkeep required"
    }
  },
  {
    id: 14,
    name: "Seed Cleaning Machine",
    slug: "seed-cleaning-machine",
    shortDescription: "Multi-stage grain and seed processing for superior quality output",
    description: "Best Seed Cleaning Machine manufacturer in India. Advanced multi-stage seed and grain cleaning machine/Plant designed for comprehensive removal of impurities including stones, dust, chaff, damaged seeds, and foreign materials. Features precision screening, aspiration systems, and gravity separation technology.",
    category: "Seed Processing Equipment",
    seoTitle: "Seed Cleaning & Grading Machine | Multi-Stage Grain Cleaner Manufacturer India",
    seoDescription: "Multi-stage seed cleaning & grading machine manufacturer India. 200-5000 kg/hr, wheat, rice, dal, cumin processing. Complete seed cleaning plant setup.",
    seoKeywords: "Seed Cleaning and Grading Machine, Seed Cleaning Machine for Wheat, Grain Cleaning Machine Manufacturer India, Seed Pre Cleaner Machine, Seed Cleaning Plant Setup, Seed Processing Machine for Cumin, Dal Cleaning and Grading Machine, Rice Cleaning Machine Manufacturer, Multi Crop Seed Cleaner, Seed Cleaning Machine 1 TPH, Air Screen Seed Cleaner, Seed Sorting Machine India, Pulse Cleaning Machine Manufacturer, Oil Seed Cleaning Machine, Seed Cleaning Plant Turnkey, U.S.T Enterprises",
    faqs: [
      { question: "Which crops can your seed cleaning machine process?", answer: "Our multi-crop machines process wheat, rice, pulses (dal, chana), cumin, sesame, mustard, millets, oil seeds, and other grains. Interchangeable screens adapt to different seed sizes from fine spices to large grain." },
      { question: "Do you supply complete seed cleaning plant setups?", answer: "Yes, we design and install complete turnkey seed cleaning plants with integrated pre-cleaning, fine cleaning, grading, destoning, and packaging systems for capacities from 200 to 5000 kg/hr." },
      { question: "What cleaning efficiency does your machine achieve?", answer: "Our multi-stage seed cleaning machines achieve 95-99% impurity removal including stones, dust, chaff, broken seeds, and foreign materials using screening, aspiration, and gravity separation technology." },
      { question: "What capacity seed cleaning machine do I need?", answer: "For small processing units, a 200-500 kg/hr machine is suitable. For commercial seed processing, our 1-5 TPH models handle high-volume operations. We help you select the right capacity for your throughput needs." },
      { question: "What is the price of a seed cleaning plant in India?", answer: "Pricing depends on capacity, number of processing stages, and automation level. As a direct manufacturer, we offer competitive factory pricing for individual machines and complete plant setups. Get a customized quotation." }
    ],
    images: [
      "/assets/seedCleaning/sc1.jpg",
      "/assets/seedCleaning/sc2.jpg",
      "/assets/seedCleaning/sc3.jpg",
      "/assets/seedCleaning/sc4.jpg",
    ],
    model3D: "",
    features: [
      "Multi-stage cleaning with pre-cleaning and fine cleaning chambers",
      "Advanced aspiration system with cyclone dust collection",
      "Precision screening with interchangeable sieves for various crops",
      "Gravity separation for density-based sorting",
      "Magnetic separator for ferrous material removal",
      "Variable speed control for different grain types",
      "Dust-tight construction with minimal product loss",
      "Easy maintenance with accessible cleaning points",
      "Automatic feed regulation system",
      "Multi-outlet discharge for different grade separation"
    ],
    specifications: {
      "Processing Capacity": "200-5000 kg/hr (varies by model)",
      "Motor Power": "3-25 HP total system",
      "Cleaning Efficiency": "95-99% impurity removal",
      "Power Consumption": "3-17 kWh",
      "Voltage": "415V, 3-Phase, 50Hz",
      "Automation Grade": "Semi-Automatic to Fully Automatic",
      "Number of Cleaning Stages": "2-4 stages",
      "Screen Types": "Round and rectangular perforations",
      "Air Flow System": "Centrifugal blower with adjustable dampers",
      "Dimensions (LxWxH)": "4-15 x 2-8 x 3-12 meters",
      "Material Construction": "MS body with powder coating",
      "Suitable Crops": "Wheat, Rice, Pulses, Cumin, Sesame, Mustard",
      "Weight": "500-5000 kg (model dependent)",
      "Recovery Rate": "80-95% of head pulses"
    }
  },
];

export default products;