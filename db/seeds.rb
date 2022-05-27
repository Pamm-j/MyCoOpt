# require 'open-uri'

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

u0 = User.create(
  email:'bobby@mars.mc', 
  full_name:"Roberta Draper", 
  password:"123456", 
  address_1:"14 Innis Deep", 
  address_2:"LondresNova, Mars MA432"
)
u1 = User.create(
  email:'amos@rocinante.roci',
  full_name:"Amos Burton", 
  password:"123456",
  address_1:"Dont Ask", 
  address_2:"Baltimore, Maryland 21201"
)
u2 = User.create(
  email:'prax@soyfarmers.gn', 
  full_name:"Praxidike Meng", 
  password:"123456", 
  address_1:"Soy Fields", 
  address_2:"Djuna, Ganymede GA12"
)
u3 = User.create(
  email:'president@transportunion.bt', 
  full_name:"Camina Drummer", 
  password:"123456", 
  address_1:"Apt 12, Corridor 1, Level 1", 
  address_2:"Taicho Station"
)


c1 = Category.create(title:"Cycle", description:"From e-bikes to mountain bikes, and bikepacking to gravel grinding, co-opt members can save more getting geared up for any terrain.")
c2 = Category.create(title:"Travel", description:"Every epic adventure starts with packing and planning. We've got everything you need to make that a joy and a breeze.")
c3 = Category.create(title:"Hike", description:"From overlanding to day camping, the co-op can get you the right gear to get you out there in no time.")
c4 = Category.create(title:"Camp", description:"From overlanding to day camping, the co-op can get you the right gear to get you out there in no time.")
c1.photo.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/cat-spash/two-bikes.jpg'), filename:'two-bikes.jpg')
c2.photo.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/cat-spash/boat-bag.jpg'), filename:'boat-bag.jpg')
c3.photo.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/cat-spash/sleep-roraima.jpg'), filename:'sleep-roraima.jpg')
c4.photo.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/cat-spash/sleep-roraima.jpg'), filename:'sleep-roraima.jpg')

bikes_url = "https://my-co-opt-seed.s3.us-west-1.amazonaws.com/bikes/"
def make_photo_url(url_path, filename)
  {io: open(url_path+filename), filename:filename}
end

pc1 = Product.create(
  name:'Devote Advanced 2',
  category_id: c1.id,
  description: "Travel by two wheels into new terrain to satiate your true sense of adventure, plus bring all your gear for some prepared-for-anything peace of mind. Available in lightweight Advanced-Grade Composite frame and fork to meet the needs of performance and endurance riders alike. Because control is the name of the game, our OverDrive steerer creates sound and precise steering, while the D-Fuse handlebar smooths out the ride, stocked with Liv All-Condition handlebar tape to keep you connected. Select models come equipped with vibration absorbing D-Fuse seatpost, or dropper seatpost. And finally, a wheelset specifically built for all-weather performance and unpredictable terrain makes the steadfast Devote your top pick for finishing any tough ride or race.",
  price:2700.00,
  colors: ["Rosewood", "Mint"],
  sizes: [ 'M', 'L'],
  brand: 'Liv', 
  color_families: ['Green', 'Red']
)
pc1.photos.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/bikes/da2-1.jpeg'), filename:'da2-1.jpeg')
pc1.photos.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/bikes/da2-2.webp'), filename:'da2-2.webp')
# pcc0 =Product.create( {
#     brand: 'Co-op Cycles',
#     name: 'DRT 1.1 Bike',
#     category_id: 1,
#     description: 'Made for off-road adventures, the Co-op Cycles DRT 1.1 bike features a versatile 3 x 7 drivetrain and the solid stopping power of hydraulic disc brakes, giving new riders the right amount of control.',
#     price: 599,
#     colors: [ 'Ether', 'PirateBlack' ],
#     sizes: [ 'XXS', 'XXL' ],
#     weight: '',
#     color_families: [ 'Blue', 'Black' ]
#   } )
#   # require 'open-uri'
  # pcc0.photos.attach(io: open('https://www.rei.com/media/c8ce0c41-6b51-425c-8e36-2d9ddbeec7e2.jpg'), filename:'c8ce0c41-6b51-425c-8e36-2d9ddbeec7e2.jpg')
#   pcc0.photos.attach(io: open('https://www.rei.com/media/024534a6-8025-412f-8d61-02a7623eba98.jpg'), filename:'024534a6-8025-412f-8d61-02a7623eba98.jpg')


