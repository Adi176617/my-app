pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        git(changelog: true, url: 'https://github.com/Adi176617/react-typescript-project', branch: 'master')
        sh 'echo "$PWD"'
      }
    }

  }
}