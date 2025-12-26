const questions = [
    {
        q: "What is Docker?",
        a: "A platform that uses OS-level virtualization to deliver software in packages called containers.",
        img: "/images/docker-logo.png"
    },
    {
        q: "What is Infrastructure as Code (IaC)?",
        a: "The management of infrastructure (networks, VMs, etc.) in a descriptive model, using code.",
        img: "/images/terraform-logo.png"
    },
    {
        q: "What is the difference between Continuous Delivery and Deployment?",
        a: "Delivery requires a manual trigger to production; Deployment is fully automated.",
        img: "/images/pipeline-logo.png"
    }
];

let currentIndex = 0;

const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const showBtn = document.getElementById('showBtn');
const nextBtn = document.getElementById('nextBtn');
const imgEl = document.querySelector('.profile-img');

showBtn.addEventListener('click', () => {
    answerEl.style.display = 'block';
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % questions.length;
    questionEl.innerText = questions[currentIndex].q;
    answerEl.innerText = questions[currentIndex].a;
    imgEl.src = questions[currentIndex].img;
    answerEl.style.display = 'none';
});
