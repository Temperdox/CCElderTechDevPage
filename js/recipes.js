// Crafting Recipes for CC:ElderTech

// Sprite sheet dimensions
const SPRITE_COLS = 31;
const SPRITE_ROWS = 49;

// Modded ElderTech items (for WIP labeling)
const MODDED_ITEMS = new Set([
  // Base crystals/cores
  'cerulite',
  'chronite',
  'muon_crystal',
  'neutrino_core',

  // Ores
  'cerulite_ore',
  'chronite_ore',
  'muon_ore',
  'neutrino_ore',

  // Dusts
  'cerulite_dust',
  'chronite_dust',
  'muon_dust',
  'neutrino_dust',
  'stardust',
  'void_dust',

  // Heavy Metals
  'titanium_ingot',
  'iridium_ingot',
  'osmium_ingot',
  'plutonium_ingot',

  // Refined Materials
  'enriched_cerulite',
  'enriched_chronite',
  'enriched_muon',
  'enriched_neutrino',
  'compressed_titanium',
  'compressed_iridium',
  'compressed_osmium',
  'dark_matter_fragment',
  'antimatter_capsule',

  // Collector Blocks
  'dust_collector_basic',
  'dust_collector_advanced',
  'dust_collector_elite',
  'dust_collector_ultimate',

  // Processing Blocks
  'ore_refinery',
  'enrichment_chamber',
  'matter_compressor',
  'quantum_fabricator',

  // Scanners
  'scanner_basic',
  'scanner_advanced',
  'pandora_lens',

  // Crafted Items
  'logic_cartridge_basic',
  'logic_cartridge_advanced',
  'logic_cartridge_elite',
  'logic_cartridge_ultimate',
  'module_chip_basic',
  'module_chip_advanced',
  'module_chip_elite',
  'module_chip_ultimate',
  'battery_basic',
  'battery_advanced',
  'battery_elite',
  'battery_ultimate',
  'quantum_source',
  'quantum_point',
  'workbench',
  'capacitor_basic',
  'capacitor_advanced',
  'capacitor_elite',
  'capacitor_ultimate',
  'processor_basic',
  'processor_advanced',
  'processor_elite',
  'processor_ultimate',
  'quantum_core_basic',
  'quantum_core_advanced',
  'quantum_core_elite',
  'quantum_core_ultimate',
  'energy_cell_basic',
  'energy_cell_advanced',
  'energy_cell_elite',
  'energy_cell_ultimate',
  'data_crystal_basic',
  'data_crystal_advanced',
  'data_crystal_elite',
  'data_crystal_ultimate',
  'network_card_basic',
  'network_card_advanced',
  'network_card_elite',
  'network_card_ultimate',
  'upgrade_frame_basic',
  'upgrade_frame_advanced',
  'upgrade_frame_elite',
  'upgrade_frame_ultimate',
  'flux_coil_basic',
  'flux_coil_advanced',
  'flux_coil_elite',
  'flux_coil_ultimate'
]);

// Item display names
const ITEM_NAMES = {
  // Vanilla items
  iron_ingot: 'Iron Ingot',
  gold_ingot: 'Gold Ingot',
  diamond: 'Diamond',
  redstone: 'Redstone Dust',
  ender_pearl: 'Ender Pearl',
  nether_star: 'Nether Star',
  netherite_ingot: 'Netherite Ingot',
  glowstone_dust: 'Glowstone Dust',
  quartz: 'Nether Quartz',
  obsidian: 'Obsidian',
  eye_of_ender: 'Eye of Ender',

  // CC:Tweaked items
  computer: 'Computer',
  pocket_computer: 'Pocket Computer',
  turtle: 'Turtle',
  disk_drive: 'Disk Drive',
  wireless_modem: 'Wireless Modem',

  // ElderTech items - Base materials
  cerulite: 'Cerulite Crystal',
  chronite: 'Chronite Crystal',
  muon_crystal: 'Muon Crystal',
  neutrino_core: 'Neutrino Core',

  // Ores
  cerulite_ore: 'Cerulite Ore',
  chronite_ore: 'Chronite Ore',
  muon_ore: 'Muon Ore',
  neutrino_ore: 'Neutrino Ore',

  // Dusts
  cerulite_dust: 'Cerulite Dust',
  chronite_dust: 'Chronite Dust',
  muon_dust: 'Muon Dust',
  neutrino_dust: 'Neutrino Dust',
  stardust: 'Stardust',
  void_dust: 'Void Dust',

  // Heavy Metals
  titanium_ingot: 'Titanium Ingot',
  iridium_ingot: 'Iridium Ingot',
  osmium_ingot: 'Osmium Ingot',
  plutonium_ingot: 'Plutonium Ingot',

  // Refined Materials
  enriched_cerulite: 'Enriched Cerulite',
  enriched_chronite: 'Enriched Chronite',
  enriched_muon: 'Enriched Muon Crystal',
  enriched_neutrino: 'Enriched Neutrino Core',
  compressed_titanium: 'Compressed Titanium',
  compressed_iridium: 'Compressed Iridium',
  compressed_osmium: 'Compressed Osmium',
  dark_matter_fragment: 'Dark Matter Fragment',
  antimatter_capsule: 'Antimatter Capsule',

  // Collector Blocks
  dust_collector_basic: 'Dust Collector (Basic)',
  dust_collector_advanced: 'Dust Collector (Advanced)',
  dust_collector_elite: 'Dust Collector (Elite)',
  dust_collector_ultimate: 'Dust Collector (Ultimate)',

  // Processing Blocks
  ore_refinery: 'Ore Refinery',
  enrichment_chamber: 'Enrichment Chamber',
  matter_compressor: 'Matter Compressor',
  quantum_fabricator: 'Quantum Fabricator',

  // Scanners
  scanner_basic: 'Basic Scanner',
  scanner_advanced: 'Advanced Scanner',
  pandora_lens: 'Pandora Lens',

  // Logic Cartridges
  logic_cartridge_basic: 'Logic Cartridge (Basic)',
  logic_cartridge_advanced: 'Logic Cartridge (Advanced)',
  logic_cartridge_elite: 'Logic Cartridge (Elite)',
  logic_cartridge_ultimate: 'Logic Cartridge (Ultimate)',

  // Module Chips
  module_chip_basic: 'Module Chip (Basic)',
  module_chip_advanced: 'Module Chip (Advanced)',
  module_chip_elite: 'Module Chip (Elite)',
  module_chip_ultimate: 'Module Chip (Ultimate)',

  // Batteries
  battery_basic: 'Battery (Basic)',
  battery_advanced: 'Battery (Advanced)',
  battery_elite: 'Battery (Elite)',
  battery_ultimate: 'Battery (Ultimate)',

  // Capacitors
  capacitor_basic: 'Capacitor (Basic)',
  capacitor_advanced: 'Capacitor (Advanced)',
  capacitor_elite: 'Capacitor (Elite)',
  capacitor_ultimate: 'Capacitor (Ultimate)',

  // Processors
  processor_basic: 'Processor (Basic)',
  processor_advanced: 'Processor (Advanced)',
  processor_elite: 'Processor (Elite)',
  processor_ultimate: 'Processor (Ultimate)',

  // Quantum Cores
  quantum_core_basic: 'Quantum Core (Basic)',
  quantum_core_advanced: 'Quantum Core (Advanced)',
  quantum_core_elite: 'Quantum Core (Elite)',
  quantum_core_ultimate: 'Quantum Core (Ultimate)',

  // Energy Cells
  energy_cell_basic: 'Energy Cell (Basic)',
  energy_cell_advanced: 'Energy Cell (Advanced)',
  energy_cell_elite: 'Energy Cell (Elite)',
  energy_cell_ultimate: 'Energy Cell (Ultimate)',

  // Data Crystals
  data_crystal_basic: 'Data Crystal (Basic)',
  data_crystal_advanced: 'Data Crystal (Advanced)',
  data_crystal_elite: 'Data Crystal (Elite)',
  data_crystal_ultimate: 'Data Crystal (Ultimate)',

  // Network Cards
  network_card_basic: 'Network Card (Basic)',
  network_card_advanced: 'Network Card (Advanced)',
  network_card_elite: 'Network Card (Elite)',
  network_card_ultimate: 'Network Card (Ultimate)',

  // Upgrade Frames
  upgrade_frame_basic: 'Upgrade Frame (Basic)',
  upgrade_frame_advanced: 'Upgrade Frame (Advanced)',
  upgrade_frame_elite: 'Upgrade Frame (Elite)',
  upgrade_frame_ultimate: 'Upgrade Frame (Ultimate)',

  // Flux Coils
  flux_coil_basic: 'Flux Coil (Basic)',
  flux_coil_advanced: 'Flux Coil (Advanced)',
  flux_coil_elite: 'Flux Coil (Elite)',
  flux_coil_ultimate: 'Flux Coil (Ultimate)',

  // Quantum Items
  quantum_source: 'Quantum Energy Source',
  quantum_point: 'Quantum Energy Point',

  // Workbenches
  workbench: 'ElderTech Workbench'
};

