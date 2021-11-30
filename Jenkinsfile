pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'building the application'
            }
        }
        stage('Test') {
            steps {
                echo 'testing the application'
            }
        }
        stage('Deploy') {
            steps {
                echo 'deploying the application'
            }
        }
    }
    
    post {
        always {
            // will execute any stuff after all the stages are done, whether success or failure
        }

        success {
            //will only be executed on success after all the stages are done
        }

        failure {
            // will only be executed on failure after all the stages are done
        }
    }
}
