require 'open-uri'

Review.destroy_all
CartItem.destroy_all
Product.destroy_all
Category.destroy_all
User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!("users")
ActiveRecord::Base.connection.reset_pk_sequence!("products")
ActiveRecord::Base.connection.reset_pk_sequence!("categories")
ActiveRecord::Base.connection.reset_pk_sequence!("cart_items")
ActiveRecord::Base.connection.reset_pk_sequence!("reviews")

u1 = User.create(
  email:'bobby@mars.mc', 
  full_name:"Roberta Draper", 
  password:"123456", 
  address_1:"14 Innis Deep", 
  address_2:"LondresNova, Mars MA432"
)
u2 = User.create(
  email:'amos@rocinante.roci',
  full_name:"Amos Burton", 
  password:"123456",
  address_1:"Dont Ask", 
  address_2:"Baltimore, Maryland 21201"
)
u3 = User.create(
  email:'prax@soyfarmers.gn', 
  full_name:"Praxidike Meng", 
  password:"123456", 
  address_1:"Soy Fields", 
  address_2:"Djuna, Ganymede GA12"
)
u4 = User.create(
  email:'president@transportunion.bt', 
  full_name:"Camina Drummer", 
  password:"123456", 
  address_1:"Apt 12, Corridor 1, Level 1", 
  address_2:"Taicho Station"
)

(5..20).each do |id|
  name = Faker::TvShows::TheExpanse.character
  User.create!(
    email: Faker::TvShows::TheExpanse.ship + id.to_s,
    full_name: name,
    password: "123456", 
    address_1: "",
    address_2: Faker::Games::Zelda.location
  )
end
  

c1 = Category.create(title:"Bikes", description:"From e-bikes to mountain bikes, and bikepacking to gravel grinding, co-opt members can save more getting geared up for any terrain.")
c2 = Category.create(title:"Backpacks", description:"Every epic adventure starts with packing and planning. We've got everything you need to make that a joy and a breeze.")
c3 = Category.create(title:"Boots", description:"From overlanding to day camping, the co-op can get you the right gear to get you out there in no time.")
c4 = Category.create(title:"Tents", description:"From overlanding to day camping, the co-op can get you the right gear to get you out there in no time.")
c1.photo.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/cat-spash/two-bikes.jpg'), filename:'two-bikes.jpg')
c2.photo.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/cat-spash/boat-bag.jpg'), filename:'boat-bag.jpg')
c3.photo.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/cat-spash/sleep-roraima.jpg'), filename:'tent.JPG')
c4.photo.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/cat-spash/tent.JPG'), filename:'sleep-roraima.jpg')

bikes_url = "https://my-co-opt-seed.s3.us-west-1.amazonaws.com/bikes/"
tents_url = "https://my-co-opt-seed.s3.us-west-1.amazonaws.com/tents/"
backpacks_url = "https://my-co-opt-seed.s3.us-west-1.amazonaws.com/backpacks/"
boots_url = "https://my-co-opt-seed.s3.us-west-1.amazonaws.com/boots/"
def make_photo_url(url_path, filename)
  {io: open(url_path+filename), filename:filename}
end

p1 = Product.create(
  name:'Devote Advanced 2',
  category_id: c1.id,
  description: "Travel by two wheels into new terrain to satiate your true sense of adventure, plus bring all your gear for some prepared-for-anything peace of mind. Available in lightweight Advanced-Grade Composite frame and fork to meet the needs of performance and endurance riders alike. Because control is the name of the game, our OverDrive steerer creates sound and precise steering, while the D-Fuse handlebar smooths out the ride, stocked with Liv All-Condition handlebar tape to keep you connected. Select models come equipped with vibration absorbing D-Fuse seatpost, or dropper seatpost. And finally, a wheelset specifically built for all-weather performance and unpredictable terrain makes the steadfast Devote your top pick for finishing any tough ride or race.",
  price:2700.00,
  colors: ["Rosewood", "Mint"],
  sizes: [ 'M', 'L'],
  brand: 'Liv', 
  color_families: ['Green', 'Red']
)
p1.photos.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/bikes/da2-1.jpeg'), filename:'da2-1.jpeg')
p1.photos.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/bikes/da2-2.webp'), filename:'da2-2.webp')

p2 = Product.create(
  name:'Devote Advanced 1',
  category_id: c1.id,
  description: "Travel by two wheels into new terrain to satiate your true sense of adventure, plus bring all your gear for some prepared-for-anything peace of mind. Available in lightweight Advanced-Grade Composite frame and fork to meet the needs of performance and endurance riders alike. Because control is the name of the game, our OverDrive steerer creates sound and precise steering, while the D-Fuse handlebar smooths out the ride, stocked with Liv All-Condition handlebar tape to keep you connected. Select models come equipped with vibration absorbing D-Fuse seatpost, or dropper seatpost. And finally, a wheelset specifically built for all-weather performance and unpredictable terrain makes the steadfast Devote your top pick for finishing any tough ride or race.",
  price:3550.00,
  colors: ["DarkGreen", "OceanBlue"],
  sizes: ['XS', 'S'],
  brand: 'Liv', 
  color_families: ['Green', 'Blue']
)
p2.photos.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/bikes/da1-1.jpeg'), filename:'da1-1.jpeg')
p2.photos.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/bikes/da1-2.jpeg'), filename:'da1-2.jpeg')


