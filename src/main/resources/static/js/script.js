const allQuestions = [
    { category: 'git', q: "What is a 'git merge'?", a: "Combining multiple sequences of commits into one unified history.", img: "/images/git.png" },
    { category: 'git', q: "Difference between 'git fetch' and 'git pull'?", a: "Fetch gets changes from remote but doesn't merge; Pull gets changes and merges immediately.", img: "/images/git.png" },
    { category: 'docker', q: "What is a Dockerfile?", a: "A text document that contains all the commands a user could call on the command line to assemble an image.", img: "/images/docker.png" },
    // ... add more questions here
];

let currentQuestions = [...allQuestions];
let currentIndex = 0;

function filterQuestions(category) {
    // 1. Filter the list
    currentQuestions = allQuestions.filter(item => item.category === category);
    currentIndex = 0;
    
    // 2. Update UI
    document.getElementById('category-title').innerText = category.toUpperCase() + " Interview";
    displayQuestion();
}

function displayQuestion() {
    const qEl = document.getElementById('question');
    const aEl = document.getElementById('answer');
    
    if (currentQuestions.length > 0) {
        qEl.innerText = currentQuestions[currentIndex].q;
        aEl.innerText = currentQuestions[currentIndex].a;
        aEl.style.display = 'none';
    } else {
        qEl.innerText = "No questions in this category yet!";
    }
}
// Keep your Show/Next button listeners but point them to displayQuestion()s