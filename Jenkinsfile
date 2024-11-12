pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/yourusername/your-repo.git', branch: 'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('hello-docker')
                }
            }
        }

        stage('Stop Existing Container') {
            steps {
                script {
                    // Stop and remove any running container on port 3000
                    def containerID = sh(script: "docker ps -q --filter 'publish=3000'", returnStdout: true).trim()
                    if (containerID) {
                        sh "docker stop ${containerID}"
                        sh "docker rm ${containerID}"
                    }
                }
            }
        }

        stage('Run New Docker Container') {
            steps {
                script {
                    sh "docker run -d -p 3000:3000 hello-docker"
                }
            }
        }
    }

    post {
        success {
            echo 'Build and Deployment completed successfully!'
        }
        failure {
            echo 'Build or Deployment failed.'
        }
    }
}
