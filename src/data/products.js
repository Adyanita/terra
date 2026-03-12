export const categories = [
  { id: "all", label: "All" },
  { id: "tees", label: "Tees" },
  { id: "hoodies", label: "Hoodies" },
  { id: "bottoms", label: "Bottoms" },
  { id: "outerwear", label: "Outerwear" },
  { id: "accessories", label: "Accessories" },
];

export const products = [
  {
    id: 1,
    name: "Desert Mirage Oversized Tee",
    category: "tees",
    price: 1299,
    originalPrice: 1799,
    badge: "BESTSELLER",
    colors: [
      { name: "Sand Beige", hex: "#C4A882" },
      { name: "Dark Brown", hex: "#4A3728" },
      { name: "Cream", hex: "#E8DDD0" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description:
      "Drop-shoulder silhouette in 240gsm brushed cotton. Washed and garment-dyed for that lived-in feel. Slightly cropped hem with ribbed cuffs.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80",
    ],
    tags: ["oversized", "cotton", "washed"],
  },
  {
    id: 2,
    name: "Terra Script Graphic Tee",
    category: "tees",
    price: 999,
    originalPrice: 1399,
    badge: "NEW",
    colors: [
      { name: "Taupe", hex: "#8B7355" },
      { name: "Espresso", hex: "#2C2016" },
      { name: "Off White", hex: "#F5F0E8" },
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "100% ring-spun combed cotton. Screen-printed with water-based inks. Classic boxy cut with subtle raw hem finish.",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80",
    ],
    tags: ["graphic", "cotton", "boxy"],
  },
  {
    id: 3,
    name: "Sandstone Ribbed Henley",
    category: "tees",
    price: 1199,
    originalPrice: null,
    badge: null,
    colors: [
      { name: "Light Beige", hex: "#D4B896" },
      { name: "Medium Brown", hex: "#6B5344" },
      { name: "Pale Cream", hex: "#F0EAE0" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Fine-gauge ribbed fabric in a relaxed henley cut. Three-button placket. Pre-washed for instant softness.",
    images: [
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&q=80",
      "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=600&q=80",
    ],
    tags: ["ribbed", "henley", "relaxed"],
  },
  {
    id: 4,
    name: "Ash Washed Pocket Tee",
    category: "tees",
    price: 849,
    originalPrice: 1199,
    badge: "SALE",
    colors: [
      { name: "Greige", hex: "#B5A99A" },
      { name: "Charcoal", hex: "#3D3530" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Acid-washed 220gsm jersey with a minimal chest pocket. Relaxed unisex fit that layers effortlessly.",
    images: [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80",
    ],
    tags: ["washed", "pocket", "unisex"],
  },
  {
    id: 5,
    name: "Canyon Heavyweight Hoodie",
    category: "hoodies",
    price: 2999,
    originalPrice: 3799,
    badge: "BESTSELLER",
    colors: [
      { name: "Khaki", hex: "#A0856A" },
      { name: "Black Brown", hex: "#2A1F18" },
      { name: "Ivory", hex: "#E4D9CC" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "500gsm French terry. Boxy double-lined hood, kangaroo pocket, ribbed cuffs. An instant classic.",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80",
      "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=600&q=80",
    ],
    tags: ["heavyweight", "french terry", "boxy"],
  },
  {
    id: 6,
    name: "Dune Zip-Up Fleece",
    category: "hoodies",
    price: 2599,
    originalPrice: null,
    badge: "NEW",
    colors: [
      { name: "Beige", hex: "#C9B49A" },
      { name: "Cocoa", hex: "#57422F" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Micro-fleece lined zip-up with a standing collar and hidden side pockets. Warmth without the bulk.",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    ],
    tags: ["zip-up", "fleece", "minimal"],
  },
  {
    id: 7,
    name: "Moss Crop Sweatshirt",
    category: "hoodies",
    price: 1899,
    originalPrice: 2399,
    badge: "SALE",
    colors: [
      { name: "Sage Green", hex: "#7A8A6A" },
      { name: "Dark Grey", hex: "#3B3028" },
      { name: "White", hex: "#EDE8DF" },
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "Cropped crewneck in 320gsm loopback terry. Dropped shoulders, raw-edge hem, contrast embroidered logo.",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80",
    ],
    tags: ["crop", "crewneck", "embroidered"],
  },
  {
    id: 8,
    name: "Terrain Cargo Pants",
    category: "bottoms",
    price: 2799,
    originalPrice: 3499,
    badge: "BESTSELLER",
    colors: [
      { name: "Olive", hex: "#8B7D6B" },
      { name: "Deep Brown", hex: "#2E2416" },
      { name: "Light Grey", hex: "#CFC5B4" },
    ],
    sizes: ["28", "30", "32", "34", "36"],
    description:
      "6-pocket nylon-cotton blend cargo. Tapered leg with drawstring ankle. YKK zippers throughout.",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80",
    ],
    tags: ["cargo", "tapered", "utility"],
  },
  {
    id: 9,
    name: "Linen Blend Wide-Leg Pants",
    category: "bottoms",
    price: 2299,
    originalPrice: null,
    badge: "NEW",
    colors: [
      { name: "Buff", hex: "#D9CEBC" },
      { name: "Mocha", hex: "#6A5A48" },
    ],
    sizes: ["28", "30", "32", "34"],
    description:
      "55% linen, 45% cotton. Ultra-relaxed wide-leg silhouette with an elasticated back waist.",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4b4828?w=600&q=80",
    ],
    tags: ["linen", "wide-leg", "relaxed"],
  },
  {
    id: 10,
    name: "Volcanic Shorts",
    category: "bottoms",
    price: 1499,
    originalPrice: 1999,
    badge: "SALE",
    colors: [
      { name: "Chestnut", hex: "#5C4A3A" },
      { name: "Tan", hex: "#A89078" },
      { name: "Pearl", hex: "#F2EBE0" },
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "8-inch inseam shorts in heavyweight twill. Slash pockets, welt back pocket. Relaxed mid-rise fit.",
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=600&q=80",
      "https://images.unsplash.com/photo-1617952236317-0bd127407984?w=600&q=80",
    ],
    tags: ["shorts", "twill", "relaxed"],
  },
  {
    id: 11,
    name: "Nomad Field Jacket",
    category: "outerwear",
    price: 5999,
    originalPrice: 7499,
    badge: "BESTSELLER",
    colors: [
      { name: "Moss", hex: "#7A6A52" },
      { name: "Black", hex: "#1E1410" },
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Waxed cotton canvas with quilted lining. Multiple utility pockets, storm collar. Built to last decades.",
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&q=80",
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80",
    ],
    tags: ["canvas", "utility", "classic"],
  },
  {
    id: 12,
    name: "Sahara Overshirt",
    category: "outerwear",
    price: 3499,
    originalPrice: null,
    badge: "NEW",
    colors: [
      { name: "Desert", hex: "#C4A87A" },
      { name: "Walnut", hex: "#4A3520" },
      { name: "Bone", hex: "#EDE0CC" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Midweight brushed flannel overshirt. Chest pockets, cuffed sleeves. Wear open as a layer or buttoned.",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80",
    ],
    tags: ["flannel", "overshirt", "layering"],
  },
  {
    id: 13,
    name: "Woven Bucket Hat",
    category: "accessories",
    price: 899,
    originalPrice: 1199,
    badge: null,
    colors: [
      { name: "Beige", hex: "#C9B49A" },
      { name: "Copper", hex: "#5C4A3A" },
    ],
    sizes: ["One Size"],
    description:
      "100% cotton twill bucket hat with woven texture. Adjustable drawcord. UV protective fabric.",
    images: [
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=600&q=80",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&q=80",
    ],
    tags: ["hat", "bucket", "cotton"],
  },
  {
    id: 14,
    name: "Canvas Tote Bag",
    category: "accessories",
    price: 699,
    originalPrice: null,
    badge: "NEW",
    colors: [
      { name: "Almond", hex: "#E8DDD0" },
      { name: "Ebony", hex: "#3D2E22" },
    ],
    sizes: ["One Size"],
    description:
      "12oz natural canvas tote with reinforced handles and inner zip pocket. Screen-printed graphic.",
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&q=80",
    ],
    tags: ["tote", "canvas", "bag"],
  },
  {
    id: 15,
    name: "Leather Card Holder",
    category: "accessories",
    price: 1299,
    originalPrice: 1599,
    badge: null,
    colors: [
      { name: "Amber", hex: "#8B6F47" },
      { name: "Sable", hex: "#2A1F18" },
    ],
    sizes: ["One Size"],
    description:
      "Full-grain vegetable-tanned leather. 4 card slots + 1 bill pocket. Ages beautifully over time.",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    ],
    tags: ["leather", "wallet", "minimal"],
  },
  {
    id: 16,
    name: "Merino Knit Beanie",
    category: "accessories",
    price: 799,
    originalPrice: 999,
    badge: "SALE",
    colors: [
      { name: "Oat", hex: "#B5A285" },
      { name: "Sable", hex: "#3D3020" },
      { name: "Linen", hex: "#E0D8CC" },
    ],
    sizes: ["One Size"],
    description:
      "100% merino wool ribbed beanie. Naturally temperature-regulating and itch-free. Slim fold-up cuff.",
    images: [
      "https://images.unsplash.com/photo-1510598969022-c4c6c5d05769?w=600&q=80",
      "https://images.unsplash.com/photo-1487956382158-bb926046304a?w=600&q=80",
    ],
    tags: ["merino", "beanie", "winter"],
  },
];

export const getProductById = (id) => products.find((p) => p.id === Number(id));
export const getProductsByCategory = (cat) =>
  cat === "all" ? products : products.filter((p) => p.category === cat);
