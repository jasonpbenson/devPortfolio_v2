const aboutSelector = document.getElementById("about");
const projectSelector = document.getElementById("projects");
const contactSelector = document.getElementById("contact");
const resetButton = document.getElementById("header");

const flowerCenter1 = document.getElementById("flower--center1");
const flowerCenter2 = document.getElementById("flower--center2");
const flowerCenter3 = document.getElementById("flower--center3");

aboutSelector.addEventListener('click', (e)=>{
    // target elements for animation 
    anime({
        targets: "#flower--petals2",
        delay: 500,
        duration: 2500,
        easing: 'spring(1, 80, 10, 5)',
        fill: '#358f6e',
        scale: 1.5,
        translateX: 19,
        translateY: -80,
    })
    anime({
        targets: "#flower--center1",
        d: "M193.853,333.953c18.502,6.742,37.945,11.894,58.868,11.894c20.725,0,40.166-5.151,58.657-11.894 c42.233-15.407,76.243-46.156,95.929-86.102c11.307-23.101,19.144-48.279,19.144-75.757c0-20.05-5.262-38.707-11.462-56.546 c-16.855-48.257-52.999-86.456-100.504-104.781c-19.387-7.405-39.935-12.49-61.764-12.49c-22.018,0-42.675,5.085-61.918,12.49 c-43.482,16.756-78.675,49.561-97.166,92.026c-9.317,21.221-14.711,44.587-14.711,69.301c0,22.725,4.841,44.168,12.943,64.062 C110.105,282.005,147.199,317.043,193.853,333.953z",
        delay: 600,
        duration: 2500,
        easing: 'spring(1, 90, 8, 10)',
        fill: '#ed5a2e',
        fill: '#358f6e',
        loop: false,
        scale: 1.3,
        translateX: -56,
        translateY: -50
    })
    //reset non-target elements==============================================================
    anime({
        targets: "#flower--petals1",
        d: "M277.401,417.6c-2,0-7.376,0.826-12.171,2.156c4.331-2.453,8.713-5.662,10.125-7.08 c2.781-2.768,2.781-7.26,0.007-10.031s-7.266-2.768-10.035,0c-1.413,1.41-4.613,5.793-7.066,10.119 c1.324-4.791,2.15-10.158,2.15-12.154c0-3.92-3.176-7.096-7.093-7.096c-3.923,0-7.098,3.176-7.098,7.096 c0,1.998,0.826,7.365,2.155,12.156c-2.453-4.328-5.66-8.707-7.072-10.121c-2.776-2.768-7.267-2.768-10.041,0 c-2.762,2.771-2.762,7.264,0,10.039c1.419,1.41,5.801,4.617,10.131,7.068c-4.795-1.326-10.17-2.154-12.164-2.154 c-3.917,0-7.091,3.178-7.091,7.098c0,3.916,3.174,7.092,7.091,7.096c1.994,0,7.362-0.83,12.164-2.156 c-4.336,2.453-8.712,5.66-10.131,7.07c-2.762,2.77-2.774,7.266,0,10.041c2.774,2.768,7.266,2.764,10.041-0.004 c1.407-1.412,4.619-5.805,7.072-10.139c-1.329,4.795-2.155,10.176-2.155,12.178c0,3.92,3.175,7.096,7.098,7.096 c3.917,0,7.093-3.176,7.093-7.096c0-1.998-0.826-7.369-2.155-12.164c2.451,4.33,5.658,8.711,7.079,10.125 c2.762,2.771,7.26,2.771,10.027,0.004c2.775-2.775,2.775-7.268,0-10.039c-1.406-1.412-5.795-4.619-10.125-7.072 c4.796,1.326,10.164,2.156,12.165,2.152c3.915,0,7.098-3.176,7.098-7.092C284.5,420.775,281.317,417.6,277.401,417.6z M260.714,428.125c-0.942,1.91-2.568,3.381-4.587,4.117c-0.885,0.322-1.815,0.568-2.809,0.568c-1,0-1.929-0.246-2.812-0.568 c-2.233-0.811-4.008-2.484-4.879-4.678c-0.388-0.953-0.619-1.979-0.619-3.066c0-1.18,0.259-2.297,0.703-3.314 c0.885-2.029,2.568-3.6,4.647-4.4c0.921-0.355,1.909-0.596,2.961-0.596c1.046,0,2.027,0.24,2.955,0.596 c2.271,0.875,4.001,2.705,4.807,5.012c0.298,0.854,0.549,1.744,0.549,2.703C261.63,425.814,261.255,427.018,260.714,428.125z",
        duration: 2500,
        easing: "spring(1, 80, 10, 0)",
        fill: '#ab9d68',
        scale: 1,
        translateX: 0,
        translateY: 0,
    })
    anime({
        targets: "#flower--petals3",
        d: "M374.247,416.045c-2,0-7.376,0.826-12.171,2.156c4.331-2.453,8.713-5.662,10.125-7.08 c2.781-2.768,2.781-7.26,0.007-10.031s-7.266-2.768-10.035,0c-1.413,1.41-4.613,5.793-7.066,10.119 c1.324-4.791,2.15-10.158,2.15-12.154c0-3.92-3.176-7.096-7.093-7.096c-3.923,0-7.098,3.176-7.098,7.096 c0,1.998,0.826,7.365,2.155,12.156c-2.453-4.328-5.66-8.707-7.072-10.121c-2.776-2.768-7.267-2.768-10.041,0 c-2.762,2.771-2.762,7.264,0,10.039c1.419,1.41,5.801,4.617,10.131,7.068c-4.795-1.326-10.17-2.154-12.164-2.154 c-3.917,0-7.091,3.178-7.091,7.098c0,3.916,3.174,7.092,7.091,7.096c1.994,0,7.362-0.83,12.164-2.156 c-4.336,2.453-8.712,5.66-10.131,7.07c-2.762,2.77-2.774,7.266,0,10.041c2.774,2.768,7.266,2.764,10.041-0.004 c1.407-1.412,4.619-5.805,7.072-10.139c-1.329,4.795-2.155,10.176-2.155,12.178c0,3.92,3.175,7.096,7.098,7.096 c3.917,0,7.093-3.176,7.093-7.096c0-1.998-0.826-7.369-2.155-12.164c2.451,4.33,5.658,8.711,7.079,10.125 c2.762,2.771,7.26,2.771,10.027,0.004c2.775-2.775,2.775-7.268,0-10.039c-1.406-1.412-5.795-4.619-10.125-7.072 c4.796,1.326,10.164,2.156,12.165,2.152c3.915,0,7.098-3.176,7.098-7.092C381.346,419.221,378.163,416.045,374.247,416.045z M357.56,426.57c-0.942,1.91-2.568,3.381-4.587,4.117c-0.885,0.322-1.815,0.568-2.809,0.568c-1,0-1.929-0.246-2.812-0.568 c-2.233-0.811-4.008-2.484-4.879-4.678c-0.388-0.953-0.619-1.979-0.619-3.066c0-1.18,0.259-2.297,0.703-3.314 c0.885-2.029,2.568-3.6,4.647-4.4c0.921-0.355,1.909-0.596,2.961-0.596c1.046,0,2.027,0.24,2.955,0.596 c2.271,0.875,4.001,2.705,4.807,5.012c0.298,0.854,0.549,1.744,0.549,2.703C358.476,424.26,358.101,425.463,357.56,426.57z",
        duration: 2500,
        easing: "spring(1, 80, 10, 0)",
        fill: '#ab9d68',
        scale: 1,
        translateX: 0,
        translateY: 0,
    })
    anime({
        targets: "#flower--center2",
        d: "M250.721,431.847c0.816,0.298,1.676,0.525,2.6,0.525c0.916,0,1.775-0.228,2.592-0.525 c1.865-0.681,3.368-2.039,4.238-3.804c0.499-1.021,0.846-2.133,0.846-3.347c0-0.886-0.232-1.71-0.507-2.498 c-0.745-2.132-2.341-3.819-4.44-4.629c-0.855-0.327-1.764-0.552-2.729-0.552c-0.973,0-1.885,0.225-2.734,0.552 c-1.921,0.74-3.476,2.189-4.293,4.065c-0.412,0.938-0.65,1.97-0.65,3.062c0,1.004,0.214,1.951,0.572,2.83 C247.021,429.552,248.659,431.1,250.721,431.847z",
        duration: 2500,
        easing: "spring(1, 80, 10, 0)",
        fill: '#ed5a2e',
        scale: 1,
        translateX: 0,
        translateY: 0,
    })
    anime({
        targets: "#flower--center3",
        d: "M347.566,430.292c0.817,0.298,1.676,0.525,2.601,0.525c0.915,0,1.774-0.228,2.591-0.525 c1.866-0.681,3.369-2.039,4.238-3.804c0.5-1.021,0.846-2.133,0.846-3.347c0-0.886-0.232-1.71-0.506-2.498 c-0.745-2.132-2.342-3.819-4.44-4.629c-0.856-0.327-1.765-0.552-2.729-0.552c-0.973,0-1.886,0.225-2.735,0.552 c-1.921,0.74-3.476,2.189-4.293,4.065c-0.411,0.938-0.649,1.97-0.649,3.062c0,1.004,0.214,1.951,0.571,2.83 C343.867,427.997,345.506,429.545,347.566,430.292z",
        duration: 2500,
        easing: "spring(1, 80, 10, 0)",
        fill: '#ed5a2e',
        scale: 1,
        translateX: 0,
        translateY: 0,
    })
})