p3 = Product.create(
  name:'Devote Advanced Pro',
  category_id: c1.id,
  description: "Travel by two wheels into new terrain to satiate your true sense of adventure, plus bring all your gear for some prepared-for-anything peace of mind. Available in lightweight Advanced-Grade Composite frame and fork to meet the needs of performance and endurance riders alike. Because control is the name of the game, our OverDrive steerer creates sound and precise steering, while the D-Fuse handlebar smooths out the ride, stocked with Liv All-Condition handlebar tape to keep you connected. Select models come equipped with vibration absorbing D-Fuse seatpost, or dropper seatpost. And finally, a wheelset specifically built for all-weather performance and unpredictable terrain makes the steadfast Devote your top pick for finishing any tough ride or race.",
  price:6400.00,
  colors: ["Eggplant", "Mushroom"],
  sizes: [ 'M', 'L'],
  brand: 'Liv',
  color_families: ['Brown', 'Purple']
)

p3.photos.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/bikes/dap-2.jpeg'), filename:'dap-2.jpeg')
p3.photos.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/bikes/dap-1.jpeg'), filename:'dap-1.jpeg')

p4 = Product.create(
  name:'Tempt 0',
  category_id: c1.id,
  description: "With a lightweight ALUXX-Grade aluminum frame designed specifically for women, Tempt can guide you along dirt terrain with speed, efficiency and control. A front suspension fork and powerful disc brakes offer added confidence and control. This hardtail has a low standover height to give you confidence maneuvering around dirt trails and is offered in 27.5 or 29-inch wheels for optimum fit and efficiency. Perfect for a functional around-town ride, to try as your first off-road racing bike, or for venturing out onto the trails for the first time, allow Tempt to lead you to new adventures.",
  price:1380.00,
  colors: ["OceanStorm"],
  sizes: ['XS'],
  brand: 'Liv',
  color_families: ['Blue']
)

p4.photos.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/bikes/t0-1.jpeg'), filename:'t0-2.jpeg')
p4.photos.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/bikes/t0-2.jpeg'), filename:'t0-1.jpeg')

p5 = Product.create(
  name:'Tempt 1',
  category_id: c1.id,
  description: "With a lightweight ALUXX-Grade aluminum frame designed specifically for women, Tempt can guide you along dirt terrain with speed, efficiency and control. A front suspension fork and powerful disc brakes offer added confidence and control. This hardtail has a low standover height to give you confidence maneuvering around dirt trails and is offered in 27.5 or 29-inch wheels for optimum fit and efficiency. Perfect for a functional around-town ride, to try as your first off-road racing bike, or for venturing out onto the trails for the first time, allow Tempt to lead you to new adventures.",
  price:980,
  colors: ["Rosewood", "DarkBlue"],
  sizes: ['XS', 'S', 'M', 'L', "XL"],
  brand: 'Liv', 
  color_families: ['Blue', 'Red']
)

p5.photos.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/bikes/t1-1.jpeg'), filename:'t1-1.jpeg')
p5.photos.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/bikes/t1-2.jpeg'), filename:'t1-2.jpeg')

p6 = Product.create(
  name:'Tempt 2',
  category_id: c1.id,
  description: "With a lightweight ALUXX-Grade aluminum frame designed specifically for women, Tempt can guide you along dirt terrain with speed, efficiency and control. A front suspension fork and powerful disc brakes offer added confidence and control. This hardtail has a low standover height to give you confidence maneuvering around dirt trails and is offered in 27.5 or 29-inch wheels for optimum fit and efficiency. Perfect for a functional around-town ride, to try as your first off-road racing bike, or for venturing out onto the trails for the first time, allow Tempt to lead you to new adventures.",
  price:735,
  colors: ["Eclipse", "DesertSage"],
  sizes: ['XS', 'M'],
  brand: 'Liv', 
  color_families: [ 'Green', 'Blue']
)
p6.photos.attach(make_photo_url(bikes_url,"t2-1.jpeg"))
p6.photos.attach(make_photo_url(bikes_url,"t2-2.jpeg"))

p7= Product.create(
  name:'Pique Advanced Pro 29 2',
  category_id: c1.id,
  description: "ATTACK THE COURSE WITH SPEED AND EFFICIENCY ON THE PIQUE ADVANCED PRO 29. THE STIFF, LIGHT, FULL-SUSPENSION XC BIKE IS READY TO SET PRS AND SNAG PODIUM STEPS.",
  price:4500,
  colors: ["DarkBlue", "FanaticTeal"],
  sizes: ['XS', 'S', 'M'],
  brand: 'Liv', 
  color_families: ['Blue']
)
p7.photos.attach(make_photo_url(bikes_url,"ppro2-1.jpg"))

p8= Product.create(
  name:'Pique Advanced Pro 29 1',
  category_id: c1.id,
  description: "ATTACK THE COURSE WITH SPEED AND EFFICIENCY ON THE PIQUE ADVANCED PRO 29. THE STIFF, LIGHT, FULL-SUSPENSION XC BIKE IS READY TO SET PRS AND SNAG PODIUM STEPS.",
  price:6350,
  colors: ["DarkBlue", "Carbon"],
  sizes: [ 'M'],
  brand: 'Liv', 
  color_families: ['Grey', 'Blue']
)
p8.photos.attach(make_photo_url(bikes_url,"ppro1-1.jpg"))
p8.photos.attach(make_photo_url(bikes_url,"ppro1-2.jpg"))

