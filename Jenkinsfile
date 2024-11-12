pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'hello-docker'  // Updated image name
        PORT = '3000'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/saisahas143/deployment-sample.git', branch: 'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build(DOCKER_IMAGE)
                }
            }
        }

        stage('Stop and Remove Existing Container') {
            steps {
                script {
                    // Check if the container is already running
                    def containerID = sh(script: "docker ps -q --filter 'publish=3000'", returnStdout: true).trim()
                    if (containerID) {
                        sh "docker stop ${containerID}"
                        sh "docker rm ${containerID}"
                    }
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Run the new Docker container
                    sh "docker run -d -p ${PORT}:${PORT} ${DOCKER_IMAGE}"
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment was successful!'
        }
        failure {
            echo 'There was an issue with the deployment.'
        }
    }
}
