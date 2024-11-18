pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/saisahas143/deployment-sample.git', branch: 'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image from the Dockerfile
                    sh 'docker build -t hello-docker .'
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Run the Docker container
                    sh 'docker run -d -p 8080:3000 hello-docker'

                }
            }
        }
    }

    post {
        success {
            echo 'Docker image built and container is running successfully.'
        }
        failure {
            echo 'There was an issue with the build or deployment.'
        }
    }
}