// Item descriptions and stats
const ITEM_DESCRIPTIONS = {
  // Base Crystals
  cerulite: { desc: 'Shimmering cyan crystal that hums with quantum energy. Your ticket to the big leagues!', stats: 'Basic Tier Material' },
  chronite: { desc: 'This purple beauty warps time itself. Handle with care, or you might age backwards!', stats: 'Advanced Tier Material' },
  muon_crystal: { desc: 'Pink particles dance inside this crystal. Scientists are still trying to figure out why.', stats: 'Elite Tier Material' },
  neutrino_core: { desc: 'The pinnacle of quantum engineering. It barely interacts with reality... or does reality barely interact with it?', stats: 'Ultimate Tier Material' },

  // Ores
  cerulite_ore: { desc: 'Glowing cyan ore that makes your pickaxe tingle. Mine responsibly!', stats: 'Spawn: Common (Y: 5-60)' },
  chronite_ore: { desc: 'Deep purple ore that seems older than the bedrock around it. Time is relative anyway.', stats: 'Spawn: Uncommon (Y: -20-30)' },
  muon_ore: { desc: 'Rare pink ore that pulses with exotic particles. Your Geiger counter is screaming.', stats: 'Spawn: Rare (Y: -64-0)' },
  neutrino_ore: { desc: 'The rarest ore in existence. If you find this, buy a lottery ticket!', stats: 'Spawn: Very Rare (Y: -64--32)' },

  // Dusts
  cerulite_dust: { desc: 'Sparkly cyan dust that floats gracefully. Achoo! Gesundheit.', stats: 'Collect time: 30 min (Basic Collector)' },
  chronite_dust: { desc: 'Purple temporal particles that drift through spacetime. Probably not FDA approved.', stats: 'Collect time: 45 min (Advanced Collector)' },
  muon_dust: { desc: 'Exotic pink particles from cosmic rays. Warning: May cause spontaneous physics lectures.', stats: 'Collect time: 60 min (Elite Collector)' },
  neutrino_dust: { desc: 'Subatomic particles so rare they make diamonds look common. Handle like your GPU.', stats: 'Collect time: 90 min (Ultimate Collector)' },
  stardust: { desc: 'Cosmic dust harvested from actual starlight. Makes everything shinier and better!', stats: 'Collect time: 20 min (Advanced+ Collector)' },
  void_dust: { desc: 'Dark matter particles that absorb light. Stare into the void, and it stares back with science.', stats: 'Collect time: 40 min (Elite+ Collector)' },

  // Heavy Metals
  titanium_ingot: { desc: 'Strong and lightweight. Like your gaming laptop dreams to be!', stats: 'Mined from Titanium Ore' },
  iridium_ingot: { desc: 'Dense, rare, and incredibly valuable. Second only to your Minecraft diamonds.', stats: 'Mined from Iridium Ore' },
  osmium_ingot: { desc: 'The densest naturally occurring element. Your inventory just got heavier!', stats: 'Mined from Osmium Ore' },
  plutonium_ingot: { desc: 'Glowing radioactive metal. Great Scott! Where we\'re going, we don\'t need roads!', stats: 'Mined from Plutonium Ore' },

  // Refined Materials
  enriched_cerulite: { desc: 'Cerulite infused with cosmic stardust and titanium. Now with 50% more quantum!', stats: 'Used in Advanced tier recipes' },
  enriched_chronite: { desc: 'Time-warped chronite supercharged with space materials. It\'s literally out of this world.', stats: 'Used in Elite tier recipes' },
  enriched_muon: { desc: 'Muon crystals stabilized with void energy. The particles inside move in mysterious ways.', stats: 'Used in Ultimate tier recipes' },
  enriched_neutrino: { desc: 'Neutrino core overclocked with dark matter. Safety rating: "Probably Fine"™', stats: 'Used in Ultimate tier recipes' },
  compressed_titanium: { desc: 'Nine titanium ingots compressed into one ultra-dense block. Your back hurts just looking at it.', stats: 'Extreme durability' },
  compressed_iridium: { desc: 'Iridium compressed beyond all reason. Denser than a neutron star and twice as expensive!', stats: 'Processing block component' },
  compressed_osmium: { desc: 'Osmium compressed to ridiculous levels. Physics called, they want their laws back.', stats: 'Elite processing component' },
  dark_matter_fragment: { desc: 'Condensed void energy that defies comprehension. Not recommended for breakfast cereal.', stats: 'Extremely dangerous' },
  antimatter_capsule: { desc: 'Contained antimatter in a magnetic bottle. Do NOT drop. Seriously. Don\'t.', stats: 'Handle with extreme care' },

  // Collector Blocks
  dust_collector_basic: { desc: 'Passively vacuums dust particles from the air. Like a Roomba for quantum physics!', stats: 'Collection rate: 1x' },
  dust_collector_advanced: { desc: 'Enhanced dust collector with better filters. Now collects 50% more spacetime debris!', stats: 'Collection rate: 1.5x' },
  dust_collector_elite: { desc: 'High-tech particle collector that defies entropy. Your vacuum cleaner could never.', stats: 'Collection rate: 2x' },
  dust_collector_ultimate: { desc: 'Maximum efficiency collector that harvests particles from alternate dimensions. Probably.', stats: 'Collection rate: 3x' },

  // Processing Blocks
  ore_refinery: { desc: 'Processes raw ores into refined crystals. It\'s like a fancy toaster for rocks!', stats: 'FE cost: 10k per operation' },
  enrichment_chamber: { desc: 'Infuses materials with cosmic energy. Warning: May cause spontaneous enlightenment.', stats: 'FE cost: 50k per operation' },
  matter_compressor: { desc: 'Compresses metals to absurd densities. Black holes are jealous of this thing.', stats: 'FE cost: 250k per operation' },
  quantum_fabricator: { desc: 'Creates dark matter and antimatter from nothing. Your physics teacher is crying.', stats: 'FE cost: 1M per operation' },

  // Scanners
  scanner_basic: { desc: 'Scans for ancient ruins nearby. Like a metal detector, but for loot!', stats: 'Cooldown: 5 min, Daily charges: 10' },
  scanner_advanced: { desc: 'Pinpoints exact coordinates of structures. GPS? Never heard of her.', stats: 'Range: 1024 blocks, Cooldown: 3 min' },
  pandora_lens: { desc: 'Legendary scanner that sees through reality itself. Vault detection included!', stats: 'Range: 2048 blocks, Unlimited charges' },

  // Module Chips
  module_chip_basic: { desc: 'Blank circuit chip ready for programming. Your creativity starts here!', stats: 'Tier: Basic' },
  module_chip_advanced: { desc: 'Advanced chip with more processing power. Now with RGB lighting! (Not really)', stats: 'Tier: Advanced' },
  module_chip_elite: { desc: 'Elite chip that makes supercomputers jealous. Overclocking not recommended.', stats: 'Tier: Elite' },
  module_chip_ultimate: { desc: 'Ultimate chip that bends the laws of computation. Sentience not included... yet.', stats: 'Tier: Ultimate' },

  // Logic Cartridges
  logic_cartridge_basic: { desc: 'Stores your compiled circuits for later use. Like a USB drive for magic!', stats: 'Circuit storage' },
  logic_cartridge_advanced: { desc: 'Advanced circuit storage with better compression. Fits more spells per square inch!', stats: 'Circuit storage' },
  logic_cartridge_elite: { desc: 'Elite cartridge that stores circuits in quantum superposition. Schrödinger\'s code!', stats: 'Circuit storage' },
  logic_cartridge_ultimate: { desc: 'Ultimate storage that transcends normal spacetime. Your circuits exist in all timelines!', stats: 'Circuit storage' },

  // Vanilla items
  iron_ingot: { desc: 'Good old iron. Reliable, sturdy, and ready to be repurposed for science!', stats: '' },
  gold_ingot: { desc: 'Shiny yellow metal that conducts magic... er, electricity very well!', stats: '' },
  diamond: { desc: 'The hardest natural material. Also pretty. Your favorite blue gem!', stats: '' },
  redstone: { desc: 'Magical red dust that powers everything. Electricity wishes it was this cool.', stats: '' },
  ender_pearl: { desc: 'Teleportation in a pearl. Side effects include nausea and existential dread.', stats: '' },
  nether_star: { desc: 'A star from the Nether. You killed a Wither for this. Worth it!', stats: '' },
  netherite_ingot: { desc: 'The toughest material in existence. Forged in literal hell!', stats: '' },
  glowstone_dust: { desc: 'Glowing yellow powder from the Nether. Like LED dust, but organic!', stats: '' },
  quartz: { desc: 'Clean white crystal from the Nether. Perfect for circuits and interior design!', stats: '' },
  obsidian: { desc: 'Volcanic glass harder than diamond. Takes forever to mine. You know this pain.', stats: '' },
  eye_of_ender: { desc: 'Mystical eye that sees dimensions. Finds strongholds like a GPS!', stats: '' },

  // Batteries
  battery_basic: { desc: 'Basic energy storage. Holds enough power to run a toaster... or a robot!', stats: 'Tier: Basic' },
  battery_advanced: { desc: 'Advanced battery with more capacity. Now you can toast TWO things at once!', stats: 'Tier: Advanced' },
  battery_elite: { desc: 'Elite battery that defies thermodynamics. Your physics teacher is still crying.', stats: 'Tier: Elite' },
  battery_ultimate: { desc: 'Ultimate battery with cosmic energy storage. Probably contains a miniature sun.', stats: 'Tier: Ultimate' },

  // Capacitors
  capacitor_basic: { desc: 'Stores and releases energy quickly. Like a battery but with ADHD!', stats: 'Tier: Basic' },
  capacitor_advanced: { desc: 'Advanced capacitor with faster discharge. Lightning in a bottle!', stats: 'Tier: Advanced' },
  capacitor_elite: { desc: 'Elite capacitor that charges at ridiculous speeds. Zap zap!', stats: 'Tier: Elite' },
  capacitor_ultimate: { desc: 'Ultimate capacitor with near-instant energy transfer. Time is irrelevant.', stats: 'Tier: Ultimate' },

  // Processors
  processor_basic: { desc: 'Basic processing unit. Thinks faster than you on Monday morning!', stats: 'Tier: Basic' },
  processor_advanced: { desc: 'Advanced processor with parallel computing. Multitasking champion!', stats: 'Tier: Advanced' },
  processor_elite: { desc: 'Elite processor that bends computational limits. Skynet who?', stats: 'Tier: Elite' },
  processor_ultimate: { desc: 'Ultimate processor with quantum computing. Solves problems before you ask them!', stats: 'Tier: Ultimate' },

  // Quantum Cores
  quantum_core_basic: { desc: 'Basic quantum processor. Superposition makes debugging interesting!', stats: 'Tier: Basic' },
  quantum_core_advanced: { desc: 'Advanced quantum core with more qubits. Schrödinger approves!', stats: 'Tier: Advanced' },
  quantum_core_elite: { desc: 'Elite quantum core that exists in multiple states. Yes and no at the same time!', stats: 'Tier: Elite' },
  quantum_core_ultimate: { desc: 'Ultimate quantum core with infinite possibilities. Literally.', stats: 'Tier: Ultimate' },

  // Energy Cells
  energy_cell_basic: { desc: 'Compact energy storage cell. Fits in your pocket, powers your dreams!', stats: 'Tier: Basic' },
  energy_cell_advanced: { desc: 'Advanced energy cell with better efficiency. More power, less space!', stats: 'Tier: Advanced' },
  energy_cell_elite: { desc: 'Elite energy cell that violates conservation laws. Don\'t tell the physicists!', stats: 'Tier: Elite' },
  energy_cell_ultimate: { desc: 'Ultimate energy cell powered by pure awesome. May contain actual stars.', stats: 'Tier: Ultimate' },

  // Data Crystals
  data_crystal_basic: { desc: 'Crystalline data storage. Like a hard drive but shinier!', stats: 'Tier: Basic' },
  data_crystal_advanced: { desc: 'Advanced data crystal with more storage. All your memes fit here!', stats: 'Tier: Advanced' },
  data_crystal_elite: { desc: 'Elite data crystal with quantum storage. Holds data that doesn\'t exist yet!', stats: 'Tier: Elite' },
  data_crystal_ultimate: { desc: 'Ultimate data crystal with infinite capacity. The Library of Alexandria wishes!', stats: 'Tier: Ultimate' },

  // Network Cards
  network_card_basic: { desc: 'Basic wireless networking. Like Wi-Fi but with more crystals!', stats: 'Tier: Basic' },
  network_card_advanced: { desc: 'Advanced network card with better range. No dead zones allowed!', stats: 'Tier: Advanced' },
  network_card_elite: { desc: 'Elite network card that ignores walls. Concrete? What concrete?', stats: 'Tier: Elite' },
  network_card_ultimate: { desc: 'Ultimate network card with dimensional networking. Connect across realities!', stats: 'Tier: Ultimate' },

  // Upgrade Frames
  upgrade_frame_basic: { desc: 'Framework for upgrades. The foundation of progress!', stats: 'Tier: Basic' },
  upgrade_frame_advanced: { desc: 'Advanced upgrade frame with better support. Holds more awesome!', stats: 'Tier: Advanced' },
  upgrade_frame_elite: { desc: 'Elite upgrade frame reinforced with exotic materials. Very sturdy!', stats: 'Tier: Elite' },
  upgrade_frame_ultimate: { desc: 'Ultimate upgrade frame that transcends physical limitations. Maximum power!', stats: 'Tier: Ultimate' },

  // Flux Coils
  flux_coil_basic: { desc: 'Basic electromagnetic coil. Makes things go zoom!', stats: 'Tier: Basic' },
  flux_coil_advanced: { desc: 'Advanced flux coil with stronger fields. More zoom!', stats: 'Tier: Advanced' },
  flux_coil_elite: { desc: 'Elite flux coil that warps spacetime slightly. Maximum zoom!', stats: 'Tier: Elite' },
  flux_coil_ultimate: { desc: 'Ultimate flux coil with reality-bending power. LUDICROUS ZOOM!', stats: 'Tier: Ultimate' },

  // Other items
  workbench: { desc: 'The heart of your operation. Where science meets magic and explosions happen!', stats: 'Required for all crafting' },
  quantum_source: { desc: 'Wireless power transmitter that sends energy through the void. No cables needed!', stats: 'Max: 8 networks' },
  quantum_point: { desc: 'Wireless power receiver. Catches energy from thin air like magic!', stats: 'Place in turtle peripheral slot' },
  computer: { desc: 'Programmable computer powered by Lua. Your robot overlords start here!', stats: '' },
  pocket_computer: { desc: 'Computer in your pocket. Like a smartphone but actually useful!', stats: '' },
  turtle: { desc: 'Programmable robot that mines, builds, and follows orders. Best employee ever!', stats: '' },
  wireless_modem: { desc: 'Wireless communication device. Now your turtles can gossip!', stats: '' },
  disk_drive: { desc: 'Floppy disk drive for data storage. Retro tech is cool again!', stats: '' }
};