c1 = CartItem.create!(
  quantity: 1,
  product_id: 1,
  shopper_id: 1,
  size: 'M',
  color: 'DarkBlue',
  delivery_type: 'delivery'
)

c1 = CartItem.create!(
  quantity: 1,
  product_id: 4,
  shopper_id: 1,
  size: 'L',
  color: 'Rosewood',
  delivery_type: 'delivery'
)

r1 = Review.create(
  reviewer_id:1, 
  product_id:1, 
  title:"It takes me places", 
  body:"would buy again", 
  rating:"5"
)
r2 = Review.create(reviewer_id:2, product_id:1, title:"best form of travel for the appocolapys", body:"Me and Peaches both had one", rating:"5")
r3 = Review.create(reviewer_id:3, product_id:1, title:"useless in space", body:"Was given it as a joke, haha guys. do not buy, they do not take returns. 52% satisfaction guarantee seems like a stretch", rating:"1")


p9 = Product.create( {
  brand: 'Salsa',
  name: 'Rangefinder Advent X 29 Bike',
  category_id: 1,
  description: 'Stable and reassuring, the Salsa Rangefinder Advent X 29 bike is a trusty trail companion for all things dirt with its large 29 in. wheels, wide and grippy tires, and smooth Advent X drivetrain.',
  price: 1099,
  colors: [ 'Black' ],
  sizes: [ 'XS', 'M', 'XL' ],
  weight: '',
  color_families: [ 'Black' ]
} )
p9.photos.attach(make_photo_url(bikes_url,"psalsa0-1.jpeg"))
p9.photos.attach(make_photo_url(bikes_url,"psalsa0-2.jpeg"))
p10 = Product.create( {
  brand: 'Salsa',
  name: 'Rangefinder Deore 12-speed 29 Bike',
  category_id: 1,
  description: "Build your confidence and become an expert on your local trail systems with the Salsa Rangefinder Deore 12-speed 29 bike. This hardtail's ready for singletrack, doubletrack and even bikepacking trips.",
  price: 1699,
  colors: [ 'Tan' ],
  sizes: [ 'XS', 'S', 'L' ],
  weight: '',
  color_families: [ 'Khaki' ]
} )
p10.photos.attach(make_photo_url(bikes_url,"psalsa1-1.jpeg"))
p10.photos.attach(make_photo_url(bikes_url,"psalsa1-2.jpeg"))
p11 = Product.create( {
  brand: 'Salsa',
  name: 'Rangefinder Advent X 27.5+ Bike',
  category_id: 1,
  description: "Looking to discover your local trail system? The Salsa Rangefinder Advent X 27.5+ bike is a confidence-building hardtail spec'd to take on singletrack, doubletrack and bikepacking adventures.",
  price: 1099,
  colors: [ 'Silver' ],
  sizes: [ 'XS' ],
  weight: '',
  color_families: [ 'Gray' ]
} )
p11.photos.attach(make_photo_url(bikes_url,"psalsa2-1.jpeg"))
p11.photos.attach(make_photo_url(bikes_url,"psalsa2-2.jpeg"))
p12 = Product.create( {
  brand: 'Salsa',
  name: 'Journeyer GRX 600 700c Bike',
  category_id: 1,
  description: 'The perfect introduction to all-road riding, the Salsa Journeyer GRX 600 bike with 700c wheels provides comfort and confidence on any road surface for long and short rides alike.',
  price: 2399,
  colors: [ 'White' ],
  sizes: [ 'S' ],
  weight: '',
  color_families: [ 'White' ]
} )
p12.photos.attach(make_photo_url(bikes_url,"psalsa3-1.jpeg"))
p12.photos.attach(make_photo_url(bikes_url,"psalsa3-2.jpeg"))
p13 = Product.create( {
  brand: 'Salsa',
  name: 'Journeyer GRX 600 650b Bike',
  category_id: 1,
  description: 'Your gateway to all-road adventures, the Salsa Journeyer GRX 600 650b bike is built for comfort and confidence on any road surface. Plus, its versatile cargo carrying options extend your riding range.',
  price: 2399,
  colors: [ 'Lime' ],
  sizes: [ 'XL' ],
  weight: '',
  color_families: [ 'Green' ]
} )
p13.photos.attach(make_photo_url(bikes_url,"psalsa4-1.jpeg"))
p13.photos.attach(make_photo_url(bikes_url,"psalsa4-2.jpeg"))
p14 = Product.create( {
  brand: 'Salsa',
  name: 'Rangefinder Deore 11-Speed 27.5+ Bike',
  category_id: 1,
  description: 'Get out and explore your local trail system with the Salsa Rangefinder Deore 11-speed 27.5+ bike. This confidence-building hardtail opens up singletrack, doubletrack and bikepacking adventures.',
  price: 1499,
  colors: [ 'DarkGray' ],
  sizes: [ 'XS', 'S', 'XL' ],
  weight: '',
  color_families: [ 'Gray' ]
} )
p14.photos.attach(make_photo_url(bikes_url,"psalsa5-1.jpeg"))
p14.photos.attach(make_photo_url(bikes_url,"psalsa5-2.jpeg"))
p15 = Product.create( {
  brand: 'Salsa',
  name: 'Journeyer Sora 700c Bike',
  category_id: 1,
  description: 'Built for comfort and confidence on any road surface and equipped with versatile cargo-carrying options, the Salsa Journeyer Sora 700c bike is your gateway to all-road adventures.',
  price: 1499,
  colors: [ 'Black' ],
  sizes: [ 'XS', 'M' ],
  weight: '',
  color_families: [ 'Black' ]
} )
p15.photos.attach(make_photo_url(bikes_url,"psalsa6-1.jpeg"))
p15.photos.attach(make_photo_url(bikes_url,"psalsa6-2.jpeg"))
p16 = Product.create( {
  brand: 'Salsa',
  name: 'Journeyer Apex 1 700c Bike',
  category_id: 1,
  description: 'Built for comfort and confidence on any road surface and equipped with versatile cargo-carrying options, the Salsa Journeyer Apex 1 700c bike is your gateway to all-road adventures.',
  price: 1799,
  colors: [ 'RedOrange' ],
  sizes: [ 'XS', 'S', 'L', 'XL' ],
  weight: '',
  color_families: [ 'Red' ]
} )
p16.photos.attach(make_photo_url(bikes_url,"psalsa7-1.jpeg"))
p16.photos.attach(make_photo_url(bikes_url,"psalsa7-2.jpeg"))
p17 = Product.create( {
  brand: 'Salsa',
  name: 'Rangefinder Deore 12-Speed 27.5+ Bike',
  category_id: 1,
  description: 'Ready to start discovering your local trail systems? The Salsa Rangefinder is a confidence-building hardtail, designed to open up singletrack, doubletrack and even bikepacking adventures.',
  price: 1699,
  colors: [ 'DarkRed' ],
  sizes: [ 'S', 'M', 'XL' ],
  weight: '',
  color_families: [ 'Red' ]
} )
p17.photos.attach(make_photo_url(bikes_url,"psalsa8-1.jpeg"))
p17.photos.attach(make_photo_url(bikes_url,"psalsa8-2.jpeg"))


