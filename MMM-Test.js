Module.register('MMM-Test', {
    defaults: {
        header: 'Test',
        foo: 'I\'m alive!',
    },

    // 모듈이 성공적으로 로딩된 후에 실행됨
    start: function() {
        Log.log(`${this.name} is starting!`)
        this.count = 0
    },

    // 사용하는 CSS 파일 배열 반환
    getStyles: function() {
        return [
            'MMM-Test.css',
            'font-awesome.css',
        ]
    },

    // only called if the module header was configured in module config in config.js
    getHeader: function() {
        return `${this.config.header} Foo Bar`
    },

    // 화면에 표시할 DOM 반환
    getDom: function() {
        let element = document.createElement('div')
        element.className = 'myContent'
        element.innerHTML = `Hello, World! ${this.config.foo}`

        let subElement = document.createElement('p')
        subElement.innerHTML = `Count:${this.count}`
        subElement.id = 'count'
        element.appendChild(subElement)

        let icon = document.createElement('i')
		icon.className = "fas fa-stopwatch";
        subElement.prepend(icon)

        return element
    },

    // messages received from other modules and the system (NOT from your node helper)
    // payload is a notification dependent data structure
    notificationReceived: function(notification, payload, sender) {
        // if (sender) {
        //     Log.log(`${this.name} received a module notification: ${notification} from sender: ${sender.name}`)
        // } else {
        //     Log.log(`${this.name} received a module notification: ${notification}`)
        // }

        switch (notification) {
            case 'DOM_OBJECTS_CREATED':
                const timer = setInterval(() => {
                    // 화면 갱신
                    // 주의: getDom()을 바로 호출하면 안된다.
                    // this.updateDom()
                    // this.sendSocketNotification('DO_YOUR_JOB', this.count)
                    this.count++
                }, 1000)
                break
        }
    },

    // messages received from from your node helper (NOT other modules or the system)
    // payload is a notification dependent data structure, up to you to design between module and node_helper
    socketNotificationReceived: function(notification, payload) {
        Log.log(`${this.name} received a socket notification: ${notification} - Payload: ${payload}`)

        // switch(notification) {
        //     case 'I_DID':
        //         let elem = document.getElementById('COUNT')
        //         elem.innerHTML = `Count:${payload}`
        //         break
        // }
    },
})
