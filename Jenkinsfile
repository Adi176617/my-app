pipeline {
  agent {
    dockerfile {
      filename 'true'
    }

  }
  stages {
    stage('Build') {
      steps {
        git(changelog: true, url: 'https://github.com/Adi176617/react-typescript-project', branch: 'master')
        sh 'echo "$PWD"'
      }
    }

    stage('Deploy') {
      steps {
        sh '''npm start
'''
      }
    }

  }
}