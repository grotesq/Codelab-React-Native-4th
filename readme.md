# 개발 환경 구성 (윈도우)

## 사전 확인 사항

사용자 이름 (`C:\Users\` 하위의 이름) 이 한글일 경우 개발 환경 구성 불가  
한글 사용자명일 경우 영문명으로 새로운 사용자를 추가한 후 진행

## Git 설치

cmd보다는 Git Bash 에서의 실행을 권장  
https://git-scm.com 에서 다운로드

## 터미널 우선순위

1. Git Bash
2. PowerShell (윈도우 내장)
3. cmd

## Chocolatey 설치

https://chocolatey.org 에서 설치 가이드를 따라 진행

## Node.js 설치

choco를 이용해 설치합니다.

```
choco install nodejs.install
```

choco 사용이 어려울 경우 인스톨러로 직접 설치  
https://nodejs.org

## Yarn 설치

choco를 이용해 설치합니다.

```
choco install yarn
```

choco 사용이 어려울 경우 인스톨러로 직접 설치  
https://yarnpkg.com/lang/en/docs/install/

# 개발 환경 구성 (맥)

## Homebrew 설치

https://brew.sh

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## Node.js 설치

brew를 이용해 설치

```
brew install node
```

## Yarn 설치

```
brew install yarn
```

## 맥OS 최신 버전으로 업데이트 (옵션)

최신 Xcode는 맥 최신 버전에서만 동작하므로 맥OS 최신 버전 업데이트 필요  
App Store 에서 검색 후 설치  
맥이 최신 버전이 아닐 경우 핸드폰에 Expo 앱을 깔아서 진행

## Xcode 설치 (옵션)

App Store 에서 검색 후 설치  
첫 실행 후 약관 동의 필수  
Xcode가 최신 버전이 아닐 경우 핸드폰에 Expo 앱을 깔아서 진행

# 개발 환경 구성 (공통)

## VS Code 설치

https://code.visualstudio.com

## Android Studio 설치

https://developer.android.com/studio

WebStorm이나 IntelliJ를 쓸 수 있다면 추천

## AVD 설정

컴퓨터의 가상화 기술 지원 여부에 따라 AVD는 실행되지 않을 수 있음  
실행되지 않을 경우 핸드폰에 Expo 앱을 깔아서 진행

## (옵션) 안드로이드 앱플레이어 설치

https://github.com/GrotesQ/Codelab-React-Native-2nd/blob/master/ReactNativeWithNoxPlayer.md

## Expo CLI 설치

```
yarn global add expo-cli
# or
npm i -g expo-cli
```

## 핸드폰에 Expo App 설치

앱스토어 혹은 구글플레이에서 Expo 검색해 설치
