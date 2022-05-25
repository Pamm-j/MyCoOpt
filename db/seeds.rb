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
  sizes: ['XS', 'S', 'M', 'L'],
  brand: 'Liv'
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
#   pcc0.photos.attach(io: open('https://www.rei.com/media/c8ce0c41-6b51-425c-8e36-2d9ddbeec7e2.jpg'), filename:'c8ce0c41-6b51-425c-8e36-2d9ddbeec7e2.jpg')
#   pcc0.photos.attach(io: open('https://www.rei.com/media/024534a6-8025-412f-8d61-02a7623eba98.jpg'), filename:'024534a6-8025-412f-8d61-02a7623eba98.jpg')


pc2 = Product.create(
  name:'Devote Advanced 1',
  category_id: c1.id,
  description: "Travel by two wheels into new terrain to satiate your true sense of adventure, plus bring all your gear for some prepared-for-anything peace of mind. Available in lightweight Advanced-Grade Composite frame and fork to meet the needs of performance and endurance riders alike. Because control is the name of the game, our OverDrive steerer creates sound and precise steering, while the D-Fuse handlebar smooths out the ride, stocked with Liv All-Condition handlebar tape to keep you connected. Select models come equipped with vibration absorbing D-Fuse seatpost, or dropper seatpost. And finally, a wheelset specifically built for all-weather performance and unpredictable terrain makes the steadfast Devote your top pick for finishing any tough ride or race.",
  price:3550.00,
  colors: ["DarkGreen", "OceanBlue"],
  sizes: ['XS', 'S', 'M', 'L'],
  brand: 'Liv'
)
pc2.photos.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/bikes/da1-1.jpeg'), filename:'da1-1.jpeg')
pc2.photos.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/bikes/da1-2.jpeg'), filename:'da1-2.jpeg')


pc3 = Product.create(
  name:'Devote Advanced Pro',
  category_id: c1.id,
  description: "Travel by two wheels into new terrain to satiate your true sense of adventure, plus bring all your gear for some prepared-for-anything peace of mind. Available in lightweight Advanced-Grade Composite frame and fork to meet the needs of performance and endurance riders alike. Because control is the name of the game, our OverDrive steerer creates sound and precise steering, while the D-Fuse handlebar smooths out the ride, stocked with Liv All-Condition handlebar tape to keep you connected. Select models come equipped with vibration absorbing D-Fuse seatpost, or dropper seatpost. And finally, a wheelset specifically built for all-weather performance and unpredictable terrain makes the steadfast Devote your top pick for finishing any tough ride or race.",
  price:6400.00,
  colors: ["Eggplant", "Mushroom"],
  sizes: ['XS', 'S', 'M', 'L'],
  brand: 'Liv'
)

pc3.photos.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/bikes/dap-2.jpeg'), filename:'dap-2.jpeg')
pc3.photos.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/bikes/dap-1.jpeg'), filename:'dap-1.jpeg')

pc4 = Product.create(
  name:'Tempt 0',
  category_id: c1.id,
  description: "With a lightweight ALUXX-Grade aluminum frame designed specifically for women, Tempt can guide you along dirt terrain with speed, efficiency and control. A front suspension fork and powerful disc brakes offer added confidence and control. This hardtail has a low standover height to give you confidence maneuvering around dirt trails and is offered in 27.5 or 29-inch wheels for optimum fit and efficiency. Perfect for a functional around-town ride, to try as your first off-road racing bike, or for venturing out onto the trails for the first time, allow Tempt to lead you to new adventures.",
  price:1380.00,
  colors: ["OceanStorm"],
  sizes: ['XS', 'S', 'M', 'L'],
  brand: 'Liv'
)

pc4.photos.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/bikes/t0-1.jpeg'), filename:'t0-2.jpeg')
pc4.photos.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/bikes/t0-2.jpeg'), filename:'t0-1.jpeg')