// Common vanilla items sprite positions (row, col)
const ITEMS = {
  // Vanilla items
  iron_ingot: [35, 7],
  gold_ingot: [35, 5],
  diamond: [34, 31],
  redstone: [35, 17],
  ender_pearl: [35, 2],
  nether_star: [35, 11],
  netherite_ingot: [-1, -1],
  glowstone_dust: [35, 4],
  quartz: [35, 10],
  obsidian: [30, 28],
  eye_of_ender: [37, 20],

  // CC:Tweaked items
  computer: [-1, 1],
  pocket_computer: [-1, 2],
  turtle: [-1, 3],
  disk_drive: [-1, 4],
  wireless_modem: [-1, 5],

  // Modded ElderTech items (using similar-looking sprites as placeholders)
  // Base crystals
  cerulite: [23, 44], // cyan crystal
  chronite: [23, 45], // purple crystal
  muon_crystal: [23, 46], // pink crystal
  neutrino_core: [23, 47], // white crystal

  // Ores
  cerulite_ore: [28, 44], // ore block
  chronite_ore: [28, 45],
  muon_ore: [28, 46],
  neutrino_ore: [28, 47],

  // Dusts
  cerulite_dust: [36, 44],
  chronite_dust: [36, 45],
  muon_dust: [36, 46],
  neutrino_dust: [36, 47],
  stardust: [36, 48],
  void_dust: [36, 49],

  // Heavy Metals
  titanium_ingot: [35, 8],
  iridium_ingot: [35, 9],
  osmium_ingot: [35, 12],
  plutonium_ingot: [35, 13],

  // Refined Materials
  enriched_cerulite: [25, 44],
  enriched_chronite: [25, 45],
  enriched_muon: [25, 46],
  enriched_neutrino: [25, 47],
  compressed_titanium: [26, 44],
  compressed_iridium: [26, 45],
  compressed_osmium: [26, 46],
  dark_matter_fragment: [26, 47],
  antimatter_capsule: [26, 48],

  // Collector Blocks
  dust_collector_basic: [15, 32],
  dust_collector_advanced: [15, 33],
  dust_collector_elite: [15, 34],
  dust_collector_ultimate: [15, 35],

  // Processing Blocks
  ore_refinery: [17, 32],
  enrichment_chamber: [17, 33],
  matter_compressor: [17, 34],
  quantum_fabricator: [17, 35],

  // Scanners
  scanner_basic: [18, 32],
  scanner_advanced: [18, 33],
  pandora_lens: [18, 34],

  // Logic Cartridges
  logic_cartridge_basic: [46, 14],
  logic_cartridge_advanced: [46, 15],
  logic_cartridge_elite: [46, 16],
  logic_cartridge_ultimate: [46, 17],

  // Module Chips
  module_chip_basic: [18, 37],
  module_chip_advanced: [18, 38],
  module_chip_elite: [18, 39],
  module_chip_ultimate: [18, 40],

  // Batteries
  battery_basic: [31, 37],
  battery_advanced: [31, 38],
  battery_elite: [31, 39],
  battery_ultimate: [31, 40],

  // Capacitors
  capacitor_basic: [32, 37],
  capacitor_advanced: [32, 38],
  capacitor_elite: [32, 39],
  capacitor_ultimate: [32, 40],

  // Processors
  processor_basic: [19, 37],
  processor_advanced: [19, 38],
  processor_elite: [19, 39],
  processor_ultimate: [19, 40],

  // Quantum Cores
  quantum_core_basic: [20, 37],
  quantum_core_advanced: [20, 38],
  quantum_core_elite: [20, 39],
  quantum_core_ultimate: [20, 40],

  // Energy Cells
  energy_cell_basic: [33, 37],
  energy_cell_advanced: [33, 38],
  energy_cell_elite: [33, 39],
  energy_cell_ultimate: [33, 40],

  // Data Crystals
  data_crystal_basic: [24, 44],
  data_crystal_advanced: [24, 45],
  data_crystal_elite: [24, 46],
  data_crystal_ultimate: [24, 47],

  // Network Cards
  network_card_basic: [46, 18],
  network_card_advanced: [46, 19],
  network_card_elite: [46, 20],
  network_card_ultimate: [46, 21],

  // Upgrade Frames
  upgrade_frame_basic: [21, 37],
  upgrade_frame_advanced: [21, 38],
  upgrade_frame_elite: [21, 39],
  upgrade_frame_ultimate: [21, 40],

  // Flux Coils
  flux_coil_basic: [22, 37],
  flux_coil_advanced: [22, 38],
  flux_coil_elite: [22, 39],
  flux_coil_ultimate: [22, 40],

  // Special items
  quantum_source: [16, 32],
  quantum_point: [18, 31],
  workbench: [27, 53]
};

