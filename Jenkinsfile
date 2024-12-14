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
                  docker.build("${DOCKER_IMAGE}:tag")
                }
            }
        }

        stage('push docker image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-login') {
                        docker.image("${DOCKER_IMAGE}:tag").push()
                    }
                }
            }
        }

        stage('Clean Up') {
            steps {
                  script {
                docker.image("${DOCKER_IMAGE}:tag").remove()
                  }
            }
        }
    }

    post {
        always {
            cleanWs() 
        }
    }
}