p18 = Product.create( {
  brand: 'Big Agnes',
  name: 'Blacktail Hotel 2 Bikepack Tent',
  category_id: 4,
  description: 'Designed to easily fit on your handlebar or in your panniers, the Big Agnes Blacktail Hotel 
2 Bikepack tent sleeps 2—or 1 with extra gear—and is ideal for 2-wheeled adventures on and off road.',      
  price: 349.95,
  colors: [ 'GreenGray' ],
  sizes: [ 'One Size' ],
  weight: '',
  color_families: [ 'Gray' ]
} )
p18.photos.attach(make_photo_url(tents_url,"ptents0-1.jpg"))
p18.photos.attach(make_photo_url(tents_url,"ptents0-2.jpg"))
p19 = Product.create( {
  brand: 'Big Agnes',
  name: 'Bunk House 4 Tent',
  category_id: 4,
  description: "When unexpected wind, rain or a freak July snowstorm rolls in, and the trip continues regardless, you'll be glad you pitched the burly Big Agnes Bunk House 4 double-wall tent.",
  price: 499.95,
  colors: [ 'OrangeTaupe' ],
  sizes: [ '4 P' ],
  weight: '',
  color_families: [ 'Orange' ]
} )
p19.photos.attach(make_photo_url(tents_url,"ptents1-1.jpg"))
p19.photos.attach(make_photo_url(tents_url,"ptents1-2.jpg"))
p20 = Product.create( {
  brand: 'Big Agnes',
  name: 'Copper Spur HV UL1 Bikepack Tent',
  category_id: 4,
  description: 'Built for 2-wheeled adventures on- and off-road, the redesigned Big Agnes Copper Spur HV UL1 Bikepack tent boasts a roomier interior and lighter, stronger fabrication than before.',
  price: 499.95,
  colors: [ 'GrayOrange' ],
  sizes: [ '1 P' ],
  weight: '',
  color_families: [ 'Gray' ]
} )
p20.photos.attach(make_photo_url(tents_url,"ptents2-1.jpg"))
p20.photos.attach(make_photo_url(tents_url,"ptents2-2.jpg"))
p21 = Product.create( {
  brand: 'Big Agnes',
  name: 'Copper Spur HV UL2 Bikepack Tent',
  category_id: 4,
  description: 'Create a home away from home on 2-wheeled adventures with the redesigned Big Agnes Copper Spur HV UL2 Bikepack tent. It boasts a roomier interior and a lighter, stronger fabrication than before.',    
  price: 549.95,
  colors: [ 'GrayOrange' ],
  sizes: [ '2 P' ],
  weight: '',
  color_families: [ 'Gray' ]
} )
p21.photos.attach(make_photo_url(tents_url,"ptents3-1.jpg"))
p21.photos.attach(make_photo_url(tents_url,"ptents3-2.jpg"))
p22 = Product.create( {
  brand: 'Big Agnes',
  name: 'Spicer Peak 4 Tent',
  category_id: 4,
  description: 'Car camping, basecamp at the trailhead, long weekends on the river—when comfort and room to 
spread out are your priorities, the 4-person Big Agnes Spicer Peak 4 tent has you and your crew covered.',  
  price: 449.95,
  colors: [ 'Olive' ],
  sizes: [ '4 P' ],
  weight: '',
  color_families: [ 'Khaki' ]
} )
p22.photos.attach(make_photo_url(tents_url,"ptents4-1.jpg"))
p22.photos.attach(make_photo_url(tents_url,"ptents4-2.jpg"))
p23 = Product.create( {
  brand: 'Sea to Summit',
  name: 'Alto TR 1 Tent',
  category_id: 4,
  description: 'Designed for weight-conscious solo backpackers who still want a high degree of livability, the Sea to Summit Alto TR 1 tent has nearly vertical walls and a minimum trail weight of only 2 lbs. 1 oz.', 
  price: 449,
  colors: [ 'Gray' ],
  sizes: [ '1 P' ],
  weight: '',
  color_families: [ 'Gray' ]
} )
p23.photos.attach(make_photo_url(tents_url,"ptents5-1.jpg"))
p23.photos.attach(make_photo_url(tents_url,"ptents5-2.jpg"))
p24 = Product.create( {
  brand: 'Sea to Summit',
  name: 'Alto TR 2 Plus Tent',
  category_id: 4,
  description: "Don't let shoulder-season weather stop you from spending a night outside. With a full-fabric inner tent, the versatile Sea to Summit Alto TR2 Plus tent is made to handle colder, wetter conditions.",  
  price: 539,
  colors: [ 'Gray' ],
  sizes: [ '2 P' ],
  weight: '',
  color_families: [ 'Gray' ]
} )
p24.photos.attach(make_photo_url(tents_url,"ptents6-1.jpg"))
p24.photos.attach(make_photo_url(tents_url,"ptents6-2.jpg"))

