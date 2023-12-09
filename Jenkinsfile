pipeline {
    agent any
     options {
      timeout(time: 15, unit: 'SECONDS') 
  }
    stages {
        stage('wait for 2mins') {
            steps {
                bat 'echo "Hello World"'
            }
        }
        stage('install') {
            steps {
                bat 'set'
            }
        }
        stage('test') {
            steps {
                bat 'set'
            }
        }
        stage('build') {
            steps {
                bat 'set'
            }
        }
    }
}
