## Module 개발

### 요구사항

* Node.js version 10 이상
* git

### 개발 환경 구축

```sh
git clone git@github.com:MichMich/MagicMirror.git
cd MagicMirror
npm install
npm start dev
```

### 테스트 모듈 개발

폴더 구조
```
modules
└─── MMM-Test
    ├── MMM-Test.css
    ├── MMM-Test.js
    └── node_helper.js
```

modules 폴더 밑에 `MMM-Test` 폴더와 그 폴더에 `MMM-Test.js` 파일 생성
```sh
cd ~/MigicMirror/modules
mkdir MMM-Test
cd MMM-Test
touch MMM-Test.js
```

모듈 배치 `~/MagicMirror/config/config.js`

```js
modules: [
    {
        module: "MMM-Test",
        position: "top_left",
        config: {}
    },
]
```

`position` : top_bar, top_left, top_center, top_right, upper_third, middle_center, lower_third, bottom_left, bottom_center, bottom_right, bottom_bar, fullscreen_above, and fullscreen_below

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FPdydg%2FbtqNDo1l1kg%2F3XqpwK85RbV2jNDtDeJyYK%2Fimg.jpg)

`MMM-Test.js` 수정
```js
Module.register('MMM-Test', {
    defaults: {},
    init: function() {},
    start: function() {},
    loaded: function(callback) {},
    suspend: function() {},
    resume: function() {},
    getScripts: function() { return [] },
    getStyles: function() { return [] },
    getHeader: function() {},
    getDom: function() {},
    notificationReceived: function() {},
    socketNotificationReceived: function() {},
})
```

### Reference

* [Head first developing MM module for extreme beginners](https://forum.magicmirror.builders/topic/8534/head-first-developing-mm-module-for-extreme-beginners)
* [SampleModule](https://github.com/sdetweil/SampleModule)