pc5 = Product.create(
  name:'Tempt 1',
  category_id: c1.id,
  description: "With a lightweight ALUXX-Grade aluminum frame designed specifically for women, Tempt can guide you along dirt terrain with speed, efficiency and control. A front suspension fork and powerful disc brakes offer added confidence and control. This hardtail has a low standover height to give you confidence maneuvering around dirt trails and is offered in 27.5 or 29-inch wheels for optimum fit and efficiency. Perfect for a functional around-town ride, to try as your first off-road racing bike, or for venturing out onto the trails for the first time, allow Tempt to lead you to new adventures.",
  price:980,
  colors: ["Rosewood"],
  sizes: ['XS', 'S', 'M', 'L', "XL"],
  brand: 'Liv'
)

pc5.photos.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/bikes/t1-1.jpeg'), filename:'t1-1.jpeg')
pc5.photos.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/bikes/t1-2.jpeg'), filename:'t1-2.jpeg')

pc6 = Product.create(
  name:'Tempt 2',
  category_id: c1.id,
  description: "With a lightweight ALUXX-Grade aluminum frame designed specifically for women, Tempt can guide you along dirt terrain with speed, efficiency and control. A front suspension fork and powerful disc brakes offer added confidence and control. This hardtail has a low standover height to give you confidence maneuvering around dirt trails and is offered in 27.5 or 29-inch wheels for optimum fit and efficiency. Perfect for a functional around-town ride, to try as your first off-road racing bike, or for venturing out onto the trails for the first time, allow Tempt to lead you to new adventures.",
  price:735,
  colors: ["Eclipse", "DesertSage"],
  sizes: ['XS', 'S', 'M', 'L'],
  brand: 'Liv'
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
  brand: 'Liv'
)
pc7.photos.attach(make_photo_url(bikes_url,"ppro2-1.jpg"))

pc8= Product.create(
  name:'Pique Advanced Pro 29 1',
  category_id: c1.id,
  description: "ATTACK THE COURSE WITH SPEED AND EFFICIENCY ON THE PIQUE ADVANCED PRO 29. THE STIFF, LIGHT, FULL-SUSPENSION XC BIKE IS READY TO SET PRS AND SNAG PODIUM STEPS.",
  price:6350,
  colors: ["DarkBlue", "Carbon"],
  sizes: ['XS', 'S', 'M'],
  brand: 'Liv'
)
pc8.photos.attach(make_photo_url(bikes_url,"ppro1-1.jpg"))
pc8.photos.attach(make_photo_url(bikes_url,"ppro1-2.jpg"))

# pc9= Product.create(
#   brand: 'Giro',
#   name: 'Giro Fixture MIPS Bike Helmet ',
#   category_id: c1.id,
#   description: "The dirt is calling. Giro Fixture MIPS bike helmet brings confident mountain bike style and breezy ventilation together in a compact design made for nearly any ride, from fire roads to singletrack.",
#   price: 70,
#   colors: ["MatteBlack", "MatteGrey", "MatteTrimBlue", "MatteWarmBlack", "MatteTrimRed" ],
#   sizes: ['onesize'],
#   weight: 0.6, 
#   color_families: ['Black', 'Grey', 'Blue', 'Red']
#  )
# #  IMG URL1:https://www.rei.com/media/d80c5e42-4c0d-4fb1-99ed-50a3c7e86172?size=784x588 
# #  IMG URL 2: https://www.rei.com/media/7af570a9-fbc4-407f-89fd-fa9813c536ed?size=784x588 

# ci1 = CartItem.create!(
#   quantity: 1,
#   product_id: pc8.id,
#   shopper_id: u0.id,cl
#   size: 'L',
#   color: 'DarkBlue',
#   delivery_type: 'delivery'
# )

# ci1 = CartItem.create!(
#   quantity: 1,
#   product_id: pc1.id,
#   shopper_id: u0.id,
#   size: 'L',
#   color: 'Rosewood',
#   delivery_type: 'delivery'
# )

