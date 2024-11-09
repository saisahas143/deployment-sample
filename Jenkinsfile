pipeline {
    agent any

    environment {
        EC2_INSTANCE_IP = '3.91.202.99'  // Your EC2 instance's public IP
        SSH_KEY_PATH = '/c/Users/Puneeth/Desktop/practice-ec2-keypair.pem'  // Path to your private SSH key in Unix-style format
        REMOTE_DIR = '/var/www/html'  // Directory on EC2 to deploy the app
    }

    stages {
        stage('Verify Git Installation') {
            steps {
                script {
                    sh 'git --version'
                }
            }
        }

        stage('Checkout') {
            steps {
                // Clone the repository from GitHub
                git 'https://github.com/saisahas143/deployment-sample.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Example to install dependencies (adjust based on your app)
                    sh 'npm install'  // If using Node.js, adjust if necessary
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                script {
                    // Deploy code to EC2 instance (adjust based on your app's needs)
                    sh """
                    scp -i ${SSH_KEY_PATH} -r * ubuntu@${EC2_INSTANCE_IP}:${REMOTE_DIR}
                    ssh -i ${SSH_KEY_PATH} ubuntu@${EC2_INSTANCE_IP} 'sudo systemctl restart apache2'  // Adjust for Apache restart
                    """
                }
            }
        }
    }
}