p25 = Product.create( {
  brand: 'Sea to Summit',
  name: 'Escapist Tarp Shelter',
  category_id: 4,
  description: 'Escape to the wilderness with the versatile, compact and ultralight Sea to Summit Escapist Tarp Shelter. This 3-season shelter is perfect for 2 minimalist adventurers.',
  price: 219,
  colors: [ 'Lime' ],
  sizes: [ 'One Size' ],
  weight: '',
  color_families: [ 'Green' ]
} )
p25.photos.attach(make_photo_url(tents_url,"ptents8-1.jpg"))
p25.photos.attach(make_photo_url(tents_url,"ptents8-2.jpg"))
p26 = Product.create( {
  brand: 'Sea to Summit',
  name: 'Mosquito Pyramid Insect Shield Net - Double',
  category_id: 4,
  description: 'Ideal for trekking, traveling and wilderness camping, the Sea To Summit Mosquito Pyramid double-size net with Insect Shield® provides additional protection against mosquitoes and other bugs.',        
  price: 54.95,
  colors: [ 'Black' ],
  sizes: [ '1 P', '2 P' ],
  weight: '',
  color_families: [ 'Black' ]
} )
p26.photos.attach(make_photo_url(tents_url,"ptents9-1.jpg"))
p26.photos.attach(make_photo_url(tents_url,"ptents9-2.jpg"))

p27 = Product.create( {
  brand: 'Sea to Summit',
  name: 'Telos TR2 Tent',
  category_id: 4,
  description: 'More than just a spacious, highly ventilated, lightweight tent, the Sea to Summit Telos TR2 
tent can also transform into into a semi-open communal shelter with the help of your trekking poles.',      
  price: 559,
  colors: [ 'Gray' ],
  sizes: [ '2 P' ],
  weight: '',
  color_families: [ 'Gray' ]
} )
p27.photos.attach(make_photo_url(tents_url,"ptents12-1.jpg"))
p27.photos.attach(make_photo_url(tents_url,"ptents12-2.jpg"))


