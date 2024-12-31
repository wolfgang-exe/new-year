const container = document.querySelector('.fireworks')
const fireworks = new Fireworks.default(container, {
    acceleration: 1.0,
    gravity: 1.5,
    particles: 100,
    traceLength: 2,
    traceSpeed: 4,
    explosion: 10,
    intensity: 20,
    flickering: 200,
})
fireworks.start()