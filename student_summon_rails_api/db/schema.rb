# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170801200246) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "calls", force: :cascade do |t|
    t.string "description"
    t.datetime "time_for"
    t.bigint "specialist_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["specialist_id"], name: "index_calls_on_specialist_id"
  end

  create_table "calls_students", id: false, force: :cascade do |t|
    t.bigint "call_id", null: false
    t.bigint "student_id", null: false
  end

  create_table "responses", force: :cascade do |t|
    t.string "status"
    t.string "reason"
    t.bigint "call_id"
    t.bigint "student_id"
    t.bigint "teacher_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["call_id"], name: "index_responses_on_call_id"
    t.index ["student_id"], name: "index_responses_on_student_id"
    t.index ["teacher_id"], name: "index_responses_on_teacher_id"
  end

  create_table "rooms", force: :cascade do |t|
    t.string "name"
    t.bigint "school_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["school_id"], name: "index_rooms_on_school_id"
  end

  create_table "schools", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "students", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.bigint "room_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["room_id"], name: "index_students_on_room_id"
  end

  create_table "students_users", id: false, force: :cascade do |t|
    t.bigint "student_id", null: false
    t.bigint "user_id", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "job"
    t.string "title"
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.bigint "room_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["room_id"], name: "index_users_on_room_id"
  end

  add_foreign_key "calls", "users", column: "specialist_id"
  add_foreign_key "responses", "calls"
  add_foreign_key "responses", "students"
  add_foreign_key "responses", "users", column: "teacher_id"
  add_foreign_key "rooms", "schools"
  add_foreign_key "students", "rooms"
  add_foreign_key "users", "rooms"
end
