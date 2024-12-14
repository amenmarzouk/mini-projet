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
    stage('deploy docker container') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-login') {
                        def docker_image = docker.image("${DOCKER_IMAGE}:tag")
                        docker_image.run('--name mini_projet -p 8000:8000')
                    }
                }
            }
        }
    }
    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}
