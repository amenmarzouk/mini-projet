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
                  docker.build("${DOCKER_IMAGE}:v1")
                }
            }
        }

        stage('push docker image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-login') {
                        docker.image("${DOCKER_IMAGE}:v1").push()
                    }
                }
            }
        }
    stage('deploy docker container') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-login') {
                        def docker_image = docker.image("${DOCKER_IMAGE}:v1")
                        docker_image.run('--name mini-projet -p 8020:8020')
                    }
                }
            }
        }
    }
    post {
        success {
            echo 'successful'
        }
        failure {
            echo 'failed'
        }
    }
}
