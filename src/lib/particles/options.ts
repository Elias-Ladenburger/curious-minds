export const options = {
    fpsLimit: 120,
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: 'grab'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 250,
                links: {
                    opacity: 0.2
                }
            }
        }
    },
    particles: {
        opacity: {
            value: 0.2
        },
        shape: {
            type: 'circle'
        },
        size: {
            value: {
                min: 1,
                max: 5
            }
        },
        color: {
            value: '#000'
        },
        collisions: {
            enable: true
        },
        move: {
            directions: 'none',
            enable: true,
            random: true,
            speed: 1,
            straight: false,
            drift: 0
        },
        number: {
            density: {
                enable: true,
                area: 800
            },
            value: 80
        },
        links: {
            color: '#000',
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1
        }
    },
    detectRetina: true,
    style: {}
};