// Calculate background position from sprite coordinates
function getSpritePosition(row, col) {
  const x = -((col + 1) * 32) - 1;
  const y = -((row + 1) * 32);
  return `${x}px ${y}px`;
}

// Recipe categories and tiers
const RECIPE_CATEGORIES = {
  cartridges: {
    name: 'Logic Cartridges',
    tiers: {
      basic: {
        name: 'Basic Tier',
        recipes: {
          logic_cartridge_basic: {
            name: "Logic Cartridge (Basic)",
            ingredients: [
              [null, 'redstone', null],
              ['cerulite', 'quartz', 'cerulite'],
              [null, 'iron_ingot', null]
            ],
            output: 'logic_cartridge_basic',
            count: 4
          }
        }
      },
      advanced: {
        name: 'Advanced Tier',
        recipes: {
          logic_cartridge_advanced: {
            name: "Logic Cartridge (Advanced)",
            ingredients: [
              ['chronite', 'redstone', 'chronite'],
              ['logic_cartridge_basic', 'gold_ingot', 'logic_cartridge_basic'],
              ['chronite', 'glowstone_dust', 'chronite']
            ],
            output: 'logic_cartridge_advanced',
            count: 2
          }
        }
      },
      elite: {
        name: 'Elite Tier',
        recipes: {
          logic_cartridge_elite: {
            name: "Logic Cartridge (Elite)",
            ingredients: [
              ['muon_crystal', 'diamond', 'muon_crystal'],
              ['logic_cartridge_advanced', 'ender_pearl', 'logic_cartridge_advanced'],
              ['muon_crystal', 'redstone', 'muon_crystal']
            ],
            output: 'logic_cartridge_elite',
            count: 2
          }
        }
      },
      ultimate: {
        name: 'Ultimate Tier',
        recipes: {
          logic_cartridge_ultimate: {
            name: "Logic Cartridge (Ultimate)",
            ingredients: [
              ['neutrino_core', 'netherite_ingot', 'neutrino_core'],
              ['logic_cartridge_elite', 'nether_star', 'logic_cartridge_elite'],
              ['neutrino_core', 'eye_of_ender', 'neutrino_core']
            ],
            output: 'logic_cartridge_ultimate',
            count: 2
          }
        }
      }
    }
  },

  modules: {
    name: 'Module Chips',
    tiers: {
      basic: {
        name: 'Basic Tier',
        recipes: {
          module_chip_basic: {
            name: "Module Chip (Basic)",
            ingredients: [
              ['redstone', 'cerulite', 'redstone'],
              ['cerulite', 'quartz', 'cerulite'],
              ['redstone', 'cerulite', 'redstone']
            ],
            output: 'module_chip_basic',
            count: 8
          }
        }
      },
      advanced: {
        name: 'Advanced Tier',
        recipes: {
          module_chip_advanced: {
            name: "Module Chip (Advanced)",
            ingredients: [
              ['chronite', 'module_chip_basic', 'chronite'],
              ['module_chip_basic', 'gold_ingot', 'module_chip_basic'],
              ['chronite', 'module_chip_basic', 'chronite']
            ],
            output: 'module_chip_advanced',
            count: 4
          }
        }
      },
      elite: {
        name: 'Elite Tier',
        recipes: {
          module_chip_elite: {
            name: "Module Chip (Elite)",
            ingredients: [
              ['muon_crystal', 'module_chip_advanced', 'muon_crystal'],
              ['module_chip_advanced', 'diamond', 'module_chip_advanced'],
              ['muon_crystal', 'module_chip_advanced', 'muon_crystal']
            ],
            output: 'module_chip_elite',
            count: 4
          }
        }
      },
      ultimate: {
        name: 'Ultimate Tier',
        recipes: {
          module_chip_ultimate: {
            name: "Module Chip (Ultimate)",
            ingredients: [
              ['neutrino_core', 'module_chip_elite', 'neutrino_core'],
              ['module_chip_elite', 'nether_star', 'module_chip_elite'],
              ['neutrino_core', 'module_chip_elite', 'neutrino_core']
            ],
            output: 'module_chip_ultimate',
            count: 4
          }
        }
      }
    }
  },

  batteries: {
    name: 'Batteries',
    tiers: {
      basic: {
        name: 'Basic Tier',
        recipes: {
          battery_basic: {
            name: "Battery (Basic)",
            ingredients: [
              [null, 'redstone', null],
              ['iron_ingot', 'cerulite', 'iron_ingot'],
              ['iron_ingot', 'cerulite', 'iron_ingot']
            ],
            output: 'battery_basic',
            count: 1
          }
        }
      },
      advanced: {
        name: 'Advanced Tier',
        recipes: {
          battery_advanced: {
            name: "Battery (Advanced)",
            ingredients: [
              ['chronite', 'glowstone_dust', 'chronite'],
              ['gold_ingot', 'battery_basic', 'gold_ingot'],
              ['chronite', 'redstone', 'chronite']
            ],
            output: 'battery_advanced',
            count: 1
          }
        }
      },
      elite: {
        name: 'Elite Tier',
        recipes: {
          battery_elite: {
            name: "Battery (Elite)",
            ingredients: [
              ['muon_crystal', 'ender_pearl', 'muon_crystal'],
              ['diamond', 'battery_advanced', 'diamond'],
              ['muon_crystal', 'redstone', 'muon_crystal']
            ],
            output: 'battery_elite',
            count: 1
          }
        }
      },
      ultimate: {
        name: 'Ultimate Tier',
        recipes: {
          battery_ultimate: {
            name: "Battery (Ultimate)",
            ingredients: [
              ['neutrino_core', 'nether_star', 'neutrino_core'],
              ['netherite_ingot', 'battery_elite', 'netherite_ingot'],
              ['neutrino_core', 'eye_of_ender', 'neutrino_core']
            ],
            output: 'battery_ultimate',
            count: 1
          }
        }
      }
    }
  },

  quantum: {
    name: 'Quantum Items',
    tiers: {
      basic: {
        name: 'Basic Items',
        recipes: {
          quantum_point: {
            name: "Quantum Energy Point",
            ingredients: [
              [null, 'cerulite', null],
              ['redstone', 'ender_pearl', 'redstone'],
              [null, 'iron_ingot', null]
            ],
            output: 'quantum_point',
            count: 2
          },
          quantum_source_basic: {
            name: "Quantum Energy Source (Basic)",
            ingredients: [
              ['iron_ingot', 'redstone', 'iron_ingot'],
              ['cerulite', 'ender_pearl', 'cerulite'],
              ['iron_ingot', 'computer', 'iron_ingot']
            ],
            output: 'quantum_source',
            count: 1
          }
        }
      },
      advanced: {
        name: 'Advanced Items',
        recipes: {
          quantum_source_advanced: {
            name: "Quantum Energy Source (Advanced)",
            ingredients: [
              ['chronite', 'quantum_point', 'chronite'],
              ['gold_ingot', 'quantum_source', 'gold_ingot'],
              ['chronite', 'quantum_point', 'chronite']
            ],
            output: 'quantum_source',
            count: 1
          }
        }
      },
      elite: {
        name: 'Elite Items',
        recipes: {
          quantum_source_elite: {
            name: "Quantum Energy Source (Elite)",
            ingredients: [
              ['muon_crystal', 'nether_star', 'muon_crystal'],
              ['diamond', 'quantum_source', 'diamond'],
              ['muon_crystal', 'quantum_point', 'muon_crystal']
            ],
            output: 'quantum_source',
            count: 1
          }
        }
      }
    }
  },

  workbenches: {
    name: 'Workbenches & Tools',
    tiers: {
      basic: {
        name: 'Basic Items',
        recipes: {
          workbench: {
            name: "ElderTech Workbench",
            ingredients: [
              ['iron_ingot', 'computer', 'iron_ingot'],
              ['cerulite', 'obsidian', 'cerulite'],
              ['iron_ingot', 'redstone', 'iron_ingot']
            ],
            output: 'workbench',
            count: 1
          },
          pocket_tablet_basic: {
            name: "Pocket Tablet (Basic)",
            ingredients: [
              ['iron_ingot', 'cerulite', 'iron_ingot'],
              ['cerulite', 'pocket_computer', 'cerulite'],
              ['iron_ingot', 'module_chip_basic', 'iron_ingot']
            ],
            output: 'pocket_computer',
            count: 1
          },
          turtle_upgrade: {
            name: "Enhanced Turtle (Basic)",
            ingredients: [
              ['iron_ingot', 'cerulite', 'iron_ingot'],
              ['cerulite', 'turtle', 'cerulite'],
              ['iron_ingot', 'module_chip_basic', 'iron_ingot']
            ],
            output: 'turtle',
            count: 1
          }
        }
      }
    }
  },

  capacitors: {
    name: 'Capacitors',
    tiers: {
      basic: {
        name: 'Basic Tier',
        recipes: {
          capacitor_basic: {
            name: "Capacitor (Basic)",
            ingredients: [
              ['cerulite', 'redstone', 'cerulite'],
              ['iron_ingot', 'battery_basic', 'iron_ingot'],
              ['cerulite', 'redstone', 'cerulite']
            ],
            output: 'capacitor_basic',
            count: 2
          }
        }
      },
      advanced: {
        name: 'Advanced Tier',
        recipes: {
          capacitor_advanced: {
            name: "Capacitor (Advanced)",
            ingredients: [
              ['chronite', 'capacitor_basic', 'chronite'],
              ['gold_ingot', 'battery_advanced', 'gold_ingot'],
              ['chronite', 'capacitor_basic', 'chronite']
            ],
            output: 'capacitor_advanced',
            count: 2
          }
        }
      },
      elite: {
        name: 'Elite Tier',
        recipes: {
          capacitor_elite: {
            name: "Capacitor (Elite)",
            ingredients: [
              ['muon_crystal', 'capacitor_advanced', 'muon_crystal'],
              ['diamond', 'battery_elite', 'diamond'],
              ['muon_crystal', 'capacitor_advanced', 'muon_crystal']
            ],
            output: 'capacitor_elite',
            count: 2
          }
        }
      },
      ultimate: {
        name: 'Ultimate Tier',
        recipes: {
          capacitor_ultimate: {
            name: "Capacitor (Ultimate)",
            ingredients: [
              ['neutrino_core', 'capacitor_elite', 'neutrino_core'],
              ['netherite_ingot', 'battery_ultimate', 'netherite_ingot'],
              ['neutrino_core', 'nether_star', 'neutrino_core']
            ],
            output: 'capacitor_ultimate',
            count: 2
          }
        }
      }
    }
  },

  processors: {
    name: 'Processors',
    tiers: {
      basic: {
        name: 'Basic Tier',
        recipes: {
          processor_basic: {
            name: "Processor (Basic)",
            ingredients: [
              ['redstone', 'quartz', 'redstone'],
              ['logic_cartridge_basic', 'cerulite', 'logic_cartridge_basic'],
              ['redstone', 'module_chip_basic', 'redstone']
            ],
            output: 'processor_basic',
            count: 1
          }
        }
      },
      advanced: {
        name: 'Advanced Tier',
        recipes: {
          processor_advanced: {
            name: "Processor (Advanced)",
            ingredients: [
              ['chronite', 'processor_basic', 'chronite'],
              ['logic_cartridge_advanced', 'gold_ingot', 'logic_cartridge_advanced'],
              ['chronite', 'module_chip_advanced', 'chronite']
            ],
            output: 'processor_advanced',
            count: 1
          }
        }
      },
      elite: {
        name: 'Elite Tier',
        recipes: {
          processor_elite: {
            name: "Processor (Elite)",
            ingredients: [
              ['muon_crystal', 'processor_advanced', 'muon_crystal'],
              ['logic_cartridge_elite', 'diamond', 'logic_cartridge_elite'],
              ['muon_crystal', 'module_chip_elite', 'muon_crystal']
            ],
            output: 'processor_elite',
            count: 1
          }
        }
      },
      ultimate: {
        name: 'Ultimate Tier',
        recipes: {
          processor_ultimate: {
            name: "Processor (Ultimate)",
            ingredients: [
              ['neutrino_core', 'processor_elite', 'neutrino_core'],
              ['logic_cartridge_ultimate', 'nether_star', 'logic_cartridge_ultimate'],
              ['neutrino_core', 'module_chip_ultimate', 'neutrino_core']
            ],
            output: 'processor_ultimate',
            count: 1
          }
        }
      }
    }
  },

  quantum_cores: {
    name: 'Quantum Cores',
    tiers: {
      basic: {
        name: 'Basic Tier',
        recipes: {
          quantum_core_basic: {
            name: "Quantum Core (Basic)",
            ingredients: [
              ['cerulite', 'ender_pearl', 'cerulite'],
              ['processor_basic', 'quantum_point', 'processor_basic'],
              ['cerulite', 'redstone', 'cerulite']
            ],
            output: 'quantum_core_basic',
            count: 1
          }
        }
      },
      advanced: {
        name: 'Advanced Tier',
        recipes: {
          quantum_core_advanced: {
            name: "Quantum Core (Advanced)",
            ingredients: [
              ['chronite', 'quantum_core_basic', 'chronite'],
              ['processor_advanced', 'quantum_source', 'processor_advanced'],
              ['chronite', 'eye_of_ender', 'chronite']
            ],
            output: 'quantum_core_advanced',
            count: 1
          }
        }
      },
      elite: {
        name: 'Elite Tier',
        recipes: {
          quantum_core_elite: {
            name: "Quantum Core (Elite)",
            ingredients: [
              ['muon_crystal', 'quantum_core_advanced', 'muon_crystal'],
              ['processor_elite', 'nether_star', 'processor_elite'],
              ['muon_crystal', 'eye_of_ender', 'muon_crystal']
            ],
            output: 'quantum_core_elite',
            count: 1
          }
        }
      },
      ultimate: {
        name: 'Ultimate Tier',
        recipes: {
          quantum_core_ultimate: {
            name: "Quantum Core (Ultimate)",
            ingredients: [
              ['neutrino_core', 'quantum_core_elite', 'neutrino_core'],
              ['processor_ultimate', 'nether_star', 'processor_ultimate'],
              ['neutrino_core', 'eye_of_ender', 'neutrino_core']
            ],
            output: 'quantum_core_ultimate',
            count: 1
          }
        }
      }
    }
  },

  energy_cells: {
    name: 'Energy Cells',
    tiers: {
      basic: {
        name: 'Basic Tier',
        recipes: {
          energy_cell_basic: {
            name: "Energy Cell (Basic)",
            ingredients: [
              ['iron_ingot', 'glowstone_dust', 'iron_ingot'],
              ['capacitor_basic', 'cerulite', 'capacitor_basic'],
              ['iron_ingot', 'redstone', 'iron_ingot']
            ],
            output: 'energy_cell_basic',
            count: 1
          }
        }
      },
      advanced: {
        name: 'Advanced Tier',
        recipes: {
          energy_cell_advanced: {
            name: "Energy Cell (Advanced)",
            ingredients: [
              ['gold_ingot', 'energy_cell_basic', 'gold_ingot'],
              ['capacitor_advanced', 'chronite', 'capacitor_advanced'],
              ['gold_ingot', 'glowstone_dust', 'gold_ingot']
            ],
            output: 'energy_cell_advanced',
            count: 1
          }
        }
      },
      elite: {
        name: 'Elite Tier',
        recipes: {
          energy_cell_elite: {
            name: "Energy Cell (Elite)",
            ingredients: [
              ['diamond', 'energy_cell_advanced', 'diamond'],
              ['capacitor_elite', 'muon_crystal', 'capacitor_elite'],
              ['diamond', 'ender_pearl', 'diamond']
            ],
            output: 'energy_cell_elite',
            count: 1
          }
        }
      },
      ultimate: {
        name: 'Ultimate Tier',
        recipes: {
          energy_cell_ultimate: {
            name: "Energy Cell (Ultimate)",
            ingredients: [
              ['netherite_ingot', 'energy_cell_elite', 'netherite_ingot'],
              ['capacitor_ultimate', 'neutrino_core', 'capacitor_ultimate'],
              ['netherite_ingot', 'nether_star', 'netherite_ingot']
            ],
            output: 'energy_cell_ultimate',
            count: 1
          }
        }
      }
    }
  },

  data_crystals: {
    name: 'Data Crystals',
    tiers: {
      basic: {
        name: 'Basic Tier',
        recipes: {
          data_crystal_basic: {
            name: "Data Crystal (Basic)",
            ingredients: [
              [null, 'quartz', null],
              ['cerulite', 'logic_cartridge_basic', 'cerulite'],
              [null, 'redstone', null]
            ],
            output: 'data_crystal_basic',
            count: 4
          }
        }
      },
      advanced: {
        name: 'Advanced Tier',
        recipes: {
          data_crystal_advanced: {
            name: "Data Crystal (Advanced)",
            ingredients: [
              ['chronite', 'data_crystal_basic', 'chronite'],
              ['data_crystal_basic', 'logic_cartridge_advanced', 'data_crystal_basic'],
              ['chronite', 'gold_ingot', 'chronite']
            ],
            output: 'data_crystal_advanced',
            count: 2
          }
        }
      },
      elite: {
        name: 'Elite Tier',
        recipes: {
          data_crystal_elite: {
            name: "Data Crystal (Elite)",
            ingredients: [
              ['muon_crystal', 'data_crystal_advanced', 'muon_crystal'],
              ['data_crystal_advanced', 'logic_cartridge_elite', 'data_crystal_advanced'],
              ['muon_crystal', 'diamond', 'muon_crystal']
            ],
            output: 'data_crystal_elite',
            count: 2
          }
        }
      },
      ultimate: {
        name: 'Ultimate Tier',
        recipes: {
          data_crystal_ultimate: {
            name: "Data Crystal (Ultimate)",
            ingredients: [
              ['neutrino_core', 'data_crystal_elite', 'neutrino_core'],
              ['data_crystal_elite', 'logic_cartridge_ultimate', 'data_crystal_elite'],
              ['neutrino_core', 'nether_star', 'neutrino_core']
            ],
            output: 'data_crystal_ultimate',
            count: 2
          }
        }
      }
    }
  },

  network_cards: {
    name: 'Network Cards',
    tiers: {
      basic: {
        name: 'Basic Tier',
        recipes: {
          network_card_basic: {
            name: "Network Card (Basic)",
            ingredients: [
              ['redstone', 'cerulite', 'redstone'],
              ['module_chip_basic', 'wireless_modem', 'module_chip_basic'],
              ['redstone', 'iron_ingot', 'redstone']
            ],
            output: 'network_card_basic',
            count: 1
          }
        }
      },
      advanced: {
        name: 'Advanced Tier',
        recipes: {
          network_card_advanced: {
            name: "Network Card (Advanced)",
            ingredients: [
              ['chronite', 'network_card_basic', 'chronite'],
              ['module_chip_advanced', 'ender_pearl', 'module_chip_advanced'],
              ['chronite', 'gold_ingot', 'chronite']
            ],
            output: 'network_card_advanced',
            count: 1
          }
        }
      },
      elite: {
        name: 'Elite Tier',
        recipes: {
          network_card_elite: {
            name: "Network Card (Elite)",
            ingredients: [
              ['muon_crystal', 'network_card_advanced', 'muon_crystal'],
              ['module_chip_elite', 'eye_of_ender', 'module_chip_elite'],
              ['muon_crystal', 'diamond', 'muon_crystal']
            ],
            output: 'network_card_elite',
            count: 1
          }
        }
      },
      ultimate: {
        name: 'Ultimate Tier',
        recipes: {
          network_card_ultimate: {
            name: "Network Card (Ultimate)",
            ingredients: [
              ['neutrino_core', 'network_card_elite', 'neutrino_core'],
              ['module_chip_ultimate', 'nether_star', 'module_chip_ultimate'],
              ['neutrino_core', 'netherite_ingot', 'neutrino_core']
            ],
            output: 'network_card_ultimate',
            count: 1
          }
        }
      }
    }
  },

  upgrade_frames: {
    name: 'Upgrade Frames',
    tiers: {
      basic: {
        name: 'Basic Tier',
        recipes: {
          upgrade_frame_basic: {
            name: "Upgrade Frame (Basic)",
            ingredients: [
              ['iron_ingot', 'cerulite', 'iron_ingot'],
              ['cerulite', 'module_chip_basic', 'cerulite'],
              ['iron_ingot', 'cerulite', 'iron_ingot']
            ],
            output: 'upgrade_frame_basic',
            count: 1
          }
        }
      },
      advanced: {
        name: 'Advanced Tier',
        recipes: {
          upgrade_frame_advanced: {
            name: "Upgrade Frame (Advanced)",
            ingredients: [
              ['gold_ingot', 'chronite', 'gold_ingot'],
              ['chronite', 'upgrade_frame_basic', 'chronite'],
              ['gold_ingot', 'module_chip_advanced', 'gold_ingot']
            ],
            output: 'upgrade_frame_advanced',
            count: 1
          }
        }
      },
      elite: {
        name: 'Elite Tier',
        recipes: {
          upgrade_frame_elite: {
            name: "Upgrade Frame (Elite)",
            ingredients: [
              ['diamond', 'muon_crystal', 'diamond'],
              ['muon_crystal', 'upgrade_frame_advanced', 'muon_crystal'],
              ['diamond', 'module_chip_elite', 'diamond']
            ],
            output: 'upgrade_frame_elite',
            count: 1
          }
        }
      },
      ultimate: {
        name: 'Ultimate Tier',
        recipes: {
          upgrade_frame_ultimate: {
            name: "Upgrade Frame (Ultimate)",
            ingredients: [
              ['netherite_ingot', 'neutrino_core', 'netherite_ingot'],
              ['neutrino_core', 'upgrade_frame_elite', 'neutrino_core'],
              ['netherite_ingot', 'module_chip_ultimate', 'netherite_ingot']
            ],
            output: 'upgrade_frame_ultimate',
            count: 1
          }
        }
      }
    }
  },

  flux_coils: {
    name: 'Flux Coils',
    tiers: {
      basic: {
        name: 'Basic Tier',
        recipes: {
          flux_coil_basic: {
            name: "Flux Coil (Basic)",
            ingredients: [
              ['cerulite', 'redstone', 'cerulite'],
              ['redstone', 'iron_ingot', 'redstone'],
              ['cerulite', 'redstone', 'cerulite']
            ],
            output: 'flux_coil_basic',
            count: 4
          }
        }
      },
      advanced: {
        name: 'Advanced Tier',
        recipes: {
          flux_coil_advanced: {
            name: "Flux Coil (Advanced)",
            ingredients: [
              ['chronite', 'flux_coil_basic', 'chronite'],
              ['flux_coil_basic', 'gold_ingot', 'flux_coil_basic'],
              ['chronite', 'glowstone_dust', 'chronite']
            ],
            output: 'flux_coil_advanced',
            count: 2
          }
        }
      },
      elite: {
        name: 'Elite Tier',
        recipes: {
          flux_coil_elite: {
            name: "Flux Coil (Elite)",
            ingredients: [
              ['muon_crystal', 'flux_coil_advanced', 'muon_crystal'],
              ['flux_coil_advanced', 'diamond', 'flux_coil_advanced'],
              ['muon_crystal', 'ender_pearl', 'muon_crystal']
            ],
            output: 'flux_coil_elite',
            count: 2
          }
        }
      },
      ultimate: {
        name: 'Ultimate Tier',
        recipes: {
          flux_coil_ultimate: {
            name: "Flux Coil (Ultimate)",
            ingredients: [
              ['neutrino_core', 'flux_coil_elite', 'neutrino_core'],
              ['flux_coil_elite', 'nether_star', 'flux_coil_elite'],
              ['neutrino_core', 'netherite_ingot', 'neutrino_core']
            ],
            output: 'flux_coil_ultimate',
            count: 2
          }
        }
      }
    }
  },

  resource_processing: {
    name: 'Resource Processing',
    tiers: {
      smelting: {
        name: 'Ore Smelting',
        recipes: {
          cerulite_from_ore: {
            name: "Cerulite Crystal (from Ore)",
            ingredients: [
              [null, 'cerulite_ore', null],
              ['iron_ingot', 'redstone', 'iron_ingot'],
              [null, 'iron_ingot', null]
            ],
            output: 'cerulite',
            count: 2
          },
          chronite_from_ore: {
            name: "Chronite Crystal (from Ore)",
            ingredients: [
              [null, 'chronite_ore', null],
              ['gold_ingot', 'glowstone_dust', 'gold_ingot'],
              [null, 'gold_ingot', null]
            ],
            output: 'chronite',
            count: 2
          },
          muon_from_ore: {
            name: "Muon Crystal (from Ore)",
            ingredients: [
              [null, 'muon_ore', null],
              ['diamond', 'ender_pearl', 'diamond'],
              [null, 'diamond', null]
            ],
            output: 'muon_crystal',
            count: 2
          },
          neutrino_from_ore: {
            name: "Neutrino Core (from Ore)",
            ingredients: [
              [null, 'neutrino_ore', null],
              ['netherite_ingot', 'nether_star', 'netherite_ingot'],
              [null, 'netherite_ingot', null]
            ],
            output: 'neutrino_core',
            count: 2
          }
        }
      },
      dust_refinement: {
        name: 'Dust Refinement',
        recipes: {
          cerulite_from_dust: {
            name: "Cerulite Crystal (from Dust)",
            ingredients: [
              ['cerulite_dust', 'cerulite_dust', 'cerulite_dust'],
              ['cerulite_dust', 'redstone', 'cerulite_dust'],
              ['cerulite_dust', 'cerulite_dust', 'cerulite_dust']
            ],
            output: 'cerulite',
            count: 4
          },
          chronite_from_dust: {
            name: "Chronite Crystal (from Dust)",
            ingredients: [
              ['chronite_dust', 'chronite_dust', 'chronite_dust'],
              ['chronite_dust', 'glowstone_dust', 'chronite_dust'],
              ['chronite_dust', 'chronite_dust', 'chronite_dust']
            ],
            output: 'chronite',
            count: 4
          },
          muon_from_dust: {
            name: "Muon Crystal (from Dust)",
            ingredients: [
              ['muon_dust', 'muon_dust', 'muon_dust'],
              ['muon_dust', 'ender_pearl', 'muon_dust'],
              ['muon_dust', 'muon_dust', 'muon_dust']
            ],
            output: 'muon_crystal',
            count: 4
          },
          neutrino_from_dust: {
            name: "Neutrino Core (from Dust)",
            ingredients: [
              ['neutrino_dust', 'neutrino_dust', 'neutrino_dust'],
              ['neutrino_dust', 'nether_star', 'neutrino_dust'],
              ['neutrino_dust', 'neutrino_dust', 'neutrino_dust']
            ],
            output: 'neutrino_core',
            count: 4
          }
        }
      },
      enrichment: {
        name: 'Material Enrichment',
        recipes: {
          enriched_cerulite: {
            name: "Enriched Cerulite",
            ingredients: [
              ['cerulite', 'stardust', 'cerulite'],
              ['stardust', 'titanium_ingot', 'stardust'],
              ['cerulite', 'stardust', 'cerulite']
            ],
            output: 'enriched_cerulite',
            count: 2
          },
          enriched_chronite: {
            name: "Enriched Chronite",
            ingredients: [
              ['chronite', 'stardust', 'chronite'],
              ['stardust', 'iridium_ingot', 'stardust'],
              ['chronite', 'stardust', 'chronite']
            ],
            output: 'enriched_chronite',
            count: 2
          },
          enriched_muon: {
            name: "Enriched Muon Crystal",
            ingredients: [
              ['muon_crystal', 'void_dust', 'muon_crystal'],
              ['void_dust', 'osmium_ingot', 'void_dust'],
              ['muon_crystal', 'void_dust', 'muon_crystal']
            ],
            output: 'enriched_muon',
            count: 2
          },
          enriched_neutrino: {
            name: "Enriched Neutrino Core",
            ingredients: [
              ['neutrino_core', 'void_dust', 'neutrino_core'],
              ['void_dust', 'plutonium_ingot', 'void_dust'],
              ['neutrino_core', 'void_dust', 'neutrino_core']
            ],
            output: 'enriched_neutrino',
            count: 2
          }
        }
      },
      compression: {
        name: 'Material Compression',
        recipes: {
          compressed_titanium: {
            name: "Compressed Titanium",
            ingredients: [
              ['titanium_ingot', 'titanium_ingot', 'titanium_ingot'],
              ['titanium_ingot', 'diamond', 'titanium_ingot'],
              ['titanium_ingot', 'titanium_ingot', 'titanium_ingot']
            ],
            output: 'compressed_titanium',
            count: 1
          },
          compressed_iridium: {
            name: "Compressed Iridium",
            ingredients: [
              ['iridium_ingot', 'iridium_ingot', 'iridium_ingot'],
              ['iridium_ingot', 'enriched_chronite', 'iridium_ingot'],
              ['iridium_ingot', 'iridium_ingot', 'iridium_ingot']
            ],
            output: 'compressed_iridium',
            count: 1
          },
          compressed_osmium: {
            name: "Compressed Osmium",
            ingredients: [
              ['osmium_ingot', 'osmium_ingot', 'osmium_ingot'],
              ['osmium_ingot', 'enriched_muon', 'osmium_ingot'],
              ['osmium_ingot', 'osmium_ingot', 'osmium_ingot']
            ],
            output: 'compressed_osmium',
            count: 1
          },
          dark_matter_fragment: {
            name: "Dark Matter Fragment",
            ingredients: [
              ['void_dust', 'enriched_neutrino', 'void_dust'],
              ['enriched_neutrino', 'nether_star', 'enriched_neutrino'],
              ['void_dust', 'enriched_neutrino', 'void_dust']
            ],
            output: 'dark_matter_fragment',
            count: 1
          },
          antimatter_capsule: {
            name: "Antimatter Capsule",
            ingredients: [
              ['dark_matter_fragment', 'plutonium_ingot', 'dark_matter_fragment'],
              ['plutonium_ingot', 'compressed_osmium', 'plutonium_ingot'],
              ['dark_matter_fragment', 'plutonium_ingot', 'dark_matter_fragment']
            ],
            output: 'antimatter_capsule',
            count: 1
          }
        }
      }
    }
  },

  dust_collectors: {
    name: 'Dust Collectors',
    tiers: {
      basic: {
        name: 'Basic Tier',
        recipes: {
          dust_collector_basic: {
            name: "Dust Collector (Basic)",
            ingredients: [
              ['iron_ingot', 'wireless_modem', 'iron_ingot'],
              ['cerulite', 'computer', 'cerulite'],
              ['iron_ingot', 'redstone', 'iron_ingot']
            ],
            output: 'dust_collector_basic',
            count: 1
          }
        }
      },
      advanced: {
        name: 'Advanced Tier',
        recipes: {
          dust_collector_advanced: {
            name: "Dust Collector (Advanced)",
            ingredients: [
              ['gold_ingot', 'dust_collector_basic', 'gold_ingot'],
              ['chronite', 'processor_basic', 'chronite'],
              ['gold_ingot', 'glowstone_dust', 'gold_ingot']
            ],
            output: 'dust_collector_advanced',
            count: 1
          }
        }
      },
      elite: {
        name: 'Elite Tier',
        recipes: {
          dust_collector_elite: {
            name: "Dust Collector (Elite)",
            ingredients: [
              ['diamond', 'dust_collector_advanced', 'diamond'],
              ['muon_crystal', 'processor_advanced', 'muon_crystal'],
              ['diamond', 'ender_pearl', 'diamond']
            ],
            output: 'dust_collector_elite',
            count: 1
          }
        }
      },
      ultimate: {
        name: 'Ultimate Tier',
        recipes: {
          dust_collector_ultimate: {
            name: "Dust Collector (Ultimate)",
            ingredients: [
              ['netherite_ingot', 'dust_collector_elite', 'netherite_ingot'],
              ['neutrino_core', 'processor_elite', 'neutrino_core'],
              ['netherite_ingot', 'nether_star', 'netherite_ingot']
            ],
            output: 'dust_collector_ultimate',
            count: 1
          }
        }
      }
    }
  },

  processing_blocks: {
    name: 'Processing Blocks',
    tiers: {
      basic: {
        name: 'Basic Processing',
        recipes: {
          ore_refinery: {
            name: "Ore Refinery",
            ingredients: [
              ['iron_ingot', 'processor_basic', 'iron_ingot'],
              ['titanium_ingot', 'workbench', 'titanium_ingot'],
              ['iron_ingot', 'battery_basic', 'iron_ingot']
            ],
            output: 'ore_refinery',
            count: 1
          }
        }
      },
      advanced: {
        name: 'Advanced Processing',
        recipes: {
          enrichment_chamber: {
            name: "Enrichment Chamber",
            ingredients: [
              ['compressed_titanium', 'processor_advanced', 'compressed_titanium'],
              ['iridium_ingot', 'ore_refinery', 'iridium_ingot'],
              ['compressed_titanium', 'battery_advanced', 'compressed_titanium']
            ],
            output: 'enrichment_chamber',
            count: 1
          }
        }
      },
      elite: {
        name: 'Elite Processing',
        recipes: {
          matter_compressor: {
            name: "Matter Compressor",
            ingredients: [
              ['compressed_iridium', 'processor_elite', 'compressed_iridium'],
              ['osmium_ingot', 'enrichment_chamber', 'osmium_ingot'],
              ['compressed_iridium', 'battery_elite', 'compressed_iridium']
            ],
            output: 'matter_compressor',
            count: 1
          }
        }
      },
      ultimate: {
        name: 'Ultimate Processing',
        recipes: {
          quantum_fabricator: {
            name: "Quantum Fabricator",
            ingredients: [
              ['compressed_osmium', 'processor_ultimate', 'compressed_osmium'],
              ['plutonium_ingot', 'matter_compressor', 'plutonium_ingot'],
              ['compressed_osmium', 'battery_ultimate', 'compressed_osmium']
            ],
            output: 'quantum_fabricator',
            count: 1
          }
        }
      }
    }
  },

  scanners: {
    name: 'Scanners',
    tiers: {
      basic: {
        name: 'Basic Tier',
        recipes: {
          scanner_basic: {
            name: "Basic Scanner",
            ingredients: [
              ['iron_ingot', 'wireless_modem', 'iron_ingot'],
              ['cerulite', 'computer', 'cerulite'],
              ['iron_ingot', 'ender_pearl', 'iron_ingot']
            ],
            output: 'scanner_basic',
            count: 1
          }
        }
      },
      advanced: {
        name: 'Advanced Tier',
        recipes: {
          scanner_advanced: {
            name: "Advanced Scanner",
            ingredients: [
              ['gold_ingot', 'chronite', 'gold_ingot'],
              ['chronite', 'scanner_basic', 'chronite'],
              ['gold_ingot', 'eye_of_ender', 'gold_ingot']
            ],
            output: 'scanner_advanced',
            count: 1
          }
        }
      },
      ultimate: {
        name: 'Artifact Tier',
        recipes: {
          pandora_lens: {
            name: "Pandora Lens",
            ingredients: [
              ['netherite_ingot', 'neutrino_core', 'netherite_ingot'],
              ['neutrino_core', 'scanner_advanced', 'neutrino_core'],
              ['netherite_ingot', 'nether_star', 'netherite_ingot']
            ],
            output: 'pandora_lens',
            count: 1
          }
        }
      }
    }
  }
};