# r1 = Review.create(
#   reviewer_id:u0.id, 
#   product_id:pc1.id, 
#   title:"It takes me places", 
#   body:"would buy again", 
#   rating:"5"
# )
# r1 = Review.create(reviewer_id:u1.id, product_id:pc1.id, title:"best form of travel for the appocolapys", body:"Me and Peaches both had one", rating:"5")
# r1 = Review.create(reviewer_id:u3.id, product_id:pc1.id, title:"useless in space", body:"Was given it as a joke, haha guys. do not buy, they do not take returns. 52% satisfaction guarantee seems like a stretch", rating:"1")
# r={reviewer_id:3, product_id:1, title:"useless in space", body:"doesnt make soy grow.", rating:"1"}

# pcc0 =Product.create( {
#   brand: 'Co-op Cycles',
#   name: 'DRT 1.1 Bike',
#   category_id: 1,
#   description: 'Made for off-road adventures, the Co-op Cycles DRT 1.1 bike features a versatile 3 x 7 drivetrain and the solid stopping power of hydraulic disc brakes, giving new riders the right amount of control.',
#   price: 599,
#   colors: [ 'Ether', 'PirateBlack' ],
#   sizes: [ 'XXS', 'XXL' ],
#   weight: '',
#   color_families: [ 'Blue', 'Black' ]
# } )
# require 'open-uri'
# pcc0.photos.attach(io: open('https://www.rei.com/media/c8ce0c41-6b51-425c-8e36-2d9ddbeec7e2.jpg'), filename:'c8ce0c41-6b51-425c-8e36-2d9ddbeec7e2.jpg')
# pcc0.photos.attach(io: open('https://www.rei.com/media/024534a6-8025-412f-8d61-02a7623eba98.jpg'), filename:'024534a6-8025-412f-8d61-02a7623eba98.jpg')


# file1 = open('https://www.rei.com/media/c8ce0c41-6b51-425c-8e36-2d9ddbeec7e2.jpg')

# demo_user.avatar.attach(io: file, filename: 'some_file.jpg')



# pc4.photos.attach(io: open('https://my-co-opt-seed.s3.us-west-1.amazonaws.com/bikes/t0-1.jpeg'), filename:'t0-2.jpeg')

# "Backpacking", "Casual", "Mountaineering", "Car Camping", "Day Hikes"

# ph1= Product.create(
#   brand: 'Vasque',
#    name:'Vasque Breeze LT NTX Mid Hiking Boots - Women',
#    category_id: c3.id,
#    description: "Light on your feet and on the planet, the women's Vasque Breeze LT NTX Mid hiking boots feature recycled mesh and recycled waterproof membranes that keep you moving in comfort on any terrain.",
#    price:180,
#    colors: ["BungeeCord"],
#    sizes: ['6', '7', '8','9', '10', '11'],
#    weight:1.5, 
#    best_uses: ['Backpacking',"Mountaineering" ]
#  )
 
#  ph2= Product.create(
#   brand: 'Gregory',
#    name: "Gregory Kalmia 60 Pack - Women's",
#    category_id: c3.id,
#    description: "Go the distance on the trail while staying comfortable and organized. The women's Gregory Kalmia 60 pack elevates your backpacking experience with the customized fit and support to keep on trekking.",
#    price:299.95,
#    colors: ["BordeauxRed","EquinoxGrey"],
#    sizes: ['xs/s', 's/m'],
#    weight:4.5, 
#    best_uses: ['Backpacking',"Mountaineering" ]
#  )
 
 


