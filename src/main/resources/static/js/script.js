<script>
    const questions = {
        git: [
            "What command initializes a new Git repository?",
            "How do you create a new branch in Git?",
            "What is the difference between 'git pull' and 'git fetch'?"
        ],
        jenkins: [
            "What is a Jenkins pipeline?",
            "How do you define stages in a Jenkinsfile?",
            "What plugin is commonly used for Git integration?"
        ],
        docker: [
            "What is the purpose of a Dockerfile?",
            "How do you list running containers?",
            "What command builds a Docker image?"
        ],
        ansible: [
            "What is an Ansible playbook?",
            "How does Ansible communicate with servers?",
            "What is the difference between roles and tasks?"
        ],
        aws: [
            "What is IAM in AWS?",
            "What service allows serverless computing?",
            "What is the difference between S3 and EBS?"
        ],
        terraform: [
            "What language does Terraform use for configuration?",
            "What is the purpose of 'terraform init'?",
            "How does Terraform manage state?"
        ],
        k8s: [
            "What is a Kubernetes Pod?",
            "How does Kubernetes achieve self-healing?",
            "What is the role of kube-scheduler?"
        ]
    };

    function showQuestions(tool) {
        const quizContent = document.getElementById('quizContent');
        quizContent.innerHTML = ""; // clear old content

        if (questions[tool]) {
            quizContent.innerHTML = `
                <h3>${tool.toUpperCase()} Questions</h3>
                <ul>
                    ${questions[tool].map(q => `<li>${q}</li>`).join('')}
                </ul>
            `;
        } else {
            quizContent.innerHTML = "<p>No questions available for this tool yet.</p>";
        }
    }
</script>
