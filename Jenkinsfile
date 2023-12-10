pipeline {
    agent any  
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
                bat 'npm run test -- --watchAll --testMatch "**/src/**/*.test.js"'
            }
        }
        stage('build') {
            steps {
                bat 'npm run build'
            }
        }
    }
}
