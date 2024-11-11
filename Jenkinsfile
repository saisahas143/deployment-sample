pipeline {
    agent any

    environment {
        EC2_INSTANCE_IP = '3.84.135.49'  // Updated EC2 instance's public IP
        SSH_KEY_PATH = '/var/lib/jenkins/.ssh/practice-ec2-keypair.pem'  // Path to SSH key on Jenkins server
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
                git branch: 'main', url: 'https://github.com/saisahas143/deployment-sample.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'No dependencies to install'
            }
        }

        stage('Deploy to EC2') {
            steps {
                script {
                    // Deploy code to EC2 instance
                    sh """
                    scp -i ${SSH_KEY_PATH} -o StrictHostKeyChecking=no -r * ubuntu@${EC2_INSTANCE_IP}:/tmp
                    ssh -i ${SSH_KEY_PATH} ubuntu@${EC2_INSTANCE_IP} 'sudo cp -r /tmp/* ${REMOTE_DIR} && sudo systemctl restart apache2'
                    """
                }
            }
        }
    }
}