projectSelector.addEventListener('click', (e)=>{
    // target elements for animation 
    anime({
        targets: "#flower--petals1",
        delay: 500,
        duration: 2500,
        easing: 'spring(1, 100, 10, 5)',
        fill: '#358f6e',
        scale: 1.5,
        translateX: -84,
        translateY: -80,
    })
    anime({
        targets: "#flower--center2",
        d: "M193.853,333.953c18.502,6.742,37.945,11.894,58.868,11.894c20.725,0,40.166-5.151,58.657-11.894 c42.233-15.407,76.243-46.156,95.929-86.102c11.307-23.101,19.144-48.279,19.144-75.757c0-20.05-5.262-38.707-11.462-56.546 c-16.855-48.257-52.999-86.456-100.504-104.781c-19.387-7.405-39.935-12.49-61.764-12.49c-22.018,0-42.675,5.085-61.918,12.49 c-43.482,16.756-78.675,49.561-97.166,92.026c-9.317,21.221-14.711,44.587-14.711,69.301c0,22.725,4.841,44.168,12.943,64.062 C110.105,282.005,147.199,317.043,193.853,333.953z",
        delay: 600,
        duration: 2500,
        easing: 'spring(1, 90, 8, 10)',
        fill: '#ed5a2e',
        fill: '#358f6e',
        loop: false,
        scale: 1.3,
        translateX: -56,
        translateY: -50,
    })
    //reset non-target elements==============================================================
    anime({
        targets: "#flower--petals2",
        d: "M173.216,417.725c-2,0-7.376,0.826-12.171,2.156c4.331-2.453,8.713-5.662,10.125-7.08 c2.781-2.768,2.781-7.26,0.007-10.031s-7.266-2.768-10.035,0c-1.413,1.41-4.613,5.793-7.066,10.119 c1.324-4.791,2.15-10.158,2.15-12.154c0-3.92-3.176-7.096-7.093-7.096c-3.923,0-7.098,3.176-7.098,7.096 c0,1.998,0.826,7.365,2.155,12.156c-2.453-4.328-5.66-8.707-7.072-10.121c-2.776-2.768-7.267-2.768-10.041,0 c-2.762,2.771-2.762,7.264,0,10.039c1.419,1.41,5.801,4.617,10.131,7.068c-4.795-1.326-10.17-2.154-12.164-2.154 c-3.917,0-7.091,3.178-7.091,7.098c0,3.916,3.174,7.092,7.091,7.096c1.994,0,7.362-0.83,12.164-2.156 c-4.336,2.453-8.712,5.66-10.131,7.07c-2.762,2.77-2.774,7.266,0,10.041c2.774,2.768,7.266,2.764,10.041-0.004 c1.407-1.412,4.619-5.805,7.072-10.139c-1.329,4.795-2.155,10.176-2.155,12.178c0,3.92,3.175,7.096,7.098,7.096 c3.917,0,7.093-3.176,7.093-7.096c0-1.998-0.826-7.369-2.155-12.164c2.451,4.33,5.658,8.711,7.079,10.125 c2.762,2.771,7.26,2.771,10.027,0.004c2.775-2.775,2.775-7.268,0-10.039c-1.406-1.412-5.795-4.619-10.125-7.072 c4.796,1.326,10.164,2.156,12.165,2.152c3.915,0,7.098-3.176,7.098-7.092C180.315,420.9,177.132,417.725,173.216,417.725z M156.529,428.25c-0.942,1.91-2.568,3.381-4.587,4.117c-0.885,0.322-1.815,0.568-2.809,0.568c-1,0-1.929-0.246-2.812-0.568 c-2.233-0.811-4.008-2.484-4.879-4.678c-0.388-0.953-0.619-1.979-0.619-3.066c0-1.18,0.259-2.297,0.703-3.314 c0.885-2.029,2.568-3.6,4.647-4.4c0.921-0.355,1.909-0.596,2.961-0.596c1.046,0,2.027,0.24,2.955,0.596 c2.271,0.875,4.001,2.705,4.807,5.012c0.298,0.854,0.549,1.744,0.549,2.703C157.445,425.939,157.07,427.143,156.529,428.25z",
        duration: 2500,
        easing: 'spring(1, 80, 10, 0)',
        fill: '#ab9d68',
        scale: 1,
        translateX: 0,
        translateY: 0,
    })
    anime({
        targets: "#flower--petals3",
        d: "M374.247,416.045c-2,0-7.376,0.826-12.171,2.156c4.331-2.453,8.713-5.662,10.125-7.08 c2.781-2.768,2.781-7.26,0.007-10.031s-7.266-2.768-10.035,0c-1.413,1.41-4.613,5.793-7.066,10.119 c1.324-4.791,2.15-10.158,2.15-12.154c0-3.92-3.176-7.096-7.093-7.096c-3.923,0-7.098,3.176-7.098,7.096 c0,1.998,0.826,7.365,2.155,12.156c-2.453-4.328-5.66-8.707-7.072-10.121c-2.776-2.768-7.267-2.768-10.041,0 c-2.762,2.771-2.762,7.264,0,10.039c1.419,1.41,5.801,4.617,10.131,7.068c-4.795-1.326-10.17-2.154-12.164-2.154 c-3.917,0-7.091,3.178-7.091,7.098c0,3.916,3.174,7.092,7.091,7.096c1.994,0,7.362-0.83,12.164-2.156 c-4.336,2.453-8.712,5.66-10.131,7.07c-2.762,2.77-2.774,7.266,0,10.041c2.774,2.768,7.266,2.764,10.041-0.004 c1.407-1.412,4.619-5.805,7.072-10.139c-1.329,4.795-2.155,10.176-2.155,12.178c0,3.92,3.175,7.096,7.098,7.096 c3.917,0,7.093-3.176,7.093-7.096c0-1.998-0.826-7.369-2.155-12.164c2.451,4.33,5.658,8.711,7.079,10.125 c2.762,2.771,7.26,2.771,10.027,0.004c2.775-2.775,2.775-7.268,0-10.039c-1.406-1.412-5.795-4.619-10.125-7.072 c4.796,1.326,10.164,2.156,12.165,2.152c3.915,0,7.098-3.176,7.098-7.092C381.346,419.221,378.163,416.045,374.247,416.045z M357.56,426.57c-0.942,1.91-2.568,3.381-4.587,4.117c-0.885,0.322-1.815,0.568-2.809,0.568c-1,0-1.929-0.246-2.812-0.568 c-2.233-0.811-4.008-2.484-4.879-4.678c-0.388-0.953-0.619-1.979-0.619-3.066c0-1.18,0.259-2.297,0.703-3.314 c0.885-2.029,2.568-3.6,4.647-4.4c0.921-0.355,1.909-0.596,2.961-0.596c1.046,0,2.027,0.24,2.955,0.596 c2.271,0.875,4.001,2.705,4.807,5.012c0.298,0.854,0.549,1.744,0.549,2.703C358.476,424.26,358.101,425.463,357.56,426.57z",
        duration: 2500,
        easing: "spring(1, 80, 10, 0)",
        scale: 1,
        translateX: 0,
        translateY: 0,
    })
    anime({
        targets: "#flower--center1",
        d: "M146.535,431.972c0.817,0.298,1.676,0.525,2.601,0.525c0.916,0,1.774-0.228,2.591-0.525 c1.866-0.681,3.368-2.039,4.238-3.804c0.5-1.021,0.846-2.133,0.846-3.347c0-0.886-0.232-1.71-0.506-2.498 c-0.745-2.132-2.341-3.819-4.44-4.629c-0.856-0.327-1.764-0.552-2.729-0.552c-0.973,0-1.885,0.225-2.735,0.552 c-1.921,0.74-3.476,2.189-4.292,4.065c-0.412,0.938-0.65,1.97-0.65,3.062c0,1.004,0.214,1.951,0.572,2.83 C142.835,429.677,144.474,431.225,146.535,431.972z",
        duration: 2500,
        easing: "spring(1, 80, 10, 0)",
        fill: '#ed5a2e',
        scale: 1,
        translateX: 0,
        translateY: 0,
    })
    anime({
        targets: "#flower--center3",
        d: "M347.566,430.292c0.817,0.298,1.676,0.525,2.601,0.525c0.915,0,1.774-0.228,2.591-0.525 c1.866-0.681,3.369-2.039,4.238-3.804c0.5-1.021,0.846-2.133,0.846-3.347c0-0.886-0.232-1.71-0.506-2.498 c-0.745-2.132-2.342-3.819-4.44-4.629c-0.856-0.327-1.765-0.552-2.729-0.552c-0.973,0-1.886,0.225-2.735,0.552 c-1.921,0.74-3.476,2.189-4.293,4.065c-0.411,0.938-0.649,1.97-0.649,3.062c0,1.004,0.214,1.951,0.571,2.83 C343.867,427.997,345.506,429.545,347.566,430.292z",
        duration: 2500,
        easing: "spring(1, 80, 10, 0)",
        fill: '#ed5a2e',
        scale: 1,
        translateX: 0,
        translateY: 0,
    })
})

