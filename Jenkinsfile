pipeline {
    agent any  
  tools{
        nodejs '21.4.0'
  }
    stages {
         stage('wait for 2 mins') {
            steps {
                sleep(time: 2, unit: 'MINUTES')
                bat 'echo "waited for 2minutes"'
            }
        }
        stage('install') {
            steps {
                bat 'npm install'
            }
        }
        stage('test') {
            steps {
                bat 'npm run test -- --testMatch "**/src/**/*.test.js"'
            }
        }
        stage('build') {
            steps {
                bat 'npm run build'
            }
        }
    }
}