pc2 = Product.create(
  name:'Devote Advanced 1',
  category_id: c1.id,
  description: "Travel by two wheels into new terrain to satiate your true sense of adventure, plus bring all your gear for some prepared-for-anything peace of mind. Available in lightweight Advanced-Grade Composite frame and fork to meet the needs of performance and endurance riders alike. Because control is the name of the game, our OverDrive steerer creates sound and precise steering, while the D-Fuse handlebar smooths out the ride, stocked with Liv All-Condition handlebar tape to keep you connected. Select models come equipped with vibration absorbing D-Fuse seatpost, or dropper seatpost. And finally, a wheelset specifically built for all-weather performance and unpredictable terrain makes the steadfast Devote your top pick for finishing any tough ride or race.",
  price:3550.00,
  colors: ["DarkGreen", "OceanBlue"],
  sizes: ['XS', 'S'],
  brand: 'Liv', 
  color_families: ['Green', 'Blue']
)
pc2.photos.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/bikes/da1-1.jpeg'), filename:'da1-1.jpeg')
pc2.photos.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/bikes/da1-2.jpeg'), filename:'da1-2.jpeg')


pc3 = Product.create(
  name:'Devote Advanced Pro',
  category_id: c1.id,
  description: "Travel by two wheels into new terrain to satiate your true sense of adventure, plus bring all your gear for some prepared-for-anything peace of mind. Available in lightweight Advanced-Grade Composite frame and fork to meet the needs of performance and endurance riders alike. Because control is the name of the game, our OverDrive steerer creates sound and precise steering, while the D-Fuse handlebar smooths out the ride, stocked with Liv All-Condition handlebar tape to keep you connected. Select models come equipped with vibration absorbing D-Fuse seatpost, or dropper seatpost. And finally, a wheelset specifically built for all-weather performance and unpredictable terrain makes the steadfast Devote your top pick for finishing any tough ride or race.",
  price:6400.00,
  colors: ["Eggplant", "Mushroom"],
  sizes: [ 'M', 'L'],
  brand: 'Liv',
  color_families: ['Brown', 'Purple']
)

pc3.photos.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/bikes/dap-2.jpeg'), filename:'dap-2.jpeg')
pc3.photos.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/bikes/dap-1.jpeg'), filename:'dap-1.jpeg')

pc4 = Product.create(
  name:'Tempt 0',
  category_id: c1.id,
  description: "With a lightweight ALUXX-Grade aluminum frame designed specifically for women, Tempt can guide you along dirt terrain with speed, efficiency and control. A front suspension fork and powerful disc brakes offer added confidence and control. This hardtail has a low standover height to give you confidence maneuvering around dirt trails and is offered in 27.5 or 29-inch wheels for optimum fit and efficiency. Perfect for a functional around-town ride, to try as your first off-road racing bike, or for venturing out onto the trails for the first time, allow Tempt to lead you to new adventures.",
  price:1380.00,
  colors: ["OceanStorm"],
  sizes: ['XS'],
  brand: 'Liv',
  color_families: ['Blue']
)

pc4.photos.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/bikes/t0-1.jpeg'), filename:'t0-2.jpeg')
pc4.photos.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/bikes/t0-2.jpeg'), filename:'t0-1.jpeg')

pc5 = Product.create(
  name:'Tempt 1',
  category_id: c1.id,
  description: "With a lightweight ALUXX-Grade aluminum frame designed specifically for women, Tempt can guide you along dirt terrain with speed, efficiency and control. A front suspension fork and powerful disc brakes offer added confidence and control. This hardtail has a low standover height to give you confidence maneuvering around dirt trails and is offered in 27.5 or 29-inch wheels for optimum fit and efficiency. Perfect for a functional around-town ride, to try as your first off-road racing bike, or for venturing out onto the trails for the first time, allow Tempt to lead you to new adventures.",
  price:980,
  colors: ["Rosewood", "DarkBlue"],
  sizes: ['XS', 'S', 'M', 'L', "XL"],
  brand: 'Liv', 
  color_families: ['Blue', 'Red']
)

pc5.photos.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/bikes/t1-1.jpeg'), filename:'t1-1.jpeg')
pc5.photos.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/bikes/t1-2.jpeg'), filename:'t1-2.jpeg')

pc6 = Product.create(
  name:'Tempt 2',
  category_id: c1.id,
  description: "With a lightweight ALUXX-Grade aluminum frame designed specifically for women, Tempt can guide you along dirt terrain with speed, efficiency and control. A front suspension fork and powerful disc brakes offer added confidence and control. This hardtail has a low standover height to give you confidence maneuvering around dirt trails and is offered in 27.5 or 29-inch wheels for optimum fit and efficiency. Perfect for a functional around-town ride, to try as your first off-road racing bike, or for venturing out onto the trails for the first time, allow Tempt to lead you to new adventures.",
  price:735,
  colors: ["Eclipse", "DesertSage"],
  sizes: ['XS', 'M'],
  brand: 'Liv', 
  color_families: [ 'Green', 'Blue']
)
pc6.photos.attach(make_photo_url(bikes_url,"t2-1.jpeg"))
pc6.photos.attach(make_photo_url(bikes_url,"t2-2.jpeg"))

