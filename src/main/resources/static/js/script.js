const questions = [
    {
        q: "What is the main advantage of Docker?",
        a: "It provides 'Isolation' and 'Consistency'. It ensures that the app runs the same way on a developer's laptop as it does on AWS EC2.",
        img: "/images/docker.png"
    },
    {
        q: "What is a Jenkins Pipeline?",
        a: "It is a suite of plugins that allows you to define your build process (Build, Test, Deploy) as Code (Jenkinsfile).",
        img: "/images/jenkins.png"
    },
    {
        q: "What is 'CI/CD'?",
        a: "Continuous Integration (automated testing) and Continuous Deployment (automated release to production).",
        img: "/images/cicd.png"
    },
    {
        q: "Explain 'Infrastructure as Code' (IaC).",
        a: "Managing and provisioning infrastructure through machine-readable definition files (like Terraform or CloudFormation) rather than manual hardware configuration.",
        img: "/images/iac.png"
    },
    {
        q: "What is the role of a Port in Docker?",
        a: "It maps the container's internal port (e.g., 8080) to the EC2 host's port so users can access the app via the IP address.",
        img: "/images/ports.png"
    },
    {
        q: "What is 'Configuration Management'?",
        a: "Automating the setup and maintenance of software on servers. Common tools include Ansible, Chef, and Puppet.",
        img: "/images/ansible.png"
    },
    {
        q: "What is a 'Blue-Green Deployment'?",
        a: "A strategy where you have two identical production environments. You only route traffic to one (Green) while updating the other (Blue) to reduce downtime.",
        img: "/images/bluegreen.png"
    },
    {
        q: "What is the difference between a Container and a VM?",
        a: "Containers share the host OS kernel and are lightweight, while VMs include a full guest OS and are much heavier.",
        img: "/images/vm-vs-container.png"
    },
    {
        q: "What is the 'Shift Left' principle?",
        a: "It means moving testing, security, and quality checks earlier in the development process to find bugs sooner.",
        img: "/images/shift-left.png"
    },
    {
        q: "What is 'Observability' in DevOps?",
        a: "The ability to measure the internal state of a system by looking at its outputs, usually through Logs, Metrics, and Traces.",
        img: "/images/monitoring.png"
    }
];
