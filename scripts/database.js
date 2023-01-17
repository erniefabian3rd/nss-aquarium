/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {   
            image: "https://cdn.mos.cms.futurecdn.net/4UdEs7tTKwLJbxZPUYR3hF-1200-80.jpg",
            species: "Clownfish",
            name: "Nemo",
            color: "orange/white",
            food: "invertebrates",
            location: "Red Sea",
            length: 6
        },
        {   
            image: "https://www.thesprucepets.com/thmb/aAePq5zmm8CAVBTdd4Hqer9Hp4c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-453251263-71432989c4a145ba81527f75b2e2ae46.jpg",
            species: "Flower Horn",
            name: "Rosie",
            color: "pink",
            food: "krill",
            location: "East Asia",
            length: 12
        },
        {   
            image: "https://media.istockphoto.com/id/968067914/photo/angel-fish.jpg?s=612x612&w=0&k=20&c=lSQ_KPWbYuvCRF-t1LBETn74xmFq8V-WrKNSbvSX7fk=",
            species: "Saltwater Angelfish",
            name: "Michael",
            color: "blue/yellow",
            food: "algae",
            location: "Tropical Atlantic",
            length: 24
        },
        {   
            image: "https://post.healthline.com/wp-content/uploads/2020/04/Lionfish-732x549-thumbnail.jpg",
            species: "Lionfish",
            name: "Simba",
            color: "red/white",
            food: "fish",
            location: "South Pacific Ocean",
            length: 15
        },
        {   
            image: "https://tnaqua.org/app/uploads/2020/05/Electric-Eel-1-scaled-1200x0-c-default.jpg",
            species: "Electric Eel",
            name: "Electrode",
            color: "brown",
            food: "fish/crustaceans",
            location: "Amazon River",
            length: 96
        },
        {   
            image: "https://media.istockphoto.com/id/490203505/photo/beautiful-jellyfish.jpg?s=612x612&w=0&k=20&c=gYZjhxjNe0UYYT1cxtXQZW3Ze7_0VDlRYRtHMG7YHOk=",
            species: "Jellyfish",
            name: "Strawberry",
            color: "translucent pink",
            food: "algae",
            location: "Atlantic Ocean",
            length: 16
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}