// Helper function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Helper function to generate random progress
function generateRandomProgress() {
  const progress = [];
  const progressCount = getRandomNumber(6, 40);

  for (let i = 0; i < progressCount; i++) {
    const note = `Progress note ${i + 1}`;
    const done = Math.random() < 0.5; // 50% chance of being true or false
    const rate = getRandomNumber(1, 5); // Random rate between 1 and 5

    progress.unshift({ note, done, rate });
  }

  return progress;
}

// Create 15 instances of the Habit class with hard-coded data
var habits = [
  Habit(
    "Exercise",
    "Fitness",
    "Go for a run",
    30,
    undefined,
    undefined,
    undefined,
    generateRandomProgress()
  ),
  Habit(
    "Read",
    "Learning",
    "Read a book for 20 minutes",
    20,
    undefined,
    undefined,
    undefined,
    generateRandomProgress()
  ),
  Habit(
    "Meditate",
    "Mindfulness",
    "Meditate for 10 minutes",
    10,
    undefined,
    undefined,
    undefined,
    generateRandomProgress()
  ),
  Habit(
    "Learn Programming",
    "Learning",
    "Code for 1 hour",
    50,
    undefined,
    undefined,
    undefined,
    generateRandomProgress()
  ),
  Habit(
    "Drink Water",
    "Health",
    "Drink 8 glasses of water",
    60,
    undefined,
    undefined,
    undefined,
    generateRandomProgress()
  ),
  // Create more instances of the Habit class with hard-coded data
  Habit(
    "Coding Challenges",
    "Learning",
    "Solve coding challenges for 45 minutes",
    50,
    undefined,
    30,
    false,
    [
      { note: "Completed a difficult algorithm", done: true, rate: 4 },
      { note: "Practiced problem-solving techniques", done: true, rate: 5 },
      { note: "Reviewed data structures", done: true, rate: 3 },
      // ... add more progress items as needed
    ]
  ),

  Habit(
    "Mindful Breathing",
    "Mindfulness",
    "Practice mindful breathing for 10 minutes",
    10,
    undefined,
    6,
    true,
    [
      { note: "Focused on deep breaths", done: true, rate: 5 },
      { note: "Cleared the mind", done: true, rate: 4 },
      // ... add more progress items as needed
    ]
  ),

  Habit(
    "Healthy Snacking",
    "Health",
    "Eat a nutritious snack",
    15,
    undefined,
    10,
    false,
    [
      { note: "Consumed a serving of fruits", done: true, rate: 4 },
      { note: "Opted for a handful of nuts", done: true, rate: 5 },
      // ... add more progress items as needed
    ]
  ),

  Habit(
    "Artistic Sketching",
    "Hobbies",
    "Sketch for 30 minutes",
    35,
    undefined,
    25,
    true,
    [
      { note: "Drew a portrait", done: true, rate: 5 },
      { note: "Experimented with shading techniques", done: true, rate: 4 },
      // ... add more progress items as needed
    ]
  ),

  Habit(
    "Positive Affirmations",
    "Personal Development",
    "Repeat positive affirmations",
    20,
    undefined,
    12,
    false,
    [
      { note: "Affirmed self-worth and positivity", done: true, rate: 4 },
      { note: "Visualized success", done: true, rate: 5 },
      // ... add more progress items as needed
    ]
  ),
  Habit(
    "Morning Stretch",
    "Fitness",
    "Stretch for 15 minutes",
    20,
    undefined,
    12,
    true,
    [
      { note: "Focused on flexibility exercises", done: true, rate: 4 },
      { note: "Warmed up with light cardio", done: true, rate: 5 },
      // ... add more progress items as needed
    ]
  ),

  Habit(
    "Learn Photography",
    "Hobbies",
    "Study photography techniques for 30 minutes",
    40,
    undefined,
    20,
    false,
    [
      { note: "Explored composition principles", done: true, rate: 4 },
      { note: "Practiced with camera settings", done: true, rate: 5 },
      // ... add more progress items as needed
    ]
  ),

  Habit(
    "Practice Mindfulness Walk",
    "Mindfulness",
    "Take a mindful walk for 20 minutes",
    25,
    undefined,
    15,
    true,
    [
      { note: "Focused on each step", done: true, rate: 5 },
      { note: "Observed surroundings with awareness", done: true, rate: 4 },
      // ... add more progress items as needed
    ]
  ),

  Habit(
    "Healthy Cooking Challenge",
    "Health",
    "Cook a nutritious meal with a new recipe",
    35,
    undefined,
    25,
    false,
    [
      { note: "Prepared a colorful vegetable stir-fry", done: true, rate: 4 },
      { note: "Experimented with herbs and spices", done: true, rate: 5 },
      // ... add more progress items as needed
    ]
  ),

  Habit(
    "Learn a New Instrument",
    "Learning",
    "Practice a musical instrument for 30 minutes",
    30,
    undefined,
    18,
    true,
    [
      { note: "Mastered a new chord progression", done: true, rate: 5 },
      { note: "Played a favorite song", done: true, rate: 4 },
      // ... add more progress items as needed
    ]
  ),
];

// Print the generated habits
console.log(habits);
