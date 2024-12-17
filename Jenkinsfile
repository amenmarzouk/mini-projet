pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'amendev/mini-projet'  
        VERSION_TAG = 'v1'
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
                  docker.build("${DOCKER_IMAGE}:${VERSION_TAG}")
                }
            }
        }

        stage('push docker image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-login') {
                        docker.image("${DOCKER_IMAGE}:${VERSION_TAG}").push()
                    }
                }
            }
        }
    stage('deploy docker container') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-login') {
                        def docker_image = docker.image("${DOCKER_IMAGE}:${VERSION_TAG}")
                        docker_image.run('--name mini-projet -p 8020:8020')
                    }
                }
            }
        }
    }
}
