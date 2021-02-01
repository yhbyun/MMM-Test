## Module 개발

### 요구사항

* Node.js version 10 이상
* git

### 개발 환경 구축

```sh
git clone https://github.com/MichMich/MagicMirror.git
cd MagicMirror
npm install
npm start dev
```

다음과 비슷한 화면이 출력된 다음 MagicMirror 브라우저(정확히는 electron 앱)가 실행됩니다.

```
> npm start dev

> magicmirror@2.14.0 start /Users/yhbyun/work/_working/MagicMirror
> DISPLAY="${DISPLAY:=:0}" ./node_modules/.bin/electron js/electron.js "dev"

[01.02.2021 22:54.29.722] [LOG]   Starting MagicMirror: v2.14.0
[01.02.2021 22:54.29.730] [LOG]   Loading config ...
[01.02.2021 22:54.29.733] [LOG]   Loading module helpers ...
[01.02.2021 22:54.29.734] [LOG]   No helper found for module: alert.
[01.02.2021 22:54.29.853] [LOG]   Initializing new module helper ...
[01.02.2021 22:54.29.855] [LOG]   Module helper loaded: updatenotification
[01.02.2021 22:54.29.856] [LOG]   No helper found for module: clock.
[01.02.2021 22:54.29.856] [LOG]   No helper found for module: currentweather.
[01.02.2021 22:54.29.856] [LOG]   No helper found for module: weatherforecast.
[01.02.2021 22:54.30.387] [LOG]   Initializing new module helper ...
[01.02.2021 22:54.30.387] [LOG]   Module helper loaded: newsfeed
[01.02.2021 22:54.30.389] [LOG]   Initializing new module helper ...
[01.02.2021 22:54.30.390] [LOG]   Module helper loaded: MMM-BackgroundSlideshow
[01.02.2021 22:54.30.390] [LOG]   All module helpers loaded.
[01.02.2021 22:54.30.470] [LOG]   Starting server on port 8090 ...
[01.02.2021 22:54.30.480] [LOG]   Server started ...
[01.02.2021 22:54.30.480] [LOG]   Connecting socket for: updatenotification
[01.02.2021 22:54.30.481] [LOG]   Connecting socket for: newsfeed
[01.02.2021 22:54.30.481] [LOG]   Starting node helper for: newsfeed
[01.02.2021 22:54.30.481] [LOG]   Connecting socket for: MMM-BackgroundSlideshow
[01.02.2021 22:54.30.482] [LOG]   Sockets connected & modules started ...
[01.02.2021 22:54.30.538] [LOG]   Launching application.
```

![](https://github.com/yhbyun/publisher-meetup/raw/master/images/magic-mirror-shot1.png)

현재 `config.js` 파일이 없다는 오류가 뜨고 있습니다. `config` 폴더의 `config.js.sample`을 `config.js`로
복사하시고 MagicMirror 브라우저를 새로 고침하시면 화면이 뜹니다.

![](https://github.com/yhbyun/publisher-meetup/raw/master/images/copy-config.jpg)

### 테스트 모듈 개발

폴더 구조
```
modules
└─── MMM-Test
    ├── MMM-Test.css
    ├── MMM-Test.js
    └── node_helper.js
```

테스트 모듈 clone
```sh
cd ~/MigicMirror/modules
git clone git@github.com:yhbyun/MMM-Test.git
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
* [3rd Party Modules](https://github.com/MichMich/MagicMirror/wiki/3rd-party-modules)
* [MagicMirror-Module-Template](https://github.com/roramirez/MagicMirror-Module-Template)
* [SampleModule](https://github.com/sdetweil/SampleModule)
