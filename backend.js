const express = require('express');
const app = express();
const port = 3000;

const indianMentalHealthResources = [
    { 
        id: 1, 
        name: "VIMHANS",
        description: "VIMHANS is a premier mental health institute located in New Delhi, India, offering a wide range of mental health services and support.",
        website: "https://www.vimhans.com/",
    },
    { 
        id: 2, 
        name: "Roshni",
        description: "Roshni is a helpline based in Hyderabad, India, offering emotional support and crisis intervention for individuals facing mental health issues.",
        website: "http://www.roshnihyd.org/",
    },
    { 
        id: 3, 
        name: "iCall",
        description: "iCall is a mental health helpline based in Mumbai, India, providing support, information, and guidance on mental health issues.",
        website: "https://www.icallhelpline.org/",
    },
];

app.get('/api/indianmentalhealthresources', (req, res) => {
    res.json(indianMentalHealthResources);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