// Tooltip element (created once on page load)
let tooltip = null;

// Create tooltip DOM element
function createTooltip() {
  tooltip = document.createElement('div');
  tooltip.className = 'recipe-tooltip';
  document.body.appendChild(tooltip);
  return tooltip;
}

// Add tooltip event listeners to a slot
function addTooltipListeners(slot, itemKey) {
  slot.addEventListener('mouseenter', (e) => {
    if (!tooltip) createTooltip();

    const itemName = ITEM_NAMES[itemKey] || itemKey;
    const isModded = MODDED_ITEMS.has(itemKey);
    const itemInfo = ITEM_DESCRIPTIONS[itemKey];
    const modName = isModded ? 'CC:ElderTech' : 'Minecraft';

    // Create sprite icon
    let spriteHTML = '';
    if (ITEMS[itemKey]) {
      const [row, col] = ITEMS[itemKey];
      if (row >= 0 && col >= 0) {
        const spritePos = getSpritePosition(row, col);
        spriteHTML = `<div class="sprite-item" style="background-position: ${spritePos}"></div>`;
      }
    }

    // Build tooltip HTML
    let tooltipContent = `
      <div class="tooltip-header">
        <div class="tooltip-icon">${spriteHTML}</div>
        <div class="item-name">${itemName}</div>
      </div>
    `;

    if (itemInfo && itemInfo.desc) {
      tooltipContent += `<div class="item-description">${itemInfo.desc}</div>`;
    }

    if (itemInfo && itemInfo.stats) {
      tooltipContent += `<div class="item-stats">${itemInfo.stats}</div>`;
    }

    if (isModded) {
      tooltipContent += '<div class="wip-badge">Work in Progress</div>';
    }

    tooltipContent += `<div class="mod-name">${modName}</div>`;

    tooltip.innerHTML = tooltipContent;
    tooltip.classList.add('show');
  });

  slot.addEventListener('mouseleave', () => {
    if (tooltip) tooltip.classList.remove('show');
  });

  slot.addEventListener('mousemove', (e) => {
    if (tooltip && tooltip.classList.contains('show')) {
      tooltip.style.left = (e.clientX + 10) + 'px';
      tooltip.style.top = (e.clientY + 10) + 'px';
    }
  });
}

