import images from "./images"

const activities = [
    {
        id: 1,
        name: "Activity 1",
        image: images.bopo,
        isBookmark: false,
        category: "Body Positivity",
    },
    {
        id: 2,
        name: "Activity 2",
        image: images.acceptance,
        isBookmark: false,
        category: "Self Acceptance",
       
    },{
        id: 3,
        name: "Activity 3",
        image: images.selfcare,
        isBookmark: false,
        category: "Self Care",
       
    },{
        id: 4,
        name: "Activity 4",
        image: images.affirm,
        isBookmark: false,
        category: "Affirmations",

       
    },
    
]

const categories = activities

export default {
    activities,
    categories
}