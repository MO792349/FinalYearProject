import images from "./images"

const activities = [
    {
        id: 1,
        name: "Say Something Positive!",
        image: images.bopo,
        isBookmark: false,
        preview:"Saying something positive daily can help with..",
        maintext:"Be aware of negative thoughts and feelings, or the entire week, pay attention to your thoughts." ,
        maintext2:"Whenever you catch yourself thinking about or feeling anything negative, sad or stressful, label that thought 'unhappy.'",
        maintext3:"Dont worry if you have a lot of unhappy thoughts and feelings throughout the day. It's perfectly normal. Just pay attention and label them."
    },
    {
        id: 2,
        name: "Adopt affirmations—yes, really.",
        image: images.acceptance,
        isBookmark: false,
        preview: "Yep, more talking to yourself in the mirror. But seriously, it works.",
        maintext: "Plusbabygirl recommends finding a positive affirmation or two to repeat to yourself every day to remind yourself of how amazing you are. For example:",
        maintext2: "I can do anything I set my mind to.",
        maintext3: "Repeat it to yourself until you feel like a confidence ninja. Over time (and especially if you write them down), these affirmations will become your actual belief system.",
       
    },{
        id: 3,
        name: "Mirror Work",
        image: images.selfcare,
        isBookmark: false,
        preview: "All you need is a mirror (preferably a full-length mirror) and you!",
        maintext: "Mirror work is a simple and extremely effective way to begin loving your body. ",
        maintext2: "All you have to do is stand in front of the mirror and look at yourself. Take in everything. ",
        maintext3: "The best part about mirror work is that you can do it in stages, depending on how comfortable you are with your body. ",
       
    },{
        id: 4,
        name: "Have Gratitude and Appreciation",
        image: images.affirm,
        isBookmark: false,
        preview: "As with everything in life, it’s important to have gratitude and appreciation, and yes, the same goes for your body!" ,
        maintext: "Love is a higher vibrational frequency than gratitude so you must first be grateful for your body before you can love it.",
        maintext2: "Just think about how incredible your body is.",
        maintext3: "Begin to notice the little things your body can do and girl you will feel more love and confidence quickly.",

       
    },
    
]

const categories = activities

const articles = [
    {
        id: 1,
        title: "This is an article",
        image: images.bopo,
        isBookmark: false,
        category: "Saying something positive daily can help with..",
    },
    {
        id: 2,
        title: "Activity 2",
        image: images.acceptance,
        isBookmark: false,
        category: "Self Acceptance",
       
    },{
        id: 3,
        title: "Activity 3",
        image: images.selfcare,
        isBookmark: false,
        category: "Self Care",
       
    },{
        id: 4,
        title: "Activity 4",
        image: images.affirm,
        isBookmark: false,
        category: "Affirmations",

       
    },
    
]

const topics = articles

export default {
    activities,
    categories,
    articles,
    topics,
}