pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'amendev/mini-projet'  
    }

    stages {
        stage('clone code') {
            steps {
                git 'https://github.com/amenmarzouk/mini-projet.git'
            }
        }
        stage('build docker image') {
            steps {
                script {
                    bat 'docker build -t %DOCKER_IMAGE%:tag .'
                }
            }
        }

        stage('push docker image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-login') {
                        bat 'docker push %DOCKER_IMAGE%:tag'
                    }
                }
            }
        }

        stage('Clean Up') {
            steps {
                bat 'docker rmi %DOCKER_IMAGE%:tag'
            }
        }
    }

    post {
        always {
            cleanWs() 
        }
    }
}
