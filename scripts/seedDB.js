const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

const productSeed = [
  {
    title:
      "L.O.L. Surprise! O.M.G. Lights Groovy Babe Fashion Doll with 15 Surprises",
    image: "https://m.media-amazon.com/images/I/81SpJfojd7L._AC_UL320_.jpg",
    price: "$19.84",
    rating: "4.8",
    category: "dolls",
  },
  {
    title:
      "L.O.L. Surprise! Lights Glitter Doll with 8 Surprises Including Black Light Surprises",
    image: "https://m.media-amazon.com/images/I/81Lwp3Oj4AL._AC_UL320_.jpg",
    price: "$9.59",
    rating: "4.7",
    category: "dolls",
  },
  {
    title: 'Melissa & Doug Luke & Lucy Twin 15" Dolls',
    image: "https://m.media-amazon.com/images/I/71ER9W0WFyL._AC_UL320_.jpg",
    price: "$20.99",
    rating: "4.9",
    category: "dolls",
  },
  {
    title:
      "L.O.L. Surprise! O.M.G. Series 3 Roller Chick Fashion Doll with 20 Surprises",
    image: "https://m.media-amazon.com/images/I/81odMFMWhaL._AC_UL320_.jpg",
    price: "$26.88",
    rating: "4.8",
    category: "dolls",
  },
  {
    title:
      "L.O.L. Surprise! O.M.G. Lights Speedster Fashion Doll with 15 Surprises, Multicolor",
    image: "https://m.media-amazon.com/images/I/81WTM--ZUAL._AC_UL320_.jpg",
    price: "$19.88",
    rating: "4.8",
    category: "dolls",
  },
  {
    title:
      "Baby Alive Baby Lil Sounds: Interactive Brown Hair Baby Doll for Girls & Boys Ages 3 & Up, Makes 10 Sound Effects, Including Giggles, Cries, Baby Doll with Pacifier",
    image: "https://m.media-amazon.com/images/I/61t9Y7WObSL._AC_UL320_.jpg",
    price: "$12.79",
    rating: "4.7",
    category: "dolls",
  },
  {
    title:
      "Baby Alive Magical Mixer Baby Doll Tropical Treat with Blender Accessories, Drinks, Wets, Eats, Brown Hair Toy for Kids Ages 3 and Up",
    image: "https://m.media-amazon.com/images/I/81-vw8-6fIL._AC_UL320_.jpg",
    price: "$24.97",
    rating: "4.7",
    category: "dolls",
  },
  {
    title:
      "Kindi Kids Snack Time Friends - Pre-School Play Doll, Marsha Mello - for Ages 3+ | Changeable Clothes and Removable Shoes - Fun Snack-Time Play, for Imaginative Kids",
    image: "https://m.media-amazon.com/images/I/812GdM5pchL._AC_UL320_.jpg",
    price: "$19.97",
    rating: "4.8",
    category: "dolls",
  },
  {
    title:
      "Cabbage Patch Kids Official, Newborn Baby Doll Girl - Comes with Swaddle Blanket and Unique Adoption Birth Announcement",
    image: "https://m.media-amazon.com/images/I/812S5jY2yGL._AC_UL320_.jpg",
    price: "$12.99",
    rating: "4.7",
    category: "dolls",
  },
  {
    title:
      "L.O.L. Surprise! O.M.G. Lights Angles Fashion Doll with 15 Surprises",
    image: "https://m.media-amazon.com/images/I/81Bf6WYxtRL._AC_UL320_.jpg",
    price: "$22.49",
    rating: "4.8",
    category: "dolls",
  },
  {
    title: "L.O.L. Surprise! O.M.G. Winter Disco Dollie Fashion Doll & Sister",
    image: "https://m.media-amazon.com/images/I/81MGO7KPtDL._AC_UL320_.jpg",
    price: "$33.00",
    rating: "4.8",
    category: "dolls",
  },
  {
    title:
      "Barbie Chelsea Travel Doll, Blonde, with Puppy, Carrier & Accessories, for 3 to 7 Year Olds, Multicolor",
    image: "https://m.media-amazon.com/images/I/81jL4pj-AQL._AC_UL320_.jpg",
    price: "$8.49",
    rating: "4.8",
    category: "dolls",
  },
  {
    title: "Madame Alexander Dolls Going to Grandma's Huggums",
    image: "https://m.media-amazon.com/images/I/615QbDM6DSL._AC_UL320_.jpg",
    price: "$56.69",
    rating: "4.8",
    category: "dolls",
  },
  {
    title:
      "Barbie Doll with Outfits and Accessories for 3 Fairytale Characters, a Princess, Mermaid and Fairy, Gift for 3 to 7 Year Olds",
    image: "https://m.media-amazon.com/images/I/81x4ZbLCYqL._AC_UL320_.jpg",
    price: "$19.63",
    rating: "4.7",
    category: "dolls",
  },
  {
    title: "Royal Bobbles Ruth Bader Ginsburg - Notorious RBG Bobblehead",
    image: "https://m.media-amazon.com/images/I/6119g3--IBL._AC_UL320_.jpg",
    price: "$49.95",
    rating: "4.9",
    category: "dolls",
  },
  {
    title:
      "MOYEE Action Figures, Anime Figures, 24 PCS Super Hero Adventures Play Set - Mini PVC Web Warriors Figures Toys Dolls for Kids Ages 3 and Up, Christmas, Birthday Gift & Home, Car, Decoration",
    image: "https://m.media-amazon.com/images/I/71apH6I6+OL._AC_UL320_.jpg",
    price: "$20.99",
    rating: "4.5",
    category: "action figures",
  },
  {
    title: "BATMAN, 12-Inch THE JOKER Action Figure",
    image: "https://m.media-amazon.com/images/I/71ilz5YLqoL._AC_UL320_.jpg",
    price: "$9.97",
    rating: "4.8",
    category: "action figures",
  },
  {
    title:
      "Gumair Superhero Action Figures-6 PCS Hero Model Set- Batman, Superman, Hulk, Thor, Ironman, Captain America PVC Figure Toy Dolls-Hero Cake Toppers 4 inch",
    image: "https://m.media-amazon.com/images/I/71MA9TlyaLL._AC_UL320_.jpg",
    price: "$21.99",
    rating: "0",
    category: "action figures",
  },
  {
    title:
      "Playskool Heroes Marvel Super Hero Adventures Ultimate Super Hero Set, 10 Collectible 2.5-Inch Action Figures, Toys for Kids Ages 3 and Up (Amazon Exclusive)",
    image: "https://m.media-amazon.com/images/I/81k6lj9I4xL._AC_UL320_.jpg",
    price: "$28.97",
    rating: "4.8",
    category: "action figures",
  },
  {
    title: 'Avengers Titan Hero Captain America 12" Action Figure',
    image: "https://m.media-amazon.com/images/I/71QDpAoCPkL._AC_UL320_.jpg",
    price: "$9.57",
    rating: "4.7",
    category: "action figures",
  },
  {
    title:
      "US Army Men and SWAT Team Toy Soldiers Action Figures Playset with Military Weapons Accessories for Kids Boys Girls,12Pcs",
    image: "https://m.media-amazon.com/images/I/71e8365xe+L._AC_UL320_.jpg",
    price: "$18.99",
    rating: "4.5",
    category: "action figures",
  },
  {
    title:
      "JOYIN 16 PCs Military Toy Soldiers Playset Army Men Figures with 12 Realistic Army Ranger Action Figures and Weapon Gear Accessories Military Combat Toys",
    image: "https://m.media-amazon.com/images/I/91Nfg0a03yL._AC_UL320_.jpg",
    price: "$14.95",
    rating: "4.5",
    category: "action figures",
  },
  {
    title: "McFarlane Toys Mortal Kombat Baraka Action Figure, Multi",
    image: "https://m.media-amazon.com/images/I/519BQoMYRKL._AC_UL320_.jpg",
    price: "$19.99",
    rating: "5",
    category: "action figures",
  },
  {
    title:
      "Inked and Screened Set of 144pcs 2-3CM Collectable Poke Mini Action Figures mon Heroic Figure Combination",
    image: "https://m.media-amazon.com/images/I/71v3FKsE8aL._AC_UL320_.jpg",
    price: "$29.99",
    rating: "0",
    category: "action figures",
  },
  {
    title:
      "Marvel Ultimate Spider-man Titan Hero Series Spider-man Figure, 12-Inch",
    image: "https://m.media-amazon.com/images/I/714tQZsnTOL._AC_UL320_.jpg",
    price: "$11.95",
    rating: "4.7",
    category: "action figures",
  },
  {
    title:
      "Spider-Man Maximum Venom Titan Hero Venom Action Figure, Inspired by The Marvel Universe, Blast Gear-Compatible Back Port, Ages 4 and Up",
    image: "https://m.media-amazon.com/images/I/71NYECSblpL._AC_UL320_.jpg",
    price: "$14.92",
    rating: "4.6",
    category: "action figures",
  },
  {
    title:
      'Avengers Series Marvel Assemble Titan Hero Iron Man 12" Action Figure',
    image: "https://m.media-amazon.com/images/I/716jvoBzF1L._AC_UL320_.jpg",
    price: "$12.94",
    rating: "4.7",
    category: "action figures",
  },
  {
    title:
      "fdg 144 Pcs Mini Action Figures PET Set Poke Heroes Action Figure Toy mon 2-3 cm Crazy pet Big Collection",
    image: "https://m.media-amazon.com/images/I/61hiJtu+l5L._AC_UL320_.jpg",
    price: "$36.00",
    rating: "0",
    category: "action figures",
  },
  {
    title:
      "LEGO DC Batboat The Penguin Pursuit! 76158 Top Batman Building Toy for Kids, with Super-Hero Minifigures, 2 Boats, a Batarang and an Umbrella, Great Holiday or Birthday Gift, New 2020 (55 Pieces)",
    image: "https://m.media-amazon.com/images/I/81df9hjDumL._AC_UL320_.jpg",
    price: "$8.99",
    rating: "4.7",
    category: "action figures",
  },
  {
    title:
      "Dinosaur Toy with Activity Play Mat - 11 Educational Realistic Dinosaur Figures Including T-Rex and Triceratops for Creating a Dino World, Dino Toys Gifts for Boy & Girls, for Kids",
    image: "https://m.media-amazon.com/images/I/819cnK2S9PL._AC_UL320_.jpg",
    price: "$26.99",
    rating: "4.5",
    category: "action figures",
  },
  {
    title:
      "LEGO Friends Panda Jungle Tree House 41422 Building Toy; Includes 3 Panda Minifigures for KidsWho Love Wildlife Animals Friends Mia and Olivia, New 2020 (265 Pieces)",
    image: "https://m.media-amazon.com/images/I/81G6I+n++AL._AC_UL320_.jpg",
    price: "$29.95",
    rating: "4.8",
    category: "building toys",
  },
  {
    title:
      "LEGO NINJAGO Spinjitzu Burst - Cole 70685 NINJAGO Accessory Set Building Kit Featuring Ninja Minifigure, New 2020 (48 Pieces)",
    image: "https://m.media-amazon.com/images/I/81Qf0ENKyzL._AC_UL320_.jpg",
    price: "$8.99",
    rating: "4.4",
    category: "building toys",
  },
  {
    title:
      "LEGO DC Batboat The Penguin Pursuit! 76158 Top Batman Building Toy for Kids, with Super-Hero Minifigures, 2 Boats, a Batarang and an Umbrella, Great Holiday or Birthday Gift, New 2020 (55 Pieces)",
    image: "https://m.media-amazon.com/images/I/81df9hjDumL._AC_UL320_.jpg",
    price: "$8.99",
    rating: "4.7",
    category: "building toys",
  },
  {
    title:
      "LEGO Super Mario Bowser’s Castle Boss Battle Expansion Set 71369 Building Kit; Collectible Toy for Kids to Customize Their LEGO Super Mario Starter Course (71360) Playset, New 2020 (1,010 Pieces)",
    image: "https://m.media-amazon.com/images/I/81X8G5T3QfL._AC_UL320_.jpg",
    price: "$99.95",
    rating: "4.8",
    category: "building toys",
  },
  {
    title:
      "DEJUN Building Blocks Tiles Construction and Connect Toy Sets, Educational Building Toys Building Sets, Develops Kids Imagination, Interlocking Solid for Preschool Toddlers Girls and Boys (70 PCS)",
    image: "https://m.media-amazon.com/images/I/715rgpLorvL._AC_UL320_.jpg",
    price: "$69.99",
    rating: "5",
    category: "building toys",
  },
  {
    title:
      "DEJUN Interlocking Building Blocks for Kids Babies and Toddlers STEM Educational Toys (70 PCS)",
    image: "https://m.media-amazon.com/images/I/715rgpLorvL._AC_UL320_.jpg",
    price: "$69.99",
    rating: "5",
    category: "building toys",
  },
  {
    title:
      "VIAHART Brain Flakes 500 Piece Interlocking Plastic Disc Set | A Creative and Educational Alternative to Building Blocks | Tested for Children's Safety | A Great STEM Toy for Both Boys and Girls!",
    image: "https://m.media-amazon.com/images/I/919iEnixCnL._AC_UL320_.jpg",
    price: "$16.99",
    rating: "4.8",
    category: "building toys",
  },
  {
    title:
      "Tiny Land Kids-Fort-Building-Kits-130 Pieces-Creative Fort Toy for 5,6,7 Years Old Boy & Girls- Learning Toys DIY Building Castles Tunnels Play Tent Rocket Tower Indoor & Outdoor",
    image: "https://m.media-amazon.com/images/I/91MQT4y+BJL._AC_UL320_.jpg",
    price: "$49.99",
    rating: "4.8",
    category: "building toys",
  },
  {
    title:
      "163 Piece STEM Toys Kit, Educational Construction Engineering Building Blocks Learning Set for Ages 3 4 5 6 7 8 9 10 Year Old Boys & Girls by Brickyard, Best Kids Toy, Creative Games & Fun Activity",
    image: "https://m.media-amazon.com/images/I/71n+Tfa62ML._AC_UL320_.jpg",
    price: "$29.95",
    rating: "4.7",
    category: "building toys",
  },
  {
    title:
      "Jasonwell STEM Toys Building Blocks - 166+PCS Educational Construction Set Creative Engineering Toys Building Toys Kit Stem Activities Learning Gift for Kids Ages 3 4 5 6 7 8 9 10 Year Old Boys Girls",
    image: "https://m.media-amazon.com/images/I/81xlHysPcFL._AC_UL320_.jpg",
    price: "$29.99",
    rating: "4.8",
    category: "building toys",
  },
  {
    title:
      "Bristle Blocks by Battat – The Official Bristle Blocks – 112Piece – Creativity Building Toys Dexterity Fine Motricity – Bpa Free 2 Years +",
    image: "https://m.media-amazon.com/images/I/81TmKrqAUSL._AC_UL320_.jpg",
    price: "$15.50",
    rating: "4.7",
    category: "building toys",
  },
  {
    title:
      "Sanlebi Take Apart Dinosaur Toys for Boys - Building Toy Set with Electric Drill Construction Engineering Play Kit STEM Learning for Kids Girls Age 3 4 5 Year Old",
    image: "https://m.media-amazon.com/images/I/51iTuVGzABL._AC_UL320_.jpg",
    price: "$26.99",
    rating: "4.6",
    category: "building toys",
  },
  {
    title:
      "PicassoTiles PTB120 120pcs Bristle Shape 3D Building Blocks Tiles Construction Toy Set Learning Playset STEM Toy Set Educational Kit Child Branin Development Preschool Kindergarten Toy",
    image: "https://m.media-amazon.com/images/I/81WgvwYaA+L._AC_UL320_.jpg",
    price: "$25.00",
    rating: "4.8",
    category: "building toys",
  },
  {
    title:
      "Veatree 150 Pcs Magnetic Building Sticks Blocks Toys, Magnet Educational Toys Magnetic Blocks Sticks Stacking Toys Set for Kids and Adult, Non-Toxic Building Toy 3D Puzzle with Storage Bag",
    image: "https://m.media-amazon.com/images/I/71XnLT01ZGL._AC_UL320_.jpg",
    price: "$19.99",
    rating: "4.7",
    category: "building toys",
  },
  {
    title:
      "ELONGDI 130 Pieces - Magnetic Building Sticks Building Blocks Set, Magnet Educational Toys Magnetic Blocks Sticks Stacking Toys Set, Non-Toxic Building Toy 3D Puzzle with Storage Bag",
    image: "https://m.media-amazon.com/images/I/71pQR5UtJNL._AC_UL320_.jpg",
    price: "$14.43",
    rating: "4.6",
    category: "building toys",
  },
  {
    title:
      "EMIDO Building Blocks Kids Educational Toys STEM Toys Building Discs Sets Interlocking Solid Plastic for Preschool Kids Boys and Girls, Safe Material for Kids - 120 Pieces with Storage Bag",
    image: "https://m.media-amazon.com/images/I/71G4YjfUSAL._AC_UL320_.jpg",
    price: "$15.98",
    rating: "4.5",
    category: "building toys",
  },
  {
    title:
      "QIUXQIU Building Toy Kits Puzzle Bricks Creative Collectible Building Sets Stunning Wall Art and Crafts Love Bear Gift for Birthday Anniversary(Camouflage Bear-Blue,UnFrame)",
    image: "https://m.media-amazon.com/images/I/61hzTzXqPdL._AC_UL320_.jpg",
    price: "$19.99",
    rating: "4.8",
    category: "building toys",
  },
  {
    title:
      "OASO Remote Control STEM Building Kit for Boys 8-12, 392 Pcs Science Learning Educational Building Blocks for Kids, 3 in 1 Tracked Racer RC Car/Tank/Robot Toys Gift Sets for Boys Girls",
    image: "https://m.media-amazon.com/images/I/81LU2GHgovL._AC_UL320_.jpg",
    price: "$49.99",
    rating: "5",
    category: "building toys",
  },
  {
    title:
      "Building Robot,STEM Robot Toys for Kids, Building Toys RC Robot Toys Construction Engineering Building Blocks Rechargeable Programmable Robot, Best Gift for Kids Age 8 Years Old and up, Boys &Girls",
    image: "https://m.media-amazon.com/images/I/71jik4U2sxL._AC_UL320_.jpg",
    price: "$39.99",
    rating: "5",
    category: "building toys",
  },
  {
    title:
      "Huaker Kids Building STEM Toys ,125 Pcs Educational Construction Engineering Building Blocks Kit for Ages 3 4 5 6 7 8 9 10 Year Old Boys and Girls ,Best Gift for Kids Creative Games & Fun Activity",
    image: "https://m.media-amazon.com/images/I/81uVL-plhOL._AC_UL320_.jpg",
    price: "$23.99",
    rating: "0",
    category: "building toys",
  },
  {
    title: "The Boxcar Children 20-Book Set (The Boxcar Children Mysteries)",
    image: "https://m.media-amazon.com/images/I/61gZs3s+23L._AC_UY218_.jpg",
    price: "$79.03",
    rating: "4.8",
    category: "children books",
  },
  {
    title: "Bluford Series 20-Book Boxed Set (Books 1-20)",
    image: "https://m.media-amazon.com/images/I/71KTKVMp2yL._AC_UY218_.jpg",
    price: "$69.99",
    rating: "4.9",
    category: "children books",
  },
  {
    title:
      "Teacher Created Materials - Discover Earth and Space Science Collection - 20 Book Set - Grades K-4 - Guided Reading Level F - T",
    image: "https://m.media-amazon.com/images/I/61hY6W3XD8L._AC_UY218_.jpg",
    price: "$129.75",
    rating: "0",
    category: "children books",
  },
  {
    title:
      "AISFA Airplane Toys Set with Transport Cargo and 4pcs Vehicle Car Toy, Parking Scene Game with Stickers, Educational Vehicle Airplane Car Set for 3 4 5 Years Old Boys and Girls",
    image: "https://m.media-amazon.com/images/I/712bSCM2sCL._AC_UY218_.jpg",
    price: "$21.85",
    rating: "4.4",
    category: "toys vehicles",
  },
  {
    title:
      "Temi Construction Toys Kids Construction Site Vehicles Toy Set with Play Mat for 3+ Years Old Boys Engineering Educational Playset Tractor, Digger, Crane, Dump Trucks, Excavator, Steamroller",
    image: "https://m.media-amazon.com/images/I/71R-zHmrygL._AC_UY218_.jpg",
    price: "$25.99",
    rating: "0",
    category: "toys vehicles",
  },
  {
    title:
      "KIDWILL Car Toys Set with Transport Cargo Airplane, Large Theme Airplane, 4 Construction Trucks, 11 Road Signs, Educational Toy Vehicle Play Set Girls for Toddler Boys Girls Age 3+",
    image: "https://m.media-amazon.com/images/I/81Xtb+n8lGL._AC_UY218_.jpg",
    price: "$26.99",
    rating: "5",
    category: "toys vehicles",
  },
  {
    title:
      "Alloy Construction Engineering Vehicle Toys Set 12 Pack Stacker,Big Forklift,Heavy Duty Roller,Excavator,Heavy Transport Vehicle,Engineering Mixer Set for Kids Boys",
    image: "https://m.media-amazon.com/images/I/713hspO0NVL._AC_UY218_.jpg",
    price: "$10.99",
    rating: "4.2",
    category: "toys vehicles",
  },
  {
    title:
      "Wemfg 3 Pack of Car Toy Set Play Vehicles in Carrier Truck, Postal Truck, Pull Back Car Toys with Opening Doors for Boys and Girls, Car Toy Play Set",
    image: "https://m.media-amazon.com/images/I/71FcoPFAKgL._AC_UY218_.jpg",
    price: "$21.99",
    rating: "5",
    category: "toys vehicles",
  },
  {
    title:
      "JOYIN 3-in-1 Toy Trucks Set Including Fire Truck, Garbage Truck and Excavator with 4D Stunning Lights and Sounds Automatic Bump & Go Toy Vehicles for Kids",
    image: "https://m.media-amazon.com/images/I/910GFL-1CHL._AC_UY218_.jpg",
    price: "$24.95",
    rating: "4.1",
    category: "toys vehicles",
  },
  {
    title:
      "Kidzone DIY Race #00-99 6V Kids Toy Electric Ride On Bumper Car Vehicle Remote Control 360 Spin ASTM-Certified Dark Blue",
    image: "https://m.media-amazon.com/images/I/71xkDRBbIyL._AC_UY218_.jpg",
    price: "",
    rating: "4.8",
    category: "toys vehicles",
  },
  {
    title:
      "WowWee Power Treads - All-Surface Toy Vehicles - Full Throttle Pack - 40+ Pieces (As Seen on TV)",
    image: "https://m.media-amazon.com/images/I/81fzgvUNXTL._AC_UY218_.jpg",
    price: "$24.99",
    rating: "4",
    category: "toys vehicles",
  },
  {
    title:
      "Toddlers Pull Back Soft Cars - VANLINNY 4PCS Baby Mini Plush Dino Vehicle Toys Set , Police/School Bus/Taxi/Fire Truck With Dinosaur City Play Mat , Best Gift For Ages 8 Months 1,2 Year Old Boy & Girl",
    image: "https://m.media-amazon.com/images/I/81enLgKsKNL._AC_UY218_.jpg",
    price: "$19.99",
    rating: "0",
    category: "toys vehicles",
  },
  {
    title: "Bruder 02457 CAT Mini Excavator Vehicle Toys",
    image: "https://m.media-amazon.com/images/I/81c1bCC0QZL._AC_UY218_.jpg",
    price: "$39.80",
    rating: "4.5",
    category: "toys vehicles",
  },
  {
    title:
      "BEZGAR 1 Hobbyist Grade 1:12 Scale Remote Control Truck, 4WD High Speed 42 Km/h All Terrains Electric Toy Off Road RC Monster Vehicle Car Crawler with 2 Rechargeable Batteries for Boys Kids and Adults",
    image: "https://m.media-amazon.com/images/I/91g34oSRdnL._AC_UY218_.jpg",
    price: "$89.99",
    rating: "4.5",
    category: "toys vehicles",
  },
  {
    title:
      "BEZGAR 17 Toy Grade 1:14 Scale Remote Control Car, 2WD High Speed 20 Km/h All Terrains Electric Toy Off Road RC Monster Vehicle Truck Crawler with Two Rechargeable Batteries for Boys Kids and Adults",
    image: "https://m.media-amazon.com/images/I/81vDYgWlQ1L._AC_UY218_.jpg",
    price: "$39.99",
    rating: "4.2",
    category: "toys vehicles",
  },
  {
    title:
      "CUTE STONE Alloy Construction Vehicles Truck Toy Set, Kids Engineering Truck Playset, Crane, Excavator, Cement, Fuel Truck, Wheel Loader with 3 Interchangeable Parts,Gift for Toddlers Boys Children",
    image: "https://m.media-amazon.com/images/I/71l3hnqzI-L._AC_UY218_.jpg",
    price: "$32.99",
    rating: "4.6",
    category: "toys vehicles",
  },
  {
    title:
      "Remote Control Car RC Car, Fixget 4WD 2.4 GHz Remote Control Stunt Car Toys Double Sided Rotating Vehicles 360°Flips, Kids Outdoor Indoor Toys Birthday Gift for Boys Girls (Included Battery)",
    image: "https://m.media-amazon.com/images/I/714xV5IpM3L._AC_UY218_.jpg",
    price: "$23.99",
    rating: "4.9",
    category: "toys vehicles",
  },
  {
    title:
      "Take Apart Toys Construction Truck Take Apart Toy for Boys- Gift Toys for Boys 3,4,5,6,7 Year Olds,Kids Stem Building Toy,Truck Toys DIY Engineering Learning Educational Toy Vehicle",
    image: "https://m.media-amazon.com/images/I/81cVINH+3SL._AC_UY218_.jpg",
    price: "$18.99",
    rating: "4.8",
    category: "toys vehicles",
  },
  {
    title:
      "JOYIN 20 Piece Pull Back Die Cast Metal Toy Car Model Vehicle Set for Toddlers, Girls and Boys Kids Play Car Set",
    image: "https://m.media-amazon.com/images/I/816ufL6uzBL._AC_UY218_.jpg",
    price: "$22.99",
    rating: "4.5",
    category: "toys vehicles",
  },
  {
    title:
      "Lucky Doug Solar Robot Kit 12-in-1 Science STEM Robot Kit Toys for Kids Aged 8-12 and Older, Science Building Set Gifts for Boys Girls Students Teens, Educational DIY Assembly Kit with Solar Powered",
    image: "https://m.media-amazon.com/images/I/81E0xxfjIFL._AC_UL320_.jpg",
    price: "$25.99",
    rating: "4",
    category: "kids electronics games",
  },
  {
    title:
      "VTech KidiBuzz G2 Kids’ Electronics Smart Device with KidiConnect, Pink,",
    image: "https://m.media-amazon.com/images/I/71q+TKBEqBL._AC_UL320_.jpg",
    price: "$78.99",
    rating: "4.1",
    category: "kids electronics games",
  },
  {
    title:
      "Beijue 16 Bit Handheld Games for Kids Adults 3.0'' Large Screen Preloaded 100 HD Classic Retro Video Games no Need WiFi USB Rechargeable Seniors Electronic Game Player Birthday Xmas Present (Red)",
    image: "https://m.media-amazon.com/images/I/611sCBctXuL._AC_UL320_.jpg",
    price: "$28.98",
    rating: "4",
    category: "kids electronics games",
  },
  {
    title:
      'HigoKids Portable Handheld Games for Kids 2.5" LCD Screen Game Console TV Output Arcade Gaming Player System Built in 182 Classic Retro Video Games Birthday for Your Boys Girls (Blue)',
    image: "https://m.media-amazon.com/images/I/61cjj+PaQmL._AC_UL320_.jpg",
    price: "$23.99",
    rating: "3.7",
    category: "kids electronics games",
  },
  {
    title:
      "Beijue Retro Handheld Games for Kids Built in 218 Classic Old Style Electronic Game 2.5'' Screen 3.5MM Earphone Jack USB Rechargeable Portable Video Player Children Travel Holiday Entertain (Pink)",
    image: "https://m.media-amazon.com/images/I/61WM7LV+PKL._AC_UL320_.jpg",
    price: "$22.98",
    rating: "3.8",
    category: "kids electronics games",
  },
  {
    title:
      "Simon Game; Electronic Memory Game for Kids Ages 8 and Up; Handheld Game with Lights and Sounds; Classic Simon Gameplay",
    image: "https://m.media-amazon.com/images/I/81P7iHZ+1lL._AC_UL320_.jpg",
    price: "$19.99",
    rating: "4.6",
    category: "kids electronics games",
  },
  {
    title:
      "Tiger Electronics Marvel X-Men Project X Electronic LCD Video Game, Retro-Inspired 1-Player Handheld Game, Ages 8 and Up",
    image: "https://m.media-amazon.com/images/I/91BpRrZCPrL._AC_UL320_.jpg",
    price: "$14.99",
    rating: "4.6",
    category: "kids electronics games",
  },
  {
    title:
      "Sportcraft Basketball Arcade Game, Indoor Play Equipment - Sports Activities & Birthday Party Games for Kids",
    image: "https://m.media-amazon.com/images/I/81mtayqUM8L._AC_UL320_.jpg",
    price: "$56.42",
    rating: "4",
    category: "kids electronics games",
  },
  {
    title:
      'School Zone - Little Scholar Kids Learning Tablet - Ages 3 to 7, Preschool, Kindergarten, 1st Grade, 7" Display, 70+ Preloaded Educational Apps, Screen Protector, Silicone Bumper, 16 GB, Wifi, Camera',
    image: "https://m.media-amazon.com/images/I/81s4dVr4t1L._AC_UL320_.jpg",
    price: "$122.96",
    rating: "3.9",
    category: "kids electronics games",
  },
  {
    title: "Fisher-Price Think & Learn Smart Cycle",
    image: "https://m.media-amazon.com/images/I/617EQlPwymL._AC_UL320_.jpg",
    price: "$249.99",
    rating: "4.5",
    category: "kids electronics games",
  },
  {
    title:
      "Claw Machine For Kids - Fill The Toy Claw Machine With Prizes, Candy, Small Toys - Fun Gift, Party Game For Children - Electronic Claw Toy Candy Grabber Crane Machine With Led Lights And Sound Effects",
    image: "https://m.media-amazon.com/images/I/711lWY2GZoL._AC_UL320_.jpg",
    price: "$35.99",
    rating: "0",
    category: "kids electronics games",
  },
  {
    title: "Electronic Battleship Game",
    image: "https://m.media-amazon.com/images/I/713MbAi8E6L._AC_UL320_.jpg",
    price: "$27.49",
    rating: "4.5",
    category: "kids electronics games",
  },
  {
    title:
      "Tiger Electronics Disney's The Little Mermaid Electronic LCD Video Game, Retro-Inspired Edition, Handheld 1-Player Game, Ages 8 and Up",
    image: "https://m.media-amazon.com/images/I/81wxCnTOQfL._AC_UL320_.jpg",
    price: "$14.99",
    rating: "4.5",
    category: "kids electronics games",
  },
  {
    title:
      "EASEGMER Handheld Game Console, Portable Game Player Built-in 208 Classic Games 4 Inch Retro Gaming System, Support TV/AV 12 Bit Rechargeable Video Game Console, Best Gift for Kids and Adults (White)",
    image: "https://m.media-amazon.com/images/I/718PCBtaxQL._AC_UL320_.jpg",
    price: "$39.99",
    rating: "4.3",
    category: "kids electronics games",
  },
  {
    title:
      "Dinosaur Shooting Toys for Kids, Target Shooter Battle Toy with LCD Score Record and 2 Air Pump Guns and 48 Soft Foam Ball Bullets, Interactive Electronic Games Toys Gift for Boys and Girls (Green)",
    image: "https://m.media-amazon.com/images/I/61lhTkE6YZL._AC_UL320_.jpg",
    price: "$42.99",
    rating: "4.9",
    category: "kids electronics games",
  },
  {
    title:
      'Handheld Games Console for Kids 4-8, Retro FC Arcade Video Gaming System Built-in 400 Classic Old School Games 3.0" LCD USB Charge and TV-Output, Birthday Gifts for Boys Girls Adults-Black (RED)',
    image: "https://m.media-amazon.com/images/I/61-5P8LoLVL._AC_UL320_.jpg",
    price: "$99.99",
    rating: "0",
    category: "kids electronics games",
  },
];

db.Product.remove({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });