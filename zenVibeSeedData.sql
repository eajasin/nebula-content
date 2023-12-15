--users

-- INSERT INTO users (user_id, username, password_hash, email, original_weight, height, age, goal_weight) (good)
-- VALUES (1, 'john_doe', 'password1', 'john@example.com', 160, 180, 25, 150),
--        (2, 'alice_smith', 'password2', 'alice@example.com', 140, 165, 30, 130),
--        (3, 'bob_jackson', 'password3', 'bob@example.com', 180, 175, 28, 170),
--        (4, 'emma_watson', 'password4', 'emma@example.com', 130, 160, 22, 120),
--        (5, 'david_jones', 'password5', 'david@example.com', 170, 185, 35, 160)

--weight_data

-- INSERT INTO weight_data (user_id, weight, entry_date) (good)
-- VALUES
--     (1, 155.5, '2023-01-01'),
--     (2, 130.0, '2023-01-02'),
--     (3, 175.2, '2023-01-03'),
--     (4, 118.7, '2023-01-04'),
--     (5, 162.3, '2023-01-05')

-- --food_entries

-- INSERT INTO food_entries (user_id, food_name, calories, entry_date) (good)
-- VALUES
--     (1, 'Chicken Salad', 350, '2023-01-01'),
--     (2, 'Vegetable Stir-Fry', 250, '2023-01-02'),
--     (3, 'Grilled Salmon', 400, '2023-01-03'),
--     (4, 'Quinoa Bowl', 300, '2023-01-04'),
--     (5, 'Pasta Primavera', 450, '2023-01-05');

-- --water_intake

-- INSERT INTO water_intake (user_id, cups, entry_date) (good)
-- VALUES
--     (1, 8, '2023-01-01'),
--     (2, 6, '2023-01-02'),
--     (3, 10, '2023-01-03'),
--     (4, 5, '2023-01-04'),
--     (5, 7, '2023-01-05');

-- --exercise_entries

-- INSERT INTO exercise_entries (user_id, exercise_name, sets, reps, lift_weight, duration, entry_date) (good)
-- VALUES
--     (1, 'Bench Press', 3, 10, 150, 30, '2023-01-01'),
--     (2, 'Squats', 4, 12, 200, 45, '2023-01-02'),
--     (3, 'Deadlifts', 3, 8, 250, 40, '2023-01-03'),
--     (4, 'Bicep Curls', 3, 15, 30, 20, '2023-01-04'),
--     (5, 'Cardio - Running', null, null, null, 60, '2023-01-05');

-- --mood_tracker

-- INSERT INTO mood_tracker (user_id, emotion, intensity, entry_date) (good)
-- VALUES
--     (1, 'Happy', 4, '2023-01-01'),
--     (2, 'Sad', 3, '2023-01-02'),
--     (3, 'Angry', 5, '2023-01-03'),
--     (4, 'Tranquil', 2, '2023-01-04'),
--     (5, 'Excited', 4, '2023-01-05');

-- --reminders

-- INSERT INTO reminders (user_id, created_at, status, title, description, reminder_date) (good)
-- VALUES
--     (1, '2023-01-01 08:00:00', 'Active', 'Food Log', 'Log your meals for today', '2023-01-10'),
--     (2, '2023-01-02 10:30:00', 'Active', 'Weight Check-In', 'Weigh yourself and record the weight', '2023-01-15'),
--     (3, '2023-01-03 14:45:00', 'Inactive', 'Exercise Session', 'Complete your workout routine', '2023-01-08'),
--     (4, '2023-01-04 09:15:00', 'Active', 'Food Planning', 'Plan your meals for the upcoming week', '2023-02-05'),
--     (5, '2023-01-05 16:00:00', 'Active', 'Weekly Exercise Review', 'Review and adjust your exercise routine', '2023-01-13');

