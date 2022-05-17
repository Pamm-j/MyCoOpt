# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

u0 = User.create(email:'bobby@mars.mc', full_name:"Roberta Draper", password:"123456")
u1 = User.create(email:'bob', full_name:"Bobertta Bobberson", password:"123456")
u2 = User.create(email:'bill', full_name:"William Billerson", password:"123456")
u3 = User.create(email:'tom', full_name:"Tommy Thompson", password:"123456")