p28 = Product.create( {
  brand: 'Vasque',
  name: "St. Elias GTX Hiking Boots - Women's",
  category_id: 3,
  description: "Push the boundaries of hiking performance with long-distance durability and all-day comfort thanks to the rugged, protective materials of the women's Vasque St. Elias GTX hiking boots.",
  price: 220,
  colors: [ 'Cognac' ],
  sizes: [ 8, 13, 12, 9, 10, 6 ],
  weight: '',
  color_families: [ 'Brown' ]
} )
p28.photos.attach(make_photo_url(boots_url,"pboots0-1.jpg"))
p28.photos.attach(make_photo_url(boots_url,"pboots0-2.jpg"))
p29 = Product.create( {
  brand: 'Lowa',
  name: "Renegade GTX Mid Hiking Boots - Women's",
  category_id: 3,
  description: "Winner of the 2014 OudoorGearLab Editors' Choice award, these women's hiking boots provide waterproof protection and excellent support at a low weight for weekend backpacking trips or long day hikes.",
  price: 245,
  colors: [
    'GraphiteJade',
    'Stone',
    'BlackIceblue',
    'Cayenne',
    'EspressoBerry',
    'GraphiteRose',
    'ReedHoney',
    'DeepBlack'
  ],
  sizes: [ 7, 12, 13, 9 ],
  weight: '',
  color_families: [
    'Gray',  'Khaki',
    'Black', 'Red',
    'Brown', 'Gray',
    'Green', 'Black'
  ]
} )
p29.photos.attach(make_photo_url(boots_url,"pboots1-1.jpg"))
p29.photos.attach(make_photo_url(boots_url,"pboots1-2.jpg"))
p30 = Product.create( {
  brand: 'Lowa',
  name: "Renegade GTX Mid Hiking Boots - Men's",
  category_id: 3,
  description: "With abundant comfort and support at a low weight, the men's waterproof Lowa Renegade GTX Mid hiking boots are well-suited for long day hikes and weekend backpacking.",
  price: 245,
  colors: [
    'Espresso',
    'DeepBlack',
    'Sepia',
    'DarkGrey',
    'G',
    'Basil',
    'B'
  ],
  sizes: [ 7, 12 ],
  weight: '',
  color_families: [
    'Brown', 'Black',
    'Brown', 'Gray',
    'Gray',  'Green',
    'Gray'
  ]
} )
p30.photos.attach(make_photo_url(boots_url,"pboots2-1.jpg"))
p30.photos.attach(make_photo_url(boots_url,"pboots2-2.jpg"))
p31 = Product.create( {
  brand: 'Lowa',
  name: "Camino GTX Hiking Boots - Men's",
  category_id: 3,
  description: "Built for trekking and shorter backpacking trips, the Lowa Camino GTX hiking boots for men offer a stable, supportive design and comfort features that'll keep you logging the miles.",
  price: 325,
  colors: [ 'AnthraciteKiwi', 'DarkGreyBlack' ],
  sizes: [ 13, 12, 6, 8, 7, 11 ],
  weight: '',
  color_families: [ 'Gray', 'Gray' ]
} )
p31.photos.attach(make_photo_url(boots_url,"pboots3-1.jpg"))
p31.photos.attach(make_photo_url(boots_url,"pboots3-2.jpg"))
p32 = Product.create( {
  brand: 'Asolo',
  name: "TPS 520 GV Evo Hiking Boots - Men's",
  category_id: 3,
  description: 'Updated with improved outsoles featuring deeper channels, the heavy-duty, waterproof breathable Asolo TPS 520 GV Evo hiking boots deliver superior traction and stability over rugged terrain.',
  price: 350,
  colors: [ 'Chestnut' ],
  sizes: [
    6, 11, 10, 13,
    7,  9,  8
  ],
  weight: '',
  color_families: [ 'Brown' ]
} )
p32.photos.attach(make_photo_url(boots_url,"pboots4-1.jpg"))
p32.photos.attach(make_photo_url(boots_url,"pboots4-2.jpg"))
p33 = Product.create( {
  brand: 'Asolo',
  name: "Fugitive GTX Hiking Boots - Men's",
  category_id: 3,
  description: 'Responsive and snappy, the waterproof and breathable Asolo Fugitive GTX Hiking Boots are the right choice for trekkers who demand light weight and comfort.', 
  price: 285,
  colors: [ 'LightblackGraphite', 'TruffleStone', 'WoolBlack' ],
  sizes: [ 11, 7 ],
  weight: '',
  color_families: [ 'Black', 'Gray', 'Khaki' ]
} )
p33.photos.attach(make_photo_url(boots_url,"pboots5-1.jpg"))
p33.photos.attach(make_photo_url(boots_url,"pboots5-2.jpg"))

