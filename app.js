let app = new Vue(
    {
        el: '#vDiv', 
        data: {
            titolo: 'Hello Vue',
            classi: 'blue',
            immagine: 'Untitled-design-12-620x420.png'
        },
        methods: {
            capsLock: function(text) {
               return text.toUpperCase()
            },          
        },
    })