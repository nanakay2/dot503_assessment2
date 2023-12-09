pipeline {
    agent any
     options {
      timeout(time: 15, unit: 'SECONDS') 
  }
  tools{
        nodejs 'nodejs'
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