// Create a recipe display element
function createRecipeDisplay(recipe) {
  if (!recipe) return null;

  const wrapper = document.createElement('div');
  wrapper.className = 'recipe-wrapper';

  const title = document.createElement('div');
  title.className = 'recipe-title';
  title.textContent = recipe.name;
  wrapper.appendChild(title);

  const container = document.createElement('div');
  container.className = 'recipe-row-container';

  // Create crafting grid
  const grid = document.createElement('div');
  grid.className = 'crafting-table';

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const slot = document.createElement('div');
      slot.className = 'recipe-slot';

      const itemKey = recipe.ingredients[row][col];
      if (itemKey && ITEMS[itemKey]) {
        slot.classList.add('filled');

        // Only show sprite for non-WIP items
        if (!MODDED_ITEMS.has(itemKey)) {
          const sprite = document.createElement('div');
          sprite.className = 'sprite-item';
          const [spriteRow, spriteCol] = ITEMS[itemKey];
          sprite.style.backgroundPosition = getSpritePosition(spriteRow, spriteCol);
          slot.appendChild(sprite);
        }

        // Add WIP label for modded items
        if (MODDED_ITEMS.has(itemKey)) {
          const wipLabel = document.createElement('div');
          wipLabel.className = 'wip-label';
          wipLabel.textContent = 'WIP';
          slot.appendChild(wipLabel);
        }

        // Add tooltip data
        slot.dataset.itemKey = itemKey;
        addTooltipListeners(slot, itemKey);
      }

      grid.appendChild(slot);
    }
  }

  container.appendChild(grid);

  // Add arrow
  const arrow = document.createElement('div');
  arrow.className = 'recipe-arrow';
  arrow.innerHTML = '→';
  container.appendChild(arrow);

  // Add output
  const output = document.createElement('div');
  output.className = 'recipe-output';
  const outputSlot = document.createElement('div');
  outputSlot.className = 'recipe-slot filled';

  // Only show sprite for non-WIP items
  if (!MODDED_ITEMS.has(recipe.output)) {
    const outputSprite = document.createElement('div');
    outputSprite.className = 'sprite-item';
    if (ITEMS[recipe.output]) {
      const [spriteRow, spriteCol] = ITEMS[recipe.output];
      outputSprite.style.backgroundPosition = getSpritePosition(spriteRow, spriteCol);
    }
    outputSlot.appendChild(outputSprite);
  }

  // Add WIP label for modded output items
  if (MODDED_ITEMS.has(recipe.output)) {
    const wipLabel = document.createElement('div');
    wipLabel.className = 'wip-label';
    wipLabel.textContent = 'WIP';
    outputSlot.appendChild(wipLabel);
  }

  if (recipe.count > 1) {
    const count = document.createElement('div');
    count.className = 'recipe-count';
    count.textContent = recipe.count;
    outputSlot.appendChild(count);
  }

  // Add tooltip to output slot
  outputSlot.dataset.itemKey = recipe.output;
  addTooltipListeners(outputSlot, recipe.output);

  output.appendChild(outputSlot);
  container.appendChild(output);

  wrapper.appendChild(container);

  return wrapper;
}

