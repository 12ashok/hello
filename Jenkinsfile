pipeline {
    agent any  // Runs on any available Jenkins agent

    // Trigger build when GitHub push occurs
    triggers {
        githubPush()
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Clone the 'feature' branch from your GitHub repo
                // If repo is private, add 'credentialsId' with your Jenkins credentials
                git branch: 'feature',
                    url: 'https://github.com/12ashok/hello'
                    // credentialsId: 'your-credentials-id'  // uncomment if needed
            }
        }

        stage('Build') {
            steps {
                sh 'mvn clean package'
                // Add your build steps here (e.g., npm install, mvn build, etc.)
            }
        }

        stage('docker build') {
            steps {
                sh '''docker build -t my-app-new .'''
                    
            }
        }
        stage("cleanup"){
            steps {
                sh '''
                    if [ "$(docker ps -aq -f name=my-app-container)" ]; then
                        echo "Stopping and removing existing container..."
                        docker rm -f my-app-container
                    fi
                '''
            }
        }
        stage("run container"){
            steps {
                sh 'docker run -d -p 80:8090 --name my-app-container my-app-new'
            }
        }
    }
}

