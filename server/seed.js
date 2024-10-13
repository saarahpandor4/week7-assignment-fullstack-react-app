import { db } from "./server.js";

db.query(
  `CREATE TABLE IF NOT EXISTS posts (
id SERIAL PRIMARY KEY,
guest_name VARCHAR(255) NOT NULL,
title VARCHAR(255) NOT NULL,
description TEXT NOT NULL,
location VARCHAR(255) NOT NULL
);`
);

db.query(
  `CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
  comment_text TEXT NOT NULL,
  commenter_name VARCHAR(255) NOT NULL
);`
);

db.query(
  `INSERT INTO posts (guest_name, title, description, location)
VALUES (
    'Saarah',
    'Paris',
    'The City is known for its iconic Eiffel Tower, rich culture, art museums, and historic sites',
    'France'
  ),
  (
    'Joe',
    'The Big Apple offers towering skyscrapers, bustling streets, and attractions like Times Square.',
    'United States',
    'New York'
  ),
  (
    'Manny',
    'A futuristic metropolis known for its neon-lit skyline, historic temples, and world-class cuisine.',
    'Japan',
    'Tokyo'
  ),
  (
    'Tom',
    'Rome offers ancient history with landmarks like the Colosseum and the Vatican, and stunning architecture.',
    'Italy',
    'Rome'
  ),
  (
    'Mary',
    'A coastal city known for architectural wonders, vibrant culture, and Mediterranean beaches.',
    'Spain',
    'Barcelona'
  );`
);

db.query(
  `INSERT INTO comments (post_id, comment_text, commenter_name)
VALUES
  (1, 'Paris is amazing! I love the food and art.', 'Stan Lee'),
  (2, 'I visited New York last summer, and it was unforgettable.', 'Sam'),
  (3, 'Tokyo is a great blend of tradition and modernity!', 'Jordan');`
);
