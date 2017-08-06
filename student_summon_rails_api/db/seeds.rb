# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

bpc = School.create(name: "Brooklyn Prospect Charter School")

rooms = Room.create([
	{name: "1", school: bpc},
	{name: "2", school: bpc},
	{name: "3", school: bpc},
	{name: "4", school: bpc},
	{name: "lobby", school: bpc}
	])

students = Student.create([
	{first_name: "Joey", last_name: "Slick", room: rooms[0]},
	{first_name: "Lizzy", last_name: "Lilac", room: rooms[1]},
	{first_name: "Bobby", last_name: "Bighead", room: rooms[3]},
	{first_name: "Sammy", last_name: "Obama", room: rooms[4]}
	])

users = User.create([
	{job: "specialist", title: "Ms.", first_name: "Nancy", last_name: "Jacobs", room: rooms[4]},
	{job: "specialist", title: "Ms.", first_name: "Lindey", last_name: "Graham", room: rooms[2]},
	{job: "teacher", title: "Mr.", first_name: "Lev", last_name: "Moscow", room: rooms[0]},
	{job: "teacher", title: "Mr.", first_name: "John", last_name: "Metelsky", room: rooms[1]}
	])


