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
	{name: "Joey Slick", room: rooms[0]},
	{name: "Lizzy Lilac", room: rooms[1]},
	{name: "Bobby Bighead", room: rooms[3]},
	{name: "Sammy Obama", room: rooms[4]}
	])

users = User.create([
	{job: "specialist", prof_name: "Ms. Jacobs", full_name: "Nancy Jacobs", room: rooms[4], email: "e@mail.com", password: "pass"},
	{job: "specialist", prof_name: "Ms. Graham", full_name: "Lindsey Graham", room: rooms[2]},
	{job: "teacher", prof_name: "Mr. Moscow", full_name: "Leviathan Moscow", room: rooms[0]},
	{job: "teacher", prof_name: "Mr. Sky", full_name: "John Sky", room: rooms[1]}
	])