pc7= Product.create(
  name:'Pique Advanced Pro 29 2',
  category_id: c1.id,
  description: "ATTACK THE COURSE WITH SPEED AND EFFICIENCY ON THE PIQUE ADVANCED PRO 29. THE STIFF, LIGHT, FULL-SUSPENSION XC BIKE IS READY TO SET PRS AND SNAG PODIUM STEPS.",
  price:4500,
  colors: ["DarkBlue", "FanaticTeal"],
  sizes: ['XS', 'S', 'M'],
  brand: 'Liv', 
  color_families: ['Blue']
)
pc7.photos.attach(make_photo_url(bikes_url,"ppro2-1.jpg"))

pc8= Product.create(
  name:'Pique Advanced Pro 29 1',
  category_id: c1.id,
  description: "ATTACK THE COURSE WITH SPEED AND EFFICIENCY ON THE PIQUE ADVANCED PRO 29. THE STIFF, LIGHT, FULL-SUSPENSION XC BIKE IS READY TO SET PRS AND SNAG PODIUM STEPS.",
  price:6350,
  colors: ["DarkBlue", "Carbon"],
  sizes: [ 'M'],
  brand: 'Liv', 
  color_families: ['Grey', 'Blue']
)
pc8.photos.attach(make_photo_url(bikes_url,"ppro1-1.jpg"))
pc8.photos.attach(make_photo_url(bikes_url,"ppro1-2.jpg"))

ci1 = CartItem.create!(
  quantity: 1,
  product_id: pc8.id,
  shopper_id: u0.id,
  size: 'L',
  color: 'DarkBlue',
  delivery_type: 'delivery'
)

ci1 = CartItem.create!(
  quantity: 1,
  product_id: pc1.id,
  shopper_id: u0.id,
  size: 'L',
  color: 'Rosewood',
  delivery_type: 'delivery'
)

r1 = Review.create(
  reviewer_id:u0.id, 
  product_id:pc1.id, 
  title:"It takes me places", 
  body:"would buy again", 
  rating:"5"
)
r1 = Review.create(reviewer_id:u1.id, product_id:pc1.id, title:"best form of travel for the appocolapys", body:"Me and Peaches both had one", rating:"5")
r2 = Review.create(reviewer_id:u3.id, product_id:pc1.id, title:"useless in space", body:"Was given it as a joke, haha guys. do not buy, they do not take returns. 52% satisfaction guarantee seems like a stretch", rating:"1")
r3 = {reviewer_id:3, product_id:1, title:"useless in space", body:"doesnt make soy grow.", rating:"1"}

psalsa0 = Product.create( {
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
psalsa0.photos.attach(make_photo_url(bikes_url,"psalsa0-1.jpeg"))
psalsa0.photos.attach(make_photo_url(bikes_url,"psalsa0-2.jpeg"))
psalsa1 = Product.create( {
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
psalsa1.photos.attach(make_photo_url(bikes_url,"psalsa1-1.jpeg"))
psalsa1.photos.attach(make_photo_url(bikes_url,"psalsa1-2.jpeg"))
psalsa2 = Product.create( {
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
psalsa2.photos.attach(make_photo_url(bikes_url,"psalsa2-1.jpeg"))
psalsa2.photos.attach(make_photo_url(bikes_url,"psalsa2-2.jpeg"))
psalsa3 = Product.create( {
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
psalsa3.photos.attach(make_photo_url(bikes_url,"psalsa3-1.jpeg"))
psalsa3.photos.attach(make_photo_url(bikes_url,"psalsa3-2.jpeg"))
psalsa4 = Product.create( {
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
psalsa4.photos.attach(make_photo_url(bikes_url,"psalsa4-1.jpeg"))
psalsa4.photos.attach(make_photo_url(bikes_url,"psalsa4-2.jpeg"))
psalsa5 = Product.create( {
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
psalsa5.photos.attach(make_photo_url(bikes_url,"psalsa5-1.jpeg"))
psalsa5.photos.attach(make_photo_url(bikes_url,"psalsa5-2.jpeg"))
psalsa6 = Product.create( {
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
psalsa6.photos.attach(make_photo_url(bikes_url,"psalsa6-1.jpeg"))
psalsa6.photos.attach(make_photo_url(bikes_url,"psalsa6-2.jpeg"))
psalsa7 = Product.create( {
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
psalsa7.photos.attach(make_photo_url(bikes_url,"psalsa7-1.jpeg"))
psalsa7.photos.attach(make_photo_url(bikes_url,"psalsa7-2.jpeg"))
psalsa8 = Product.create( {
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
psalsa8.photos.attach(make_photo_url(bikes_url,"psalsa8-1.jpeg"))
psalsa8.photos.attach(make_photo_url(bikes_url,"psalsa8-2.jpeg"))