resetButton.addEventListener('click', (e)=>{
    //reset all elements to starting position
    //petal vectors
    anime({
        targets: "#flower--petals1",
        d: "M277.401,417.6c-2,0-7.376,0.826-12.171,2.156c4.331-2.453,8.713-5.662,10.125-7.08 c2.781-2.768,2.781-7.26,0.007-10.031s-7.266-2.768-10.035,0c-1.413,1.41-4.613,5.793-7.066,10.119 c1.324-4.791,2.15-10.158,2.15-12.154c0-3.92-3.176-7.096-7.093-7.096c-3.923,0-7.098,3.176-7.098,7.096 c0,1.998,0.826,7.365,2.155,12.156c-2.453-4.328-5.66-8.707-7.072-10.121c-2.776-2.768-7.267-2.768-10.041,0 c-2.762,2.771-2.762,7.264,0,10.039c1.419,1.41,5.801,4.617,10.131,7.068c-4.795-1.326-10.17-2.154-12.164-2.154 c-3.917,0-7.091,3.178-7.091,7.098c0,3.916,3.174,7.092,7.091,7.096c1.994,0,7.362-0.83,12.164-2.156 c-4.336,2.453-8.712,5.66-10.131,7.07c-2.762,2.77-2.774,7.266,0,10.041c2.774,2.768,7.266,2.764,10.041-0.004 c1.407-1.412,4.619-5.805,7.072-10.139c-1.329,4.795-2.155,10.176-2.155,12.178c0,3.92,3.175,7.096,7.098,7.096 c3.917,0,7.093-3.176,7.093-7.096c0-1.998-0.826-7.369-2.155-12.164c2.451,4.33,5.658,8.711,7.079,10.125 c2.762,2.771,7.26,2.771,10.027,0.004c2.775-2.775,2.775-7.268,0-10.039c-1.406-1.412-5.795-4.619-10.125-7.072 c4.796,1.326,10.164,2.156,12.165,2.152c3.915,0,7.098-3.176,7.098-7.092C284.5,420.775,281.317,417.6,277.401,417.6z M260.714,428.125c-0.942,1.91-2.568,3.381-4.587,4.117c-0.885,0.322-1.815,0.568-2.809,0.568c-1,0-1.929-0.246-2.812-0.568 c-2.233-0.811-4.008-2.484-4.879-4.678c-0.388-0.953-0.619-1.979-0.619-3.066c0-1.18,0.259-2.297,0.703-3.314 c0.885-2.029,2.568-3.6,4.647-4.4c0.921-0.355,1.909-0.596,2.961-0.596c1.046,0,2.027,0.24,2.955,0.596 c2.271,0.875,4.001,2.705,4.807,5.012c0.298,0.854,0.549,1.744,0.549,2.703C261.63,425.814,261.255,427.018,260.714,428.125z",
        duration: 2500,
        easing: "spring(1, 80, 10, 0)",
        fill: '#ab9d68',
        scale: 1,
        translateX: 0,
        translateY: 0,
    })
    anime({
        targets: "#flower--petals2",
        d: "M173.216,417.725c-2,0-7.376,0.826-12.171,2.156c4.331-2.453,8.713-5.662,10.125-7.08 c2.781-2.768,2.781-7.26,0.007-10.031s-7.266-2.768-10.035,0c-1.413,1.41-4.613,5.793-7.066,10.119 c1.324-4.791,2.15-10.158,2.15-12.154c0-3.92-3.176-7.096-7.093-7.096c-3.923,0-7.098,3.176-7.098,7.096 c0,1.998,0.826,7.365,2.155,12.156c-2.453-4.328-5.66-8.707-7.072-10.121c-2.776-2.768-7.267-2.768-10.041,0 c-2.762,2.771-2.762,7.264,0,10.039c1.419,1.41,5.801,4.617,10.131,7.068c-4.795-1.326-10.17-2.154-12.164-2.154 c-3.917,0-7.091,3.178-7.091,7.098c0,3.916,3.174,7.092,7.091,7.096c1.994,0,7.362-0.83,12.164-2.156 c-4.336,2.453-8.712,5.66-10.131,7.07c-2.762,2.77-2.774,7.266,0,10.041c2.774,2.768,7.266,2.764,10.041-0.004 c1.407-1.412,4.619-5.805,7.072-10.139c-1.329,4.795-2.155,10.176-2.155,12.178c0,3.92,3.175,7.096,7.098,7.096 c3.917,0,7.093-3.176,7.093-7.096c0-1.998-0.826-7.369-2.155-12.164c2.451,4.33,5.658,8.711,7.079,10.125 c2.762,2.771,7.26,2.771,10.027,0.004c2.775-2.775,2.775-7.268,0-10.039c-1.406-1.412-5.795-4.619-10.125-7.072 c4.796,1.326,10.164,2.156,12.165,2.152c3.915,0,7.098-3.176,7.098-7.092C180.315,420.9,177.132,417.725,173.216,417.725z M156.529,428.25c-0.942,1.91-2.568,3.381-4.587,4.117c-0.885,0.322-1.815,0.568-2.809,0.568c-1,0-1.929-0.246-2.812-0.568 c-2.233-0.811-4.008-2.484-4.879-4.678c-0.388-0.953-0.619-1.979-0.619-3.066c0-1.18,0.259-2.297,0.703-3.314 c0.885-2.029,2.568-3.6,4.647-4.4c0.921-0.355,1.909-0.596,2.961-0.596c1.046,0,2.027,0.24,2.955,0.596 c2.271,0.875,4.001,2.705,4.807,5.012c0.298,0.854,0.549,1.744,0.549,2.703C157.445,425.939,157.07,427.143,156.529,428.25z",
        duration: 2500,
        easing: 'spring(1, 80, 10, 0)',
        fill: '#ab9d68',
        scale: 1,
        translateX: 0,
        translateY: 0,
    })
    anime({
        targets: "#flower--petals3",
        d: "M374.247,416.045c-2,0-7.376,0.826-12.171,2.156c4.331-2.453,8.713-5.662,10.125-7.08 c2.781-2.768,2.781-7.26,0.007-10.031s-7.266-2.768-10.035,0c-1.413,1.41-4.613,5.793-7.066,10.119 c1.324-4.791,2.15-10.158,2.15-12.154c0-3.92-3.176-7.096-7.093-7.096c-3.923,0-7.098,3.176-7.098,7.096 c0,1.998,0.826,7.365,2.155,12.156c-2.453-4.328-5.66-8.707-7.072-10.121c-2.776-2.768-7.267-2.768-10.041,0 c-2.762,2.771-2.762,7.264,0,10.039c1.419,1.41,5.801,4.617,10.131,7.068c-4.795-1.326-10.17-2.154-12.164-2.154 c-3.917,0-7.091,3.178-7.091,7.098c0,3.916,3.174,7.092,7.091,7.096c1.994,0,7.362-0.83,12.164-2.156 c-4.336,2.453-8.712,5.66-10.131,7.07c-2.762,2.77-2.774,7.266,0,10.041c2.774,2.768,7.266,2.764,10.041-0.004 c1.407-1.412,4.619-5.805,7.072-10.139c-1.329,4.795-2.155,10.176-2.155,12.178c0,3.92,3.175,7.096,7.098,7.096 c3.917,0,7.093-3.176,7.093-7.096c0-1.998-0.826-7.369-2.155-12.164c2.451,4.33,5.658,8.711,7.079,10.125 c2.762,2.771,7.26,2.771,10.027,0.004c2.775-2.775,2.775-7.268,0-10.039c-1.406-1.412-5.795-4.619-10.125-7.072 c4.796,1.326,10.164,2.156,12.165,2.152c3.915,0,7.098-3.176,7.098-7.092C381.346,419.221,378.163,416.045,374.247,416.045z M357.56,426.57c-0.942,1.91-2.568,3.381-4.587,4.117c-0.885,0.322-1.815,0.568-2.809,0.568c-1,0-1.929-0.246-2.812-0.568 c-2.233-0.811-4.008-2.484-4.879-4.678c-0.388-0.953-0.619-1.979-0.619-3.066c0-1.18,0.259-2.297,0.703-3.314 c0.885-2.029,2.568-3.6,4.647-4.4c0.921-0.355,1.909-0.596,2.961-0.596c1.046,0,2.027,0.24,2.955,0.596 c2.271,0.875,4.001,2.705,4.807,5.012c0.298,0.854,0.549,1.744,0.549,2.703C358.476,424.26,358.101,425.463,357.56,426.57z",
        duration: 2500,
        easing: "spring(1, 80, 10, 0)",
        scale: 1,
        translateX: 0,
        translateY: 0,
    })

    //circle vectors==========================================================================
    anime({
        targets: "#flower--center1",
        d: "M146.535,431.972c0.817,0.298,1.676,0.525,2.601,0.525c0.916,0,1.774-0.228,2.591-0.525 c1.866-0.681,3.368-2.039,4.238-3.804c0.5-1.021,0.846-2.133,0.846-3.347c0-0.886-0.232-1.71-0.506-2.498 c-0.745-2.132-2.341-3.819-4.44-4.629c-0.856-0.327-1.764-0.552-2.729-0.552c-0.973,0-1.885,0.225-2.735,0.552 c-1.921,0.74-3.476,2.189-4.292,4.065c-0.412,0.938-0.65,1.97-0.65,3.062c0,1.004,0.214,1.951,0.572,2.83 C142.835,429.677,144.474,431.225,146.535,431.972z",
        duration: 2500,
        easing: 'spring(1, 80, 10, 5)',
        fill: '#ed5a2e',
        scale: 1,
        translateX: 0,
        translateY: 0
    })
    anime({
        targets: "#flower--center2",
        d: "M250.721,431.847c0.816,0.298,1.676,0.525,2.6,0.525c0.916,0,1.775-0.228,2.592-0.525 c1.865-0.681,3.368-2.039,4.238-3.804c0.499-1.021,0.846-2.133,0.846-3.347c0-0.886-0.232-1.71-0.507-2.498 c-0.745-2.132-2.341-3.819-4.44-4.629c-0.855-0.327-1.764-0.552-2.729-0.552c-0.973,0-1.885,0.225-2.734,0.552 c-1.921,0.74-3.476,2.189-4.293,4.065c-0.412,0.938-0.65,1.97-0.65,3.062c0,1.004,0.214,1.951,0.572,2.83 C247.021,429.552,248.659,431.1,250.721,431.847z",
        duration: 2500,
        easing: 'spring(1, 80, 10, 5)',
        fill: '#ed5a2e',
        scale: 1,
        translateX: 0,
        translateY: 0
    })
    anime({
        targets: "#flower--center3",
        d: "M347.566,430.292c0.817,0.298,1.676,0.525,2.601,0.525c0.915,0,1.774-0.228,2.591-0.525 c1.866-0.681,3.369-2.039,4.238-3.804c0.5-1.021,0.846-2.133,0.846-3.347c0-0.886-0.232-1.71-0.506-2.498 c-0.745-2.132-2.342-3.819-4.44-4.629c-0.856-0.327-1.765-0.552-2.729-0.552c-0.973,0-1.886,0.225-2.735,0.552 c-1.921,0.74-3.476,2.189-4.293,4.065c-0.411,0.938-0.649,1.97-0.649,3.062c0,1.004,0.214,1.951,0.571,2.83 C343.867,427.997,345.506,429.545,347.566,430.292z",
        duration: 2500,
        easing: 'spring(1, 80, 10, 5)',
        fill: '#ed5a2e',
        scale: 1,
        translateX: 0,
        translateY: 0
    })
})

flowerCenter1.addEventListener('click', (e)=>{
    anime({
        targets: '#flower--petals2',
        direction: 'alternate',
        duration: 200,
        easing: 'easeInOutExpo',
        fill: '#afcfde',
    })
    anime({
        targets: '#about',
        direction: 'alternate',
        duration: 200,
        easing: 'easeInOutCirc',
        scaleY: 0,
    })
})

flowerCenter2.addEventListener('click', (e)=>{
    anime({
        targets: '#flower--petals1',
        direction: 'alternate',
        duration: 200,
        easing: 'easeInOutCirc',
        fill: '#afcfde',
    })
    anime({
        targets: '#projects',
        direction: 'alternate',
        duration: 200,
        easing: 'easeInOutCirc',
        scaleY: 0,
    })
})

flowerCenter3.addEventListener('click', (e)=>{
    anime({
        targets: '#flower--petals3',
        direction: 'alternate',
        duration: 200,
        easing: 'easeInOutCirc',
        fill: '#afcfde',
    })
    anime({
        targets: '#contact',
        direction: 'alternate',
        duration: 200,
        easing: 'easeInOutCirc',
        scaleY: 0,
    })
})



