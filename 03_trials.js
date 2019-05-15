// In this file you can specify the trial data for your experiment


const trial_info = {
    forced_choice: [
        {
            question: "What's on the bread?",
            picture: "images/question_mark_02.png",
            option1: 'jam',
            option2: 'ham'
        },
        {
            question: "What's the weather like?",
            picture: "images/weather.jpg",
            option1: "shiny",
            option2: "rainbow"
        }
    ],
    keyPress: [
        {
            question: "Is it the same object?",
            picture: "mental_rotation_images/7_150_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            number_of_picture: 7,
            degree: 150,
            expected: "same"
        },
        {
            question: "Is it the same object?",
            picture: "mental_rotation_images/4_50_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            number_of_picture: 4,
            degree: 50,
            expected: "same"
        },
        {
            question: "Is it the same object?",
            picture: "mental_rotation_images/12_50_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            number_of_picture: 12,
            degree: 50,
            expected: "different"
        },
        {
            question: "Is it the same object?",
            picture: "mental_rotation_images/13_150_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            number_of_picture: 13,
            degree: 150,
            expected: "same"
        },
        {
            question: "Is it the same object?",
            picture: "mental_rotation_images/1_50_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            number_of_picture: 1,
            degree: 50,
            expected: "different"
        }
    ]
};