#  ph4= Product.create(
#   brand: 'Osprey',
#    Name: "Osprey Talon 6 Waistpack - Men's",
#    category_id: c3.id,
#    description: "Made for minimalist day hikers, trail runners and anyone who needs to carry essentials without extra bulk, the Osprey Talon 6 waistpack has room for 2 water bottles, a rain jacket and lots of snacks.",
#    Price: 80,
#    colors: ["CeramicBlue"],
#    sizes: ['One Size'],
#    Weight: 0.8, 
#    best_uses: ['hiking']
#  )
#  IMG URL1:https://www.rei.com/media/60cc8edb-3d9c-4084-a35b-32911afe041c?size=784x588 
#  IMG URL 2: https://www.rei.com/media/ddc1de2c-479b-4d15-9946-400bb4212e40?size=784x588 
 
 
#  ph5= Product.create(
#   brand: 'Kuhl',
#    Name: "KUHL Freeflex Roll-Up Pants - Women's 32-inch Inseam",
#    category_id: c3.id,
#    description: "The women's KUHL Freeflex roll-up pants convert from pants to capris in a jiffy and feature plentiful stretch, sun-stopping protection and sweat-wicking performance.",
#    Price: 89,
#    colors: ["Bordeaux","Flint","Koal","Rainstorm","Sage"],
#    sizes: ['0', '2', '4', '6', '8', '10', '12', '24', '26'],
#    Weight: 0.3
#    best_uses: ['Hiking', 'Backpacking', "Mountaineering"]
#  )
#  IMG URL1:https://www.rei.com/media/d88d4e22-317a-4f9d-aa21-206e0aca3aad?size=576x768 
#  IMG URL 2: https://www.rei.com/media/a7b59988-edeb-484d-a77d-d8a9e8dd14de?size=576x768 
 
#  ph6= Product.create(
#   brand: 'Kelty',
#    Name: 'Kelty Catena 30 Sleeping Bag',
#    category_id: c3.id,
#    description: "Practical, affordable and just right for any casual or first-time camper, the Kelty Catena 30 sleeping bag meets all your basic camping needs with the warmth of cozy CloudLoft insulation.",
#    Price: 59.95,
#    colors: ["Elm/Reflectingpond","PoseyGreen/Grisaille"],
#    sizes: ['regular'],
#    Weight: 4
#    best_uses: ['Camping']
#  )
#  IMG URL1: https://www.rei.com/media/e9e3793e-4371-4287-9631-84f228acfb7d?size=784x588 
#  IMG URL 2: https://www.rei.com/media/56f5cfef-9623-4e33-b21a-1d9f46dc3894?size=784x588  
 
#  ph7= Product.create(
#   brand: 'Black Diamond',
#    Name: "Black Diamond Trail Trekking Poles - Pair - Women's",
#    category_id: c3.id,
#    description: "Combining dual FlickLock adjustability, comfortable foam grips and excellent value, the women-specific Black Diamond Trail trekking poles meet all your hiking and backpacking needs.",
#    Price: 109.95,
#    colors: ["AlpineLake","Flint","Koal","Rainstorm","Sage"],
#    sizes: ['OneSize'],
#    Weight: 1
#    best_uses: ['Hiking']
#  )
#  IMG URL1: https://www.rei.com/media/8065ed35-7b65-4ccc-b3c7-1a7665314757?size=784x588 
#  IMG URL 2: https://www.rei.com/media/c888375a-0661-402a-8163-15fced7dbaa9?size=784x588 
 
#  ph8= Product.create(
#   brand: 'The North Face',
#    Name: 'The North Face Wawona 6 Tent',
#    category_id: c3.id,
#    description: "Named after an iconic redwood, the refreshed The North Face Wawona 6 tent has gone from single- to double-wall construction. Plus, its huge vestibule makes it feel less like a tent, more like a home.",
#    Price: 475,
#    colors: ["AgaveGreen/asphaltGrey","ExuberanceOrange/tan/green"],
#    sizes: ['OneSize'],
#    Weight: 21
#    best_uses: ['camping']
#  )
#  IMG URL1: https://www.rei.com/media/2f9c8c47-299b-4a4c-aa05-b10fbf303691?size=784x588 
#  IMG URL 2: https://www.rei.com/media/f3a80569-7a24-4665-b0ec-19dba560553a?size=784x588 
 