p28 = Product.create( {
  brand: 'Vasque',
  name: "St. Elias GTX Hiking Boots - Women's",
  category_id: 3,
  description: "Push the boundaries of hiking performance with long-distance durability and all-day comfort thanks to the rugged, protective materials of the women's Vasque St. Elias GTX hiking boots.",
  price: 220,
  colors: [ 'Cognac' ],
  sizes: [ 6, 9, 10, 11, 13 ],
  weight: '',
  color_families: [ 'Brown' ]
} )
p28.photos.attach(make_photo_url(boots_url,"pboots0-1.jpg"))
p28.photos.attach(make_photo_url(boots_url,"pboots0-2.jpg"))
p29 = Product.create( {
  brand: 'Lowa',
  name: "Renegade GTX Mid Hiking Boots - Women's",
  category_id: 3,
  description: "Winner of the 2014 OudoorGearLab Editors' Choice award, these women's hiking boots provide waterproof protection and excellent support at a low weight for weekend backpacking trips or long day hikes.",
  price: 245,
  colors: [
    'GraphiteJade',
    'Stone',
    'BlackIceblue',
    'Cayenne',
    'EspressoBerry',
    'GraphiteRose',
    'ReedHoney',
    'DeepBlack'
  ],
  sizes: [ 6, 10, 12 ],
  weight: '',
  color_families: [
    'Gray',  'Khaki',
    'Black', 'Red',
    'Brown', 'Gray',
    'Green', 'Black'
  ]
} )
p29.photos.attach(make_photo_url(boots_url,"pboots1-1.jpg"))
p29.photos.attach(make_photo_url(boots_url,"pboots1-2.jpg"))
p30 = Product.create( {
  brand: 'Lowa',
  name: "Renegade GTX Mid Hiking Boots - Men's",
  category_id: 3,
  description: "With abundant comfort and support at a low weight, the men's waterproof Lowa Renegade GTX Mid hiking boots are well-suited for long day hikes and weekend backpacking.",
  price: 245,
  colors: [
    'Espresso',
    'DeepBlack',
    'Sepia',
    'DarkGrey',
    'DarkGrayNavy',
    'Basil',
    'AnthraciteSteelBlue'
  ],
  sizes: [],
  weight: '',
  color_families: [
    'Brown', 'Black',
    'Brown', 'Gray',
    'Gray',  'Green',
    'Gray'
  ]
} )
p30.photos.attach(make_photo_url(boots_url,"pboots2-1.jpg"))
p30.photos.attach(make_photo_url(boots_url,"pboots2-2.jpg"))
p31 = Product.create( {
  brand: 'Lowa',
  name: "Camino GTX Hiking Boots - Men's",
  category_id: 3,
  description: "Built for trekking and shorter backpacking trips, the Lowa Camino GTX hiking boots for men offer a stable, supportive design and comfort features that'll keep you logging the miles.",
  price: 325,
  colors: [ 'AnthraciteKiwi', 'DarkGreyBlack' ],
  sizes: [ 6 ],
  weight: '',
  color_families: [ 'Gray', 'Gray' ]
} )
p31.photos.attach(make_photo_url(boots_url,"pboots3-1.jpg"))
p31.photos.attach(make_photo_url(boots_url,"pboots3-2.jpg"))
p32 = Product.create( {
  brand: 'Asolo',
  name: "TPS 520 GV Evo Hiking Boots - Men's",
  category_id: 3,
  description: 'Updated with improved outsoles featuring deeper channels, the heavy-duty, waterproof breathable Asolo TPS 520 GV Evo hiking boots deliver superior traction and stability over rugged terrain.',
  price: 350,
  colors: [ 'Chestnut' ],
  sizes: [ 6, 7, 8, 9, 10, 12 ],
  weight: '',
  color_families: [ 'Brown' ]
} )
p32.photos.attach(make_photo_url(boots_url,"pboots4-1.jpg"))
p32.photos.attach(make_photo_url(boots_url,"pboots4-2.jpg"))
p33 = Product.create( {
  brand: 'Asolo',
  name: "Fugitive GTX Hiking Boots - Men's",
  category_id: 3,
  description: 'Responsive and snappy, the waterproof and breathable Asolo Fugitive GTX Hiking Boots are the right choice for trekkers who demand light weight and comfort.', 
  price: 285,
  colors: [ 'LightBlackGraphite', 'TruffleStone', 'WoolBlack' ],
  sizes: [
     7,  8,  9, 10,
    11, 12, 13
  ],
  weight: '',
  color_families: [ 'Black', 'Gray', 'Khaki' ]
} )
p33.photos.attach(make_photo_url(boots_url,"pboots5-1.jpg"))
p33.photos.attach(make_photo_url(boots_url,"pboots5-2.jpg"))


