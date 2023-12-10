pipeline {
    agent any
     options {
      timeout(time: 15, unit: 'SECONDS') 
  }
  tools{
        nodejs '21.4.0'
  }
    stages {
        stage('install') {
            steps {
                bat 'npm install'
            }
        }
        stage('test') {
            steps {
                bat 'npm run test'
            }
        }
        stage('build') {
            steps {
                bat 'npm run build'
            }
        }
    }
}