// Create tabs and expandable sections
function initializeRecipes() {
  const recipesContainer = document.getElementById('recipes-display');
  if (!recipesContainer) return;

  // Create tabs container
  const tabsContainer = document.createElement('div');
  tabsContainer.className = 'recipe-tabs';

  // Create content container
  const contentContainer = document.createElement('div');
  contentContainer.className = 'recipe-tab-content';

  // Create tabs and content for each category
  let firstCategory = true;
  Object.keys(RECIPE_CATEGORIES).forEach(categoryKey => {
    const category = RECIPE_CATEGORIES[categoryKey];

    // Create tab button
    const tab = document.createElement('button');
    tab.className = 'recipe-tab' + (firstCategory ? ' active' : '');
    tab.textContent = category.name;
    tab.dataset.category = categoryKey;
    tab.onclick = () => switchTab(categoryKey);
    tabsContainer.appendChild(tab);

    // Create content panel
    const panel = document.createElement('div');
    panel.className = 'recipe-panel' + (firstCategory ? ' active' : '');
    panel.dataset.category = categoryKey;

    // Create tier sections
    Object.keys(category.tiers).forEach(tierKey => {
      const tier = category.tiers[tierKey];

      // Create collapsible tier section
      const tierSection = document.createElement('div');
      tierSection.className = 'tier-section';

      const tierHeader = document.createElement('div');
      tierHeader.className = 'tier-header';
      tierHeader.innerHTML = `
        <span class="tier-name">${tier.name}</span>
        <span class="tier-toggle">▼</span>
      `;
      tierHeader.onclick = () => toggleTier(tierSection);
      tierSection.appendChild(tierHeader);

      const tierContent = document.createElement('div');
      tierContent.className = 'tier-content';

      const recipesGrid = document.createElement('div');
      recipesGrid.className = 'recipes-grid';

      // Add recipes for this tier
      Object.keys(tier.recipes).forEach(recipeKey => {
        const recipeElement = createRecipeDisplay(tier.recipes[recipeKey]);
        if (recipeElement) {
          recipesGrid.appendChild(recipeElement);
        }
      });

      tierContent.appendChild(recipesGrid);
      tierSection.appendChild(tierContent);
      panel.appendChild(tierSection);
    });

    contentContainer.appendChild(panel);
    firstCategory = false;
  });

  recipesContainer.appendChild(tabsContainer);
  recipesContainer.appendChild(contentContainer);
}

// Switch between tabs
function switchTab(categoryKey) {
  // Update tab buttons
  document.querySelectorAll('.recipe-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.category === categoryKey);
  });

  // Update panels
  document.querySelectorAll('.recipe-panel').forEach(panel => {
    panel.classList.toggle('active', panel.dataset.category === categoryKey);
  });
}

// Toggle tier section
function toggleTier(tierSection) {
  tierSection.classList.toggle('collapsed');
}

// Run on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeRecipes);
} else {
  initializeRecipes();
}
