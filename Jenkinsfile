pipeline {
    agent any

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
                    sh 'docker run -d -p 3000:3000 hello-docker'
                }
            }
        }
    }
}