p34 = Product.create( {
  brand: 'Gregory',
  name: "Zulu 30 Pack - Men's",
  category_id: 2,
  description: "Spend some quality time on the trails year-round with the men's Gregory Zulu 30 pack. Its FreeFloat suspension offers breathability to keep you cool in summer heat and avoid clamminess in the winter.",
  price: 159.95,
  colors: [ 'FieryRed' ],
  sizes: [ '30 L' ],
  weight: '',
  color_families: [ 'Red' ]
} )
p34.photos.attach(make_photo_url(backpacks_url,"pbackpacks0-1.jpg"))
p34.photos.attach(make_photo_url(backpacks_url,"pbackpacks0-2.jpg"))
p35 = Product.create( {
  brand: 'Gregory',
  name: "Swift 22 H2O Hydration Pack - Women's",
  category_id: 2,
  description: "We don't know about you...but we're feeling the Swift 22. This women's Gregory hydration pack carries your stuff and offers convenient, intuitive access to your water while you're on the trail.",     
  price: 119.95,
  colors: [ 'AmethystPurple' ],
  sizes: [ '22 L' ],
  weight: '',
  color_families: [ 'Purple' ]
} )
p35.photos.attach(make_photo_url(backpacks_url,"pbackpacks1-1.jpg"))
p35.photos.attach(make_photo_url(backpacks_url,"pbackpacks1-2.jpg"))
p36 = Product.create( {
  brand: 'Gregory',
  name: 'Nano 22 H2O Hydration Pack',
  category_id: 2,
  description: 'Ideal for quick-strike missions to catch the sunset or a weekend at your favorite mountain music fest, the Gregory Nano 22 H2O hydration pack hauls your gear for the day plus 3 liters of water.',     
  price: 89.95,
  colors: [
    'MineralYellow',
    'BrickRed',
    'IronBlue',
    'CarbonBlack',
    'CalypsoTeal',
    'SparkOrange'
  ],
  sizes: [ '22 L' ],
  weight: '',
  color_families: [ 'Yellow', 'Red', 'Blue', 'Black', 'Blue', 'Orange' ]
} )
p36.photos.attach(make_photo_url(backpacks_url,"pbackpacks2-1.jpg"))
p36.photos.attach(make_photo_url(backpacks_url,"pbackpacks2-2.jpg"))
p37 = Product.create( {
  brand: 'Gregory',
  name: "Miwok 24 Pack - Men's",
  category_id: 2,
  description: "Designed for active trail pursuits but capable of much more, the men's Gregory Miwok 24 pack combines flexible BioSync ventilated suspension with the volume and features you want in a daypack.",      
  price: 129.95,
  colors: [ 'FlameBlack' ],
  sizes: [ '24 L' ],
  weight: '',
  color_families: [ 'Black' ]
} )
p37.photos.attach(make_photo_url(backpacks_url,"pbackpacks3-1.jpg"))
p37.photos.attach(make_photo_url(backpacks_url,"pbackpacks3-2.jpg"))
p38 = Product.create( {
  brand: 'Gregory',
  name: "Jade 38 Pack - Women's",
  category_id: 2,
  description: "Ready for an overnighter or a warm-weather long weekend, the women's Gregory Jade 38 pack is designed for adventures with elevation changes and rough terrain, no matter the mileage.",
  price: 189.95,
  colors: [ 'EtherealGrey', 'MayanTeal' ],
  sizes: [ '38 L' ],
  weight: '',
  color_families: [ 'Gray', 'Green' ]
} )
p38.photos.attach(make_photo_url(backpacks_url,"pbackpacks4-1.jpg"))
p38.photos.attach(make_photo_url(backpacks_url,"pbackpacks4-2.jpg"))
p39 = Product.create( {
  brand: 'Gregory',
  name: "Jade 28 Pack - Women's",
  category_id: 2,
  description: "Get trail-ready breathability and a fine-tuned fit with the women's Gregory Jade 28 pack. Its open-air ventilation keeps you cool in the heat and avoids clamminess in the cold for year-round comfort.",
  price: 159.95,
  colors: [ 'EtherealGrey', 'MayanTeal' ],
  sizes: [ '28 L' ],
  weight: '',
  color_families: [ 'Gray', 'Green' ]
} )
p39.photos.attach(make_photo_url(backpacks_url,"pbackpacks5-1.jpg"))
p39.photos.attach(make_photo_url(backpacks_url,"pbackpacks5-2.jpg"))
p40 = Product.create( {
  brand: 'Gregory',
  name: "Inertia 24 H2O Hydration Pack - Men's",
  category_id: 2,
  description: "It feels like a perfect night...to plan your next trek. This men's Gregory Inertia 24 hydration pack carries your stuff and offers convenient, intuitive access to your water while you're on the trail.",
  price: 119.95,
  colors: [ 'ObsidianBlack', 'BrickRed' ],
  sizes: [ '24 L' ],
  weight: '',
  color_families: [ 'Black', 'Red' ]
} )
p40.photos.attach(make_photo_url(backpacks_url,"pbackpacks6-1.jpg"))
p40.photos.attach(make_photo_url(backpacks_url,"pbackpacks6-2.jpg"))
p41 = Product.create( {
  brand: 'Gregory',
  name: "Citro 30 H2O Hydration Pack - Men's",
  category_id: 2,
  description: "This pack hauls gear, food and water with ample room left for layering for changing conditions. Tackle the trails and stay hydrated on the move with the men's Gregory Citro 30 H2O hydration pack.",   
  price: 159.95,
  colors: [ 'TwilightBlue', 'SparkOrange' ],
  sizes: [ '30 L' ],
  weight: '',
  color_families: [ 'Blue', 'Orange' ]
} )
p41.photos.attach(make_photo_url(backpacks_url,"pbackpacks7-1.jpg"))
p41.photos.attach(make_photo_url(backpacks_url,"pbackpacks7-2.jpg"))
p42 = Product.create( {
  brand: "Arc'teryx",
  name: "Aerios 30 Pack - Women's",
  category_id: 2,
  description: "Don't want to head home just yet? Sized just right for a bit of spontaneity, the the women's Arc'teryx Aerios 30 pack is a trusty companion for extended day trips and ultralight overnights.",
  price: 190,
  colors: [ 'Pixel', 'Reflection' ],
  sizes: [ '30 L' ],
  weight: '',
  color_families: [ 'Gray', 'Blue' ]
} )
p42.photos.attach(make_photo_url(backpacks_url,"pbackpacks8-1.jpg"))
p42.photos.attach(make_photo_url(backpacks_url,"pbackpacks8-2.jpg"))
p43 = Product.create( {
  brand: "Arc'teryx",
  name: "Aerios 30 Pack - Men's",
  category_id: 2,
  description: "Sometimes you're done in a day, and sometimes you extend the adventure. Luckily for you, the men's Arc'teryx Aerios 30 pack goes with you either way. It's sized just right for a bit of spontaneity.", 
  price: 190,
  colors: [ 'Pixel', 'Glade' ],
  sizes: [ '30 L' ],
  weight: '',
  color_families: [ 'Gray', 'Green' ]
} )
p43.photos.attach(make_photo_url(backpacks_url,"pbackpacks9-1.jpg"))
p43.photos.attach(make_photo_url(backpacks_url,"pbackpacks9-2.jpg"))

random_array = []
r4 = Review.create(reviewer_id:4, product_id:1, title:"useless in space", body:"doesnt make soy grow.", rating:"1")
while random_array.length < 300 do
  i = (1..20).to_a.sample
  j = (1..43).to_a.sample
  random_array << [i,j] if !random_array.include?([i, j]) && ([i, j] != [1,1]&& [i, j] != [2,1] && [i, j] != [3,1]&& [i, j] != [4,1]) 
end

random_array.each do |arr|
  i, j = arr
  Review.create(
    reviewer_id:i, 
    product_id:j, 
    title:Faker::TvShows::MichaelScott.quote, 
    body:Faker::TvShows::Buffy.quote, 
    rating:rand(5) + 1
  )
end

